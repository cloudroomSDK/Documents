# 呼叫

## 功能介绍

实现用户之间的呼叫功能，流程是：A用户先创建一个房间，然后呼叫B用户，如果B用户接受呼叫，AB进入房间进行通讯。

:::danger

注意：在登录成功后才可以使用呼叫功能。

:::

## 主叫

<h3 id=call_other>1. 发起呼叫</h3>

呼叫发起方， 发送呼叫请求。

- 调用接口：

```java
// 设置管理回调（账号登陆、房间管理、呼叫管理）
CloudroomVideoMgr.getInstance().registerCallback(mMgrCallback);

//开始呼叫，meetInfo为之前创建的房间对象
string userID = "user_000007";
string callID = CloudroomVideoMgr.getInstance().call(userID, meetInfo, "", "");
```

+ 回调通知：

```java
//呼叫成功发出，等待对方响应
@Override
void callSuccess(String callID, int meetID, String meetPswd, String cookie) {
	//...
}

//呼叫发出失败
@Override
void callFail(String callID, final CRVIDEOSDK_ERR_DEF sdkErr, String cookie) {
	//...
}
```

相关API请参考： 
* [call](API.md#callOut)
* [callSuccess](API.md#callSuccess)
* [callFail](API.md#callFail)

<h3 id=be_acceptOrDenyCall>2. 呼叫被接受/拒绝</h3>

呼叫方的呼叫请求返回响应处理

```java
//呼叫被对方接受
@Override
void notifyCallAccepted(String callID, MeetInfo meetInfo, String useExtDat) {
   //...
}
	
//呼叫被对方拒绝
@Override
void notifyCallRejected(String callID, final CRVIDEOSDK_ERR_DEF reason, final String useExtDat) {
	//...
}
```

相关API请参考：
* [notifyCallRejected](API.md#notifyCallRejected)
* [notifyCallAccepted](API.md#notifyCallAccepted) 


## 被叫

<h3 id=be_called>1. 被呼叫通知</h3>

被呼叫方的相关交互函数和回调接口

+ 接口调用
```java
// 设置管理回调（账号登陆、房间管理、呼叫管理）
CloudroomVideoMgr.getInstance().registerCallback(mMgrCallback);
```

+ 回调通知
```java
//有呼叫进入
@Override
void notifyCallIn(String callID, MeetInfo meetInfo, String callerID, String param) {
    if(/*接受呼叫， 进入房间*/){
        //打开房间界面……
    }else{
		//拒绝对方的呼叫
    }
}
```

相关API请参考：
* [notifyCallIn](API.md#notifyCallIn)

<h3 id=acceptOrDenyCall>2.接受/拒绝/挂断呼叫</h3>

用户在接受呼叫后，通过sdk的呼叫接口进行交互操作

调用接口： 

```java
//接受呼叫
CloudroomVideoMgr.getInstance().acceptCall(callID, "");

//拒绝呼叫
CloudroomVideoMgr.getInstance().rejectCall(callID, "", "");

//挂断呼叫
CloudroomVideoMgr.getInstance().hangupCall(callID, "", "");

```

回调通知：

```java
//接受呼叫成功
void acceptCallSuccess(String callID, String cookie){
	//...
}

//接受呼叫失败
void acceptCallFail(String callID, CRVIDEOSDK_ERR_DEF sdkErr,
                String cookie){
	//...
}

//拒绝呼叫成功
void rejectCallSuccess(String callID, String cookie){
	//...
}

//拒绝呼叫失败
void rejectCallFail(String callID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie){
	//...
}

//挂断呼叫成功
@Override
void hangupCallSuccess(String callID, String cookie){
	//...
}

//挂断呼叫失败
@Override
void hangupCallFail(String callID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie){
	//...
}
```

相关API请参考： 
* [acceptCall](API.md#acceptCall)
* [rejectCall](API.md#rejectCall)
* [hangupCall](API.md#hangupCall)
* [acceptCallSuccess](API.md#acceptCallSuccess)
* [acceptCallFail](API.md#acceptCallFail)
* [rejectCallSuccess](API.md#rejectCallSuccess)
* [rejectCallFail](API.md#rejectCallFail)
* [hangupCallSuccess](API.md#hangupCallSuccess)
* [hangupCallFail](API.md#hangupCallFail)

