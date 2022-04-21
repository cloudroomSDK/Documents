# 云端录制

## 功能介绍

在服务器上对房间内的音视频、影音共享、屏幕共享等通讯内容进行录制，支持自定义录制内容和布局，录制文件在服务器保存，可以通过[WEB API](/sdk/document/netdisk/netdisk_query?platform=serverside)下载和删除


<h2 id=record_enbale> 1. 开通云端录制服务</h2>

- 请确保您已成功[注册](https://sdk.cloudroom.com/mgr_sdk/register.html)了一个帐号。</br>
- 请联系商务为对应帐号开通“云端录制服务”。

<h2 id=CreateMixer>2. 开始云端录制</h2>

- 录制左右布局示例图:

![左右布局示例图](./images/layout_2.jpg)

- 调用接口：

```  oc
//混图器参数配置
MixerCfg* mixerCfg = [[MixerCfg alloc]init];
mixerCfg.fps = 15;
mixerCfg.dstResolution = CGSizeMake(848,480);

// 图像内容集合 - 创建左右布局的摄像头录制内容，
NSMutableArray<RecContentItem *> *contents = [NSMutableArray array];
//自己的摄像头（左边布局）, 设置摄像头录制视频大小，由于左右布局， 宽度只有录制布局的一半
CGRect leftRect = CGRectMake(0, 0, mixerCfg.dstResolution.width/2, mixerCfg.dstResolution.height);
// 添加到内容列表
RecVideoContentItem *leftVideoItem = [[RecVideoContentItem alloc] initWithRect:leftRect userID:myUserID camID:-1];
[contents addObject:leftVideoItem];
    
//其他人的摄像头（右边布局）
CGRect rightRect = CGRectMake(mixerCfg.dstResolution.width/2, 0, mixerCfg.dstResolution.width/2, mixerCfg.dstResolution.height);
RecVideoContentItem* rightVideoItem = [[RecVideoContentItem alloc] initWithRect:rightRect userID:otherUserID camID:-1];
    
// 添加到内容列表
[contents addObject:rightVideoItem];

MixerContent *recContent = [[MixerContent alloc]init];
recContent.contents = [contents copy];

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

//开启云端录制
[[CloudroomVideoMeeting shareInstance] startSvrMixer:cfgDic contents:contentDic outputs:outputDic];
```

相关API请参考:
+ [startSvrMixer](Apis.md#startSvrMixer)
+ [stopSvrMixer](Apis.md#stopSvrMixer)

<h2 id=update>3. 更新云端录制内容</h2>

- 更新成画中画布局示例图:

![画中画布局示例图](./images/layout_overlap.jpg)

- 接口调用：

```oc
// 图像内容集合 - 创建画中画布局的摄像头录制内容，
NSMutableArray<RecContentItem *> *contents = [NSMutableArray array];
//自己的摄像头（充满布局）
CGRect leftRect = CGRectMake(0, 0, mixerCfg.dstResolution.width, mixerCfg.dstResolution.height);
// 添加到内容列表
RecVideoContentItem *leftVideoItem = [[RecVideoContentItem alloc] initWithRect:leftRect userID:myUserID camID:-1];
[contents addObject:leftVideoItem];
    
//其他人的摄像头（右边布局）
CGRect rightRect = CGRectMake(0, 0, mixerCfg.dstResolution.width/5, mixerCfg.dstResolution.height/5);
RecVideoContentItem* rightVideoItem = [[RecVideoContentItem alloc] initWithRect:rightRect userID:otherUserID camID:-1];
    
// 添加到内容列表
[contents addObject:rightVideoItem];
MixerContent *recContent = [[MixerContent alloc]init];
recContent.contents = [contents copy];

//更新录制内容
[[CloudroomVideoMeeting shareInstance] updateSvrMixerContent:contentsDic];
```

相关API请参考:
+  [updateSvrMixerContent](Apis.md#updateSvrMixerContent)

<h2 id=record_stopSvrMixer>4. 停止云端录制</h2>

停止云端录制后，会触发事件[svrMixerStateChanged](Apis.md#svrMixerStateChanged)

- 接口调用：
```oc
[[CloudroomVideoMeeting shareInstance] stopSvrMixer];
```

相关API请参考:
+ [stopSvrMixer](Apis.md#stopSvrMixer)</br>
+ [svrMixerStateChanged](Apis.md#svrMixerStateChanged)


<h2 id=record_callBack>5. 云端录制回调通知</h2>

录制过程中都会录制状态变化事件、录制文件信息变化通知。在此可以实时获得录制状态、录制文件当前的时长、大小，以及录制异常等信息。

- 回调通知：

```oc
//云端录制状态变化通知
- (void)svrMixerStateChanged:(MIXER_STATE)state err:(CRVIDEOSDK_ERR_DEF)sdkErr opratorID:(NSString*)opratorID{
  //状态处理
}

```

```oc
//云端录制输出内容变化通知
-(void)svrMixerOutPutInfo:(OutputInfo*)outputInfo{
  //获取录像文件时长、文件大小等
}
```


相关API请参考:
+ [svrMixerStateChanged](Apis.md#svrMixerStateChanged)
+ [svrMixerOutPutInfo](Apis.md#svrMixerOutPutInfo)

<h2 id=record_getFile>6. 获取录像</h2>

录像停止后，录像文件会开始上传到录像文件存储服务器中（可关注[svrMixerOutPutInfo](Apis.md#svrMixerOutPutInfo)通知，得到上传完成事件）。 

可以通过[WEB API](/sdk/document/netdisk/netdisk_query?platform=serverside)进行录像文件查询、下载和删除等处理。

也可以登录[管理后台](https://sdk.cloudroom.com/mgr_sdk/)，在管理页面上回放和下载录像：
![recordMgr](./images/recordMgr.jpg)

