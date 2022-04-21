# 影音播放

## 功能介绍

把一个本地视频文件、或网络流媒体播放给房间内其他用户观看，支持暂停、设置放位置等；</br>
支持的影音文件格式有： mov、rmvb、rm、flv、mp4、3gp、mp3、wav等市面上常见格式；支持http、rtmp、rtsp网络流媒体；</br>
一个房间中同一时间只支持进行一个影音播放；</br>


<h2 id=role_play>播放端</h2>

<h3 id=play_create>1.创建影音播放组件</h3>


//创建影音显示控件
```xml
<!--xaml文件中：创建一个Grid-->
<Grid Name="grid_medias" HorizontalAlignment="Center" VerticalAlignment="Center" Background="LightGray">
</Grid>
```

```csharp
//创建影音显示控件对象,添加到grid_medias内
for(int i = 0; i < 2; i ++){
   WindowsFormsHost host = new WindowsFormsHost();
   host.child = axMediaUI;
   //默认隐藏，布局后再显示
   host.Visibility = Visibility.collapsed;
   host.HorizontalAlignment = System.Windows.HorizontalAlignment.Stretch;
   host.VerticalAlignment = VerticalAlignment.Stretch;
   host.Margin = new Thickness(2, 2, 2, 2);
   //将控件添加到grid里面
   grid_medias.Children.Add(host);
}
```

<h3 id=cfg>2.开始播放并观看影音</h3>

每次只能播放一个视频，停止正在播放的视频才能播放下一个视频。通过设置播放配置，还可以控制房间内其他人看到的效果。

- 接口调用：

```csharp
// 配置影音共享参数1280*720, 帧率24(如果视频文件清晰度比配置低，则以文件为准)
string mediaCfg = "[{\"width\":1280, \"height\":720, \"fps\":24}]";
axVideoSDK.setMediaCfg(mediaCfg)
//开始播放影音
axVideoSDK.startPlayMedia("D:/1.mp4",0)

```

- 观看影音需要监听以下的回调通知：

```csharp
//观看端和播放端都会收到开始播放影音的通知，此时显示影音播放组件，即可观看影音
void notifyMediaStart(string UserID){
  ...
}

```

相关API请参考：
* [setMediacfg](API.md#setMediacfg)
* [startPlayMedia](API.md#startPlayMedia)
* [notifyMediaStart](API.md#notifyMediaStart)


<h3 id=pos>3.设置播放进度</h3>

可以通过拖动播放组件上的工具条来调整播放进度，也可以用代码来设置播放进度。


- 调用接口：

```csharp
// 设置播放进度，单位：毫秒.例如：设置到2秒处.
axVideoSDK.setMediaplaypos(2000)
```

相关API请参考：
*  [setMediaplaypos](API.md#setMediaplaypos)

<h3 id=play> 4.暂停、停止播放</h3>

- 调用接口：

```csharp
// 暂停或恢复播放影音：ture为暂停，false为恢复
axVideoSDK.pausePlayMedia(true);

//停止播放影音
axVideoSDK.stopPlayMedia()
```

- 回调通知：

注意：主动调用stopPlayMedia停止播放，或者影音文件播放到结尾，都会触发事件notifyMediaStop，房间内所有人都会收到。

```csharp
//媒体暂停播放通知
void notifyMediaPause(string userid, bool pause){
  ...
}

//影音停止播放通知，观看端和播放端都会收到此通知。reason 为停止原因，详见参考CRVideo_MEDIA_STOP_REASON
void notifyMediaStop(string userid, int reason)
{
    //此时可以隐藏影音显示组件
}

```
相关API请参考:
* [pausePlayMedia](API.md#pausePlayMedia)
* [stopPlayMedia](API.md#stopPlayMedia)
* [notifyMediaPause](API.md#notifyMediaPause)
* [notifyMediaStop](API.md#notifyMediaStop)


<h2 id=role_watch>收看端</h2>

<h3 id=play_create>1.创建影音播放组件</h3>

```csharp
//创建影音播放显示控件
```xml
<!--xaml文件中：创建一个Grid-->
<Grid Name="grid_medias" HorizontalAlignment="Center" VerticalAlignment="Center" Background="LightGray">
</Grid>
```

```csharp

//创建视频控件对象,添加到grid_medias内
WindowsFormsHost host = new WindowsFormsHost();
host.child = axMediaUI;
//先默认隐藏，布局后再显示
host.Visibility = Visibility.collapsed;
host.HorizontalAlignment = System.Windows.HorizontalAlignment.Stretch;
host.VerticalAlignment = VerticalAlignment.Stretch;
host.Margin = new Thickness(2, 2, 2, 2);
//将控件添加到grid里面
grid_medias.Children.Add(host);

```


<h3 id=watch>2.观看影音</h3>

- 回调通知：
```csharp
//
void notifyMediaStart(string userid){
}

```

相关API请参考：
* [notifyMediaStart](API.md#notifyMediaStart)

<h3 id=stopNotify>3.影音停止播放通知</h3>

```csharp
//影音停止播放通知，观看端和播放端都会收到此通知。reason 为停止原因，详见参考CRVideo_MEDIA_STOP_REASON
void notifyMediaStop(string userid, int reason)
{
    //此时可以隐藏影音显示组件
}

```

相关API请参考:
* [getAllFilesInMediaPath](API.md#getAllFilesInMediaPath)
* [getmediainfo](API.md#getmediainfo)
* [setSpeakerVolume](API.md#setSpeakerVolume)
