//该文件输出回调接口公共字段
module.exports = {
    UID: {
        param: 'UID',
        type: 'string',
        explain: '用户ID, 详细介绍见[关键词](KeyWords.md#UID)'
    },
    cookie: {
        param: 'cookie',
        type: 'string',
        explain: '详细介绍见[cookie](KeyWords.md#cookie)'
    },
    sdkErr: {
        param: 'sdkErr',
        type: 'number',
        explain: '错误码，详细见[错误码定义](Constant.md#CRVIDEOSDK_ERR_DEF)'
    },
    queStatus: {
        param: 'queStatus',
        type: 'object',
        explain: '队列状态, 详细介绍见[类型定义](TypeDefinitions.md#CRVideo_QueStatus)'
    },
    queuingInfo: {
        param: 'queuingInfo',
        type: 'object',
        explain: '排队信息, 详细介绍见[类型定义](TypeDefinitions.md#CRVideo_QueuingInfo)'
    },
    queId: {
        param: 'queID',
        type: 'number',
        explain: '队列ID'
    },
    queUser: {
        param: 'queUser',
        type: 'object',
        explain: '队列用户信息, 详细介绍见[类型定义](TypeDefinitions.md#CRVideo_QueUser)'
    },
    meetId: {
        param: 'meetID',
        type: 'number',
        explain: '房间号'
    },
    callID: {
        param: 'callID',
        type: 'string',
        explain: '呼叫全局标识'
    },
    inviteID: {
        param: 'inviteID',
        type: 'string',
        explain: '邀请ID'
    },
    invitedUserID: {
        param: 'invitedUserID',
        type: 'string',
        explain: '邀请者用户ID'
    },
    usrExtDat: {
        param: 'usrExtDat',
        type: 'string',
        explain: '自定义扩展参数'
    },
    meetInfoObj: {
        param: 'MeetInfoObj',
        type: 'object',
        explain: '房间对象,详细介绍见[类型定义](TypeDefinitions.md#CRVideo_MeetInfoObj)'
    },
    taskID: {
        param: 'taskID',
        type: 'string',
        explain: '发送任务id'
    },
    sourceUID: {
        param: 'sourceUID',
        type: 'string',
        explain: '发送数据的用户UID'
    },
    data: {
        param: 'data',
        type: 'string',
        explain: '数据的内容'
    },
    MeetingAttrObjs: {
        param: 'attrs',
        type: 'object',
        explain: '房间属性，结构体请参见[CRVideo_MeetingAttrObjs](TypeDefinitions.md#CRVideo_MeetingAttrOptions)'
    },
    UserAttrObjs: {
        param: 'attrsMap',
        type: 'object',
        explain: '用户属性，结构体请参见[CRVideo_UsrMeetingAttrObjs](TypeDefinitions.md#CRVideo_UsrMeetingAttrObjs)'
    },
}