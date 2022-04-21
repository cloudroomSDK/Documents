# 本地录制

## 功能介绍

用户可以对通讯过程进行录制并保存到终端设备，有以下特性：

- 录制画面可以根据业务场景自由拼接组合，包括本地摄像头、远端摄像头、远端共享的屏幕、影音播放、图片。支持同时启动多个录制。
- 录制格式支持mp4、ts、flv、aiv, mp3，如果选择了flv和ts两种格式，即使录制过程中程序出现异常了，崩溃之前的录像仍然可用。
- 对于金融双录等安全性要求高的特定领域，支持对录制的文件进行加密，录制后直接把录像传到标准http服务器、OSS或者云屋服务器。
- 本地加密过的录像只能通过SDK提供的播放器播放。


<h2 id=record_createLocMixer>1.创建混图器</h2>

- 左右布局示例图

![左右布局示例图](./images/layout_2.jpg)

- 接口调用：

```csharp

//混图器编号
string mixerID = "1";
//混图器尺寸为640*360，帧率为15，其他参数使用默认值
string mixerCfg = "{\"width\":640,\"height\":360,\"frameRate\":15}";
//混图器内容配置：混图对象来源为摄像头，保持图像原始比例
//left，top，width，height 在混图画面中的区域（相对于混图器尺寸）
//camid:摄像头编号
string contentObj = "[\
{\"type\":0,\"keepAspectRatio\":1,\"left\":0,\"top\":0,\"width\":320,\"height\":180,\"param\":{\"camid\":\"usr1.-1\"}},\
{\"type\":0,\"keepAspectRatio\":1,\"left\":320,\"top\":0,\"width\":320,\"height\":180,\"param\":{\"camid\":\"usr2.-1\"}}\
]";

//创建混图器
axVideoSDK.createLocMixer(mixerID, mixerCfg, contentObj);

```

相关API请参考：
* [createLocMixer](API.md#createLocMixer)



<h2 id=record_addLocMixerOutput>2.开启本地录制</h2>

添加混图器输出后，会触发axMeeting.locMixerOutputInfo通知，如果输出异常，将自动停止录制。

- 接口调用：

```csharp
//混图器编号
string mixerID = "1";
//摄像头录入的视频输出到d:/1.mp4文件
string mixerOutput = "[{\"type\":0,\"filename\":\"D:/1.mp4\"}]";
int ret = axVideoSDK.addLocMixerOutput(mixerID, mixerOutput);
if ( ret ) {
    //成功或者出错处理
    ...
}

```

相关API请参考：
* [addLocMixerOutput](API.md#addLocMixerOutput)
* [locMixerOutputInfo](API.md#locMixerOutputInfo)


<h2 id=record_locMixerOutputInfo>3.录像文件事件处理</h2>

录制过程中都会触发此事件。在此可以实时获得录像文件当前的时长、大小，以及录像文件异常等信息。

- 回调通知：

```csharp
//录制文件信息回调通知
void Meeting_locMixerOutputInfo(object sender, ICloudroomVideoMeetingEvents_locMixerOutputInfoEvent e)
{
  ...
  //录制状态处理
}

```

相关API请参考：
* [locMixerOutputInfo](API.md#locMixerOutputInfo)


<h2 id=record_updateLocMixerContent>4.更新图像内容</h2>

- 画中画布局示例图

![画中画布局示例图](./images/layout_overlap.jpg)

- 接口调用：

```csharp
//混图器编号
string mixerID = "1";
//混图器内容：画中画布局(示例图如下， 底层640*360， 上层160*90)，底层为user1的默认摄像头， 上层为user2的默认摄像头
string mixerContent = "[\
{\"type\":0,\"keepAspectRatio\":1,\"left\":0,\"top\":0,\"width\":640,\"height\":360,\"param\":{\"camid\":\"usr1.-1\"}},\
{\"type\":0,\"keepAspectRatio\":1,\"left\":475,\"top\":265,\"width\":160,\"height\":90,\"param\":{\"camid\":\"usr2.-1\"}}\
]";
//更新混图器内容
int errCode = axVideoSDK.updateLocMixerContent(mixerID,mixerContent);
if ( errCode) {
    ...
}

```

相关API请参考:
*  [updateLocMixerContent](API.md#updateLocMixerContent)

<h2 id=record_destroyLocMixer>5.结束</h2>

- 接口调用：

```csharp
//混图器编号
string mixerID = "1";
//消毁混图器， 录像文件将自动停止并保存
axVideoSDK.destroyLocMixer(mixerID);

```

相关API请参考:
* [destroyLocMixer](API.md#destroyLocMixer)
