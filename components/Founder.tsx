import Reveal from "@/components/Reveal";

const FACTS = [
  { value: "648cc", label: "Parallel twin, 46.8 bhp — the machine this livery completes" },
  { value: "Mr. Clean", label: "The chrome-finish, spoke-wheel range-topper it ships on" },
  { value: "2027", label: "The year a chrome GT 650 leaves in full twelve-brand livery" },
];

export default function Founder() {
  return (
    <section id="rider" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-accent">
            The rider
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight tracking-wide text-bone sm:text-5xl">
            ONE RIDER. TWELVE NAMES. <span className="chrome-text">EVERY KILOMETRE EARNED.</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-bone-muted">
            No agency. No dealer money. One rider and a chrome GT 650 whose
            surfaces twelve brands will own outright — a livery designed as a
            whole, not a free-for-all. When the last lot sells, the machine
            ships complete and the ride archive begins.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-bone-muted">
            The route is not a promise — it is a record. Every tour is
            GPS-logged, and the archive on this page is built from what
            actually happens on the road, not from a plan.
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
