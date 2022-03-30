# 设置音频属性

## 功能介绍

成功进入房间后，可以设置音频设备、音量等。</br>
<font color=Red>注意：成功进入房间后，才可以设置音频属性。</font>

<h2 id=auddio_cfg>1.设置音频参数</h2>

```java
AudioCfg audioCfg = CloudroomVideoMeeting.getInstance().getAudioCfg();

//开启回声消除
audioCfg.aec = 1;
//开启语音自动增益
audioCfg.agc = 1;
    
CloudroomVideoMeeting.getInstance().setAudioCfg(audioCfg);
```

相关API请参考: 
+ [getAudioCfg](API.md#getAudioCfg)
+ [setAudioCfg](API.md#setAudioCfg)


<h2 id=openMic>2.开关麦克风</h2>

```java
AudioCfg audioCfg = CloudroomVideoMeeting.getInstance().getAudioCfg();

string UserID = "12345678";
//打开麦克风
CloudroomVideoMeeting.getInstance().openMic(UserID);
//关闭麦克风
CloudroomVideoMeeting.getInstance().closeMic(UserID);
```

相关API请参考: 
+ [openMic](API.md#openMic)
+ [closeMic](API.md#closeMic)
+ [audioStatusChanged](API.md#audioStatusChanged)

<h2 id=voice_open>3.视频声音外放</h2>

```java
if(!CloudroomVideoMeeting.getInstance().getSpeakerOut()){
	CloudroomVideoMeeting.getInstance().setSpeakerOut(true);
}
```

相关API请参考:
+ [getSpeakerOut](API.md#getSpeakerOut)
+ [setSpeakerOut](API.md#setSpeakerOut)

<h2 id=spk_volume>4.设置通话音量</h2>

```java
CloudroomVideoMeeting.getInstance().setSpeakerVolume(255);
```

相关API请参考: 
+ [setSpeakerVolume](API.md#setSpeakerVolume)
