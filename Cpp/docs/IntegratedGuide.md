# 实现音视频通话

## 概述

- 快速创建并进入房间，开始音视频通话；代码部分均为 C++ 代码，详细代码请参考 APIDemo_CPP_Qt_Source 源代码。

## 准备环境

操作系统：CentOS 7、Ubuntu 18等Linux（64位）操作系统
编译器：g++4.8.5 或以上版本

## 集成SDK

<h2 id=init>1. 下载SDK</h2>

根据应用场景，从[SDK下载中心](https://sdk.cloudroom.com/pages/download#sdk)下载获取最新 SDK，解压后将 include 目录和 lib 目录复制到 CRVideoSDK 目录下

<h2 id=init>2. 初始化SDK</h2>

 初始化是整个SDK的使用基础，通常在程序启动的时候进行初始化([create](Apis.md#create))，退出后进行反初始化([destroy](Apis.md#destroy))，整个程序的生命周期中只进行一次初始化和反初始化。

```cpp

//初始化 sdkUsePath 是SDK工作目录，用于存储配置文件、临时文件等。 如果传空值，则默认为sdk的安装目录
QString sdkAppPath = "";
g_sdkMain = CRVideoSDKMain::create(strAppPath.toUtf8().constData());
/初始化失败则退出程序
if (g_sdkMain == NULL)
{
    QMessageBox::information(NULL, QObject::tr("提示"), QObject::tr("创建sdk对象失败!"));
    return -1;
}
```

设置回调函数

```cpp

class DlgLogin : public QDialog, public CRVideoSDKMainCallBack, public CRVideoSDKMeetingCallBack

DlgLogin::DlgLogin(QWidget *parent)
	: QDialog(parent, Qt::Dialog | Qt::WindowCloseButtonHint)
{
	g_sdkMain->AddCallBack(this);
	g_sdkMain->getSDKMeeting().AddCallBack(this);
}

//登录结果回调
virtual void loginRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie);
//通知掉线回调 可以弹出提示，或调用登录接口再次重试登录
virtual void notifyLineOff(CRVSDK_ERR_DEF sdkErr);
//创建房间成功
virtual void createMeetingSuccess(const CRMeetInfo& meetObj, const char* cookie);
//创建房间失败
virtual void createMeetingFail(CRVSDK_ERR_DEF sdkErr, const char* cookie);
//进入房间的完成响应
virtual void enterMeetingRslt(CRVSDK_ERR_DEF sdkErr);
//房间断线通知
virtual void notifyMeetingStopped();
...
//更多回调
...

```

 相关API请参考:
* [create](Apis.md#create)


<h2 id=login>3. 登录连接视频服务器</h2>

 设置视频服务器地址，然后使用appID和md5加密后的appSecret登录。[(获取App ID及App Secret)](beforeDevelop.md#getappid)

- 调用接口：

```cpp
//如果使用云屋的云服务时填sdk.cloudroom.com，使用私有化部署的服务器时要填部署的服务器地址；此处以云屋的云服务为例。
CRLoginDat loginDat;
loginDat._sdkAuthType = CRVSDK_AUTHTP_SECRET;
loginDat._appID = loginAppID;
//appSecret 需要进行md5加密传入进去
loginDat._md5_appSecret = MakeMd5(loginAppSecret.toUtf8());
loginDat._serverAddr = "sdk.cloudroom.com";
loginDat._webProtocol = CRVSDK_WEBPTC_HTTP;
loginDat._userID = loginDat._nickName = "昵称"; //用户的昵称

//登录
g_sdkMain->login(loginDat);
```

- 回调通知：

```cpp
//登录结果
void DlgLogin::loginRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)
{
    //若失败 可以弹出错误提示，或调用登录接口再次重试登录
	if (sdkErr != CRVSDKERR_NOERR)
	{
		QMessageBox::information(this, tr("提示"), tr("登录异常(%1)").arg(getErrDesc(sdkErr)));
		return;
	}

    //若成功 可以进入房间或者创建房间，见 第3步
    QMessageBox::information(this, tr("提示"), tr("登录成功"));
}
//通知掉线 可以弹出提示，或调用登录接口再次重试登录
void DlgLogin::notifyLineOff(CRVSDK_ERR_DEF sdkErr)
{
	QMessageBox::information(this, tr("提示"), tr("与服务器的连接中断！(原因:%1)").arg(getErrDesc(sdkErr)));
}
```
 相关API请参考:
* [login](Apis.md#login)
* [logout](Apis.md#logout)


<h2 id=create>4. 创建房间</h2>

- 调用接口：

```cpp
//创建房间
g_sdkMain->createMeeting();
```

- 回调通知：

```cpp
//创建房间成功 可以进入房间
void DlgLogin::createMeetingSuccess(const CRMeetInfo& meetObj, const char* cookie)
{
	m_meetid = meetObj._ID;
}

//创建房间失败 可以弹出错误提示
void DlgLogin::createMeetingFail(CRVSDK_ERR_DEF sdkErr, const char* cookie)
{
	QMessageBox::information(this, tr("提示"), tr("创建房间异常(%1)").arg(getErrDesc(sdkErr)));
}

```

 相关API请参考:
* [createMeeting](Apis.md#createMeeting)
* [createMeetingSuccess](Apis.md#createMeetingSuccess)
* [createMeetingFailed](Apis.md#createMeetingFail)


<h2 id=enter>5. 进入房间</h2>

 用创建成功的房间信息（房间ID）进入房间，其他用户也是利用此房间信息进入该房间。

- 调用接口：

```cpp
//进入房间
g_sdkMain->getSDKMeeting().enterMeeting(meetid);
```

- 回调通知处理：

```cpp
//进入房间的完成响应
void DlgLogin::enterMeetingRslt(CRVSDK_ERR_DEF sdkErr)
{
	//进入房间失败
	if (sdkErr != CRVSDKERR_NOERR)
	{
		QMessageBox::information(this, tr("提示"), tr("进入房间异常(%1)").arg(getErrDesc(sdkErr)));
		return;
	}

	//进入房间成功，显示主窗口，隐藏登录窗口
	m_mainDlg = new MainDialog(QApplication::desktop(), m_meetid, m_userId);
	m_mainDlg->show();
	this->hide();
}
//监控房间结束
void DlgLogin::notifyMeetingStopped()
{
	QMessageBox::information(this, tr("提示"), tr("会议已结束！"));
}
```

 相关API请参考:
*  [enterMeeting](Apis.md#enterMeeting)


<h2 id=audio>6. 打开麦克风/摄像头</h2>

 进入房间成功后，打开自己的麦克风和摄像头，以便本地、远端显示自己的视频图像

```cpp
//打开自己的麦克风
g_sdkMain->getSDKMeeting().openMic(MainDialog::getMyUserID().constData());
//打开自己的摄像头
g_sdkMain->getSDKMeeting().openVideo(MainDialog::getMyUserID().constData());

```
 相关API请参考：
* [openMic](Apis.md#openMic)
* [closeMic](Apis.md#closeMic)
* [openVideo](Apis.md#openVideo)
* [closeVideo](Apis.md#closeVideo)



<h2 id=watchVideo>7. 观看自己/他人视频</h2>


成功进入房间后，根据自己/他人登录id ，设置并观看其视频图像

- 从CRCustomRenderHandler派生渲染类， 并在onRenderFrameDat回调中接收帧数据， 然后通知UI进行绘制

```cpp

// 从CRCustomRenderHandler派生渲染类，并配置渲染CRVSDK_VIEWTP_VIDEO
class CustomrenderWidget : public QWidget, public CRCustomRenderHandler
{
signals:
    void s_recvFrame(qint64 timeStamp);

public:
    CustomRenderWidget(QWidget *parent) : QWidget(parent), CRCustomRenderHandler(CRVSDK_VIEWTP_VIDEO)
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

CustomrenderWidget *pVideoUI = new CustomrenderWidget();
// 观看自己的视频
CRUserVideoID vID(myUID);
pVideoUI->setVideoID(vID);
// 观看userID为12345678的视频
CRUserVideoID vID("12345678");
pVideoUI->setVideoID(vID);

```

相关API请参考：
* [CRCustomRenderHandler](Structs.md#CRCustomRenderHandler)
* [addCustomRender](Apis.md#addCustomRender)
* [setVideoID](Apis.md#setVideoID)



<h2 id=exit>8.退出房间</h2>


```cpp
//退出房间
g_sdkMain->getSDKMeeting().exitMeeting();
```
 相关API请参考:
* [exitMeeting](Apis.md#exitMeeting)


<h2 id=logout>9. 注销登录</h2>



 ```cpp
//注销本次登录
g_sdkMain->logout();
```
 相关API请参考:
* [logout](Apis.md#logout)


<h2 id=uninit>10.反初始化，退出SDK</h2>


 执行反初始化后SDK功能不再可用。

```cpp
//反初始化
g_sdkMain->destroy();
g_sdkMain = NULL;
```

 相关API请参考:
* [destroy](Apis.md#destroy)
