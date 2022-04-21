# 屏幕共享

## 功能介绍

在视频会话中为了提高沟通效率，可以将自己的屏幕内容分享给其他参与方观看。还支持在屏幕上进行标注，以及授权其他参与方进行远程控制。当屏幕共享者开启标注后，控件就进入标注模式。此时，房间内所有用户都可以进行标注，并观看他人标注的内容。</br>
使用场景如下：
* 视频会议场景中，屏幕共享可以将讲话者本地的文件、数据、网页、PPT 等画面分享给其他与会人；
* 在线课堂场景中，屏幕共享可以将老师的课件、笔记、讲课内容等画面展示给学生观看。

<font color="#FF0000">注意：同一个房间中，不支持多人同时开启屏幕共享。</font>



## 共享端

<h3 id=startshare>1.开始共享</h3>

- 接口调用：

```csharp

//设置屏幕共享参数:帧率8，其他採用系統默认參數
string screenShareCfgObj = "[{\"maxFPS\":8}]";
axVideoSDK.setScreenShareCfg(screenShareCfgObj);

//开启屏幕共享
axVideoSDK.startScreenShare();
```

- 回调通知：

```csharp

// 开启结果
void startScreenShareRslt(object sender, ICloudroomVideoMeetingEvents_startScreenShareRsltEvent e){
    if (e.p_sdkErr == CRVIDEOSDK_NOERR){
        Console.WriteLine("开启屏幕共享成功");
    }else{
        Console.WriteLine("开启屏幕共享失败");
    }
}

```

相关API请参考：
* [setScreenShareCfg](API.md#setScreenShareCfg)
* [startScreenShare](API.md#startScreenShare)
* [startScreenShareRslt](API.md#startScreenShareRslt)
* [notifyScreenShareStarted](API.md#notifyScreenShareStarted)


 <h3 id=startmark>2.开启标注</h3>

:::danger

注意：只有主动开启屏幕共享的用户，才可以开启标注功能。

:::

- 接口调用：

```csharp
//开启标注
axVideoSDK.startScreenMark();

```
- 回调通知：

```csharp

//开启标注结果
void startScreenMarkRslt(object sender, ICloudroomVideoMeetingEvents_startScreenMarkRsltEvent e){
  if (e.p_sdkErr == CRVIDEOSDK_NOERR){
      Console.WriteLine("开启标注成功");
  }else{
      Console.WriteLine("开启标注失败,错误码:" + e.p_sdkErr.ToString());
  }
}

```

标注开启成功后，CloudroomScreenShareUI将自动弹出标注功能页面，提供标注相关的功能。

相关API请参考：
* [startScreenMark](API.md#startScreenMark)



<h3 id=stopmark>3.停止标注</h3>

:::danger

注意：只有主动开启屏幕共享的用户，才可以停止标注功能。

:::

- 接口调用：

```csharp
//停止标注
axVideoSDK.stopScreenMark();

```

- 回调通知：

```csharp
//停止标注的结果
void stopScreenMarkRslt(object sender, ICloudroomVideoMeetingEvents_startScreenMarkRsltEvent e){
  Console.WriteLine("停止标注成功");
}

```

相关API请参考：
* [stopScreenMark](API.md#stopScreenMark)


<h3 id=stopshare>4.停止共享</h3>

- 接口调用：

```csharp
//主动停止屏幕共享
axVideoSDK.stopScreenShare();
```

- 回调通知：

```csharp

//主动停止屏幕共享的结果
void stopScreenShareRslt(object sender, ICloudroomVideoMeetingEvents_stopScreenShareRsltEvent e){
      Console.WriteLine("停止共享成功");
}

```

相关API请参考：
 * [stopScreenShare](API.md#stopScreenShare)
 * [stopScreenShareRslt](API.md#stopScreenShareRslt)

## 观看端

<h3 id=startshareNotify>1.通知开始共享</h3>

- 回调通知：

```csharp

//收到屏幕共享通知的处理，显示屏幕共享控件
void notifyScreenShareStarted(object sender, EventArgs e){
    axScreenShareUI.Visible = true;
}

```

相关API请参考：
 * [notifyScreenShareStarted](API.md#notifyScreenShareStarted)



<h3 id=startmarkNotify>2.开启停止标注通知</h3>

- 回调通知：

```csharp
//收到屏幕共享已开启标注的通知
void notifyScreenMarkStarted(object sender, ICloudroomVideoMeetingEvents_startScreenMarkRsltEvent e) {
  ...
}

//收到屏幕共享停止标注的通知
void notifyScreenMarkStopped(object sender, ICloudroomVideoMeetingEvents_startScreenMarkRsltEvent e){
  ...
}
```

相关API请参考：
* [notifyScreenMarkStarted](API.md#notifyScreenMarkStarted)
* [notifyScreenMarkStopped](API.md#notifyScreenMarkStopped)


<h3 id=stopshareNotify>3.通知停止共享</h3>

```csharp

//收到他人停止了屏幕共享的通知
void notifyScreenShareStopped(object sender, EventArgs e)
{
   //隐藏屏幕共享控件
   axScreenShareUI.Visible = false;
}
```


相关API请参考：
 * [notifyScreenShareStopped](API.md#notifyScreenShareStopped)
