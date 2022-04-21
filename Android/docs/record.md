# 本地录制

## 功能介绍

用户可以对通讯过程进行录制并保存到终端设备，有以下特性：

- 录制画面可以根据业务场景自由拼接组合，包括本地摄像头、远端摄像头、远端共享的屏幕、影音播放、图片。支持同时启动多个录制。
- 录制格式支持mp4、ts、flv、aiv, mp3，如果选择了flv和ts两种格式，即使录制过程中程序出现异常了，崩溃之前的录像仍然可用。
- 对于金融双录等安全性要求高的特定领域，支持对录制的文件进行加密，录制后直接把录像传到标准http服务器、OSS或者云屋服务器。
- 本地加密过的录像只能通过SDK提供的播放器播放。


<h2 id=CreateMixer>1. 创建混图器</h2>

- 左右布局示例图

![左右布局示例图](./images/layout_2.jpg)

- 接口调用：

```  java
//混图器参数配置
MixerCfg mixerCfg = new MixerCfg();
mixerCfg.frameRate = 15;
mixerCfg.dstResolution = new Size(864， 480);

// 图像内容集合 - 创建左右布局的摄像头录制内容
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

// 创建混图器, 设置混图器编号为1
CRVIDEOSDK_ERR_DEF errCode = CloudroomVideoMeeting.getInstance().createLocMixer("1", mixerCfg, contents)；
if(errCode == CRVIDEOSDK_ERR_DEF.CRVIDEOSDK_NOERR){
    //创建成功
}
```

相关API请参考:
+ [createLocMixer](API.md#createLocMixer)
+ [getDefaultVideo](API.md#getDefaultVideo)
+ [createVideoContent](TypeDefinitions.md#MixerCotent)

相关结构定义请参考：
+ [MixerCfg](TypeDefinitions.md#MixerCfg)
+ [MixerCotent](TypeDefinitions.md#MixerCotent)
+ [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)

<h2 id=SetOutput>2. 添加输出到录像文件</h2>

```java
ArrayList<MixerOutPutCfg> cfgs = new ArrayList<MixerOutPutCfg>();

MixerOutPutCfg outputCfg = new MixerOutPutCfg();
//  设置混图输出类型为录像文件
outputCfg.type = MIXER_OUTPUT_TYPE.MIXOT_FILE; 
// 录制文件名称
outputCfg.fileName = "/sdcard/_Android.mp4";
cfgs.add(outputCfg);

CRVIDEOSDK_ERR_DEF errCode = CloudroomVideoMeeting.getInstance().addLocMixerOutput("1", cfgs)；
if (errCode != CRVIDEOSDK_ERR_DEF.CRVIDEOSDK_NOERR) {
    //启动成功
}
```

相关API请参考:
+ [addLocMixerOutput](API.md#addLocMixerOutput)

相关结构定义请参考：
+ [MixerOutPutCfg](TypeDefinitions.md#MixerOutPutCfg)

<h2 id=RecordingEvent>3. 录像回调处理</h2>

在此可获得录像文件的时长、大小、录像文件异常等信息

```  java
void locMixerOutputInfo(String mixerID, String nameOrUrl, MixerOutputInfo info){
    if ( info.state==MIXER_OUTPUT_STATE.OUTPUT_ERR ){
        //录像文件出错，info.errCode中有错误原因
    }
｝
```

相关API请参考:
+ [locMixerOutputInfo](API.md#locMixerOutputInfo)


<h2 id=UpdateVideoContent>4. 更新图像内容</h2>

- 画中画布局示例图

![画中画布局示例图](./images/layout_overlap.jpg)

- 接口调用：

```java
// 图像内容集合 - 创建画中画布局的摄像头录制内容， 
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

// 更新图像内容
CRVIDEOSDK_ERR_DEF errCode = CloudroomVideoMeeting.getInstance().updateLocMixerCotent(“1”, contents)；
if (errCode == CRVIDEOSDK_ERR_DEF.CRVIDEOSDK_NOERR) {
    //更新配置成功
}
```

相关API请参考: 
+ [updateLocMixerCotent](API.md#updateLocMixerCotent)

<h2 id=RecordingEnd>5. 结束录制</h2>

```  java
//消毁混图器， 输出自动结束
CloudroomVideoMeeting.getInstance().destroyLocMixer("1");
```

相关API请参考:
+ [destroyLocMixer](API.md#destroyLocMixer)

<h2 id=uploadRecordeFile>6. 上传录制文件</h2>

录制完毕后， 可将本地录制文件上传到云屋服务器。

```java
//获取录制的所有文件
ArrayList<RecordFileShow> files = CloudroomVideoMeeting.getInstance().getAllRecordFiles();
RecordFileShow recordFile = null;

for(RecordFileShow file:files){
	//判断录制文件存在，并且处于未上传状态时
	if("_Android.mp4".equals(file.fileName) && file.RFS_NoUpload == RECORD_FILE_STATE.RFS_NoUpload){
		//上传录制文件到指定服务器路径
		CloudroomVideoMeeting.getInstance().uploadRecordFile("_Android.mp4", "/AA/BB/CC/_Android.mp4");
		recordFile = file;
		break;
	}
}

//获取当前录制进度
int uploadPercent = recordFile.uploadPercent;

if(//需要取消上传情况){
	//取消录制文件上传
	CloudroomVideoMeeting.getInstance().cancelUploadRecordFile("_Android.mp4");
}
```

相关API请参考:
+ [getAllRecordFiles](API.md#getAllRecordFiles)
+ [uploadRecordFile](API.md#uploadRecordFile)
+ [cancelUploadRecordFile](API.md#cancelUploadRecordFile)

相关结构定义请参考：
+ [RecordFileShow](TypeDefinitions.md#RecordFileShow)
+ [RECORD_FILE_STATE](Constant.md#RECORD_FILE_STATE)

