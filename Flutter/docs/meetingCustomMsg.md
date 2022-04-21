# 房间消息

## 功能介绍

实现房间内消息广播。此接口只能在进入房间后才能使用，房间内所有在线人员都能收到。


## 发送房间广播消息

- 调用接口：

```dart
//发送内容为“hello”的消息
String text = "hello";

CrSDK.instance.sendMeetingCustomMsg(text).then((int sdkErr) {
	if (sdkErr == 0) {
		// 发送成功
	} else {
		// 发送失败
	}
});
```

## 处理房间广播消息

```dart
  @override
  void initState() {
    CrSDK.on("notifyMeetingCustomMsg", notifyMeetingCustomMsg);
    super.initState();
  }

  @override
  void dispose() {
    CrSDK.off("notifyMeetingCustomMsg", notifyMeetingCustomMsg);
    super.dispose();
  }

  notifyMeetingCustomMsg(MeetingCustomMsg msg) {}
```

相关结构定义请参考：
+ [MeetingCustomMsg](TypeDefinitions.md#MeetingCustomMsg)
