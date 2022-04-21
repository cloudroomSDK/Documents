# 点对点消息

## 功能介绍

实现点对点的透明消息发送功能， 根据发送内容可选择：发送命令数据， 发送内存数据， 发送文件三种类型。

<h2 id=send_cmd>1. 发送命令数据</h2>

此接口发送的数据不能被cancelSend，一次性发送，也不会有进度通知。

+ 调用接口：

```oc
//发送命令数据
 [[CloudroomVideoMgr shareInstance] sendCmd:@"userID" data:@"data"];
```

+ 回调通知

```oc
//发送命令数据命令结果
- (void)sendCmdRlst:(NSString *)sendId sdkErr:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie {
    // TODO Auto-generated method stub
}

//收到命令数据命令
- (void)notifyCmdData:(NSString *)sourceUserId data:(NSString *)data{
    // TODO Auto-generated method stub
}
```

相关API请参考:
+ [sendCmd](Apis.md#sendCmd)
+ [sendCmdRlst](Apis.md#sendCmdRlst)
+ [notifyCmdData](Apis.md#notifyCmdData)

相关结构定义请参考：
+ [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)

<h2 id=send_buffer>2. 发送内存数据</h2>

内存数据命令的发送可以被取消，进度可通过回调获取

+ 调用接口：

```oc
[[CloudroomVideoMgr shareInstance] sendBuffer:@"userID" data:@"data"];
```

+ 回调通知

```oc
//发送内存数据命令结果
- (void)sendBufferRlst:(NSString *)sendId sdkErr:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie {
    // TODO Auto-generated method stub
}

//收到内存数据
- (void)notifyBufferData:(NSString *)sourceUserId data:(NSString *)data {
    // TODO Auto-generated method stub
}

```

相关API请参考:
+ [sendBuffer](Apis.md#sendBuffer)
+ [sendBufferRlst](Apis.md#sendBufferRlst)
+ [notifyBufferData](Apis.md#notifyBufferData)
+ [sendProgress](Apis.md#sendProgress)

相关结构定义请参考：
+ [CRVIDEOSDK_ERR_DEF

<h2 id=send_file>3. 发送文件</h2>

+ 调用接口：

```oc
//发送文件
NSString* userID = @"user_000022";
NSString* mSelectedFile = @"/sdcard/a.jpg";
NSString* mFileTaskID = [[CloudroomVideoMgr shareInstance] sendFile:userID fileName:mSelectedFile];
```

+ 回调通知

```oc
//发送文件结果
- (void)sendFileRlst:(NSString *)sendId fileName:(NSString *)fileName sdkErr:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie {
    // TODO Auto-generated method stub
}

//收到文件
- (void)notifyFileData:(NSString *)sourceUserId tmpFile:(NSString *)tmpFile orgFileName:(NSString *)orgFileName {
    // TODO Auto-generated method stub
}

//发送进度通知
- (void)sendProgress:(NSString *)sendId sendedLen:(int)sendedLen totalLen:(int)totalLen cookie:(NSString *)cookie{
    // TODO Auto-generated method stub

}
```

相关API请参考:
+ [sendFile](Apis.md#sendFile)
+ [sendFileRlst](Apis.md#sendFileRlst)
+ [notifyFileData](Apis.md#notifyFileData)
+ [sendProgress](Apis.md#sendProgress)

相关结构定义请参考：
+ [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)

+ ](Constant.md#CRVIDEOSDK_ERR_DEF)

<h2 id=sendProgress> 4.发送进度通知</h2>


- 回调通知：

```oc
//发送进度通知
- (void)sendProgress:(NSString *)sendId sendedLen:(int)sendedLen totalLen:(int)totalLen cookie:(NSString *)cookie {

}

```

相关API请参考:

+ [sendBuffer](Apis.md#sendBuffer)
+ [sendBufferRlst](Apis.md#sendBufferRlst)
+ [notifyBufferData](Apis.md#notifyBufferData)
+ [sendProgress](Apis.md#sendProgress)

相关结构定义请参考：

+ [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)

<h2 id=send_cancel>5. 取消发送</h2>

+ 调用接口：

```oc
//取消发送
[[CloudroomVideoMgr shareInstance] cancelSend:mFileTaskID];
```

+ 回调通知

```oc
//取消发送的结果
- (void)cancelSendRlst:(NSString *)sendId sdkErr:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie{
    // TODO Auto-generated method stub
}
```

相关API请参考:
+ [cancelSend](Apis.md#cancelSend)
+ [cancelSendRlst](Apis.md#cancelSendRlst)
