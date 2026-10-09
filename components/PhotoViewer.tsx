"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, RotateCcw, ZoomIn, ZoomOut, Camera, Copy } from "lucide-react";
import { ZONES, TIER_PRICE } from "@/lib/zones";
import { PHOTO_VIEWS, PHOTOS_PENDING, DEFAULT_VIEW, type PhotoView } from "@/lib/photos";

const TIER_FILL: Record<string, string> = {
  Title: "#B8321D",
  Feature: "#C8C8CF",
  Detail: "#7A7A84",
};

type LogoTransform = { x: number; y: number; w: number; rot: number; skew: number };

/**
 * Schematic line-art of the GT 650 + rider kit (same drawing language as the
 * lot map), cropped per view. Used ONLY as the labelled placeholder while the
 * real photographs are pending — it never pretends to be a photograph.
 */
function SchematicPlate({ view }: { view: PhotoView }) {
  const { x, y, w, h } = view.crop;
  return (
    <svg viewBox={`${x} ${y} ${w} ${h}`} className="h-full w-full" role="img" aria-hidden>
      <defs>
        <radialGradient id="plateGlow" cx="50%" cy="42%" r="75%">
          <stop offset="0%" stopColor="#17171C" />
          <stop offset="100%" stopColor="#0C0C0F" />
        </radialGradient>
      </defs>
      <rect x={x} y={y} width={w} height={h} fill="url(#plateGlow)" />
      <line x1={x} y1={y + h * 0.88} x2={x + w} y2={y + h * 0.88} stroke="#26262B" strokeWidth="2" />
      <g>
        <circle cx="170" cy="290" r="56" fill="#101013" stroke="#3A3A42" strokeWidth="10" />
        <circle cx="170" cy="290" r="30" fill="none" stroke="#9A9AA2" strokeWidth="2" />
        <circle cx="590" cy="290" r="56" fill="#101013" stroke="#3A3A42" strokeWidth="10" />
        <circle cx="590" cy="290" r="30" fill="none" stroke="#9A9AA2" strokeWidth="2" />
      </g>
      <path d="M 112 258 A 62 62 0 0 1 228 258" fill="none" stroke="#9A9AA2" strokeWidth="5" strokeLinecap="round" />
      <line x1="170" y1="290" x2="252" y2="168" stroke="#9A9AA2" strokeWidth="9" strokeLinecap="round" />
      <line x1="252" y1="168" x2="216" y2="138" stroke="#C8C8CF" strokeWidth="4" strokeLinecap="round" />
      <path d="M 240 158 L 292 172 L 268 196 L 236 182 Z" fill="#16161A" stroke="#9A9AA2" strokeWidth="2" />
      <path d="M 312 208 C 330 176 428 172 462 202 L 458 244 L 316 244 Z" fill="#16161A" stroke="#C8C8CF" strokeWidth="2.5" />
      <rect x="348" y="244" width="86" height="58" rx="8" fill="#121216" stroke="#3A3A42" strokeWidth="2.5" />
      <path d="M 434 288 C 520 296 560 300 648 312" fill="none" stroke="#9A9AA2" strokeWidth="7" strokeLinecap="round" />
      <path d="M 462 206 L 540 202 C 572 202 588 216 582 236 L 536 232 Z" fill="#16161A" stroke="#9A9AA2" strokeWidth="2.5" />
      <rect x="474" y="234" width="58" height="26" rx="5" fill="#121216" stroke="#3A3A42" strokeWidth="2" />
      <line x1="590" y1="290" x2="502" y2="252" stroke="#9A9AA2" strokeWidth="7" strokeLinecap="round" />
      <rect x="626" y="196" width="56" height="60" rx="6" fill="#16161A" stroke="#9A9AA2" strokeWidth="2.5" />
      <circle cx="495" cy="90" r="40" fill="#16161A" stroke="#C8C8CF" strokeWidth="2.5" />
      <path d="M 508 78 A 26 26 0 0 1 508 100" fill="none" stroke="#B8321D" strokeWidth="3" />
      <path d="M 470 126 C 452 158 452 192 468 204 L 520 204 C 534 188 530 138 518 122 Z" fill="#16161A" stroke="#9A9AA2" strokeWidth="2.5" />
    </svg>
  );
}

