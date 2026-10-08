import Reveal from "@/components/Reveal";

const FAQS = [
  {
    q: "How do I place a bid?",
    a: "Tap Bid on any zone — it opens WhatsApp with the zone pre-filled. State your amount. We confirm every bid personally and keep you posted if you are outbid. Bids are binding offers to buy the zone if you hold the highest confirmed bid at close.",
  },
  {
    q: "When does the auction close?",
    a: "26 January 2027, 23:59 IST. The countdown on this page is live. The highest confirmed bid per zone at that moment wins.",
  },
  {
    q: "What do I pay if I win?",
    a: "Your winning bid for the zone. That covers decal printing, professional installation and the campaign deliverables listed in the sponsor kit. Payment is collected after the auction closes, via a secure payment link.",
  },
  {
    q: "What if the campaign doesn't reach its ₹4,00,000 goal?",
    a: "Your money is tied to your zone, not the goal. If you win a zone, your placement and deliverables happen regardless of the total raised. The progress bar only reports what has actually been bid and accepted.",
  },
  {
    q: "Can I sponsor without bidding in the auction?",
    a: "Yes — brands can take a direct sponsorship inquiry for custom placements (the fork-leg zones are founder-allocated). Message us on WhatsApp and we'll discuss.",
  },
  {
    q: "Is this affiliated with Royal Enfield?",
    a: "No. Continental 12 is an independent campaign. It is not affiliated with, or endorsed by, Royal Enfield or Eicher Motors.",
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
      </div>
    </section>
  );
}
