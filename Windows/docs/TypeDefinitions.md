# 类型定义

<h2 id=CRVideo_NetworkProxyObj>NetworkProxyObj</h2>

```json

{"type":1,"addr":"192.168.0.2","port":8080}

```

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|type   | int  | 网络代理类型（0:无代理， 1:http代理）  |
|addr   | string  | 代理服务器地址 |
|port   | int  | 代理服务器端口|
|name   | string  | 代理帐号(可为空)|
|pswd   | string  | 代理密码(可为空)|


<h2 id=CRVideo_creatInfoObj>CreatInfoObj</h2>

```json

{"meetSubject":"test","needPswd":0,"isRegular":0}

```

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|meetSubject   | string  | 会议名称  |
|needPswd   | int  | 是否创建密码；（0:会议无密码，1:系统为会议室创建一个密码）  |
|isRegular   | int  | 是否固定会议；（0:普通会议，会议室无人30分钟后，自动消毁; 1:固定会议，会议室一直存在直到用户主动消毁它）  |



<h2 id=CRVideo_MeetInfoObj>MeetInfoObj</h2>

>房间对象

```json

  {"ID":100,"pswd":"", "subject":""}

```

| 参数    | 类型        |   说明               |
|:-------- |:-----------|:----------           |
| ID  |  int | 房间号，0：代表房间信息无效  |
| pswd  | string  | 房间密码；空代表房间无密码(已被废弃)  |
| subject  | string  | 房间主题(已被废弃)|
| creator | string  | 房间创建者(已被废弃)|
| memberCount  | int  | 房间内人数(已被废弃)|
| startTime  |  int |  会议开始时间(从1970年1月1日00:00:00起)(已被废弃) |



<h2 id=CRVideo_MeetInfoObjs>MeetInfoObjs</h2>

>房间对象列表

