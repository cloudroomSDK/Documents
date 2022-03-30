# 云端直播推流

## 功能简介

用于多个主播实时连麦互动。技术实现上，我们会把房间里多个主播的音视频在服务器合成一路流后推流到CDN流媒体服务器，直播观众可以获取RTMP或HLS流观看直播。
<p id=layout style="font-weight:normal;">互动直播架构图:  </p>
<img src="./images/srvLive.jpg" style="width:54%;"></img>

<h2 id=live_addr> 1.创建直播间并获得推流地址</h2>

- 创建直播间请参见：[Web API 创建直播](https://sdk.cloudroom.com/sdkdoc/live/createLiveAPI.html)。
- 获取直播推流地址请参见：[Web API 获取推流地址](https://sdk.cloudroom.com/sdkdoc/live/queryLiveAPI.html)。


<h2 id=startSvrMixer> 2.开始互动直播</h2>

互动直播时，可以根据业务需要，选择不同的直播布局。如下代码为创建左右布局的相关示例。

<p id=layout style="font-weight:normal;">左右布局示例图:  </p>

![左右布局示例图](./images/layout_2.jpg)

+ 混图器参数配置

```  java
//配置混图器编码参数：尺寸为640*360，帧率为15，其他采用默认设置
MixerCfg mixerCfg = new MixerCfg();
mixerCfg.frameRate = 15;
mixerCfg.dstResolution = new Size(640, 360);
```

+ 混图器内容配置 - 左右布局

```  java
// 图像内容集合 - 创建左右布局的摄像头直播内容
ArrayList<MixerCotent> contents = new ArrayList<MixerCotent>();
//自己的摄像头（左边布局）, 设置摄像头直播视频大小，由于左右布局， 宽度只有直播布局的一半
Rect leftRect = new Rect(0, 0, mixerCfg.dstResolution.width/2, mixerCfg.dstResolution.height);
MixerCotent leftVideoItem = MixerCotent.createVideoContent(myUserID, (short)-1, leftRect);
//添加到内容列表
contents.add(leftVideoItem);
//其他人的摄像头（右边布局）
Rect rightRect = new Rect(mixerCfg.dstResolution.width/2, 0, mixerCfg.dstResolution.width, mixerCfg.dstResolution.height);
MixerCotent rightVideoItem = MixerCotent.createVideoContent(otherUserID, (short)-1, rightRect);
//添加到内容列表
contents.add(rightVideoItem);
```
+ 混图器输出配置

```  java
//配置混图器输出
ArrayList<MixerOutPutCfg> cfgs = new ArrayList<MixerOutPutCfg>();
//添加推流配置：直播推流地址为rtmp://xxx
MixerOutPutCfg outputCfg = new MixerOutPutCfg();
//设置混图输出类型为直播
outputCfg.type = MIXER_OUTPUT_TYPE.MIXOT_LIVE; 
//推流地址
outputCfg.liveUrl = "rtmp://xxx";
cfgs.add(outputCfg);
```

+ 根据配置开启云端录制

```  java
HashMap<String, MixerCfg> mixerCfgs = new HashMap<String, MixerCfg>();
mixerCfgs.put("KEY_SVR_MIXERID", mixerCfg);

HashMap<String, ArrayList<MixerOutPutCfg>> mixerOutputCfgs = new HashMap<String, ArrayList<MixerOutPutCfg>>();
ArrayList<MixerOutPutCfg> outputCfgs = new ArrayList<MixerOutPutCfg>();
outputCfgs.add(outputCfg);
mixerOutputCfgs.put("KEY_SVR_MIXERID", outputCfgs);

HashMap<String, ArrayList<MixerCotent>> mixerContents = new HashMap<String, ArrayList<MixerCotent>>();
mixerContents.put("KEY_SVR_MIXERID", contents);

//开启互动直播
CRVIDEOSDK_ERR_DEF rst =  CloudroomVideoMeeting.getInstance().startSvrMixer(mixerCfgs, mixerContents, mixerOutputCfgs);
if(rst != CRVIDEOSDK_ERR_DEF.CRVIDEOSDK_NOERR)
{
  //开启互动直播出错!
  ...
}
```

- 回调通知：

```java
//互动直播状态变化通知
void svrMixerStateChanged(String operatorID, MIXER_STATE state, CRVIDEOSDK_ERR_DEF err)
{
  ...
}

```

相关API请参考:
+ [getDefaultVideo](API.md#getDefaultVideo)
+ [createVideoContent](TypeDefinitions.md#createVideoContent)
+ [startSvrMixer](API.md#startSvrMixer)
+ [stopSvrMixer](API.md#stopSvrMixer)

相关结构定义请参考：
+ [MixerCfg](TypeDefinitions.md#MixerCfg)
+ [MixerCotent](TypeDefinitions.md#MixerCotent)
+ [MixerOutPutCfg](TypeDefinitions.md#MixerOutPutCfg)
+ [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)


<h2 id=updateSvrMixerContent> 3.更新互动直播内容</h2>

如下为创建画中画布局作为更新后的互动直播内容

<p id=layout style="font-weight:normal;">画中画布局示例图:  </p>

![画中画布局示例图](./images/layout_overlap.jpg)

+ 混图器内容配置 - 画中画布局

```java
//更新为画中画模式
// 图像内容集合 - 创建画中画布局的摄像头直播内容， 
ArrayList<MixerCotent> contents = new ArrayList<MixerCotent>();

//自己的摄像头（充满布局）
Rect bigRect = new Rect(0, 0, mixerCfg.dstResolution.width, mixerCfg.dstResolution.height);
MixerCotent bigVideoItem = MixerCotent.createVideoContent(myUserID, (short)-1, bigRect);
// 添加到内容列表
contents.add(bigVideoItem);

//其他人的摄像头（部分布局）
Rect smallRect = new Rect(0, 0, mixerCfg.dstResolution.width/5, mixerCfg.dstResolution.height/5);
MixerCotent smallVideoItem = MixerCotent.createVideoContent(otherUserID, (short)-1, smallRect);
// 添加到内容列表
contents.add(smallVideoItem);
```

+ 更新混图器内容

```java		
HashMap<String, ArrayList<MixerCotent>> mixerContents = new HashMap<String, ArrayList<MixerCotent>>();
mixerContents.put("KEY_SVR_MIXERID", contents);

//更新直播内容
CloudroomVideoMeeting.getInstance().updateSvrMixerContent(mixerContents);
```
相关API请参考:
+ [updateSvrMixerContent](API.md#updateSvrMixerContent)


<h2 id=stopSvrMixer>4.停止互动直播</h2>

停止互动直播，也会触发事件[svrMixerStateChanged](API.md#svrMixerStateChanged)

- 接口调用：
```java
CloudroomVideoMeeting.getInstance().stopSvrMixer();
```

相关API请参考:
+ [stopSvrMixer](API.md#stopSvrMixer)
+ [svrMixerStateChanged](API.md#svrMixerStateChanged)


<h2 id=live_vod>5.回放点播</h2>

通过 [云屋点播API](http://sdk.cloudroom.com/crdoc/db/index1.html)回放点播。
