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
                        "securityIssue.md",
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
                        "IntegratedGuide.md",
                        "msapplicationPacket.md"
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
                        "setvideoAttr.md",
                        "multiVideos.md",
                        "screenshare.md",
                        "remoteControl.md",
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
                        "queue.md",
                        "call.md",
                        "live.md",
                        "srvLive.md",
                        "transpChannel.md",
                        "meetingCustomMsg.md",
                        "roomatts.md",
                        "sipH323Support.md"
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
                         "API.md",
                         "Constant.md",
                         "TypeDefinitions.md"
                     ]
                 }
           ]
        }
    ]
}
