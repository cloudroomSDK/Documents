# 本地录制

## 功能介绍

用户可以对通讯过程进行录制并保存到终端设备。

- 录制画面可以根据业务场景自由拼接组合，包括本地摄像头、远端摄像头、远端共享的屏幕、影音播放、图片。支持同时启动多个录制。
- 录制格式支持 mp4、ts、flv，如果选择了 flv 和 ts 两种格式，即使录制过程中程序出现异常了，崩溃之前的录像仍然可用。
- 对于金融双录等安全性要求高的特定领域，支持对录制的文件进行加密，录制后直接把录像传到标准 http 服务器、OSS 或者云屋服务器。
- 本地加密过的录像只能通过 SDK 提供的播放器播放。


<h2 id=CreateMixer>1. 创建混图器</h2>

如下代码为创建自己摄像头和左上角叠加一个时间戳的相关示例。

```dart
// 	混图器唯一标识
 final String mixerId = "1";

// 混图器参数配置
CrMixerCfg cfg = CrMixerCfg(
      width: 360,
      height: 640,
      frameRate: 15,
      bitRate: 500000,
      defaultQP: 26,
      gop: 15);

// 混图器内容
List<CrMixerCotentRect> mcr = [
    // 混视频
    CrMixerCotentRect(
          userId: myUserId,
          camId: -1,
          type: CR_MIXER_VCONTENT_TYPE.MIXVTP_VIDEO,
          top: 0,
          left: 0,
          width: cfg.width,
          height: cfg.height),
    // 混时间戳
    CrMixerCotentRect(
          left: 0,
          top: 0,
          width: 175,
          height: 32,
          type: CR_MIXER_VCONTENT_TYPE.MIXVTP_TIMESTAMP)
]

// 创建混图器
CrSDK.instance.createLocMixer(mixerId, cfg, mcr).then((int sdkErr) {
    if (sdkErr == 0) {
        // 创建混图器成功
    } else {
        // 创建混图器失败
    }
});
```

相关 API 请参考:

- [createLocMixer](API.md#createLocMixer)
- [getDefaultVideo](API.md#getDefaultVideo)

相关结构定义请参考：

- [CrMixerCfg](TypeDefinitions.md#CrMixerCfg)
- [CrMixerCotentRect](TypeDefinitions.md#CrMixerCotentRect)

<h2 id=SetOutput>2. 添加输出到录像文件</h2>
</br>

```dart
    // 录制文件名称
    const String fileName = = "/sdcard/_Android.mp4";
    // 输出配置
    CrMixerOutPutCfg mixerOutPutCfg = CrMixerOutPutCfg(
        type: CR_MIXER_OUTPUT_TYPE.MIXOT_FILE,
        fileName: fileName
    );
    List<CrMixerOutPutCfg> mixerOutPutCfgs = [
        mixerOutPutCfg
    ];

    CrSDK.instance.addLocMixerOutput(mixerId, mixerOutPutCfgs).then((int sdkErr) {
        if (sdkErr == 0) {
            // 添加输出到录像文件成功
        } else {
            // 添加输出到录像文件失败
        }
    });
```

相关 API 请参考:

- [addLocMixerOutput](API.md#addLocMixerOutput)

相关结构定义请参考：

- [CrMixerOutPutCfg](TypeDefinitions.md#CrMixerOutPutCfg)

<h2 id=RecordingEvent>3. 录像回调处理</h2>

在此可获得录像文件的时长、大小、录像文件异常等信息

```dart
  @override
  void initState() {
    CrSDK.on("locMixerOutputInfo", locMixerOutputInfo);
    super.initState();
  }

  @override
  void dispose() {
    CrSDK.off("locMixerOutputInfo", locMixerOutputInfo);
    super.dispose();
  }
  
  // 在此可获得录像文件的时长、大小、录像文件异常等信息
  locMixerOutputInfo(CrMixerOutputInfo mixerOutputInfo) {}
```

相关 API 请参考:

- [locMixerOutputInfo](API.md#locMixerOutputInfo)


<h2 id=UpdateVideoContent>4. 更新图像内容</h2>

+ 更新混图器

```dart
// 根据混图器ID，更新对应的内容
CrSDK.instance.updateLocMixerContent(mixerId, mcr).then((int sdkErr) {
    if (sdkErr == 0) {
        // 更新混图器成功
    } else {
        // 更新混图器失败
    }
});
```

相关 API 请参考:

- [updateLocMixerContent](API.md#updateLocMixerContent)

<h2 id=RecordingEnd>5. 结束录制</h2>
</br>

```  dart
//消毁混图器，输出自动结束
CrSDK.instance.destroyLocMixer(mixerId).then((int sdkErr) {
    if (sdkErr == 0) {
        // 消毁混图器成功
    } else {
        // 消毁混图器失败
    }
});
```

相关API请参考:

+ [destroyLocMixer](API.md#destroyLocMixer)