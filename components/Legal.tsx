import Reveal from "@/components/Reveal";
import { Scale, Landmark, Receipt } from "lucide-react";

const RULES = [
  {
    icon: Scale,
    title: "Road-legal by design",
    text: "Decals are small, bodywork-only placements — no alteration of the Registration Certificate particulars (Motor Vehicles Act, Section 52). Nothing goes on the number plate, lights, mirrors or windscreen.",
  },
  {
    icon: Landmark,
    title: "Insurance and taxes, declared",
    text: "Decal placement is declared to the vehicle insurer. Sponsorship income is reported and taxed as business income in India, with applicable TDS processed for brand accounting.",
  },
  {
    icon: Receipt,
    title: "Money handled like a crowdfunder",
    text: "Payments run through a payment gateway with digital receipts. The all-or-nothing threshold and refund policy are enforced by the campaign's published terms, not by promises.",
  },
];

export default function Legal() {
  return (
    <section id="legal" className="border-y border-white/5 bg-night-soft/50">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-accent">
            Built legal
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-bone sm:text-5xl">
            TRANSPARENT BY <span className="chrome-text">CONSTRUCTION</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {RULES.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.07}>
              <div className="h-full rounded-lg border border-night-line bg-night p-6 transition-colors duration-200 hover:border-bone-muted/40">
                <r.icon size={22} className="text-accent" aria-hidden />
                <h3 className="mt-4 font-display text-xl tracking-wide text-bone">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-muted">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-bone-muted">
            Independent campaign. Not affiliated with, or endorsed by, Royal
            Enfield or Eicher Motors. Vehicle facts (₹3,87,667 ex-showroom Mr.
            Clean, 648cc, 46.8 bhp, 214 kg) are from public launch
            information. Full bid terms are shared with every bidder before
            deposit.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
