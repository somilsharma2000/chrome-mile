> **STATUS: CONCEPT STAGE (2026-10-10).** Chrome Mile is a concept campaign: no vehicle
> partnership is secured, no placement is physically measured, no auction is live, and any
> prices, dates or mechanics in this document are PROPOSED DRAFTS — not commitments. See
> docs/VEHICLE-PARTNERSHIP-CHECKLIST.md for the gate that must pass first.

# PHOTOGRAPHY CHECKLIST — THE ACTUAL MACHINE

**Purpose:** capture the real Royal Enfield Continental GT 650 (Mr. Clean) so every
lot can be previewed on the actual motorcycle. The website ships with clearly-labelled
concept plates; each shot below replaces one plate. No rebuild, no redesign — drop in
the files and the showroom goes live with your bike.

**This is not optional polish.** Brands approve placements against the real machine.
Until these shots exist, the showroom honestly says "concept imagery — photographs pending".

---

## SETUP (applies to every shot)

| Item | Requirement |
|---|---|
| Bike | Cleaned, chrome polished, no dust, tyre pressures correct, paddock stand if available (side stand tilts the bike) |
| Location | Plain wall (grey/white), open shade or overcast sky. No harsh direct sun — chrome blows out |
| Time | Overcast day, or golden hour if the wall is in shade |
| Camera | Any modern phone. Use **2x–3x zoom from 3–4 metres** — never 0.5x/0.6x wide angle (it bends the tank) |
| Height | Lens at the height of the tank centre (chest height), phone parallel to the wall |
| Format | Landscape, **4:3**, standard photo mode. Do not crop. HDR off if it looks artificial |
| Angles | Hold the phone level left-to-right. Keep the bike dead-centre with clear margin on all sides |
| File | Highest quality JPEG. File name = the shot ID exactly (e.g. `front-3q.jpg`) |

Take each shot 2–3 times, keep the best. Total time: about 45 minutes.

---

## THE SHOTS

### 1. `front-3q.jpg` — Front three-quarter (THE HERO)
- Standing at the front-left of the bike, 45° off dead-centre.
- Frame: front tyre to top of headlamp, full front wheel in shot.
- **Enables preview of:** T1 Tank Flanks · D5 Tank Bag Rear Lip · D2 Front Mudguard Tail · D3 Fork Sliders

### 2. `side-l.jpg` — Full left profile (THE MONEY SHOT)
- Squat to tank height, phone exactly parallel to the bike's centreline.
- Frame: entire bike from tyre edge to tyre edge, small margin.
- **Enables:** T1 · D1 Side Covers · F3 Seat Cowl Flanks · F5 Pannier Flanks · D4 Pannier Rear Face · D2 · D3

### 3. `side-r.jpg` — Full right profile
- Same as above, from the right (exhaust side).
- **Enables:** T1 · D1 · F3 · F5 · D4

### 4. `front.jpg` — Dead-on front
- Square to the headlamp, tank-height.
- Frame: mudguard bottom to bars top.
- **Enables:** D2 · D3

### 5. `rear-3q.jpg` — Rear three-quarter
- Rear-left of the bike, 45° off dead-centre.
- Frame: rear wheel to seat cowl, tail fully in shot.
- **Enables:** F3

### 6. `rear.jpg` — Dead-on rear
- Square to the tail, tank height.
- Frame: rear tyre to seat cowl top.
- **Enables:** F3 (seat cowl flanks)

### 7. `tank-l.jpg` — Left tank flank close-up
- 1 metre from the tank, phone square to the tank flank surface.
- Frame: the whole flank with chrome edge visible.
- **Enables:** T1 (Title lot) · D5

### 8. `tank-r.jpg` — Right tank flank close-up
- Mirror of shot 7.
- **Enables:** T1 · D5

### 9. `cowl.jpg` — Seat cowl + side covers close-up
- 1 metre, square to the cowl flank.
- **Enables:** F3 · D1 · D4

### 10. `fork.jpg` — Front mudguard + fork close-up
- 1 metre, square to the fork legs.
- **Enables:** D2 · D3

### 11. `swingarm.jpg` — Swingarm right side
- 1 metre, square to the swingarm.
- **Enables:** D1 background context


---

## GOING LIVE (5 minutes, no rebuild of the site's code)

1. Send me the shots (email or upload). **I handle the rest.**
2. Files drop into `public/photos/` named exactly as above.
3. In `lib/photos.ts`: `PHOTOS_PENDING` flips to `false`, each view's `src` points at its file.
4. Hotspot positions get re-calibrated: open the site with `?calibrate=1`, click where each lot sits, paste the readout numbers in. I do this for you.
5. Deploy. The "concept imagery" banner disappears automatically.

**Rule that never changes:** the concept disclaimer (not to scale; final placement subject to measurement, materials, safety, approvals) stays on the page permanently — even with real photos.
