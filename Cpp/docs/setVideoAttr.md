# 设置视频属性

## 功能介绍

在通话过程中可以根据实际业务场景，调整视频画面的清晰度和流畅度，提升用户体验。</br>
视频属性包含设置默认摄像头、视频分辨率、帧率、码率、降噪等。</br>
<font color=Red>注意：成功进入房间后，才可以设置视频属性。</font>

## 示例项目

云屋SDK 在 GitHub 上提供已经实现[设置视频属性](https://github.com/cloudroomSDK/API-Demo/tree/main/Linux/src/TestVideoSetting)功能的开源示例项目。你可以下载体验或查看其中的源代码。


<h2 id=maincam> 1.默认摄像头设置</h2>

- 调用接口：

```cpp

//获取所有摄像头设备
CRBase::CRArray<CRVideoDevInfo> camDevs = g_sdkMain->getSDKMeeting().getAllVideoInfo(MainDialog::getMyUserID().constData());

//获取当前默认摄像头
int defCam = g_sdkMain->getSDKMeeting().getDefaultVideo(MainDialog::getMyUserID().constData());

//将编号为camId的摄像头设置为默认摄像头
g_sdkMain->getSDKMeeting().setDefaultVideo(camId);

```

相关API请参考:
* [getAllVideoInfo](Apis.md#getAllVideoInfo)
* [getDefaultVideo](Apis.md#getDefaultVideo)
* [setDefaultVideo](Apis.md#setDefaultVideo)


<h2 id=cfg> 2.编码参数设置</h2>

- 调用接口：

```cpp

//获取摄像头编码参数
CRVideoCfg vCfg = g_sdkMain->getSDKMeeting().getVideoCfg();

//设置摄像头编码输出为1280*720，帧率15，其他参数不变
vCfg._size = CRSize(1280, 720);
vCfg._fps = 15;
g_sdkMain->getSDKMeeting().setVideoCfg(vCfg);

```

相关API请参考:
* [getVideoCfg](Apis.md#getVideoCfg)
* [setVideoCfg](Apis.md#setVideoCfg)

