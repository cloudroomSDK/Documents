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
		{
			title:"产品概述",
			link:"introduce.md"
		}
                        	,
		{
			title:"主要功能",
			link:"func_desc.md"
		}
                        
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
		{
			title:"准备工作",
			link:"beforeDevelop.md"
		}
                        	,
		{
			title:"创建白板",
			link:"create.md"
		}
                    ]
                },
                {
                    "title": "基础功能",
                    "route": "basicFunction",
                    "islink": false,
                    "children": [
                        "draw.md",
                        "zoom.md",
                        "redo_undo.md",
                        "manager.md"
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
                         "wb_api.md",
                         "type_define.md",
                         "const_define.md"
                     ]
                 }
           ]
        }
    ]
}
