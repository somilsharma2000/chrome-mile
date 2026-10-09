import Reveal from "@/components/Reveal";

const FACTS = [
  { value: "648cc", label: "Parallel twin, 46.8 bhp — the machine this livery completes" },
  { value: "Mr. Clean", label: "The chrome-finish, spoke-wheel range-topper it ships on" },
  { value: "2027", label: "The year a chrome GT 650 leaves the showroom in full livery" },
];

export default function Founder() {
  return (
    <section id="rider" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-steel">
            The operator
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight tracking-wide text-bone sm:text-5xl">
            A LIVERY WORTH <span className="chrome-text">SIGNING.</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-bone-muted">
            Chrome Yatra is run by the rider who owns the road between the
            idea and the archive. Every lot is positioned, sized and approved
            by hand — the livery is composed as a single piece of work, and
            artwork that breaks it is declined, whatever the budget.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-bone-muted">
            The route is not a promise — it is a record. Every tour is
            GPS-logged and published to a public ride archive: named logs,
            dated certificates, photos with your mark in frame. Sponsors
            don't buy a story here; they subscribe to evidence.
          </p>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-1">
          {FACTS.map((f, i) => (
            <Reveal key={f.value} delay={i * 0.08}>
              <div className="border-l-2 border-accent pl-5">
                <p className="font-display text-5xl tracking-wide chrome-text">
                  {f.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-bone-muted">
                  {f.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
