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

// 房间管理
module.exports = [{
  method: '主调',
  interface: 'CRVideo_CreateMeeting2',
  description: '创建房间',
  detail: {
    content: 'CRVideo_CreateMeeting2(cookie)',
    returnVal: '无',
    callback: '成功回调 [CRVideo_CreateMeetingSuccess.callback](#CRVideo_CreateMeetingSuccess)，失败回调 [CRVideo_CreateMeetingFail.callback](#CRVideo_CreateMeetingFail)',
    data: [commonCookie]
  }
}, {
  interface: 'CRVideo_DestroyMeeting',
  description: '销毁房间',
  detail: {
    content: 'CRVideo_DestroyMeeting(meetID,cookie)',
    returnVal: '无',
    callback: '[CRVideo_DestroyMeetingRslt.callback](#CRVideo_DestroyMeetingRslt)',
    data: [commonMeetId, commonCookie],
    attent: `
> SDK创建的房间为固定房间，固定房间不会自动销毁，当该房间今后不再使用时，应当调用此接口销毁该房间
> 调用此接口后，房间内成员将收到 [CRVideo_MeetingStopped.callback](#CRVideo_MeetingStopped) 通知`
  }
}, {
  method: '回调',
  interface: 'CRVideo_CreateMeetingSuccess',
  description: '回调，创建房间成功',
  detail: {
    content: 'CRVideo_CreateMeetingSuccess.callback = function(MeetInfoObj,cookie){}',
    type: 'callback',
    callbackParam: [commonMeetInfoObj, commonCookie]
  }
}, {
  interface: 'CRVideo_CreateMeetingFail',
  description: '回调，创建房间失败',
  detail: {
    content: 'CRVideo_CreateMeetingFail.callback = function(sdkErr,cookie){}',
    type: 'callback',
    callbackParam: [commonSDKErr, commonCookie]
  }
}, {
  interface: 'CRVideo_DestroyMeetingRslt',
  description: '回调，销毁房间的结果',
  detail: {
    content: 'CRVideo_DestroyMeetingRslt.callback = function(sdkErr,cookie){}',
    type: 'callback',
    callbackParam: [commonSDKErr, commonCookie]
  }
}, {
  interface: 'CRVideo_MeetingStopped',
  description: '通知，当前房间已被结束',
  detail: {
    content: 'CRVideo_MeetingStopped.callback = function(){}',
    type: 'callback',
  }
}]