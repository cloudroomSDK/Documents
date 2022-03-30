# 房间和成员自定义属性

## 功能简介

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
CR.SetMeetingAttrs(JSON.stringify(attrs), JSON.stringify(options));
```
- 回调通知：

```js
//设置会议属性结果
CR.SetMeetingAttrsRslt.callback = function(sdkErr){
	if(sdkErr != 0){
		console.log(`设置房间属性失败，错误码: ${sdkErr}`)
	}
}
```

相关API请参考：
* [CR.SetMeetingAttrs](API.md#CRVideo_SetMeetingAttrs)
* [CR.SetMeetingAttrsRslt](API.md#CRVideo_SetMeetingAttrsRslt)
* [CR.NotifyMeetingAttrsChanged](API.md#CRVideo_NotifyMeetingAttrsChanged)

相关结构定义请参考：
* [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)


<h2 id=getRoomAttr>2.获取所有的房间属性</h2>

- 调用接口：

```js
//获取的所有属性
CR.GetMeetingAllAttrs();
```

- 回调通知：
```js
//获取所以的房间属性成功
CR.GetMeetingAllAttrsSuccess.callback = function(attrs){
	
}
//获取所以的房间属性失败
CR.GetMeetingAllAttrsFail.callback = function(sdkErr){
	console.log(`获取所有的房间属性失败，错误码: ${sdkErr}`)
}
```

相关API请参考：
* [CR.GetMeetingAllAttrs](API.md#CRVideo_GetMeetingAllAttrs)
* [CR.GetMeetingAllAttrsSuccess](API.md#CRVideo_GetMeetingAllAttrsSuccess)
* [CR.GetMeetingAllAttrsFail](API.md#CRVideo_GetMeetingAllAttrsFail)
* [CR.NotifyMeetingAttrsChanged](API.md#CRVideo_NotifyMeetingAttrsChanged)

<h2 id=getspecificRoomAttr>3.获取房间特定属性</h2>

- 调用接口：

```js
//获取的指定的属性
var keys = ["MeetingName", "CompanyName"];
CR.GetMeetingAttrs(keys);
```

- 回调通知：

```js
//获取到特定的房间属性成功
CR.GetMeetingAttrsSuccess.callback = function(attrs){
	
}
//获取到特定的房间属性失败
CR.GetMeetingAttrsFail.callback = function(sdkErr){
	console.log(`获取特定的房间属性失败，错误码: ${sdkErr}`)
}
```

相关API请参考：
* [CR.GetMeetingAttrs](API.md#CRVideo_GetMeetingAttrs)
* [CR.GetMeetingAttrsSuccess](API.md#CRVideo_GetMeetingAttrsSuccess)
* [CR.GetMeetingAttrsFail](API.md#CRVideo_GetMeetingAttrsFail)

<h2 id=addOrUpdateMeetingAttrs> 4.添加或更新属性</h2>


- 调用接口：

```js
//即将设置的属性
var attrs = {
	key1:"value1",
	key2:"value2"
}
var options = { notifyAll: 1 }; //全部通知
CR.AddOrUpdateMeetingAttrs(JSON.stringify(attrs), JSON.stringify(options));
```

- 回调通知：

```js
CR.AddOrUpdateMeetingAttrsRslt.callback = function(sdkErr){
	if(sdkErr != 0){
		console.log(`更新房间属性失败，错误码: ${sdkErr}`)
	}
}
```

相关API请参考：
* [CR.AddOrUpdateMeetingAttrs](API.md#CRVideo_AddOrUpdateMeetingAttrs)
* [CR.AddOrUpdateMeetingAttrsRslt](API.md#CRVideo_AddOrUpdateMeetingAttrsRslt)
* [CR.NotifyMeetingAttrsChanged](API.md#CRVideo_NotifyMeetingAttrsChanged)

<h2 id=delMeetingAttrs> 5.删除房间特定属性</h2>


- 调用接口：

```js
var keys = ["key1", "key2"];
var options = { notifyAll: 1 }; //全部通知
CR.DelMeetingAttrs(keys, JSON.stringify(options));
```

- 回调通知：

```js
CR.DelMeetingAttrsRslt.callback = function(sdkErr, cookie){
	if(sdkErr != 0){
		console.log(`删除房间属性失败，错误码: ${sdkErr}`)
	}
}
```

相关API请参考：
* [CR.DelMeetingAttrs](API.md#CRVideo_DelMeetingAttrs)
* [CR.DelMeetingAttrsRslt](API.md#CRVideo_DelMeetingAttrsRslt)
* [CR.NotifyMeetingAttrsChanged](API.md#CRVideo_NotifyMeetingAttrsChanged)


<h2 id=clearRoomAttr> 6.清除房间全部属性</h2>

- 调用接口：

```js
var options = { notifyAll: 1 }; //全部通知
CR.ClearMeetingAttrs(JSON.stringify(options));
```
- 回调通知：

```js
CR.ClearMeetingAttrsRslt.callback = function(sdkErr, cookie){
	if(sdkErr != 0){
		console.log(`清除房间属性失败，错误码: ${sdkErr}`)
	}
}
```

相关API请参考：
* [CR.ClearMeetingAttrs](API.md#CRVideo_ClearMeetingAttrs)
* [CR.ClearMeetingAttrsRslt](API.md#CRVideo_ClearMeetingAttrsRslt)
* [CR.NotifyMeetingAttrsChanged](API.md#CRVideo_NotifyMeetingAttrsChanged)



<h2 id=setUserAttr> 7.设置成员属性</h2>

- 调用接口：

```js
var UID = 'wx_xxxx';
var attrs = {
	key1:"value1",
	key2:"value2"
};
var options = { notifyAll: 1 }; //全部通知

