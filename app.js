function safeClosest(el, selector) {
  if (!el) return null;
  const target = el.nodeType === 1 ? el : el.parentElement;
  if (!target || typeof target.closest !== 'function') return null;
  return target.closest(selector);
}

﻿const config = {
  fullName: "Cinta Ayu Wulandari",
  senderName: "Reyhan",
  senderNick: "Rey",
  whatsappNumber: "6285604017731",
  whatsappReply: "SAYANGGGKU GANTENGKUU, KEMBARAN KEONHOOOOOO, lucu banget webnya?!?",
  knownSince: new Date("2026-02-06T00:00:00+07:00"),
  birthdayLabel: "16 July",
  flipWords: ["like home", "so soft", "safe", "unreal", "worth it", "Cinta"],
  audio: {
    confetti: "./assets/confetti.mp3",
    yay: "./assets/yay.mp3",
    buttonPress: "./assets/sfx/button-click.mp3",
    typing: "./assets/sfx/typing.mp3",
    introTyping: "./assets/sfx/typing-clacky.wav",
    introReveal: "./assets/sfx/intro-future-fade.wav",
    close: "./assets/sfx/close.mp3",
    transition: "./assets/sfx/transition.mp3",
    sent1: "./assets/sfx/sent1.mp3",
    sent2: "./assets/sfx/sent2.mp3",
    clawMachine: "./assets/sfx/claw-machine.mp3",
    blowCandle: "./assets/sfx/tiup-lilin.mp3",
    makeWish: "./assets/make-a-wish-honey.mp3",
    paper: "./assets/paper-slide.mp3",
  },
  musicTracks: [
    {
      id: "happy-birthday",
      label: "Happy Birthday",
      src: "./assets/happy-birthday.mp3",
      volume: 0.48,
    },
    {
      id: "drop-dead",
      label: "Drop Dead - Olivia Rodrigo",
      src: "./assets/drop-dead-olivia-rodrigo.mp3",
      volume: 0.336,
    },
  ],
  proposalVibes: [
    {
      id: "drakor",
      label: "Drakor Vibes",
      src: "./assets/proposal/DrakorVibes.mp3",
      volume: 0.76,
    },
    {
      id: "soft",
      label: "Soft Vibes",
      src: "./assets/proposal/SoftVibes.mp3",
      volume: 0.72,
    },
    {
      id: "cute",
      label: "Cute Vibes",
      src: "./assets/proposal/CuteVibes.mp3",
      volume: 0.76,
    },
  ],
  petalImages: [
    "./assets/particles/sakura-petal1.png",
    "./assets/particles/sakura-petal2.png",
    "./assets/particles/sakura-petal3.png",
    "./assets/particles/sakura-petal4.png",
  ],
  mobilePetalImages: [
    "./assets/particles/mobile/sakura-petal1.png",
    "./assets/particles/mobile/sakura-petal2.png",
    "./assets/particles/mobile/sakura-petal3.png",
    "./assets/particles/mobile/sakura-petal4.png",
  ],
  petalParticles: {
    desktopCount: 36,
    mobileCount: 6,
    mobileQuery: "(max-width: 720px), (pointer: coarse)",
    minSize: 20,
    maxSize: 48,
    mobileMinSize: 14,
    mobileMaxSize: 30,
    minFallSpeed: 16,
    maxFallSpeed: 46,
    mobileMinFallSpeed: 10,
    mobileMaxFallSpeed: 26,
    driftStrength: 18,
    mobileDriftStrength: 10,
    minOpacity: 0.36,
    maxOpacity: 0.72,
    mobileConfettiScale: 0.22,
  },
  bouquet: {
    maxFlowers: 6,
    flowers: [
      { id: "dahlia", label: "Dahlia", image: "./bouquet/flower-dahlia.png", size: "clamp(238px, 31vw, 326px)" },
      { id: "sakura", label: "Sakura", image: "./bouquet/flower-sakura.png", size: "clamp(228px, 30vw, 316px)" },
      { id: "rose", label: "Rose", image: "./bouquet/flower-rose.png", size: "clamp(234px, 31vw, 322px)" },
      { id: "lily", label: "Lily", image: "./bouquet/flower-lily.png", size: "clamp(236px, 31vw, 324px)" },
      { id: "peony", label: "Peony", image: "./bouquet/flower-peony.png", size: "clamp(242px, 31vw, 330px)" },
      { id: "babys-breath", label: "Baby’s Breath", image: "./bouquet/flower-babys-breath.png", size: "clamp(260px, 34vw, 356px)" },
    ],
    slots: [
      { x: 50, y: 30, rotate: -3, scale: 1.09, zIndex: 30 },
      { x: 40, y: 34, rotate: -14, scale: 1.01, zIndex: 26 },
      { x: 60, y: 34, rotate: 14, scale: 1.01, zIndex: 26 },
      { x: 43, y: 25, rotate: -8, scale: .95, zIndex: 22 },
      { x: 57, y: 25, rotate: 8, scale: .95, zIndex: 22 },
      { x: 50, y: 38, rotate: 0, scale: .9, zIndex: 34 },
    ],
  },
  claw: {
    positions: [18, 34, 50, 66, 82],
    plushes: [
      { type: "plush", id: "plush-becu", name: "Becu", animalType: "Duck", title: "Becu", description: "Cinta's existing duck plush, sekarang resmi jadi legendary prize.", image: "./claw/duck.png", tier: "Legendary" },
      { type: "plush", id: "plush-nala", name: "Nala", animalType: "Puppy", title: "Nala", description: "Cinta's new puppy plush yang siap nemenin hari-hari lucu.", image: "./claw/puppy.png", tier: "Special" },
      { type: "plush", id: "plush-pipo", name: "Pipo", animalType: "Frog", title: "Pipo", description: "A sweet little prize for soft tiny moods.", image: "./claw/frog.png", tier: "Sweet" },
      { type: "plush", id: "plush-miu", name: "Miu", animalType: "Cat", title: "Miu", description: "Rare plush kecil buat koleksi hadiah Cinta.", image: "./claw/cat.png", tier: "Rare" },
      { type: "plush", id: "plush-lumi", name: "Lumi", animalType: "Koala", title: "Lumi", description: "Dreamy rare plush with soft sleepy energy.", image: "./claw/koala.png", tier: "Dreamy Rare" },
    ],
    coupons: [
      { type: "coupon", id: "coupon-hug", name: "Kupon Peluk Gratis 10 Menit", title: "Kupon Peluk Gratis 10 Menit", description: "Berlaku buat pelukan hangat versi Rey, durasi bisa diperpanjang kalau Cinta mau.", emoji: "🤗", tier: "Special" },
      { type: "coupon", id: "coupon-date", name: "Kupon Date Bebas Pilih Tempat", title: "Kupon Date Bebas Pilih Tempat", description: "Cinta pilih tempat, Rey tinggal ikut dan siap jadi partner jalan.", emoji: "🗺️", tier: "Legendary" },
      { type: "coupon", id: "coupon-no-mad", name: "Kupon Bebas Marah 1 Hari", title: "Kupon Bebas Marah 1 Hari", description: "Satu hari soft mode. Tapi kalau Rey ngeselin banget, Cinta tetap boleh protes tipis.", emoji: "🍦", tier: "Rare" },
      { type: "coupon", id: "coupon-movie", name: "Kupon Movie Night Bareng", title: "Kupon Movie Night Bareng", description: "Pilih filmnya bebas, komentar random selama nonton sangat diperbolehkan.", emoji: "🎬", tier: "Sweet" },
      { type: "coupon", id: "coupon-snack", name: "Kupon Jajan Manis Bareng", title: "Kupon Jajan Manis Bareng", description: "Untuk dessert, minuman lucu, atau apa pun yang bikin hari terasa manis.", emoji: "🍰", tier: "Sweet" },
      { type: "coupon", id: "coupon-story", name: "Kupon Cerita Sampai Ngantuk", title: "Kupon Cerita Sampai Ngantuk", description: "Rey standby dengerin cerita panjang, plot twist, dan detail kecilnya.", emoji: "🌙", tier: "Special" },
      { type: "coupon", id: "coupon-callsign", name: "Kupon Panggilan Manis Seharian", title: "Kupon Panggilan Manis Seharian", description: "Satu hari full panggilan manis, no debat, no malu-malu.", emoji: "💗", tier: "Rare" },
      { type: "coupon", id: "coupon-song", name: "Kupon Pilih Lagu Buat Kita", title: "Kupon Pilih Lagu Buat Kita", description: "Cinta pilih lagu yang nanti jadi soundtrack kecil buat kita.", emoji: "🎧", tier: "Dreamy Rare" },
      { type: "coupon", id: "coupon-anytime", name: "Kupon Ditemenin Kapan Aja", title: "Kupon Ditemenin Kapan Aja", description: "Buat hari yang ramai, capek, atau cuma pengen ditemenin aja.", emoji: "🫶", tier: "Special" },
      { type: "coupon", id: "coupon-surprise", name: "Kupon One Last Surprise", title: "Kupon One Last Surprise", description: "Simpan ini baik-baik. Rey boleh nyiapin surprise kecil berikutnya.", emoji: "✨", tier: "Legendary" },
    ],
  },
  moodNotes: [
    { type: "soft note", text: "cinta, kamu punya vibe yang bikin chat sederhana kerasa adem. bukan rame, tapi nempel." },
    { type: "real talk", text: "first move kamu itu random, tapi efeknya panjang. sampai sekarang masih kepikiran, lucu juga." },
    { type: "tiny promise", text: "kalau kamu lagi cerita random, aku stay. mau singkat, mau muter dulu, tetap aku dengerin." },
    { type: "birthday rule", text: "hari ini kamu boleh request yang manis-manis. birthday girl pass, berlaku tanpa debat." },
    { type: "inside joke", text: "kalau beli martabak, bagian kamu lebih gede. aku pura-pura santai, padahal itu effort." },
    { type: "compliment", text: "kamu tuh cantiknya bukan yang maksa dilihat. lebih ke, sekali lihat terus susah lupa." },
    { type: "reminder", text: "kalau lagi capek, jangan sok kuat sendirian. kabarin aku, minimal biar capeknya punya teman." },
    { type: "lowkey fact", text: "aku suka cara kamu bikin notif kecil jadi sesuatu yang ditunggu. agak bahaya sih." },
    { type: "promise", text: "nanti kalau ketemu, aku mau inget detail kecil. bukan buat dramatis, cuma karena kamu penting." },
    { type: "soft roast", text: "kamu randomnya niat banget. muncul sebentar, efeknya bisa seharian. curang dikit." },
  ],
};

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const mobilePerformanceMedia = window.matchMedia("(max-width: 720px), (pointer: coarse)");
let bgmEnabled = true;
let activeTrackId = "happy-birthday";

function isMobilePerformance() {
  return mobilePerformanceMedia.matches;
}

function qs(selector, scope = document) {
  return scope.querySelector(selector);
}

function qsa(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}

function pad(value, size = 2) {
  return String(value).padStart(size, "0");
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, reducedMotion ? 0 : ms));
}

function initPerformanceMode() {
  const update = () => {
    document.documentElement.classList.toggle("mobile-performance", isMobilePerformance());
  };
  update();
  mobilePerformanceMedia.addEventListener?.("change", update);
}

function initMobilePreloadScreen() {
  const isMobile = isMobilePerformance();
  document.documentElement.classList.toggle("is-mobile-device", isMobile);
  document.body.classList.toggle("is-mobile-device", isMobile);
  if (!isMobile) return;

  const screen = qs("#mobilePreloadScreen");
  const bar = qs("#mobilePreloadBar");
  const percent = qs("#mobilePreloadPercent");
  const copy = qs("#mobilePreloadText");
  if (!screen) return;

  const criticalAssets = [
    "./assets/gift-box-utuh.png",
    "./assets/box-opened.png",
    "./assets/tutup-box.png",
    "./assets/cinta-profile.jpg",
    "./assets/cinta-lanyard.jpg",
    "./assets/clouds.png",
    "./assets/date-flow/mobile/Date-BG.webp",
    "./assets/date-flow/mobile/Datepass.webp",
    "./assets/date-flow/mobile/Proposal-BG.webp",
    "./assets/date-flow/thumbnails/mobile/date-dinner.webp",
    "./assets/date-flow/thumbnails/mobile/date-photobox.webp",
    "./assets/date-flow/thumbnails/mobile/date-mall-jajan.webp",
    "./assets/date-flow/thumbnails/mobile/date-night-walk.webp",
    "./assets/date-flow/thumbnails/mobile/date-movie.webp",
    "./assets/date-flow/thumbnails/mobile/date-request.webp",
    "./assets/proposal/mobile/ringbox-close.webp",
    "./assets/proposal/mobile/ringbox-open.webp",
    "./assets/proposal/mobile/ring.webp",
    "./assets/proposal/wow-excited.gif",
    "./assets/proposal/cat-cuddle-right.gif",
    "./assets/proposal/cat-cheer-left.gif",
    "./assets/mobile/cinta-finale-bg.webp",
  ];
  const idleAssets = [
    "./bouquet/bouquet-back.png",
    "./bouquet/bouquet-front.png",
    "./bouquet/bouquet-ribbon.png",
    "./bouquet/flower-dahlia.png",
    "./bouquet/flower-sakura.png",
    "./bouquet/flower-rose.png",
    "./bouquet/flower-lily.png",
    "./bouquet/flower-peony.png",
    "./bouquet/flower-babys-breath.png",
    "./claw/duck.png",
    "./claw/puppy.png",
    "./claw/frog.png",
    "./claw/cat.png",
    "./claw/koala.png",
  ];

  let finished = false;
  let loaded = 0;
  const total = criticalAssets.length;
  const updateProgress = (message = "Preparing assets biar smooth di HP.") => {
    const value = Math.min(100, Math.round((loaded / Math.max(1, total)) * 100));
    if (bar) bar.style.width = `${value}%`;
    if (percent) percent.textContent = `${value}%`;
    if (copy) copy.textContent = message;
  };
  const finish = () => {
    if (finished) return;
    finished = true;
    loaded = total;
    updateProgress("Ready. opening slowly...");
    window.setTimeout(() => {
      screen.classList.add("is-done");
      document.body.classList.remove("is-mobile-preloading");
      window.setTimeout(() => {
        screen.hidden = true;
        warmIdleAssets(idleAssets);
      }, 420);
    }, 220);
  };
  const preloadImage = (src) => new Promise((resolve) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = image.onerror = () => {
      loaded += 1;
      updateProgress(loaded < total ? "Downloading tiny things dulu..." : "Almost ready...");
      resolve();
    };
    image.src = src;
  });

  screen.hidden = false;
  document.body.classList.add("is-mobile-preloading");
  updateProgress();
  window.setTimeout(finish, 9500);
  Promise.allSettled(criticalAssets.map(preloadImage)).then(finish);
}

function warmIdleAssets(assets = []) {
  const run = () => {
    const queue = assets.slice();
    const loadNext = () => {
      const src = queue.shift();
      if (!src) return;
      const image = new Image();
      image.decoding = "async";
      image.onload = image.onerror = () => window.setTimeout(loadNext, 120);
      image.src = src;
    };
    loadNext();
  };
  if ("requestIdleCallback" in window) window.requestIdleCallback(run, { timeout: 3500 });
  else window.setTimeout(run, 1800);
}

function initIntroSequence() {
  const gate = qs("#introGate");
  const line = qs("#introTypeLine");
  const button = qs("#introContinue");
  const skip = qs("#introSkip");
  if (!gate || !line || !button) {
    document.body.classList.remove("is-intro-locked");
    return;
  }

  const lines = [
    "Hii, dearest Cinta!",
    "I know this is a little extra.",
    "I was only planning to make something small...",
    "then somehow, one idea turned into another.",
    "and another.",
    "and now you're here.",
    "so take your time, birthday girl.",
    "this little web was made for you :)",
  ];
  let lineIndex = 0;
  let charIndex = 0;
  let timer = 0;
  const typingSpeed = reducedMotion ? 5 : 34;
  const holdTime = reducedMotion ? 90 : 860;

  const clearTimer = () => {
    if (timer) window.clearTimeout(timer);
    timer = 0;
  };

  const finishIntro = () => {
    clearTimer();
    gate.classList.add("is-done");
    window.setTimeout(() => {
      document.body.classList.remove("is-intro-locked");
      gate.setAttribute("aria-hidden", "true");
      qs("[data-pass-digit='1']")?.focus({ preventScroll: true });
    }, reducedMotion ? 80 : 680);
  };

  const typeNext = () => {
    const current = lines[lineIndex] || "";
    if (charIndex === 0) {
      line.classList.remove("is-line-in");
      void line.offsetWidth;
      line.classList.add("is-line-in");
      const shouldPlayIntroReveal = lineIndex === 0 || lineIndex === lines.length - 1;
      if (shouldPlayIntroReveal) playIntroRevealSfx();
      playIntroTypingSfx(Math.min(2600, Math.max(980, current.length * typingSpeed + 380)));
    }
    line.classList.add("is-typing");
    line.textContent = current.slice(0, charIndex);
    if (charIndex <= current.length) {
      charIndex += 1;
      timer = window.setTimeout(typeNext, typingSpeed);
      return;
    }

    line.classList.remove("is-typing");
    if (lineIndex < lines.length - 1) {
      timer = window.setTimeout(() => {
        line.classList.add("is-changing");
        line.classList.remove("is-line-in");
        window.setTimeout(() => {
          line.classList.remove("is-changing");
          lineIndex += 1;
          charIndex = 0;
          typeNext();
        }, reducedMotion ? 0 : 220);
      }, holdTime);
      return;
    }

    button.hidden = false;
    button.classList.add("is-ready");
    button.focus({ preventScroll: true });
  };

  button.addEventListener("click", () => {
    finishIntro();
  });
  skip?.addEventListener("click", finishIntro);

  typeNext();
}

