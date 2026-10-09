"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import React from "react";
import { ZONES, TIER_PRICE } from "@/lib/zones";
import { PHOTOS_PENDING } from "@/lib/photos";
import Reveal from "@/components/Reveal";
import PhotoViewer from "@/components/PhotoViewer";
import { Upload, MapPin, Maximize, RotateCw, Pause, Play, ZoomIn, ZoomOut, Camera, Box } from "lucide-react";

type SceneState = { s: "waiting" | "loading" | "loaded" | "error" | "timeout"; msg?: string };

function useSceneState(): SceneState {
  const [state, setState] = useState<SceneState>({ s: "waiting" });
  useEffect(() => {
    const h = (e: Event) => {
      const d = (e as CustomEvent).detail as { status: string; message?: string };
      if (d.status === "loading") setState({ s: "loading" });
      else if (d.status === "loaded") setState({ s: "loaded" });
      else if (d.status === "error") setState({ s: "error", msg: d.message });
    };
    window.addEventListener("cy-bike-status", h);
    const t = window.setTimeout(() => {
      setState((cur) =>
        cur.s === "waiting" || cur.s === "loading" ? { s: "timeout" } : cur
      );
    }, 15000);
    return () => {
      window.removeEventListener("cy-bike-status", h);
      window.clearTimeout(t);
    };
  }, []);
  return state;
}

class SceneErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { failed: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { failed: false };
  }
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed) return this.props.fallback;
    return this.props.children;
  }
}

const Lot3DScene = dynamic(() => import("@/components/Lot3DScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[520px] items-center justify-center text-sm text-bone-muted sm:h-[600px] lg:h-[660px]">
      Loading the concept spin…
    </div>
  ),
});

const PREVIEWABLE = ["T1", "F3", "D1", "D2", "D3"];

