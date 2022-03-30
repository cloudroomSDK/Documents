# 房间消息

## 功能简介

实现房间内消息广播。此接口只能在进入房间后才能使用，房间内所有在线人员都能收到。


## 发送房间广播消息

- 调用接口：
```js
//发送自定义广播消息
CR.SendMeetingCustomMsg("data");
```
- 回调通知：

```js
//发送数据的结果通知
CR.SendMeetingCustomMsgRslt.callback = function(sdkErr){
	if(sdkErr != 0){
        console.log(`发送失败，错误码：${sdkErr}`);
    }
}
```

相关API请参考：
* [CR.SendMeetingCustomMsg](API.md#CRVideo_SendMeetingCustomMsg)
* [CR.SendMeetingCustomMsgRslt](API.md#CRVideo_SendMeetingCustomMsgRslt)

相关结构定义请参考：
* [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)


## 处理房间广播消息

```js
//通知收到房间广播消息
CR.NotifyMeetingCustomMsg.callback = function(UID, jsonDat){
    
}
```

相关API请参考：
* [CR.NotifyMeetingCustomMsg](API.md#CRVideo_NotifyMeetingCustomMsg)

