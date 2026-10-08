import Reveal from "@/components/Reveal";
import Countdown from "@/components/Countdown";
import {
  FUND_GOAL_INR,
  RAISED_INR,
  availableCount,
  waGeneral,
} from "@/lib/zones";
import { ArrowDown } from "lucide-react";

const pct = Math.min(100, (RAISED_INR / FUND_GOAL_INR) * 100);

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden race-grid"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 72% 18%, rgba(255,255,255,0.07), transparent 65%), radial-gradient(40% 35% at 15% 85%, rgba(214,64,43,0.12), transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 pt-28 pb-16 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-bone-muted">
            A sponsorship auction on a Royal Enfield Continental GT 650 — Mr. Clean
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-5 max-w-4xl font-display text-6xl leading-[0.95] tracking-wide sm:text-8xl lg:text-9xl">
            <span className="chrome-text">FUND THE RIDE.</span>
            <br />
            <span className="text-accent">YOUR BRAND TOURS INDIA.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone-muted">
            This campaign buys a brand-new GT 650 — funded zone by zone by
            brands. Win a lot, your mark is installed on the bike or rider
            kit, and rides every kilometre we tour. With proof.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest2 text-accent">
                Auction closes Republic Day 2027
              </p>
              <Countdown />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <a
                href="#zones"
                className="inline-flex w-fit items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-bone transition-transform duration-150 hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                View the 12 lots
                <ArrowDown size={18} aria-hidden />
              </a>
              <a
                href={waGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-md border border-night-line px-6 py-3 font-semibold text-bone transition-colors duration-150 hover:border-bone-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Talk to the campaign
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mt-14 max-w-3xl">
            <div className="flex items-end justify-between text-sm">
              <p className="text-bone-muted">Campaign fund — verified live total</p>
              <p className="font-display text-xl tracking-wide text-bone">
                ₹{RAISED_INR.toLocaleString("en-IN")}{" "}
                <span className="text-bone-muted">
                  / ₹{FUND_GOAL_INR.toLocaleString("en-IN")}
                </span>
              </p>
            </div>
            <div
              role="progressbar"
              aria-valuenow={RAISED_INR}
              aria-valuemin={0}
              aria-valuemax={FUND_GOAL_INR}
              aria-label="Campaign funds raised"
              className="mt-2 h-2 overflow-hidden rounded-full bg-night-line"
            >
              <div className="h-full bg-accent" style={{ width: `${pct}%` }} />
            </div>
            <p className="mt-2 text-xs text-bone-muted">
              0 of {availableCount} lots committed · live numbers only · goal
              covers the Mr. Clean on-road price, riding gear and touring setup
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
