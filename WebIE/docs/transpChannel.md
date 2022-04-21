# 点对点消息

## 功能介绍

实现点对点的透明消息发送功能， 根据发送内容可选择：发送命令数据， 发送内存数据， 发送文件三种类型。



<h2 id=SendCmd>1.发送命令数据</h2>

此接口发送的数据不能被cancelSend，一次性发送，也不会有进度通知。

- 调用接口：

```js
//发送小块数据,taskId为分配的任务ID
var taskId = CRVideo_SendCmd(UID, data);
```

- 回调通知：

```js
//发送数据的结果通知
CRVideo_SendCmdRlst.callback = function(taskID, sdkErr, cookie)
{
	if(sdkErr != CRVideo_NOERR){
        console.log("发送失败，错误码："+sdkErr);
    }
}	
```

相关API请参考:
- [CRVideo_SendCmd](API.md#CRVideo_SendCmd)
- [CRVideo_SendCmdRlst](API.md#CRVideo_SendCmdRlst)

相关结构定义请参考：
- [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)

<h2 id=sendBuffer>2.发送内存数据</h2>

分块发送，进度通知事件[CRVideo_SendProgress](API.md#CRVideo_SendProgress), 调用[CRVideo_CancelSend](API.md#CRVideo_CancelSend)取消发送。

- 调用接口：

```js
//发送大块数据,taskId为分配的任务ID
var taskId = CRVideo_SendBuffer(UID, data);

```

- 回调通知：

```js
//发送数据的结果通知
CRVideo_SendBufferRlst.callback = function(taskID, sdkErr, cookie)
{
	if(sdkErr != CRVideo_NOERR){
        console.log("发送失败，错误码："+sdkErr);
    }
}

```

相关API请参考:
- [CRVideo_SendBuffer](API.md#CRVideo_SendCmd)
- [CRVideo_SendBufferRlst](API.md#CRVideo_SendBufferRlst)


<h2 id=sendFile> 3.发送文件</h2>

分块发送，进度通知事件[CRVideo_SendProgress](API.md#CRVideo_SendProgress), 调用[CRVideo_CancelSend](API.md#CRVideo_CancelSend)取消发送。

- 调用接口：

```js
//发送文件,taskId为分配的任务ID
var taskId = CRVideo_SendFile(UID, fileName);

```

- 回调通知：

```js
//发送文件的结果通知
CRVideo_SendFileRlst.callback = function(taskID, sdkErr, cookie)
{
	if(sdkErr != CRVideo_NOERR){
        console.log("发送文件失败，错误码："+sdkErr);
    }
}

```

相关API请参考:
- [CRVideo_SendFile](API.md#CRVideo_SendFile)
- [CRVideo_SendFileRlst](API.md#CRVideo_SendFileRlst)


<h2 id=sendProgress> 4.发送进度通知</h2>

- 回调通知：

```js
//发送的进度通知事件
CRVideo_SendProgress.callback = function(taskID,sendedLen, totalLen,cookie)
{

}

```

相关API请参考:
- [CRVideo_SendProgress](API.md#CRVideo_SendProgress)


<h2 id=cancelSend>5.取消发送</h2>

- 调用接口：

```js
//取消发送数据,cancelTaskID为要取消的任务ID
var taskId = CRVideo_CancelSend(cancelTaskID);

```

- 回调通知：

```js
//取消发送的结果
CRVideo_CancelSendRlst.callback = function(taskID, sdkErr, cookie)
{
    if(sdkErr != CRVideo_NOERR){
        console.log("取消发送失败，错误码："+sdkErr);
    }
}
```

相关API请参考:
- [CRVideo_CancelSend](API.md#CRVideo_CancelSend)
- [CRVideo_CancelSendRlst](API.md#CRVideo_CancelSendRlst)

