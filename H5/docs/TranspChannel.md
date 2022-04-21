# 点对点消息

## 功能介绍

实现点对点的透明消息发送功能， 根据发送内容可选择：发送命令数据， 发送内存数据二种类型。



<h2 id=SendCmd>1.发送命令数据</h2>

此接口发送的数据不能被CRVideo_CancelSend，一次性发送，也不会有进度通知。

- 调用接口：

```js
//发送小块数据,taskId为分配的任务ID
var taskId = CRVideo_SendCmd(UID, data);
```

- 回调通知：

```js
//发送数据的结果通知
CRVideo_SendCmdRslt.callback = function(taskID, sdkErr, cookie){
	if(sdkErr != 0){
        console.log("发送失败，错误码："+ sdkErr);
    }
}	
```

相关API请参考:
- [CRVideo_SendCmd](API.md#CRVideo_SendCmd)
- [CRVideo_SendCmdRslt](API.md#CRVideo_SendCmdRslt)

相关结构定义请参考：
- [错误码](Constant.html#CRVideo_ERR_DEF)

<h2 id=sendBuffer>2.发送内存数据</h2>

分块发送，进度通知事件[CRVideo_SendProgress](API.md#CRVideo_SendProgress), 调用[CRVideo_CancelSend](API.md#CRVideo_CancelSend)取消发送。

- 调用接口：

```js
//发送内存数据,taskId为分配的任务ID
var taskId = CRVideo_SendBuffer(UID, data);
```

- 回调通知：

```js
//发送数据的结果通知
CRVideo_SendBufferRslt.callback = function(taskID, sdkErr, cookie){
	if(sdkErr != 0){
        console.log("发送失败，错误码："+ sdkErr);
    }
}

```

相关API请参考:
- [CRVideo_SendBuffer](API.md#CRVideo_SendBuffer)
- [CRVideo_SendBufferRslt](API.md#CRVideo_SendBufferRslt)

<h2 id=tc_progress> 3.发送进度通知</h2>

- 回调通知：

```js
//发送的进度通知事件
CRVideo_SendProgress.callback = function(taskID, sendedLen, totalLen, cookie){

}

```

相关API请参考:
- [CRVideo_SendProgress](API.md#CRVideo_SendProgress)


<h2 id=tc_cancel> 4.取消发送</h2>

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
        console.log("取消发送失败，错误码："+ sdkErr);
    }
}

```

相关API请参考:
- [CRVideo_CancelSend](API.md#CRVideo_CancelSend)
- [CRVideo_CancelSendRlst](API.md#CRVideo_CancelSendRlst)

