
# 设置视频属性

功能简介：  
在通话过程中可以根据实际业务场景，调整视频画面的清晰度和流畅度，提升用户体验。 视频属性一般包含视频清晰度、分辨率、帧率等。


<font color="#FF0000">注意：成功进入房间后，才可以设置视频属性。</font>

  -----

 
- 调用接口：
```html
<!-- 音视频推流组件-->
<CRVideoPusher userInfo='{{userInfo}}' config='{{CRVideoPusher}}' wx:if='{{userInfo}}'></CRVideoPusher>
```


```js
//音视频推流组件
const CRVideoPusher = {
  orientation: "vertical", //string类型，画面方向，可选值: "vertical"(默认)、"horizontal"
  aspect: "3:4", //string类型，宽高比，可选值有"3:4"(默认),"9:16"
  beauty: 5, //number类型，美颜，取值范围 0-9 ，0 表示关闭 ，默认值5
  whiteness: 5, //number类型，美白，取值范围 0-9 ，0 表示关闭 ，默认值5
  devicePosition: "front", //string类型，初始化使用前置或后置摄像头，值为"front"(默认), "back",如需切换摄像头请调用API
  minBitrate: 100, //number类型，最小码率,100的倍数，默认值100
  maxBitrate: 800, //number类型，最大码率,100的倍数，默认值800
  audioVolumeType: "media", //string类型，"media"(默认)媒体音量、"voicecall"(通话音量)，此修改将影响全局的音量设置
  waitingImage: "", //string类型，进入后台时推流的等待画面，填入完整URL或者绝对地址
  localMirror: "auto", //string类型，控制本地预览画面是否镜像,可选值："auto"(默认值，前置摄像头镜像，后置摄像头不镜像)、"enable"(前后置摄像头均镜像)、"disable"(前后置摄像头均不镜像)
  remoteMirror: false, //boolean类型，设置推流画面是否镜像,默认值false
  enableCamera: true, //boolean类型，打开摄像头，如需开关摄像头请调用API,默认值true
  muted: false, //boolean类型，是否静音，如需开关麦克风请调用API,默认值false
}
this.setData({ 
  userInfo: CR.GetMemberInfo(myUID),
  CRVideoPusher,
});  //配置音频对象

/*
支持动态修改的参数有：
orientation, aspect, beauty, whiteness, minBitrate, maxBitrate, audioVolumeType, waitingImage, localMirror, remoteMirror
其他属性请调用api接口变更
*/
this.setData({ 
  'CRVideoPusher.orientation': 'horizontal', //设置画面水平输出
  'CRVideoPusher.aspect': '9:16', //设置宽高比为9:16
});

CR.CloseVideo(myUID); //关闭摄像头
CR.OpenVideo(myUID); //打开摄像头
CR.SetDefaultVideo(myUID); //前后置摄像头切换

CR.CloseMic(myUID); //关闭麦克风
CR.OpenMic(myUID); //打开麦克风

```

相关API请参考:
* [CR.CloseVideo](API.md#CRVideo_CloseVideo)
* [CR.OpenVideo](API.md#CRVideo_OpenVideo)
* [CR.SetDefaultVideo](API.md#CRVideo_SetDefaultVideo)
* [CR.CloseMic](API.md#CRVideo_CloseMic)
* [CR.OpenMic](API.md#CRVideo_OpenMic)

相关组件请参考：
* [CRVideoPusher](API.md#CRVideoPusher)
