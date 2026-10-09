# Chrome Mile

**A concept-stage advertising-placement campaign on a chrome cafe-racer.** Twelve proposed decal
placements on a machine in the character of a Royal Enfield Continental GT 650 and its rider kit —
one brand per placement, GPS-verified ride proof once it rides. Ivory-on-graphite editorial design
system with a single racing-orange accent. Built with Next.js 14, Tailwind CSS, Framer Motion and
Lucide icons.

## Status — LIVE vs PLANNED (zero-fraud documentation)

**LIVE in this codebase (deployed):**
- Cinematic concept hero and honest status strip (no fabricated metrics)
- Concept studio: one licensed concept photograph (CC BY-SA 4.0, credited) with camera zoom
  presets, placement markers, logo upload with size/rotate/perspective controls, before/after
  compare, PNG export with the illustrative label baked in
- Lot map — technical schematic view (secondary)
- Twelve proposed placements, tiered, no prices (pricing announced at partnership confirmation)
- Brand-interest registration (WhatsApp compose + copy fallback) — non-binding, no payments
- Admin console (`/admin`): vehicle-partnership readiness checklist, inventory status,
  asset-swap guide (interim client-side, localStorage, JSON export)
- Asset calibration sheet (`/concept/calib.html`) for swapping the concept asset
- SEO: metadata, OpenGraph, `robots.ts`, `sitemap.ts` with env-based base URL

**NOT TRUE (and never to be claimed):**
- No vehicle is secured; the showroom image is a licensed concept photograph, not an actual
  campaign vehicle
- No placement is physically measured
- No auction, bidding, deposits or binding payments exist
- No audience reach, impressions, sponsors or results are claimed

**PLANNED (blocked, in order):**
- Vehicle partnership → measurement → pricing → (optionally) an auction engine
- Payment provider approval for any hold/capture model — hard blocker before bidding
- Platform backend for the admin CRM (Base44 integration credits currently exhausted)

## Quick start

```bash
npm install
EXPORT_MODE=1 NEXT_PUBLIC_SITE_URL="https://somilsharma2000.github.io" NEXT_PUBLIC_BASE_PATH="/chrome-mile" npm run build
# deploy the ./out folder (includes .nojekyll) to the gh-pages branch
```

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Sitemap/robots/metadata base URL — always the live domain in production |
| `NEXT_PUBLIC_BASE_PATH` | GitHub Pages subpath in export mode |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Brand-interest intake (currently a placeholder — see /admin checklist) |

## Legal

Independent concept campaign. Not affiliated with Royal Enfield or Eicher Motors. Concept
photograph: "Royal Enfield Continental GT 650 (1)" by Cjp24, Wikimedia Commons, CC BY-SA 4.0
(cropped and colour-graded). Keep the disclaimers in the footer and the status language honest.
