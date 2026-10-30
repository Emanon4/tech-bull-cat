(() => {
  "use strict";
  const data = window.DNM_WORKS;
  if (!data || !Array.isArray(data.works)) return;
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));
  const works = data.works;
  const byId = new Map(works.map((work) => [work.id, work]));
  const hero = byId.get(data.heroId);
  const featured = data.featuredIds.map((id) => byId.get(id)).filter(Boolean);
  const featuredIds = new Set(data.featuredIds);
  const state = {
    category: "all",
    query: "",
    lang: "zh",
    archiveOpen: false,
    limit: 12,
  };
  const translations = {
    zh: {
      skip: "跳到主内容",
      navGallery: "作品放映室",
      navField: "走进现场",
      navProfile: "账号介绍",
      navContact: "合作",
      tagline: "让一部分科技先酷起来",
      sceneLabel: "数字人场景演绎",
      heroEyebrow: "经典代表",
      heroLine1: "米哈游的",
      heroLine2: "商业世界",
      heroDescription:
        "从产品创意到全球市场，拆解米哈游如何用内容和技术，打造触动全球玩家的商业故事。",
      views: "播放",
      likes: "点赞",
      watch: "观看原片",
      galleryEyebrow: "回到那些经典瞬间",
      galleryTitle: "好故事，值得再看一次。",
      galleryHint: "点击画面，进入原片",
      filterAll: "精选",
      filterField: "现场",
      filterCars: "汽车",
      filterDigital: "数码",
      filterBusiness: "商业",
      searchLabel: "搜索作品",
      searchPlaceholder: "搜索品牌、车型或主题",
      emptyTitle: "还没有找到这段故事",
      emptyText: "换个关键词，或回到全部作品看看。",
      reset: "查看全部作品",
      explore: "继续浏览经典作品",
      collapse: "收起经典片单",
      archiveEyebrow: "更多值得回看的作品",
      archiveTitle: "经典片单",
      sortLabel: "作品排序",
      sortCurated: "策展顺序",
      sortPlays: "播放量从高到低",
      sortLikes: "点赞从高到低",
      loadMore: "再看 12 部",
      contactEyebrow: "下一个故事，一起出发",
      contactTitle: "把好科技，讲给更多人听。",
      contactText: "科技探展 · 汽车体验 · 商业故事",
      wechat: "商务微信",
      copy: "复制微信号",
      profile: "去抖音主页逛逛",
      kuaishou: "快手",
      rednote: "小红书",
      bilibili: "哔哩哔哩",
      sourceNote:
        "画面为数字人场景演绎，对应原片入口；播放与点赞数据采集于 2026.10.30，以平台显示为准。",
      musicOff: "背景音乐：关",
      musicOn: "背景音乐：开",
      musicError: "暂时无法播放音乐，请稍后重试。",
      qrEyebrow: "继续观看",
      qrDescription: "扫码或在微信中长按识别二维码，观看对应原片。",
      qrAlt: "该作品的抖音二维码",
      qrAction: "打开原片二维码",
      close: "关闭二维码",
      external: "观看原片",
      menuOpen: "打开导航",
      menuClose: "关闭导航",
      copied: "微信号已复制：qianpai857",
      copyFallback: "请长按或选择微信号复制：qianpai857",
      result: (n) => `共 ${n} 部作品 · 数据采集于 2026.10.30`,
      showing: (n, total) => `已显示 ${n} / ${total} 部`,
      pageTitle: "科创大牛猫 · 作品放映室",
    },
    en: {
      skip: "Skip to content",
      navGallery: "Screening room",
      navField: "On location",
      navProfile: "Profile",
      navContact: "Collaborate",
      tagline: "A cooler side of technology",
      sceneLabel: "Digital-human scene",
      heroEyebrow: "THE SIGNATURE STORY",
      heroLine1: "Inside the world",
      heroLine2: "of miHoYo",
      heroDescription:
        "From creative ideas to a global audience: how miHoYo turns content and technology into a business that connects players worldwide.",
      views: "Views",
      likes: "Likes",
      watch: "Watch original",
      galleryEyebrow: "REVISIT THE MOMENT",
      galleryTitle: "Good stories deserve another look.",
      galleryHint: "Select an image to watch the original",
      filterAll: "Selected",
      filterField: "On location",
      filterCars: "Cars",
      filterDigital: "Tech",
      filterBusiness: "Business",
      searchLabel: "Search stories",
      searchPlaceholder: "Search a brand, model or topic",
      emptyTitle: "No stories found",
      emptyText: "Try another keyword, or browse the full collection.",
      reset: "View all stories",
      explore: "Explore more classic stories",
      collapse: "Hide the collection",
      archiveEyebrow: "MORE STORIES TO REDISCOVER",
      archiveTitle: "The collection",
      sortLabel: "Sort stories",
      sortCurated: "Curated order",
      sortPlays: "Most viewed",
      sortLikes: "Most liked",
      loadMore: "Show 12 more",
      contactEyebrow: "LET’S MAKE THE NEXT STORY",
      contactTitle: "Bring good technology to more people.",
      contactText: "Technology on location · Cars · Business",
      wechat: "Business WeChat",
      copy: "Copy WeChat ID",
      profile: "Explore our Douyin",
      kuaishou: "Kuaishou",
      rednote: "RedNote",
      bilibili: "Bilibili",
      sourceNote:
        "Images are digital-human scene interpretations linked to the original videos. Views and likes were recorded on 30 Oct 2026; the platform is the current source.",
      musicOff: "Music: off",
      musicOn: "Music: on",
      musicError: "Music is unavailable. Please try again.",
      qrEyebrow: "KEEP WATCHING",
      qrDescription:
        "Scan or long-press this QR code in WeChat to open the original video.",
      qrAlt: "Douyin QR code for this story",
      qrAction: "Open the video QR code",
      close: "Close QR code",
      external: "Watch the original",
      menuOpen: "Open navigation",
      menuClose: "Close navigation",
      copied: "Copied WeChat ID: qianpai857",
      copyFallback: "Select or long-press to copy: qianpai857",
      result: (n) => `${n} ${n === 1 ? "story" : "stories"} · Snapshot: 30 Oct 2026`,
      showing: (n, total) => `${n} of ${total} ${total === 1 ? "story" : "stories"} shown`,
      pageTitle: "科创大牛猫 · Screening room",
    },
    ja: {
      skip: "本文へ移動",
      navGallery: "上映室",
      navField: "現場へ",
      navProfile: "プロフィール",
      navContact: "お問い合わせ",
      tagline: "テクノロジーを、もっとクールに",
      sceneLabel: "デジタルヒューマンによる演出",
      heroEyebrow: "代表作品",
      heroLine1: "miHoYoの",
      heroLine2: "ビジネスの世界",
      heroDescription:
        "アイデアから世界市場へ。コンテンツと技術で世界のプレイヤーをつなぐ、miHoYoのビジネスをひもときます。",
      views: "再生",
      likes: "いいね",
      watch: "オリジナルを見る",
      galleryEyebrow: "あの瞬間を、もう一度",
      galleryTitle: "いい物語は、何度でも。",
      galleryHint: "画像をクリックして元動画へ",
      filterAll: "厳選",
      filterField: "現場",
      filterCars: "自動車",
      filterDigital: "テック",
      filterBusiness: "ビジネス",
      searchLabel: "作品を検索",
      searchPlaceholder: "ブランド・車種・テーマを検索",
      emptyTitle: "作品が見つかりませんでした",
      emptyText: "キーワードを変えるか、すべての作品をご覧ください。",
      reset: "すべての作品を見る",
      explore: "さらに名作を見る",
      collapse: "作品リストを閉じる",
      archiveEyebrow: "もう一度見たい物語",
      archiveTitle: "作品コレクション",
      sortLabel: "作品の並び順",
      sortCurated: "おすすめ順",
      sortPlays: "再生数の多い順",
      sortLikes: "いいねの多い順",
      loadMore: "さらに12作品",
      contactEyebrow: "次の物語を、一緒に",
      contactTitle: "優れた技術を、もっと多くの人へ。",
      contactText: "テクノロジー取材 · 自動車 · ビジネス",
      wechat: "ビジネス用WeChat",
      copy: "WeChat IDをコピー",
      profile: "Douyinのホームへ",
      kuaishou: "快手",
      rednote: "小紅書",
      bilibili: "ビリビリ",
      sourceNote:
        "画像はデジタルヒューマンによるシーン演出です。リンク先は元動画。再生数・いいね数は2026年10月30日取得、最新情報はプラットフォームをご確認ください。",
      musicOff: "BGM：オフ",
      musicOn: "BGM：オン",
      musicError: "音楽を再生できません。後でもう一度お試しください。",
      qrEyebrow: "続きを見る",
      qrDescription:
        "QRコードをスキャン、またはWeChatで長押しして元動画をご覧ください。",
      qrAlt: "作品のDouyin QRコード",
      qrAction: "元動画のQRコードを開く",
      close: "QRコードを閉じる",
      external: "元動画を見る",
      menuOpen: "ナビゲーションを開く",
      menuClose: "ナビゲーションを閉じる",
      copied: "WeChat IDをコピーしました：qianpai857",
      copyFallback: "長押しまたは選択してコピー：qianpai857",
      result: (n) => `全${n}作品 · 2026年10月30日取得`,
      showing: (n, total) => `${total}作品中${n}作品を表示`,
      pageTitle: "科创大牛猫 · 上映室",
    },
  };
  const t = (key) => translations[state.lang][key];
  const titleOf = (work) =>
    state.lang === "zh" ? work.title : work.titles?.[state.lang] || work.title;
  const searchText = (value) => value.normalize("NFKC").toLocaleLowerCase();
  const metric = (raw, value) =>
    state.lang !== "en"
      ? raw
      : value >= 1e6
        ? `${(value / 1e6).toFixed(3).replace(/0+$/, "").replace(/\.$/, "")}M`
        : value >= 1e3
          ? `${(value / 1e3).toFixed(1).replace(/\.0$/, "")}K`
          : String(value);
  function element(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
  }
  function icon(name, size) {
    const img = element("img");
    img.src = `assets/icons/${name}.svg`;
    img.alt = "";
    img.width = size;
    img.height = size;
    return img;
  }
  function videoLink(work, className) {
    const link = element("a", className);
    link.href = work.url;
    link.target = "_self";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", `${titleOf(work)} · ${t("external")}`);
    return link;
  }
  function qrButton(work) {
    const button = element("button", "icon-button");
    button.type = "button";
    button.dataset.qr = work.id;
    button.setAttribute("aria-label", `${t("qrAction")}：${titleOf(work)}`);
    button.append(icon("qr-code", 20));
    return button;
  }
  function card(work) {
    const article = element("article", "work-card");
    article.dataset.workId = work.id;
    const art = videoLink(work, "work-art");
    const photo = element("img", "work-photo");
    photo.src = `assets/gallery/${work.image}.jpg`;
    photo.srcset = `assets/gallery/${work.image}-720.jpg 720w, assets/gallery/${work.image}.jpg 1536w`;
    photo.sizes = "(max-width: 760px) 48vw, (max-width: 900px) 31vw, 24vw";
    photo.width = 1536;
    photo.height = 1024;
    photo.loading = "lazy";
    photo.decoding = "async";
    photo.alt = `${titleOf(work)} · ${t("sceneLabel")}`;
    const play = icon("play-circle", 29);
    play.className = "work-play";
    art.append(photo, play);
    const heading = element("h3");
    const titleLink = videoLink(work);
    titleLink.textContent = titleOf(work);
    heading.append(titleLink);
    const meta = element("div", "work-meta");
    const count = element("span", "work-views");
    count.append(
      element("span", "", t("views")),
      element("strong", "", metric(work.plays, work.playValue)),
    );
    meta.append(count, qrButton(work));
    article.append(art, heading, meta);
    return article;
  }
  function archiveRow(work, i) {
    const row = element("article", "archive-row");
    row.dataset.workId = work.id;
    const link = videoLink(work, "archive-title");
    link.textContent = titleOf(work);
    const views = element("span", "archive-metric views");
    views.append(
      element("strong", "", metric(work.plays, work.playValue)),
      element("span", "", t("views")),
    );
    const likes = element("span", "archive-metric likes");
    likes.append(
      element("strong", "", metric(work.likes, work.likeValue)),
      element("span", "", t("likes")),
    );
    row.append(
      element("span", "archive-number", String(i + 1).padStart(2, "0")),
      link,
      views,
      likes,
      qrButton(work),
    );
    return row;
  }
  function matches(work) {
    const categoryMatch =
      state.category === "all" || work.category === state.category;
    const haystack = searchText(
      [work.title, work.originalTitle, ...Object.values(work.titles || {})].join(" "),
    );
    return categoryMatch && (!state.query || haystack.includes(state.query));
  }
  function render() {
    const results = works.filter(matches);
    const visibleFeatured = featured.filter(matches);
    $("#galleryGrid").replaceChildren(...visibleFeatured.map(card));
    $("#galleryGrid").hidden = !visibleFeatured.length;
    $("#emptyState").hidden = results.length > 0;
    $("#resultStatus").textContent = t("result")(results.length);
    let rest = results.filter((work) => !featuredIds.has(work.id));
    const order = $("#sortSelect").value;
    if (order === "plays")
      rest = rest.slice().sort((a, b) => b.playValue - a.playValue);
    if (order === "likes")
      rest = rest.slice().sort((a, b) => b.likeValue - a.likeValue);
    const archiveVisible =
      rest.length > 0 &&
      (state.archiveOpen || Boolean(state.query) || state.category !== "all");
    $("#archive").hidden = !archiveVisible;
    $("#archiveList").replaceChildren(
      ...rest.slice(0, state.limit).map(archiveRow),
    );
    $("#loadMore").hidden = rest.length <= state.limit;
    $("#loadMore").setAttribute(
      "aria-label",
      `${t("loadMore")} · ${t("showing")(Math.min(state.limit, rest.length), rest.length)}`,
    );
    $("#exploreButton").hidden =
      !rest.length || Boolean(state.query) || state.category !== "all";
    $("#exploreButton").setAttribute("aria-expanded", String(archiveVisible));
    $("#exploreButton span").textContent = t(
      archiveVisible ? "collapse" : "explore",
    );
    $$("[data-filter]").forEach((button) =>
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.filter === state.category),
      ),
    );
  }
  function setCategory(category) {
    state.category = category;
    state.limit = 12;
    render();
  }
  function closeMenu() {
    $("#mainNav").classList.remove("is-open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
    $("#menuToggle").setAttribute("aria-label", t("menuOpen"));
  }
  let toastTimer;
  function toast(message) {
    clearTimeout(toastTimer);
    $("#toast").textContent = message;
    $("#toast").hidden = false;
    toastTimer = setTimeout(() => {
      $("#toast").hidden = true;
    }, 3200);
  }
  const audio = $("#audio");
  function updateMusic() {
    $("#musicButton").textContent = t(audio.paused ? "musicOff" : "musicOn");
    $("#musicButton").setAttribute("aria-pressed", String(!audio.paused));
  }
  const dialog = $("#qrDialog");
  let previousFocus;
  let qrWork;
  function updateDialog() {
    if (!qrWork) return;
    $("#qrTitle").textContent = titleOf(qrWork);
    $("#qrImage").src = `assets/qr/works/${qrWork.id}.png`;
    $("#qrImage").alt = `${titleOf(qrWork)} · ${t("qrAlt")}`;
    $("#qrOriginalLink").href = qrWork.url;
  }
  function openQr(id, trigger) {
    qrWork = byId.get(id);
    if (!qrWork) return;
    previousFocus = trigger;
    updateDialog();
    dialog.showModal();
  }
  function applyLanguage(lang) {
    state.lang = translations[lang] ? lang : "zh";
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : state.lang;
    document.title = t("pageTitle");
    $$("[data-i18n]").forEach((el) => {
      const value = t(el.dataset.i18n);
      if (typeof value === "string") el.textContent = value;
    });
    $$("[data-lang]").forEach((button) =>
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.lang === state.lang),
      ),
    );
    $("#searchInput").placeholder = t("searchPlaceholder");
    $("#closeDialog").setAttribute("aria-label", t("close"));
    $("#heroArt").setAttribute(
      "aria-label",
      `${titleOf(hero)} · ${t("external")}`,
    );
    $("#heroViews").textContent = metric(hero.plays, hero.playValue);
    $("#heroLikes").textContent = metric(hero.likes, hero.likeValue);
    $("#menuToggle").setAttribute(
      "aria-label",
      t($("#mainNav").classList.contains("is-open") ? "menuClose" : "menuOpen"),
    );
    updateMusic();
    updateDialog();
    render();
    try {
      localStorage.setItem("dnm-lang", state.lang);
    } catch (_) {
      /* Storage is optional. */
    }
  }
  $$("[data-filter]").forEach((button) =>
    button.addEventListener("click", () => setCategory(button.dataset.filter)),
  );
  $$("[data-lang]").forEach((button) =>
    button.addEventListener("click", () => applyLanguage(button.dataset.lang)),
  );
  $("#searchInput").addEventListener("input", (event) => {
    state.query = searchText(event.target.value.trim());
    state.limit = 12;
    render();
  });
  $("#resetFilters").addEventListener("click", () => {
    $("#searchInput").value = "";
    state.query = "";
    setCategory("all");
    $("#searchInput").focus();
  });
  $("#sortSelect").addEventListener("change", () => {
    state.limit = 12;
    render();
  });
  $("#loadMore").addEventListener("click", () => {
    state.limit += 12;
    render();
  });
  $("#exploreButton").addEventListener("click", () => {
    state.archiveOpen = !state.archiveOpen;
    render();
    if (state.archiveOpen)
      $("#archive").scrollIntoView({
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
  });
  $("#menuToggle").addEventListener("click", () => {
    const open = $("#mainNav").classList.toggle("is-open");
    $("#menuToggle").setAttribute("aria-expanded", String(open));
    $("#menuToggle").setAttribute(
      "aria-label",
      t(open ? "menuClose" : "menuOpen"),
    );
  });
  $$("#mainNav a").forEach((link) =>
    link.addEventListener("click", () => {
      if (link.dataset.categoryLink) {
        state.query = "";
        $("#searchInput").value = "";
        setCategory(link.dataset.categoryLink);
      }
      closeMenu();
    }),
  );
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-qr]");
    if (trigger) openQr(trigger.dataset.qr, trigger);
  });
  $("#closeDialog").addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => {
    if (previousFocus && previousFocus.isConnected) previousFocus.focus();
  });
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    if (
      event.clientX < r.left ||
      event.clientX > r.right ||
      event.clientY < r.top ||
      event.clientY > r.bottom
    )
      dialog.close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
    if (
      event.key === "/" &&
      !dialog.open &&
      !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)
    ) {
      event.preventDefault();
      $("#searchInput").focus();
    }
  });
  $("#copyContact").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("qianpai857");
      toast(t("copied"));
    } catch (_) {
      const range = document.createRange();
      range.selectNodeContents($("#copyContact strong"));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      toast(t("copyFallback"));
    }
  });
  $("#musicButton").addEventListener("click", async () => {
    if (!audio.paused) audio.pause();
    else {
      try {
        await audio.play();
      } catch (_) {
        toast(t("musicError"));
      }
    }
    updateMusic();
  });
  audio.addEventListener("play", updateMusic);
  audio.addEventListener("pause", updateMusic);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && !audio.paused) audio.pause();
  });
  let initialLang = "zh";
  try {
    initialLang = localStorage.getItem("dnm-lang") || "zh";
  } catch (_) {
    /* Storage is optional. */
  }
  applyLanguage(initialLang);
})();
