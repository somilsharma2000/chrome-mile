import Reveal from "@/components/Reveal";
import { BadgeCheck, Camera, Route, FileCheck2 } from "lucide-react";

const KIT = [
  {
    icon: BadgeCheck,
    title: "Exclusive lot ownership",
    text: "One brand per lot for the full campaign season. No shared placements, no rotating slots.",
  },
  {
    icon: Camera,
    title: "Install photography",
    text: "Professional shots of your mark fitted on the bike or gear, delivered after installation.",
  },
  {
    icon: Route,
    title: "GPS-verified ride proof",
    text: "Tours are GPS-logged. You receive per-ride distance certificates and photo updates of your lot on the road.",
  },
  {
    icon: FileCheck2,
    title: "Logo usage rights",
    text: "The campaign's ride photos may be used in your own marketing, with mutual credit.",
  },
];

export default function SponsorKit() {
  return (
    <section id="kit" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-widest2 text-accent">
          Sponsor kit
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-wide text-bone sm:text-5xl">
          WHAT EVERY <span className="chrome-text">WINNER GETS</span>
        </h2>
        <p className="mt-4 max-w-xl text-bone-muted">
          Concrete, dated deliverables tied to your lot. No vague "exposure".
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {KIT.map((k, i) => (
          <Reveal key={k.title} delay={i * 0.06}>
            <div className="h-full rounded-lg border border-night-line bg-night-soft p-6 transition-colors duration-200 hover:border-bone-muted/40">
              <k.icon size={22} className="text-accent" aria-hidden />
              <h3 className="mt-4 font-display text-xl tracking-wide text-bone">
                {k.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-bone-muted">{k.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
