# 类型定义

<h1 id=TypeDefinitions>类型定义</h1>

<h3 id=CRVideo_AddFileToRecordMgr>CRVideo_AddFileToRecordMgr</h3>

>添加本地文件到录制文件管理中

- **Type**:object

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
| fileName |string	    |文件名，不含路径	     |
| filePath|string       |	文件路径，不含文件名	|

<h3 id=CRVideo_AudioCfg>CRVideo_AudioCfg</h3>

>音频配置

- **Type**:object


| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
| micName |string	    |麦克风设备名称	     |
| speakerName|string       |	扬声器名称	|
| agc | number       |	是否开启声音增益，0：不开启；1：开启(默认值)	|
| ans | number       |	是否开启降噪，0：不开启；1：开启（默认值）	|
| aec | number       |	是否开启回声消除，0：不开启；1：开启（默认值）|


<h3 id=CRVideo_HttpReqInfoObj>CRVideo_HttpReqInfoObj</h3>

>Http文件传输请求对象 

```json

{ "bUploadType" : 1, "filePathName" : "D:/CloudroomVideoSDK_file/test.log",
 "httpUrl" : "http://10.0.7.130:8080/Upload/test.log" }


```

- **Type**: object

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|bUploadType|	number|	传输类型，0:下载类型，1:上传类型|
|filePathName	|string	|本地完整路径文件名|
|httpUrl	|string|	目标URL|
|extParams |	object|	上传给http server的扩展参数, 缺省放在http header中。其它方式参见transforCfg中的extParamsTransType配置。|
|transforCfg |	object|	特殊处理配置，字典数据.例如： {"transforCfg": {'fileEncrypt':0}}   <p>详细如下：</p><p>（1）fileEncrypt：此参数仅上传有效。0:文件未加密，1:云屋录制加密文件（上传时要先解密）</p><p>（2）extParamsTransfType:此参数仅上传有效。当取值缺省或为0时:extParams在header中传送。取值为1时:extParams在multipart/form-data中传送</p>|



<h3 id=CRVideo_HttpFileInfoObj>CRVideo_HttpFileInfoObj</h3>

>Http文件传输状态信息对象

```json

{ "bUploadType" : 1, "filePathName" : "D:/CloudroomVideoSDK_file/test.log",
"fileVersion" : "V1.0", "httpUrl" : "http://10.0.7.130:8080/Upload/",
"fileSize" : 53788511, "finishedSize" : 53788511,  "state" : 3 }

```

