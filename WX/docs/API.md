# API与组件

## API
::: wx { "template": "classify", "path": "/json/api.js" }
:::


::: wx { "template": "block", "path": "/json/api.js" }
:::

## 接口详情
::: wx { "template": "desc", "path": "/json/api.js" }
:::

## 组件
### 组件说明
> 组件由多个模块组成， 主要模块包括：音频拉流组件，音视频推流组件， 媒体拉流组件，用户自定义组件。 通过集成SDK的相关控件， 让使用者进行更加快速， 高效的开发工作。开发者使用组件存在原生组件限制，请参考[小程序原生组件说明](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)

使用流程：
1. 假如您的项目是如下结构
```
─ meetingDemo                 // 云屋云会议Demo-meeting演示
   ├─ pages                      // 项目页面
   │   ├─ chat                     // 聊天页面
   │   ├─ login                    // 首页，登录页面
   │   ├─ meeting                  // 视频会议页面
   │   ├─ option                   // 选项页面
   │   └─ setting                  // 设置页面
   │
   └─ utils
      └─ RTCSDK                     // 导入SDK目录到项目中
          ├─ component
          │     ├─  RTCAudioPlayer       // 音频拉流组件(房间内所有声音由该组件输出)
          │     ├─  RTCVideoPlayer       // 媒体拉流组件(播放远端视频，屏幕共享，影音共享)
          │     ├─  RTCVideoPusher       // 视频推流组件(用于将本端的音视频推向服务端)
          │     ├─  RTCScreenMarkV4      // 屏幕共享标注组件(观看屏幕共享标注功能)
          │     ├─  RTCWhiteBoard        // 白板标注组件
          │     └─  video-custom         // 用户自定义组件(SDK升级无需更新，完全由用户定制开发)
          │
          └─ RTC_Miniapp_SDK.min.js  // SDK文件
```
2. 在(/pages/meeting/meeting.json)中引入相关组件
```json
// 可根据业务需求选择需要的组件
{
  "usingComponents": {
    "RTCVideoPlayer": "/utils/RTCSDK/components/RTCVideoPlayer/RTCVideoPlayer",
    "RTCVideoPusher": "/utils/RTCSDK/components/RTCVideoPusher/RTCVideoPusher",
    "RTCAudioPlayer": "/utils/RTCSDK/components/RTCAudioPlayer/RTCAudioPlayer",		
    "RTCScreenMarkV4": "/utils/RTCSDK/components/RTCScreenMarkV4/RTCScreenMarkV4",
    "RTCWhiteBoard": "/utils/RTCSDK/components/RTCWhiteBoard/RTCWhiteBoard",
  }
}
```
3. 在wxml需要的地方添加以下代码
```html
<!-- 音频播放组件 -->
<RTCAudioPlayer wx:if='{{RTCAudioPlayerConfig}}' config='{{RTCAudioPlayer}}' debug='{{false}}'></RTCAudioPlayer>

<!-- 音视频推流组件 -->
<RTCVideoPusher wx:if='{{myUserInfo}}' userInfo='{{myUserInfo}}' config='{{RTCVideoPusherConfig}}' debug='{{false}}' extend='{{RTCVideoPusherExtend}}' ></RTCVideoPusher>

<!-- 视频播放组件 -->
<RTCVideoPlayer wx:if='{{remoteUserInfo}}' userInfo='{{remoteUserInfo}}' config='{{RTCVideoPlayerConfig}}' debug='{{false}}' extend='{{RTCVideoPlayerExtend}}'></RTCVideoPlayer>
```
4. 在JS中控制属性值
```javascript
//以下操作需要进入房间成功后操作

//---------------------音频操作---------------------
const RTCAudioPlayerConfig = {
    soundMode: 'speaker', // 声音输出方式，有效值为 speaker（扬声器）、ear（听筒）
    autoPauseIfNavigate: false, // 当跳转到其它小程序页面时，是否自动暂停本页面的实时音视频播放
    autoPauseIfOpenNative: false, // 当跳转到其它微信原生页面时，是否自动暂停本页面的实时音视频播放
}
this.setData({RTCAudioPlayerConfig});

//---------------------音视频推流---------------------
const RTCVideoPusherConfig = {
    orientation: 'vertical', // vertical，horizontal,
    aspect: '3:4', // 宽高比，可选值有 3:4, 9:16
    beauty: 5, // 美颜，取值范围 0-9 ，0 表示关闭
    whiteness: 5, // 美白，取值范围 0-9 ，0 表示关闭
    devicePosition: 'front', // 前置或后置，值为front, back,此属性不支持动态修改，如需切换摄像头请调用api
    muted: false,  // 默认静音
    enableCamera: true,  // 默认打开摄像头
    localMirror: 'auto', // 控制本地预览画面是否镜像,"auto"(默认值，前置摄像头镜像，后置摄像头不镜像)、"enable"(前后置摄像头均镜像)、"disable"(前后置摄像头均不镜像)
    remoteMirror: false, // 设置推流的画面是否镜像
    minBitrate: 100, //	最小码率
    maxBitrate: 800, // 最大码率
    waitingImage: 'http://www.cloudroom.com/pages/imgs/cr_meeting/be_closed.jpg', // 进入后台时推流的等待画面
}
const RTCVideoPusherExtend = {}; //用户扩展对象，将会传入video-custom组件中
const myUID = 'wx_myuid';   //假设自己的UID
const myUserInfo = RTCSDK.GetMemberInfo(myUID); //查询到自己的用户成员信息
this.setData({myUserInfo, RTCVideoPusherConfig ,RTCVideoPusherExtend}); //渲染字段

//---------------------媒体拉流组件---------------------
const RTCVideoPlayerConfig = {
    type: 'video', // 媒体类型,可取值 video,screen,media
    orientation: 'vertical', // 画面方向，可选值有 vertical，horizontal	
    objectFit: 'fillCrop', // 填充模式，可选值有 contain，fillCrop	
    autoPauseIfNavigate: true, // 当跳转到其它小程序页面时，是否自动暂停本页面的实时音视频播放
    autoPauseIfOpenNative: true, // 当跳转到其它微信原生页面时，是否自动暂停本页面的实时音视频播放
}
const RTCVideoPlayerExtend = {} //用户扩展对象，将会传入video-custom组件中

const remoteUID = 'remote_uid';   //假设已知对端的UID
const remoteUIDUserInfo = RTCSDK.GetMemberInfo(remoteUID); //查询到自己的用户成员信息

this.setData({remoteUIDUserInfo, RTCVideoPlayerConfig ,RTCVideoPlayerExtend}); //渲染字段
```
5. 以上已经配置了一个简单并且可正常渲染出本端视频，房间音频以及远端视频的配置，更详细可参考下方文档说明。

