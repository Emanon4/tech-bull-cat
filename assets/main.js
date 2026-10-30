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
      brandHuawei: "华为 ↗",
      brandYangwang: "仰望 ↗",
      brandDeepal: "深蓝 ↗",
      brandMihoyo: "米哈游 ↗",
      intro: "科创大牛猫 · 把复杂科技讲成好故事",
      introLink: "认识大牛猫与合作方向 ↗",
      aboutEyebrow: "认识科创大牛猫",
      aboutTitle: "从科技现场，到每个人的生活。",
      aboutBody: "科创大牛猫关注科技与商业，走进展会、体验产品，也拆解技术背后的产业故事。我们从用户的真实问题出发，把复杂技术讲成看得懂、愿意分享的内容。",
      personaNote: "大牛猫是品牌标识，出镜数字人是作品导览中的视觉角色。展厅画面为 AI 场景演绎；点击作品可回到真实原片。",
      aboutCta: "聊聊你的内容项目 ↗",
      factWorks: "本站收录作品",
      factReach: "米哈游代表作播放",
      factNote: "作品数据采集于 2026.10.30，非实时数据；最新数值以平台为准。",
      servicesEyebrow: "从案例开始了解合作",
      servicesTitle: "你的产品，适合怎样的故事？",
      serviceField: "现场探访",
      serviceFieldText: "从展台走到实际体验，让观众看到新技术如何进入生活。",
      serviceFieldLink: "看探展作品 ↗",
      serviceCars: "汽车体验",
      serviceCarsText: "围绕使用场景讲产品，把技术配置转成观众关心的体验。",
      serviceCarsLink: "看汽车作品 ↗",
      serviceDigital: "数码与 AI",
      serviceDigitalText: "通过产品实测与技术解读，说明一项创新究竟带来了什么。",
      serviceDigitalLink: "看科技作品 ↗",
      serviceBusiness: "商业故事",
      serviceBusinessText: "从一个产品或公司出发，解释产业变化与商业选择。",
      serviceBusinessLink: "看商业作品 ↗",
      brandsTitle: "在作品里，了解我们讲过的品牌",
      brandsNote: "以下为片单涉及的品牌。点击查看对应作品，不代表全部属于商业合作。",
      contactBrief: "添加微信时，请附上品牌或产品、计划发布时间与预算范围，方便我们判断适合的内容形式。",
      servicesNav: "合作方向",
      legacyLink: "历史版本",
      backTop: "回到顶部 ↑",

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
      filterAll: "全部",
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
      contactText: "品牌定制内容与长期共创，欢迎带着你的产品来聊。",
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
      brandHuawei: "Huawei ↗",
      brandYangwang: "YANGWANG ↗",
      brandDeepal: "Deepal ↗",
      brandMihoyo: "miHoYo ↗",
      intro: "科创大牛猫 · Technology, told through good stories",
      introLink: "Meet the creator & explore collaborations ↗",
      aboutEyebrow: "MEET 科创大牛猫",
      aboutTitle: "From the show floor to everyday life.",
      aboutBody: "We explore technology and business through exhibitions, hands-on experiences and the industries behind products. Starting with real audience questions, we make complex ideas clear and worth sharing.",
      personaNote: "The mascot represents the brand; the digital human guides the collection. Gallery images are AI scene interpretations. Each story links to its original video.",
      aboutCta: "Tell us about your project ↗",
      factWorks: "Stories in this collection",
      factReach: "Views of our miHoYo story",
      factNote: "Snapshot recorded on 30 Oct 2026, not live data. See the platform for current figures.",
      servicesEyebrow: "EXPLORE THE WORK BEHIND THE OFFER",
      servicesTitle: "Find the story in your product.",
      serviceField: "On location",
      serviceFieldText: "Take audiences beyond the exhibition stand to see how technology fits into daily life.",
      serviceFieldLink: "Explore field stories ↗",
      serviceCars: "Car experiences",
      serviceCarsText: "Translate specifications into the everyday experiences that matter to drivers.",
      serviceCarsLink: "Explore car stories ↗",
      serviceDigital: "Tech & AI",
      serviceDigitalText: "Hands-on experiences and clear explanations of what an innovation actually changes.",
      serviceDigitalLink: "Explore tech stories ↗",
      serviceBusiness: "Business stories",
      serviceBusinessText: "Start with a company or product to explain an industry and its business choices.",
      serviceBusinessLink: "Explore business stories ↗",
      brandsTitle: "Explore brands through our stories",
      brandsNote: "These brands appear in the collection. Inclusion does not imply a paid partnership.",
      contactBrief: "When adding us on WeChat, include your brand or product, intended release date and budget range so we can discuss a suitable format.",
      servicesNav: "Collaboration formats",
      legacyLink: "Historical site",
      backTop: "Back to top ↑",

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
      filterAll: "All",
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
      contactText: "Custom branded stories and ongoing creative partnerships.",
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
      brandHuawei: "Huawei ↗",
      brandYangwang: "YANGWANG ↗",
      brandDeepal: "Deepal ↗",
      brandMihoyo: "miHoYo ↗",
      intro: "科创大牛猫 · 複雑な技術を、伝わる物語に",
      introLink: "私たちと制作について ↗",
      aboutEyebrow: "科创大牛猫について",
      aboutTitle: "テクノロジーの現場から、日々の暮らしへ。",
      aboutBody: "展示会の取材や製品体験を通じて、技術とビジネスを伝えます。視聴者の身近な疑問から出発し、複雑な技術を理解しやすく、共有したくなる物語にします。",
      personaNote: "マスコットはブランドのシンボル、デジタルヒューマンは作品案内のキャラクターです。画像は AI による演出で、各作品から元動画を視聴できます。",
      aboutCta: "制作について相談する ↗",
      factWorks: "収録作品数",
      factReach: "miHoYo代表作品の再生数",
      factNote: "2026年10月30日取得。リアルタイムの数値ではありません。最新情報は各プラットフォームをご確認ください。",
      servicesEyebrow: "作品から制作内容を知る",
      servicesTitle: "製品の魅力を、どんな物語に？",
      serviceField: "現場取材",
      serviceFieldText: "展示ブースから実際の体験へ。技術が暮らしにどう関わるかを伝えます。",
      serviceFieldLink: "取材作品を見る ↗",
      serviceCars: "自動車体験",
      serviceCarsText: "技術仕様を、ドライバーが気になる日々の使用体験として伝えます。",
      serviceCarsLink: "自動車作品を見る ↗",
      serviceDigital: "テックと AI",
      serviceDigitalText: "製品体験と技術解説を通じて、イノベーションが変えることを伝えます。",
      serviceDigitalLink: "テック作品を見る ↗",
      serviceBusiness: "ビジネスの物語",
      serviceBusinessText: "製品や企業を起点に、産業の変化と経営の選択を解説します。",
      serviceBusinessLink: "ビジネス作品を見る ↗",
      brandsTitle: "作品で紹介したブランド",
      brandsNote: "収録作品に登場するブランドです。すべてが広告案件であることを意味しません。",
      contactBrief: "WeChatでご連絡の際は、ブランドや製品、公開予定日、ご予算の目安をお知らせください。適切な制作形式をご相談できます。",
      servicesNav: "制作について",
      legacyLink: "過去のサイト",
      backTop: "トップへ ↑",

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
      filterAll: "すべて",
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
      contactText: "ブランド向けの制作と継続的な共同制作をご相談いただけます。",
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
    const scene = element("span", "card-scene", t("sceneLabel"));
    art.append(photo, play, scene);
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
  function syncUrl() {
    const url = new URL(location.href);
    if (state.category === "all") url.searchParams.delete("category");
    else url.searchParams.set("category", state.category);
    if (state.query) url.searchParams.set("q", state.query);
    else url.searchParams.delete("q");
    history.replaceState(null, "", url);
  }
  function readFilters() {
    const params = new URLSearchParams(location.search);
    state.category = ["field", "cars", "digital", "business"].includes(params.get("category")) ? params.get("category") : "all";
    state.query = searchText((params.get("q") || "").trim());
    $("#searchInput").value = params.get("q") || "";
    state.limit = 12;
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
    state.category = ["all", "field", "cars", "digital", "business"].includes(category) ? category : "all";
    state.limit = 12;
    syncUrl();
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
    $("#profileViews").textContent = metric(hero.plays, hero.playValue);
    $("#collectedCount").textContent = works.length;
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
    syncUrl();
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
  $$("[data-category-link]").forEach((link) => link.addEventListener("click", (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    state.query = ""; $("#searchInput").value = "";
    setCategory(link.dataset.categoryLink);
    location.hash = "gallery";
    $("#gallery").scrollIntoView({behavior: "instant"});
    closeMenu();
  }));
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
  readFilters();
  window.addEventListener("popstate", () => {
    const previous = `${state.category}|${state.query}`;
    const previousLimit = state.limit;
    readFilters();
    if (previous !== `${state.category}|${state.query}`) render();
    else state.limit = previousLimit;
  });
  window.addEventListener("load", () => {
    const target = document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView({behavior:"instant"});
  });
  const sections = [$("#gallery"), $("#about"), $("#contact")];
  function updateNavigation() {
    const active = sections.reduce((current, section) => section.getBoundingClientRect().top <= 150 ? section.id : current, "gallery");
    $$("#mainNav a").forEach(link => {
      const selected = link.hash === `#${active}`;
      link.classList.toggle("active", selected);
      if (selected) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }
  window.addEventListener("scroll", updateNavigation, {passive:true});
  applyLanguage(initialLang);
  updateNavigation();
})();
