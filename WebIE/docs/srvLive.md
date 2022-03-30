# 云端直播推流

## 功能简介

用于多个主播实时连麦互动。技术实现上，我们会把房间里多个主播的音视频在服务器合成一路流后推流到CDN流媒体服务器，直播观众可以获取RTMP或HLS流观看直播。
<p id=layout style="font-weight:normal;">互动直播架构图:  </p>
<img src="./images/srvLive.jpg" style="width:54%;"></img>

<h2 id=addr> 1.创建直播间并获得推流地址</h2>

- 创建直播间请参见：[Web API 创建直播](https://sdk.cloudroom.com/sdkdoc/live/createLiveAPI.html)。
- 获取直播推流地址请参见：[Web API 获取推流地址](https://sdk.cloudroom.com/sdkdoc/live/queryLiveAPI.html)。


<h2 id=record_startCloudMixer> 2.开始互动直播</h2>

<p id=layout style="font-weight:normal;">左右布局示例图:  </p>

![左右布局示例图](./images/layout_2.jpg)

- 调用接口：

```js
var mixerID = "1";

var recordWidth = 640; //录制画布的宽高
var recordHeight = 360;

var SWidth = recordWidth; //图像占据宽高
var rate = 16/9; //假设图像比例为16：9
var SHeight = recordWidth/rate;

var mutiMixerCfgs; //配置混图器编码参数
var mutiMixerContents; //配置混图器内容
var mutiMixerOutputs; //配置混图器输出

    mutiMixerCfgs = [
        {
            "id": mixerID,
			"cfg":  {"width":recordWidth,
                    "height":recordHeight,
                    "frameRate":8,
                    "bitRate":350000,
                    "defaultQP":28,
                    "gop":120
                    };
        }
    ];


//配置混图器内容： 左右布局(示例图如下)，左边为user1的1号摄像头， 右边为user2的1号摄像头
var mixerContents = [];
var leftCon = {}, rightCon = {};  //左右视频图像的内容配置
leftCon["type"] = 0; //0： 录制类型为视频
leftCon["left"] = 0 ;
leftCon["top"] = (recordHeight-sHeight/2)/2;   //视频图像垂直居中
leftCon["width"] = sWidth/2;
leftCon["height"] =  sHeight/2;
leftCon["param"] = {"camid":"user1.1"};
leftCon["keepAspectRatio"] = 1;
mixerContents.push(leftCon);

rightCon["type"] = 0; //0： 录制类型为视频
rightCon["left"] = sWidth/2;
rightCon["top"] = (recordHeight-sHeight/2)/2;   //视频图像垂直居中
rightCon["width"] = sWidth/2;
rightCon["height"] =  sHeight/2;
rightCon["param"] = {"camid":"user2.1"};
rightCon["keepAspectRatio"] = 1;
mixerContents.push(rightCon);
      
    mutiMixerContents = [
        {
            "id": mixerID,
            "content": mixerContents
        }
    ];
    mutiMixerOutputs = [ 
        {
            "id": mixerID,
			"output": [
				{"type":1,"liveUrl": "rtmp://xxx"} //配置推流地址,地址来自 步骤1获取的推流地址
				]
        }
    ];

    var rst = CRVideo_StartSvrMixer(mutiMixerCfgs, mutiMixerContents, mutiMixerOutputs);
    if(rst != CRVideo_NOERR){
        console.log("开启 云端直播推流 出错！ 错误码："+ rst);
        return;
    }
```

- 回调通知：

```js
//云端直播推流状态变化通知 
CRVideo_SvrMixerStateChanged.callback = function(state, err, operatorID)
{
	console.log("CRVideo_SvrMixerStateChanged, state="+state+",  err:"+err+",    operatorID"+ operatorID);
}

```

相关API请参考:
- [CRVideo_StartSvrMixer](API.md#CRVideo_StartSvrMixer)
- [CRVideo_SvrMixerStateChanged](API.md#CRVideo_SvrMixerStateChanged)

相关结构定义请参考：
- [CRVideo_MutiMixerCfgsObj](TypeDefinitions.md#CRVideo_MutiMixerCfgsObj)
- [CRVideo_MutiMixerContentsObj](TypeDefinitions.md#CRVideo_MutiMixerContentsObj)
- [CRVideo_MutiMixerOutputsObj](TypeDefinitions.md#CRVideo_MutiMixerOutputsObj)	

<h2 id=record_updateCloudMixerContent> 3.更新互动直播内容</h2>

<p id=layout_overlap style="font-weight:normal;">更新成画中画布局示例图:  </p>

![画中画布局示例图](./images/layout_overlap.jpg)

- 接口调用：

```js

var mixerID = "1";
var recordWidth = 640; //录制画布的宽高
var recordHeight = 360;

var SWidth = recordWidth; //图像占据宽高
var rate = 16/9; //假设图像比例为16：9
var SHeight = recordWidth/rate;

//更新录制布局为：画中画

//混图器内容：画中画布局(示例图如下， 底层640*360， 上层160*90)，底层为user1的1号摄像头， 上层为user2的1号摄像头
var mixerContents = [];
var leftCon = {}, rightCon = {};  //左右视频图像的内容配置
leftCon["type"] = 0; //0： 录制类型为视频
leftCon["left"] = 0 ;
leftCon["top"] = 0;   //视频图像垂直居中
leftCon["width"] = sWidth;
leftCon["height"] =  sHeight;
leftCon["param"] = {"camid":"user1.1"};
leftCon["keepAspectRatio"] = 1;
mixerContents.push(leftCon);

rightCon["type"] = 0; //0： 录制类型为视频
rightCon["left"] = sWidth - 160 - 5;  //上层图像距离最右边 5px
rightCon["top"] = sHeight - 90 -5;   //上层图像距离最下边 5px
rightCon["width"] = 160;
rightCon["height"] = 90;
rightCon["param"] = {"camid":"user2.1"};
rightCon["keepAspectRatio"] = 1;
mixerContents.push(rightCon);

var mutiMixerContents = [{
	"id": mixerID,
	"content": mixerContents
}];

CRVideo_UpdateSvrMixerContent(mutiMixerContents);

```

相关API请参考:
- [CRVideo_UpdateSvrMixerContent](API.md#CRVideo_UpdateSvrMixerContent)


<h2 id=record_stopCloudMixer> 4.停止互动直播</h2>

停止云端直播推流后，会触发事件[CRVideo_SvrMixerStateChanged](API.md#CRVideo_SvrMixerStateChanged)

- 接口调用：
```js
CRVideo_StopSvrMixer();
```

相关API请参考:
* [CRVideo_StopSvrMixer](API.md#CRVideo_StopSvrMixer)


<h2 id=record_vod> 5.回放点播</h2>

通过 [云屋点播API](https://sdk.cloudroom.com/sdkdoc/live/db_summary.html)回放点播。

