---
sidebarDepth: 1
---

# 实现音视频通话

<!-- - 快速创建并进入房间，开始音视频通话；以下均为Java代码，详细代码请参考Examples目录下Demo源代码。

- 请先完成[SDK集成准备](BeforeDevelop.md#beforeDev)，并确认测试设备工作正常。

--- -->

基本步骤如下：

<!-- 1. [初始化 SDK](#init) -->
<!-- 1. [硬件加速视频渲染](#hardwareAccelerated) -->
<!-- 1. [登录连接视频服务器](#login)
1. [创建房间](#create)
1. [进入房间](#enter)
1. [打开麦克风/摄像头](#audio)
1. [观看他人视频](#watchOther)
1. [退出房间](#exit)
1. [注销登录](#logout)
1. [反初始化，退出 SDK](#uninit) -->

<h2 id=init>1. 初始化SDK</h2>

初始化是整个 SDK 的使用基础，通常在程序启动的时候进行初始化([init](API.md#init))，退出的时候进行反初始化([uninit](API.md#uninit))，整个程序的生命周期中只进行一次初始化和反初始化。

SDK 内部的组件多为单例组件，整个程序中只能有一个实例，比如“基础组件”，“房间管理组件”，“视频房间组件”，具体请参见各个组件说明。

```dart
  // SDK初始化数据对象
  CrSdkInitDat sdkInitDat =
      CrSdkInitDat(sdkDatSavePath: path, noCall: true, noQueue: true);

  // 初始化SDK
  CrSDK.instance.init(sdkInitDat);
```

相关 API 请参考:

- [init](API.md#init)

相关结构定义请参考:

- [CrSdkInitDat](TypeDefinitions.md#CrSdkInitDat)

<h2 id=login>2. 登录连接视频服务器</h2>

设置视频服务器地址，使用云屋授权账号和自定义用户编号登录

- 调用接口：

```dart
// 设置服务器地址
CrSDK.instance.setServerAddr(server);

// 登录数据对象
CrLoginDat config = CrLoginDat(
    nickName: nickName, // 昵称
    privAcnt: privAcnt, // 用户ID
    appID: appID, // appID，使用开通SDK的账号
    appSecret: appSecret // appSecret必须做MD5处理
  );
// 执行登录操作
CrSDK.instance.login(config);
```

- 订阅通知:

```dart
//掉线
@override
void initState() {
  CrSDK.on("lineOff", lineOff);
  super.initState();
}

@override
void dispose() {
  CrSDK.off("lineOff", lineOff);
  super.dispose();
}

lineOff(int sdkErr) {}
```

相关 API 请参考:

- [setServerAddr](API.md#setServerAddr)
- [login](API.md#login)
- [lineOff](API.md#lineOff)

<h2 id=create>4. 创建房间</h2>

创建一个房间

- 调用接口：

```dart
// 创建房间
CrSDK.instance.createMeeting().then((CrMeetInfo meetInfo) {
  if (meetInfo.sdkErr == 0) {
    // 创建房间成功
  } else {
    // 创建房间失败
  }
});
```

相关 API 请参考:

- [createMeeting](API.md#createMeeting)

<h2 id=enter>5. 进入房间</h2>

用创建成功的房间 ID 进入房间，其他用户也是利用此房间信息进入该房间。

- 调用接口：

```dart
CrSDK.instance.enterMeeting(confId).then((int sdkErr) {
});
```

相关 API 请参考:

- [enterMeeting](API.md#enterMeeting)
- [exitMeeting](API.md#exitMeeting)

<h2 id=audio>6. 打开麦克风/摄像头</h2>

紧接第 5 步，进入房间成功后，创建视频容器，打开自己的麦克风和摄像头，以便本地、远端显示自己的视频图像

```dart
// 用户摄像头信息，-1表示观看默认摄像头
CrUsrVideoId usrVideoId = CrUsrVideoId(userId: myUserID, videoID: -1);

// 创建视频
Widget view = CrSDK.instance.createPlatformView((viewID) {
  CrSDK.instance.setUsrVideoId(viewID, usrVideoId);
});

// 打开摄像头
CrSDK.instance.openVideo(myUserID);

// 打开麦克风
CrSDK.instance.openMic(myUserID);

// 开启外放
CrSDK.instance.setSpeakerOut(true);

// 获取摄像头的相关配置
CrVideoCfg cfg = CrSDK.instance.getVideoCfg();
//配置分辨率为640x360
cfg.size = CrSize(640, 360);
//配置视频帧率
cfg.fps = 25;

// 保存摄像头配置到SDK
CrSDK.instance.setVideoCfg(cfg);
```

相关 API 请参考:

- [getAllVideoInfo](API.md#getAllVideoInfo)
- [setDefaultVideo](API.md#setDefaultVideo)
- [openVideo](API.md#openVideo)
- [openMic](API.md#openMic)
- [setSpeakerOut](API.md#setSpeakerOut)
- [getVideoCfg](API.md#getVideoCfg)
- [setVideoCfg](API.md#setVideoCfg)

相关结构定义请参考:

- [CrVideoCfg](TypeDefinitions.md#CrVideoCfg)

<h2 id=watchOther>7. 观看他人视频</h2>

成功进入房间后，根据他人登录用户 id ，设置并观看他人视频图像

设置成员视频 UI 显示组件的相关摄像头 Id

```dart
// 创建成员视频 UI 显示组件

// 设置观看对方视频
CrSDK.instance.getWatchableVideos().then((List<CrUsrVideoId> usrVideoIds) {
  for (CrUsrVideoId uvi in usrVideoIds) {
    if (uvi.userId != myUserID) {
      Widget view = CrSDK.instance.createPlatformView((viewID) {
        CrSDK.instance.setUsrVideoId(viewID, uvi);
      });
    }
  }
});
```

相关 API 请参考:

- [getWatchableVideos](API.md#getWatchableVideos)

相关结构定义请参考:

- [CrUsrVideoId](TypeDefinitions.md#CrUsrVideoId)

<h2 id=exit>8. 退出房间</h2>
</br>

```dart
// 根据viewId删除创建的容器
CrSDK.instance.destroyPlatformView(viewId);
// 离开房间
CrSDK.instance.exitMeeting();
```

相关 API 请参考:

- [exitMeeting](API.md#exitMeeting)

<h2 id=logout> 9. 注销登录</h2>
</br>

```dart
//注销本次登录
CrSDK.instance.logout();
```

相关 API 请参考:

- [logout](API.md#logout)

<h2 id=uninit>10. 反初始化，退出SDK</h2>

执行反初始化后 SDK 功能不再可用。

```dart
//反初始化
CrSDK.instance.unInit();
```

相关 API 请参考:

- [unInit](API.md#uninit)
