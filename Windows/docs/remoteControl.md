# 远程协助

## 功能简介

开启屏幕共享后，可以把共享区域的操作控制权限（例如：鼠标消息、键盘消息）赋予房间内的其他用户，之后控制端就可在axScreenShareUI里进行远程操作了。


## 控制端

<h3 id=givenCtrlRight>1.被赋予远程控制权限通知</h3>

- 回调通知：

```csharp

//用户被赋予了远程控制权限
void notifyGiveCtrlRight(object sender, ICloudroomVideoMeetingEvents_notifyGiveCtrlRightEvent e){
    Console.WriteLine(e.p_operId + "  give " + e.p_targetId + "'s remote control right" );
}

```

相关API请参考:

*  [notifyGiveCtrlRight](API.md#notifyGiveCtrlRight)

<h3 id=sendCtrlMsg>2.本端进入控制模式</h3>

```csharp

//配置ScreenUI组件进入控制模式
axScreenShareUI.ctrlOpen = 1;

```

<h3 id=sendCtrlMsg>3.控制端发送控制消息</h3>

:::danger
控制端在插件上鼠标、键盘的消息会自动发送给远端。
:::


<h3 id=releasedCtrlRight>4.被收回远程控制权限通知</h3>

- 回调通知：

```csharp

// 用户远程控制权限被收回
void notifyReleaseCtrlRight(object sender, ICloudroomVideoMeetingEvents_notifyReleaseCtrlRightEvent e){
    Console.WriteLine(e.p_operId + "  repatriat " + e.p_targetId + "'s remote control right" );
}

```

相关API请参考:
*  [notifyReleaseCtrlRight](API.md#notifyReleaseCtrlRight)


## 被控端

<h3 id=giveCtrlRight>1.赋予用户控制权限</h3>

```csharp

//赋予UserID用户控制权限
axVideoSDK.giveCtrlRight(UserID);

```

:::danger
被控端赋予对方控制权限后不需要做其他操作，sdk会自动完成远端控制操作
:::

相关API请参考:

*  [giveCtrlRight](API.md#giveCtrlRight)


<h3 id=releaseCtrlRight>2.收回远程控制权限</h3>

```csharp

//收回UserID用户的控制权限
axVideoSDK.releaseCtrlRight(UserID);

```


相关API请参考:

*  [releaseCtrlRight](API.md#releaseCtrlRight)
