# 本地录制

## 功能介绍

用户可以对通讯过程进行录制并保存到终端设备，有以下特性：

- 录制画面可以根据业务场景自由拼接组合，包括本地摄像头、远端摄像头、远端共享的屏幕、影音播放、图片。支持同时启动多个录制。
- 录制格式支持mp4、ts、flv、aiv, mp3，如果选择了flv和ts两种格式，即使录制过程中程序出现异常了，崩溃之前的录像仍然可用。
- 对于金融双录等安全性要求高的特定领域，支持对录制的文件进行加密，录制后直接把录像传到标准http服务器、OSS或者云屋服务器。
- 本地加密过的录像只能通过SDK提供的播放器播放。


<h2 id=CreateMixer>1. 创建混图器</h2>

录制文件时，可以根据业务需要，选择不同的录制布局。如下代码为创建左右布局的相关示例。

+ 设置混图器配置

```  oc
    //混图器参数配置
    MixerCfg* mixerCfg = [[MixerCfg alloc]init];
    mixerCfg.fps = 15;
    mixerCfg.dstResolution = CGSizeMake(848,480);
```

+ 设置混图器内容

```oc 
   // 图像内容集合 - 创建左右布局的摄像头录制内容，
    NSMutableArray<RecContentItem *> *contents = [NSMutableArray array];
    //获取左边（自己）用户id
    NSString *myUserID = [[CloudroomVideoMeeting shareInstance] getMyUserID];
    //获取c摄像头id
     short camID = [[CloudroomVideoMeeting shareInstance]  getDefaultVideo:myUserID];
    //自己的摄像头（左边布局）, 设置摄像头录制视频大小，由于左右布局， 宽度只有录制布局的一半
    CGRect leftRect = CGRectMake(0, 0, mixerCfg.dstResolution.width/2, mixerCfg.dstResolution.height);
    // 添加到内容列表
    RecVideoContentItem *leftVideoItem = [[RecVideoContentItem alloc] initWithRect:leftRect userID:myUserID camID:camID];
    [contents addObject:leftVideoItem];
    
    //其他人的摄像头（右边布局）
    CGRect rightRect = CGRectMake(mixerCfg.dstResolution.width/2, 0, mixerCfg.dstResolution.width/2, mixerCfg.dstResolution.height);
    //此处otherUserID在进入用户进入会议时候可以保存，或者使用getAllMembers获取所有成员信息，找出对方id.
    NSString *otherUserID = @"";
    NSMutableArray <MemberInfo *> * allMemberInfo = [[CloudroomVideoMeeting shareInstance] getAllMembers];
    for (MemberInfo *memberInfo in allMemberInfo) {
        if(![memberInfo.userId isEqualToString:myUserID])
        {
            otherUserID = memberInfo.userId;
            break;
        }
    }
    short otherCamID = [[CloudroomVideoMeeting shareInstance]  getDefaultVideo:otherUserID];
    
    RecVideoContentItem* rightVideoItem = [[RecVideoContentItem alloc] initWithRect:rightRect userID:otherUserID camID:otherCamID];
    
    // 添加到内容列表
    [contents addObject:rightVideoItem];

	MixerContent *recContent = [[MixerContent alloc]init];
    recContent.contents = [contents copy];
```

+ 创建混图器

```oc
    CRVIDEOSDK_ERR_DEF rslt = [[CloudroomVideoMeeting shareInstance] createLocMixer:@"1" cfg:mixerCfg content:recContent];
    if(rslt == CRVIDEOSDK_NOERR)
    {
        //创建成功
    }
```

