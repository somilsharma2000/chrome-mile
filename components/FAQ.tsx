import Reveal from "@/components/Reveal";

const FAQS = [
  {
    q: "Do the kits fit the Chrome Edition specifically?",
    a: "Yes. All panels are cut against the Chrome Edition's bodywork — tank, side panels and tail. The standard GT 650 shares most panels, but tell us your variant when ordering and we confirm fitment before cutting.",
  },
  {
    q: "How long does installation take?",
    a: "A full livery takes an afternoon (2–4 hours) with basic care. Individual stripe and accent kits take under an hour. The illustrated guide walks panel by panel.",
  },
  {
    q: "Will it damage the factory paint or chrome?",
    a: "No. We use low-tack automotive adhesive designed for factory finishes. Applied correctly and removed with gentle heat, it comes off clean.",
  },
  {
    q: "Do you ship across India?",
    a: "Yes — kits ship pan-India. Dispatch is 3–5 working days since every kit is made to order.",
  },
  {
    q: "Can I get a custom design or my own racing number?",
    a: "Yes. Message us on WhatsApp with your idea — custom roundels, names and numbers are cut to order.",
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
            BEFORE YOU <span className="chrome-text">ORDER</span>
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
                <p className="mt-3 text-sm leading-relaxed text-bone-muted">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
