
# 设置视频属性

## 功能介绍

在通话过程中可以根据实际业务场景，调整视频画面的清晰度和流畅度，提升用户体验。</br>
视频属性包含设置默认摄像头、视频分辨率、帧率、码率、降噪等。</br>
<font color=Red>注意：成功进入房间后，才可以设置视频属性。</font>

<h2 id=cfg> 1.摄像头参数配置</h2>

- 调用接口：

```js
//设置全局的摄像头参数,json数据：CRVideo_VideoCfg
var cfg = {};
cfg.sizeType = 8; //640*360
cfg.fps = 12
CRVideo_SetVideoCfg(cfg);

```
相关API请参考:
* [CRVideo_SetVideoCfg](API.md#CRVideo_SetVideoCfg)
* [CRVideo_GetVideoCfg](API.md#CRVideo_GetVideoCfg)

相关结构定义请参考：
* [CRVideo_VideoCfg](TypeDefinitions.md#CRVideo_VideoCfg)

<h2 id=denoise> 2.视频降噪设置</h2>

- 调用接口：

```js
//开启视频降噪
CRVideo_SetVideoDenoise(true);  //true 为开启

```

相关API请参考:
* [CRVideo_SetVideoDenoise](API.md#CRVideo_SetVideoDenoise)
* [CRVideo_GetVideoDenoise](API.md#CRVideo_GetVideoDenoise)












