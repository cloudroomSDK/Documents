# 自定义房间和成员属性

## 功能介绍

支持增删改查自定义房间属性、自定义房间内人员属性

## 示例项目

云屋SDK 在 GitHub 上提供已经实现[自定义房间和成员属性](https://github.com/cloudroomSDK/API-Demo/tree/main/Linux/src/TestRoomUsrAttrs)功能的开源示例项目。你可以下载体验或查看其中的源代码。


## 1.设置房间属性

- 调用接口：

```cpp
//即将设置的属性
string meetAttrs = "{\"MeetingName\":\"xxx\",\"departmentName\":\"xxx\"}";
g_sdkMain->getSDKMeeting().setMeetingAttrs(meetAttrs, NULL, "");

```
- 回调通知：

```cpp

//设置会议属性结果
void setMeetingAttrsRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)
{
	if(CRVSDKERR_NOERR != sdkErr)
  	{
    	//设置会议属性失败
  	}
}

```

相关API请参考：
* [setMeetingAttrs](Apis.md#setMeetingAttrs)
* [setMeetingAttrsRslt](Apis.md#setMeetingAttrsRslt)

相关结构定义请参考：
* [错误码](Constant.md#CRVSDK_ERR_DEF)


## 2.获取房间属性

- 调用接口：

```cpp

//获取的所有属性
g_sdkMain->getSDKMeeting().getMeetingAllAttrs("");
```

- 回调通知：

```cpp

void getMeetingAllAttrsSuccess(const char* attrs, const char* cookie)
{
    //获取会议属性成功
}

void getMeetingAllAttrsFail(CRVSDK_ERR_DEF sdkErr, const char* cookie)
{
    //获取会议属性失败
}

```

相关API请参考：
* [getMeetingAllAttrs](Apis.md#getMeetingAllAttrs)


## 3.获取房间特定属性

- 调用接口：

```cpp

//获取的指定的属性
string keys = "[\"MeetingName\", \"CompanyName\"]";
g_sdkMain->getSDKMeeting().getMeetingAttrs(keys, "");

```

- 回调通知：

```cpp

void getMeetingAttrsSuccess(const char* attrs, const char* cookie)
{
    //获取会议属性成功
}

void getMeetingAttrsFail(CRVSDK_ERR_DEF sdkErr, const char* cookie)
{
    //获取会议属性失败
}

```

相关API请参考：
* [getMeetingAttrs](Apis.md#getMeetingAttrs)
* [notifyMeetingAttrsChanged](Apis.md#notifyMeetingAttrsChanged)



## 4.添加或更新属性


- 调用接口：

```cpp

string meetAttr = "{ \"MeetingName\":\"xxx\" }";
g_sdkMain->getSDKMeeting().addOrUpdateMeetingAttrs(jsonStr.constData(), NULL, "");

```

- 回调通知：

```cpp

void addOrUpdateMeetingAttrsRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)
{
	if(CRVSDKERR_NOERR != sdkErr)
  	{
    	//更新会议属性失败
  	}
}

```

相关API请参考：
* [addOrUpdateMeetingAttrs](Apis.md#addOrUpdateMeetingAttrs)
* [addOrUpdateMeetingAttrsRslt](Apis.md#addOrUpdateMeetingAttrsRslt)


## 5.删除房间特定属性


- 调用接口：

```cpp

string MeetAttrs = "[\"MeetingName\", \"CompanyName\"]";
g_sdkMain->getSDKMeeting().delMeetingAttrs(meetAttrs, NULL, "");

```

- 回调通知：

```cpp

void delMeetingAttrsRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)
{
	if(CRVSDKERR_NOERR != sdkErr)
  	{
    	//删除会议属性失败
  	}
}

```

相关API请参考：
* [delMeetingAttrs](Apis.md#delMeetingAttrs)
* [delMeetingAttrsRslt](Apis.md#delMeetingAttrsRslt)



## 6.清除房间全部属性

- 调用接口：

```cpp

g_sdkMain->getSDKMeeting().clearMeetingAttrs(NULL, "");

```
- 回调通知：

```cpp

void clearMeetingAttrsRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)
{
	if(CRVSDKERR_NOERR != sdkErr)
  	{
    	//清除会议属性失败
  	}
}

```

相关API请参考：
* [clearMeetingAttrs](Apis.md#clearMeetingAttrs)
* [clearMeetingAttrsRslt](Apis.md#clearMeetingAttrsRslt)



## 7.设置成员属性

- 调用接口：

```cpp

string uids = "[\"111\", \"222\"]";
string attrs = "{[\"key\":\"name\", \"value\":\"Bob\"],[\"key\":\"companyName\", \"value\":\"CloudRoom\"]}";
g_sdkMain->getSDKMeeting().setUserAttrs(uids, attrs, NULL, "");

```
- 回调通知：

```cpp

void setUserAttrsRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)
{
	if(CRVSDKERR_NOERR != sdkErr)
  	{
    	//设置成员属性失败
  	}
}

```

相关API请参考:
* [setUserAttrs](Apis.md#setUserAttrs)
* [setUserAttrsRslt](Apis.md#setUserAttrsRslt)


## 8.获取当前指定成员属性

- 调用接口：

```cpp

string uids = "[\"111\", \"222\"]";
g_sdkMain->getSDKMeeting().getUserAttrs(uids, NULL, "");

```
- 回调通知：


```cpp

void getUserAttrsFail(CRVSDK_ERR_DEF sdkErr, const char* cookie)
{
    //获取用户属性失败
}

void getUserAttrsSuccess(const char* attrsMap, const char* cookie)
{
    //获取用户属性成功后的结果
}

```
相关API请参考:
* [getUserAttrs](Apis.md#getUserAttrs)
* [getUserAttrsFail](Apis.md#getUserAttrsFail)
* [getUserAttrsSuccess](Apis.md#getUserAttrsSuccess)



## 9.获取当前指定成员指定属性

- 调用接口：

```cpp

string uids = "[\"111\", \"222\"]";
string keys = "[\"name\", \"companyName\"]";
g_sdkMain->getSDKMeeting().getUserAttrs(uids, keys, "");

```
- 回调通知：

```cpp

void getUserAttrsFail(CRVSDK_ERR_DEF sdkErr, const char* cookie)
{
    //获取当前指定成员指定属性失败
}

void getUserAttrsSuccess(const char* attrsMap, const char* cookie)
{
	//获取当前指定成员指定属性成功后的结果
}

```
相关API请参考:
* [getUserAttrs](Apis.md#getUserAttrs)
* [getUserAttrsFail](Apis.md#getUserAttrsFail)
* [getUserAttrsSuccess](Apis.md#getUserAttrsSuccess)




## 10.添加或更新指定成员指定的属性

- 调用接口：

```cpp

string uids = "[\"111\", \"222\"]";
string attrs = "{[\"key\":\"department\", \"value\":\"R&D\"],[\"key\":\"companyName\", \"value\":\"CloudRoom\"]}";
g_sdkMain->getSDKMeeting().addOrUpdateUserAttrs(uids, attrs, NULL, "");

```
- 回调通知：

```cpp

void addOrUpdateUserAttrsRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)
{
	if (CRVSDKERR_NOERR != sdkErr)
  	{
    	//增加或者更新成员属性失败
  	}
}

```
相关API请参考:
* [addOrUpdateUserAttrs](Apis.md#addOrUpdateUserAttrs)
* [addOrUpdateUserAttrsRslt](Apis.md#addOrUpdateUserAttrsRslt)




## 11.删除指定成员的指定属性

- 调用接口：

```cpp

string uids = "[\"111\", \"222\"]";
string keys = "[\"department\", \"companyName\"]";
g_sdkMain->getSDKMeeting().delUserAttrs(uids, keys, NULL, "");

```
- 回调通知：

```cpp

void delUserAttrsRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)
{
	if (CRVSDKERR_NOERR != sdkErr)
  	{
    	//删除指定成员失败
  	}
}

```
相关API请参考:
* [delUserAttrs](Apis.md#delUserAttrs)
* [delUserAttrsRslt](Apis.md#delUserAttrsRslt)



## 12.清除当前指定成员全部属性

- 调用接口：

```cpp

string uids = "[\"111\", \"222\"]";
g_sdkMain->getSDKMeeting().clearUserAttrs(uids, NULL, "");

```
- 回调通知：

```cpp

void clearUserAttrsRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)
{
	if (CRVSDKERR_NOERR != sdkErr)
  	{
    	//清除当前指定成员全部属性失败
  	}
}

```
相关API请参考:
* [clearUserAttrs](Apis.md#clearUserAttrs)
* [clearUserAttrsRslt](Apis.md#clearUserAttrsRslt)


## 13.清除当前房间内所有成员全部属性

- 调用接口：

```cpp

g_sdkMain->getSDKMeeting().clearAllUserAttrs(NULL, "");

```
- 回调通知：

```cpp

void clearAllUserAttrsRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)
{
	if (CRVSDKERR_NOERR != sdkErr)
  	{
    	//清除当前房间内所有成员全部属性失败
  	}
}

```
相关API请参考:
* [clearAllUserAttrs](Apis.md#clearAllUserAttrs)
* [clearAllUserAttrsRslt](Apis.md#clearAllUserAttrsRslt)
