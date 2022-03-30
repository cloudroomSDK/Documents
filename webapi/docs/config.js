module.exports = {
  navs: [
    {
      title: "文档",
      route: "document",
      layout: "sdk",
      slidebar: [
        {
          title: "说明",
          route: "introduction",
          islink: true,
          children: ["README.md"],
        },
        {
          title: "房间管理",
          route: "room",
          islink: false,
          children: [
              {
                title: "创建房间",
                link: "room_create.md"
              },
              {
                title: "删除房间",
                link: "room_delete.md"
              },
              {
                title: "查询房间在线人数",
                link: "room_online_users_num.md"
              },
              {
                title: "查询房间在线成员信息",
                link: "room_online_members.md"
              },
              {
                title: "查询用量（按天统计）",
                link: "room_usageInfo_all.md"
              },
              {
                title: "查询用量（按天和房间统计）",
                link: "room_usageInfo.md"
              },
          ],
        },
        {
          title: "队列管理",
          route: "queue",
          islink: false,
          children: [
            {
              title: "新增队列",
              link: "queue_add.md"
            },
            {
              title: "修改队列",
              link: "queue_modify.md"
            },
            {
              title: "删除队列",
              link: "queue_delete.md"
            },
            {
              title: "查询队列",
              link: "queue_query.md"
            },
          ],
        },
        {
          title: "录像管理",
          route: "netdisk",
          islink: false,
          children: [
            {
              title: "查询录像文件",
              link: "netdisk_query.md"
            },
            {
              title: "删除录像文件",
              link: "netdisk_delete.md"
            },
            {
              title: "上传录像文件",
              link: "netdisk_upload.md"
            },
          ],
        },
        {
          title: "项目管理",
          route: "project",
          islink: false,
          children: [
            {
              title: "创建项目",
              link: "project_add.md"
            },
            {
              title: "查询项目列表",
              link: "project_list.md"
            },
            {
              title: "删除项目",
              link: "project_delete.md"
            },
            {
              title: "更新项目",
              link: "project_update.md"
            },
            {
              title: "更新项目密钥",
              link: "project_secret.md"
            },
          ],
        },
      ],
    },

    {
      title: "API Demo",
      route: "api",
      layout: "sdk",
      slidebar: [
        {
          title: "API Demo",
          route: "demo",
          islink: true,
          children: ["version.md"],
        },
      ],
    },
  ],
};
