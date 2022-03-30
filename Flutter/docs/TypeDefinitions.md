# 对象结构定义

---

<h2 id=CrErrorDef>Sdk初始化数据实体类</h2>

> CrErrorDef

| 代码 | 含义   |
| :--- | :----- |
| code | 错误码 |

<h2 id=CrSdkInitDat>Sdk初始化数据实体类</h2>

> CrSdkInitDat

| 成员变量       | 类型   | 说明                                                               |
| :------------- | :----- | :----------------------------------------------------------------- |
| sdkDatSavePath | String | SDK 内部使用文件位置                                               |
| noCall         | bool   | 是否使用呼叫业务（可减少登录环节、及通信需求）                     |
| noQueue        | bool   | 是否使用 sdk 的排队功能的业务（可减少登录环节、及通信需求）        |
| timeOut        | int    | 网络通信超时时间(10000-120000)，单位是毫秒，超出范围时就近取边界值 |
| datEncType     | String | 数据加密类型("0":敏感数据加密，"1":全面加密; 缺省:"1")             |

<!--           | noMediaDatToSvr | bool                                                               | 是否与服务器实时流媒体数据（可减少复杂度，加快登录速度） | -->

<h2 id=CrLoginResult>登录返回值</h2>

> CrLoginResult

| 成员变量 | 类型   | 说明              |
| :------- | :----- | :---------------- |
| userID   | String | 登录用户的 ID     |
| cookie   | String | 登录时传的 cookie |
| sdkErr   | int    | 登录返回的状态码  |

<h2 id=CrMeetInfo>房间对象数据类</h2>

> CrMeetInfo

| 成员变量   | 类型   | 说明                            |
| :--------- | :----- | :------------------------------ |
| id         | int    | 房间号，数值 0 代表房间信息无效 |
| pubMeetUrl | String | 房间公共链接                    |

<h2 id=CrSize>大小描述</h2>

> CrSize

| 成员变量 | 类型 | 说明 |
| :------- | :--- | :--- |
| width    | int  | 宽   |
| height   | int  | 高   |

<h2 id=CrMemberInfo>房间成员信息</h2>

> CrMemberInfo

