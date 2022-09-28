# 屏幕共享

## 功能介绍

在视频会话中为了提高沟通效率，可以将自己的屏幕内容分享给其他参与方观看。 </br>
使用场景如下：
* 视频会议场景中，屏幕共享可以将讲话者本地的文件、数据、网页、PPT 等画面分享给其他与会人；
* 在线课堂场景中，屏幕共享可以将老师的课件、笔记、讲课内容等画面展示给学生观看。

<font color="#FF0000">注意：同一个房间中，不支持多人同时开启屏幕共享。</font>


## 共享端

<h3 id=startshare>1.开始共享</h3>
<font color="#FF0000">c++ sdk版本，当前只支持windows平台发起共享。</font>

- 接口调用：

```cpp

//设置屏幕共享参数:帧率8，其他採用系統默认參數
CRScreenShareCfg screenShareCfgObj;
screenShareCfgObj._maxFPS = 8;
g_sdkmain->getSDKMeeting().setScreenShareCfg(screenShareCfgObj);

//开启屏幕共享
g_sdkmain->getSDKMeeting().startScreenShare();
```

- 回调通知：

```cpp

// 开启结果
void void startScreenShareRslt(CRVSDK_ERR_DEF sdkErr){
    if (sdkErr == CRVSDKERR_NOERR){
        // 开启屏幕共享成功,  sdk内部将自动完成抓屏共享处理。
    }else{
        // 开启屏幕共享失败
    }
}

```

相关API请参考：
* [setScreenShareCfg](Apis.md#setScreenShareCfg)
* [startScreenShare](Apis.md#startScreenShare)
* [startScreenShareRslt](Apis.md#startScreenShareRslt)
* [notifyScreenShareStarted](Apis.md#notifyScreenShareStarted)


<h3 id=stopshare>2.停止共享</h3>

- 接口调用：

```cpp

//主动停止屏幕共享
g_sdkmain->getSDKMeeting().stopScreenShare();

```

- 回调通知：

```cpp

//主动停止屏幕共享的结果
void stopScreenShareRslt(CRVSDK_ERR_DEF sdkErr){
    if (sdkErr == CRVSDKERR_NOERR){
        // 停止屏幕共享成功
    }else{
        // 停止屏幕共享失败
    }
}

```

相关API请参考：
 * [stopScreenShare](Apis.md#stopScreenShare)
 * [stopScreenShareRslt](Apis.md#stopScreenShareRslt)
 * [notifyScreenShareStopped](Apis.md#notifyScreenShareStopped)

## 观看端

<h3 id=CustomRenderWidget>1.准备远端屏幕渲染界面</h3>

- 从CRCustomRenderHandler派生渲染类， 并在onRenderFrameDat回调中接收帧数据， 然后通知UI进行绘制


```cpp

// 从CRCustomRenderHandler派生渲染类，并配置渲染CRVSDK_VIEWTP_SCREEN
class CustomRenderWidget : public QWidget, public CRCustomRenderHandler
{
signals:
    void s_recvFrame(qint64 timeStamp);

public:
    CustomRenderWidget(QWidget *parent) : QWidget(parent), CRCustomRenderHandler(CRVSDK_VIEWTP_SCREEN)
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

<h3 id=notifyScreenShareStarted>2.通知开始共享</h3>

- 回调通知：

```cpp

//收到屏幕共享开启通知的处理
void notifyScreenShareStarted(const char* userID){
	//显示远端屏幕渲染界面
}

```

相关API请参考：
 * [notifyScreenShareStarted](Apis.md#notifyScreenShareStarted)


<h3 id=notifyScreenShareStopped>3.通知停止共享</h3>

```cpp

//收到他人停止了屏幕共享的通知
void notifyScreenShareStopped(const char* oprUserID)
{
   //隐藏远端屏幕渲染界面
}
```

相关API请参考：
 * [notifyScreenShareStopped](Apis.md#notifyScreenShareStopped)
