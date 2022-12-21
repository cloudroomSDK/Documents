const {
  commonCookie,
  commonMeetId,
  commonSDKErr,
  commonUID,
  commonQueId,
  commonQueUser,
  commonCallID,
  commonusrExtDat,
  commonMeetInfoObj
} = require('./commonPassiveKey');

// 透明通道、呼叫排队
module.exports = [{
  method: "主调",
  interface: "CRVideo_Call",
  description: "发起呼叫",
  detail: {
    content: 'CRVideo_Call(calledUID,MeetInfoObj,userExtDat,cookie)',
    returnVal: '无',
    callback: '呼叫成功回调 [CRVideo_CallSuccess.callback](#CRVideo_CallSuccess)，呼叫失败回调 [CRVideo_CallFail.callback](#CRVideo_CallFail)',
    data: [{
      param: 'calledUID',
      type: 'String',
      necessary: '是',
      explain: '被叫用户的 [UID](KeyWords.html#UID)'
    }, commonMeetInfoObj, commonusrExtDat, commonCookie],
    attent: `
> 房间信息对象可以在创建房间成功的回调接口 [CRVideo_CreateMeetingSuccess.callback](#CRVideo_CreateMeetingSuccess) 获得
> userExtDat参数为自定义参数，对方在收到呼叫时可以拿到此参数的数据`
  }
}, {
  interface: "CRVideo_AcceptCall",
  description: "接受对方发起的呼叫",
  detail: {
    content: 'CRVideo_AcceptCall(callID,MeetInfoObj,userExtDat,cookie)',
    returnVal: '无',
    callback: '成功回调 [CRVideo_AcceptCallSuccess.callback](#CRVideo_AcceptCallSuccess)，失败回调 [CRVideo_AcceptCallFail.callback](#CRVideo_AcceptCallFail)',
    data: [commonCallID, commonMeetInfoObj, commonusrExtDat, commonCookie],
  }
}, {
  interface: "CRVideo_RejectCall",
  description: "拒绝对方发起的呼叫",
  detail: {
    content: 'CRVideo_RejectCall(callID,userExtDat,cookie)',
    returnVal: '无',
    callback: '成功回调 [CRVideo_RejectCallSuccess.callback](#CRVideo_RejectCallSuccess)，失败回调 [CRVideo_RejectCallFail.callback](#CRVideo_RejectCallFail)',
    data: [commonCallID, commonusrExtDat, commonCookie],
  }
}, {
  interface: "CRVideo_HangupCall",
  description: "挂断当前的呼叫",
  detail: {
    content: 'CRVideo_HangupCall(callID,userExtDat,cookie)',
    returnVal: '无',
    callback: '成功回调 [CRVideo_HangupCallSuccess.callback](#CRVideo_HangupCallSuccess)，失败回调 [CRVideo_HangupCallFail.callback](#CRVideo_HangupCallFail)',
    data: [commonCallID, commonusrExtDat, commonCookie]
  }
}, {
  interface: "CRVideo_SetDNDStatus",
  description: "设置免打扰状态",
  detail: {
    content: 'CRVideo_SetDNDStatus(DNDStatus,cookie)',
    returnVal: '无',
    callback: '操作成功回调 [CRVideo_SetDNDStatusSuccess.callback](#CRVideo_SetDNDStatusSuccess)，失败回调 [CRVideo_SetDNDStatusFail.callback](#CRVideo_SetDNDStatusFail)',
    data: [{
      param: 'DNDStatus',
      type: 'Number',
      necessary: '是',
      explain: '0代表关闭免打扰， 其它值代表开启免打扰，含义自由定义'
    }, commonCookie],
    attent: `
> 如果是使用到了SDK的队列功能，则进入房间后需调用此接口，设置自己的为免打扰状态，防止系统再次推送自己`
  }
}, {
  interface: "CRVideo_GetUserStatus",
  description: "获取AppID下所有用户在线状态",
  detail: {
    content: 'CRVideo_GetUserStatus(cookie)',
    returnVal: '无',
    callback: '成功回调，[CRVideo_GetUserStatusSuccess.callback](#CRVideo_GetUserStatusSuccess)，失败回调，[CRVideo_GetUserStatusFail.callback](#CRVideo_GetUserStatusFail)',
    data: [commonCookie],
  }
}, {
  interface: "CRVideo_GetOneUserStatus",
  description: "获取AppID下指定用户的在线状态",
  detail: {
    content: 'CRVideo_GetOneUserStatus(UID,cookie)',
    returnVal: '无',
    callback: '成功回调，[CRVideo_GetUserStatusSuccess.callback](#CRVideo_GetUserStatusSuccess)，失败回调，[CRVideo_GetUserStatusFail.callback](#CRVideo_GetUserStatusFail)',
    data: [commonUID, commonCookie],
  }
}, {
  interface: "CRVideo_StartUserStatusNotify",
  description: "开启用户的状态推送",
  detail: {
    content: 'CRVideo_StartUserStatusNotify(cookie)',
    returnVal: '无',
    callback: '[CRVideo_StartUserStatusNotifyRslt.callback](#CRVideo_StartUserStatusNotifyRslt)',
    data: [commonCookie],
    attent: `
> AppID下所有用户状态有变化时（包括在线状态、空闲状态、免打扰状态），都会收到 [CRVideo_NotifyUserStatus.callback](#CRVideo_NotifyUserStatus) 通知。开启后，用户量越大消息量越大，所以请按需开启。在 [CRVideo_StartUserStatusNotify](#CRVideo_StartUserStatusNotify) 前，应该先通过 [CRVideo_GetUserStatus](#CRVideo_GetUserStatus) 获取所有用户状态。`
  }
}, {
  interface: "CRVideo_StopUserStatusNotify",
  description: "关闭用户的状态推送",
  detail: {
    content: 'CRVideo_StopUserStatusNotify(cookie)',
    returnVal: '无',
    callback: '[CRVideo_StopUserStatusNotifyRslt.callback](#CRVideo_StopUserStatusNotifyRslt)',
    data: [commonCookie],
  }
}, {
  method: "回调",
  interface: "CRVideo_CallSuccess",
  description: "回调，发起呼叫成功",
  detail: {
    content: 'CRVideo_CallSuccess.callback = function(callID,cookie){}',
    type: 'callback',
    callbackParam: [commonCallID, commonCookie]
  }
}, {
  interface: "CRVideo_CallFail",
  description: "回调，发起呼叫失败",
  detail: {
    content: 'CRVideo_CallFail.callback = function(callID,sdkErr,cookie){}',
    type: 'callback',
    callbackParam: [commonCallID, commonSDKErr, commonCookie]
  }
}, {
  interface: "CRVideo_AcceptCallSuccess",
  description: "回调，接受他人的呼叫成功",
  detail: {
    content: 'CRVideo_AcceptCallSuccess.callback = function(callID,cookie){}',
    type: 'callback',
    callbackParam: [commonCallID, commonCookie]
  }
}, {
  interface: "CRVideo_AcceptCallFail",
  description: "回调，接受他人的呼叫失败",
  detail: {
    content: 'CRVideo_AcceptCallFail.callback = function(callID,sdkErr,cookie){}',
    type: 'callback',
    callbackParam: [commonCallID, commonSDKErr, commonCookie]
  }
}, {
  interface: "CRVideo_RejectCallSuccess",
  description: "回调，拒绝他人的呼叫成功",
  detail: {
    content: 'CRVideo_RejectCallSuccess.callback = function(callID,cookie){}',
    type: 'callback',
    callbackParam: [commonCallID, commonCookie]
  }
}, {
  interface: "CRVideo_RejectCallFail",
  description: "回调，拒绝他人的呼叫失败",
  detail: {
    content: 'CRVideo_RejectCallFail.callback = function(callID,sdkErr,cookie){}',
    type: 'callback',
    callbackParam: [commonCallID, commonSDKErr, commonCookie]
  }
}, {
  interface: "CRVideo_HangupCallSuccess",
  description: "回调，挂断呼叫成功",
  detail: {
    content: 'CRVideo_HangupCallSuccess.callback = function(callID,cookie){}',
    type: 'callback',
    callbackParam: [commonCallID, commonCookie]
  }
}, {
  interface: "CRVideo_HangupCallFail",
  description: "回调，挂断呼叫失败",
  detail: {
    content: 'CRVideo_HangupCallFail.callback = function(callID,sdkErr,cookie){}',
    type: 'callback',
    callbackParam: [commonCallID, commonSDKErr, commonCookie]
  }
}, {
  interface: "CRVideo_NotifyCallIn",
  description: "通知，有人呼叫自己",
  detail: {
    content: 'CRVideo_NotifyCallIn.callback = function(callID,MeetInfoObj,callerID,userExtDat){}',
    type: 'callback',
    callbackParam: [commonCallID, commonMeetInfoObj, {
      param: 'callerID',
      type: 'String',
      necessary: '是',
      explain: '对方呼叫人员的标识ID'
    }, commonusrExtDat]
  }
}, {
  interface: "CRVideo_NotifyCallAccepted",
  description: "通知，呼叫被对方接受",
  detail: {
    content: 'CRVideo_NotifyCallAccepted.callback = function(callID,MeetInfoObj,userExtDat){}',
    type: 'callback',
    callbackParam: [commonCallID, commonMeetInfoObj, commonusrExtDat],
  }
}, {
  interface: "CRVideo_NotifyCallRejected",
  description: "通知，呼叫被对方拒绝",
  detail: {
    content: 'CRVideo_NotifyCallRejected.callback = function(callID,sdkErr,userExtDat){}',
    type: 'callback',
    callbackParam: [commonCallID, commonSDKErr, commonusrExtDat],
  }
}, {
  interface: "CRVideo_NotifyCallHangup",
  description: "通知，呼叫被对方挂断",
  detail: {
    content: 'CRVideo_NotifyCallHangup.callback = function(callID,userExtDat){}',
    type: 'callback',
    callbackParam: [commonCallID, commonusrExtDat]
  }
}, {
  interface: "CRVideo_SetDNDStatusSuccess",
  description: "回调，设置免打扰状态成功",
  detail: {
    content: 'CRVideo_SetDNDStatusSuccess.callback = function(cookie){}',
    type: 'callback',
    callbackParam: [commonCookie]
  }
}, {
  interface: "CRVideo_SetDNDStatusFail",
  description: "回调，设置免打扰状态失败",
  detail: {
    content: 'CRVideo_SetDNDStatusFail.callback = function(sdkErr,cookie){}',
    type: 'callback',
    callbackParam: [commonSDKErr, commonCookie]
  }
}, {
  interface: "CRVideo_GetUserStatusSuccess",
  description: "回调，获取用户在线状态成功",
  detail: {
    content: 'CRVideo_GetUserStatusSuccess.callback = function(userStatusArr,cookie){}',
    type: 'callback',
    callbackParam: [{
      param: 'userStatusArr',
      type: 'Array',
      explain: '用户在线状态信息列表，[[CRVideo_UserStatus](TypeDefinitions.html#CRVideo_UserStatus), ...]'
    }, commonCookie]
  }
}, {
  interface: "CRVideo_GetUserStatusFail",
  description: "回调，获取用户在线状态失败",
  detail: {
    content: 'CRVideo_GetUserStatusFail.callback = function(sdkErr,cookie){}',
    type: 'callback',
    callbackParam: [commonSDKErr, commonCookie]
  }
}, {
  interface: "CRVideo_StartUserStatusNotifyRslt",
  description: "回调，开启用户状态推送的结果",
  detail: {
    content: 'CRVideo_StartUserStatusNotifyRslt.callback = function(sdkErr,cookie){}',
    type: 'callback',
    callbackParam: [commonSDKErr, commonCookie]
  }
}, {
  interface: "CRVideo_StopUserStatusNotifyRslt",
  description: "回调，停止用户状态推送的结果",
  detail: {
    content: 'CRVideo_StopUserStatusNotifyRslt.callback = function(sdkErr,cookie){}',
    type: 'callback',
    callbackParam: [commonSDKErr, commonCookie]
  }
}, {
  interface: "CRVideo_NotifyUserStatus",
  description: "通知，用户的状态变化",
  detail: {
    content: 'CRVideo_NotifyUserStatus.callback = function(CRVideo_UserStatus){}',
    type: 'callback',
    callbackParam: [{
      param: 'CRVideo_UserStatus',
      type: 'Object',
      explain: ' 单个用户在线状态信息，类型定义： [CRVideo_UserStatus](TypeDefinitions.html#CRVideo_UserStatus)'
    }]
  }
}]