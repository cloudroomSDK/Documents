# 点对点消息

## 功能介绍

实现点对点的透明消息发送功能， 根据发送内容可选择：发送命令数据， 发送内存数据， 发送文件三种类型。



<h2 id=SendCmd>1.发送命令数据</h2>

此接口发送的数据不能被cancelSend，一次性发送，也不会有进度通知。

- 调用接口：

```
CRString sendId = g_sdkMain->sendCmd(targetUserId, "{\"CmdType":\"IM\", \"IMMsg\":\"xxxxxxxxxxx\"}", "");
```

- 回调通知：

```
//发送命令数据的结果通知
virtual void sendCmdRlst(const char* sendId, CRVSDK_ERR_DEF sdkErr, const char* cookie)
{
	if(sdkErr != NOERR)
	{
		//发送失败，错误码：sdkErr;
	}
	else
	{
		//成功
	}
}

//收到远端命令数据
virtual void notifyCmdData(const char* sourceUserId, const CRBase::CRString& data)
{
	//sourceUserId发送者
	//data数据内容
}

```

相关API请参考：
* [sendCmd](Apis.md#sendCmd)
* [sendCmdRlst](Apis.md#sendCmdRlst)
* [notifyCmdData](Apis.md#notifyCmdData)


<h2 id=sendBuffer>2.发送内存数据</h2>

分块发送，进度通知事件[notifySendProgress](Apis.md#notifySendProgress), 调用[cancelSend](Apis.md#cancelSend)取消发送。

- 调用接口：

```
CRByteArray dat = xxx;
CRString sendId = g_sdkMain->sendBuffer(targetUserId, dat);
```

- 回调通知：

```

//发送结果
virtual void sendBufferRlst(const char* sendId, CRVSDK_ERR_DEF sdkErr, const char* cookie)
{
	if(sdkErr != CRVSDKERR_NOERR)
	{
		//发送失败，错误码：sdkErr;
	}
	else
	{
		//成功
	}
}

//收到远端数据
virtual void notifyBufferData(const char* sourceUserId, const CRBase::CRByteArray& data)
{
	//sourceUserId发送者
	//data数据内容
}

```

相关API请参考：
* [sendBuffer](Apis.md#sendBuffer)
* [sendBufferRlst](Apis.md#sendBufferRlst)
* [notifyBufferData](Apis.md#notifyBufferData)


<h2 id=sendFile> 3.发送文件</h2>

分块发送，进度通知事件[notifySendProgress](Apis.md#notifySendProgress), 调用[cancelSend](Apis.md#cancelSend)取消发送。

- 调用接口：

```
CRString sendId = g_sdkMain->sendFile(targetUserId, locPathFileName);
```

- 回调通知：

```
//发送文件的结果通知
virtual void sendFileRlst(const char* sendId, const char* fileName, CRVSDK_ERR_DEF sdkErr, const char* cookie)
{
	if(sdkErr != CRVSDKERR_NOERR)
	{
		//发送失败，错误码：sdkErr;
	}
	else
	{
		//成功
	}
}

//收到远端的文件通知
virtual void notifyFileData(const char* sourceUserId, const char* tmpFile, const char* orgFileName)
{
	//sourceUserId发送者
	//tmpFile本地临时文件
	//orgFileName原文件名（不带路径）
}

```

相关API请参考：
* [sendFile](Apis.md#sendFile)
* [sendFileRlst](Apis.md#sendFileRlst)
* [notifySendProgress](Apis.md#notifySendProgress)
* [notifyFileData](Apis.md#notifyFileData)


<h2 id=cancelSend>4.取消发送</h2>

- 调用接口：

```
//取消发送数据,cancelTaskID为要取消的任务ID
cancelSend(string cancelTaskID);
```

- 回调通知：

```
virtual void cancelSendRlst(const char* sendId, CRVSDK_ERR_DEF sdkErr, const char* cookie)
{
	//取消成功或者失败处理
}
```

相关API请参考:
* [cancelSend](Apis.md#cancelSend)
* [cancelSendRlst](Apis.md#cancelSendRlst)
