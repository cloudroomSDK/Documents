# 设置音频属性

功能简介：
在视频通话中，用户可以设置音频属性。

:::danger

注意：成功进入房间后，才可以设置音频属性。

:::

---

<!-- <p>设置音频属性操作如下： </p>

1. [开关麦克风](#micphone)
2. [视频声音外放](#voice_open) -->
<!-- 3. [麦克风音量增益](#mic_volume_gain) -->

<h2 id=micphone>1.开关麦克风</h2>
</br>

```dart
    @override
    void initState() {
        // 监听音频状态发生变化
        CrSDK.on("audioStatusChanged", audioStatusChanged);
        // 打开麦克风
        CrSDK.instance.openMic(MyUserId);
        super.initState();
    }
    // 退出时销毁监听
    @override
    void dispose() {
        CrSDK.off("audioStatusChanged", audioStatusChanged);
        super.dispose();
    }

    // 监听音频状态发生变化
    audioStatusChanged(CrAudioStatusChanged asc) {
        if (asc.userId == MyUserId) {
            setState(() => _isOpenMic = asc.newStatus == CR_ASTATUS.AOPEN);
        }
    }
```

相关 API 请参考:

- [getAudioCfg](API.md#getAudioCfg)
- [setAudioCfg](API.md#setAudioCfg)
- [getAudioStatus](API.md#getAudioStatus)

相关结构定义请参考:

- [CrAudioCfg](TypeDefinitions.md#CrAudioCfg)
- [CR_ASTATUS](Constant.md#CR_ASTATUS)

<h2 id=voice_open>2. 视频声音外放</h2>

</br>

```dart
CrSDK.instance.getSpeakerOut().then((bool isSpeakerOut) {
    if (!isSpeakerOut) {
        CrSDK.instance.setSpeakerOut(true);
    }
})
```

相关 API 请参考:

- [getSpeakerOut](API.md#getSpeakerOut)
- [setSpeakerOut](API.md#setSpeakerOut)

<!-- <h2 id=mic_volume_gain>3. 麦克风音量增益</h2>
</br>

```dart
//设置麦克风音量增益（范围：1-20）
boolean statue = CrSDK.instance.setMicVolumeScaling(15);
if(!statue){
	//设置麦克风音量增益失败
}

//通过userId，获取麦克风声音大小
int volumeSize = CrSDK.instance.getMicEnergy(otherUserId);
```

相关 API 请参考:

- [setMicVolumeScaling](API.md#setMicVolumeScaling)
- [getMicEnergy](API.md#getMicEnergy)
 -->
