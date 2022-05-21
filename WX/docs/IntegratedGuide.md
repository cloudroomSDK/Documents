# 实现音视频通话

## 简要说明

- 学习本章节前，前务必阅读完[准备工作](beforeDevelop.md)章节

- 通篇将SDK文件引入定义为"RTCSDK"

- 代码部分均为 js 代码，详细代码请参考SDK包里的demo。

## 创建第一个小程序

### 开发工具选择
预览编译上传代码必须使用微信开发者工具，用户可根据个人习惯选择开发工具进行代码编写。

### 首次创建项目
 1. 创建一个小程序项目需要填入小程序时的AppId，请勿使用测试号
 1. 导入SDK包中的CRSDK文件夹
 1. 在app.js中导入SDK文件，即 RTC_Miniapp_SDK.min.js,可使用import或者require导入
 1. 在global.CR中赋值为SDK文件(该步骤可以省略,若省略需要开发者在SDK组件中导入相应的SDK)  

```js
    //app.js
    const RTCSDK = require('./utils/RTCSDK/RTC_Miniapp_SDK.min.js');
    global.RTCSDK = RTCSDK;
```

## 基本步骤

### 1. 初始化SDK ${#Init}

> 初始化是整个SDK的使用基础，通常在程序启动的时候进行初始化([Init](API.md#CRVideo_Init))，  
退出后进行反初始化([UnInit](API.md#CRVideo_UnInit))，整个程序的生命周期中只进行一次初始化和反初始化。

```js
    const sdkErr = RTCSDK.Init(); //初始化SDK,返回状态码
    if (sdkErr === 0) {
        console.log('初始化成功');
        // 可以继续设置服务器及登录操作
    } else {
        console.log(`初始化失败,错误码：${sdkErr}}`);
    }
```
相关API请参考:
* [Init](API.md#CRVideo_Init)

### 2. 登录服务器 ${#Login}

> 设置视频服务器地址，然后使用appID和md5加密后的appSecret登录。[(获取App ID及App Secret)](beforeDevelop.md#getappid)

- 调用接口：

```js
    //设置服务器地址，如果使用云服务时填sdk.cloudroom.com
    //使用私有化部署的服务器时要填部署的服务器地址；此处以云服务为例。
    RTCSDK.SetServerAddr('sdk.cloudroom.com');

    //登录接口,推荐使用Token鉴权机制登录，参考LoginByToken接口
    RTCSDK.Login(AppID, md5(AppSecret), nickName, UID);
```

- 回调通知：

```js
//登录成功
CRVideo_LoginSuccess.callback = (userID,cookie) => {
   //登录成功，开始创建房间，见 第3步
}

//登录失败
CRVideo_LoginFail.callback = (sdkErr,cookie) => {
   //登录出错，可以弹出错误提示，或调用登录接口再次重试登录
}

//登录掉线
CRVideo_LineOff.callback = sdkErr => {

}
```
 相关API请参考:
* [SetServerAddr](API.md#CRVideo_SetServerAddr)
* [Login](API.md#CRVideo_Login)
* [Logout](API.md#CRVideo_Logout)
* [LoginByToken](API.md#CRVideo_LoginByToken)
* [UpdateToken](API.md#CRVideo_UpdateToken)
* [LoginSuccess](API.md#CRVideo_LoginSuccess)
* [LoginFail](API.md#CRVideo_LoginFail)
* [LineOff](API.md#CRVideo_LineOff)


### 3. 创建房间 ${#CreateMeeting}

- 调用接口：

```js
//创建房间
RTCSDK.CreateMeeting()
```

- 回调通知：


```js
//创建房间成功
RTCSDK.CreateMeetingSuccess.callback = (meetObj,cookie) => {
    //创建成功，可以进入房间
}
//创建房间失败
RTCSDK.CreateMeetingFail.callback = (sdkErr,cookie) => {
    //创建失败，可以弹出错误提示，不能再执行 进入房间
}
```

 相关API请参考:
* [CreateMeeting](API.md#CRVideo_CreateMeeting)
* [CreateMeetingSuccess](API.md#CRVideo_CreateMeetingSuccess)
* [CreateMeetingFail](API.md#CRVideo_CreateMeetingFail)


### 4. 进入房间 ${#EnterMeeting}

> 用创建成功的房间信息（房间ID）进入房间，其他用户也是利用此房间信息进入该房间。

- 调用接口：

```js
//进入房间
RTCSDK.EnterMeeting2(meetID, UID, nickName, cookie);
```

- 回调通知：

```js
//进入房间完成响应
RTCSDK.EnterMeetingRslt.callback = (sdkErr, cookie) => {
    if(sdkErr === 0){
        console.log("进入房间成功，可以继续下面第5步……");
    }else{
        console.log(`进入房间失败，错误码：${sdkErr}`);
    }
}
//监控房间掉线
RTCSDK.MeetingDropped.callback = () => {
    //可重新进入会议
}
```

相关API请参考:
*  [EnterMeeting2](API.md#CRVideo_EnterMeeting2)
*  [EnterMeetingRslt](API.md#CRVideo_EnterMeetingRslt)
*  [MeetingDropped](API.md#CRVideo_MeetingDropped)


### 5. 打开麦克风/摄像头/房间声音 ${#Open}

> 紧接第4步，进入房间成功后，可以进行跳转页面操作，导入推流拉流组件，以便本地、远端显示自己的视频图像  
CRVideoPusher 是本地视频、麦克风推流组件  
CRAudioPlayer 是会议内音频拉流组件，会议内成员的麦克风声音通过该组件输出

* json代码
```json
    {
        "usingComponents": {
            "RTCVideoPusher": "/utils/RTCSDK/components/RTCVideoPusher/RTCVideoPusher",    //声明音视频推流组件，需定位到对应目录
            "RTCAudioPlayer": "/utils/RTCSDK/components/RTCAudioPlayer/RTCAudioPlayer",    //声明音频拉流组件，需定位到对应目录
        }
    }
```

* wxml代码
```html
<view style='width: 300rpx;height: 100rpx'>
    <!-- 组件宽高会根据父元素宽高继承 -->
    <!-- 音视频推流组件 userInfo传入成员信息，config传入配置信息，debug是否开启调式，详细请参考组件文档 -->
    <RTCVideoPusher userInfo='{{myUserInfo}}' config='{{RTCVideoPusher}}' wx:if='{{myUserInfo}}' debug='{{true}}'></RTCVideoPusher>
</view>

<!-- 音频拉流组件 -->
<RTCAudioPlayer config='{{RTCAudioPlayer}}' debug='{{false}}' wx:if='{{RTCAudioPlayer}}'></RTCAudioPlayer>
```

* javascript代码
```js
    //音视频推流组件
    const RTCVideoPusher = {
        orientation: 'vertical', // vertical,horizontal,
        aspect: '3:4', // 宽高比，可选值有 3:4, 9:16
        beauty: 0, // 美颜，取值范围 0-9 ，0 表示关闭
        whiteness: 0, // 美白，取值范围 0-9 ，0 表示关闭
        devicePosition: 'front', // 前置或后置，值为front, back, 此属性不支持动态修改，如需切换摄像头请调用api
        muted: false, //默认静音,此属性不支持动态修改，如需开关麦克风请调用api
        enableCamera: true, //默认打开摄像头,此属性不支持动态修改，如需开关摄像头请调用api
        minBitrate: 200, //	最小码率
        maxBitrate: 800, // 最大码率
    }
    this.setData({RTCVideoPusher}); //将配置渲染到页面，后续会传入SDK组件

    const myUID = 'wx_10086'   //已知自己的UID
    const allMembers = RTCSDK.GetAllMembers(); // 查询到会议内所有会议成员

    let myUserInfo = allMembers.find(item => item.userID === myUID);  //在所有成员里查找到自己的成员信息
    myUserInfo = RTCSDK.GetMemberInfo(myUID); // 也可以通过GetMemberInfo获取到自己的成员信息

    this.setData({myUserInfo}); //将 myUserInfo 渲染为到页面，即可打开麦克风、摄像头设备

    //-----------------分割线-------------

    //音频拉流组件
    const RTCAudioPlayer = {
        soundMode: 'speaker', // 声音输出方式，有效值为 speaker（扬声器）、ear（听筒）
        autoPauseIfNavigate: false, // 当跳转到其它小程序页面时，是否自动暂停本页面的实时音视频播放
        autoPauseIfOpenNative: false, // 当跳转到其它微信原生页面时，是否自动暂停本页面的实时音视频播放
    }
    this.setData({RTCAudioPlayer}); //将配置渲染到页面，后续会传入SDK组件

```

 相关API请参考：
* [GetMemberInfo](API.md#CRVideo_GetMemberInfo)
* [GetAllMembers](API.md#CRVideo_GetAllMembers)
* [OpenVideo](API.md#CRVideo_OpenVideo)
* [CloseVideo](API.md#CRVideo_CloseVideo)
* [GetDefaultVideo](API.md#CRVideo_GetDefaultVideo)
* [SetDefaultVideo](API.md#CRVideo_SetDefaultVideo)

### 6. 观看他人视频 ${#Watch}

> 成功进入房间后，查询他人的成员信息并setData到SDK组件观看他人视频图像

* json代码
```json
    {
        "usingComponents": {
            "RTCVideoPlayer": "/utils/RTCSDK/components/RTCVideoPlayer/RTCVideoPlayer" //声明视频拉流组件，需定位到对应目录
        }
    }
```

```js
    //视频播放组件默认配置,通过修改data，组件实施更新
    const RTCVideoPlayer = {
        orientation: 'vertical', // 画面方向，可选值有 vertical，horizontal	
        objectFit: 'fillCrop', // 填充模式，可选值有 contain，fillCrop	
        autoPauseIfNavigate: true, // 当跳转到其它小程序页面时，是否自动暂停本页面的实时音视频播放
        autoPauseIfOpenNative: true, // 当跳转到其它微信原生页面时，是否自动暂停本页面的实时音视频播放
    }
    this.setData({RTCVideoPlayer});  //配置


	//他人UID可通过CRVideo_GetAllMembers获取，或集成方业务逻辑确定
	const otherUserInfo = RTCSDK.GetMemberInfo(UID); // 可以通过GetMemberInfo获取到自己的成员信息
    this.setData({otherUserInfo}); //将 myUserInfo 渲染为到页面，即可打开麦克风、摄像头设备

```

* wxml代码
```html
<view style='width: 300rpx;height: 100rpx'>
    <!-- 组件宽高会根据父元素宽高继承 -->
    <!-- 视频拉流组件 userInfo传入成员信息，config传入配置信息，debug是否开启调式，详细请参考组件文档 -->
    <RTCVideoPlayer userInfo='{{otherUserInfo}}' config='{{RTCVideoPlayer}}' wx:if='{{otherUserInfo}}' debug='{{true}}'></RTCVideoPlayer>
</view>

```


### 7. 退出房间 ${#ExitMeeting}

```js
//退出房间
RTCSDK.ExitMeeting()
```
相关API请参考:
* [ExitMeeting](API.md#CRVideo_ExitMeeting)


### 8. 注销登录 ${#Logout}

 ```js
//注销本次登录
RTCSDK.Logout()
```
 相关API请参考:
* [Logout](API.md#CRVideo_Logout)


### 9. 反初始化,退出SDK ${#UnInit}

 执行反初始化后SDK功能不再可用。

```js
//反初始化
RTCSDK.UnInit();
```

 相关API请参考:
* [UnInit](API.md#CRVideo_UnInit)



