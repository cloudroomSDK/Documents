# 影音播放

## 功能介绍

把一个本地视频文件、或网络流媒体播放给房间内其他用户观看，支持暂停、设置放位置等；</br>
支持的影音文件格式有： mov、rmvb、rm、flv、mp4、3gp、mp3、wav等市面上常见格式；支持http、rtmp、rtsp网络流媒体；</br>
<font color="#FF0000">注意：一个房间中同一时间只支持进行一个影音播放，小程序仅支持观看端的功能</font>

<h2 id=role_watch>观看影音播放</h2> 

<h3 id=declare>1.在页面配置中申明RTCVideoPlayer组件</h3> 

```json
{
    "usingComponents": {
        "RTCVideoPlayer": "/utils/RTCSDK/components/RTCVideoPlayer/RTCVideoPlayer",//声明视频拉流组件，需定位到对应目录
    }
}
```

<h3 id=wxml>2.在页面中添加RTCVideoPlayer组件</h3> 

```html
<view style='width: 300rpx;height: 100rpx'>
    <!-- 组件宽高会根据父元素宽高继承 -->
    <!-- 视频拉流组件 userInfo传入成员信息，config传入配置信息，详细请参考组件文档 -->
    <RTCVideoPlayer userInfo='{{mediaMemberInfo}}' config='{{CRMediaPlayer}}' wx:if='{{mediaLayout}}'></RTCVideoPlayer>
</view>
```

<h3 id=render>3.收到开启通知后渲染组件</h3> 

```js
//观看端会收到开始播放影音的通知。此时渲染媒体拉流组件，即可观看影音
RTCSDK.NotifyMediaStart.callback = function(UID){
    const config = {
        type: 'media',
        objectFit: 'contain', // 填充模式，可选值有 contain，fillCrop
    }
    this.setData({
        mediaLayout: true,
        mediaMemberInfo: RTCSDK.GetMemberInfo(UID),
        CRMediaPlayer: config
    });
}
```

<h3 id=destory>4.组件销毁</h3> 

```js
//影音停止播放通知，观看端会收到此通知。
RTCSDK.NotifyMediaStop.callback = function(UID){
    this.setData({ mediaLayout: false });   //销毁组件
}

```

相关API请参考：
* [GetMediaInfo](API.md#CRVideo_GetMediaInfo)
* [GetMediaInfoRslt](API.md#CRVideo_GetMediaInfoRslt)
* [NotifyMediaStart](API.md#CRVideo_NotifyMediaStart)
* [NotifyMediaPause](API.md#CRVideo_NotifyMediaPause)
* [NotifyMediaStop](API.md#CRVideo_NotifyMediaStop)

相关组件请参考：
* [RTCVideoPlayer](API.md#RTCVideoPlayer)

相关结构定义请参考:
* [CRVideo_MediaInfoObj](TypeDefinitions.md#CRVideo_MediaInfoObj)
