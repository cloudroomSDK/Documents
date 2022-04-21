# 房间消息

## 功能介绍

实现房间内消息广播。此接口只能在进入房间后才能使用，房间内所有在线人员都能收到。


## 发送房间广播消息

- 调用接口：
```js
//发送自定义广播消息
CRVideo_sendMeetingCustomMsg("data", "");
```
- 回调通知：

```js
//发送数据的结果通知
CRVideo_SendMeetingCustomMsgRslt.callback = function(err, cookie)
{
	if(sdkErr != NOERR){
        Console.WriteLine("发送失败，错误码："+sdkErr);
    }
}
```

相关API请参考：
* [CRVideo_sendMeetingCustomMsg](API.md#CRVideo_sendMeetingCustomMsg)
* [CRVideo_SendMeetingCustomMsgRslt](API.md#CRVideo_SendMeetingCustomMsgRslt)

相关结构定义请参考：
* [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)


## 处理房间广播消息


```cpp
//通知收到房间广播消息
CRVideo_NotifyMeetingCustomMsg.callback = function( uid, jsonDat)
{
}
```

相关API请参考：
* [CRVideo_NotifyMeetingCustomMsg](API.md#CRVideo_NotifyMeetingCustomMsg)

