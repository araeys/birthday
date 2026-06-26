# Ray Date + Proposal Big Improve V2

## Main fixes
- Reduced confetti usage so it only appears on a truly major moment in the proposal flow.
- Added a new pre-proposal vibe song choice step with 3 options:
  - Drakor Vibes
  - Soft Vibes
  - Cute Vibes
- Added a start button after song selection so the user intentionally starts the proposal scene.
- Proposal vibe music now temporarily pauses the current vinyl/BGM track and resumes the previous track after the chosen vibe song ends.
- Removed the odd typing-style SFX from the proposal intro text.
- Improved typography and visual hierarchy for the date invitation, proposal intro, proposal question, ring closeup, and final official text.
- Added animated styling for the word “girlfriend”.
- Reworked the ring sequence:
  - smoother closed-box opening motion
  - clearer open-box state
  - floating ring animation before the closeup reveal
  - cleaner closeup ring presentation
- Included the new MP3 files inside `assets/proposal/`:
  - `DrakorVibes.mp3`
  - `SoftVibes.mp3`
  - `CuteVibes.mp3`

## Technical notes
- Updated `index.html`
- Updated `app.js`
- Updated `final-overrides.css`
- Bundled the new proposal vibe MP3 assets in `assets/proposal/`
- Smoke test still passes

## Preview
Run locally with:

```bash
node server.js
```

Then open:

```text
http://localhost:4173
```

If port 4173 is busy:

```bash
set PORT=5173 && node server.js
```

Then open:

```text
http://localhost:5173
```
