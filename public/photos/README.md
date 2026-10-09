# public/photos — REAL PHOTOGRAPH DROP ZONE

Every file here replaces one placeholder plate in the showroom.

## Procedure
1. Photograph the actual bike per `docs/PHOTOGRAPHY-CHECKLIST.md`.
2. Save each shot with EXACTLY its view id as the filename:
   front-3q.jpg, side-l.jpg, side-r.jpg, front.jpg, rear-3q.jpg, rear.jpg,
   tank-l.jpg, tank-r.jpg, cowl.jpg, fork.jpg, pannier.jpg,
   (optional) helmet.jpg, jacket.jpg
   — landscape 4:3, minimum 2048 px wide, uncropped, unfiltered.
3. In `lib/photos.ts` set `PHOTOS_PENDING = false` and fill each view's `src`
   with `/photos/<id>.jpg`.
4. Recalibrate hotspots: open the site with `?calibrate=1`, click where each
   lot sits on the real photo, paste the x/y percentages into the view's
   `hotspots` and `placements`.
5. Rebuild + deploy (standard flow). The "photographs pending" banner clears
   itself automatically once `PHOTOS_PENDING` is false.

Nothing else in the site touches these files. No component changes needed.
