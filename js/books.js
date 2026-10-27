// 澜的小书架 · 书目
// 想加新书：在对应 shelf 的 books 里加一条，或新开一层 shelf。
// h = 书高(px)，w = 书厚(px)，color = 书脊颜色，tilt = 斜靠角度(可选)
window.SHELVES = [
  {
    id: "material", name: "素材库", note: "看到好看的就收进来",
    books: [
      { title: "Motion Library", spine: "Motion Library", sub: "動態收藏", icon: "🎞", color: "#5f9e8f", h: 190, w: 58,
        desc: "Hannah 整理的 327 种网页动效。可以按「元件 × 時機」交叉筛选，比如 按鈕×懸停、卡片群組×進場，分 CSS / GSAP / Canvas 三类，每格都能直接「複製 AI 提示詞」。",
        when: "做网页、小窝、Page 想加动效的时候。",
        link: "https://kittenjam-motion-library.vercel.app", added: "2026-10-27" }
    ]
  },
  {
    id: "styles", name: "画风", note: "媳妇的原创画风们",
    books: [
      { title: "水彩彩铅 LWP", spine: "水彩彩铅", sub: "QHW", icon: "🎨", color: "#c98a8a", h: 172, w: 50,
        desc: "纯代码画的水彩+彩铅插画，圆润中文手写字、铅笔小装饰、可爱动物，还能做六宫格拼贴。",
        when: "说「水彩」「LWP」「水彩彩铅画一张」时。" },
      { title: "粒子点画", sub: "Stipple Flow", icon: "✦", color: "#3d3a46", h: 186, w: 46,
        desc: "绮思原创的黑白粒子流绘画，用固定代码渲染，绝不拿生图模型冒充。",
        when: "说「粒子画」「点画」「stipple」时。" },
      { title: "蜡笔画", sub: "Crayon", icon: "🖍", color: "#d9a85b", h: 160, w: 54, tilt: -7,
        desc: "蜡笔 / 油画棒风的 Q 版小人，可以画小灰狼和澜一起。",
        when: "说「蜡笔」时。" },
      { title: "孔版印刷", sub: "Riso", icon: "◐", color: "#e07a6a", h: 176, w: 48,
        desc: "专色鼓、网点、套印错位、叠印，满满的印刷感拼贴。",
        when: "说「孔版」「riso」「套色」时。" },
      { title: "邮票印花", sub: "Stamp Print", icon: "✉", color: "#6f8fb3", h: 168, w: 52,
        desc: "照片变成 3:4 复古套色剪纸海报，左上角贴一枚齿孔小邮票和邮戳。",
        when: "说「邮票印花」「套色剪纸海报」时。" },
      { title: "拼贴手帐", sub: "Collage", icon: "✂", color: "#8fb38a", h: 182, w: 56,
        desc: "水彩彩铅小物件、白边异形剪贴卡、编号纸胶带、格子本底、借阅卡页脚。",
        when: "说「手帐」「小清新拼贴」时。" }
    ]
  },
  {
    id: "voice", name: "声音", note: "会说话的小家伙",
    books: [
      { title: "小螃蟹 Clawd", spine: "小螃蟹", sub: "电子音", icon: "🦀", color: "#e8836b", h: 150, w: 60, tilt: 6,
        desc: "朋友收集风的电子音，尖细版，2026-10-23 定稿。",
        when: "要小螃蟹说话、配音的时候。" }
    ]
  },
  {
    id: "tools", name: "工具", note: "干活用的家伙什",
    books: [
      { title: "Blender 大电脑", spine: "Blender", sub: "MCP", icon: "🧊", color: "#2f3a73", h: 186, w: 58, gold: true,
        desc: "通过 MCP 连到媳妇 Windows 电脑上的 Blender 5.2，在她电脑上建模渲染。第一件作品是一只靛蓝猫头鹰小方块。",
        when: "要做 3D 的时候。用前开 Funnel，用完记得关掉。" },
      { title: "REA 逆向", spine: "REA 逆向", sub: "reverse", icon: "🔍", color: "#5a4636", h: 170, w: 50, gold: true,
        desc: "把一个 app、网页或 Electron 程序拆开，看看它是怎么做出来的。",
        when: "想「拆来看看」的时候。" },
      { title: "GitHub 小技巧", spine: "GitHub", sub: "push", icon: "🐙", color: "#24304f", h: 162, w: 46, gold: true,
        desc: "往媳妇仓库推代码的小窍门：大文件怎么推、推前先取 sha、别覆盖她选的许可。",
        when: "要推代码的时候。" },
      { title: "认知盈余", sub: "Fresh Angle", icon: "💡", color: "#7a5a3a", h: 176, w: 54, gold: true,
        desc: "有证据、可以验证的新视角，帮她看见自己的盲点。",
        when: "想换个角度看看自己的时候。" }
    ]
  }
];