function initPasscodeGate() {
  const gate = qs("#passcodeGate");
  const display = qs("#passcodeDisplay");
  const status = qs("#passcodeStatus");
  if (!gate || !display) {
    document.body.classList.remove("is-passcode-locked");
    return;
  }

  const code = "1607";
  let input = "";
  let isUnlocked = false;
  const dots = qsa("span", display);
  const preloadIntroAssets = () => {
    [
      "./assets/cinta-gift.gif",
      "./assets/gift-box-utuh.png",
      "./assets/box-opened.png",
      "./assets/tutup-box.png",
      "./assets/cinta-lanyard.jpg",
      "./assets/cinta-profile.jpg",
    ].forEach((src) => {
      const image = new Image();
      image.decoding = "async";
      image.src = src;
    });
  };
  const updateDisplay = () => {
    dots.forEach((dot, index) => dot.classList.toggle("is-filled", index < input.length));
    gate.style.setProperty("--pass-progress", `${Math.min(1, input.length / code.length)}`);
  };
  const resetWrong = () => {
    gate.classList.add("is-wrong");
    if (status) status.textContent = "almost. coba birthday date Cinta lagi.";
    window.setTimeout(() => {
      input = "";
      gate.classList.remove("is-wrong");
      updateDisplay();
      if (status) status.textContent = "hint: birthday date, but tiny.";
    }, reducedMotion ? 140 : 760);
  };
  const unlock = () => {
    if (isUnlocked) return;
    isUnlocked = true;
    gate.classList.add("is-unlocking");
    if (status) status.textContent = "access granted. opening the soft part...";
    playSuccessSfx();
    window.dispatchEvent(new CustomEvent("birthday:passcode-unlocked"));
    window.setTimeout(() => {
      document.body.classList.remove("is-passcode-locked");
      gate.setAttribute("aria-hidden", "true");
      qs("#openGiftText")?.focus({ preventScroll: true });
    }, reducedMotion ? 120 : 900);
  };
  const pushDigit = (digit) => {
    if (isUnlocked || input.length >= code.length) return;
    input += digit;
    updateDisplay();
    if (input.length === code.length) {
      window.setTimeout(() => {
        if (input === code) unlock();
        else resetWrong();
      }, reducedMotion ? 0 : 220);
    }
  };

  gate.addEventListener("click", (event) => {
    const digitButton = safeClosest(event.target, "[data-pass-digit]");
    const actionButton = safeClosest(event.target, "[data-pass-action]");
    if (digitButton) {
      pushDigit(digitButton.dataset.passDigit || "");
      return;
    }
    if (!actionButton || isUnlocked) return;
    const action = actionButton.dataset.passAction;
    input = action === "back" ? input.slice(0, -1) : "";
    updateDisplay();
  });
  document.addEventListener("keydown", (event) => {
    if (!document.body.classList.contains("is-passcode-locked") || document.body.classList.contains("is-intro-locked")) return;
    if (/^\d$/.test(event.key)) pushDigit(event.key);
    if (event.key === "Backspace") {
      input = input.slice(0, -1);
      updateDisplay();
    }
    if (event.key === "Escape") {
      input = "";
      updateDisplay();
    }
  });

  updateDisplay();
  const schedule = window.requestIdleCallback || ((callback) => window.setTimeout(callback, 700));
  schedule(preloadIntroAssets, { timeout: 1600 });
}

function replayCinematicReveal(section) {
  if (!section || reducedMotion) return;
  section.classList.remove("is-visible", "cinematic-kick");
  void section.offsetWidth;
  section.classList.add("is-visible", "cinematic-kick");
  setTimeout(() => section.classList.remove("cinematic-kick"), 1700);
}

function initGiftGate() {
  const gate = qs("#giftGate");
  const gift = qs("#openGift");
  const experience = qs("#experience");
  const openButtons = [qs("#openGift"), qs("#openGiftText")].filter(Boolean);
  const popupButtons = qsa(".intro-popups button");
  let isOpening = false;

  const unlock = (event) => {
    if (isOpening) return;
    isOpening = true;
    const giftHeadImage = qs(".head-pop img");
    if (giftHeadImage && !giftHeadImage.getAttribute("src") && giftHeadImage.dataset.src) {
      giftHeadImage.src = giftHeadImage.dataset.src;
    }
    gift?.classList.add("is-opening");
    if (event?.currentTarget?.id === "openGiftText") {
      window.setTimeout(playTransitionSfx, 2000);
    }
    playOpenGiftSound();
    if (bgmEnabled) setVinylPlaying(true, { forceEnable: true });
    else setVinylPlaying(false);
    spawnIntroPop(window.innerWidth / 2, window.innerHeight * 0.69, "LET'S GOOO, BIRTHDAY GIRL!", "gift-reveal-caption");
    playConfettiSfx();
    if (!reducedMotion) {
      createConfettiBurst({
        pieces: 260,
        x: 50,
        y: 38,
        colors: ["#ffb7d5", "#ff6fae", "#fff2f7", "#e7c56d"],
      });
    }
    setTimeout(() => {
      gate.classList.add("is-open");
      experience.classList.remove("is-locked");
      experience.classList.add("has-opened");
      document.body.style.overflow = "";
      window.dispatchEvent(new CustomEvent("birthday:experience-opened"));
      replayCinematicReveal(qs("#timer"));
      setTimeout(() => {
        qs("#timer")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
      }, reducedMotion ? 0 : 520);
    }, reducedMotion ? 80 : 1160);
  };

  document.body.style.overflow = "hidden";
  openButtons.forEach((button) => button.addEventListener("click", unlock));
  popupButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const rect = button.getBoundingClientRect();
      spawnIntroPop(rect.left + rect.width / 2, rect.top, button.dataset.pop || "a tiny birthday note");
    });
  });
  qs("#replayGift")?.addEventListener("click", () => {
    isOpening = false;
    gift?.classList.remove("is-opening");
    gate.classList.remove("is-open");
    experience.classList.add("is-locked");
    experience.classList.remove("has-opened");
    document.body.style.overflow = "hidden";
    window.scrollTo({ top: 0, behavior: "auto" });
  });
}

function initBgmPreference() {
  const toggle = qs("#bgmToggle");
  if (!toggle) return;
  const label = qs("strong", toggle);
  const hint = qs("small", toggle);
  const sync = () => {
    toggle.classList.toggle("is-on", bgmEnabled);
    toggle.setAttribute("aria-pressed", String(bgmEnabled));
    if (label) label.textContent = bgmEnabled ? "On" : "Off";
    if (hint) hint.textContent = bgmEnabled ? "tap to keep it quiet" : "quiet mode for BGM";
  };
  toggle.addEventListener("click", () => {
    bgmEnabled = !bgmEnabled;
    if (!bgmEnabled) setVinylPlaying(false);
    sync();
  });
  sync();
}

function syncBgmToggle() {
  const toggle = qs("#bgmToggle");
  if (!toggle) return;
  const label = qs("strong", toggle);
  const hint = qs("small", toggle);
  toggle.classList.toggle("is-on", bgmEnabled);
  toggle.setAttribute("aria-pressed", String(bgmEnabled));
  if (label) label.textContent = bgmEnabled ? "On" : "Off";
  if (hint) hint.textContent = bgmEnabled ? "tap to keep it quiet" : "quiet mode for BGM";
}

let audioContext;
const audioTemplateCache = new Map();

function getAudioContext() {
  if (audioContext) {
    if (audioContext.state === "suspended") audioContext.resume?.();
    return audioContext;
  }
  const Context = window.AudioContext || window.webkitAudioContext;
  if (!Context) return null;
  audioContext = new Context();
  if (audioContext.state === "suspended") audioContext.resume?.();
  return audioContext;
}

function audioNow() {
  return getAudioContext()?.currentTime || 0;
}

function getAudioTemplate(src) {
  if (!src) return null;
  if (audioTemplateCache.has(src)) return audioTemplateCache.get(src);
  const audio = new Audio(src);
  audio.preload = "auto";
  audio.load();
  audioTemplateCache.set(src, audio);
  return audio;
}

function primeAudioAssets() {
  [
    config.audio.buttonPress,
    config.audio.typing,
    config.audio.close,
    config.audio.transition,
    config.audio.sent1,
    config.audio.sent2,
    config.audio.clawMachine,
    config.audio.blowCandle,
    config.audio.paper,
    config.audio.confetti,
    config.audio.yay,
  ].forEach(getAudioTemplate);

  if (bgmEnabled) {
    const birthday = qs("#birthdayAudio");
    if (birthday) {
      birthday.preload = "auto";
      birthday.load();
    }
  }
}

function initAudioPrimer() {
  const prime = () => primeAudioAssets();
  ["pointerdown", "touchstart", "keydown"].forEach((type) => {
    window.addEventListener(type, prime, { once: true, passive: true });
  });
}

function initWhenVisible(selector, initFn, options = {}) {
  const target = qs(selector);
  if (!target || typeof initFn !== "function") return;
  let started = false;
  const run = () => {
    if (started) return;
    started = true;
    initFn();
  };
  const observe = () => {
    if (!("IntersectionObserver" in window)) {
      window.setTimeout(run, 0);
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting || entry.intersectionRatio > 0)) return;
      observer.disconnect();
      run();
    }, {
      rootMargin: options.rootMargin || (isMobilePerformance() ? "260px 0px" : "480px 0px"),
      threshold: 0.01,
    });
    observer.observe(target);
  };

  if (qs("#experience")?.classList.contains("is-locked")) {
    window.addEventListener("birthday:experience-opened", observe, { once: true });
  } else {
    observe();
  }
}

function playOneShotAudio(src, volume = 0.72) {
  if (!src) return null;
  const template = getAudioTemplate(src);
  const audio = template ? template.cloneNode(true) : new Audio(src);
  audio.volume = volume;
  audio.play().catch(() => {});
  return audio;
}

function playTimedOneShotAudio(src, volume = 0.72, durationMs = 0) {
  const audio = playOneShotAudio(src, volume);
  if (audio && durationMs > 0) {
    window.setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, durationMs);
  }
  return audio;
}

function playButtonPressSfx() {
  playOneShotAudio(config.audio.buttonPress, 0.46);
}

function playTypingSfx(durationMs = 1500) {
  playTimedOneShotAudio(config.audio.typing, 0.8, durationMs);
}

function playIntroTypingSfx(durationMs = 1500) {
  playTimedOneShotAudio(config.audio.introTyping, 0.32, durationMs);
}

function playIntroRevealSfx() {
  playOneShotAudio(config.audio.introReveal, 0.18);
}

function playCloseSfx() {
  playOneShotAudio(config.audio.close, 0.72);
}

function playTransitionSfx() {
  playOneShotAudio(config.audio.transition, 0.65);
}

function playSent1Sfx() {
  playOneShotAudio(config.audio.sent1, 0.78);
}

function playSent2Sfx() {
  playOneShotAudio(config.audio.sent2, 0.78);
}

function playClawMachineSfx() {
  playOneShotAudio(config.audio.clawMachine, 0.62);
}

function playBlowCandleSfx() {
  playOneShotAudio(config.audio.blowCandle, 0.6);
}

function playConfettiAudioPair() {
  playOneShotAudio(config.audio.confetti, 0.74);
  playOneShotAudio(config.audio.yay, 0.68);
}

function initGlobalButtonAudio() {
  document.addEventListener("click", (event) => {
    const mutedTarget = safeClosest(event.target, "[data-no-button-sound='true']");
    const disabledTarget = safeClosest(event.target, "button:disabled, [aria-disabled='true']");
    if (mutedTarget || disabledTarget) return;

    playButtonPressSfx();

    const target = safeClosest(event.target, [
      "button",
      "a",
      "[role='button']",
      ".time-tile",
      ".chat-bubble",
      ".wish-capsule",
      ".fortune-cookie",
      ".mood-jar-button",
      ".lanyard-card",
      ".scratch-card",
    ].join(","));
    if (!target) return;
    const button = target.matches("button") ? target : null;
    if (!button || safeClosest(button, "#musicToggle, #tonearm, .vinyl-player")) return;
    if (reducedMotion) return;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "tap-ripple";
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 720);
  }, true);
}

function playTone(frequency, start, duration, type = "sine", gainValue = 0.08) {
  const ctx = getAudioContext();
  if (!ctx) return;
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(gainValue, start + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain);
  gain.connect(ctx.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.02);
}

function playChatPopSfx() {
  const t = audioNow();
  playTone(620, t, 0.055, "triangle", 0.047);
  playTone(930, t + 0.045, 0.07, "sine", 0.043);
}

function playCandleOutSfx() {
  const t = audioNow();
  playTone(210, t, 0.16, "sine", 0.035);
  playTone(140, t + 0.05, 0.18, "triangle", 0.028);
}

function playSuccessSfx() {
  const t = audioNow();
  [523, 659, 784, 1046].forEach((frequency, index) => {
    playTone(frequency, t + index * 0.07, 0.12, "triangle", 0.045);
  });
}

function playFailureSfx() {
  const t = audioNow();
  playTone(420, t, 0.06, "square", 0.035);
  playTone(300, t + 0.05, 0.08, "sawtooth", 0.03);
  playTone(220, t + 0.11, 0.12, "triangle", 0.028);
}

function playCrackSfx() {
  const t = audioNow();
  for (let i = 0; i < 8; i += 1) {
    playTone(120 + Math.random() * 420, t + i * 0.018, 0.035, "square", 0.025);
  }
}

function playBloomSfx() {
  const t = audioNow();
  playTone(440 + Math.random() * 220, t, 0.06, "sine", 0.025);
  playTone(880 + Math.random() * 240, t + 0.04, 0.075, "triangle", 0.018);
}

function playOpenGiftSound() {
  const audio = qs("#giftAudio");
  if (audio) {
    audio.volume = 0.38;
    audio.currentTime = 0;
    audio.play().catch(() => {
      const ctx = getAudioContext();
      if (!ctx) return;
      const t = ctx.currentTime;
      playTone(392, t, 0.11, "triangle", 0.09);
      playTone(587, t + 0.08, 0.12, "triangle", 0.09);
      playTone(880, t + 0.18, 0.18, "sine", 0.07);
    });
  }
}

function playMakeWishVoice() {
  playOneShotAudio(config.audio.makeWish, 0.38);
}

function playPaperSfx() {
  playOneShotAudio(config.audio.paper, 0.52);
  const t = audioNow();
  playTone(245, t, 0.055, "triangle", 0.022);
  playTone(410, t + 0.035, 0.08, "sine", 0.018);
  for (let i = 0; i < 8; i += 1) {
    playTone(720 + Math.random() * 520, t + 0.015 + i * 0.012, 0.025, "sawtooth", 0.012);
  }
}

function playConfettiSfx() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const t = ctx.currentTime;
  [220, 330, 440, 660, 880].forEach((frequency, index) => {
    playTone(frequency, t + index * 0.035, 0.08, index % 2 ? "square" : "triangle", 0.045);
  });
  for (let i = 0; i < 9; i += 1) {
    playTone(520 + Math.random() * 620, t + 0.08 + i * 0.018, 0.045, "sawtooth", 0.026);
  }
}

function spawnIntroPop(x, y, text, tone = "") {
  const note = document.createElement("span");
  note.className = `intro-pop-note ${tone}`.trim();
  note.textContent = text;
  note.style.left = `${Math.max(24, Math.min(window.innerWidth - 24, x))}px`;
  note.style.top = `${Math.max(88, y - 18)}px`;
  document.body.appendChild(note);
  setTimeout(() => note.remove(), 1900);
}

function isExperienceOpen() {
  return qs("#experience")?.classList.contains("has-opened") || false;
}

function isElementInViewport(element, minVisibleRatio = 0.16) {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
  const visibleWidth = Math.min(rect.right, viewportWidth) - Math.max(rect.left, 0);
  const visibleRatio = visibleHeight / Math.max(rect.height, 1);
  return visibleHeight > 0 && visibleWidth > 0 && visibleRatio >= minVisibleRatio;
}

function canStartChatSequence() {
  return isExperienceOpen() && isElementInViewport(qs("#first-dm"));
}

function initRevealObserver() {
  const revealItems = qsa("[data-reveal]");
  if (reducedMotion) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      if (entry.target.id === "first-dm" && !isExperienceOpen()) return;
      entry.target.classList.add("is-visible");
      if (entry.target.id === "first-dm") {
        if (canStartChatSequence()) runChatSequence();
        observer.unobserve(entry.target);
        return;
      }
      if (entry.target.id === "finale") {
        window.setTimeout(() => {
          if (!reducedMotion) createConfettiBurst({ pieces: 110, x: 50, y: 38 });
        }, 420);
      }
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });

  revealItems.forEach((item) => observer.observe(item));

  window.addEventListener("hashchange", () => {
    if (window.location.hash !== "#first-dm") return;
    window.setTimeout(() => {
      if (!canStartChatSequence()) return;
      qs("#first-dm")?.classList.add("is-visible");
      runChatSequence();
    }, reducedMotion ? 0 : 220);
  });
}

function initElapsedTimer() {
  const units = {
    days: qs('[data-unit="days"]'),
    hours: qs('[data-unit="hours"]'),
    minutes: qs('[data-unit="minutes"]'),
    seconds: qs('[data-unit="seconds"]'),
  };

  const update = () => {
    const now = new Date();
    let diff = Math.max(0, now - config.knownSince);
    const secondsTotal = Math.floor(diff / 1000);
    const days = Math.floor(secondsTotal / 86400);
    const hours = Math.floor((secondsTotal % 86400) / 3600);
    const minutes = Math.floor((secondsTotal % 3600) / 60);
    const seconds = secondsTotal % 60;

    units.days.textContent = pad(days, 3);
    units.hours.textContent = pad(hours);
    units.minutes.textContent = pad(minutes);
    units.seconds.textContent = pad(seconds);
  };

  update();
  setInterval(update, 1000);
}

