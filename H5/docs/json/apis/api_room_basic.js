const {
    commonCookie,
    commonMeetInfoObj,
    commonMeetId,
    commonSDKErr,
    commonUID,
    commonQueId,
    commonQueUser,
    commonCallID,
    commonusrExtDat,
    commonErrorCode,
    commonErrorDesc,
    commonReturnPromise,
    commonPromiseReject,
    commonUserID,
    promiseCallback,
} = require('./commonPassiveKey');

// 进出房间
module.exports = [{
    method: '主调',
    interface: 'CRVideo_GetMainVideo',
    description: '获取当前哪个用户为主视频',
    detail: {
        content: 'CRVideo_GetMainVideo()',
        returnVal: '当前主视频用户ID',
        callback: '无',
    }
}, {
    interface: 'CRVideo_SetMainVideo',
    description: '设置哪个用户为主视频',
    detail: {
        content: 'CRVideo_SetMainVideo(UID)',
        returnVal: '无',
        callback: '无',
        data: [commonUID]
    }
}, {
    interface: 'CRVideo_SetMainVideoMode',
    description: '设置主视频模式',
    detail: {
        content: 'CRVideo_SetMainVideoMode(mode,UID)',
        returnVal: '无',
        callback: '无',
        data: [{
            param: 'mode',
            type: 'Number',
            necessary: '是',
            explain: '主视频模式，详见 [CRVideo_MAIN_VIDEO_MODE](Constant.html#CRVideo_MAIN_VIDEO_MODE)',
        }, commonUID]
    }
}, {
    interface: 'CRVideo_GetMainVideoMode',
    description: '获取当前主视频模式',
    detail: {
        content: 'CRVideo_GetMainVideoMode()',
        returnVal: '返回当前房间的主视频模式，详见 [CRVideo_MAIN_VIDEO_MODE](Constant.html#CRVideo_MAIN_VIDEO_MODE)',
    }
}, {
    interface: 'CRVideo_SwitchToPage',
    description: '功能区切换',
    detail: {
        content: `CRVideo_SwitchToPage(mainPage,subPage)${promiseCallback}`,
        returnVal: commonReturnPromise,
        data: [{
            param: 'mainPage',
            type: 'Number',
            necessary: '是',
            explain: '功能区类型，详见 [CRVideo_MAIN_PAGE_TYPE](Constant.html#CRVideo_MAIN_PAGE_TYPE)',
        }, {
            param: 'subPage',
            type: 'String',
            necessary: '否',
            explain: '子页面标识（如创建白板时返回的boardID："2.58"），非必传',
        }],
        resParam: [commonErrorCode],
        errParam: commonPromiseReject
    }
}, {
    interface: 'CRVideo_GetCurrentMainPage',
    description: '获取当前主功能区',
    detail: {
        content: `CRVideo_GetCurrentMainPage()`,
        returnVal: '返回当前的主功能区。功能区类型详见 [CRVideo_MAIN_PAGE_TYPE](Constant.html#CRVideo_MAIN_PAGE_TYPE)',
    }
}, {
    interface: 'CRVideo_GetCurrentSubPage',
    description: '获取当前子页面',
    detail: {
        content: `CRVideo_GetCurrentSubPage()`,
        returnVal: '返回当前的子页面标识，如白板的boardID。没有子页面标识的功能区，则返回 0.0',
    }
}, {
    method: '回调',
    interface: 'CRVideo_NotifyMainVideoChanged',
    description: '通知，会话内主视频变化',
    detail: {
        content: 'CRVideo_NotifyMainVideoChanged.callback = function(UID){}',
        type: 'callback',
        callbackParam: [commonUID]
    }
}, {
    interface: 'CRVideo_NotifyMainVideoModeChanged',
    description: '通知，会话内主视频模式变化',
    detail: {
        content: 'CRVideo_NotifyMainVideoModeChanged.callback = function(mode){}',
        type: 'callback',
        callbackParam: [{
            param: 'mode',
            type: 'Number',
            explain: '主视频模式，详见 [CRVideo_MAIN_VIDEO_MODE](Constant.html#CRVideo_MAIN_VIDEO_MODE)',
        }]
    }
}, {
    interface: 'CRVideo_NotifySwitchToPage',
    description: '通知，会话内功能区变化',
    detail: {
        content: 'CRVideo_NotifySwitchToPage.callback = function(mainPage,subPage){}',
        type: 'callback',
        callbackParam: [{
            param: 'mainPage',
            type: 'Number',
            explain: '功能区类型，详见 [CRVideo_MAIN_PAGE_TYPE](Constant.html#CRVideo_MAIN_PAGE_TYPE)',
        }, {
            param: 'subPage',
            type: 'String',
            explain: '子页面标识（如创建白板时返回的boardID："2.58"），非必传。没有子页面标识的功能区，则为 "0.0"',
        }]
    }
}, {
    interface: 'CRVideo_PeerConnectionError',
    description: '通知，媒体流连接错误',
    detail: {
        content: 'CRVideo_PeerConnectionError.callback = function(errDesc){}',
        type: 'callback',
        callbackParam: [{
            param: 'errDesc',
            type: 'String',
            explain: '错误描述',
        }],
        attent: `
> 媒体流连接发生错误时，表示当前音视频连接可能已经断开，将无法正常进行音视频通话，用户可以尝试退出重新进入房间来恢复连接。`
    },
}, {
    interface: 'CRVideo_NetStateChanged',
    description: '通知，网络状态变化',
    detail: {
        content: 'CRVideo_NetStateChanged.callback = function(score){}',
        type: 'callback',
        callbackParam: [{
            param: 'score',
            type: 'Number',
            explain: '网络评分，0~10，10为最佳',
        }],
        attent: `
> 网络评分>8为优秀，通话基本不受影响；5~8为一般，可能会出现卡顿或延迟，5>为差，可能无法正常通话或出现流媒体错误、掉线等。`
    },
}]