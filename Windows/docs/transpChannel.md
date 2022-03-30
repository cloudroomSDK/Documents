# 点对点消息

## 功能简介

实现点对点的透明消息发送功能， 根据发送内容可选择：发送命令数据， 发送内存数据， 发送文件三种类型。



<h2 id=SendCmd>1.发送命令数据</h2>

此接口发送的数据不能被cancelSend，一次性发送，也不会有进度通知。

- 调用接口：

```csharp
//发送命令数据,taskId为分配的任务ID
sendCmd(string UID, string data);
```

- 回调通知：

```csharp
//发送命令数据的结果通知
void sendCmdRlst(object sender, ICloudroomVideoMgrEvents_sendCmdRlstEvent e)
{
	if(sdkErr != NOERR){
        Console.WriteLine("发送失败，错误码："+sdkErr);
    }
}
```

相关API请参考：
* [sendCmd](API.md#sendCmd)
* [sendCmdRlst](API.md#sendCmdRlst)

相关结构定义请参考：
* [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)

<h2 id=sendBuffer>2.发送内存数据</h2>

分块发送，进度通知事件[SendProgress](API.md#sendProgress), 调用[cancelSend](API.md#cancelSend)取消发送。

- 调用接口：

```csharp
//发送内存数据,taskId为分配的任务ID
sendBuffer(string UID, string data);
```

- 回调通知：

```csharp
//发送内存数据结果通知
axMgr.sendBufferRlst += sendBufferRlst;
void sendBufferRlst(object sender, ICloudroomVideoMgrEvents_sendBufferRlstEvent e)
{
	if(sdkErr != NOERR){
        Console.WriteLine("发送失败，错误码："+sdkErr);
    }
}

```

相关API请参考：
* [sendBuffer](API.md#sendBuffer)
* [sendBufferRlst](API.md#sendBufferRlst)


<h2 id=sendFile> 3.发送文件</h2>


分块发送，进度通知事件[sendProgress](API.md#sendProgress), 调用[cancelSend](API.md#cancelSend)取消发送。
- 调用接口：

```csharp
//发送文件,taskId为分配的任务ID
sendFile(string UID, string fileName);
```

- 回调通知：

```csharp
//发送文件的结果通知
void sendFileRlst(object sender, ICloudroomVideoMgrEvents_sendBufferRlstEvent e)
{
	if(sdkErr != NOERR){
        Console.WriteLine("发送失败，错误码："+sdkErr);
    }
}

```

相关API请参考：
* [sendFile](API.md#sendFile)
* [sendFileRlst](API.md#sendFileRlst)



<h2 id=sendProgress> 4.发送进度通知</h2>


- 回调通知：

```csharp
void sendProgress(object sender, ICloudroomVideoMgrEvents_sendProgressEvent e)
{
    Console.WriteLine("sendBufferProgress:" + e.p_totalLen + "->" + e.p_sendedLen);
    if (e.p_sendedLen == e.p_totalLen)
    {
      //发送完毕
    }
}

```

相关API请参考:
* [sendProgress](API.md#sendProgress)


<h2 id=cancelSend>5.取消发送</h2>

- 调用接口：

```csharp
//取消发送数据,cancelTaskID为要取消的任务ID
cancelSend(string cancelTaskID);
```
- 回调通知：

```csharp
void cancelSendRlst(object sender, ICloudroomVideoMgrEvents_cancelSendRlstEvent e)
{
  //取消成功或者失败处理
}
```
相关API请参考:
* [cancelSend](API.md#cancelSend)
* [cancelSendRlst](API.md#cancelSendRlst)