function initTimerInteractions() {
  const timer = qs("#timer");
  const tiles = qsa(".time-tile", timer || document);
  if (!timer || !tiles.length) return;

  tiles.forEach((tile) => {
    const label = qs("span", tile)?.textContent?.trim() || "time";
    tile.setAttribute("role", "button");
    tile.setAttribute("tabindex", "0");
    tile.setAttribute("aria-label", `Tap ${label} timer`);

    const pulse = () => {
      tile.classList.remove("timer-tap-glow");
      timer.classList.remove("timer-tap-glow");
      void tile.offsetWidth;
      tile.classList.add("timer-tap-glow");
      timer.classList.add("timer-tap-glow");
      playChatPopSfx();
      window.setTimeout(() => {
        tile.classList.remove("timer-tap-glow");
        timer.classList.remove("timer-tap-glow");
      }, reducedMotion ? 480 : 920);
    };

    tile.addEventListener("click", pulse);
    tile.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      pulse();
    });
  });
}

let chatHasRun = false;
let chatTimers = [];

function clearChatTimers() {
  chatTimers.forEach((timer) => window.clearTimeout(timer));
  chatTimers = [];
}

function queueChatTimer(callback, delay) {
  const timer = window.setTimeout(callback, reducedMotion ? 0 : delay);
  chatTimers.push(timer);
}

function resetChatSequence() {
  clearChatTimers();
  qsa('[data-chat-step]').forEach((item) => item.classList.remove("is-in"));
  qs("#chatStage")?.classList.remove("is-sequencing");
}

function runChatSequence(options = {}) {
  if (chatHasRun && !options.force) return;
  chatHasRun = true;
  const shouldPlaySfx = options.userInitiated || canStartChatSequence();
  const typing = qs('[data-chat-step="0"]');
  const first = qs('[data-chat-step="1"]');
  const seen = qs('[data-chat-step="seen"]');
  const second = qs('[data-chat-step="2"]');

  resetChatSequence();

  if (reducedMotion) {
    [typing, first, seen, second].forEach((item) => item?.classList.add("is-in"));
    return;
  }

  qs("#chatStage")?.classList.add("is-sequencing");
  queueChatTimer(() => {
    typing?.classList.add("is-in");
    if (shouldPlaySfx) playTypingSfx(1500);
  }, 260);
  queueChatTimer(() => {
    typing?.classList.remove("is-in");
    first?.classList.add("is-in");
    if (shouldPlaySfx) playSent1Sfx();
  }, 1760);
  queueChatTimer(() => seen?.classList.add("is-in"), 2460);
  queueChatTimer(() => {
    second?.classList.add("is-in");
    if (shouldPlaySfx) playSent2Sfx();
    qs("#chatStage")?.classList.remove("is-sequencing");
  }, 3260);
}

function initChatReplay() {
  const replay = qs("#replayChat");
  const section = qs("#first-dm");
  if (!replay || !section) return;
  replay.addEventListener("click", () => {
    section.classList.add("is-visible");
    chatHasRun = false;
    runChatSequence({ force: true, userInitiated: true });
  });
}

function initChatReactions() {
  qsa(".bubble-reactions button").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      button.classList.add("is-hit");
      setTimeout(() => button.classList.remove("is-hit"), 280);
      spawnBubbleReaction(button, button.dataset.reaction || "♡");
      playChatPopSfx();
    });
  });

  qsa(".chat-bubble").forEach((bubble) => {
    bubble.addEventListener("click", (event) => {
      bubble.classList.add("is-pulsing");
      setTimeout(() => bubble.classList.remove("is-pulsing"), 430);
      spawnChatRipple(event.clientX, event.clientY);
      spawnBubbleReaction(bubble, bubble.classList.contains("me") ? "💗" : "✨");
      playChatPopSfx();
    });
  });

  qsa(".chat-actions button").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.add("is-hit");
      setTimeout(() => button.classList.remove("is-hit"), 260);
      showChatToast(button.dataset.chatSpark || "tiny reaction sent");
      spawnBubbleReaction(button, "♡");
      playChatPopSfx();
    });
  });
}

function showChatToast(text) {
  const toast = document.createElement("span");
  toast.className = "chat-toast";
  toast.textContent = text;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 980);
}

function spawnChatRipple(x, y) {
  const ripple = document.createElement("span");
  ripple.className = "chat-ripple";
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 760);
}

function spawnBubbleReaction(source, symbol) {
  const rect = source.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const amount = reducedMotion ? 1 : 7;

  for (let i = 0; i < amount; i += 1) {
    const float = document.createElement("span");
    float.className = "reaction-float";
    float.textContent = symbol;
    float.style.left = `${x}px`;
    float.style.top = `${y}px`;
    float.style.setProperty("--rx", `${Math.round((Math.random() - 0.5) * 130)}px`);
    float.style.setProperty("--rr", `${Math.round((Math.random() - 0.5) * 80)}deg`);
    float.style.animationDelay = `${i * 38}ms`;
    document.body.appendChild(float);
    setTimeout(() => float.remove(), 1150 + i * 38);
  }
}

function initWordFlip() {
  const target = qs("#flipWord");
  if (!target || reducedMotion) return;
  let index = 0;
  setInterval(() => {
    target.classList.add("is-leaving");
    setTimeout(() => {
      index = (index + 1) % config.flipWords.length;
      target.textContent = config.flipWords[index];
      target.classList.remove("is-leaving");
      target.classList.add("is-entering");
      requestAnimationFrame(() => target.classList.remove("is-entering"));
    }, 360);
  }, 2400);
}

function initLanyard() {
  const card = qs("#lanyardCard");
  if (!card) return;

  let dragging = false;
  let didDrag = false;
  let startX = 0;
  let startY = 0;
  let dx = 0;
  let dy = 0;
  let vx = 0;
  let vy = 0;
  let lastX = 0;
  let lastY = 0;
  let lastT = 0;
  let springFrame = 0;
  let lastTap = 0;

  const setCardVars = (nextDx, nextDy) => {
    dx = Math.max(-120, Math.min(120, nextDx));
    dy = Math.max(-130, Math.min(130, nextDy));
    const rx = -dy * 0.09;
    const ry = dx * 0.12;
    const rz = dx * 0.035;
    card.style.setProperty("--dx", `${dx.toFixed(1)}px`);
    card.style.setProperty("--dy", `${dy.toFixed(1)}px`);
    card.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
    card.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
    card.style.setProperty("--rz", `${rz.toFixed(2)}deg`);
  };

  const stopSpring = () => {
    if (springFrame) cancelAnimationFrame(springFrame);
    springFrame = 0;
  };

  const springHome = () => {
    vx += (0 - dx) * 0.08;
    vy += (0 - dy) * 0.08;
    vx *= 0.84;
    vy *= 0.84;
    setCardVars(dx + vx, dy + vy);

    if (Math.abs(dx) + Math.abs(dy) + Math.abs(vx) + Math.abs(vy) < 0.55) {
      setCardVars(0, 0);
      card.classList.remove("is-releasing");
      springFrame = 0;
      return;
    }

    springFrame = requestAnimationFrame(springHome);
  };

  const release = () => {
    if (!dragging) return;
    dragging = false;
    card.classList.remove("is-dragging");
    card.classList.add("is-releasing");
    if (reducedMotion) {
      setCardVars(0, 0);
      card.classList.remove("is-releasing");
      return;
    }
    stopSpring();
    springFrame = requestAnimationFrame(springHome);
  };

  card.addEventListener("pointerdown", (event) => {
    stopSpring();
    dragging = true;
    didDrag = false;
    startX = event.clientX - dx;
    startY = event.clientY - dy;
    lastX = event.clientX;
    lastY = event.clientY;
    lastT = performance.now();
    vx = 0;
    vy = 0;
    card.classList.remove("is-releasing");
    card.classList.add("is-dragging");
    card.setPointerCapture?.(event.pointerId);
  });
  card.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    const nextDx = event.clientX - startX;
    const nextDy = event.clientY - startY;
    const now = performance.now();
    const dt = Math.max(16, now - lastT);
    vx = (event.clientX - lastX) / dt * 16;
    vy = (event.clientY - lastY) / dt * 16;
    lastX = event.clientX;
    lastY = event.clientY;
    lastT = now;
    if (Math.abs(nextDx) + Math.abs(nextDy) > 6) didDrag = true;
    setCardVars(nextDx, nextDy);
  });
  card.addEventListener("pointerup", release);
  card.addEventListener("pointercancel", release);
  card.addEventListener("pointerleave", release);
  card.addEventListener("click", (event) => {
    if (didDrag) {
      event.preventDefault();
      didDrag = false;
      return;
    }
    const now = Date.now();
    if (now - lastTap < 280) return;
    lastTap = now;
    card.classList.add("is-glowing");
    setTimeout(() => card.classList.remove("is-glowing"), 760);
    playChatPopSfx();
    card.classList.toggle("is-flipped");
  });
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.classList.toggle("is-flipped");
    }
  });
}

function initReasonCards() {
  const cards = qsa(".reason-card");
  cards.forEach((card) => {
    qs("button", card)?.addEventListener("click", () => {
      cards.forEach((item) => item.classList.remove("is-active"));
      card.classList.add("is-active");
      if (!reducedMotion) {
        const rect = card.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth * 100;
        const y = (rect.top + rect.height / 2) / window.innerHeight * 100;
        createConfettiBurst({
          pieces: 32,
          x: x,
          y: y,
          colors: ["#ffb7d5", "#ff6fae", "#fff2f7", "#ffd4e5"],
        });
      }
    });
  });
}

function initWishCapsules() {
  qsa(".wish-capsule").forEach((capsule) => {
    const text = qs("[data-wish-face]", capsule);
    let flipTimer = 0;
    capsule.setAttribute("aria-pressed", "false");

    capsule.addEventListener("click", () => {
      if (capsule.dataset.busy === "true") return;
      const isOpen = capsule.classList.contains("is-open");
      capsule.dataset.busy = "true";
      capsule.classList.add("is-busy");
      capsule.classList.add("is-flipping");
      clearTimeout(flipTimer);
      flipTimer = setTimeout(() => {
        capsule.classList.toggle("is-open", !isOpen);
        capsule.setAttribute("aria-pressed", String(!isOpen));
        if (text) text.textContent = isOpen ? capsule.dataset.front : capsule.dataset.back;
        capsule.classList.remove("is-flipping");
        setTimeout(() => {
          capsule.classList.remove("is-busy");
          capsule.dataset.busy = "false";
        }, reducedMotion ? 0 : 260);
      }, reducedMotion ? 0 : 180);
    });
  });
}

function initGalleryModal() {
  const modal = qs("#galleryModal");
  const title = qs("#modalTitle");
  const note = qs("#modalNote");
  const close = qs("#modalClose");

  const open = (card) => {
    title.textContent = card.dataset.title || "Foto Cinta";
    note.textContent = card.dataset.note || "Placeholder foto Cinta.";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    close.focus();
  };

  const hide = () => {
    const wasOpen = modal?.classList.contains("is-open");
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    if (qs("#giftGate")?.classList.contains("is-open")) {
      document.body.style.overflow = "";
    }
    if (wasOpen) playCloseSfx();
  };

  qsa(".gallery-card").forEach((card) => card.addEventListener("click", () => open(card)));
  close?.addEventListener("click", hide);
  modal?.addEventListener("click", (event) => {
    if (event.target === modal) hide();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal?.classList.contains("is-open")) hide();
  });
}

function initEnvelope() {
  const envelope = qs("#envelope");
  const readButton = qs("#readLetter");
  const modal = qs("#letterModal");
  const close = qs("#letterModalClose");
  const section = qs("#letter");
  if (!envelope) return;
  envelope.addEventListener("click", () => {
    const open = envelope.classList.toggle("is-open");
    envelope.setAttribute("aria-expanded", String(open));
    section?.classList.toggle("is-letter-open", open);
    playPaperSfx();
  });

  const openModal = () => {
    modal?.classList.add("is-open");
    modal?.setAttribute("aria-hidden", "false");
    section?.classList.add("is-letter-read");
    document.body.style.overflow = "hidden";
    playPaperSfx();
    close?.focus();
  };

  const closeModal = () => {
    const wasOpen = modal?.classList.contains("is-open");
    modal?.classList.remove("is-open");
    modal?.setAttribute("aria-hidden", "true");
    section?.classList.remove("is-letter-read");
    if (qs("#giftGate")?.classList.contains("is-open")) {
      document.body.style.overflow = "";
    }
    if (wasOpen) playCloseSfx();
  };

  readButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    openModal();
  });
  close?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal?.classList.contains("is-open")) closeModal();
  });
}

function initHeroBirthday() {
  const hero = qs("#name-reveal");
  const title = qs("#birthdayTitle");
  if (!hero || !title) return;
  title.tabIndex = 0;

  const celebrateHero = (event) => {
    const rect = title.getBoundingClientRect();
    const x = event?.clientX ? (event.clientX / window.innerWidth) * 100 : ((rect.left + rect.width / 2) / window.innerWidth) * 100;
    const y = event?.clientY ? (event.clientY / window.innerHeight) * 100 : ((rect.top + rect.height / 2) / window.innerHeight) * 100;
    hero.classList.add("is-party");
    playSuccessSfx();
    playConfettiSfx();
    if (!reducedMotion) {
      createConfettiBurst({ pieces: 220, x, y, colors: ["#ffb7d5", "#ff6fae", "#fff2f7", "#e7c56d"] });
    }
    setTimeout(() => hero.classList.remove("is-party"), 900);
  };

  title.addEventListener("click", celebrateHero);
  title.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      celebrateHero();
    }
  });
}

