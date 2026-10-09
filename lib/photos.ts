/**
 * PHOTO SHOWROOM ASSET SYSTEM
 * ------------------------------------------------------------------
 * This single file drives the photo-based showroom.
 *
 * HOW TO GO LIVE WITH REAL PHOTOGRAPHS:
 * 1. Shoot the bike following docs/PHOTOGRAPHY-CHECKLIST.md.
 * 2. Name each file exactly as its view id (e.g. front-3q.jpg) and drop
 *    it into  public/photos/   (see public/photos/README.md).
 * 3. Set PHOTOS_PENDING to false.
 * 4. For every view, set `src: "/photos/<id>.jpg"` and adjust the
 *    hotspot/placement percentages so they sit on the real surfaces.
 *    Open the site with  ?calibrate=1  and click where a lot sits — the
 *    panel gives you the exact x% / y% numbers to paste here.
 * 5. Rebuild and deploy. Nothing else in the site needs to change.
 *
 * ALL numbers are percentages of the image box (0-100), so they survive
 * any image size. Nothing here is measured physical reality — the
 * concept disclaimer renders on the page at all times.
 */

import { ZONES } from "@/lib/zones";

/** true while placeholder plates are shown; flip to false when real photos land */
export const PHOTOS_PENDING = true;

export type Hotspot = { id: string; x: number; y: number };

/** default logo-overlay placement per lot, per view (percent + transform) */
export type Placement = {
  id: string;
  x: number;
  y: number;
  /** logo width as % of image width */
  w: number;
  /** rotation in deg — approximates the surface angle in the photo */
  rot: number;
  /** horizontal skew in deg — cheap perspective cue; tune per photo */
  skew: number;
};

export type PhotoView = {
  id: string;
  label: string;
  /** shown under the chips — what this shot is for */
  hint: string;
  /** null while the photograph is pending */
  src: string | null;
  /**
   * placeholder plate = schematic line-art crop (SVG viewBox coords on the
   * 760x400 lot-map schematic) so the pending state still shows the bike.
   */
  crop: { x: number; y: number; w: number; h: number };
  hotspots: Hotspot[];
  placements: Placement[];
};

const P = (id: string, x: number, y: number, w: number, rot = 0, skew = 0): Placement => ({
  id, x, y, w, rot, skew,
});

