"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

const STATS = [
  { value: 12, suffix: "", label: "decal lots — one brand per lot" },
  { value: 648, suffix: "cc", label: "parallel twin, chrome-finished" },
  { value: 5, suffix: " min", label: "soft close on every lot" },
  { value: 100, suffix: "%", label: "refund if the livery voids" },
];

export default function StatsStrip() {
  return (
    <section aria-label="Campaign facts" className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-night-line bg-card p-5 text-center sm:p-6"
          >
            <p className="font-display text-5xl tracking-wide text-bone sm:text-6xl">
              <CountUp to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-xs leading-relaxed text-bone-muted">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
