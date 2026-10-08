import Reveal from "@/components/Reveal";
import { ALL_OR_NOTHING_INR, BIDDER_DEPOSIT_INR } from "@/lib/zones";
import { Gavel, Wallet, ShieldCheck } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how" className="border-y border-white/5 bg-night-soft/50">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-accent">
            How it works
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-bone sm:text-5xl">
            BRANDS BUY THE BIKE. <span className="chrome-text">THE BIKE CARRIES THEM.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              icon: Gavel,
              n: "01",
              title: "Bid on a lot",
              text: `Message your lot and amount on WhatsApp with a ₹${BIDDER_DEPOSIT_INR.toLocaleString("en-IN")} refundable deposit for a Bidder ID. Bids are confirmed personally and you're notified if outbid. Auction closes 26 January 2027 with a 5-minute soft close — no sniping.`,
            },
            {
              icon: Wallet,
              n: "02",
              title: "All-or-nothing, then the machine",
              text: `The campaign proceeds only if at least ₹${ALL_OR_NOTHING_INR.toLocaleString("en-IN")} is committed by close — otherwise every rupee is auto-refunded. If the threshold passes, the GT 650 Mr. Clean is bought and winners pay 30% on award, 70% after verified installation.`,
            },
            {
              icon: ShieldCheck,
              n: "03",
              title: "Your mark rides, with proof",
              text: "Your decal is installed on the exact lot. Every tour is GPS-logged; you receive ride certificates, photos of your mark on the road, and usage rights for your own marketing.",
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
