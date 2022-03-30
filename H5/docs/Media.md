---
sidebarDepth: 1
---

# 影音播放

<h2 id=introduction>功能简介</h2>

把本地的一个视频文件播放给房间内其他用户观看，播放进度完全由播放端控制。  
影音播放功能介绍分为播放端和观看端两部分。

<font color="#FF0000">注意：一个房间中同一时间只支持进行一个影音播放。支持的影音格式因浏览器不同而不同。</font>

-------

播放端：

 1. [创建影音播放组件](#play_create)
 1. [开始播放并观看影音](#cfg)
 1. [设置播放进度](#pos)
 1. [暂停、停止播放](#play)


观看端：

1. [创建影音播放组件](#watch_create)
1. [观看影音](#watch)
1. [影音停止播放通知](#stopNotify)

两端通用的功能

1. [播放信息](#list)

<h2 id=role_play>播放端</h2> 

<h3 id=play_create>1.创建影音播放组件</h3> 

```js
//首先要创建影音播放组件
var mediaObj = CRVideo_CreatMediaObj({
    controls: true, //视频控件是否需要浏览器自带的控制条,
    loop: true, //视频是否循环播放 
});
```
相关API请参考：
* [CRVideo_CreatMediaObj](API.md#CRVideo_CreatMediaObj)

<h3 id=cfg>2.开始播放并观看影音</h3> 

每次只能播放一个视频，停止正在播放的视频才能播放下一个视频。通过设置播放配置，还可以控制房间内其他人看到的效果。


- 接口调用：

```js
// 开始播放影音：
CRVideo_StartPlayMedia(mediaObj, file, locPlay, bPauseWhenFinished) 
```

- 观看影音需要监听以下的回调通知：

```js
//观看端和播放端都会收到开始播放影音的通知。此时显示影音播放组件，即可观看影音
CRVideo_NotifyMediaStart.callback = function(userid){
    document.body.appendChlid(mediaObj.handler());  //把创建的组件放入DOM树中
}

```

相关API请参考：
* [CRVideo_StartPlayMedia](API.md#CRVideo_StartPlayMedia)
* [CRVideo_NotifyMediaStart](API.md#CRVideo_NotifyMediaStart)

<h3 id=pos>3.设置播放进度</h3>

可以通过拖动播放组件上的工具条来调整播放进度，也可以用代码来设置播放进度。

- 调用接口：

```js
// 设置播放进度，单位：毫秒.例如：设置到2秒处.  
CRVideo_SetMediaplaypos(2000)
```

相关API请参考：
*  [CRVideo_SetMediaplaypos](API.md#CRVideo_SetMediaplaypos)

<h3 id=play> 4.暂停、停止播放</h3>

- 调用接口：

```js
// 暂停或恢复播放影音
CRVideo_PausePlayMedia(true);  // ture为暂停，false为恢复

//停止播放影音
CRVideo_StopPlayMedia()
```

- 回调通知：  

注意：主动调用CRVideo_StopPlayMedia停止播放，或者影音文件播放到结尾，都会触发事件CRVideo_NotifyMediaStop，房间内所有人都会收到。

```js
//影音共享暂停播放通知
CRVideo_NotifyMediaPause.callback = function(userid,pause){

}

//影音共享播放停止通知
CRVideo_NotifyMediaStop.callback = function(){
    
}

```
相关API请参考:
* [CRVideo_PausePlayMedia](API.md#CRVideo_PausePlayMedia)
* [CRVideo_StopPlayMedia](API.md#CRVideo_StopPlayMedia)
* [CRVideo_NotifyMediaPause](API.md#CRVideo_NotifyMediaPause)
* [CRVideo_NotifyMediaStop](API.md#CRVideo_NotifyMediaStop)

<h2 id=role_watch>观看端：</h2> 

<h3 id=watch_create>1.创建影音播放组件</h3> 

```js
//首先要创建影音播放显示组件
var mediaObj = CRVideo_CreatMediaObj({
    controls: true, //视频控件是否需要浏览器自带的控制条,
    loop: true, //视频是否循环播放 
});
```
相关API请参考：
* [CRVideo_CreatMediaObj](API.md#CRVideo_CreatMediaObj)

<h3 id=watch>2.观看影音</h3> 

```js
//观看端和播放端都会收到开始播放影音的通知。此时显示影音播放组件，即可观看影音
CRVideo_NotifyMediaStart.callback = function(userid){
    mediaObj.setVideo(userid);  //将别人开启的共享，需要setVideo。如果是自己开启的共享，无需设置
    document.body.appendChlid(mediaObj.handler());  //把创建的组件放入DOM树中
}

```

相关API请参考：
* [CRVideo_NotifyMediaStart](API.md#CRVideo_NotifyMediaStart)

<h3 id=stopNotify>3.影音停止播放通知</h3> 

```js
//影音停止播放通知，观看端和播放端都会收到此通知。
CRVideo_NotifyMediaStop.callback = function(){
    document.body.removeChlid(mediaObj.handler());
    mediaObj = null;
}

```


<h2 id=all>两端通用的功能 </h2>

<h3 id=list>播放信息</h3>

- 调用接口：

```js
// 取得影音文件信息
var mediaInfo =  CRVideo_Getmediainfo(UID)

```

相关API请参考:
* [CRVideo_Getmediainfo](API.md#CRVideo_Getmediainfo)

相关结构定义请参考:
* [CRVideo_MediaInfoObj](TypeDefinitions.md#CRVideo_MediaInfoObj)