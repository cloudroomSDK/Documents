# 本地直播推流

## 功能简介

用于1个或多个主播实时连麦互动，然后图像和声音将在SDK本地进行混合，然后直接向CDN流媒体服务器推流，直播观众就可以获取RTMP或HLS流观看直播了。

<h2 id=CreateMixer>1. 创建混图器</h2>

直播时，可以根据业务需要，选择不同的录制布局。如下代码为创建左右布局的相关示例。

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

+ 创建混图器

```oc
// 创建混图器, 设置混图器编号为1
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

<h2 id=SetLiveOutput>2. 添加直播推流</h2>

```  oc
NSMutableArray<OutputCfg*> *outputCfgs = [NSMutableArray array];

// A直播平台
OutputCfg* outputCfgA = [[OutputCfg alloc]init];
[outputCfgA setType:OUT_LIVE];
[outputCfgA setLiveUrl:@"rtmp://A/xxx"];
//添加配置A
[outputCfgs addObject:outputCfgA];

// B直播平台
OutputCfg* outputCfgB = [[OutputCfg alloc]init];
[outputCfgB setType:OUT_LIVE];
[outputCfgB setLiveUrl:@"rtmp://B/xxx"];
//添加配置B
[outputCfgs addObject:outputCfgB];

NSMutableDictionary<NSString*,MixerOutput*> *outputDic = [NSMutableDictionary dictionary];

MixerOutput* output = [[MixerOutput alloc]init];
output.outputs = outputCfgs;
[outputDic setObject:output forKey:_mixerID];

[[CloudroomVideoMeeting shareInstance] addLocMixer:@"1" outputs:output];
```

相关API请参考:
+ [addLocMixerOutput](Apis.md#addLocMixerOutput)

</br>

<h2 id=RecordingEvent>3. 直播推流事件处理</h2>
</br>

``` oc
-(void)locMixerOutputInfo:(NSString*)mixerID nameUrl:(NSString*)nameUrl outputInfo:(OutputInfo*)outputInfo
{
	if ( outputInfo.state==OUTPUT_ERR ){
        //录像文件出错，info.errCode中有错误原因
    }
｝
```

相关API请参考: 
+ [locMixerOutputInfo](Apis.md#locMixerOutputInfo)

<h2 id=UpdateVideoContent>4. 更新直播内容</h2>

如下创建画中画布局作为更新后的直播内容

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

<h2 id=RecordingEnd>5. 结束</h2>
</br>

```  oc
//混图器编号
NSString* mixerID = @"1";

//消毁混图器， 各输出自动结束
[[CloudroomVideoMeeting shareInstance] destroyLocMixer:mixerID];
```

相关API请参考: 
+  [destroyLocMixer](Apis.md#destroyLocMixer)


