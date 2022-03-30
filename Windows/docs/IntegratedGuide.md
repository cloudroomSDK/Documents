# 实现音视频通话

## 简要说明

- 快速创建并进入房间，开始音视频通话；代码部分均为 C# 代码，详细代码请参考 Examples 目录下 Demo 源代码。
- 请先完成[开发环境准备](beforeDevelop.md#beforeDev)，并确认音视频设备工作正常。

<h2 id=init>1. 初始化SDK</h2>

 初始化是整个SDK的使用基础，通常在程序启动的时候进行初始化([init_2](API.md#init2))，退出后进行反初始化([uninit](API.md#uninit))，整个程序的生命周期中只进行一次初始化和反初始化。

```csharp

//初始化 sdkUsePath 是SDK工作目录，用于存储配置文件、临时文件等，如果传空值，则默认为sdk的安装目录
string sdkUsePath = "";
CRVIDEOSDK_ERR_DEF err = axVideoSDK.init_2(sdkUsePath);
/初始化失败会返回对应的错误码
if(err == CRVIDEOSDK_NOERR){
    Console.WriteLine("初始化成功，可以继续下面第 2 步……");
}else {
    Console.WriteLine("初始化控件失败");
}
```

设置回调函数

```csharp

//登录成功回调
axVideoSDK.loginSuccess += loginSuccess;
//登录失败回调 可以弹出错误提示，或调用登录接口再次重试登录
axVideoSDK.loginFail += loginFailed;
//登录掉线回调 可以弹出提示，或调用登录接口再次重试登录
axVideoSDK.lineOff += lineOff;
//创建房间成功
axVideoSDK.createMeetingSuccess += createMeetingSuccess;
//创建房间失败
axVideoSDK.createMeetingFail    += createMeetingFailed;
//进入房间的完成响应
axVideoSDK.enterMeetingRslt += enterMeetingRslt;
//房间断线通知
axVideoSDK.meetingDropped += meetingDropped;
...
//更多回调
...

```
 相关API请参考:
* [init_2](API.md#init2)


<h2 id=login>2. 登录连接视频服务器</h2>

 设置视频服务器地址，然后使用appID和md5加密后的appSecret登录。[(获取App ID及App Secret)](beforeDevelop.md#getappid)

- 调用接口：

```csharp
//如果使用云屋的云服务时填www.cloudroom.com，使用私有化部署的服务器时要填部署的服务器地址；此处以云屋的云服务为例。
axVideoSDK.serverAddr = "www.cloudroom.com";
string g_nickname = "昵称" //用户的昵称
//登录
//appSecret 需要进行md5加密传入进去
axVideoSDK.login(appID, md5(appSecret), g_nickname, UID, "", "");
```

- 回调通知：

```csharp
//登录成功  可以开始创建房间，见 第3步
void loginSuccess(object sender, ICloudroomVideoMgrEvents_loginSuccessEvent e)
{
    Console.WriteLine("loginSuccess:" + e.p_usrID);
}
//登录失败 可以弹出错误提示，或调用登录接口再次重试登录
void loginFailed(object sender, ICloudroomVideoMgrEvents_loginFailEvent e)
{
   Console.WriteLine("loginFailed:" + e.p_sdkErr);
}
//登录掉线 可以弹出提示，或调用登录接口再次重试登录
void lineOff(object sender, ICloudroomVideoMgrEvents_lineOffEvent e)
{
  Console.WriteLine("lineOff");
}
```
 相关API请参考:
* [serverAddr](API.md#serverAddr)
* [login](API.md#CRVideo_Login)
* [logout](API.md#logout)


<h2 id=create>3. 创建房间</h2>

- 调用接口：

```csharp
//创建房间
axVideoMgr.createMeeting2("", "");
```

- 回调通知：

```csharp
//创建房间成功 可以进入房间
void createMeetingSuccess(object sender, ICloudroomVideoMgrEvents_createMeetingSuccessEvent e){
    Console.WriteLine("create meeting succeed...");
}

//创建房间失败 可以弹出错误提示
void createMeetingFailed(object sender, ICloudroomVideoMgrEvents_createMeetingFailEvent e)
{
     Console.WriteLine("createMeetingFailed...");
}

```

 相关API请参考:
* [createMeeting](API.md#createMeeting2)
* [createMeetingSuccess](API.md#createMeetingSuccess)
* [createMeetingFailed](API.md#createMeetingFail)


<h2 id=enter>4. 进入房间</h2>

 用创建成功的房间信息（房间ID）进入房间，其他用户也是利用此房间信息进入该房间。

- 调用接口：

```csharp
//进入房间
axVideoSDK.enterMeeting3(MeetingID);
```

- 回调通知处理：

```csharp
//进入房间的完成响应
void enterMeetingRslt(object sender, ICloudroomVideoMeetingEvents_enterMeetingRsltEvent e)
{
  if (e.p_sdkErr != (int)VCALLSDK_ERR_DEF.VCALLSDK_NOERR)
  {
    Console.WriteLine("入会失败，请重试，代码：:" + CRError.Instance.getError(e.p_sdkErr));
  } else{
    Console.WriteLine("入会成功!");
  }
}
//监控房间掉线
void meetingDropped(object sender, EventArgs e)
{
   Console.WriteLine("meetingDropped");
}
```

 相关API请参考:
*  [enterMeeting3](API.md#enterMeeting)


<h2 id=audio>5. 打开麦克风/摄像头</h2>

 进入房间成功后，打开自己的麦克风和摄像头，以便本地、远端显示自己的视频图像

```csharp
//打开自己的麦克风
axVideoSDK.openMic(myUID);
//打开自己的摄像头
axVideoSDK.openVideo(myUID);
//让axVideoUI1显示我的默认摄像头的视频
axVideoUI1.setVideo(myUID, -1);

```
 相关API请参考：
* [setVideo](API.md#setVideo)
* [getAllVideoInfo](API.md#getAllVideoInfo)
* [setVideoCfg](API.md#setVideoCfg)
* [setAudioCfg](API.md#setAudioCfg)
* [openVideo](API.md#openVideo)
* [closeVideo](API.md#closeVideo)
* [setDefaultVideo](API.md#setDefaultVideo)
* [getDefaultVideo](API.md#getDefaultVideo)



<h2 id=watchOther>6. 观看他人视频</h2>


成功进入房间后，根据他人登录id ，设置并观看他人视频图像

- 接口调用：

```csharp
//axVideoUI2显示12345678的默认摄像头的视频
string peerUid = "12345678";
axVideoUI2.setVideo(peerUid, -1);

```


<h2 id=exit>7.退出房间</h2>


```csharp
//退出房间
axVideoSDK.exitMeeting()
```
 相关API请参考:
* [exitMeeting](API.md#exitMeeting)
* [destroyMeeting](API.md#destroyMeeting)


<h2 id=logout> 8. 注销登录</h2>



 ```csharp
//注销本次登录
axVideoSDK.logout()
```
 相关API请参考:
* [logout](API.md#logout)


<h2 id=uninit>9.反初始化，退出SDK</h2>


 执行反初始化后SDK功能不再可用。

```csharp
//反初始化
axVideoSDK.uninit();
```

 相关API请参考:
* [uninit](API.md#uninit)
