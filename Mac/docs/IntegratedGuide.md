# 实现音视频通话

## 简要说明

- 快速创建并进入房间，开始音视频通话；以下均为Objective-C代码，详细代码请参考Examples目录下Demo源代码。
- 请先完成[开发环境准备](beforeDevelop.md#beforeDev)，并确认音视频设备工作正常。

<h2 id=initSDK>1. 初始化SDK</h2>

初始化是整个SDK的使用基础，通常在程序启动的时候进行初始化(init)，退出的时候进行反初始化(uninit)，整个程序的生命周期中只进行一次初始化和反初始化。

SDK内部的组件多为单例组件，整个程序中只能有一个实例，比如“基础组件”，“房间管理组件”，“视频房间组件”，具体请参见各个组件说明。

```oc
    // 初始化SDK
    SdkInitDat *sdkInitData = [[SdkInitDat alloc] init];
    //必须指定日志文件路径,才能产生日志文件,并能够上传
    [sdkInitData setSdkDatSavePath:[PathUtil searchPathInCacheDir:@"CloudroomVideoSDK"]];
    //是否在控制台显示sdk日志
    [sdkInitData setShowSDKLogConsole:YES];
    //默认超时时间为60s
    [sdkInitData setTimeOut:60*1000];
    
    CRVIDEOSDK_ERR_DEF error = [[CloudroomVideoSDK shareInstance] initSDK:sdkInitData];
    
    if (error != CRVIDEOSDK_NOERR)
    {
        MLog(@"CloudroomVideoSDK init error!");
        [[CloudroomVideoSDK shareInstance] uninit];
    }
```

相关API请参考: 
- [initSDK](Apis.md#initSDK)

相关结构定义请参考:
- [SdkInitDat](TypeDefinitions.md#SdkInitDat)


<h2 id=login>2. 登录连接视频服务器</h2>

设置视频服务器地址，然后使用appID和md5加密后的appSecret登录
 
- 调用接口：
 ```oc
    CloudroomVideoSDK *cloudroomVideoSDK = [CloudroomVideoSDK shareInstance];
     // 登录数据对象
    LoginDat *loginData = [[LoginDat alloc] init];
    // 昵称
    [loginData setNickName:nickname];
    // appID，使用开通SDK的账号
    [loginData setAuthAcnt:appID];
    // appSecret必须做MD5处理
    [loginData setAuthPswd:md5AppSecret];
    // 用户ID
    [loginData setPrivAcnt:userID];
    // 设置服务器地址
    [cloudroomVideoSDK setServerAddr:server];
    // 执行登录操作
    NSString *cookie = [NSString stringWithFormat:@"%f",CFAbsoluteTimeGetCurrent()];
    [cloudroomVideoMgr login:loginData cookie:cookie];
 ```
 
- 回调通知:
```oc
// 登陆失败
- (void)loginFail:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie {
 
}

// 登陆成功
- (void)loginSuccess:(NSString *)usrID cookie:(NSString *)cookie {

}

//sdk掉线
- (void)lineOff:(CRVIDEOSDK_ERR_DEF)sdkErr
{

}
```
 
相关API请参考:
- [setServerAddr](Apis.md#setServerAddr)
- [login](Apis.md#Userlogin)
- [loginFail](Apis.md#loginFail)
- [loginSuccess](Apis.md#loginSuccess)
- [lineOff](Apis.md#lineOff)

<h2 id=create>3. 创建房间</h2>

输入房间标题，创建一个没有密码的房间

- 调用接口：
```oc
// 发送"创建房间"命令
[[CloudroomVideoMgr shareInstance] createMeeting:cookie]; 
```

- 回调通知:
```oc
// 创建房间成功
- (void)createMeetingSuccess:(MeetInfo *)meetInfo cookie:(NSString *)cookie
{
	
}

// 创建房间失败
- (void)createMeetingFail:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie 
{

}
```

相关API请参考:
- [createMeeting](Apis.md#createMeeting)
- [createMeetingFail](Apis.md#createMeetingFail)
- [createMeetingSuccess](Apis.md#createMeetingSuccess)

<h2 id=enter>4. 进入房间</h2>

用创建成功的房间信息（房间ID）进入房间，其他用户也是利用此房间信息进入该房间。

- 调用接口：
```oc
//进入房间
CloudroomVideoMeeting *cloudroomVideoMeeting = [CloudroomVideoMeeting shareInstance];
[cloudroomVideoMeeting enterMeeting:_meetInfo.ID];
```

- 回调通知:
```oc
- (void)enterMeetingRslt:(CRVIDEOSDK_ERR_DEF)code
 {
	 if (code == CRVIDEOSDK_NOERR) {
		 //进入房间成功
    } else if (code == CRVIDEOSDK_MEETROOMLOCKED) {
		// 房间已加锁

    } else {
		//进入房间失败

    }
}
```

相关API请参考:
- [enterMeeting](Apis.md#enterMeeting)
- [exitMeeting](Apis.md#exitMeeting)
- [enterMeetingRslt](Apis.md#enterMeetingRslt)

<h2 id=audio>5. 打开麦克风/摄像头</h2>

紧接第4步，进入房间成功后，打开自己的麦克风和摄像头，以便本地、远端显示自己的视频图像

```oc
    // 默认使用前置摄像头
	NSString *myUserID = [[CloudroomVideoMeeting shareInstance] getMyUserID];
    NSMutableArray<UsrVideoInfo*>* myVideos = [[CloudroomVideoMeeting shareInstance] getAllVideoInfo:myUserID];
    // 获取终端的所有摄像头，并设置默认的摄像头为前置摄像头
    for (UsrVideoInfo vInfo in  myVideos) {
        if ([video.videoName isEqualToString:@"前置相机"] ||[video.videoName isEqualToString:@"正面相机"]) {
            [[CloudroomVideoMeeting shareInstance] setDefaultVideo:myUserID videoID:vInfo.videoID];
            break;
        }
    }

    // 打开摄像头
    [[CloudroomVideoMeeting shareInstance] openVideo:myUserID];
    // 打开麦克风
    [[CloudroomVideoMeeting shareInstance] openMic:myUserID];
    // 开启外放
    [[CloudroomVideoMeeting shareInstance] setSpeakerOut:true];
    // 获取摄像头的相关配置， 设置分辨率为128
    VideoCfg cfg = [[CloudroomVideoMeeting shareInstance] getVideoCfg];
    cfg.sizeType = VSIZE_SZ_128;
    
    // 保存摄像头配置到SDK
    [[CloudroomVideoMeeting shareInstance] setVideoCfg:cfg];	
```

相关API请参考:
- [getMyUserID](Apis.md#getMyUserID)
- [getAllVideoInfo](Apis.md#getAllVideoInfo)
- [setDefaultVideo](Apis.md#setDefaultVideo)
- [openVideo](Apis.md#openVideo)
- [openMic](Apis.md#openMic)
- [setSpeakerOut](Apis.md#setSpeakerOut)
- [getVideoCfg](Apis.md#getVideoCfg)
- [setVideoCfg](Apis.md#setVideoCfg)

相关结构定义请参考:
- [VideoCfg](TypeDefinitions.md#VideoCfg)

<h2 id=watchOther>6. 观看他人视频</h2>

成功进入房间后，根据他人登录用户id ，设置并观看他人视频图像

创建成员视频UI显示组件，控件大小根据需求设置即可

```oc
CLCameraView * cameraView = [[CLCameraView alloc]initWithFrame:CGRectMake(0, 0, 160, 90)];
```

设置成员视频UI显示组件的相关摄像头Id

```oc
    // 一对一视频情况下 观看他人的摄像头视频
    NSString *myUserId = [[CloudroomVideoMeeting shareInstance] getMyUserID];
	//我的视频显示控件
    CLCameraView * myCameraView = [[CLCameraView alloc]initWithFrame:CGRectMake(0, 0, 160, 90)];
	//我的用户id
    UsrVideoId *uid = [[UsrVideoId alloc]init];
    uid.userId = myUserID;
    //-1表示观看默认摄像头
    uid.videoID = -1;
	[myCameraView setUsrVideoId:uid];
	
    //显示对方视频控件
    CLCameraView * otherCameraView = [[CLCameraView alloc]initWithFrame:CGRectMake(100, 0, 160, 90)];
    //获取订阅视频
    NSMutableArray<UsrVideoId*> *videos = [[CloudroomVideoMeeting shareInstance] getWatchableVideos];
    //获取对方UsrVideoId，显示对方视频
    for (UsrVideoId usrVideoId in videos) {
        if (!usrVideoId.userId.equals(myUserId)) {
            [otherCameraView setUsrVideoId:usrVideoId];
        }
    }
```

相关API请参考:
- [getWatchableVideos](Apis.md#getWatchableVideos)
- [getMyUserID](Apis.md#getMyUserID)
- [setUsrVideoId](UIComponent.md#setUsrVideoId)
- [VideoUIView](UIComponent.md#CLCameraView)

相关结构定义请参考:
- [UsrVideoId](TypeDefinitions.md#UsrVideoId)

<h2 id=exit>7. 退出房间</h2>
</br>

```oc
// 离开房间
[[CloudroomVideoMeeting shareInstance] exitMeeting];
```

相关API请参考:
- [exitMeeting](Apis.md#exitMeeting)

<h2 id=logout> 8. 反注册登陆</h2>
</br>

 ```oc
// 反注册登录
[[CloudroomVideoMgr shareInstance] logout];
```

相关API请参考:
- [logout](Apis.md#logout)

<h2 id=uninit>9. 反初始化，退出SDK</h2>

执行反初始化后SDK功能不再可用。

```oc
//反初始化
[[CloudroomVideoSDK shareInstance] unInit];
```

相关API请参考:
- [unInit](Apis.md#uninit)


