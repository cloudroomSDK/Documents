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
                        "History.md"
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
                        "beforeDevelop.md",
                        "wxconfig.md",
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
                        "meetingCustomMsg.md",
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
                         "API.md",
                         "Constant.md",
                         "TypeDefinitions.md"
                     ]
                 }
           ]
        }
    ]
}
