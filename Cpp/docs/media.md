# 影音播放

## 功能介绍

把一个本地视频文件、或网络流媒体播放给房间内其他用户观看，支持暂停、设置放位置等；</br>
支持的影音文件格式有： mov、rmvb、rm、flv、mp4、3gp、mp3、wav等市面上常见格式；支持http、rtmp、rtsp网络流媒体；</br>
一个房间中同一时间只支持进行一个影音播放；</br>

## 示例项目

云屋SDK 在 GitHub 上提供已经实现[影音播放](https://github.com/cloudroomSDK/API-Demo/tree/main/Linux/src/TestMediaPlay)功能的开源示例项目。你可以下载体验或查看其中的源代码。



## 播放端实现介绍

<h3 id=play_create>1.准备影音图像渲染界面</h3>

- 从CRCustomRenderHandler派生渲染类， 并在onRenderFrameDat回调中接收帧数据， 然后通知UI进行绘制

```cpp

// 从CRCustomRenderHandler派生渲染类，并配置渲染CRVSDK_VIEWTP_MEDIA
class CustomRenderWidget : public QWidget, public CRCustomRenderHandler
{
signals:
    void s_recvFrame(qint64 timeStamp);

public:
    CustomRenderWidget(QWidget *parent) : QWidget(parent), CRCustomRenderHandler(CRVSDK_VIEWTP_MEDIA)
    {
        this->setAttribute(Qt::WA_OpaquePaintEvent);
        this->setAttribute(Qt::WA_NoSystemBackground);

        //添加向sdk添加自渲染对象
        g_sdkMain->getSDKMeeting().addCustomRender(this);

        //收到新帧时，执行update进行图像给制
        connect(this, SIGNAL(s_recvFrame(qint64)), this, SLOT(update()));
    }

    CustomRenderWidget::~CustomRenderWidget()
    {
        g_sdkMain->getSDKMeeting().rmCustomRender(this);
    }

protected:
	//重载onRenderFrameDat，接收帧图像，并触发渲染
	void onRenderFrameDat(const CRVideoFrame &frm) override
    {
		//因为是在底层线程回调，所以加锁替换
		{
			QMutexLocker locker(&m_frameLock);
			m_frame = frm;
		}

		//通知UI收到新帧，进行绘制
		emit s_recvFrame(frm.getTimestamp());
    }

	//将视频帧转换成image绘制到界面上
	void paintEvent(QPaintEvent *event) override
    {
        CRVideoFrame frm;
		//加锁取到图像帧
		{
			QMutexLocker locker(&m_frameLock);
			frm = m_frame;
		}

		//将图像转成rgb
    	QRect widgetRect = this->rect();
		g_sdkMain->videoFrameCover(tmp, CRVSDK_VFMT_ARGB32, widgetRect.width(), widgetRect.height());

		//得到frm中原始指针
		uint8_t* rgb[1];
		int      linesize[1];
		tmp.getRawDatPtr(rgb, linesize, 1);

		//生成img
		QImage img = QImage(rgb[0], tmp.getWidth(), tmp.getHeight(), linesize[0], QImage::Format_RGB32);

		//绘制图像
		QPainter painter(p);
		painter.setRenderHint(QPainter::SmoothPixmapTransform);
		painter.drawImage(widgetRect, img);
    }
}
```

相关API请参考：
* [CRCustomRenderHandler](Structs.md#CRCustomRenderHandler)
* [addCustomRender](Apis.md#addCustomRender)



<h3 id=cfg>2.开始播放并观看影音</h3>

每次只能播放一个视频，停止正在播放的视频才能播放下一个视频。通过设置播放配置，还可以控制房间内其他人看到的效果。

- 接口调用：

```cpp
// 配置影音共享参数1920*1080,帧率24(如果视频文件清晰度比配置低，则以文件为准)
CRVideoCfg vCfg = g_sdkmain->getSDKMeeting().getMediaCfg();
vCfg._size = CRSize(1920, 1080);
vCfg._fps = 24;
g_sdkMain->getSDKMeeting().setMediaCfg(mediaCfg)
//开始播放影音
g_sdkMain->getSDKMeeting().startPlayMedia("D:/1.mp4");

```

- 观看影音需要监听以下的回调通知：

```cpp
//观看端和播放端都会收到开始播放影音的通知，此时显示影音播放UI，即可观看影音
void notifyMediaStart(const char* userID){
  ...
}

```

相关API请参考：
* [getMediaCfg](Apis.md#getMediaCfg)
* [setMediaCfg](Apis.md#setMediaCfg)
* [startPlayMedia](Apis.md#startPlayMedia)
* [notifyMediaStart](Apis.md#notifyMediaStart)


<h3 id=pos>3.设置播放进度</h3>

- 调用接口：

```cpp
// 设置播放进度，单位：毫秒.例如：设置到2秒处.
g_sdkMain->getSDKMeeting().setMediaPlayPos(2000);
```

相关API请参考：
*  [setMediaPlayPos](Apis.md#setMediaPlayPos)

<h3 id=play> 4.暂停、停止播放</h3>

- 调用接口：

```cpp
// 暂停或恢复播放影音：ture为暂停，false为恢复
g_sdkMain->getSDKMeeting().pausePlayMedia(true);

//停止播放影音
g_sdkMain->getSDKMeeting().stopPlayMedia();
```

- 回调通知：

注意：主动调用stopPlayMedia停止播放，或者影音文件播放到结尾，都会触发事件notifyMediaStop，房间内所有人都会收到。

```cpp
//媒体暂停播放通知
void notifyMediaPause(const char* userID, bool pause){
  ...
}

//影音停止播放通知，观看端和播放端都会收到此通知。reason 为停止原因，详见参考CRVSDK_MEDIA_STOPREASON
void notifyMediaStop(const char* userID, CRVSDK_MEDIA_STOPREASON reason)
{
    //此时可以隐藏影音显示UI
}

```
相关API请参考:
* [pausePlayMedia](Apis.md#pausePlayMedia)
* [stopPlayMedia](Apis.md#stopPlayMedia)
* [notifyMediaPause](Apis.md#notifyMediaPause)
* [notifyMediaStop](Apis.md#notifyMediaStop)


## 观看端实现介绍

<h3 id=watch_create>1.准备影音图像渲染界面</h3>

同播放端[准备影音图像渲染界面](#play_create)。


<h3 id=watch>2.观看影音</h3>
观看端收到开始播放影音的通知后显示影音播放UI，即可观看影音。

- 回调通知：

```cpp
//
void notifyMediaStart(const char* userID){
}

```

相关API请参考：
* [notifyMediaStart](Apis.md#notifyMediaStart)

<h3 id=stopNotify>3.影音停止播放通知</h3>

- 回调通知：

```cpp
//影音停止播放通知，观看端和播放端都会收到此通知。reason 为停止原因，详见参考CRVSDK_MEDIA_STOPREASON
void notifyMediaStop(const char* userID, CRVSDK_MEDIA_STOPREASON reason)
{
    //此时可以隐藏影音显示UI
}

```

相关API请参考:
* [notifyMediaStop](Apis.md#notifyMediaStop)
* [getMediaInfo](Apis.md#getMediaInfo)
* [setMediaVolume](Apis.md#setMediaVolume)
* [getMediaVolume](Apis.md#getMediaVolume)
