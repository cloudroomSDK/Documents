//公共字段
const commonInitiativeKey = require('./commonInitiativeKey');
const commonPassiveKey = require('./commonPassiveKey');

module.exports = [{
  id: 'basic',
  title: '基础函数',
  isMeetApi: false,
  data: {
    quote: [{
      interface: 'sdkver',
      description: '获取SDK版本号',
      returnValue: '版本号'
    }],
    initiative: [{
      interface: 'Init',
      description: '初始化',
      details: 'SDK初始化',
      gist: '注意: 程序开始时init，程序结束时uninit，整个程序的生命周期中只进行一次初始化和反初始化。',
      returnValue: '[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为0表示没有错误）',
      params: [{
        param: 'CRVideo_InitObj',
        type: 'object',
        explain: '初始化参数，详见[CRVideo_InitObj](TypeDefinitions.md#CRVideo_InitObj)'
      }]
    }, {
      interface: 'UnInit',
      description: '反初始化',
    }, {
      interface: 'SetServerAddr',
      description: '设置服务器地址',
      gist: '服务器地址默认使用https协议。开发可使用http协议，开发工具需要勾选不校验地址及在手机中打开调试模式。地址格式为http://sdk.cloudroom.com',
      params: [{
        param: 'addr',
        type: 'string',
        explain: '服务器地址，例如：sdk.cloudroom.com'
      }]
    }, {
      interface: 'EnableLog2File',
      description: '设置日志打印及上传',
      gist: '若缺省调用，默认打开日志上传和打印',
      params: [{
        param: 'uploading',
        type: 'Boolean',
        explain: '是否上报日志'
      }, {
        param: 'logDebug',
        type: 'Boolean',
        explain: '是否打印到控制台'
      }]
    }],
    passive: [],
  }
}, {
  id: 'login',
  title: '登录/注销',
  isMeetApi: false,
  data: {
    quote: [],
    initiative: [{
      interface: 'Login',
      description: '登录',
      gist: '登陆成功则回调 [LoginSuccess](#CRVideo_LoginSuccess) ,登陆失败则回调 [LoginFail](#CRVideo_LoginFail)',
      params: [{
        param: 'appID',
        type: 'string',
        explain: '云屋鉴权帐号。用于区分不同的项目，每个项目都有属于自己的唯一的appID，不同appID的项目完全独立，无法相互通信。appID请联系云屋销售获取，并开通相关套餐和功能权限。'
      }, {
        param: 'md5_appSecret',
        type: 'string',
        explain: 'appID对应的密码（md5加密传给sdk），可登录云屋管理后台修改。'
      }, {
        param: 'nickName',
        type: 'string',
        explain: '昵称'
      }, commonInitiativeKey.UID, {
        param: 'userAuthCode',
        type: 'string',
        explain: '用户验证信息，可缺省。为空代表不需要sdk验证（一般由业务方先对userID认证完了，再来使用云屋sdk)。如果不为空，云屋SDK服务器将连接提前配好的业务方服务器进行实时验证。'
      },
      commonInitiativeKey.cookie
      ]
    }, {
      interface: 'LoginByToken',
      description: 'Token登录',
      gist: '登陆成功则回调 [LoginSuccess](#CRVideo_LoginSuccess) ,登陆失败则回调 [LoginFail](#CRVideo_LoginFail)',
      params: [commonInitiativeKey.token, {
        param: 'nickName',
        type: 'string',
        explain: '昵称'
      }, commonInitiativeKey.UID, {
        param: 'userAuthCode',
        type: 'string',
        explain: '用户验证信息，可缺省。为空代表不需要sdk验证（一般由业务方先对userID认证完了，再来使用云屋sdk)。如果不为空，云屋SDK服务器将连接提前配好的业务方服务器进行实时验证。'
      },
      commonInitiativeKey.cookie
      ]
    }, {
      interface: 'UpdateToken',
      description: '更新Token',
      params: [commonInitiativeKey.token]
    }, {
      interface: 'Logout',
      description: '注销',
      details: '注销登录',
      gist: '退出程序时，必须注销本次登录，然后再进行SDK反初始化操作'
    }],
    passive: [{
      interface: 'LoginSuccess',
      description: '登陆成功',
      params: [commonPassiveKey.UID, commonPassiveKey.cookie]
    }, {
      interface: 'LoginFail',
      description: '登录失败',
      params: [commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: 'NotifyTokenWillExpire',
      description: 'Token即将失效的通知,失效前30秒通知'
    }, {
      interface: 'LineOff',
      description: '通知自己掉线',
      params: [commonPassiveKey.sdkErr]
    }]
  }
}, {
  id: 'queue',
  title: '队列管理',
  isMeetApi: false,
  data: {
    // quote: [],
    initiative: [{
      interface: 'InitQueueDat',
      description: '初始化队列',
      gist: '操作完成回调[InitQueueDatRslt](#CRVideo_InitQueueDatRslt),队列初始化成功后才可获取队列队列相关信息'
    }
      /* {
           interface: 'RefreshAllQueueStatus',
           description: '刷新所有队列状态'
         }, */
      , {
      interface: 'GetAllQueueInfo',
      description: '查询队列',
      returnValue: '所有队列信息（Array ----- [CRVideo_QueueInfo](TypeDefinitions.md#CRVideo_QueueInfo)）'
    }, {
      interface: 'GetQueueStatus',
      description: '获取队列状态',
      gist: '操作完成回调[GetQueueStatusRslt](#CRVideo_GetQueueStatusRslt)',
      params: [commonInitiativeKey.queId, commonInitiativeKey.cookie]
    }, {
      interface: 'GetClientStatus',
      description: '获取自己的排队、呼叫状态',
      gist: '操作完成回调[GetClientStatusRslt](#CRVideo_GetClientStatusRslt)',
      params: [commonInitiativeKey.cookie]
    }, {
      interface: 'GetServingStatus',
      description: '获取自己服务的队列、呼叫状态',
      gist: '操作完成回调[GetServingStatusRslt](#CRVideo_GetServingStatusRslt)',
      params: [commonInitiativeKey.cookie]
    }, {
      interface: 'StartQueuing',
      description: '客户开始排队',
      gist: '操作完成回调[StartQueuingRslt](#CRVideo_StartQueuingRslt)',
      params: [commonInitiativeKey.queId, commonInitiativeKey.usrExtDat, commonInitiativeKey.cookie]
    }, {
      interface: 'StopQueuing',
      description: '客户停止排队',
      gist: '操作完成回调[StopQueuingRslt](#CRVideo_StopQueuingRslt)',
      params: [commonInitiativeKey.queId, commonInitiativeKey.cookie]
    }, {
      interface: 'StartService',
      description: '坐席开始服务队列',
      gist: '操作完成回调[StartServiceRslt](#CRVideo_StartServiceRslt)',
      params: [commonInitiativeKey.queId, commonInitiativeKey.nofined, commonInitiativeKey.cookie]
    }, {
      interface: 'StopService',
      description: '坐席停止服务队列',
      gist: '操作完成回调[StopServiceRslt](#CRVideo_StopServiceRslt)',
      params: [commonInitiativeKey.queId, commonInitiativeKey.cookie]
    }, {
      interface: 'ReqAssignUser',
      description: '请求分配一个客户',
      gist: '当关闭免打扰时，系统将自动分配客户，无需调用此函数； 当开启免打扰时，系统不再自动分配客户，座席如需服务客户可使用此函数分配。\r接口调用回调函数参考[ReqAssignUserRslt](#CRVideo_ReqAssignUserRslt)'
    }, {
      interface: 'AcceptAssignUser',
      description: '接受分配的客户',
      params: [commonInitiativeKey.queId, commonInitiativeKey.UID]
    }, {
      interface: 'RejectAssignUser',
      description: '拒绝分配的客户',
      params: [commonInitiativeKey.queId, commonInitiativeKey.UID]
    }
    ],
    passive: [{
      interface: 'InitQueueDatRslt',
      description: '列初始化操作结果',
      params: [commonPassiveKey.sdkErr]
    }, {
      interface: 'GetQueueStatusRslt',
      description: '获取队列状态通知',
      params: [commonPassiveKey.sdkErr, commonPassiveKey.queStatus, commonPassiveKey.cookie]
    }, {
      interface: 'QueueStatusChanged',
      description: '队列状态变化通知',
      params: [commonPassiveKey.queStatus]
    }, {
      interface: 'QueuingInfoChanged',
      description: '排队信息变化通知',
      params: [commonPassiveKey.queuingInfo]
    }, {
      interface: 'GetClientStatusRslt',
      description: '获取自己的排队、呼叫状态的结果',
      params: [commonPassiveKey.sdkErr, {
        param: 'statusObj',
        type: 'object',
        explain: '客户状态，详见[CRVideo_ClientStatus](TypeDefinitions.md#CRVideo_ClientStatus)'
      }, commonPassiveKey.cookie]
    }, {
      interface: 'GetServingStatusRslt',
      description: '获取自己服务的队列、呼叫状态的结果',
      params: [commonPassiveKey.sdkErr, {
        param: 'statusObj',
        type: 'object',
        explain: '服务状态，详见[CRVideo_ServingStatus](TypeDefinitions.md#CRVideo_ServingStatus)'
      }, commonPassiveKey.cookie]
    }, {
      interface: 'StartQueuingRslt',
      description: '开始排队通知',
      params: [commonPassiveKey.sdkErr, {
        param: 'position',
        type: 'number',
        explain: '当前排队的位置'
      }, commonPassiveKey.cookie]
    }, {
      interface: 'StopQueuingRslt',
      description: '停止排队通知',
      params: [commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: 'StartServiceRslt',
      description: '开始服务队列通知',
      params: [commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: 'StopServiceRslt',
      description: '停止服务队列通知',
      params: [commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: 'ResponseAssignUserRslt',
      description: '响应分配客户操作结果',
      params: [commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: 'AutoAssignUser',
      description: '自动分配用户通知',
      params: [commonPassiveKey.queUser]
    }, {
      interface: 'ReqAssignUserRslt',
      description: '请求分配用户结果',
      params: [commonPassiveKey.sdkErr, commonPassiveKey.queUser, commonPassiveKey.cookie]
    }, {
      interface: 'CancelAssignUser',
      description: '系统取消之前分配的的客户',
      gist: '系统通过接口[AutoAssignUser](#CRVideo_AutoAssignUser)给队列服务者自动推送客户（或队列服务者通过[ReqAssignUser](#CRVideo_ReqAssignUser)请求分配客户），收到系统分配的客户后，如果队列服务者30秒之内不接受[AcceptAssignUser](#CRVideo_AcceptAssignUser)也不拒绝[RejectAssignUser](#CRVideo_RejectAssignUser)推送的客户，系统将通过本接口取消分配，然后将客户分配给其他空闲的服务者。',
      params: [commonPassiveKey.queId, commonPassiveKey.UID]
    }]
  }
}, {
  id: 'call',
  title: '呼叫',
  isMeetApi: false,
  data: {
    initiative: [{
      interface: "Call",
      description: "发起呼叫",
      returnValue: '返回本次呼叫标识码（呼叫ID）',
      gist: '操作成功则回调[CallSuccess](#CRVideo_CallSuccess),失败则回调[CallFail](#CRVideo_CallFail)。 呼叫时，对方收到[NotifyCallIn](#CRVideo_NotifyCallIn)通知，如果对方迟迟不响应，30秒后系统自动结束呼叫',
      params: [{
        param: 'calledUserID',
        type: 'string',
        explain: '被叫用户的UID'
      }, commonInitiativeKey.meetInfoObj, commonInitiativeKey.usrExtDat, commonInitiativeKey.cookie]
    }, {
      interface: "AcceptCall",
      description: "接受对方发起的呼叫",
      gist: '操作成功则回调[AcceptCallSuccess](#CRVideo_AcceptCallSuccess)，失败则回调[AcceptCallFail](#CRVideo_AcceptCallFail)',
      params: [commonInitiativeKey.callID, commonInitiativeKey.meetInfoObj, commonInitiativeKey.usrExtDat, commonInitiativeKey.cookie]
    }, {
      interface: "RejectCall",
      description: "拒绝对方发起的呼叫",
      params: [commonInitiativeKey.callID, commonInitiativeKey.usrExtDat, commonInitiativeKey.cookie]
    }, {
      interface: "HungupCall",
      description: "挂断呼叫",
      gist: '操作成功则回调[HungupCallSuccess](#CRVideo_HungupCallSuccess)，失败则回调[HungupCallFail](#CRVideo_HungupCallFail)',
      params: [commonInitiativeKey.callID, commonInitiativeKey.usrExtDat, commonInitiativeKey.cookie]
    }, {
      interface: "SetDNDStatus",
      description: "设置免打扰状态",
      gist: '操作成功则回调[SetDNDStatusSuccess](#CRVideo_SetDNDStatusSuccess)，失败则回调[SetDNDStatusFail](#CRVideo_SetDNDStatusFail)。如果是使用到了SDK的队列功能，则入会后需调用此接口，设置自己的为免打扰状态，防止系统再次推送自己',
      params: [{
        param: 'DNDStatus',
        type: 'number',
        explain: '0代表关闭免打扰， 其它值代表开启免打扰，含义自由定义'
      }, commonInitiativeKey.cookie]
    }, {
      interface: "GetUserStatus",
      description: "获取项目下所有用户在线状态",
      gist: '操作成功则回调[GetUserStatusSuccess](#CRVideo_GetUserStatusSuccess)，失败则回调[GetUserStatusFail](#CRVideo_GetUserStatusFail)',
      params: [commonInitiativeKey.cookie]
    }
      /* , {
            interface: "GetOneUserStatus",
            description: "获取项目下指定用户的在线状态"
          } */
      , {
      interface: "StartUserStatusNotify",
      description: "开启用户的状态推送",
      gist: '操作完成则回调[StartUserStatusNotifyRslt](#CRVideo_StartUserStatusNotifyRslt)。项目下所有用户状态有变化时包括呼叫房间状态、免打扰状态），都会收到通知开启后，用户量越大消息量越大，所以请按需开启在[StartUserStatusNotify](#CRVideo_StartUserStatusNotify)前，应该先通过[GetUserStatus](#CRVideo_GetUserStatus)获取所有用户状态',
      params: [commonInitiativeKey.cookie]
    }, {
      interface: "StopUserStatusNotify",
      description: "关闭用户的状态推送",
      gist: '操作完成则回调[StopUserStatusNotifyRslt](#CRVideo_StopUserStatusNotifyRslt)',
      params: [commonInitiativeKey.cookie]
    }
    ],
    passive: [{
      interface: "CallSuccess",
      description: "发起呼叫操作成功",
      params: [commonPassiveKey.callID, commonPassiveKey.cookie]
    }, {
      interface: "CallFail",
      description: "发起呼叫操作失败",
      params: [commonPassiveKey.callID, commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: "NotifyCallIn",
      description: "通知有人呼入",
      gist: '需要被呼叫者调用接收呼叫[AcceptCall](#CRVideo_AcceptCall)或者拒绝呼叫[RejectCall](#CRVideo_RejectCall)。若30秒没有响应，系统自动拒绝当次响应',
      params: [commonPassiveKey.callID, commonPassiveKey.meetInfoObj, {
        param: 'callerID',
        type: 'string',
        explain: '呼叫人员的UID'
      }, commonPassiveKey.usrExtDat]
    }, {
      interface: "AcceptCallSuccess",
      description: "接受他人呼叫操作成功",
      gist: '被呼叫者可以调用[EnterMeeting2](#CRVideo_EnterMeeting2)进入会议',
      params: [commonPassiveKey.callID, commonPassiveKey.cookie]
    }, {
      interface: "AcceptCallFail",
      description: "接受他人呼叫操作失败",
      params: [commonPassiveKey.callID, commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: "RejectCallSuccess",
      description: "拒绝他人的呼叫成功",
      params: [commonPassiveKey.callID, commonPassiveKey.cookie]
    }, {
      interface: "RejectCallFail",
      description: "拒绝他人的呼叫失败",
      params: [commonPassiveKey.callID, commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: "HungupCallSuccess",
      description: "挂断他人的呼叫成功",
      params: [commonPassiveKey.callID, commonPassiveKey.cookie]
    }, {
      interface: "HungupCallFail",
      description: "挂断他人的呼叫失败",
      params: [commonPassiveKey.callID, commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: "NotifyCallAccepted",
      description: "通知呼叫被对方接受",
      params: [commonPassiveKey.callID, commonPassiveKey.meetInfoObj, commonPassiveKey.usrExtDat]
    }, {
      interface: "NotifyCallRejected",
      description: "通知呼叫被对方拒绝",
      params: [commonPassiveKey.callID, commonPassiveKey.sdkErr, commonPassiveKey.usrExtDat]
    }, {
      interface: "NotifyCallHungup",
      description: "通知呼叫被对方挂断",
      params: [commonPassiveKey.callID, commonPassiveKey.usrExtDat]
    }, {
      interface: "SetDNDStatusSuccess",
      description: "设置免打扰状态操作成功响应",
      params: [commonPassiveKey.cookie]
    }, {
      interface: "SetDNDStatusFail",
      description: "设置免打扰状态操作失败响应",
      params: [commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: "GetUserStatusSuccess",
      description: "获取所有用户在线状态成功响应",
      params: [{
        param: 'userStatus',
        type: 'Array---[CRVideo_UserStatus](TypeDefinitions.md#CRVideo_UserStatus)',
        explain: '用户在线状态信息列表'
      }, commonPassiveKey.cookie]
    }, {
      interface: "GetUserStatusFail",
      description: "获取所有用户在线状态失败响应",
      params: [commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: "StartUserStatusNotifyRslt",
      description: "开启用户状态推送结果",
      params: [commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: "StopUserStatusNotifyRslt",
      description: "关闭用户状态推送结果",
      params: [commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: "NotifyUserStatus",
      description: "用户状态变化通知",
      params: [{
        param: 'userStatus',
        type: '[CRVideo_UserStatus](TypeDefinitions.md#CRVideo_UserStatus)',
        explain: '用户状态信息'
      }, commonPassiveKey.cookie]
    }]
  }
}, {
  id: 'invite',
  title: '邀请',
  isMeetApi: false,
  data: {
    initiative: [{
      interface: "Invite",
      description: "发送邀请",
      returnValue: '返回inviteID(每个邀请对应的唯一ID) (string)',
      gist: '操作成功则回调[InviteSuccess](#CRVideo_InviteSuccess),失败则回调[InviteFail](#CRVideo_InviteFail)。 邀请时，对方收到[NotifyInviteIn](#CRVideo_NotifyInviteIn)通知，如果对方迟迟不响应，30秒后系统自动结束本次邀请',
      params: [commonInitiativeKey.invitedUserID, commonInitiativeKey.usrExtDat, commonInitiativeKey.cookie]
    }, {
      interface: "AcceptInvite",
      description: "接受对方发送的邀请",
      gist: '操作成功则回调[AcceptInviteSuccess](#CRVideo_AcceptInviteSuccess)，失败则回调[AcceptInviteFail](#CRVideo_AcceptInviteFail)',
      params: [commonInitiativeKey.inviteID, commonInitiativeKey.usrExtDat, commonInitiativeKey.cookie]
    }, {
      interface: "RejectInvite",
      description: "拒绝对方发送的邀请",
      gist: '操作成功则回调[RejectInviteSuccess](#CRVideo_RejectInviteSuccess)，失败则回调[RejectInviteFail](#CRVideo_RejectInviteFail)',
      params: [commonInitiativeKey.inviteID, commonInitiativeKey.usrExtDat, commonInitiativeKey.cookie]
    }, {
      interface: "CancelInvite",
      description: "取消自己发送的邀请",
      gist: '操作成功则回调[CancelInviteSuccess](#CRVideo_CancelInviteSuccess)，失败则回调[CancelInviteFail](#CRVideo_CancelInviteFail)',
      params: [commonInitiativeKey.inviteID, commonInitiativeKey.usrExtDat, commonInitiativeKey.cookie]
    }],
    passive: [{
      interface: "InviteSuccess",
      description: "发送邀请成功",
      params: [commonPassiveKey.inviteID, commonPassiveKey.cookie]
    }, {
      interface: "InviteFail",
      description: "发送邀请失败",
      params: [commonPassiveKey.inviteID, commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: "CancelInviteSuccess",
      description: "取消自己发送的邀请成功",
      params: [commonPassiveKey.inviteID, commonPassiveKey.cookie]
    }, {
      interface: "CancelInviteFail",
      description: "取消自己发送的邀请失败",
      params: [commonPassiveKey.inviteID, commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: "AcceptInviteSuccess",
      description: "接受对方发送的邀请成功",
      params: [commonPassiveKey.inviteID, commonPassiveKey.cookie]
    }, {
      interface: "AcceptInviteFail",
      description: "接受对方发送的邀请失败",
      params: [commonPassiveKey.inviteID, commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: "RejectInviteSuccess",
      description: "拒绝对方发送的邀请成功",
      params: [commonPassiveKey.inviteID, commonPassiveKey.cookie]
    }, {
      interface: "RejectInviteFail",
      description: "拒绝对方发送的邀请失败",
      params: [commonPassiveKey.inviteID, commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: "NotifyInviteIn",
      description: "通知有人邀请",
      params: [commonPassiveKey.inviteID, commonPassiveKey.invitedUserID, commonPassiveKey.usrExtDat]
    }, {
      interface: "NotifyInviteAccepted",
      description: "通知邀请被对方接受",
      params: [commonPassiveKey.inviteID, commonPassiveKey.usrExtDat]
    }, {
      interface: "NotifyInviteRejected",
      description: "通知邀请被对方拒绝",
      params: [commonPassiveKey.inviteID, {
        param: 'reason',
        type: 'number',
        explain: '邀请被拒绝原因，定义见[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)'
      }, commonPassiveKey.usrExtDat]
    }, {
      interface: "NotifyInviteCanceled",
      description: "通知有邀请被取消",
      params: [commonPassiveKey.inviteID, {
        param: 'reason',
        type: 'number',
        explain: '邀请被取消原因，定义见[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)'
      }, commonPassiveKey.usrExtDat]
    }]
  }
}, {
  id: 'cmd',
  title: '透明通道',
  isMeetApi: false,
  data: {
    initiative: [{
      interface: "SendCmd",
      description: "发送小块数据",
      gist: '一次性发送不会有进度通知,发送结果事件[SendCmdRlst](#CRVideo_SendCmdRlst)',
      returnValue: '分配的任务ID(string)',
      params: [{
        param: 'targetUID',
        type: 'string',
        explain: '目标用户的UID'
      }, {
        param: 'data',
        type: 'string',
        explain: '发送的数据'
      }]
    }, {
      interface: "SendBuffer",
      description: "发送大块数据",
      details: "发送大块数据（分块发送）",
      gist: '进度通知事件[SendProgress](#CRVideo_SendProgress)，发送结果事件[SendBufferRslt](#CRVideo_SendBufferRslt)',
      returnValue: '分配的任务ID(string)',
      params: [{
        param: 'targetUID',
        type: 'string',
        explain: '目标用户的UID'
      }, {
        param: 'data',
        type: 'string',
        explain: '发送的数据'
      }, commonInitiativeKey.cookie]
    },
      /* {
            interface: "SendFile",
            description: "发送文件（分块发送 ）"
          }, {
            interface: "CancelSend",
            description: "取消数据发送"
          }, */
    ],
    passive: [{
      interface: "SendCmdRlst",
      description: "通知发送小块数据结果",
      params: [commonPassiveKey.taskID, commonPassiveKey.sdkErr]
    }, {
      interface: "SendBufferRslt",
      description: "通知发送大块数据结果",
      params: [commonPassiveKey.taskID, commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    },
    /*{
         interface: "SendFileRlst",
         description: "发送文件"
       },*/
    {
      interface: "SendProgress",
      description: "通知发送数据进度",
      params: [commonPassiveKey.taskID, {
        param: 'sendedLen',
        type: 'number',
        explain: '已发送的数据长度'
      }, {
        param: 'totalLen',
        type: 'number',
        explain: '需要发送的总长度'
      }, commonPassiveKey.cookie]

    },
    /* {
         interface: "CancelSendRlst",
         description: "取消发送响应"
       } , */
    {
      interface: "NotifyCmdData",
      description: "通知收到小块数据",
      params: [commonPassiveKey.sourceUID, commonPassiveKey.data]
    }, {
      interface: "NotifyBufferData",
      description: "通知收到大块数据",
      params: [commonPassiveKey.sourceUID, commonPassiveKey.data]
    },
      /* {
            interface: "NotifyFileData",
            description: "通知收到文件数据"
          }, {
            interface: "NotifyCancelSend",
            description: "通知取消发送文件数据"
          }*/
    ]
  }
}, {
  id: 'room',
  title: '房间管理',
  isMeetApi: false,
  data: {
    quote: [],
    initiative: [{
      interface: 'CreateMeeting',
      description: '创建房间',
      gist: '操作成功则回调[CreateMeetingSuccess](#CRVideo_CreateMeetingSuccess)，失败则回调[CreateMeetingFail](#CRVideo_CreateMeetingFail)',
      params: [commonInitiativeKey.cookie]
    }, {
      interface: 'DestroyMeeting',
      description: '销毁房间',
      gist: '回调函数[DestroyMeetingRslt](#CRVideo_DestroyMeetingRslt)，调用此接口结束房间时，其他会话用户会收到[MeetingStopped](#CRVideo_MeetingStopped)',
      params: [commonPassiveKey.meetId, commonPassiveKey.cookie]
    }],
    passive: [{
      method: '回调',
      interface: 'CreateMeetingSuccess',
      description: '通知创建房间成功',
      params: [commonPassiveKey.meetInfoObj, commonPassiveKey.cookie]
    }, {
      interface: 'CreateMeetingFail',
      description: '通知创建房间失败',
      params: [commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: 'DestroyMeetingRslt',
      description: '通知销毁房间的结果',
      params: [commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }]
  }
}, {
  id: 'inoutroom',
  title: '进出房间',
  isMeetApi: true,
  data: {
    initiative: [{
      interface: 'EnterMeeting2',
      description: '进入房间',
      gist: '操作完成则回调[EnterMeetingRslt](#CRVideo_EnterMeetingRslt)',
      params: [commonInitiativeKey.meetId, commonInitiativeKey.UID, commonInitiativeKey.nickName, commonInitiativeKey.cookie]
    }, {
      interface: 'ExitMeeting',
      description: '离开房间'
    }],
    passive: [{
      interface: 'EnterMeetingRslt',
      description: '进入房间结果',
      params: [commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: 'UserEnterMeeting',
      description: '有人进入房间通知',
      params: [commonPassiveKey.UID]
    }, {
      interface: 'UserLeftMeeting',
      description: '有人离开房间通知',
      params: [commonPassiveKey.UID]
    }, {
      interface: 'MeetingDropped',
      description: '通知从房间里掉线了'
    }, {
      interface: 'MeetingStopped',
      description: '通知房间已被结束'
    }]
  }
}, {
  id: 'room_base',
  title: '房间内基础消息',
  isMeetApi: true,
  data: {
    initiative: [{
      interface: 'SwitchToPage',
      description: '功能区切换',
      params: [{
        param: 'mainPage',
        type: 'number',
        explain: '功能页类型'
      }, {
        param: 'subPageID',
        type: 'string',
        explain: '子页面标识（如创建白板时返回的boardID）'
      }],
      returnValue: '无'
    }, {
      interface: 'GetCurrentMainPage',
      description: '获取当前主功能区',
      returnValue: '功能页(number)'
    }, {
      interface: 'GetCurrentSubPage',
      description: '获取当前子页面',
      returnValue: '返回当前的子页面标识(string)，如白板的boardID。没有子页面标识的功能区，则返回 0.0'
    }],
    passive: [{
      interface: 'NotifySwitchToPage',
      description: '会话内主功能页切换通知',
      params: [{
        param: 'mainPage',
        type: 'number',
        explain: '功能类型'
      }, {
        param: 'subPageID',
        type: 'string',
        explain: '子页面标识'
      }]
    }]
  }
}, {
  id: 'member',
  title: '房间和成员管理',
  isMeetApi: true,
  data: {
    initiative: [{
      interface: 'GetAllMembers',
      description: '获取房间所有成员信息列表',
      returnValue: '返回含多个成员信息（Array ------[CRVideo_MemberInfo](TypeDefinitions.md#CRVideo_MemberInfo)）'
    }, {
      interface: 'GetMemberInfo',
      description: '获取单个成员信息',
      returnValue: '返回成员信息（[CRVideo_MemberInfo](TypeDefinitions.md#CRVideo_MemberInfo)）',
      params: [commonInitiativeKey.UID]
    }, {
      interface: 'SendMeetingCustomMsg',
      description: '房间内发送广播消息',
      gist: '需要进入会议后才能调用',
      params: [{
        param: 'msg',
        type: 'string',
        explain: '发送的文本'
      }, commonInitiativeKey.nofined, commonInitiativeKey.cookie]
    }],
    passive: [{
      interface: 'NotifyNickNameChanged',
      description: 'SDK通知某用户改变了昵称',
      gist: '改昵称的用户自身不会接收到此通知',
      params: [commonPassiveKey.UID, {
        param: 'oldname',
        type: 'string',
        explain: '改变之前的昵称'
      }, {
        param: 'newname',
        type: 'string',
        explain: '改变之后的昵称'
      }]
    }, {
      interface: 'SendMeetingCustomMsgRslt',
      description: '通知发送房间内自定义广播消息结果',
      params: [commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: 'NotifyMeetingCustomMsg',
      description: '通知接收到房间内用户自定义广播',
      params: [commonPassiveKey.UID, {
        param: 'jsonDat',
        type: 'string',
        explain: '广播内容'
      }]
    }]
  }
}, {
  id: 'attributeManagement',
  title: '房间、用户属性',
  isMeetApi: true,
  data: {
    initiative: [{
      interface: 'GetMeetingAttrs',
      description: '获取房间部份属性',
      returnValue: '无',
      gist: '获取成功则回调 [GetMeetingAttrsSuccess](#CRVideo_GetMeetingAttrsSuccess) ,获取失败则回调 [GetMeetingAttrsFail](#CRVideo_GetMeetingAttrsFail)',
      params: [{
        param: 'keys',
        type: 'array',
        explain: '需要查询的房间属性key，如：["key1", "key2"]'
      }, commonInitiativeKey.cookie]
    }, {
      interface: 'GetMeetingAllAttrs',
      description: '获取房间所有属性',
      returnValue: '无',
      gist: '获取成功则回调 [GetMeetingAllAttrsSuccess](#CRVideo_GetMeetingAllAttrsSuccess) ,获取失败则回调 [GetMeetingAllAttrsFail](#CRVideo_GetMeetingAllAttrsFail)',
      params: [commonInitiativeKey.cookie]
    }, {
      interface: 'SetMeetingAttrs',
      description: '重置房间属性集',
      returnValue: '无',
      gist: '操作完成则回调[SetMeetingAttrsRslt](#CRVideo_SetMeetingAttrsRslt)',
      params: [commonInitiativeKey.meetingAttrs, commonInitiativeKey.MeetingAttrOptions, commonInitiativeKey.cookie]
    }, {
      interface: 'AddOrUpdateMeetingAttrs',
      description: '增加或者更新房间属性',
      returnValue: '无',
      gist: '操作完成则回调[AddOrUpdateMeetingAttrsRslt](#CRVideo_AddOrUpdateMeetingAttrsRslt)',
      params: [commonInitiativeKey.meetingAttrs, commonInitiativeKey.MeetingAttrOptions, commonInitiativeKey.cookie]
    }, {
      interface: 'DelMeetingAttrs',
      description: '删除房间属性',
      returnValue: '无',
      gist: '操作完成则回调[DelMeetingAttrsRslt](#CRVideo_DelMeetingAttrsRslt)',
      params: [{
        param: 'keys',
        type: 'array',
        explain: '需要删除的房间属性key，如：["key1", "key2"]'
      }, commonInitiativeKey.MeetingAttrOptions, commonInitiativeKey.cookie]
    }, {
      interface: 'ClearMeetingAttrs',
      description: '清除房间所有属性',
      returnValue: '无',
      gist: '操作完成则回调[ClearMeetingAttrsRslt](#CRVideo_ClearMeetingAttrsRslt)',
      params: [commonInitiativeKey.MeetingAttrOptions, commonInitiativeKey.cookie]
    }, {
      interface: 'GetUserAttrs',
      description: '获取指定用户的指定属性',
      returnValue: '无',
      gist: '获取成功则回调 [GetUserAttrsSuccess](#CRVideo_GetUserAttrsSuccess) ,获取失败则回调 [GetUserAttrsFail](#CRVideo_GetUserAttrsFail)',
      params: [{
        param: 'uids',
        type: 'array',
        explain: '目标用户id列表，一次最多包含50个用， 如：["uid1","uid2"]'
      }, {
        param: 'keys',
        type: 'array',
        explain: '将要获取的用户属性key列表（空串代表获取全部），如：["key1","key2"]'
      }, commonInitiativeKey.cookie]
    }, {
      interface: 'SetUserAttrs',
      description: '重置用户属性',
      returnValue: '无',
      gist: '操作完成则回调[SetUserAttrsRslt](#CRVideo_SetUserAttrsRslt)',
      params: [commonInitiativeKey.UID, commonInitiativeKey.userAttrs, commonInitiativeKey.MeetingAttrOptions, commonInitiativeKey.cookie]
    }, {
      interface: 'AddOrUpdateUserAttrs',
      description: '增加或更新用户属性',
      returnValue: '无',
      gist: '操作完成则回调[AddOrUpdateUserAttrsRslt](#CRVideo_AddOrUpdateUserAttrsRslt)',
      params: [commonInitiativeKey.UID, commonInitiativeKey.userAttrs, commonInitiativeKey.MeetingAttrOptions, commonInitiativeKey.cookie]
    }, {
      interface: 'DelUserAttrs',
      description: '删除用户的特定属性',
      returnValue: '无',
      gist: '操作完成则回调[DelUserAttrsRslt](#CRVideo_DelUserAttrsRslt)',
      params: [commonInitiativeKey.UID, {
        param: 'keys',
        type: 'array',
        explain: '需要删除的用户属性key列表，json格式，如：["key1","key2"]'
      }, commonInitiativeKey.MeetingAttrOptions, commonInitiativeKey.cookie]
    }, {
      interface: 'ClearUserAttrs',
      description: '清除特定用户的所有属性',
      returnValue: '无',
      gist: '操作完成则回调[ClearUserAttrsRslt](#CRVideo_ClearUserAttrsRslt)',
      params: [{
        param: 'uids',
        type: 'string | array',
        explain: '目标用户UID或UID数组'
      }, commonInitiativeKey.MeetingAttrOptions, commonInitiativeKey.cookie]
    }, {
      interface: 'ClearAllUserAttrs',
      description: '清除所有用户的所有属性',
      returnValue: '无',
      gist: '操作完成则回调[ClearAllUserAttrsRslt](#CRVideo_ClearAllUserAttrsRslt)',
      params: [commonInitiativeKey.MeetingAttrOptions, commonInitiativeKey.cookie]
    }],
    passive: [{
      interface: 'GetMeetingAttrsSuccess',
      description: '成功获取到房间属性',
      params: [commonPassiveKey.MeetingAttrObjs, commonPassiveKey.cookie]
    }, {
      interface: 'GetMeetingAttrsFail',
      description: '获取房间指定属性失败',
      params: [commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: 'GetMeetingAllAttrsSuccess',
      description: '成功获取到房间所有属性',
      params: [commonPassiveKey.MeetingAttrObjs, commonPassiveKey.cookie]
    }, {
      interface: 'GetMeetingAllAttrsFail',
      description: '获取房间属性失败',
      params: [commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: 'SetMeetingAttrsRslt',
      description: '设置用户属性结果',
      params: [commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: 'AddOrUpdateMeetingAttrsRslt',
      description: '增加或更新房间属性结果',
      params: [commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: 'DelMeetingAttrsRslt',
      description: '删除房间属性结果',
      params: [commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: 'ClearMeetingAttrsRslt',
      description: '清除房间属性结果',
      params: [commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: 'GetUserAttrsSuccess',
      description: '获取房间内用户属性结果',
      params: [commonPassiveKey.UserAttrObjs, commonPassiveKey.cookie]
    }, {
      interface: 'GetUserAttrsFail',
      description: '获取房间内用户属性失败',
      params: [commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: 'SetUserAttrsRslt',
      description: '设置用户属性结果',
      params: [commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: 'AddOrUpdateUserAttrsRslt',
      description: '增加或者更新用户属性结果',
      params: [commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: 'DelUserAttrsRslt',
      description: '删除特定用户属性结果',
      params: [commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: 'ClearUserAttrsRslt',
      description: '清除特定用户属性结果',
      params: [commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: 'ClearAllUserAttrsRslt',
      description: '清除所有用户属性结果',
      params: [commonPassiveKey.sdkErr, commonPassiveKey.cookie]
    }, {
      interface: 'NotifyMeetingAttrsChanged',
      description: '通知房间属性发生改变',
      params: [{
        param: 'adds',
        type: 'object',
        explain: '增加房间属性集，结构体请参见[CRVideo_MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions)'
      }, {
        param: 'updates',
        type: 'object',
        explain: '变化的房间属性集，结构体请参见[CRVideo_MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions)'
      }, {
        param: 'delKeys',
        type: 'array',
        explain: '被删除的房间属性的数组列表，如:["key1", "key2"]'
      }]
    }, {
      interface: 'NotifyUserAttrsChanged',
      description: '通知用户属性发生改变',
      params: [commonPassiveKey.UID, {
        param: 'adds',
        type: 'object',
        explain: '增加用户属性集，json结构体请参见[CRVideo_MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions)'
      }, {
        param: 'updates',
        type: 'object',
        explain: '变化的用户属性集，json结构体请参见[CRVideo_MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions)'
      }, {
        param: 'delKeys',
        type: 'array',
        explain: '被删除的用户属性列表，json格式，如:["key1", "key2"]'
      }]
    }]
  }
}, {
  id: 'audio',
  title: '音频管理',
  isMeetApi: true,
  data: {
    initiative: [{
      interface: 'OpenMic',
      description: '打开麦克风',
      gist: '打开自已的麦克风时，先会进入到AOPENING状态，等服务器处理后才会进入AOPEN状态，此时说话才能被采集到',
      params: [commonInitiativeKey.UID]
    }, {
      interface: 'CloseMic',
      description: '关闭麦克风',
      gist: '关麦操作是立即生效的，本地会立即停止采集',
      params: [commonInitiativeKey.UID]
    }, {
      interface: 'SetAllAudioClose',
      description: '关闭所有人的麦克风'
    }],
    passive: [{
      interface: "AudioStatusChanged",
      description: "通知用户音频状态变化",
      params: [commonInitiativeKey.UID, {
        param: 'oldStatus',
        type: 'number',
        explain: '旧状态,参考[麦克风状态](Constant.md#CRVideo_ASTATUS)'
      }, {
        param: 'newStatus',
        type: 'number',
        explain: '新状态,参考[麦克风状态](Constant.md#CRVideo_ASTATUS)'
      }]
    }, {
      interface: "NotifyAllAudioClose",
      description: "通知所有人的麦克风被关闭了",
      params: [commonInitiativeKey.UID]
    }, {
      interface: "OpenMicFailRslt",
      description: "通知麦克风打开失败",
      gist: '权限不足触发，用户可以跳转到权限设置手动打开',
    }]
  }
}, {
  id: 'video',
  title: '视频管理',
  isMeetApi: true,
  data: {
    initiative: [{
      interface: 'OpenVideo',
      description: '打开摄像头',
      params: [commonInitiativeKey.UID]
    }, {
      interface: 'CloseVideo',
      description: '关闭摄像头',
      params: [commonInitiativeKey.UID]
    }, {
      interface: 'SetDefaultVideo',
      description: '切换摄像头',
      params: [commonInitiativeKey.UID]
    }, {
      interface: 'GetDefaultVideo',
      description: '获取默认摄像头信息',
      returnValue: '返回摄像头Id(number)',
      params: [commonInitiativeKey.UID]
    }, {
      interface: 'GetWatchableVideos',
      description: '房间内可观看摄像头列表',
      returnValue: '对象VideoIDArray（Array ------ [CRVideo_VideoIDsObj](TypeDefinitions.md#CRVideo_VideoIDsObj)）',
      params: [{
        param: 'UID',
        type: 'string',
        explain: '用户的UID，非必传。不传则返回会议内所有成员的可观看摄像头列表'
      }]
    }, {
      interface: 'GetAllVideoInfo',
      description: '获取摄像头设备列表',
      details: '获取用户的所有摄像头信息(包含未开启的摄像头)',
      returnValue: '用户的所有摄像头信息列表，数据类型为: [CRVideo_VideoInfosObj](TypeDefinitions.md#CRVideo_VideoInfosObj)',
      params: [{
        param: 'UID',
        type: 'string',
        explain: '用户的UID'
      }]
    }],
    passive: [{
      interface: "VideoStatusChanged",
      description: "通知用户视频状态变化",
      params: [commonInitiativeKey.UID, {
        param: 'oldStatus',
        type: 'number',
        explain: '旧状态,参考[摄像头状态](Constant.md#CRVideo_VSTATUS)'
      }, {
        param: 'newStatus',
        type: 'number',
        explain: '新状态,参考[摄像头状态](Constant.md#CRVideo_VSTATUS)'
      }]
    }, {
      interface: "OpenVideoFailRslt",
      description: "通知摄像头打开失败",
      gist: '权限不足触发，用户可以跳转到权限设置手动打开',
    }, {
      interface: "VideoDevChanged",
      description: "通知用户的视频设备有变化",
      params: [commonInitiativeKey.UID, {
        param: 'openCamIds',
        type: 'array',
        explain: '该用户现在可观看的摄像头列表'
      }]
    }]
  }
}, {
  id: 'media',
  title: '屏幕共享/影音共享',
  isMeetApi: true,
  /*  NotifyMediaStart
   NotifyMediaPause
   NotifyMediaStop */
  data: {
    initiative: [{
      interface: 'GetScreenInfo',
      description: '查询当前屏幕共享状态',
      returnValue: '如果会议内存在屏幕共享则返回共享端的UID，如果没有则返回null'
    }, {
      interface: 'GetMediaInfo',
      description: '查询当前影音共享状态',
      gist: '查询结果在回调事件[GetMediaInfoRslt](#CRVideo_GetMediaInfoRslt)'
    }],
    passive: [{
      interface: "GetMediaInfoRslt",
      description: "通知查询影音共享状态的结果",
      params: [commonPassiveKey.sdkErr, {
        param: 'CRVideo_MediaInfoObj',
        type: 'object',
        explain: '影音文件信息（[CRVideo_MediaInfoObj](TypeDefinitions.md#CRVideo_MediaInfoObj)）'
      }]
    }, {
      interface: "NotifyScreenShareStarted",
      description: "收到他人开启了屏幕共享的通知",
      gist: '收到该通知即可渲染[媒体拉流组件](#CRVideoPlayer)',
      params: [{
        param: 'UID',
        type: 'string',
        explain: '开启屏幕共享用户的UID'
      }]
    }, {
      interface: "NotifyScreenShareStopped",
      description: "收到他人停止了屏幕共享的通知",
      gist: '收到该通知即可销毁[媒体拉流组件](#CRVideoPlayer)',
      params: [{
        param: 'UID',
        type: 'string',
        explain: '关闭屏幕共享用户的UID'
      }]
    }, {
      interface: "NotifyMediaStart",
      description: "收到他人开启了影音共享的通知",
      gist: '收到该通知即可渲染[媒体拉流组件](#CRVideoPlayer)',
      params: [{
        param: 'UID',
        type: 'string',
        explain: '开启屏幕共享用户的UID'
      }]
    }, {
      interface: "NotifyMediaPause",
      description: "收到他人暂停了影音共享的通知",
      params: [{
        param: 'UID',
        type: 'string',
        explain: '开启屏幕共享用户的UID'
      }, {
        param: 'pause',
        type: 'number',
        explain: '是否暂停 1暂停 0播放'
      }]
    }, {
      interface: "NotifyMediaStop",
      description: "收到他人停止了影音共享的通知",
      gist: '收到该通知即可销毁[媒体拉流组件](#CRVideoPlayer)',
      params: [{
        param: 'UID',
        type: 'string',
        explain: '开启屏幕共享用户的UID'
      }]
    }]
  }
}, {
  id: 'recording',
  title: '云端录制/云端推流',
  isMeetApi: true,
  data: {
    initiative: [{
      interface: 'GetSvrMixerState',
      description: '获取云端录制、云端直播状态',
      returnValue: '[CRVideo_MIXER_STATE](Constant.md#CRVideo_MIXER_STATE)'
    }, {
      interface: 'StartSvrMixer',
      description: '开启云端录制/开启云端直播',
      returnValue: '[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)',
      gist: '录制开启有状态变化[SvrRecordStateChanged](#CRVideo_SvrRecordStateChanged)',
      params: [{
        param: 'mutiMixerCfgs',
        type: '[CRVideo_MutiMixerCfgsObj](TypeDefinitions.md#CRVideo_MutiMixerCfgsObj)',
        explain: '服务器混图配置'
      }, {
        param: 'mutiMixerContents',
        type: '[CRVideo_MutiMixerContentsObj](TypeDefinitions.md#CRVideo_MutiMixerContentsObj)',
        explain: '服务器混图内容'
      }, {
        param: 'mutiMixerOutputs',
        type: '[CRVideo_MutiMixerOutputsObj](TypeDefinitions.md#CRVideo_MutiMixerOutputsObj)',
        explain: '服务器输出'
      }]
    }, {
      interface: 'UpdateSvrMixerContent',
      description: '更新云端录制、云端直播内容',
      returnValue: '[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)',
      params: [{
        param: 'mutiMixerContents',
        type: '[CRVideo_MutiMixerContentsObj](TypeDefinitions.md#CRVideo_MutiMixerContentsObj)',
        explain: '服务器混图内容'
      }]
    }, {
      interface: 'StopSvrMixer',
      description: '停止云端录制、云端直播',
      gist: '停止后可以监听[云端录制文件状态](#CRVideo_SvrRecFileStateChanged)'
    }],
    passive: [{
      interface: "SvrRecordStateChanged",
      description: "通知云端录制、云端直播状态变化",
      params: [{
        param: 'SvrRecordState',
        type: '[CRVideo_MIXER_STATE](Constant.md#CRVideo_MIXER_STATE)',
        explain: '通知云端录制、云端直播状态码变化'
      }]
    }, {
      interface: "SvrRecVideosChanged",
      description: "通知云端录制、云端直播内容变化",
      params: [{
        param: 'mutiMixerContents',
        type: '[CRVideo_MutiMixerContentsObj](TypeDefinitions.md#CRVideo_MutiMixerContentsObj)',
        explain: '服务器混图内容'
      }]
    }, {
      interface: "SvrRecFileStateChanged",
      description: "通知云端录制文件、云端直播信息变化",
      params: [{
        param: 'outputInfo',
        type: '[CRVideo_MixerOutputInfoObj](TypeDefinitions.md#CRVideo_MixerOutputInfoObj)',
        explain: '通知内容'
      }]

    }]
  }
}, {
  id: 'whiteBoard',
  title: '电子白板',
  isMeetApi: true,
  data: {
    initiative: [{
      interface: 'CreateBoard',
      description: '创建白板',
      params: [{
        param: 'title',
        type: 'string',
        explain: '白板名称'
      }, {
        param: 'width',
        type: 'number',
        explain: '白板名称'
      }, {
        param: 'height',
        type: 'number',
        explain: '白板名称'
      }, commonInitiativeKey.pageCount],
      gist: '其他参会者会收到：[NotifyCreateBoard](#CRVideo_NotifyCreateBoard)事件;创建完白板后，一定要及尽快调用[InitBoardPageDat](#CRVideo_InitBoardPageDat)初始化各页数据',
      returnValue: '白板boardID(string)'
    }, {
      interface: 'CloseBoard',
      description: '关闭白板',
      params: [commonInitiativeKey.boardId],
      gist: '其他参会者将收到[NotifyCloseBoard](#CRVideo_NotifyCloseBoard)事件；同时后台会移除对应白板的所有信息',
      returnValue: '无'
    }, {
      interface: 'GetBoardInfo',
      description: '获取指定白板的信息',
      params: [commonInitiativeKey.boardId],
      returnValue: '白板对象，详见[CRVideo_BoardObj](TypeDefinitions.md#CRVideo_BoardObj)说明'
    }, {
      interface: 'GetBoardList',
      description: '获取所有白板信息',
      returnValue: '白板对象列表，详见[CRVideo_BoardObjs](TypeDefinitions.md#CRVideo_BoardObjs)说明'
    }, {
      interface: 'InitBoardPageDat',
      description: '初始化白板图元数据',
      params: [commonInitiativeKey.boardId, {
        param: 'BoardPageObj',
        type: 'object',
        explain: '白板页初始化对象，详见[CRVideo_BoardPageObj](TypeDefinitions.md#CRVideo_BoardPageObj)说明'
      }],
      returnValue: '无'
    }, {
      interface: 'GetCurPageNo',
      description: '获取白板的当前页',
      params: [commonInitiativeKey.boardId],
      returnValue: '页序号（0为第一页) (number)'
    }, {
      interface: 'SetCurrentPage',
      description: '白板翻页',
      params: [commonInitiativeKey.boardId, commonInitiativeKey.pageCount, {
        param: 'pagePos1',
        type: 'number',
        explain: '私有扩展参数1（如可用于页内x方向滚动位置）,如不需要传入0'
      }, {
        param: 'pagePos2',
        type: 'number',
        explain: '私有扩展参数2（如可用于页内y方向滚动位置）,如不需要传入0'
      }]
    }],
    passive: [{
      interface: "NotifyCreateBoard",
      description: "通知创建白板",
      params: [commonInitiativeKey.BoardObj, commonInitiativeKey.operatorID],
    }, {
      interface: "NotifyCloseBoard",
      description: "通知关闭白板",
      params: [commonInitiativeKey.boardId, commonInitiativeKey.operatorID],
    }, {
      interface: "NotifyBoardCurPageNo",
      description: "通知通知白板翻页",
      params: [commonInitiativeKey.boardId, commonInitiativeKey.pageCount, {
        param: 'pagePos1',
        type: 'number',
        explain: '扩展参数1'
      }, {
        param: 'pagePos2',
        type: 'number',
        explain: '扩展参数2'
      }, commonInitiativeKey.operatorID],
    }]
  }
}]