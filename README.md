# The Twelve

**A sponsorship auction on one motorcycle.** 24 physical ad zones — every panel, cowl and square inch of rider kit on a Royal Enfield Continental GT 650 Chrome Edition — auctioned to brands. Winners get their mark as a decal on the bike; every ride is logged and sponsors receive per-kilometre certificates.

- **Campaign fund goal:** ₹4,00,000
- **Auction closes:** 26 January 2027 (Republic Day), 23:59 IST
- **Bidding:** WhatsApp intake now (`+91 77370 77479`); online bidding engine in Phase 2

Chrome Night design system: near-black surfaces, chrome metallic display type, one heritage racing red accent. Built with Next.js 14, Tailwind CSS, Framer Motion and Lucide icons.

## Status — LIVE vs PLANNED (zero-fraud documentation)

**LIVE in this codebase:**
- Auction landing: live countdown, honest fund progress (₹0 / ₹4,00,000 — no projections)
- Interactive SVG zone map (24 lots, tier-coded, tap-through to lot cards)
- Full lot inventory: 6 Prime, 8 Grid, 10 Zones with tier opening prices
- Bid-on-WhatsApp CTAs with per-zone prefilled messages
- How-it-works, sponsor kit (concrete deliverables), auction FAQ, legal disclaimers
- SEO: metadata, OpenGraph, `robots.ts`, `sitemap.ts` with env-based base URL

**PLANNED (not built yet — never describe as done):**
- Online bidding engine with email-OTP verification (exists in the Base44 app, not connected here)
- Razorpay payment collection (Razorpay key not configured as of build)
- Ride log / per-km certificate delivery system
- Real install photography (requires physical decals)

## Zone pricing

Opening prices are tier floors: **Prime ₹5,000 · Grid ₹3,000 · Zones ₹1,000**.
These are the recommended opening prices; the founder confirms final floors before launch.
Fork-leg zones are "placement authority" (founder-allocated, not auctioned).

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in real values
npm run dev                  # http://localhost:3000
```

## Deploy

Free static hosting via GitHub Pages (already configured — `gh-pages` branch + `EXPORT_MODE=1` build):

```bash
EXPORT_MODE=1 NEXT_PUBLIC_SITE_URL="https://<your-domain>" npm run build
# deploy the ./out folder (includes .nojekyll)
```

For Vercel: import the repo, add env vars, deploy — leave `EXPORT_MODE` unset.

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Sitemap/robots/metadata base URL — always the live domain in production |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp bid intake (defaults to the campaign number) |

## Legal

Independent campaign. Not affiliated with Royal Enfield or Eicher Motors. All bids are offers subject to written confirmation. Keep these disclaimers in the footer.
