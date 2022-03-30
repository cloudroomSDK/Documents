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
  interface: "CRVideo_SendMeetingCustomMsg",
  description: "发送房间内广播消息",
  detail: {
    content: 'CRVideo_SendMeetingCustomMsg(stringMsg,cookie)',
    returnVal: '无',
    callback: '[CRVideo_SendMeetingCustomMsgRslt.callback](#CRVideo_SendMeetingCustomMsgRslt)',
    data: [{
      param: 'stringMsg',
      type: 'String',
      necessary: '是',
      explain: '要发送的消息数据'
    }, commonCookie]
  }
}, {
  method: "回调",
  interface: "CRVideo_SendMeetingCustomMsgRslt",
  description: "回调，发送房间内广播消息的结果",
  detail: {
    content: 'CRVideo_SendMeetingCustomMsgRslt.callback = function(sdkErr,cookie){}',
    type: 'callback',
    callbackParam: [commonSDKErr, commonCookie]
  }
}, {
  interface: "CRVideo_NotifyMeetingCustomMsg",
  description: "通知，收到房间内广播消息",
  detail: {
    content: 'CRVideo_NotifyMeetingCustomMsg.callback = function(UID,stringMsg){}',
    type: 'callback',
    callbackParam: [{
      param: 'UID',
      type: 'String',
      explain: '消息来源用户ID'
    }, {
      param: 'stringMsg',
      type: 'String',
      explain: '收到的消息数据'
    }]
  }
}]