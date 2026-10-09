import Reveal from "@/components/Reveal";
import { BIDDER_DEPOSIT_INR } from "@/lib/zones";

const FAQS = [
  {
    q: "How do I bid?",
    a: `Tap Bid on any lot — it opens WhatsApp with the lot pre-filled. A ₹${BIDDER_DEPOSIT_INR.toLocaleString("en-IN")} refundable deposit gets you a Bidder ID, then bid your amount. Bids above ₹25,000 require a GSTIN or PAN for verification.`,
  },
  {
    q: "What exactly do I own?",
    a: "Exclusive use of your lot's surface for the campaign season: your logo installed at the exact size and position listed, professional install photography, GPS-verified ride certificates from every tour, and usage rights to the ride imagery for your own marketing. One brand per lot — no co-branding, no rotation.",
  },
  {
    q: "Why is a lot on a motorcycle worth this?",
    a: "For less than a month of a mid-tier agency retainer, your mark crosses the country on a machine people photograph at every fuel stop — with documentation no hoarding or wrap can produce: named ride logs, certificates, and a public archive. Twelve lots total. Once they're sold, there is no inventory left this season.",
  },
  {
    q: "What if not all twelve lots sell by close?",
    a: "The machine ships in full livery or not at all. If any lot is unsold at close on 26 January 2027, the auction voids and every payment and deposit is returned in full. No half-decal GT 650 ever leaves the showroom.",
  },
  {
    q: "When do I pay?",
    a: "30% on award, 70% only after your install photography is delivered. Deposits are refunded in full if you're outbid or the auction voids. All payments run through a payment gateway with digital receipts.",
  },
  {
    q: "What do you need from my brand?",
    a: "Vector logo files, brand colour codes, a completed brand profile form and a signed sponsor agreement — all listed in the Documents section. We handle printing, installation and photography; you approve the mockup before anything touches the machine.",
  },
  {
    q: "How is the livery kept beautiful?",
    a: "Every decal size is fixed in advance and the livery is designed as a whole — chrome surfaces, the exhaust, lighting and controls stay untouched. If a brand's artwork doesn't fit the composition, we say no.",
  },
  {
    q: "Is riding with brand decals on a private bike legal?",
    a: "Small bodywork decals on a private-registered vehicle do not alter Registration Certificate particulars (Motor Vehicles Act, Section 52) and placement is declared to the insurer. Nothing is placed on the number plate, lights or mirrors.",
  },
  {
    q: "Is this affiliated with Royal Enfield?",
    a: "No. Chrome Yatra is an independent campaign, not affiliated with or endorsed by Royal Enfield or Eicher Motors.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-white/5 bg-night-soft/50">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-steel">
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
            Acquisition transparency: auction proceeds cover the 2026 GT 650
            Mr. Clean on-road price (ex-showroom ₹3,87,667), riding gear and
            touring setup — a full itemised breakdown is shared with every
            bidder before deposit.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
