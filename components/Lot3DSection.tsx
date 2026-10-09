"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import React from "react";
import { ZONES, TIER_PRICE, waBidLink } from "@/lib/zones";
import Reveal from "@/components/Reveal";
import { Upload, MessageCircle } from "lucide-react";



function LoadProbe() {
  const [status, setStatus] = useState<string>("3D probe: waiting");
  useEffect(() => {
    const h = (e: Event) => {
      const d = (e as CustomEvent).detail as { status: string; message?: string };
      setStatus(`3D probe: ${d.status}${d.message ? ` — ${d.message}` : ""}`);
    };
    window.addEventListener("cy-bike-status", h);
    return () => window.removeEventListener("cy-bike-status", h);
  }, []);
  return <p className="text-[10px] text-bone-muted">{status}</p>;
}

class SceneErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: string | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(e: unknown) {
    return { error: e instanceof Error ? e.message : String(e) };
  }
  render() {
    if (this.state.error) {
      return (
        <pre className="m-4 whitespace-pre-wrap rounded-md border border-accent/50 bg-accent/10 p-4 text-xs text-bone">
          3D viewer error: {this.state.error}
        </pre>
      );
    }
    return this.props.children;
  }
}

const Lot3DScene = dynamic(() => import("@/components/Lot3DScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[460px] items-center justify-center text-sm text-bone-muted">
      Loading the machine…
    </div>
  ),
});

// lots that can be previewed in 3D (bike surfaces)
const PREVIEWABLE = ["T1", "F3", "D1", "D2", "D3"];

export default function Lot3DSection() {
  const [selected, setSelected] = useState("T1");
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

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

  return (
    <section id="machine" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-widest2 text-accent">
          The machine — live preview
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-wide text-bone sm:text-5xl">
          SEE YOUR MARK <span className="chrome-text">BEFORE YOU BID</span>
        </h2>
        <p className="mt-4 max-w-xl text-bone-muted">
          Upload your logo, pick a lot, and watch it ride. Drag to spin the
          machine at any angle. Rider-kit and pannier lots live on the 2D lot
          map above.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-lg border border-night-line bg-night">
            <SceneErrorBoundary>
              <Lot3DScene selected={selected} logoUrl={logoUrl} onSelect={setSelected} />
            </SceneErrorBoundary>
          </div>
          <LoadProbe />
          <p className="mt-2 text-xs text-bone-muted">
            Drag to spin · scroll to zoom · tap a marker to select the lot ·
            preview is illustrative; exact sizes are fixed per lot
          </p>
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
            <p className="text-xs font-semibold uppercase tracking-widest2 text-accent">
              Lot {zone.id} · {zone.tier}
            </p>
            <h3 className="mt-1 font-display text-2xl tracking-wide text-bone">
              {zone.name}
            </h3>
            <p className="mt-1 text-sm text-bone-muted">
              {zone.where} · {zone.size}
            </p>
            <p className="mt-3 font-display text-3xl tracking-wide text-bone">
              ₹{TIER_PRICE[zone.tier].toLocaleString("en-IN")}
              <span className="ml-1 text-xs text-bone-muted">opening</span>
            </p>
            <a
              href={waBidLink(zone)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-bone transition-transform duration-150 hover:-translate-y-0.5 hover:bg-accent-hover"
            >
              <MessageCircle size={15} aria-hidden />
              Bid on this lot
            </a>
          </div>
        </div>
      </div>

      <p className="mt-6 text-[10px] text-bone-muted">
        3D model: road motorcycle — Innerscene, public domain (CC0), recolored chrome.
        Illustrative viewer; the machine is a Royal Enfield Continental GT 650
        Mr. Clean and placement follows the published lot map.
      </p>
    </section>
  );
}
