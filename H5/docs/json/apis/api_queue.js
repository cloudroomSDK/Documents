const {
  commonCookie,
  commonMeetInfoObj,
  commonMeetId,
  commonSDKErr,
  commonUID,
  commonQueId,
  commonQueUser
} = require('./commonPassiveKey');

// 队列管理
module.exports = [{
  method: '主调',
  interface: 'CRVideo_InitQueueDat',
  description: '初始化队列数据',
  detail: {
    content: 'CRVideo_InitQueueDat(cookie)',
    returnVal: '无',
    callback: '[CRVideo_InitQueueDatRslt.callback](#CRVideo_InitQueueDatRslt)',
    data: [commonCookie],
    attent: `
> 队列初始化成功后才可获取队列相关信息`
  }
}, {
  interface: 'CRVideo_GetAllQueueInfo',
  description: '查询所有队列的信息',
  detail: {
    content: 'CRVideo_GetAllQueueInfo()',
    returnVal: '所有队列的信息集合（数组），其中每个队列信息：[CRVideo_QueueInfo](TypeDefinitions.html#CRVideo_QueueInfo)',
    callback: '无',
  }
}, {
  interface: 'CRVideo_RefreshAllQueueStatus',
  description: '刷新所有队列的状态',
  detail: {
    content: 'CRVideo_RefreshAllQueueStatus(nolog)',
    returnVal: '无',
    callback: '无',
    data: [{
      param: 'nolog',
      type: 'Bool',
      necessary: '否',
      explain: '是否禁止SDK打印此接口的日志，缺省为空，不禁止。当需要频繁调用此接口时，可以传true，SDK将不会打印此接口的日志。',
    }],
    attent: `
> 刷新所有队列的状态会触发多次 [CRVideo_GetQueueStatusRslt.callback](#CRVideo_GetQueueStatusRslt) 回调，从该回调中获取每个队列的状态`
  }
}, {
  interface: 'CRVideo_GetQueueStatus',
  description: '获取某个队列的状态',
  detail: {
    content: 'CRVideo_GetQueueStatus(queID,cookie)',
    returnVal: '无',
    callback: '[CRVideo_GetQueueStatusRslt.callback](#CRVideo_GetQueueStatusRslt)',
    data: [commonQueId, commonCookie],
  }
}, {
  interface: 'CRVideo_GetQueuingInfo',
  description: '获取我的排队信息',
  detail: {
    content: 'CRVideo_GetQueuingInfo()',
    returnVal: '返回排队信息 [CRVideo_QueuingInfo](TypeDefinitions.html#CRVideo_QueuingInfo)',
    callback: '无',
  }
}, {
  interface: 'CRVideo_GetServingQueues',
  description: '获取我当前服务的所有队列',
  detail: {
    content: 'CRVideo_GetServingQueues()',
    returnVal: '返回我当前服务的队列ID列表，Array:  如 [1,2,3]',
    callback: '无',
  }
}, {
  interface: 'CRVideo_GetSessionInfo',
  description: '获取我的会话信息',
  detail: {
    content: 'CRVideo_GetSessionInfo()',
    returnVal: '返回会话信息 [CRVideo_SessionInfo](TypeDefinitions.html#CRVideo_SessionInfo)',
    callback: '无',
    attent: `
> 此接口用来在会话过程中掉线并重登后，获取上一次会话的信息以便重新进入之前的会话
> 此会话信息只会在初始化队列成功时更新一次，会话过程中不会更新`
  }
}, {
  interface: 'CRVideo_StartQueuing',
  description: '开始排队',
  detail: {
    content: 'CRVideo_StartQueuing(queID,usrExtDat,cookie)',
    returnVal: '无',
    callback: '[CRVideo_StartQueuingRslt.callback](#CRVideo_StartQueuingRslt)',
    data: [commonQueId, {
      param: 'usrExtDat',
      type: 'String',
      necessary: '否',
      explain: '用户排队携带的扩展数据, 座席在服务时可获得'
    }, commonCookie],
    attent: `
> 客户只允许同时在一个队列排队，需要更换队列排队时，应该先[停止排队](#CRVideo_StopQueuing)，再重新开始排队
> 客户开始排队时会触发排队信息变化的通知 [CRVideo_QueuingInfoChanged.callback](#CRVideo_QueuingInfoChanged)`
  }
}, {
  interface: 'CRVideo_StopQueuing',
  description: '停止排队',
  detail: {
    content: 'CRVideo_StopQueuing(cookie)',
    returnVal: '无',
    callback: '[CRVideo_StopQueuingRslt.callback](#CRVideo_StopQueuingRslt)',
    data: [commonCookie]
  }
}, {
  interface: 'CRVideo_StartService',
  description: '坐席开始服务某个队列',
  detail: {
    content: 'CRVideo_StartService(queID,priority,cookie)',
    returnVal: '无',
    callback: '[CRVideo_StartServiceRslt.callback](#CRVideo_StartServiceRslt)',
    data: [commonQueId, {
      param: 'priority',
      type: 'Number',
      necessary: '是',
      explain: '坐席优先级',
    }, commonCookie],
    attent: `
> 可以多次调用，开启对多个队列的服务。
> 开始服务成功后，如果没有开启免打扰，那么有客户在此队列排队时系统会自动分配客户：[CRVideo_AutoAssignUser.callback](#CRVideo_AutoAssignUser)；
> 如果开启免打扰，系统就不会自动分配客户，如果需要手动分配客户，可调用 [CRVideo_ReqAssignUser](#CRVideo_ReqAssignUser)。
> 坐席优先级描述：
> 1.座席优先级只在服务的队列内部有效；
> 2.客户优先分配给服务此队列优先级最高的，且空闲的座席；
> 3.优先级相同时，则分配给最先空闲的座席；
> 4.优先级高的座席变空闲时，不抢夺已分配的客户；`
  }
}, {
  interface: 'CRVideo_StopService',
  description: '坐席停止服务某个队列',
  detail: {
    content: 'CRVideo_StopService(queID,cookie)',
    returnVal: '无',
    callback: '[CRVideo_StopServiceRslt.callback](#CRVideo_StopServiceRslt)',
    data: [commonQueId, commonCookie]
  }
}, {
  interface: 'CRVideo_ReqAssignUser',
  description: '坐席请求分配一个客户',
  detail: {
    content: 'CRVideo_ReqAssignUser(cookie)',
    returnVal: '无',
    callback: '[CRVideo_ReqAssignUserRslt.callback](#CRVideo_ReqAssignUserRslt)',
    data: [commonCookie],
    attent: `
> 当坐席关闭免打扰时，系统将自动分配客户，无需调用此函数； 当开启免打扰时，系统不再自动分配客户，座席如需服务客户可调用此接口请求系统分配。`
  }
}, {
  interface: 'CRVideo_AcceptAssignUser',
  description: '坐席接受系统分配的客户',
  detail: {
    content: 'CRVideo_AcceptAssignUser(queID,UID,cookie)',
    returnVal: '无',
    callback: '[CRVideo_ResponseAssignUserRslt.callback](#CRVideo_ResponseAssignUserRslt)',
    data: [commonQueId, commonUID, commonCookie]
  }
}, {
  interface: 'CRVideo_RejectAssignUser',
  description: '坐席拒绝系统分配的客户',
  detail: {
    content: 'CRVideo_RejectAssignUser(queID,UID,cookie)',
    returnVal: '无',
    callback: '[CRVideo_ResponseAssignUserRslt.callback](#CRVideo_ResponseAssignUserRslt)',
    data: [commonQueId, commonUID, commonCookie]
  }
}, {
  method: '回调',
  interface: 'CRVideo_InitQueueDatRslt',
  description: '回调，队列初始化操作的结果',
  detail: {
    content: 'CRVideo_InitQueueDatRslt.callback = function(sdkErr,cookie){}',
    type: 'callback',
    callbackParam: [commonSDKErr, commonCookie]
  }
}, {
  interface: 'CRVideo_QueueStatusChanged',
  description: '通知，队列状态变化',
  detail: {
    content: 'CRVideo_QueueStatusChanged.callback = function(QueStatus){}',
    type: 'callback',
    callbackParam: [{
      param: 'QueStatus',
      type: 'Object',
      explain: '用户队列状态，详见：[CRVideo_QueStatus](TypeDefinitions.html#CRVideo_QueStatus)'
    }],
    attent: `
> 当用户服务某个队列，相关队列状态变化时，会收到此通知。`
  }
}, {
  interface: 'CRVideo_GetQueueStatusRslt',
  description: '回调，获取某个队列状态的结果',
  detail: {
    content: 'CRVideo_GetQueueStatusRslt.callback = function(QueStatus,sdkErr,cookie){}',
    type: 'callback',
    callbackParam: [{
      param: 'QueStatus',
      type: 'Object',
      explain: '用户队列状态，详见：[CRVideo_QueStatus](TypeDefinitions.html#CRVideo_QueStatus)'
    }, commonSDKErr],
  }
}, {
  interface: 'CRVideo_QueuingInfoChanged',
  description: '通知，排队信息变化（客户）',
  detail: {
    content: 'CRVideo_QueuingInfoChanged.callback = function(CRVideo_QueuingInfo){}',
    type: 'callback',
    callbackParam: [{
      param: 'CRVideo_QueuingInfo',
      type: 'Object',
      necessary: '是',
      explain: '排队信息 [CRVideo_QueuingInfo](TypeDefinitions.html#CRVideo_QueuingInfo)'
    }]
  }
}, {
  interface: 'CRVideo_StartQueuingRslt',
  description: '回调，开始排队的结果（客户）',
  detail: {
    content: 'CRVideo_StartQueuingRslt.callback = function(sdkErr,cookie){}',
    type: 'callback',
    callbackParam: [commonSDKErr, commonCookie]
  }
}, {
  interface: 'CRVideo_StopQueuingRslt',
  description: '回调，停止排队的结果（客户）',
  detail: {
    content: 'CRVideo_StopQueuingRslt.callback = function(sdkErr,cookie){}',
    type: 'callback',
    callbackParam: [commonSDKErr, commonCookie]
  }
}, {
  interface: 'CRVideo_StartServiceRslt',
  description: '回调，开始服务某个队列的结果（坐席）',
  detail: {
    content: 'CRVideo_StartServiceRslt.callback = function(queID,sdkErr,cookie){}',
    type: 'callback',
    callbackParam: [commonQueId, commonSDKErr, commonCookie]
  }
}, {
  interface: 'CRVideo_StopServiceRslt',
  description: '回调，停止服务某个队列的结果（坐席）',
  detail: {
    content: 'CRVideo_StopServiceRslt.callback = function(queID,sdkErr,cookie){}',
    type: 'callback',
    callbackParam: [commonQueId, commonSDKErr, commonCookie]
  }
}, {
  interface: 'CRVideo_ResponseAssignUserRslt',
  description: '回调，响应系统分配客户的结果（坐席）',
  detail: {
    content: 'CRVideo_ResponseAssignUserRslt.callback = function(sdkErr,cookie){}',
    type: 'callback',
    callbackParam: [commonSDKErr, commonCookie]
  }
}, {
  interface: 'CRVideo_AutoAssignUser',
  description: '通知，系统自动分配了客户',
  detail: {
    content: 'CRVideo_AutoAssignUser.callback = function(CRVideo_QueUser){}',
    type: 'callback',
    callbackParam: [commonQueUser],
    attent: `
> 如果想停止系统的自动分配，请调用 [CRVideo_SetDNDStatus](#CRVideo_SetDNDStatus) 设置为免打扰状态`
  }
}, {
  interface: 'CRVideo_ReqAssignUserRslt',
  description: '回调，请求系统分配客户的结果（坐席）',
  detail: {
    content: 'CRVideo_ReqAssignUserRslt.callback = function(sdkErr,CRVideo_QueUser,cookie){}',
    type: 'callback',
    callbackParam: [commonSDKErr, commonQueUser, commonCookie]
  }
}, {
  interface: 'CRVideo_CancelAssignUser',
  description: '通知，系统取消分配客户（坐席）',
  detail: {
    content: 'CRVideo_CancelAssignUser.callback = function(queID,UID){}',
    type: 'callback',
    callbackParam: [commonQueId, commonUID],
    attent: `
>系统通过接口 [CRVideo_AutoAssignUser](#CRVideo_AutoAssignUser) 给队列服务者自动推送客户（或队列服务者通过 [CRVideo_ReqAssignUser](#CRVideo_ReqAssignUser) 请求分配客户），收到系统分配的客户后，如果队列服务者30秒之内不接受 [(CRVideo_AcceptAssignUser)](#CRVideo_AcceptAssignUser)  也不拒绝 [(CRVideo_RejectAssignUser)](#CRVideo_RejectAssignUser) 推送的客户，系统将通过本接口取消分配，然后将客户分配给其他空闲的服务者。`
  }
}]