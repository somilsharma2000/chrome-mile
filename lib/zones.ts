export type Tier = "Prime" | "Grid" | "Zones";
export type ZoneStatus = "AVAILABLE" | "AUTHORITY";

export const TIER_PRICE: Record<Tier, number> = {
  Prime: 5000,
  Grid: 3000,
  Zones: 1000,
};

export const TIER_BLURB: Record<Tier, string> = {
  Prime: "Highest-visibility real estate on the machine and the rider.",
  Grid: "Strong surfaces seen in every photo and pass-by.",
  Zones: "Detail placements that complete the livery.",
};

export const AUCTION_CLOSE_ISO = "2027-01-26T23:59:59+05:30";
export const FUND_GOAL_INR = 400000;
// Verified at build time: 0 accepted bids in the campaign database.
export const RAISED_INR = 0;

export type Zone = {
  id: number;
  name: string;
  tier: Tier;
  status: ZoneStatus;
  /** schematic marker coordinates on the zone map (svg viewBox 0 0 760 400) */
  x: number;
  y: number;
};

export const ZONES: Zone[] = [
  { id: 1, name: "Helmet Shell — Left/Right", tier: "Prime", status: "AVAILABLE", x: 495, y: 52 },
  { id: 3, name: "Title Rights — Rider Jacket Back", tier: "Prime", status: "AVAILABLE", x: 560, y: 128 },
  { id: 4, name: "Rider Jacket Chest — Left", tier: "Grid", status: "AVAILABLE", x: 462, y: 155 },
  { id: 5, name: "Rider Jacket Chest — Right", tier: "Grid", status: "AVAILABLE", x: 512, y: 155 },
  { id: 6, name: "Rider Jacket Sleeve — Left", tier: "Grid", status: "AVAILABLE", x: 443, y: 178 },
  { id: 7, name: "Rider Jacket Sleeve — Right", tier: "Grid", status: "AVAILABLE", x: 531, y: 178 },
  { id: 8, name: "Tank Top Center", tier: "Grid", status: "AVAILABLE", x: 390, y: 196 },
  { id: 9, name: "Tank Flank — Left", tier: "Prime", status: "AVAILABLE", x: 330, y: 222 },
  { id: 10, name: "Tank Flank — Right", tier: "Prime", status: "AVAILABLE", x: 452, y: 224 },
  { id: 13, name: "Front Cowl / Flyscreen", tier: "Prime", status: "AVAILABLE", x: 272, y: 148 },
  { id: 15, name: "Front Fender — Left Flank", tier: "Zones", status: "AVAILABLE", x: 132, y: 232 },
  { id: 16, name: "Front Fender — Right Flank", tier: "Zones", status: "AVAILABLE", x: 208, y: 232 },
  { id: 17, name: "Outer Fork Leg — Left", tier: "Zones", status: "AUTHORITY", x: 196, y: 262 },
  { id: 18, name: "Outer Fork Leg — Right", tier: "Zones", status: "AUTHORITY", x: 222, y: 212 },
  { id: 19, name: "Side Panel — Left", tier: "Zones", status: "AVAILABLE", x: 486, y: 252 },
  { id: 20, name: "Side Panel — Right", tier: "Zones", status: "AVAILABLE", x: 522, y: 252 },
  { id: 21, name: "Crash Guard Plate — Left", tier: "Zones", status: "AVAILABLE", x: 285, y: 292 },
  { id: 22, name: "Crash Guard Plate — Right", tier: "Zones", status: "AVAILABLE", x: 305, y: 315 },
  { id: 23, name: "Rear Monoposto Cowl Flank", tier: "Prime", status: "AVAILABLE", x: 566, y: 218 },
  { id: 24, name: "Tail Cowl Upper Center", tier: "Grid", status: "AVAILABLE", x: 600, y: 198 },
  { id: 26, name: "Touring Pannier — Left", tier: "Grid", status: "AVAILABLE", x: 652, y: 212 },
  { id: 27, name: "Touring Pannier — Right", tier: "Grid", status: "AVAILABLE", x: 652, y: 244 },
  { id: 28, name: "Swingarm Tube — Left", tier: "Zones", status: "AVAILABLE", x: 556, y: 282 },
  { id: 29, name: "Swingarm Tube — Right", tier: "Zones", status: "AVAILABLE", x: 528, y: 266 },
];

export const availableCount = ZONES.filter((z) => z.status === "AVAILABLE").length;

export const waBidLink = (z: Zone) =>
  `https://wa.me/917737077479?text=${encodeURIComponent(
    `Hi! I want to bid on Zone ${z.id} — ${z.name} (opening ₹${TIER_PRICE[z.tier].toLocaleString("en-IN")}).`
  )}`;

export const waGeneral = `https://wa.me/917737077479?text=${encodeURIComponent(
  "Hi! I want to place a bid on the Continental 12 auction."
)}`;