```json

[
  {"ID":100, "pswd":"", "subject":""},
  {"ID":101, "pswd":"", "subject":""},
]

```
详细解释请参考[MeetInfoObj](#CRVideo_MeetInfoObj)



<h2 id=CRVideo_AudioCfg>AudioCfgObj</h2>

>音频配置

```json

  {"micName":"aaa", "speakerName":"aaa"}

```

| 参数        | 类型     |   说明               |
|:-------- |:-----------|:----------          |
| micName | string	    |麦克风设备名称	      |
| speakerName| string       |	扬声器名称	  |
| agc | int       |	是否开启声音增益，0：不开启；1：开启(默认值)	|
| ans | int       |	是否开启降噪，0：不开启；1：开启（默认值）	|
| aec | int       |	是否开启回声消除，0：不开启；1：开启（默认值）|


<h2 id=CRVideo_VideoCfg>VideoCfgObj</h2>

>视频配置

```json

  {"size":"1920*1280", "fps":15}

```

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
| size  | string  | 视频尺寸(如:"640*360")|
| fps  |  int | 帧率：视频帧率(5~30)  |
| maxbps  |  int | 视频码率（1000~100000000, 例如1m:1000000);(未配置则使用内部默认值，请参见[CRVideo_VIDEO_SHOW_SIZE](Constant.md#CRVIDEOSDK_VIDEO_SHOW_SIZE))  |
| qp_min  | int  | 最佳质量(18~51, 越小质量越好) (未配置则使用内部默认值22)  |
| qp_max  | int  | 最差质量(18~51, 越大质量越差) (未配置则使用内部默认值32)  |


>我们采用的是vbr编码（由质量+码率，双重控制）：
>- qp范围：质量参数，依据网状况自动调接目标质量；
>- maxbps：码率控制参数，确保结果一定不大于“目标码率”；
>- 当要超出码率控制时，自动降低质量；当质量达到目标时，自动减少码率输出节省带宽。



<h2 id=VideoAttributesObj>VideoAttributesObj</h2>

>视频设备私有属性

```json
//只有大流，清晰度为720p
{ "size":"1280*720", "fps":15, "maxbps":1000000 }
//开启大小流，大流720p， 小流160p
{ "size":"1280*720", "fps":15, "maxbps":1000000, "quality2":{"size":"228*160", "maxbps":120000} }
```

| 参数    | 类型         |   说明               |
|:-------- |:-----------|:----------           |
| disabled  |  int | 可选参数，取值0:不禁用此设备(默认值)，1：禁用此设备； |
| effects | [VideoEffectsObj](TypeDefinitions.md#CRVideo_VideoEffectsObj) | 可选参数，视频效果配置，未配置时采用全局配置[setVideoEffects](API.md#setVideoEffects)
| fps  | int  | 可选参数，参见[VideoCfgObj](TypeDefinitions.md#CRVideo_VideoCfg)的描述，未配置时采用全局配置[setVideoCfg](API.md#setVideoCfg)  |
| size |  string | 可选参数，参见[VideoCfgObj](TypeDefinitions.md#CRVideo_VideoCfg)的描述，未配置时采用全局配置[setVideoCfg](API.md#setVideoCfg)  |
| maxbps |  int | 可选参数，参见[VideoCfgObj](TypeDefinitions.md#CRVideo_VideoCfg)的描述，未配置时采用全局配置[setVideoCfg](API.md#setVideoCfg)  |
| qp_min  | int  | 可选参数，参见[VideoCfgObj](TypeDefinitions.md#CRVideo_VideoCfg)的描述，未配置时采用全局配置[setVideoCfg](API.md#setVideoCfg)  |
| qp_max  | int  | 可选参数，参见[VideoCfgObj](TypeDefinitions.md#CRVideo_VideoCfg)的描述，未配置时采用全局配置[setVideoCfg](API.md#setVideoCfg)  |
| quality2 | obj  | 可选参数，第二档质量配置，支持的属性有：size, maxbps, qp_min, qp_max  |

说明：     <p>1.配置quality2，代表开启大小流，将带来较大的cpu开销；</p><p>2.quality2未配置或配为空，代表关闭大小流；</p><p>3.通过setVideo2可以选择观看的视频大流或小流； </p>




<h2 id=CRVideo_VideoImgObj>VideoImgObj</h2>

>视频帧图像

```json

  { "format":1, "dat":"FKLEOFJXKFD…", "width":1024, "height":768, "frameTime":100}

```

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
| format  | int  |  图像格式[CRVIDEOSDK_VIDEO_FORMAT](Constant.md#CRVIDEOSDK_VIDEO_FORMAT) |
| dat  |  string | 图像数据Base64编码  |
| width  | int  | 图像宽度（要求8的倍数）  |
| height  |  int | 图像高度（要求8的倍数）  |
|  frameTime | int  | 图像的时戳  |



<h2 id=CRVideo_VideoInfoObj>VideoInfoObj</h2>

>用户视频信息

```json

  {"userID":"111", "videoID":2, "videoName":"camera2"}

```

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
| userID  | string  |  用户id |
| videoID  | int  | 设备编号（程序重启后可能变化）  |
| videoName  |  string | 设备名称  |
| maxSize  | string  |  摄像头支持的最大分辨率，格式：w*h |
| devID  |  string | 设备唯一标识串（只有获取自已的才有此字段） |
| isIPCamera  | int  | 是否为网络摄像头（只有获取自已的才有此字段）  |
| isCustomCamera  | int  |  是否为自定义摄像头（只有获取自已的才有此字段） |
| isScreenCamera  | int  |  是否为屏幕摄像头（只有获取自已的才有此字段） |
| isDisabled  | int  | 是否被禁用（只有获取自已的才有此字段） |



<h2 id=CRVideo_VideoInfosObj>VideoInfosObj</h2>

>用户视频信息列表

```json

[
  {"userID":"111","videoID":1, "videoName":"camera1"},
  {"userID":"111","videoID":2, "videoName":"camera2"},
]

```
视频信息详细解释请参考[VideoInfoObj](#CRVideo_VideoInfoObj)



<h2 id=CRVideo_VideoIDObjs>VideoIDObjs</h2>

>视频设备对象

```json

[
  {"userID":"111","videoID":1},
  {"userID":"111","videoID":2},
]

```

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
| userID  | string  | 用户id  |
| videoID  | int  | 设备id  |



<h2 id=CRVideo_VideoEffectsObj>VideoEffectsObj</h2>

>视频效果参数

```json
 {"denoise":1,"mirror":1},

```

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
| denoise  | int  | 视频降噪, 取值：0/1, 默值为1  |
| mirror  | int  | 视频左右翻转，取值:0/1, 默认为0  |
| upsideDown  | int  | 视频上下翻转，取值:0/1, 默认为0  |
| deinterlace  | int  | 视频反交错，取值:0/1, 默认为0 （除非视频采集设备为隔行扫描设备，否则不要开启）  |
| degree  | int  | 旋转角度，<0代表自动，旋转取值:0、90、180、270、360, 默认为自动模式 |



<h2 id=VirtualBkCfg>VirtualBkCfg</h2>

>虚拟背景参数

```json

  {"type":1, "colorKey":"0,255,0", "bkImgFile":"d:\imgs\1.jpg"}

```

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
| type  | int  | 请参见[VIRTUALBK_TYPE](Constant.md#VIRTUALBK_TYPE)|
| colorKey  |  string | 颜色值r,g,b。如:"0,255,0"（仅VBKT_COLORKEY模式时需要配置此参数） |
| bkImgFile  |  string | 背景全路径文件名。（当前只支持jpg格式） |



<h2 id=CRVideo_GetMeetingsParam>GetMeetingsParamObj</h2>

>获取房间列表的参数

| 参数    | 类型        |   说明               |
|:-------- |:-----------|:----------           |
|QueryMode	|int|	0:查询全部， 1:查询我创建的房间|


<h2 id=CRVideo_LocMixerCfgObj>LocMixerCfgObj</h2>

>混图器规格配置

```json

{"width":640,"height":360,"frameRate":8,"bitRate":500000,"defaultQP":28,"gop":120}

```

| 参数    | 类型        |   说明               |
|:-------- |:-----------|:----------           |
|width	|int&nbsp;|	图像宽度（要求8的倍数）|
|height	|int|	图像高度（要求8的倍数）|
|frameRate	|int|	图像帧率，取值范围:1-30(值越大,cpu要求更高，录像推荐15帧，直播推存25帧)|
|bitRate	|int|	录制视频文件的最高码率（例如1m:1000000)，当图像变化小时，实际码率会低于此值|
|defaultQP	|int|	录制视频文件的目标质量，缺省值：25。取值范围：0~51，0表示完全无损, 51表示质量非常差，推荐高质量取值18，中质量25， 低质量34|
|gop	|int|	I帧周期(I帧周期越大码率越小，但直播延时会越大）； 文件录制建议15秒一个I帧取值：frameRate x 15（frameRate的15倍）； 直播建议4秒一个I帧取值: frameRate x 4（frameRate的4倍）;|

<h2 id=CRVideo_MixerContentObj>MixerContentObj</h2>

>混图器内容配置

```json

[
{"type":0, "keepAspectRatio":1,"left":5,"top":10, "width":633,"height":356,"param":{"camid":"usr1.1"}},
{"type":0,"keepAspectRatio":1,"left":642,"top":10, "width":633,"height":356,"param":{"camid":"usr2.1"}}
]

```

| 参数    | 类型        |   说明               |
|:-------- |:-----------|:----------           |
|left	|int|	在混图画面中的区域（水平位置）|
|top	|int|	在混图画面中的区域（垂直位置）|
|width	|int|	在混图画面中的区域宽 |
|height	|int|	在混图画面中的区域高 |
|type	|int|[MIXER_VCONTENT_TYPE](Constant.md#CRVIDEOSDK_MIXER_VCONTENT_TYPE),请见后面type描述;|
|keepAspectRatio	|int|	内容保持原始比例，0不保持，1保持|
|param	|obj|	如：{"camid":"usr2.1"}。请见后面param支持的参数;|
> type描述：

> * 当type=CRVSDK_MIXCONT_VIDEO时，表示混图的是摄像头，param必须包含camid；
> * 当type=CRVSDK_MIXCONT_PIC时，表示混图的是指定的图片，param必须包含resourceid；（仅用于本地混图）
> * 当type=CRVSDK_MIXCONT_SCREEN时，表示混图的是本地屏幕，param可以增加附加参数screenid/pid/area/window；（仅用于本地混图）
> * 当type=CRVSDK_MIXCONT_MEDIA时，表示混图的是影音共享，不用附加任何参数；
> * 当type=CRVSDK_MIXCONT_SCREEN_SHARED时，表示混图的是共享的屏幕，不用附加任何参数；
> * 当type=CRVSDK_MIXCONT_WBOARD时，表示混图的是白板，不用附加任何参数；（仅用于云端混图，本地混图应该生成图像用MIXVTP_PIC)
> * 当type=CRVSDK_MIXCONT_TEXT时，表示混图的是文本，width和height将被忽略，元素大小由文本信息自动确定。 param必须包含text，可选color，background，font-size，text-margin；


> param 支持的参数如下：

> * camid：用户id.摄像头id, 如："testuser.1"
> * resourceid：具有唯一属性的字符串id，通过[setPicResource](API.md#setPicResource)将图片存储到sdk内供混图模块使用
> * screenid：屏幕序号，-1表示主屏
> * pid：进程号
> * area：抓屏区域:"x,y,w,h"
> * text：文本内容，支持时间戳参数"%timestamp%"，格式为：YYYY-MM-DD HH:MM:SS 
> * color：文本颜色，格式：#RRGGBB[AA]， 默认#FFFFFF
> * background：背景色，格式：#RRGGBB[AA]， 默认#0000007D
> * font-size：字体大小，默认18
> * text-margin：边距，默认5

<h2 id=CRVideo_LocMixerOutputObj>LocMixerOutputObj</h2>

>混图器输出配置

```json

[
  {"type":0,"filename":"D:/1.mp4"},
  {"type":1,"liveUrl":"rtmp://xxx"},
  ...
]

```

>  当type==MIXOT_FILE (即 0)，可携带以下参数：

| 参数    | 类型        |   说明               |
|:-------- |:-----------|:----------           |
|type 	|int|	输出类型[MIXER_OUTPUT_TYPE](Constant.md#CRVIDEOSDK_MIXER_OUTPUT_TYPE)|
|filename 	|string|	录像路径文件名（本地录像名格式如：d:/1.mp4，服务器录像名格式如：/2018-11-21/1.mp4），支持的文件格式为mp4/ts/flv/avi，其中flv和ts两种格式在程序异常结束时产生的录制文件仍可用。|
|encryptType 	|int|	录像文件是否加密，0:不加密，1:加密；(此参数仅本地录制有效)|
|isUploadOnRecording 	|int|	录像文件是否边录边传，0:不上传，1:边录边传; (此参数仅本地录像有效）|
|serverPathFileName 	|string|	边录边传时，上传到服务器的路径文件名； (此参数仅本地录像有效）|

> 当type==MIXOT_LIVE(即 1)，可携带以下参数：

| 参数    | 类型        |   说明               |
|:-------- |:-----------|:----------
|type 	|int|	输出类型[MIXER_OUTPUT_TYPE](Constant.md#CRVIDEOSDK_MIXER_OUTPUT_TYPE)|
|liveUrl 	|string|	直播推流地址，支持rtmp/rtsp； |
|errRetryTimes  	|int|	直播推流异常时，重试次数|


<h2 id=CRVideo_LocMixerOutputInfoObj>LocMixerOutputInfoObj</h2>

>录制文件、直播信息

```json

{ "state":2, "duration":100,"fileSize":10000 }

```

| 参数    | 类型        |   说明               |
|:-------- |:-----------|:----------           |
|state  	|int|	状态，请见后面描述;|
|duration  	|int|	录像文件时长，单位：毫秒;|
|fileSize  	|int|	录像文件大小；|
|errCode  	|int|	[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)|

>state状态描述:

>   0:输出对象已创建;
>   1:输出目标信息更新; 可以从结构中取得：duration, fileSize参数；
>   2:输出对象已关闭; 可以从结构中取得：duration, fileSize参数；
>   3:输出对象异常；可以从结构中取得：err参数；



<h2 id=CloudMixerCfgObj>CloudMixerCfgObj</h2>

>云端混图器配置

```json
//为房间中所有人录制独立的声音文件，独立的默认摄像头视频文件
{
    "mode": 1,
    "audioFileCfg": {
        "svrFileNameSuffix": ".mp3",
        "svrPath": "/xxx",
        "subscribeAudios": "_cr_all_"
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
| mode |int　| 录制模式，取值范围：</br>0-合流模式：将声音录制到一个声音文件、或将声音图像录制成一个视频文件；</br>1-单流模式：将涉及到的声音流、图像流存到各自独立的文件中； | 是 |
| audioFileCfg | [CloudMixerAudioFileCfg](#CloudMixerAudioFileCfg) | 生成音频文件配置，生成规则：进入房间并开启麦克风开始生成文件，离开房间结束生成文件 | 否 |
| videoFileCfg | [CRCloudMixerVideoFileCfg](#CRCloudMixerVideoFileCfg) | 生成视频文件配置，生成规则：进入房间并开启摄像头开始生成文件，离开房间结束生成文件 | 否 |
| storageConfig | [CloudStorageConfig](#CloudStorageConfig) | 云存储配置，不配置时将存储在云屋服务器上 | 否 |




<h2 id=CloudMixerAudioFileCfg>CloudMixerAudioFileCfg</h2>

>云端录制语音文件配置

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
| aChannelType |int | 音频通道类型，取值范围：0-单声道，1-左右双声道，默认为0 | 否 |
| aChannelContent | array | 音频通道内容。</br></br>左右声道模式时：必须传入两个用户ID，如：["UserID1", "UserID2"]，第一个人的为左声道，第二个人为右声道）</br></br>单声道模式时：可选参数（默认为空），空代表所有人声音，要指定人员声音时传入：["UserID1","UserID2", "UserID3"] | 否 |



<h2 id=CRCloudMixerVideoFileCfg>CRCloudMixerVideoFileCfg</h2>

>云端录制视频文件配置

单流模式参数：

| 参数 | 类型 | 说明 | 是否必传 |
| :- | :- | :- | :- |
| svrPath | string | 服务器存储路径，默认为空 | 否 |
| svrFileNameSuffix | string | 文件名后缀，当前只支持：”.mp4”</br>文件命名规则：昵称_cam摄像头编号_房间号_开始时间.后缀 | 是 |
| subscribeVideos | array | 指定生成哪些人的摄像头对应的视频文件；</br>取值：["\_cr_all\_"]或["\_cr_allDefCam\_"]或["userId1.camId", "userId2.camId", ...]；</br>_cr_all_代表所有人所有摄像头，_cr_allDefCam_代表生成所有人的默认摄像头 | 是 |
| aStreamType | int | 视频文件内音频内容，取值：0-自己声音，1-所有人声音，默认0 | 否 |


合流模式参数：

| 参数 | 类型 | 说明 | 是否必传 |
| :- | :- | :- | :- |
| svrPathName | string | 带路径的文件名，文件格式支持：mp4、flv、ts、avi、rtmp://、rtsp://，可选一个或多个，以“;”分隔；</br>示例：”/xxx/xxx.mp4;rtmp://xxx1;rtmp://xxx2;” | 是 |
| aChannelType | int | 音频通道类型，取值：0-单声道，1-左右双声道，默认为0 | 否 |
| aChannelContent | array | 音频通道内容。</br></br>左右声道模式时：必须传入两个用户ID，如：["UserID1", "UserID2"]，第一个人的为左声道，第二个人为右声道）</br></br>单声道模式时：可选参数（默认为空），空代表所有人声音，要指定人员声音时传入：["UserID1","UserID2", "UserID3"] | 否 |
| vWidth | int | 视频宽度 | 是 |
| vHeight | int | 视频高度 | 是 |
| vFps | int | 视频帧率，取值0-30, 默认值12 | 否 |
| vBps | int | 视频码率，取值参见[视频流默认码率定义](Constant.md#CRVIDEOSDK_VIDEO_SHOW_SIZE) 默认会根据视频尺寸生成码率 | 否 |
| vQP | int | 视频质量，取值0~51(0表示完全无损, 51表示质量非常差)，推荐高质量取值18，中质量25，低质量34， 默认值19 | 否 |
| layoutConfig | array | 布局内容列表，[[MixerContentObj](#CRVideo_MixerContentObj),[MixerContentObj](#CRVideo_MixerContentObj)，...] | 是 |



<h2 id=CloudStorageConfig>CloudStorageConfig</h2>

>云端录制存储配置

| 参数 | 类型 | 说明 | 是否必传 |
| :- | :- | :- | :- |
| vendor | int | 第三方云存储平台： 1-阿里云 | 是 |
| region | string | 第三方云存储指定的地区信息 | 是 |
| bucket | string | 第三方云存储的 bucket | 是 |
| accessKey | string | 第三方云存储的 access key | 是 |
| secretKey | string | 第三方云存储的 secret key | 是 | 



<h2 id=CloudMixerInfoList>CloudMixerInfoList</h2>

>云端混图器信息列表

CloudMixerInfo列表，参见[CloudMixerInfo](#CloudMixerInfo)



<h2 id=CloudMixerInfo>CloudMixerInfo</h2>

>云端混图器信息

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| ID | string | 混图器ID |
| owner | string | 创建者用户ID |
| cfg | string | 录制配置，json格式串，参见[CloudMixerCfgObj](#CloudMixerCfgObj) |
| state | int | 录制状态，参见[MIXER_STATE](Constant.md#CRVIDEOSDK_MIXER_STATE) |


<h2 id=CloudMixerOutputInfo>CloudMixerOutputInfo</h2>

>云端混图器输出信息

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| id | string | 混图器ID |
| state | int | 具体参考[OUTPUT_STATE](Constant.md#CRVIDEOSDK_OUTPUT_STATE)
| svrFilePathName | string | 录像路径文件名 |
| startTime | int64 | 创建时间(从1970年1月1日00:00:00起的毫秒数)，当state为OUTPUT_CLOSED才有该参数 |
| duration | int | 录像时长(ms)，当state为OUTPUT_CLOSED才有该参数 |
| fileSize | int64 | 文件大小(Byte)，当state为OUTPUT_CLOSED才有该参数 |
| errCode | int | [错误码](Constant.md#CRVIDEOSDK_ERR_DEF), 当state为OUTPUT_ERR才有该参数 |
| errDesc | string | 错误描述, 当state为OUTPUT_ERR才有该参数 |



<h2 id=CRVideo_MemberObj>MemberObj</h2>

>成员对象

```json

  {"userID":"111", "nickName":"aaa", "audioStatus":"1", "videoStatus":"1"}

```

| 参数     | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|userID|	string|	用户ID|
|nickname	|string|	昵称|
|audioStatus|	int	|音频状态，数值参考麦克风状态[ASTATUS](Constant.md#CRVIDEOSDK_ASTATUS)|
|videoStatus|	int |视频状态，数值参考摄像头（视频）状态定义[VSTATUS](Constant.md#CRVIDEOSDK_VSTATUS)|



<h2 id=CRVideo_MembersObj>MembersObj</h2>

>成员对象列表

```json

[
  {"userID":111,"nickName":"aaa", "audioStatus":1,"videoStatus":1},
  {"userID":222,"nickName":"bbb", "audioStatus":1,"videoStatus":1}
]

```
单个成员详细解释请参考[MemberObj](#CRVideo_MemberObj)



<h2 id=CRVideo_HttpReqInfoObj>HttpReqInfoObj</h2>

>Http文件传输请求对象

```json

{ "bUploadType" : 1, "filePathName" : "D:/CloudroomVideoSDK_file/test.log", "fileVersion" : "V1.0", "httpUrl" : "http://10.0.7.130:8080/Upload/test.log" }

```

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|bUploadType|	int|	传输类型，0:下载类型，1:上传类型|
|filePathName	|string	|本地完整路径文件名|
|httpUrl	|string|	目标URL|
|extParams |	obj|	http头部扩展信息，如：{"header1":"value1", "header2":"value2"}。 缺省放在http header中。其它方式参见transforCfg中的extParamsTransType配置。|
|transforCfg |	obj|	特殊处理配置，字典数据例如{"decodeCREEFile":0}   <p>详细如下：</p><p>（1）decodeCREEFile：此参数仅上传有效。0:上传原始文件，1:上传解密的文件（云屋录制加密文件）</p><p>（2）extParamsTransfType:此参数仅上传有效。当取值缺省或为0时:extParams在header中传送。取值为1时:extParams在multipart/form-data中传送</p>|



<h2 id=CRVideo_HttpFileInfoObj>HttpFileInfoObj</h2>

>Http文件传输状态信息对象

```json

{ "bUploadType" : 1, "filePathName" : "D:/CloudroomVideoSDK_file/test.log",
"httpUrl" : "http://10.0.7.130:8080/Upload/test.log",
"fileSize" : 53788511, "finishedSize" : 53788511,  "state" : 3 }

```

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|bUploadType|	int|	传输类型，0:下载类型，1:上传类型|
|filePathName	|string	|本地完整路径文件名|
|httpUrl	|string|	目标URL|
|transforCfg|	obj|	特殊处理配置，字典数据，由startTransferFile传入。|
|extHeaders|	obj|	http头部扩展信息，字典数据，由startTransferFile传入。|
|fileSize	|int	|文件大小|
|finishedSize|	int|	已传输大小|
|state	| int |	文件传输状态，详见：[CRVideo_HTTP_TRANSFER_STATE](Constant.md#CRVIDEOSDK_HTTP_TRANSFER_STATE)|



<h2 id=CRVideo_HttpFileInfoObjs>HttpFileInfoObjs</h2>

>Http文件传输状态信息对象列表

```json

[
{ "bUploadType" : true, "filePathName" : "D:/CloudroomVideoSDK_file/test.log", "httpUrl" : "http://10.0.7.130:8080/Upload/test.log", "transforDeal" : {}, "fileSize" : 53788511, "finishedSize" : 53788511,  "state" : 3 },
...
]

```
单个文件传输状态请参考[HttpFileInfoObj](#CRVideo_HttpFileInfoObj)



<h2 id=CRVideo_QueueStatusObj>QueueStatusObj</h2>

>队列状态

```json

{"queID":0,"agent_num":12,"wait_num":3,"srv_num":11}

```

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|queID	|int	|队列ID|
|agent_num	|int	|代理数量|
|wait_num	|int|	排队数量|
|srv_num	|int|	坐席数量|



<h2 id=CRVideo_QueueInfo>QueueInfoObj</h2>

>队列信息

```json

{"queID":0,"name":"aaa","desc":"this is desc","prio":1}

```

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|queID	|int	|队列ID|
|name	|string	|队列名称|
|desc	|string|	队列描述|
|prio	|int|	优先级，值越小优先级越高|



<h2 id=CRVideo_QueuingInfo>QueuingInfoObj</h2>

>排队信息

```json

{"queID":0,"position":3,"queuingTime":17}

```

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|queID	|int	|队列ID 我排的队列（-1:代表我没有排队；-2:代表我正在房间中,通过GetSessionInfo可获取相关信息）|
|position	|int	|我的位置|
|queuingTime|	int|	我排队的时长（单位s）|

<h2 id=CRVideo_RecordFileInfo>RecordFileInfoObj</h2>

>录制文件信息

```json

{"fileName":"1.mp4","size":10240,"state":1,"uploadPercent":100}

```

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|fileName	|string|	文件名，全路径|
|size	|int|	文件大小（字节）|
|duration	|int|	文件时长（毫秒）|
|state|	int|	0没有上传，1上传中，2 上传完毕|
|uploadPercent|	int |	上传进度，state为1时关注此字段|



<h2 id=CRVideo_RecordVideoInfo>RecordVideoInfoObj</h2>

>录制视频对象列表

```json

[
{"left":426, "top":124, "width":409, "height":231, "type":0, "keepAspectRatio":1, "param": {"camid":"c90d98e2-e50d-4abe-a318-104271a47cb6.1"}},
 ……
]

```

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|left	|int	|左|
|top	|int	|上|
|width	|int	|宽|
|height|	int	|高|
|param	|string|	附加参数<p>Properties</p><p>Name Type Description</p>type [MIXER_VCONTENT_TYPE](Constant.md#CRVIDEOSDK_MIXER_VCONTENT_TYPE)	录制类型



<h2 id=CRVideo_ScreenShareCfgObj>ScreenShareCfgObj</h2>

>屏幕共享配置对象

```json

{"maxFPS":8, "maxKbps":800, "catchWnd":0, "catchRect":{"left":0, "top":0,  "width":1920, "height":1080}}

```

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|maxFPS	|int|	帧率, 缺省为8 （当网络发不动时，帧率会自动下降）|
|maxKbps|	int|	最大码率，缺省为800kbps|
|catchWnd|	int|	共享窗口的窗口句柄，用于实现窗口共享|
|catchRect|	string |	{"left":xx,"top":xx,"width":xx,"height":xx}用于实现区域共享|
|monitorID|	int|	显视器id，缺省或-1时共享的是主显视器|
|shareSound| int| 0:不共享桌面声音（缺省值），1：共享桌面声音|



<h2 id=CRVideo_SessionInfo>SessionInfoObj</h2>

>会话信息

```json

{"callID":"0000123","peerID":"123","peerName":"aaa", "bCallAccepted":1,"meetingID":321321,"meetingPswd":"123456","duration":120}

```

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|callID|	string|	呼叫ID|
|peerID	|string	|目标用户ID|
|peerName|	string|	目标用户昵称|
|bCallAccepted	|int|	呼叫是否被对方接受 0:暂未接受，1:已接受|
|meetingID	|int	|呼叫接受后，分配的房间ID|
|meetingPswd	|string|	房间密码|
|duration|	int|	持续的时长（单位s）|



<h2 id=CRVideo_QueInfo>QueInfoObj</h2>

>队列信息

| 参数    | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|queID|	int|	队列id|
|name	|int|	队列名称|
|desc	|string|	队列描述|
|prio	|int|	优先级，值越小优先级越高|

<h2 id=QueueStatusObj>QueStatusObj</h2>

>队列状态

```json

{"queID":0,"agent_num":12,"wait_num":3,"srv_num":11}

```

| 参数    | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|queID| 	int| 	队列id|
|agent_num	| int| 	坐席数量|
|wait_num| 	int| 	排队客户数量|
|srv_num	| int| 	正在服务的客户数量|

<h2 id=CRVideo_QueUser>QueUser</h2>

>队列用户信息

```json

{"queID":0,"usrID":"","name":"","queuingTime":17,"usrExtDat":""}

```

| 参数    | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|queID	|int|	队列ID|
|usrID	|string|	用户ID|
|name	|string|	用户昵称|
|queuingTime|int|	已排队时长（秒）|
|usrExtDat	|string|	用户排队时的私有数据|

<h2 id=CRVideo_QueUserList>QueUserList</h2>

>队列用户列表

```json

[
{"queID":0,"usrID":"","name":"","queuingTime":17,"usrExtDat":""},
 ……
]

```
详细解释请参考QueUser



<h2 id=CRVideo_SubPage>SubPageObj</h2>

>子功能区信息

| 参数    | 类型        |   说明               |
|:-------- |:-----------|:----------           |
|userID	|int|	用户ID|
|boardID	|int|	白板id|

<h2 id=CRVideo_ListDocFileRslt>ListDocFileRsltObj</h2>

>文档列表

```json
{
    "files":
    [
      {"ownerID": "","ownerName": "",  "name": "","orgFileName":"", "md5": "","ctime": "", "size": "","orgSize":"", "convertStatus": ""},
      {"ownerID": "","ownerName": "", "name": "","orgFileName":"", "md5": "","ctime": "", "size": "","orgSize":"", "convertStatus": ""}
    ],
    "dirs": [ "aaa", "bbb" ]
}
```

| 参数    | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|files | json数组| 查询目录下的所有文件 |
|dirs | string| 查询目录下的所有目录 |
|ownerID | string|  文件的所有者|
|ownerName | string| 文件所有者名称 |
|name | string| 在网盘里的文件名 |
|orgFileName | string| 原始文件名 |
|md5 | string| 文件的md5值 |
|ctime | string|  文件的上传时间|
|size | int|  压缩后在网盘里的文件大小|
|orgSize | int|  文件的原始大小|
|convertStatus | int| 文档的转换状态： 0, 代表转换完成; 1, 代表文档转换中; 2, 代表未转换（或转换失败） |

<h2 id=CRVideo_GetDocPageInfoRslt>GetDocPageInfoRsltObj</h2>

>获取文档页信息结果

```json

{"width": 1280,"height": 720,"fileList": ["/docxxx/page1", "/docxxx/page2"]}

```

| 参数    | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|width | int|  文档的图像宽度|
|height | int|  文档的图像高度|
|fileList | string |  每页文档在服务器上的路径文件名|






















<h2 id=CRVideo_ScreenShareCfgObj>ScreenShareCfgObj</h2>

>屏幕共享配置

```json

  {"maxFPS":8, "maxKbps":800}

```

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|  maxFPS |  int | 帧率, 缺省为8 (当网络发不动时，帧率会自动下降)  |
| maxKbps  | int  | 最大码率, 缺省800kbps  |
| catchRect  | string  | {"left":10,"top":10,"width":100,"height":100}用于实现区域共享  |
| catchWnd | string  | 用于实现区域共享，如{"left":10,"top":10,"width":1000,"height":800}  |
| monitorID  | int  |  显示器序号，与系统显示编号一致，-1代表主屏 |



<h2 id=CRVideo_RecordVideosObj>RecordVideosObj</h2>

>录制视频对象列表

```json

  {"left":426, "top":124, "width":409, "height":231, "type":0, "keepAspectRatio":1,
  "param": {"camid":"c90d98e2-e50d-4abe-a318-104271a47cb6.1"}
  }

```

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
| left，top，width，height  |  int | 在录制中的区域（相对于录像尺寸）  |
|  type | int  | [混图内容类型](Constant.md#CRVIDEOSDK_MIXER_VCONTENT_TYPE) 说明:<p>当type=MIXVTP_VIDEO时，表示录制的是摄像头区域，param必需包含:</p><p>camid："用户id.摄像头id"</p><p>当type=MIXVTP_PIC时，表示指定的图片，param 必须包含:</p><p>resourceid: xxx;</p>（详见[setPicResource(resourceid, picJsonVal)](API.md#setPicResource)）<p>当type=MIXVTP_SCREEN时，表示录制的是屏幕，可以增加附加参数:</p><p>screenid：屏幕序号（-1:表示主屏）;</p><p>pid：进程号; (0：未指定进程)</p><p>area：x,y,w,h;（抓屏区域，无此参数时，代表抓全屏）</p><p>当type= MIXVTP_TIMESTAMP时，不用附加任何参数</p> |
| keepAspectRatio  |  int  |  内容保持原始比例；（0：不保持；1：保持） |
| param  | string  | 具体值与type相关  |



<h2 id=CRVideo_MediaInfoObj>MediaInfoObj</h2>

>影音文件信息

```json

{ "userID":"111", "state":1, "mediaName":"D:/1.mp4"}

```

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
| userID |string	    |用户id	     |
| state|int       |	播放状态 0:播放 1:暂停 2:未播放	|
| mediaName|string       |	影音文件名	|



<h2 id=CRVideo_PicResourceObj>PicResourceObj</h2>

>图片资源

```json

{"fmt":"picfile","dat":"c:\test.jpg"}

```

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|  fmt | string   | 资源格式，可取值："yuv420p"，"rgb32"，"picfile"，"picdat"  |
|  dat |  string |  <p>资源数据，不同格式时，要提供的数据各不一样：</p><p>fmt为"yuv420p"时： dat存放的是base64(yuv420p数据)；</p><p>fmt为"rgb32"时： dat存放的是base64(rgb32数据)；</p><p>fmt为"picfile"时： dat存放的是“本地文件名”；</p><p>fmt为"picdat "时：dat存放的是base64(图片文件内容)；</p> |
| width  | int  | 图像宽度(像素), 在fmt为"yuv420p"，"rgb32"时，需要此参数  |
| height  |  int | 图像高度(像素), 在fmt为"yuv420p"，"rgb32"时，需要此参数  |



<h2 id=CRVideo_BoardObj>BoardObj</h2>

>白板对象

```json

{ "boardID":"x", "title": "board", "width": 1024, "height":768, "pageCount":1}

```

>白板信息

| 参数    | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|boardID|	int|	白板id|
|title	|string|	白板名称|
|width|	int|	白板宽度|
|height	|int	|白板高度|
|pageCount    | int  | 页数  |
|curPage    |  int | 当前页  |
|pagePos1    | string  |  扩展参数1 |
|pagePos2    | string  | 扩展参数2  |



<h2 id=CRVideo_BoardObjs>BoardObjs</h2>

>白板信息列表

```json

[
  { "boardID":"a","title":"board", "width":1024,"height":768, "pageCount":1},
  { "boardID": "b","title": "board", "width": 1024,"height":768, "pageCount":1}
]

```



<h2 id=CRVideo_BoardElementObj>BoardElementObj</h2>

>白板图元

```json

{ "elementID": "xx", "type":100, "left":0, "top":0 }

```

| 参数    | 类型         |   说明               |
|:-------- |:-----------|:----------           |
| elementID  | string  | 图元id  |
| type  | int  | 图元的类型，值100以下为云屋保留值，100及以上为自定义值  |
|  left、top  | int  | 图元在页内的左上角位置  |
| ...  | string  | 可自由扩展


:::danger

说明：
<p>1.elementID必须调用createElementID（）获取, 即使是曾经调此接口创建的然后存入了磁盘文件，再次读入房间时，所有elementID也需要重新生重。</p><p>2.如果要和云屋产品互通，那就需要按云屋的定义取值，可以联系云屋获取相关文档</p>

:::


<h2 id=CRVideo_BoardElementObjs>BoardElementObjs</h2>

>白板图元列表

```json

[
  { "elementID": "xx", "type":100, "orderID":0, "left":0, "top":0},
  { "elementID":"yy", "type":100, "orderID":0, "left":100, "top":100}
]

```

<h2 id=CRVideo_MeetingAttrOptions>MeetingAttrOptions</h2>

>操作房间属性选项

```json

{"notifyAll":1}

```

| 参数    | 类型         |   说明               |
|:-------- |:-----------|:----------           |
| notifyAll  | int  | 1：通知房间所有人员，0（默认值）:不通知。  |

<h2 id=CRVideo_MeetingAttrObjs>MeetingAttrObjs</h2>

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

| 参数    | 类型         |   说明               |
|:-------- |:-----------|:----------           |
| value  | string  | 属性值  |
| lastModifyUserID  | string  | 最后修改者 |
| lastModifyTs | int  | 最后的修改时间，1970-1-1 0:00:00以来的秒数  |


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
