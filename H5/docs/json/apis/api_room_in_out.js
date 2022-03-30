const {
  commonCookie,
  commonMeetId,
  commonSDKErr,
  commonUID,
  commonUserID,
  commonErrorCode,
  commonErrorDesc,
  commonReturnPromise,
  commonPromiseReject,
  commonReserve,
  promiseCallback
} = require('./commonPassiveKey');

// 进出房间
module.exports = [{
  method: '主调',
  interface: 'CRVideo_EnterMeeting3',
  description: '进入房间',
  detail: {
    content: 'CRVideo_EnterMeeting3(meetID,cookie)',
    returnVal: '无',
    callback: '[CRVideo_EnterMeetingRslt.callback](#CRVideo_EnterMeetingRslt)',
    data: [
      commonMeetId,
      commonCookie
    ]
  }
}, {
  interface: 'CRVideo_ExitMeeting',
  description: '离开房间',
  detail: {
    content: 'CRVideo_ExitMeeting()',
    returnVal: '无',
    callback: '无',
  }
}, {
  interface: 'CRVideo_Kickout',
  description: '将房间内指定成员踢出房间',
  detail: {
    content: `CRVideo_Kickout(UID)${promiseCallback}`,
    returnVal: commonReturnPromise,
    data: [
      commonUID
    ],
    resParam: [commonErrorCode, commonUserID],
    errParam: commonPromiseReject,
    example: `
    CRVideo_Kickout(UID).then(resObj =>{
      // 成功
      const errCode = resObj.errCode;
      const userID = resObj.userID;
    }).catch(errObj =>{
      // 失败
      const errCode = errObj.errCode;
      const errDesc = errObj.errDesc;
    })
    `
  }
}, {
  method: '回调',
  interface: 'CRVideo_EnterMeetingRslt',
  description: '回调，进入房间的结果',
  detail: {
    content: 'CRVideo_EnterMeetingRslt.callback = function(sdkErr,cookie){}',
    type: 'callback',
    callbackParam: [commonSDKErr, commonCookie]
  }
}, {
  interface: 'CRVideo_UserEnterMeeting',
  description: '通知，有人进入房间',
  detail: {
    content: 'CRVideo_UserEnterMeeting.callback = function(UID){}()',
    type: 'callback',
    callbackParam: [commonUID]
  }
}, {
  interface: 'CRVideo_UserLeftMeeting',
  description: '通知，有人离开房间',
  detail: {
    content: 'CRVideo_UserLeftMeeting.callback = function(UID){}()',
    type: 'callback',
    callbackParam: [commonUID]
  }
}, {
  interface: 'CRVideo_MeetingDropped',
  description: '通知，从房间中掉线了',
  detail: {
    content: 'CRVideo_MeetingDropped.callback = function(){}()',
    type: 'callback',
    attent: `
> 当收到此通知后，如果要继续会话，需再次调用 [CRVideo_EnterMeeting3](#CRVideo_EnterMeeting3) 接口重新进入房间，并可通过传cookie参数在进入房间成功的回调中来区分是第一次进入房间还是重新进入房间，以此来做不同的处理，详见Demo。
> 如果是Token鉴权登录，当Token过期时，也会强制从房间中退出并收到此通知，此时应先更新Token，再重新进入房间。`
  }
}]