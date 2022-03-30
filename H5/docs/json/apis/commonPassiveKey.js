//该文件输出回调接口公共字段
module.exports = {
    commonUID: {
        param: 'UID',
        type: 'String',
        necessary: '是',
        explain: '用户ID, 详细介绍见 [关键词](KeyWords.html#UID)'
    },
    commonUserID: {
        param: 'userID',
        type: 'String',
        necessary: '是',
        explain: '用户UID, 详细介绍见 [关键词](KeyWords.html#UID)'
    },
    commonBoardID: {
        param: 'boardID',
        type: 'String',
        necessary: '是',
        explain: '白板标识，创建白板时返回，如："2.58"'
    },
    commonCookie: {
        param: 'cookie',
        type: 'String',
        necessary: '否',
        explain: '详细介绍见 [关键词](KeyWords.html#cookie)，可以传空串'
    },
    commonSDKErr: {
        param: 'sdkErr',
        type: 'Number',
        necessary: '是',
        explain: '错误码，详细见 [错误码定义](Constant.html#CRVIDEOSDK_ERR_DEF)'
    },
    commonErrorCode: {
        param: 'errCode',
        type: 'Number',
        necessary: '是',
        explain: '错误码，详细见 [错误码定义](Constant.html#CRVIDEOSDK_ERR_DEF)'
    },
    commonErrorDesc: {
        param: 'errDesc',
        type: 'String',
        necessary: '是',
        explain: '错误详情'
    },
    commonPromiseReject:[{
        param: 'errCode',
        type: 'Number',
        necessary: '是',
        explain: '错误码，详细见 [错误码定义](Constant.html#CRVIDEOSDK_ERR_DEF)'
    }, {
        param: 'errDesc',
        type: 'String',
        necessary: '是',
        explain: '错误详情'
    }],
    commonQueStatus: {
        param: 'CRVideo_QueStatus',
        type: 'Object',
        necessary: '是',
        explain: '队列状态, 详细介绍见 [类型定义](TypeDefinitions.html#CRVideo_QueStatus)'
    },
    queuingInfo: {
        param: 'CRVideo_QueuingInfo',
        type: 'Object',
        necessary: '',
        explain: '排队信息, 详细介绍见 [类型定义](TypeDefinitions.html#CRVideo_QueuingInfo)'
    },
    commonQueId: {
        param: 'queID',
        type: 'Number',
        necessary: '是',
        explain: '队列ID'
    },
    commonQueUser: {
        param: 'CRVideo_QueUser',
        type: 'Object',
        necessary: '是',
        explain: '队列用户信息, 详细介绍见 [类型定义](TypeDefinitions.html#CRVideo_QueUser)'
    },
    commonMeetId: {
        param: 'meetID',
        type: 'Number',
        necessary: '是',
        explain: '房间号'
    },
    commonCallID: {
        param: 'callID',
        type: 'String',
        necessary: '是',
        explain: '呼叫全局标识ID'
    },
    commonusrExtDat: {
        param: 'userExtDat',
        type: 'String',
        necessary: '否',
        explain: '自定义扩展参数，没有则传空串'
    },
    commonMeetInfoObj: {
        param: 'MeetInfoObj',
        type: 'Object',
        necessary: '是',
        explain: '房间信息对象，详见：[CRVideo_RoomInfoObj](TypeDefinitions.html#CRVideo_RoomInfoObj)'
    },
    commonReserve: {
        param: 'reserve',
        type: 'String',
        necessary: '否',
        explain: '保留字段，填空字符串 ""'
    },
    commonKeys: {
        param: 'keys',
        type: 'Array',
        necessary: '是',
        explain: '需要查询的房间属性key，如：["key1", "key2"]'
    },
    commonAttrs: {
        param: 'attrs',
        type: 'Object',
        necessary: '是',
        explain: '房间属性，结构体请参见[CRVideo_MeetingAttrObjs](TypeDefinitions.html#CRVideo_MeetingAttrObjs)'
    },
    commonUserAttrs: {
        param: 'attrsMap',
        type: 'Object',
        necessary: '是',
        explain: '用户属性，结构体请参见[CRVideo_UsrMeetingAttrObjs](TypeDefinitions.html#CRVideo_UsrMeetingAttrObjs)'
    },
    commonSetUserAttrs: {
        param: 'attrs',
        type: 'String',
        necessary: '是',
        explain: '用户属性集, json格式，如：{"key1":"value1", "key2":"value2"} (key最大长度为64B，value最大长度为8KB)'
    },
    commonSetAttrs: {
        param: 'attrs',
        type: 'String',
        necessary: '是',
        explain: '房间属性集,json格式，如：{"key1":"value1", "key2":"value2"} (key最大长度为64B，value最大长度为8KB)'
    },
    commonOption: {
        param: 'options',
        type: 'String',
        necessary: '否',
        explain: '操作选项,json格式参见[CRVideo_MeetingAttrOptions](TypeDefinitions.html#CRVideo_MeetingAttrOptions)'
    },
    commonReturnPromise: '返回一个Promise对象，成功返回resolveCallback，失败返回rejectCallback',
    promiseCallback: '.then(function(resObject){}).catch(function(errObject){})'
}