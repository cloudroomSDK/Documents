# 房间消息

## 功能介绍

实现房间内消息广播。此接口只能在进入房间后才能使用，房间内所有在线人员都能收到。


<h2 id=sendMeetingCustomMsg>发送自定义广播消息</h2>

- 调用接口：
```  oc
//发送自定义广播消息
[[CloudroomVideoMeeting shareInstance] sendMeetingCustomMsg:@"data" cookie:@""];
```
- 回调通知：

```  oc
//发送数据的结果通知
- (void)sendMeetingCustomMsgRslt:(int)err cookie:(NSString *)cookie{
}
```

相关API请参考：
* [sendMeetingCustomMsg](Apis.md#sendMeetingCustomMsg)
* [sendMeetingCustomMsgRslt](Apis.md#sendMeetingCustomMsgRslt)

相关结构定义请参考：
* [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)


## 处理房间广播消息


```cpp
//通知收到房间广播消息
- (void)notifyMeetingCustomMsg:(NSString *)uid jsonDat:(NSString *)data{
}
```

相关API请参考：
* [notifyMeetingCustomMsg](Apis.md#notifyMeetingCustomMsg)


