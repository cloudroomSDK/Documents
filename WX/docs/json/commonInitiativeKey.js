//该文件输出主调接口公共字段
module.exports = {
    nofined: {
        param: 'unedfined',
        type: 'any',
        explain: '预留字段，传入undefined'
    },
    UID: {
        param: 'UID',
        type: 'string',
        explain: '用户ID, 详细介绍见[关键词](KeyWords.md#UID)'
    },
    nickName: {
        param: 'nickName',
        type: 'string',
        explain: '用户昵称'
    },
    operatorID: {
        param: 'operatorID',
        type: 'string',
        explain: '操作者的用户ID'
    },
    cookie: {
        param: 'cookie',
        type: 'string',
        explain: '可缺省,详细介绍见[关键词](KeyWords.md#cookie)'
    },
    token: {
        param: 'token',
        type: 'string',
        explain: 'Token鉴权码,详细介绍见[关键词](KeyWords.md#token)'
    },
    queId: {
        param: 'queID',
        type: 'number',
        explain: '队列ID'
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
        explain: '受邀者用户ID'
    },
    usrExtDat: {
        param: 'usrExtDat',
        type: 'string',
        explain: '自定义扩展参数'
    },
    meetId: {
        param: 'meetID',
        type: 'number',
        explain: '房间号'
    },
    meetInfoObj: {
        param: 'MeetInfoObj',
        type: 'object',
        explain: '房间对象,详细介绍见[类型定义](TypeDefinitions.md#CRVideo_MeetInfoObj)'
    },
    meetingAttrs: {
        param: 'attrs',
        type: 'string',
        explain: '房间属性集,json格式，如：{"key1":"value1", "key2":"value2"} (key最大长度为64B，value最大长度为8KB)'
    },
    MeetingAttrOptions: {
        param: 'options',
        type: 'string',
        explain: '操作选项,json格式参见[CRVideo_MeetingAttrOptions](TypeDefinitions.md#MeetingAttrOptions)'
    },
    userAttrs: {
        param: 'attrs',
        type: 'string',
        explain: '用户属性集, json格式，如：{"key1":"value1", "key2":"value2"} (key最大长度为64B，value最大长度为8KB)'
    },
    boardId: {
        param: 'boardID',
        type: 'string',
        explain: '白板标识'
    },
    BoardObj: {
        param: 'BoardObj',
        type: 'object',
        explain: '白板对象，详见[CRVideo_BoardObj](TypeDefinitions.md#CRVideo_BoardObj)说明'
    },
    pageCount: {
        param: 'pageCount',
        type: 'number',
        explain: '白板页数'
    }
}