# 类型定义

<h3 id=CRVideo_InitObj>CRVideo_InitObj</h3>

> 初始化配置

- **Type**:object


| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
| isCallSer |boolean	    |	  	是否启用callSer模块。如需用到透明通道、呼叫、队列等功能需要开启   |


<h3 id=CRVideo_MediaInfoObj>CRVideo_MediaInfoObj</h3>

>影音文件信息

- **Type**: object

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
| userID |string	    |用户id	     |
| state|number       |	播放状态 0:播放 1:暂停 2:未播放	|
| mediaName|string       |	影音文件名	|

<h3 id=CRVideo_MemberInfo>CRVideo_MemberInfo</h3>

>成员信息

- **Type**: object

| 名称     | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|userID|	string|	用户ID|
|nickname	|string|	昵称|
|audioStatus|	[CRVideo_ASTATUS](Constant.md#CRVideo_ASTATUS)	|音频状态，数值参考麦克风状态|
|videoStatus|	[CRVideo_VSTATUS](Constant.md#CRVideo_VSTATUS)|视频状态，数值参考摄像头（视频）状态定义|

<h3 id=CRVideo_QueueInfo>CRVideo_QueueInfo</h3>

>队列信息

- **Type**: object

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|queID	|string	|队列ID|
|name	|string	|队列名称|
|desc	|string|	队列描述|
|prio	|number|	优先级，值越小优先级越高|


<h3 id=CRVideo_ClientStatus>CRVideo_ClientStatus</h3>

>客户状态

- **Type**: object

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|callInfo	|object	|呼叫状态，若无该字段则不在呼叫，属性参考[CRVideo_SessionInfo](#CRVideo_SessionInfo)|
|queuingInfo	|object	|当前排队状态，若无该字段则当前不在排队，属性参考[CRVideo_QueuingInfo](#CRVideo_QueuingInfo)|


<h3 id=CRVideo_ServingStatus>CRVideo_ServingStatus</h3>

>客户状态

- **Type**: object

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|callInfo	|object	|呼叫状态，若无该字段则不在呼叫，属性参考[CRVideo_SessionInfo](#CRVideo_SessionInfo)|
|queIDs	|array	|当前服务的队列数组|

<h3 id=CRVideo_UserStatus>CRVideo_UserStatus</h3>

>用户在线状态

- **Type**: object

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|userID	|string	|在线用户的UID|
|userStatus	|number	|用户的在线状态(0离线 ；1在线空闲 ；2在线忙碌；3在线房间中)|
|isDND|number|	用户免打扰状态（0代表关闭免打扰，其它值代表开启免打扰）|

<h3 id=CRVideo_QueuingInfo>CRVideo_QueuingInfo</h3>

>排队信息

- **Type**: object

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|queID	|string	|队列ID 我排的队列|
|position	|string	|我的位置|
|queuingTime|	string|	我排队的时长（单位s）|

<h3 id=CRVideo_ScreenShareCfgObj>CRVideo_ScreenShareCfgObj</h3>

>屏幕共享配置对象

- **Type**: object

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|catchRect|	object|	{"left":xx,"top":xx,"width":xx,"height":xx}用于实现区域共享|
|catchWnd|	number|	共享窗口的窗口句柄，用于实现窗口共享|
|maxFPS	|number|	最大帧率, 缺省为8 （当网络发不动时，帧率会自动下降）|
|maxKbps|	number|	最大码率，缺省为800kbps|

<h3 id=CRVideo_SessionInfo>CRVideo_SessionInfo</h3>

>呼叫信息

- **Type**: object

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|callID|	string|	房间的呼叫ID|
|peerID	|string	|房间的目标用户ID|
|peerName|	string|	房间的目标用户昵称|
|callState	|number|	呼叫是否被对方接受 0:暂未接受，1:已接受|
|meetInfo	|object	| 分配的房间对象，参考[CRVideo_MeetInfoObj](#CRVideo_MeetInfoObj) |
|duration|	number|	房间持续的时长（单位s）|


<h3 id=CRVideo_VideoIDsObj>CRVideo_VideoIDsObj</h3>

>视频设备对象

- **Type**: object

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
| userID	| string	| 用户ID|
| videoID	| string	| 设备id|



<h3 id=CRVideo_Board>CRVideo_Board</h3>

>白板信息

- **Type**: object

| 参数    | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|userID	|string	|用户ID|
|boardID|	number|	白板id|
|title	|string|	白板名称|
|width|	number|	白板宽度|
|height	|number	|白板高度|


<h3 id=CRVideo_QueInfo>CRVideo_QueInfo</h3>

>队列信息

- **Type**: object

| 参数    | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|queID|	number|	队列id|
|name	|number|	队列名称|
|desc	|string|	队列描述|
|prio	|number|	优先级，值越小优先级越高|

<h3 id=CRVideo_QueStatus>CRVideo_QueStatus</h3>

>队列状态

- **Type**: object

| 参数    | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|queID| 	number| 	队列id|
|agent_num	| number| 	坐席数量|
|wait_num| 	number| 	排队客户数量|
|srv_num	| number| 	正在服务的客户数量|

<h3 id=CRVideo_QueUser>CRVideo_QueUser</h3>

>队列用户信息

- **Type**: object

| 参数    | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|queID	|number|	队列ID|
|usrID	|string|	用户ID|
|name	|string|	用户昵称|
|queuingTime|	string|	已排队时长（秒）|
|usrExtDat	|string|	用户排队时携带的扩展数据|

<h3 id=CRVideo_Rect>CRVideo_Rect</h3>

>区域

- **Type**: object

| 参数    | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|left	| number| 	区域右上角x坐标|
|top	|number| 	区域右上角y坐标|
|width	| number| 	区域宽度|
|height| 	number| 	区域高度|

<h3 id=CRVideo_SubPage>CRVideo_SubPage</h3>

>子功能区信息

- **Type**: object

| 参数    | 类型        |   说明               |
|:-------- |:-----------|:----------           |
|userID	|number|	用户ID|
|boardID	|number|	白板id|

<h3 id=CRVideo_MixerCfgObj>CRVideo_MixerCfgObj</h3>

- **混图器规格配置**

```json
{"width":640,"height":360,"frameRate":8,"bitRate":500000,"defaultQP":28,"gop":120}
```

- **Type**: object

| 参数    | 类型        |   说明               |
|:-------- |:-----------|:----------           |
|width	|number|	图像宽度（要求8的倍数）|
|height	|number|	图像高度（要求8的倍数）|
|frameRate	|number|	图像帧率，取值范围:1-30(值越大,cpu要求更高，录像推荐15帧，直播推存25帧)|
|bitRate	|number|	录制视频文件的最高码率，当图像变化小时，实际码率会低于此值|
|defaultQP	|number|	录制视频文件的目标质量，缺省值：26。取值范围：0~51，0表示完全无损, 51表示质量非常差，推荐高质量取值18，中质量26， 低质量34|
|gop	|number|	I帧周期(I帧越少码率越小，但直播延时会越大）； 文件录制建议15秒一个I帧取值：frameRate x 15（frameRate的15倍）； 直播建议4秒一个I帧取值: frameRate x 4（frameRate的4倍）;|


<h3 id=CRVideo_MutiMixerCfgsObj>CRVideo_MutiMixerCfgsObj</h3>

- **混图器规格配置列表**

```json

[
  {"id":"1", 
  "cfg":{"width":640,"height":360,"frameRate":8,"bitRate":500000,"defaultQP":28,"gop":120}
  }
]
```

- **Type**: object

| 参数    | 类型        |   说明               |
|:-------- |:-----------|:----------           |
|id 	|number|	混图器编号|
|cfg 	|CRVideo_MixerCfgObj|	混图器规格配置，参见[CRVideo_MixerCfgObj](TypeDefinitions.md#CRVideo_MixerCfgObj)|

<h3 id=CRVideo_MixerContentObj>CRVideo_MixerContentObj</h3>

- **混图器内容配置**

```json
[{
  "type":0,
  "keepAspectRatio":1,
  "left":5,
  "top":10,
  "width":633,
  "height":356,
  "param":{"camid":"usr1.1"}
},{
  "type":0,
  "keepAspectRatio":1,
  "left":642,
  "top":10,
  "width":633,
  "height":356,
  "param":{"camid":"usr2.1"}
}]
```

- **Type**: object

| 参数    | 类型        |   说明               |
|:-------- |:-----------|:----------           |
|left	|number|	在混图画面中的区域（水平位置）|
|top	|number|	在混图画面中的区域（垂直位置）|
|width	|number|	在混图画面中的区域（尺寸---宽）|
|height	|number|	在混图画面中的区域（尺寸---高）|
|type	|[CRVideo_MIXER_VCONTENT_TYPE](Constant.md#CRVideo_MIXER_VCONTENT_TYPE)|请见后面type描述;|
|keepAspectRatio	|number|	内容保持原始比例，0不保持，1保持|
|param	|object|	如：{"camid":"usr2.1"}。请见后面param支持的参数;|
> type描述：

> * 0.当type=0时，表示混图的是摄像头，param必须包含camid
> * 3.当type=3时，表示混图的是影音共享，不用附加任何参数
> * 4.当type=4时，表示混图的是时戳，不用附加任何参数
> * 5.当type=5时，表示混图的是远端共享的屏幕，不用附加任何参数
> * 6.当type=6时，表示混图的是白板，不用附加任何参数。
> * 7.当type=7时，表示混图的是文本(支持简单html)，param必须包含resourceid和text 
> * 注type=7 时，width和height可为0，此时元素大小由文本信息自动确定



> param 支持的参数如下：

> * 1.camid 用户id.摄像头id, 如："testuser.1" 
> * 2.text 文件内容，支持一些简单的html标签，如：

```html
<span style=" font-weight:600; color:#00f;">客户姓名：</span>
<span style=" color:#00f;">张三</span> <br/> 
<span style=" font-weight:600; color:#00f;">录制日期：</span>
<span style=" color:#00f;">2018-03-01</span> 
```

<h3 id=CRVideo_MutiMixerContentsObj>CRVideo_MutiMixerContentsObj</h3>

- **混图器内容配置列表**

```json	
[{
    "id": "1",
    "content": [{
      "type":0,
      "keepAspectRatio":1,
      "left":5,
      "top":10,
      "width":633,
      "height":356,
      "param":{"camid":"usr1.1"}
    },{
      "type":0,
      "keepAspectRatio":1,
      "left":642,
      "top":10,
      "width":633,
      "height":356,
      "param":{"camid":"usr2.1"}
    }]
}]
```

- **Type**: object

| 参数    | 类型        |   说明               |
|:-------- |:-----------|:----------           |
|id 	|number|	混图器编号|
|content 	|CRVideo_MixerContentObj|	混图器内容配置，参见[CRVideo_MixerContentObj](TypeDefinitions.md#CRVideo_MixerContentObj)|

<h3 id=CRVideo_MixerOutputObj>CRVideo_MixerOutputObj</h3>

- **混图器输出配置** 

```json
[
  {"type":0,"filename":"D:/1.mp4"},  
  {"type":1,"liveUrl":"rtmp://xxx"},

]
```

- **Type**: object

>  当type==MIXOT_FILE (即 0)，可携带以下参数：


| 参数    | 类型        |   说明               |
|:-------- |:-----------|:----------           |
|type 	|number|	输出类型[CRVideo_MIXER_OUTPUT_TYPE](Constant.md#CRVideo_MIXER_OUTPUT_TYPE)|
|filename 	|string|	录像路径文件名（本地录像名格式如：d:/1.mp4，服务器录像名格式如：/2018-11-21/1.mp4），支持的文件格式为mp4/ts/flv/avi，其中flv和ts两种格式在程序异常结束时产生的录制文件仍可用。|

> 当type==MIXOT_LIVE(即 1)，可携带以下参数：  

| 参数    | 类型        |   说明               |
|:-------- |:-----------|:----------  
|type 	|number|	输出类型[CRVideo_MIXER_OUTPUT_TYPE](Constant.md#CRVideo_MIXER_OUTPUT_TYPE)|
|liveUrl 	|string|	直播推流地址，支持rtmp/rtsp； |
|errRetryTimes  	|number|	直播推流异常时，重试次数|




<h3 id=CRVideo_MutiMixerOutputsObj>CRVideo_MutiMixerOutputsObj</h3>

- **混图器输出配置列表** 

```json
[
   {

        "id": "1",
        "output": [
            {"type": 0,"filename": "D:/1.mp4"},
            {"type": 1,"liveUrl": "rtmp://xxx"}]
   }
]
```

- **Type**: object

| 参数    | 类型        |   说明               |
|:-------- |:-----------|:----------           |
|id 	|number|	混图器编号|
|output  	|混图器输出配置|	参见[CRVideo_MixerOutputObj](TypeDefinitions.md#CRVideo_MixerOutputObj)|


<h3 id=CRVideo_MixerOutputInfoObj>CRVideo_MixerOutputInfoObj</h3>

- **录制文件、直播信息**  

```json
{"state":2, "duration":100，"fileSize":10000}
```

- **Type**: object

| 参数    | 类型        |   说明               |
|:-------- |:-----------|:----------           |
|state  	|number|	状态，请见后面描述;|
|duration  	|number|	录像文件时长，单位：毫秒;|
|fileSize  	|number|	录像文件大小；|
|errCode  	|number|	[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)|

>state状态描述:

>   0:输出对象已创建;

>   1:输出目标信息更新; 可以从结构中取得：duration, fileSize参数；

>   2:输出对象已关闭; 可以从结构中取得：duration, fileSize参数；

>   3:输出对象异常；可以从结构中取得：err参数；


<h3 id=CRVideo_MeetInfoObj>CRVideo_MeetInfoObj</h3>

>房间对象


```json
{"ID":100,
"pswd":"",
"subject":"test",
"pubMeetUrl":"www.cloudroom.com/auzjie",
"creator":"testuser",
"memberCount":4,
"startTime": 123455}

```

属性        | 值
--------    | ---
ID          |  房间号，0：代表房间信息无效
pswd        |  房间密码；（空代表房间无密码）
subject     |  房间主题
pubMeetUrl  |  房间公共链接
creator     |  房间创建者
memberCount |  房间内人数
startTime   | 会议开始时间(从1970年1月1日00:00:00起)


<h3 id=CRVideo_MeetInfoObjs>CRVideo_MeetInfoObjs</h3>

>房间对象列表


```json
[{"ID":100,
"pswd":"",
"subject":"test",
"pubMeetUrl":"www.cloudroom.com/auzjie",
"creator":"testuser",
"memberCount":4},
{"ID":100,
"pswd":"",
"subject":"test",
"pubMeetUrl":"www.cloudroom.com/auzjie",
"creator":"testuser",
"memberCount":4},... ]
```

<h3 id=CRVideo_MemberObj>CRVideo_MemberObj</h3>

>成员对象

```json
{"userID":"111",
"nickName":"aaa",
"audioStatus":"1",
"videoStatus":"1"}
```

属性            | 值
--------        | ---
userID          |  用户ID
nickName        |  用户昵称
audioStatus     |  音频状态,数值参考麦克风状态[CRVideo_ASTATUS](Constant.md#CRVideo_ASTATUS)
videoStatus     |  视频状态,数值参考视频状态定义[CRVideo_VSTATUS](Constant.md#CRVideo_VSTATUS)

<h3 id=CRVideo_MembersObj>CRVideo_MembersObj</h3>

>成员对象列表

```json
[{"userID":111,"nickName":"aaa",
"audioStatus":1,"videoStatus":1},
{"userID":222,"nickName":"bbb",
"audioStatus":1,"videoStatus":1}]
```

<h3 id=CRVideo_VideoInfoObj>CRVideo_VideoInfoObj</h3>

>用户视频信息

```json
{"userID":"111",
"videoID":2,
"videoName":"camera2"}
```

属性            | 值
--------        | ---
userID          |  用户id
videoID       |  设备id
videoName     |  设备名称
isIPCamera     |  是否为网络摄像头 （只有获取自已的才有此字段）


<h3 id=CRVideo_VideoInfosObj>CRVideo_VideoInfosObj</h3>

>用户视频信息列表

```json
[
{"userID":"111","videoID":1,
"videoName":"camera1"},
{"userID":"111","videoID":2,
"videoName":"camera2"},,...
]
```

<h3 id=CRVideo_VideoIDObjs>CRVideo_VideoIDObjs</h3>

>用户视频列表

```json
[
{"userID":"111","videoID":1},
{"userID":"111","videoID":2},...
]
```

属性            | 值
--------        | ---
userID          |  用户id
videoID       |  设备id

<h3 id=CRVideo_ScreenShareCfgObj>CRVideo_ScreenShareCfgObj</h3>

>屏幕共享配置

```json
屏幕共享：
{"maxFPS":8,
"maxKbps":800
}

区域共享：
{"maxFPS":8,
  "maxKbps":800, 
  "catchRect":{"left":0, "top":0,  "width":1920, "height":1080}
}

窗口共享：
{"maxFPS":8,
  "maxKbps":800, 
  "catchWnd":134080
  }
```

属性            | 值
--------        | ---
catchRect       |  {"left":10,"top":10,"width":100,"height":100}用于实现区域共享
catchWnd       |  共享窗口的窗口句柄，用于实现窗口共享
maxFPS       |  最大帧率, 缺省为8 (当网络发不动时，帧率会自动下降)
maxKbps       | 最大码率，缺省800kbps


<h3 id=CRVideo_RecordVideosObj>CRVideo_RecordVideosObj</h3>

>影音文件

```json
{ "userID":"111", "state":1, "mediaName":"D:/1.mp4"}
```

属性            | 值
--------        | ---
userID          |  用户id径
state       |   播放状态 0:播放 1:暂停 2:未播放
mediaName       |  影音文件名

<h3 id=CRVideo_BoardObj>CRVideo_BoardObj</h3>

>白板对象

```json
{ 
  "boardID":"x",
  "title": "board",
  "width": 1024,
  "height":768,
  "pageCount":1
}
```

属性            | 值
--------        | ---
boardID         |  白板标识
title      |   白板的名字
width、height      |  白板的宽、高
pageCount    |  白板页数

<h3 id=CRVideo_BoardObjs>CRVideo_BoardObjs</h3>

>白板信息列表

```json
[
  {"boardID":"a","title":"board","width":1024,"height":768,"pageCount":1},
  {"boardID":"b","title":"board","width":1024,"height":768,"pageCount":1}
]
```

<h3 id=CRVideo_BoardPageObj>CRVideo_BoardPageObj</h3>

>白板页初始化对象

```json
[
  {
    "pageNo": 0,
    "elementList": []
  },{
    "pageNo": 1,
    "elementList": []
  }
]
```

属性            | 值
--------        | ---
pageNo       |  白板页序号
elementList  |  此页的所有图元


<h3 id=CRVideo_BoardElementObjs>CRVideo_BoardElementObjs</h3>

>白板图元列表

```json
[
{ "elementID": "xx", "type":100, 
"orderID":0, "left":0, "top":0}
{ "elementID":"yy", "type":100, 
"orderID":0, "left":100, "top":100}
]
```


<h3 id=CRVideo_BoardElementObj>CRVideo_BoardElementObj</h3>

>白板图元

```json
{ "elementID": "xx", "type":100, "left":0, "top":0, …   }
```

属性            | 值
--------        | ---
elementID         |  图元id
type      |   图元的类型，值100以下为云屋保留值，100及以上为自定义值
left、top     |  图元在页内的左上角位置
…    |  可自由扩展
说明：    | <p>1.elementID必须调用createElementID（）获取, 即使是曾经调此接口创建的然后存入了磁盘文件，再次读入房间时，所有elementID也需要重新生重。</p><p>2.如果要和云屋产品互通，那就需要按云屋的定义取值，可以联系云屋获取相关文档</p>


<h3 id=MeetingAttrOptions>MeetingAttrOptions</h3>

>操作房间属性选项

```json
{"notifyAll":1}
```

属性        |类型    | 值
--------    |----    | ---
notifyAll    |   number  |  1：通知房间所有人员，0（默认值）:不通知。



<h3 id=CRVideo_MeetingAttrOptions>MeetingAttrObjs</h3>

>会议属性集

```json
{
    "userdef Key1": {
        "value": "11111",
        "lastModifyUserID": "111",
        "lastModifyTs": 11111
    },
    "userdef Key2": {
        "value": "22222",
        "lastModifyUserID": "222",
        "lastModifyTs": 22222
    }
}
```

属性        |类型    | 值
--------    |----    | ---
value    |   string  |  属性值
lastModifyUserID    |   string  |  最后修改者
lastModifyTs    |   number  |  最后的修改时间，1970-1-1 0:00:00以来的秒数


<h3 id=CRVideo_UsrMeetingAttrObjs>UsrMeetingAttrObjs</h3>

>用户属性集

```json
{
    "userid1": {
        "userdef Key1": {
            "value": "11111",
            "lastModifyUserID": "111",
            "lastModifyTs": 11111
        },
        "userdef Key2": {
            "value": "22222",
            "lastModifyUserID": "222",
            "lastModifyTs": 22222
        }
    },
    "userid2": {
        "userdef Key1": {
            "value": "11111",
            "lastModifyUserID": "111",
            "lastModifyTs": 11111
        },
        "userdef Key2": {
            "value": "22222",
            "lastModifyUserID": "222",
            "lastModifyTs": 22222
        }
    }
}
```

属性        |类型    | 值
--------    |----    | ---
value    |   string  |  属性值
lastModifyUserID    |   string  |  最后修改者
lastModifyTs    |   number  |  最后的修改时间，1970-1-1 0:00:00以来的秒数