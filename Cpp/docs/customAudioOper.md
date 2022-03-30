# 自定义音频采集/渲染

## 功能介绍

自定义音频采集：可以实现从第三方设备采集声音，或第音频文件读取声音，然后交给SDK进行编码送入房间；</br>
自定义音频渲染：可以从sdk拉取到房间的PCM声音数据，然后送入第三方设备进行渲染，SDK内部不再渲染；</br>

## 示例项目

云屋SDK 在 GitHub 上提供已经实现[自定义音频采集/渲染](https://github.com/cloudroomSDK/API-Demo/tree/main/Linux/src/TestCustomAudioCapture)功能的开源示例项目。你可以下载体验或查看其中的源代码。


## 自定义音频采集

### 开关自定义音频采集

```cpp

//开启自定义音频采集
CRVSDK_ERR_DEF errCode = g_sdkMain->getSDKMeeting().setCustomAudioCapture(true, "");
//关闭自定义音频采集
CRVSDK_ERR_DEF errCode = g_sdkMain->getSDKMeeting().setCustomAudioCapture(false, "");

```

相关API请参考:</br>
[setCustomAudioCapture](Apis.md#setCustomAudioCapture)


### 向SDK送入自定义音频采集数据

```cpp

//送入音频数据
CRAudioFrame2 frm;
frm._format = CRVSDK_AFMT_PCM16BIT;
frm._data = pcmData;
CRVSDK_ERR_DEF err = g_sdkMain->getSDKMeeting().pushCustomAudioDat(frm);

```

相关API请参考:</br>
[pushCustomAudioDat](Apis.md#pushCustomAudioDat)


## 自定义音频渲染

### 开关自定义音频渲染

```cpp

//开启自定义音频渲染
CRVSDK_ERR_DEF errCode = g_sdkMain->getSDKMeeting().setCustomAudioPlayback(true, "");
//关闭自定义音频渲染
CRVSDK_ERR_DEF errCode = g_sdkMain->getSDKMeeting().setCustomAudioPlayback(false, "");

```

相关API请参考:</br>
[setCustomAudioPlayback](Apis.md#setCustomAudioPlayback)



### 从SDK拉取音频数据


```cpp

//拉取音频数据
CRAudioFrame2 frm;
CRVSDK_ERR_DEF errCode = g_sdkMain->getSDKMeeting().pullCustomAudioDat(frm);

```

相关API请参考:</br>
[pullCustomAudioDat](Apis.md#pullCustomAudioDat)

