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
    interface: "CRVideo_Invite",
    description: "发送邀请",
    detail: {
        content: 'CRVideo_Invite(invitedUserID,userExtDat,cookie)',
        returnVal: '返回inviteID(每个邀请对应的唯一ID) (string)',
        callback: '成功回调 [CRVideo_InviteSuccess.callback](#CRVideo_InviteSuccess)，失败回调 [CRVideo_InviteFail.callback](#CRVideo_InviteFail)',
        data: [{
            param: 'invitedUserID',
            type: 'String',
            necessary: '是',
            explain: '受邀者用户的 [UID](KeyWords.html#UID)'
        }, commonusrExtDat, commonCookie],
        attent: `
> 需要邀请对方加入房间时，userExtDat可以是房间信息 [CRVideo_RoomInfoObj](TypeDefinitions.html#CRVideo_RoomInfoObj)`
    }
}, {
    interface: "CRVideo_AcceptInvite",
    description: "接受对方发送的邀请",
    detail: {
        content: 'CRVideo_AcceptInvite(inviteID,userExtDat,cookie)',
        returnVal: '无',
        callback: '成功回调 [CRVideo_AcceptInviteSuccess.callback](#CRVideo_AcceptInviteSuccess)，失败回调 [CRVideo_AcceptInviteFail.callback](#CRVideo_AcceptInviteFail)',
        data: [{
            param: 'inviteID',
            type: 'String',
            necessary: '是',
            explain: '邀请ID，在收到邀请时获取'
        }, commonusrExtDat, commonCookie],
        attent: `
> 收到邀请时，需要及时接受邀请或拒绝邀请，超时回应服务端将会自动拒绝本地邀请`
    }
}, {
    interface: "CRVideo_RejectInvite",
    description: "拒绝对方发送的邀请",
    detail: {
        content: 'CRVideo_RejectInvite(inviteID,userExtDat,cookie)',
        returnVal: '无',
        callback: '成功回调 [CRVideo_RejectInviteSuccess.callback](#CRVideo_RejectInviteSuccess)，失败回调 [CRVideo_RejectInviteFail.callback](#CRVideo_AcceptInviteFail)',
        data: [{
            param: 'inviteID',
            type: 'String',
            necessary: '是',
            explain: '邀请ID，在收到邀请时获取'
        }, commonusrExtDat, commonCookie],
        attent: `
> 收到邀请时，需要及时接受邀请或拒绝邀请，超时回应服务端将会自动拒绝本地邀请`
    }
}, {
    interface: "CRVideo_CancelInvite",
    description: "取消自己发送的邀请",
    detail: {
        content: 'CRVideo_CancelInvite(inviteID,userExtDat,cookie)',
        returnVal: '无',
        callback: '成功回调 [CRVideo_CancelInviteSuccess.callback](#CRVideo_CancelInviteSuccess)，失败回调 [CRVideo_CancelInviteFail.callback](#CRVideo_AcceptInviteFail)',
        data: [{
            param: 'inviteID',
            type: 'String',
            necessary: '是',
            explain: '邀请ID，在发送邀请时接口返回'
        }, commonusrExtDat, commonCookie],
    }
}, {
    method: "回调",
    interface: "CRVideo_InviteSuccess",
    description: "回调，发送邀请成功",
    detail: {
        content: 'CRVideo_InviteSuccess.callback = function(inviteID,cookie){}',
        type: 'callback',
        callbackParam: [{
            param: 'inviteID',
            type: 'String',
            explain: '邀请ID'
        }, commonCookie]
    }
}, {
    interface: "CRVideo_InviteFail",
    description: "回调，发送邀请失败",
    detail: {
        content: 'CRVideo_InviteFail.callback = function(inviteID,sdkErr,cookie){}',
        type: 'callback',
        callbackParam: [{
            param: 'inviteID',
            type: 'String',
            explain: '邀请ID'
        }, commonSDKErr, commonCookie]
    }
}, {
    interface: "CRVideo_AcceptInviteSuccess",
    description: "回调，接受对方发送的邀请成功",
    detail: {
        content: 'CRVideo_AcceptInviteSuccess.callback = function(inviteID,cookie){}',
        type: 'callback',
        callbackParam: [{
            param: 'inviteID',
            type: 'String',
            explain: '邀请ID'
        }, commonCookie]
    }
}, {
    interface: "CRVideo_AcceptInviteFail",
    description: "回调，接受对方发送的邀请失败",
    detail: {
        content: 'CRVideo_AcceptInviteFail.callback = function(inviteID,sdkErr,cookie){}',
        type: 'callback',
        callbackParam: [{
            param: 'inviteID',
            type: 'String',
            explain: '邀请ID'
        }, commonSDKErr, commonCookie]
    }
}, {
    interface: "CRVideo_RejectInviteSuccess",
    description: "回调，拒绝对方发送的邀请成功",
    detail: {
        content: 'CRVideo_RejectInviteSuccess.callback = function(inviteID,cookie){}',
        type: 'callback',
        callbackParam: [{
            param: 'inviteID',
            type: 'String',
            explain: '邀请ID'
        }, commonCookie]
    }
}, {
    interface: "CRVideo_RejectInviteFail",
    description: "回调，拒绝对方发送的邀请失败",
    detail: {
        content: 'CRVideo_RejectInviteFail.callback = function(inviteID,sdkErr,cookie){}',
        type: 'callback',
        callbackParam: [{
            param: 'inviteID',
            type: 'String',
            explain: '邀请ID'
        }, commonSDKErr, commonCookie]
    }
}, {
    interface: "CRVideo_CancelInviteSuccess",
    description: "回调，取消自己发送的邀请成功",
    detail: {
        content: 'CRVideo_CancelInviteSuccess.callback = function(inviteID,cookie){}',
        type: 'callback',
        callbackParam: [{
            param: 'inviteID',
            type: 'String',
            explain: '邀请ID'
        }, commonCookie]
    }
}, {
    interface: "CRVideo_CancelInviteFail",
    description: "回调，取消自己发送的邀请失败",
    detail: {
        content: 'CRVideo_CancelInviteFail.callback = function(inviteID,sdkErr,cookie){}',
        type: 'callback',
        callbackParam: [{
            param: 'inviteID',
            type: 'String',
            explain: '邀请ID'
        }, commonSDKErr, commonCookie]
    }
}, {
    interface: "CRVideo_NotifyInviteIn",
    description: "通知，收到别人的邀请",
    detail: {
        content: 'CRVideo_NotifyInviteIn.callback = function(inviteID,inviterUserID,userExtDat){}',
        type: 'callback',
        callbackParam: [{
            param: 'inviteID',
            type: 'String',
            explain: '邀请ID'
        }, {
            param: 'inviterUserID',
            type: 'String',
            explain: '发送邀请的[用户ID](KeyWords.html#UID)'
        }, commonusrExtDat]
    }
}, {
    interface: "CRVideo_NotifyInviteAccepted",
    description: "通知，我发送的邀请被对方接受",
    detail: {
        content: 'CRVideo_NotifyInviteAccepted.callback = function(inviteID,userExtDat){}',
        type: 'callback',
        callbackParam: [{
            param: 'inviteID',
            type: 'String',
            explain: '邀请ID'
        }, commonusrExtDat]
    }
}, {
    interface: "CRVideo_NotifyInviteRejected",
    description: "通知，我发送的邀请被对方拒绝",
    detail: {
        content: 'CRVideo_NotifyInviteRejected.callback = function(inviteID,reason,userExtDat){}',
        type: 'callback',
        callbackParam: [{
            param: 'inviteID',
            type: 'String',
            explain: '邀请ID'
        }, {
            param: 'reason',
            type: 'String',
            explain: '邀请被拒绝的原因，详见：[错误码](Constant.html#CRVideo_ERR_DEF)'
        }, commonusrExtDat]
    }
}, {
    interface: "CRVideo_NotifyInviteCanceled",
    description: "通知，邀请已经被取消了",
    detail: {
        content: 'CRVideo_NotifyInviteCanceled.callback = function(inviteID,reason,userExtDat){}',
        type: 'callback',
        callbackParam: [{
            param: 'inviteID',
            type: 'String',
            explain: '邀请ID'
        }, {
            param: 'reason',
            type: 'String',
            explain: '邀请被取消的原因，详见：[错误码](Constant.html#CRVideo_ERR_DEF)'
        }, commonusrExtDat]
    }
}]