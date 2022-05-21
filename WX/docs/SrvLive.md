# 云端直播推流

## 功能介绍

用于多个主播实时连麦互动。技术实现上，我们会把房间里多个主播的音视频在服务器合成一路流后推流到CDN流媒体服务器，直播观众可以获取RTMP或HLS流观看直播。
<p id=layout style="font-weight:normal;">互动直播架构图:  </p>
<img src="./images/srvLive.jpg" style="width:54%;"></img>

<h2 id=addr> 1.创建直播间并获得推流地址</h2>

- 创建直播间请参见：[Web API 创建直播](https://sdk.cloudroom.com/sdkdoc/live/createLiveAPI.html)。
- 获取直播推流地址请参见：[Web API 获取推流地址](https://sdk.cloudroom.com/sdkdoc/live/queryLiveAPI.html)。


<h2 id=record_startCloudMixer> 2.开始云端直播推流</h2>

- 左右布局示例图：

![左右布局示例图](./images/layout_2.jpg)

- 调用接口：

```js
//配置混图器编码参数：1280*720, 15帧, 推流到rtmp://xxx
const cloudMixerCfg = {
    mode: 0,
    videoFileCfg: {
        svrPathName: "rtmp://xxx",
        vWidth: 1280,
        vHeight: 720,
        vFps: 15,
        layoutConfig: [{
            type: 0,
            top: 180,
            left: 0,
            width: 640,
            height: 360,
            keepAspectRatio: 1,
            param: {
                camid: "Usr1.-1"
            }
        }, {
            type: 0,
            top: 180,
            left: 640,
            width: 640,
            height: 360,
            keepAspectRatio: 1,
            param: {
                camid: "Usr2.-1"
            }
        }]
    }
}

const mixerID = RTCSDK.CreateCloudMixer(cloudMixerCfg);
```

相关API请参考:
* [CreateCloudMixer](API.md#CRVideo_CreateCloudMixer)


<h2 id=record_updateCloudMixerContent> 3.更新互动直播内容</h2>

- 更新成画中画布局示例图：

![画中画布局示例图](./images/layout_overlap.jpg)

- 接口调用：

```js
const cloudMixerCfg = {
    videoFileCfg: {
        layoutConfig: [{
            type: 0,
            top: 0,
            left: 0,
            width: 1280,
            height: 720,
            keepAspectRatio: 1,
            param: {
                camid: "Usr1.-1"
            }
        }, {
            type: 0,
            top: 495,
            left: 880,
            width: 400,
            height: 225,
            keepAspectRatio: 1,
            param: {
                camid: "Usr2.-1"
            }
        }]
    }
}

RTCSDK.UpdateCloudMixerContent(mixerID, cloudMixerCfg);
```

相关API请参考:
* [UpdateCloudMixerContent](API.md#CRVideo_UpdateCloudMixerContent)


<h2 id=record_watch> 4.观众观看直播</h2>

通过 [播放器SDK](https://sdk.cloudroom.com/sdkdoc/live/SDK_summary.html)观看直播。


<h2 id=record_stopCloudMixer> 5.停止互动直播</h2>

停止云端直播推流后，会触发事件[CloudMixerStateChanged](API.md#CRVideo_CloudMixerStateChanged)

- 接口调用：

```js
RTCSDK.DestroyCloudMixer();
```

相关API请参考:
* [DestroyCloudMixer](API.md#CRVideo_DestroyCloudMixer)
* [CloudMixerStateChanged](API.md#CRVideo_CloudMixerStateChanged)


<h2 id=record_vod> 6.回放点播</h2>

通过 [云屋点播API](https://sdk.cloudroom.com/sdkdoc/live/db_summary.html)回放点播。

