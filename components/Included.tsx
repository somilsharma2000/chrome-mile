import Reveal from "@/components/Reveal";
import { Layers, ShieldCheck, Wrench, BookOpen, Clock } from "lucide-react";

const ITEMS = [
  {
    icon: Layers,
    title: "Pre-cut panels",
    text: "Every piece arrives cut to the exact panel it belongs on. No knife work on your tank.",
  },
  {
    icon: ShieldCheck,
    title: "Premium cast vinyl",
    text: "Automotive-grade cast vinyl rated for outdoor use — conforms to curves, resists fuel spills.",
  },
  {
    icon: Wrench,
    title: "Application kit",
    text: "Squeegee, low-tack positioning tape and surface prep included in every box.",
  },
  {
    icon: BookOpen,
    title: "Illustrated guide",
    text: "Panel-by-panel installation walkthrough — order of application, alignment marks, tips.",
  },
  {
    icon: Clock,
    title: "Made to order",
    text: "Each kit is cut after you order. Typical dispatch is 3–5 working days.",
  },
];

export default function Included() {
  return (
    <section id="included" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-widest2 text-accent">
          What&apos;s included
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-wide text-bone sm:text-5xl">
          IN THE BOX, <span className="chrome-text">EVERY TIME</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <div className="h-full rounded-lg border border-night-line bg-night-soft p-6 transition-colors duration-200 hover:border-bone-muted/40">
              <item.icon size={22} className="text-accent" aria-hidden />
              <h3 className="mt-4 font-display text-xl tracking-wide text-bone">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-bone-muted">
                {item.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
