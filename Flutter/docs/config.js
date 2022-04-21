module.exports = {
  navs: [
    {
      title: "文档",
      route: "document",
      // layout: "sdk",
      slidebar: [
        {
          title: "简介",
          route: "intro",
          islink: false,
          children: ["README.md", "Mainfunctions.md", "KeyWords.md"],
        },
        {
          title: "快速开始",
          route: "fastIntegration",
          islink: false,
          children: ["beforeDevelop.md", "IntegratedGuide.md"],
        },
        {
          title: "基础功能",
          route: "basicFunction",
          children: ["setvideoAttr.md", "setAudioAttr.md", "screenShare.md", "localRecord.md"],
        },
        {
          title: "高级功能",
          route: "advancedFunction",
          children: [
            "remoteRecord.md",
            "media.md",
            "meetingCustomMsg.md"
          ],
        },
      ],
    },

    {
      title: "API参考",
      route: "api",
      // layout: "sdk",
      slidebar: [
        {
          title: "API参考",
          route: "apis",
          children: ["API.md", "TypeDefinitions.md", "Constant.md"],
        },
      ],
    },
  ],
};
