## 1、初始化SDK

初始化是整个SDK的使用基础，通常在程序启动的时候进行初始化(init)，退出的时候进行反初始化(uninit)，整个程序的生命周期中只进行一次初始化和反初始化。

SDK内部的组件多为单例组件，整个程序中只能有一个实例

```Objective-C
// 初始化SDK
SdkInitDat *sdkInitData = [[SdkInitDat alloc] init];
//必须指定日志文件路径,才能产生日志文件,并能够上传
[sdkInitData setSdkDatSavePath:[PathUtil searchPathInCacheDir:@"CloudroomVideoSDK"]];
//是否在控制台显示sdk日志
[sdkInitData setShowSDKLogConsole:YES];
//默认超时时间为60s
[sdkInitData setTimeOut:60*1000];
    
CRVIDEOSDK_ERR_DEF error = [[CloudroomVideoSDK shareInstance] initSDK:sdkInitData];
    
if (error != CRVIDEOSDK_NOERR)
{
    NSLog(@"CloudroomVideoSDK init error!");
    [[CloudroomVideoSDK shareInstance] uninit];
}
```
相关API请参考: 
- [init](/sdk/api/apis/Apis?platform=iOS#initSDK)

相关结构定义请参考:
- [SdkInitDat](/sdk/api/apis/TypeDefinitions?platform=iOS#SdkInitDat)

## 2. 登录连接服务器

设置服务器地址，使用云屋授权账号和自定义用户编号登录
 
- 调用接口：
 ```Objective-C
CloudroomVideoSDK *cloudroomVideoSDK = [CloudroomVideoSDK shareInstance];
// 登录数据对象
LoginDat *loginData = [[LoginDat alloc] init];
// 昵称
[loginData setNickName:nickname];
// appID，使用开通SDK的账号
[loginData setAuthAcnt:appID];
// appSecret必须做MD5处理
[loginData setAuthPswd:md5AppSecret];
// 用户ID
[loginData setPrivAcnt:userID];
// 设置服务器地址
[cloudroomVideoSDK setServerAddr:server];
// 执行登录操作 NSString *cookie = [NSString stringWithFormat:@"%f",CFAbsoluteTimeGetCurrent()];
[cloudroomVideoMgr login:loginData cookie:cookie];
 ```

- 注册回调：

```Objective-C
[[CloudroomVideoMgr shareInstance] setMgrCallback:self];
```

- 回调通知:
```Objective-C
// 登录失败
- (void)loginFail:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie {
 
}

// 登录成功
- (void)loginSuccess:(NSString *)usrID cookie:(NSString *)cookie {

}

//sdk掉线
- (void)lineOff:(CRVIDEOSDK_ERR_DEF)sdkErr
{

}
```

- 取消注册回调：

```Objective-C
[[CloudroomVideoMgr shareInstance] removeMgrCallback:self];
```

 
相关API请参考:
- [setServerAddr](/sdk/api/apis/Apis?platform=iOS#setServerAddr)
- [login](/sdk/api/apis/Apis?platform=iOS#Userlogin)
- [loginFail](/sdk/api/apis/Apis?platform=iOS#loginFail)
- [loginSuccess](/sdk/api/apis/Apis?platform=iOS#loginSuccess)
- [lineOff](/sdk/api/apis/Apis?platform=iOS#lineOff)

## 3. 创建房间

创建一个房间

- 调用接口：
```Objective-C
// 发送"创建房间"命令
[[CloudroomVideoMgr shareInstance] createMeeting:cookie]; 
```

- 回调通知:
```Objective-C
// 创建房间成功
- (void)createMeetingSuccess:(MeetInfo *)meetInfo cookie:(NSString *)cookie
{
	
}

// 创建房间失败
- (void)createMeetingFail:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie 
{

}
```

相关API请参考:
- [createMeeting](/sdk/api/apis/Apis?platform=iOS#createMeeting)
- [createMeetingFail](/sdk/api/apis/Apis?platform=iOS#createMeetingFail)
- [createMeetingSuccess](/sdk/api/apis/Apis?platform=iOS#createMeetingSuccess)

## 4. 进入房间

用创建成功的房间ID进入房间，其他用户也是利用此房间信息进入该房间。

- 调用接口：
```Objective-C
//进入房间
CloudroomVideoMeeting *cloudroomVideoMeeting = [CloudroomVideoMeeting shareInstance];
[cloudroomVideoMeeting enterMeeting:_meetInfo.ID];
```
- 注册回调：

```Objective-C
[[CloudroomVideoMeeting shareInstance] registerMeetingCallback:self];
[self.drawerView registerWhiteBoardCallback]; // 给View注册白板回调接收消息响应
```

- 回调通知:
```Objective-C
- (void)enterMeetingRslt:(CRVIDEOSDK_ERR_DEF)code
{
  if (code == CRVIDEOSDK_NOERR) {
		 //进入房间成功
    } else if (code == CRVIDEOSDK_MEETROOMLOCKED) {
		// 房间已加锁

    } else {
		//进入房间失败

    }
}
```

- 取消注册回调

```Objective-C
[[CloudroomVideoMeeting shareInstance] removeMeetingCallBack:self];
[self.drawerView removeWhiteBoardCallBack];
```
相关API请参考:
- [enterMeetingRslt](/sdk/api/apis/Apis?platform=iOS#enterMeetingRslt)
- [enterMeeting](/sdk/api/apis/Apis?platform=iOS#enterMeeting)


## 5. 在自己的视图中添加白板控件

* 调用接口
```Objective-C
 CLBoardView *drawerView = [[CLBoardView alloc] initWithFrame:CGRectMake(0, 0, width, height)];
```
* 白板布局可以使用纯代码，也支持视图编程
* 白板View尺寸是控件尺寸，配置白板ID之后，内部会自动根据容器大小显示白板子视图内容，同时支持自动旋转，取决于你的控制器app是否支持旋转

## 6. 配置白板

* 调用接口
```Objective-C
// 配置白板权限
CLBoardViewAttr *attr = [[CLBoardViewAttr alloc] init];
attr.readOnly = NO; // 不可标注
attr.asyncPage = NO; // 是否同步页面
attr.followPage = NO; // 是否跟随页面(滑动翻页)
attr.asyncScale = NO; // 是否同步缩放
attr.followScale = NO; // 是否跟随缩放

// 一般在创建白板成功的回调以及切换白板的回调中配置
[self.drawerView  setBoardID:boardID callBack:self jsonAttr:attr]; // 给白板配置白板ID
[self.drawerView setBoardViewToolType:_currentToolType]; // 设置当前图元工具
```
* 白板权限属于本地配置行为，同步页面指多页滑动或放大后的滑动

相关API请参考:
- [setBoardID](wb_api.md#setBoardID)
- [CLBoardViewAttr](type_define.md#CLBoardViewAttr)
- [CLShapeType](const_define.md#CLShapeType)

## 7. 创建白板

* 调用接口
```Objective-C
NSMutableDictionary *exInfoDict = [NSMutableDictionary dictionary];
[exInfoDict setValue:name forKey:@"name"];
NSString *exInfo = [exInfoDict mj_JSONString];
    
[[CloudroomVideoMeeting shareInstance] createWhiteBoard:1280 h:720 pageCount:1 pageMode:exInfo:exInfo];
```
* 回调通知
```Objective-C
- (void)notifyCreateBoard:(BoardInfo *)board operatorID:(NSString *)operatorID {
    [self.drawerView  setBoardID:boardID callBack:self jsonAttr:attr]; // 给白板配置白板ID
    [self.drawerView setBoardViewToolType:_currentToolType]; // 设置当前图元工具
}
```

相关API请参考:
- [createWhiteBoard](wb_api.md#createWhiteBoard)
- [notifyCreateBoard](wb_api.md#notifyCreateBoard)

## 8. 关闭白板

* 调用接口
```Objective-C
[[CloudroomVideoMeeting shareInstance] closeBoard:boardID];
```
* 回调通知
```Objective-C
- (void)notifyCloseBoard:(BoardInfo *)board operatorID:(NSString *)operatorID {

}
```

相关API请参考:
- [closeBoard](wb_api.md#closeBoard)
- [notifyCloseBoard](wb_api.md#notifyCloseBoard)


<h2 id=exit>9. 退出房间</h2>

```Objective-C
// 离开房间
[[CloudroomVideoMeeting shareInstance] exitMeeting];
```

相关API请参考:
- [exitMeeting](/sdk/api/apis/Apis?platform=iOS#exitMeeting)

<h2 id=logout> 10. 注销登录</h2>

```Objective-C
//注销本次登录
[[CloudroomVideoMgr shareInstance] logout];
```

相关API请参考:
- [logout](/sdk/api/apis/Apis?platform=iOS#logout)

## 11. 反初始化，退出SDK
执行反初始化后SDK功能不再可用。

```Objective-C
//反初始化
[[CloudroomVideoSDK shareInstance] uninit];
```
相关API请参考:
- [unInit](/sdk/api/apis/Apis?platform=iOS#uninit)
