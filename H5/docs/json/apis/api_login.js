const {
  commonCookie,
  commonMeetInfoObj,
  commonMeetId,
  commonSDKErr,
  commonUID,
  commonQueId,
  commonQueUser
}  = require('./commonPassiveKey');

// 登录、注销、掉线
module.exports = [{
  method: '主调',
  interface: 'CRVideo_SetServerAddr',
  description: '设置服务器地址',
  detail: {
    content: 'CRVideo_SetServerAddr(ServerAddr)',
    returnVal: '无',
    callback: '无',
    data: [{
      param: 'ServerAddr',
      type: 'String',
      necessary: '是',
      explain: '登录的服务器地址，如：10.8.8.122:2726 或 sdk.cloudroom.com'
    }]
  }
}, {
  interface: 'CRVideo_Login',
  description: '登录（帐号密码鉴权）',
  detail: {
    content: 'CRVideo_Login(appID,appSecret,nickname,UID,userAuthCode,cookie)',
    returnVal: '无',
    callback: '登陆成功则回调 [CRVideo_LoginSuccess.callback](#CRVideo_LoginSuccess)，登陆失败则回调 [CRVideo_LoginFail.callback](#CRVideo_LoginFail)',
    data: [{
        param: 'appID',
        type: 'String',
        necessary: '是',
        explain: '云屋鉴权帐号。用于区分不同的项目，每个项目都有属于自己的唯一的appID，不同appID的项目完全独立，无法相互通信。appID请联系云屋销售获取，并开通相关套餐和功能权限。'
      }, {
        param: 'appSecret',
        type: 'String',
        necessary: '是',
        explain: 'md5(appSecret)。 (appSecret: 云屋鉴权密码, 可登录云屋管理后台修改)'
      }, {
        param: 'nickname',
        type: 'String',
        necessary: '是',
        explain: '昵称'
      },
      commonUID,
      {
        param: 'userAuthCode',
        type: 'String',
        necessary: '否',
        explain: '用户验证信息，为空代表不需要sdk验证（一般由业务方先对UID认证完了，再来使用云屋sdk)。如果不为空，云屋sdk服务器将连接提前配置好的业务方服务器进行实时验证。（SDK管理后台-项目管理可以配置）'
      },
      commonCookie
    ]
  }
}, {
  interface: 'CRVideo_LoginByToken',
  description: '登录（Token鉴权）',
  detail: {
    content: 'CRVideo_LoginByToken(Token,nickname,UID,userAuthCode,cookie)',
    returnVal: '无',
    callback: '登陆成功则回调 [CRVideo_LoginSuccess.callback](#CRVideo_LoginSuccess)，登陆失败则回调 [CRVideo_LoginFail.callback](#CRVideo_LoginFail)',
    data: [{
        param: 'Token',
        type: 'String',
        necessary: '是',
        explain: 'Token鉴权码'
      }, {
        param: 'nickname',
        type: 'String',
        necessary: '是',
        explain: '昵称'
      },
      commonUID,
      {
        param: 'userAuthCode',
        type: 'String',
        necessary: '否',
        explain: '用户验证信息，为空代表不需要sdk验证（一般由业务方先对UID认证完了，再来使用云屋sdk)。如果不为空，云屋sdk服务器将连接提前配好的业务方服务器进行实时验证。（SDK管理后台-项目管理可以配置）'
      },
      commonCookie
    ]
  }
}, {
  interface: 'CRVideo_UpdateToken',
  description: '更新Token',
  detail: {
    content: 'CRVideo_UpdateToken(Token)',
    returnVal: '无',
    callback: '无',
    data: [{
      param: 'Token',
      type: 'String',
      necessary: '是',
      explain: '新的Token鉴权码'
    }]
  }
}, {
  interface: 'CRVideo_Logout',
  description: '注销登录',
  detail: {
    content: 'CRVideo_Logout()',
    returnVal: '无',
    callback: '无',
    attent: `
> 退出程序时，必须注销本次登录，然后再进行SDK反初始化操作。`
  }
// }, {
  // interface: 'CRVideo_GetUserAuthErrCode',
  // description: '获取第三方鉴权失败码',
  // detail: {
  //   content: 'CRVideo_GetUserAuthErrCode()',
  // }
// }, {
  // interface: 'CRVideo_GetUserAuthErrDesc',
  // description: '获取第三方鉴权失败描述',
  // detail: {
  //   content: 'CRVideo_GetUserAuthErrDesc()',
  // }
}, {
  method: '回调',
  interface: 'CRVideo_LoginSuccess',
  description: '回调，登陆成功',
  detail: {
    content: 'CRVideo_LoginSuccess.callback=function(UID,cookie) {}',
    type: 'callback',
    callbackParam: [
      commonUID,
      commonCookie
    ]
  }
}, {
  interface: 'CRVideo_LoginFail',
  description: '回调，登录失败',
  detail: {
    content: 'CRVideo_LoginFail.callback=function(sdkErr,cookie) {}',
    type: 'callback',
    callbackParam: [
      commonSDKErr,
      commonCookie
    ]
  }
}, {
  interface: 'CRVideo_NotifyTokenWillExpire',
  description: '通知，Token即将失效',
  detail: {
    content: 'CRVideo_NotifyTokenWillExpire.callback=function(){}',
    type: 'callback',
    attent: `
> 此回调将在token失效前30s通知，此时应重新获取新的Token后调用 [CRVideo_UpdateToken](#CRVideo_UpdateToken) 接口及时更新Token，否则将被强制下线`
  }
}, {
  interface: 'CRVideo_LineOff',
  description: '通知，从服务器掉线了',
  detail: {
    content: 'CRVideo_LineOff.callback=function(sdkErr){}',
    type: 'callback',
    callbackParam: [
      commonSDKErr
    ],
    attent: `
>从服务器掉线后，应再次调用登录接口重新登录服务器，可以用 [cookie](KeyWords.html#cookie) 来区分是掉线后的重登还是第一次登录，需要注意的是，登录服务器和登录房间是不同的接口，掉线后的通知也是不同的回调，重新登录也应该分别做不同的处理。`
  }
}]