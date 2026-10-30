/* ============================================================
   科创大牛猫 · 像素风官网  main.js
   i18n(中/EN/日) · 计数 · 滚动揭示 · 复制微信 · BGM 容错
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- i18n 词典 ---------------- */
  var I18N = {
    zh: {
      'a11y.skip': '跳到主内容', 'brand.name': '科创大牛猫',
      'nav.stats': '数据', 'nav.about': '关于', 'nav.content': '内容', 'nav.works': '作品', 'nav.value': '价值', 'nav.brands': '品牌', 'nav.follow': '矩阵', 'nav.contact': '合作',
      'hero.eyebrow': 'TECH-INNOVATION', 'hero.badge': '抖音创作者学院 · 合作讲师', 'hero.tagline': '让一部分科技先酷起来！',
      'hero.sub': '全网 700 万+ 粉丝的科技 × 商业 × AI 内容品牌', 'hero.cta1': '看代表作', 'hero.cta2': '商务合作', 'hero.start': '▼ PRESS START ▼',
      'stats.eyebrow': 'DATA · 数据面板', 'stats.title': '全网数据墙', 'stats.total': '全网总粉丝', 'stats.totalN': '700万+',
      'st.dy': '抖音', 'st.dyN': '351.4万', 'st.ks': '快手', 'st.ksN': '300万+', 'st.tt': '今日头条', 'st.ttN': '19万+',
      'st.xhs': '小红书', 'st.xhsN': '5.8万', 'st.sph': '视频号', 'st.sphN': '3万+', 'st.more': '微博 · 支付宝', 'st.run': '运营中',
      'stats.likesN': '5735.3万', 'stats.likes': '抖音累计获赞', 'stats.worksN': '241', 'stats.works': '抖音作品数', 'stats.maxN': '1164万', 'stats.max': '单条最高播放',
      'stats.slogan': '一次投放 · 8 倍裂变 · 全域轰炸',
      'stats.note': '数据综合各平台公开主页：抖音为实时数据，其余为官方招商口径，以平台官方为准。',
      'about.eyebrow': 'PROFILE · 角色档案', 'about.title': '优质科技 & 商业内容品牌',
      'about.body': '让您的产品在科技浪潮中脱颖而出、深入人心。科创大牛猫深耕全球科技动态、新能源汽车、人工智能与商业洞察，把复杂技术讲成用户爱看的故事。',
      'about.t1': 'IP 属地 · 广东深圳', 'about.t2': '科技 & AI 博主', 'about.t3': '抖音学院合作讲师', 'about.hexTitle': '六边形战士 · 满级技能',
      'hex.1': '可混剪', 'hex.2': '可出镜', 'hex.3': '可直播', 'hex.4': '可实测', 'hex.5': '可探展', 'hex.6': '可急单', 'about.hexNote': '一人成军 · 全链路自产',
      'content.eyebrow': 'STAGES · 内容关卡', 'content.title': '内容遍及',
      'c1.t': '人工智能 & 机器人', 'c1.d': 'AI 工具实测、隐形产业链拆解、机器人前沿动态。',
      'c2.t': '新能源汽车 & 3C 数码', 'c2.d': '新车实测、手机芯片、智能硬件与智能家电。',
      'c3.t': '商业洞察 & 科创投资', 'c3.d': '财报拆解、行业内幕、产业趋势与投资视角。',
      'c4.t': '游戏评测 & 探展直击', 'c4.d': '游戏厂商解读，CES · MWC · AWE · 世界机器人大会现场。',
      'content.tags': '全球科技动态 · 国产替代 · 中国智造出海 · 智能家电',
      'works.eyebrow': 'WORKS · 爆款卡带', 'works.title': '代表作品', 'works.lead': '真实数据 · 点击或微信长按二维码，直达抖音原片。',
      'wk.1tag': '华为 · 芯片', 'wk.1t': '一颗芯片和它的热血故事', 'wk.1stat': '▶ 390.0万　❤ 8.6万',
      'wk.2tag': '米哈游 · 商业', 'wk.hot': '最高播放', 'wk.2t': '1 年营收 300 亿，印钞机米哈游的逆袭', 'wk.2stat': '▶ 1164万　❤ 10.9万',
      'wk.3tag': '华为 · 麒麟', 'wk.3t': 'Mate70 麒麟芯片，又要让美国彻夜难眠', 'wk.3stat': '▶ 162.0万　❤ 4.1万',
      'work.scan': '长按看片', 'work.gen': 'AI 生成封面',
      'works.moreTitle': '更多高赞内容', 'works.all': '前往抖音主页看全部 →',
      'wk.m1': '深扒 AI 隐形产业链', 'wk.m1k': '❤ 1.2万', 'wk.m2': '全网梦境接龙 · 让 AI 可视化你的梦', 'wk.m2k': '❤ 2.1万',
      'wk.m3': '中央空调实测 · 国产凭什么反超日系', 'wk.m3k': '❤ 1.2万', 'wk.m4': '一块电池，改变了城市的三种人', 'wk.m4k': '❤ 2.0万',
      'wk.m5': '世界顶刊为何签下中国 AI', 'wk.m5k': '❤ 1.3万', 'wk.m6': '腾讯游戏大战网易，你觉得谁会赢', 'wk.m6k': '❤ 5.8万',
      'value.eyebrow': 'BUFFS · 商单价值', 'value.title': '品牌为什么选大牛猫',
      'v1.t': '用户视角', 'v1.d': '把复杂技术，转成用户易懂、爱看的内容。', 'v2.t': '人文关怀', 'v2.d': '挖掘产品 / 技术背后与用户的情感连接。',
      'v3.t': '形象直观', 'v3.d': '用视频表现，让卖点与内涵深入人心。', 'v4.t': '共情能力', 'v4.d': '激发观众的共鸣与价值认同。',
      'value.typesTitle': '商单类型', 'ty.1': '新能源 / 3C 成功案例', 'ty.2': '科技深度评测', 'ty.3': '品宣系列', 'ty.4': '长期品牌合作', 'ty.5': '品牌深度定制',
      'brands.eyebrow': 'PARTNERS · 合作品牌', 'brands.title': '合作品牌墙', 'brands.t1': '第一梯队', 'brands.t2': '第二梯队', 'brands.t3': '更多伙伴',
      'brands.note': '以上为历史合作 / 案例涉及品牌，具体以实际项目为准。',
      'follow.eyebrow': 'CHANNELS · 全域矩阵', 'follow.title': '关注大牛猫', 'follow.scan': '微信内长按二维码，即可一键关注。',
      'follow.dyN': '351.4万', 'follow.ksN': '300万+', 'follow.ttN': '19万+', 'follow.xhsN': '5.8万',
      'follow.main': '主阵地', 'follow.run': '运营中', 'follow.more': '视频号 · 微博 · 支付宝', 'follow.run2': '全域覆盖',
      'contact.eyebrow': 'CONTACT · 商务合作', 'contact.title': '一起做点酷的',
      'contact.body': '品牌投放、产品实测、探展直播、长期共创 —— 六边形战士，可急单。一次投放，8 倍裂变，全域轰炸。', 'contact.wxLabel': '商务合作微信', 'contact.copy': '点击复制',
      'foot.copy': '© 2026 科创大牛猫 · 让一部分科技先酷起来', 'foot.music': '背景音乐：Sunny Afternoon · HoliznaCC0（CC0 公共领域）',
      'foot.note': '数据来自各平台公开主页，以平台官方为准。本站为内容介绍与商务合作用途。', 'foot.top': '▲ 回到顶部',
      _title: '科创大牛猫 · 让一部分科技先酷起来'
    },
    en: {
      'a11y.skip': 'Skip to content', 'brand.name': 'Tech Bull Cat',
      'nav.stats': 'Data', 'nav.about': 'About', 'nav.content': 'Content', 'nav.works': 'Works', 'nav.value': 'Value', 'nav.brands': 'Brands', 'nav.follow': 'Channels', 'nav.contact': 'Contact',
      'hero.eyebrow': 'TECH-INNOVATION', 'hero.badge': 'Douyin Academy · Lecturer', 'hero.tagline': 'Make some tech cool first!',
      'hero.sub': 'A 7M+ follower brand across Tech × Business × AI', 'hero.cta1': 'See Top Works', 'hero.cta2': 'Partner With Us', 'hero.start': '▼ PRESS START ▼',
      'stats.eyebrow': 'DATA · DASHBOARD', 'stats.title': 'The Numbers', 'stats.total': 'Total followers', 'stats.totalN': '7M+',
      'st.dy': 'Douyin', 'st.dyN': '3.51M', 'st.ks': 'Kuaishou', 'st.ksN': '3M+', 'st.tt': 'Toutiao', 'st.ttN': '190K+',
      'st.xhs': 'Rednote', 'st.xhsN': '58K', 'st.sph': 'WeChat Channels', 'st.sphN': '30K+', 'st.more': 'Weibo · Alipay', 'st.run': 'Active',
      'stats.likesN': '57.35M', 'stats.likes': 'Total likes (Douyin)', 'stats.worksN': '241', 'stats.works': 'Videos', 'stats.maxN': '11.64M', 'stats.max': 'Top video views',
      'stats.slogan': 'One drop · 8× spread · Omni-channel',
      'stats.note': 'Figures from public profiles. Douyin is live; others per the official media kit. Platforms are authoritative.',
      'about.eyebrow': 'PROFILE', 'about.title': 'Premium Tech & Business Content',
      'about.body': 'We make your product stand out — and stick — in the tech wave. Tech Bull Cat covers global tech, EVs, AI and business, turning complex tech into stories people love.',
      'about.t1': 'Based in Shenzhen', 'about.t2': 'Tech & AI Creator', 'about.t3': 'Douyin Academy Lecturer', 'about.hexTitle': 'All-rounder · All skills MAX',
      'hex.1': 'Editing', 'hex.2': 'Camera', 'hex.3': 'Live', 'hex.4': 'Reviews', 'hex.5': 'Expo', 'hex.6': 'Rush', 'about.hexNote': 'A one-person studio, end to end',
      'content.eyebrow': 'STAGES', 'content.title': 'We Cover',
      'c1.t': 'AI & Robotics', 'c1.d': 'Hands-on AI tools, hidden supply chains, the robotics frontier.',
      'c2.t': 'EVs & Gadgets', 'c2.d': 'Car reviews, mobile chips, smart hardware & appliances.',
      'c3.t': 'Business & Investing', 'c3.d': 'Earnings, industry insider, trends and investing.',
      'c4.t': 'Games & Expos', 'c4.d': 'Game studios, CES · MWC · AWE · World Robot Conference on site.',
      'content.tags': 'Global tech · Domestic substitution · China going global · Smart home',
      'works.eyebrow': 'WORKS', 'works.title': 'Top Works', 'works.lead': 'Real numbers · tap, or long-press the QR in WeChat, to watch on Douyin.',
      'wk.1tag': 'Huawei · Chips', 'wk.1t': 'A Chip and Its Fighting Story', 'wk.1stat': '▶ 3.9M　❤ 86K',
      'wk.2tag': 'miHoYo · Business', 'wk.hot': 'Top views', 'wk.2t': '¥30B Revenue: miHoYo, the Money Machine', 'wk.2stat': '▶ 11.64M　❤ 109K',
      'wk.3tag': 'Huawei · Kirin', 'wk.3t': "Mate70's Kirin Chip Keeps the US Up at Night", 'wk.3stat': '▶ 1.62M　❤ 41K',
      'work.scan': 'Scan to watch', 'work.gen': 'AI-made cover',
      'works.moreTitle': 'More Top Videos', 'works.all': 'See all on Douyin →',
      'wk.m1': "AI's Hidden Supply Chain", 'wk.m1k': '❤ 12K', 'wk.m2': 'AI Visualizes Your Dreams', 'wk.m2k': '❤ 21K',
      'wk.m3': 'Why Domestic AC Beats Japan', 'wk.m3k': '❤ 12K', 'wk.m4': 'One Battery, Three Kinds of People', 'wk.m4k': '❤ 20K',
      'wk.m5': "Why Top Journals Pick China's AI", 'wk.m5k': '❤ 13K', 'wk.m6': 'Tencent vs NetEase: Who Wins?', 'wk.m6k': '❤ 58K',
      'value.eyebrow': 'WHY US', 'value.title': 'Why Brands Choose Us',
      'v1.t': 'User-first', 'v1.d': 'Turn complex tech into content people get and enjoy.', 'v2.t': 'Human Touch', 'v2.d': 'Find the emotional link behind the product.',
      'v3.t': 'Vivid & Clear', 'v3.d': 'Make selling points land through video.', 'v4.t': 'Resonance', 'v4.d': 'Spark resonance and shared values.',
      'value.typesTitle': 'Campaign Types', 'ty.1': 'EV & Gadget Wins', 'ty.2': 'Deep Reviews', 'ty.3': 'Brand Series', 'ty.4': 'Long-term Partners', 'ty.5': 'Custom Builds',
      'brands.eyebrow': 'PARTNERS', 'brands.title': "Brands We've Worked With", 'brands.t1': 'Tier 1', 'brands.t2': 'Tier 2', 'brands.t3': 'More Partners',
      'brands.note': 'Brands above are from past collaborations / cases; subject to actual projects.',
      'follow.eyebrow': 'CHANNELS', 'follow.title': 'Follow Us', 'follow.scan': 'Long-press a QR code in WeChat to follow instantly.',
      'follow.dyN': '3.51M', 'follow.ksN': '3M+', 'follow.ttN': '190K+', 'follow.xhsN': '58K',
      'follow.main': 'MAIN', 'follow.run': 'Active', 'follow.more': 'Channels · Weibo · Alipay', 'follow.run2': 'Omni-channel',
      'contact.eyebrow': 'CONTACT', 'contact.title': "Let's Make Something Cool",
      'contact.body': 'Brand drops, product reviews, expo livestreams, long-term co-creation — an all-rounder who takes rush jobs. One drop, 8× spread, omni-channel.', 'contact.wxLabel': 'Business WeChat', 'contact.copy': 'Tap to copy',
      'foot.copy': '© 2026 Tech Bull Cat · Make some tech cool first', 'foot.music': 'Music: "Sunny Afternoon" by HoliznaCC0 (CC0 / Public Domain)',
      'foot.note': 'Data from public profiles; platforms are authoritative. This site is for intro & partnerships.', 'foot.top': '▲ Back to top',
      _title: 'Tech Bull Cat · Make some tech cool first'
    },
    ja: {
      'a11y.skip': '本文へスキップ', 'brand.name': '科創大牛猫',
      'nav.stats': 'データ', 'nav.about': '概要', 'nav.content': 'コンテンツ', 'nav.works': '作品', 'nav.value': '価値', 'nav.brands': 'ブランド', 'nav.follow': 'チャンネル', 'nav.contact': '協業',
      'hero.eyebrow': 'TECH-INNOVATION', 'hero.badge': 'Douyin 学院 · 講師', 'hero.tagline': '一部のテックを、先にクールに！',
      'hero.sub': '全網700万人超のテック × ビジネス × AI ブランド', 'hero.cta1': '代表作を見る', 'hero.cta2': 'お問い合わせ', 'hero.start': '▼ PRESS START ▼',
      'stats.eyebrow': 'DATA · データ', 'stats.title': '全網データ', 'stats.total': '総フォロワー', 'stats.totalN': '700万+',
      'st.dy': 'Douyin', 'st.dyN': '351.4万', 'st.ks': 'Kuaishou', 'st.ksN': '300万+', 'st.tt': 'Toutiao', 'st.ttN': '19万+',
      'st.xhs': '小紅書', 'st.xhsN': '5.8万', 'st.sph': '視頻号', 'st.sphN': '3万+', 'st.more': '微博 · Alipay', 'st.run': '運用中',
      'stats.likesN': '5735万', 'stats.likes': '累計いいね（Douyin）', 'stats.worksN': '241', 'stats.works': '投稿数', 'stats.maxN': '1164万', 'stats.max': '最高再生数',
      'stats.slogan': '一度の出稿 · 8倍拡散 · 全域リーチ',
      'stats.note': 'データは各プラットフォームの公開プロフィールより。Douyinはリアルタイム、他は公式メディアキット基準。',
      'about.eyebrow': 'PROFILE · プロフィール', 'about.title': '良質なテック & ビジネスのコンテンツブランド',
      'about.body': '製品をテックの波の中で際立たせ、心に残す。科創大牛猫はグローバルテック・EV・AI・ビジネスを掘り下げ、複雑な技術を愛されるストーリーに変える。',
      'about.t1': '拠点 · 深圳', 'about.t2': 'テック・AI系クリエイター', 'about.t3': 'Douyin学院 講師', 'about.hexTitle': 'オールラウンダー · 全スキル MAX',
      'hex.1': '編集', 'hex.2': '出演', 'hex.3': '配信', 'hex.4': '実機検証', 'hex.5': '展示会', 'hex.6': '急ぎ対応', 'about.hexNote': '一人で全工程を内製',
      'content.eyebrow': 'STAGES · コンテンツ', 'content.title': '取り扱う領域',
      'c1.t': 'AI & ロボット', 'c1.d': 'AIツール実測、隠れたサプライチェーン、ロボット最前線。',
      'c2.t': 'EV & ガジェット', 'c2.d': '新車実測、スマホチップ、スマート家電。',
      'c3.t': 'ビジネス & 投資', 'c3.d': '決算分析、業界の裏側、トレンドと投資視点。',
      'c4.t': 'ゲーム & 展示会', 'c4.d': 'ゲーム業界、CES · MWC · AWE · 世界ロボット大会の現場。',
      'content.tags': 'グローバルテック · 国産化 · 中国製造の海外進出 · スマート家電',
      'works.eyebrow': 'WORKS · 作品', 'works.title': '代表作', 'works.lead': '実数値 · タップ、またはWeChatでQRを長押しして視聴。',
      'wk.1tag': 'Huawei · チップ', 'wk.1t': 'あるチップの熱い物語', 'wk.1stat': '▶ 390.0万　❤ 8.6万',
      'wk.2tag': 'miHoYo · ビジネス', 'wk.hot': '最高再生', 'wk.2t': '年商300億円、“ドル箱”ミホヨの逆襲', 'wk.2stat': '▶ 1164万　❤ 10.9万',
      'wk.3tag': 'Huawei · Kirin', 'wk.3t': 'Mate70の麒麟チップ、米国を眠らせない', 'wk.3stat': '▶ 162.0万　❤ 4.1万',
      'work.scan': '長押しで視聴', 'work.gen': 'AI生成カバー',
      'works.moreTitle': 'その他の人気動画', 'works.all': 'Douyinで全部見る →',
      'wk.m1': 'AIの隠れた産業チェーン', 'wk.m1k': '❤ 1.2万', 'wk.m2': 'AIが夢を可視化', 'wk.m2k': '❤ 2.1万',
      'wk.m3': '国産エアコンが日系を超えた訳', 'wk.m3k': '❤ 1.2万', 'wk.m4': '一つの電池が変えた三者', 'wk.m4k': '❤ 2.0万',
      'wk.m5': 'トップ誌が中国AIを選ぶ理由', 'wk.m5k': '❤ 1.3万', 'wk.m6': 'テンセント対ネットイース、勝つのは？', 'wk.m6k': '❤ 5.8万',
      'value.eyebrow': 'WHY US · 価値', 'value.title': 'ブランドが選ぶ理由',
      'v1.t': 'ユーザー視点', 'v1.d': '難しい技術を、分かりやすく面白く。', 'v2.t': '人間味', 'v2.d': '製品の裏にある感情のつながりを掘る。',
      'v3.t': '直感的', 'v3.d': '動画で売りを心に届ける。', 'v4.t': '共感', 'v4.d': '共感と価値の共有を生む。',
      'value.typesTitle': '案件タイプ', 'ty.1': 'EV・3C 成功事例', 'ty.2': '詳細レビュー', 'ty.3': 'ブランド企画', 'ty.4': '長期提携', 'ty.5': 'フルカスタム',
      'brands.eyebrow': 'PARTNERS · 提携', 'brands.title': '提携ブランド', 'brands.t1': '第1ティア', 'brands.t2': '第2ティア', 'brands.t3': 'その他',
      'brands.note': '上記は過去の提携 / 事例に関わるブランドです。実際の案件によります。',
      'follow.eyebrow': 'CHANNELS · 全域', 'follow.title': 'フォローする', 'follow.scan': 'WeChatでQRコードを長押しすると、すぐフォローできます。',
      'follow.dyN': '351.4万', 'follow.ksN': '300万+', 'follow.ttN': '19万+', 'follow.xhsN': '5.8万',
      'follow.main': 'メイン', 'follow.run': '運用中', 'follow.more': '視頻号 · 微博 · Alipay', 'follow.run2': '全域カバー',
      'contact.eyebrow': 'CONTACT · 協業', 'contact.title': 'クールなものを一緒に',
      'contact.body': 'ブランド出稿、製品実測、展示会配信、長期共創 —— 急ぎ対応も可能なオールラウンダー。一度で8倍拡散、全域リーチ。', 'contact.wxLabel': 'ビジネス WeChat', 'contact.copy': 'タップでコピー',
      'foot.copy': '© 2026 科創大牛猫 · 一部のテックを先にクールに', 'foot.music': '音楽：「Sunny Afternoon」HoliznaCC0（CC0 / パブリックドメイン）',
      'foot.note': 'データは公開プロフィールより、公式が優先。本サイトは紹介・協業用途。', 'foot.top': '▲ トップへ',
      _title: '科創大牛猫 · 一部のテックを先にクールに'
    }
  };

  var LANGS = { zh: 'zh', en: 'en', ja: 'ja' };
  var nodes = document.querySelectorAll('[data-i18n]');
  var currentLang = 'zh';

  function applyLang(lang) {
    if (!I18N[lang]) lang = 'zh';
    currentLang = lang;
    var dict = I18N[lang];
    nodes.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.documentElement.setAttribute('lang', LANGS[lang]);
    document.title = dict._title;
    document.querySelectorAll('.lang button').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    try { localStorage.setItem('dnm-lang', lang); } catch (e) {}
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });

  var saved = 'zh';
  try { saved = localStorage.getItem('dnm-lang') || 'zh'; } catch (e) {}
  applyLang(saved);

  /* ---------------- 滚动揭示 + 数据条/雷达触发 + 计数 ---------------- */
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function countUp(el) {
    if (el.dataset.counted) return;                 // 幂等：避免重复触发并发 rAF
    // 非中文时数字已由 i18n 直接写入（如 7M+），不跑中文计数动画
    if (el.dataset.i18n && currentLang !== 'zh') { el.dataset.counted = '1'; return; }
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    if (isNaN(target)) return;
    el.dataset.counted = '1';
    if (reduce) { el.textContent = target + suffix; return; }
    var start = null, dur = 1100;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('in-view');
        if (e.target.querySelectorAll) e.target.querySelectorAll('[data-count]').forEach(countUp);
        io.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });

    document.querySelectorAll('.sec').forEach(function (s) { io.observe(s); });

    if (!reduce) {
      // 网格类容器：按容器内局部索引算延迟，避免跨网格错拍
      document.querySelectorAll('.cards,.works,.more__list,.plats,.stat-grid,.tier__row,.types,.stat-extra,.tags').forEach(function (g) {
        Array.prototype.forEach.call(g.children, function (el, idx) {
          el.classList.add('reveal');
          el.style.transitionDelay = (Math.min(idx, 5) * 50) + 'ms';
          io.observe(el);
        });
      });
      // 独立块：整体淡入，无错拍
      document.querySelectorAll('.sec__head,.tier,.cta-box,.slogan-strip,.more__all').forEach(function (el) {
        el.classList.add('reveal');
        io.observe(el);
      });
    }
  } else {
    document.querySelectorAll('[data-count]').forEach(countUp);
  }

  /* ---------------- 复制微信 + toast ---------------- */
  var toastEl = document.getElementById('toast');
  var toastTimer;
  function toast(msg, ms) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, ms || 1900);
  }
  var copyBtn = document.getElementById('copyWx');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var wx = copyBtn.getAttribute('data-wx');
      var done = function () { toast('✓ ' + wx); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(wx).then(done).catch(function () { fallbackCopy(wx, done); });
      } else { fallbackCopy(wx, done); }
    });
  }
  function fallbackCopy(text, cb) {
    try {
      var t = document.createElement('textarea');
      t.value = text; t.style.position = 'fixed'; t.style.opacity = '0';
      document.body.appendChild(t); t.select(); document.execCommand('copy');
      document.body.removeChild(t); cb();
    } catch (e) {
      // 末端兜底：选中微信号本体并延长提示，给手动复制留时间
      try {
        var code = copyBtn.querySelector('.wx__code');
        if (code && window.getSelection) {
          var r = document.createRange(); r.selectNodeContents(code);
          var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
        }
      } catch (e2) {}
      toast(text + '（请手动复制）', 4200);
    }
  }

  /* ---------------- BGM（容错：无文件则隐藏按钮） ---------------- */
  var audio = document.getElementById('audio');
  var bgmBtn = document.getElementById('bgm');
  if (audio && bgmBtn) {
    var loaded = false;
    audio.addEventListener('error', function () { bgmBtn.style.display = 'none'; });
    bgmBtn.addEventListener('click', function () {
      if (!loaded) { audio.load(); loaded = true; }
      if (audio.paused) {
        var p = audio.play();
        if (p && p.catch) p.catch(function () {});
        bgmBtn.setAttribute('aria-pressed', 'true');
        bgmBtn.classList.add('playing');
      } else {
        audio.pause();
        bgmBtn.setAttribute('aria-pressed', 'false');
        bgmBtn.classList.remove('playing');
      }
    });
  }

  /* ---------------- 导航 scrollspy ---------------- */
  if ('IntersectionObserver' in window) {
    var links = {};
    document.querySelectorAll('.nav__links a').forEach(function (a) {
      links[a.getAttribute('href')] = a;
    });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var link = links['#' + e.target.id];
        if (link && e.isIntersecting) {
          Object.keys(links).forEach(function (k) { links[k].classList.remove('active'); });
          link.classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['stats', 'about', 'content', 'works', 'value', 'brands', 'follow', 'contact'].forEach(function (id) {
      var s = document.getElementById(id); if (s) spy.observe(s);
    });
  }
})();
