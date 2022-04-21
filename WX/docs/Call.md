# 呼叫

## 功能介绍

实现用户之间的呼叫功能，流程是：A用户先创建一个房间，然后呼叫B用户，如果B用户接受呼叫，AB进入房间进行通讯。</br>
<font color="#FF0000">注意：在登录成功后才可以使用呼叫功能</font>

## 主叫

<h3 id=creat>1.创建房间</h3>

- 调用接口：

```js
//创建房间
CR.CreateMeeting()
```

- 回调通知：

```js
//创建房间成功
CR.CreateMeetingSuccess.callback = function(meetObj, cookie){
    //创建成功，获取房间信息meetObj，用于呼叫他人
}
//创建房间失败
CR.CreateMeetingFail.callback = function(sdkErr, cookie){
    //创建失败，可以弹出错误提示，不能再执行 进入房间
}
```

 相关API请参考:
* [CR.CreateMeeting](API.md#CRVideo_CreateMeeting)
* [CR.CreateMeetingSuccess](API.md#CRVideo_CreateMeetingSuccess)
* [CR.CreateMeetingFail](API.md#CRVideo_CreateMeetingFail)


<h3 id=startCall>2.发起呼叫</h3>

<font color="#FF0000">注意：当用户A呼叫用户B时，只有B成功登录了，才可以收到被呼叫通知</font>  

- 调用接口：

```js
//A发起呼叫，邀请用户B进入房间。
const callID = CR.Call(UID, meetObj, usrExtDat, cookie)
```

- 回调通知：

```js
//呼叫操作成功响应
CR.CallSuccess.callback = function(callID, cookie){

}

// 呼叫操作失败响应
CR.CallFail.callback = function(callID, sdkErr, cookie){
    console.log("呼叫他人失败"+ sdkErr);
}
```


呼叫他人相关API请参考:
* [CR.Call](API.md#CRVideo_Call)
* [CR.CallSuccess](API.md#CRVideo_CallSuccess)
* [CR.CallFail](API.md#CRVideo_CallFail)



<h3 id=accept>3.接受/拒绝呼叫</h3>


- 回调通知：

```js
// SDK通知用户 B 被他人 （即callerID） 呼叫
CR.NotifyCallIn.callback = function(callID, meetObj, callerID, usrExtDat){
    if(/* B 接受呼叫， 进入房间*/){
        CR.AcceptCall(callID, meetObj);
        CR.EnterMeeting2(meetObj.ID, UID, nickName, cookie)
    } else {
        // B 拒绝呼叫
        CR.RejectCall(callID);
    }
}
```

```js
//当 B 接受呼叫时，A会收到如下通知：
CR.NotifyCallAccepted.call = function(callID, meetObj, usrExtDat){
    //A此时可以进入房间
    CR.EnterMeeting2(meetObj.ID, UID, nickName, cookie)
}
//当 B 拒绝呼叫时，A会收到如下通知：
CR.NotifyCallRejected.call = function(callID,meetObj,usrExtDat){
    console.log("客户拒绝呼叫了");
}
```

被呼叫者相关API请参考:
* [CR.NotifyCallIn](API.md#CRVideo_NotifyCallIn)
* [CR.AcceptCall](API.md#CRVideo_AcceptCall)
* [CR.AcceptCallSuccess](API.md#CRVideo_AcceptCallSuccess)
* [CR.AcceptCallFail](API.md#CRVideo_AcceptCallFail)
* [CR.RejectCall](API.md#CRVideo_RejectCall)
* [CR.RejectCallSuccess](API.md#CRVideo_RejectCallSuccess)
* [CR.RejectCallFail](API.md#CRVideo_RejectCallFail)

呼叫者相关API请参考:
* [CR.NotifyCallAccepted](API.md#CRVideo_NotifyCallAccepted)
* [CR.NotifyCallRejected](API.md#CRVideo_NotifyCallRejected)


<h3 id=hangup>4.挂断</h3>

- 调用接口：

```js
//挂断呼叫
CR.HungupCall(callID)
```

- 回调通知：

```js
//挂断呼叫成功
CR.HungupCallSuccess.callback = function(callID, cookie){
    console.log("挂断呼叫成功")
    CR.ExitMeeting();  //退出房间
}

//挂断呼叫失败
CR.HungupCallFail.callback = function(callID, sdkErr, cookie){
   console.log("挂断呼叫失败！错误码："+ sdkErr);
}

//通知被他人挂断
CR.NotifyCallHungup.callback = function(callID, usrExtDat){
    CR.ExitMeeting();  //退出房间
}

```

相关API请参考:
   - [CR.HungupCall](API.md#CRVideo_HungupCall)   
   - [CR.HungupCallSuccess](API.md#CRVideo_HungupCallSuccess)
   - [CR.HungupCallFail](API.md#CRVideo_HungupCallFail)
   - [CR.NotifyCallHungup](API.md#CRVideo_NotifyCallHungup)
   - [CR.ExitMeeting](API.md#CRVideo_ExitMeeting)


## 被叫

<h3 id=called>1.被呼叫</h3>

- 回调通知：

```js
//通知有呼入
CR.NotifyCallIn.callback = function(callID, MeetInfoObj, callerID, usrExtDat)
{
    console.log("有呼叫到来!");
}
```

相关API请参考:
* [CR.NotifyCallIn](API.md#NotifyCallIn)


<h3 id=accept_rehect_Call>2.接受/拒绝呼叫</h3>

- 调用接口： 

```js
//接受呼叫
CR.AcceptCall(callID, meetObj, "", "");

//拒绝呼叫
CR.RejectCall(callID, "", "");
```

- 回调通知：

```js
//接受呼叫成功
CR.AcceptCallSuccess.callback = function(callID, cookie)
{
}

//接受呼叫失败
CR.AcceptCallFail.callback = function(callID,sdkEr,cookie)
{
}

//拒接呼叫成功
CR.RejectCallSuccess.callback = function(callID,cookie)
{
}

//拒接呼叫失败
CR.RejectCallFail.callback = function(callID,sdkEr,cookie)
{
}

```

相关API请参考:
* [CR.AcceptCall](API.md#CRVideo_AcceptCall)
* [CR.RejectCall](API.md#CRVideo_RejectCall)
* [CR.AcceptCallSuccess](API.md#CRVideo_AcceptCallSuccess)
* [CR.AcceptCallFail](API.md#CRVideo_AcceptCallFail)
* [CR.RejectCallSuccess](API.md#CRVideo_RejectCallSuccess)
* [CR.RejectCallFail](API.md#CRVideo_RejectCallFail)


<h3 id=DND>3.免打扰</h3>


如果用户当前不希望被呼叫，可以把自己的状态设置为免打扰，注意在免打扰状态下不会被呼叫，但是可以主动发起呼叫。

- 调用接口：

```js
CR.SetDNDStatus(1); //开启免打扰

CR.SetDNDStatus(0); //关闭免打扰
```

- 回调通知：

```js
//设置免打扰状态操作成功响应
CR.SetDNDStatusSuccess.callback = function(cookie){
     
}

//设置免打扰状态操作失败响应
CR.SetDNDStatusFail.callback = function(sdkErr, cookie){
    console.log("设置免打扰状态操作失败，错误码：" + sdkErr);
}
```

相关API请参考:
   - [CR.SetDNDStatus](API.md#CRVideo_SetDNDStatus)
   - [CR.SetDNDStatusSuccess](API.md#CRVideo_SetDNDStatusSuccess) 
   - [CR.SetDNDStatusFail](API.md#CRVideo_SetDNDStatusFail) 
