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
} = require('./commonPassiveKey');

// 屏幕共享
module.exports = [
  // {
  //   interface: "CRVideo_GetScreenShareCfg",
  //   description: "获取屏幕共享配置"
  // },
  {
    method: "主调",
    interface: "CRVideo_CreatScreenShareObj",
    description: "创建屏幕共享显示UI组件",
    detail: {
      content: 'CRVideo_CreatScreenShareObj(CreatParams)',
      returnVal: '返回屏幕共享UI显示对象 [CRVideo_ScreenShareObj](#videoUI)',
      callback: '无',
      data: [{
        param: 'CreateUIParams',
        type: 'Object',
        necessary: '否',
        explain: '详细介绍见：[CRVideo_CreateUIParams](TypeDefinitions.html#CRVideo_CreateUIParams)'
      }],
    }
  }, {
    interface: "CRVideo_SetScreenShareCfg",
    description: "配置屏幕共享参数",
    detail: {
      content: 'CRVideo_SetScreenShareCfg(CRVideo_ScreenCfgObj)',
      returnVal: '无',
      callback: '无',
      data: [{
        param: 'CRVideo_ScreenCfgObj',
        type: 'Object',
        necessary: '是',
        explain: '屏幕共享配置参数对象，详细介绍见：[CRVideo_ScreenCfgObj](TypeDefinitions.html#CRVideo_ScreenCfgObj)'
      }
      ]
    }
  }, {
    interface: "CRVideo_StartScreenShare",
    description: "开启本地屏幕共享",
    detail: {
      content: 'CRVideo_StartScreenShare()',
      returnVal: '无',
      callback: '[CRVideo_StartScreenShareRslt.callback](#CRVideo_StartScreenShareRslt)',
    }
  }, {
    interface: "CRVideo_StopScreenShare",
    description: "结束本地屏幕共享",
    detail: {
      content: 'CRVideo_StopScreenShare()',
      returnVal: '无',
      callback: '[CRVideo_StopScreenShareRslt.callback](#CRVideo_StopScreenShareRslt)',
    }
  }, {
    interface: "CRVideo_StartScreenMark",
    description: "开启房间内屏幕共享标注",
    detail: {
      content: 'CRVideo_StartScreenMark()',
      returnVal: '无',
      callback: '[CRVideo_StartScreenMarkRslt.callback](#CRVideo_StartScreenMarkRslt)',
    }
  }, {
    interface: "CRVideo_StopScreenMark",
    description: "停止房间内屏幕共享标注",
    detail: {
      content: 'CRVideo_StopScreenMark()',
      returnVal: '无',
      callback: '[CRVideo_StopScreenMarkRslt.callback](#CRVideo_StopScreenMarkRslt)',
    }
  }, {
    method: "回调",
    interface: "CRVideo_StartScreenShareRslt",
    description: "回调，开启屏幕共享的结果",
    detail: {
      content: 'CRVideo_StartScreenShareRslt.callback = function(sdkErr){}',
      type: 'callback',
      callbackParam: [commonSDKErr]
    }
  }, {
    interface: "CRVideo_StopScreenShareRslt",
    description: "回调，停止屏幕共享的结果",
    detail: {
      content: 'CRVideo_StopScreenShareRslt.callback = function(sdkErr){}',
      type: 'callback',
      callbackParam: [commonSDKErr]
    }
  }, {
    interface: "CRVideo_StartScreenMarkRslt",
    description: "回调，开启房间内屏幕共享标注的结果",
    detail: {
      content: 'CRVideo_StartScreenMarkRslt.callback = function(sdkErr){}',
      type: 'callback',
      callbackParam: [commonSDKErr]
    }
  }, {
    interface: "CRVideo_StopScreenMarkRslt",
    description: "回调，停止房间内屏幕共享标注的结果",
    detail: {
      content: 'CRVideo_StopScreenMarkRslt.callback = function(sdkErr){}',
      type: 'callback',
      callbackParam: [commonSDKErr]
    }
  }, {
    interface: "CRVideo_NotifyScreenShareStarted",
    description: "通知，他人开启了屏幕共享",
    detail: {
      content: 'CRVideo_NotifyScreenShareStarted.callback = function(UID){}',
      type: 'callback',
      callbackParam: [commonUID]
    }
  }, {
    interface: "CRVideo_NotifyScreenShareStopped",
    description: "通知，他人停止了屏幕共享",
    detail: {
      content: 'CRVideo_NotifyScreenShareStopped.callback = function(UID){}',
      type: 'callback',
      callbackParam: [commonUID]
    }
  }, {
    interface: "CRVideo_NotifyScreenMarkStarted",
    description: "通知，房间内开启了屏幕共享标注",
    detail: {
      content: 'CRVideo_NotifyScreenMarkStarted.callback = function(UID){}',
      type: 'callback',
      callbackParam: [commonUID]
    }
  }, {
    interface: "CRVideo_NotifyScreenMarkStopped",
    description: "通知，房间内停止了屏幕共享标注",
    detail: {
      content: 'CRVideo_NotifyScreenMarkStopped.callback = function(UID){}',
      type: 'callback',
      callbackParam: [commonUID]
    }
  }
]