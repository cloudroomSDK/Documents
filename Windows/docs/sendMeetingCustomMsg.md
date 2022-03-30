# 房间消息

## 功能简介

实现房间内消息广播。此接口只能在进入房间后才能使用，房间内所有在线人员都能收到。


## 发送房间广播消息

- 调用接口：
```csharp
//发送自定义广播消息
sendMeetingCustomMsg("data", "");
```
- 回调通知：

```csharp
//发送数据的结果通知
void sendMeetingCustomMsgRslt(object sender, ICloudroomVideoMgrEvents_sendCmdRlstEvent e)
{
	if(sdkErr != NOERR){
        Console.WriteLine("发送失败，错误码："+sdkErr);
    }
}
```

相关API请参考：
* [sendMeetingCustomMsg](API.md#sendMeetingCustomMsg)
* [sendMeetingCustomMsgRslt](API.md#sendMeetingCustomMsgRslt)

相关结构定义请参考：
* [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)


## 处理房间广播消息


```cpp
//通知收到房间广播消息
void notifyMeetingCustomMsg(string uid, string jsonDat)
{
}
```

相关API请参考：
* [notifyMeetingCustomMsg](API.md#notifyMeetingCustomMsg)

