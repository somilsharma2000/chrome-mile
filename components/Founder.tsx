import Reveal from "@/components/Reveal";

const FACTS = [
  { value: "648cc", label: "Parallel twin, 46.8 bhp — the engine this campaign buys" },
  { value: "Mr. Clean", label: "The chrome-finish, spoke-wheel range-topper it earns" },
  { value: "2027", label: "The year a brand-funded cafe racer leaves on its first tour" },
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
            ONE RIDER. <span className="chrome-text">NO AGENCY.</span> EVERY KILOMETRE EARNED.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-bone-muted">
            This is not a dealership giveaway or a corporate activation. It is
            one rider in India buying his first Continental GT 650 the hard
            way — by selling its surfaces to brands who want their names
            carried on a real machine, on real roads, with proof of every
            ride.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-bone-muted">
            The route is not a promise — it is a record. Every tour gets a GPS
            log, and the ride archive on this page is built from what actually
            happens, not from a plan.
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
