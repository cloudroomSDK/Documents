# 设置视频属性

<h1>功能介绍</h1>

在通话过程中可以根据实际业务场景，调整视频画面的清晰度和流畅度，提升用户体验。</br>
视频属性包含设置默认摄像头、视频分辨率、帧率、码率、降噪等。</br>
<font color=Red>注意：成功进入房间后，才可以设置视频属性。</font>

<h2 id=videoCfg>1. 摄像头参数配置</h2>
</br>

``` java
VideoCfg cfg = new VideoCfg();

// 视频分辨率 
cfg.size = new Size(128, 80);;
		
//设置摄像头的相关配置
CloudroomVideoMeeting.getInstance().setVideoCfg(cfg);
```

相关API请参考：
+ [getVideoCfg](API.md#getVideoCfg)
+ [setVideoCfg](API.md#setVideoCfg)

相关结构定义请参考:
- [VideoCfg](TypeDefinitions.md#VideoCfg)

<h2 id=KeepAspectRatio>2. 保持视频比例</h2>

控件默认保持视频显示控件内的摄像头视频比例不受到控件长宽的影响，多余部分会以黑色边框显示，也可设置视频显示控件的主调方法使其视频不再保持比例。

<p style="color:red; font-size:16px"> 注意：建议设置保持视频比例， 否则显示视频容易产生变形。</p>

```java
mSelfGLSV = (VideoUIView) findViewById(R.id.yuv_self);
mSelfGLSV.setScaleType(VideoUIView.SCALE_TYPE_FITXY);
```

相关API请参考：
+ [getScaleType](UIComponent.md#getScaleType)
+ [setScaleType](UIComponent.md#setScaleType)
+ [VideoUIView](UIComponent.md#VideoUIView)








