# 房间和成员自定义属性

## 功能介绍

支持增删改查房间自定义属性、房间内人员自定义属性

<h2 id=setRoomAttr>1.设置房间属性</h2>

- 调用接口：

```js
//即将设置的属性
var attrs = {"key1":"value1", "key2":"value2"};
//全部通知
var options = {"notifyAll":1};
CRVideo_SetMeetingAttrs(attrs, options, "");

```

- 回调通知：

```js
//设置会议属性结果
CRVideo_SetMeetingAttrsRslt.callback = function( err, cookie)
{
	if (err != 0)
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
* [CRVideo_SetMeetingAttrs](API.md#CRVideo_SetMeetingAttrs)
* [CRVideo_SetMeetingAttrsRslt](API.md#CRVideo_SetMeetingAttrsRslt)
* [CRVideo_NotifyMeetingAttrsChanged](API.md#CRVideo_NotifyMeetingAttrsChanged)

相关结构定义请参考：
* [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)


<h2 id=getRoomAttr>2.获取房间属性</h2>

- 调用接口：

```js

//获取的所有属性
CRVideo_GetMeetingAllAttrs("");
```

- 回调通知：

```js

CRVideo_GetMeetingAllAttrsSuccess.callback = function(attr, cookie)
{

}

CRVideo_GetMeetingAllAttrsFail.callback = function(sdkErr, cookie)
{

}

```

相关API请参考：
* [CRVideo_GetMeetingAllAttrs](API.md#CRVideo_GetMeetingAllAttrs)
* [CRVideo_GetMeetingAllAttrsSuccess](API.md#CRVideo_GetMeetingAllAttrsSuccess)
* [CRVideo_GetMeetingAllAttrsFail](API.md#CRVideo_GetMeetingAllAttrsFail)


<h2 id=getspecificRoomAttr>3.获取房间特定属性</h2>

- 调用接口：

```js

var keys = ["MeetingName", "startTime", "endTime"];
CRVideo_GetMeetingAttrs(keys, "");

```

- 回调通知：

```js

CRVideo_GetMeetingAllAttrsSuccess.callback = function(attr, cookie)
{

}

CRVideo_GetMeetingAllAttrsFail.callback = function(sdkErr, cookie)
{

}

```

相关API请参考：
* [CRVideo_GetMeetingAttrs](API.md#CRVideo_GetMeetingAttrs)
* [CRVideo_GetMeetingAllAttrsSuccess](API.md#CRVideo_GetMeetingAllAttrsSuccess)
* [CRVideo_GetMeetingAllAttrsFail](API.md#CRVideo_GetMeetingAllAttrsFail)



<h2 id=addOrUpdateMeetingAttrs> 4.添加或更新属性</h2>


- 调用接口：

```js

var meetingNameKey = "MeetingName";
var meetingNameVaue = "";
CRVideo_AddOrUpdateMeetingAttrs(meetingNameKey, meetingNameVaue, "");

```

- 回调通知：

```js

