# 设置音频属性

## 功能简介

在视频通话中，用户可以设置音频属性。

<font color="#FF0000">注意：成功进入房间后，才可以设置音频属性。</font>

<h2 id=initAudio> 1.设置音频参数</h2>


- 调用接口：
```html
<!-- 音频拉流组件 -->
<CRAudioPlayer config='{{CRAudioPlayer}}' wx:if='{{CRAudioPlayer}}'></CRAudioPlayer>
```

```js
//音频拉流组件
const CRAudioPlayer = {
  soundMode: 'speaker', // 声音输出方式，有效值为 speaker（扬声器）、ear（听筒）
}
this.setData({ CRAudioPlayer });  //配置音频对象

this.setData({ 'CRAudioPlayer.soundMode': 'ear'});  //设置声音从听筒输出
```

相关组件请参考:
* [CRAudioPlayer](API.md#CRAudioPlayer)


<h2 id=openMic> 2.开关麦克风</h2>


```js
CR.OpenMic(UID); //打开麦克风

CR.CloseMic(UID); //关闭麦克风
```

相关API请参考:
* [CR.OpenMic](API.md#CRVideo_OpenMic)
* [CR.CloseMic](API.md#CRVideo_CloseMic)
* [CR.AudioStatusChanged](API.md#CRVideo_AudioStatusChanged)

