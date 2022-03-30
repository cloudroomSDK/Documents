module.exports = {
  navs: [
    {
      title: "文档",
      route: "document",
      slidebar: [
        {
          title: "快速集成",
          route: "fastintegration",
          children: [
            "usage.md"
          ],
        },
        {
          title: "常量参数",
          route: "common",
          // islink: true,
          children: [
            "statusCode.md"
          ],
        },
        {
          title: "功能模块",
          route: "functionModule",
          children: [
            "video.md",
            "chat.md",
            "admire.md",
            "question.md",
            "webSetting.md",
            "luckyDraw.md",
            "rollcall.md",
            "reward.md",
            "other.md"
          ],
        },
      ],
    }
  ],
};
