# 多方视频通话

## 功能介绍

多方视频通话时，根据当前业务场景合理设置视频编码参数，可以在较低的带宽占用下实现流畅清晰的音视频沟通，下面将针对几种常见场景进行介绍。


<h2 id=one> 1.一对一</h2>

- 画中画布局示例图:

![画中画布局示例图](./images/layout_overlap.jpg)

常用于如双人视频聊天场景，双方通常都希望看到对方比较清晰的视频，此时可以使用较高的视频编码分辨率，比如720P或480P。


- 示例代码：

```xml
<!--xaml文件中：创建一个Grid-->
<Grid Name="grid_videos" HorizontalAlignment="Center" VerticalAlignment="Center" Background="LightGray">
</Grid>
```

```csharp

//创建视频控件对象,添加到grid_videos内
for(int i = 0; i < 2; i ++){
   WindowsFormsHost host = new WindowsFormsHost();
   //axVideoUI根据实际布局来创建对应的个数(此处应为2个axVdieoUI对象)
   host.child = axVideoUI;
   //先默认隐藏，布局后再显示
   host.Visibility = Visibility.collapsed;
   host.HorizontalAlignment = System.Windows.HorizontalAlignment.Stretch;
   host.VerticalAlignment = VerticalAlignment.Stretch;
   host.Margin = new Thickness(2, 2, 2, 2);
   //将控件添加到grid里面
   grid_videos.Children.Add(host);
}

//2.布局
//画中画布局,大视频大小设定为1280*720,小视频大小设定为480*270
RowDefinition rd_One = new RowDefinition();
rd_One.Height = new GridLength(720 - 270);
grid_videos.RowDefinitions.Add(rd_One);

RowDefinition rd_Two = new RowDefinition();
rd_Two.Height = new GridLength(270);
grid_videos.RowDefinitions.Add(rd_Two);

ColumnDefinition cld_One = new ColumnDefinition();
cld_One.Width = new GridLength(1280-480);
grid_videos.ColumnDefinitions.Add(cld_One);

ColumnDefinition cld_Tow = new ColumnDefinition();
cld_Tow.Width = new GridLength(480);
grid_videos.ColumnDefinitions.Add(cld_Tow);
//先设置底层窗口,再设置顶层窗口
for (int i = 0; i < 2; i++){
    WindowsFormsHost host = (WindowsFormsHost)grid_videos.Children[i];
    Grid.SetRow(host, i);
    Grid.SetColumn(host, i);
    if(i == 0){
      Grid.SetRowSpan(host, 2);
      Grid.SetColumnSpan(host, 2);
    }else{
      Grid.SetRowSpan(host, 1);
      Grid.SetColumnSpan(host, 1);
    }
    host.Visibility = Visibility.Visible;
}


//3. 互看时采用较高清晰度（如720p）,下例中设置视频编码参数为720P, 帧率为15
string videoCfg = "[{\"size\":\"1080*720\", \"fps\":15}]";
axVideoSDK.setVideoCfg(videoCfg);

//4.设置视频控件显示内容
axVideoUI_peer.setVideo(peerUid);
axVideoUI_my.setVideo(myUID);
```

