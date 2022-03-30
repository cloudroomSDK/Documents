# 远程协助

## 功能简介

开启屏幕共享后，可以把共享区域的操作控制权限（例如：鼠标消息、键盘消息）赋予房间内的其他用户，之后控制端就可在axScreenShareUI里进行远程操作了。


## 控制端

<h3 id=givenCtrlRight>1.被赋予远程控制权限通知</h3>

- 回调通知：

```js
//用户被赋予了远程控制权限
CRVideo_NotifyGiveCtrlRight.callback=function(operId,targetId){
    console.log(operId + "  赋予" + targetId +"远程控制权限。" );
}
```

相关API请参考:
* [CRVideo_NotifyGiveCtrlRight](API.md#CRVideo_NotifyGiveCtrlRight)

<h3 id=sendCtrlMsg>2.本端进入控制模式</h3>

```js
//控制端用来显示被控端屏幕的UI控件：screenshareObj
//一般在收到被赋予了远程控制权限通知中使用，如下所示：
CRVideo_NotifyGiveCtrlRight.callback=function(operId,targetId){
    screenshareObj.ctrlOpen(true);
    //……其他代码段
}

```

<h3 id=sendCtrlMsg>3.控制端发送控制消息</h3>

:::danger
控制端在插件上鼠标、键盘的消息会自动发送给远端。
:::


<h3 id=releasedCtrlRight>4.被收回远程控制权限通知</h3>

- 回调通知：

```js
// 用户远程控制权限被收回
CRVideo_NotifyReleaseCtrlRight.callback=function(operId,targetId){
    console.log(operId + "  收回了" + targetId + "的远程控制权限。" );
}
```

相关API请参考:
* [CRVideo_NotifyReleaseCtrlRight](API.md#CRVideo_NotifyReleaseCtrlRight)

## 被控端

<h3 id=giveCtrlRight>1.赋予用户控制权限</h3>


```js
//赋予其他用户控制权限
CRVideo_GiveCtrlRight(UID);
```

:::danger
被控端赋予对方控制权限后不需要做其他操作，sdk会自动完成远端控制操作
:::

相关API请参考:
*  [CRVideo_GiveCtrlRight](API.md#CRVideo_GiveCtrlRight)


<h3 id=releaseCtrlRight>2.收回远程控制权限</h3>

```js
//收回其他用户的控制权限
CRVideo_ReleaseCtrlRight(UID);
```
相关API请参考:
*  [CRVideo_ReleaseCtrlRight](API.md#CRVideo_ReleaseCtrlRight)

