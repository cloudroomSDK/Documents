# 屏幕共享

## 功能简介

在视频会话中为了提高沟通效率，可以将自己的屏幕内容分享给其他参与方观看。还支持在屏幕上进行标注，以及授权其他参与方进行远程控制。当屏幕共享者开启标注后，控件就进入标注模式。此时，房间内所有用户都可以进行标注，并观看他人标注的内容。
使用场景如下：
* 视频会议场景中，屏幕共享可以将讲话者本地的文件、数据、网页、PPT 等画面分享给其他与会人；
* 在线课堂场景中，屏幕共享可以将老师的课件、笔记、讲课内容等画面展示给学生观看。

:::danger

注意：同一个房间中，不支持多人同时开启屏幕共享。

:::


## 共享端

<h3 id=startshare>1.开始共享</h3>

- 接口调用：

```js  
/*
*开启屏幕共享分为2步：
*/
// 1.设置屏幕共享参数
var jsonCfg = {"maxFPS":8, "maxKbps":800};
CRVideo_SetScreenShareCfg(jsonCfg);

//2.开启屏幕共享
CRVideo_StartScreenShare();
```

- 回调通知：

```js
// 主动开启屏幕共享的结果
CRVideo_StartScreenShareRslt.callback=function(sdkErr){
     if(sdkErr == CRVideo_NOERR){ //主动开启共享成功
     }else{
         console.log("主动开启共享失败，错误码：" +sdkErr);
     }
}
```

相关API请参考：
 * [CRVideo_SetScreenShareCfg](API.md#CRVideo_SetScreenShareCfg)
 * [CRVideo_GetScreenShareCfg](API.md#CRVideo_GetScreenShareCfg)
 * [CRVideo_StartScreenShare](API.md#CRVideo_StartScreenShare)
 * [CRVideo_StartScreenShareRslt](API.md#CRVideo_StartScreenShareRslt)

相关结构定义请参考 :  
 * [CRVideo_ScreenShareCfgObj](TypeDefinitions.md#CRVideo_ScreenShareCfgObj)

 <h3 id=startmark>2.开启标注</h3>

:::danger

注意：只有主动开启屏幕共享的用户，才可以开启标注功能。

:::

- 接口调用：

```js
//开启标注
CRVideo_StartScreenMark();

```
- 回调通知：

```js
//开启标注的结果
CRVideo_StartScreenMarkRslt.callback = function(sdkErr){
     if(sdkErr == CRVideo_NOERR){ //开启标注成功
     }else{
         console.log("开启标注失败，错误码：" +sdkErr);
     }
}

```

标注开启成功后，CloudroomScreenShareUI将自动弹出标注功能页面，提供标注相关的功能。

相关API请参考：
* [CRVideo_StartScreenMark](API.md#CRVideo_StartScreenMark)
* [CRVideo_StartScreenMarkRslt](API.md#CRVideo_StartScreenMarkRslt)



<h3 id=stopmark>3.停止标注</h3>

:::danger

注意：只有主动开启屏幕共享的用户，才可以停止标注功能。

:::

- 接口调用：

```js
//停止标注
CRVideo_StopScreenMark();

```
- 回调通知：

```js
//停止标注的结果
CRVideo_StopScreenMarkRslt.callback = function(sdkErr){
    if(sdkErr == CRVideo_NOERR){ //停止标注成功
     }else{
         console.log("停止标注失败，错误码：" +sdkErr);
     }
}

```

相关API请参考：
* [CRVideo_StopScreenMark](API.md#CRVideo_StopScreenMark)
* [CRVideo_StopScreenMarkRslt](API.md#CRVideo_StopScreenMarkRslt)


<h3 id=stopshare>4.停止共享</h3>


- 接口调用：

```js
//主动停止屏幕共享
CRVideo_StopScreenShare()
```

- 回调通知：

```js
//主动停止屏幕共享的结果
CRVideo_StopScreenShareRslt.callback=function(sdkErr){
    if(sdkErr == CRVideo_NOERR){ //主动停止共享成功
     }else{
         console.log("主动停止共享失败，错误码：" +sdkErr);
     }
}

```

相关API请参考：
 * [CRVideo_StopScreenShare](API.md#CRVideo_StopScreenShare)
 * [CRVideo_StopScreenShareRslt](API.md#CRVideo_StopScreenShareRslt)

## 观看端

<h3 id=create>1.创建屏幕共享显示控件</h3>

```js
var g_screenShareObj =  null;   //声明屏幕共享控件变量

//创建屏幕共享控件对象
if(g_screenShareObj == null) {
    g_screenShareObj = CRVideo_CreatScreenShareObj();
    g_screenShareObj.id("screenShareObj");
    //为控件添加父元素div（例如：其id为screenShareContainer）， 
    //后面需要布局 、显示、隐藏屏幕共享控件时直接操作此父元素div
    $("#screenShareContainer").append(g_screenShareObj.handler());
}
```

<h3 id=watch>2.观看共享的屏幕</h3>

- 回调通知：

```js
//收到他人开启了屏幕共享的通知，此时可以观看他人的屏幕
CRVideo_NotifyScreenShareStarted.callback=function(){
    //修改布局，把屏幕共享控件放入界面，即可观看他人的屏幕。示例代码如下：
    $("#screenShareContainer").css({"display":"block",
                                    "left":"0px",
                                    "top":"0px",
                                    "width":"544px",
                                    "height":"306px",
                                    "overflow":"hidden"});
    g_screenShareObj.width(544);
    g_screenShareObj.height(306);
}

```

相关API请参考：
 * [CRVideo_NotifyScreenShareStarted](API.md#CRVideo_NotifyScreenShareStarted)

<h3 id=notifyMark>3.开启、停止标注通知</h3>

- 回调通知：

```js
//收到共享端已开启标注的通知
CRVideo_NotifyScreenMarkStarted.callback = function(){

}

//收到共享端已停止标注的通知
CRVideo_NotifyScreenMarkStopped.callback = function(){
    
}
```

相关API请参考：
* [CRVideo_NotifyScreenMarkStarted](API.md#CRVideo_NotifyScreenMarkStarted)
* [CRVideo_NotifyScreenMarkStopped](API.md#CRVideo_NotifyScreenMarkStopped)

<h3 id=notifyStop>4.屏幕共享停止通知</h3>

- 回调通知：

```js

//收到他人停止了屏幕共享的通知，即停止观看（此时可以隐藏屏幕共享控件）
CRVideo_NotifyScreenShareStopped.callback=function(){
    //隐藏屏幕共享控件。 示例代码：
    $("#screenShareContainer").hide();
}
```

相关API请参考：
 * [CRVideo_NotifyScreenShareStopped](API.md#CRVideo_NotifyScreenShareStopped)






