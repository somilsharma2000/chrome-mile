import Reveal from "@/components/Reveal";

const FACTS = [
  {
    value: "1965",
    label: "The original Continental GT — the cafe racer that started the bloodline",
  },
  {
    value: "648cc",
    label: "Parallel twin at the heart of the modern GT 650",
  },
  {
    value: "47 PS",
    label: "Factory output — the canvas we build every kit around",
  },
];

export default function Heritage() {
  return (
    <section id="heritage" className="border-y border-white/5 bg-night-soft/50">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-accent">
            Heritage
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight tracking-wide text-bone sm:text-5xl">
            WE DON&apos;T DECORATE A MOTORCYCLE.{" "}
            <span className="chrome-text">WE CONTINUE ITS STORY.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {FACTS.map((f, i) => (
            <Reveal key={f.value} delay={i * 0.08}>
              <div className="border-l-2 border-accent pl-5">
                <p className="font-display text-6xl tracking-wide chrome-text">
                  {f.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-bone-muted">
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