| 成员变量    | 类型                                 | 说明     |
| :---------- | :----------------------------------- | :------- |
| userID      | String                               | 用户 ID  |
| nickname    | String                               | 用户昵称 |
| audioStatus | [CR_ASTATUS](Constant.md#CR_ASTATUS) | 音频状态 |
| videoStatus | [CR_VSTATUS](Constant.md#CR_VSTATUS) | 视频状态 |

<h2 id=CrAudioCfg>音频配置</h2>

> CrAudioCfg

| 成员变量    | 类型   | 说明                               |
| :---------- | :----- | :--------------------------------- |
| micName     | String | 麦克风设备名称(空代表系统默认设备) |
| speakerName | String | 扬声器名称(空代表系统默认设备)     |
| agc         | bool   | 是否开启声音增益，默认开启         |
| ans         | bool   | 是否开启降噪，默认开启             |
| aec         | bool   | 是否开启回声消除，默认开启         |

<h2 id=CrVideoCfg>视频配置</h2>

> CrVideoCfg

| 成员变量   | 类型                                | 说明                                                       |
| :--------- | :---------------------------------- | :--------------------------------------------------------- |
| size       | [CrSize](TypeDefinitions.md#CrSize) | 视频尺寸                                                   |
| fps        | int                                 | 视频帧率(5~30)                                             |
| maxbps     | int                                 | 视频码率（1~100*1000*1000）(未配置则使用内部默认值)        |
| minQuality | int                                 | 最佳质量(18~51，越小质量越好) (未配置则使用内部默认值 25)  |
| maxQuality | int                                 | 最差质量(18~51， 越大质量越差) (未配置则使用内部默认值 36) |

- <p style="color:red; font-size:20px"> 注意事项</p>

  - 我们采用的是 vbr 编码（由质量+码率，双重控制）
  - qp 范围：质量参数，为的是达到目标质量后，无需花费更大码率提高质量
  - maxbps 码率控制，是为了确保结果一定不大于“目标码率”（体积受控）, 当要超出码率控制时，自动降低质量；当质量达到目标时，自动减少码率甚至无码率输出 注：使用硬编时第二点是无效的。

<h2 id=CrUsrVideoId>用户摄像头</h2>

> CrUsrVideoId

| 成员变量 | 类型   | 说明    |
| :------- | :----- | :------ |
| userId   | String | 用户 id |
| videoID  | String | 设备 id |

<h2 id=CrOpenVideoResult>打开用户摄像头结果</h2>

> CrOpenVideoResult

| 成员变量 | 类型   | 说明     |
| :------- | :----- | :------- |
| deviceID | String | 设备 id  |
| success  | bool   | 是否成功 |

<h2 id=CrMixerCfg>混图器规格配置</h2>

> CrMixerCfg

| 成员变量      | 类型              | 说明                                                                                                                         |
| :------------ | :---------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| dstResolution | [CrSize](#CrSize) | 图像大小                                                                                                                     |
| frameRate     | int               | 图像帧率，取值范围:1-30(值越大,cpu 要求更高，录像推荐 15 帧，直播推存 25 帧)                                                 |
| bitRate       | int               | 录制视频文件的最高码率，当图像变化小时，实际码率会低于此值                                                                   |
| defaultQP     | int               | 录制视频文件的缺省质量，缺省值：26                                                                                           |
| gop           | int               | I 帧周期(I 帧越少码率越小，但直播延时会越大）； 文件录制建议 15 秒一个 I 帧取值：fpsx15； 直播建议 4 秒一个 I 帧取值: fpsx4; |

- <p style="color:red; font-size:20px"> 注意事项</p>

  - bitRate 的设置应该按照录制大小：

    - 640 \* 360 大小录制对应 500000 -- (500kbps)
    - 1280 \* 720 大小录制对应 1000000 -- (1mbps)
    - 1920 \* 1080 大小录制对应 2000000 -- (2mbps)

  - defaultQP 取值范围：0~51，0 表示完全无损, 51 表示质量非常差，推荐高质量取值 18，中质量 26， 低质量 34。

<h2 id=CrMixerCotentRect>本地录制混图器内容配置</h2>

> CrMixerCotentRect

| 成员变量 | 类型                                                         | 说明                                                              |
| :------- | :----------------------------------------------------------- | :---------------------------------------------------------------- |
| type     | [CR_MIXER_VCONTENT_TYPE](Constant.md#CR_MIXER_VCONTENT_TYPE) | 混图内容类型                                                      |
| userId   | String                                                       | 摄像头用户 id (type = CR_MIXER_VCONTENT_TYPE.MIXVTP_VIDEO 时必填) |
| camId    | int                                                          | 摄像头 ID (type = CR_MIXER_VCONTENT_TYPE.MIXVTP_VIDEO 时必填)     |
| resId    | int                                                          | 资源 ID (type = CR_MIXER_VCONTENT_TYPE.MIXVTP_PIC 时必填)         |
| text     | int                                                          | 文本 (type = CR_MIXER_VCONTENT_TYPE.MIXVTP_TEXT 时必填)           |
| width    | int                                                          | 在混图画面中的区域的宽度                                          |
| height   | int                                                          | 在混图画面中的区域的高度                                          |
| top      | int                                                          | 在混图画面中的区域的顶点                                          |
| left     | int                                                          | 在混图画面中的区域的左点                                          |

> <p style="color:red; font-size:20px"> 注意事项</p>

- type, 类型[CR_MIXER_VCONTENT_TYPE](Constant.md#CR_MIXER_VCONTENT_TYPE):
- 当 type=MIXVTP_VIDEO 时，表示混图的是摄像头
- 当 type=MIXVTP_PIC 时，表示混图的是指定的图片（仅用于本地混图）
- 当 type=MIXVTP_SCREEN 时，表示混图的是本地屏幕
- 当 type=MIXVTP_MEDIA 时，表示混图的是影音共享
- 当 type=MIXVTP_TIMESTAMP 时，表示混图的是时戳
- 当 type=MIXVTP_REMOTE_SCREEN 时，表示混图的是远端共享的屏幕
- 当 type=MIXVTP_TEXT 时，表示混图的是文本(支持简单 html) (此 type 下，width 和 height 可为 0，此时元素大小由文本信息自动确定)

<h2 id=CrMixerOutPutCfg>本地录制混图器输出配置</h2>

> CrMixerOutPutCfg

| 成员变量            | 类型                 | 说明                                                                                                                                                                                     |
| :------------------ | :------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type                | CR_MIXER_OUTPUT_TYPE | 输出类型[CR_MIXER_OUTPUT_TYPE](Constant.md#CR_MIXER_OUTPUT_TYPE)                                                                                                                         |
| filename            | String               | 录像路径文件名（本地录像名格式如：/sdcard/1.mp4，服务器录像名格式如：/2018-11-21/1.mp4），支持的文件格式为 mp4/ts/flv/avi，其中 flv 和 ts 两种格式在程序异常结束时产生的录制文件仍可用。 |
| encryptType         | int                  | 录像文件是否加密，0:不加密，1:加密；                                                                                                                                                     |
| isUploadOnRecording | bool                 | 录像文件是否边录边传，false:不上传，true:边录边传; (此参数仅本地录像有效）                                                                                                               |
| serverPathFileName  | String               | 边录边传时，上传到服务器的路径文件名； (此参数仅本地录像有效）                                                                                                                           |
| liveUrl             | String               | 直播推流地址，支持 rtmp/rtsp                                                                                                                                                             |
| errRetryTimes       | int                  | 直播推流异常时，重试次数                                                                                                                                                                 |

<h2 id=CrMixerAudioCfg>云端混图器单音频配置</h2>

> CrMixerAudioCfg

| 成员变量    | 类型            | 说明                                                       |
| :---------- | :-------------- | :--------------------------------------------------------- |
| channelType | CR_CHANNEL_TYPE | 声道[CR_CHANNEL_TYPE](Constant.md#CR_CHANNEL_TYPE)         |
| audioFormat | CR_AUDIO_FORMAT | 音频文件格式[CR_AUDIO_FORMAT](Constant.md#CR_AUDIO_FORMAT) |

<h2 id=CrMutiMixerCfg>云端混图器配置对象</h2>

> CrMutiMixerCfg

| 成员变量      | 类型            | 说明                                                                      |
| :------------ | :-------------- | :------------------------------------------------------------------------ |
| id            | int             | 混图器 ID，每个混图器的配置、内容、和输出要根据 ID 对应                   |
| streamTypes   | CR_STREAM_TYPES | 输出类型[CR_STREAM_TYPES](Constant.md#CR_STREAM_TYPES)                    |
| mixerCfg      | CrMixerCfg      | 音视频混图器配置对象[CrMixerCfg](TypeDefinitions.md#CrMixerCfg)           |
| mixerAudioCfg | CrMixerAudioCfg | 单音频混图器配置对象[CrMixerAudioCfg](TypeDefinitions.md#CrMixerAudioCfg) |

<h2 id=CrMutiMixerContentParams>云端混图器内容参数配置</h2>

> CrMutiMixerContentParams

| 成员变量 | 类型   | 说明                                                      |
| :------- | :----- | :-------------------------------------------------------- |
| camid    | String | CR_MIXER_VCONTENT_TYPE 为 0 时必传 （录一个摄像头的画面） |
| text     | String | CR_MIXER_VCONTENT_TYPE 为 7 时必传 （录一个纯文本）       |

<h2 id=CrMutiMixerContent>云端混图器内容配置</h2>

> CrMutiMixerContent

| 成员变量               | 类型                     | 说明                                                                                               |
| :--------------------- | :----------------------- | :------------------------------------------------------------------------------------------------- |
| type                   | CR_MIXER_VCONTENT_TYPE   | 混图内容类型[CR_MIXER_VCONTENT_TYPE](Constant.md#CR_MIXER_VCONTENT_TYPE)                           |
| left                   | int                      | 该内容在混图画面中水平方向相对于最左边的位置                                                       |
| top                    | int                      | 该内容在混图画面中垂直方向相对于最顶部的位置                                                       |
| width                  | int                      | 该内容在混图画面中的宽度                                                                           |
| height                 | int                      | 该内容在混图画面中的高度                                                                           |
| keepAspectRatio        | CR_KEEP_ASPECT_RATIO     | 内容是否保持原始比例，0：不保持   1：保持 [CR_KEEP_ASPECT_RATIO](Constant.md#CR_KEEP_ASPECT_RATIO) |
| mutiMixerContentParams | CrMutiMixerContentParams | 参数配置[CrMutiMixerContentParams](TypeDefinitions.md#CrMutiMixerContentParams)                    |

<h2 id=CrMutiMixerContents>云端混图器内容集合配置</h2>

> CrMutiMixerContents

| 成员变量 | 类型                     | 说明                                                                          |
| :------- | :----------------------- | :---------------------------------------------------------------------------- |
| id       | int                      | 混图器 ID，每个混图器的配置、内容、和输出要根据 ID 对应                       |
| content  | List<CrMutiMixerContent> | 云端混图器内容集合[CrMutiMixerContent](TypeDefinitions.md#CrMutiMixerContent) |

<h2 id=CrMutiMixerOutputCfg>云端混图器输出配置对象</h2>

> CrMutiMixerOutputCfg

| 成员变量 | 类型                 | 说明                                                             |
| :------- | :------------------- | :--------------------------------------------------------------- |
| type     | CR_MIXER_OUTPUT_TYPE | 输出类型[CR_MIXER_OUTPUT_TYPE](Constant.md#CR_MIXER_OUTPUT_TYPE) |
| filename | String               | 输出文件名（输出类型为录像文件时）                               |
| liveUrl  | String               | 推流地址（输出类型为直播流时）                                   |

<h2 id=CrMutiMixerOutput>云端混图输出对象集合</h2>

> CrMutiMixerOutput

| 成员变量            | 类型                       | 说明                                                                                |
| :------------------ | :------------------------- | :---------------------------------------------------------------------------------- |
| id                  | int                        | 混图器 ID，每个混图器的配置、内容、和输出要根据 ID 对应                             |
| mutiMixerOutputCfgs | List<CrMutiMixerOutputCfg> | 云端混图输出对象集合[CrMutiMixerOutputCfg](TypeDefinitions.md#CrMutiMixerOutputCfg) |

<h2 id=CrMixerOutputInfo>录制文件、直播信息通知</h2>

> CrMixerOutputInfo

| 成员变量 | 类型                                                       | 说明                      |
| :------- | :--------------------------------------------------------- | :------------------------ |
| state    | [CR_MIXER_OUTPUT_STATE](Constant.md#CR_MIXER_OUTPUT_STATE) | 状态                      |
| duration | int                                                        | 录像文件时长，单位：毫秒; |
| fileSize | int                                                        | 录像文件大小；            |
| errCode  | [CrErrorDef](Constant.md#CrErrorDef)                       | 错误码                    |

- <p style="color:red; font-size:20px"> 注意事项</p>

  - 输出对象已创建;
  - 输出目标信息更新; 可以从结构中取得 duration, fileSize 参数；
  - 输出对象已关闭; 可以从结构中取得 duration, fileSize 参数；
  - 输出对象异常；可以从结构中取得 err 参数；

<h2 id=CrLocMixerState>本地混图器状态变化通知</h2>

> CrLocMixerState

> | 成员变量 | 类型                                                       | 说明                                                    |
> | :------- | :--------------------------------------------------------- | :------------------------------------------------------ |
> | mixerID  | String                                                     | 混图器 ID，每个混图器的配置、内容、和输出要根据 ID 对应 |
> | state    | [CR_MIXER_OUTPUT_STATE](Constant.md#CR_MIXER_OUTPUT_STATE) | 状态                                                    |

<h2 id=CrSvrMixerState>云端混图器状态变化通知</h2>

> CrSvrMixerState

> | 成员变量   | 类型                                                       | 说明              |
> | :--------- | :--------------------------------------------------------- | :---------------- |
> | operatorID | String                                                     | 引起变化的用户 id |
> | state      | [CR_MIXER_OUTPUT_STATE](Constant.md#CR_MIXER_OUTPUT_STATE) | 状态              |
> | sdkErr     | int                                                        | 错误值            |

<!-- <h2 id=CrRecordFileShow>录制文件</h2>

> CrRecordFileShow

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| fileName  | String |    文件名，全路径  |
| fileSize  | int |    文件大小  |
| state  | [CR_RECORD_FILE_STATE](Constant.md#CR_RECORD_FILE_STATE) |    文件状态  |
| uploadPercent  | int |    录制结果中视频尺寸高度上传进度  |   -->

<h2 id=CrMediaInfo>影音文件信息</h2>

> CrMediaInfo

| 成员变量  | 类型                                         | 说明       |
| :-------- | :------------------------------------------- | :--------- |
| userID    | String                                       | 用户 id    |
| state     | [CR_MEDIA_STATE](Constant.md#CR_MEDIA_STATE) | 播放状态   |
| mediaName | String                                       | 影音文件名 |

<h2 id=CrScreenShareCfg>屏幕共享配置对象</h2>

> CrScreenShareCfg

| 参数   | 类型 | 说明                                              |
| :----- | :--- | :------------------------------------------------ |
| maxFPS | int  | 帧率, 缺省为 8 （当网络发不动时，帧率会自动下降） |
| maxBps | int  | 最大码率，缺省为 800kbps                          |

<h2 id=CrChatMsg>文本聊天对象</h2>

> CrChatMsg

| 参数       | 类型   | 说明          |
| :--------- | :----- | :------------ |
| fromUserID | String | 消息发送人 ID |
| text       | String | 消息内容      |
