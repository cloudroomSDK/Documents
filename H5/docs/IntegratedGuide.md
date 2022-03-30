---
sidebarDepth: 1
---

# 实现音视频通话

<h2 id=introduction>简介</h2>

- 快速创建并进入房间，开始音视频通话；代码部分均为 js 代码，详细代码请参考 SDK包 目录下 Demo 源代码。

- 请先准备[跑通示例项目](BeforeDevelop.md)中的相关内容：1.[Demo下载](BeforeDevelop.md#download)， 2.[准备运行环境](BeforeDevelop.md#firewall)，以及连接相关的麦克风摄像头并确认设备工作正常。
 
-----

<h2 id=flow>基本步骤</h2>

基本步骤如下：

1. [初始化SDK](#init)
1. [登录连接视频服务器](#login)
1. [创建房间](#create)
1. [进入房间](#enter)
1. [打开麦克风/摄像头](#audio)
1. [观看他人视频](#watchOther)
1. [退出房间](#exit)
1. [注销登录](#logout)
1. [反初始化，退出SDK](#uninit)

<h3 id=init>1. 初始化SDK</h3>

 初始化是整个SDK的使用基础，通常在程序启动的时候进行初始化([CRVideo_Init](API.md#CRVideo_Init))，退出后进行反初始化([CRVideo_Uninit](API.md#CRVideo_Uninit))，整个程序的生命周期中只进行一次初始化和反初始化。

```js
// 初始化接口为Promise接口，请注意调用方式如下：
CRVideo_Init(initObj).then(res => {
    // 初始化成功的回调，继续设置服务器地址及登录等操作，见 第2步...
}, err => {
    // 初始化失败的回调，会返回对应的错误码
});
```

 相关API请参考:
* [CRVideo_Init](API.md#CRVideo_Init)
* [CRVideo_Uninit](API.md#CRVideo_Uninit)


<h3 id=login>2. 登录连接视频服务器</h3>

 设置视频服务器地址，然后使用appID和md5加密后的appSecret登录。[(获取App ID及App Secret)](BeforeDevelop.html#getappid)

- 调用接口：

```js
// 设置服务器地址，使用云屋的云服务时填 sdk.cloudroom.com;使用私有化部署的服务器时要填部署的服务器地址:端口；此处以云屋的云服务为例。
CRVideo_SetServerAddr("sdk.cloudroom.com");  // 云屋云服务器
// CRVideo_SetServerAddr("10.8.8.220:2726");  // 私有化部署服务器

//登录鉴权
CRVideo_Login(appID, md5(appSecret), nickName, UID, userAuthCode, cookie);  // 使用appID+appSecret鉴权
// CRVideo_UpdateToken(Token, nickName, UID, userAuthCode, cookie); // 使用token鉴权
```

- 回调通知，

```js
// 登录成功
CRVideo_LoginSuccess.callback = function(UID,cookie){
    // 登录成功，开始创建房间，见第3步
}

// 登录失败
CRVideo_LoginFail.callback = function(sdkErr,cookie){
    // 登录出错，可以弹出错误提示，或调用登录接口再次重试登录
}

// 登录掉线
CRVideo_LineOff.callback=function(sdkErr){
    // 系统掉线，可尝试重新登录，或弹出提示
    // token失效时，若没有及时更新token，系统将会强制掉线
}
```

 相关API请参考:
* [CRVideo_SetServerAddr](API.md#CRVideo_SetServerAddr) （设置服务器地址）
* [CRVideo_Login](API.md#CRVideo_Login) （使用appID登录）
* [CRVideo_LoginByToken](API.md#CRVideo_LoginByToken) （使用Token登录）
* [CRVideo_Logout](API.md#CRVideo_Logout) （退出登录）
* [CRVideo_UpdateToken](API.md#CRVideo_UpdateToken) （更新Token）
* [CRVideo_LoginSuccess.callback](API.md#CRVideo_LoginSuccess) （登录成功）
* [CRVideo_LoginFail.callback](API.md#CRVideo_LoginFail) （登录失败）
* [CRVideo_NotifyTokenWillExpire.callback](API.md#CRVideo_NotifyTokenWillExpire) （通知，Token即将失效）
* [CRVideo_LineOff.callback](API.md#CRVideo_LineOff) （通知，登录掉线）


<h3 id=create>3. 创建房间</h3>

  创建一个没有密码的，固定的房间

- 调用接口：

```js
//创建房间
CRVideo_CreateMeeting()
```

- 回调通知，


```js
//创建房间成功
CRVideo_CreateMeetingSuccess.callback=function(meetObj,cookie){
    //创建房间成功，可以进入房间
}
//创建房间失败
CRVideo_CreateMeetingFail.callback = function(sdkErr,cookie){
    //创建房间失败，可以弹出错误提示
}
```

 相关API请参考:
* [CRVideo_CreateMeeting](API.md#CRVideo_CreateMeeting) （创建房间）
* [CRVideo_CreateMeetingSuccess](API.md#CRVideo_CreateMeetingSuccess) （创建房间成功）
* [CRVideo_CreateMeetingFail](API.md#CRVideo_CreateMeetingFail) （创建房间失败）


<h3 id=enter>4. 进入房间</h3>

 用创建成功的房间信息（房间ID）进入房间，其他用户也是利用此房间信息进入该房间。

- 调用接口：

```js
//进入房间
CRVideo_EnterMeeting3(meetID, cookie);
```

- 回调通知，

```js
//进入房间完成响应
CRVideo_EnterMeetingRslt.callback = function(sdkErr) {
    if(sdkErr === 0) {
         console.log("进入房间成功，可以继续下面第5步……");
    } else {
        console.log("进入房间失败，错误码："+ sdkErr);
    }
}
//监控房间掉线
CRVideo_MeetingDropped.callback = function() {
    // 从房间中掉线，需要再次进入房间或退回进入房间前的状态
}
```

 相关API请参考:
*  [CRVideo_EnterMeeting3](API.md#CRVideo_EnterMeeting3) （进入房间）
*  [CRVideo_EnterMeetingRslt.callback](API.md#CRVideo_EnterMeetingRslt) （进入房间的结果）
*  [CRVideo_MeetingDropped.callback](API.md#CRVideo_MeetingDropped) （通知，从房间中掉线了）


<h3 id=audio>5. 打开麦克风/摄像头</h3>

 接第4步，进入房间成功后，打开自己的麦克风和摄像头，以便本地、远端显示自己的视频图像

```js
// 打开房间内某个成员的麦克风（可以是自己）
CRVideo_OpenMic(UID)

// 打开房间内某个成员的摄像头（可以是自己）
CRVideo_OpenVideo(UID)

// 创建成员视频UI显示组件，并订阅某个成员的视频画面（可以是自己）
var myVideoUI = CRVideo_CreatVideoObj();  // 调用接口，创建视频ui组件
document.body.appendChild(myVideoUI.handler()) // 获取组件中的DOM并显示在页面上
myVideoUI.setVideo(UID);    // 将用户的视频画面挂载在UI组件上，传入某个成员（自己）的UID
```

 相关API请参考：
* [CRVideo_OpenMic](API.md#CRVideo_OpenMic) （打开成员麦克风）
* [CRVideo_OpenVideo](API.md#CRVideo_OpenVideo) （打开成员摄像头）
* [CRVideo_CreatVideoObj](API.md#CRVideo_CreatVideoObj) （创建成员视频UI显示组件）
* [CRVideo_GetAllVideoInfo](API.md#CRVideo_GetAllVideoInfo) （获取成员的所有摄像头信息）
* [CRVideo_SetVideoCfg](API.md#CRVideo_SetVideoCfg) （设置本地视频参数）
* [CRVideo_SetAudioCfg](API.md#CRVideo_SetAudioCfg) （设置本地音频参数）
* [CRVideo_CloseVideo](API.md#CRVideo_CloseVideo) （关闭成员摄像头）
* [CRVideo_CloseMic](API.md#CRVideo_CloseMic) （关闭成员麦克风）
* [CRVideo_SetDefaultVideo](API.md#CRVideo_SetDefaultVideo) （设置默认摄像头）
* [CRVideo_GetDefaultVideo](API.md#CRVideo_GetDefaultVideo) （获取当前的默认摄像头ID）



<h3 id=watchOther>6. 观看他人视频</h3>

成功进入房间后，根据他人登录id ，设置并观看他人视频图像

- 接口调用：

```js
// 创建成员视频UI显示组件，并订阅某个成员的视频画面
var otherVideoUI = CRVideo_CreatVideoObj();  // 调用接口，创建视频ui组件
document.body.appendChild(otherVideoUI.handler()) // 获取组件中的DOM并显示在页面上
otherVideoUI.setVideo(UID);    // 将成员的视频画面挂载在UI组件上，传入他人的UID。UID可通过接口 CRVideo_GetAllMembers 获取
```

相关API请参考：
* [CRVideo_CreatVideoObj](API.md#CRVideo_CreatVideoObj) （创建成员视频UI显示组件）
* [CRVideo_GetAllMembers](API.md#CRVideo_GetAllMembers) （获取房间内所有成员的信息）



<h3 id=exit>7.退出房间</h3>

```js
// 退出房间
CRVideo_ExitMeeting()

// 销毁房间，房间也可以不销毁，以便一直存在，可以随时再次进入
CRVideo_DestroyMeeting()
```

 相关API请参考:
* [CRVideo_ExitMeeting](API.md#CRVideo_ExitMeeting) （退出房间）
* [CRVideo_DestroyMeeting](API.md#CRVideo_DestroyMeeting) （销毁房间）


<h3 id=logout> 8. 注销登录</h3>

 ```js
// 注销本次登录
CRVideo_Logout()
```

 相关API请参考:
* [CRVideo_Logout](API.md#CRVideo_Logout)


<h3 id=uninit>9.反初始化，退出SDK</h2>

 执行反初始化后SDK功能不再可用。

```js
// 反初始化
CRVideo_Uninit();
```

 相关API请参考:
* [CRVideo_Uninit](API.md#CRVideo_Uninit)



