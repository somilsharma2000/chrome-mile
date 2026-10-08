import Reveal from "@/components/Reveal";
import { waLink } from "@/components/Nav";
import { KITS } from "@/lib/kits";
import { ArrowRight } from "lucide-react";

export default function Kits() {
  return (
    <section id="kits" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-widest2 text-accent">
          The kits
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-wide text-bone sm:text-5xl">
          MADE FOR THE <span className="chrome-text">CHROME EDITION</span>
        </h2>
        <p className="mt-4 max-w-xl text-bone-muted">
          Every panel is cut for the exact curves of the GT 650 Chrome
          Edition. No trimming, no guessing.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {KITS.map((kit, i) => (
          <Reveal key={kit.id} delay={i * 0.06}>
            <article className="group flex h-full flex-col rounded-lg border border-night-line bg-night-soft p-6 transition-all duration-200 hover:-translate-y-1 hover:border-bone-muted/40">
              {kit.badge ? (
                <span className="mb-4 w-fit rounded-sm border border-accent/40 bg-accent/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-widest2 text-accent">
                  {kit.badge}
                </span>
              ) : (
                <span className="mb-4 block h-[26px]" aria-hidden />
              )}

              <h3 className="font-display text-2xl tracking-wide text-bone">
                {kit.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-bone-muted">
                {kit.tagline}
              </p>

              <ul className="mt-5 flex-1 space-y-2.5">
                {kit.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-bone-muted">
                    <span
                      aria-hidden
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-[1px] bg-accent"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="font-display text-3xl tracking-wide text-bone">
                  ₹{kit.price_inr.toLocaleString("en-IN")}
                </span>
                <a
                  href={waLink(`Hi! I'd like to order the "${kit.name}" (₹${kit.price_inr}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-bone transition-transform duration-150 hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Order
                  <ArrowRight size={16} aria-hidden />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