CR.SetUserAttrs(UID, JSON.stringify(attrs), JSON.stringify(options))
```
- 回调通知：

```js
CR.SetUserAttrsRslt.callback = function(sdkErr){
	if(sdkErr != 0){
		console.log(`设置成员属性失败，错误码: ${sdkErr}`)
	}
}
```

相关API请参考:
* [CR.SetUserAttrs](API.md#CRVideo_SetUserAttrs)
* [CR.SetUserAttrsRslt](API.md#CRVideo_SetUserAttrsRslt)
* [CR.NotifyUserAttrsChanged](API.md#CRVideo_NotifyUserAttrsChanged)

<h2 id=getUserAttr>8.获取当前指定成员所有属性</h2>

- 调用接口：

```js
var uids = ["uid1","uid2"];
//传空字符串代表获取所有属性，传数组代表或者特定的成员属性
CR.GetUserAttrs(uids, "" || ["key1","key2"]);	
```
- 回调通知：


```js
//获取房间内成员属性结果
CR.GetUserAttrsSuccess.callback = function(attrs){
	
}
//获取房间内成员属性失败
CR.GetUserAttrsFail.callback = function(sdkErr){
	console.log(`获取特定的成员属性失败，错误码: ${sdkErr}`)
}
```
相关API请参考:
* [CR.GetUserAttrs](API.md#CRVideo_GetUserAttrs)
* [CR.GetUserAttrsSuccess](API.md#CRVideo_GetUserAttrsSuccess)
* [CR.GetUserAttrsFail](API.md#CRVideo_GetUserAttrsFail)

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
CR.AddOrUpdateUserAttrs(UID, JSON.stringify(attrs), JSON.stringify(options));
```
- 回调通知：

```js
CR.AddOrUpdateUserAttrsRslt.callback = function(sdkErr){
	if(sdkErr != 0){
		console.log(`更新成员属性失败，错误码: ${sdkErr}`)
	}
}
```
相关API请参考:
* [CR.AddOrUpdateUserAttrs](API.md#CRVideo_AddOrUpdateUserAttrs)
* [CR.AddOrUpdateUserAttrsRslt](API.md#CRVideo_AddOrUpdateUserAttrsRslt)
* [CR.NotifyUserAttrsChanged](API.md#CRVideo_NotifyUserAttrsChanged)

<h2 id=delUserSpecificAttrs>10.删除指定成员的指定属性</h2>

- 调用接口：

```js
var UID = 'wx_xxxx';
var keys = ["key1","key2"];
var options = { notifyAll: 1 }; //全部通知
CR.DelUserAttrs(UID, keys, JSON.stringify(options));
```
- 回调通知：

```js
CR.DelUserAttrsRslt.callback = function(sdkErr, cookie){
	if(sdkErr != 0){
		console.log(`删除房间属性失败，错误码: ${sdkErr}`)
	}
}
```

相关API请参考:
* [CR.DelUserAttrs](API.md#CRVideo_DelUserAttrs)
* [CR.DelUserAttrsRslt](API.md#CRVideo_DelUserAttrsRslt)
* [CR.NotifyUserAttrsChanged](API.md#CRVideo_NotifyUserAttrsChanged)

<h2 id=clearUserSpecificAttr>11.清除当前指定成员全部属性</h2>

- 调用接口：

```js
var uids = "wx_xxx" || ['wx_xxx']; //支持string 或者 array
var options = { notifyAll: 1 }; //全部通知
CR.ClearUserAttrs(uids, JSON.stringify(options));
```
- 回调通知：

```js
CR.ClearUserAttrsRslt.callback = function(sdkErr, cookie){
	if(sdkErr != 0){
		console.log(`清除特定成员属性失败，错误码: ${sdkErr}`)
	}
}
```

相关API请参考:
* [CR.ClearUserAttrs](API.md#CRVideo_ClearUserAttrs)
* [CR.ClearUserAttrsRslt](API.md#CRVideo_ClearUserAttrsRslt)
* [CR.NotifyUserAttrsChanged](API.md#CRVideo_NotifyUserAttrsChanged)

<h2 id=clearAllUserAttr>12.清除当前房间内所有成员全部属性</h2>

- 调用接口：

```js
var options = { notifyAll: 1 }; //全部通知
CR.ClearAllUserAttrs(JSON.stringify(options));
```
- 回调通知：

```js
CR.ClearAllUserAttrsRslt.callback = function(sdkErr){
	if(sdkErr != 0){
		console.log(`清除所有成员属性失败，错误码: ${sdkErr}`)
	}
}
```
相关API请参考:
* [CR.ClearAllUserAttrs](API.md#CRVideo_ClearAllUserAttrs)
* [CR.ClearAllUserAttrsRslt](API.md#CRVideo_ClearAllUserAttrsRslt)
* [CR.NotifyUserAttrsChanged](API.md#CRVideo_NotifyUserAttrsChanged)
