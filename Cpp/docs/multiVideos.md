# 多方视频通话

## 功能介绍

多方视频通话时，根据当前业务场景合理设置视频编码参数，可以在较低的带宽占用下实现流畅清晰的音视频沟通，下面将针对几种常见场景进行介绍。


<h2 id=one> 1.一对一</h2>

- 画中画布局示例图:

![画中画布局示例图](./images/layout_overlap.jpg)

常用于如双人视频聊天场景，双方通常都希望看到对方比较清晰的视频，此时可以使用较高的视频编码分辨率，比如720P或480P。


- 示例代码：

```

//设置本地视频编码参数为720P, 帧率为15
CRVideoCfg vCfg;
vCfg._size = CRSize(1280, 720);
vCfg._fps = 15;
g_pCRVideoSDKMain->getSDKMeeting().setVideoCfg(videoCfg);

//对方显示为大图
KVideoUI *pBig = new KVideoUI(pDlg);
pBig->move(0,0);
pBig->resize(pDlg->size());
pBig->setVideoID(CRUserVideoID(peerUserID));

//我显示为小图
KVideoUI *pSmall = new KVideoUI(pDlg);
pSmall->raise();
pSmall->move(pDlg->width()*2/3,  pDlg->height()*2/3);
pSmall->resize(pDlg->width()/3,  pDlg->height()/3);
pBig->setVideoID(CRUserVideoID(myUserID));

```

相关API请参考：

* [CRCustomRenderHandler](Structs.md#CRCustomRenderHandler)
* [setVideoCfg](Apis.md#setVideoCfg)


<h2 id=more> 2.多方视频</h2>

- 多方视频示例图：

![多方视频示例图](./images/five.jpg)

常用于在线教育场景，老师的视频画面比较大，可以使用较高的分辨率比如720P，下面学生的视频画面比较小，应采用较低的视频编码分辨率，比如360P或256P。


- 示例代码：

```

//创建5个ui，并设置显示内容；
KVideoUI *vuis[5];
for(int i=0; i<5; i++)
{
	vuis[i] = new KVideoUI(pDlg);
}
vuis[0]->setVideoID(CRUserVideoID(UID_teacher));
vuis[1]->setVideoID(CRUserVideoID(UID_stu1));
vuis[2]->setVideoID(CRUserVideoID(UID_stu2));
vuis[3]->setVideoID(CRUserVideoID(UID_stu3));
vuis[4]->setVideoID(CRUserVideoID(UID_stu4));

//创建对话框的布局
QVBoxLayout* bkLay = new QVBoxLayout(pDlg);

//顶部放一个大窗口，水平居中
QHBoxLayout* topLayout = new QHBoxLayout;
topLayout->addWidget(vuis[0]);
bkLay->addLayout(topLayout);
//大窗口占3/4的高度，并保持16:9
int mainVideoH = pDlg->height()/4;
int mainVideoW = mainVideoH*19/9;
m_videos[0]->resize(mainVideoW, mainVideoH);

//底部放一个水平布局，布局内水平放4个小窗口
QHBoxLayout* botLayout = new QHBoxLayout;
for(int i=1; i<5; i++)
{
	botLayout->addWidget(vuis[i]);
}
bkLay->addLayout(botLayout);


//配置本视频清晰度(如果我是大画面，用高清晰度配置， 否则用低清晰度配置）
CRVideoCfg vCfg;
if ( myUserID==UID_teacher )
{
	vCfg._size = CRSize(1280, 720);
}
else
{
	vCfg._size = CRSize(448, 256);
}
vCfg._fps = 15;
g_pCRVideoSDKMain->getSDKMeeting().setVideoCfg(videoCfg);

```

相关API请参考：

* [CRCustomRenderHandler](Structs.md#CRCustomRenderHandler)
* [setVideoCfg](Apis.md#setVideoCfg)


<h2 id=customize> 3.个性化视图</h2>

- 图一: 

![图一示例图](./images/nine.jpg)

- 图二:

![图2示例图](./images/one.jpg)

<font style="font-weight:bolder;font-size:20px;">描述：</font>在某些业务场景下，同一个房间内的用户视图不一致，导致同一个视频在不同的用户那里呈现的画面尺寸不一样，比如9方通话场景下原先9个视频画面平铺（如图一），大家都只需要编码256P的视频。某一个时刻用户B开始全屏观看A的视频（如图二），此时A需要编码高分辨率视频比如720P来确保B能看到A的清晰画面，这样一来房间中其他人虽然观看的是A的小画面，却也收到了A的720P视频流，浪费了带宽和解码性能，万一其他用户也做了类似B的操作，整个房间的通话将不可用。
对于这种场景，我们可以启用[视频大小流](KeyWords.md#stream)机制，看A小画面的用户订阅A的小流，看A大画面的用户订阅A的大流，这样既能满足各自的清晰度要求，又不会浪费带宽和CPU性能。

- 示例代码：

```

//开启双频流时，大流720p, 小流256p
string videoAttributesObj = "[{\"size\":\"1280*720\", \"fps\":12, \"quality2\":{\"size\":\"448*256\"}}]";
int videoID = axVideoSDK.getDefaultVideo(UID);
g_pCRVideoSDKMain->getSDKMeeting().setVideoAttributes(videoID, videoAttributesObj);

//订阅用户的大流（标准流）
pVideoUI->setVideoID(CRUserVideoID(userID));
//订阅用户的小流（用户必须通过setVideoAttributes开启了quality2才能订阅）
pVideoUI->setVideoID(CRUserVideoID(userID), CRVSDK_VSTP_LV1);


```

相关API请参考：

* [CRCustomRenderHandler](Structs.md#CRCustomRenderHandler)
* [setVideoCfg](Apis.md#setVideoCfg)
* [setVideoAttributes](Apis.md#setVideoAttributes)
* [getDefaultVideo](Apis.md#getDefaultVideo)
