# 云端录制

## 功能介绍

在服务器上对房间内的音视频、白板、屏幕共享等通讯内容进行录制，支持自定义录制内容和布局，录制文件在服务器保存，可以通过[WEB API](/sdk/document/netdisk/netdisk_query?platform=serverside)下载和删除。

<h2 id=startSvrMixer>1. 开始云端录制</h2>

如下代码为创建自己摄像头和左上角叠加一个时间戳的相关示例。

```dart
    CrMixerCfg mixerCfg = CrMixerCfg(width: 360, height: 640, frameRate: 15, bitRate: 2000000));
    // 混图器配置
    List<CrMutiMixerCfg> mutiMixerCfgs = [
    CrMutiMixerCfg(
        id: mixerId,
        streamTypes: CR_STREAM_TYPES.AUDIOANDVIDEO,
        mixerCfg: mixerCfg,
    ];

    final List<CrMutiMixerContent> mutiMixerContents = [
      CrMutiMixerContent(
          width: mixerCfg.width,
          height: mixerCfg.height,
          left: 0,
          top: 0,
          type: CR_MIXER_VCONTENT_TYPE.MIXVTP_VIDEO,
          keepAspectRatio: CR_KEEP_ASPECT_RATIO.KEEP,
          mutiMixerContentParams: CrMutiMixerContentParams(
              camid: MyUserId.videoID,
      CrMutiMixerContent(
          left: 0,
          top: 0,
          width: 175,
          height: 32,
          type: CR_MIXER_VCONTENT_TYPE.MIXVTP_TIMESTAMP,
          keepAspectRatio: CR_KEEP_ASPECT_RATIO.KEEP), // 混时间戳
    ];

    // 混图器输出录像配置
    List<CrMutiMixerOutputCfg> mutiMixerOutputCfgs = [
        CrMutiMixerOutputCfg(type: CR_MIXER_OUTPUT_TYPE.MIXOT_FILE, filename: filename)
    ];
    // 混图器输出录像
    List<CrMutiMixerOutput> mutiMixerOutput = [
        CrMutiMixerOutput(id: mixerId, mutiMixerOutputCfgs: mutiMixerOutputCfgs)
    ];

    // 开始云端录制
    CrSDK.instance.startSvrMixer(mutiMixerCfgs, mutiMixerContents, mutiMixerOutput).then((int sdkErr) {
        if (sdkErr == 0) {
            // 开始云端录制成功
        } else {
            // 开始云端录制失败
        }
    });
```

<h2 id=svrMixerOutputInfo>2. 云端录制文件信息变化通知</h2>


```dart
  @override
  void initState() {
    CrSDK.on("svrMixerOutputInfo", svrMixerOutputInfo);
    super.initState();
  }

  @override
  void dispose() {
    CrSDK.off("svrMixerOutputInfo", svrMixerOutputInfo);
    super.dispose();
  }
  
  // 在此可获得录像文件的时长、大小、录像文件异常等信息
  svrMixerOutputInfo(CrMixerOutputInfo mixerOutputInfo) {}
```
相关API请参考:
+ [svrMixerOutputInfo](API.md#svrMixerOutputInfo)

<h2 id=updateSvrMixerContent>3. 更新云端录制内容</h2>

```dart
CrSDK.instance.updateSvrMixerContent(mutiMixerContents).then((int sdkErr) {
    if (sdkErr == 0) {
        // 更新云端录制成功
    } else {
        // 更新云端录制失败
    }
});
```

相关API请参考:
+ [updateSvrMixerContent](API.md#updateSvrMixerContent)


<h2 id=obtainStatue>4. 获取云端录制状态</h2>
</br>

``` dart
//获取云端录制状态
CR_MIXER_STATE state = CrSDK.instance.getSvrMixerState();
```

相关API请参考:
+ [getSvrMixerState](API.md#getSvrMixerState)

相关结构定义请参考：
+ [CR_MIXER_STATE](Constant.md#CR_MIXER_STATE)



<h2 id=stopSvrMixer>5.停止云端录制</h2>

停止云端录制，也会触发事件[svrMixerStateChanged](API.md#svrMixerStateChanged)

- 接口调用：
```dart
CrSDK.instance.stopSvrMixer();
```

相关API请参考:
+ [stopSvrMixer](API.md#stopSvrMixer)
+ [svrMixerStateChanged](API.md#svrMixerStateChanged)