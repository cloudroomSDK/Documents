# 设置音频属性

## 功能介绍

在视频通话中，用户可以设置音频属性。

<font color="#FF0000">注意：成功进入房间后，才可以设置音频属性。</font>

<h2 id=initAudio> 1.设置音频参数</h2>


- 调用接口：
```html
<!-- 音频拉流组件 -->
<RTCAudioPlayer config='{{RTCAudioPlayer}}' wx:if='{{RTCAudioPlayer}}'></RTCAudioPlayer>
```

```js
//音频拉流组件
const RTCAudioPlayer = {
  soundMode: 'speaker', // 声音输出方式，有效值为 speaker（扬声器）、ear（听筒）
}
this.setData({ RTCAudioPlayer });  //配置音频对象

this.setData({ 'RTCAudioPlayer.soundMode': 'ear'});  //设置声音从听筒输出
```

相关组件请参考:
* [RTCAudioPlayer](API.md#RTCAudioPlayer)


<h2 id=openMic> 2.开关麦克风</h2>


```js
RTCSDK.OpenMic(UID); //打开麦克风

RTCSDK.CloseMic(UID); //关闭麦克风
```

相关API请参考:
* [OpenMic](API.md#CRVideo_OpenMic)
* [CloseMic](API.md#CRVideo_CloseMic)
* [AudioStatusChanged](API.md#CRVideo_AudioStatusChanged)

