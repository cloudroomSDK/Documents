# API

## 方法概叙

<h3 id=basic>基础函数</h3>

| 接口                                  | 描述           |
| :------------------------------------ | :------------- |
| [init](API.md#init)                   | SDK 初始化     |
| [uninit](API.md#uninit)               | SDK 反初始化   |
| [getServerAddr](API.md#getServerAddr) | 获取服务器地址 |
| [setServerAddr](API.md#setServerAddr) | 设置服务器地址 |

<h3 id=login>登录/注销</h3>

| 接口                    | 描述 |
| :---------------------- | :--- |
| [login](API.md#loginfn) | 登录 |
| [logout](API.md#logout) | 注销 |

| 订阅                      | 描述         |
| :------------------------ | :----------- |
| [lineOff](API.md#lineOff) | 通知用户掉线 |

<h3 id=members>成员管理</h3>

| 接口                                      | 描述                     |
| :---------------------------------------- | :----------------------- |
| [getAllMembers](API.md#getAllMembers)     | 获取房间所有成员的列表   |
| [getMemberInfo](API.md#getMemberInfo)     | 获取某个用户的信息       |
| [getNickName](API.md#getNickName)         | 获取某个用户的昵称       |
| [setNickName](API.md#setNickName)         | 设置某个用户的昵称       |
| [isUserInMeeting](API.md#isUserInMeeting) | 判断某个用户是否在房间中 |

<h3 id=room>房间管理</h3>

| 接口                                    | 描述                                           |
| :-------------------------------------- | :--------------------------------------------- |
| [createMeeting](API.md#createMeeting)   | 创建视频房间                                   |
| [destroyMeeting](API.md#destroyMeeting) | 销毁视频房间                                   |
| [enterMeeting](API.md#enterMeeting)     | 使用房间 ID 和密码（可为空）进入指定的视频房间 |
| [exitMeeting](API.md#exitMeeting)       | 离开房间                                       |

| 订阅                                        | 描述                                                               |
| :------------------------------------------ | :----------------------------------------------------------------- |
| [userEnterMeeting](API.md#userEnterMeeting) | 某用户进入了房间                                                   |
| [userLeftMeeting](API.md#userLeftMeeting)   | 某用户离开了房间                                                   |
| [meetingDropped](API.md#meetingDropped)     | 通知从房间里掉线了，收到该通知后可以调用 enterMeeting 尝试重新入会 |
| [netStateChanged](API.md#netStateChanged)   | 网络变化通知                                                       |

<h3 id=room_attributes>房间、用户属性：</h3>

| 接口                                                | 描述               |
| :-------------------------------------------------- | :----------------- |
| [sendMeetingCustomMsg](API.md#sendMeetingCustomMsg) | 房间内发送广播消息 |

| 订阅                                                    | 描述                             |
| :------------------------------------------------------ | :------------------------------- |
| [notifyMeetingCustomMsg](API.md#notifyMeetingCustomMsg) | 通知发送房间内自定义广播消息结果 |

<h3 id=video>视频管理</h3>

| 接口                                            | 描述                                         |
| :---------------------------------------------- | :------------------------------------------- |
| [getWatchableVideos](API.md#getWatchableVideos) | 获取房间内所有可观看的摄像头                 |
| [getAllVideoInfo](API.md#getAllVideoInfo)       | 获取用户所有的摄像头信息                     |
| [openVideo](API.md#openVideo)                   | 打开用户的摄像头，以便本地、远端显示视频图像 |
| [closeVideo](API.md#closeVideo)                 | 关闭用户的摄像头                             |
| [getVideoCfg](API.md#getVideoCfg)               | 获取设置的摄像头参数                         |
| [setVideoCfg](API.md#setVideoCfg)               | 设置摄像头参数                               |
| [getDefaultVideo](API.md#getDefaultVideo)       | 获取指定用户的默认摄像头                     |
| [setDefaultVideo](API.md#setDefaultVideo)       | 设置默认的摄像头                             |
| [createPlatformView](API.md#createPlatformView) | 创建视频容器                                 |
| [setUsrVideoId](API.md#setUsrVideoId)           | 设置观看的摄像头                             |
| [getScaleType](API.md#getScaleType)             | 获取视频比例                                 |
| [setScaleType](API.md#setScaleType)             | 设置视频比例                                 |

| 订阅                                            | 描述                     |
| :---------------------------------------------- | :----------------------- |
| [videoStatusChanged](API.md#videoStatusChanged) | 通知摄像头状态变化       |
| [videoDevChanged](API.md#videoDevChanged)       | 通知用户的视频设备有变化 |

<h3 id=audio>音频管理</h3>

| 接口                                        | 描述               |
| :------------------------------------------ | :----------------- |
| [getAudioCfg](API.md#getAudioCfg)           | 获取麦克风音频参数 |
| [setAudioCfg](API.md#setAudioCfg)           | 设置麦克风音频参数 |
| [openMic](API.md#openMic)                   | 打开用户的麦克风   |
| [closeMic](API.md#closeMic)                 | 关闭用户的麦克风   |
| [getAudioStatus](API.md#getAudioStatus)     | 获取用户的麦状态   |
| [getMicVolume](API.md#getMicVolume)         | 获取麦克风音量大小 |
| [getSpeakerOut](API.md#getSpeakerOut)       | 获取外放状态       |
| [setSpeakerOut](API.md#setSpeakerOut)       | 设置外放状态       |
| [getSpeakerVolume](API.md#getSpeakerVolume) | 获取本地扬声器音量 |
| [setSpeakerVolume](API.md#setSpeakerVolume) | 设置本地扬声器音量 |

| 订阅                                            | 描述                       |
| :---------------------------------------------- | :------------------------- |
| [audioStatusChanged](API.md#audioStatusChanged) | 通知音频状态变化           |
| [audioDevChanged](API.md#audioDevChanged)       | 通知本地音频设备有变化     |
| [micEnergyUpdate](API.md#micEnergyUpdate)       | 通知用户的说话声音强度更新 |

<h3 id=screenshare>屏幕共享</h3>

| 接口                                                  | 描述                   |
| :---------------------------------------------------- | :--------------------- |
| [createScreenShareView](API.md#createScreenShareView) | 创建共享容器组件       |
| [isScreenShareStarted](API.md#isScreenShareStarted)   | 获取屏幕共享是否已开启 |
| [getScreenShareCfg](API.md#getScreenShareCfg)         | 获取屏幕共享配置       |
| [setScreenShareCfg](API.md#setScreenShareCfg)         | 设置屏幕共享配置       |
| [startScreenShare](API.md#startScreenShare)           | 开始屏幕共享           |
| [stopScreenShare](API.md#stopScreenShare)             | 停止屏幕共享           |

| 订阅                                                        | 描述                 |
| :---------------------------------------------------------- | :------------------- |
| [notifyScreenShareStarted](API.md#notifyScreenShareStarted) | 通知开启屏幕共享     |
| [notifyScreenShareStopped](API.md#notifyScreenShareStopped) | 通知停止屏幕共享     |
| [notifyScreenMarkStarted](API.md#notifyScreenMarkStarted)   | 通知开启屏幕共享标注 |
| [notifyScreenMarkStopped](API.md#notifyScreenMarkStopped)   | 通知停止屏幕共享标注 |

<h3 id=localrecord>本地录制/本地直播</h3>

| 接口                                                  | 描述                       |
| :---------------------------------------------------- | :------------------------- |
| [createLocMixer](API.md#createLocMixer)               | 创建本地混图器             |
| [updateLocMixerContent](API.md#updateLocMixerContent) | 更新本地混图器内容         |
| [destroyLocMixer](API.md#destroyLocMixer)             | 消毁本地混图器             |
| [getLocMixerState](API.md#getLocMixerState)           | 获取本地混图器状态         |
| [addLocMixerOutput](API.md#addLocMixerOutput)         | 开启本地录制、开启直播推流 |

| 订阅                                                | 描述                           |
| :-------------------------------------------------- | :----------------------------- |
| [locMixerOutputInfo](API.md#locMixerOutputInfo)     | 本地录制文件、本地直播信息通知 |
| [locMixerStateChanged](API.md#locMixerStateChanged) | 本地混图器状态变化通知         |

<h3 id=remoterecord>云端录制/互动直播</h3>

| 接口                                                  | 描述                       |
| :---------------------------------------------------- | :------------------------- |
| [startSvrMixer](API.md#startSvrMixer)                 | 开始云端录制、云端直播     |
| [updateSvrMixerContent](API.md#updateSvrMixerContent) | 更新云端录制、云端直播内容 |
| [stopSvrMixer](API.md#stopSvrMixer)                   | 停止云端录制、云端直播     |
| [getSvrMixerState](API.md#getSvrMixerState)           | 获取云端录制、云端直播状态 |

| 订阅                                                | 描述                               |
| :-------------------------------------------------- | :--------------------------------- |
| [svrMixerStateChanged](API.md#svrMixerStateChanged) | 云端录制、云端直播状态变化通知     |
| [svrMixerCfgChanged](API.md#svrMixerCfgChanged)     | 云端录制、云端直播内容变化通知     |
| [svrMixerOutputInfo](API.md#svrMixerOutputInfo)     | 云端录制文件、云端直播信息变化通知 |

<h3 id=media>影音共享</h3>

| 接口                                      | 描述                             |
| :---------------------------------------- | :------------------------------- |
| [getMediaCfg](API.md#getMediaCfg)         | 获取影音共享图像质量参数         |
| [setMediaCfg](API.md#setMediaCfg)         | 配置远程影音共享时，图像质量参数 |
| [createMediaView](API.md#createMediaView) | 创建影音观看组件                 |
| [startPlayMedia](API.md#startPlayMedia)   | 播放影音文件                     |
| [pausePlayMedia](API.md#pausePlayMedia)   | 暂停播放影音                     |
| [stopPlayMedia](API.md#stopPlayMedia)     | 停止影音播放                     |
| [setMediaPlayPos](API.md#setMediaPlayPos) | 设置播放进度                     |
| [getMediaInfo](API.md#getMediaInfo)       | 取得影音文件信息                 |

| 订阅                                          | 描述                 |
| :-------------------------------------------- | :------------------- |
| [notifyMediaOpened](API.md#notifyMediaOpened) | 通知影音文件打开     |
| [notifyMediaStart](API.md#notifyMediaStart)   | 通知影音开始播放     |
| [notifyMediaPause](API.md#notifyMediaPause)   | 通知影音是否暂停播放 |
| [notifyMediaStop](API.md#notifyMediaStop)     | 通知影音播放停止     |

## 接口函数详情

<h3 id=init>SDK 初始化</h3>

- **方法**: init(CrSdkInitDat dat)

- **参数**:

| 参数 | 类型                                            | 含义                                 |
| :--- | :---------------------------------------------- | :----------------------------------- |
| dat  | [CrSdkInitDat](TypeDefinitions.md#CrSdkInitDat) | SDK 配置、临时文件存放位置，不可为空 |

- **返回值**:

| 类型 | 含义                                        |
| :--- | :------------------------------------------ |
| int  | [错误码 CrErrorDef](Constant.md#CrErrorDef) |

<h3 id=uninit>SDK 反初始化</h3>

- **方法**: uninit()

<h3 id=getServerAddr>获取服务器地址</h3>

- **方法**: String getServerAddr()

- **返回值**: 服务器地址

<h3 id=setServerAddr>设置服务器地址</h3>

- **方法**: setServerAddr(serverAddr)

| 参数       | 类型   | 含义                                                                                                   |
| :--------- | :----- | :----------------------------------------------------------------------------------------------------- |
| serverAddr | String | 服务器地址（如：sdk.cloudroom.com）或多个服务器地址串（如：sdk.cloudroom.com:8080;183.60.47.52:8080;） |

<h3 id=loginfn>登录</h3>

- **方法**: login(loginDat)

- **返回值**:

| 参数        | 类型                                              | 含义     |
| :---------- | :------------------------------------------------ | :------- |
| loginResult | [CrLoginResult](TypeDefinitions.md#CrLoginResult) | 登录结果 |

<h3 id=logout>注销</h3>

- **方法**: logout()

<h3 id=lineOff>通知用户掉线</h3>

- **订阅方法**: lineOff(int sdkErr)

- **接收参数**:

| 参数   | 类型 | 含义                                        |
| :----- | :--- | :------------------------------------------ |
| sdkErr | int  | [错误码 CrErrorDef](Constant.md#CrErrorDef) |

<h3 id=getAllMembers>获取房间所有成员的列表</h3>

- **方法**: getAllMembers()

- **返回值**:

| 类型                                            | 含义     |
| :---------------------------------------------- | :------- |
| [CrMemberInfo](TypeDefinitions.md#CrMemberInfo) | 成员列表 |

<h3 id=getMemberInfo>获取某个用户的信息</h3>

- **方法**: getMemberInfo()

- **返回值**:

<h3 id=getNickName>获取某个用户的昵称</h3>

- **方法**: getNickName()

- **返回值**:

| 类型   | 含义       |
| :----- | :--------- |
| String | 用户的昵称 |

<h3 id=setNickName>设置某个用户的昵称</h3>

- **方法**: setNickName(String nickname)

- **参数**:

| 参数     | 类型   | 含义       |
| :------- | :----- | :--------- |
| nickname | String | 用户的昵称 |

<h3 id=isUserInMeeting>判断某个用户是否在房间中</h3>

- **方法**: isUserInMeeting(String userID)

| 参数   | 类型   | 含义    |
| :----- | :----- | :------ |
| userID | String | 用户 ID |

- **返回值**:

| 类型 | 含义             |
| :--- | :--------------- |
| bool | 用户是否在房间中 |

<h3 id=createMeeting>创建视频房间</h3>

- **方法**: createMeeting()

- **返回值**:

| 类型       | 含义     |
| :--------- | :------- |
| CrMeetInfo | 房间信息 |

<h3 id=enterMeeting>进入视频房间</h3>

- **方法**: enterMeeting(int meetID)

| 参数   | 类型 | 含义      |
| :----- | :--- | :-------- |
| meetID | int  | 会议号 ID |

- **返回值**:

| 类型 | 含义                                        |
| :--- | :------------------------------------------ |
| int  | [错误码 CrErrorDef](Constant.md#CrErrorDef) |

<h3 id=exitMeeting>离开房间</h3>

- **方法**: exitMeeting()

<h3 id=destroyMeeting>销毁视频房间</h3>

- **方法**: destroyMeeting(int meetID)

| 参数   | 类型 | 含义      |
| :----- | :--- | :-------- |
| meetID | int  | 会议号 ID |

- **返回值**:

| 类型 | 含义                                        |
| :--- | :------------------------------------------ |
| int  | [错误码 CrErrorDef](Constant.md#CrErrorDef) |

<h3 id=userEnterMeeting>某用户进入了房间</h3>

- **订阅方法**: userEnterMeeting(String userID)

| 参数   | 类型   | 含义    |
| :----- | :----- | :------ |
| userID | String | 用户 ID |

<h3 id=userLeftMeeting>某用户离开了房间</h3>

- **订阅方法**: userLeftMeeting(String userID)

| 参数   | 类型   | 含义    |
| :----- | :----- | :------ |
| userID | String | 用户 ID |

<h3 id=meetingDropped>通知从房间里掉线</h3>

通知从房间里掉线了，收到该通知后可以调用 enterMeeting 尝试重新入会

- **订阅方法**: meetingDropped(CR_MEETING_DROPPED_REASON reason)

| 参数   | 类型                      | 含义     |
| :----- | :------------------------ | :------- |
| reason | CR_MEETING_DROPPED_REASON | 掉线原因 |

<h3 id=netStateChanged>网络变化通知</h3>

- **订阅方法**: netStateChanged(int level)

| 参数  | 类型 | 含义                                |
| :---- | :--- | :---------------------------------- |
| level | int  | 网络状况等级(0~10，10 分为最佳网络) |

<h3 id=sendMeetingCustomMsg>房间内发送广播消息</h3>

- **方法**: sendMeetingCustomMsg(String text)

- **返回值**:

| 类型 | 含义                                        |
| :--- | :------------------------------------------ |
| int  | [错误码 CrErrorDef](Constant.md#CrErrorDef) |

- **参数**：

| 参数 | 类型   | 含义           |
| :--- | :----- | :------------- |
| text | String | 用户自定义消息 |

<h3 id=notifyMeetingCustomMsg>通知发送房间内自定义广播消息结果</h3>

- **订阅方法**: notifyMeetingCustomMsg(CrChatMsg msg)

- **接收参数**:

| 参数 | 类型      | 含义                                      |
| :--- | :-------- | :---------------------------------------- |
| msg  | CrChatMsg | [CrChatMsg](TypeDefinitions.md#CrChatMsg) |

<h3 id=getWatchableVideos>获取房间内所有可观看的摄像头</h3>

- **方法**: getWatchableVideos()

- **返回值**:

| 类型               | 含义                                                          |
| :----------------- | :------------------------------------------------------------ |
| List<CrUsrVideoId> | [房间内可观看摄像头用户、ID](TypeDefinitions.md#CrUsrVideoId) |

<h3 id=getAllVideoInfo>获取用户所有的摄像头信息</h3>

- **方法**: getAllVideoInfo(userID)

- **参数**：

| 参数   | 类型   | 含义    |
| :----- | :----- | :------ |
| userID | String | 用户 ID |

- **返回值**:

| 类型               | 含义                                                    |
| :----------------- | :------------------------------------------------------ |
| List<CrCameraInfo> | [用户所有的摄像头信息](TypeDefinitions.md#CrUsrVideoId) |

<h3 id=openVideo>打开用户的摄像头</h3>

- **方法**: openVideo(userID)

- **参数**：

| 参数   | 类型   | 含义    |
| :----- | :----- | :------ |
| userID | String | 用户 ID |

- **返回值**：

| 类型              | 含义                                                      |
| :---------------- | :-------------------------------------------------------- |
| CrOpenVideoResult | [CrOpenVideoResult](TypeDefinitions.md#CrOpenVideoResult) |

<h3 id=closeVideo>关闭用户的摄像头</h3>

- **方法**: closeVideo(userID)

- **参数**：

| 参数   | 类型   | 含义    |
| :----- | :----- | :------ |
| userID | String | 用户 ID |

- **返回值**：无

<h3 id=getVideoCfg>获取摄像头参数</h3>

- **方法**: getVideoCfg()

- **返回值**：

| 类型       | 含义                                        |
| :--------- | :------------------------------------------ |
| CrVideoCfg | [CrVideoCfg](TypeDefinitions.md#CrVideoCfg) |

<h3 id=setVideoCfg>设置摄像头参数</h3>

- **方法**: setVideoCfg(cfg)

- **参数**：

| 参数 | 类型       | 含义                                        |
| :--- | :--------- | :------------------------------------------ |
| cfg  | CrVideoCfg | [CrVideoCfg](TypeDefinitions.md#CrVideoCfg) |

- **返回值**：无

<h3 id=getDefaultVideo>获取指定用户的默认摄像头</h3>

- **方法**: getDefaultVideo(userID)

- **参数**：

| 参数   | 类型   | 含义    |
| :----- | :----- | :------ |
| userID | String | 用户 ID |

- **返回值**：

| 参数     | 类型 | 含义          |
| :------- | :--- | :------------ |
| deviceId | int  | 默认摄像头 ID |

<h3 id=setDefaultVideo>设置默认的摄像头</h3>

- **方法**: setDefaultVideo(userID, deviceId)

- **参数**：

| 参数     | 类型   | 含义          |
| :------- | :----- | :------------ |
| userID   | String | 用户 ID       |
| deviceId | int    | 默认摄像头 ID |

- **返回值**：无

<h3 id=createPlatformView>创建视频容器</h3>

- **方法**: createPlatformView((viewId) {});

- **参数**：

| 参数             | 类型     | 含义                  |
| :--------------- | :------- | :-------------------- |
| Function(viewId) | Function | 回调函数，返回容器 ID |

- **返回值**：

| 类型   | 含义     |
| :----- | :------- |
| Widget | 视频容器 |

<h3 id=setUsrVideoId>设置观看的摄像头</h3>

- **方法**: setUsrVideoId(viewId, usrVideoId);

- **参数**：

| 参数       | 类型         | 含义                                                         |
| :--------- | :----------- | :----------------------------------------------------------- |
| viewId     | int          | [createPlatformView](API.md#createPlatformView)返回的容器 ID |
| usrVideoId | CrUsrVideoId | [CrUsrVideoId](API.md#CrUsrVideoId)                          |

<h3 id=getScaleType>获取视频比例</h3>

- **方法**: getScaleType(viewId)

- **参数**：

| 参数   | 类型 | 含义                                                         |
| :----- | :--- | :----------------------------------------------------------- |
| viewId | int  | [createPlatformView](API.md#createPlatformView)返回的容器 ID |

- **返回值**

| 类型 | 含义                                                                                        |
| :--- | :------------------------------------------------------------------------------------------ |
| int  | 0：等比缩放留空居中显示；1：等比缩放裁剪铺满显示；2：不等比缩放铺满显示（可能导致图像拉伸） |

 <h3 id=setScaleType>设置视频比例</h3>

- **方法**: setScaleType(viewId, effect)

- **参数**：

| 参数   | 类型 | 含义                                                                                        |
| :----- | :--- | :------------------------------------------------------------------------------------------ |
| viewId | int  | [createPlatformView](API.md#createPlatformView)返回的容器 ID                                |
| effect | int  | 0：等比缩放留空居中显示；1：等比缩放裁剪铺满显示；2：不等比缩放铺满显示（可能导致图像拉伸） |

> 注：iOS 只支持 0 和 2，传 1 也是显示 2

- **返回值** 无

<h3 id=videoStatusChanged>通知摄像头状态变化</h3>

- **订阅方法**: videoStatusChanged(CrVideoStatusChanged videoStatusChanged)

- **接收参数**：

| 参数               | 类型                 | 含义                                                            |
| :----------------- | :------------------- | :-------------------------------------------------------------- |
| videoStatusChanged | CrVideoStatusChanged | [CrVideoStatusChanged](TypeDefinitions.md#CrVideoStatusChanged) |

<h3 id=videoDevChanged>通知用户的视频设备有变化</h3>

- **订阅方法**: videoDevChanged(String userID)

- **接收参数**：

| 参数   | 类型   | 含义                    |
| :----- | :----- | :---------------------- |
| userID | String | 视频设备有变化的用户 ID |

<h3 id=getAudioCfg>获取麦克风音频参数</h3>

- **方法**: getAudioCfg()

- **返回值**：

| 类型       | 含义                                        |
| :--------- | :------------------------------------------ |
| CrAudioCfg | [CrAudioCfg](TypeDefinitions.md#CrAudioCfg) |

<h3 id=setAudioCfg>设置麦克风音频参数</h3>

- **方法**: setAudioCfg(cfg)

- **参数**：

| 参数 | 类型       | 含义                                        |
| :--- | :--------- | :------------------------------------------ |
| cfg  | CrAudioCfg | [CrAudioCfg](TypeDefinitions.md#CrAudioCfg) |

- **返回值**：无

<h3 id=openMic>打开用户的麦克风</h3>

- **方法**: openMic(userID)

- **参数**：

| 参数   | 类型   | 含义    |
| :----- | :----- | :------ |
| userID | String | 用户 ID |

- **返回值**：无

<h3 id=closeMic>关闭用户的麦克风</h3>

- **方法**: closeMic(userID)

- **参数**：

| 参数   | 类型   | 含义    |
| :----- | :----- | :------ |
| userID | String | 用户 ID |

- **返回值**：无

<h3 id=getAudioStatus>获取用户的麦状态</h3>

- **方法**: getAudioStatus(userID)

- **参数**：

| 参数   | 类型   | 含义    |
| :----- | :----- | :------ |
| userID | String | 用户 ID |

- **返回值**：

| 类型       | 含义                                 |
| :--------- | :----------------------------------- |
| CR_ASTATUS | [CR_ASTATUS](Constant.md#CR_ASTATUS) |

<h3 id=getMicVolume>获取麦克风音量大小</h3>

- **方法**: getMicVolume()

- **返回值**：

| 类型 | 含义             |
| :--- | :--------------- |
| int  | 音量大小 0 - 255 |

<h3 id=getSpeakerOut>获取麦克风外放状态</h3>

- **方法**: getSpeakerOut()

- **返回值**：

| 类型 | 含义           |
| :--- | :------------- |
| bool | 麦克风是否外放 |

<h3 id=setSpeakerOut>设置麦克风外放状态</h3>

- **方法**: setSpeakerOut(isSpeakerOut)

- **参数**：

| 参数         | 类型 | 含义     |
| :----------- | :--- | :------- |
| isSpeakerOut | bool | 是否外放 |

- **返回值**：

| 类型 | 含义         |
| :--- | :----------- |
| bool | 设置是否成功 |

<h3 id=getSpeakerVolume>获取本地扬声器音量</h3>

- **方法**: getSpeakerVolume()

- **返回值**：

| 类型 | 含义                  |
| :--- | :-------------------- |
| int  | 本地扬声器音量 0 -255 |

<h3 id=setSpeakerVolume>设置本地扬声器音量</h3>

- **方法**: setSpeakerVolume(speakerVolume)

- **参数**：

| 参数          | 类型 | 含义               |
| :------------ | :--- | :----------------- |
| speakerVolume | int  | 扬声器音量 0 - 255 |

- **返回值**：

| 类型 | 含义         |
| :--- | :----------- |
| bool | 设置是否成功 |

<h3 id=audioStatusChanged>通知音频状态变化</h3>

- **订阅方法**: audioStatusChanged(CrAudioStatusChanged asc)

- **接收参数**：

| 参数 | 类型                 | 含义                                                            |
| :--- | :------------------- | :-------------------------------------------------------------- |
| asc  | CrAudioStatusChanged | [CrAudioStatusChanged](TypeDefinitions.md#CrAudioStatusChanged) |

<h3 id=audioDevChanged>通知本地音频设备有变化</h3>

- **订阅方法**: audioDevChanged()

- **接收参数**：无

<h3 id=micEnergyUpdate>通知用户的说话声音强度更新</h3>

- **订阅方法**: micEnergyUpdate(CrMicEnergy micEnergy)

- **接收参数**：

| 参数      | 类型        | 含义                                          |
| :-------- | :---------- | :-------------------------------------------- |
| micEnergy | CrMicEnergy | [CrMicEnergy](TypeDefinitions.md#CrMicEnergy) |

<h3 id=createScreenShareView>创建影音观看组件</h3>

- **方法**: createScreenShareView((viewId) {});

- **参数**：

| 参数             | 类型     | 含义                  |
| :--------------- | :------- | :-------------------- |
| Function(viewId) | Function | 回调函数，返回容器 ID |

- **返回值**：

| 类型   | 含义         |
| :----- | :----------- |
| Widget | 影音组件容器 |

<h3 id=isScreenShareStarted>获取屏幕共享是否已开启</h3>

- **方法**: isScreenShareStarted()

- **返回值**：

| 类型 | 含义               |
| :--- | :----------------- |
| bool | 屏幕共享是否已开启 |

<h3 id=getScreenShareCfg>获取屏幕共享配置</h3>

- **方法**: getScreenShareCfg()

- **返回值**：

| 类型             | 含义                                                |
| :--------------- | :-------------------------------------------------- |
| CrScreenShareCfg | [屏幕共享配置](TypeDefinitions.md#CrScreenShareCfg) |

<h3 id=setScreenShareCfg>设置屏幕共享配置</h3>

- **方法**: setScreenShareCfg(cfg)

- **参数**：

| 参数 | 类型             | 含义                                                |
| :--- | :--------------- | :-------------------------------------------------- |
| cfg  | CrScreenShareCfg | [屏幕共享配置](TypeDefinitions.md#CrScreenShareCfg) |

- **返回值**：无

<h3 id=startScreenShare>开始屏幕共享</h3>

- **方法**: startScreenShare()

- **返回值**：

| 类型 | 含义                                        |
| :--- | :------------------------------------------ |
| int  | [错误码 CrErrorDef](Constant.md#CrErrorDef) |

<h3 id=stopScreenShare>停止屏幕共享</h3>

- **方法**: stopScreenShare()

- **返回值**：

| 类型 | 含义                                        |
| :--- | :------------------------------------------ |
| int  | [错误码 CrErrorDef](Constant.md#CrErrorDef) |

<h3 id=notifyScreenShareStarted>通知开启屏幕共享</h3>

- **订阅方法**: notifyScreenShareStarted()

- **参数**：无

<h3 id=notifyScreenShareStopped>通知停止屏幕共享</h3>

- **订阅方法**: notifyScreenShareStopped()

- **参数**：无

<h3 id=notifyScreenMarkStarted>通知开启屏幕共享标注</h3>

- **订阅方法**: notifyScreenMarkStarted()

- **参数**：无

<h3 id=notifyScreenMarkStopped>通知停止屏幕共享标注</h3>

- **订阅方法**: notifyScreenMarkStopped()

- **参数**：无

<h3 id=createLocMixer>创建本地混图器</h3>

- **方法**: createLocMixer(mixerID, mixerCfg, mixerCotentRects)

- **参数**：

| 参数             | 类型                    | 含义                                                           |
| :--------------- | :---------------------- | :------------------------------------------------------------- |
| mixerID          | String                  | 混图器 ID                                                      |
| mixerCfg         | CrMixerCfg              | [混图器规格配置](TypeDefinitions.md#CrMixerCfg)                |
| mixerCotentRects | List<CrMixerCotentRect> | [本地录制混图器内容配置](TypeDefinitions.md#CrMixerCotentRect) |

- **返回值**：

| 类型 | 含义                                        |
| :--- | :------------------------------------------ |
| int  | [错误码 CrErrorDef](Constant.md#CrErrorDef) |

<h3 id=updateLocMixerContent>更新本地混图器内容</h3>

- **方法**: updateLocMixerContent(mixerID, mixerCotentRects)

- **参数**：

| 参数             | 类型                    | 含义                                                           |
| :--------------- | :---------------------- | :------------------------------------------------------------- |
| mixerID          | String                  | 混图器 ID                                                      |
| mixerCotentRects | List<CrMixerCotentRect> | [本地录制混图器内容配置](TypeDefinitions.md#CrMixerCotentRect) |

- **返回值**：

| 类型 | 含义                                        |
| :--- | :------------------------------------------ |
| int  | [错误码 CrErrorDef](Constant.md#CrErrorDef) |

<h3 id=destroyLocMixer>消毁本地混图器</h3>

- **方法**: destroyLocMixer(mixerID)

- **参数**：

| 参数    | 类型   | 含义      |
| :------ | :----- | :-------- |
| mixerID | String | 混图器 ID |

- **返回值**：无

<h3 id=getLocMixerState>获取本地混图器状态</h3>

- **方法**: getLocMixerState(mixerID)

- **参数**：

| 参数    | 类型   | 含义      |
| :------ | :----- | :-------- |
| mixerID | String | 混图器 ID |

- **返回值**：

| 类型           | 含义                                         |
| :------------- | :------------------------------------------- |
| CR_MIXER_STATE | [CR_MIXER_STATE](Constant.md#CR_MIXER_STATE) |

<h3 id=addLocMixerOutput>开启本地录制、开启直播推流</h3>

- **方法**: addLocMixerOutput(mixerID, mixerOutPutCfgs)

- **参数**：

| 参数            | 类型   | 含义                                            |
| :-------------- | :----- | :---------------------------------------------- |
| mixerID         | String | 混图器 ID                                       |
| mixerOutPutCfgs | List   | [输出配置](TypeDefinitions.md#CrMixerOutPutCfg) |

- **返回值**：

| 类型 | 含义                                        |
| :--- | :------------------------------------------ |
| int  | [错误码 CrErrorDef](Constant.md#CrErrorDef) |

<h3 id=locMixerOutputInfo>本地录制文件、本地直播信息通知</h3>

- **订阅方法**: locMixerOutputInfo(CrMixerOutputInfo locMixerOutputInfo)

- **接收参数**：

| 参数               | 类型              | 含义                                                      |
| :----------------- | :---------------- | :-------------------------------------------------------- |
| locMixerOutputInfo | CrMixerOutputInfo | [CrMixerOutputInfo](TypeDefinitions.md#CrMixerOutputInfo) |

<h3 id=locMixerStateChanged>本地混图器状态变化通知</h3>

- **订阅方法**:locMixerStateChanged(CrLocMixerState locMixerState)

- **接收参数**：

| 参数          | 类型            | 含义                                           |
| :------------ | :-------------- | :--------------------------------------------- |
| locMixerState | CrLocMixerState | [CrLocMixerState](TypeDefinitions.md#CrLocMixerState) |

<h3 id=startSvrMixer>开始云端录制、云端直播</h3>

- **方法**: startSvrMixer(mutiMixerCfgs, mutiMixerContents, mutiMixerOutputs)

- **参数**：

| 参数              | 类型                      | 含义                                                     |
| :---------------- | :------------------------ | :------------------------------------------------------- |
| mutiMixerCfgs     | List<CrMutiMixerCfg>      | [混图器配置](TypeDefinitions.md#CrMutiMixerCfg)          |
| mutiMixerContents | List<CrMutiMixerContents> | [混图器内容配置](TypeDefinitions.md#CrMutiMixerContents) |
| mutiMixerOutputs  | List<CrMutiMixerOutput>   | [混图器输出配置](TypeDefinitions.md#CrMutiMixerOutput)   |

- **返回值**：

| 类型 | 含义                                        |
| :--- | :------------------------------------------ |
| int  | [错误码 CrErrorDef](Constant.md#CrErrorDef) |

<h3 id=updateSvrMixerContent>更新云端录制、云端直播内容</h3>

- **方法**: updateSvrMixerContent(mutiMixerContents)

- **参数**：

| 参数              | 类型                      | 含义                                                     |
| :---------------- | :------------------------ | :------------------------------------------------------- |
| mutiMixerContents | List<CrMutiMixerContents> | [混图器内容配置](TypeDefinitions.md#CrMutiMixerContents) |

- **返回值**：

| 类型 | 含义                                        |
| :--- | :------------------------------------------ |
| int  | [错误码 CrErrorDef](Constant.md#CrErrorDef) |

<h3 id=stopSvrMixer>停止云端录制、云端直播</h3>

- **方法**: stopSvrMixer()

- **参数**：无

- **返回值**：无

<h3 id=getSvrMixerState>获取云端录制、云端直播状态</h3>

- **方法**: getSvrMixerState()

- **参数**：无

- **返回值**：

| 类型           | 含义                                         |
| :------------- | :------------------------------------------- |
| CR_MIXER_STATE | [CR_MIXER_STATE](Constant.md#CR_MIXER_STATE) |

<h3 id=svrMixerStateChanged>云端录制、云端直播状态变化通知</h3>

- **订阅方法**: svrMixerStateChanged(CrSvrMixerState svrMixerState)

- **接收参数**：

| 类型            | 含义                                                  |
| :-------------- | :---------------------------------------------------- |
| CrSvrMixerState | [CrSvrMixerState](TypeDefinitions.md#CrSvrMixerState) |

<h3 id=svrMixerCfgChanged>云端录制、云端直播内容变化通知</h3>

- **订阅方法**: svrMixerCfgChanged（）

- **接收参数**：无

<h3 id=svrMixerOutputInfo>云端录制文件、云端直播信息变化通知</h3>

- **订阅方法**: svrMixerOutputInfo(CrMixerOutputInfo locMixerOutputInfo)

- **接收参数**：

| 类型              | 含义                                                      |
| :---------------- | :-------------------------------------------------------- |
| CrMixerOutputInfo | [CrMixerOutputInfo](TypeDefinitions.md#CrMixerOutputInfo) |

<h3 id=createMediaView>创建影音观看组件</h3>

- **方法**: createMediaView((viewId) {});

- **参数**：

| 参数             | 类型     | 含义                  |
| :--------------- | :------- | :-------------------- |
| Function(viewId) | Function | 回调函数，返回容器 ID |

- **返回值**：

| 类型   | 含义         |
| :----- | :----------- |
| Widget | 影音组件容器 |

<h3 id=getMediaCfg>获取影音共享图像质量参数</h3>

- **方法**: getMediaCfg()

- **参数**：无

- **返回值**：

| 类型       | 含义                                        |
| :--------- | :------------------------------------------ |
| CrVideoCfg | [CrVideoCfg](TypeDefinitions.md#CrVideoCfg) |

<h3 id=setMediaCfg>配置远程影音共享时，图像质量参数</h3>

- **方法**: setMediaCfg(cfg)

- **参数**：

| 参数 | 类型       | 含义                                        |
| :--- | :--------- | :------------------------------------------ |
| cfg  | CrVideoCfg | [CrVideoCfg](TypeDefinitions.md#CrVideoCfg) |

- **返回值**：无

<h3 id=startPlayMedia>播放影音文件</h3>

- **方法**: startPlayMedia(src, bLocPlay)

- **参数**：

| 参数     | 类型   | 含义                                                            |
| :------- | :----- | :-------------------------------------------------------------- |
| src      | String | 资源地址                                                        |
| bLocPlay | bool   | 如果不需要远端需要观看配合 bLocPlay 为 true（选填，默认 false） |

- **返回值**：无

<h3 id=pausePlayMedia>暂停播放影音</h3>

- **方法**: pausePlayMedia(pause)

- **参数**：

| 参数  | 类型 | 含义         |
| :---- | :--- | :----------- |
| pause | bool | 是否暂停播放 |

- **返回值**：

<h3 id=stopPlayMedia>停止影音播放</h3>

- **方法**: stopPlayMedia()

- **参数**：无

- **返回值**：无

<h3 id=setMediaPlayPos>设置播放进度</h3>

- **方法**: setMediaPlayPos(pos)

- **参数**：

| 参数 | 类型 | 含义                     |
| :--- | :--- | :----------------------- |
| pos  | int  | 设置播放位置，单位：毫秒 |

- **返回值**：

<h3 id=getMediaInfo>取得影音文件信息</h3>

- **方法**: getMediaInfo()

- **参数**：无

- **返回值**：

| 类型        | 含义                                          |
| :---------- | :-------------------------------------------- |
| CrMediaInfo | [CrMediaInfo](TypeDefinitions.md#CrMediaInfo) |

<h3 id=notifyMediaOpened>通知影音文件打开</h3>

- **订阅方法**: notifyMediaOpened()

- **订阅参数**：

| 类型            | 含义                                                  |
| :-------------- | :---------------------------------------------------- |
| CrMediaFileInfo | [CrMediaFileInfo](TypeDefinitions.md#CrMediaFileInfo) |

<h3 id=notifyMediaStart>通知影音开始播放</h3>

- **订阅方法**: notifyMediaStart()

- **订阅参数**：

| 类型          | 含义                                              |
| :------------ | :------------------------------------------------ |
| CrMediaNotify | [CrMediaNotify](TypeDefinitions.md#CrMediaNotify) |

<h3 id=notifyMediaPause>通知影音是否暂停播放</h3>

- **订阅方法**: notifyMediaPause()

- **订阅参数**：

| 类型          | 含义                                              |
| :------------ | :------------------------------------------------ |
| CrMediaNotify | [CrMediaNotify](TypeDefinitions.md#CrMediaNotify) |

<h3 id=notifyMediaStop>通知影音播放停止</h3>

- **订阅方法**: notifyMediaStop()

- **订阅参数**：

| 类型          | 含义                                              |
| :------------ | :------------------------------------------------ |
| CrMediaNotify | [CrMediaNotify](TypeDefinitions.md#CrMediaNotify) |
