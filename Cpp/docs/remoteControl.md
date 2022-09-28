# 远程协助

## 功能介绍

开启屏幕共享后，可以把共享区域的操作控制权限（例如：鼠标消息、键盘消息）赋予房间内的其他用户，之后控制端就可以发送远控命令了。


## 控制端

<h3 id=givenCtrlRight>1.被赋予远程控制权限通知</h3>

- 回调通知：

```cpp

//用户被赋予了远程控制权限
void notifyGiveCtrlRight(const char* operUserId, const char* targetUserId){
    //operUserId: 权限操作人员
	//targetUserId: 被赋予权限的人员
}

```

相关API请参考:

*  [notifyGiveCtrlRight](Apis.md#notifyGiveCtrlRight)

<h3 id=sendCtrlMsg>2.控制端发送控制消息</h3>

如下演示了，如何从Qt界面拦截鼠标、键盘事件，转换成远控消息：

```cpp

CRPoint ScreenView::ptCover(const QPoint &curPt)
{
	CRPoint pt;
	pt.x = curPt.x() * m_fScaleRate_x;  //m_fScaleRate_x当前图像的缩放比
	pt.y = curPt.y() * m_fScaleRate_y;

	return pt;
}


CRVSDK::CRVSDK_MOUSEKEY_TYPE ScreenView::mouseKeyCover(Qt::MouseButton btn)
{
	switch (btn)
	{
	case Qt::LeftButton: return CRVSDK::MOUSEKEY_L;
	case Qt::RightButton: return CRVSDK::MOUSEKEY_R;
	case Qt::MidButton: return CRVSDK::MOUSEKEY_M;
	case Qt::XButton1: return CRVSDK::MOUSEKEY_X;
	default: return CRVSDK::MOUSEKEY_NULL;
	}
}


bool ScreenView::event(QEvent *e)
{
	if (e->type() == QEvent::Wheel)
	{
		if (e->delta() > 0)
		{
			g_sdkMain->getSDKMeeting().ctrlMouseMsg(CRVSDK::MOUSE_DOWN, CRVSDK::MOUSEKEY_WHEEL, ptTrans(e->pos()));
		}
		else
		{
			g_sdkMain->getSDKMeeting().ctrlMouseMsg(CRVSDK::MOUSE_UP, CRVSDK::MOUSEKEY_WHEEL, ptTrans(e->pos()));
		}
	}
	else if (e->type() == QEvent::MouseMove)
	{
		g_sdkMain->getSDKMeeting().ctrlMouseMsg(CRVSDK::MOUSE_MOVE, CRVSDK::MOUSEKEY_NULL, ptTrans(e->pos()));
	}
	else if (e->type() == QEvent::MouseButtonPress)
	{
		CRVSDK::CRVSDK_MOUSEKEY_TYPE kType = mouseKeyCover(e->button())
		if ( kType!=CRVSDK_MOUSEKEY_NULL )
		{
			g_sdkMain->getSDKMeeting().ctrlMouseMsg(CRVSDK::MOUSE_DOWN, kType, ptTrans(e->pos()));
		}
	}
	else if (e->type() == QEvent::MouseButtonRelease)
	{
		CRVSDK::CRVSDK_MOUSEKEY_TYPE kType = mouseKeyCover(e->button())
		if ( kType!=CRVSDK_MOUSEKEY_NULL )
		{
			g_sdkMain->getSDKMeeting().ctrlMouseMsg(CRVSDK::MOUSE_UP, kType, ptTrans(e->pos()));
		}
	}
	else if (e->type() == QEvent::MouseButtonDblClick)
	{
		CRVSDK::CRVSDK_MOUSEKEY_TYPE kType = mouseKeyCover(e->button())
		if ( kType!=CRVSDK_MOUSEKEY_NULL )
		{
			g_sdkMain->getSDKMeeting().ctrlMouseMsg(CRVSDK::MOUSE_DBCLICK, kType, ptTrans(e->pos()));
		}
	}
	else if (e->type() == QEvent::KeyRelease)
	{
		quint32 modifiers = e->nativeModifiers();
		bool bExtendedKey = modifiers & 0x1000000;
		g_sdkMain->getSDKMeeting().ctrlKeyMsg(CRVSDK::KEYT_DWON, e->nativeVirtualKey(), bExtendedKey);
	}
	else if (e->type() == QEvent::KeyPress)
	{
		quint32 modifiers = e->nativeModifiers();
		bool bExtendedKey = modifiers & 0x1000000;
		g_sdkMain->getSDKMeeting().ctrlKeyMsg(CRVSDK::KEYT_UP, e->nativeVirtualKey(), bExtendedKey);
	}

	return QWidget::event(e);
}

```


<h3 id=releasedCtrlRight>3.被收回远程控制权限通知</h3>

- 回调通知：

```cpp

// 用户远程控制权限被收回
void notifyReleaseCtrlRight(const char* operUserId, const char* targetUserId){

}

```

相关API请参考:
*  [notifyReleaseCtrlRight](Apis.md#notifyReleaseCtrlRight)


## 被控端

<h3 id=giveCtrlRight>1.赋予用户控制权限</h3>

```cpp

//赋予UserID用户控制权限
g_sdkMain->getSDKMeeting().giveCtrlRight(UserID);

```

:::danger
被控端赋予对方控制权限后不需要做其他操作，sdk会自动完成远端控制消息处理
:::

相关API请参考:

*  [giveCtrlRight](Apis.md#giveCtrlRight)


<h3 id=releaseCtrlRight>2.收回远程控制权限</h3>

```cpp

//收回UserID用户的控制权限
g_sdkMain->getSDKMeeting().releaseCtrlRight(UserID);

```


相关API请参考:

*  [releaseCtrlRight](Apis.md#releaseCtrlRight)
