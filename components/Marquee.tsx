const ITEMS = [
  "CHROME MILE",
  "THE LIVERY THAT RIDES INDIA",
  "12 LOTS · ONE BRAND PER LOT",
  "FULL LIVERY OR FULL REFUND",
  "GPS-VERIFIED RIDE ARCHIVE",
  "BIDDING CLOSES 26 JAN 2027",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      aria-hidden
      className="marquee -rotate-[1.2deg] scale-x-[1.03] overflow-hidden border-y border-white/5 bg-night-soft/80 py-4 backdrop-blur-sm"
    >
      <div className="marquee-track flex w-max items-center">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="whitespace-nowrap font-display text-2xl tracking-widest2 text-bone-muted">
              {item}
            </span>
            <span className="mx-8 h-1.5 w-1.5 rotate-45 bg-accent" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
