import Reveal from "@/components/Reveal";

const DOCS = [
  {
    name: "Auction Rules",
    file: "AUCTION-RULES.md",
    desc: "Deposits, soft close, outbid notice, payment schedule, void and refund terms — the complete mechanics in writing.",
  },
  {
    name: "Sponsor Agreement",
    file: "SPONSOR-AGREEMENT.md",
    desc: "The plain-English agreement every winner signs: lot, price, deliverables, usage rights, exclusivity, timeline.",
  },
  {
    name: "Brand Profile Form",
    file: "BRAND-PROFILE-FORM.md",
    desc: "What we need from your brand after you win: company details, GSTIN/PAN, brand assets, contacts.",
  },
  {
    name: "Artwork Guidelines",
    file: "ARTWORK-GUIDELINES.md",
    desc: "File formats, colour specs, safe areas per lot, vinyl material, approval flow — and what gets declined.",
  },
  {
    name: "Deliverables Schedule",
    file: "DELIVERABLES-SCHEDULE.md",
    desc: "Exactly what you receive and when: install photography, ride certificates, archive access, closing report.",
  },
  {
    name: "Pitch Kit",
    file: "PITCH-KIT.md",
    desc: "The campaign's positioning, one-liners, outreach messages and objection handling — public on purpose.",
  },
];

export default function Documents() {
  return (
    <section id="docs" className="border-y border-white/5 bg-night-soft/50">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-accent">
            The paperwork
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-bone sm:text-5xl">
            EVERYTHING IN <span className="chrome-text">WRITING</span>
          </h2>
          <p className="mt-4 max-w-xl text-bone-muted">
            Serious sponsorships run on documents, not promises. Every rule,
            deliverable and term is published before you bid — read it, have
            your lawyer read it, then bid.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DOCS.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.05}>
              <a
                href={`https://github.com/somilsharma2000/chrome-yatra/blob/main/docs/${d.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full rounded-lg border border-night-line bg-night p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-bone-muted/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <h3 className="font-display text-xl tracking-wide text-bone">
                  {d.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-muted">
                  {d.desc}
                </p>
                <p className="mt-3 text-xs font-semibold text-accent">
                  Read document →
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
