import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const html = readFileSync(new URL("./index.html", import.meta.url), "utf8");
const js = readFileSync(new URL("./app.js", import.meta.url), "utf8");
const css = readFileSync(new URL("./styles.css", import.meta.url), "utf8");
const finalCss = readFileSync(new URL("./final-overrides.css", import.meta.url), "utf8");

assert(
  html.includes('id="introGate"') && html.indexOf('id="introGate"') < html.indexOf('id="passcodeGate"'),
  "intro gate should exist before the passcode gate"
);

assert(
  js.includes('const code = "1607";'),
  "passcode should be updated to 1607"
);

assert(
  html.includes('class="floating-feature-menu"') && html.includes('id="featureMenuToggle"'),
  "floating feature menu should exist"
);

assert(
  html.includes('id="name-reveal"') && html.includes('id="bouquet"') && html.includes('id="claw-machine"') && html.includes('id="finale"'),
  "feature sections should stay in the scrollable document"
);

assert(
  !/initFeatureApp\(\);/.test(js),
  "per-container feature app should not run"
);

assert(
  /initWhenVisible\("#bouquet", initBouquetBuilder/.test(js) && /initWhenVisible\("#claw-machine", initClawMachine/.test(js),
  "heavy features should go back to viewport lazy init while staying scrollable"
);

assert(
  js.includes("const typingSpeed = reducedMotion ? 5 : 34;") && js.includes("const holdTime = reducedMotion ? 90 : 860;"),
  "intro typewriter should be slower and easier to read"
);

assert(
  !html.includes("before the gift opens"),
  "intro should not show the old kicker copy"
);

assert(
  html.includes("and every second has been worth it :)"),
  "timer romantic line should use the updated softer copy"
);

assert(
  html.includes("birthday girl · 16 July")
    && html.includes("Birthday: 16 July")
    && js.includes('birthdayLabel: "16 July"')
    && !html.includes("birthday girl · 19 July"),
  "birthday date should be corrected to 16 July in the visible birthday/pass UI"
);

assert(
  css.includes('font-family: "Red Hat Display"')
    && css.includes('font-family: "Wasted Vindey"')
    && css.includes('font-family: "Symphony Pro"'),
  "local typography fonts should be registered"
);

assert(
  existsSync(new URL("./assets/sfx/typing-clacky.wav", import.meta.url)),
  "mechanical keyboard typing sfx should be bundled"
);

assert(
  js.includes('typing: "./assets/sfx/typing.mp3"')
    && js.includes('introTyping: "./assets/sfx/typing-clacky.wav"')
    && js.includes('introReveal: "./assets/sfx/intro-future-fade.wav"'),
  "intro typing sfx should be separate and must not replace DM typing sfx"
);

assert(
  js.includes("const shouldPlayIntroReveal = lineIndex === 0 || lineIndex === lines.length - 1;")
    && js.includes("playOneShotAudio(config.audio.introReveal, 0.18)")
    && js.includes("playTimedOneShotAudio(config.audio.typing, 0.8")
    && js.includes("playOneShotAudio(config.audio.sent1, 0.78)")
    && js.includes("playOneShotAudio(config.audio.sent2, 0.78)"),
  "intro reveal should be subtle while DM section sfx is louder"
);

assert(
  existsSync(new URL("./assets/sfx/intro-future-fade.wav", import.meta.url)),
  "intro future fade sfx should be bundled"
);

assert(
  html.includes('gift-asset-closed')
    && html.includes('./assets/gift-box-utuh.png')
    && html.includes('./assets/box-opened.png')
    && html.includes('./assets/tutup-box.png'),
  "gift gate should use the real closed/opened PNG assets"
);

for (const asset of ["gift-box-utuh.png", "box-opened.png", "tutup-box.png"]) {
  assert(
    existsSync(new URL(`./assets/${asset}`, import.meta.url)),
    `gift asset should be bundled: ${asset}`
  );
}

assert(
  html.includes("styles.css?v=verify-flow-1")
    && css.includes("Gift gate premium polish pass")
    && css.includes("--lid-x: 42%")
    && css.includes("@keyframes giftLidRightPop")
    && js.includes('"gift-reveal-caption"'),
  "gift gate polish should use the new magical layout and right-side lid reveal"
);

assert(
  html.includes('id="introSkip"')
    && js.includes('const skip = qs("#introSkip")')
    && js.includes("skip?.addEventListener(\"click\", finishIntro)"),
  "intro should include a small skip button wired to the normal intro finish flow"
);

assert(
  html.includes("dm-petal-layer")
    && html.includes("birthday-petal-layer")
    && css.includes("./assets/particles/sakura-petal1.png")
    && css.includes("./assets/particles/sakura-petal4.png"),
  "DM and birthday sections should visibly use the sakura petal assets"
);

for (const asset of [
  "particles/sakura-petal1.png",
  "particles/sakura-petal2.png",
  "particles/sakura-petal3.png",
  "particles/sakura-petal4.png",
]) {
  assert(
    existsSync(new URL(`./assets/${asset}`, import.meta.url)),
    `petal asset should be bundled: ${asset}`
  );
}

for (const asset of [
  "date-flow/Date-BG.png",
  "date-flow/Proposal-BG.png",
  "date-flow/Datepass.png",
  "date-flow/thumbnails/date-dinner.png",
  "date-flow/thumbnails/date-photobox.png",
  "date-flow/thumbnails/date-mall-jajan.png",
  "date-flow/thumbnails/date-night-walk.png",
  "date-flow/thumbnails/date-movie.png",
  "date-flow/thumbnails/date-request.png",
]) {
  assert(
    existsSync(new URL(`./assets/${asset}`, import.meta.url)),
    `date flow asset should be bundled: ${asset}`
  );
}

const dateCardCount = (html.match(/class="date-option-card"/g) || []).length;
assert.equal(dateCardCount, 6, "date pass should show exactly six selectable date cards");

assert(
  html.includes('id="girlfriendProposal"')
    && html.includes('id="dateNextButton"')
    && html.includes('id="dateRequestInput"')
    && html.includes('id="dateRequestButton"')
    && /\.\/final-overrides\.css\?v=(proposal-v[0-9]+|mobile-v[0-9]+)/.test(html)
    && html.includes("Will you, sayang?")
    && html.includes("YES! Mau banget")
    && html.includes("GAK! PULANG SANAI")
    && html.includes("Pilih date kita, sayang")
    && html.includes("./assets/date-flow/Datepass.png")
    && html.includes("Lunch/Dinner Date")
    && html.includes("Photobox Date")
    && html.includes("Mall + Jajan Date")
    && html.includes("Night Walk Date")
    && html.includes("Movie Date")
    && html.includes("Request")
    && html.includes("Kirim Date Request")
    && !html.includes("Surprise Me")
    && (js.includes("const dateFlowStages = [") || js.includes("const flowStages = ["))
    && js.includes('"dateInvite"')
    && js.includes('"ringCloseup"')
    && js.includes('"finalOfficial"')
    && (js.includes("dateFlowStage = \"dateInvite\"") || js.includes("dateFlowStage = \"proposalSong\"") || js.includes("showProposalStage"))
    && (js.includes("setDateFlowStage(\"ringCloseup\")") || js.includes("showProposalStage(\"ringCloseup\")"))
    && (js.includes("setDateFlowStage(\"finalOfficial\")") || js.includes("showProposalStage(\"finalOfficial\")"))
    && js.includes("birthday:proposal-start")
    && js.includes("6285604017731")
    && (js.includes("babyyy, aku mau request date") || js.includes("date-request") || js.includes("selectedDate"))
    && js.includes("yang penting sama kamu")
    && (js.includes("jajan dulu baru mikir pulang") || js.includes("selectedDate"))
    && !js.includes("safeSlots")
    && !js.includes("noButtonPosition")
    && finalCss.includes(".romance-flow-shell")
    && finalCss.includes(".romance-flow-panel")
    && finalCss.includes(".date-option-card")
    && finalCss.includes(".date-option-thumb")
    && finalCss.includes(".date-request-panel")
    && finalCss.includes(".mini-plan-panel")
    && finalCss.includes(".ring-stage-card"),
  "date/proposal/ring flow should use the new clean state machine and reusable UI classes"
);

assert(
  finalCss.includes(".ring-closeup-panel .promise-ring-closeup")
    && /ring-closeup-panel \.promise-ring-closeup[\s\S]*?opacity:\s*1\s*!important;/.test(finalCss)
    && /ring-closeup-panel \.promise-ring-closeup[\s\S]*?position:\s*relative\s*!important;/.test(finalCss),
  "ring closeup image should override legacy hidden promise-ring image styles"
);

assert(
  finalCss.includes(".final-official-panel.is-active .proposal-official")
    && /final-official-panel\.is-active \.proposal-official[\s\S]*?opacity:\s*1;/.test(finalCss),
  "final official message should become visible when the final panel is active"
);

assert(
  html.includes('id="dateNextButton"')
    && js.includes('id === "dateNextButton"')
    && js.includes('state.selectedDate')
    && js.includes('gotoProposalSong')
    && finalCss.includes('#dateNextButton'),
  "date next button should be clickable and recover selected date state"
);

assert(
  html.includes("Cinta is typing")
    && !html.includes("cintaawlndr is typing"),
  "DM typing label should say Cinta is typing"
);

assert(
  html.includes("CINTA PATCH NOTES")
    && html.includes("v19.07 birthday update")
    && html.includes("small updates, same pretty girl.")
    && html.includes("Name update")
    && html.includes("Flower preference")
    && html.includes("Jealousyy mode")
    && html.includes("Reyhan bug report")
    && html.includes("+100 pretty, +100 cute, +100 harus dimanja today.")
    && !html.includes("tiny facts about her."),
  "future memories section should be replaced with Cinta Patch Notes copy"
);

const patchCardCount = (html.match(/<article class="plan-card/g) || []).length;
assert.equal(patchCardCount, 6, "Cinta Patch Notes should render six patch cards");

assert(
  html.includes('class="sticker sparkle"')
    && html.includes('class="sticker gift-mini"'),
  "hero should use the expanded balanced glass badge set"
);

assert(
  html.includes("Click the treasure chest sayang. There's like few promises yang bisa kamu claim :)")
    && js.includes("Janji #1: i’ll try not to NGILANG")
    && js.includes("Janji #7: i’ll keep choosing you"),
  "promise chest copy should use the new Janji note wording"
);

assert(
  html.includes('id="clawPrizePoolOpen"')
    && html.includes('id="clawPrizePoolModal"')
    && html.includes('id="clawPrizePoolList"')
    && js.includes("function initClawPrizePool()")
    && js.includes("initClawPrizePool();")
    && js.includes('const prizePoolOpen = qs("#clawPrizePoolOpen")')
    && finalCss.includes(".claw-prize-pool-modal")
    && finalCss.includes(".machine-marquee strong"),
  "claw machine should include a readable title override and plush prize pool modal"
);

assert(
  finalCss.includes(".hero-section .cute-stickers .letter")
    && finalCss.includes(".ig-progress span")
    && finalCss.includes(".rose-base")
    && finalCss.includes(".reference-petal-layer span")
    && finalCss.includes("mix-blend-mode: screen"),
  "final visual overrides should cover hero stickers, DM progress, rose base, and petal blending"
);

assert(
  finalCss.includes("Refinement pass: 2026-06-21")
    && finalCss.includes(".lanyard-section")
    && finalCss.includes("background: transparent !important")
    && finalCss.includes(".patch-notes-section")
    && finalCss.includes(".patch-subtitle")
    && finalCss.includes(".hero-section .cute-stickers .gift-mini")
    && finalCss.includes(".timer-section .timer-time-charm")
    && finalCss.includes(".letter-section .envelope-wrap")
    && finalCss.includes(".final-card::before"),
  "final refinement overrides should cover lanyard, hero, timer, letter, patch notes, and finale polish"
);

for (const asset of [
  "clouds.png",
  "proposal/ringbox-close.png",
  "proposal/ringbox-open.png",
  "proposal/ring.png",
]) {
  assert(
    existsSync(new URL(`./assets/${asset}`, import.meta.url)),
    `proposal/cloud asset should be bundled: ${asset}`
  );
}

assert(
  /section h2::first-letter[\s\S]*?color:\s*inherit;/.test(css)
    && /\.ribbon-note[\s\S]*?font-family:\s*var\(--serif\);/.test(css)
    && /\.wish-banner[\s\S]*?font-family:\s*var\(--serif\);/.test(css),
  "font pairing corrections should keep script as accent-only"
);

const finalFontQaIndex = css.lastIndexOf("Final font QA overrides");
assert(
  finalFontQaIndex > -1 && css.indexOf(".intro-type-line.is-line-in", finalFontQaIndex) > -1,
  "final intro font override should preserve visible fade-in state"
);

assert(
  /\.intro-type-line[\s\S]*?display:\s*block;/.test(css)
    && /\.intro-type-line::after[\s\S]*?vertical-align:\s*text-bottom;/.test(css),
  "intro typing caret should stay inline with the text"
);

console.log("flow smoke checks passed");