function initCarousel() {
  const carousel = qs("#futureCarousel");
  const cards = qsa(".plan-card", carousel);
  const dots = qs("#carouselDots");
  if (!carousel || !cards.length || !dots) return;
  let index = 0;

  cards.forEach((_, dotIndex) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Show future plan ${dotIndex + 1}`);
    dot.addEventListener("click", () => update(dotIndex));
    dots.appendChild(dot);
  });

  const dotButtons = qsa("button", dots);

  function update(nextIndex) {
    index = (nextIndex + cards.length) % cards.length;
    cards.forEach((card, cardIndex) => {
      card.classList.toggle("is-current", cardIndex === index);
    });
    dotButtons.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-current", dotIndex === index);
    });

    const cardWidth = cards[0].getBoundingClientRect().width + 18;
    carousel.style.setProperty("--carousel-x", `${-(cardWidth * index)}px`);
  }

  qs("#prevPlan")?.addEventListener("click", () => update(index - 1));
  qs("#nextPlan")?.addEventListener("click", () => update(index + 1));
  window.addEventListener("resize", () => update(index));
  update(0);
}

function initMusicToggle() {
  const button = qs("#musicToggle");
  if (!button) return;
  button.addEventListener("click", () => {
    const next = !vinylPlaying;
    bgmEnabled = next;
    setVinylPlaying(next, { forceEnable: next });
  });
}

let vinylInterval;
let vinylPlaying = false;
let autoplayUnlocked = false;

function getActiveTrack() {
  return config.musicTracks.find((track) => track.id === activeTrackId) || config.musicTracks[0];
}

function syncTrackAudioSource() {
  const audio = qs("#birthdayAudio");
  const track = getActiveTrack();
  if (!audio || !track) return audio;
  const nextSrc = new URL(track.src, window.location.href).href;
  if (audio.src !== nextSrc) {
    audio.pause();
    audio.src = track.src;
    audio.load();
  }
  audio.volume = track.volume;
  return audio;
}

function updateMusicLabels(isPlaying = vinylPlaying) {
  const track = getActiveTrack();
  const status = qs("#vinylStatus");
  const musicButton = qs("#musicToggle");
  const musicText = musicButton?.querySelector("span:last-child");
  const playLabel = `Play ${track.label}`;
  const playingLabel = `Playing ${track.label}`;
  if (status) status.textContent = isPlaying ? playingLabel : "drag needle to play";
  if (musicText) musicText.textContent = isPlaying ? playingLabel : playLabel;
}

function initTrackPicker() {
  const picker = qs("#trackSelect");
  if (!picker) return;
  picker.value = activeTrackId;
  picker.addEventListener("change", () => {
    const nextTrack = config.musicTracks.find((track) => track.id === picker.value);
    if (!nextTrack) {
      picker.value = activeTrackId;
      return;
    }
    const wasPlaying = vinylPlaying;
    activeTrackId = nextTrack.id;
    if (wasPlaying) stopVinylLoop();
    syncTrackAudioSource();
    updateMusicLabels(wasPlaying);
    if (wasPlaying) setVinylPlaying(true, { forceEnable: true });
  });
  updateMusicLabels(false);
}

function tryPlayBirthdayTrack() {
  if (!bgmEnabled) return Promise.resolve(false);
  const audio = syncTrackAudioSource();
  if (!audio) return Promise.resolve(false);
  return audio.play()
    .then(() => {
      autoplayUnlocked = true;
      clearInterval(vinylInterval);
      return true;
    })
    .catch(() => false);
}

function startVinylLoop() {
  if (vinylPlaying) return;
  if (!bgmEnabled) return;
  vinylPlaying = true;
  tryPlayBirthdayTrack().then((played) => {
    if (!played && vinylPlaying) startGeneratedVinylLoop();
  });
}

function startGeneratedVinylLoop() {
  const notes = [392, 494, 587, 659, 587, 494];
  let index = 0;
  const ctx = getAudioContext();
  if (ctx) playTone(notes[0], ctx.currentTime, 0.18, "triangle", 0.035);
  vinylInterval = setInterval(() => {
    const loopCtx = getAudioContext();
    if (!loopCtx) return;
    playTone(notes[index % notes.length], loopCtx.currentTime, 0.16, "triangle", 0.028);
    playTone(notes[(index + 2) % notes.length] / 2, loopCtx.currentTime, 0.22, "sine", 0.018);
    index += 1;
  }, 520);
}

function stopVinylLoop() {
  vinylPlaying = false;
  clearInterval(vinylInterval);
  const audio = qs("#birthdayAudio");
  if (audio) audio.pause();
}

function setVinylPlaying(isPlaying, options = {}) {
  if (isPlaying && !bgmEnabled && !options.forceEnable) isPlaying = false;
  if (isPlaying && options.forceEnable) bgmEnabled = true;
  const player = qs("#vinylPlayer");
  const tonearm = qs("#tonearm");
  const status = qs("#vinylStatus");
  const musicButton = qs("#musicToggle");
  player?.classList.toggle("is-playing", isPlaying);
  tonearm?.setAttribute("aria-pressed", String(isPlaying));
  musicButton?.setAttribute("aria-pressed", String(isPlaying));
  updateMusicLabels(isPlaying);
  syncBgmToggle();
  if (isPlaying) startVinylLoop();
  else stopVinylLoop();
}

function initAutoplayMusic() {
  const audio = syncTrackAudioSource();
  if (!audio) return;
  audio.preload = "none";
}

function initVinylPlayer() {
  const tonearm = qs("#tonearm");
  const player = qs("#vinylPlayer");
  if (!tonearm || !player) return;
  let dragging = false;
  let suppressClick = false;

  tonearm.addEventListener("pointerdown", (event) => {
    dragging = true;
    suppressClick = false;
    tonearm.classList.add("is-dragging");
    tonearm.setPointerCapture?.(event.pointerId);
  });
  tonearm.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    suppressClick = true;
    const rect = player.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    tonearm.style.setProperty("--arm-rotation", `${(-34 + progress * 62).toFixed(1)}deg`);
  });
  const finish = (event) => {
    if (!dragging) return;
    dragging = false;
    tonearm.classList.remove("is-dragging");
    const rect = player.getBoundingClientRect();
    const overRecord = event.clientX < rect.left + rect.width * 0.67 && event.clientY < rect.top + rect.height * 0.78;
    setVinylPlaying(overRecord);
    tonearm.style.removeProperty("--arm-rotation");
  };
  tonearm.addEventListener("pointerup", finish);
  tonearm.addEventListener("pointercancel", finish);
  tonearm.addEventListener("click", () => {
    if (suppressClick) {
      suppressClick = false;
      return;
    }
    const next = !vinylPlaying;
    bgmEnabled = next;
    setVinylPlaying(next, { forceEnable: next });
  });
  setVinylPlaying(false);
}

let confettiParticles = [];
let confettiRaf = 0;
let confettiLastTime = 0;

function getConfettiCanvas() {
  return qs("#confettiCanvas");
}

function resizeConfettiCanvas(canvas, ctx) {
  const dpr = isMobilePerformance() ? 1 : Math.min(window.devicePixelRatio || 1, 1.5);
  const width = Math.ceil(window.innerWidth * dpr);
  const height = Math.ceil(window.innerHeight * dpr);
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
}

function scaleConfettiOptions(options = {}) {
  if (!isMobilePerformance()) return options;
  const scale = config.petalParticles.mobileConfettiScale;
  const basePieces = options.pieces || 74;
  return {
    ...options,
    pieces: Math.max(12, Math.round(basePieces * scale)),
    maxPieces: Math.min(options.maxPieces || 96, 48),
    sideBursts: false,
  };
}

function createConfettiBurst(options = {}) {
  playConfettiAudioPair();
  options = scaleConfettiOptions(options);
  const canvas = getConfettiCanvas();
  if (!canvas || reducedMotion) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  resizeConfettiCanvas(canvas, ctx);

  const colors = options.colors || ["#ffb7d5", "#ff6fae", "#fff2f7", "#e7c56d"];
  const pieces = Math.min(options.pieces || 74, options.maxPieces || 96);
  const originX = (options.x ?? 50) / 100 * window.innerWidth;
  const originY = (options.y ?? 46) / 100 * window.innerHeight;
  const sidePieces = options.sideBursts === false ? 0 : Math.round(pieces * .24);

  for (let i = 0; i < pieces; i += 1) {
    const fromSide = i >= pieces - sidePieces;
    const fromLeft = i % 2 === 0;
    const startX = fromSide ? (fromLeft ? -16 : window.innerWidth + 16) : originX + (Math.random() - .5) * 80;
    const startY = fromSide ? window.innerHeight * (.34 + Math.random() * .36) : originY + (Math.random() - .5) * 44;
    const sideSpeed = 5.8 + Math.random() * 4.4;
    const angle = fromSide
      ? (fromLeft ? -0.44 - Math.random() * .5 : Math.PI + .44 + Math.random() * .5)
      : -Math.PI / 2 + (Math.random() - .5) * 1.58;
    const speed = fromSide ? sideSpeed : 6.2 + Math.random() * 5.8;
    confettiParticles.push({
      x: startX,
      y: startY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - (fromSide ? 1.8 : 0),
      gravity: .12 + Math.random() * .055,
      drag: .986 + Math.random() * .006,
      sway: (Math.random() - .5) * .055,
      w: 5 + Math.random() * 8,
      h: 10 + Math.random() * 12,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 0,
      ttl: 1500 + Math.random() * 980,
      rot: Math.random() * Math.PI * 2,
      spin: (Math.random() - .5) * .34,
      flip: Math.random() * Math.PI * 2,
      flipSpeed: .24 + Math.random() * .28,
      shape: i % 9 === 0 ? "petal" : i % 4 === 0 ? "ribbon" : "rect",
    });
  }

  const maxParticles = isMobilePerformance() ? 72 : 260;
  if (confettiParticles.length > maxParticles) confettiParticles = confettiParticles.slice(-maxParticles);
  if (!confettiRaf) {
    confettiLastTime = performance.now();
    confettiRaf = requestAnimationFrame(step);
  }
}

function step(now) {
  const canvas = getConfettiCanvas();
  if (!canvas) {
    confettiRaf = 0;
    return;
  }
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    confettiRaf = 0;
    return;
  }
  resizeConfettiCanvas(canvas, ctx);
  const dt = Math.min(34, now - confettiLastTime || 16.7);
  const frameScale = dt / 16.7;
  confettiLastTime = now;
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  confettiParticles = confettiParticles.filter((piece) => {
    piece.life += dt;
    piece.vx += Math.sin(piece.life * .007) * piece.sway * frameScale;
    piece.vy += piece.gravity * frameScale;
    piece.vx *= piece.drag;
    piece.vy *= piece.drag;
    piece.x += piece.vx * frameScale;
    piece.y += piece.vy * frameScale;
    piece.rot += piece.spin * frameScale;
    piece.flip += piece.flipSpeed * frameScale;

    const progress = piece.life / piece.ttl;
    if (progress >= 1 || piece.y > window.innerHeight + 80) return false;
    const alpha = progress < .1 ? progress * 10 : progress > .72 ? (1 - progress) / .28 : 1;
    const flipScale = Math.max(.16, Math.abs(Math.cos(piece.flip)));

    ctx.save();
    ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
    ctx.translate(piece.x, piece.y);
    ctx.rotate(piece.rot);
    ctx.scale(1, flipScale);
    ctx.fillStyle = piece.color;
    ctx.shadowColor = piece.color;
    ctx.shadowBlur = 7;
    if (piece.shape === "petal") {
      ctx.beginPath();
      ctx.ellipse(0, 0, piece.w * .58, piece.h * .58, 0, 0, Math.PI * 2);
      ctx.fill();
    } else {
      const radius = piece.shape === "ribbon" ? piece.w : 2.5;
      ctx.beginPath();
      ctx.roundRect(-piece.w / 2, -piece.h / 2, piece.w, piece.h, radius);
      ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,.45)";
      ctx.fillRect(-piece.w * .22, -piece.h / 2, Math.max(1, piece.w * .16), piece.h);
    }
    ctx.restore();
    return true;
  });

  if (confettiParticles.length) confettiRaf = requestAnimationFrame(step);
  else {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    confettiRaf = 0;
  }
}

function createGoldBurst() {
  createConfettiBurst({
    colors: ["#fff4b8", "#e7c56d", "#ffcf71", "#fff2f7"],
    pieces: 310,
    x: 50,
    y: 44,
  });
}

function initFinale() {
  qs("#celebrateButton")?.addEventListener("click", () => {
    if (!reducedMotion) createConfettiBurst();
  });
}

function initCandle() {
  const candles = qsa("[data-candle]");
  const relight = qs("#relightCandle");
  const stage = qs("#cakeStage");
  const wishText = qs("#wishText");
  if (!candles.length || !stage) return;
  let blownCount = 0;

  const finishWish = () => {
    playConfettiSfx();
    playSuccessSfx();
    playMakeWishVoice();
    const flash = document.createElement("div");
    flash.className = "wish-flash";
    const banner = document.createElement("div");
    banner.className = "wish-banner";
    banner.textContent = "Make a Wish, Honey!";
    document.body.append(flash, banner);
    if (!reducedMotion) createGoldBurst();
    setTimeout(() => {
      flash.remove();
      banner.remove();
    }, 1700);
  };

  const updateWishText = () => {
    if (!wishText) return;
    if (stage.classList.contains("is-blown")) {
      wishText.textContent = "Make a Wish, Honey!";
    } else {
      const left = Math.max(0, candles.length - blownCount);
      wishText.textContent = left === candles.length ? "click each candle" : `${left} candle${left === 1 ? "" : "s"} left`;
    }
  };

  const blowOut = (button) => {
    if (!button || button.classList.contains("is-blown")) return;
    button.classList.add("is-blown");
    button.setAttribute("aria-pressed", "true");
    blownCount += 1;
    playBlowCandleSfx();
    playCandleOutSfx();
    if (blownCount >= candles.length) {
      stage.classList.add("is-blown");
      updateWishText();
      finishWish();
    } else {
      updateWishText();
    }
  };

  candles.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      blowOut(button);
    });
  });

  stage.addEventListener("click", (event) => {
    if (event.target === relight || event.target.closest("[data-candle]")) return;
    const next = candles.find((button) => !button.classList.contains("is-blown"));
    blowOut(next);
  });

  relight?.addEventListener("click", (event) => {
    event.stopPropagation();
    stage.classList.remove("is-blown");
    candles.forEach((button) => {
      button.classList.remove("is-blown");
      button.setAttribute("aria-pressed", "false");
    });
    blownCount = 0;
    updateWishText();
    playTone(523, audioNow(), 0.12, "triangle", 0.04);
  });

  updateWishText();
}

function initScratchCard() {
  const card = qs("#scratchCard");
  const canvas = qs("#scratchCanvas");
  const progress = qs("#scratchProgress");
  if (!card || !canvas) return;
  const ctx = canvas.getContext("2d");
  let scratching = false;
  let hasRevealed = false;
  let lastScratchPoint = null;
  let lastSpark = 0;
  let lastRevealCheck = 0;

  function drawScratchLayer(width, height) {
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#ffbfd9");
    gradient.addColorStop(.48, "#b7a5af");
    gradient.addColorStop(1, "#ffe4f0");
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "rgba(255,255,255,.18)";
    for (let x = -80; x < width + 80; x += 34) ctx.fillRect(x, 0, 12, height);
    ctx.fillStyle = "rgba(255,255,255,.22)";
    for (let x = -120; x < width + 120; x += 90) {
      ctx.beginPath();
      ctx.ellipse(x, height * .26, 42, 12, -0.4, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = "rgba(64,25,49,.52)";
    ctx.font = "700 13px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("GOSOK LOTRE INI SAYANG", width / 2, height / 2);
  }

  function sizeCanvas() {
    const rect = card.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    drawScratchLayer(rect.width, rect.height);
  }

  function pointFromEvent(event) {
    const touch = event.touches?.[0] || event.changedTouches?.[0];
    return touch || event;
  }

  function scratchAt(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const radius = Math.max(30, rect.width * .07);
    card.style.setProperty("--scratch-x", `${Math.max(0, Math.min(100, (x / rect.width) * 100)).toFixed(1)}%`);
    card.style.setProperty("--scratch-y", `${Math.max(0, Math.min(100, (y / rect.height) * 100)).toFixed(1)}%`);
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = radius * 2;
    if (lastScratchPoint) {
      ctx.beginPath();
      ctx.moveTo(lastScratchPoint.x, lastScratchPoint.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    lastScratchPoint = { x, y };

    const now = performance.now();
    if (!reducedMotion && now - lastSpark > 70) {
      lastSpark = now;
      spawnScratchSpark(x, y);
    }
  }

  function spawnScratchSpark(x, y) {
    const spark = document.createElement("span");
    spark.className = "scratch-spark";
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    spark.style.setProperty("--scratch-rot", `${Math.random() * 160 - 80}deg`);
    card.appendChild(spark);
    setTimeout(() => spark.remove(), 720);
  }

  function scratch(event) {
    if (!scratching) return;
    if (event.cancelable) event.preventDefault();
    const point = pointFromEvent(event);
    scratchAt(point.clientX, point.clientY);
    const now = performance.now();
    if (!reducedMotion && now - lastRevealCheck > 90) {
      lastRevealCheck = now;
      window.requestAnimationFrame(checkReveal);
    }
  }

  function checkReveal() {
    if (hasRevealed) return;
    const sample = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let transparent = 0;
    for (let i = 3; i < sample.length; i += 28) {
      if (sample[i] < 20) transparent += 1;
    }
    const ratio = transparent / (sample.length / 28);
    if (progress) progress.style.width = `${Math.min(100, Math.round(ratio / .34 * 100))}%`;
    if (ratio > .34) {
      hasRevealed = true;
      card.classList.add("is-revealed");
      canvas.style.transition = "opacity .55s ease";
      canvas.style.opacity = "0";
      playConfettiSfx();
      if (!reducedMotion) createConfettiBurst({ pieces: 180, x: 50, y: 48 });
    }
  }

  canvas.addEventListener("pointerdown", (event) => {
    scratching = true;
    card.classList.add("is-scratching");
    lastScratchPoint = null;
    if (event.cancelable) event.preventDefault();
    canvas.setPointerCapture?.(event.pointerId);
    scratch(event);
  });
  canvas.addEventListener("pointermove", scratch);
  canvas.addEventListener("pointerup", () => {
    scratching = false;
    card.classList.remove("is-scratching");
    lastScratchPoint = null;
    checkReveal();
  });
  canvas.addEventListener("pointercancel", () => {
    scratching = false;
    card.classList.remove("is-scratching");
    lastScratchPoint = null;
    checkReveal();
  });
  canvas.addEventListener("touchstart", (event) => {
    scratching = true;
    card.classList.add("is-scratching");
    lastScratchPoint = null;
    scratch(event);
  }, { passive: false });
  canvas.addEventListener("touchmove", scratch, { passive: false });
  canvas.addEventListener("touchend", () => {
    scratching = false;
    card.classList.remove("is-scratching");
    lastScratchPoint = null;
    checkReveal();
  }, { passive: false });
  window.addEventListener("resize", () => {
    if (!hasRevealed) sizeCanvas();
  });
  requestAnimationFrame(sizeCanvas);
}

function initMoodJar() {
  const jar = qs("#moodJar");
  const card = qs("#moodNoteCard");
  const type = qs("#moodNoteType");
  const text = qs("#moodNoteText");
  const again = qs("#moodJarAgain");
  const count = qs("#moodPullCount");
  const mood = qs("#moodNoteMood");
  if (!jar || !card || !type || !text) return;

  let lastIndex = -1;
  let pullTimer = 0;
  let pulls = 0;
  const moodCopy = {
    "soft note": "soft mode: active",
    "real talk": "real talk: unlocked",
    "tiny promise": "promise saved",
    "birthday rule": "birthday privilege",
    "inside joke": "inside joke found",
    "compliment": "compliment drop",
    "reminder": "gentle reminder",
    "lowkey fact": "lowkey but loud",
    "promise": "promise mode",
    "soft roast": "soft roast, still sweet",
  };

  const chooseNote = () => {
    const notes = config.moodNotes;
    if (!notes.length) return;

    let index = Math.floor(Math.random() * notes.length);
    if (notes.length > 1) {
      while (index === lastIndex) index = Math.floor(Math.random() * notes.length);
    }
    lastIndex = index;

    const note = notes[index];
    jar.dataset.noteType = note.type;
    card.dataset.noteType = note.type;
    type.textContent = note.type;
    text.textContent = note.text;
    pulls += 1;
    if (count) count.textContent = `${pulls} note${pulls === 1 ? "" : "s"} pulled`;
    if (mood) mood.textContent = moodCopy[note.type] || "tiny mood unlocked";

    clearTimeout(pullTimer);
    jar.classList.remove("is-pulling");
    jar.classList.remove("is-note-ready");
    jar.classList.remove("is-compliment", "is-promise", "is-reminder", "is-joke");
    card.classList.remove("is-visible");
    void jar.offsetWidth;
    if (/compliment|soft/i.test(note.type)) jar.classList.add("is-compliment");
    if (/promise|rule/i.test(note.type)) jar.classList.add("is-promise");
    if (/reminder|real/i.test(note.type)) jar.classList.add("is-reminder");
    if (/joke|roast|fact/i.test(note.type)) jar.classList.add("is-joke");
    jar.classList.add("is-pulling");
    card.classList.add("is-visible");

    playPaperSfx();
    playChatPopSfx();
    const rect = jar.getBoundingClientRect();
    spawnIntroPop(rect.left + rect.width / 2, rect.top + 96, `${note.type} note`);
    if (!reducedMotion) spawnBubbleReaction(jar, "✦");
    pullTimer = setTimeout(() => {
      jar.classList.remove("is-pulling");
      jar.classList.add("is-note-ready");
    }, reducedMotion ? 0 : 1120);
  };

  jar.addEventListener("click", chooseNote);
  again?.addEventListener("click", chooseNote);
}

function initBloomRose() {
  const lab = qs("#roseLab");
  const plant = qs("#rosePlant");
  const progress = qs("#bloomProgress");
  const label = qs("#bloomText");
  if (!lab || !plant) return;

  let bloom = 0;
  let active = false;
  let completed = false;
  let lastScrollGrow = 0;

  const setBloom = (value) => {
    bloom = Math.max(0, Math.min(1, value));
    plant.style.setProperty("--bloom", bloom.toFixed(3));
    plant.style.setProperty("--petal-open", bloom.toFixed(3));
    const percent = Math.round(bloom * 100);
    if (progress) progress.style.width = `${percent}%`;
    if (label) label.textContent = percent >= 100 ? "Full bloom. Cinta unlocked the rose." : `${percent}% bloom. Tap or scroll to grow it.`;

    if (bloom >= 1 && !completed) {
      completed = true;
      plant.classList.add("is-complete");
      playSuccessSfx();
      if (!reducedMotion) createConfettiBurst({ pieces: 120, x: 50, y: 42, colors: ["#ffb7d5", "#ff6fae", "#fff2f7", "#e7c56d"] });
    }
  };

  const grow = (amount) => {
    if (completed) return;
    setBloom(bloom + amount);
    plant.classList.remove("is-growing");
    void plant.offsetWidth;
    plant.classList.add("is-growing");
    setTimeout(() => plant.classList.remove("is-growing"), reducedMotion ? 0 : 820);
    playBloomSfx();
  };

  const setPointerGlow = (event) => {
    const rect = lab.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    lab.style.setProperty("--rose-x", `${Math.max(0, Math.min(100, x)).toFixed(1)}%`);
    lab.style.setProperty("--rose-y", `${Math.max(0, Math.min(100, y)).toFixed(1)}%`);
  };

  const spawnRoseTap = (event) => {
    const spark = document.createElement("span");
    spark.className = "rose-tap-spark";
    spark.style.left = `${event.clientX}px`;
    spark.style.top = `${event.clientY}px`;
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 900);
  };

  lab.addEventListener("pointermove", setPointerGlow);
  lab.addEventListener("click", (event) => {
    setPointerGlow(event);
    spawnRoseTap(event);
    grow(.13);
  });
  lab.addEventListener("pointerdown", (event) => {
    lab.classList.add("is-touching");
    setPointerGlow(event);
    grow(.06);
  });
  lab.addEventListener("pointerup", () => lab.classList.remove("is-touching"));
  lab.addEventListener("pointerleave", () => lab.classList.remove("is-touching"));

  const observer = new IntersectionObserver((entries) => {
    active = entries.some((entry) => entry.isIntersecting);
  }, { threshold: .22 });
  observer.observe(lab);

  window.addEventListener("scroll", () => {
    const now = performance.now();
    if (!active || completed || now - lastScrollGrow < 180) return;
    lastScrollGrow = now;
    grow(.035);
  }, { passive: true });

  setBloom(0);
}

function initBouquetBuilder() {
  const section = qs("#bouquet");
  const slot = qs("#bouquetSlot");
  const note = qs("#bouquetNote");
  const warning = qs("#bouquetWarning");
  const picker = qs("#flowerPicker");
  const tie = qs("#tieBouquet");
  const reset = qs("#resetBouquet");
  const download = qs("#downloadBouquet");
  const card = qs("#bouquetCard");
  if (!section || !slot || !picker) return;

  const { flowers, slots, maxFlowers } = config.bouquet;
  const selectedFlowers = [];
  const assetDataCache = new Map();
  let isWrapped = false;
  let idCounter = 0;
  let latestDownloadUrl = "";
  let latestDownloadPreview = null;

  function flowerCount(type) {
    return selectedFlowers.filter((flower) => flower.type === type).length;
  }

  function setWarning(text = "") {
    if (warning) warning.textContent = text;
  }

  function revokeLatestDownloadUrl() {
    if (latestDownloadUrl) URL.revokeObjectURL(latestDownloadUrl);
    latestDownloadUrl = "";
  }

  function triggerBouquetDownload(blobUrl) {
    const link = document.createElement("a");
    link.download = "buket-virtual-cinta.png";
    link.href = blobUrl;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  function showBouquetDownloadPreview(blobUrl) {
    if (!latestDownloadPreview) {
      latestDownloadPreview = document.createElement("div");
      latestDownloadPreview.className = "bouquet-download-preview";
      const previewImage = document.createElement("img");
      previewImage.alt = "Preview buket virtual Cinta";
      const previewText = document.createElement("p");
      previewText.textContent = "PNG buketnya sudah jadi. Kalau download tidak otomatis, klik tombol simpan di bawah.";
      const previewLink = document.createElement("a");
      previewLink.className = "ghost-cta";
      previewLink.download = "buket-virtual-cinta.png";
      previewLink.textContent = "Simpan PNG Buket";
      latestDownloadPreview.append(previewImage, previewText, previewLink);
      section.appendChild(latestDownloadPreview);
    }

    const image = qs("img", latestDownloadPreview);
    const link = qs("a", latestDownloadPreview);
    if (image) image.src = blobUrl;
    if (link) link.href = blobUrl;
    latestDownloadPreview.hidden = false;
  }

  function updateStateText() {
    if (note) note.textContent = `${selectedFlowers.length}/${maxFlowers} bunga dipilih.`;
    if (selectedFlowers.length >= maxFlowers && !isWrapped) {
      setWarning("Buketnya sudah penuh. Tinggal diikat.");
    } else if (!isWrapped) {
      setWarning("");
    }
  }

  function updateControls() {
    const isFull = selectedFlowers.length >= maxFlowers;
    qsa(".flower-option", picker).forEach((button) => {
      const count = flowerCount(button.dataset.flower);
      button.classList.toggle("is-selected", count > 0);
      button.setAttribute("aria-pressed", count > 0 ? "true" : "false");
      button.disabled = isWrapped || isFull;
      const countBadge = qs(".flower-count", button);
      if (countBadge) countBadge.textContent = count ? `x${count}` : "";
    });
    if (tie) {
      tie.disabled = isWrapped || selectedFlowers.length < 1;
      tie.hidden = isWrapped;
    }
    if (download) download.hidden = !isWrapped;
    if (reset) reset.hidden = !isWrapped;
    if (card) card.setAttribute("aria-hidden", isWrapped ? "false" : "true");
    updateStateText();
  }

  function slotWithVariation(index) {
    const slotData = slots[index];
    const softness = index === 5 ? .35 : 1;
    return {
      x: slotData.x + (Math.random() - .5) * 1.6 * softness,
      y: slotData.y + (Math.random() - .5) * 1.2 * softness,
      rotate: slotData.rotate + (Math.random() - .5) * 3,
      scale: slotData.scale + (Math.random() - .5) * .035,
      zIndex: slotData.zIndex,
    };
  }

  function wrappedPlacement(flower) {
    return {
      x: flower.x + (50 - flower.x) * .24,
      y: flower.y + (36 - flower.y) * .14,
      rotate: flower.rotate * .68,
      scale: flower.scale * 1.02,
    };
  }

  function escapeXml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  async function assetToDataUri(src) {
    const url = new URL(src, window.location.href).href;
    if (assetDataCache.has(url)) return assetDataCache.get(url);
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Cannot load ${src}`);
    const blob = await response.blob();
    const dataUri = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
    assetDataCache.set(url, dataUri);
    return dataUri;
  }

  function loadExportImage(src) {
    const url = new URL(src, window.location.href).href;
    return new Promise((resolve, reject) => {
      const image = new Image();
      const sameOrigin = url.startsWith(window.location.origin) || url.startsWith("data:") || window.location.protocol === "file:";
      if (!sameOrigin) image.crossOrigin = "anonymous";
      image.decoding = "async";
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error(`Cannot render ${src}`));
      image.src = url;
    });
  }

  function drawContainedImage(context, image, x, y, width, height) {
    const naturalWidth = image.naturalWidth || image.width || 1;
    const naturalHeight = image.naturalHeight || image.height || 1;
    const scale = Math.min(width / naturalWidth, height / naturalHeight);
    const drawWidth = naturalWidth * scale;
    const drawHeight = naturalHeight * scale;
    const drawX = x + (width - drawWidth) / 2;
    const drawY = y + (height - drawHeight) / 2;
    context.drawImage(image, drawX, drawY, drawWidth, drawHeight);
  }

  function drawWithGlow(context, draw, glow = {}) {
    const shadows = glow.shadows || [
      { color: "rgba(255,183,213,.42)", blur: 28, offsetX: 0, offsetY: 0 },
      { color: "rgba(0,0,0,.24)", blur: 22, offsetX: 0, offsetY: 18 },
    ];
    context.save();
    context.filter = shadows
      .map((shadow) => `drop-shadow(${shadow.offsetX || 0}px ${shadow.offsetY || 0}px ${shadow.blur}px ${shadow.color})`)
      .join(" ");
    draw();
    context.restore();
  }

  function drawBouquetAura(context, size) {
    const aura = context.createRadialGradient(size * .5, size * .34, 0, size * .5, size * .38, size * .42);
    aura.addColorStop(0, "rgba(255,242,247,.38)");
    aura.addColorStop(.32, "rgba(255,183,213,.3)");
    aura.addColorStop(.68, "rgba(231,197,109,.12)");
    aura.addColorStop(1, "rgba(255,183,213,0)");
    context.fillStyle = aura;
    context.fillRect(0, 0, size, size);

    const baseAura = context.createRadialGradient(size * .5, size * .64, 0, size * .5, size * .66, size * .32);
    baseAura.addColorStop(0, "rgba(255,183,213,.16)");
    baseAura.addColorStop(1, "rgba(255,183,213,0)");
    context.fillStyle = baseAura;
    context.fillRect(0, 0, size, size);
  }

  async function renderBouquetToCanvas() {
    const canvasElement = qs("#bouquetCanvas");
    const back = qs(".bouquet-back", canvasElement);
    const front = qs(".bouquet-front", canvasElement);
    const ribbon = qs(".bouquet-ribbon", canvasElement);
    if (!canvasElement || !back || !front || !ribbon) throw new Error("Bouquet preview is not ready.");

    const size = 1400;
    const exportCanvas = document.createElement("canvas");
    exportCanvas.width = size;
    exportCanvas.height = size;
    const context = exportCanvas.getContext("2d");
    const canvasRect = canvasElement.getBoundingClientRect();
    const ratio = size / Math.max(1, canvasRect.width);

    const [backImage, frontImage, ribbonImage, ...flowerImages] = await Promise.all([
      loadExportImage(back.getAttribute("src")),
      loadExportImage(front.getAttribute("src")),
      loadExportImage(ribbon.getAttribute("src")),
      ...selectedFlowers.map((flower) => loadExportImage(flower.image)),
    ]);

    context.clearRect(0, 0, size, size);
    drawBouquetAura(context, size);

    drawWithGlow(
      context,
      () => drawContainedImage(context, backImage, 0, 0, size, size),
      { shadows: [{ color: "rgba(0,0,0,.22)", blur: 30, offsetY: 24 }, { color: "rgba(255,183,213,.2)", blur: 24 }] },
    );

    selectedFlowers
      .map((flower, index) => ({ flower, image: flowerImages[index] }))
      .sort((a, b) => a.flower.zIndex - b.flower.zIndex)
      .forEach(({ flower, image }) => {
        const placement = wrappedPlacement(flower);
        const elementWidth = flower.element ? parseFloat(getComputedStyle(flower.element).width) : 260;
        const baseSize = Math.max(180, elementWidth * ratio);
        const centerX = placement.x / 100 * size;
        const centerY = placement.y / 100 * size;

        context.save();
        context.translate(centerX, centerY);
        context.rotate(placement.rotate * Math.PI / 180);
        context.scale(placement.scale, placement.scale);
        drawWithGlow(
          context,
          () => drawContainedImage(context, image, -baseSize / 2, -baseSize / 2, baseSize, baseSize),
          { shadows: [{ color: "rgba(255,183,213,.58)", blur: 30 }, { color: "rgba(231,197,109,.24)", blur: 18 }, { color: "rgba(0,0,0,.2)", blur: 18, offsetY: 14 }] },
        );
        context.restore();
      });

    drawWithGlow(
      context,
      () => drawContainedImage(context, frontImage, 0, 0, size, size),
      { shadows: [{ color: "rgba(0,0,0,.18)", blur: 24, offsetY: 18 }, { color: "rgba(255,183,213,.18)", blur: 18 }] },
    );

    const ribbonRect = ribbon.getBoundingClientRect();
    const ribbonBox = {
      x: (ribbonRect.left - canvasRect.left) * ratio,
      y: (ribbonRect.top - canvasRect.top) * ratio,
      width: ribbonRect.width * ratio,
      height: ribbonRect.height * ratio,
    };

    drawWithGlow(
      context,
      () => drawContainedImage(context, ribbonImage, ribbonBox.x, ribbonBox.y, ribbonBox.width, ribbonBox.height),
      { shadows: [{ color: "rgba(255,183,213,.62)", blur: 26 }, { color: "rgba(231,197,109,.3)", blur: 18 }, { color: "rgba(0,0,0,.24)", blur: 18, offsetY: 14 }] },
    );

    return exportCanvas;
  }

  async function downloadBouquetPng() {
    if (!isWrapped || !selectedFlowers.length || !download) return;
    const canvasElement = qs("#bouquetCanvas");
    if (!canvasElement) return;

    download.disabled = true;
    setWarning("Lagi siapin gambar buket...");

    try {
      const exportCanvas = await renderBouquetToCanvas();
      const blob = await new Promise((resolve) => exportCanvas.toBlob(resolve, "image/png", 1));
      if (!blob) throw new Error("Canvas could not create a PNG blob.");
      revokeLatestDownloadUrl();
      latestDownloadUrl = URL.createObjectURL(blob);
      showBouquetDownloadPreview(latestDownloadUrl);
      const isLocalPreview = ["localhost", "127.0.0.1", ""].includes(window.location.hostname);
      if (!isLocalPreview) triggerBouquetDownload(latestDownloadUrl);
      setWarning(isLocalPreview
        ? "PNG buket sudah siap. Klik link simpan di preview bawah ya."
        : "Buket PNG sudah siap di-download.");
      playSuccessSfx();
    } catch (error) {
      console.error(error);
      setWarning("Download buket gagal, coba klik lagi ya.");
      playChatPopSfx();
    } finally {
      download.disabled = false;
    }
  }

  function applyFlowerVars(element, flower) {
    const wrapped = wrappedPlacement(flower);
    element.style.setProperty("--flower-x", flower.x.toFixed(2));
    element.style.setProperty("--flower-y", flower.y.toFixed(2));
    element.style.setProperty("--flower-rotate", `${flower.rotate.toFixed(2)}deg`);
    element.style.setProperty("--flower-scale", flower.scale.toFixed(3));
    element.style.setProperty("--flower-z", String(flower.zIndex));
    element.style.setProperty("--flower-size", flower.size);
    element.style.setProperty("--wrapped-x", wrapped.x.toFixed(2));
    element.style.setProperty("--wrapped-y", wrapped.y.toFixed(2));
    element.style.setProperty("--wrapped-rotate", `${wrapped.rotate.toFixed(2)}deg`);
    element.style.setProperty("--wrapped-scale", wrapped.scale.toFixed(3));
  }

  function renderSelectedFlower(flower) {
    const element = document.createElement("span");
    element.className = "selected-flower";
    element.dataset.type = flower.type;
    element.dataset.flowerId = flower.id;
    element.setAttribute("aria-label", flower.label);

    const image = document.createElement("img");
    image.src = flower.image;
    image.alt = "";
    image.loading = "lazy";
    image.decoding = "async";
    image.draggable = false;

    applyFlowerVars(element, flower);
    element.appendChild(image);
    slot.appendChild(element);
    flower.element = element;
  }

  function addFlower(flowerData) {
    if (isWrapped) return;
    if (selectedFlowers.length >= maxFlowers) {
      setWarning("Buketnya sudah penuh. Tinggal diikat.");
      spawnIntroPop(window.innerWidth / 2, window.innerHeight * .52, "Buketnya sudah penuh");
      playChatPopSfx();
      return;
    }

    const index = selectedFlowers.length;
    const placement = slotWithVariation(index);
    const selectedFlower = {
      id: `${flowerData.id}-${Date.now()}-${idCounter += 1}`,
      type: flowerData.id,
      image: flowerData.image,
      label: flowerData.label,
      x: placement.x,
      y: placement.y,
      rotate: placement.rotate,
      scale: placement.scale,
      zIndex: placement.zIndex,
      size: flowerData.size,
      element: null,
    };

    selectedFlowers.push(selectedFlower);
    renderSelectedFlower(selectedFlower);
    updateControls();
    playBloomSfx();
  }

  function renderPicker() {
    picker.textContent = "";
    flowers.forEach((flower) => {
      const button = document.createElement("button");
      button.className = "flower-option";
      button.type = "button";
      button.dataset.flower = flower.id;
      button.setAttribute("aria-pressed", "false");

      const thumb = document.createElement("span");
      thumb.className = "flower-thumb";
      const image = document.createElement("img");
      image.src = flower.image;
      image.alt = "";
      image.loading = "lazy";
      image.decoding = "async";
      image.draggable = false;
      thumb.appendChild(image);

      const label = document.createElement("span");
      label.className = "flower-label";
      label.textContent = flower.label;

      const count = document.createElement("span");
      count.className = "flower-count";
      count.setAttribute("aria-hidden", "true");

      button.append(thumb, label, count);
      button.addEventListener("click", () => addFlower(flower));
      picker.appendChild(button);
    });
    updateControls();
  }

  tie?.addEventListener("click", () => {
    if (isWrapped || selectedFlowers.length < 1) {
      setWarning("Pilih minimal satu bunga dulu.");
      playChatPopSfx();
      return;
    }

    isWrapped = true;
    setWarning("");
    section.classList.remove("is-wrapped");
    section.classList.add("is-wrapping");
    selectedFlowers.forEach((flower) => {
      if (flower.element) applyFlowerVars(flower.element, flower);
    });
    updateControls();
    playSuccessSfx();
    playConfettiSfx();
    if (!reducedMotion) {
      createConfettiBurst({
        pieces: 180,
        x: 43,
        y: 46,
        colors: ["#ffb7d5", "#ff6fae", "#fff2f7", "#e7c56d"],
      });
    }

    setTimeout(() => {
      section.classList.remove("is-wrapping");
      section.classList.add("is-wrapped");
      if (note) note.textContent = "Buket virtual Cinta sudah jadi.";
    }, reducedMotion ? 0 : 720);
  });

  reset?.addEventListener("click", () => {
    selectedFlowers.splice(0, selectedFlowers.length);
    isWrapped = false;
    section.classList.remove("is-wrapping", "is-wrapped");
    slot.textContent = "";
    revokeLatestDownloadUrl();
    if (latestDownloadPreview) latestDownloadPreview.hidden = true;
    setWarning("");
    updateControls();
    playChatPopSfx();
  });
  download?.addEventListener("click", downloadBouquetPng);

  renderPicker();
}

