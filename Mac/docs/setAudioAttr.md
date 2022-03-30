# 设置音频属性

## 功能介绍

成功进入房间后，可以设置音频设备、音量等。</br>
<font color=Red>注意：成功进入房间后，才可以设置音频属性。</font>

<h2 id=audio_cfg>1.设置音频参数</h2>


```oc
    AudioCfg* audioCfg = [[CloudroomVideoMeeting shareInstance] getAudioCfg];
    
    //开启回声消除
    audioCfg.aec = 1;
    //开启语音自动增益
    audioCfg.agc = 1;
    
    [[CloudroomVideoMeeting shareInstance] setAudioCfg:audioCfg];
```

相关API请参考: 
+ [getAudioCfg](Apis.md#getAudioCfg)
+ [setAudioCfg](Apis.md#setAudioCfg)

相关结构定义请参考:
+ [AudioCfg](TypeDefinitions.md#AudioCfg)

<h2 id=openMic>2.开关麦克风</h2>

```oc
	//打开麦克风
	[[CloudroomVideoMeeting shareInstance] openMic:UserID];
	//关闭麦克风
	[[CloudroomVideoMeeting shareInstance] closeMic:UserID];
```

相关API请参考: 
+ [openMic](Apis.md#openMic)
+ [closeMic](Apis.md#closeMic)
+ [audioStatusChanged](Apis.md#audioStatusChanged)

<h2 id=voice_open>3.声音外放配置</h2>

```oc
    if(![[CloudroomVideoMeeting shareInstance] getSpeakerOut]){
        [[CloudroomVideoMeeting shareInstance] setSpeakerOut:true];
    }
```

相关API请参考:
+ [getSpeakerOut](Apis.md#getSpeakerOut)
+ [setSpeakerOut](Apis.md#setSpeakerOut)


<h2 id=spk_volume>4.设置通话音量</h2>

```oc
	[[CloudroomVideoMeeting shareInstance] setSpeakerVolume:255];
```

相关API请参考:
+ [setSpeakerVolume](Apis.md#setSpeakerVolume)
