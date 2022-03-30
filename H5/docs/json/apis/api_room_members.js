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

// 房间成员管理
module.exports = [{
  method: '主调',
  interface: 'CRVideo_GetAllMembers',
  description: '获取房间内所有成员的信息',
  detail: {
    content: 'CRVideo_GetAllMembers()',
    returnVal: `返回包含多个成员信息 [CRVideo_MemberInfo](TypeDefinitions.html#CRVideo_MemberInfo) 的列表数组：[memberInfo1, memberInfo2, ...]`,
    callback: '无',
  }
}, {
  interface: 'CRVideo_GetMemberInfo',
  description: '获取房间内指定成员的信息',
  detail: {
    content: 'CRVideo_GetMemberInfo(UID)',
    returnVal: `返回房间内指定成员的信息 [CRVideo_MemberInfo](TypeDefinitions.html#CRVideo_MemberInfo)`,
    callback: '无',
    data: [commonUID]
  }
}, {
  interface: 'CRVideo_GetMemberNickName',
  description: '获取房间内指定成员的昵称',
  detail: {
    content: 'CRVideo_GetMemberNickName(UID)',
    returnVal: '返回该成员的昵称 (String)',
    callback: '无',
    data: [commonUID]
  }
}, {
  interface: 'CRVideo_IsUserInMeeting',
  description: '判断某个用户是否在房间中',
  detail: {
    content: 'CRVideo_IsUserInMeeting(UID)',
    returnVal: '在房间中则返回 true，否则返回 false (Bool)',
    callback: '无',
    data: [commonUID]
  }
}, {
  interface: 'CRVideo_SetNickName',
  description: '设置房间内某个成员的昵称',
  detail: {
    content: `CRVideo_SetNickName(UID,newName)${promiseCallback}`,
    returnVal: commonReturnPromise,
    data: [commonUID, {
      param: 'newName',
      type: 'String',
      necessary: '是',
      explain: '新昵称'
    }],
    resParam: [commonErrorCode, commonUserID, {
      param: 'newname',
      type: 'String',
      necessary: '是',
      explain: '新昵称'
    }],
    errParam: commonPromiseReject
  }
}, {
  method: '回调',
  interface: 'CRVideo_NotifyNickNameChanged',
  description: '通知，房间内某个成员昵称变化',
  detail: {
    content: 'CRVideo_NotifyNickNameChanged.callback = function(UID,oldName,newName){}',
    type: 'callback',
    callbackParam: [commonUID, {
      param: 'oldName',
      type: 'String',
      explain: '旧昵称'
    }, {
        param: 'newName',
        type: 'String',
        explain: '新昵称'
      }]
  }
}]