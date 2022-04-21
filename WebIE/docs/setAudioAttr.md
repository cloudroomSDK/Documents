# 设置音频属性

## 功能介绍

成功进入房间后，可以设置音频设备、音量等。</br>
<font color=Red>注意：成功进入房间后，才可以设置音频属性。</font>

<h2 id=initAudio> 1.设置音频参数</h2>

- 调用接口：

```js
//获取系统上的麦克风列表，可用于CRVideo_SetAudioCfg
var audioList = CRVideo_GetAudioMicNames(); 

//获取系统上的扬声器列表，可用于CRVideo_SetAudioCfg
var audioSpkList = CRVideo_GetAudioSpkNames();

//设置音频参数,""和 0 为使用系统默认设备.也可以使用上面获取的机器上的某个设备
var cfg = {}; //构造json数据：CRVideo_AudioCfg
cfg.micName = "";
cfg.speakerName = "";
CRVideo_SetAudioCfg(cfg);

```

相关API请参考:
* [CRVideo_GetAudioMicNames](API.md#CRVideo_GetAudioMicNames)
* [CRVideo_GetAudioSpkNames](API.md#CRVideo_GetAudioSpkNames)
* [CRVideo_SetAudioCfg](API.md#CRVideo_SetAudioCfg)
* [CRVideo_GetAudioCfg](API.md#CRVideo_GetAudioCfg)

相关结构定义请参考：
* [CRVideo_AudioCfg](TypeDefinitions.md#CRVideo_AudioCfg)

<h2 id=openMic> 2.开关麦克风</h2>

```js
string UserID = "12345678";
//打开麦克风
CRVideo_OpenMic(UserID);
//关闭麦克风
CRVideo_CloseMic(UserID);
```

相关API请参考:
* [CRVideo_OpenMic](API.md#CRVideo_OpenMic)
* [CRVideo_CloseMic](API.md#CRVideo_CloseMic)
* [CRVideo_AudioStatusChanged](API.md#CRVideo_AudioStatusChanged)


<h2 id=setSpkVol> 3.设置通话音量</h2>

```js
//设置通话音量为最大（将系统扬声器的音量调到最大）
CRVideo_SetSpeakerVolume(255);

```

相关API请参考:
* [CRVideo_SetSpeakerVolume](API.md#CRVideo_SetSpeakerVolume)
* [CRVideo_GetSpeakerVolume](API.md#CRVideo_GetSpeakerVolume)
* [CRVideo_SetSpeakerMute](API.md#CRVideo_SetSpeakerMute)


<h2 id=setSpkVol> 4.麦克风音量调整</h2>

```js
//麦克风音量调整为最大
CRVideo_SetMicVolume(255);

```

相关API请参考:
* [CRVideo_SetMicVolume](API.md#CRVideo_SetMicVolume)
* [CRVideo_GetMicVolume](API.md#CRVideo_GetMicVolume)
* [CRVideo_MicEnergyUpdate](API.md#CRVideo_MicEnergyUpdate)



