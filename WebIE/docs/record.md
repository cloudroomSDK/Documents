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

```js

var mixerID = "1";//混图器编号
var recordWidth = 640; //录制画布的宽高
var recordHeight = 360;

var SWidth = recordWidth; //图像占据宽高
var rate = 16/9; //假设图像比例为16：9
var SHeight = recordWidth/rate;

//配置混图器编码参数(此处：尺寸:360p, frameRate:8, 码率:350kbps，画质:28)
var mixerCfg = {"width":recordWidth,
                "height":recordHeight,
                "frameRate":8,
                "bitRate":350000,
                "defaultQP":28,
                "gop":120
                };

//配置混图器内容： 左右布局(示例图如下)，左边为user1的1号摄像头， 右边为user2的1号摄像头
var mixerContent = [];
var leftCon = {}, rightCon = {};  //左右视频图像的内容配置
leftCon["type"] = 0; //0： 录制类型为视频
leftCon["left"] = 0 ;
leftCon["top"] = (recordHeight-sHeight/2)/2;   //视频图像垂直居中
leftCon["width"] = sWidth/2;
leftCon["height"] =  sHeight/2;
leftCon["param"] = {"camid":"user1.1"};
leftCon["keepAspectRatio"] = 1;
mixerContent.push(leftCon);

rightCon["type"] = 0; //0： 录制类型为视频
rightCon["left"] = sWidth/2;
rightCon["top"] = (recordHeight-sHeight/2)/2;   //视频图像垂直居中
rightCon["width"] = sWidth/2;
rightCon["height"] =  sHeight/2;
rightCon["param"] = {"camid":"user2.1"};
rightCon["keepAspectRatio"] = 1;
mixerContent.push(rightCon);
							               
//创建混图器
var errCode = CRVideo_CreateLocMixer(mixerID, mixerCfg, mixerContent);
if ( errCode != CRVideo_NOERR )
{
    //出错
    ...
}else
{
    //成功
}

```

相关API请参考：
* [CRVideo_CreateLocMixer](API.md#CRVideo_CreateLocMixer)

相关结构定义请参考：
* [CRVideo_MixerCfgObj](TypeDefinitions.md#CRVideo_MixerCfgObj),  
* [CRVideo_MixerContentObj](TypeDefinitions.md#CRVideo_MixerContentObj)


<h2 id=record_addLocMixerOutput>2.开启本地录制</h2>

添加混图器输出后，会触发CRVideo_LocMixerOutputInfo通知.如果输出异常，将自动停止录制。

- 接口调用：

```js
//混图器编号
var mixerID = "1";

//输出到d:/1.mp4文件；
var mixerOutput = [{"type":0,"filename":"D:/1.mp4"}];

//添加输出
var errCode = CRVideo_AddLocMixerOutput(mixerID, mixerOutput);
if ( errCode!=CRVideo_NOERR )
{
    //出错
    ...
}
else
{
    //成功
}

```


相关API请参考：
* [CRVideo_AddLocMixerOutput](API.md#CRVideo_AddLocMixerOutput)
* [CRVideo_LocMixerOutputInfo](API.md#CRVideo_LocMixerOutputInfo)

相关结构定义请参考：
* [CRVideo_MixerOutputInfoObj](TypeDefinitions.md#CRVideo_MixerOutputInfoObj)


<h2 id=record_locMixerOutputInfo>3.录像文件事件处理</h2>

录制过程中都会触发此事件。在此可以实时获得录像文件当前的时长、大小，以及录像文件异常等信息。

- 回调通知：

```js	
//录制文件信息回调通知 
CRVideo_LocMixerOutputInfo.callback = function(mixerID,nameOrUrl,outputInfo) {
        if(outputInfo.state == CRVideo_OUTPUT_STATE.OUTPUT_ERR ) 
    {
        //录像文件出错，outputInfo.errCode中有错误原因
    }
    else
    {
        //可以得到文件时长、大小
    }

}
/* outputInfo是输出信息对象,属性介绍如下： 
    
     outputInfo.state   - 状态，请见后面描述 CRVideo_OUTPUT_STATE;
     outputInfo.duration  - 录录像文件时长，单位：毫秒。
	 outputInfo.fileSize    - 录像文件大小
	 outputInfo.errCode   - 错误码

//其中 state 取值介绍如下:
     CRVideo_OUTPUT_STATE =
	{
		//输出对象已创建
		OUTPUT_CREATED:0,
		//输出目标信息更新; 可以从结构中取得：duration, fileSize参数；
		OUTPUT_WRITING:1,
		//输出对象已关闭; 可以从结构中取得：duration, fileSize参数；
		OUTPUT_CLOSED:2,
		//输出对象异常；可以从结构中取得：err参数；
		OUTPUT_ERR:3
	}
*/
```

相关API请参考：
* [CRVideo_LocMixerOutputInfo](API.md#CRVideo_LocMixerOutputInfo)

相关结构定义请参考：
* [CRVideo_MixerOutputInfoObj](TypeDefinitions.md#CRVideo_MixerOutputInfoObj)


<h2 id=record_updateLocMixerContent>4.更新图像内容</h2>

- 画中画布局示例图

![画中画布局示例图](./images/layout_overlap.jpg)

- 接口调用：

```js
//混图器编号
var mixerID = "1";
var recordWidth = 640; //录制画布的宽高
var recordHeight = 360;

var SWidth = recordWidth; //图像占据宽高
var rate = 16/9; //假设图像比例为16：9
var SHeight = recordWidth/rate;

//更新录制布局为：画中画

//混图器内容：画中画布局(示例图如下， 底层640*360， 上层160*90)，底层为user1的1号摄像头， 上层为user2的1号摄像头
var mixerContent = [];
var leftCon = {}, rightCon = {};  //左右视频图像的内容配置
leftCon["type"] = 0; //0： 录制类型为视频
leftCon["left"] = 0 ;
leftCon["top"] = 0;   //视频图像垂直居中
leftCon["width"] = sWidth;
leftCon["height"] =  sHeight;
leftCon["param"] = {"camid":"user1.1"};
leftCon["keepAspectRatio"] = 1;
mixerContent.push(leftCon);

rightCon["type"] = 0; //0： 录制类型为视频
rightCon["left"] = sWidth - 160 - 5;  //上层图像距离最右边 5px
rightCon["top"] = sHeight - 90 -5;   //上层图像距离最下边 5px
rightCon["width"] = 160;
rightCon["height"] = 90;
rightCon["param"] = {"camid":"user2.1"};
rightCon["keepAspectRatio"] = 1;
mixerContent.push(rightCon);

//更新混图器内容
var errCode = CRVideo_UpdateLocMixerContent(mixerID,mixerContent);
if ( errCode!=CRVideo_NOERR )
{
    //出错
    ...
}
else
{
    //成功
}

```

相关API请参考: 
*  [CRVideo_UpdateLocMixerContent](API.md#CRVideo_UpdateLocMixerContent)

<h2 id=record_destroyLocMixer>5.结束</h2>


- 接口调用：

```js
//混图器编号
var mixerID = "1";

//消毁混图器， 各输出自动结束
CRVideo_DestroyLocMixer(mixerID);

```

相关API请参考: 
* [CRVideo_DestroyLocMixer](API.md#CRVideo_DestroyLocMixer)
 