相关API请参考:
+ [createLocMixer](Apis.md#createLocMixer)
+ [getDefaultVideo](Apis.md#getDefaultVideo)

相关结构定义请参考：
+ [MixerCfg](TypeDefinitions.md#MixerCfg)
+ [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)

<h2 id=SetOutput>2. 添加输出到录像文件</h2>
</br>

```oc
    NSMutableArray<OutputCfg*> *outputCfgs = [NSMutableArray array];
    OutputCfg* outputCfg = [[OutputCfg alloc]init];
    
    [outputCfg setFileName:[PathUtil searchPathInCacheDir:[NSString stringWithFormat:@"CloudroomVideoSDK/%d_iOS.mp4", self.meetInfo.ID]]];
    
    [outputCfgs addObject:outputCfg];
    
    self.currentRecordFileName = outputCfg.fileName;
    
    MixerOutput *mixerOutput = [[MixerOutput alloc]init];
    mixerOutput.outputs = outputCfgs;
    //mixerID是创建混图器设置的id
    rslt = [[CloudroomVideoMeeting shareInstance] addLocMixer:mixerID outputs:mixerOutput];
    
    if (rslt !== CRVIDEOSDK_NOERR) {
        //启动成功
    }
```

相关API请参考:
+ [addLocMixerOutput](Apis.md#addLocMixerOutput)

相关结构定义请参考:
+ [OutPutCfg](TypeDefinitions.md#MixerOutputCfg)

<h2 id=RecordingEvent>3. 录像文件回调处理</h2>

在此可获得录像文件的时长、大小、录像文件异常等信息

```  oc
-(void)locMixerOutputInfo:(NSString*)mixerID nameUrl:(NSString*)nameUrl outputInfo:(OutputInfo*)outputInfo
{
	if ( outputInfo.state==OUTPUT_ERR ){
        //录像文件出错，info.errCode中有错误原因
    }
｝
```

相关API请参考:
+ [locMixerOutputInfo](Apis.md#locMixerOutputInfo)

<h2 id=UpdateVideoContent>4. 更新图像内容</h2>

如下创建画中画布局作为更新后的本地录制内容

+ 设置录制内容

```oc
// 图像内容集合 - 创建画中画布局的摄像头录制内容，
    NSMutableArray<RecContentItem *> *contents = [NSMutableArray array];
    //获取left（自己）用户id
    NSString *myUserID = [[CloudroomVideoMeeting shareInstance] getMyUserID];
    //获取c摄像头id
    short camID = [[CloudroomVideoMeeting shareInstance]  getDefaultVideo:myUserID];
    //自己的摄像头（充满布局）
   CGRect leftRect = CGRectMake(0, 0, mixerCfg.dstResolution.width, mixerCfg.dstResolution.height);
    // 添加到内容列表
    RecVideoContentItem *leftVideoItem = [[RecVideoContentItem alloc] initWithRect:leftRect userID:myUserID camID:camID];
    [contents addObject:leftVideoItem];
    
    //其他人的摄像头（右边布局）
    CGRect rightRect = CGRectMake(0, 0, mixerCfg.dstResolution.width/5, mixerCfg.dstResolution.height/5);
    //此处otherUserID在进入用户进入会议时候可以保存，或者使用getAllMembers获取所有成员信息，找出对方id.
    NSString *otherUserID = @"";
    NSMutableArray <MemberInfo *> * allMemberInfo = [[CloudroomVideoMeeting shareInstance] getAllMembers];
    for (MemberInfo *memberInfo in allMemberInfo) {
        if(![memberInfo.userId isEqualToString:myUserID])
        {
            otherUserID = memberInfo.userId;
            break;
        }
    }
    short otherCamID = [[CloudroomVideoMeeting shareInstance]  getDefaultVideo:otherUserID];
    
    RecVideoContentItem* rightVideoItem = [[RecVideoContentItem alloc] initWithRect:rightRect userID:otherUserID camID:otherCamID];
    
    // 添加到内容列表
    [contents addObject:rightVideoItem];
    MixerContent *recContent = [[MixerContent alloc]init];
    recContent.contents = [contents copy];
```

+ 更新混图器

```oc
// 更新图像内容
    CRVIDEOSDK_ERR_DEF rslt = [[CloudroomVideoMeeting shareInstance] updateLocMixerContent:@"1" content:contents]；
    if (rslt == CRVIDEOSDK_NOERR) {
        //更新配置成功
    }
```

相关API请参考: 
+ [updateLocMixerCotent](Apis.md#updateLocMixerCotent)

<h2 id=RecordingEnd>5. 结束录制文件</h2>
</br>

```  oc
//消毁混图器， 输出自动结束
[[CloudroomVideoMeeting  shareInstance] destroyLocMixer:@"1"];
```

相关API请参考:
+ [destroyLocMixer](Apis.md#destroyLocMixer)

<h2 id=uploadRecordeFile>6. 上传录制文件</h2>

录制完毕后， 可将本地录制文件上传到云屋服务器。

```oc
 [CloudroomVideoMeeting shareInstance] uploadRecordFile:filePathName svrPathFileName:svrPath];

[[CloudroomVideoMeeting shareInstance] cancelUploadRecordFile:filePathName];
```

相关API请参考:
+ [getAllRecordFiles](Apis.md#getAllRecordFiles)
+ [uploadRecordFile](Apis.md#uploadRecordFile)
+ [cancelUploadRecordFile](Apis.md#cancelUploadRecordFile)

相关结构定义请参考：
+ [RecordFileShow](TypeDefinitions.md#RecordFileShow)
+ [RECORD_FILE_STATE](Constant.md#RECORD_FILE_STATE)

