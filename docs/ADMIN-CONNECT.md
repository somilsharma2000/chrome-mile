> **STATUS: CONCEPT STAGE (2026-10-10).** Chrome Mile is a concept campaign: no vehicle
> partnership is secured, no placement is physically measured, no auction is live, and any
> prices, dates or mechanics in this document are PROPOSED DRAFTS — not commitments. See
> docs/VEHICLE-PARTNERSHIP-CHECKLIST.md for the gate that must pass first.

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
   provider. Secrets live only in the backend's secret store, never in site code.
3. **Leaderboard** — reads real bid data only. Zero bids = "No bids yet".
4. **Notifications** — outbid + close alerts via an email service.
5. **Analytics** — GA4 property per deployment, wired in at connect time.

## 3. Cost posture (so nothing is a surprise)

| Work | Cost today |
|---|---|
| Static site build + deploy | ₹0 (repo + git-based deploy to GitHub Pages) |
| Docs, policies, copy | ₹0 (in-repo) |
| Backend (bid intake, payments, notifications) | ₹0 today — nothing is connected at concept stage |

No platform vendor is locked in. When the campaign is cleared to connect, the
backend provider is selected on price, India payment-rail fit and auction-model
approval, and the full expected monthly cost is written here BEFORE anything is
signed. Until then, nothing metered runs and nothing is owed.
