# 点对点消息

<h2 id=introduction>功能简介</h2>

根据发送数据的大小，提供了发送小块数据、发送大块数据、发送文件三种方式。

-----------

<h2 id=flow>使用</h2>

1. [发送小块数据](#tc_cmd)
1. [发送大块数据](#tc_buffer)
1. [发送进度通知](#tc_progress)

<!-- 
1. [发送文件](#tc_file)
1. [取消发送](#tc_cancel)
 -->

<h3 id=tc_cmd> 1.发送小块数据</h3>

<font color="#FF0000">注意：此接口使用后，不能使用CR.CancelSend。一次性发送，也不会有进度通知</font>

- 调用接口：

```js
//发送小块数据,taskId为分配的任务ID
var taskId = CR.SendCmd(UID, data);
```
- 回调通知：

```js
//发送数据的结果通知
CR.SendCmdRslt.callback = function(taskID, sdkErr, cookie){
	if(sdkErr != 0){
        console.log("发送失败，错误码："+ sdkErr);
    }
}	
```

相关API请参考:
- [CR.SendCmd](API.md#CRVideo_SendCmd)
- [CR.SendCmdRlst](API.md#CRVideo_SendCmdRlst)

相关结构定义请参考：
- [错误码](Constant.html#CRVideo_ERR_DEF)


<h3 id=tc_buffer> 2.发送大块数据</h3>

分块发送，进度通知事件[CR.SendProgress](API.md#CRVideo_SendProgress)。

- 调用接口：

```js
//发送大块数据,taskId为分配的任务ID
var taskId = CR.SendBuffer(UID, data);

```

- 回调通知：

```js
//发送数据的结果通知
CR.SendBufferRslt.callback = function(taskID, sdkErr, cookie){
	if(sdkErr != 0){
        console.log("发送失败，错误码："+ sdkErr);
    }
}

```

相关API请参考:
- [CR.SendBuffer](API.md#CRVideo_SendBuffer)
- [CR.SendBufferRslt](API.md#CRVideo_SendBufferRslt)

<h3 id=tc_progress> 3.发送进度通知</h3>

- 回调通知：

```js
//发送的进度通知事件
CR.SendProgress.callback = function(taskID, sendedLen, totalLen, cookie){

}

```

相关API请参考:
- [CR.SendProgress](API.md#CRVideo_SendProgress)

<!-- 

<h3 id=tc_cancel> 5.取消发送</h3>

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


 -->