相关API请参考：
* [openVideo](API.md#openVideo)
* [setVideoCfg](API.md#setVideoCfg)


<h2 id=more> 2.多方视频</h2>

- 多方视频示例图：

![多方视频示例图](./images/five.jpg)

常用于在线教育场景，老师的视频画面比较大，可以使用较高的分辨率比如720P，下面学生的视频画面比较小，应采用较低的视频编码分辨率，比如360P或256P。


- 示例代码：

```xml
<!--xaml文件中：创建一个Grid 2行,第二行又分为4列-->
<Grid HorizontalAlignment="Center" VerticalAlignment="Center" Background="LightGray">
  <Grid.RowDefinitions>
    <RowDefinition Height="720" />
    <RowDefinition Height="180" />
  </Grid.RowDefinitions>
  <Grid Grid.Row="0" Grid.Column="0" Name="grid_video_Teacher">
  </Grid>
  <Grid Grid.Row="1" Grid.Column="0">
    <Grid.ColumnDefinitions>
      <ColumnDefinition Width="320" />
      <ColumnDefinition Width="320" />
      <ColumnDefinition Width="320" />
      <ColumnDefinition Width="320" />
    </Grid.ColumnDefinitions>
    <Grid Grid.Column="0" Name="grid_video_Stu1" />
    <Grid Grid.Column="1" Name="grid_video_Stu2" />
    <Grid Grid.Column="2" Name="grid_video_Stu3" />
    <Grid Grid.Column="3" Name="grid_video_Stu4" />
  </Grid>
</Grid>
```

```csharp

//创建视频控件对象，添加到grid_vdieos内
for(int i = 0; i < 5; i ++){
   WindowsFormsHost host = new WindowsFormsHost();
   //axVideoUI根据实际布局来创建对应的个数(此处应为5个axVdieoUI对象)
   host.child = axVideoUI;
   //先默认隐藏，布局后再显示
   host.Visibility = Visibility.collapsed;
   host.HorizontalAlignment = System.Windows.HorizontalAlignment.Stretch;
   host.VerticalAlignment = VerticalAlignment.Stretch;
   host.Margin = new Thickness(2, 2, 2, 2);
   //将控件添加到grid里面
   grid_videos.Children.Add(host);
}

//2.布局
for (int i = 0; i < 5; i++){
    WindowsFormsHost host = (WindowsFormsHost)grid_videos.Children[i];
    if(i = 0) {
      Grid.SetRow(host, 0);
      Grid.SetColumn(host, 0);
      host.MinWidth = 1280;
      host.MinHeight = 720;
    }else{
      Grid.SetRow(host, 1);
      Grid.SetColumn(host, i - 1);
    }
    Grid.SetRowSpan(host, 1);
    Grid.SetColumnSpan(host, 1);
    host.Visibility = Visibility.Visible;
}

//3.配置本视频清晰度(如果我是大画面，用高清晰度配置， 否则用低清晰度配置）
string videoCfg;
if ( myUID==UID_teacher )
{
	videoCfg = "[{\"size\":\"1080*720\", \"fps\":15}]";
}
else
{
	videoCfg = "[{\"size\":\"448*256\", \"fps\":15}]";
}
axVideoSDK.setVideoCfg(videoCfg);

//4.设置视频控件显示内容
axVideoUI_teacher.setVideo(UID_teacher);
axVideoUI_stu1.setVideo(UID_stu1);
axVideoUI_stu2.setVideo(UID_stu2);
axVideoUI_stu3.setVideo(UID_stu3);
axVideoUI_stu4.setVideo(UID_stu4);

```

相关API请参考：
* [openVideo](API.md#openVideo)
* [setVideoCfg](API.md#setVideoCfg)


<h2 id=customize> 3.个性化视图</h2>

- 图一: 

![图一示例图](./images/nine.jpg)

- 图二:

![图2示例图](./images/one.jpg)

<font style="font-weight:bolder;font-size:20px;">描述：</font>在某些业务场景下，同一个房间内的用户视图不一致，导致同一个视频在不同的用户那里呈现的画面尺寸不一样，比如9方通话场景下原先9个视频画面平铺（如图一），大家都只需要编码256P的视频。某一个时刻用户B开始全屏观看A的视频（如图二），此时A需要编码高分辨率视频比如720P来确保B能看到A的清晰画面，这样一来房间中其他人虽然观看的是A的小画面，却也收到了A的720P视频流，浪费了带宽和解码性能，万一其他用户也做了类似B的操作，整个房间的通话将不可用。
对于这种场景，我们可以启用[视频大小流](KeyWords.md#stream)机制，看A小画面的用户订阅A的小流，看A大画面的用户订阅A的大流，这样既能满足各自的清晰度要求，又不会浪费带宽和CPU性能。

- 示例代码：

```csharp

//注意：其他用户在订阅A的视频流时，需要使用setVideo2接口，并指定视频档位
string videoAttributesObj = "[{\"size\":\"1280*720\", \"fps\":12, \"quality2\":{\"size\":\"448*256\"}}]";
int videoID = axVideoSDK.getDefaultVideo(UID);
axVideoSDK.setLocVideoAttributes(videoID, videoAttributesObj);

//其他用户订阅A的小流,第三个参数即为指定视频档位为2(用小流)
axVideoUI_other.setVideo2(UID_other, -1, 2);

```

相关API请参考：
* [openVideo](API.md#openVideo)
* [setVideo2](API.md#setVideo2)
* [setLocVideoAttributes](API.md#setLocVideoAttributes)
* [getDefaultVideo](API.md#getDefaultVideo)
