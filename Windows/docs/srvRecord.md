# 云端录制

## 功能介绍

在服务器上对房间内的音视频、影音共享、屏幕共享等通讯内容进行录制，支持自定义录制内容和布局，录制文件在服务器保存，可以通过[WEB API](/sdk/document/netdisk/netdisk_query?platform=serverside)下载和删除


<h2 id=record_enbale> 1.开通云端录制服务</h2>

- 请确保您已成功[注册](https://sdk.cloudroom.com/mgr_sdk/register.html)了一个帐号。</br>
- 请联系商务为对应帐号开通“云端录制服务”。

<h2 id=record_startCloudMixer> 2.开始云端录制</h2>

- 录制左右布局示例图:

![左右布局示例图](./images/layout_2.jpg)

- 调用接口：

```csharp

//配置混图器编码参数：1280*720,  15帧
string cloudMixerCfg =
"{\
    \"mode\": 0,\
    \"videoFileCfg\": {\
        \"svrPathName\": \"/2021-09-24/2021-09-24_13-47-41_Win32_73542046.mp4\",\
        \"vWidth\": 1280,\
        \"vHeight\": 720,\
        \"vFps\": 15,\
        \"layoutConfig\": [\
            {\
                \"type\": 0,\
                \"top\": 180,\
                \"left\": 0,\
                \"width\": 640,\
                \"height\": 360,\
                \"keepAspectRatio\": 1,\
                \"param\": {\"camid\": \"Usr1.-1\"}\
            },\
            {\
                \"type\": 0,\
                \"top\": 180,\
                \"left\": 640,\
                \"width\": 640,\
                \"height\": 360,\
                \"keepAspectRatio\": 1,\
                \"param\": {\"camid\": \"Usr2.-1\"}\
            }\
        ]\
    }\
}"

string mixerID = axVideoSDK.createCloudMixer(cloudMixerCfg);
```

相关API请参考:</br>
[createCloudMixer](API.md#createCloudMixer)</br>


<h2 id=record_updateCloudMixerContent> 3.更新云端录制内容</h2>

- 更新成画中画布局示例图:

![画中画布局示例图](./images/layout_overlap.jpg)

- 接口调用：

```csharp

string cloudMixerCfg =
"{\
    \"videoFileCfg\": {\
        \"layoutConfig\": [\
            {\
                \"type\": 0,\
                \"top\": 0,\
                \"left\": 0,\
                \"width\": 1280,\
                \"height\": 720,\
                \"keepAspectRatio\": 1,\
                \"param\": {\"camid\": \"Usr1.-1\"}\
            },\
            {\
                \"type\": 0,\
                \"top\": 265,\
                \"left\": 475,\
                \"width\": 160,\
                \"height\": 90,\
                \"keepAspectRatio\": 1,\
                \"param\": {\"camid\": \"Usr2.-1\"}\
            }\
        ]\
    }\
}"


axVideoSDK.updateCloudMixerContent(mixerID, cloudMixerCfg);

```

相关API请参考:</br>
[updateCloudMixerContent](API.md#updateCloudMixerContent)</br>


<h2 id=record_stopCloudMixer> 4.停止云端录制</h2>

停止云端录制后，会触发事件[cloudMixerStateChanged](API.md#cloudMixerStateChanged)

- 接口调用：
```csharp

axVideoSDK.destroyCloudMixer();
```

相关API请参考:</br>
[destroyCloudMixer](API.md#destroyCloudMixer)</br>
[cloudMixerStateChanged](API.md#cloudMixerStateChanged)</br>


<h2 id=record_callBack> 5.云端录制回调通知</h2>

录制过程中都会录制状态变化事件、录制文件信息变化通知。在此可以实时获得录制状态、录制文件当前的时长、大小，以及录制异常等信息。

- 回调通知：

```csharp
//云端录制状态变化通知
void Meeting_cloudMixerStateChanged(object sender, ICloudroomVideoSDKEvents_cloudMixerStateChangedEvent e)
{
  Console.WriteLine("server record state changed: " + e.p_state);
  //状态处理
  ...
}

```

```csharp
//云端录制输出内容变化通知
void Meeting_cloudMixerOutputInfoChanged(object sender, ICloudroomVideoSDKEvents_cloudMixerOutputInfoChangedEvent e)
{
  CloudMixerOutputInfo obj = JsonConvert.DeserializeObject<CloudMixerOutputInfo>(e.p_jsonStr);
  //获取录像文件时长、文件大小等
}
```


相关API请参考:</br>
[cloudMixerStateChanged](API.md#cloudMixerStateChanged)</br>
[cloudMixerOutputInfoChanged](API.md#cloudMixerOutputInfoChanged)</br>

<h2 id=record_getFile> 6.获取录像</h2>

录像停止后，录像文件会开始上传到录像文件存储服务器中（可关注[cloudMixerOutputInfoChanged](API.md#cloudMixerOutputInfoChanged)通知，得到上传完成事件）。 

可以通过[WEB API](/sdk/document/netdisk/netdisk_query?platform=serverside)进行录像文件查询、下载和删除等处理。

也可以登录[管理后台](https://sdk.cloudroom.com/mgr_sdk/)，在管理页面上回放和下载录像：
![recordMgr](./images/recordMgr.jpg)

