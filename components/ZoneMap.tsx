"use client";

import { TIER_PRICE, ZONES } from "@/lib/zones";

const TIER_FILL: Record<string, string> = {
  Title: "#B8321D",
  Feature: "#C8C8CF",
  Detail: "#7A7A84",
};

export default function ZoneMap() {
  return (
    <section id="map" className="border-y border-white/5 bg-night-soft/50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest2 text-steel">
          The machine
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-wide text-bone sm:text-5xl">
          THE <span className="chrome-text">LOT MAP</span>
        </h2>
        <p className="mt-3 text-xs font-semibold uppercase tracking-widest2 text-bone-muted">
          <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-accent align-middle" aria-hidden />
          All 12 lots currently available for bidding · status is owner-controlled and
          updated on this page
        </p>
        <p className="mt-4 max-w-xl text-bone-muted">
          Schematic of the GT 650 and rider kit. Curated by design, not by
          greed — chrome, exhaust and lighting stay untouched. Tap a marker to open
          the lot live in the showroom below.
        </p>

        <div className="relative mt-10 overflow-x-auto rounded-lg border border-night-line bg-night p-4 sheen">
          <div aria-hidden className="map-sweep" />
          <svg
            viewBox="0 0 760 400"
            role="img"
            aria-label="Lot map of the motorcycle and rider gear"
            className="h-auto w-full min-w-[640px]"
          >
            <line x1="40" y1="352" x2="720" y2="352" stroke="#26262B" strokeWidth="2" />
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

            {ZONES.map((z) => (
              <g
                key={z.id}
                style={{ cursor: "pointer" }}
                role="button"
                tabIndex={0}
                aria-label={`Open lot ${z.id} ${z.name} in the showroom`}
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent("cm-zone", { detail: { id: z.id, src: "map" } })
                  )
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    window.dispatchEvent(
                      new CustomEvent("cm-zone", { detail: { id: z.id, src: "map" } })
                    );
                  }
                }}
              >
                  <circle aria-hidden className="zone-pulse" cx={z.x} cy={z.y} r="15" fill="none" stroke={TIER_FILL[z.tier]} strokeWidth="2" />
                  <circle cx={z.x} cy={z.y} r="15" fill={TIER_FILL[z.tier]} />
                  <text
                    x={z.x}
                    y={z.y + 3.5}
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#0A0A0B"
                  >
                    {z.id}
                  </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-bone-muted">
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" /> Title — opens ₹{TIER_PRICE.Title.toLocaleString("en-IN")}
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#C8C8CF]" /> Feature — opens ₹{TIER_PRICE.Feature.toLocaleString("en-IN")}
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#7A7A84]" /> Detail — opens ₹{TIER_PRICE.Detail.toLocaleString("en-IN")}
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full border border-dashed border-bone-muted" /> Untouched: chrome, exhaust, lights, number plate
          </span>
        </div>
      </div>
    </section>
  );
}
