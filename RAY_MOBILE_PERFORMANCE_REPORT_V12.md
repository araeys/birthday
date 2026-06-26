# Ray Mobile Performance Fix V12

## Goal
Make the Cinta birthday website safer on iPhone/mobile and reduce crash/lag risk.

## What changed
- Added a mobile-only loading screen at the start.
- The loading screen preloads critical mobile assets before showing the experience:
  - opening gift assets
  - profile/lanyard/clouds
  - date invitation background
  - date pass + date thumbnails
  - proposal background
  - ring box/ring assets
  - proposal GIFs
  - final surprise background
- Heavy late-section assets like bouquet/claw are no longer forced upfront. They are warmed slowly after idle time so mobile memory does not spike.
- Created mobile WebP assets for heavy images:
  - date backgrounds
  - date pass
  - date thumbnails
  - ring box/ring
  - final background
- Added responsive `srcset` for date and ring images so iPhone uses lighter assets.
- Reduced mobile particle/confetti load.
- Reduced mobile-heavy visual effects:
  - less backdrop blur
  - fewer petals/orbit/floating elements
  - lighter shadows
  - lower confetti count
- Improved mobile layout for:
  - date invitation
  - date pass/date selection grid
  - proposal/song picker
  - ring stage
  - final surprise card
- Added strict mobile overflow-x protection.

## Important note
The mobile loader loads the assets needed for the early/main flow first. It does not aggressively preload every single heavy late-game image at once because that is exactly what can crash iPhone Safari. Heavy sections are warmed later in the background.

## Validation
- `node -c app.js` passed.
- `node flow-smoke.test.mjs` passed.

## Preview advice
Extract to a new folder, run:

```bash
set PORT=5173 && node server.js
```

Open from iPhone via laptop IP:

```text
http://YOUR-LAPTOP-IP:5173
```

Then hard refresh / open in private tab if Safari caches old JS/CSS.
