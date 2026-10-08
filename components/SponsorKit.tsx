import Reveal from "@/components/Reveal";
import { BadgeCheck, Camera, Route, ScrollText, ChartColumn } from "lucide-react";

const KIT = [
  {
    icon: BadgeCheck,
    title: "Exclusive zone ownership",
    text: "One brand per zone for the full campaign. No shared panels, no rotating slots.",
  },
  {
    icon: Camera,
    title: "Install photography",
    text: "Professional shots of your mark on the bike, delivered after fitting.",
  },
  {
    icon: Route,
    title: "Per-kilometre certificates",
    text: "Every ride is logged with distance and route. Sponsors receive stamped km certificates for the campaign period.",
  },
  {
    icon: ScrollText,
    title: "Campaign updates",
    text: "Road updates from the ride, with your zone in frame wherever the campaign shares it.",
  },
  {
    icon: ChartColumn,
    title: "Closing report",
    text: "At auction close: a factual report of the campaign — zones sold, km ridden, content delivered. Live numbers only.",
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
          No vague "exposure". Every deliverable below is concrete, dated, and
          tied to your zone.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
