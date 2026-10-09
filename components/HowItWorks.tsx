import Reveal from "@/components/Reveal";
import { BIDDER_DEPOSIT_INR } from "@/lib/zones";
import { Gavel, BadgeCheck, Route } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how" className="border-y border-white/5 bg-night-soft/50">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-steel">
            How it works
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-bone sm:text-5xl">
            A LIVERY WORTH <span className="chrome-text">TWELVE NAMES</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              icon: Gavel,
              n: "01",
              title: "Claim your lot",
              text: `A refundable ₹2,000 deposit gets you a Bidder ID when registration opens on the Chrome Mile platform. Every bid is confirmed in writing the same day, and you're notified instantly if you're outbid. Bidding closes 26 January 2027 with a 5-minute soft close — no sniping, no games.`,
            },
            {
              icon: BadgeCheck,
              n: "02",
              title: "Full livery or no livery",
              text: "The GT 650 ships only when all twelve lots are sold — a half-stickered machine is nobody's campaign. If any lot is unsold at close, the auction voids and every payment and deposit is returned in full. Complete, or nothing.",
            },
            {
              icon: Route,
              n: "03",
              title: "Your mark rides, with proof",
              text: "Your logo is installed at the exact position and size listed. Every tour is GPS-logged: ride certificates, install photography, and full usage rights to the imagery for your own marketing.",
            },
          ].map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="relative h-full rounded-lg border border-night-line bg-night p-6 transition-colors duration-200 hover:border-bone-muted/40">
                <span className="absolute right-4 top-4 font-display text-4xl text-night-line">
                  {s.n}
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