function initFortuneCookie() {
  const cookie = qs("#fortuneCookie");
  const paper = qs("#fortunePaper");
  const reset = qs("#fortuneReset");
  if (!cookie || !paper) return;

  const promises = [
    "Janji #1: i’ll try not to NGILANG while we're in a convo. even when i’m sleepy :)",
    "Janji #2: i won’t make you guess where you stand with me.",
    "Janji #3: i’ll remember ur little details. moods. random things you like. ANYTHING. i won't treat u like u got treated before :)",
    "Janji #4: i’ll try to be less “ketiduran duluan” holic. HAHA",
    "Janji #5: when you feel jealousyy, i WON'T make u fight ur own thoughts alone ☹️",
    "Janji #6: i won't give u that \"feeling lonely\" feel,",
    "Janji #7: i’ll keep choosing you even on random boring days :)",
  ];
  let index = 0;

  const reveal = () => {
    paper.textContent = promises[index % promises.length];
    index += 1;
    cookie.classList.remove("is-unlocking");
    void cookie.offsetWidth;
    cookie.classList.add("is-unlocking");
    cookie.classList.add("is-open");
    cookie.setAttribute("aria-expanded", "true");
    playCrackSfx();
    playSuccessSfx();
    if (!reducedMotion) createConfettiBurst({ pieces: 95, x: 50, y: 46, colors: ["#ffd9e8", "#ffb7d5", "#e7c56d", "#fff2f7"] });
  };

  cookie.addEventListener("click", () => {
    if (cookie.classList.contains("is-open")) return;
    reveal();
  });

  reset?.addEventListener("click", () => {
    cookie.classList.remove("is-open");
    cookie.classList.remove("is-unlocking");
    cookie.setAttribute("aria-expanded", "false");
    paper.textContent = "Tap to reveal a promise.";
    setTimeout(reveal, reducedMotion ? 0 : 240);
  });
}

