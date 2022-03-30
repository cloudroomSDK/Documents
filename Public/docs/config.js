module.exports = {
  navs: [
    {
      title: "文档",
      route: "document",
      sort: -1,
      slidebar: [
        {
          title: "简介",
          route: "intro",
          sort: -1,
          children: [
            "ProductSummary.md",
            "Mainfunctions.md",
            "KeyWords.md",
            "loginIdentify.md",
            "securityIssue.md",
          ],
        },
      ],
    },
    {
      title: "FAQ",
      route: "faq",
	  sort: 9,
      slidebar: [
        {
          title: "会议",
          route: "conference",
          sort: 0,
          children: ["video-conference.md"],
        },
      ],
    },
  ],
};