### 音频拉流组件 ${#RTCAudioPlayer}
#### `<RTCAudioPlayer>`
> 音频拉流组件集成了房间内的声音，他人视频，屏幕共享，媒体共享的声音都需要引入该组件输出

wxml属性: 

|属性 | 必填 | 类型 | 说明 |
|----- | ----- | ----- |  ----- |
|wx:if| 是 | boolean | 音频拉流组件必须等到入会成功后渲染 |
|config| 是 | object | 音频配置对象，参考下方 |
|debug| 否 | boolean | 开启调式需要父盒子有足够大小高宽用于渲染组件 |
|bindstatechange| 否 | function | 监听live-player组件的statechange事件，在参数event.detail中包含播放状态 |
|bindnetstatus| 否 | function | 监听live-player组件的netstatus事件，在参数event.detail中包含网络状态 |

音频配置对象: 
| 参数 | 动态改变 | 类型  |说明 |
|----- | ----- |  ----- |----- |
|soundMode| 支持  | string |speaker(默认),ear,扬声器输出或者听筒输出|
|autoPauseIfNavigate| 支持 | boolean  | 默认值false,当跳转到其它小程序页面时，是否自动暂停本页面的实时音视频播放 |
|autoPauseIfOpenNative| 支持 | boolean  | 默认值true,当跳转到其它微信原生页面时，是否自动暂停本页面的实时音视频播放 |

实现动态改变推荐使用：
```javascript
this.setData('RTCAudioPlayerConfig.soundMode': 'ear'); //更改声音为听筒输出
```
### 音视频推流组件 ${#RTCVideoPusher}
#### `<RTCVideoPusher>`
> 音视频推流组件是将自己的视频画面、麦克风声音上送给服务器的组件。开发者需要注意的是如果客户端关闭了麦克风、摄像头权限会通过API形式回调给业务，由业务处理

