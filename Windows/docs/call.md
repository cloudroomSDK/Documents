# 呼叫

## 功能简介

实现用户之间的呼叫功能，流程是：A用户先创建一个房间，然后呼叫B用户，如果B用户接受呼叫，AB进入房间进行通讯。

:::danger

注意：在登录成功后才可以使用呼叫功能。

:::

## 主叫

<h3 id=creatMeeting>1.创建房间</h3>

- 调用接口：

```csharp
//创建房间
void createMeeting("房间的的主题长度50字内")
```

- 回调通知：

```csharp
//创建房间成功
void createMeetingSuccess(object sender, ICloudroomVideoMgrEvents_createMeetingSuccessEvent e){
    //创建成功后可获得房间信息meetObj
}
//创建房间失败
void createMeetingFail(object sender, ICloudroomVideoMgrEvents_createMeetingFailEvent e){
    //创建失败，可以弹出错误提示，不能再执行 进入房间
}
```

 相关API请参考:
* [createMeeting](API.md#createMeeting)
* [createMeetingSuccess](API.md#createMeetingSuccess)
* [createMeetingFail](API.md#createMeetingFail)


<h3 id=CallerStartcall>2.发起呼叫</h3>


:::danger

注意：
1. 当用户A呼叫用户B时，只有B成功登录了，才可以收到被呼叫通知，否则被呼叫者是无法收到被呼叫的消息的。

:::


- 调用接口：

```csharp
//A发起呼叫，邀请普通用户B进入房间。
//被呼叫者（B）的UserID
string calledUID = "12345678";
//strMeetInfoObj为createMeeting返回的会议信息
axVideoSDK.call(calledUID, strMeetInfoObj, "", "");
```

- 回调通知：

```csharp
//呼叫操作成功响应
void callSuccess(object sender, ICloudroomVideoMgrEvents_callSuccessEvent e){
  Console.WriteLine("callSuccess:" + e.p_callID);
}

// 呼叫操作失败响应
void callFailed(object sender, ICloudroomVideoMgrEvents_callFailEvent e){
    Console.WriteLine("callFailed, error:" + e.p_sdkErr + ", callID:" + e.p_callID);
}
```

- 呼叫SIP/H323设备

请参考 [SIP/H.323设备支持](sipH323Support.md#callSipH323) 呼叫部分

呼叫他人相关API请参考:
* [call](API.md#call)
* [callSuccess](API.md#callSuccess)
* [callFailed](API.md#callFail)


<h3 id=accepted_rejected_Call>3.呼叫被接受/拒绝</h3>

- 回调通知：

```csharp
//通知呼叫被接受
void notifyCallAccepted(object sender, ICloudroomVideoMgrEvents_notifyCallAcceptedEvent e)
{
  //呼叫被接受，开始进入会议...
}

// 通知呼叫被拒绝
void notifyCallRejected(object sender, ICloudroomVideoMgrEvents_notifyCallRejectedEvent e)
{
  //呼叫被拒绝，弹出提示框等处理
}
```

相关API请参考:
* [notifyCallAccepted](API.md#notifyCallAccepted)
* [notifyCallRejected](API.md#notifyCallRejected)


<h3 id=hangup>4.挂断</h3>

- 调用接口：

```csharp
//挂断呼叫
void hungupCall(string p_callID, string p_usrExtDat, string p_cookie);
```

- 回调通知：

```csharp
//挂断呼叫成功
void hungupCallSuccess(object sender, ICloudroomVideoMgrEvents_hangupCallSuccessEvent e)
{
    Console.WriteLine("hungupCallSuccess:" + e.p_callID);
    //退出会议，关闭视频会话窗口等清理工作
}

//挂断呼叫失败
void hungupCallFail(object sender, ICloudroomVideoMgrEvents_hangupCallFailEvent e)
{
   Console.WriteLine("hungupCallSuccess:" + e.p_callID + ",err:" + e.p_sdkErr);
}

//通知被他人挂断
void notifyHungupCall(object sender, ICloudroomVideoMgrEvents_notifyCallHungupEvent e)
{
  Console.WriteLine("notifyHungupCall:" + e.p_callID);
    //1. 退出会议，关闭会话窗口，对方通知挂断，会话由其结束，自己只需要关闭会话窗口
    //2.清理工作
    /*
    if(myVideoUI != undefined && otherVideoUI != undefined ){
        myVideoUI.clear();
        otherVideoUI.clear();
    }
    */
}

```

相关API请参考:
- [hungupCall](API.md#hungupCall)
- [hungupCallSuccess](API.md#hangupCallSuccess)
- [hungupCallFail](API.md#hangupCallFail)
- [notifyHungupCall](API.md#notifyCallHungup)



## 被叫

<h3 id=called>1.被呼叫</h3>

- 回调通知：

```csharp
// SDK通知用户 B 被他人 （即callerID） 呼叫
void notifyCallIn(object sender, ICloudroomVideoMgrEvents_notifyCallInEvent e){
    Console.WriteLine("notifyCallIn: " + e.p_callID + ", caller:" + e.p_callerID + ", meetObj:" + e.p_meetObj);
    //关闭排队窗口
    //接受呼叫
}
```

相关API请参考:
* [notifyCallIn](API.md#notifyCallIn)


<h3 id=accept_rehect_Call>2.接受/拒绝呼叫</h3>

- 调用接口： 

```csharp
//接受呼叫
axVideoSDK.acceptCall(e.p_callID, e.p_meetObj, "","");
//拒绝呼叫
axVideoSDK.rejectCall(e.p_callID, "", "");
```

- 回调通知：

```csharp
 
void acceptCallSucceed(object sender, ICloudroomVideoMgrEvents_acceptCallSuccessEvent e)
{
  //接受呼叫后处理，如打开会话界面
  startVideoSession(e.p_callID, mCallInCallerID);
}

void acceptCallFailed(object sender, ICloudroomVideoMgrEvents_acceptCallFailEvent e)
{
  Dispatcher.BeginInvoke(new messageBoxDelegate(BeginInvokeMessageBox), new object[] { "接收视频会话失败，代码：" + CRError.Instance.getError(e.p_sdkErr) });
}

 void rejectCallSuccess(object sender, ICloudroomVideoMgrEvents_acceptCallFailEvent e)
 {
   //拒绝成功处理
 }
 void rejectCallFail(object sender, ICloudroomVideoMgrEvents_acceptCallFailEvent e)
 {
   //拒绝失败处理
 }

```

被呼叫者相关API请参考:
* [acceptCall](API.md#acceptCall)
* [acceptCallSucceed](API.md#acceptCallSuccess)
* [acceptCallFail](API.md#acceptCallFail)
* [rejectCall](API.md#rejectCall)
* [rejectCallSuccess](API.md#rejectCallSuccess)
* [rejectCallFail](API.md#rejectCallFail)


<h3 id=DND>3.免打扰</h3>


如果用户当前不希望被呼叫，可以把自己的状态设置为免打扰，注意在免打扰状态下不会被呼叫，但是可以主动发起呼叫。

- 调用接口：

```csharp
//开启免打扰
setDNDStatus(1);

//关闭免打扰
setDNDStatus(0);

```

- 回调通知：

```csharp

//设置免打扰状态操作成功响应
void setDNDStatusSucceed(object sender, ICloudroomVideoMgrEvents_setDNDStatusSuccessEvent e){
  Console.WriteLine("setDNDStatusSucceed");
}

//设置免打扰状态操作失败响应
void setDNDStatusFailed(object sender, ICloudroomVideoMgrEvents_setDNDStatusFailEvent e){
    Console.WriteLine("setDNDStatusFailed: " + e.p_sdkErr);
}

```

相关API请参考:
- [setDNDStatus](API.md#setDNDStatus)
- [setDNDStatusSuccess](API.md#setDNDStatusSuccess)
- [setDNDStatusFail](API.md#setDNDStatusFail)
