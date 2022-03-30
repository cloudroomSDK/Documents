---
sidebarDepth: 1
---

# 呼叫

<h2 id=introduction>功能简介</h2>

实现了用户之间的呼叫功能，流程是：A用户先创建一个房间，然后呼叫B用户，如果B用户接受呼叫，AB进入房间进行通讯。

<font color="#FF0000">注意：在登录成功后才可以使用呼叫功能</font>

-----

<h2 id=flow>呼叫流程</h2>

呼叫功能使用流程如下：

1. [创建房间](#creat)
1. [发起呼叫](#startCall)
1. [接受/拒绝呼叫](#accept)
1. [挂断](#hangup)
1. [免打扰](#DND)


<h3 id=creat>1.创建房间</h3>


输入房间标题，创建一个没有密码的房间

- 调用接口：

```js
//创建房间
CRVideo_CreateMeeting()
```

- 回调通知：

```js
//创建房间成功
CRVideo_CreateMeetingSuccess.callback = function(meetObj, cookie){
    //创建成功，获取房间信息meetObj，用于呼叫他人
}
//创建房间失败
CRVideo_CreateMeetingFail.callback = function(sdkErr, cookie){
    //创建失败，可以弹出错误提示，不能再执行 进入房间
}
```

 相关API请参考:
* [CRVideo_CreateMeeting](API.md#CRVideo_CreateMeeting)
* [CRVideo_CreateMeetingSuccess](API.md#CRVideo_CreateMeetingSuccess)
* [CRVideo_CreateMeetingFail](API.md#CRVideo_CreateMeetingFail)


<h3 id=startCall>2.发起呼叫</h3>

<font color="#FF0000">注意：当用户A呼叫用户B时，只有B成功登录了，才可以收到被呼叫通知</font>  
      

- 调用接口：

```js
//A发起呼叫，邀请用户B进入房间。
var callID = CRVideo_Call(UID, meetObj, usrExtDat, cookie)
```

- 回调通知：

```js
//呼叫操作成功响应
CRVideo_CallSuccess.callback = function(callID, cookie){

}

// 呼叫操作失败响应
CRVideo_CallFail.callback = function(callID, sdkErr, cookie){
    console.log("呼叫他人失败"+ sdkErr);
}
```


呼叫他人相关API请参考:
* [CRVideo_Call](API.md#CRVideo_Call)
* [CRVideo_CallSuccess](API.md#CRVideo_CallSuccess)
* [CRVideo_CallFail](API.md#CRVideo_CallFail)



<h3 id=accept>3.接受/拒绝呼叫</h3>


- 回调通知：

```js
// SDK通知用户 B 被他人 （即callerID） 呼叫
CRVideo_NotifyCallIn.callback = function(callID, meetObj, callerID, usrExtDat){
    if(/* B 接受呼叫， 进入房间*/){
        CRVideo_AcceptCall(callID, meetObj);
        CRVideo_EnterMeeting3(meetObj.ID, cookie);
    }else{// B 拒绝呼叫

        CRVideo_RejectCall(callID);
    }
}
```

```js
//当 B 接受呼叫时，A会收到如下通知：
CRVideo_NotifyCallAccepted.call = function(callID, meetObj, usrExtDat){
    //A此时可以进入房间
    CRVideo_EnterMeeting3(meetObj.ID, cookie);
}
//当 B 拒绝呼叫时，A会收到如下通知：
CRVideo_NotifyCallRejected.call = function(callID,meetObj,usrExtDat){
    console.log("客户拒绝呼叫了");
}
```

被呼叫者相关API请参考:
* [CRVideo_NotifyCallIn](API.md#CRVideo_NotifyCallIn)
* [CRVideo_AcceptCall](API.md#CRVideo_AcceptCall)
* [CRVideo_AcceptCallSuccess](API.md#CRVideo_AcceptCallSuccess)
* [CRVideo_AcceptCallFail](API.md#CRVideo_AcceptCallFail)
* [CRVideo_RejectCall](API.md#CRVideo_RejectCall)
* [CRVideo_RejectCallSuccess](API.md#CRVideo_RejectCallSuccess)
* [CRVideo_RejectCallFail](API.md#CRVideo_RejectCallFail)

呼叫者相关API请参考:
* [CRVideo_NotifyCallAccepted](API.md#CRVideo_NotifyCallAccepted)
* [CRVideo_NotifyCallRejected](API.md#CRVideo_NotifyCallRejected)


<h3 id=hangup>4.挂断</h3>


- 调用接口：

```js
//挂断呼叫
CRVideo_HungupCall(callID)
```

- 回调通知：

```js
//挂断呼叫成功
CRVideo_HangupCallSuccess.callback = function(callID, cookie){
    console.log("挂断呼叫成功")
    CRVideo_ExitMeeting();  //退出房间
}

//挂断呼叫失败
CRVideo_HangupCallFail.callback = function(callID, sdkErr, cookie){
   console.log("挂断呼叫失败！错误码："+ sdkErr);
}

//通知被他人挂断
CRVideo_NotifyCallHungup.callback = function(callID, usrExtDat){
    CRVideo_ExitMeeting();  //退出房间
}

```

相关API请参考:
   - [CRVideo_HungupCall](API.md#CRVideo_HungupCall)   
   - [CRVideo_ExitMeeting](API.md#CRVideo_ExitMeeting)
   - [CRVideo_HangupCallSuccess](API.md#CRVideo_HangupCallSuccess)
   - [CRVideo_HangupCallFail](API.md#CRVideo_HangupCallFail)
   - [CRVideo_NotifyCallHungup](API.md#CRVideo_NotifyCallHungup)


<h3 id=DND>5.免打扰</h3>


如果用户当前不希望被呼叫，可以把自己的状态设置为免打扰，注意在免打扰状态下不会被呼叫，但是可以主动发起呼叫。

- 调用接口：

```js
//开启免打扰
CRVideo_SetDNDStatus(1);

//关闭免打扰
CRVideo_SetDNDStatus(0);

```

- 回调通知：

```js
//设置免打扰状态操作成功响应
CRVideo_SetDNDStatusSuccess.callback = function(cookie){
     
}

//设置免打扰状态操作失败响应
CRVideo_SetDNDStatusFail.callback = function(sdkErr, cookie){
    console.log("设置免打扰状态操作失败，错误码：" + sdkErr);

}
```

相关API请参考:
   - [CRVideo_SetDNDStatus](API.md#CRVideo_SetDNDStatus)
   - [CRVideo_SetDNDStatusSuccess](API.md#CRVideo_SetDNDStatusSuccess) 
   - [CRVideo_SetDNDStatusFail](API.md#CRVideo_SetDNDStatusFail) 