CRVideo_AddOrUpdateMeetingAttrsRslt.callback = function(sdkErr, cookie)
{
	if (sdkErr != 0)
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
* [CRVideo_AddOrUpdateMeetingAttrs](API.md#CRVideo_AddOrUpdateMeetingAttrs)
* [CRVideo_AddOrUpdateMeetingAttrsRslt](API.md#CRVideo_AddOrUpdateMeetingAttrsRslt)
* [CRVideo_NotifyMeetingAttrsChanged](API.md#CRVideo_NotifyMeetingAttrsChanged)


<h2 id=delMeetingAttrs> 5.删除房间特定属性</h2>


- 调用接口：

```js

var meetingName = "MeetingName";
CRVideo_DelMeetingAttrs(meetingName, "");

```

- 回调通知：

```js

CRVideo_DelMeetingAttrsRslt.callback = function(sdkErr, cookie)
{
	if (sdkErr != 0)
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
* [CRVideo_DelMeetingAttrs](API.md#CRVideo_DelMeetingAttrs)
* [CRVideo_DelMeetingAttrsRslt](API.md#CRVideo_DelMeetingAttrsRslt)
* [CRVideo_NotifyMeetingAttrsChanged](API.md#CRVideo_NotifyMeetingAttrsChanged)



<h2 id=clearRoomAttr> 6.清除房间全部属性</h2>

- 调用接口：

```js

CRVideo_ClearMeetingAttrs("");

```

- 回调通知：

```js

CRVideo_ClearMeetingAttrsRslt.callback = function(sdkErr, cookie)
{
	if (sdkErr != 0)
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
* [CRVideo_ClearMeetingAttrs](API.md#CRVideo_ClearMeetingAttrs)
* [CRVideo_ClearMeetingAttrsRslt](API.md#CRVideo_ClearMeetingAttrsRslt)
* [CRVideo_NotifyMeetingAttrsChanged](API.md#CRVideo_NotifyMeetingAttrsChanged)



<h2 id=setUserAttr> 7.设置成员属性</h2>

- 调用接口：

```js

var uid = "111";
var attrs = {"key1":"value1", "key2":"value2"};
CRVideo_SetUserAttrs(uid, attrs, "");

```

- 回调通知：

```js

CRVideo_SetUserAttrsRslt.callback = function(sdkErr, cookie)
{
	if (sdkErr != 0)
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
* [CRVideo_SetUserAttrs](API.md#CRVideo_SetUserAttrs)
* [CRVideo_SetUserAttrsRslt](API.md#CRVideo_SetUserAttrsRslt)
* [CRVideo_GetUserAttrs](API.md#CRVideo_GetUserAttrs)
* [CRVideo_NotifyUserAttrsChanged](API.md#CRVideo_NotifyUserAttrsChanged)


<h2 id=getUserAttr>8.获取当前指定成员所有属性</h2>

- 调用接口：

```js

var uids = ["111", "222"];
CRVideo_GetUserAttrs(uids, "");

```

- 回调通知：


```js

CRVideo_GetUserAttrsSuccess.callback = function(attrsMap, cookie)
{

}

CRVideo_GetUserAttrsFail.callback = function(sdkErr, cookie)
{

}

```

相关API请参考:
* [CRVideo_GetUserAttrs](API.md#CRVideo_GetUserAttrs)
* [CRVideo_GetUserAttrsSuccess](API.md#CRVideo_GetUserAttrsSuccess)
* [CRVideo_GetUserAttrsFail](API.md#CRVideo_GetUserAttrsFail)



<h2 id=getUserSpecificAttr>9.获取当前指定成员指定属性</h2>

- 调用接口：

```js

var uids = ["111", "222"];
var keys = ["name", "companyName"];
CRVideo_GetUserAttrs(uids, keys, "");

```

- 回调通知：

```js

CRVideo_GetUserAttrsSuccess.callback = function(attrsMap, cookie)
{

}

CRVideo_GetUserAttrsFail.callback = function(sdkErr, cookie)
{

}


```
相关API请参考:
* [CRVideo_GetUserAttrs](API.md#CRVideo_GetUserAttrs)
* [CRVideo_GetUserAttrsSuccess](API.md#CRVideo_GetUserAttrsSuccess)
* [CRVideo_GetUserAttrsFail](API.md#CRVideo_GetUserAttrsFail)



<h2 id=addOrUpdateUserSpecificAttrs>10.添加或更新指定成员指定的属性</h2>

- 调用接口：

```js

var uid = "111";
var attrs = {"key1":"value1", "key2":"value2"};
CRVideo_AddOrUpdateUserAttrs(uid, attrs, "");

```

- 回调通知：

```js

CRVideo_AddOrUpdateUserAttrsRslt.callback = function(sdkErr, cookie)
{
	if (sdkErr != 0)
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
* [CRVideo_AddOrUpdateUserAttrs](API.md#CRVideo_AddOrUpdateUserAttrs)
* [CRVideo_AddOrUpdateUserAttrsRslt](API.md#CRVideo_AddOrUpdateUserAttrsRslt)
* [CRVideo_NotifyUserAttrsChanged](API.md#CRVideo_NotifyUserAttrsChanged)



<h2 id=delUserSpecificAttrs>11.删除指定成员的指定属性</h2>

- 调用接口：

```js

var uid = "111";
var keys = ["department", "companyName"];
CRVideo_DelUserAttrs(uid, keys, "");

```

- 回调通知：

```js

CRVideo_DelUserAttrsRslt.callback = function(sdkErr, cookie)
{
	if (sdkErr != 0)
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
* [CRVideo_DelUserAttrs](API.md#CRVideo_DelUserAttrs)
* [CRVideo_DelUserAttrsRslt](API.md#CRVideo_DelUserAttrsRslt)
* [CRVideo_NotifyUserAttrsChanged](API.md#CRVideo_NotifyUserAttrsChanged)


<h2 id=clearUserSpecificAttr>12.清除当前指定成员全部属性</h2>

- 调用接口：

```js

var uid = "111";
CRVideo_ClearUserAttrs(uid);

```

- 回调通知：

```js

CRVideo_ClearUserAttrsRslt.callback = function(sdkErr, cookie)
{
	if (sdkErr != 0)
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
* [CRVideo_ClearUserAttrs](API.md#CRVideo_ClearUserAttrs)
* [CRVideo_ClearUserAttrsRslt](API.md#CRVideo_ClearUserAttrsRslt)


<h2 id=clearAllUserAttr>13.清除当前房间内所有成员全部属性</h2>

- 调用接口：

```js

CRVideo_ClearAllUserAttrs(“”);

```

- 回调通知：

```js

CRVideo_ClearAllUserAttrsRslt.callback = function(sdkErr, cookie)
{
	if (sdkErr != 0)
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
* [CRVideo_ClearAllUserAttrs](API.md#CRVideo_ClearAllUserAttrs)
* [CRVideo_ClearAllUserAttrsRslt](API.md#CRVideo_ClearAllUserAttrsRslt)
