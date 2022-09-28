# 房间和成员自定义属性

## 功能介绍

支持增删改查房间自定义属性、房间内人员自定义属性

<h2 id=setRoomAttr>1.设置房间属性</h2>

- 调用接口：

```csharp
//即将设置的属性
HashMap<String, String> attrs = new HashMap<String, String>(){{
		put("key1", "value1");
		put("key2", "value2");
	}};
//全部通知
HashMap<String, Object> options = new HashMap<String, String>(){{
		put("notifyAll", 1);
	}};
CloudroomVideoMeeting.getInstance().setMeetingAttrs(attrs, options, "");

```

- 回调通知：

```csharp

//设置会议属性结果
void setMeetingAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) 
{
	if (err != CRVIDEOSDK_ERR_DEF.CRVIDEOSDK_NOERR)
  	{
    	//失败
  	}
	else
	{
		//成功
	}
}

```

相关API请参考：
* [setMeetingAttrs](API.md#setMeetingAttrs)
* [setMeetingAttrsRslt](API.md#setMeetingAttrsRslt)
* [notifyMeetingAttrsChanged](API.md#notifyMeetingAttrsChanged)

相关结构定义请参考：
* [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)


<h2 id=getRoomAttr>2.获取房间属性</h2>

- 调用接口：

```csharp

//获取的所有属性
CloudroomVideoMeeting.getInstance().getMeetingAllAttrs("");
```

- 回调通知：

```csharp

void getMeetingAllAttrsSuccess(HashMap<String, MeetingAttr> attrSeq, String cookie) 
{
}

void getMeetingAllAttrsFail(CRVIDEOSDK_ERR_DEF err, String cookie) 
{
}

```

相关API请参考：
* [getMeetingAllAttrs](API.md#getMeetingAllAttrs)
* [getMeetingAllAttrsSuccess](API.md#getMeetingAllAttrsSuccess)
* [getMeetingAllAttrsFail](API.md#getMeetingAllAttrsFail)


<h2 id=getspecificRoomAttr>3.获取房间特定属性</h2>

- 调用接口：

```csharp

List<String> keys = Arrays.asList("MeetingName", "startTime", "endTime");
CloudroomVideoMeeting.getInstance().getMeetingAttrs(keys, "");

```

- 回调通知：

```csharp

void getMeetingAttrsSuccess(HashMap<String, MeetingAttr> attrSeq, String cookie) 
{

}

void getMeetingAttrsFail(CRVIDEOSDK_ERR_DEF err, String cookie) 
{

}

```

相关API请参考：
* [getMeetingAttrs](API.md#getMeetingAllAttrs)
* [getMeetingAttrsSuccess](API.md#getMeetingAttrsSuccess)
* [getMeetingAttrsFail](API.md#getMeetingAttrsFail)



<h2 id=addOrUpdateMeetingAttrs> 4.添加或更新属性</h2>


- 调用接口：

```csharp

String meetingNameKey = "MeetingName";
String meetingNameVaue = "";
CloudroomVideoMeeting.getInstance().addOrUpdateMeetingAttrs(meetingNameKey, meetingNameVaue, "");

```

- 回调通知：

```csharp

void addOrUpdateMeetingAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) 
{
	if (err != CRVIDEOSDK_ERR_DEF.CRVIDEOSDK_NOERR)
  	{
    	//失败
  	}
	else
	{
		//成功
	}
}

```

相关API请参考：
* [addOrUpdateMeetingAttrs](API.md#addOrUpdateMeetingAttrs)
* [addOrUpdateMeetingAttrsRslt](API.md#addOrUpdateMeetingAttrsRslt)
* [notifyMeetingAttrsChanged](API.md#notifyMeetingAttrsChanged)


<h2 id=delMeetingAttrs> 5.删除房间特定属性</h2>


- 调用接口：

```csharp

String meetingName = "MeetingName";
CloudroomVideoMeeting.getInstance().delMeetingAttrs(meetingName, "");

```

- 回调通知：

```csharp

void delMeetingAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) 
{
	if (err != CRVIDEOSDK_ERR_DEF.CRVIDEOSDK_NOERR)
  	{
    	//失败
  	}
	else
	{
		//成功
	}
}

```

相关API请参考：
* [delMeetingAttrs](API.md#delMeetingAttrs)
* [delMeetingAttrsRslt](API.md#delMeetingAttrsRslt)
* [notifyMeetingAttrsChanged](API.md#notifyMeetingAttrsChanged)



<h2 id=clearRoomAttr> 6.清除房间全部属性</h2>

- 调用接口：

```csharp

CloudroomVideoMeeting.getInstance().clearMeetingAttrs("");

```

- 回调通知：

```csharp

void clearMeetingAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) 
{
	if (err != CRVIDEOSDK_ERR_DEF.CRVIDEOSDK_NOERR)
  	{
    	//失败
  	}
	else
	{
		//成功
	}
}

```

相关API请参考：
* [clearMeetingAttrs](API.md#clearMeetingAttrs)
* [clearMeetingAttrsRslt](API.md#clearMeetingAttrsRslt)
* [notifyMeetingAttrsChanged](API.md#notifyMeetingAttrsChanged)



<h2 id=setUserAttr> 7.设置成员属性</h2>

- 调用接口：

```csharp

String uid = "111";
HashMap<String, String> attrs = new HashMap<String, String>(){{
		put("key1","value1");
		put("key2","value2");
	}};
CloudroomVideoMeeting.getInstance().setUserAttrs(uid, attrs, "");

```

- 回调通知：

```csharp

void setUserAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) 
{
	if (err != CRVIDEOSDK_ERR_DEF.CRVIDEOSDK_NOERR)
  	{
    	//失败
  	}
	else
	{
		//成功
	}
}

```

相关API请参考:
* [setUserAttrs](API.md#setUserAttrs)
* [setUserAttrsRslt](API.md#setUserAttrsRslt)
* [getUserAttrs](API.md#getUserAttrs)
* [notifyUserAttrsChanged](API.md#notifyUserAttrsChanged)


<h2 id=getUserAttr>8.获取当前指定成员所有属性</h2>

- 调用接口：

```csharp

List<String> uids = Arrays.asList("111", "222");
CloudroomVideoMeeting.getInstance().getUserAttrs(uids, "");

```

- 回调通知：


```csharp

void getUserAttrsSuccess(HashMap<String, HashMap<String, MeetingAttr>> attrMap, String cookie) 
{

}

void getUserAttrsFail(CRVIDEOSDK_ERR_DEF err, String cookie) {

}

```

相关API请参考:
* [getUserAttrs](API.md#getUserAttrs)
* [getUserAttrsSuccess](API.md#getUserAttrsSuccess)
* [getUserAttrsFail](API.md#getUserAttrsFail)



<h2 id=getUserSpecificAttr>9.获取当前指定成员指定属性</h2>

- 调用接口：

```csharp

List<String> uids = Arrays.asList("111", "222");
List<String> keys = Arrays.asList("name", "companyName");
CloudroomVideoMeeting.getInstance().getUserAttrs(uids, keys, "");

```

- 回调通知：

```csharp

void getUserAttrsSuccess(HashMap<String, HashMap<String, MeetingAttr>> attrMap, String cookie) 
{

}

void getUserAttrsFail(CRVIDEOSDK_ERR_DEF err, String cookie) {

}


```
相关API请参考:
* [getUserAttrs](API.md#getUserAttrs)
* [getUserAttrsSuccess](API.md#getUserAttrsSuccess)
* [getUserAttrsFail](API.md#getUserAttrsFail)



<h2 id=addOrUpdateUserSpecificAttrs>10.添加或更新指定成员指定的属性</h2>

- 调用接口：

```csharp

String uid = "111";
HashMap<String, String> attrs = new HashMap<String, String>(){{
		put("key1","value1");
		put("key2","value2");
	}};
CloudroomVideoMeeting.getInstance().addOrUpdateUserAttrs(uid, attrs, "");

```

- 回调通知：

```csharp

void aaddOrUpdateUserAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie)
{
	if (err != CRVIDEOSDK_ERR_DEF.CRVIDEOSDK_NOERR)
  	{
    	//失败
  	}
	else
	{
		//成功
	}
}

```

相关API请参考:
* [addOrUpdateUserAttrs](API.md#addOrUpdateUserAttrs)
* [addOrUpdateUserAttrsRslt](API.md#addOrUpdateUserAttrsRslt)



<h2 id=delUserSpecificAttrs>11.删除指定成员的指定属性</h2>

- 调用接口：

```csharp

String uid = "111";
List<String> keys = Arrays.asList("department", "companyName");
CloudroomVideoMeeting.getInstance().delUserAttrs(uid, keys, "");

```

- 回调通知：

```csharp

void delUserAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) 
{
	if (err != CRVIDEOSDK_ERR_DEF.CRVIDEOSDK_NOERR)
  	{
    	//失败
  	}
	else
	{
		//成功
	}
}

```
相关API请参考:
* [delUserAttrs](API.md#delUserAttrs)
* [delUserAttrsRslt](API.md#delUserAttrsRslt)


<h2 id=clearUserSpecificAttr>12.清除当前指定成员全部属性</h2>

- 调用接口：

```csharp

String uid = "111";
CloudroomVideoMeeting.getInstance().clearUserAttrs(uid);

```

- 回调通知：

```csharp

void clearUserAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) 
{
	if (err != CRVIDEOSDK_ERR_DEF.CRVIDEOSDK_NOERR)
  	{
    	//失败
  	}
	else
	{
		//成功
	}
}

```

相关API请参考:
* [clearUserAttrs](API.md#clearUserAttrs)
* [clearUserAttrsRslt](API.md#clearUserAttrsRslt)


<h2 id=clearAllUserAttr>13.清除当前房间内所有成员全部属性</h2>

- 调用接口：

```csharp

CloudroomVideoMeeting.getInstance().clearAllUserAttrs(“”);

```

- 回调通知：

```csharp

void clearAllUserAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) 
{
	if (err != CRVIDEOSDK_ERR_DEF.CRVIDEOSDK_NOERR)
  	{
  	{
    	//失败
  	}
	else
	{
		//成功
	}
}

```

相关API请参考:
* [clearAllUserAttrs](API.md#clearAllUserAttrs)
* [clearAllUserAttrsRslt](API.md#clearAllUserAttrsRslt)
