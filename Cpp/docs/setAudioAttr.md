# 设置音频属性

## 功能介绍

成功进入房间后，可以设置音频设备、音量等。</br>
<font color=Red>注意：成功进入房间后，才可以设置音频属性。</font>

## 示例项目

云屋SDK 在 GitHub 上提供已经实现[设置音频属性](https://github.com/cloudroomSDK/API-Demo/tree/main/Linux/src/TestAudioSetting)功能的开源示例项目。你可以下载体验或查看其中的源代码。

<h2 id=initAudio> 1.设置音频参数</h2>

- 调用接口：

```cpp

//获取所有的麦克风和扬声器设备
CRBase::CRArray<CRAudioDevInfo> micDevs = g_sdkMain->getSDKMeeting().getAudioMics();
CRBase::CRArray<CRAudioDevInfo> spkDevs = g_sdkMain->getSDKMeeting().getAudioSpks();

//显示当前配置
CRAudioCfg aCfg = g_sdkMain->getSDKMeeting().getAudioCfg();

//设置当前的麦克风/扬声器
aCfg._micGuid = micId;
aCfg._spkGuid = spkId;
g_sdkMain->getSDKMeeting().setAudioCfg(aCfg);

```

相关API请参考:
* [getAudioMics](Apis.md#getAudioMics)
* [getAudioSpks](Apis.md#getAudioSpks)
* [getAudioCfg](Apis.md#getAudioCfg)
* [setAudioCfg](Apis.md#setAudioCfg)


<h2 id=openMic> 2.开关麦克风</h2>

```cpp
string UserID = "12345678";
//打开麦克风
g_sdkMain->getSDKMeeting().openMic(UserID);
//关闭麦克风
g_sdkMain->getSDKMeeting().closeMic(UserID);
```

相关API请参考:
* [openMic](Apis.md#openMic)
* [closeMic](Apis.md#closeMic)
* [notifyMicStatusChanged](Apis.md#notifyMicStatusChanged)


<h2 id=setSpkVol> 3.设置通话音量</h2>

```cpp
//设置扬声器音量
g_sdkMain->getSDKMeeting().setSpkVolume(vol);

```

相关API请参考:
* [setSpkVolume](Apis.md#setSpkVolume)
* [setSpeakerMute](Apis.md#setSpeakerMute)


<h2 id=setSpkVol> 4.麦克风音量调整</h2>

```cpp

//麦克风音量调整
g_sdkMain->getSDKMeeting().setMicVolume(vol);

```

相关API请参考:
* [setMicVolume](Apis.md#setMicVolume)
* [notifyMicEnergy](Apis.md#notifyMicEnergy)

