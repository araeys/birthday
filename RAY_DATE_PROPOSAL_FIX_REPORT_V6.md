# Ray Date + Proposal V6 Fix

## Source strategy
This version uses V2 as the base for the proposal song system because V2 already had the 3-song selector working. I preserved the current requested updates on top of that base instead of continuing from the broken V5 path.

## Fixed
- After clicking `Lanjut`, the first visible proposal panel is now the 3-song vibe selector, not the blank `One more tiny thing` panel.
- The proposal section initial state is `proposalSong`.
- `proposalSongPanel` is present and not hidden by default.
- `proposalIntro` is hidden by default until the user chooses a vibe and presses start.
- App/CSS cache versions bumped to `proposal-v6`.

## Kept/updated from requested changes
- Proposal intro wording restored to requested V1-style lines.
- Confirm text restored to `BENERAN YAA?! cause after this, i’m gonna be annoyingly proud about it 😋`.
- Proposal question design keeps `Girlfriend?` on its own emphasized line.
- Date No button uses fail-style SFX and shake.
- Roll date mood gives a small confetti burst.
- Question reveal gives three small confetti bursts.
- Proposal vibe song plays up to 2 times, then stops and resumes previous BGM if it was playing.
- Ring reveal keeps glow/floating/confetti moment.
- Final official panel includes replay button to restart the proposal simulation.
- Golden/kicker text is slightly larger.
- Date selection text alignment and final surprise card are improved.

## Validation
- `node -c app.js` passed.
- `node flow-smoke.test.mjs` passed.
