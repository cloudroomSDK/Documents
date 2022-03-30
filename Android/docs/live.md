# 本地直播推流

## 功能简介

用于1个或多个主播实时连麦互动，然后图像和声音将在SDK本地进行混合，然后直接向CDN流媒体服务器推流，直播观众就可以获取RTMP或HLS流观看直播了。

<h2 id=CreateMixer>1.创建混图器</h2>

直播时，可以根据业务需要，选择不同的录制布局。如下代码为创建左右布局的相关示例。

+ 设置混图器配置

```  java
//混图器参数配置
MixerCfg mixerCfg = new MixerCfg();
mixerCfg.frameRate = 15;
mixerCfg.dstResolution = new Size(864， 480);
```

+ 设置混图器内容

```java
// 图像内容集合 - 创建左右布局的摄像头录制内容， 
ArrayList<MixerCotent> contents = new ArrayList<MixerCotent>();

//自己的摄像头（左边布局）, 设置摄像头录制视频大小，由于左右布局， 宽度只有录制布局的一半
Rect leftRect = new Rect(0, 0, mixerCfg.dstResolution.width/2, mixerCfg.dstResolution.height);
MixerCotent leftVideoItem = MixerCotent.createVideoContent(myUserID, (short)-1, leftRect);
// 添加到内容列表
contents.add(leftVideoItem);

//其他人的摄像头（右边布局）
Rect rightRect = new Rect(mixerCfg.dstResolution.width/2, 0, mixerCfg.dstResolution.width, mixerCfg.dstResolution.height);
MixerCotent rightVideoItem = MixerCotent.createVideoContent(otherUserID, (short)-1, rightRect);
// 添加到内容列表
contents.add(rightVideoItem);
```

+ 创建混图器

```java
// 创建混图器, 设置混图器编号为1
CRVIDEOSDK_ERR_DEF errCode = CloudroomVideoMeeting.getInstance().createLocMixer("1", mixerCfg, contents)；
if(errCode == CRVIDEOSDK_ERR_DEF.CRVIDEOSDK_NOERR){
    //创建成功
}
```

相关API请参考:
+ [createLocMixer](API.md#createLocMixer)
+ [getDefaultVideo](API.md#getDefaultVideo)
+ [createVideoContent](TypeDefinitions.md#createVideoContent)

相关结构定义请参考：
+ [MixerCfg](TypeDefinitions.md#MixerCfg)
+ [MixerCotent](TypeDefinitions.md#MixerCotent)
+ [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)

<h2 id=SetLiveOutput>2.添加直播推流</h2>

```  java
//推流到A，B两个直播平台
ArrayList<MixerOutPutCfg> cfgs = new ArrayList<MixerOutPutCfg>();

// A直播平台
MixerOutPutCfg outputCfgA = new MixerOutPutCfg();
outputCfgA.type = MIXER_OUTPUT_TYPE.MIXOT_LIVE;
outputCfgA.liveUrl = "rtmp://A/xxx";
cfgs.add(outputCfgA);

// B直播平台
MixerOutPutCfg outputCfgB = new MixerOutPutCfg();
outputCfgB.type = MIXER_OUTPUT_TYPE.MIXOT_LIVE;
outputCfgB.liveUrl = "rtmp://B/xxx";
cfgs.add(outputCfgB);

//默认混图器编号为"1"
CRVIDEOSDK_ERR_DEF errCode = CloudroomVideoMeeting.getInstance().addLocMixerOutput("1", cfgs)；
	
if (errCode != CRVIDEOSDK_ERR_DEF.CRVIDEOSDK_NOERR) {
    //设置成功
}
```

相关API请参考:
+ [addLocMixerOutput](API.md#addLocMixerOutput)


<h2 id=RecordingEvent>3.直播推流回调处理</h2>

``` java
void locMixerOutputInfo(String mixerID, String nameOrUrl, MixerOutputInfo info)
{
    if ( info.state==MIXER_OUTPUT_STATE.OUTPUT_ERR ){
            //直播文件出错，info.errCode中有错误原因
    }
｝
```

相关API请参考: 
+ [locMixerOutputInfo](API.md#locMixerOutputInfo)

<h2 id=UpdateVideoContent>4. 更新直播内容</h2>

如下创建画中画布局作为更新后的直播内容

+ 设置直播内容

```java
// 图像内容集合 - 创建画中画布局的摄像头直播内容， 
ArrayList<MixerCotent> contents = new ArrayList<MixerCotent>();

//自己的摄像头（充满布局）
Rect bigRect = new Rect(0, 0, mixerCfg.dstResolution.width, mixerCfg.dstResolution.height)
MixerCotent bigVideoItem = MixerCotent.createVideoContent(myUserID, (short)-1, bigRect);
// 添加到内容列表
contents.add(leftVideoItem);

//其他人的摄像头（部分布局）
Rect smallRect = new Rect(0, 0, mixerCfg.dstResolution.width/5, mixerCfg.dstResolution.height/5)
MixerCotent rightVideoItem = MixerCotent.createVideoContent(otherUserID, (short)-1, smallRect);
// 添加到内容列表
contents.add(rightVideoItem);
```

+ 更新混图器

```java
// 更新图像内容
CRVIDEOSDK_ERR_DEF errCode = CloudroomVideoMeeting.getInstance().updateLocMixerCotent("1", contents)；
if (errCode == CRVIDEOSDK_ERR_DEF.CRVIDEOSDK_NOERR) {
    //更新配置成功
}
```

相关API请参考：
* [updateLocMixerContent](API.md#updateLocMixerContent)

<h2 id=RecordingEnd>5.结束</h2>

```  java
//混图器编号
String mixerID = "1";

//消毁混图器， 输出自动结束
CloudroomVideoMeeting.getInstance().destroyLocMixer(mixerID);
```

相关API请参考:
* [destroyLocMixer](API.md#destroyLocMixer)
