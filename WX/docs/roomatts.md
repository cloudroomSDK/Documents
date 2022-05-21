# 房间和成员自定义属性

## 功能介绍

设置房间属性和房间内人员属性。

<h2 id=setRoomAttr>1.设置房间属性</h2>

- 调用接口：

```js
//即将设置的属性
var attrs = {
	key1:"value1",
	key2:"value2"
}
var options = { notifyAll: 1 }; //全部通知
RTCSDK.SetMeetingAttrs(JSON.stringify(attrs), JSON.stringify(options));
```
- 回调通知：

```js
//设置会议属性结果
RTCSDK.SetMeetingAttrsRslt.callback = function(sdkErr){
	if(sdkErr != 0){
		console.log(`设置房间属性失败，错误码: ${sdkErr}`)
	}
}
```

相关API请参考：
* [SetMeetingAttrs](API.md#CRVideo_SetMeetingAttrs)
* [SetMeetingAttrsRslt](API.md#CRVideo_SetMeetingAttrsRslt)
* [NotifyMeetingAttrsChanged](API.md#CRVideo_NotifyMeetingAttrsChanged)

相关结构定义请参考：
* [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)


<h2 id=getRoomAttr>2.获取所有的房间属性</h2>

- 调用接口：

```js
//获取的所有属性
RTCSDK.GetMeetingAllAttrs();
```

- 回调通知：
```js
//获取所以的房间属性成功
RTCSDK.GetMeetingAllAttrsSuccess.callback = function(attrs){
	
}
//获取所以的房间属性失败
RTCSDK.GetMeetingAllAttrsFail.callback = function(sdkErr){
	console.log(`获取所有的房间属性失败，错误码: ${sdkErr}`)
}
```

相关API请参考：
* [GetMeetingAllAttrs](API.md#CRVideo_GetMeetingAllAttrs)
* [GetMeetingAllAttrsSuccess](API.md#CRVideo_GetMeetingAllAttrsSuccess)
* [GetMeetingAllAttrsFail](API.md#CRVideo_GetMeetingAllAttrsFail)
* [NotifyMeetingAttrsChanged](API.md#CRVideo_NotifyMeetingAttrsChanged)

<h2 id=getspecificRoomAttr>3.获取房间特定属性</h2>

- 调用接口：

```js
//获取的指定的属性
var keys = ["MeetingName", "CompanyName"];
RTCSDK.GetMeetingAttrs(keys);
```

- 回调通知：

```js
//获取到特定的房间属性成功
RTCSDK.GetMeetingAttrsSuccess.callback = function(attrs){
	
}
//获取到特定的房间属性失败
RTCSDK.GetMeetingAttrsFail.callback = function(sdkErr){
	console.log(`获取特定的房间属性失败，错误码: ${sdkErr}`)
}
```

相关API请参考：
* [GetMeetingAttrs](API.md#CRVideo_GetMeetingAttrs)
* [GetMeetingAttrsSuccess](API.md#CRVideo_GetMeetingAttrsSuccess)
* [GetMeetingAttrsFail](API.md#CRVideo_GetMeetingAttrsFail)

<h2 id=addOrUpdateMeetingAttrs> 4.添加或更新属性</h2>


- 调用接口：

```js
//即将设置的属性
var attrs = {
	key1:"value1",
	key2:"value2"
}
var options = { notifyAll: 1 }; //全部通知
RTCSDK.AddOrUpdateMeetingAttrs(JSON.stringify(attrs), JSON.stringify(options));
```

- 回调通知：

```js
RTCSDK.AddOrUpdateMeetingAttrsRslt.callback = function(sdkErr){
	if(sdkErr != 0){
		console.log(`更新房间属性失败，错误码: ${sdkErr}`)
	}
}
```

相关API请参考：
* [AddOrUpdateMeetingAttrs](API.md#CRVideo_AddOrUpdateMeetingAttrs)
* [AddOrUpdateMeetingAttrsRslt](API.md#CRVideo_AddOrUpdateMeetingAttrsRslt)
* [NotifyMeetingAttrsChanged](API.md#CRVideo_NotifyMeetingAttrsChanged)

<h2 id=delMeetingAttrs> 5.删除房间特定属性</h2>


- 调用接口：

```js
var keys = ["key1", "key2"];
var options = { notifyAll: 1 }; //全部通知
RTCSDK.DelMeetingAttrs(keys, JSON.stringify(options));
```

- 回调通知：

```js
RTCSDK.DelMeetingAttrsRslt.callback = function(sdkErr, cookie){
	if(sdkErr != 0){
		console.log(`删除房间属性失败，错误码: ${sdkErr}`)
	}
}
```

相关API请参考：
* [DelMeetingAttrs](API.md#CRVideo_DelMeetingAttrs)
* [DelMeetingAttrsRslt](API.md#CRVideo_DelMeetingAttrsRslt)
* [NotifyMeetingAttrsChanged](API.md#CRVideo_NotifyMeetingAttrsChanged)


<h2 id=clearRoomAttr> 6.清除房间全部属性</h2>

- 调用接口：

```js
var options = { notifyAll: 1 }; //全部通知
RTCSDK.ClearMeetingAttrs(JSON.stringify(options));
```
- 回调通知：

```js
RTCSDK.ClearMeetingAttrsRslt.callback = function(sdkErr, cookie){
	if(sdkErr != 0){
		console.log(`清除房间属性失败，错误码: ${sdkErr}`)
	}
}
```

相关API请参考：
* [ClearMeetingAttrs](API.md#CRVideo_ClearMeetingAttrs)
* [ClearMeetingAttrsRslt](API.md#CRVideo_ClearMeetingAttrsRslt)
* [NotifyMeetingAttrsChanged](API.md#CRVideo_NotifyMeetingAttrsChanged)



<h2 id=setUserAttr> 7.设置成员属性</h2>

- 调用接口：

```js
var UID = 'wx_xxxx';
var attrs = {
	key1:"value1",
	key2:"value2"
};
var options = { notifyAll: 1 }; //全部通知

RTCSDK.SetUserAttrs(UID, JSON.stringify(attrs), JSON.stringify(options))
```
- 回调通知：

```js
RTCSDK.SetUserAttrsRslt.callback = function(sdkErr){
	if(sdkErr != 0){
		console.log(`设置成员属性失败，错误码: ${sdkErr}`)
	}
}
```

相关API请参考:
* [SetUserAttrs](API.md#CRVideo_SetUserAttrs)
* [SetUserAttrsRslt](API.md#CRVideo_SetUserAttrsRslt)
* [NotifyUserAttrsChanged](API.md#CRVideo_NotifyUserAttrsChanged)

<h2 id=getUserAttr>8.获取当前指定成员所有属性</h2>

- 调用接口：

```js
var uids = ["uid1","uid2"];
//传空字符串代表获取所有属性，传数组代表或者特定的成员属性
RTCSDK.GetUserAttrs(uids, "" || ["key1","key2"]);	
```
- 回调通知：


```js
//获取房间内成员属性结果
RTCSDK.GetUserAttrsSuccess.callback = function(attrs){
	
}
//获取房间内成员属性失败
RTCSDK.GetUserAttrsFail.callback = function(sdkErr){
	console.log(`获取特定的成员属性失败，错误码: ${sdkErr}`)
}
```
相关API请参考:
* [GetUserAttrs](API.md#CRVideo_GetUserAttrs)
* [GetUserAttrsSuccess](API.md#CRVideo_GetUserAttrsSuccess)
* [GetUserAttrsFail](API.md#CRVideo_GetUserAttrsFail)

<h2 id=addOrUpdateUserSpecificAttrs>9.添加或更新指定成员指定的属性</h2>

- 调用接口：

```js
var UID = 'wx_xxxx';
//即将设置的属性
var attrs = {
	key1:"value1",
	key2:"value2"
}
var options = { notifyAll: 1 }; //全部通知
RTCSDK.AddOrUpdateUserAttrs(UID, JSON.stringify(attrs), JSON.stringify(options));
```
- 回调通知：

```js
RTCSDK.AddOrUpdateUserAttrsRslt.callback = function(sdkErr){
	if(sdkErr != 0){
		console.log(`更新成员属性失败，错误码: ${sdkErr}`)
	}
}
```
相关API请参考:
* [AddOrUpdateUserAttrs](API.md#CRVideo_AddOrUpdateUserAttrs)
* [AddOrUpdateUserAttrsRslt](API.md#CRVideo_AddOrUpdateUserAttrsRslt)
* [NotifyUserAttrsChanged](API.md#CRVideo_NotifyUserAttrsChanged)

<h2 id=delUserSpecificAttrs>10.删除指定成员的指定属性</h2>

- 调用接口：

```js
var UID = 'wx_xxxx';
var keys = ["key1","key2"];
var options = { notifyAll: 1 }; //全部通知
RTCSDK.DelUserAttrs(UID, keys, JSON.stringify(options));
```
- 回调通知：

```js
RTCSDK.DelUserAttrsRslt.callback = function(sdkErr, cookie){
	if(sdkErr != 0){
		console.log(`删除房间属性失败，错误码: ${sdkErr}`)
	}
}
```

相关API请参考:
* [DelUserAttrs](API.md#CRVideo_DelUserAttrs)
* [DelUserAttrsRslt](API.md#CRVideo_DelUserAttrsRslt)
* [NotifyUserAttrsChanged](API.md#CRVideo_NotifyUserAttrsChanged)

<h2 id=clearUserSpecificAttr>11.清除当前指定成员全部属性</h2>

- 调用接口：

```js
var uids = "wx_xxx" || ['wx_xxx']; //支持string 或者 array
var options = { notifyAll: 1 }; //全部通知
RTCSDK.ClearUserAttrs(uids, JSON.stringify(options));
```
- 回调通知：

```js
RTCSDK.ClearUserAttrsRslt.callback = function(sdkErr, cookie){
	if(sdkErr != 0){
		console.log(`清除特定成员属性失败，错误码: ${sdkErr}`)
	}
}
```

相关API请参考:
* [ClearUserAttrs](API.md#CRVideo_ClearUserAttrs)
* [ClearUserAttrsRslt](API.md#CRVideo_ClearUserAttrsRslt)
* [NotifyUserAttrsChanged](API.md#CRVideo_NotifyUserAttrsChanged)

<h2 id=clearAllUserAttr>12.清除当前房间内所有成员全部属性</h2>

- 调用接口：

```js
var options = { notifyAll: 1 }; //全部通知
RTCSDK.ClearAllUserAttrs(JSON.stringify(options));
```
- 回调通知：

```js
RTCSDK.ClearAllUserAttrsRslt.callback = function(sdkErr){
	if(sdkErr != 0){
		console.log(`清除所有成员属性失败，错误码: ${sdkErr}`)
	}
}
```
相关API请参考:
* [ClearAllUserAttrs](API.md#CRVideo_ClearAllUserAttrs)
* [ClearAllUserAttrsRslt](API.md#CRVideo_ClearAllUserAttrsRslt)
* [NotifyUserAttrsChanged](API.md#CRVideo_NotifyUserAttrsChanged)
