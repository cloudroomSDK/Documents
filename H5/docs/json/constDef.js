module.exports.CONSTDEF = [{
    type: '错误码',
    content: 'CRVideo_ERR_DEF',
    detail: [{
        code: 0,
        description: '没有错误',
    }, {
        code: 1,
        description: '未知错误',
        // }, {
        //     code: 2,
        //     description: '内存不足',
    }, {
        code: 3,
        description: 'sdk内部错误',
        // }, {
        //     code: 4,
        //     description: '不支持的sdk版本',
    }, {
        code: 5,
        description: '参数错误',
    }, {
        code: 6,
        description: '无效数据',
    }, {
        code: 7,
        description: '帐号密码不正确',
    }, {
        code: 8,
        description: '服务异常',
    }, {
        code: 9,
        description: '登录状态错误',
    }, {
        code: 10,
        description: '登录用户被踢下线',
    }, {
        code: 11,
        description: 'sdk未初始化',
    }, {
        code: 12,
        description: '还没有登录',
    }, {
        code: 13,
        description: 'base64转换失败',
    }, {
        code: 14,
        description: '启用了第三方鉴权，但没有携带鉴权信息',
    }, {
        code: 15,
        description: '没有启用第三方鉴权，但携带了鉴权信息',
    }, {
        code: 16,
        description: '访问第三方鉴权服务异常',
    }, {
        code: 17,
        description: '第三方鉴权不通过',
    }, {
        code: 18,
        description: 'token已过期',
    }, {
        code: 19,
        description: '鉴权信息错误',
    }, {
        code: 20,
        description: 'appid不存在',
    }, {
        code: 21,
        description: '鉴权失败',
    }, {
        code: 22,
        description: '非token鉴权方式',
        // }, {
        //     code: 200,
        //     description: '网络初始化失败',
        // }, {
        //     code: 201,
        //     description: '没有服务器信息',
    }, {
        code: 202,
        description: '服务器没有响应',
        // }, {
        //     code: 203,
        //     description: '创建连接失败',
    }, {
        code: 204,
        description: 'socket异常',
        // }, {
        //     code: 205,
        //     description: '网络超时',
        // }, {
        //     code: 206,
        //     description: '连接被关闭',
        // }, {
        //     code: 207,
        //     description: '连接丢失',
        // }, {
        //     code: 208,
        //     description: '语音引擎初始化失败',
        // }, {
        //     code: 209,
        //     description: 'ssl相关错误',
    }, {
        code: 400,
        description: '队列ID错误',
    }, {
        code: 401,
        description: '没有用户在排队',
    }, {
        code: 402,
        description: '排队用户已取消',
    }, {
        code: 403,
        description: '队列服务还未开启',
    }, {
        code: 404,
        description: '已在其它队列排队(客户只能在一个队列排队)',
    }, {
        code: 600,
        description: '无效的呼叫ID',
    }, {
        code: 601,
        description: '已在呼叫中',
    }, {
        code: 602,
        description: '对方忙',
    }, {
        code: 603,
        description: '对方不在线',
    }, {
        code: 604,
        description: '对方无应答',
    }, {
        code: 605,
        description: '用户不存在',
    }, {
        code: 606,
        description: '对方拒接',
    }, {
        code: 800,
        description: '房间不存在或已结束',
    }, {
        code: 801,
        description: '房间密码不正确',
    }, {
        code: 802,
        description: '房间终端数量已满（购买的license不够)',
    }, {
        code: 803,
        description: '分配房间资源失败',
    }, {
        code: 804,
        description: '房间已加锁',
    }, {
        code: 805,
        description: '余额不足',
        // }, {
        //     code: 806,
        //     description: '业务权限未开启',
        // }, {
        //     code: 807,
        //     description: '不能再次登录',
        // }, {
        //     code: 808,
        //     description: '没有mic权限',
        // }, {
        //     code: 809,
        //     description: 'mic已被使用',
        // }, {
        //     code: 810,
        //     description: 'mic相关未知错误',
        // }, {
        //     code: 811,
        //     description: '没有扬声器权限',
        // }, {
        //     code: 812,
        //     description: '扬声器已被使用',
        // }, {
        //     code: 813,
        //     description: '扬声器相关未知错误',
        // }, {
        //     code: 900,
        //     description: '抓屏失败',
        // }, {
        //     code: 901,
        //     description: '单次录制达到最大时长(8h)',
        // }, {
        //     code: 902,
        //     description: '磁盘空间不够',
        // }, {
        //     code: 903,
        //     description: '录像的分辨率超出限制',
        // }, {
        //     code: 904,
        //     description: '配置超出限制',
        // }, {
        //     code: 905,
        //     description: '录像文件操作出错',
        // }, {
        //     code: 906,
        //     description: '录像已开启',
    }, {
        code: 1000,
        description: '发送失败',
    }, {
        code: 1001,
        description: '有敏感词语',
    }, {
        code: 1100,
        description: '发送信令数据过大',
    }, {
        code: 1101,
        description: '发送数据过大',
    }, {
        code: 1102,
        description: '目标用户不存在',
        // }, {
        //     code: 1103,
        //     description: '文件错误',
        // }, {
        //     code: 1104,
        //     description: '无效的发送id',
        // }, {
        //     code: 1200,
        //     description: '状态错误不可上传/取消上传',
        // }, {
        //     code: 1201,
        //     description: '录制文件不存在',
        // }, {
        //     code: 1300,
        //     description: '网络摄像头url不正确',
        // }, {
        //     code: 1301,
        //     description: '网络摄像头已存在',
        // }, {
        //     code: 1302,
        //     description: '网络摄像头达到最大数量',
        // }, {
        //     code: 1400,
        //     description: '文件不存在',
        // }, {
        //     code: 1401,
        //     description: '文件读失败',
        // }, {
        //     code: 1402,
        //     description: '文件写失败',
        // }, {
        //     code: 1403,
        //     description: '文件操作失败',
        // }, {
        //     code: 2001,
        //     description: 'ocx未安装',
        // }, {
        //     code: 2002,
        //     description: '不支持的浏览器',
        // }, {
        //     code: 2003,
        //     description: '不支持的插件版本',
    }, {
        code: 8001,
        description: '获取媒体设备权限未知错误',
    }, {
        code: 8002,
        description: '用户拒绝授予媒体权限',
    }, {
        code: 8003,
        description: '枚举媒体设备失败',
    }, {
        code: 8004,
        description: '浏览器不支持相关API',
    }, {
        code: 8005,
        description: 'SDK不支持该浏览器',
    }, {
        code: 8006,
        description: '浏览器版本过低',
    }, {
        code: 8007,
        description: '打开媒体设备失败',
    },]

}, {
    type: '麦克风状态',
    content: 'CRVideo_ASTATUS',
    detail: [{
        code: 0,
        description: '音频状态未知',
    }, {
        code: 1,
        description: '没有麦克风设备',
    }, {
        code: 2,
        description: '麦克风处于关闭状态（软开关）',
    }, {
        code: 3,
        description: '麦克风处于打开状态（软开关）',
    }, {
        code: 4,
        description: '向服务器发送打开消息中',
    }]
}, {
    type: '视频状态',
    content: 'CRVideo_VSTATUS',
    detail: [{
        code: 0,
        description: '视频状态未知',
    }, {
        code: 1,
        description: '没有视频设备',
    }, {
        code: 2,
        description: '视频处于关闭状态（软开关）',
    }, {
        code: 3,
        description: '视频处于打开状态（软开关）',
    }, {
        code: 4,
        description: '向服务器发送打开消息中',
    }]
}, {
    type: '主视频模式',
    content: 'CRVideo_MAIN_VIDEO_MODE',
    detail: [{
        code: 1,
        description: '语音激励模式',
    }, {
        code: 2,
        description: '跟随演示者',
    }, {
        code: 3,
        description: '跟随特定参会者',
    }]
}, {
    type: '功能区类型',
    content: 'CRVideo_MAIN_PAGE_TYPE',
    detail: [{
        code: 4,
        description: '白板',
    }, {
        code: 6,
        description: '屏幕共享',
    }, {
        code: 7,
        description: '影音共享',
    }, {
        code: 8,
        description: '视频墙',
    }]
}, {
    type: '混图器内容类型',
    content: 'CRVideo_MIXER_VCONTENT_TYPE',
    detail: [{
        code: 0,
        description: '摄像头画面',
    }, {
        code: 1,
        description: '图片',
    }, {
        code: 2,
        description: '本地屏幕画面',
    }, {
        code: 3,
        description: '影音共享画面',
    }, {
        code: 4,
        description: '时间戳',
    }, {
        code: 5,
        description: '共享的屏幕',
    }, {
        code: 6,
        description: '白板',
    }, {
        code: 7,
        description: '文本',
    }, {
        code: 9,
        description: '纯音频',
    }]
}, {
    type: '混图器状态',
    content: 'CRVideo_MIXER_STATE',
    detail: [{
        code: 0,
        description: '没有创建',
    }, {
        code: 1,
        description: '正在开启',
    }, {
        code: 2,
        description: '正在进行',
    }, {
        code: 3,
        description: '录制出错',
    }, {
        code: 4,
        description: '正在上传',
    }, {
        code: 5,
        description: '上传完成',
    }, {
        code: 6,
        description: '上传出错',
    }, {
        code: 7,
        description: '全部完成',
    }]
}]