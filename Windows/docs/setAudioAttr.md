# 设置音频属性

## 功能介绍

成功进入房间后，可以设置音频设备、音量等。</br>
<font color=Red>注意：成功进入房间后，才可以设置音频属性。</font>

<h2 id=initAudio> 1.设置音频参数</h2>

- 调用接口：

```csharp

//使用系统默认的麦克风和扬声器
string audiocfg = "[{\"micName\":\"\", \"speakerName\":\"\"}]";
axVideoSDK.setAudioCfg(audiocfg);

```

相关API请参考:
* [getAudioMicNames](API.md#getAudioMicNames)
* [getAudioSpkNames](API.md#getAudioSpkNames)
* [setAudioCfg](API.md#setAudioCfg)
* [getAudioCfg](API.md#getAudioCfg)


<h2 id=openMic> 2.开关麦克风</h2>


```csharp
string UserID = "12345678";
//打开麦克风
axVideoSDK.openMic(UserID);
//关闭麦克风
axVideoSDK.closeMic(UserID);
```

相关API请参考:
* [openMic](API.md#openMic)
* [closeMic](API.md#closeMic)
* [audioStatusChanged](API.md#audioStatusChanged)


<h2 id=setSpkVol> 3.设置通话音量</h2>

```csharp
//设置通话音量为最大（将系统扬声器的音量调到最大）
axVideoSDK.speakerVolume = 255;

```
相关API请参考:
* [speakerVolume](API.md#getSpeakerVolume)


<h2 id=setSpkVol> 4.麦克风音量调整</h2>

```csharp
//麦克风音量调整为最大
axVideoSDK.micVolume = 255;

```
相关API请参考:
* [micVolume](API.md#getMicVolume)
* [micEnergyUpdate](API.md#micEnergyUpdate)


