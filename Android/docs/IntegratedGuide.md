# 实现音视频通话

## 简要说明

- 快速创建并进入房间，开始音视频通话；以下均为Java代码，详细代码请参考Examples目录下Demo源代码。
- 请先完成[开发环境准备](beforeDevelop.md#beforeDev)，并确认音视频设备工作正常。

<h2 id=init>1. 初始化SDK</h2>

初始化是整个SDK的使用基础，通常在程序启动的时候进行初始化([init](API.md#init))，退出的时候进行反初始化([uninit](API.md#uninit))，整个程序的生命周期中只进行一次初始化和反初始化。

SDK内部的组件多为单例组件，整个程序中只能有一个实例，比如“基础组件”，“房间管理组件”，“视频房间组件”，具体请参见各个组件说明。

```java
// 初始化SDK

// SDK初始化数据对象
SdkInitDat initDat = new SdkInitDat();

// 初始化SDK
CloudroomVideoSDK.getInstance().init(getApplicationContext(), initDat);
```

相关API请参考: 
- [init](API.md#init)

相关结构定义请参考:
- [SdkInitDat](TypeDefinitions.md#SdkInitDat)

<h2 id=hardwareAccelerated>2. 硬件加速视频渲染</h2>

通过设置视频控件相关的窗口进行硬件加速，利用手机硬件GPU来提升界面的渲染效果

AndroidManifest.xml配置文件：

```xml
<activity
  android:name=".VideoMeetingActivity"
  android:hardwareAccelerated = "true"
</activity>
```

<p style="color:red; font-size:16px"> 注意：配置硬件加速可能导致某些机型上非视频控件显示不正常，需要关闭其他控件的硬件加速： </p>

```java
noUIVideoLayout.setLayerType(View.LAYER_TYPE_SOFTWARE, null);
```

<h2 id=login>3. 登录连接视频服务器</h2>

设置视频服务器地址，使用云屋授权账号和自定义用户编号登录
 
- 调用接口：
 ```java
// 设置服务器地址
CloudroomVideoSDK.getInstance().setServerAddr(server);

// 登录数据对象
LoginDat loginDat = new LoginDat();
// 昵称
loginDat.nickName = nickName;
// 用户ID
loginDat.privAcnt = userID;
// appID，使用开通SDK的账号
loginDat.authAcnt = appID;
// appSecret必须做MD5处理
loginDat.authPswd = appSecret;
// 执行登录操作
CloudroomVideoMgr.getInstance().login(loginDat);
 ```
 
- 回调通知:
```java
// 登陆失败
@Override
public void loginFail(CRVIDEOSDK_ERR_DEF sdkErr, String cookie) {
}

// 登陆成功
@Override
public void loginSuccess(String usrID, String cookie) {
}

//掉线
@Override
public void lineOff(CRVIDEOSDK_ERR_DEF sdkErr) {
}
```
 
相关API请参考:
- [setServerAddr](API.md#setServerAddr)
- [login](API.md#login)
- [loginFail](API.md#loginFail)
- [loginSuccess](API.md#loginSuccess)
- [lineOff](API.md#lineOff)

<h2 id=create>4. 创建房间</h2>

创建一个房间

- 调用接口：
```java
// 创建房间
CloudroomVideoMgr.getInstance().createMeeting(cookie);  
```

- 回调通知:
```java
// 创建房间成功
@Override
public void createMeetingSuccess(MeetInfo meetInfo, String cookie) {

}

// 创建房间失败
public void createMeetingFail(CRVIDEOSDK_ERR_DEF sdkErr, String cookie) {

}
```

相关API请参考:
- [createMeeting](API.md#createMeeting)
- [createMeetingFail](API.md#createMeetingFail)
- [createMeetingSuccess](API.md#createMeetingSuccess)

<h2 id=enter>5. 进入房间</h2>

用创建成功的房间ID进入房间，其他用户也是利用此房间信息进入该房间。

- 调用接口：
```java
CloudroomVideoMeeting.getInstance().enterMeeting(meetInfo.ID)
```

- 回调通知:
```java
@Override
public void enterMeetingRslt(CRVIDEOSDK_ERR_DEF code) {
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
- [enterMeeting](API.md#enterMeeting)
- [exitMeeting](API.md#exitMeeting)
- [enterMeetingRslt](API.md#enterMeetingRslt)

<h2 id=audio>6. 打开麦克风/摄像头</h2>

紧接第4步，进入房间成功后，打开自己的麦克风和摄像头，以便本地、远端显示自己的视频图像

```java
// 打开摄像头
CloudroomVideoMeeting.getInstance().openVideo(myUserID);

// 打开麦克风
CloudroomVideoMeeting.getInstance().openMic(myUserID);

// 开启外放
CloudroomVideoMeeting.getInstance().setSpeakerOut(true);

// 获取摄像头的相关配置
VideoCfg cfg = CloudroomVideoMeeting.getInstance().getVideoCfg();
//配置分辨率为640x360
cfg.size = new Size(640, 360);
//配置码率为默认
cfg.maxbps = -1;
		
// 保存摄像头配置到SDK
CloudroomVideoMeeting.getInstance().setVideoCfg(cfg);
```

相关API请参考:
- [getAllVideoInfo](API.md#getAllVideoInfo)
- [setDefaultVideo](API.md#setDefaultVideo)
- [openVideo](API.md#openVideo)
- [openMic](API.md#openMic)
- [setSpeakerOut](API.md#setSpeakerOut)
- [getVideoCfg](API.md#getVideoCfg)
- [setVideoCfg](API.md#setVideoCfg)

相关结构定义请参考:
- [VideoCfg](TypeDefinitions.md#VideoCfg)

<h2 id=watchOther>7. 观看他人视频</h2>

成功进入房间后，根据他人登录用户id ，设置并观看他人视频图像

创建成员视频UI显示组件

```xml
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

获取成员视频UI显示组件

```java
VideoUIView mOtherYuv = (VideoUIView)findViewById(R.id.yuv_other);
```

设置成员视频UI显示组件的相关摄像头Id

```java
// 一对一视频情况下 观看他人的摄像头视频
VideoUIView selfView = (VideoUIView) findViewById(R.id.video_self);
//-1表示观看默认摄像头
selfView.setUsrVideoId(new UsrVideoId(myUserId, (short)-1);

//设置观看对方视频
VideoUIView peerView = (VideoUIView) findViewById(R.id.video_peer);
//可以从会议中取到所有参数者，然后按业务逻辑选取想观看他人视频；(以下代码是随机选取一个非自已的视频)
ArrayList<MemberInfo> allMembers = getAllMembers();
for (MemberInfo memb : allMembers) {
    if (!memb.userId.equals(myUserId))
	{
    	peerView.setUsrVideoId(memb.userId);
		break;
    } 
}
```

相关API请参考:
- [getWatchableVideos](API.md#getWatchableVideos)
- [setUsrVideoId](UIComponent.md#setUsrVideoId)
- [VideoUIView](UIComponent.md#VideoUIView)

相关结构定义请参考:
- [UsrVideoId](TypeDefinitions.md#UsrVideoId)

<h2 id=exit>8. 退出房间</h2>
</br>

```java
// 离开房间
CloudroomVideoMeeting.getInstance().exitMeeting();
```

相关API请参考:
- [exitMeeting](API.md#exitMeeting)

<h2 id=logout> 9. 注销登录</h2>
</br>

 ```java
//注销本次登录
CloudroomVideoMgr.getInstance().logout();
```

相关API请参考:
- [logout](API.md#logout)

<h2 id=uninit>10. 反初始化，退出SDK</h2>

执行反初始化后SDK功能不再可用。

```java
//反初始化
CloudroomVideoSDK.getInstance().unInit();
```

相关API请参考:
- [unInit](API.md#uninit)


