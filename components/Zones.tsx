import Reveal from "@/components/Reveal";
import { TIER_BLURB, TIER_PRICE, ZONES, waBidLink } from "@/lib/zones";
import { ArrowRight } from "lucide-react";

const TIER_ORDER = ["Prime", "Grid", "Zones"] as const;

export default function Zones() {
  return (
    <section id="zones" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-widest2 text-accent">
          The lots
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-wide text-bone sm:text-5xl">
          24 ZONES, <span className="chrome-text">ONE AUCTION</span>
        </h2>
        <p className="mt-4 max-w-xl text-bone-muted">
          Each zone sells to one brand. Highest confirmed bid at close wins.
          Opening prices are floors, not ceilings.
        </p>
      </Reveal>

      {TIER_ORDER.map((tier) => (
        <div key={tier} className="mt-14">
          <Reveal>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3 className="font-display text-3xl tracking-wide text-bone">
                {tier.toUpperCase()}
              </h3>
              <span className="rounded-sm border border-accent/40 bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                Opens ₹{TIER_PRICE[tier].toLocaleString("en-IN")}
              </span>
              <p className="w-full text-sm text-bone-muted sm:w-auto">{TIER_BLURB[tier]}</p>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ZONES.filter((z) => z.tier === tier).map((z, i) => (
              <Reveal key={z.id} delay={i * 0.04}>
                <article
                  id={`zone-${z.id}`}
                  className="group flex h-full items-center justify-between gap-4 rounded-lg border border-night-line bg-night-soft p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-bone-muted/40"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border font-sans text-sm font-extrabold ${
                        z.status === "AUTHORITY"
                          ? "border-dashed border-bone-muted text-bone-muted"
                          : "border-accent/40 bg-accent/10 text-accent"
                      }`}
                    >
                      {z.id}
                    </span>
                    <div>
                      <h4 className="font-semibold leading-tight text-bone">{z.name}</h4>
                      <p className="mt-1 text-xs text-bone-muted">
                        {z.status === "AUTHORITY"
                          ? "Founder placement — not auctioned"
                          : `Opening bid ₹${TIER_PRICE[z.tier].toLocaleString("en-IN")}`}
                      </p>
                    </div>
                  </div>
                  {z.status === "AVAILABLE" && (
                    <a
                      href={waBidLink(z)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Bid on zone ${z.id}, ${z.name}`}
                      className="inline-flex shrink-0 items-center gap-1 rounded-md bg-accent px-3.5 py-2 text-sm font-semibold text-bone transition-transform duration-150 hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      Bid
                      <ArrowRight size={15} aria-hidden />
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
