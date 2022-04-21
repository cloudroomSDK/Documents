# 房间消息

## 功能介绍

实现房间内消息广播。此接口只能在进入房间后才能使用，房间内所有在线人员都能收到。


## 发送房间广播消息

- 调用接口：
```csharp
//发送自定义广播消息
sendMeetingCustomMsg("data", "");
```
- 回调通知：

```java
//发送数据的结果通知
@Override
void sendMeetingCustomMsgRslt(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)
{
	if(sdkErr != CRVIDEOSDK_NOERR){
        Console.WriteLine("发送失败，错误码："+sdkErr);
    }
}
```

相关API请参考：
* [sendMeetingCustomMsg](API.md#sendMeetingCustomMsg)
* [sendMeetingCustomMsgRslt](API.md#sendMeetingCustomMsgRslt)



## 处理房间广播消息


```cpp
//收到数据通知
@Override
void notifyMeetingCustomMsg(String fromUserID, String data)
{
	//fromUserID，消息发送者
	//data, 消息数据
}
```

相关API请参考：
* [notifyMeetingCustomMsg](API.md#notifyMeetingCustomMsg)

