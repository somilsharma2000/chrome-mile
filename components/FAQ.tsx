import Reveal from "@/components/Reveal";
import { ALL_OR_NOTHING_INR, BIDDER_DEPOSIT_INR, FUND_GOAL_INR } from "@/lib/zones";

const FAQS = [
  {
    q: "How do I bid?",
    a: `Tap Bid on any lot — it opens WhatsApp with the lot pre-filled. You place a ₹${BIDDER_DEPOSIT_INR.toLocaleString("en-IN")} refundable deposit to get a Bidder ID, then bid your amount. Bids above ₹25,000 require a GSTIN or PAN for verification.`,
  },
  {
    q: "What if the campaign doesn't reach its goal?",
    a: `The campaign is all-or-nothing: it proceeds only if at least ₹${ALL_OR_NOTHING_INR.toLocaleString("en-IN")} is committed by close on 26 January 2027. Below that, every rupee is auto-refunded to source. Your risk is zero.`,
  },
  {
    q: "The bike doesn't exist yet — what exactly am I buying?",
    a: `A placement on a brand-new 2026 Continental GT 650 Mr. Clean (₹3,87,667 ex-showroom), purchased only after the threshold passes. Your decal is installed at the exact lot position and size listed on this page, and install photos are delivered before the final 70% payment.`,
  },
  {
    q: "How is the money protected between bid and delivery?",
    a: "Payments run through a payment gateway with digital receipts. Winners pay 30% on award and 70% only after verified installation. Deposits are refunded in full if you're outbid or the campaign doesn't proceed.",
  },
  {
    q: "Is riding with paid stickers on a private bike legal?",
    a: "Small bodywork decals on a private-registered vehicle do not alter Registration Certificate particulars (Motor Vehicles Act, Section 52) and placement is declared to the insurer. Nothing is placed on the number plate, lights or mirrors.",
  },
  {
    q: "How is placement decided aesthetically?",
    a: "Every decal size is fixed in advance and the livery is designed as a whole — chrome surfaces, the exhaust, lighting and controls stay untouched. Twelve curated lots, not a free-for-all. If a brand's artwork doesn't fit the livery, we say no.",
  },
  {
    q: "Is this affiliated with Royal Enfield?",
    a: "No. Continental 12 is an independent campaign, not affiliated with or endorsed by Royal Enfield or Eicher Motors.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-white/5 bg-night-soft/50">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-accent">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-bone sm:text-5xl">
            BEFORE YOU <span className="chrome-text">BID</span>
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {FAQS.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.05}>
              <details className="group rounded-lg border border-night-line bg-night px-5 py-4 open:border-accent/40">
                <summary className="cursor-pointer list-none font-semibold text-bone marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <span
                      aria-hidden
                      className="text-accent transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-bone-muted">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-xs text-bone-muted">
            Campaign goal: ₹{FUND_GOAL_INR.toLocaleString("en-IN")} — Mr. Clean
            on-road price, riding gear, and touring setup.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
