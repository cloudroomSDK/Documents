<h1 id=begin>数据结构体定义</h1>


<h2 id=CRSDKCreateParams>CRSDKCreateParams sdk创建扩展参数</h2>

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| Timeout | int | 网络通信超时时间，单位是毫秒，取值范围：10000-120000, 缺省值:60000(60秒) |


<h2 id=CRLoginDat>CRLoginDat 登录数据</h2>

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| _sdkAuthType | [CRVSDK_AUTHTYPE](Constant.md#CRVSDK_AUTHTYPE) | 鉴权类型，请参见[SDK登录鉴权方案](loginIdentify.md#AuthTypeDesc) |
| _appID | [CRString](Apis.md#CRString) | _sdkAuthType为CRVSDK_AUTHTP_SECRET时为必选参数；</br>App ID的相关说明，请参见[关键词](KeyWords.md#appID) |
| _md5_appSecret | [CRString](Apis.md#CRString) | appSecret的md5值，_sdkAuthType为CRVSDK_AUTHTP_SECRET为必选参数 |
| _token | [CRString](Apis.md#CRString) | appSecret的md5值，_sdkAuthType为CRVSDK_AUTHTP_TOKEN时为必选参数 |
| _webProtocol | [CRVSDK_WEBPROTOCOL](Constant.md#CRVSDK_WEBPROTOCOL) | 访问web服务协义类型 |
| _serverAddr | [CRString](Apis.md#CRString) | 服务器地址，_webProtocol不同取值，请带正确的网络端口 |
| _networkProxy | [CRString](Apis.md#CRString) | 网络代理, 无代理时传空 |
| _userID | [CRString](Apis.md#CRString) | 用户ID，长度不能大于128。业务方自由填写，保证同一appID下具有唯一性 |
| _nickName | [CRString](Apis.md#CRString) | 用户昵称，长度不能大于128 |
| _userAuthCode | [CRString](Apis.md#CRString) | 默认填空。只有开启第三方认证才需要填写。（开启第三方认证时，云屋SDK服务器将连接提前配好的业务方服务器进行实时验证。） |



<h2 id=CRMeetInfo>CRMeetInfo 房间信息</h2>

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| _ID | int | 房间号, 请参见[关键词](KeyWords.md#roomID) |



<h2 id=CRUserStatus>CRUserStatus 用户在线状态信息</h2>

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| _userID | [CRString](Apis.md#CRString) | 用户ID, 请参见[关键词](KeyWords.md#UID) |
| _userStatus | [CRVSDK_USER_STATUS](Constant.md#CRVSDK_USER_STATUS) | 客户端状态 |
| _DNDType | int | 用户自定义免打扰状态，0:未开启免打扰 |



<h2 id=CRQueInfo>CRQueInfo 队列信息</h2>

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| _queID | int | 队列ID |
| _name | [CRString](Apis.md#CRString) | 队列名称 |
| _desc | [CRString](Apis.md#CRString) | 队列描述信息 |
| _prio | int | 队列优先级(为优先级最高) |



<h2 id=CRQueUserInfo>CRQueUserInfo 排队用户信息</h2>

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| _queID | int | 队列ID |
| _usrID | [CRString](Apis.md#CRString) | 排队的用户ID |
| _name | [CRString](Apis.md#CRString) | 用户的昵称 |
| _usrExtDat | [CRString](Apis.md#CRString) | 用户排队时的扩展数据 |
| _queuingTime | int | 排队的时长(单位:秒) |



<h2 id=CRQueStatus>CRQueStatus 队列状态</h2>

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| _queID | int | 队列ID |
| _agentNum | int | 坐席数 |
| _waitNum | int | 等待人数 |
| _srvNum | int | 服务中人数 |



<h2 id=CRQueuingInfo>CRQueuingInfo 我的排队信息</h2>

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| _queID | int | 排的队列ID(<0:代表我没有排队) |
| _position | int | 当前位置（0为队首，即将被服务） |
| _queuingTime | int | 我排队的时长(单位:秒) |



<h2 id=CRQueuingInfo>CRQueuingInfo 我的排队信息</h2>

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| _queID | int | 排的队列ID(<0:代表我没有排队) |
| _position | int | 当前位置（0为队首，即将被服务） |
| _queuingTime | int | 我排队的时长(单位:秒) |



<h2 id=CRTransReqInfo>CRTransReqInfo 文件传输请求信息</h2>

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| _filePathName | [CRString](Apis.md#CRString) | 本地路径文件名 |
| _dstUrl | [CRString](Apis.md#CRString) | 目标URL |
| _bUploadType | bool | 传输类型(上传:true、下载:false) |
| _extParams | [CRString](Apis.md#CRString) | 扩展信息，如：http头部扩展，json格式，{"header1":"value1", "header2":"value2"} |
| _transferCfg | [CRString](Apis.md#CRString) | 传输控制参数，josn格式，例如{"decodeCREEFile":0} </br>详细如下：</br>（1）decodeCREEFile：此参数仅http上传有效。0:上传原始文件，1:上传解密的文件（云屋录制加密文件）</br>（2）extParamsTransfType：此参数仅http上传有效。当取值缺省或为0时：extParams在header中传送。取值为1时：extParams在multipart/form-data中传送 |


<h2 id=CRFileTransInfo>CRFileTransInfo 文件传输状态信息</h2>

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| _filePathName | [CRString](Apis.md#CRString) | 本地路径文件名 |
| _dstUrl | [CRString](Apis.md#CRString) | 目标URL |
| _bUploadType | bool | 传输类型(上传:true、下载:false) |
| _extParams | [CRString](Apis.md#CRString) | 参见[CRTransReqInfo](#CRTransReqInfo)对应描述 |
| _transferCfg | [CRString](Apis.md#CRString) | 参见[CRTransReqInfo](#CRTransReqInfo)对应描述 |
| _state | [CRVSDK_FILETRANSFER_STATE](Constant.md#CRVSDK_FILETRANSFER_STATE) | 传输状态 |
| _fileSize | int64_t | 文件大小 |
| _finishedSize | int64_t | 已传输大小 |



<h2 id=CRMeetingMember>CRMeetingMember 房间成员信息</h2>

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| _userId | [CRString](Apis.md#CRString) | 用户ID |
| _nickName | [CRString](Apis.md#CRString) | 姓名 |
| _audioStatus | [CRVSDK_ASTATUS](Constant.md#CRVSDK_ASTATUS) | 音频状态 |
| _videoStatus | [CRVSDK_VSTATUS](Constant.md#CRVSDK_VSTATUS) | 视频状态 |



<h2 id=CRAudioDevInfo>CRAudioDevInfo 音频设备信息</h2>

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| _id | [CRString](Apis.md#CRString) | 设备id |
| _name | [CRString](Apis.md#CRString) | 设备名称 |



<h2 id=CRVideoDevInfo>CRVideoDevInfo 视频设备信息</h2>

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| _videoID | int | 设备编号（程序重启后可能变化） |
| _devName | [CRString](Apis.md#CRString) | 设备名称 |
| _audioStatus | [CRVSDK_ASTATUS](Constant.md#CRVSDK_ASTATUS) | 音频状态 |
| _devMaxSz | CRSize | 摄像头支持的最大分辨率 |
| _devGuid | [CRString](Apis.md#CRString) | 设备guid, 仅获取本地设备有效 |
| _bDisabled | bool | 设备是否被禁用, 仅获取本地设备有效 |
| _devType | [CRVSDK_VDEV_TYPE](Constant.md#CRVSDK_VDEV_TYPE) | 设备类型 |



<h2 id=CRUserVideoID>CRUserVideoID 用户视频ID</h2>

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| _userID | [CRString](Apis.md#CRString) | 用户id |
| _videoID | int | 设备id |



<h2 id=CRAudioCfg>CRAudioCfg 音频配置</h2>

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| _micGuid | [CRString](Apis.md#CRString) | 麦克风设备(空代表系统默认设备) |
| _spkGuid | [CRString](Apis.md#CRString) | 扬声器设备(空代表系统默认设备) |
| _agc | bool | 是否启用声音增益 |
| _ans | bool | 是否启用降噪 |
| _aec | bool | 是否启用回声消除 |


<h2 id=CRVideoCfg>CRVideoCfg 视频配置</h2>

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| _size | CRSize | 采集编码尺寸 |
| _fps | int | 视频帧率(1~30) |
| _maxbps | int | 视频码率(-1,使用内部[默认值](Constant.md#CRVSDK_DEFAULTBPS)）</br>单位为bps，如100kbps填值：100000，1mkbps填值1000000 |
| _min_qp | int | 最佳质量(18~51, 越小质量越好) (未配置则使用内部默认值22) |
| _max_qp | int | 最低质量(18~51, 越小质量越好) (未配置则使用内部默认值32), sdk在网络不好时，智能调低质量，以便降低码率来提升流畅性 |



<h2 id=CRAudioFrame>CRAudioFrame 音频帧数据</h2>

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| _format | [CRVSDK_AUDIO_FORMAT](Constant.md#CRVSDK_AUDIO_FORMAT) | 音频格式 |
| _sampleRate | int | 采样率 |
| _channel | int | 声道数 |
| _timestamp | int64_t | 时间戳（ms) |
| _data | uint8_t* | 音频数据（可被修改） |
| _datLen | int | 音频数据长度 |



<h2 id=CRAudioFrame2>CRAudioFrame2 音频帧数据</h2>

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| _format | [CRVSDK_AUDIO_FORMAT](Constant.md#CRVSDK_AUDIO_FORMAT) | 音频格式 |
| _sampleRate | int | 采样率 |
| _channel | int | 声道数 |
| _timestamp | int64_t | 时间戳（ms) |
| _data | [CRByteArray](Apis.md#CRByteArray) | 音频数据 |



<h2 id=CRVideoFrame>CRVideoFrame 视频帧数据</h2>

| 接口 | 描述 |
| :- | :- |
| CRVideoFrame() | 构造空的视频帧 |
| CRVideoFrame(const CRVideoFrame& s) | 拷贝构造视频帧，内部视频数据共享 |
| CRVideoFrame& operator=(const CRVideoFrame& s) | 视频帧赋值，内部视频数据共享 |
| void initData([CRVSDK_VIDEO_FORMAT](Constant.md#CRVSDK_VIDEO_FORMAT) fmt, int w, int h, int64_t timeStamp = 0) | 为帧分配内存空间，可通过getRawDatPtr得到对应内存指针，再进行写入操作 |
| void initData([CRVSDK_VIDEO_FORMAT](Constant.md#CRVSDK_VIDEO_FORMAT) fmt, int w, int h, const uint8_t *initDat, int dataLen, int64_t timeStamp = 0) | 设置帧数据，内部将分配内存，并copy initDat的内容 |
| CRVSDK_VIDEO_FORMAT getFormat() const | 获取帧图像格式 |
| int getWidth() const | 获取帧图像宽 |
| int getHeight() const | 获取帧图像高 |
| int64_t getTimestamp() const | 获取帧图像时戳 |
| int getDatSize() const | 获取图像数据大小 |
| int copyDatToBuf(unsigned char *pBuf, int bufLen) const | copy图像数据到目标内存，涉及数据copy效率较低 |
| void getRawDatPtr(uint8_t **ptr, int *lineSize, int planeCount) const; | 获取内部共享的数据指针，不涉及数据copy效率高 |


getRawDatPtr使用举例：

```
获取rgb格式如下：
uint8_t* pRGBDat[1];
int      linesize[1];
getRawDatPtr(&pRGBDat, &linesize, 1);

获取yuv420p格式如下：
uint8_t* yuv[3];
int      linesize[3];
getRawDatPtr(yuv, linesize, 3);
```



<h2 id=CRScreenShareCfg>CRScreenShareCfg 屏幕共享配置参数</h2>

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| _monitorID | int | 监视器ID（-1为默认监视器） |
| _catchWnd | void* | 共享指定的窗口句柄(仅windows有效） |
| _catchRect | CRRect | 共享区域 |
| _encSize | CRSize | 编码清晰度（尺寸宽高为0时，以抓图的尺寸为准；宽或高超过1920时将等比缩小到1920) |
| _maxFPS | int | 最大帧率(0~25，默认为12fps) |
| _maxKbps | int | 最大码率(<0, 使用内部[默认值](Constant.md#CRVSDK_DEFAULTBPS)）</br>单位为kbps，如100kbps填值：100，1mkbps填值1000 |
| _qp | int | 画质（<0时，使用默认值22) |
| _shareSound | bool | 共享电脑声音 |
| _excludeSharerPID | bool | 不共享本进程 |




<h2 id=CRScreenShareInfo>CRScreenShareInfo 屏幕共享状态信息</h2>

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| _state | int | 共享状态， 0：未共享，1:共享中 |
| _sharerUserID | [CRString](Apis.md#CRString) | 共享者用户ID |
| _ctrlerUserID | [CRString](Apis.md#CRString) | 当前控制者用户ID |



<h2 id=CRMediaInfo>CRMediaInfo 影音共享状态信息</h2>

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| _state | [CRVSDK_MEDIA_STATE](Constant.md#CRVSDK_MEDIA_STATE) | 共享状态 |
| _userID | [CRString](Apis.md#CRString) | 共享者用户ID |
| _mediaName | [CRString](Apis.md#CRString) | 共享的文件名 |



<h2 id=CRCanvas>CRCanvas sdk内部渲染对象</h2>

| 接口 | 描述 |
| :- | :- |
| CRCanvas([CRVSDK_STREAM_VIEWTYPE](Constant.md#CRVSDK_STREAM_VIEWTYPE) viewType, void *view) | 构造函数</br>viewType：视图类型</br>view：windows为窗口句柄 |
| [CRVSDK_STREAM_VIEWTYPE](Constant.md#CRVSDK_STREAM_VIEWTYPE) getViewType() | 获取视图类型, 线程安全 |
| void setScalingMode([CRVSDK_SCALE_MODE](Constant.md#CRVSDK_SCALE_MODE) mode) | 设置缩放模式, 线程安全 |
| [CRVideoFrame](#CRVideoFrame) getVideoFrame() | 获取当前显示的帧信息,线程安全 |
| void setVideoID(const [CRUserVideoID](#CRUserVideoID) &id, [CRVSDK_VSTEAMLV_TYPE](Constant.md#CRVSDK_VSTEAMLV_TYPE) lv = CRVSDK_VSTP_LV0) | 设置视频源, 线程安全</br>仅viewType为CRVSDK_VIEWTP_VIDEO才能设置</br>所有端默认有标准流CRVSDK_VSTP_LV0可以被观看，如果要观看对方小流，必须对方开启才能观看，参见[setVideoAttributes](Apis.md#setVideoAttributes) |



<h2 id=CRCustomRenderHandler>CRCustomRenderHandler 自渲染对象</h2>

| 接口 | 描述 |
| :- | :- |
| CRCustomRenderHandler([CRVSDK_STREAM_VIEWTYPE](Constant.md#CRVSDK_STREAM_VIEWTYPE) viewType, void *view) | 构造函数</br>viewType：视图类型 |
| [CRVSDK_STREAM_VIEWTYPE](Constant.md#CRVSDK_STREAM_VIEWTYPE) getViewType() | 获取视图类型, 线程安全 |
| void setVideoID(const  [CRUserVideoID](#CRUserVideoID) &id, [CRVSDK_VSTEAMLV_TYPE](Constant.md#CRVSDK_VSTEAMLV_TYPE) lv = CRVSDK_VSTP_LV0) | 设置视频源, 线程安全</br>仅viewType为CRVSDK_VIEWTP_VIDEO才能设置</br>所有端默认有标准流CRVSDK_VSTP_LV0可以被观看，如果要观看对方小流，必须对方开启才能观看，参见[setVideoAttributes](Apis.md#setVideoAttributes)|
| virtual void onRenderFrameDat(const [CRVideoFrame](#CRVideoFrame) &frm) = 0 | 通知新的视频帧，纯虚函数</br>在内部线程调回调，注意多线程问题 |



<h2 id=CRVideoAttributesObj>CRVideoAttributesObj 摄像头私有属性</h2>

```json
//只开大流，清晰度为720p
{ "size":"1280*720", "fps":15, "maxbps":1000000 }
//开启大小流，大流720p， 小流160p
{ "size":"1280*720", "fps":15, "maxbps":1000000, "quality2":{"size":"228*160", "maxbps":120000} }
```

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| disabled | int | 可选参数，取值0:不禁用此设备(默认值)，1：禁用此设备； |
| effects | [CRVideoEffectsObj](#CRVideoEffectsObj) | 可选参数，视频效果配置，未配置时采用全局配置[setVideoEffects](Apis.md#setVideoEffects) |
| fps | int | 可选参数，参见[CRVideoCfg](#CRVideoCfg)的描述，未配置时采用全局配置[setVideoCfg](Apis.md#setVideoCfg) |
| size | string | 可选参数，参见[CRVideoCfg](#CRVideoCfg)的描述，未配置时采用全局配置[setVideoCfg](Apis.md#setVideoCfg) |
| maxbps | int | 可选参数，参见[CRVideoCfg](#CRVideoCfg)的描述，未配置时采用全局配置[setVideoCfg](Apis.md#setVideoCfg) |
| qp_min | int | 可选参数，参见[CRVideoCfg](#CRVideoCfg)的描述，未配置时采用全局配置[setVideoCfg](Apis.md#setVideoCfg) |
| qp_max | int | 可选参数，参见[CRVideoCfg](#CRVideoCfg)的描述，未配置时采用全局配置[setVideoCfg](Apis.md#setVideoCfg) |
| quality2 | object | 可选参数，第二档质量配置，支持的属性有：size, maxbps, qp_min, qp_max；</br>quality2未配置或配为空，代表关闭第二流；</br>配置quality2，代表开启第二流，将带来较大的cpu开销；</br>通过setVideo2可以选择观看的标准流或第二流； |




<h2 id=CRVideoEffectsObj>CRVideoEffectsObj 视频效果参数</h2>

```json
 {"denoise":1,"mirror":1}
```

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| denoise | int | 视频降噪, 取值：0/1, 默值为1 |
| mirror | int | 视频镜像（左右翻转），取值:0/1, 默认为0。如果只想本地镜像，可在图像绘制前调用[mirrorVideoFrame](Apis.md#mirrorVideoFrame)对图像进行镜像处理 |
| upsideDown | int | 视频上下翻转，取值:0/1, 默认为0 |
| deinterlace | int | 视频反交错，取值:0/1, 默认为0 （除非视频采集设备为隔行扫描设备，否则不要开启） |
| degree | int | 旋转角度，<0代表自动，旋转取值:0、90、180、270、360, 默认为自动模式 |




<h2 id=CRLocMixerCfgObj>CRLocMixerCfgObj 本地混图器规格配置</h2>

```json
 {"width":640,"height":360,"frameRate":8,"bitRate":500000,"defaultQP":28,"gop":120}
```

| 参数 | 类型 | 说明 |
| :- | :- | :- |
|width |int&nbsp;| 图像宽度（要求16的倍数）|
|height |int| 图像高度（要求8的倍数）|
|frameRate |int| 图像帧率，取值范围:1-30(值越大,cpu要求更高，录像推荐15帧，直播推存25帧)|
|bitRate |int| 最高码率（例如1m:1000000)，当图像变化小时，平均码率会低于此值|
|defaultQP |int| 目标质量，缺省值：25。取值范围：0~51，0表示完全无损, 51表示质量非常差，推荐高质量取值18，中质量25， 低质量34|
|gop |int| I帧周期(I帧周期越大码率越小，但直播延时会越大）； 文件录制建议15秒一个I帧，取值：frameRate x 15（frameRate的15倍）； 直播建议4秒一个I帧，取值: frameRate x 4（frameRate的4倍）;|




<h2 id=CRMixerContentObj>CRMixerContentObj 混图器内容集合</h2>

```json
[
{"type":0,"keepAspectRatio":1,"left":5,"top":10, "width":633,"height":356,"param":{"camid":"usr1.1"}},
{"type":0,"keepAspectRatio":1,"left":642,"top":10, "width":633,"height":356,"param":{"camid":"usr2.1"}}
]
```


| 参数 | 类型 | 说明 |
| :- | :- | :- |
|left |int| 在混图画面中的区域（水平位置）|
|top |int| 在混图画面中的区域（垂直位置）|
|width |int| 在混图画面中的区域宽 |
|height |int| 在混图画面中的区域高 |
|type |int|[CRVSDK_MIXER_CONTENT_TYPE](Constant.md#CRVSDK_MIXER_CONTENT_TYPE),请见后面type描述;|
|keepAspectRatio |int| 内容保持原始比例，0不保持，1保持|
|param |obj| 如：{"camid":"usrxxx.1"}。请见后面param支持的参数;|

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
> * resourceid：具有唯一属性的字符串id，通过[setPicResource](Apis.md#setPicResource)将图片存储到sdk内供混图模块使用
> * screenid：屏幕序号，-1表示主屏
> * pid：进程号
> * area：抓屏区域:"x,y,w,h"
> * text：文本内容，支持时间戳参数"%timestamp%"，格式为：YYYY-MM-DD HH:MM:SS 
> * color：文本颜色，格式：#RRGGBB[AA]， 默认#FFFFFF
> * background：背景色，格式：#RRGGBB[AA]， 默认#0000007D
> * font-size：字体大小，默认18
> * text-margin：边距，默认5




<h2 id=CRLocMixerOutputObj>CRLocMixerOutputObj 本地混图器输出配置</h2>


```json
  输出到文件配置：{"type":0,"filename":"D:/1.mp4"}
  直播推流配置：{"type":1,"liveUrl":"rtmp://xxx"}
```

当输出到文件时，参数如下：

| 参数 | 类型 | 说明 |
| :- | :- | :- |
|type |int| 录制文件[CRVSDK_MIXER_OUTPUT_FILE](Constant.md#CRVSDK_MIXER_OUTPUT_TYPE)|
|filename |string| 录像路径文件名（如：d:/1.mp4），支持的文件格式为mp4/ts/flv/avi，其中flv和ts两种格式在程序异常结束时产生的录制文件仍可用。|
|encryptType |int|可选参数，录像文件是否加密，0:不加密（默认值），1:加密；|

当输出推流时，参数如下：

| 参数 | 类型 | 说明 |
| :- | :- | :-
|type |int| 直播推流[CRVSDK_MIXER_OUTPUT_LIVE](Constant.md#CRVSDK_MIXER_OUTPUT_TYPE)|
|liveUrl |string| 直播推流地址，支持rtmp/rtsp； |
|errRetryTimes |int|可选参数，直播推流异常时，重试次数，默认值0 |




<h2 id=CRLocMixerOutputInfoObj>CRLocMixerOutputInfoObj 本地混图器输出信息</h2>

```json

{ "state":2, "duration":100,"fileSize":10000 }

```

| 参数 | 类型 | 说明 |
| :- | :- | :- |
|state |int| 状态：</br>0：输出对象已创建；</br>1：输出目标信息更新；可以从结构中取得：duration, fileSize参数；</br>2：输出对象已关闭；可以从结构中取得：duration, fileSize参数；</br>3：输出对象异常；可以从结构中取得：err参数；|
|duration |int| 录像文件时长，单位：毫秒；|
|fileSize |int| 录像文件大小；|
|errCode |int| 错误码[CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) |




<h2 id=CRCloudMixerCfgObj>CRCloudMixerCfgObj 云端混图器配置</h2>

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
| audioFileCfg | [CRCloudMixerAudioFileCfg](#CRCloudMixerAudioFileCfg) | 生成音频文件配置，生成规则：进入房间并开启麦克风开始生成文件，离开房间结束生成文件 | 否 |
| videoFileCfg | [CRCloudMixerVideoFileCfg](#CRCloudMixerVideoFileCfg) | 生成视频文件配置，生成规则：进入房间并开启摄像头开始生成文件，离开房间结束生成文件 | 否 |
| storageConfig | [CRCloudStorageConfig](#CRCloudStorageConfig) | 云存储配置，不配置时将存储在云屋服务器上 | 否 |




<h2 id=CRCloudMixerAudioFileCfg>CRCloudMixerAudioFileCfg 云端录制语音文件配置</h2>

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



<h2 id=CRCloudMixerVideoFileCfg>CRCloudMixerVideoFileCfg 云端录制视频文件配置</h2>

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
| vBps | int | 视频码率，取值参见[视频流默认码率定义](Constant.md#CRVSDK_DEFAULTBPS) 默认会根据视频尺寸生成码率 | 否 |
| vQP | int | 视频质量，取值0~51(0表示完全无损, 51表示质量非常差)，推荐高质量取值18，中质量25，低质量34， 默认值19 | 否 |
| layoutConfig | array | 布局内容列表，[[CRMixerContentObj](#CRMixerContentObj),[CRMixerContentObj](#CRMixerContentObj)，...] | 是 |



<h2 id=CRCloudStorageConfig>CRCloudStorageConfig 云端录制存储配置</h2>

| 参数 | 类型 | 说明 | 是否必传 |
| :- | :- | :- | :- |
| vendor | int | 第三方云存储平台： 1-阿里云 | 是 |
| region | string | 第三方云存储指定的地区信息 | 是 |
| bucket | string | 第三方云存储的 bucket | 是 |
| accessKey | string | 第三方云存储的 access key | 是 |
| secretKey | string | 第三方云存储的 secret key | 是 | 



<h2 id=CRCloudMixerInfoList>CRCloudMixerInfoList 云端混图器信息列表</h2>

CRCloudMixerInfo列表，参见[CRCloudMixerInfo](#CRCloudMixerInfo)



<h2 id=CRCloudMixerInfo>CRCloudMixerInfo 云端混图器信息</h2>

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| ID | string | 混图器ID |
| owner | string | 创建者用户ID |
| cfg | string | 录制配置，json格式串，参见[CRCloudMixerCfgObj](#CRCloudMixerCfgObj) |
| state | int | 录制状态，参见[CRVSDK_MIXER_STATE](Constant.md#CRVSDK_MIXER_STATE) |


<h2 id=CRCloudMixerOutputInfo>CRCloudMixerOutputInfo 云端混图器输出信息</h2>

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| id | string | 混图器ID |
| state | int | 具体参考[CRVSDK_CLOUDMIXER_OUTPUT_STATE](Constant.md#CRVSDK_CLOUDMIXER_OUTPUT_STATE)
| svrFilePathName | string | 录像路径文件名 |
| startTime | int64 | 创建时间(从1970年1月1日00:00:00起的毫秒数)，当state为CRVSDK_CLOUDMO_STOPPED才有该参数 |
| duration | int | 录像时长(ms)，当state为CRVSDK_CLOUDMO_STOPPED才有该参数 |
| fileSize | int64 | 文件大小(Byte)，当state为CRVSDK_CLOUDMO_STOPPED才有该参数 |
| errCode | int | 错误码[CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF), 当state为CRVSDK_CLOUDMO_FAIL或CRVSDK_CLOUDMO_UPLOADFAIL才有该参数 |
| errDesc | string | 错误描述, 当state为CRVSDK_CLOUDMO_FAIL或CRVSDK_CLOUDMO_UPLOADFAIL才有该参数 |
| progress | float | 上传进度（0~100.0）, 当state为CRVSDK_CLOUDMO_UPLOADING才有该参数 |



<h2 id=CRMeetingAttrOptions>CRMeetingAttrOptions 操作房间属性选项</h2>

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| notifyAll | int | 0（默认值）:不通知，1：通知房间所有人员 |




<h2 id=CRMeetingAttrObjs>CRMeetingAttrObjs 房间属性集</h2>

```json
{
    "KeyXX": {
        "value": "11111",
        "lastModifyUserID": "111",
        "lastModifyTs": 11111
    },
    "KeyYY": {
        "value": "22222",
        "lastModifyUserID": "222",
        "lastModifyTs": 22222
    }
}
```

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| User defined Key | string | 自定义的属性Key |
| value | string | 属性值 |
| lastModifyUserID | string | 最后修改的用户ID |
| lastModifyTs | int | 最后修改的时间点，1970-1-1 00:00:00以来的秒数 |




<h2 id=CRUsrAttrObjs>CRUsrAttrObjs 用户属性集</h2>

```json
 {
    "userid1": {
        "KeyXX": {
            "value": "11111",
            "lastModifyUserID": "111",
            "lastModifyTs": 11111
        },
        "KeyYY": {
            "value": "22222",
            "lastModifyUserID": "222",
            "lastModifyTs": 22222
        }
    },
    "userid2": {
        "KeyXX": {
            "value": "11111",
            "lastModifyUserID": "111",
            "lastModifyTs": 11111
        },
        "KeyYY": {
            "value": "22222",
            "lastModifyUserID": "222",
            "lastModifyTs": 22222
        }
    }
}
```

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| UserID | string | 用户ID |
| User defined Key | string | 自定义的属性Key |
| value | string | 属性值 |
| lastModifyUserID | string | 最后修改的用户ID |
| lastModifyTs | int | 最后修改的时间点，1970-1-1 00:00:00以来的秒数 |



