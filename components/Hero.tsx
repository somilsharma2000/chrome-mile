import Reveal from "@/components/Reveal";
import { waLink } from "@/components/Nav";
import { ArrowDown, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden race-grid"
    >
      {/* chrome sheen backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 72% 18%, rgba(255,255,255,0.07), transparent 65%), radial-gradient(40% 35% at 15% 85%, rgba(214,64,43,0.12), transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 pt-24 pb-16 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-bone-muted">
            Royal Enfield Continental GT 650 — Chrome Edition
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-5 font-display text-6xl leading-[0.95] tracking-wide sm:text-8xl lg:text-9xl">
            <span className="chrome-text">CHROME. HERITAGE.</span>
            <br />
            <span className="text-accent">NUMBER 12.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone-muted">
            Premium heritage racing decal kits, made to order for the
            Continental GT 650 Chrome Edition. Pre-cut, kit-by-kit fitment,
            straight from the workshop to your garage.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#kits"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-bone transition-transform duration-150 hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View the kits
              <ArrowDown size={18} aria-hidden />
            </a>
            <a
              href={waLink("Hi! I'd like to order a Continental 12 decal kit.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-night-line px-6 py-3 font-semibold text-bone transition-colors duration-150 hover:border-bone-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <MessageCircle size={18} aria-hidden />
              Talk to us
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <dt className="text-xs uppercase tracking-widest2 text-bone-muted">
                Fitment
              </dt>
              <dd className="mt-1 font-display text-2xl tracking-wide text-bone">
                Chrome Edition
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest2 text-bone-muted">
                Cut
              </dt>
              <dd className="mt-1 font-display text-2xl tracking-wide text-bone">
                Pre-cut panels
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest2 text-bone-muted">
                Ordering
              </dt>
              <dd className="mt-1 font-display text-2xl tracking-wide text-bone">
                Made to order
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
