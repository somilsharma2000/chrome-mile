"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { ZONES, TIER_PRICE, waBidLink } from "@/lib/zones";
import type { Zone } from "@/lib/zones";
import Reveal from "@/components/Reveal";
import { Box, MessageCircle } from "lucide-react";

const Lot3D = dynamic(() => import("@/components/Lot3D"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[420px] items-center justify-center text-sm text-bone-muted">
      Loading the machine…
    </div>
  ),
});

export default function Lot3DSection() {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState<Zone | null>(null);

  return (
    <section id="machine" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-widest2 text-accent">
          The machine — in 3D
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-wide text-bone sm:text-5xl">
          WALK AROUND <span className="chrome-text">THE LOT</span>
        </h2>
        <p className="mt-4 max-w-xl text-bone-muted">
          A stylised view of the machine and rider kit. Drag to rotate, tap a
          marker to inspect any lot — sizes and positions as published.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 rounded-lg border border-night-line bg-night p-3">
          {active ? (
            <Lot3D zones={ZONES} onSelect={setSelected} />
          ) : (
            <button
              onClick={() => setActive(true)}
              className="flex h-[420px] w-full flex-col items-center justify-center gap-4 rounded-md border border-dashed border-night-line text-bone-muted transition-colors hover:border-bone-muted/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Box size={34} className="text-accent" aria-hidden />
              <span className="font-semibold text-bone">
                Load the 3D machine
              </span>
              <span className="text-xs">
                Loads on demand to keep the page fast · the 2D lot map is the
                fallback
              </span>
            </button>
          )}
        </div>
      </Reveal>

      {selected && (
        <div className="mt-4 flex flex-col gap-4 rounded-lg border border-accent/40 bg-night-soft p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest2 text-accent">
              Lot {selected.id} · {selected.tier}
            </p>
            <h3 className="mt-1 font-display text-2xl tracking-wide text-bone">
              {selected.name}
            </h3>
            <p className="mt-1 text-sm text-bone-muted">
              {selected.where} · {selected.size}
            </p>
          </div>
          <div className="flex items-center gap-5">
            <p className="font-display text-3xl tracking-wide text-bone">
              ₹{TIER_PRICE[selected.tier].toLocaleString("en-IN")}
              <span className="ml-1 text-xs text-bone-muted">opening</span>
            </p>
            <a
              href={waBidLink(selected)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-bone transition-transform duration-150 hover:-translate-y-0.5 hover:bg-accent-hover"
            >
              <MessageCircle size={15} aria-hidden />
              Bid on this lot
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
