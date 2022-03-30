# 文本聊天

功能简介：
实现房间内文本聊天，如果需要更加丰富的聊天内容，可自己定义文本格式，并进行相关解析。

:::danger

注意：在登录成功后才可以谁有即时聊天。

:::

---

<!-- 呼叫功能使用流程如下：

1. [发送聊天信息](#sendIM)
1. [聊天信息通知](#notifyIm) -->

<h2 id=sendIM>1.发送聊天信息</h2>

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

<h2 id=notifyIm>2.聊天信息通知</h2>

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

  notifyMeetingCustomMsg(CrChatMsg msg) {}
```

相关结构定义请参考：
+ [CrChatMsg](TypeDefinitions.md#CrChatMsg)
