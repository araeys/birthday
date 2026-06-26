# Ray Date + Proposal Improve V7

## Main updates
- Fixed proposal text readability, especially the “Girlfriend?” styling.
- Removed the awkward white line under “Girlfriend?” and replaced it with cleaner decorative treatment.
- Improved ring glow and floating animation in the open-ring and closeup stages.
- Proposal confirm text now uses a cleaner sans-serif medium feel.
- Final surprise card layout improved, raised slightly, with less flat UI and safer sticker positioning.
- Added 3 GIF accents in the proposal question stage:
  - top center excited GIF
  - left side cat GIF
  - right side cat GIF
- Changed proposal intro kicker to: “One more thing, baby..”
- Improved typewriter animation so line wrapping no longer reflows while typing.
  - full line layout is preserved from the start
  - each character fades in smoothly
- Enlarged the “on a date?” emphasis in the date invitation title.
- Improved hover light sweep on buttons so the sweep travels fully.
- Added failure SFX + shake behavior on no/reject buttons.

## Files updated
- index.html
- app.js
- final-overrides.css
- flow-smoke.test.mjs
- assets/proposal/wow-excited.gif
- assets/proposal/cat-cheer-left.gif
- assets/proposal/cat-cuddle-right.gif

## Validation
- node -c app.js ✅
- node flow-smoke.test.mjs ✅
