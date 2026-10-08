import Reveal from "@/components/Reveal";
import { Gavel, Wrench, Map, FileCheck2 } from "lucide-react";

const STEPS = [
  {
    icon: Gavel,
    title: "Pick a zone, place a bid",
    text: "Message your zone number and bid on WhatsApp. We confirm every bid personally, in order received.",
  },
  {
    icon: FileCheck2,
    title: "Win the zone",
    text: "The highest confirmed bid for each zone at close on 26 January 2027 wins. One brand per zone, no shared lots.",
  },
  {
    icon: Wrench,
    title: "We build your mark",
    text: "Your logo is printed as a premium decal and installed on the exact panel. Position proofs shared before fitting.",
  },
  {
    icon: Map,
    title: "Your brand rides",
    text: "Every ride is logged. You receive per-kilometre certificates and photo updates of your zone on the road.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="border-y border-white/5 bg-night-soft/50">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-accent">
            How it works
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-bone sm:text-5xl">
            FROM BID TO <span className="chrome-text">BLACKTOP</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="relative h-full rounded-lg border border-night-line bg-night p-6 transition-colors duration-200 hover:border-bone-muted/40">
                <span className="absolute right-4 top-4 font-display text-4xl text-night-line">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <s.icon size={22} className="text-accent" aria-hidden />
                <h3 className="mt-4 font-display text-xl tracking-wide text-bone">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
