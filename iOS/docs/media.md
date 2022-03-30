# 影音播放

## 功能简介

把一个本地视频文件、或网络流媒体播放给房间内其他用户观看，支持暂停、设置放位置等；</br>
支持的影音文件格式有： mov、rmvb、rm、flv、mp4、3gp、mp3、wav等市面上常见格式；支持http、rtmp、rtsp网络流媒体；</br>
一个房间中同一时间只支持进行一个影音播放；</br>



<h2 id=role_play>播放端</h2>

<h3 id=MediaUIView>1. 创建影音播放UI显示组件</h3>

使用可视化UI组件进行影音播放

```oc
    //设置控件，并配置frame值。
    CLMediaView* mediaView = [[CLMediaView alloc]initWithFrame:self.view.bounds]
```

相关API请参考:
+ [MediaUIView](UIComponent.md#MediaUIView)

<h3 id=videoCfg>2. 播放配置</h3>

此配置主要是为了定义共享播放时房间内其他人看到的效果

```  oc
    VideoCfg* cfg = [[VideoCfg alloc]init];
    cfg.size = CGSizeMake(640, 360);
    cfg.fps = 20;           //帧率
    [[CloudroomVideoMeeting shareInstance] setMediaCfg:cfg];
```

相关API请参考:
+ [setMediaCfg](Apis.md#setMediaCfg)

相关结构定义请参考:
+ [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)

<h3 id=PlayAndStop>3. 播放、暂停、停止</h3>

每次只能播放一个视频，当前播放需要先停止然后才能进行下一个视频播放；
开始播放参数可控制此播放是只有自己可见还是房间内所有人可见。

```  oc
    //开始本地播放，如果需要远端需要观看配合bLocPlay为NO
    [[CloudroomVideoMeeting shareInstance] startPlayMedia:@"" bLocPlay:YES bPauseWhenFinished:YES];
    
    //暂停播放
    [[CloudroomVideoMeeting shareInstance] pausePlayMedia:NO];
    
    //继续播放
    [[CloudroomVideoMeeting shareInstance] pausePlayMedia:YES];
    
    //停止当前播放
    [[CloudroomVideoMeeting shareInstance] stopPlayMedia];
```

相关API请参考:
+ [startPlayMedia](Apis.md#startPlayMedia)
+ [pausePlayMedia](Apis.md#pausePlayMedia)
+ [stopPlayMedia](Apis.md#stopPlayMedia)

<h3 id=VideoProgress>4.设置播放进度</h3>

可以通过播放组件上的工具条拖动来调整播放进度，也可以用代码来设置播放的进度

```  oc
//以毫秒为单位
int pos = 60 * 1000;
[[CloudroomVideoMeeting shareInstance] setPlayPos:ps];
```

相关API请参考: 
+ [setMediaPlayPos](Apis.md#setMediaPlayPos)

<h2 id=role_watch>收看端</h2>

<h3 id=ScreenShareUIView>1. 创建影音观看UI显示组件</h3>

使用影音观看UI组件进行屏幕共享显示

```oc
    //设置控件，并配置frame值。
    CLMediaView* mediaView = [[CLMediaView alloc]initWithFrame:self.view.bounds]
```

相关API请参考:
+ [MediaUIView](UIComponent.md#MediaUIView)

<h3 id=watchMedia>2. 观看共享通知</h3>
</br>

+ 接口调用：

```oc
// 设置会议回调（会议视频）
[[CloudroomVideoMeeting shareInstance] setMeetingCallBack:self];
```

+ 回调通知：

```oc
//通知影音开始播放
- (void)notifyMediaStart:(NSString *)userid
{

}

//对方关闭屏幕共享
- (void)notifyMediaStop:(NSString *)userid reason:(MEDIA_STOP_REASON)reason
{
    
}
```

相关API请参考:
+ [notifyMediaStart](Apis.md#notifyMediaStart)
+ [notifyMediaStop](Apis.md#notifyMediaStop)

相关结构定义请参考: 
+ [MEDIA_STOP_REASON](Constant.md#MEDIA_STOP_REASON)













