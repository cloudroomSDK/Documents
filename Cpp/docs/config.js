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
                        "loginIdentify.md"
                    ]
                },
                {
                    "title": "快速开始",
                    "route": "fastIntegration",
                    "islink": false,
                    "children": [
                        "beforeDevelop.md",
                        "IntegratedGuide.md"
                    ]
                },
                {
                    "title": "基础功能",
                    "route": "basicFunction",
                    "islink": false,
                    "children": [
                        "loginIdentify.md",
                        "usecloudproxy.md",
                        "setAudioAttr.md",
                        "setVideoAttr.md",
                        "multiVideos.md",
                        "record.md",
                        "srvRecord.md"
                    ]
                },
                {
                    "title": "进阶功能",
                    "route": "advancedFunction",
                    "islink": false,
                    "children": [
                        "media.md",
                        "customAudioOper.md",
                        "customVideoOper.md",
                        "transpChannel.md",
                        "sendMeetingCustomMsg.md",
                        "roomatts.md"
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
                         "ApiIndex.md",
                         "Apis.md",
                         "Constant.md",
                         "Structs.md"
                     ]
                 }
           ]
        }
    ]
}