function initClawPrizePool() {
  const open = qs("#clawPrizePoolOpen");
  const modal = qs("#clawPrizePoolModal");
  const close = qs("#clawPrizePoolClose");
  const list = qs("#clawPrizePoolList");
  if (!open || !modal || !list || open.dataset.bound === "true") return;

  const tierClass = (tier) => `tier-${String(tier || "Sweet").toLowerCase().replace(/\s+/g, "-")}`;

  const render = () => {
    if (list.dataset.rendered === "true") return;
    list.textContent = "";
    config.claw.plushes.forEach((plush) => {
      const item = document.createElement("article");
      const media = document.createElement("span");
      const img = document.createElement("img");
      const copy = document.createElement("span");
      const name = document.createElement("strong");
      const detail = document.createElement("small");
      const tier = document.createElement("span");

      item.className = "claw-prize-pool-item";
      media.className = "claw-prize-pool-thumb";
      img.src = plush.image;
      img.alt = `${plush.name} ${plush.animalType} plush`;
      img.loading = "lazy";
      img.decoding = "async";
      img.draggable = false;
      media.appendChild(img);

      copy.className = "claw-prize-pool-copy";
      name.textContent = plush.name;
      detail.textContent = `${plush.animalType} Plush`;
      tier.className = `tier-badge ${tierClass(plush.tier)}`;
      tier.textContent = plush.tier;
      copy.append(name, detail, tier);
      item.append(media, copy);
      list.appendChild(item);
    });
    list.dataset.rendered = "true";
  };

  const show = () => {
    render();
    modal.classList.add("is-visible");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("claw-prize-pool-open");
    close?.focus();
  };

  const hide = () => {
    const wasVisible = modal.classList.contains("is-visible");
    modal.classList.remove("is-visible");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("claw-prize-pool-open");
    if (wasVisible) playCloseSfx();
  };

  open.addEventListener("click", show);
  close?.addEventListener("click", hide);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) hide();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-visible")) hide();
  });
  open.dataset.bound = "true";
}

function initClawMachine() {
  const game = qs("#clawGame");
  const plushDisplay = qs("#plushDisplay");
  const capsulePit = qs("#capsulePit");
  const activeCapsule = qs("#activeCapsule");
  const left = qs("#clawLeft");
  const right = qs("#clawRight");
  const grab = qs("#clawGrab");
  const status = qs("#clawStatus");
  const reveal = qs("#rewardReveal");
  const rewardMedia = qs("#rewardMedia");
  const rewardTier = qs("#rewardTier");
  const rewardTitle = qs("#rewardTitle");
  const rewardSubtitle = qs("#rewardSubtitle");
  const rewardDescription = qs("#rewardDescription");
  const saveReward = qs("#saveReward");
  const playAgain = qs("#playClawAgain");
  const rewardClose = qs("#rewardClose");
  const couponCollection = qs("#couponCollection");
  const plushCollection = qs("#plushCollection");
  const couponCount = qs("#couponCount");
  const plushCount = qs("#plushCount");
  const prizePoolOpen = qs("#clawPrizePoolOpen");
  const prizePoolModal = qs("#clawPrizePoolModal");
  const prizePoolClose = qs("#clawPrizePoolClose");
  const prizePoolList = qs("#clawPrizePoolList");
  if (!game || !plushDisplay || !capsulePit || !activeCapsule || !grab) return;

  const { positions, plushes, coupons } = config.claw;
  const deck = [];
  for (let i = 0; i < Math.max(coupons.length, plushes.length); i += 1) {
    if (coupons[i]) deck.push(coupons[i]);
    if (plushes[i]) deck.push(plushes[i]);
  }

  const capsuleTones = ["tone-pink", "tone-cream", "tone-gold", "tone-pearl"];
  const collectedCoupons = new Set();
  const collectedPlushes = new Set();
  let selectedIndex = 2;
  let phase = "idle";
  let playCount = 0;
  let currentReward = null;

  const tierClass = (tier) => `tier-${String(tier || "Sweet").toLowerCase().replace(/\s+/g, "-")}`;
  const collectedSet = (reward) => reward.type === "plush" ? collectedPlushes : collectedCoupons;
  const allCollectedIds = () => new Set([...collectedCoupons, ...collectedPlushes]);

  function updateClawX(index = selectedIndex) {
    game.style.setProperty("--claw-x", `${positions[index]}%`);
    game.style.setProperty("--capsule-x", `${positions[index]}%`);
  }

  function setPhase(nextPhase, copy) {
    phase = nextPhase;
    game.dataset.phase = nextPhase;
    const locked = nextPhase !== "idle";
    [left, right, grab].filter(Boolean).forEach((button) => {
      button.disabled = locked;
    });
    if (status) {
      status.textContent = copy || {
        idle: "Pilih posisi capitnya dulu.",
        moving: "Capitnya geser pelan-pelan...",
        dropping: "Capit turun...",
        grabbing: "Capit mencoba ambil kapsul...",
        lifting: "Kapsul keangkat!",
        toChute: "Kapsul dibawa ke corong hadiah...",
        droppingPrize: "Kapsul masuk corong...",
        rolling: "Kapsul meluncur ke depan...",
        popping: "Pop! Buka hadiahnya...",
        revealing: "Hadiah kebuka!",
      }[nextPhase] || "Pilih posisi capitnya dulu.";
    }
  }

  function renderPlushDisplay() {
    const placements = [
      { left: 16, size: 102, bottom: 20, rotate: -7 },
      { left: 34, size: 112, bottom: 54, rotate: 4 },
      { left: 52, size: 106, bottom: 24, rotate: -2 },
      { left: 68, size: 110, bottom: 58, rotate: 6 },
      { left: 84, size: 100, bottom: 22, rotate: -6 },
    ];
    const chatLines = [
      "cintaa sini, aku limited",
      "aku soft launch hadiahmu",
      "pls jangan diskip dulu",
      "rare drop nih, serius",
      "pilih aku, no debat",
    ];
    plushDisplay.textContent = "";
    plushes.forEach((plush, index) => {
      const card = document.createElement("span");
      const img = document.createElement("img");
      const bubble = document.createElement("span");
      const placement = placements[index % placements.length];
      card.className = "plush-prize-card";
      card.style.setProperty("--plush-left", `${placement.left}%`);
      card.style.setProperty("--plush-size", `${placement.size}px`);
      card.style.setProperty("--plush-bottom", `${placement.bottom}px`);
      card.style.setProperty("--plush-rotate", `${placement.rotate}deg`);
      card.style.setProperty("--plush-delay", `${index * 1.35}s`);
      img.className = "plush-prize";
      img.src = plush.image;
      img.alt = "";
      img.loading = "lazy";
      img.decoding = "async";
      img.draggable = false;
      bubble.className = "plush-talk";
      bubble.textContent = chatLines[index % chatLines.length];
      card.append(img, bubble);
      plushDisplay.appendChild(card);
    });
  }

  function renderPrizePool() {
    if (!prizePoolList || prizePoolList.dataset.rendered === "true") return;
    prizePoolList.textContent = "";
    plushes.forEach((plush) => {
      const item = document.createElement("article");
      const media = document.createElement("span");
      const img = document.createElement("img");
      const copy = document.createElement("span");
      const name = document.createElement("strong");
      const detail = document.createElement("small");
      const tier = document.createElement("span");

      item.className = "claw-prize-pool-item";
      media.className = "claw-prize-pool-thumb";
      img.src = plush.image;
      img.alt = `${plush.name} ${plush.animalType} plush`;
      img.loading = "lazy";
      img.decoding = "async";
      img.draggable = false;
      media.appendChild(img);

      copy.className = "claw-prize-pool-copy";
      name.textContent = plush.name;
      detail.textContent = `${plush.animalType} Plush`;
      tier.className = `tier-badge ${tierClass(plush.tier)}`;
      tier.textContent = plush.tier;
      copy.append(name, detail, tier);
      item.append(media, copy);
      prizePoolList.appendChild(item);
    });
    prizePoolList.dataset.rendered = "true";
  }

  function showPrizePool() {
    if (!prizePoolModal) return;
    renderPrizePool();
    prizePoolModal.classList.add("is-visible");
    prizePoolModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("claw-prize-pool-open");
    prizePoolClose?.focus();
  }

  function hidePrizePool() {
    const wasVisible = prizePoolModal?.classList.contains("is-visible");
    prizePoolModal?.classList.remove("is-visible");
    prizePoolModal?.setAttribute("aria-hidden", "true");
    document.body.classList.remove("claw-prize-pool-open");
    if (wasVisible) playCloseSfx();
  }

  function renderCapsules() {
    const placements = [
      [11, 12, -12], [22, 52, 8], [31, 22, 18], [43, 62, -6],
      [54, 28, 12], [65, 58, -18], [76, 20, 6], [88, 50, 15],
      [17, 86, 10], [38, 92, -14], [59, 88, 7], [80, 84, -9],
    ];
    capsulePit.textContent = "";
    placements.forEach(([leftValue, bottom, rotate], index) => {
      const capsule = document.createElement("span");
      capsule.className = `capsule ${capsuleTones[index % capsuleTones.length]}`;
      capsule.style.setProperty("--cap-left", `${leftValue}%`);
      capsule.style.setProperty("--cap-bottom", `${bottom}px`);
      capsule.style.setProperty("--cap-rot", `${rotate}deg`);
      capsule.style.setProperty("--cap-delay", `${index * .18}`);
      capsulePit.appendChild(capsule);
    });
  }

  function chooseReward() {
    const collected = allCollectedIds();
    const uncollected = deck.filter((reward) => !collected.has(reward.id));
    const pool = uncollected.length ? uncollected : deck;
    const reward = pool[(selectedIndex + playCount) % pool.length];
    playCount += 1;
    return reward;
  }

  function collectReward(reward) {
    collectedSet(reward).add(reward.id);
    renderCollections();
  }

  function renderCollectionItem(reward) {
    const item = document.createElement("div");
    item.className = "collection-item";

    const icon = document.createElement("span");
    icon.className = "collection-icon";
    if (reward.type === "plush") {
      const img = document.createElement("img");
      img.src = reward.image;
      img.alt = "";
      img.loading = "lazy";
      img.decoding = "async";
      img.draggable = false;
      icon.appendChild(img);
    } else {
      icon.textContent = reward.emoji || "♡";
    }

    const copy = document.createElement("span");
    copy.className = "collection-copy";
    const title = document.createElement("strong");
    title.textContent = reward.type === "plush" ? reward.name : reward.title;
    const detail = document.createElement("span");
    detail.textContent = reward.type === "plush" ? `${reward.animalType} Plush - ${reward.tier}` : reward.tier;
    copy.append(title, detail);
    item.append(icon, copy);
    return item;
  }

  function renderCollections() {
    if (couponCount) couponCount.textContent = `${collectedCoupons.size}/${coupons.length}`;
    if (plushCount) plushCount.textContent = `${collectedPlushes.size}/${plushes.length}`;

    if (couponCollection) {
      couponCollection.textContent = "";
      const ownedCoupons = coupons.filter((reward) => collectedCoupons.has(reward.id));
      if (!ownedCoupons.length) {
        const empty = document.createElement("p");
        empty.className = "empty-collection";
        empty.textContent = "Belum ada kupon yang kebuka. Coba capit satu kapsul dulu.";
        couponCollection.appendChild(empty);
      } else {
        ownedCoupons.forEach((reward) => couponCollection.appendChild(renderCollectionItem(reward)));
        if (ownedCoupons.length === coupons.length) {
          const full = document.createElement("p");
          full.className = "empty-collection collection-full";
          full.textContent = "Semua kupon sudah terkoleksi!";
          couponCollection.appendChild(full);
        }
      }
    }

    if (plushCollection) {
      plushCollection.textContent = "";
      const ownedPlushes = plushes.filter((reward) => collectedPlushes.has(reward.id));
      if (!ownedPlushes.length) {
        const empty = document.createElement("p");
        empty.className = "empty-collection";
        empty.textContent = "Belum ada boneka yang kebuka. Coba capit satu kapsul dulu.";
        plushCollection.appendChild(empty);
      } else {
        ownedPlushes.forEach((reward) => plushCollection.appendChild(renderCollectionItem(reward)));
        if (ownedPlushes.length === plushes.length) {
          const full = document.createElement("p");
          full.className = "empty-collection collection-full";
          full.textContent = "Semua boneka sudah terkoleksi!";
          plushCollection.appendChild(full);
        }
      }
    }
  }

  function showReward(reward) {
    currentReward = reward;
    collectReward(reward);
    rewardMedia.textContent = "";
    rewardTier.textContent = reward.tier;
    rewardTier.className = `tier-badge ${tierClass(reward.tier)}`;

    if (reward.type === "plush") {
      const img = document.createElement("img");
      img.src = reward.image;
      img.alt = `${reward.name} ${reward.animalType} Plush`;
      img.loading = "lazy";
      img.decoding = "async";
      img.draggable = false;
      rewardMedia.appendChild(img);
      rewardTitle.textContent = `CONGRATSS BABYY!! U GOT ${reward.name.toUpperCase()}!!`;
      rewardSubtitle.textContent = `${reward.animalType} Plush`;
      rewardDescription.textContent = reward.description;
      saveReward.textContent = "Simpan ke Koleksi";
    } else {
      const ticket = document.createElement("div");
      ticket.className = "coupon-ticket-preview";
      ticket.textContent = reward.emoji || "♡";
      rewardMedia.appendChild(ticket);
      rewardTitle.textContent = "Kamu dapat kupon!";
      rewardSubtitle.textContent = reward.title;
      rewardDescription.textContent = reward.description;
      saveReward.textContent = "Simpan ke Koleksi";
    }

    reveal.classList.add("is-visible");
    reveal.setAttribute("aria-hidden", "false");
    document.body.classList.add("reward-modal-open");
    rewardClose?.focus();
  }

  function hideReward() {
    const wasVisible = reveal?.classList.contains("is-visible");
    currentReward = null;
    reveal.classList.remove("is-visible");
    reveal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("reward-modal-open");
    if (wasVisible) playCloseSfx();
  }

  async function moveClaw(direction) {
    if (phase !== "idle") return;
    const nextIndex = Math.max(0, Math.min(positions.length - 1, selectedIndex + direction));
    if (nextIndex === selectedIndex) {
      playChatPopSfx();
      return;
    }
    selectedIndex = nextIndex;
    updateClawX();
    setPhase("moving");
    await wait(260);
    setPhase("idle");
  }

  async function startGrab() {
    if (phase !== "idle") return;
    playClawMachineSfx();
    hideReward();
    const reward = chooseReward();
    const tone = capsuleTones[(selectedIndex + playCount) % capsuleTones.length];
    activeCapsule.className = `active-capsule ${tone}`;
    updateClawX();

    setPhase("dropping");
    await wait(620);
    setPhase("grabbing");
    playChatPopSfx();
    await wait(420);
    setPhase("lifting");
    await wait(620);
    setPhase("toChute");
    game.style.setProperty("--claw-x", "84%");
    await wait(680);
    setPhase("droppingPrize");
    await wait(420);
    setPhase("rolling");
    await wait(560);
    setPhase("popping");
    playChatPopSfx();
    if (!reducedMotion) {
      createConfettiBurst({
        pieces: 120,
        x: 58,
        y: 70,
        colors: ["#ffb7d5", "#fff2f7", "#e7c56d", "#ffd1e4"],
      });
    }
    await wait(460);
    setPhase("revealing");
    showReward(reward);
    await wait(500);
    updateClawX();
    setPhase("idle");
  }

  left?.addEventListener("click", () => moveClaw(-1));
  right?.addEventListener("click", () => moveClaw(1));
  grab?.addEventListener("click", startGrab);
  saveReward?.addEventListener("click", hideReward);
  playAgain?.addEventListener("click", hideReward);
  rewardClose?.addEventListener("click", hideReward);
  if (prizePoolOpen && prizePoolOpen.dataset.bound !== "true") {
    prizePoolOpen.addEventListener("click", showPrizePool);
    prizePoolClose?.addEventListener("click", hidePrizePool);
    prizePoolModal?.addEventListener("click", (event) => {
      if (event.target === prizePoolModal) hidePrizePool();
    });
    prizePoolOpen.dataset.bound = "true";
  }
  reveal?.addEventListener("click", (event) => {
    if (event.target === reveal) hideReward();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && reveal?.classList.contains("is-visible")) hideReward();
    if (event.key === "Escape" && prizePoolModal?.classList.contains("is-visible")) hidePrizePool();
  });

  renderPlushDisplay();
  renderCapsules();
  renderCollections();
  updateClawX();
  setPhase("idle");
}

