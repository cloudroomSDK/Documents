# 呼叫

## 功能介绍

实现用户之间的呼叫功能，流程是：A用户先创建一个房间，然后呼叫B用户，如果B用户接受呼叫，AB进入房间进行通讯。

:::danger

注意：在登录成功后才可以使用呼叫功能。

:::


## 主叫

<h3 id=creatMeeting>1. 创建房间</h3>


- 调用接口：

```oc
//创建房间
[[CloudroomVideoMgr shareInstance] createMeeting];
```

- 回调通知：

```oc
//创建房间成功
- (void)createMeetingSuccess:(MeetInfo *)meetInfo cookie:(NSString *)cookie{
	//...
}

//创建房间失败
- (void)createMeetingFail:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie{
    //创建失败，可以弹出错误提示，不能再执行 进入房间
}
```

 相关API请参考:
* [createMeeting](Apis.md#createMeeting)
* [createMeetingSuccess](Apis.md#createMeetingSuccess)
* [createMeetingFail](Apis.md#createMeetingFail)


<h3 id=call_other>2. 发起呼叫</h3>


:::danger

注意：
1. 当用户A呼叫用户B时，只有B成功登录了，才可以收到被呼叫通知，否则被呼叫者是无法收到被呼叫的消息的。

:::


- 调用接口：

```oc
//开始呼叫，meetInfo为之前创建的房间对象
NSString* userID = @"user_000007";
NSString* callID = [[CloudroomVideoMgr shareInstance] call:userID meetInfo:meetingInfo param:@""];
```

+ 回调通知：

```oc
//呼叫成功发出，等待对方响应
- (void)callSuccess:(NSString *)callID cookie:(NSString *)cookie{
	//...
}

//呼叫发出失败
- (void)callFail:(NSString *)callID errCode:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie {
	//...
}
```

相关API请参考： 
+ [call](Apis.md#call)
+ [callSuccess](Apis.md#callSuccess)
+ [callFail](Apis.md#callFail)

<h3 id=be_acceptOrDenyCall>3. 呼叫被接受/拒绝</h3>

- 回调通知：

```oc
//通知呼叫被接受
- (void)notifyCallAccepted:(NSString *)callID meetInfo:(MeetInfo *)meetInfo usrExtDat:(NSString *)usrExtDat{
   //...
}
	
//呼叫被对方拒绝
- (void)notifyCallRejected:(NSString *)callID reason:(CRVIDEOSDK_ERR_DEF)reason usrExtDat:(NSString *)usrExtDat {
	//...
}
```

相关API请参考：
+ [notifyCallRejected](Apis.md#notifyCallRejected)
+ [notifyCallAccepted](Apis.md#notifyCallAccepted) 

<h3 id=hangup>4. 挂断</h3>

- 调用接口：

```oc
//挂断呼叫
 [[CloudroomVideoMgr shareInstance] hungupCall:callID usrExtDat:@""];
```

- 回调通知：

```oc
//挂断呼叫成功
- (void)hangupCallSuccess:(NSString *)callID cookie:(NSString *)cookie{
}


//挂断呼叫失败
- (void)hangupCallFail:(NSString *)callID errCode:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie{
}

//通知被他人挂断
- (void)notifyCallhangup:(NSString *)callID, usrExtDat:(NSString *)usrExtDat{
}
```

相关API请参考:
- [hungupCall](Apis.md#hungupCall)
- [hungupCallSuccess](Apis.md#hangupCallSuccess)
- [hungupCallFail](Apis.md#hangupCallFail)
- [notifyCallhangup](Apis.md#notifyCallhangup)



## 被叫

<h3 id=be_called>1. 被呼叫</h3>

- 回调通知：

```oc
//有呼叫进入
- (void)notifyCallIn:(NSString *)callID meetInfo:(MeetInfo *)meetInfo callerID:(NSString *)callerID usrExtDat:(NSString *)usrExtDat
{
    if(/*接受呼叫， 进入房间*/){
        //打开房间界面……
    }else{
		//拒绝对方的呼叫
    }
}
```

相关API请参考：
+ [notifyCallIn](Apis.md#notifyCallIn)

<h3 id=acceptOrDenyCall>2. 接受/拒绝</h3>

- 调用接口： 

```oc
//接受呼叫 (notifyCallIn回调参数meetInfo)
[[CloudroomVideoMgr shareInstance] acceptCall:@"call" meetInfo:meetInfo];

//拒绝呼叫
[[CloudroomVideoMgr shareInstance] rejectCall:@"callID"];
```

- 回调通知：

```oc
//接受呼叫成功
- (void)acceptCallSuccess:(NSString *)callID cookie:(NSString *)cookie{
	//...
}

//接受呼叫失败
- (void)acceptCallFail:(NSString *)callID errCode:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie{
	//...
}

//拒绝呼叫成功
- (void)rejectCallSuccess:(NSString *)callID cookie:(NSString *)cookie{
	//...
}

//拒绝呼叫失败
- (void)rejectCallFail:(NSString *)callID errCode:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie{
	//...
}
```

相关API请参考： 
+ [acceptCall](Apis.md#acceptCall)
+ [rejectCall](Apis.md#rejectCall)
+ [hangupCall](Apis.md#hangupCall)
+ [acceptCallSuccess](Apis.md#acceptCallSuccess)
+ [acceptCallFail](Apis.md#acceptCallFail)
+ [rejectCallSuccess](Apis.md#rejectCallSuccess)
+ [rejectCallFail](Apis.md#rejectCallFail)
+ [hangupCallSuccess](Apis.md#hangupCallSuccess)
+ [hangupCallFail](Apis.md#hangupCallFail)

<h3 id=DND>3. 免打扰</h3>


如果用户当前不希望被呼叫，可以把自己的状态设置为免打扰，注意在免打扰状态下不会被呼叫，但是可以主动发起呼叫。

- 调用接口：

```oc
//开启免打扰
[[CloudroomVideoMgr shareInstance] setDNDStatus:1];

//关闭免打扰
[[CloudroomVideoMgr shareInstance] setDNDStatus:0];

```

- 回调通知：

```oc

//设置免打扰状态操作成功响应
- (void)setDNDStatusSuccess:(NSString *)cookie{
}


//设置免打扰状态操作失败响应
- (void)setDNDStatusFail:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie{
}

```

相关API请参考:
- [setDNDStatus](Apis.md#setDNDStatus)
- [setDNDStatusSuccess](Apis.md#setDNDStatusSuccess)
- [setDNDStatusFail](Apis.md#setDNDStatusFail)
