# 点对点消息

## 功能简介

实现点对点的透明消息发送功能， 根据发送内容可选择：发送命令数据， 发送内存数据， 发送文件三种类型。

<h2 id=SendCmd>1.发送命令数据</h2>

此接口发送的数据不能被cancelSend，一次性发送，也不会有进度通知。

- 调用接口：

```java
//发送小块数据
CloudroomVideoMgr.getInstance().sendCmd(userID, "data");
```

- 回调通知：

```java
//发送小块数据命令结果
@Override
void sendCmdRlst(String sendId, CRVIDEOSDK_ERR_DEF sdkErr, String cookie) {
    // TODO Auto-generated method stub
}

//收到小块数据命令
@Override
void notifyCmdData(String sourceUserId, String data) {
    // TODO Auto-generated method stub
}
```

相关API请参考:
+ [sendCmd](API.md#sendCmd)
+ [sendCmdRlst](API.md#sendCmdRlst)
+ [notifyCmdData](API.md#notifyCmdData)

<h2 id=sendBuffer>2.发送内存数据</h2>

内存数据命令的发送可以被取消，进度可通过回调获取

- 调用接口：

```java
CloudroomVideoMgr.getInstance().sendBuffer(userID, "data");
```

- 回调通知：

```java
//发送内存数据命令结果
@Override
void sendBufferRlst(String sendId, CRVIDEOSDK_ERR_DEF sdkErr,
        String cookie) {
    // TODO Auto-generated method stub
}

//收到内存数据
@Override
void notifyBufferData(String sourceUserId, String data) {
    // TODO Auto-generated method stub
}

//发送进度通知
@Override
void sendProgress(String sendId, int sendedLen, int totalLen,
           String cookie) {
    // TODO Auto-generated method stub
    string text = "总大小：" + totalLen + ", 已发送" + sendedLen;
}
```

相关API请参考:
+ [sendBuffer](API.md#sendBuffer)
+ [sendBufferRlst](API.md#sendBufferRlst)
+ [notifyBufferData](API.md#notifyBufferData)
+ [sendProgress](API.md#sendProgress)

<h2 id=sendFile> 3.发送文件</h2>

- 调用接口：

```java
//发送文件
String userID = "user_000022";
String mSelectedFile = "/sdcard/a.jpg";
String mFileTaskID = CloudroomVideoMgr.getInstance().sendFile(userID, mSelectedFile);
```

- 回调通知：

```java
//发送文件结果
@Override
void sendFileRlst(String sendId, String fileName, CRVIDEOSDK_ERR_DEF sdkErr,
         String cookie) {
    // TODO Auto-generated method stub
}

//收到文件
@Override
void notifyFileData(String sourceUserId, String tmpFile,
         String orgFileName) {
    // TODO Auto-generated method stub
}

//发送进度通知
@Override
void sendProgress(String sendId, int sendedLen, int totalLen,
           String cookie) {
    // TODO Auto-generated method stub
    string text = "总大小：" + totalLen + ", 已发送" + sendedLen;
}
```

相关API请参考:
+ [sendFile](API.md#sendFile)
+ [sendFileRlst](API.md#sendFileRlst)
+ [notifyFileData](API.md#notifyFileData)
+ [sendProgress](API.md#sendProgress)

<h2 id=cancelSend>4.取消发送</h2>

- 调用接口：

```java
//取消发送
CloudroomVideoMgr.getInstance().cancelSend(mFileTaskID);
```

- 回调通知：

```java
//取消发送的结果
@Override
void cancelSendRlst(String sendId, CRVIDEOSDK_ERR_DEF sdkErr,
        String cookie) {
    // TODO Auto-generated method stub
}
```

相关API请参考:
+ [cancelSend](API.md#cancelSend)
+ [cancelSendRlst](API.md#cancelSendRlst)
