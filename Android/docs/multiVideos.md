# 多方视频通话

## 功能介绍

多方视频通话时，根据当前业务场景合理设置视频编码参数，可以在较低的带宽占用下实现流畅清晰的音视频沟通，下面将针对几种常见场景进行介绍。


<h2 id=one> 1.一对一</h2>

- 画中画布局示例图:

![画中画布局示例图](./images/layout_overlap.jpg)

常用于如双人视频聊天场景，双方通常都希望看到对方比较清晰的视频，此时可以使用较高的视频编码分辨率，比如720P或480P。


- 布局文件：

``` xml
<RelativeLayout
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:tag="1v1" >

    <com.cloudroom.cloudroomvideosdk.VideoUIView
    	android:id="@+id/video_self"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />

    <com.cloudroom.cloudroomvideosdk.VideoUIView
    	android:id="@+id/video_peer"
        android:layout_width="160dp"
        android:layout_height="90dp"
        android:layout_alignParentBottom="true"
        android:layout_alignParentRight="true" />

</RelativeLayout>
```

- 接口调用：

```java
// 设置自己视频分辨率为720P
VideoCfg cfg = CloudroomVideoMeeting.getInstance().getVideoCfg();
cfg.size = new Size(1280, 720);
CloudroomVideoMeeting.getInstance().setVideoCfg(cfg);

//设置观看自己视频
VideoUIView selfView = (VideoUIView) findViewById(R.id.video_self);
selfView.setUsrVideoId(new UsrVideoId(myUID, (short)-1);

//设置观看对方视频
VideoUIView peerView = (VideoUIView) findViewById(R.id.video_peer);
peerView.setUsrVideoId(new UsrVideoId(peerUid, (short)-1);
```

相关API请参考：

* [setVideoCfg](API.md#setVideoCfg)
* [getVideoCfg](API.md#getVideoCfg)

相关结构定义请参考：

* [VideoCfg](TypeDefinitions.md#VideoCfg)


<h2 id=more> 2.多方视频</h2>

- 多方视频示例图：

![多方视频示例图](./images/five.jpg)

常用于在线教育场景，老师的视频画面比较大，可以使用较高的分辨率比如720P，下面学生的视频画面比较小，应采用较低的视频编码分辨率，比如360P或256P。


- 布局文件：

``` xml
<LinearLayout
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center_vertical|center_horizontal"
    android:orientation="vertical" >

    <com.example.main.VideoView
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:layout_weight="1" />

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="160dp"
        android:layout_weight="0"
        android:orientation="horizontal" >

        <com.example.main.VideoView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_weight="1" />

        <com.example.main.VideoView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_weight="1" />

        <com.example.main.VideoView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_weight="1" />

        <com.example.main.VideoView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_weight="1" />
    </LinearLayout>

</LinearLayout>
```

+ 接口调用：

```java
VideoCfg cfg = CloudroomVideoMeeting.getInstance().getVideoCfg();

// 老师端设置摄像头使用720P
cfg.size = new Size(1280, 720);;
CloudroomVideoMeeting.getInstance().setVideoCfg(cfg);
```


```java
VideoCfg cfg = CloudroomVideoMeeting.getInstance().getVideoCfg();

// 学生端设置摄像头使用360P
cfg.size = new Size(640, 360);;
CloudroomVideoMeeting.getInstance().setVideoCfg(cfg);
```

- 控件查看视频时，设置相关视频档位：

```java
VideoUIView teacherVideoView = (VideoUIView)findViewById(R.id.video_teacher);
VideoUIView studentVideoView1 = (VideoUIView)findViewById(R.id.video_student1);
VideoUIView studentVideoView2 = (VideoUIView)findViewById(R.id.video_student2);
VideoUIView studentVideoView3 = (VideoUIView)findViewById(R.id.video_student3);
VideoUIView studentVideoView4 = (VideoUIView)findViewById(R.id.video_student4);

// 进入房间后...

// 设置老师端观看视频
teacherVideoView.setUsrVideoId(teacherVideoId);

// 设置学生端观看视频
studentVideoView1.setUsrVideoId(studentVideoId1);
studentVideoView2.setUsrVideoId(studentVideoId2);
studentVideoView3.setUsrVideoId(studentVideoId3);
studentVideoView4.setUsrVideoId(studentVideoId4);
```

相关API请参考：

* [setVideoCfg](API.md#setVideoCfg)
* [getVideoCfg](API.md#getVideoCfg)

相关结构定义请参考：

* [VideoCfg](TypeDefinitions.md#VideoCfg)

<h2 id=customize> 3.个性化视图</h2>

- 图一: 

![图一示例图](./images/nine.jpg)

- 图二:

![图2示例图](./images/one.jpg)

<font style="font-weight:bolder;font-size:20px;">描述：</font>在某些业务场景下，同一个房间内的用户视图不一致，导致同一个视频在不同的用户那里呈现的画面尺寸不一样，比如9方通话场景下原先9个视频画面平铺（如图一），大家都只需要编码256P的视频。某一个时刻用户B开始全屏观看A的视频（如图二），此时A需要编码高分辨率视频比如720P来确保B能看到A的清晰画面，这样一来房间中其他人虽然观看的是A的小画面，却也收到了A的720P视频流，浪费了带宽和解码性能，万一其他用户也做了类似B的操作，整个房间的通话将不可用。
对于这种场景，我们可以启用[视频大小流](KeyWords.md#stream)机制，看A小画面的用户订阅A的小流，看A大画面的用户订阅A的大流，这样既能满足各自的清晰度要求，又不会浪费带宽和CPU性能。

- 示例代码：

```java
/* 设置视频流 用户A的代码：
  (1)A启用大小流机制 。设置默认视频设置为大流，第二档设置为小流
*/
//配置默认大流使用720p
VideoCfg cfg = CloudroomVideoMeeting.getInstance().getVideoCfg();
cfg.size = new Size(1280, 720);;
CloudroomVideoMeeting.getInstance().setVideoCfg(cfg);

//配置默认小流使用360p
VideoAttributes specialVideoAttr = CloudroomVideoMeeting.getInstance().getLocVideoAttributes(videoID);
cfg.size = new Size(640, 360);;
specialVideoAttr.quality2Cfg = cfg；
CloudroomVideoMeeting.getInstance().setLocVideoAttributes(videoID, specialVideoAttr);
```

- 观看视频阶段

```java
VideoUIView videoUIView = (VideoUIView)findViewById(R.id.yuv_video);

// 进入房间后...

// 当用户用小流查看视频
int qualityLv = 2;
videoUIView.setUsrVideoId(VideoId, qualityLv);

// 当用户进行观看大流视频的交互操作后...

// 用大流查看视频
qualityLv = 1;
videoUIView.setUsrVideoId(VideoId, qualityLv);
```

相关API请参考：

* [setUsrVideoId](UIComponent.md#setUsrVideoId)
* [VideoUIView](UIComponent.md#VideoUIView)

相关结构定义请参考: 

* [VideoAttributes](TypeDefinitions.md#VideoAttributes)
