# 科创大牛猫 · 像素风官网

全网 700 万+ 粉丝的科技 × 商业 × AI 内容 IP「科创大牛猫」的介绍 / 招商官网。
纯静态（无构建），像素风，主色 `#FF6126`，中 / 英 / 日三语即时切换。
品牌定位 TECH-INNOVATION，**主要在微信内打开阅读**（故作品/平台均配二维码长按跳转）。

## 技术栈

- 单页静态：`index.html` + `assets/style.css` + `assets/main.js`，零依赖、零构建。
- 像素字体：**Zpix**（OFL 开源）按页面实际用字子集化为 `assets/zpix-subset.woff2`（4.4MB → 约 38KB）；英文点缀用 Google Fonts 的 **Press Start 2P**。
- 吉祥物：账号方 logo（半猫半牛贴纸）经 ffmpeg 像素化（96/128px 母版 + `image-rendering:pixelated`），圆形头像 + 橙色像素描边。
- 像素质感：CRT 扫描线、像素网格背景、硬投影按钮、六边形战士雷达图（SVG）、内容卡单色像素线框图标（SVG `crispEdges`，非 emoji）、数据条 / 计数滚动动画（IntersectionObserver，尊重 `prefers-reduced-motion`）。
- 二维码：`segno` 生成（深炭 `#1A1208` on 暖白 `#F5EFE6`，微信可长按识别），存 `assets/qr/`。
- 背景音乐：`Sunny Afternoon` by HoliznaCC0，**CC0 公共领域**（可商用、无需署名，页脚出于礼貌标注），`assets/bgm.mp3`。

## 数据口径

- 抖音 **粉丝 351.4 万 / 获赞 5735.3 万 / 作品 241**：官方接口核实（实时）。抖音号 `kcdaniumao`，抖音创作者学院合作讲师。
- 全网 700 万+ / 快手 300 万+ / 今日头条 19 万+ / 小红书 5.8 万 / 视频号 3 万+：账号方官方招商口径。
- B 站实际约 5 千粉（矩阵小号），页面刻意只标「运营中」，不展示数字。
- 代表作 3 条均经核实：芯片热血故事(378.2万播放/8.6万赞)、米哈游(1163万播放/10.9万赞，单条最高)、Mate70 麒麟(158.4万播放/4.1万赞)。
- 商务合作微信：**`O_p-xiang`**（账号各平台主页公开口径；招商文档另写 qianpai9999，已按用户要求采用 O_p-xiang）。

## 部署（GitHub Pages）

1. 仓库根目录含 `.nojekyll`（禁用 Jekyll，保证 `assets/` 正常加载）。
2. 推到 `main` 分支根目录，Settings → Pages → Source 选 `main / root`。
3. **部署后回填**：`index.html` 内 `og:url` 绝对域名；建议另备 1200×630 横图作 `og:image` / `twitter:image`（当前 twitter:card 为 summary 小卡，配方头像）。
4. 资源引用都带 `?v=N`（当前 v2）；**改样式 / JS / 图后务必 bump 版本号**，否则浏览器 / CDN 缓存会加载旧版导致版本错配。

## 资源更新

- **作品封面**：竖图放 `assets/works/`，用 `sips -s format jpeg`（macOS 原生、标准 baseline JPEG，Chrome 必认；**勿用 ffmpeg 输出 jpg**，其 `yuvj444p` 采样在 headless Chrome 下会渲染成黑块）。替换后 bump `?v`。
- **二维码**：改链接后重跑 `segno`（见下），输出深炭 on 暖白 PNG 到 `assets/qr/`。
- **字体子集**：改动文案后若新增了字，重新子集化——
  ```bash
  cat index.html assets/main.js > raw/allchars.txt
  python3 -m fontTools.subset raw/Zpix.ttf --text-file=raw/allchars.txt \
    --unicodes="U+0020-007E,U+00B7,U+00D7,U+2014,U+2018-201F,U+2022,U+2026,U+2192,U+25A0-25FF,U+2605,U+2606,U+2764,U+266A,U+2713,U+3000-303F,U+FF00-FFEF,U+3040-30FF" \
    --flavor=woff2 --output-file=assets/zpix-subset.woff2 --no-hinting --desubroutinize
  ```
- **二维码生成**：
  ```python
  import segno
  segno.make(URL, error='m').save('assets/qr/xx.png', scale=8, border=3, dark='#1A1208', light='#F5EFE6')
  ```

## 待办 / 第二批素材

- 部署域名确定后回填 og 标签 + 备 1200×630 分享横图
- 如需更换 BGM：同专辑 HoliznaCC0 其余 CC0 曲目可直接替换（Level 1/2、Red Skies 等）