export default function PhotoViewer({
  selected,
  logoUrl,
  logoAll,
  onSelect,
}: {
  selected: string;
  logoUrl: string | null;
  logoAll: boolean;
  onSelect: (id: string) => void;
}) {
  const [viewId, setViewId] = useState(DEFAULT_VIEW);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [imgLoaded, setImgLoaded] = useState(false);
  const [calib, setCalib] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [overlay, setOverlay] = useState<Record<string, LogoTransform>>({});
  const stageRef = useRef<HTMLDivElement | null>(null);
  const drag = useRef<{ mode: "pan" | "logo" | null; sx: number; sy: number; ox: number; oy: number } | null>(null);

  const view = PHOTO_VIEWS.find((v) => v.id === viewId)!;
  const isCalibrate =
    typeof window !== "undefined" && new URLSearchParams(window.location.search).has("calibrate");

  useEffect(() => {
    // map-click sync: jump to the first view that contains the lot
    const onZone = (e: Event) => {
      const d = (e as CustomEvent<{ id: string; src?: string }>).detail;
      if (!d || d.src === "showroom-photo" || !d.id) return;
      const v = PHOTO_VIEWS.find((pv) => pv.hotspots.some((h) => h.id === d.id)) || PHOTO_VIEWS[0];
      setViewId(v.id);
    };
    window.addEventListener("cm-zone", onZone as EventListener);
    return () => window.removeEventListener("cm-zone", onZone as EventListener);
  }, []);

  useEffect(() => {
    setImgLoaded(false);
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setOverlay({});
  }, [viewId]);

  const clampZoom = useCallback((z: number) => Math.min(3, Math.max(1, z)), []);

  const onWheel = (e: React.WheelEvent) => {
    if (!e.ctrlKey && !e.metaKey && Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
    e.preventDefault();
    setZoom((z) => clampZoom(z - e.deltaY * 0.0018));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const target = e.target as HTMLElement;
    if (target.dataset.logoHandle) {
      drag.current = { mode: "logo", sx: e.clientX, sy: e.clientY, ox: 0, oy: 0 };
      return;
    }
    drag.current = { mode: "pan", sx: e.clientX, sy: e.clientY, ox: pan.x, oy: pan.y };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d) return;
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    if (d.mode === "pan") {
      setPan({ x: d.ox + (e.clientX - d.sx), y: d.oy + (e.clientY - d.sy) });
    } else if (d.mode === "logo") {
      const def = view.placements.find((p) => p.id === selected);
      if (!def) return;
      const cur = overlay[selected] ?? def;
      const nx = Math.min(100, Math.max(0, cur.x + ((e.clientX - d.sx) / rect.width) * 100));
      const ny = Math.min(100, Math.max(0, cur.y + ((e.clientY - d.sy) / rect.height) * 100));
      setOverlay((o) => ({ ...o, [selected]: { ...cur, x: nx, y: ny } }));
    }
  };

  const onPointerUp = () => {
    drag.current = null;
  };

  const onCalibrateClick = (e: React.MouseEvent) => {
    if (!isCalibrate) return;
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCalib(`x: ${x.toFixed(1)}, y: ${y.toFixed(1)}`);
    setCopied(false);
  };

  const cur = overlay[selected] ?? view.placements.find((p) => p.id === selected);
  const showLogo = logoUrl && (logoAll || view.placements.some((p) => p.id === selected));
  const zone = ZONES.find((z) => z.id === selected)!;

  const resetOverlay = () =>
    setOverlay((o) => {
      const n = { ...o };
      delete n[selected];
      return n;
    });

  return (
    <div className="flex flex-col gap-4">
      {/* ---------------- STAGE ---------------- */}
      <div
        ref={stageRef}
        onWheel={onWheel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onClick={onCalibrateClick}
        className={`photo-stage relative aspect-[16/10] touch-none select-none overflow-hidden rounded-lg border border-night-line bg-night sheen ${
          isCalibrate ? "cursor-crosshair" : "cursor-grab active:cursor-grabbing"
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={viewId + (view.src ?? "pending")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: "center",
            }}
          >
            {view.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={view.src}
                alt={`Royal Enfield Continental GT 650 Mr. Clean — ${view.label}`}
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgLoaded(false)}
                draggable={false}
                className={`h-full w-full object-cover transition-opacity duration-500 ${
                  imgLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            ) : (
              <SchematicPlate view={view} />
            )}

            {/* hotspots */}
            {view.hotspots.map((h) => {
              const z = ZONES.find((x) => x.id === h.id)!;
              const active = selected === h.id;
              return (
                <button
                  key={h.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect(h.id);
                  }}
                  aria-label={`Select lot ${h.id} ${z.name}`}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${h.x}%`, top: `${h.y}%` }}
                >
                  <span
                    className={`zone-pulse absolute inset-0 rounded-full ${active ? "" : "opacity-70"}`}
                    aria-hidden
                    style={{ boxShadow: `0 0 0 2px ${TIER_FILL[z.tier]}` }}
                  />
                  <span
                    className={`relative flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold transition-transform duration-150 group-hover:scale-110 ${
                      active ? "ring-2 ring-bone" : ""
                    }`}
                    style={{ background: TIER_FILL[z.tier], color: "#0A0A0B" }}
                  >
                    {h.id}
                  </span>
                  <span className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-night/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-bone opacity-0 transition-opacity group-hover:opacity-100">
                    {z.name}
                  </span>
                </button>
              );
            })}

            {/* logo overlay */}
            {showLogo && cur && (
              <div
                data-logo-handle="1"
                className="absolute cursor-move"
                style={{
                  left: `${cur.x}%`,
                  top: `${cur.y}%`,
                  width: `${cur.w}%`,
                  transform: `translate(-50%, -50%) rotate(${cur.rot}deg) skewX(${cur.skew}deg)`,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logoUrl!}
                  alt="Your logo — concept placement preview"
                  draggable={false}
                  className="pointer-events-none w-full opacity-90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
                />
                <span className="absolute -top-2 -right-2 rounded-full bg-accent px-1 text-[9px] font-bold leading-4 text-bone">
                  ✦
                </span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* pending-photographs banner */}
        {PHOTOS_PENDING && (
          <div className="pointer-events-none absolute left-3 top-3 z-10 flex items-center gap-2 rounded-md border border-dashed border-bone-muted/50 bg-night/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-bone-muted backdrop-blur">
            <Camera size={12} className="text-accent" aria-hidden />
            Concept imagery — photographs of the actual machine are pending
          </div>
        )}

        {/* zoom hint */}
        <div className="pointer-events-none absolute bottom-3 right-3 z-10 rounded bg-night/70 px-2 py-1 text-[10px] uppercase tracking-wider text-bone-muted/80">
          drag to pan · ctrl+scroll to zoom
        </div>

        {/* calibrate readout */}
        {isCalibrate && (
          <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2 rounded-md border border-accent/50 bg-night/90 px-3 py-1.5 text-xs font-mono text-bone">
            <span className="text-accent">CALIBRATE:</span>
            {calib ?? "click the image…"}
            {calib && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigator.clipboard?.writeText(calib);
                  setCopied(true);
                }}
                className="ml-1 inline-flex items-center gap-1 rounded border border-night-line px-1.5 py-0.5 text-[10px] text-bone-muted hover:text-bone"
              >
                <Copy size={10} aria-hidden /> {copied ? "copied" : "copy"}
              </button>
            )}
          </div>
        )}
      </div>

      {/* ---------------- VIEW CHIPS ---------------- */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {PHOTO_VIEWS.map((v) => (
          <button
            key={v.id}
            onClick={() => setViewId(v.id)}
            title={v.hint}
            className={`shrink-0 rounded-md border px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
              viewId === v.id
                ? "border-accent/60 bg-accent/10 text-bone"
                : "border-night-line text-bone-muted hover:border-bone-muted/40 hover:text-bone"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      {/* ---------------- ADJUST + META ---------------- */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setZoom((z) => clampZoom(z + 0.25))}
            aria-label="Zoom in"
            className="rounded-md border border-night-line p-2 text-bone-muted transition-colors hover:border-bone-muted/40 hover:text-bone"
          >
            <ZoomIn size={14} aria-hidden />
          </button>
          <button
            onClick={() => setZoom((z) => clampZoom(z - 0.25))}
            aria-label="Zoom out"
            className="rounded-md border border-night-line p-2 text-bone-muted transition-colors hover:border-bone-muted/40 hover:text-bone"
          >
            <ZoomOut size={14} aria-hidden />
          </button>
          <button
            onClick={() => {
              setZoom(1);
              setPan({ x: 0, y: 0 });
            }}
            className="inline-flex items-center gap-1.5 rounded-md border border-night-line px-3 py-2 text-xs font-semibold text-bone-muted transition-colors hover:border-bone-muted/40 hover:text-bone"
          >
            <RotateCcw size={12} aria-hidden /> Reset view
          </button>
          {cur && (
            <button
              onClick={resetOverlay}
              className="inline-flex items-center gap-1.5 rounded-md border border-night-line px-3 py-2 text-xs font-semibold text-bone-muted transition-colors hover:border-bone-muted/40 hover:text-bone"
            >
              <MapPin size={12} aria-hidden /> Reset logo spot
            </button>
          )}
        </div>
        <p className="text-xs text-bone-muted">
          <span className="font-semibold uppercase tracking-wider text-steel">{view.label}</span>
          {" · "}
          {view.hint}
          {PHOTOS_PENDING ? "" : " · actual machine"}
        </p>
      </div>

      {/* logo size / rotation sliders */}
      {showLogo && cur && (
        <div className="grid gap-3 rounded-lg border border-night-line bg-night-soft/50 p-4 sm:grid-cols-3">
          <label className="text-xs font-semibold uppercase tracking-wider text-bone-muted">
            Size
            <input
              type="range"
              min={6}
              max={30}
              value={cur.w}
              onChange={(e) =>
                setOverlay((o) => ({ ...o, [selected]: { ...cur, w: Number(e.target.value) } }))
              }
              className="mt-2 w-full accent-[#B8321D]"
            />
          </label>
          <label className="text-xs font-semibold uppercase tracking-wider text-bone-muted">
            Rotate
            <input
              type="range"
              min={-45}
              max={45}
              value={cur.rot}
              onChange={(e) =>
                setOverlay((o) => ({ ...o, [selected]: { ...cur, rot: Number(e.target.value) } }))
              }
              className="mt-2 w-full accent-[#B8321D]"
            />
          </label>
          <label className="text-xs font-semibold uppercase tracking-wider text-bone-muted">
            Perspective
            <input
              type="range"
              min={-25}
              max={25}
              value={cur.skew}
              onChange={(e) =>
                setOverlay((o) => ({ ...o, [selected]: { ...cur, skew: Number(e.target.value) } }))
              }
              className="mt-2 w-full accent-[#B8321D]"
            />
          </label>
        </div>
      )}

      {/* lots visible in this view */}
      <div className="flex flex-wrap items-center gap-2 text-xs text-bone-muted">
        <span className="font-semibold uppercase tracking-wider text-steel">In this shot:</span>
        {view.hotspots.map((h) => {
          const z = ZONES.find((x) => x.id === h.id)!;
          return (
            <button
              key={h.id}
              onClick={() => onSelect(h.id)}
              className={`rounded border px-2 py-1 transition-colors ${
                selected === h.id
                  ? "border-accent/60 text-bone"
                  : "border-night-line hover:border-bone-muted/40 hover:text-bone"
              }`}
            >
              <span className="font-semibold text-accent">{h.id}</span> {z.name}
            </button>
          );
        })}
      </div>

      <p className="text-xs font-semibold uppercase tracking-wider text-bone-muted/80">
        Concept preview — not to scale. Photographs {PHOTOS_PENDING ? "are pending" : "of the actual machine"}; final
        placement subject to physical measurement, material compatibility, safety and required
        approvals. Lot {selected} ({zone.name}) opens at ₹{TIER_PRICE[zone.tier].toLocaleString("en-IN")}.
      </p>
    </div>
  );
}
