"use client";

import { useEffect, useState } from "react";
import { AUCTION_CLOSE_ISO } from "@/lib/zones";

const target = new Date(AUCTION_CLOSE_ISO).getTime();

function diff() {
  const ms = Math.max(0, target - Date.now());
  return {
    d: Math.floor(ms / 86400000),
    h: Math.floor((ms / 3600000) % 24),
    m: Math.floor((ms / 60000) % 60),
    s: Math.floor((ms / 1000) % 60),
  };
}

export default function Countdown() {
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    setT(diff());
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const cells = [
    { v: t?.d ?? "-", l: "days" },
    { v: t?.h ?? "-", l: "hours" },
    { v: t?.m ?? "-", l: "minutes" },
    { v: t?.s ?? "-", l: "seconds" },
  ];

  return (
    <div aria-label="Auction closes 26 January 2027">
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {cells.map((c) => (
          <div
            key={c.l}
            className="rounded-lg border border-night-line bg-night-soft px-2 py-3 text-center"
          >
            <p className="font-display text-3xl tabular-nums tracking-wide text-bone sm:text-4xl">
              {typeof c.v === "number" ? String(c.v).padStart(2, "0") : c.v}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-widest2 text-bone-muted">
              {c.l}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