function certificateSvg() {
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="760" viewBox="0 0 1200 760">
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#2a1024"/>
      <stop offset=".48" stop-color="#120812"/>
      <stop offset="1" stop-color="#3a162f"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="18%" r="60%">
      <stop offset="0" stop-color="#ffb7d5" stop-opacity=".32"/>
      <stop offset="1" stop-color="#ffb7d5" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="760" rx="42" fill="url(#bg)"/>
  <rect width="1200" height="760" rx="42" fill="url(#glow)"/>
  <rect x="58" y="58" width="1084" height="644" rx="32" fill="none" stroke="#e7c56d" stroke-width="4"/>
  <rect x="86" y="86" width="1028" height="588" rx="24" fill="none" stroke="#e7c56d" stroke-width="2" stroke-dasharray="10 12" opacity=".65"/>
  <text x="600" y="174" text-anchor="middle" fill="#e7c56d" font-family="Inter, Arial" font-size="28" font-weight="700" letter-spacing="8">OFFICIAL BIRTHDAY PASS</text>
  <text x="600" y="334" text-anchor="middle" fill="#ffb7d5" font-family="Georgia, serif" font-size="104" font-weight="700">Cinta Ayu Wulandari</text>
  <text x="600" y="430" text-anchor="middle" fill="#fff2f7" font-family="Inter, Arial" font-size="30">Birthday: 16 July - Issued by Reyhan</text>
  <text x="600" y="494" text-anchor="middle" fill="#fff2f7" opacity=".82" font-family="Inter, Arial" font-size="27">Valid for unlimited wishes, soft compliments, and future memories.</text>
  <circle cx="600" cy="595" r="56" fill="#9f315f" stroke="#ffb7d5" stroke-width="4"/>
  <text x="600" y="616" text-anchor="middle" fill="#fff2f7" font-family="Georgia, serif" font-size="58">♡</text>
</svg>`.trim();
}

function initCertificate() {
  qs("#downloadCertificate")?.addEventListener("click", () => {
    const blob = new Blob([certificateSvg()], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "official-birthday-pass-cinta.svg";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  });
  qs("#shareCertificate")?.addEventListener("click", async () => {
    const text = "Official Birthday Pass for Cinta Ayu Wulandari - issued by Reyhan. Birthday: 16 July.";
    if (navigator.share) {
      await navigator.share({ text }).catch(() => {});
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      spawnIntroPop(window.innerWidth / 2, window.innerHeight * .42, "Certificate text copied");
    }
  });
}

function initWhatsAppReply() {
  qs("#sendReply")?.addEventListener("click", () => {
    const message = encodeURIComponent(config.whatsappReply);
    if (!config.whatsappNumber) {
      spawnIntroPop(window.innerWidth / 2, window.innerHeight * .62, "Isi nomor WhatsApp Reyhan dulu di app.js");
      return;
    }
    window.open(`https://wa.me/${config.whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
  });
}

