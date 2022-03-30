# 云端录制

## 功能介绍

在服务器上对房间内的音视频、影音共享、屏幕共享等通讯内容进行录制，支持自定义录制内容和布局，录制文件在服务器保存，可以通过[WEB API](https://sdk.cloudroom.com/sdkdoc/webapi/)下载和删除

<h2 id=CreateMixer>1. 创建混图器配置</h2>

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
    //获取left（自己）用户id
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

相关API请参考:
+ [getDefaultVideo](Apis.md#getDefaultVideo)

相关结构定义请参考：
+ [MixerCfg](TypeDefinitions.md#MixerCfg)
+ [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)

<h2 id=SetOutput>2. 配置输出录像参数</h2>
</br>

```oc
	NSMutableArray<OutputCfg*> *outputCfgs = [NSMutableArray array];
    OutputCfg* outputCfg = [[OutputCfg alloc]init];

    NSTimeInterval timeStamp = [[NSDate date] timeIntervalSince1970];
    NSString *fileName = [NSString stringWithFormat:@"record_%.0f.mp4", timeStamp];
    [outputCfg setType:OUT_FILE];
    [outputCfg setServerPathFileName:fileName];
    [outputCfg setIsUploadOnRecording:YES];
    // 设置输出文件的路径
    [outputCfg setFileName:[NSString stringWithFormat:@"/%@/%@_iOS.mp4", [self _getCurDirString], [self _getCurFileString]]];
    [outputCfgs addObject:outputCfg];
    
    //添加推流配置
    OutputCfg* outputStearmCfg = [[OutputCfg alloc]init];
    [outputStearmCfg setType:OUT_LIVE];
    [outputStearmCfg setLive:NO];

    [outputCfgs addObject:outputStearmCfg];
    
    NSMutableDictionary<NSString*,MixerOutput*> *outputDic = [NSMutableDictionary dictionary];
    
    MixerOutput* output = [[MixerOutput alloc]init];
    output.outputs = outputCfgs;
    [outputDic setObject:output forKey:_mixerID];
```

相关结构定义请参考：
+ [OutPutCfg](TypeDefinitions.md#MixerOutputCfg)

<h2 id=start>3. 开启云端录制, 并获取状态</h2>
</br>

``` oc
//开启云端录制
[[CloudroomVideoMeeting shareInstance] startSvrMixer:cfgDic contents:contentDic outputs:outputDic];

//关闭云端录制
[[CloudroomVideoMeeting shareInstance] stopSvrMixer];
```

相关API请参考:
+ [startSvrMixer](Apis.md#startSvrMixer)
+ [stopSvrMixer](Apis.md#stopSvrMixer)

<h2 id=update>4. 更新云端录制</h2>

如下创建画中画布局作为更新后的云端录制内容

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

``` oc
//更新录制内容
[[CloudroomVideoMeeting shareInstance] updateSvrMixerContent:contentsDic];
```
相关API请参考:
+  [updateSvrMixerContent](Apis.md#updateSvrMixerContent)

<h2 id=obtainStatue>5. 获取云端录制状态</h2>
</br>

``` oc
//获取云端录制状态
MIXER_STATE state = [[CloudroomVideoMeeting shareInstance] getSvrRecordState];
```

相关API请参考:
+ [getSvrMixerState](Apis.md#getSvrMixerState)


