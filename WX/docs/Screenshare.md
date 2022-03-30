---
sidebarDepth: 0
--- 

# 屏幕共享 

<h2 id=introduction>功能简介</h2>

在视频会话中为了提高沟通效率，可以将自己的屏幕内容分享给其他参与方观看。还支持在屏幕上进行标注，以及授权其他参与方进行远程控制。当屏幕共享者开启标注后，控件就进入标注模式。此时，房间内所有用户都可以进行标注，并观看他人标注的内容。  
使用场景如下：
* 视频会议场景中，屏幕共享可以将讲话者本地的文件、数据、网页、PPT 等画面分享给其他与会人；
* 在线课堂场景中，屏幕共享可以将老师的课件、笔记、讲课内容等画面展示给学生观看。

<font color="#FF0000">注意：同一个房间中，不支持多人同时开启屏幕共享，小程序仅支持观看端的功能</font>

-------

小程序观看流程：

1. [组件申明](#declare)
1. [添加页面代码](#wxml)
1. [渲染组件](#render)
1. [组件销毁](#destory)

<h2 id=role_watch>小程序实现观看屏幕共享功能：</h2> 

<h3 id=declare>1.在页面配置中申明CRVideoPlayer组件</h3> 

```json
{
    "usingComponents": {
        "CRVideoPlayer": "../../utils/CRSDK/components/CRVideoPlayer/CRVideoPlayer" //声明视频拉流组件，需定位到对应目录
    }
}
```

<h3 id=wxml>2.在页面中添加CRVideoPlayer组件</h3> 

```html
<view calss="father">
    <!-- 组件宽高会根据父元素宽高继承 -->
    <!-- 视频拉流组件 userInfo传入成员信息，config传入配置信息，详细请参考组件文档 -->
    <CRVideoPlayer userInfo='{{screenMemberInfo}}' config='{{CRScreenPlayer}}' wx:if='{{mediaLayout}}'></CRVideoPlayer>
    <!-- 标注组件，有观看标注的需求可以引入该组件，标注组件需要自己调整定位属性,可参考下面的CSS代码 -->
    <CRScreenMarkV4 class="cr-mark" wx:if='{{CRMediaPlayer.type=="screen"}}' config='{{CRMediaPlayer}}'></CRScreenMarkV4>
</view>
```

```css
.father {
    width: 300rpx;
    height: 100rpx;
    position: relative;
}
.cr-mark {
    /* 以下样式使其覆盖在CRVideoPlayer组件上面 */
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}
```

<h3 id=render>3.收到开启通知后渲染组件</h3> 

```js
//观看端收到开始播放屏幕共享的通知。此时渲染媒体拉流组件，即可观看影音
CR.NotifyScreenShareStarted.callback = function(UID){
    const config = {
        type: 'screen',
        objectFit: 'contain', // 填充模式，可选值有 contain，fillCrop
    }
    this.setData({
        mediaLayout: true,
        screenMemberInfo: CR.GetMemberInfo(UID),
        CRScreenPlayer: config
    });
}
```

<h3 id=destory>4.组件销毁</h3> 

```js
//屏幕共享停止通知，观看端会收到此通知。
CR.NotifyScreenShareStopped.callback = function(UID){
    this.setData({ mediaLayout: false });   //销毁组件
}

```

相关API请参考：
* [CR.GetScreenInfo](API.md#CRVideo_GetScreenInfo)
* [CR.NotifyScreenShareStarted](API.md#CRVideo_NotifyScreenShareStarted)
* [CR.NotifyScreenShareStopped](API.md#CRVideo_NotifyScreenShareStopped)

相关组件请参考：
* [CRVideoPlayer](API.md#CRVideoPlayer)
* [CRScreenMarkV4](API.md#CRScreenMarkV4)
