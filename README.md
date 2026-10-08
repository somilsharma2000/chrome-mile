# Continental 12

Premium heritage racing decal kits for the **Royal Enfield Continental GT 650 Chrome Edition**.

Chrome Night design system: near-black surfaces, chrome metallic display type, one heritage racing red accent. Built with Next.js 14, Tailwind CSS, Framer Motion and Lucide icons.

## Status — LIVE vs PLANNED (zero-fraud documentation)

**LIVE in this codebase:**
- Full marketing site: Hero, kit catalogue, heritage section, what's-included, FAQ, footer
- Chrome Night design system (tokens in `tailwind.config.ts`)
- Scroll-reveal motion (transform/opacity only, `prefers-reduced-motion` respected)
- WhatsApp order CTAs with per-kit prefilled messages (env-driven)
- SEO: metadata, OpenGraph, `robots.ts`, `sitemap.ts` with env-based base URL

**PLANNED (not built yet — do not describe as done):**
- Online payments (Razorpay checkout)
- Order/inventory tracking backend
- Real product photography
- Auction / sponsorship flows (these exist separately in the Base44 app, not here)

**Sample data notice:** the kit catalogue in `lib/kits.ts` is placeholder data. Replace names, prices and contents with the real catalog before launch.

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in real values
npm run dev                  # http://localhost:3000
```

## Deploy (free, ~5 minutes)

1. Push this repo to GitHub (already done).
2. Go to https://vercel.com → Add New Project → import this repo.
3. Add the environment variables from `.env.example` (set `NEXT_PUBLIC_SITE_URL` to your live domain).
4. Deploy. Every future push to `main` auto-deploys.

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Sitemap/robots/metadata base URL — always the live domain in production |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp order number (international format, no `+`) |
| `NEXT_PUBLIC_INSTAGRAM` | Instagram handle without `@` |

## Design system

- Surfaces: `night` (#0A0A0B), `night-soft` (#121214), borders `night-line`
- Text: `bone` (#F5F2EC), muted `bone-muted`
- ONE accent: `accent` (#D6402B heritage red) — actions and highlights only
- Display font: Bebas Neue (`.font-display`), Body: Inter
- Motion law: only `transform`/`opacity`, 150–450ms, respect reduced motion
- Icons: Lucide only, single stroke weight

## Legal

Independent decal studio. Not affiliated with Royal Enfield or Eicher Motors. Keep this disclaimer in the footer.