export const PHOTO_VIEWS: PhotoView[] = [
  {
    id: "front-3q",
    label: "Front ¾",
    hint: "The hero shot — tank, forks and mudguard",
    src: null,
    crop: { x: 0, y: 0, w: 760, h: 400 },
    hotspots: [
      { id: "T1", x: 44.1, y: 55 },
      { id: "D5", x: 56.6, y: 47.5 },
      { id: "D2", x: 27.4, y: 58 },
      { id: "D3", x: 25.8, y: 66.5 },
    ],
    placements: [P("T1", 44, 50, 15, -4, 6), P("D5", 56.6, 42.5, 9, -3, 4), P("D2", 27.4, 53, 12, 8, -5), P("D3", 25.8, 61.5, 9, 0, 0)],
  },
  {
    id: "side-l",
    label: "Side L",
    hint: "Full left profile — the money view for tank and covers",
    src: null,
    crop: { x: 0, y: 0, w: 760, h: 400 },
    hotspots: [
      { id: "T1", x: 44.1, y: 55 },
      { id: "D1", x: 64, y: 63 },
      { id: "F3", x: 74.5, y: 54.5 },
      { id: "F5", x: 85.8, y: 53 },
      { id: "D4", x: 85.8, y: 62 },
      { id: "D2", x: 27.4, y: 58 },
      { id: "D3", x: 25.8, y: 66.5 },
    ],
    placements: [P("T1", 44, 48, 16, -2, 0), P("D1", 64, 56, 10, 0, 0), P("F3", 74.5, 47.5, 12, -2, 0), P("F5", 85.8, 46.5, 14, 0, 0), P("D4", 85.8, 56.5, 9, 0, 0), P("D2", 27.4, 51, 13, -6, 0), P("D3", 25.8, 61.5, 9, 0, 0)],
  },
  {
    id: "side-r",
    label: "Side R",
    hint: "Full right profile — pannier and exhaust side",
    src: null,
    crop: { x: 0, y: 0, w: 760, h: 400 },
    hotspots: [
      { id: "T1", x: 44.1, y: 55 },
      { id: "D1", x: 64, y: 63 },
      { id: "F3", x: 74.5, y: 54.5 },
      { id: "F5", x: 85.8, y: 53 },
      { id: "D4", x: 85.8, y: 62 },
    ],
    placements: [P("T1", 44, 48, 16, -2, 0), P("D1", 64, 56, 10, 0, 0), P("F3", 74.5, 47.5, 12, -2, 0), P("F5", 85.8, 46.5, 14, 0, 0), P("D4", 85.8, 56.5, 9, 0, 0)],
  },
  {
    id: "front",
    label: "Front",
    hint: "Dead-on front — headlamp, forks, mudguard",
    src: null,
    crop: { x: 60, y: 80, w: 300, h: 300 },
    hotspots: [
      { id: "D2", x: 49.3, y: 50.7 },
      { id: "D3", x: 45.3, y: 62 },
    ],
    placements: [P("D2", 49.3, 45.7, 14, 0, 0), P("D3", 45.3, 57, 10, 0, 0)],
  },
  {
    id: "rear-3q",
    label: "Rear ¾",
    hint: "Seat cowl, panniers and tail",
    src: null,
    crop: { x: 480, y: 40, w: 280, h: 300 },
    hotspots: [
      { id: "F3", x: 30.7, y: 59.3 },
      { id: "F5", x: 61.4, y: 57.3 },
      { id: "D4", x: 61.4, y: 69.3 },
      { id: "F1", x: 5.4, y: 4 },
    ],
    placements: [P("F3", 30.7, 52.3, 12, -3, -6), P("F5", 61.4, 50.3, 13, 0, -4), P("D4", 61.4, 62.3, 9, 0, -3)],
  },
  {
    id: "rear",
    label: "Rear",
    hint: "Dead-on rear — pannier faces",
    src: null,
    crop: { x: 560, y: 160, w: 190, h: 200 },
    hotspots: [
      { id: "F5", x: 48.4, y: 26 },
      { id: "D4", x: 48.4, y: 44 },
    ],
    placements: [P("F5", 48.4, 19, 12, 0, 0), P("D4", 48.4, 37, 9, 0, 0)],
  },
  {
    id: "tank-l",
    label: "Tank L",
    hint: "Left tank flank close-up — Title lot territory",
    src: null,
    crop: { x: 300, y: 150, w: 220, h: 130 },
    hotspots: [
      { id: "T1", x: 15.9, y: 53.8 },
      { id: "D5", x: 59.1, y: 30.8 },
    ],
    placements: [P("T1", 15.9, 44.8, 18, -3, 4), P("D5", 59.1, 21.8, 11, -5, 3)],
  },
  {
    id: "cowl",
    label: "Cowl",
    hint: "Seat cowl and side covers close-up",
    src: null,
    crop: { x: 520, y: 180, w: 180, h: 110 },
    hotspots: [
      { id: "F3", x: 25.6, y: 34.5 },
      { id: "D4", x: 73.3, y: 61.8 },
    ],
    placements: [P("F3", 25.6, 26.5, 16, -2, 0), P("D4", 73.3, 53.8, 11, 0, 0)],
  },
  {
    id: "fork",
    label: "Fork",
    hint: "Front mudguard and fork sliders close-up",
    src: null,
    crop: { x: 100, y: 120, w: 180, h: 200 },
    hotspots: [
      { id: "D2", x: 60, y: 56 },
      { id: "D3", x: 53.3, y: 73 },
    ],
    placements: [P("D2", 60, 49, 15, -8, 0), P("D3", 53.3, 66, 11, 0, 0)],
  },
  {
    id: "pannier",
    label: "Pannier",
    hint: "Pannier outer faces close-up",
    src: null,
    crop: { x: 560, y: 160, w: 180, h: 140 },
    hotspots: [
      { id: "F5", x: 51.1, y: 37.1 },
      { id: "D4", x: 51.1, y: 62.9 },
    ],
    placements: [P("F5", 51.1, 30.1, 14, 0, 0), P("D4", 51.1, 55.9, 10, 0, 0)],
  },
];

/** the default hero view */
export const DEFAULT_VIEW = "front-3q";

export function zonesIn(view: PhotoView) {
  return view.hotspots
    .map((h) => ZONES.find((z) => z.id === h.id))
    .filter(Boolean) as typeof ZONES;
}

/** the photography checklist rendered from the same manifest — one source of truth */
export function checklistFor(view: PhotoView) {
  const zs = zonesIn(view);
  return {
    file: `${view.id}.jpg`,
    lots: zs.map((z) => `${z.id} ${z.name}`).join(", "),
  };
}
