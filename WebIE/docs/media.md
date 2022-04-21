# 影音播放

## 功能介绍

把一个本地视频文件、或网络流媒体播放给房间内其他用户观看，支持暂停、设置放位置等；</br>
支持的影音文件格式有： mov、rmvb、rm、flv、mp4、3gp、mp3、wav等市面上常见格式；支持http、rtmp、rtsp网络流媒体；</br>
一个房间中同一时间只支持进行一个影音播放；</br>



<h2 id=role_play>播放端</h2>

<h3 id=play_create>1.创建影音播放组件</h3>

```js
//首先要创建影音播放显示控件
var g_mediaObj =  null;   //声明影音播放控件变量

//创建影音播放控件对象
if(g_mediaObj == null){
    g_mediaObj =  CRVideo_CreatMediaObj();
    g_mediaObj.id("mediaObj");
     //为控件添加父元素div（例如：其id为mediaContainer）， 后面需要布局 、显示、隐藏影音播放控件时直接操作此父元素div
    $("#mediaContainer").append(g_mediaObj.handler());
}
```

相关API请参考：
* [CRVideo_CreatMediaObj](API.md#CRVideo_CreatMediaObj)

<h3 id=cfg>2.开始播放并观看影音</h3>

每次只能播放一个视频，停止正在播放的视频才能播放下一个视频。通过设置播放配置，还可以控制房间内其他人看到的效果。

- 接口调用：

```js
/*
*开始播放影音分为2步：
*/
// 1.配置影音播放参数 
var cfg = {
    "size":"1280*720", //以720p清晰度共享,
    "fps":24           //帧率
    };

CRVideo_SetMediacfg(cfg)

//2.开始播放影音
CRVideo_StartPlayMedia("D:/1.mp4",0)

```

- 观看影音需要监听以下的回调通知：

```js
//观看端和播放端都会收到开始播放影音的通知。 此时显示影音播放组件，即可观看影音
CRVideo_NotifyMediaStart.callback = function(userid){
	$("#mediaContainer").css({"display":"block","left":"72px","top":"7px","width":"544px","height":"306px"})
    g_mediaObj.width(544);
    g_mediaObj.height(306);
								
}

```

相关API请参考：
* [CRVideo_SetMediacfg](API.md#CRVideo_SetMediacfg)
* [CRVideo_StartPlayMedia](API.md#CRVideo_StartPlayMedia)
* [CRVideo_NotifyMediaStart](API.md#CRVideo_NotifyMediaStart)


相关结构定义请参考：
* [VIDEO_SHOW_SIZE](Constant.md#VIDEO_SHOW_SIZE)
* [CRVideo_VideoCfg](TypeDefinitions.md#CRVideo_VideoCfg)


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
//媒体暂停播放通知
CRVideo_NotifyMediaPause.callback = function(userid,pause){

}
```

```js
//影音停止播放通知，观看端和播放端都会收到此通知。reason 为停止原因，详见参考CRVideo_MEDIA_STOP_REASON
CRVideo_NotifyMediaStop.callback = function(userid, reason)
{
    //此时可以隐藏影音显示组件
    $("#mediaContainer").hide();
}

```
相关API请参考:
* [CRVideo_PausePlayMedia](API.md#CRVideo_PausePlayMedia)
* [CRVideo_StopPlayMedia](API.md#CRVideo_StopPlayMedia)
* [CRVideo_NotifyMediaPause](API.md#CRVideo_NotifyMediaPause)
* [CRVideo_NotifyMediaStop](API.md#CRVideo_NotifyMediaStop)

相关结构定义请参考：
* [CRVideo_MEDIA_STOP_REASON](Constant.md#CRVideo_MEDIA_STOP_REASON)



<h2 id=role_watch>收看端</h2>

<h3 id=watch_create>1.创建影音播放组件</h3> 

```js
//首先要创建影音播放显示控件
var g_mediaObj =  null;   //声明影音播放控件变量

//创建影音播放控件对象
if(g_mediaObj == null){
    g_mediaObj =  CRVideo_CreatMediaObj();
    g_mediaObj.id("mediaObj");
     //为控件添加父元素div（例如：其id为mediaContainer）， 后面需要布局 、显示、隐藏影音播放控件时直接操作此父元素div
    $("#mediaContainer").append(g_mediaObj.handler());
}
```
相关API请参考：
* [CRVideo_CreatMediaObj](API.md#CRVideo_CreatMediaObj)

<h3 id=watch>2.观看影音</h3> 

```js
//观看端和播放端都会收到开始播放影音的通知。 此时显示影音播放组件，即可观看影音
CRVideo_NotifyMediaStart.callback = function(userid){
	$("#mediaContainer").css({"display":"block","left":"72px","top":"7px","width":"544px","height":"306px"})
    g_mediaObj.width(544);
    g_mediaObj.height(306);
								
}

```

相关API请参考：
* [CRVideo_NotifyMediaStart](API.md#CRVideo_NotifyMediaStart)

<h3 id=stopNotify>3.影音停止播放通知</h3> 

```js
//影音停止播放通知，观看端和播放端都会收到此通知。reason 为停止原因，详见参考CRVideo_MEDIA_STOP_REASON
CRVideo_NotifyMediaStop.callback = function(userid, reason)
{
    //此时可以隐藏影音显示组件
    $("#mediaContainer").hide();
}

```

相关API请参考:
* [CRVideo_GetAllFilesInMediaPath](API.md#CRVideo_GetAllFilesInMediaPath)
* [CRVideo_Getmediainfo](API.md#CRVideo_Getmediainfo)
* [CRVideo_SetSpeakerVolume](API.md#CRVideo_SetSpeakerVolume)

相关结构定义请参考:
* [CRVideo_MediaInfoObj](TypeDefinitions.md#CRVideo_MediaInfoObj)