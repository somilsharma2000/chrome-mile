"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/Reveal";
import Countdown from "@/components/Countdown";
import { LOTS_CLAIMED, LOTS_TOTAL, waGeneral } from "@/lib/zones";
import { ArrowDown, ChevronDown } from "lucide-react";
import Magnetic from "@/components/Magnetic";

const pct = (LOTS_CLAIMED / LOTS_TOTAL) * 100;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden race-grid"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ y: yBg }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 45% at 72% 18%, rgba(255,255,255,0.07), transparent 65%), radial-gradient(40% 35% at 15% 85%, rgba(214,64,43,0.12), transparent 70%)",
          }}
        />
        <div className="orb orb-a" />
        <div className="orb orb-b" />
      </motion.div>

      <motion.div
        className="relative mx-auto w-full max-w-6xl px-4 pt-28 pb-16 sm:px-6"
        style={{ y: yContent, opacity: fade }}
      >
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-bone-muted">
            Chrome Yatra — the livery that rides India · A Royal Enfield
            Continental GT 650 · Mr. Clean · 648cc
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-5 max-w-4xl font-display text-6xl leading-[0.95] tracking-wide sm:text-8xl lg:text-9xl">
            <span className="chrome-text">YOUR NAME ON CHROME.</span>
            <br />
            <span className="text-accent">EVERY ROAD IN INDIA.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone-muted">
            A curated livery auction. Twelve decal lots on a chrome GT 650 and
            its touring kit — each lot exclusive to one brand. When the livery
            completes, the machine ships and the yatra begins: a documented
            season of touring, GPS-logged end to end, with your mark on every
            kilometre.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest2 text-accent">
                Bidding closes Republic Day 2027
              </p>
              <Countdown />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <Magnetic>
                <a
                  href="#zones"
                  className="btn-shine inline-flex w-fit items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-bone transition-transform duration-150 hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  View the lots
                  <ArrowDown size={18} aria-hidden />
                </a>
              </Magnetic>
              <a
                href={waGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-md border border-night-line px-6 py-3 font-semibold text-bone transition-colors duration-150 hover:border-bone-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Get the sponsor pack
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mt-14 max-w-3xl">
            <div className="flex items-end justify-between text-sm">
              <p className="text-bone-muted">The livery — live claim status</p>
              <p className="font-display text-xl tracking-wide text-bone">
                {LOTS_CLAIMED}{" "}
                <span className="text-bone-muted">of {LOTS_TOTAL} lots claimed</span>
              </p>
            </div>
            <div
              role="progressbar"
              aria-valuenow={LOTS_CLAIMED}
              aria-valuemin={0}
              aria-valuemax={LOTS_TOTAL}
              aria-label="Lots claimed"
              className="mt-2 h-2 overflow-hidden rounded-full bg-night-line"
            >
              <div
                className="h-full bg-accent transition-[width] duration-700"
                style={{ width: `${pct}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-bone-muted">
              Live numbers only, no projections · the machine ships only in
              full livery — all twelve lots, or a full refund to every bidder
            </p>
          </div>
        </Reveal>
      </motion.div>

      <div aria-hidden className="pointer-events-none absolute top-1/2 left-6 hidden -translate-y-1/2 lg:block">
        <p className="text-[10px] uppercase tracking-[0.35em] text-bone-muted/60" style={{ writingMode: "vertical-rl" }}>
          GT 650 · MR. CLEAN · 648CC · 46.8 BHP
        </p>
      </div>
      <div aria-hidden className="pointer-events-none absolute top-1/2 right-6 hidden -translate-y-1/2 lg:block">
        <p className="text-[10px] uppercase tracking-[0.35em] text-bone-muted/60" style={{ writingMode: "vertical-rl" }}>
          12 LOTS · ONE BRAND EACH · EST. 2027
        </p>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        style={{ opacity: fade }}
        aria-hidden
      >
        <div className="flex flex-col items-center gap-1 text-bone-muted">
          <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
          <ChevronDown size={16} className="bounce-cue" />
        </div>
      </motion.div>
    </section>
  );
}
