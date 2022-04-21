# 实现音视频通话

## 简要说明

- 快速创建并进入房间，开始音视频通话；代码部分均为 js 代码，详细代码请参考 Examples 目录下 Demo 源代码。
- 请先完成[开发环境准备](beforeDevelop.md#beforeDev)，并确认音视频设备工作正常。

<h2 id=init>1. 初始化SDK</h2>

 初始化是整个SDK的使用基础，通常在程序启动的时候进行初始化([CRVideo_Init2](API.md#CRVideo_Init2))，退出后进行反初始化([CRVideo_Uninit](API.md#CRVideo_Uninit))，整个程序的生命周期中只进行一次初始化和反初始化。

```js

//初始化 sdkUsePath  是SDK工作目录，用于存储配置文件、临时文件等，如果传空值，则默认为sdk的安装目录
var init = CRVideo_Init2(sdkUsePath);

//初始化失败会返回对应的错误码
if(init == CRVideo_WEB_OCX_NOTINSTALLED){
    console.log("ocx未安装");

}else if(init == CRVideo_OCX_VERSION_NOTUPPORTED){
    console.log("不支持的浏览器");

}else if(init == CRVideo_WEB_BROWER_NOTUPPORTED){
    console.log("不支持的插件版本");

}else if(init != 0){
    console.log("CRVideo_init2 出错了："+init);

}else if(init == CRVideo_NOERR){
    console.log("初始化成功，可以继续下面第 2 步……");
}

```
 相关API请参考:
* [CRVideo_Init2](API.md#CRVideo_Init2)


<h2 id=login>2. 登录连接视频服务器</h2>

 设置视频服务器地址，然后使用appID和md5加密后的appSecret登录。[(获取App ID及App Secret)](beforeDevelop.md#getappid)

- 调用接口：

```js
//设置服务器地址，如果使用云屋的云服务时填www.cloudroom.com，使用私有化部署的服务器时要填部署的服务器地址；此处以云屋的云服务为例。
CRVideo_SetServerAddr("www.cloudroom.com");

//登录
CRVideo_Login(appID, md5(appSecret), nickName, UID);
```

- 回调通知：

```js
//登录成功
CRVideo_LoginSuccess.callback = function(userID,cookie){

   //登录成功，开始创建房间，见 第3步
}

//登录失败
CRVideo_LoginFail.callback = function(sdkErr,cookie){

   //登录出错，可以弹出错误提示，或调用登录接口再次重试登录
}

//登录掉线
CRVideo_LineOff.callback=function(sdkErr){

}
```
 相关API请参考:
* [CRVideo_SetServerAddr](API.md#CRVideo_SetServerAddr)
* [CRVideo_Login](API.md#CRVideo_Login)
* [CRVideo_Logout](API.md#CRVideo_Logout)


<h2 id=create>3. 创建房间</h2>

 输入房间标题，创建一个没有密码的房间

- 调用接口：

```js
//创建房间
CRVideo_CreateMeeting("房间的的主题长度50字内")
```

- 回调通知：


```js
//创建房间成功
CRVideo_CreateMeetingSuccess.callback=function(meetObj,cookie){
    //创建成功，可以进入房间
}
//创建房间失败
CRVideo_CreateMeetingFail.callback = function(sdkErr,cookie){
    //创建失败，可以弹出错误提示，不能再执行 进入房间
}
```

 相关API请参考:
* [CRVideo_CreateMeeting](API.md#CRVideo_CreateMeeting)
* [CRVideo_CreateMeetingSuccess](API.md#CRVideo_CreateMeetingSuccess)
* [CRVideo_CreateMeetingFail](API.md#CRVideo_CreateMeetingFail)


<h2 id=enter>4. 进入房间</h2>

 用创建成功的房间信息（房间ID和密码）进入房间，其他用户也是利用此房间信息进入该房间。

- 调用接口：

```js
//进入房间
CRVideo_EnterMeeting(meetID, meetPswd, UID, nickName, cookie);
```

- 回调通知：

```js
//进入房间完成响应
CRVideo_EnterMeetingRslt.callback=function(sdkErr){
    if(sdkErr == CRVideo_NOERR){
         console.log("进入房间成功，可以继续下面第5步……");
    }else{
        console.log("进入房间失败，错误码："+sdkErr);
    }
}
//监控房间掉线
CRVideo_MeetingDropped.callback=function(){

}
```

 相关API请参考:
*  [CRVideo_EnterMeeting](API.md#CRVideo_EnterMeeting)


<h2 id=audio>5. 打开麦克风/摄像头</h2>

 紧接第4步，进入房间成功后，打开自己的麦克风和摄像头，以便本地、远端显示自己的视频图像

```js
//打开麦克风
CRVideo_OpenMic(UID)

//打开用户的摄像头，共4步
//1.创建
var myVideoUI = CRVideo_CreatVideoObj();  //调用接口，创建控件对象			
myVideoUI.id("me_video_obj");
$("div.meVideoContainer").append(myVideoUI.handler());   //meVideoContainer 为DOM树中显示的div元素，这里是把创建的控件放入DOM树中
     
//2.设置宽高    
myVideoUI.width(480);
myVideoUI.height(270);

//3.打开用户摄像头
CRVideo_OpenVideo(UID)

//4.设置视频流
setTimeout(function(){
    myVideoUI.setVideo(UID);
}, 500);

```
 相关API请参考：
* [CRVideo_CreatVideoObj](API.md#CRVideo_CreatVideoObj)
 

* [CRVideo_GetAllVideoInfo](API.md#CRVideo_GetAllVideoInfo)
* [CRVideo_SetVideoCfg](API.md#CRVideo_SetVideoCfg)
* [CRVideo_SetAudioCfg](API.md#CRVideo_SetAudioCfg)
* [CRVideo_OpenVideo](API.md#CRVideo_OpenVideo)
* [CRVideo_CloseVideo](API.md#CRVideo_CloseVideo)
* [CRVideo_SetDefaultVideo](API.md#CRVideo_SetDefaultVideo)
* [CRVideo_GetDefaultVideo](API.md#CRVideo_GetDefaultVideo)



<h2 id=watchOther>6. 观看他人视频</h2>


成功进入房间后，根据他人登录id ，设置并观看他人视频图像

- 接口调用：

```js
//1.调用接口，创建控件对象，显示他人视频图像
var otherVideoUI = CRVideo_CreatVideoObj();  			
otherVideoUI.id("other_video_obj");
$("div.otherVideoContainer").append(otherVideoUI.handler());   //把创建的控件放入DOM树中
     
//2.设置宽高    
otherVideoUI.width(480);
otherVideoUI.height(270);

//3.设置视频流
setTimeout(function(){
    otherVideoUI.setVideo(UID);  // 将成员的视频画面挂载在UI组件上。UID可通过CRVideo_GetAllMembers获取，或集成方业务逻辑确定
}, 500);

```


<h2 id=exit>7.退出房间</h2>



```js
//退出房间
CRVideo_ExitMeeting()
```
 相关API请参考:
* [CRVideo_ExitMeeting](API.md#CRVideo_ExitMeeting)
* [CRVideo_DestroyMeeting](API.md#CRVideo_DestroyMeeting)


<h2 id=logout> 8. 注销登录</h2>



 ```js
//注销本次登录
CRVideo_Logout()
```
 相关API请参考:
* [CRVideo_Logout](API.md#CRVideo_Logout)


<h2 id=uninit>9.反初始化，退出SDK</h2>



 执行反初始化后SDK功能不再可用。

```js
//反初始化
CRVideo_Uninit();
```

 相关API请参考:
* [CRVideo_Uninit](API.md#CRVideo_Uninit)



