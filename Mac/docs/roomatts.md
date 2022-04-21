# 房间和成员自定义属性

## 功能介绍

支持增删改查房间自定义属性、房间内人员自定义属性

<h2 id=setRoomAttr>1.设置房间属性</h2>

- 调用接口：

```  oc
//即将设置的属性
NSMutableDictionary *attrs = [NSMutableDictionary dictionary];
[attrs setValue:@"" forKey:@"MeetingName"];
[attrs setValue:@"" forKey:@"departmentName"];
//全部通知
NSMutableDictionary *options = [NSMutableDictionary dictionary];
[options setValue:@"1" forKey:@"notifyAll"];

[[CloudroomVideoMeeting shareInstance] setMeetingAttrs:attrs options:options cookie:@""];
```

- 回调通知：

```  oc
//设置会议属性结果
-(void)resetMeetingAttrsRslt:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie
{
   // TODO Auto-generated method stub
}
```

相关API请参考：
* [setMeetingAttrs](Apis.md#setMeetingAttrs)
* [setMeetingAttrsRslt](Apis.md#setMeetingAttrsRslt)
* [notifyMeetingAttrsChanged](Apis.md#notifyMeetingAttrsChanged)

相关结构定义请参考：
* [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)


<h2 id=getRoomAttr>2.获取房间属性</h2>

- 调用接口：

```  oc
//获取的指定的属性
NSArray<NSString*> *keys = @[@"MeetingName", @"CompanyName"];
[[CloudroomVideoMeeting shareInstance] getMeetingAttrs:keys cookie:@""];

//获取的所有属性
[[CloudroomVideoMeeting shareInstance] getMeetingAllAttrs:@""];
```

- 回调通知：

```  oc
-(void)getMeetingAllAttrsSuccess:(MeetingAttrs*)attrSeq cookie:(NSString *)cookie {
    // TODO Auto-generated method stub
}

-(void)getMeetingAllAttrsFail:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie {
    // TODO Auto-generated method stub
}
```

相关API请参考：
* [getMeetingAllAttrs](Apis.md#getMeetingAllAttrs)
* [notifyMeetingAttrsChanged](Apis.md#notifyMeetingAttrsChanged)


<h2 id=getspecificRoomAttr>3.获取房间特定属性</h2>

- 调用接口：

```  oc
//获取的指定的属性
NSArray<NSString*> *keys = @[@"MeetingName", @"CompanyName"];
[[CloudroomVideoMeeting shareInstance] getMeetingAttrs:keys cookie:@""];
```

- 回调通知：

```  oc
-(void)getMeetingAllAttrsSuccess:(MeetingAttrs*)attrSeq cookie:(NSString *)cookie {
    // TODO Auto-generated method stub
}

-(void)getMeetingAllAttrsFail:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie {
    // TODO Auto-generated method stub
}
```

相关API请参考：
* [getMeetingAllAttrs](Apis.md#getMeetingAllAttrs)
* [notifyMeetingAttrsChanged](Apis.md#notifyMeetingAttrsChanged)



<h2 id=addOrUpdateMeetingAttrs> 4.添加或更新属性</h2>


- 调用接口：

```  oc
//即将添加或更新的属性
NSMutableDictionary *attrs = [NSMutableDictionary dictionary];
[attrs setValue:@"" forKey:@"MeetingName"];
[attrs setValue:@"" forKey:@"departmentName"];
//全部通知
NSMutableDictionary *options = [NSMutableDictionary dictionary];
[options setValue:@"1" forKey:@"notifyAll"];

[[CloudroomVideoMeeting shareInstance] addOrUpdateMeetingAttrs:attrs options:options cookie:@""];
```

- 回调通知：

```  oc
-(void)addOrUpdateMeetingAttrsRslt:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie {
     // TODO Auto-generated method stub
}
```

相关API请参考：
* [addOrUpdateMeetingAttrs](Apis.md#addOrUpdateMeetingAttrs)
* [notifyMeetingAttrsChanged](Apis.md#notifyMeetingAttrsChanged)


<h2 id=delMeetingAttrs> 5.删除房间特定属性</h2>


- 调用接口：

```  oc
NSArray<NSString*> *keys = @[@"MeetingName", @"CompanyName"];
NSMutableDictionary *options = [NSMutableDictionary dictionary];
[[CloudroomVideoMeeting shareInstance] delMeetingAttrs:keys options:options cookie:@""];
```

- 回调通知：

```  oc
-(void)delMeetingAttrsRslt:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie {
    // TODO Auto-generated method stub
}
```

相关API请参考：
* [delMeetingAttrs](Apis.md#delMeetingAttrs)
* [notifyMeetingAttrsChanged](Apis.md#notifyMeetingAttrsChanged)



<h2 id=clearRoomAttr> 6.清除房间全部属性</h2>

- 调用接口：

```  oc
[[CloudroomVideoMeeting shareInstance] clearMeetingAttrs:@"" cookie:@""];
```

- 回调通知：

```  oc
-(void)clearMeetingAttrsRslt:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie {
    // TODO Auto-generated method stub
}
```

相关API请参考：
* [clearMeetingAttrs](Apis.md#clearMeetingAttrs)
* [notifyMeetingAttrsChanged](Apis.md#notifyMeetingAttrsChanged)



<h2 id=setUserAttr> 7.设置成员属性</h2>

- 调用接口：

```  oc
NSArray<NSString*> *uids = @[@"111", @"222"];
MeetingAttrs *attrs = [NSMutableDictionary dictionary];
[attrs setValue:@"" forKey:@""];

[[CloudroomVideoMeeting shareInstance] setUserAttrs:uids attrs:attrs options:nil cookie:@""];
```

- 回调通知：

```  oc
-(void)setUserAttrsRslt:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie {
    // TODO Auto-generated method stub
}
```

相关API请参考:
* [setUserAttrs](Apis.md#setUserAttrs)
* [getUserAttrs](Apis.md#getUserAttrs)



<h2 id=getUserAttr>8.获取当前指定成员属性</h2>

- 调用接口：

```  oc
NSArray<NSString*> *uids = @[@"111", @"222"];
NSArray<NSString*> *keys = @[@""];
[[CloudroomVideoMeeting shareInstance] getUserAttrs:uids keys:keys cookie:@""];
```

- 回调通知：


```  oc
-(void)getUserAttrsSuccess:(UsrMeetingAttrs*)attrMap cookie:(NSString *)cookie {
    // TODO Auto-generated method stub
}

-(void)getUserAttrsFail:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie {
    // TODO Auto-generated method stub
}
```

相关API请参考:
* [getUserAttrs](Apis.md#getUserAttrs)
* [setUserAttrs](Apis.md#setUserAttrs)



<h2 id=getUserSpecificAttr>9.获取当前指定成员指定属性</h2>

- 调用接口：

```  oc
NSArray<NSString*> *uids = @[@"111", @"222"];
NSArray<NSString*> *keys = @[@"name", @"companyName"];
[[CloudroomVideoMeeting shareInstance] getUserAttrs:uids keys:keys cookie:@""];
```

- 回调通知：

```  oc
-(void)getUserAttrsSuccess:(UsrMeetingAttrs*)attrMap cookie:(NSString *)cookie {
    // TODO Auto-generated method stub
}

-(void)getUserAttrsFail:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie {
    // TODO Auto-generated method stub
}
```
相关API请参考:
* [getUserAttrs](Apis.md#getUserAttrsWithKeys)
* [setUserAttrs](Apis.md#setUserAttrs)




<h2 id=addOrUpdateUserSpecificAttrs>10.添加或更新指定成员指定的属性</h2>

- 调用接口：

```  oc
NSArray<NSString*> *uids = @[@"111", @"222"];
NSMutableDictionary *attrs = [NSMutableDictionary dictionary];
[attrs setValue:@"" forKey:@"MeetingName"];
[attrs setValue:@"" forKey:@"departmentName"];
[[CloudroomVideoMeeting shareInstance] getUserAttrs:uids attrs:attrs options:nil cookie:@""];
```

- 回调通知：

```  oc
-(void)addOrUpdateUserAttrsRslt:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie {
    // TODO Auto-generated method stub
}
```

相关API请参考:
* [addOrUpdateUserAttrs](Apis.md#addOrUpdateUserAttrs)



<h2 id=delUserSpecificAttrs>11.删除指定成员的指定属性</h2>

- 调用接口：

```  oc
NSArray<NSString*> *uid = @"111";
NSArray<NSString*> *keys = @[@"name", @"companyName"];
NSMutableDictionary *options = [NSMutableDictionary dictionary];
[[CloudroomVideoMeeting shareInstance] delUserAttrs:uid keys:keys options:options cookie:@""];
```

- 回调通知：

```  oc
-(void)delUserAttrsRslt:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie {
    // TODO Auto-generated method stub
}
```
相关API请参考:
* [delUserAttrs](Apis.md#delUserAttrs)



<h2 id=clearUserSpecificAttr>12.清除当前指定成员全部属性</h2>

- 调用接口：

```  oc
NSString *uid = @"111";
NSMutableDictionary *options = [NSMutableDictionary dictionary];
[[CloudroomVideoMeeting shareInstance] clearUserAttrs:uid options:options cookie:@""];
```

- 回调通知：

```  oc
-(void)clearUserAttrsRslt:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie {
    // TODO Auto-generated method stub
}
```

相关API请参考:
* [clearUserAttrs](Apis.md#clearUserAttrs)


<h2 id=clearAllUserAttr>13.清除当前房间内所有成员全部属性</h2>

- 调用接口：

```  oc
NSMutableDictionary *options = [NSMutableDictionary dictionary];
[[CloudroomVideoMeeting shareInstance] clearAllUserAttrs:options cookie:@""];
```

- 回调通知：

```  oc
-(void)clearAllUserAttrsRslt:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie {
    // TODO Auto-generated method stub
}
```

相关API请参考:
* [clearAllUserAttrs](Apis.md#clearAllUserAttrs)
