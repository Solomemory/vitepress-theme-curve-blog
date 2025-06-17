// 链接数据
const toolsData = [
  {
    type: "Cloud",
    typeName: "云服务",
    typeDesc: "云端之力，开启便捷高效服务新体验",
    typeList: [
      {
        name: "uniCloud",
        desc: "一站式云服务，助力项目快速开发部署",
        url: "https://unicloud.dcloud.net.cn/?pageid=",
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
        url: "https://gitee.com/lin2132",
      },
      {
        name: "GitHub",
        desc: "GitHub国内镜像",
        url: "https://bgithub.xyz/",
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
        desc: "高效原型设计，快速呈现产品交互雏形",
        url: "https://rp.mockplus.cn",
      },
      /*      {
        name: "Components | Calcite Design System | Esri Developer",
        desc: "设计组件宝库，助力打造统一风格界面",
        url: "https://developers.arcgis.com/calcite-design-system/components/",
      },*/
      {
        name: "墨刀",
        desc: "项目设计管理，清晰规划产品设计蓝图",
        url: "https://modao.cc/",
      },
      {
        name: "Axhub",
        desc: "设计项目平台，汇聚多样设计创意灵感",
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
      // {
      //   name: "Astro",
      //   desc: "技术入门指引，轻松开启学习探索之路",
      //   url: "https://docs.astro.build/zh-cn/getting-started/",
      // },
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
];

export default toolsData;