export default function Showroom() {
  const [mode, setMode] = useState<"photo" | "3d">("photo");
  const [selected, setSelected] = useState("T1");
  const [nearView, setNearView] = useState(false);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const photoStageBox = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setNearView(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [logoAll, setLogoAll] = useState(false);
  const [view, setView] = useState("hero");
  const [spinning, setSpinning] = useState(true);
  const [zoomCmd, setZoomCmd] = useState<{ n: number; dir: 1 | -1 }>({ n: 0, dir: 1 });
  const [showMarkers, setShowMarkers] = useState(true);
  const [isFull, setIsFull] = useState(false);
  const sceneState = useSceneState();

  useEffect(() => {
    const onZone = (e: Event) => {
      const d = (e as CustomEvent<{ id: string; src?: string }>).detail;
      if (!d || d.src !== "map" || !d.id) return;
      setSelected(d.id);
      setSpinning(false);
      photoStageBox.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    window.addEventListener("cm-zone", onZone as EventListener);
    const onFs = () => setIsFull(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFs);
    return () => {
      window.removeEventListener("cm-zone", onZone as EventListener);
      document.removeEventListener("fullscreenchange", onFs);
    };
  }, []);

  const selectZone = (id: string) => {
    setSelected(id);
    window.dispatchEvent(new CustomEvent("cm-zone", { detail: { id, src: "showroom" } }));
  };

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f && /^image\/(png|jpeg|svg\+xml)$/.test(f.type)) {
      setLogoUrl((old) => {
        if (old) URL.revokeObjectURL(old);
        return URL.createObjectURL(f);
      });
    }
  };

  const zone = ZONES.find((z) => z.id === selected)!;
  const threeDFailed = sceneState.s === "error" || sceneState.s === "timeout";

  const fallbackPanel = (
    <div className="fallback-glow relative flex h-[520px] flex-col items-center justify-center gap-3 rounded-lg border border-night-line bg-night px-6 text-center sm:h-[600px] lg:h-[660px]">
      <MapPin size={28} className="text-accent" aria-hidden />
      <p className="font-display text-3xl tracking-wide chrome-text">
        LOT {zone.id} — {zone.name.toUpperCase()}
      </p>
      <p className="max-w-sm text-sm text-bone-muted">
        The live 3D spin isn&apos;t available on this device — the photo showroom and lot
        map show every placement and exact size. Nothing about your bid changes.
      </p>
      <a
        href="#how"
        className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-bone transition-transform duration-150 hover:-translate-y-0.5 hover:bg-accent-hover"
      >
        How bidding works
      </a>
    </div>
  );

  return (
    <section id="machine" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-widest2 text-steel">
          The machine — live preview
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-wide chrome-text sm:text-5xl">
          SEE YOUR MARK <span className="chrome-text">BEFORE YOU BID</span>
        </h2>
        <p className="mt-4 max-w-xl text-bone-muted">
          Upload your logo, open the machine shot by shot, and place your mark on the
          exact surface you&apos;re bidding on. {PHOTOS_PENDING
            ? "Photographs of the actual machine are being taken; clearly-labelled concept plates stand in until they land."
            : "Every shot is of the actual machine, Mr. Clean."}
        </p>
      </Reveal>

      {/* mode tabs */}
      <div className="mt-8 flex gap-2" role="tablist" aria-label="Showroom mode">
        <button
          role="tab"
          aria-selected={mode === "photo"}
          onClick={() => setMode("photo")}
          className={`inline-flex items-center gap-2 rounded-md border px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
            mode === "photo"
              ? "border-accent/60 bg-accent/10 text-bone"
              : "border-night-line text-bone-muted hover:border-bone-muted/40 hover:text-bone"
          }`}
        >
          <Camera size={14} aria-hidden />
          The machine — photographs
          {PHOTOS_PENDING && (
            <span className="rounded-sm border border-dashed border-bone-muted/50 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-bone-muted">
              PENDING
            </span>
          )}
        </button>
        <button
          role="tab"
          aria-selected={mode === "3d"}
          onClick={() => setMode("3d")}
          className={`inline-flex items-center gap-2 rounded-md border px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
            mode === "3d"
              ? "border-accent/60 bg-accent/10 text-bone"
              : "border-night-line text-bone-muted hover:border-bone-muted/40 hover:text-bone"
          }`}
        >
          <Box size={14} aria-hidden />
          3D concept spin
        </button>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2" ref={photoStageBox}>
          {mode === "photo" ? (
            <PhotoViewer
              selected={selected}
              logoUrl={logoUrl}
              logoAll={logoAll}
              onSelect={selectZone}
            />
          ) : (
            <div
              ref={stageRef}
              className="relative overflow-hidden rounded-lg border border-night-line bg-night"
            >
              {!nearView ? (
                <div className="flex h-[520px] items-center justify-center text-sm text-bone-muted sm:h-[600px] lg:h-[660px]">
                  The spin loads as you scroll to it.
                </div>
              ) : threeDFailed ? (
                fallbackPanel
              ) : (
                <SceneErrorBoundary fallback={fallbackPanel}>
                  <Lot3DScene
                    selected={selected}
                    logoUrl={logoUrl}
                    logoAll={logoAll}
                    onSelect={selectZone}
                    showMarkers={showMarkers}
                    view={view}
                    spinning={spinning}
                    zoomCmd={zoomCmd}
                    onUserStart={() => setSpinning(false)}
                  />
                </SceneErrorBoundary>
              )}
            </div>
          )}

          {mode === "3d" && (
            <>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "hero", label: "Hero" },
                    { id: "side", label: "Side" },
                    { id: "tank", label: "Tank" },
                    { id: "rear", label: "Rear" },
                    { id: "top", label: "Top" },
                  ].map((v) => (
                    <button
                      key={v.id}
                      onClick={() => {
                        setView(v.id);
                        setSpinning(false);
                      }}
                      className={`rounded-md border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                        view === v.id
                          ? "border-accent/60 bg-accent/10 text-bone"
                          : "border-night-line text-bone-muted hover:border-bone-muted/40 hover:text-bone"
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setShowMarkers((m) => !m)}
                    aria-pressed={showMarkers}
                    className="inline-flex items-center gap-1.5 rounded-md border border-night-line px-3 py-2 text-xs font-semibold text-bone-muted transition-colors hover:border-bone-muted/40 hover:text-bone"
                  >
                    <MapPin size={13} aria-hidden />
                    {showMarkers ? "Hide markers" : "Show markers"}
                  </button>
                  <button
                    onClick={() => {
                      const el = stageRef.current;
                      if (!el) return;
                      if (document.fullscreenElement) document.exitFullscreen();
                      else el.requestFullscreen?.();
                    }}
                    aria-pressed={isFull}
                    className="inline-flex items-center gap-1.5 rounded-md border border-night-line px-3 py-2 text-xs font-semibold text-bone-muted transition-colors hover:border-bone-muted/40 hover:text-bone"
                  >
                    <Maximize size={13} aria-hidden />
                    {isFull ? "Exit full" : "Fullscreen"}
                  </button>
                  <button
                    onClick={() => setSpinning((v) => !v)}
                    aria-pressed={spinning}
                    className="inline-flex items-center gap-1.5 rounded-md border border-night-line px-3 py-2 text-xs font-semibold text-bone-muted transition-colors hover:border-bone-muted/40 hover:text-bone"
                  >
                    {spinning ? <Pause size={13} aria-hidden /> : <Play size={13} aria-hidden />}
                    {spinning ? "Pause turntable" : "Spin"}
                  </button>
                  <button
                    onClick={() => setZoomCmd((c) => ({ n: c.n + 1, dir: -1 }))}
                    aria-label="Zoom in"
                    className="rounded-md border border-night-line p-2 text-bone-muted transition-colors hover:border-bone-muted/40 hover:text-bone"
                  >
                    <ZoomIn size={14} aria-hidden />
                  </button>
                  <button
                    onClick={() => setZoomCmd((c) => ({ n: c.n + 1, dir: 1 }))}
                    aria-label="Zoom out"
                    className="rounded-md border border-night-line p-2 text-bone-muted transition-colors hover:border-bone-muted/40 hover:text-bone"
                  >
                    <ZoomOut size={14} aria-hidden />
                  </button>
                </div>
              </div>
              <p className="mt-3 text-sm text-bone-muted">
                Drag to spin · scroll to zoom · tap the bike or a marker to pick a lot
              </p>
            </>
          )}
        </div>

        <div className="flex flex-col gap-5 rounded-lg border border-night-line bg-night-soft p-5">
          <div>
            <label className="flex cursor-pointer flex-col items-center gap-2 rounded-md border border-dashed border-night-line px-4 py-6 text-center transition-colors hover:border-bone-muted/40">
              <Upload size={22} className="text-accent" aria-hidden />
              <span className="text-sm font-semibold text-bone">
                {logoUrl ? "Logo loaded — replace" : "Upload your logo"}
              </span>
              <span className="text-xs text-bone-muted">
                PNG (transparent) · JPG · SVG
              </span>
              <input
                type="file"
                accept="image/png,image/jpeg,image/svg+xml"
                onChange={onFile}
                className="hidden"
              />
            </label>
          </div>

          {logoUrl && (
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setLogoAll((v) => !v)}
                aria-pressed={logoAll}
                className={`rounded-md border px-3.5 py-2 text-sm font-semibold transition-colors ${
                  logoAll
                    ? "border-accent/60 bg-accent/10 text-bone"
                    : "border-night-line text-bone-muted hover:border-bone-muted/40 hover:text-bone"
                }`}
              >
                {logoAll ? "✓ On every lot" : "Show on every lot"}
              </button>
              <button
                onClick={() => {
                  setLogoUrl(null);
                  setLogoAll(false);
                }}
                className="rounded-md border border-night-line px-3.5 py-2 text-sm font-semibold text-bone-muted transition-colors hover:border-bone-muted/40 hover:text-bone"
              >
                Clear logo
              </button>
            </div>
          )}

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest2 text-bone-muted">
              Previewable lots
            </p>
            <div className="flex flex-wrap gap-2">
              {PREVIEWABLE.map((id) => {
                const z = ZONES.find((x) => x.id === id)!;
                return (
                  <button
                    key={id}
                    onClick={() => setSelected(id)}
                    className={`rounded-md border px-3 py-2 text-left text-sm transition-colors ${
                      selected === id
                        ? "border-accent/60 bg-accent/10 text-bone"
                        : "border-night-line text-bone-muted hover:border-bone-muted/40 hover:text-bone"
                    }`}
                  >
                    <span className="font-semibold text-accent">{id}</span>{" "}
                    {z.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-auto">
            <p className="text-xs font-semibold uppercase tracking-widest2 text-steel">
              Lot {zone.id} · {zone.tier}
            </p>
            <h3 className="mt-1 font-display text-2xl tracking-wide chrome-text">
              {zone.name}
            </h3>
            <p className="mt-1 text-sm text-bone-muted">
              {zone.where} · {zone.size}
            </p>
            <p className="mt-3 font-display text-3xl tracking-wide chrome-text">
              ₹{TIER_PRICE[zone.tier].toLocaleString("en-IN")}
              <span className="ml-1 text-xs text-bone-muted">opening</span>
            </p>
            <a
              href="#how"
              className="btn-shine mt-4 inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-bone transition-transform duration-150 hover:-translate-y-0.5 hover:bg-accent-hover"
            >
              How bidding works
            </a>
          </div>
        </div>
      </div>

      <p className="mt-6 text-[10px] text-bone-muted">
        {mode === "photo"
          ? "Photographs of the actual Royal Enfield Continental GT 650 Mr. Clean are being captured per the published checklist; until then this viewer shows clearly-labelled concept plates built on the lot-map schematic. No plate pretends to be a photograph."
          : "3D concept model: road motorcycle — Innerscene, public domain (CC0), recolored chrome. Illustrative spin only — it is not the exact machine; the photograph showroom is the authoritative preview."}
      </p>
    </section>
  );
}
