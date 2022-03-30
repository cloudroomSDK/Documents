module.exports = {
    "navs": [
        {
            "title": "文档",
            "route": "document",
            "slidebar": [
                {
                    "title": "简介",
                    "route": "intro",
                    "islink": false,
                    "children": [
                        "README.md",
                        "Mainfunctions.md",
                        "KeyWords.md",
                        "SecurityIssue.md"
                    ]
                },
                {
                    "title": "下载",
                    "route": "https://sdk.cloudroom.com/pages/download",
                    "islink": true
                },
                {
                    "title": "快速开始",
                    "route": "fastIntegration",
                    "islink": false,
                    "children": [
                        "BeforeDevelop.md",
                        "IntegratedGuide.md"
                    ]
                },
                {
                    "title": "基础功能",
                    "route": "basicFunction",
                    "islink": false,
                    "children": [
                        "LoginIdentify.md",
                        "usecloudproxy.md",
                        "SetAudioAttr.md",
                        "SetvideoAttr.md",
                        "MultiVideos.md",
                        "Screenshare.md",
                        "SrvRecord.md"
                    ]
                },
                {
                    "title": "进阶功能",
                    "route": "advancedFunction",
                    "islink": false,
                    "children": [
                        "Media.md",
                        "Queue.md",
                        "Call.md",
                        "SrvLive.md",
                        "TranspChannel.md",
                    ]
                }
            ]
        },
        {
            "title": "API",
            "route": "api",
            "slidebar": [
                 {
                     "title": "API参考",
                     "route": "apis",
                     "islink": false,
                     "children": [
                         {
                             title: "API",
                             link: "API2.md",
                             alias: "API"
                         },
                         {
                             link: "Constant2.md",
                             alias: "Constant"
                         },
                         {
                             link: "TypeDefinitions2.md",
                             alias: "TypeDefinitions"
                         },
                     ]
                 }
           ]
        }
        // {
        //     "title": "API",
        //     "route": "api",
        //     "slidebar": [
        //         {
        //             "title": "API参考",
        //             "route": "apis",
        //             "islink": false,
        //             "children": [
        //                 {
        //                     title: "API概述",
        //                     link: "API/classify.md",
        //                     // alias: "API"
        //                 },
        //                 {
        //                     title: "接口描述",
        //                     link: "API/description.md",
        //                     // alias: "API"
        //                 },
        //                 {
        //                     title: "接口详情",
        //                     link: "API/details.md",
        //                     // alias: "API"
        //                 },
        //             ]
        //         }, {
        //             "title": "常量定义",
        //             "route": "constant",
        //             "islink": true,
        //             "children": [
        //                 {
        //                     link: "Constant2.md",
        //                     alias: "Constant"
        //                 },
        //             ]
        //         }, {
        //             "title": "类型定义",
        //             "route": "typeDefinitions",
        //             "islink": true,
        //             "children": [
        //                 {
        //                     link: "TypeDefinitions2.md",
        //                     alias: "TypeDefinitions"
        //                 },
        //             ]
        //         }
        //     ]
        // }
    ]
}
