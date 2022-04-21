# 本地直播推流

## 功能介绍

用于1个或多个主播实时连麦互动，然后图像和声音将在SDK本地进行混合，然后直接向CDN流媒体服务器推流，直播观众就可以获取RTMP或HLS流观看直播了。

<h2 id=live_createLocMixer>1.创建混图器</h2>

- 左右布局示例图

![左右布局示例图](./images/layout_2.jpg)

- 接口调用：

```js
//混图器编号

var mixerID = "1";

//混图器规格配置, 尺寸:360p, frameRate:8, 码率:350kbps，画质:28
var mixerCfg = {"width":640,
                "height":360,
                "frameRate":8,
                "bitRate":350000,
                "defaultQP":28,
                "gop":120
                };

//混图器内容： 左右布局，左边为user1的默认摄像头， 右边为user2的默认摄像头
var mixerContent = [{"type":0,
                    "keepAspectRatio":1,
                    "left":5,
                    "top":10,
                    "width":633,
                    "height":356,
                    "param":{"camid":"user1.-1"}
                    },
                    {"type":0,
                    "keepAspectRatio":1,
                    "left":642,
                    "top":10,
                    "width":633,
                    "height":356,
                    "param":{"camid":"user2.-1"}
                    }];

//创建混图器
CRVideo_ERR_DEF errCode = CRVideo_CreateLocMixer(mixerID, mixerCfg, mixerContent);
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
* [CRVideo_CreateLocMixer](API.md#CRVideo_CreateLocMixer)

相关结构定义请参考：
* [CRVideo_MixerCfgObj](TypeDefinitions.md#CRVideo_MixerCfgObj)
* [CRVideo_MixerContentObj](TypeDefinitions.md#CRVideo_MixerContentObj)

<h2 id=live_addLocMixerOutput>2.开启直播推流</h2>

添加混图器输出后，会触发CRVideo_LocMixerOutputInfo通知.如果输出异常，将自动停止推流。

- 接口调用：

```js
//混图器编号
var mixerID = "1";

//推流到A，B两个直播平台
var mixerOutput = [{"type":1,"liveUrl":"rtmp://A/xxx"},
                    {"type":1,"liveUrl":"rtmp://B/xxx"}];

//添加直播推流
CRVideo_ERR_DEF errCode = CRVideo_AddLocMixerOutput(mixerID, mixerOutput);
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

<h2 id=live_locMixerOutputInfo>3.直播推流事件处理</h2>

录制过程中都会触发此事件。在此可以实时获得录像文件当前的时长、大小，以及录像文件异常等信息。


- 回调通知：

```js
//录制文件、直播信息通知 
CRVideo_LocMixerOutputInfo.callback = function(mixerID,nameOrUrl,outputInfo) {
    if(outputInfo.state == CRVideo_OUTPUT_STATE.OUTPUT_ERR ) 
    {
        //推流出错，outputInfo.errCode中有错误原因
    }
    else
    {
        //可以得到推流时长、大小
    }
}
/* 输出对象状态,属性介绍如下： 
    
     outputInfo.state   - 状态，请见后面描述 CRVideo_OUTPUT_STATE;
     outputInfo.duration  - 录录像文件时长，单位：毫秒。
	 outputInfo.fileSize    - 录像文件大小
	 outputInfo.errCode   - 错误码

//其中 state 取值如下:
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

<h2 id=live_updateLocMixerContent>4.更新图像内容</h2>

- 画中画布局示例图

![画中画布局示例图](./images/layout_overlap.jpg)

- 接口调用：

```js
//混图器编号
var mixerID = "1";

//混图器内容：画中画布局(示例图如下， 底层640*360， 上层160*90)，底层为user1的默认摄像头， 上层为user2的默认摄像头
var mixerContent = [{"type":0,
                    "keepAspectRatio":1,
                    "left":0,
                    "top":0,
                    "width":640,
                    "height":360,
                    "param":{"camid":"user1.-1"}
                    },
                    {"type":0,
                    "keepAspectRatio":1,
                    "left":475,
                    "top":265,
                    "width":160,
                    "height":90,
                    "param":{"camid":"user1.-2"}
                    }];

//更新混图器内容
CRVideo_ERR_DEF errCode = CRVideo_UpdateLocMixerContent(mixerID,mixerContent);
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


* API请参考: [CRVideo_UpdateLocMixerContent](API.md#CRVideo_UpdateLocMixerContent)


<h2 id=live_destroyLocMixer> 5.结束</h2>


- 接口调用：

```js
//混图器编号
var mixerID = "1";

//消毁混图器， 各输出自动结束
CRVideo_DestroyLocMixer(mixerID);

```

相关API请参考: 
* [CRVideo_DestroyLocMixer](API.md#CRVideo_DestroyLocMixer)



