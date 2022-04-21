# 云端录制

## 功能介绍

在服务器上对房间内的音视频、影音共享、屏幕共享等通讯内容进行录制，支持自定义录制内容和布局，录制文件在服务器保存，可以通过[WEB API](/sdk/document/netdisk/netdisk_query?platform=serverside)下载和删除


<h2 id=record_enbale> 1.开通云端录制服务</h2>

- 请确保您已成功[注册](https://sdk.cloudroom.com/mgr_sdk/register.html)了一个帐号。</br>
- 请联系商务为对应帐号开通“云端录制服务”。

<h2 id=record_startSvrMixer> 2.开始云端录制</h2>

- 调用接口：

```js
// 云端录制推荐分辨率
var record_size_arr = [ 
	[640, 360, 400],
	[964, 480, 600],
	[1280, 720, 1200]
];

var mixerID = "1";  //生成一个混图器id
var size = 0;   //使用第1个分辨率

var [rw, rh, bitRate] = record_size_arr[size]  // 640 * 360 , 400bit

var mw = rw / 2;    //每个视频的录制宽度
var mh = mw * 9 / 16; //每个视频的录制高度
var mtop = (rh - mh) / 2;   //放在录制画布的相对高度，这里是计算出视频垂直居中的位置

//配置混图器编码参数
var mutiMixerCfgs = [
    {
        "id": mixerID,
        "streamTypes": 3,   //录制音视频
        "cfg": {
            "width": rw,
            "height": rh,
            "frameRate": 8,
            "bitRate": bitRate,
            "defaultQP": 26
        };
    }
];


//左视频图像的内容配置
var leftCon = {
    "type": 0; //0： 录制类型为视频
    "left": 0 ;
    "top": mtop;   //视频图像垂直居中
    "width": mw;
    "height":  mh;
    //camid参数为: user1.1 ,表示该内容需要录制userID是user1的1号摄像头。后方可传入-1，表示为录制默认摄像头
    "param": {"camid": "user1.1"};  
    "keepAspectRatio": 1;
};
//右视频图像的内容配置
var rightCon = {
    "type": 0; //0： 录制类型为视频
    "left": mw;
    "top": mtop;   //视频图像垂直居中
    "width": mw;
    "height":  mh;
    "param": {"camid": "user2.1"};
    "keepAspectRatio": 1;
};  

//配置混图器内容
var mutiMixerContents = [
    {
        "id": mixerID,
        "content": [ leftCon ,rightCon ]
    }
];

//配置混图器输出
var mutiMixerOutputs = [ 
    {
        "id": mixerID,
        "output": [
            {
                "type":0,
                "filename":"/2019-03-19/" + "2019-03-19-10-30-30_wx.mp4" //配置录制的文件名
            }
        ]
    }
];

//开始录制，云端录制开启后会回调CR.SvrRecordStateChanged接口
CR.StartSvrMixer(mutiMixerCfgs, mutiMixerContents, mutiMixerOutputs);
```


- 左右布局示例图：

![左右布局示例图](./images/layout_2.jpg)

- 回调通知：

```js
//云端录制状态变化通知 
CR.SvrRecordStateChanged.callback = function(state, err, operatorID){
	console.log(`SvrRecordStateChanged, state: ${state},err: ${err},operatorID: ${operatorID}`);
}
```

相关API请参考:
- [StartSvrMixer](API.md#CRVideo_StartSvrMixer)
- [SvrRecordStateChanged](API.md#CRVideo_SvrRecordStateChanged)

相关结构定义请参考：
- [CRVideo_MutiMixerCfgsObj](TypeDefinitions.md#CRVideo_MutiMixerCfgsObj)
- [CRVideo_MutiMixerContentsObj](TypeDefinitions.md#CRVideo_MutiMixerContentsObj)
- [CRVideo_MutiMixerOutputsObj](TypeDefinitions.md#CRVideo_MutiMixerOutputsObj)

<h2 id=record_updateSvrMixerContent> 3.更新云端录制内容</h2>


- 接口调用：

```js
// 云端录制推荐分辨率
var record_size_arr = [ 
	[640, 360, 400],
	[964, 480, 600],
	[1280, 720, 1200]
];

var mixerID = "1";  //取之前的混图器id
var size = 0;   //使用第1个分辨率

//更新录制布局为：画中画
//混图器内容：画中画布局(示例图如下， 底层640*360， 上层213*120)，底层为user1的1号摄像头， 上层为user2的1号摄像头

var [bigW, bigH] = record_size_arr[size];  //640 * 360

var smallH = bigH / 3;  //缩放3倍作为顶层视频的高度
var smallW = smallH * 16 / 9;   //视频宽高比为16：9，计算出顶层视频宽度

//底层视频图像的内容配置
var underCon = {
    "type": 0; //0： 录制类型为视频
    "left": 0 ;
    "top": 0;
    "width": bigW;
    "height":  bigH;
    //camid参数为: user1.1 ,表示该内容需要录制userID是user1的1号摄像头。后方可传入-1，表示为录制默认摄像头
    "param": {"camid": "user1.1"};  
    "keepAspectRatio": 1;
};
//顶层视频图像的内容配置
var topCon = {
    "type": 0; //0： 录制类型为视频
    "left": bigW - smallW;
    "top": bigH - smallH;
    "width": smallW;
    "height":  smallH;
    "param": {"camid": "user2.1"};
    "keepAspectRatio": 1;
};  

//配置混图器内容
var mutiMixerContents = [
    {
        "id": mixerID,
        "content": [ underCon ,topCon ] //数组后面的画面将会覆盖前面的画面
    }
];

//更新录制内容，录制更新后会通知CRVideo_SvrMixerCfgChanged接口
CR.UpdateSvrMixerContent(mutiMixerContents);

```

- 画中画布局示例图： 

![画中画布局示例图](./images/layout_overlap.jpg)

相关API请参考:
- [CR.UpdateSvrMixerContent](API.md#CRVideo_UpdateSvrMixerContent)


<h2 id=record_getSvrMixerState> 4.获取云端录制状态</h2>


- 接口调用：

```js
//获取云端录制状态
var state = CR.GetSvrMixerState()
```

相关API请参考:
- [CR.GetSvrMixerState](API.md#CRVideo_GetSvrMixerState)

相关结构定义请参考：
- [CRVideo_MIXER_STATE](Constant.md#CRVideo_MIXER_STATE)


<h2 id=record_stopSvrMixer> 5.停止云端录制</h2>

停止云端录制后，也会触发事件[CR.SvrRecordStateChanged](API.md#CRVideo_SvrRecordStateChanged)

- 接口调用：
```js
CR.StopSvrMixer();
```

相关API请参考:
* [CR.StopSvrMixer](API.md#CRVideo_StopSvrMixer)


 
<h2 id=SvrRecFileStateChanged> 6.云端录制文件信息变化通知</h2>

录制过程中都会触发此事件。在此可以实时获得录制状态、录制文件当前的时长、大小，以及录制异常等信息。

- 回调通知：

```js
//云端录制文件信息变化通知
CR.SvrRecFileStateChanged.callback = function(outputInfo){
	console.log(outputInfo);
}	
```

相关API请参考:
- [CRVideo_SvrRecFileStateChanged](API.md#CRVideo_SvrRecFileStateChanged)

相关结构定义请参考：
- [CRVideo_MixerOutputInfoObj](TypeDefinitions.md#CRVideo_MixerOutputInfoObj)

