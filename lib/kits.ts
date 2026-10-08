export type Kit = {
  id: string;
  name: string;
  tagline: string;
  price_inr: number;
  features: string[];
  badge?: string;
};

/**
 * SAMPLE DATA — replace with the real catalog before launch.
 * Prices and kit contents are placeholders, not live inventory.
 */
export const KITS: Kit[] = [
  {
    id: "number-12-heritage",
    name: "Number 12 Heritage Set",
    tagline: "The signature kit. Racing roundels, period-correct stripes, number plates.",
    price_inr: 2999,
    features: [
      "Twin racing roundels with custom number",
      "Heritage red/white centre stripe",
      "Pre-cut for tank, side panels and tail",
    ],
    badge: "Signature",
  },
  {
    id: "chrome-essentials",
    name: "Chrome Edition Essentials",
    tagline: "Minimal accents cut to complement factory chrome, not fight it.",
    price_inr: 1499,
    features: [
      "Slim chrome-shadow pinstripes",
      "Subtle tail badge",
      "Tank protectors included",
    ],
  },
  {
    id: "tt-circuit-pinstripe",
    name: "TT Circuit Pinstripe",
    tagline: "Hand-finished gold pinstriping inspired by 1960s TT racers.",
    price_inr: 2499,
    features: [
      "Gold metallic vinyl pinstripes",
      "Fork and tank accents",
      "Lay-flat application tape",
    ],
  },
  {
    id: "blackout-performance",
    name: "Blackout Performance",
    tagline: "Matte black stealth treatment for the full bodywork.",
    price_inr: 1999,
    features: [
      "Matte black panels and rim tapes",
      "Engine case accents",
      "Zero-gloss finish",
    ],
  },
  {
    id: "racing-stripe-twin",
    name: "Racing Stripe Twin",
    tagline: "Classic dual centre stripes in heritage red.",
    price_inr: 2199,
    features: [
      "Twin 25mm centre stripes",
      "Tail and belly accents",
      "Application jig included",
    ],
  },
  {
    id: "full-race-livery",
    name: "Full Race Livery",
    tagline: "The complete package — every panel, one coherent race look.",
    price_inr: 3999,
    features: [
      "All Heritage Set contents",
      "Belly pan and huger graphics",
      "Custom name/number roundels",
    ],
    badge: "Complete",
  },
];
