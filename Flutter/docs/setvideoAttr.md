# 设置视频属性

功能简介：
在通话过程中可以根据实际业务场景，调整视频画面的清晰度和流畅度，提升用户体验。
视频属性一般包含视频分辨率、帧率、码率、降噪等。

:::danger

注意：成功进入房间后，才可以设置视频属性。

:::

---

<!-- <p >设置视频属性功能操作如下： </p>

1. [摄像头参数配置](#videoCfg)
2. [保持视频比例](#KeepAspectRatio) -->

<h2 id=videoCfg>1. 摄像头参数配置</h2>
</br>

```dart
CrVideoCfg cfg = CrVideoCfg(
    size: CrSize(width: 360, height: 640), // 视频尺寸(如:"640*360")
    fps: 15, // 帧率：视频帧率(5~30)
    maxbps: 750000, // 视频码率（1000~100000000, 例如1m:1000000);
    qp_min: 22, // 最佳质量(18~51, 越小质量越好) (未配置则使用内部默认值22)
    qp_max: 32 // 最差质量(18~51, 越大质量越差) (未配置则使用内部默认值32)
)

//设置摄像头的相关配置
CrSDK.instance.setVideoCfg(cfg);
```

相关 API 请参考：

- [getVideoCfg](API.md#getVideoCfg)
- [setVideoCfg](API.md#setVideoCfg)

相关结构定义请参考:

- [CrVideoCfg](TypeDefinitions.md#CrVideoCfg)

<h2 id=KeepAspectRatio>2. 保持视频比例</h2>

控件默认保持视频显示控件内的摄像头视频比例不受到控件长宽的影响，多余部分会以黑色边框显示，也可设置视频显示控件的主调方法使其视频不再保持比例。

<p style="color:red; font-size:16px"> 注意：建议设置保持视频比例， 否则显示视频容易产生变形。</p>

```dart
// 获取比例
int scaleType = CrSDK.instance.getScaleType(viewID);

// 设置比例
CrSDK.instance.setScaleType(viewID, 1);
```

相关 API 请参考：

- [getScaleType](API.md#getScaleType)
- [setScaleType](API.md#setScaleType)