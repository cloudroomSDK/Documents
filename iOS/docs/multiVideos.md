# 多方视频通话

## 功能介绍

多方视频通话时，根据当前业务场景合理设置视频编码参数，可以在较低的带宽占用下实现流畅清晰的音视频沟通，下面将针对几种常见场景进行介绍。


<h2 id=one> 1.一对一</h2>

- 画中画布局示例图:

![画中画布局示例图](./images/layout_overlap.jpg)

常用于如双人视频聊天场景，双方通常都希望看到对方比较清晰的视频，此时可以使用较高的视频编码分辨率，比如720P或480P。


- 示例代码：

```oc
// 获取自己视频分辨率并配置为720P
VideoCfg* cfg = [[CloudroomVideoMeeting shareInstance] getVideoCfg];
cfg.size = CGSizeMake(1280, 720);
[[CloudroomVideoMeeting shareInstance] setVideoCfg:cfg];

//这里使用上图横屏布局，我方显示全屏
CLCameraView * myView = [[CLCameraView alloc]initWithFrame:self.view.bounds];
//设置myUID
[bigView setUsrVideoId:myUID];

//对方显示在右下角
CGFloat viewW = self.view.bounds.size.width;
CGFloat viewH = self.view.bounds.size.height;
CGFloat peerW = 320;
CGFloat peerH = 180;
CLCameraView * peerView = [[CLCameraView alloc]initWithFrame:CGRectMake(viewW-peerW, viewH-peerH, peerW, peerH)];
//设置对方peerUid
[peerView setUsrVideoId:peerUid];

```

相关API请参考：
+ [setVideoCfg](Apis.md#setVideoCfg)
+ [getVideoCfg](Apis.md#getVideoCfg)

相关结构定义请参考：
+ [VideoCfg](TypeDefinitions.md#VideoCfg)


<h2 id=more> 2.多方视频</h2>

- 多方视频示例图:

![多方视频示例图](./images/five.jpg)

常用于在线教育场景，老师的视频画面比较大，可以使用较高的分辨率比如720P，下面学生的视频画面比较小，应采用较低的视频编码分辨率，比如360P或256P。


- 老师端设置摄像头使用720P

```oc
    VideoCfg* cfg = [[CloudroomVideoMeeting shareInstance] getVideoCfg];
    // 视频分辨率设为720P
    cfg.size = CGSizeMake(1280, 720);
    [[CloudroomVideoMeeting shareInstance] setVideoCfg:cfg];
```

- 学生端设置摄像头使用360P

```oc
    VideoCfg* cfg = [[CloudroomVideoMeeting shareInstance] getVideoCfg];
    // 视频分辨率设为360P
    cfg.size = CGSizeMake(640, 360);
    [[CloudroomVideoMeeting shareInstance] setVideoCfg:cfg];
```

- 控件查看视频时，设置相关视频档位：

```oc
    //此处是新创建的CLCameraView
    CLCameraView* teacherVideoView = [[CLCameraView alloc]init];
    CLCameraView* studentVideoView1 = [[CLCameraView alloc]init];
    CLCameraView* studentVideoView2 = [[CLCameraView alloc]init];
    CLCameraView* studentVideoView3 = [[CLCameraView alloc]init];
    CLCameraView* studentVideoView4 = [[CLCameraView alloc]init];
    
    // 进入房间后...
    
    // 设置老师端观看视频
    [teacherVideoView setUsrVideoId:teacherVideoId];

    // 设置学生端观看视频
    [studentVideoView1 setUsrVideoId:studentVideoId];
    [studentVideoView2 setUsrVideoId:studentVideoId];
    [studentVideoView3 setUsrVideoId:studentVideoId];
    [studentVideoView4 setUsrVideoId:studentVideoId];

```
- <p style="color:red; font-size:20px">注意事项:</p>

+ 老师和学生的身份是由业务层控制，sdk不识别身份
+ 布局可以使用xib或者使用第三方布局框架都可以


相关API请参考：
+ [setVideoCfg](Apis.md#setVideoCfg)
+ [getVideoCfg](Apis.md#getVideoCfg)

相关结构定义请参考：
+ [VideoCfg](TypeDefinitions.md#VideoCfg)


<h2 id=customize> 3.个性化视图</h2>

- 图一: 

![图一示例图](./images/nine.jpg)

- 图二:

![图2示例图](./images/one.jpg)

<font style="font-weight:bolder;font-size:20px;">描述：</font>在某些业务场景下，同一个房间内的用户视图不一致，导致同一个视频在不同的用户那里呈现的画面尺寸不一样，比如9方通话场景下原先9个视频画面平铺（如图一），大家都只需要编码256P的视频。某一个时刻用户B开始全屏观看A的视频（如图二），此时A需要编码高分辨率视频比如720P来确保B能看到A的清晰画面，这样一来房间中其他人虽然观看的是A的小画面，却也收到了A的720P视频流，浪费了带宽和解码性能，万一其他用户也做了类似B的操作，整个房间的通话将不可用。
对于这种场景，我们可以启用[视频大小流](KeyWords.md#stream)机制，看A小画面的用户订阅A的小流，看A大画面的用户订阅A的大流，这样既能满足各自的清晰度要求，又不会浪费带宽和CPU性能。

- 示例代码：

```oc
/* 设置视频流 用户A的代码：
  (1)A启用大小流机制 。设置默认视频设置为大流，第二档设置为小流
*/
    //配置大流使用720p
    VideoCfg *cfg1 = [[VideoCfg alloc]init];
    cfg1.size = CGSizeMake(1280, 720);
    cfg1.fps = 12;

    //配置小流使用360p
    VideoCfg *cfg2 = [[VideoCfg alloc]init];
    cfg1.size = CGSizeMake(640, 360);
    cfg2.fps = 12;

    CamAttribute *attr = [[CamAttribute alloc]init];
    attr.disabled = false;
    attr.quality1_cfg = cfg1;
    attr.quality2_cfg = cfg2;
    [[CloudroomVideoMeeting shareInstance] setLocVideoAttributes:videoID attributes:attr];
```

- 观看视频阶段

```oc
    CLCameraView* cameraView = [[CLCameraView alloc]init];
    
    // 进入房间后...
    
    // 当用户用小流查看视频
    int qualityLv = 2;
    [cameraView setUsrVideoId:VideoId qualityLv:qualityLv];
    
    // 当用户进行观看大流视频的交互操作后...
    
    // 用大流查看视频
    qualityLv = 1;
    [cameraView setUsrVideoId:VideoId qualityLv:qualityLv];
```

相关API请参考：
+ [setUsrVideoId](Apis.md#setUsrVideoId)
+ [CLCameraView](UIComponent.md#CLCameraView)

相关结构定义请参考: 
+ [CamAttribute](TypeDefinitions.md#CamAttribute)
