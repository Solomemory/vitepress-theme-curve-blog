// 链接数据
const toolsData = [
  {
    type: "Cloud",
    typeName: "云服务",
    typeDesc: "云端之力，开启便捷高效服务新体验",
    typeList: [
      {
        name: "uniCloud",
        desc: "JS开发服务端，Serverless云开发",
        url: "https://unicloud.dcloud.net.cn/",
      },
    ],
  },
  {
    type: "CodeRepo",
    typeName: "代码仓库",
    typeDesc: "代码汇聚地，存储开发智慧结晶的宝库",
    typeList: [
      {
        name: "GitHub",
        desc: "全球代码社区，开启协作开发无限可能",
        url: "https://github.com",
      },
      {
        name: "Gitee",
        desc: "代码托管佳选，承载项目成长点滴历程",
        url: "https://gitee.com",
      },
    ],
  },
  {
    type: "Design",
    typeName: "设计工具",
    typeDesc: "创意魔法盒，打造精美设计作品的利器",
    typeList: [
      {
        name: "摹客RP",
        desc: "设计 1 + 2，摹客就够了！",
        url: "https://rp.mockplus.cn",
      },
      {
        name: "墨刀",
        desc: "产品团队的专业原型设计与协作平台",
        url: "https://modao.cc/",
      },
      {
        name: "Axhub",
        desc: "Axure 增强工具集合",
        url: "https://axhub.im/",
      },
    ],
  },
  {
    type: "Learning",
    typeName: "学习资源",
    typeDesc: "知识充电站，开启求知探索的奇妙之旅",
    typeList: [
      {
        name: "鱼皮的编程宝典",
        desc: "编程学习秘籍，传授实用编程知识技巧",
        url: "https://www.codefather.cn/",
      },
      {
        name: "语雀",
        desc: "知识收藏天地，汇聚优质学习资料宝藏",
        url: "https://www.yuque.com/",
      },
      {
        name: "Astro",
        desc: "技术入门指引，轻松开启学习探索之路",
        url: "https://docs.astro.build/zh-cn/getting-started/",
      },
      {
        name: "NestJs中文文档",
        desc: "框架入门解读，揭开强大框架神秘面纱",
        url: "https://nest.nodejs.cn/",
      },
      {
        name: "VitePress快速上手",
        desc: "文档前沿探秘，领略技术文档独特魅力",
        url: "https://vitepress.yiov.top/",
      },
      {
        name: "伊奥's 教程集",
        desc: "精彩教程合集，解锁技术学习新乐趣",
        url: "https://yiov.top/",
      },
      {
        name: "electron-vite",
        desc: "命令行学习地，掌握工具使用核心技能",
        url: "https://cn.electron-vite.org/",
      },
      {
        name: "前端代码规范",
        desc: "前端规范指南，书写规范优雅代码的秘诀",
        url: "https://l-x-f.github.io/coding-standard/",
      },
    ],
  },
  {
    type: "Entertainment",
    typeName: "娱乐休闲",
    typeDesc: "闲暇时光宝盒，开启轻松娱乐美好时刻",
    typeList: [
      {
        name: "共和国之辉网页版",
        desc: "经典游戏重现，畅享网页版游戏乐趣",
        url: "https://game.gongheguozhihui.com/",
      },
      {
        name: "MC百科",
        desc: "MC知识殿堂，探索游戏多样玩法奥秘",
        url: "https://www.mcmod.cn/",
      },
      {
        name: "星露谷物语wiki",
        desc: "星露谷攻略库，解锁田园生活无限精彩",
        url: "https://xinglugu.huijiwiki.com/wiki/%E9%A6%96%E9%A1%B5#",
      },
      {
        name: "HSReplay",
        desc: "炉石数据分析，挖掘游戏竞技无限潜能",
        url: "https://hsreplay.net/",
      },
      {
        name: "旅法师营地",
        desc: "炉石交流社区，分享游戏攻略最新资讯",
        url: "https://www.iyingdi.com/tz/tag/17",
      },
      {
        name: "斗鱼",
        desc: "直播关注天地，追踪喜爱主播精彩时刻",
        url: "https://www.douyu.com/directory/myFollow",
      },
      {
        name: "哔哩哔哩",
        desc: "多元视频天地，畅享海量精彩内容盛宴",
        url: "https://www.bilibili.com/",
      },
    ],
  },
  {
    type: "Other",
    typeName: "其他资源",
    typeDesc: "多元资源集合，满足多样需求的百宝箱",
    typeList: [
      {
        name: "热铁盒软件",
        desc: "软件资源天地，汇聚各类实用软件宝库",
        url: "https://www.retiehe.com/",
      },
      {
        name: "隔离食用手册",
        desc: "饮食指南秘籍，开启健康美味饮食之旅",
        url: "https://cook.yunyoujun.cn/?source=giaoshou.com",
      },
      {
        name: "一网一匠极速版",
        desc: "新奇产品发现地，邂逅有趣实用新物件",
        url: "https://ywyj.cn/",
      },
      {
        name: "图寻",
        desc: "世界探索助手，精准找到心中理想之所",
        url: "https://tuxun.fun/",
      },
      {
        name: "Sharkle",
        desc: "随机创意发生器，激发无限新奇灵感火花",
        url: "https://sharkle.com/?utm_source=xinquji",
      },
      {
        name: "iKuuu VPN",
        desc: "网络访问利器，突破网络限制畅享自由",
        url: "https://ikuuu.one/user",
      },
      {
        name: "SQLPub",
        desc: "SQL管理平台，高效管理数据库的好帮手",
        url: "https://www.sqlpub.com/dashboard/overview",
      },
      {
        name: "Vue Naive Admin",
        desc: "Vue管理模板，助力搭建高效管理系统",
        url: "https://www.isme.top/",
      },
      {
        name: "web前端面试",
        desc: "前端面试宝典，助你攻克面试难关挑战",
        url: "https://vue3js.cn/interview/",
      },
      {
        name: "Linux命令大全",
        desc: "Linux命令宝典，随时查询命令使用方法",
        url: "https://www.linuxcool.com/",
      },
      {
        name: "Iconify",
        desc: "开源图标之家，提供丰富图标资源选择",
        url: "https://icon-sets.iconify.design/",
      },
      {
        name: "MC百科",
        desc: " ",
        url: "https://www.mcmod.cn/",
      },
      {
        name: "Stardew Valley维基",
        desc: " ",
        url: "https://xinglugu.huijiwiki.com",
      },
    ],
  },
  {
    type: "AI",
    typeName: "AI工具",
    typeDesc: "智能科技先锋，开启高效智能应用新体验",
    typeList: [
      {
        name: "豆包",
        desc: "嗨～我是豆包，会唠嗑能解闷的 AI 届干饭小能手😎",
        url: "https://www.doubao.com/",
      },
      {
        name: "DeepSeek",
        desc: "AI探索之旅，探寻未知领域无限可能",
        url: "https://chat.deepseek.com/",
      },
    ],
  },
  {
    type: "GameMod",
    typeName: "游戏模组",
    typeDesc: "游戏扩展模组相关资源",
    typeList: [
      {
        name: "MC百科|最大的Minecraft中文MOD百科",
        desc: "",
        url: "https://www.mcmod.cn/",
      },
      {
        name: "Minecraft Search - CurseForge",
        desc: "",
        url: "https://www.curseforge.com/minecraft/search?page=1&pageSize=20&sortBy=relevancy",
      },
    ],
  },
  {
    type: "GameGuide",
    typeName: "游戏攻略",
    typeDesc: "游戏玩法攻略相关内容",
    typeList: [
      {
        name: "Stardew Valley 中文维基 | 星露谷物语攻略资料站 - 灰机wiki",
        desc: "",
        url: "https://xinglugu.huijiwiki.com/wiki/%E9%A6%96%E9%A1%B5#",
      },
      {
        name: "【Hades】矛二 阿喀琉斯形态---全武器形态配置推荐---第八期_单机游戏热门视频",
        desc: "",
        url: "https://www.bilibili.com/video/BV1px4y1g7Wd/?spm_id_from=333.788&vd_source=e50e44843398fbcb4d01d0daf6429323",
      },
      {
        name: "热门推荐-炉石传说社区-炉石传说论坛-炉石传说攻略-炉石传说最新资讯-旅法师营地",
        desc: "",
        url: "https://www.iyingdi.com/tz/tag/17",
      },
    ],
  },
  {
    type: "GameTool",
    typeName: "游戏工具",
    typeDesc: "游戏辅助工具相关",
    typeList: [
      {
        name: "HSReplay.net - 释放您的潜能",
        desc: "",
        url: "https://hsreplay.net/",
      },
      {
        name: "Build大厅 | 暗黑核",
        desc: "",
        url: "https://www.d2core.com/d4/builds",
      },
    ],
  },
  {
    type: "GameDownload",
    typeName: "游戏下载",
    typeDesc: "游戏资源下载站点",
    typeList: [
      {
        name: "CMDW-游戏仓库-全球最大的游戏下载中心-游戏交流",
        desc: "",
        url: "https://www.cmdw.top/",
      },
      {
        name: "中大型电脑单机游戏下载_好玩的单机游戏下载_找单机游戏_游侠网",
        desc: "",
        url: "https://down.ali213.net/new/",
      },
      {
        name: "游戏天堂-全球游戏下载基地",
        desc: "",
        url: "https://www.zzzz688.com/",
      },
      {
        name: "小妖怪分享|兴趣使然的资源搬运Blog",
        desc: "",
        url: "https://www.xyg688.com/",
      },
      {
        name: "Switch520",
        desc: "",
        url: "https://laoquzhang.com/",
      },
      {
        name: "Switch520",
        desc: "",
        url: "https://xxxxx528.com/",
      },
      {
        name: "上游世界 | SWITCH游戏下载 | PS4游戏下载 | SWITCH中文游戏",
        desc: "",
        url: "https://www.vgter.net/",
      },
    ],
  },
  {
    type: "ResourceSharing",
    typeName: "资源分享",
    typeDesc: "各类资源分享平台",
    typeList: [
      {
        name: "不死鸟 - 分享为王官网",
        desc: "",
        url: "https://iao.su/page/1/",
      },
      {
        name: "9亿软件站-分享精品软件和游戏的下载站",
        desc: "",
        url: "http://www.91rjz.com/",
      },
      {
        name: "吾爱破解 - LCG - LSG|安卓破解|病毒分析|www.52pojie.cn",
        desc: "",
        url: "https://www.52pojie.cn/",
      },
      {
        name: "影视森林——观影第一站",
        desc: "",
        url: "https://www.549.tv/",
      },
      {
        name: "极客下载 - 专注于分享精品软件资源",
        desc: "",
        url: "https://www.geekdload.com/",
      },
    ],
  },
  {
    type: "GIS",
    typeName: "地理信息系统",
    typeDesc: "GIS相关开发文档和工具",
    typeList: [
      {
        name: "Basemap | API Reference | ArcGIS Maps SDK for JavaScript 4.31 | Esri Developer",
        desc: "",
        url: "https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html",
      },
      {
        name: "Transform coordinates - GPS online converter",
        desc: "",
        url: "https://epsg.io/transform#s_srs=4326&t_srs=3857&x=NaN&y=NaN",
      },
    ],
  },
  {
    type: "Design",
    typeName: "设计相关",
    typeDesc: "设计素材和工具平台",
    typeList: [
      {
        name: "UI_动漫壁纸图片UI设计_插画网站素材下载-站酷ZCOOL",
        desc: "",
        url: "https://www.zcool.com.cn/discover?cate=17&page=1",
      },
      {
        name: "海量免费插画/图标/UI设计素材,交互设计模板,线框原型设计规范- MasterGo资源社区",
        desc: "",
        url: "https://mastergo.com/community/tag/%E7%A7%BB%E5%8A%A8%E7%AB%AF?cata_name=%E8%B5%84%E6%BA%90",
      },
      {
        name: "Uiverse | The Largest Library of Open-Source UI elements",
        desc: "",
        url: "https://uiverse.io/",
      },
    ],
  },
  {
    type: "Development",
    typeName: "开发学习",
    typeDesc: "编程开发学习资源和工具",
    typeList: [
      {
        name: "力扣 (LeetCode) 全球极客挚爱的技术成长平台",
        desc: "",
        url: "https://leetcode.cn/",
      },
      {
        name: "开始使用 Prisma | Prisma 文档 - Prisma 中文",
        desc: "",
        url: "https://prisma.org.cn/docs/getting-started",
      },
      {
        name: "第一步",
        desc: "",
        url: "https://docs.nestjs.cn/10/firststeps",
      },
      {
        name: "TypeORM - 一个 ORM 框架 | TypeORM 中文文档 | TypeORM 中文网",
        desc: "",
        url: "https://typeorm.bootcss.com/",
      },
    ],
  },
  {
    type: "Miscellaneous",
    typeName: "其他杂项",
    typeDesc: "无法明确归类的书签",
    typeList: [
      {
        name: "隔离食用手册",
        desc: "",
        url: "https://cook.yunyoujun.cn/?source=giaoshou.com",
      },
      {
        name: "一网一匠极速版 - 一起发现有趣的新产品",
        desc: "",
        url: "https://ywyj.cn/",
      },
      {
        name: "我的关注 - 斗鱼",
        desc: "",
        url: "https://www.douyu.com/directory/myFollow",
      },
      {
        name: "哔哩哔哩 (゜-゜)つロ 干杯~-bilibili",
        desc: "",
        url: "https://www.bilibili.com/",
      },
      {
        name: "图寻 - 探索世界，找到你",
        desc: "",
        url: "https://tuxun.fun/",
      },
      {
        name: "Sharkle | Generator of random awesomeness",
        desc: "",
        url: "https://sharkle.com/?utm_source=xinquji",
      },
      {
        name: "调用文档-IMGAPI",
        desc: "",
        url: "https://imgapi.cn/wiki.html",
      },
      {
        name: "ChatGPT共享账号",
        desc: "",
        url: "https://terobox.com/",
      },
      {
        name: "图片无损放大变清晰，模糊图片在线修复变高清 - AI改图神器",
        desc: "",
        url: "https://img.logosc.cn/bigjpg",
      },
      {
        name: "iLovePDF | 为PDF爱好者提供的PDF文件在线处理工具",
        desc: "",
        url: "https://www.ilovepdf.com/zh-cn?utm_source=xinquji",
      },
      {
        name: "教书先生API - 提供免费接口调用平台",
        desc: "",
        url: "https://api.oioweb.cn/?ref=yigekuang.cn",
      },
      {
        name: "一个框导航网 | 海纳百川，网罗一框！您的私人云收藏夹！",
        desc: "",
        url: "https://yigekuang.cn/#term-2400",
      },
      {
        name: "Crx搜搜 - 一个牛X的扩展和应用商店",
        desc: "",
        url: "https://www.crxsoso.com/",
      },
      {
        name: "雀魂麻将",
        desc: "",
        url: "https://game.maj-soul.com/1/",
      },
      {
        name: "50 Projects 50 Days | Traversy Media",
        desc: "",
        url: "https://50projects50days.com/",
      },
      {
        name: "抖音-记录美好生活",
        desc: "",
        url: "https://www.douyin.com/?recommend=1",
      },
      {
        name: "Versus | 万物皆可对比",
        desc: "",
        url: "https://versus.com/cn",
      },
      {
        name: "BuildCores: 3D PC Builder and Part Picker",
        desc: "",
        url: "https://www.buildcores.com/",
      },
      {
        name: "Highcharts 中文站",
        desc: "",
        url: "https://highcharts.com.cn/",
      },
      {
        name: "HTML 表格 转换为 Markdown 表格 - 在线表格转换工具",
        desc: "",
        url: "https://tableconvert.com/zh-cn/html-to-markdown",
      },
      {
        name: "drawDB | Online database diagram editor and SQL generator",
        desc: "",
        url: "https://www.drawdb.app/",
      },
      {
        name: "首页 - ECharts图表集,ECharts demo集,echarts gallery社区,Make A Pie,分享你的可视化作品isqqw.com",
        desc: "",
        url: "https://www.isqqw.com/",
      },
      {
        name: "Favicon.im: 即时网站图标获取器",
        desc: "",
        url: "https://favicon.im/zh/?hmsr=blog.axiaoxin.com&utm_source=blog.axiaoxin.com&utm_medium=referral",
      },
      {
        name: "学生平台",
        desc: "",
        url: "http://student.sdnydx.sccchina.net/student/",
      },
      {
        name: "chatos",
        desc: "",
        url: "https://cat.caichatosa.com/#/home",
      },
      {
        name: "DeepL翻译：全世界最准确的翻译",
        desc: "",
        url: "https://www.deepl.com/zh/translator",
      },
      {
        name: "抖音差不多先生#3636 - 社群 - 《暗黑破壞神III》",
        desc: "",
        url: "https://kr.diablo3.blizzard.com/zh-tw/profile/%E6%8A%96%E9%9F%B3%E5%B7%AE%E4%B8%8D%E5%A4%9A%E5%85%88%E7%94%9F-3636/hero/98217066",
      },
      {
        name: "【暗黑破坏神3】数据库_暗黑3中文网（Diablo3）_凯恩之角",
        desc: "",
        url: "https://d.163.com/db/cn",
      },
      {
        name: "中韩石化给前端-Pixso",
        desc: "",
        url: "https://pixso.cn/app/editor/KdWAzzeQaIjkX1rQPx0uWg?icon_type=1&page-id=66%3A1",
      },
      {
        name: "变电站智能巡检（交前端）-Pixso",
        desc: "",
        url: "https://pixso.cn/app/editor/yvlGjc1RzSDqHPJAQG7tHA?page-id=0%3A1",
      },
      {
        name: "wat-ywhc APIs",
        desc: "",
        url: "http://192.168.11.111:11100/watywhc/doc.html#/default/%E9%A6%96%E9%A1%B5%E6%8E%A5%E5%8F%A3/energyUsingPOST",
      },
    ],
  },
];

export default toolsData;
