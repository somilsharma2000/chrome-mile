export type Tier = "Title" | "Feature" | "Detail";

export const TIER_PRICE: Record<Tier, number> = {
  Title: 75000,
  Feature: 25000,
  Detail: 12500,
};

export const TIER_BLURB: Record<Tier, string> = {
  Title: "The two largest, most photographed surfaces in the livery. One brand each.",
  Feature: "High-visibility placements in every photo, video and pass-by.",
  Detail: "Finishing placements that complete the livery without clutter.",
};

export const AUCTION_CLOSE_ISO = "2027-01-26T23:59:59+05:30";
// Verified at build time: 0 lots claimed. Live numbers only.
export const LOTS_CLAIMED = 0;
export const LOTS_TOTAL = 12;
export const ALL_OR_NOTHING_INR = 250000;
export const BIDDER_DEPOSIT_INR = 2000;

export type Zone = {
  id: string;
  name: string;
  where: string;
  size: string;
  tier: Tier;
  /** marker coordinates on the lot map (svg viewBox 0 0 760 400) */
  x: number;
  y: number;
};

export const ZONES: Zone[] = [
  { id: "T1", name: "Tank Flanks", where: "Both flanks of the fuel tank — sold as one lot", size: "12 × 4 cm pair", tier: "Title", x: 335, y: 220 },
  { id: "T2", name: "Title Rights — Jacket Back", where: "Upper back of the rider jacket", size: "15 × 5 cm", tier: "Title", x: 560, y: 128 },
  { id: "F1", name: "Helmet Rear Rim", where: "Rear rim of the helmet, above the visor line", size: "6 × 3 cm", tier: "Feature", x: 495, y: 52 },
  { id: "F2", name: "Helmet Jawline", where: "Both jawline sides of the helmet — one lot", size: "7 × 2.5 cm pair", tier: "Feature", x: 462, y: 92 },
  { id: "F3", name: "Seat Cowl Flanks", where: "Both flanks of the rear seat cowl — one lot", size: "10 × 4 cm pair", tier: "Feature", x: 566, y: 218 },
  { id: "F4", name: "Rider Jacket Chest", where: "Chest of the rider jacket", size: "8 × 4 cm", tier: "Feature", x: 487, y: 158 },
  { id: "F5", name: "Pannier Flanks", where: "Outer faces of both touring panniers — one lot", size: "12 × 5 cm pair", tier: "Feature", x: 652, y: 212 },
  { id: "D1", name: "Side Covers", where: "Both side covers below the seat — one lot", size: "8 × 3 cm pair", tier: "Detail", x: 486, y: 252 },
  { id: "D2", name: "Front Mudguard Tail", where: "Tail of the front mudguard", size: "10 × 2.5 cm", tier: "Detail", x: 208, y: 232 },
  { id: "D3", name: "Fork Sliders", where: "Both fork slider tubes — one lot", size: "8 × 3 cm pair", tier: "Detail", x: 196, y: 266 },
  { id: "D4", name: "Pannier Rear Face", where: "Rear face of the right pannier", size: "8 × 3 cm", tier: "Detail", x: 652, y: 248 },
  { id: "D5", name: "Tank Bag Rear Lip", where: "Rear lip of the tank bag", size: "8 × 3 cm", tier: "Detail", x: 430, y: 190 },
];

export const waBidLink = (z: Zone) =>
  `https://wa.me/917737077479?text=${encodeURIComponent(
    `Hi! I'm bidding on Lot ${z.id} — ${z.name} (${z.where}, ${z.size}, opens ₹${TIER_PRICE[z.tier].toLocaleString("en-IN")}) for Chrome Yatra. Please share the bidder terms and deposit details.`
  )}`;

export const waGeneral = `https://wa.me/917737077479?text=${encodeURIComponent(
  "Hi! I'd like the Chrome Yatra sponsor pack — lot map, auction rules and the sponsor agreement."
)}`;
