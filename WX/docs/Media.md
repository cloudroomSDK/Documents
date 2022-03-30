---
sidebarDepth: 1
---

# 影音播放

<h2 id=introduction>功能简介</h2>

把本地的一个视频文件播放给房间内其他用户观看，播放进度完全由播放端控制。  
影音播放功能介绍分为播放端和观看端两部分。

<font color="#FF0000">注意：一个房间中同一时间只支持进行一个影音播放，小程序仅支持观看端的功能</font>

-------

小程序观看流程：

1. [组件申明](#declare)
1. [添加页面代码](#wxml)
1. [渲染组件](#render)
1. [组件销毁](#destory)

<h2 id=role_watch>小程序观看影音播放功能：</h2> 

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
<view style='width: 300rpx;height: 100rpx'>
    <!-- 组件宽高会根据父元素宽高继承 -->
    <!-- 视频拉流组件 userInfo传入成员信息，config传入配置信息，详细请参考组件文档 -->
    <CRVideoPlayer userInfo='{{mediaMemberInfo}}' config='{{CRMediaPlayer}}' wx:if='{{mediaLayout}}'></CRVideoPlayer>
</view>
```

<h3 id=render>3.收到开启通知后渲染组件</h3> 

```js
//观看端会收到开始播放影音的通知。此时渲染媒体拉流组件，即可观看影音
CR.NotifyMediaStart.callback = function(UID){
    const config = {
        type: 'media',
        objectFit: 'contain', // 填充模式，可选值有 contain，fillCrop
    }
    this.setData({
        mediaLayout: true,
        mediaMemberInfo: CR.GetMemberInfo(UID),
        CRMediaPlayer: config
    });
}
```

<h3 id=destory>4.组件销毁</h3> 

```js
//影音停止播放通知，观看端会收到此通知。
CR.NotifyMediaStop.callback = function(UID){
    this.setData({ mediaLayout: false });   //销毁组件
}

```

相关API请参考：
* [CR.GetMediaInfo](API.md#CRVideo_GetMediaInfo)
* [CR.GetMediaInfoRslt](API.md#CRVideo_GetMediaInfoRslt)
* [CR.NotifyMediaStart](API.md#CRVideo_NotifyMediaStart)
* [CR.NotifyMediaPause](API.md#CRVideo_NotifyMediaPause)
* [CR.NotifyMediaStop](API.md#CRVideo_NotifyMediaStop)

相关组件请参考：
* [CRVideoPlayer](API.md#CRVideoPlayer)

相关结构定义请参考:
* [CRVideo_MediaInfoObj](TypeDefinitions.md#CRVideo_MediaInfoObj)