- **Type**: object

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|bUploadType|	number|	传输类型，0:下载类型，1:上传类型|
|filePathName	|string	|本地完整路径文件名|
|fileVersion|	string|	文件版本（可以填版本号，也可以md5，也可以为空）|
|httpUrl	|string|	目标URL|
|transforDeal|	object|	特殊处理配置，字典数据|
|extHeaders|	object|	http头部扩展信息，字典数据。|
|fileSize	|number	|文件大小|
|finishedSize|	number|	已传输大小|
|state	|CRVideo_HTTP_TRANSFER_STAT|	文件传输状态，详见：[CRVideo_HTTP_TRANSFER_STATE](Constant.md#CRVideo_HTTP_TRANSFER_STATE)|


<h3 id=CRVideo_HttpFileInfoObjs>CRVideo_HttpFileInfoObjs</h3>

>Http文件传输状态信息对象列表

```json

[ { "bUploadType" : true, "filePathName" : "D:/CloudroomVideoSDK_file/test.log",
"fileVersion" : "V1.0", "httpUrl" : "http://10.0.7.130:8080/Upload/", "transforDeal" : {},
"fileSize" : 53788511, "finishedSize" : 53788511,  "state" : 3 }
]


```

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

```json

{"queID":0,"name":"aaa","desc":"this is desc","prio":1}

```

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|queID	|string	|队列ID|
|name	|string	|队列名称|
|desc	|string|	队列描述|
|prio	|int|	优先级，值越小优先级越高|

<h3 id=CRVideo_QueueStatusObj>CRVideo_QueueStatusObj</h3>

>队列状态

```json

{"queID":0,"agent_num":12,"wait_num":3,"srv_num":11}

```

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|queID	|string	|队列ID|
|agent_num	|int	|坐席数|
|wait_num	|int|等待人数|
|srv_num	|int|	正在服务人数|

<h3 id=CRVideo_QueuingInfo>CRVideo_QueuingInfo</h3>

>排队信息

- **Type**: object

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|queID	|string	|队列ID 我排的队列（-1:代表我没有排队；-2:代表我正在房间中,通过GetSessionInfo可获取相关信息）|
|position	|string	|我的位置|
|queuingTime|	string|	我排队的时长（单位s）|

<h3 id=CRVideo_RecordFileInfo>CRVideo_RecordFileInfo</h3>

>录制文件信息

- **Type**: object

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|fileName	|string|	文件名，全路径|
|size	|number|	文件大小（字节）|
|duration	|number|	文件时长（毫秒）|
|state|	number|	0没有上传，1上传中，2 上传完毕|
|uploadPercent|	number |	上传进度，state为1时关注此字段|
|httpUrl| string|文件的http访问地址（只有上传到云屋服务器此字段才有效）|

<h3 id=CRVideo_RecordUploadCfg>CRVideo_RecordUploadCfg</h3>

>上传配置参数

- **Type**: object

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|type	|number	|0:云屋网盘（默认），1:http|
|speakerName	|string	|上传地址|

<h3 id=CRVideo_RecordVideoInfo>CRVideo_RecordVideoInfo</h3>

>需要录制的视频信息

- **Type**: object

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|left	|number	|左|
|top	|number	|上|
|width	|number	|宽|
|height|	number	|高|
|param	|object|	附加参数<p>Properties</p><p>Name Type Description</p>type [CRVideo_MIXER_VCONTENT_TYPE](Constant.md#CRVideo_MIXER_VCONTENT_TYPE)	录制类型

<h3 id=CRVideo_ScreenShareCfgObj>CRVideo_ScreenShareCfgObj</h3>

>屏幕共享配置对象

- **Type**: object

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|catchRect|	object|	{"left":xx,"top":xx,"width":xx,"height":xx}用于实现区域共享|
|catchWnd|	number|	共享窗口的窗口句柄，用于实现窗口共享|
|maxFPS	|number|	最大帧率, 缺省为8 （当网络发不动时，帧率会自动下降）|
|maxKbps|	number|	最大码率，缺省为800kbps|
|monitorID|	int|	显视器id，缺省或-1时共享的是主显视器|


<h3 id=CRVideo_SessionInfo>CRVideo_SessionInfo</h3>

>会话信息

- **Type**: object

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|callID|	string|	房间的呼叫ID|
|peerID	|string	|房间的目标用户ID|
|peerName|	string|	房间的目标用户昵称|
|bCallAccepted	|number|	呼叫是否被对方接受 0:暂未接受，1:已接受|
|meetingID	|number	|呼叫接受后，分配的房间ID|
|meetingPswd	|string|	房间密码|
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

<h3 id=CRVideo_ListDocFileRslt>CRVideo_ListDocFileRslt</h3>

>文档列表

```json
{
    "files": [ 
      {"ownerID": "","ownerName": "",
      "name": "","orgFileName":"",
       "md5": "","ctime": "",
       "size": "","orgSize":"",
       "convertStatus": ""},
      {"ownerID": "","ownerName": "",
      "name": "","orgFileName":"",
       "md5": "","ctime": "",
       "size": "","orgSize":"",
       "convertStatus": ""}
    ],
    "dirs": [
        "aaa",
        "bbb"
    ]
}
```

- **Type**: object

| 参数    | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|files | json数组| 查询目录下的所有文件 |
|dirs | string[]| 查询目录下的所有目录 |
|ownerID | string|  文件的所有者|
|ownerName | string| 文件所有者名称 |
|name | string| 在网盘里的文件名 |
|orgFileName | string| 原始文件名 |
|md5 | string| 文件的md5值 |
|ctime | string|  文件的上传时间|
|size | number|  压缩后在网盘里的文件大小|
|orgSize | number|  文件的原始大小|
|convertStatus | number| 文档的转换状态： 0, 代表转换完成; 1, 代表文档转换中; 2, 代表未转换（或转换失败） |

<h3 id=CRVideo_GetDocPageInfoRslt>CRVideo_GetDocPageInfoRslt</h3>

>获取文档页信息结果

```json
{
    "width": 1280,
    "height": 720,
    "fileList": ["/docxxx/page1", "/docxxx/page2"]
}
```

- **Type**: object

| 参数    | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|width | number|  文档的图像宽度|
|height | number|  文档的图像高度|
|fileList | string[]|  每页文档在服务器上的路径文件名|


<h3 id=CRVideo_VirtualBkCfg>CRVideo_VirtualBkCfg</h3>

>虚拟背景参数

```json

  {"type":1, "colorKey":"0,255,0", "bkImgFile":"d:\imgs\1.jpg"}

```

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
| type  | number  | 请参见[CRVideo_VIRTUALBK_TYPE](Constant.md#CRVideo_VIRTUALBK_TYPE)|
| colorKey  |  string | 颜色值r,g,b。 如:"0,255,0" |
| bkImgFile  |  string | 背景全路径文件名。（当前只支持jpg格式） |


<h3 id=CRVideo_GetMeetingsParam>CRVideo_GetMeetingsParam</h3>

>获取房间列表的参数

- **Type**: object

| 参数    | 类型        |   说明               |
|:-------- |:-----------|:----------           |
|QueryMode	|number|	0:查询全部， 1:查询我创建的房间|

<h3 id=CRVideo_CreatInfoObj>CRVideo_CreatInfoObj</h3>

>创建房间信息

- **Type**: object

| 参数    | 类型        |   说明               |
|:-------- |:-----------|:----------           |
|meetSubject	|string|	房间名称|
|needPswd	|number|	是否创建密码（0:房间无密码，1:系统为房间室创建一个密码）|
|isRegular	|number|	是否固定房间；（0:普通房间，房间室无人30分钟后，自动消毁; 1:固定房间，房间室一直存在直到用户主动消毁它）|

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
{"type":0,"keepAspectRatio":1,"left":5,"top":10,
"width":633,"height":356,"param":{"camid":"usr1.1"}},
{"type":0,"keepAspectRatio":1,"left":642,"top":10,
"width":633,"height":356,"param":{"camid":"usr2.1"}}
]
```

- **Type**: object

| 参数    | 类型        |   说明               |
|:-------- |:-----------|:----------           |
|left	|number|	在混图画面中的区域（水平位置）|
|top	|number|	在混图画面中的区域（垂直位置）|
|width	|number|	在混图画面中的区域（尺寸---宽）|
|height	|number|	在混图画面中的区域（尺寸---高）|
|type	|类型[CRVideo_MIXER_VCONTENT_TYPE](Constant.md#CRVideo_MIXER_VCONTENT_TYPE)|请见后面type描述;|
|keepAspectRatio	|number|	内容保持原始比例，0不保持，1保持|
|param	|json格式|	如：{"camid":"usr2.1"}。请见后面param支持的参数;|
> type描述：

> * 0.当type=MIXVTP_VIDEO时，表示混图的是摄像头，param必须包含camid.
> * 1.当type=MIXVTP_PIC时，表示混图的是指定的图片，param必须包含resourceid。（仅用于本地混图）
> * 2.当type=MIXVTP_SCREEN时，表示混图的是本地屏幕，param可以增加附加参数screenid/pid/area
> * 3.当type=MIXVTP_MEDIA时，表示混图的是影音共享，不用附加任何参数
> * 4.当type=MIXVTP_TIMESTAMP时，表示混图的是时戳，不用附加任何参数
> * 5.当type=MIXVTP_REMOTE_SCREEN时，表示混图的是远端共享的屏幕，不用附加任何参数
> * 6.当type=MIXVTP_WBOARD时，表示混图的是白板，不用附加任何参数。（仅用于云端混图，本地混图应该用MIXVTP_PIC)
> * 7.当type=MIXVTP_TEXT时，表示混图的是文本(支持简单html)，param必须包含resourceid和text 
> * 注 MIXVTP_TEXT时，width和height可为0，此时元素大小由文本信息自动确定



> param 支持的参数如下：

> * 1.camid 用户id.摄像头id, 如："testuser.1" 
> * 2.resourceid 具有唯一属性的字符串id，通过setPicResource(resourceid, picJsonVal)将图片存储到id内供混图模块使用
> * 3.screenid 屏幕序号，-1表示主屏
> * 4.pid 进程号
> * 5.area 抓屏区域:x,y,w,h, 如："10,20,400,800"，无此参数时代表抓全屏
> * 6.text 文件内容，支持一些简单的html标签，如：

```
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
        "content": [
         {"type":0,"keepAspectRatio":1,"left":5,"top":10,
         "width":633,"height":356,"param":{"camid":"usr1.1"}},
          {"type":0,"keepAspectRatio":1,"left":642,"top":10,
          "width":633,"height":356,"param":{"camid":"usr2.1"}}
          ]
          
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
|encryptType 	|number|	录像文件是否加密，0:不加密，1:加密；(此参数仅本地录制有效)|
|isUploadOnRecording 	|number|	录像文件是否边录边传，0:不上传，1:边录边传; (此参数仅本地录像有效）|
|serverPathFileName 	|string|	边录边传时，上传到服务器的路径文件名； (此参数仅本地录像有效）|

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


<h3 id=CRVideo_VideoCfg>CRVideo_VideoCfg</h3>

>视频配置

```json
{"size":"1920*1280",
 "fps":12}
```

属性            | 值
--------        | ---
size          |  视频尺寸，(如:"640*360") |
fps        |  帧率：视频帧率(5~30)
maxbps     |  视频码率（1000~100000000, 例如1m:1000000）;(未配置则使用内部默认值，请参见[CRVideo_VIDEO_CFG_TAB](Constant.md#CRVideo_VIDEO_CFG_TAB))
qp_min     |  最佳质量(18~51, 越小质量越好) (未配置则使用内部默认值22)
qp_max     |  最差质量(18~51, 越大质量越差) (未配置则使用内部默认值32)

>我们采用的是vbr编码（由质量+码率，双重控制）：
>- qp范围：质量参数，为的是达到目标质量后，无需花费更大码率提高质量；
>- maxbps码率控制，是为了确保结果一定不大于“目标码率”（体积受控）；
>- 当要超出码率控制时，自动降低质量；当质量达到目标时，自动减少码率甚至无码率输出。

<h3 id=CRVideo_VideoImgObj>CRVideo_VideoImgObj</h3>

>视频帧图像

```json
{ "format":1,
 "dat":"FKLEOFJXKFD…",
 "width":1024,
 "height":768,
 "frameTime":100}
```


属性            | 值
--------        | ---
format          |  图像格式,数值参考视频图像格式[CRVideo_VIDEO_FORMAT](Constant.md#CRVideo_VIDEO_FORMAT)
dat        |  图像数据Base64编码
width     |  图像宽度（要求8的倍数）
height     |  图像高度（要求8的倍数）
frameTime     |  图像的时戳

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

>录制视频对象列表

```json
[
{"left":426,
"top":124,
"width":409,
"height":231,
"type":0,
 "keepAspectRatio":1,
 "param": {"camid":"c90d98e2-e50d-4abe-a318-104271a47cb6.1"}
 },……
]
```

属性            | 值
--------        | ---
left，top，width，height          |  在录制中的区域（相对于录像尺寸）
type         |  [混图内容类型](Constant.md#CRVideo_MIXER_VCONTENT_TYPE) 说明:<p>当type=MIXVTP_VIDEO时，表示录制的是摄像头区域，param必需包含:</p><p>camid："用户id.摄像头id"</p><p>当type=MIXVTP_PIC时，表示指定的图片，param 必须包含:</p><p>resourceid: xxx;</p>（详见[CRVideo_SetPicResource(resourceid, picJsonVal)](API.md#CRVideo_SetPicResource)）<p>当type=MIXVTP_SCREEN时，表示录制的是屏幕，可以增加附加参数:</p><p>screenid：屏幕序号（-1:表示主屏）;</p><p>pid：进程号; (0：未指定进程)</p><p>area：x,y,w,h;（抓屏区域，无此参数时，代表抓全屏）</p><p>当type= MIXVTP_TIMESTAMP时，不用附加任何参数</p>
keepAspectRatio         |  内容保持原始比例；（0：不保持；1：保持）
param         |  具体值与type相关；



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

<h3 id=CRVideo_PicResourceObj>CRVideo_PicResourceObj</h3>

>图片资源

```json
{"fmt":"picfile","dat":"c:\test.jpg"}
```

属性            | 值
--------        | ---
fmt          |  资源格式，可取值："yuv420p"，"rgb32"，"picfile"，"picdat"
dat       |   <p>资源数据，不同格式时，要提供的数据各不一样：</p><p>fmt为"yuv420p"时： dat存放的是base64(yuv420p数据)；</p><p>fmt为"rgb32"时： dat存放的是base64(rgb32数据)；</p><p>fmt为"picfile"时： dat存放的是“本地文件名”；</p><p>fmt为"picdat "时：dat存放的是base64(图片文件内容)；</p>
width          |  图像宽度(像素), 在fmt为"yuv420p"，"rgb32"时，需要此参数
height          |  图像高度(像素), 在fmt为"yuv420p"，"rgb32"时，需要此参数

<h3 id=CRVideo_BoardObjs>CRVideo_BoardObjs</h3>

>白板信息列表

```json
[{ "boardID":"a","title":"board",
"width":1024,"height":768,
"pageCount":1},
{ "boardID": "b","title": "board",
"width": 1024,"height":>768,
"pageCount":1}…
]
```

<h3 id=CRVideo_BoardObj>CRVideo_BoardObj</h3>

>白板对象

```json
{ "boardID":"x",
"title": "board",
"width": 1024,
"height":768,
"pageCount":1}
```

属性            | 值
--------        | ---
boardID         |  白板标识
title      |   白板的名字
width、height      |  白板的宽、高
pageCount    |  页数(建议白板是一页，文档是实际页面数)


<h3 id=CRVideo_PenColorObj>CRVideo_PenColorObj</h3>

>白板的画笔颜色值对象

```json
{"opacity":0.3,
"color": "#ef8020"}
```

属性            | 值
--------        | ---
opacity    |  画笔颜色的透明度（0~1的数值）
color      |   画笔颜色的rgb值（格式为“#ff3030”的字符串）


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

<h3 id=VideoAttributesObj>VideoAttributesObj</h3>

>视频设备私有属性

```json
{ "size":"1280*720",
 "fps":12,
 "maxbps":1000000
}
```

属性            | 值
--------        | ---
disabled         |  参见[CRVideo_VideoCfg](TypeDefinitions.md#CRVideo_VideoCfg)的描述，未配置时采用全局配置[CRVideo_VideoCfg](TypeDefinitions.md#CRVideo_VideoCfg)
size      |   参见[CRVideo_VideoCfg](TypeDefinitions.md#CRVideo_VideoCfg)的描述，未配置时采用全局配置[CRVideo_VideoCfg](TypeDefinitions.md#CRVideo_VideoCfg)
fps      |  参见[CRVideo_VideoCfg](TypeDefinitions.md#CRVideo_VideoCfg)的描述，未配置时采用全局配置[CRVideo_VideoCfg](TypeDefinitions.md#CRVideo_VideoCfg)
maxbps    |  参见[CRVideo_VideoCfg](TypeDefinitions.md#CRVideo_VideoCfg)的描述，未配置时采用全局配置[CRVideo_VideoCfg](TypeDefinitions.md#CRVideo_VideoCfg)
qp_min   | 参见[CRVideo_VideoCfg](TypeDefinitions.md#CRVideo_VideoCfg)的描述，未配置时采用全局配置[CRVideo_VideoCfg](TypeDefinitions.md#CRVideo_VideoCfg)
qp_max    | 参见[CRVideo_VideoCfg](TypeDefinitions.md#CRVideo_VideoCfg)的描述，未配置时采用全局配置[CRVideo_VideoCfg](TypeDefinitions.md#CRVideo_VideoCfg)
quality2  | 第二档质量配置，支持的属性有：size, maxbps, qp_min, qp_max

说明：     <p>1.一个摄像头出多档质量的视频流，将带来很大的cpu开销；</p><p>2.quality2、quality3未配置或配为空，代表关闭对应档位视频流；</p><p>3.通过 setVideo2 可以选择观看的视频流； </p>


<h3 id=CRVideo_NetworkProxyObj>CRVideo_NetworkProxyObj</h3>

>网络代理数据

```json
{ "addr":"192.168.0.25",
 "port":8080,
 "name":"demo",
 "pswd":"123456",
 "type":1
}
```

属性            | 值
--------        | ---
addr         |  代理服务器地址
port      |   代理端口号
name      |  使用http代理的账号
pswd    |  使用http代理的密码
type   | 0：不使用代理，与json串为空一样效果；1：http代理；255：使用IE的代理配置；


<h3 id=CRVideo_MeetingAttrObj>CRVideo_MeetingAttrObj</h3>

>会议属性

```json

{"key":"x1", "value":"y1"}

```

>key最大长度为64B，value最大长度为8KB（下同）

<h3 id=CRVideo_MeetingAttrObjs>CRVideo_MeetingAttrObjs</h3>

>会议属性列表

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

| 参数    | 类型         |   说明               |
|:-------- |:-----------|:----------           |
| value  | string  | 属性值  |
| lastModifyUserID  | string  | 最后修改者 |
| lastModifyTs | int  | 最后的修改时间，1970-1-1 0:00:00以来的秒数  |



<h3 id=CRVideo_UserMeetingAttrObjs>CRVideo_UserMeetingAttrObjs</h3>

>用户属性列表

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


<h3 id=CRVideo_UserStatus>CRVideo_UserStatus</h3>

>用户的在线状态(json格式字符串)

```json
{"userID":"zhangsan", "userStatus":1,"DNDType":0}

```

属性            | 值
--------        | ---
userID         | 用户id
userStatus      |  用户的在线状态(0离线 ；1在线空闲 ；2在线忙碌；3在线房间中)
DNDType      |  用户免打扰状态（0代表关闭免打扰，其它值代表开启免打扰）


<h3 id=CRVideo_MeetingAttrOptions>CRVideo_MeetingAttrOptions</h3>

>操作房间属性选项

```json

{"notifyAll":1}

```

| 参数    | 类型         |   说明               |
|:-------- |:-----------|:----------           |
| notifyAll  | int  | 1：通知房间所有人员，0（默认值）:不通知。  |






