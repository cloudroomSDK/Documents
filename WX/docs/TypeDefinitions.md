# 类型定义

<h2 id=CRVideo_InitObj>CRVideo_InitObj</h2>

> 初始化配置

- **Type**:object


| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
| isCallSer |boolean	    |	  	是否启用callSer模块。如需用到透明通道、呼叫、队列等功能需要开启   |


<h2 id=CRVideo_MediaInfoObj>CRVideo_MediaInfoObj</h2>

>影音文件信息

- **Type**: object

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
| userID |string	    |用户id	     |
| state|number       |	播放状态 0:播放 1:暂停 2:未播放	|
| mediaName|string       |	影音文件名	|

<h2 id=CRVideo_MemberInfo>CRVideo_MemberInfo</h2>

>成员信息

- **Type**: object

| 名称     | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|userID|	string|	用户ID|
|nickname	|string|	昵称|
|audioStatus|	number |音频状态，数值参考[CRVideo_ASTATUS](Constant.md#CRVideo_ASTATUS)|
|videoStatus|	number |视频状态，数值参考[CRVideo_VSTATUS](Constant.md#CRVideo_VSTATUS)|

<h2 id=CRVideo_QueueInfo>CRVideo_QueueInfo</h2>

>队列信息

- **Type**: object

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|queID	|string	|队列ID|
|name	|string	|队列名称|
|desc	|string|	队列描述|
|prio	|number|	优先级，值越小优先级越高|


<h2 id=CRVideo_ClientStatus>CRVideo_ClientStatus</h2>

>客户状态

- **Type**: object

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|callInfo	|object	|呼叫状态，若无该字段则不在呼叫，属性参考[CRVideo_SessionInfo](#CRVideo_SessionInfo)|
|queuingInfo	|object	|当前排队状态，若无该字段则当前不在排队，属性参考[CRVideo_QueuingInfo](#CRVideo_QueuingInfo)|


<h2 id=CRVideo_ServingStatus>CRVideo_ServingStatus</h2>

>客户状态

- **Type**: object

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|callInfo	|object	|呼叫状态，若无该字段则不在呼叫，属性参考[CRVideo_SessionInfo](#CRVideo_SessionInfo)|
|queIDs	|array	|当前服务的队列数组|

<h2 id=CRVideo_UserStatus>CRVideo_UserStatus</h2>

>用户在线状态

- **Type**: object

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|userID	|string	|在线用户的UID|
|userStatus	|number	|用户的在线状态(0离线 ；1在线空闲 ；2在线忙碌；3在线房间中)|
|isDND|number|	用户免打扰状态（0代表关闭免打扰，其它值代表开启免打扰）|

<h2 id=CRVideo_QueuingInfo>CRVideo_QueuingInfo</h2>

>排队信息

- **Type**: object

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|queID	|string	|队列ID 我排的队列|
|position	|string	|我的位置|
|queuingTime|	string|	我排队的时长（单位s）|

<h2 id=CRVideo_SessionInfo>CRVideo_SessionInfo</h2>

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


<h2 id=CRVideo_VideoIDsObj>CRVideo_VideoIDsObj</h2>

>视频设备对象

- **Type**: object

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
| userID	| string	| 用户ID|
| videoID	| string	| 设备id|


<h2 id=CRVideo_QueStatus>CRVideo_QueStatus</h2>

>队列状态

- **Type**: object

| 参数    | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|queID| 	number| 	队列id|
|agent_num	| number| 	坐席数量|
|wait_num| 	number| 	排队客户数量|
|srv_num	| number| 	正在服务的客户数量|

<h2 id=CRVideo_QueUser>CRVideo_QueUser</h2>

>队列用户信息

- **Type**: object

| 参数    | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|queID	|number|	队列ID|
|usrID	|string|	用户ID|
|name	|string|	用户昵称|
|queuingTime|	string|	已排队时长（秒）|
|usrExtDat	|string|	用户排队时携带的扩展数据|

<h2 id=CRVideo_MeetInfoObj>CRVideo_MeetInfoObj</h2>

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

<h2 id=CRVideo_VideoInfosObj>CRVideo_VideoInfosObj</h2>

>用户视频信息列表

```json
[
{"userID":"111","videoID":1,
"videoName":"camera1"},
{"userID":"111","videoID":2,
"videoName":"camera2"},,...
]
```

<h2 id=CRVideo_BoardObj>CRVideo_BoardObj</h2>

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

<h2 id=CRVideo_BoardObjs>CRVideo_BoardObjs</h2>

>白板信息列表

```json
[
  {"boardID":"a","title":"board","width":1024,"height":768,"pageCount":1},
  {"boardID":"b","title":"board","width":1024,"height":768,"pageCount":1}
]
```

<h2 id=CRVideo_BoardPageObj>CRVideo_BoardPageObj</h2>

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

<h2 id=MeetingAttrOptions>MeetingAttrOptions</h2>

>操作房间属性选项

```json
{"notifyAll":1}
```

属性        |类型    | 值
--------    |----    | ---
notifyAll    |   number  |  1：通知房间所有人员，0（默认值）:不通知。



<h2 id=CRVideo_MeetingAttrOptions>MeetingAttrObjs</h2>

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


<h2 id=CRVideo_UsrMeetingAttrObjs>UsrMeetingAttrObjs</h2>

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

<h2 id=CloudMixerCfgObj>CloudMixerCfgObj</h2>

>云端混图器配置

- **Type**:object

```json
//为房间中所有人录制独立的声音文件，独立的默认摄像头视频文件
{
    "mode": 1,
    "audioFileCfg": {
        "svrFileNameSuffix": ".mp3",
        "svrPath": "/xxx",
        "subscribeAudios": ["_cr_all_"]
    },
    "videoFileCfg": {
        "aStreamType": 1,
        "svrFileNameSuffix": ".mp4",
        "svrPath": "/xxx",
        "subscribeVideos": ["_cr_allDefCam_"]
    }
}

//录制一个2分屏左右布局图像+房间声音的mp4文件
{
    "mode": 0,
    "videoFileCfg": {
        "svrPathName": "/2021-09-24/2021-09-24_13-47-41_Win32_73542046.mp4",
        "vWidth": 1280,
        "vHeight": 720,
        "vFps": 15,
        "layoutConfig": [
            {
                "type": 0,
                "top": 180,
                "left": 0,
                "width": 640,
                "height": 360,
                "keepAspectRatio": 1,
                "param": {"camid": "1.-1"}
            },
            {
                "type": 0,
                "top": 180,
                "left": 640,
                "width": 640,
                "height": 360,
                "keepAspectRatio": 1,
                "param": {"camid": "2.-1"}
            }
        ]
    }
}

```

| 参数 | 类型 | 说明 | 是否必传 |
| :- | :- | :- | :- |
| mode |number　| 录制模式，取值范围：</br>0-合流模式：将声音录制到一个声音文件、或将声音图像录制成一个视频文件；</br>1-单流模式：将涉及到的声音流、图像流存到各自独立的文件中； | 是 |
| audioFileCfg | [CloudMixerAudioFileCfg](#CloudMixerAudioFileCfg) | 生成音频文件配置，生成规则：进入房间并开启麦克风开始生成文件，离开房间结束生成文件 | 否 |
| videoFileCfg | [CloudMixerVideoFileCfg](#CloudMixerVideoFileCfg) | 生成视频文件配置，生成规则：进入房间并开启摄像头开始生成文件，离开房间结束生成文件 | 否 |
| storageConfig | [CloudStorageConfig](#CloudStorageConfig) | 云存储配置，不配置时将存储在云屋服务器上 | 否 |




<h2 id=CloudMixerAudioFileCfg>CloudMixerAudioFileCfg</h2>

>云端录制语音文件配置

- **Type**:object

单流模式参数：

| 参数 | 类型 | 说明 | 是否必传 |
| :- | :- | :- | :- |
| svrPath |string | 服务器存储路径，默认为空 | 否 |
| svrFileNameSuffix | string | 文件名后缀，支持：“.mp3”、“.wav”</br>文件命名规则：昵称_房间号_开始时间.后缀 | 是 |
| subscribeAudios | array | 指定生成哪些人的音频文件；</br>取值：["\_cr_all\_"]或["userId1","userId2"]；</br>_cr_all_代表生成所有人；| 是 |

合流模式参数：

| 参数 | 类型 | 说明 | 是否必传 |
| :- | :- | :- | :- |
| svrPathName | string | 带服务器存储路径的文件名，文件格式支持“mp3”、“wav”，示例：/xxx/xxx/xxx.mp3 | 是 |
| aChannelType |number | 音频通道类型，取值范围：0-单声道，1-左右双声道，默认为0 | 否 |
| aChannelContent | array | 音频通道内容。</br></br>左右声道模式时：必须传入两个用户ID，如：["UserID1", "UserID2"]，第一个人的为左声道，第二个人为右声道）</br></br>单声道模式时：可选参数（默认为空），空代表所有人声音，要指定人员声音时传入：["UserID1","UserID2", "UserID3"] | 否 |



<h2 id=CloudMixerVideoFileCfg>CloudMixerVideoFileCfg</h2>

- **Type**:object

>云端录制视频文件配置

单流模式参数：

| 参数 | 类型 | 说明 | 是否必传 |
| :- | :- | :- | :- |
| svrPath | string | 服务器存储路径，默认为空 | 否 |
| svrFileNameSuffix | string | 文件名后缀，当前只支持：”.mp4”</br>文件命名规则：昵称_cam摄像头编号_房间号_开始时间.后缀 | 是 |
| subscribeVideos | array | 指定生成哪些人的摄像头对应的视频文件；</br>取值：["\_cr_all\_"]或["\_cr_allDefCam\_"]或["userId1.camId", "userId2.camId", ...]；</br>_cr_all_代表所有人所有摄像头，_cr_allDefCam_代表生成所有人的默认摄像头 | 是 |
| aStreamType | number | 视频文件内音频内容，取值：0-自己声音，1-所有人声音，默认0 | 否 |


合流模式参数：

| 参数 | 类型 | 说明 | 是否必传 |
| :- | :- | :- | :- |
| svrPathName | string | 带路径的文件名，文件格式支持：mp4、flv、ts、avi、rtmp://、rtsp://，可选一个或多个，以“;”分隔；</br>示例：”/xxx/xxx.mp4;rtmp://xxx1;rtmp://xxx2;” | 是 |
| aChannelType | number | 音频通道类型，取值：0-单声道，1-左右双声道，默认为0 | 否 |
| aChannelContent | array | 音频通道内容。</br></br>左右声道模式时：必须传入两个用户ID，如：["UserID1", "UserID2"]，第一个人的为左声道，第二个人为右声道）</br></br>单声道模式时：可选参数（默认为空），空代表所有人声音，要指定人员声音时传入：["UserID1","UserID2", "UserID3"] | 否 |
| vWidth | number | 视频宽度 | 是 |
| vHeight | number | 视频高度 | 是 |
| vFps | number | 视频帧率，取值0-30, 默认值12 | 否 |
| vBps | number | 视频码率，默认会根据视频尺寸生成码率 | 否 |
| vQP | number | 视频质量，取值0~51(0表示完全无损, 51表示质量非常差)，推荐高质量取值18，中质量25，低质量34， 默认值19 | 否 |
| layoutConfig | array | 布局内容列表，[[MixerContentObj](#CRVideo_MixerContentObj),[MixerContentObj](#CRVideo_MixerContentObj)，...] | 是 |



<h2 id=CloudStorageConfig>CloudStorageConfig</h2>

>云端录制存储配置

- **Type**:object

| 参数 | 类型 | 说明 | 是否必传 |
| :- | :- | :- | :- |
| vendor | number | 第三方云存储平台： 1-阿里云 | 是 |
| region | string | 第三方云存储指定的地区信息 | 是 |
| bucket | string | 第三方云存储的 bucket | 是 |
| accessKey | string | 第三方云存储的 access key | 是 |
| secretKey | string | 第三方云存储的 secret key | 是 | 

<h2 id=CRVideo_MixerContentObj>MixerContentObj</h2>

>混图器内容配置

- **Type**:object

```json
{
  "type": 0, 
  "keepAspectRatio": 1,
  "left": 5,
  "top": 10, 
  "width": 633,
  "height": 356,
  "param": {
    "camid": "usr1.1"
  }
}
```

| 参数    | 类型        |   说明               |
|:-------- |:-----------|:----------           |
|left	|number|	在混图画面中的区域（水平位置）|
|top	|number|	在混图画面中的区域（垂直位置）|
|width	|number|	在混图画面中的区域宽 |
|height	|number|	在混图画面中的区域高 |
|type	|number|请见后面type描述|
|keepAspectRatio	|number|	内容保持原始比例，0不保持，1保持|
|param	|object|	如：{"camid":"usr2.1"}。请见后面param支持的参数|
> type描述：

> * 当type=0时，表示混图的是摄像头，param必须包含camid；
> * 当type=3时，表示混图的是影音共享，不用附加任何参数；
> * 当type=5时，表示混图的是共享的屏幕，不用附加任何参数；
> * 当type=6时，表示混图的是白板，不用附加任何参数；
> * 当type=10时，表示混图的是文本，width和height将被忽略，元素大小由文本信息自动确定。 param必须包含text，可选color，background，font-size，text-margin；

> param 支持的参数如下：

> * camid：用户id.摄像头id, 如："testuser.1"
> * text：文本内容，支持时间戳参数"%timestamp%"，格式为：YYYY-MM-DD HH:MM:SS 
> * color：文本颜色，格式：#RRGGBB[AA]， 默认#FFFFFF
> * background：背景色，格式：#RRGGBB[AA]， 默认#0000007D
> * font-size：字体大小，默认18
> * text-margin：边距，默认5

<h2 id=CloudMixerInfo>CloudMixerInfo</h2>

>云端混图器信息

- **Type**:object

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| ID | string | 混图器ID |
| owner | string | 创建者用户ID |
| cfg | object | 录制配置，参见[CloudMixerCfgObj](#CloudMixerCfgObj) |
| state | number | 录制状态，参见[MIXER_STATE](Constant.md#CRVideo_MIXER_STATE) |

<h2 id=CloudMixerOutputInfo>CloudMixerOutputInfo</h2>

>云端混图器输出信息

- **Type**:object

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| id | string | 混图器ID |
| state | number | 具体参考[OUTPUT_STATE](Constant.md#CRVIDEOSDK_OUTPUT_STATE)
| svrFilePathName | string | 录像路径文件名 |
| startTime | number | 创建时间(从1970年1月1日00:00:00起的毫秒数)，当state为2时才有该参数 |
| duration | number | 录像时长(ms)，当state为2时才有该参数 |
| fileSize | number | 文件大小(Byte)，当state为2时才有该参数 |
| errCode | number | [错误码](Constant.md#CRVIDEOSDK_ERR_DEF), 当state为3时才有该参数 |
| errDesc | string | 错误描述, 当state为3时才有该参数 |
