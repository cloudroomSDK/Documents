# 点对点消息

## 功能介绍

实现点对点的透明消息发送功能， 根据发送内容可选择：发送命令数据， 发送内存数据二种类型。



<h2 id=SendCmd>1.发送命令数据</h2>

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

<h2 id=sendBuffer>2.发送内存数据</h2>

分块发送，进度通知事件[CR.SendProgress](API.md#CRVideo_SendProgress)。

- 调用接口：

```js
//发送内存数据,taskId为分配的任务ID
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

<h2 id=tc_progress> 3.发送进度通知</h2>

- 回调通知：

```js
//发送的进度通知事件
CR.SendProgress.callback = function(taskID, sendedLen, totalLen, cookie){

}

```

相关API请参考:
- [CR.SendProgress](API.md#CRVideo_SendProgress)


