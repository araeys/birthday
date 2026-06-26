# Cinta Birthday Website - Merlin Handoff

## Project Summary

This is an interactive birthday gift website for Cinta Ayu Wulandari, made by Reyhan/Rey. The site is a dark plum, pink coquette, romantic, cinematic web experience with animated sections, personal messages, mini games, music, sound effects, and downloadable/shareable moments.

This export is the latest known complete version selected from the active Codex project folder.

## Main Features / Sections

- Intro text sequence and password gate
- Magical gift box opening with Cinta GIF reveal
- Live timer since 06 February 2026
- Instagram-style first DM simulation with typing/replay interaction
- Happy Birthday hero section with vinyl player/music selector
- 3D-style lanyard/card section
- Interactive notes, liquid wishes, mood jar, rose bloom, secret scratch note, candle blowout
- Custom bouquet builder with real PNG flower/wrapper assets and PNG export
- Virtual claw machine with plush prizes and coupon collection
- Date Invitation, Date Selection, Girlfriend Proposal, and Ring Reveal flow
- Final birthday surprise and WhatsApp reply CTA

## File Structure

```text
cinta-birthday-export/
  index.html
  app.js
  styles.css
  final-overrides.css
  server.js
  README.md
  README_MERLIN.md
  PROJECT_EXPORT_REPORT.md
  TASK_DATE_PROPOSAL.md
  flow-smoke.test.mjs
  assets/
    fonts/
    date-flow/
    particles/
    proposal/
    sfx/
    images/audio used by the site
  bouquet/
    bouquet and flower PNG assets
  claw/
    plush PNG assets
```

## How To Preview Locally

This is a plain static HTML/CSS/JS project with a small Node static server.

From this folder:

```powershell
node server.js
```

Default preview URL:

```text
http://localhost:4173
```

Use another port if needed:

```powershell
$env:PORT='4373'; node server.js
```

For mobile testing on the same Wi-Fi, run the server and open:

```text
http://<PC_LOCAL_IP>:4173
```

## Files Merlin Should Focus On

- `index.html` for section markup and flow structure
- `app.js` for interactions, state, SFX, timers, mini games, date/proposal flow
- `styles.css` for the main visual system and responsive layout
- `final-overrides.css` for late-stage polish/fixes
- `assets/` only when replacing or adding referenced media
- `TASK_DATE_PROPOSAL.md` for the latest date/proposal/ring flow requirements

## Font Notes

The uploaded custom fonts are included and already wired with `@font-face`:

- `assets/fonts/Wasted-Vindey.ttf` for elegant serif/display headings
- `assets/fonts/symphony-pro-regular.otf` for short script accents only
- `assets/fonts/red-hat-display/` for readable sans-serif body/subtext

Font usage rule from Rey: do not use script/latin font for long text. Use it only as a short accent or first word/letter pairing. Long body text should stay readable with Red Hat Display or the serif display font.

## Last Worked-On Task History

The last major implementation work focused on the Date Invitation, Date Selection, Girlfriend Proposal, and Ring Reveal flow:

- Added/updated `TASK_DATE_PROPOSAL.md`
- Copied date/proposal assets into `assets/date-flow/`
- Added date thumbnails under `assets/date-flow/thumbnails/`
- Updated Date Invitation / Date Selection / Proposal / Ring state flow in `index.html`, `app.js`, and `final-overrides.css`
- Ran smoke checks for the date/proposal flow before export

The current export is intended as a safe handoff for Merlin AI to continue from the latest project state.

## Rules For Merlin

1. Audit the current code and assets first before changing anything.
2. Do not randomly redesign the whole website.
3. Preserve the current dark plum / soft pink coquette romantic style.
4. Improve only the parts Rey explicitly approves.
5. Keep animations smooth, lightweight, and mobile-safe.
6. Do not remove existing assets, sounds, fonts, or personal copy unless asked.
7. Check mobile responsiveness after every major UI change.
8. Keep the site scrollable unless Rey explicitly asks for another navigation model.
9. Avoid changing global SFX behavior unless the request specifically mentions SFX.
