# 屏幕共享

## 功能介绍

在视频会话中为了提高沟通效率，可以将自己的屏幕内容分享给其他参与方观看。还支持在屏幕上进行标注，以及授权其他参与方进行远程控制。当屏幕共享者开启标注后，控件就进入标注模式。此时，房间内所有用户都可以进行标注，并观看他人标注的内容。
使用场景如下：

- 视频会议场景中，屏幕共享可以将讲话者本地的文件、数据、网页、PPT 等画面分享给其他与会人；
- 在线课堂场景中，屏幕共享可以将老师的课件、笔记、讲课内容等画面展示给学生观看。

:::danger

注意：同一个房间中，不支持多人同时开启屏幕共享。

:::

<h2 id=shareview>共享端</h2>

<h3 id=initShareScreenUI>1.创建屏幕共享观看组件</h3>

<!--
/* 注：共享屏幕需要相应授权，请添加下面权限申请界面声明到主配置文件
<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
<activity
	android:name="com.cloudroom.screencapture.PermissionActivity"
	android:configChanges="orientation|uiMode|screenLayout|screenSize|smallestScreenSize|locale|fontScale|keyboard|keyboardHidden|navigation"
	android:launchMode="singleTop"
	android:screenOrientation="sensor" >
</activity>
<service android:name="com.cloudroom.screencapture.ScreenCaptureService"
    android:exported="false"
    android:enabled="true"
    android:foregroundServiceType="mediaProjection" />
 */
-->

```dart
// 创建屏幕共享观看组件
Widget _screenViewWidget =
    CrSDK.instance.createScreenShareView((int viewID) {
    _screenViewID = viewID;
});
```

<h3 id=startshare>2.开始共享</h3>

```dart
// 配置共享参数
CrSDK.instance.getScreenShareCfg().then((CrScreenShareCfg cfg) {
      cfg.maxBps = 2000000;
      cfg.maxFps = 12;
      CrSDK.instance.setScreenShareCfg(cfg);
    });

// 开始共享
CrSDK.instance.startScreenShare().then((int sdkErr) {
    if (sdkErr == 0) {
        // 共享成功
    } else {
        // 共享失败
    }
});
```

相关 API 请参考：

- [getScreenShareCfg](API.md#getScreenShareCfg)
- [setScreenShareCfg](API.md#setScreenShareCfg)
- [startScreenShare](API.md#startScreenShare)
- [notifyScreenShareStarted](API.md#notifyScreenShareStarted)

<h3 id=stopshare>3.停止共享</h3>

```dart
// 停止共享
CrSDK.instance.stopScreenShare().then((int sdkErr) {
    if (sdkErr == 0) {
        // 共享成功
    } else {
        // 共享失败
    }
});
```

<h2 id=viewsharescreen>观看端</h2>

<h3 id=initShareScreenUI1>1.创建屏幕共享观看组件</h3>

```dart
// 创建屏幕共享观看组件
Widget _screenViewWidget =
    CrSDK.instance.createScreenShareView((int viewID) {
    _screenViewID = viewID;
});
```

<h3 id=subscribe>2.订阅通知</h3>

```dart
    @override
    void initState() {
        CrSDK.on("notifyScreenShareStarted", notifyScreenShareStarted);
        CrSDK.on("notifyScreenShareStopped", notifyScreenShareStopped);
        CrSDK.on("notifyScreenMarkStarted", notifyScreenMarkStarted);
        CrSDK.on("notifyScreenMarkStopped", notifyScreenMarkStopped);
        super.initState();
    }

    @override
    void dispose() {
        CrSDK.off("notifyScreenShareStarted", notifyScreenShareStarted);
        CrSDK.off("notifyScreenShareStopped", notifyScreenShareStopped);
        CrSDK.off("notifyScreenMarkStarted", notifyScreenMarkStarted);
        CrSDK.off("notifyScreenMarkStopped", notifyScreenMarkStopped);
        super.dispose();
    }

    // 通知开启屏幕共享
    void notifyScreenShareStarted() {}

    // 通知停止屏幕共享
    void notifyScreenShareStopped() {}

    // 通知开启屏幕共享标注
    void notifyScreenMarkStarted() {}

    // 通知停止屏幕共享标注
    void notifyScreenMarkStopped() {}
```

相关API请参考：

- [notifyScreenShareStarted](API.md#notifyScreenShareStarted)
- [notifyScreenShareStopped](API.md#notifyScreenShareStopped)
- [notifyScreenMarkStarted](API.md#notifyScreenMarkStarted)
- [notifyScreenMarkStopped](API.md#notifyScreenMarkStopped)