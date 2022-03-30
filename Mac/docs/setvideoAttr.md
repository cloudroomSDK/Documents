# 设置视频属性

## 功能介绍

在通话过程中可以根据实际业务场景，调整视频画面的清晰度和流畅度，提升用户体验。</br>
视频属性包含设置默认摄像头、视频分辨率、帧率、码率、降噪等。</br>
<font color=Red>注意：成功进入房间后，才可以设置视频属性。</font>

<h2 id=videoCfg>1. 摄像头参数配置</h2>

``` oc
VideoCfg *cfg =  [[CloudroomVideoMeeting shareInstance] getVideoCfg];
// 视频分辨率
cfg.size = CGSizeMake(720, 400);
// 视频帧率
cfg.fps = 15;

//设置摄像头的相关配置
[[CloudroomVideoMeeting shareInstance] setVideoCfg:cfg];
```

相关API请参考：
+ [getVideoCfg](Apis.md#getVideoCfg)
+ [setVideoCfg](Apis.md#setVideoCfg)

相关结构定义请参考:
- [VideoCfg](TypeDefinitions.md#VideoCfg)

<h2 id=KeepAspectRatio>2. 保持视频比例</h2>

控件默认保持视频显示控件内的摄像头视频比例不受到控件长宽的影响，多余部分会以黑色边框显示，也可设置视频显示控件的主调方法使其视频不再保持比例。

<p style="color:red; font-size:16px"> 注意：建议设置保持视频比例， 否则显示视频将裁剪。</p>

```oc
//初始化控件
CLCameraView * cameraView = [[CLCameraView alloc]initWithFrame:CGRectMake(0, 0, 100, 100)];
//设置视频显示id
UsrVideoId *videoID = [[UsrVideoId alloc]init];
videoID.userId = @""; //显示指定用户的视频图像
videoID.videoID = -1; //显示指定用户默认摄像头
[cameraView setUsrVideoId:videoID];
//设置视频保持比例
[cameraView setKeepAspectRatio:true];
```

相关API请参考：
+ [setKeepAspectRatio](UIComponent.md#keepAspectRatio)
+ [CLCameraView](UIComponent.md#CLCameraView)








