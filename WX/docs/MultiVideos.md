
# 多方视频通话

## 功能介绍

多方视频通话时，根据当前业务场景合理设置视频编码参数，可以在较低的带宽占用下实现流畅清晰的音视频沟通，下面将针对几种常见场景进行介绍。


<h2 id=one> 1.一对一</h2>

- 画中画布局示例图:

视频通话中，画中画布局指视频图像布局上有重叠。只需控制ui组件的父盒子z-index属性即可

![画中画布局示例图](./images/layout_overlap.jpg)

常用于如双人视频聊天场景，双方通常都希望看到对方比较清晰的视频，此时可以使用较高的视频编码分辨率，比如720P或480P。


- 示例代码：
```json
//在json中声明SDK组件，需定位到对应目录
{
    "usingComponents": {
        "RTCVideoPlayer": "/utils/RTCSDK/components/RTCVideoPlayer/RTCVideoPlayer",
        "RTCVideoPusher": "/utils/RTCSDK/components/RTCVideoPusher/RTCVideoPusher",
        "RTCAudioPlayer": "/utils/RTCSDK/components/RTCAudioPlayer/RTCAudioPlayer",
    }
}
```

```html
<!--wxml代码-->
<view class="father">
    <!-- 组件宽高会根据父元素宽高继承 -->
    <!-- 音视频推流组件 userInfo传入成员信息，config传入配置信息，debug是否开启调式，详细请参考组件文档 -->
    <RTCVideoPusher class="video-pusher" userInfo='{{myUserInfo}}' config='{{RTCVideoPusher}}' wx:if='{{myUserInfo}}'></RTCVideoPusher>
    <RTCVideoPlayer class="video-player" userInfo='{{otherUserInfo}}' config='{{RTCVideoPlayer}}' wx:if='{{otherUserInfo}}'></RTCVideoPlayer>
</view>

<!-- 音频拉流组件 -->
<RTCAudioPlayer config='{{RTCAudioPlayer}}' wx:if='{{RTCAudioPlayer}}'></RTCAudioPlayer>
```

```css
.father {
    width: 100vw;
    height: 100vh;
    position: relative;
}
.father .video-pusher {
    position: absolute;
    z-index: 2;
    bottom: 0;
    right: 0;
    width: 234rpx;/*  宽高比为9：16 */
    height: 416rpx;
}
.father .video-player {
    width: 100%;
    height: 100%;
}
```

```js
//js部分：
//音视频推流组件配置
const RTCVideoPusher = {
    aspect: '9:16', // 宽高比，可选值有 3:4, 9:16
    muted: false, //默认静音,此属性不支持动态修改，如需开关麦克风请调用api
    enableCamera: true, //默认打开摄像头,此属性不支持动态修改，如需开关摄像头请调用api
}

//视频拉流组件配置
const RTCVideoPlayer = {
    objectFit: 'fillCrop', // 填充模式，可选值有 contain，fillCrop	
}

//音频拉流组件
const RTCAudioPlayer = {
    soundMode: 'speaker', // 声音输出方式，有效值为 speaker（扬声器）、ear（听筒）
    autoPauseIfNavigate: false, // 当跳转到其它小程序页面时，是否自动暂停本页面的实时音视频播放
    autoPauseIfOpenNative: false, // 当跳转到其它微信原生页面时，是否自动暂停本页面的实时音视频播放
}

this.setData({
    myUserInfo: RTCSDK.GetMemberInfo(myUID),
    RTCVideoPusher,
    otherUserInfo: RTCSDK.GetMemberInfo(otherUID),
    RTCVideoPlayer,
    RTCAudioPlayer
});

```

相关组件请参考：
* [RTCVideoPusher](API.md#RTCVideoPusher)
* [RTCVideoPlayer](API.md#RTCVideoPlayer)
* [RTCAudioPlayer](API.md#RTCAudioPlayer)


<h2 id=more> 2.多方视频</h2>

- 多方视频示例图：

![多方视频示例图](./images/five.jpg)

常用于在线教育场景，老师的视频画面比较大，可以使用较高的分辨率比如720P，下面学生的视频画面比较小，应采用较低的视频编码分辨率，比如360P或256P。


- 示例代码：

```json
//在json中声明SDK组件，需定位到对应目录
{
    "usingComponents": {
        "RTCVideoPlayer": "/utils/RTCSDK/components/RTCVideoPlayer/RTCVideoPlayer",
        "RTCVideoPusher": "/utils/RTCSDK/components/RTCVideoPusher/RTCVideoPusher",
        "RTCAudioPlayer": "/utils/RTCSDK/components/RTCAudioPlayer/RTCAudioPlayer",
    }
}
```

```html
<!-- wxml代码 -->
<view class='father'>
    <view wx:for='{{list}}' wx:key='userID' class='video {{item.mainVideo ? "mainVideo":""}}'>
        <!-- 组件宽高会根据父元素宽高继承 -->
        <!-- 音视频推流组件 userInfo传入成员信息，config传入配置信息，debug是否开启调式，详细请参考组件文档 -->
        <RTCVideoPusher wx:if='{{myUID === item.userID}}' userInfo='{{item}}' config='{{RTCVideoPusher}}'></RTCVideoPusher>
        <RTCVideoPlayer wx:else userInfo='{{item}}' config='{{RTCVideoPlayer}}'></RTCVideoPlayer>
    </view>
    
    <!-- 音频拉流组件 -->
    <RTCAudioPlayer config='{{RTCAudioPlayer}}' wx:if='{{RTCAudioPlayer}}'></RTCAudioPlayer>
</view>
```

```css
/* css代码 */
.father {
  padding-top: 75vh;
  position: relative;
}
.father .video {
  float: left;
  width: 33.333%;
  height: 25vh;
}
.father .video.mainVideo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 75vh;
}
```

```js
//js代码部分：
let list = [];
RTCSDK.GetAllMembers().forEach(member => {
    //假设老师的userID为teacher,需要放入指定的盒子
    if (member.userID === 'teacher') {
        member.mainVideo = true;
    } 
    list.push(member);
});

const RTCVideoPusher = {
    aspect: '9:16', // 宽高比，可选值有 3:4, 9:16
    muted: false, //默认静音,此属性不支持动态修改，如需开关麦克风请调用api
    enableCamera: true, //默认打开摄像头,此属性不支持动态修改，如需开关摄像头请调用api
}

//视频拉流组件配置
const RTCVideoPlayer = {
    objectFit: 'fillCrop', // 填充模式，可选值有 contain，fillCrop	
}

//音频拉流组件
const RTCAudioPlayer = {
    soundMode: 'speaker', // 声音输出方式，有效值为 speaker（扬声器）、ear（听筒）
}

this.setData({
    myUID: 'xxxxx', //假设自己的UID
    RTCVideoPusher,
    RTCVideoPlayer,
    RTCAudioPlayer,
    list,
});
``` 

相关API请参考：
* [GetAllMembers](API.md#CRVideo_GetAllMembers)

相关结构定义请参考：
* [CRVideo_MemberInfo](TypeDefinitions.md#CRVideo_MemberInfo)

相关组件请参考：
* [RTCVideoPusher](API.md#RTCVideoPusher)
* [RTCVideoPlayer](API.md#RTCVideoPlayer)
* [RTCAudioPlayer](API.md#RTCAudioPlayer)