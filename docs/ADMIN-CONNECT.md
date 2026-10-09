# Chrome Mile — Admin Connect Plan (internal)

Everything below is connected later from the admin panel. The static site needs
none of it to stay live. Order = dependency order.

## 1. Payment provider (decision)

**Recommended: Cashfree (India first) + Stripe (global add-on, when available).**

- Razorpay: prohibited category (auction houses) — DO NOT use.
- PayU / Paytm: RBI onboarding bars + auction is a cautious category — avoid.
- Stripe India: invite-only for new merchants — global brands can pay via
  Stripe once an account is available; not the Phase 1 rail.
- Cashfree: actively onboarding, high success rates, standard collect + refund
  APIs. Phase 1 use: ₹2,000 refundable bidder deposits + 30/70 winning payments.
  Get WRITTEN approval of the auction business model before go-live.

**Verify in writing before enabling money:**
1. Business model approval (deposit-backed livery auction)
2. Refund flow + timelines (deposits refund same-day/7-day windows)
3. Settlement schedule and fees
4. International card support + currency (for brands outside India)
5. Webhook signatures + reconciliation reports

## 2. What connects, in order (admin panel)

1. **Bid intake form** — replaces the current "#how" CTAs. Stores bidder
   registrations in a Bids entity (brand, contact, lot, amount, deposit status).
2. **Payment collection** — deposit links + winner invoices via the chosen
   provider. Keys go in admin secrets, never in site code.
3. **Leaderboard** — reads real bid data only. Zero bids = "No bids yet".
4. **Notifications** — outbid + close alerts via email connector.
5. **Analytics** — GA4 property per deployment, connected from admin.

## 3. Credit cost ledger (so nothing is a surprise)

| Work | Cost | Alternative used so far |
|---|---|---|
| Static site build + deploy | ₹0 (bash + GitHub API) | already free |
| Backend function deploy/test | integration credits | deferred until credits reset |
| Connector use (email, etc.) | integration credits | deferred |
| Automations / workflows | credits per run | none scheduled |
| Builder app edits | builder credits (metered) | not used |
| Chat turns | message credits | — |

Current status: integration credits exhausted this cycle (107.5/100). All
platform-side connections wait for the reset; site-side work stays free.
