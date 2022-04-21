# 房间广播消息

## 功能介绍

实现房间内消息广播。此接口只能在进入房间后才能使用，房间内所有在线人员都能收到。


## 示例项目

云屋SDK 在 GitHub 上提供已经实现[房间广播消息](https://github.com/cloudroomSDK/API-Demo/tree/main/Linux/src/TestRoomMsg)功能的开源示例项目。你可以下载体验或查看其中的源代码。


## 发送房间广播消息

- 调用接口：
```cpp
//发送房间广播消息
string roomMsg="{\"CmdType":\"IM\", \"IMMsg\":\"xxxxxxxxxxx\"}";
g_sdkMain->getSDKMeeting().sendMeetingCustomMsg(roomMsg, "");
```
- 回调通知：

```cpp
//发送数据的结果通知
void DlgRoomMsg::sendMeetingCustomMsgRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)
{
	if(sdkErr != CRVSDKERR_NOERR){
        //发送失败
    }
}
```

相关API请参考：
* [sendMeetingCustomMsg](Apis.md#sendMeetingCustomMsg)
* [sendMeetingCustomMsgRslt](Apis.md#sendMeetingCustomMsgRslt)
* [错误码](Constant.md#CRVSDK_ERR_DEF)


## 处理房间广播消息


```cpp
//通知收到房间广播消息
void DlgRoomMsg::notifyMeetingCustomMsg(const char* fromUserID, const char* jsonDat)
{
    //过滤自己发送的消息
	if (MainDialog::getMyUserID() == fromUserID)
		return;

    //处理房收到的消息
	...
}
```

相关API请参考：
* [notifyMeetingCustomMsg](Apis.md#notifyMeetingCustomMsg)

