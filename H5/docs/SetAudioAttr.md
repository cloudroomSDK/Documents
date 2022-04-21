
# 设置音频属性

## 功能介绍

成功进入房间后，可以设置音频设备、音量等。</br>
<font color=Red>注意：成功进入房间后，才可以设置音频属性。</font>

<h2 id=initAudio> 1.设置音频参数</h2>

```js
// 获取系统上的麦克风列表，可用于 CRVideo_SetAudioCfg
var audioMicList = CRVideo_GetAudioMicNames(); 

// 获取系统上的扬声器列表，可用于CRVideo_SetAudioCfg
var audioSpkList = CRVideo_GetAudioSpkNames();

//设置音频参数
var cfg = {
  micID: audioList[0].micID,  // 可通过CRVideo_GetAudioMicNames获取麦克风ID
  speakerID: audioSpkList[0].speakerID // 可通过CRVideo_GetAudioSpkNames接口获取扬声器ID
}; 
CRVideo_SetAudioCfg(cfg);

```

相关API请参考:
* [CRVideo_GetAudioMicNames](API.md#CRVideo_GetAudioMicNames)
* [CRVideo_GetAudioSpkNames](API.md#CRVideo_GetAudioSpkNames)
* [CRVideo_SetAudioCfg](API.md#CRVideo_SetAudioCfg)
* [CRVideo_GetAudioCfg](API.md#CRVideo_GetAudioCfg)

相关结构定义请参考：
* [CRVideo_AudioCfg](TypeDefinitions.md#CRVideo_AudioCfg)











