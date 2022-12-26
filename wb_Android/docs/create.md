## 1、初始化SDK

初始化是整个SDK的使用基础，通常在程序启动的时候进行初始化(init)，退出的时候进行反初始化(uninit)，整个程序的生命周期中只进行一次初始化和反初始化。

SDK内部的组件多为单例组件，整个程序中只能有一个实例

```java
// SDK初始化数据对象
SdkInitDat initDat = new SdkInitDat();
initDat.datEncType="0";
initDat.params.put("HttpDataEncrypt", "0");
initDat.params.put("VerifyHttpsCert", "0");
// 初始化SDK
CloudroomVideoSDK.getInstance().init(getApplicationContext(), initDat);
```
相关API请参考: 
- [init](/sdk/api/apis/API?platform=Android#init)

相关结构定义请参考:
- [SdkInitDat](/sdk/api/apis/TypeDefinitions?platform=Android#SdkInitDat)

## 2. 登录连接服务器

设置服务器地址，使用云屋授权账号和自定义用户编号登录
 
- 调用接口：
 ```java
// 设置服务器地址
CloudroomVideoSDK.getInstance().setServerAddr(server);

// 登录数据对象
LoginDat loginDat = new LoginDat();
// 昵称
loginDat.nickName = nickName;
// 用户ID
loginDat.privAcnt = userID;
// appID，使用开通SDK的账号
loginDat.authAcnt = appID;
// appSecret必须做MD5处理
loginDat.authPswd = appSecret;
// 执行登录操作
CloudroomVideoMgr.getInstance().login(loginDat);
 ```

- 注册回调：

```java
CloudroomVideoMgr.getInstance().registerCallback(mMgrCallback)
```

- 回调通知:
```java
// 登陆失败
@Override
public void loginFail(CRVIDEOSDK_ERR_DEF sdkErr, String cookie) {
}

// 登陆成功
@Override
public void loginSuccess(String usrID, String cookie) {
}

//掉线
@Override
public void lineOff(CRVIDEOSDK_ERR_DEF sdkErr) {
}
```

- 取消注册回调：

```java
CloudroomVideoMgr.getInstance().unregisterCallback(mMgrCallback)
```

 
相关API请参考:
- [setServerAddr](/sdk/api/apis/API?platform=Android#setServerAddr)
- [login](/sdk/api/apis/API?platform=Android#Userlogin)
- [loginFail](/sdk/api/apis/API?platform=Android#loginFail)
- [loginSuccess](/sdk/api/apis/API?platform=Android#loginSuccess)
- [lineOff](/sdk/api/apis/API?platform=Android#lineOff)
- [registerCallback](/sdk/api/apis/API?platform=Android#CloudroomVideoMgr_registerCallBack)
- [unregisterCallback](/sdk/api/apis/API?platform=Android#CloudroomVideoMgr_unregisterCallBack)

## 3. 创建房间

创建一个房间

- 调用接口：
```java
// 创建房间
CloudroomVideoMgr.getInstance().createMeeting(cookie);  
```

- 回调通知:
```java
// 创建房间成功
@Override
public void createMeetingSuccess(MeetInfo meetInfo, String cookie) {

}

// 创建房间失败
public void createMeetingFail(CRVIDEOSDK_ERR_DEF sdkErr, String cookie) {

}
```

相关API请参考:
- [createMeeting](/sdk/api/apis/API?platform=Android#createMeeting)
- [createMeetingFail](/sdk/api/apis/API?platform=Android#createMeetingFail)
- [createMeetingSuccess](/sdk/api/apis/API?platform=Android#createMeetingSuccess)

## 4. 进入房间

用创建成功的房间ID进入房间，其他用户也是利用此房间信息进入该房间。

- 调用接口：
```java
CloudroomVideoMeeting.getInstance().enterMeeting(meetInfo.ID)
```
- 注册回调：

```java
CloudroomVideoMeeting.getInstance().registerCallback(mMeetingCallback)
```

- 回调通知:
```java
@Override
public void enterMeetingRslt(CRVIDEOSDK_ERR_DEF code) {
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

```java
CloudroomVideoMeeting.getInstance().unregisterCallback(mMeetingCallback)
```
相关API请参考:
- [registerCallback](/sdk/api/apis/API?platform=Android#CloudroomVideoMeeting_registerCallBack)
- [unregisterCallback](/sdk/api/apis/API?platform=Android#CloudroomVideoMeeting_unregisterCallBack)
- [enterMeetingRslt](/sdk/api/apis/API?platform=Android#enterMeetingRslt)
- [enterMeeting](/sdk/api/apis/API?platform=Android#enterMeeting)


## 5. 在布局文件中添加白板控件

```java
<com.cloudroom.cloudroomvideosdk.BoardView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content" />
```
## 6. 创建白板

* 调用接口
```java
WhiteBoardHelper.getInstance().createWhiteBoard(1280, 720, 1,  PageMode.PageModeFullPage, extInfo)
```
* 回调通知
```java
@Override
public void notifyCreateBoard(BoardInfo desc, String opId){}
```

相关API请参考:
- [createWhiteBoard](wb_api.md#createWhiteBoard)
- [notifyCreateBoard](wb_api.md#notifyCreateBoard)

## 7. 关闭白板

* 调用接口
```java
WhiteBoardHelper.getInstance().closeBoard(id)
```
* 回调通知
```java
@Override
public void notifyCloseBoard(String wID, String opId){}
```

相关API请参考:
- [closeBoard](wb_api.md#closeBoard)
- [notifyCloseBoard](wb_api.md#notifyCloseBoard)


<h2 id=exit>8. 退出房间</h2>

```java
// 离开房间
CloudroomVideoMeeting.getInstance().exitMeeting();
```

相关API请参考:
- [exitMeeting](/sdk/api/apis/API?platform=Android#exitMeeting)

<h2 id=logout> 9. 注销登录</h2>

```java
//注销本次登录
CloudroomVideoMgr.getInstance().logout();
```

相关API请参考:
- [logout](/sdk/api/apis/API?platform=Android#logout)

## 10. 反初始化，退出SDK
执行反初始化后SDK功能不再可用。

```java
//反初始化
CloudroomVideoSDK.getInstance().unInit();
```
相关API请参考:
- [unInit](/sdk/api/apis/API?platform=Android#uninit)