function initPetalCanvas() {
  const canvas = qs("#petalCanvas");
  if (!canvas || reducedMotion) return;
  const ctx = canvas.getContext("2d");
  const settings = config.petalParticles;
  const targetCount = () => (isMobilePerformance() ? settings.mobileCount : settings.desktopCount);
  let petalImages = [];
  let petalSourceKey = "";
  const petals = [];
  let rafId = 0;
  let lastFrame = 0;
  let viewportWidth = window.innerWidth;
  let viewportHeight = window.innerHeight;
  let booted = false;

  function randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  function syncPetalImages() {
    const sources = isMobilePerformance() ? config.mobilePetalImages : config.petalImages;
    const nextKey = sources.join("|");
    if (nextKey === petalSourceKey) return;
    petalSourceKey = nextKey;
    petalImages = sources.map((src) => {
      const image = new Image();
      image.decoding = "async";
      image.loading = "eager";
      image.src = src;
      return image;
    });
    petals.forEach((petal) => resetPetal(petal, true));
  }

  function resize() {
    const dpr = isMobilePerformance() ? 1 : Math.min(window.devicePixelRatio || 1, 1.5);
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
    canvas.width = Math.floor(viewportWidth * dpr);
    canvas.height = Math.floor(viewportHeight * dpr);
    canvas.style.width = `${viewportWidth}px`;
    canvas.style.height = `${viewportHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    syncPetalImages();
    syncPetalCount();
  }

  function resetPetal(petal, initial = false) {
    if (!petalImages.length) return;
    const mobile = isMobilePerformance();
    const minSize = mobile ? settings.mobileMinSize : settings.minSize;
    const maxSize = mobile ? settings.mobileMaxSize : settings.maxSize;
    const minFallSpeed = mobile ? settings.mobileMinFallSpeed : settings.minFallSpeed;
    const maxFallSpeed = mobile ? settings.mobileMaxFallSpeed : settings.maxFallSpeed;
    const driftStrength = mobile ? settings.mobileDriftStrength : settings.driftStrength;
    petal.image = petalImages[Math.floor(Math.random() * petalImages.length)];
    petal.x = Math.random() * viewportWidth;
    petal.y = initial ? Math.random() * viewportHeight : -maxSize - Math.random() * viewportHeight * 0.18;
    petal.size = randomBetween(minSize, maxSize);
    petal.aspect = randomBetween(0.72, 1.18);
    petal.fallSpeed = randomBetween(minFallSpeed, maxFallSpeed);
    petal.drift = randomBetween(-driftStrength, driftStrength);
    petal.sway = randomBetween(mobile ? 4 : 8, mobile ? 14 : 34);
    petal.swaySpeed = randomBetween(mobile ? 0.0006 : 0.0008, mobile ? 0.0012 : 0.0019);
    petal.phase = Math.random() * Math.PI * 2;
    petal.rotation = Math.random() * Math.PI * 2;
    petal.spin = randomBetween(mobile ? -0.001 : -0.0018, mobile ? 0.001 : 0.0018);
    petal.alpha = randomBetween(settings.minOpacity, mobile ? Math.min(settings.maxOpacity, .58) : settings.maxOpacity);
  }

  function syncPetalCount() {
    const count = targetCount();
    while (petals.length < count) {
      const petal = {};
      resetPetal(petal, true);
      petals.push(petal);
    }
    while (petals.length > count) petals.pop();
  }

  function drawPetal(petal) {
    if (!petal.image?.complete) return;
    ctx.save();
    ctx.translate(petal.x, petal.y);
    ctx.rotate(petal.rotation);
    ctx.globalAlpha = petal.alpha;
    ctx.globalCompositeOperation = "screen";
    const width = petal.size * petal.aspect;
    const height = petal.size;
    ctx.drawImage(petal.image, -width / 2, -height / 2, width, height);
    ctx.restore();
  }

  function tick(now = performance.now()) {
    const dt = Math.min(34, now - lastFrame || 16.7);
    lastFrame = now;
    ctx.clearRect(0, 0, viewportWidth, viewportHeight);
    petals.forEach((petal) => {
      const seconds = dt / 1000;
      petal.y += petal.fallSpeed * seconds;
      petal.x += petal.drift * seconds + Math.sin(now * petal.swaySpeed + petal.phase) * petal.sway * seconds;
      petal.rotation += petal.spin * dt;
      const maxSize = isMobilePerformance() ? settings.mobileMaxSize : settings.maxSize;
      if (petal.y > viewportHeight + maxSize || petal.x < -maxSize * 2 || petal.x > viewportWidth + maxSize * 2) {
        resetPetal(petal);
      }
      drawPetal(petal);
    });
    rafId = requestAnimationFrame(tick);
  }

  function start() {
    if (!booted || rafId || document.hidden) return;
    lastFrame = performance.now();
    rafId = requestAnimationFrame(tick);
  }

  function stop() {
    if (!rafId) return;
    cancelAnimationFrame(rafId);
    rafId = 0;
  }

  window.addEventListener("resize", resize);
  mobilePerformanceMedia.addEventListener?.("change", resize);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else start();
  });
  const boot = () => {
    if (booted) return;
    booted = true;
    resize();
    start();
  };
  if (qs("#experience")?.classList.contains("is-locked")) {
    window.addEventListener("birthday:experience-opened", boot, { once: true });
  } else {
    boot();
  }
}

function initFeatureApp() {
  const menu = qs("#feature-menu");
  const grid = qs("#featureMenuGrid");
  const slot = qs("#featureActiveSlot");
  if (!menu || !grid || !slot) return;

  const featureConfigs = [
    { id: "name-reveal", label: "Birthday Glow", init: () => { initWordFlip(); initHeroBirthday(); } },
    { id: "lanyard", label: "3D Lanyard", init: initLanyard },
    { id: "celebrate", label: "Little Reasons", init: initReasonCards },
    { id: "wishes", label: "Glass Wishes", init: initWishCapsules },
    { id: "mood-jar", label: "Mood Jar", init: initMoodJar },
    { id: "bloom", label: "Bloom Rose", init: initBloomRose },
    { id: "gallery", label: "Photo Garden", init: initGalleryModal },
    { id: "bouquet", label: "Bouquet Builder", init: initBouquetBuilder, heavy: true },
    { id: "pov", label: "Rey's POV" },
    { id: "letter", label: "Little Letter", init: initEnvelope },
    { id: "future", label: "Future Notes", init: initCarousel },
    { id: "scratch", label: "Secret Scratch", init: initScratchCard },
    { id: "fortune", label: "Promise Chest", init: initFortuneCookie },
    { id: "claw-machine", label: "Claw Machine", init: initClawMachine, heavy: true },
    { id: "candle", label: "Birthday Cake", init: initCandle },
    { id: "certificate", label: "Birthday Pass", init: initCertificate },
    { id: "dateInvitation", label: "Date Invitation", init: initDateInvitation, heavy: true },
    { id: "girlfriendProposal", label: "Girlfriend Proposal", init: initGirlfriendProposal, heavy: true },
    { id: "finale", label: "Final Surprise", init: () => { initFinale(); initWhatsAppReply(); }, heavy: true },
  ];
  const featureIds = featureConfigs.map((feature) => feature.id);
  const featureSections = new Map();
  const initialized = new Set();
  const configById = new Map(featureConfigs.map((feature) => [feature.id, feature]));
  const storageKey = "cinta-birthday-active-view";
  let activeView = "menu";

  featureIds.forEach((id) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.classList.add("feature-view");
    section.setAttribute("data-feature-view", id);
    featureSections.set(id, section);
    section.remove();
  });

  const ensureMenuButton = (section, feature) => {
    if (!section || section.querySelector(":scope > .feature-view-bar")) return;
    const bar = document.createElement("div");
    const label = document.createElement("span");
    const button = document.createElement("button");
    bar.className = "feature-view-bar";
    label.textContent = feature?.label || "Feature";
    button.className = "feature-menu-button";
    button.type = "button";
    button.textContent = "Menu";
    button.addEventListener("click", () => showMenu());
    bar.append(label, button);
    section.prepend(bar);
  };

  const markCards = (id) => {
    qsa("[data-feature-target]", grid).forEach((card) => {
      card.classList.toggle("is-selected", card.dataset.featureTarget === id);
    });
  };

  const initFeature = (feature, section) => {
    if (!feature || initialized.has(feature.id)) return;
    initialized.add(feature.id);
    const run = () => {
      feature.init?.();
      section.classList.add("is-feature-ready");
    };
    if (feature.heavy && "requestIdleCallback" in window) {
      window.requestIdleCallback(run, { timeout: 420 });
    } else {
      window.setTimeout(run, 0);
    }
  };

  function showMenu(options = {}) {
    const activeSection = slot.firstElementChild;
    if (activeSection) {
      activeSection.classList.remove("is-active-feature");
      activeSection.removeAttribute("data-feature-active");
      activeSection.remove();
    }
    activeView = "menu";
    document.documentElement.dataset.activeFeature = "menu";
    menu.classList.remove("is-feature-active");
    slot.classList.remove("is-active");
    markCards("");
    if (!options.keepStorage) localStorage.setItem(storageKey, "menu");
    if (options.scroll !== false) {
      menu.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    }
  }

  function activateFeature(id, options = {}) {
    const section = featureSections.get(id);
    const feature = configById.get(id);
    if (!section || !feature) return;
    if (slot.firstElementChild === section) return;
    slot.firstElementChild?.remove();
    ensureMenuButton(section, feature);
    slot.replaceChildren(section);
    activeView = id;
    document.documentElement.dataset.activeFeature = id;
    menu.classList.add("is-feature-active");
    slot.classList.add("is-active");
    section.classList.add("is-active-feature");
    section.setAttribute("data-feature-active", "true");
    markCards(id);
    localStorage.setItem(storageKey, id);
    initFeature(feature, section);
    replayCinematicReveal(section);
    if (options.scroll !== false) {
      slot.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    }
  }

  grid.addEventListener("click", (event) => {
    const button = safeClosest(event.target, "[data-feature-target]");
    if (!button) return;
    activateFeature(button.dataset.featureTarget || "");
  });

  window.addEventListener("hashchange", () => {
    const id = window.location.hash.slice(1);
    if (featureSections.has(id)) activateFeature(id);
  });

  const hashId = window.location.hash.slice(1);
  if (featureSections.has(hashId)) {
    activateFeature(hashId, { scroll: false });
  } else {
    activeView = "menu";
    document.documentElement.dataset.activeFeature = activeView;
    localStorage.setItem(storageKey, "menu");
  }
}

function initFloatingFeatureMenu() {
  const menu = qs("#feature-menu");
  const toggle = qs("#featureMenuToggle");
  const panel = qs("#featureMenuPanel");
  if (!menu || !toggle || !panel) return;

  const links = qsa("[data-feature-link]", menu);
  const close = () => {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };
  const open = () => {
    menu.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", () => {
    if (menu.classList.contains("is-open")) close();
    else open();
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      close();
      const target = qs(link.getAttribute("href") || "");
      if (target) replayCinematicReveal(target);
    });
  });

  document.addEventListener("click", (event) => {
    if (!menu.classList.contains("is-open") || menu.contains(event.target)) return;
    close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });

  if ("IntersectionObserver" in window && links.length) {
    const linkById = new Map(links.map((link) => [(link.getAttribute("href") || "").slice(1), link]));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach((link) => link.classList.remove("is-current"));
      linkById.get(visible.target.id)?.classList.add("is-current");
    }, { rootMargin: "-34% 0px -48% 0px", threshold: [0.08, 0.22, 0.42] });
    linkById.forEach((_, id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }
}

function injectConfettiStyles() {}

// The date + proposal flow is fully owned by the initRayDateProposalFailsafe IIFE below.
// These stubs exist only so init() can finish wiring later features (initFinale, initPetalCanvas).
// Without them, init() threw a ReferenceError here and the Celebrate button never got its listener.
function initDateInvitation() {}
function initGirlfriendProposal() {}

function init() {
  injectConfettiStyles();
  initPerformanceMode();
initMobilePreloadScreen();
  initIntroSequence();
  initPasscodeGate();
  initAudioPrimer();
  initGlobalButtonAudio();
  initBgmPreference();
  initGiftGate();
  initRevealObserver();
  initElapsedTimer();
  initTimerInteractions();
  initChatReactions();
  initChatReplay();
  initFloatingFeatureMenu();
  initWordFlip();
  initHeroBirthday();
  initLanyard();
  initReasonCards();
  initWishCapsules();
  initGalleryModal();
  initEnvelope();
  initCarousel();
  initMusicToggle();
  initTrackPicker();
  initVinylPlayer();
  initAutoplayMusic();
  initMoodJar();
  initBloomRose();
  initWhenVisible("#bouquet", initBouquetBuilder, { rootMargin: isMobilePerformance() ? "180px 0px" : "420px 0px" });
  initScratchCard();
  initFortuneCookie();
  initClawPrizePool();
  initWhenVisible("#claw-machine", initClawMachine, { rootMargin: isMobilePerformance() ? "220px 0px" : "520px 0px" });
  initCandle();
  initCertificate();
  initWhatsAppReply();
  initDateInvitation();
  initGirlfriendProposal();
  initFinale();
  initPetalCanvas();
}

document.addEventListener("DOMContentLoaded", init);

/* === Ray V10 hard failsafe for date/proposal flow ===
   This layer owns the buttons for the date invitation + proposal flow so the UI
   cannot get stuck if an older listener, audio promise, or animation state fails. */
(function initRayDateProposalFailsafe() {
  const flowStages = [
    "dateInvite",
    "datePass",
    "proposalSong",
    "proposalIntro",
    "proposalQuestion",
    "proposalConfirm",
    "ringClosed",
    "ringOpen",
    "ringCloseup",
    "finalOfficial",
  ];
  const proposalLines = [
    "One more thing, baby..",
    "This part is kinda scary ngl, but i think this is a cute way.",
    "i like the way you became part of my days, even from far away.",
    "Soo, can i ask u properly, sayang?",
  ];
  const proposalNoReplies = [
    "iihh jangan gituu ☹️",
    "yakin nih? coba klik yes ajaa",
    "no buttonnya emang cuma buat lucu-lucuan...",
    "yaaudahhh aku tetep berharap yes 😝",
  ];
  const state = {
    selectedDate: "",
    selectedVibe: "",
    noCount: 0,
    proposalNoCount: 0,
    proposalRunId: 0,
    restoreBgm: false,
    currentVibe: "",
    audioPlaying: false,
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const reduced = () => window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  const delay = (ms) => new Promise((resolve) => window.setTimeout(resolve, reduced() ? Math.min(80, ms) : ms));

  function safeSfx(name) {
    try {
      const fn = window[name] || (typeof globalThis !== "undefined" ? globalThis[name] : null);
      if (typeof fn === "function") fn();
    } catch {}
  }

  function burst(options = {}) {
    try {
      if (typeof createConfettiBurst === "function" && !reduced()) {
        createConfettiBurst({
          pieces: 18,
          maxPieces: 28,
          sideBursts: false,
          colors: ["#ffb7d5", "#fff2f7", "#e7c56d", "#ff6fae"],
          ...options,
        });
      }
    } catch {}
  }

  function showPanel(containerSelector, stage) {
    const container = $(containerSelector);
    if (!container || !flowStages.includes(stage)) return;
    if (container.id === "girlfriendProposal") container.dataset.flowStage = stage;
    const shell = container.id === "girlfriendProposal" ? $("#proposalCard", container) : $("#dateFlowShell", container);
    if (shell) shell.dataset.step = stage;
    $$('[data-flow-panel]', shell || container).forEach((panel) => {
      const active = panel.dataset.flowPanel === stage;
      panel.hidden = !active;
      panel.classList.toggle("is-active", active);
      panel.classList.remove("is-entering");
      if (active) requestAnimationFrame(() => panel.classList.add("is-entering"));
    });
  }

  function showDateStage(stage) {
    const date = $("#dateInvitation");
    if (!date) return;
    date.dataset.flowStage = stage;
    showPanel("#dateInvitation", stage);
  }

  function showProposalStage(stage) {
    const proposal = $("#girlfriendProposal");
    if (!proposal) return;
    proposal.hidden = false;
    proposal.dataset.flowStage = stage;
    showPanel("#girlfriendProposal", stage);
  }

  function resetProposalChoice() {
    state.selectedVibe = "";
    state.currentVibe = "";
    state.audioPlaying = false;
    state.proposalRunId += 1;
    const audio = $("#proposalMomentAudio");
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      audio.onended = null;
    }
    $$(".proposal-song-card").forEach((card) => card.classList.remove("is-selected", "is-playing"));
    const start = $("#proposalSongStart");
    if (start) {
      start.disabled = true;
      start.setAttribute("aria-disabled", "true");
      start.classList.remove("is-waiting");
    }
    const note = $("#proposalSongNote");
    if (note) note.textContent = "Choose one vibe dulu yaa.";
    $("#proposalCard")?.classList.remove("is-proposal-accepted", "is-ring-claimed");
    $("#ringBoxButton")?.classList.remove("is-opening-now", "is-open", "is-ring-floating");
    $("#ringOpenContinue")?.classList.remove("is-open", "is-ready", "is-ring-floating");
  }

  function chooseDate(button) {
    state.selectedDate = button.dataset.dateType || "";
    $$("#dateTypePicker button[data-date-type]").forEach((item) => item.classList.toggle("is-selected", item === button));
    const plans = {
      "Lunch/Dinner Date": "Kita makan enak, duduk agak lama, terus ngobrol random sampai lupa waktu. No buru-buru pulang.",
      "Photobox Date": "Satu strip buat kamu, satu strip buat Rey. Pose lucu boleh, panik di booth juga boleh.",
      "Mall + Jajan Date": "Muter santai, cari jajan random, terus kamu boleh jadi navigator utama hari itu.",
      "Night Walk Date": "Jalan pelan, lampu kota, minuman kecil, dan obrolan yang ngga perlu selesai cepet.",
      "Movie Date": "Pilih film, popcorn di tengah, terus bahas scene random setelah lampunya nyala.",
      "Request": "Kamu request aja maunya gimana. Rey catat, Rey usahain, Rey salting sendiri.",
    };
    const title = $("#dateMiniPlanTitle");
    const text = $("#dateMiniPlanText");
    const mood = $("#dateMoodText");
    const msg = $("#dateFinalMessage");
    const next = $("#dateNextButton");
    const requestPanel = $("#dateRequestPanel");
    if (title) title.textContent = state.selectedDate === "Request" ? "Custom request selected" : `${state.selectedDate} selected`;
    if (text) text.textContent = plans[state.selectedDate] || "Date locked. Rey siapin mood-nya.";
    if (mood) mood.textContent = "yang penting sama kamu";
    if (msg) msg.textContent = state.selectedDate === "Request" ? "request bebas, asal nanti beneran jadi yaa." : "locked. aku siapin mood-nya, kamu tinggal pilih harinya.";
    if (requestPanel) requestPanel.hidden = state.selectedDate !== "Request";
    if (next) {
      next.hidden = false;
      next.textContent = state.selectedDate === "Request" ? "Lanjut after request" : "Lanjut ke next tiny thing";
    }
    button.classList.remove("is-card-pop");
    void button.offsetWidth;
    button.classList.add("is-card-pop");
  }

  function chooseSong(card) {
    state.selectedVibe = card.dataset.proposalSong || "";
    $$(".proposal-song-card").forEach((item) => {
      const isChosen = item === card;
      item.classList.toggle("is-selected", isChosen);
      // Selection only — never leave a card marked as playing before Start.
      item.classList.remove("is-playing");
    });
    const note = $("#proposalSongNote");
    const label = card.querySelector("strong")?.textContent || "That vibe";
    if (note) note.textContent = `${label} locked. Sekarang tinggal mulai.`;
    const start = $("#proposalSongStart");
    if (start) {
      start.disabled = false;
      start.removeAttribute("disabled");
      start.setAttribute("aria-disabled", "false");
    }
    // Selection only — the chosen vibe song starts when "Start this little scene" is pressed.
  }

  function playProposalAudio(vibeId) {
    const audio = $("#proposalMomentAudio");
    const vibes = {
      drakor: { src: "./assets/proposal/DrakorVibes.mp3", volume: .76 },
      soft: { src: "./assets/proposal/SoftVibes.mp3", volume: .72 },
      cute: { src: "./assets/proposal/CuteVibes.mp3", volume: .76 },
    };
    const vibe = vibes[vibeId];
    if (!audio || !vibe) return;
    // Seamless: if this exact vibe is already playing, let it keep going (no restart).
    if (state.currentVibe === vibeId && state.audioPlaying && !audio.paused) return;
    try {
      // Only quiet the background music the first time a vibe starts.
      if (!state.audioPlaying) {
        // vinylPlaying is a module-level binding, not a window property —
        // window.vinylPlaying was always undefined, so the BGM never stopped
        // and played on top of the proposal song (double audio).
        const wasVinylPlaying = typeof vinylPlaying !== "undefined"
          ? !!vinylPlaying
          : !!window.vinylPlaying;
        state.restoreBgm = wasVinylPlaying;
        if (wasVinylPlaying && typeof setVinylPlaying === "function") setVinylPlaying(false);
      }
      audio.pause();
      audio.currentTime = 0;
      audio.src = vibe.src;
      audio.volume = vibe.volume;
      state.currentVibe = vibeId;
      let count = 0;
      audio.onended = () => {
        count += 1;
        if (count < 2) {
          audio.currentTime = 0;
          audio.play().catch(() => {});
          return;
        }
        state.audioPlaying = false;
        if (state.restoreBgm && typeof setVinylPlaying === "function") setVinylPlaying(true, { forceEnable: true });
        state.restoreBgm = false;
      };
      audio.play().then(() => { state.audioPlaying = true; }).catch(() => {});
      state.audioPlaying = true;
    } catch {}
  }

  async function typeLine(text, runId) {
    const target = $("#proposalLine");
    if (!target || runId !== state.proposalRunId) return;
    target.innerHTML = "";
    target.classList.remove("is-line-in", "is-done");

    // Build per-word spans only — smooth fade + rise, no per-character blur.
    const words = text.split(" ");
    const wordSpans = [];
    words.forEach((word, index) => {
      const wordEl = document.createElement("span");
      wordEl.className = "proposal-word";
      wordEl.textContent = word;
      target.appendChild(wordEl);
      wordSpans.push(wordEl);
      if (index < words.length - 1) target.appendChild(document.createTextNode(" "));
    });

    await delay(120);
    if (runId !== state.proposalRunId) return;
    target.classList.add("is-line-in");

    for (const span of wordSpans) {
      if (runId !== state.proposalRunId) return;
      span.classList.add("is-visible");
      const word = span.textContent || "";
      // Linger a touch longer after punctuation for a natural cadence.
      await delay(/[.,!?…]$/.test(word) ? 240 : 110);
    }
    target.classList.add("is-done");
    await delay(text.length > 58 ? 1480 : 1120);
  }

  async function startProposalScene() {
    if (!state.selectedVibe) return;
    const runId = ++state.proposalRunId;
    const start = $("#proposalSongStart");
    if (start) start.classList.add("is-waiting");
    const note = $("#proposalSongNote");
    if (note) note.textContent = "Okee... don’t overthink this part.";
    playProposalAudio(state.selectedVibe);
    await delay(180);
    if (runId !== state.proposalRunId) return;
    showProposalStage("proposalIntro");
    for (const line of proposalLines) await typeLine(line, runId);
    if (runId !== state.proposalRunId) return;
    showProposalStage("proposalQuestion");
    [40, 50, 60].forEach((x, i) => window.setTimeout(() => burst({ pieces: 10, maxPieces: 14, x, y: i === 1 ? 42 : 48 }), i * 90));
  }

  function gotoProposalSong() {
    const proposal = $("#girlfriendProposal");
    if (!proposal) return;
    resetProposalChoice();
    proposal.hidden = false;
    showProposalStage("proposalSong");
    proposal.scrollIntoView({ behavior: reduced() ? "auto" : "smooth", block: "start" });
  }

  function handleNo(button) {
    state.noCount += 1;
    const states = ["BOMAT, ga ya ga!", "BATU BGT SIH", "TAKNAKK!!", ":(", "OKE AKU NYERAH"];
    button.textContent = states[Math.min(state.noCount - 1, states.length - 1)];
    button.classList.remove("is-soft-shake");
    void button.offsetWidth;
    button.classList.add("is-soft-shake");
    safeSfx("playFailureSfx");

    // Gently force toward YES: shrink No, grow + emphasize Yes on every attempt.
    const panel = $("#dateInvitePanel") || document.documentElement;
    panel.style.setProperty("--no-scale", String(Math.max(0.4, 1 - state.noCount * 0.12)));
    panel.style.setProperty("--yes-scale", String(Math.min(1.18, 1 + state.noCount * 0.05)));
    $("#dateYes")?.classList.add("is-main-character");
    const note = $("#dateAttemptNote");

    // After the playful states run out, No surrenders for good but never rejects the flow.
    if (state.noCount >= states.length) {
      button.disabled = true;
      button.setAttribute("aria-disabled", "true");
      if (note) note.textContent = "yaudah, tinggal pencet YES aja yaa 🥺";
    } else if (note) {
      note.textContent = "No-nya makin kecil, YES-nya makin gede — udah takdir hihi.";
    }
  }

  // Note: button press sound is handled in the click listener below via the
  // app's usual click SFX (button-click.mp3). No ambient synth "pop" here.

  document.addEventListener("click", (event) => {
    const target = safeClosest(event.target, "button, img.promise-ring-closeup");
    if (!target) return;
    const id = target.id;
    const isHandled = id === "dateYes" || id === "dateNo" || id === "dateNextButton" || id === "dateRequestButton" || id === "proposalSongStart" || id === "proposalYes" || id === "proposalSoftNo" || id === "proposalConfirmButton" || id === "ringBoxButton" || id === "ringOpenContinue" || id === "claimRingButton" || id === "replayProposalFlow" || target.matches(".date-option-card") || target.matches(".proposal-song-card") || target.matches("img.promise-ring-closeup");
    if (!isHandled) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    // We stop propagation above, which would otherwise block the app's global
    // button audio — so play the usual click sound (button-click.mp3) here.
    if (!target.matches("[data-no-button-sound='true'], :disabled, [aria-disabled='true']")) {
      safeSfx("playButtonPressSfx");
    }

    if (id === "dateYes") {
      $("#dateFlowShell")?.classList.add("is-romance-transitioning");
      safeSfx("playSuccessSfx");
      window.setTimeout(() => {
        showDateStage("datePass");
        $("#dateFlowShell")?.classList.remove("is-romance-transitioning");
      }, reduced() ? 40 : 420);
      return;
    }
    if (id === "dateNo") return handleNo(target);
    if (target.matches(".date-option-card")) return chooseDate(target);
    if (id === "dateNextButton") {
      const chosen = state.selectedDate || $("#dateTypePicker .date-option-card.is-selected")?.dataset.dateType || "selected date";
      state.selectedDate = chosen;
      try { localStorage.setItem("cinta-birthday-date-type", chosen); } catch {}
      return gotoProposalSong();
    }
    if (id === "dateRequestButton") {
      const input = $("#dateRequestInput");
      const requestText = (input?.value || "").trim();
      const body = `babyyy, aku mau request date ${requestText || "..."}`;
      safeSfx("playSuccessSfx");
      if (config.whatsappNumber) {
        window.open(`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(body)}`, "_blank", "noopener,noreferrer");
      }
      return;
    }
    if (target.matches(".proposal-song-card")) return chooseSong(target);
    if (id === "proposalSongStart") return startProposalScene();
    if (id === "proposalYes") {
      showProposalStage("proposalConfirm");
      safeSfx("playSuccessSfx");
      return;
    }
    if (id === "proposalSoftNo") {
      state.proposalNoCount += 1;
      target.textContent = proposalNoReplies[Math.min(state.proposalNoCount - 1, proposalNoReplies.length - 1)];
      target.classList.remove("is-soft-shake");
      void target.offsetWidth;
      target.classList.add("is-soft-shake");
      safeSfx("playFailureSfx");
      if (state.proposalNoCount >= proposalNoReplies.length) {
        target.disabled = true;
        target.setAttribute("aria-disabled", "true");
      }
      return;
    }
    if (id === "proposalConfirmButton") {
      showProposalStage("ringClosed");
      safeSfx("playSuccessSfx");
      return;
    }
    if (id === "ringBoxButton") {
      target.classList.add("is-opening-now");
      safeSfx("playSuccessSfx");
      window.setTimeout(() => {
        target.classList.remove("is-opening-now");
        showProposalStage("ringOpen");
        $("#ringOpenContinue")?.classList.add("is-open", "is-ready");
        burst({ pieces: 18, maxPieces: 24, x: 50, y: 40 });
        safeSfx("playConfettiSfx");
      }, reduced() ? 80 : 680);
      return;
    }
    if (id === "ringOpenContinue") {
      target.classList.add("is-ring-floating");
      burst({ pieces: 24, maxPieces: 30, x: 50, y: 40 });
      safeSfx("playConfettiSfx");
      window.setTimeout(() => {
        showProposalStage("ringCloseup");
        burst({ pieces: 20, maxPieces: 26, x: 50, y: 42 });
        safeSfx("playConfettiSfx");
      }, reduced() ? 120 : 1120);
      return;
    }
    if (id === "claimRingButton" || target.matches("img.promise-ring-closeup")) {
      showProposalStage("finalOfficial");
      burst({ pieces: 52, maxPieces: 64, sideBursts: true, x: 50, y: 48 });
      safeSfx("playConfettiSfx");
      safeSfx("playSuccessSfx");
      return;
    }
    if (id === "replayProposalFlow") return gotoProposalSong();
  }, true);

  window.addEventListener("birthday:proposal-start", gotoProposalSong);
  window.RayDateProposalFailsafe = { showDateStage, showProposalStage, gotoProposalSong, startProposalScene };
})();
