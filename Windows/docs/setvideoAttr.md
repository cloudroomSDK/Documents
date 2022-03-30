# 设置视频属性

## 功能介绍

在通话过程中可以根据实际业务场景，调整视频画面的清晰度和流畅度，提升用户体验。</br>
视频属性包含设置默认摄像头、视频分辨率、帧率、码率、降噪等。</br>
<font color=Red>注意：成功进入房间后，才可以设置视频属性。</font>

<h2 id=cfg> 1.摄像头参数配置</h2>

- 调用接口：

```csharp

//设置摄像头编码输出为160*96，帧率12，其他采用默认设置, VideoCfgObj 参考其类型定义
string videocfg = "[{\"size\":\"160*96\",\"fps\":12}]";
axVideoSDK.setVideoCfg(videocfg);

```
相关API请参考:
* [setVideoCfg](API.md#setVideoCfg)
* [getVideoCfg](API.md#getVideoCfg)


<h2 id=denoise> 2.视频降噪设置</h2>

- 调用接口：

```csharp
//开启视频降噪
string str = "[{\"denoise\":1}]";
axVideoSDK.setVideoEffects(str);

```

相关API请参考:
* [setVideoEffects](API.md#setVideoEffects)
* [getVideoEffects](API.md#getVideoEffects)