wxml属性: 
|属性 | 必填 | 类型 | 说明 |
|----- | ----- | ----- |  ----- |
|wx:if| 是 | boolean | 音视频推流组件需要传入userInfo和config之后渲染 |
|userInfo| 是 | object | 传入成员信息，可通过[GetMemberInfo](#CRVideo_GetMemberInfo)或者[GetAllMembers](#CRVideo_GetAllMembers)获取 |
|config| 是 | object | 推流配置对象,参考下方 |
|extend| 否 | object | 用户扩展对象，值将会传入video-custom组件 |
|debug| 否 | boolean | 开启调式 |
|bindstatechange| 否 | function | 监听live-pusher组件的statechange事件，在参数event.detail中包含状态变化 |
|bindnetstatus| 否 | function | 监听live-pusher组件的netstatus事件，在参数event.detail中包含网络状态 |
|binderror| 否 | function | 监听live-pusher组件的error事件，在参数event.detail中包含渲染错误信息 |

推流配置对象: 
| 参数 | 动态改变 | 类型  | 说明 |
| ----- | ----- | ----- | ----- |
|orientation| 支持  | string | 画面方向，可选值: "vertical"(默认)、"horizontal"|
|aspect| 支持  | string | 宽高比，可选值有"3:4"(默认),"9:16"|
|beauty| 支持  | number | 美颜，取值范围 0-9 ，0 表示关闭 ，默认值5|
|whiteness| 支持  | number | 美白，取值范围 0-9 ，0 表示关闭 ，默认值5|
|devicePosition| 不支持  | string |初始化使用前置或后置摄像头，值为"front"(默认), "back",如需切换摄像头请调用API|
|minBitrate| 支持  | number |最小码率,100的倍数，默认值100|
|maxBitrate| 支持  | number |最大码率,100的倍数，默认值800|
|audioVolumeType| 支持  | string |"media"(默认)媒体音量、"voicecall"(通话音量)，此修改将影响全局的音量设置|
|waitingImage| 支持  | string |进入后台时推流的等待画面，填入完整URL或者绝对地址|
|localMirror| 支持  | string |控制本地预览画面是否镜像,可选值："auto"(默认值，前置摄像头镜像，后置摄像头不镜像)、"enable"(前后置摄像头均镜像)、"disable"(前后置摄像头均不镜像)|
|remoteMirror| 支持  | boolean |设置推流画面是否镜像,默认值false|
|zIndex| 支持  | number |层级属性，2.9.3以上小程序基础库支持|
|enableCamera| 不支持  | boolean |打开摄像头，如需开关摄像头请调用API,默认值true|
|muted| 不支持  | boolean |是否静音，如需开关麦克风请调用API,默认值false|

实现动态改变推荐使用：
```javascript
this.setData('RTCVideoPusherConfig.beauty': 0); //只改变对象某一属性，关闭美颜效果
this.setData('RTCVideoPusherConfig.whiteness': 0); //只改变对象某一属性，关闭美白效果
```

组件方法：

**snapshot(quality,returnBase64)**
- **功能**： 拍照
- **参数**:  
    * quality ---- 图片的质量，默认原图,基础库 2.10.0 开始支持。有效值为 raw、compressed
    * returnBase64 ---- 是否在结果中返回base64数据(boolean)
- **返回值**:  Promise对象


### 媒体拉流组件 ${#RTCVideoPlayer}
#### `<RTCVideoPlayer>`
> 媒体拉流组件是将他人视频、屏幕共享、影音共享UI显示组件，开发者需要注意原生组件限制。

wxml属性: 
|属性 | 必填 | 类型 | 说明 |
|----- | ----- | ----- |  ----- |
|wx:if| 是 | boolean | 媒体拉流组件需要传入userInfo和config之后渲染 |
|userInfo| 是 | object | 传入成员信息，可通过[GetMemberInfo](#CRVideo_GetMemberInfo)或者[GetAllMembers](#CRVideo_GetAllMembers)获取 |
|config| 是 | object | 媒体拉流配置对象,参考下方 |
|extend| 否 | object | 用户扩展对象，值将会传入video-custom组件 |
|debug| 否 | boolean | 开启调式 |
|bindstatechange| 否 | function | 监听live-player组件的statechange事件，在参数event.detail中包含userId、type及播放状态 |
|bindnetstatus| 否 | function | 监听live-player组件的netstatus事件，在参数event.detail中包含userId、type及网络状态 |

媒体拉流配置对象：
| 参数 | 动态改变 | 类型  | 说明 |
| ----- | ----- | ----- | ----- |
|type| 支持  | string | 媒体类型,可取值 "video"(默认),"screen","media"|
|camId| 不支持  | number | 观看用户的某个摄像头。默认值-1,观看用户的默认摄像头。媒体类型为 "video" 时有效。|
|orientation| 支持  | string | 画面方向，可选值: "vertical"(默认)、"horizontal"|
|objectFit| 支持  | string | 填充模式，可选值有 "fillCrop"(默认)、"contain"|
|autoPauseIfNavigate| 支持 | boolean  | 当跳转到其它小程序页面时，是否自动暂停本页面的实时音视频播放,默认值false|
|autoPauseIfOpenNative| 支持 | boolean  | 当跳转到其它微信原生页面时，是否自动暂停本页面的实时音视频播放,默认值true |
|zIndex| 支持  | number |层级属性，2.9.3以上小程序基础库支持|


组件方法：

**snapshot(quality,returnBase64)**
- **功能**： 拍照
- **参数**:  
    * quality ---- 图片的质量，默认原图,基础库 2.10.0 开始支持。有效值为 raw、compressed
    * returnBase64 ---- 是否在结果中返回base64数据(boolean)
- **返回值**:  Promise对象

### 屏幕共享标注组件
#### `<RTCScreenMarkV4>`
> 屏幕共享标注组件需要房间内已开启了屏幕共享并且源端开启了屏幕共享标注才会正常工作的组件，用于观看其他端的画笔标注
> 开发者需要注意以下事项：
> 1. 当前组件仅支持观看其他端绘制画笔。
> 1. 由于覆盖在原生组件之上，请您务必阅读[小程序原生组件说明](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)
> 1. 部分机型首次渲染画笔慢是小程序提供的截图能力缓慢，并不是SDK造成的。

wxml属性: 
|属性 | 必填 | 类型 | 说明 |
|----- | ----- | ----- |  ----- |
|config| 是 | object | 与RTCVideoPlayer组件的config属性保持一致 |

### 白板标注组件
#### `<RTCWhiteBoard>`
> 白板
> 开发者需要注意以下事项：
> 1. 白板底层采用小程序canvas2D技术开发
> 1. 由于覆盖在原生组件之上，请您务必阅读[小程序原生组件说明](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)

wxml属性: 
|属性 | 必填 | 类型 | 说明 |
|----- | ----- | ----- |  ----- |
|config| 是 | object | 白板配置对象，参考下方 |
|bind:UndoEnableChange| 否 | function | 通知画笔撤销的状态是否可用 |
|bind:RedoEnableChange| 否 | function | 通知画笔恢复的状态是否可用 |
|readOnly| 否 | boolean | 只读，默认值为false,修改后将不可抒写，支持动态修改 |

白板配置对象：
| 参数 | 动态改变 | 类型  | 说明 |
| ----- | ----- | ----- | ----- |
|boardId| 支持  | string | 白板ID |
|rotate| 支持  | number | 旋转角度，支持0、90、180、270度旋转 |
|curPageNo| 支持  | number | 需要查看的页码 |
|zIndex| 支持  | number | 白板层级 |
|penColor| 支持  | string | 画笔颜色 |
|penWidth| 支持  | number | 画笔线宽 |
|backgroundColor| 支持  | string | 前景色，默认白色 |
|canvasColor| 支持  | number | 底色，超出白板范围的颜色，默认值: "#555" |

组件方法：

**undo()**
- **功能**： 撤回画笔
- **参数**:  
   无
- **返回值**:  无

**redo()**
- **功能**： 恢复画笔
- **参数**:  
   无
- **返回值**:  无

**clear()**
- **功能**： 清空所有画笔
- **参数**:  
   无
- **返回值**:  无

**canvasToPhoto()**
- **功能**： 保存图片至微信临时文件
- **参数**:  
   无
- **返回值**:  Promise

**importImg(path)**
- **功能**： 添加背景图
- **参数**:  
    * path ---- 图片地址，支持在线地址、小程序包内绝对地址、小程序缓存地址
- **返回值**:  无


### 用户自定义组件
#### `<video-custom>`
> 假如需要在视频之上加入一段文字或者一张图片，您可以使用该组件，SDK包提供使用样例。
> 开发者需要注意以下事项：
> 1. 该组件由开发者开发维护，不随SDK版本升级。
> 1. 由于覆盖在原生组件之上，请您务必阅读[小程序原生组件说明](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)
> 1. 仅有RTCVideoPlayer、RTCVideoPusher包含该组件

* 组件含有派生属性，请用observers监听下列值

|属性| 类型 | 说明 |
|----- | ----- | ----- |
|userInfo | object | 传入的成员信息 |
|extend | object | 传入的扩展属性 |

* 组件内可调用父组件方法，可以调用如下方法

|事件名称|参数| 说明 |
| ----- | ----- | ----- | 
|fullScreen | 旋转度数 | 全屏事件，取值0、90、-90 |
|exitFullScreen | 无 | 退出全屏 |

调用父组件方法：
```javascript
//video-custom.js

this.triggerEvent('fullScreen', 90);    //触发RTCVideoPlayer、RTCVideoPusher全屏并且旋转90度事件

this.triggerEvent('exitFullScreen');    //触发RTCVideoPlayer、RTCVideoPusher退出全屏事件
```

