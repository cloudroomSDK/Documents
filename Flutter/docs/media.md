# 影音播放

## 功能介绍

把本地的一个视频文件播放给房间内其他用户观看，播放进度完全由播放端控制。
影音播放功能介绍分为播放端和观看端两部分。

:::danger

注意：一个房间中同一时间只支持进行一个影音播放。支持的影音文件格式有： mov、rmvb、rm、flv、mp4、3gp 等。

:::

<h2 id="playMedia">播放端</h2>

<h3 id=MediaUIView>1. 创建影音播放UI显示组件</h3>

使用可视化 UI 组件进行影音播放

```dart
Widget _mediaViewWidget = CrSDK.instance.createMediaView((viewID) {
    _mediaViewID = viewID;
});
```

相关 API 请参考:

- [createMediaView](API.md#createMediaView)

<h3 id=videoCfg>2. 播放配置</h3>

此配置主要是为了定义共享播放时房间内其他人看到的效果

```dart
CrVideoCfg cfg = CrVideoCfg(
    size: CrSize(width: 360, height: 640), // 视频尺寸(如:"640*360")
    fps: 20, // 帧率：视频帧率(5~30)
)
CrSDK.instance.setMediaCfg(cfg);
```

相关 API 请参考:

- [setMediaCfg](API.md#setMediaCfg)

相关结构定义请参考:

- [CrVideoCfg](TypeDefinitions.md#CrVideoCfg)

<h3 id=PlayAndStop>3. 播放、暂停、停止</h3>

每次只能播放一个视频，当前播放需要先停止然后才能进行下一个视频播放；
开始播放参数可控制此播放是只有自己可见还是房间内所有人可见。

```java
//开始播放，如果不需要远端需要观看配合bLocPlay为true
CrSDK.instance.startPlayMedia("/sdcard/RecordDemo/CloudroomVideoSDK/4.mp4", false);

//暂停播放
CrSDK.instance.pausePlayMedia(false);

//继续播放
CrSDK.instance.pausePlayMedia(true);

//停止当前播放
CrSDK.instance.stopPlayMedia();
```

相关 API 请参考:

- [startPlayMedia](API.md#startPlayMedia)
- [pausePlayMedia](API.md#pausePlayMedia)
- [stopPlayMedia](API.md#stopPlayMedia)

<h3 id=VideoProgress>4.设置播放进度</h3>

可以通过播放组件上的工具条拖动来调整播放进度，也可以用代码来设置播放的进度

```dart
//以毫秒为单位
int pos = 60 * 1000;
CrSDK.instance.setMediaPlayPos(pos);
```

相关 API 请参考:

- [setMediaPlayPos](API.md#setMediaPlayPos)

<h2 id="viewMedia">观看端</h2>

<h3 id=ScreenShareUIView>1. 创建影音观看UI显示组件</h3>

使用影音观看 UI 组件进行屏幕共享显示

```dart
Widget _mediaViewWidget = CrSDK.instance.createMediaView((viewID) {
    _mediaViewID = viewID;
});

// 获取当前房间影音状态
CrSDK.instance.getMediaInfo().then((CrMediaInfo mediaInfo) {});
```

相关 API 请参考:

- [createMediaView](API.md#createMediaView)

相关结构定义请参考:

- [CrMediaInfo](TypeDefinitions.md#CrMediaInfo)

<h3 id=watchMedia>2. 观看共享通知</h3>
</br>

- 接口调用：

```dart
  @override
  void initState() {
    CrSDK.on("notifyMediaStart", notifyMediaStart);
    CrSDK.on("notifyMediaPause", notifyMediaPause);
    CrSDK.on("notifyMediaStop", notifyMediaStop);
    super.initState();
  }

  @override
  void dispose() {
    CrSDK.off("notifyMediaStart", notifyMediaStart);
    CrSDK.off("notifyMediaPause", notifyMediaPause);
    CrSDK.off("notifyMediaStop", notifyMediaStop);
    super.dispose();
  }

  // 通知影音开始播放
  void notifyMediaStart(CrMediaNotify data) {}

  // 通知影音是否暂停播放
  void notifyMediaPause(CrMediaNotify data) {}

  // 通知停止影音共享
  void notifyMediaStop(CrMediaNotify data) {}
```

相关 API 请参考:

- [notifyMediaStart](API.md#notifyMediaStart)
- [notifyMediaPause](API.md#notifyMediaPause)
- [notifyMediaStop](API.md#notifyMediaStop)

相关结构定义请参考:

- [CrMediaNotify](TypeDefinitions.md#CrMediaNotify)
