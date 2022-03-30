
# 设置视频属性

功能简介：  
在通话过程中可以根据实际业务场景，调整视频画面的清晰度和流畅度，提升用户体验。 视频属性一般包含视频清晰度、分辨率、帧率等。


<font color="#FF0000">注意：成功进入房间后，才可以设置视频属性。</font>

  -----

 
- 调用接口：

```js
//设置全局的摄像头参数,json数据：CRVideo_VideoCfg
var cfg = {
  size: 2,
  fps: 20,
  ratio: 1
};
CRVideo_SetVideoCfg(cfg);

```
相关API请参考:
* [CRVideo_SetVideoCfg](API.md#CRVideo_SetVideoCfg)
* [CRVideo_GetVideoCfg](API.md#CRVideo_GetVideoCfg)

相关结构定义请参考：
* [CRVideo_VideoCfg](TypeDefinitions.md#CRVideo_VideoCfg)
