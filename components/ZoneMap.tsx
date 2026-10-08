import { TIER_PRICE, ZONES } from "@/lib/zones";

const TIER_FILL: Record<string, string> = {
  Prime: "#D6402B",
  Grid: "#C8C8CF",
  Zones: "#7A7A84",
};

export default function ZoneMap() {
  return (
    <section id="map" className="border-y border-white/5 bg-night-soft/50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest2 text-accent">
          The machine
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-wide text-bone sm:text-5xl">
          THE <span className="chrome-text">ZONE MAP</span>
        </h2>
        <p className="mt-4 max-w-xl text-bone-muted">
          Schematic of the Continental GT 650 Chrome Edition and the rider kit.
          Tap any marker to jump to its lot.
        </p>

        <div className="mt-10 overflow-x-auto rounded-lg border border-night-line bg-night p-4 sheen">
          <svg
            viewBox="0 0 760 400"
            role="img"
            aria-label="Zone map of the motorcycle and rider gear"
            className="h-auto w-full min-w-[640px]"
          >
            {/* ground */}
            <line x1="40" y1="352" x2="720" y2="352" stroke="#26262B" strokeWidth="2" />

            {/* wheels */}
            <g>
              <circle cx="170" cy="290" r="56" fill="#101013" stroke="#3A3A42" strokeWidth="10" />
              <circle cx="170" cy="290" r="30" fill="none" stroke="#9A9AA2" strokeWidth="2" />
              <circle cx="590" cy="290" r="56" fill="#101013" stroke="#3A3A42" strokeWidth="10" />
              <circle cx="590" cy="290" r="30" fill="none" stroke="#9A9AA2" strokeWidth="2" />
            </g>

            {/* front fender */}
            <path d="M 112 258 A 62 62 0 0 1 228 258" fill="none" stroke="#9A9AA2" strokeWidth="5" strokeLinecap="round" />

            {/* fork */}
            <line x1="170" y1="290" x2="252" y2="168" stroke="#9A9AA2" strokeWidth="9" strokeLinecap="round" />
            {/* handlebar */}
            <line x1="252" y1="168" x2="216" y2="138" stroke="#C8C8CF" strokeWidth="4" strokeLinecap="round" />
            {/* front cowl / flyscreen */}
            <path d="M 240 158 L 292 172 L 268 196 L 236 182 Z" fill="#16161A" stroke="#9A9AA2" strokeWidth="2" />

            {/* tank */}
            <path d="M 312 208 C 330 176 428 172 462 202 L 458 244 L 316 244 Z" fill="#16161A" stroke="#C8C8CF" strokeWidth="2.5" />

            {/* engine */}
            <rect x="348" y="244" width="86" height="58" rx="8" fill="#121216" stroke="#3A3A42" strokeWidth="2.5" />
            {/* exhaust */}
            <path d="M 434 288 C 520 296 560 300 648 312" fill="none" stroke="#9A9AA2" strokeWidth="7" strokeLinecap="round" />

            {/* seat + rear cowl */}
            <path d="M 462 206 L 540 202 C 572 202 588 216 582 236 L 536 232 Z" fill="#16161A" stroke="#9A9AA2" strokeWidth="2.5" />
            {/* side panels hint */}
            <rect x="474" y="234" width="58" height="26" rx="5" fill="#121216" stroke="#3A3A42" strokeWidth="2" />

            {/* swingarm */}
            <line x1="590" y1="290" x2="502" y2="252" stroke="#9A9AA2" strokeWidth="7" strokeLinecap="round" />

            {/* crash guard */}
            <path d="M 282 238 C 256 276 274 310 322 320" fill="none" stroke="#7A7A84" strokeWidth="4" strokeLinecap="round" />

            {/* panniers */}
            <rect x="626" y="196" width="56" height="60" rx="6" fill="#16161A" stroke="#9A9AA2" strokeWidth="2.5" />

            {/* rider: helmet + torso */}
            <circle cx="495" cy="90" r="40" fill="#16161A" stroke="#C8C8CF" strokeWidth="2.5" />
            <path d="M 508 78 A 26 26 0 0 1 508 100" fill="none" stroke="#D6402B" strokeWidth="3" />
            <path d="M 470 126 C 452 158 452 192 468 204 L 520 204 C 534 188 530 138 518 122 Z" fill="#16161A" stroke="#9A9AA2" strokeWidth="2.5" />

            {/* zone markers */}
            {ZONES.map((z) => (
              <a key={z.id} href={`#zone-${z.id}`}>
                <g
                  tabIndex={-1}
                  style={{ cursor: "pointer" }}
                  opacity={z.status === "AUTHORITY" ? 0.75 : 1}
                >
                  <circle
                    cx={z.x}
                    cy={z.y}
                    r="13"
                    fill={z.status === "AUTHORITY" ? "none" : TIER_FILL[z.tier]}
                    stroke={z.status === "AUTHORITY" ? "#7A7A84" : "none"}
                    strokeWidth="2"
                    strokeDasharray={z.status === "AUTHORITY" ? "3 3" : undefined}
                  />
                  <text
                    x={z.x}
                    y={z.y + 4}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="700"
                    fill={z.status === "AUTHORITY" ? "#A19D94" : "#0A0A0B"}
                  >
                    {z.id}
                  </text>
                </g>
              </a>
            ))}
          </svg>
        </div>

        {/* legend */}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-bone-muted">
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" /> Prime — opens ₹{TIER_PRICE.Prime.toLocaleString("en-IN")}
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#C8C8CF]" /> Grid — opens ₹{TIER_PRICE.Grid.toLocaleString("en-IN")}
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#7A7A84]" /> Zones — opens ₹{TIER_PRICE.Zones.toLocaleString("en-IN")}
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full border border-dashed border-bone-muted" /> Placement authority (not auctioned)
          </span>
        </div>
      </div>
    </section>
  );
}
