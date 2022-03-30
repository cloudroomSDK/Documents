const {
    commonUID,
    commonKeys,
    commonCookie,
    commonAttrs,
    commonSetAttrs,
    commonOption,
    commonSDKErr,
    commonUserAttrs,
    commonSetUserAttrs
} = require('./commonPassiveKey');

// 进出房间
module.exports = [{
    method: '主调',
    interface: 'CRVideo_GetMeetingAttrs',
    description: '获取房间部份属性',
    detail: {
        content: 'CRVideo_GetMeetingAttrs(keys, cookie)',
        returnVal: '无',
        callback: '成功回调 [CRVideo_GetMeetingAttrsSuccess.callback](#CRVideo_GetMeetingAttrsSuccess)，失败回调 [CRVideo_GetMeetingAttrsFail.callback](#CRVideo_GetMeetingAttrsFail)',
        data: [commonKeys, commonCookie]
    }
}, {
    interface: 'CRVideo_GetMeetingAllAttrs',
    description: '获取房间所有属性',
    detail: {
        content: 'CRVideo_GetMeetingAllAttrs(cookie)',
        returnVal: '无',
        callback: '成功回调 [CRVideo_GetMeetingAllAttrsSuccess.callback](#CRVideo_GetMeetingAllAttrsSuccess)，失败回调 [CRVideo_GetMeetingAllAttrsFail.callback](#CRVideo_GetMeetingAllAttrsFail)',
        data: [commonCookie]
    }
}, {
    interface: 'CRVideo_SetMeetingAttrs',
    description: '重置房间属性集',
    detail: {
        content: 'CRVideo_SetMeetingAttrs(attrs ,options ,cookie)',
        returnVal: '无',
        callback: ' 操作完成则回调[CRVideo_SetMeetingAttrsRslt.callback](#CRVideo_SetMeetingAttrsRslt)',
        data: [commonSetAttrs, commonOption, commonCookie]
    }
}, {
    interface: 'CRVideo_AddOrUpdateMeetingAttrs',
    description: '增加或者更新房间属性',
    detail: {
        content: 'CRVideo_AddOrUpdateMeetingAttrs(attrs ,options ,cookie)',
        returnVal: '无',
        callback: '操作完成则回调[CRVideo_AddOrUpdateMeetingAttrsRslt.callback](#CRVideo_AddOrUpdateMeetingAttrsRslt)',
        data: [commonSetAttrs, commonOption, commonCookie]
    }
}, {
    interface: 'CRVideo_DelMeetingAttrs',
    description: '删除房间属性',
    detail: {
        content: 'CRVideo_DelMeetingAttrs(keys ,options ,cookie)',
        returnVal: '无',
        callback: '操作完成则回调[CRVideo_DelMeetingAttrsRslt.callback](#CRVideo_DelMeetingAttrsRslt)',
        data: [{
            param: 'keys',
            type: 'Array',
            necessary: '是',
            explain: '需要删除的房间属性key，如：["key1", "key2"]'
        }, commonOption, commonCookie]
    }
}, {
    interface: 'CRVideo_ClearMeetingAttrs',
    description: '清除房间所有属性',
    detail: {
        content: 'CRVideo_ClearMeetingAttrs(options ,cookie)',
        returnVal: '无',
        callback: '操作完成则回调[CRVideo_ClearMeetingAttrsRslt.callback](#CRVideo_ClearMeetingAttrsRslt)',
        data: [commonOption, commonCookie]
    }
}, {
    interface: 'CRVideo_GetUserAttrs',
    description: '获取指定用户的指定属性',
    detail: {
        content: 'CRVideo_GetUserAttrs(uids ,keys ,cookie)',
        returnVal: '无',
        callback: '成功回调 [CRVideo_GetUserAttrsSuccess.callback](#CRVideo_GetUserAttrsSuccess)，失败回调 [CRVideo_GetUserAttrsFail.callback](#CRVideo_GetUserAttrsFail)',
        data: [{
            param: 'uids',
            type: 'Array',
            necessary: '是',
            explain: '目标用户id列表，一次最多包含50个用， 如：["uid1","uid2"]'
        }, {
            param: 'keys',
            type: 'Array',
            necessary: '否',
            explain: '将要获取的用户属性key列表（空数组或者不传表获取全部），如：["key1","key2"]'
        }, commonCookie]
    }
}, {
    interface: 'CRVideo_SetUserAttrs',
    description: '重置用户属性',
    detail: {
        content: 'CRVideo_SetUserAttrs(UID ,attrs ,options ,cookie)',
        returnVal: '无',
        callback: '操作完成则回调[CRVideo_SetUserAttrsRslt.callback](#CRVideo_SetUserAttrsRslt)',
        data: [commonUID, commonSetUserAttrs, commonOption, commonCookie]
    }
}, {
    interface: 'CRVideo_AddOrUpdateUserAttrs',
    description: '增加或更新用户属性',
    detail: {
        content: 'CRVideo_AddOrUpdateUserAttrs(UID ,attrs ,options ,cookie)',
        returnVal: '无',
        callback: '操作完成则回调[CRVideo_AddOrUpdateUserAttrsRslt.callback](#CRVideo_AddOrUpdateUserAttrsRslt)',
        data: [commonUID, commonSetUserAttrs, commonOption, commonCookie]
    }
}, {
    interface: 'CRVideo_DelUserAttrs',
    description: '删除用户的特定属性',
    detail: {
        content: 'CRVideo_DelUserAttrs(UID ,keys ,options ,cookie)',
        returnVal: '无',
        callback: '操作完成则回调[CRVideo_DelUserAttrsRslt.callback](#CRVideo_DelUserAttrsRslt)',
        data: [commonUID, {
            param: 'keys',
            type: 'Array',
            necessary: '是',
            explain: '需要删除的用户属性key列表，json格式，如：["key1","key2"]'
        }, commonOption, commonCookie]
    }
}, {
    interface: 'CRVideo_ClearUserAttrs',
    description: '清除特定用户的所有属性',
    detail: {
        content: 'CRVideo_ClearUserAttrs(uids ,options ,cookie)',
        returnVal: '无',
        callback: '操作完成则回调[CRVideo_ClearUserAttrsRslt.callback](#CRVideo_ClearUserAttrsRslt)',
        data: [{
            param: 'uids',
            type: 'Array | String',
            necessary: '是',
            explain: '目标用户UID或UID数组'
        }, commonOption, commonCookie]
    }
}, {
    interface: 'CRVideo_ClearAllUserAttrs',
    description: '清除所有用户的所有属性',
    detail: {
        content: 'CRVideo_ClearAllUserAttrs(options ,cookie)',
        returnVal: '无',
        callback: '操作完成则回调[CRVideo_ClearAllUserAttrsRslt.callback](#CRVideo_ClearAllUserAttrsRslt)',
        data: [commonOption, commonCookie]
    }
}, {
    method: '回调',
    interface: 'CRVideo_GetMeetingAttrsSuccess',
    description: '回调，成功获取到房间指定属性',
    detail: {
        content: 'CRVideo_GetMeetingAttrsSuccess.callback = function(attr, cookie){}',
        type: 'callback',
        callbackParam: [commonAttrs, commonCookie]
    }
}, {
    interface: 'CRVideo_GetMeetingAttrsFail',
    description: '回调，获取房间指定属性失败',
    detail: {
        content: 'CRVideo_GetMeetingAttrsFail.callback = function(sdkErr, cookie){}',
        type: 'callback',
        callbackParam: [commonSDKErr, commonCookie]
    }
}, {
    interface: 'CRVideo_GetMeetingAllAttrsSuccess',
    description: '回调，成功获取到房间所有属性',
    detail: {
        content: 'CRVideo_GetMeetingAllAttrsSuccess.callback = function(attr, cookie){}',
        type: 'callback',
        callbackParam: [commonAttrs, commonCookie]
    }
}, {
    interface: 'CRVideo_GetMeetingAllAttrsFail',
    description: '回调，获取房间属性失败',
    detail: {
        content: 'CRVideo_GetMeetingAllAttrsFail.callback = function(sdkErr, cookie){}',
        type: 'callback',
        callbackParam: [commonSDKErr, commonCookie]
    }
}, {
    interface: 'CRVideo_SetMeetingAttrsRslt',
    description: '回调，设置用户属性结果',
    detail: {
        content: 'CRVideo_SetMeetingAttrsRslt.callback = function(sdkErr, cookie){}',
        type: 'callback',
        callbackParam: [commonSDKErr, commonCookie]
    }
}, {
    interface: 'CRVideo_AddOrUpdateMeetingAttrsRslt',
    description: '回调，增加或更新房间属性结果',
    detail: {
        content: 'CRVideo_AddOrUpdateMeetingAttrsRslt.callback = function(sdkErr, cookie){}',
        type: 'callback',
        callbackParam: [commonSDKErr, commonCookie]
    }
}, {
    interface: 'CRVideo_DelMeetingAttrsRslt',
    description: '回调，删除房间属性结果',
    detail: {
        content: 'CRVideo_DelMeetingAttrsRslt.callback = function(sdkErr, cookie){}',
        type: 'callback',
        callbackParam: [commonSDKErr, commonCookie]
    }
}, {
    interface: 'CRVideo_ClearMeetingAttrsRslt',
    description: '回调，清除房间属性结果',
    detail: {
        content: 'CRVideo_ClearMeetingAttrsRslt.callback = function(sdkErr, cookie){}',
        type: 'callback',
        callbackParam: [commonSDKErr, commonCookie]
    }
}, {
    interface: 'CRVideo_GetUserAttrsSuccess',
    description: '回调，获取房间内用户属性成功',
    detail: {
        content: 'CRVideo_GetUserAttrsSuccess.callback = function(attrsMap, cookie){}',
        type: 'callback',
        callbackParam: [commonUserAttrs, commonCookie]
    }
}, {
    interface: 'CRVideo_GetUserAttrsFail',
    description: '回调，获取房间内用户属性失败',
    detail: {
        content: 'CRVideo_GetUserAttrsFail.callback = function(sdkErr, cookie){}',
        type: 'callback',
        callbackParam: [commonSDKErr, commonCookie]
    }
}, {
    interface: 'CRVideo_SetUserAttrsRslt',
    description: '回调，设置用户属性结果',
    detail: {
        content: 'CRVideo_SetUserAttrsRslt.callback = function(sdkErr, cookie){}',
        type: 'callback',
        callbackParam: [commonSDKErr, commonCookie]
    }
}, {
    interface: 'CRVideo_AddOrUpdateUserAttrsRslt',
    description: '回调，增加或者更新用户属性结果',
    detail: {
        content: 'CRVideo_AddOrUpdateUserAttrsRslt.callback = function(sdkErr, cookie){}',
        type: 'callback',
        callbackParam: [commonSDKErr, commonCookie]
    }
}, {
    interface: 'CRVideo_DelUserAttrsRslt',
    description: '回调，删除特定用户属性结果',
    detail: {
        content: 'CRVideo_DelUserAttrsRslt.callback = function(sdkErr, cookie){}',
        type: 'callback',
        callbackParam: [commonSDKErr, commonCookie]
    }
}, {
    interface: 'CRVideo_ClearUserAttrsRslt',
    description: '回调，清除特定用户属性结果',
    detail: {
        content: 'CRVideo_ClearUserAttrsRslt.callback = function(sdkErr, cookie){}',
        type: 'callback',
        callbackParam: [commonSDKErr, commonCookie]
    }
}, {
    interface: 'CRVideo_ClearAllUserAttrsRslt',
    description: '回调，清除所有用户属性结果',
    detail: {
        content: 'CRVideo_ClearAllUserAttrsRslt.callback = function(sdkErr, cookie){}',
        type: 'callback',
        callbackParam: [commonSDKErr, commonCookie]
    }
}, {
    interface: 'CRVideo_NotifyMeetingAttrsChanged',
    description: '通知，房间属性发生改变',
    detail: {
        content: 'CRVideo_NotifyMeetingAttrsChanged.callback = function(adds ,updates ,delKeys){}',
        type: 'callback',
        callbackParam: [{
            param: 'adds',
            type: 'Object',
            necessary: '是',
            explain: '增加房间属性集，结构体请参见[CRVideo_MeetingAttrObjs](TypeDefinitions.html#CRVideo_MeetingAttrObjs)'
        }, {
            param: 'updates',
            type: 'Object',
            necessary: '是',
            explain: '变化的房间属性集，结构体请参见[CRVideo_MeetingAttrObjs](TypeDefinitions.html#CRVideo_MeetingAttrObjs)'
        }, {
            param: 'delKeys',
            type: 'Array',
            necessary: '是',
            explain: '被删除的房间属性的数组列表，如:["key1", "key2"]'
        }]
    }
}, {
    interface: 'CRVideo_NotifyUserAttrsChanged',
    description: '通知，某个用户属性发生改变',
    detail: {
        content: 'CRVideo_NotifyUserAttrsChanged.callback = function(UID ,adds ,updates ,delKeys){}',
        type: 'callback',
        callbackParam: [commonUID, {
            param: 'adds',
            type: 'Object',
            necessary: '是',
            explain: '增加用户属性集，结构体请参见[CRVideo_MeetingAttrObjs](TypeDefinitions.html#CRVideo_MeetingAttrObjs)'
        }, {
            param: 'updates',
            type: 'Object',
            necessary: '是',
            explain: '变化的用户属性集，结构体请参见[CRVideo_MeetingAttrObjs](TypeDefinitions.html#CRVideo_MeetingAttrObjs)'
        }, {
            param: 'delKeys',
            type: 'Array',
            necessary: '是',
            explain: '被删除的用户属性列表，json格式，如:["key1", "key2"]'
        }]
    }
}]