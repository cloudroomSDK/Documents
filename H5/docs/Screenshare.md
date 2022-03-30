---
sidebarDepth: 0
--- 

# 屏幕共享 

<h2 id=introduction>功能简介</h2>

在视频会话中为了提高沟通效率，可以将自己的屏幕内容分享给其他参与方观看。还支持在屏幕上进行标注，以及授权其他参与方进行远程控制。当屏幕共享者开启标注后，控件就进入标注模式。此时，房间内所有用户都可以进行标注，并观看他人标注的内容。  
使用场景如下：
* 视频会议场景中，屏幕共享可以将讲话者本地的文件、数据、网页、PPT 等画面分享给其他与会人；
* 在线课堂场景中，屏幕共享可以将老师的课件、笔记、讲课内容等画面展示给学生观看。

<font color="#FF0000">注意：同一个房间中，不支持多人同时开启屏幕共享。</font>

----

共享端：
 1. [开始共享](#startshare)
 1. [停止共享](#stopshare)
 
 <!-- 
 1. [开启标注](#startmark)
 1. [停止标注](#stopmark)
  -->

 
 观看端：
 1. [观看共享的屏幕](#watch)
 1. [屏幕共享停止通知](#notifyStop)

<!-- 
 1. [开启、停止标注通知](#notifyMark)
-->


<h2  id="shareler" color=#000000 style="font-weight:bold;font-size:28px">共享端</h2>
----

<h3 id="startshare" color=#000000 style="font-weight:bold;font-size:22px">1.开始共享</h3>

使用接口启动共享，出现共享内容显示组件后，用组件上的功能开始标注和结束共享。

- 接口调用：

```js  
/*
*开启屏幕共享分为2步：
*/

//1.开启屏幕共享
CRVideo_StartScreenShare();

//2.用户根据浏览器弹窗选择所需要的屏幕窗口共享或者应用程序
```

- 回调通知：

```js
// 主动开启屏幕共享的结果
CRVideo_StartScreenShareRslt.callback = function (sdkErr){
    if(sdkErr == 0){ //主动开启共享成功
        console.log("主动开启共享成功");
    } else {
        console.log("主动开启共享失败，错误码：" + sdkErr);
    }
}
```

相关API请参考：
 * [CRVideo_StartScreenShare](API.md#CRVideo_StartScreenShare)
 * [CRVideo_StartScreenShareRslt](API.md#CRVideo_StartScreenShareRslt)


<h3 id=stopshare>2.停止共享</h3>


- 接口调用：

```js
//主动停止屏幕共享
CRVideo_StopScreenShare()
```

- 回调通知：

```js
//主动停止屏幕共享的结果
CRVideo_StopScreenShareRslt.callback = function (sdkErr){
    if(sdkErr == 0){ //主动停止共享成功
        console.log("主动停止共享成功");
    } else {
        console.log("主动停止共享失败，错误码：" + sdkErr);
    }
}

```

相关API请参考：
 * [CRVideo_StopScreenShare](API.md#CRVideo_StopScreenShare)
 * [CRVideo_StopScreenShareRslt](API.md#CRVideo_StopScreenShareRslt)
 

<!-- 
 <h3 id=startmark>3.开启标注</h3>

<font color="#FF0000">注意：只有主动开启屏幕共享的用户，才可以开启标注功能。观看他人屏幕的用户不能开启标注。</font>

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
         console.log("开启标注失败，错误码：" + sdkErr);
     }
}

```
相关API请参考：
* [CRVideo_StartScreenMark](API.md#CRVideo_StartScreenMark)
* [CRVideo_StartScreenMarkRslt](API.md#CRVideo_StartScreenMarkRslt)



<h3 id=stopmark>4.停止标注</h3>

<font color="#FF0000">注意：只有主动开启屏幕共享的用户，才可以停止标注功能。观看他人屏幕的用户不能停止标注。</font>

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
         console.log("停止标注失败，错误码：" + sdkErr);
     }
}

```

相关API请参考：
* [CRVideo_StopScreenMark](API.md#CRVideo_StopScreenMark)
* [CRVideo_StopScreenMarkRslt](API.md#CRVideo_StopScreenMarkRslt)

 -->

<h2  id="watcher" color=#000000 style="font-weight:bold;font-size:28px">观看端</h2>

<h3 id=watch>1.观看共享的屏幕</h3>

- 回调通知：

```js
//收到他人开启了屏幕共享的通知，此时可以观看他人的屏幕
CRVideo_NotifyScreenShareStarted.callback = function (sharer) {
    var screenShareObj = CRVideo_CreatScreenShareObj(); //创建屏幕共享显示组件
    document.body.appendChlid(screenShareObj.handler());    //添加到页面任意位置
    screenShareObj.setVideo(sharer);    //需要将视频挂在在ui组件上

    var nicknameStyle = {
        display: "block"
        left: "10px",
        top: "10px",
        backgroundColor: "rgba(0, 0, 0, .7)",
        padding: "0 10px",
        borderRadius: "15px",
    }

    screenShareObj.setNickNameStyle(nicknameStyle); // 设置昵称样式
    screenShareObj.setNickNameContent(CRVideo_GetMemberNickName(sharer) + "'s screen"); //设置昵称
}
```

相关API请参考：
 * [CRVideo_NotifyScreenShareStarted](API.md#CRVideo_NotifyScreenShareStarted)

 
<h3 id=notifyStop>2.屏幕共享停止通知</h3>

- 回调通知：

```js
//收到他人停止了屏幕共享的通知，即停止观看（此时可以隐藏屏幕共享控件）
CRVideo_NotifyScreenShareStopped.callback = function(){
    //销毁屏幕共享控件。 示例代码：
    document.body.removeChlid(screenShareObj.handler())
    screenShareObj.destory();
    screenShareObj = null;
}
```

相关API请参考：
 * [CRVideo_NotifyScreenShareStopped](API.md#CRVideo_NotifyScreenShareStopped)

<!-- 

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

 -->







