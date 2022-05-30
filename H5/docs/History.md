# 版本变更记录

## V2.7.0.1 &ensp; 2022-05-30
  1. SDK：新增支持获取语音pcm数据；
  2. SDK：解决未登陆的情况下调用日志上报报错的问题；
  3. SDK：新增打开摄像头超时通知接口；
  4. 本地更新涉及接口变动，详见开发文档：
     * [CRVideo_StartGetAudioPCM](API.html#CRVideo_StartGetAudioPCM) -- 新增接口
     * [CRVideo_StopGetAudioPCM](API.html#CRVideo_StopGetAudioPCM) -- 新增接口
     * [CRVideo_NotifyAudioPCMDat.callback](API.html#CRVideo_NotifyAudioPCMDat) -- 新增接口
     * [CRVideo_OpenVideoTimeout.callback](API.html#CRVideo_OpenVideoTimeout) -- 新增接口

## V2.6.0.1 &ensp; 2022-05-17
  1. SDK：全新的云端录制接口，支持单流和多流录制；
  2. SDK：修复暂停后再停止的情况下，影音共享无法重新开始的问题；
  3. SDK：修复某些情况下摄像头获取的画面和摄像头ID不一致的问题；
  4. Demo：修复移动端会议Demo不能用鼠标点击的问题；
  5. Demo：各Demo云端录制功能替换成新接口；
  6. 本次更新涉及接口变动，详见开发文档：
     * [CRVideo_CreateCloudMixer](API.html#CRVideo_CreateCloudMixer) -- 新增接口
     * [CRVideo_UpdateCloudMixerContent](API.html#CRVideo_UpdateCloudMixerContent) -- 新增接口
     * [CRVideo_DestroyCloudMixer](API.html#CRVideo_DestroyCloudMixer) -- 新增接口
     * [CRVideo_GetCloudMixerInfo](API.html#CRVideo_GetCloudMixerInfo) -- 新增接口
     * [CRVideo_GetAllCloudMixerInfo](API.html#CRVideo_GetAllCloudMixerInfo) -- 新增接口
     * [CRVideo_CreateCloudMixerFailed.callback](API.html#CRVideo_CreateCloudMixerFailed) -- 新增接口
     * [CRVideo_CloudMixerStateChanged.callback](API.html#CRVideo_CloudMixerStateChanged) -- 新增接口
     * [CRVideo_CloudMixerInfoChanged.callback](API.html#CRVideo_CloudMixerInfoChanged) -- 新增接口
     * [CRVideo_CloudMixerOutputInfoChanged.callback](API.html#CRVideo_CloudMixerOutputInfoChanged) -- 新增接口
     * 旧的云端录制接口不会立即废弃，但已从文档移除，我们推荐开发者使用全新的云端录制接口


## V2.5.11.2 &ensp; 2022-04-27
  1. SDK：解决某些情况下未定义callback接口报错的问题；
  2. 重构浏览器兼容性检测页面rtcTest.html；

## V2.5.11.0 &ensp; 2022-04-19
  1. SDK：新增媒体流连接错误通知接口；
  2. SDK：新增打开麦克风失败通知接口；
  3. SDK：新增打开摄像头失败通知接口；
  4. SDK：支持某些情况下音频连接丢失后自动恢复连接；
  5. Demo：PC会议Demo新增（上述1、2、3）相关错误提示；
  6. Demo：PC会议Demo解决共享中断网重连后共享界面显示异常的问题；
  7. 本次更新涉及接口变动，详见开发文档
     * [CRVideo_PeerConnectionError.callback](API.html#CRVideo_PeerConnectionError) -- 新增接口
     * [CRVideo_OpenMicFailed.callback](API.html#CRVideo_OpenMicFailed) -- 新增接口
     * [CRVideo_OpenVideoFailed.callback](API.html#CRVideo_OpenVideoFailed) -- 新增接口

## V2.5.10.0 &ensp; 2022-04-15
  1. SDK：新增支持麦克风音量控制；
  2. Demo：PC会议Demo新增麦克风音量控制；
  3. 本次更新涉及接口变动，详见开发文档
     * [CRVideo_SetAudioCfg](API.html#CRVideo_SetAudioCfg) -- 新增参数

## V2.5.9.0 &ensp; 2022-04-09
  1. SDK：新增网络质量状态变化通知接口；
  2. Demo：会议Demo新增网络质量状态显示图标；
  3. Demo：移动端会议Demo解决某些情况下登陆设置不生效的问题；
  4. 本次更新涉及接口变动，详见开发文档
     * [CRVideo_NetStateChanged.callback](API.html#CRVideo_NetStateChanged) -- 新增接口

## V2.5.8.5 &ensp; 2022-04-02
  1. SDK：解决ios入会后不开麦听不到会议内声音的问题；
  2. SDK：解决某些情况下安卓微信进入会议不开麦听不到声音的问题；
  3. SDK：解决ios15.1-15.3偶尔出现声音由大逐渐变小的问题；
  4. SDK：解决开麦后再关麦的情况下，设置音频参数不生效的问题；
  5. Demo：会议Demo调整为入会默认不开麦和摄像头；

## V2.5.8.2 &ensp; 2022-03-28
  1. SDK：新增支持设置麦克风是否开启自动增益调节；
  2. SDK：新增支持设置麦克风是否开启自动降噪；
  3. SDK：新增支持设置麦克风是否开启自动回声消除；
  4. SDK：解决ios14某些情况下开麦说话采集不到声音的问题；
  5. Demo：PC会议Demo新增音频参数设置；
  6. 本次更新涉及接口变动，详见开发文档
     * [CRVideo_SetAudioCfg](API.html#CRVideo_SetAudioCfg) -- 新增参数

## V2.5.7.11 &ensp; 2022-03-23
  1. SDK：解决无法指定使用VP8编码的问题；
  2. SDK：新增音视频媒体流日志；
  3. SDK：修复某些情况下开麦后听不到房间内声音的问题；
  4. Demo：呼叫demo支持被叫端创建房间；

## V2.5.7.8 &ensp; 2022-03-17
  1. Demo：PC会议Demo调整邀请自定义内容格式；
  2. Demo：PC会议Demo支持邀请sip设备；
  3. SDK：解决上个版本某些情况下ios微信内无法观看远端视频的问题；

## V2.5.7.5 &ensp; 2022-03-07
  1. SDK：音频新增对nack的支持；

## V2.5.7.4 &ensp; 2022-03-03
  1. Demo：修改云端录制参数，type7改为type10，兼容非桌面录制服务；

## V2.5.7.3 &ensp; 2021-02-22
  1. SDK：新增查询主视频模式接口；
  2. SDK：新增更多清晰度选择；
  3. SDK：解决ios不开麦克风的情况下听不到房间内声音的问题；
  4. SDK：新增呼叫被拒绝后的某些错误码；
  5. SDK：影音播放接口修改参数解决不能自动停止播放的问题；
  6. 本次更新涉及接口变动，详见开发文档
     * [CRVideo_GetMainVideoMode](API.html#CRVideo_GetMainVideoMode) -- 新增接口
     * [CRVideo_StartPlayMedia](API.html#CRVideo_StartPlayMedia) -- 修改参数

## V2.5.5.7 &ensp; 2021-01-11
  1. SDK：解决不启用音视频服务仍然初始化失败的问题；
  2. SDK：解决某些情况下获取影音共享信息异常的问题；
  3. SDK：解决影音暂停后恢复播放会通知开始共享的问题；
  4. SDK：支持关闭房间内其它成员开启的屏幕共享；
  5. SDK：优化日志连接，未开启日志上报时，不连接日志服务器；
  6. SDK：优化callback定义，解决callback为null时SDK报错的问题；
  7. SDK：解决某些情况下日志上报报错的问题；
  8. Demo：PC会议Demo解决某些情况下未订阅安卓端摄像头的问题；

## V2.5.5.0 &ensp; 2021-12-21
  1. SDK：解决ios15上播放声音小的问题；
  2. SDK：解决某些安卓设备上因视频高度太小打开摄像头失败的问题；
  3. SDK：新的创建会议接口；
  4. 本次更新涉及接口变动（相对于2.5.4.x），详见开发文档
     * [CRVideo_CreateMeeting2](API.html#CRVideo_CreateMeeting2) -- 新增接口
     * CRVideo_CreateMeeting -- 接口废弃

## V2.5.4.11 &ensp; 2021-11-16
  1. SDK：解决canvas虚拟摄像头无法移除的问题；
  2. Demo：PC会议Demo优化添加canvas摄像头功能；
  3. Demo：PC会议Demo解决没有物理摄像头时添加桌面摄像头后无法移除的问题；

## V2.5.4.10 &ensp; 2021-10-28
  1. SDK：解决浏览器不支持webGL的情况下加载SDK报错的问题；
  2. SDK：解决浏览器不支持webGL的情况下设置虚拟背景后打开摄像头报错的问题；
  3. SDK：解决某些安卓微信内置浏览器上视频流无法自动播放的问题（增加播放按钮）；
  4. SDK：解决某些安卓设备无法和小程序互通的问题（需升级后端服务）；
  5. SDK：解决开启虚拟背景后无法关闭虚拟背景的问题；

## V2.5.4.4 &ensp; 2021-09-26
*&lt;script src="https://sdk.cloudroom.com/web/download/SDK/H5SDK/2.5.4.4/RTCSDKV2.min.js"&gt;&lt;/script&gt;*
  1. SDK：解决某些设备上音视频不能自动播放的问题（自建环境需要配合升级后端）；
  2. SDK：优化iOS设备的机型判断逻辑；
  3. SDK：虚拟背景新增参数选择是否使用互联网模型数据；
  4. SDK：解决某些情况下全体静音后打开麦克风不生效的问题；

## V2.5.4.0 &ensp; 2021-09-18
*&lt;script src="https://sdk.cloudroom.com/web/download/SDK/H5SDK/2.5.4.0/RTCSDKV2.min.js"&gt;&lt;/script&gt;*
  1. SDK：新的云端录制接口（单流录制部分）；
  2. Demo：PC会议Demo新增“更多”功能模块；
  3. Demo：PC会议Demo新增单流录制功能；
  4. Demo：PC会议Demo界面调整；
  5. 本次更新涉及接口变动（相对于2.5.3.x），详见开发文档
     * CRVideo_CreateCloudMixer（仅单流录制）
     * CRVideo_DestroyCloudMixer
     * CRVideo_UpdateCloudMixerContent（仅单流录制）
     * CRVideo_GetCloudMixerInfo
     * CRVideo_GetAllCloudMixerInfo
     * CRVideo_CloudMixerStateChanged
     * CRVideo_CloudMixerInfoChanged
     * CRVideo_CloudMixerOutputStateChanged

## V2.5.3.2 &ensp; 2021-09-10
*&lt;script src="https://sdk.cloudroom.com/web/download/SDK/H5SDK/2.5.3.2/RTCSDKV2.min.js"&gt;&lt;/script&gt;*
  1. SDK：优化视频设置，解决某些情况下设置视频比例不生效的问题；
  2. SDK：新增支持设置自定义视频比例；
  3. SDK：解决iOS15上初始化失败的问题；
  4. Demo：PC会议Demo新增支持设置自定义视频比例；
  5. 本次更新涉及接口变动（相对于2.5.2.x），详见开发文档
     * [CRVideo_SetVideoCfg](API.html#CRVideo_SetVideoCfg) -- 新增参数

## V2.5.2.3 &ensp; 2021-09-02
*&lt;script src="https://sdk.cloudroom.com/web/download/SDK/H5SDK/2.5.2.3/RTCSDKV2.min.js"&gt;&lt;/script&gt;*
  1. SDK：新增支持摄像头虚拟背景；
  2. SDK：白板容器新增支持导入背景图片；
  3. SDK：修复某些情况下影音共享没有声音的问题；
  4. SDK：修复某些情况下影音共享mp3文件报错的问题；
  5. SDK：修复移动端白板某些情况下无法绘制的问题；
  6. SDK：白板UI组件新增获取canvas接口；
  7. Demo：PC会议Demo新增添加桌面摄像头功能；
  8. Demo：PC会议Demo新增虚拟背景功能；
  9. 本次更新涉及接口变动（相对于2.5.1.x），详见开发文档
     * [CRVideo_SetVirtualBackground](API.html#CRVideo_SetVirtualBackground) -- 新增接口
     * [CRVideo_BoardUIObj.importImg](API.html#CRVideo_BoardUIObj_importImg) -- 新增接口
     * [CRVideo_BoardUIObj.getCanvasElement](API.html#CRVideo_BoardUIObj_getCanvasElement) -- 新增接口

## V2.5.1.6 &ensp; 2021-08-18
*&lt;script src="https://sdk.cloudroom.com/web/download/SDK/H5SDK/2.5.1.6/RTCSDKV2.min.js"&gt;&lt;/script&gt;*
  1. SDK：修复某些情况下进入房间报错的问题；
  2. SDK：修复未建立连接时上报日志报错的问题；
  3. SDK：修复录制过程中进入房间无法更新录制内容的问题；
  4. SDK：修复某些场景下掉线重登导致成员列表异常，视频订阅异常的问题；
  5. SDK：优化某些场景下掉线重登身份会重复的问题；
  6. SDK：新增页面事件监听，强制离开页面时自动退出房间和登录；
  7. SDK：解决某些情况下初始化失败响应不正确的问题；
  8. SDK：启用新的入会接口；
  9. Demo：PC会议Demo修复录制中退出房间，进入新的房间录制状态显示不正确的问题；
  10. Demo：PC会议Demo修复某些情况下掉线重登不显示画面的问题；
  11. 本次更新涉及接口变动（相对于2.5.0.x），详见开发文档
      * [CRVideo_StartSvrMixer](API.html#CRVideo_StartSvrMixer) -- 修复返回值为promise
      * [CRVideo_UpdateSvrMixerContent](API.html#CRVideo_UpdateSvrMixerContent) -- 修复返回值为promise
      * [CRVideo_StopSvrMixer](API.html#CRVideo_StopSvrMixer) -- 修复返回值为promise
      * [CRVideo_OpenMic](API.html#CRVideo_OpenMic) -- 修复返回值为promise
      * CRVideo_EnterMeeting -- 接口废弃
      * CRVideo_EnterMeeting2 -- 接口废弃
      * [CRVideo_EnterMeeting3](API.html#CRVideo_EnterMeeting3) -- 新增接口

## V2.5.0.2 &ensp; 2021-08-03
*&lt;script src="https://sdk.cloudroom.com/web/download/SDK/H5SDK/2.5.0.2/RTCSDKV2.min.js"&gt;&lt;/script&gt;*
  1. SDK：新增屏幕区域共享功能；
  2. SDK：新增白板功能；
  3. SDK：新增功能区相关接口；
  4. SDK：新增添加canvas摄像头功能；
  5. SDK：新增房间内日志按房间号分开同步上传；
  6. SDK：修复全体静音时没有其他成员音频状态变化通知的问题；
  7. SDK：修复某些情况下透明通道无法发送文件的问题；
  8. SDK：修复点击浏览器工具条结束屏幕共享时内存泄漏的问题；
  9. Demo：PC会议Demo新增共享区域设置；
  10. Demo：PC会议Demo新增白板功能；
  11. Demo：PC会议Demo新增支持视频墙分屏数切换；
  12. Demo：PC会议Demo新增支持视频墙翻页；
  13. Demo：PC会议Demo新增踢人按钮；
  14. Demo：PC会议Demo新增修改昵称按钮；
  15. Demo：PC会议Demo新增全体静音按钮；
  16. Demo：PC会议Demo新增分享会议按钮；
  17. Demo：PC会议Demo新增支持链接入会；
  18. Demo：PC会议Demo添加虚拟摄像头（图片）按钮；
  19. Demo：PC会议Demo新增界面同步功能；
  20. 本次更新涉及接口变动（相对于2.4.0.x），详见开发文档
      * [CRVideo_Kickout](API.html#CRVideo_Kickout)
      * [CRVideo_SetNickName](API.html#CRVideo_SetNickName) （改为promise）
      * [CRVideo_SetScreenShareCfg](API.html#CRVideo_SetScreenShareCfg)
      * [CRVideo_SwitchToPage](API.html#CRVideo_SwitchToPage)
      * [CRVideo_GetCurrentMainPage](API.html#CRVideo_GetCurrentMainPage)
      * [CRVideo_GetCurrentSubPage](API.html#CRVideo_GetCurrentSubPage)
      * [CRVideo_Creatboard](API.html#CRVideo_Creatboard)
      * [CRVideo_CreateBoardUIObj](API.html#CRVideo_CreateBoardUIObj)
      * [CRVideo_Closeboard](API.html#CRVideo_Closeboard)
      * [CRVideo_SetBoardCurPageNo](API.html#CRVideo_SetBoardCurPageNo)
      * [CRVideo_AddCanvasVCam](API.html#CRVideo_AddCanvasVCam)
      * [CRVideo_RemoveCanvasVCam](API.html#CRVideo_RemoveCanvasVCam)
      * [CRVideo_BoardUIObj.handler](API.html#CRVideo_BoardUIObj_handler)
      * [CRVideo_BoardUIObj.setCurBoardPage](API.html#CRVideo_BoardUIObj_setCurBoardPage)
      * [CRVideo_BoardUIObj.isScaledContents](API.html#CRVideo_BoardUIObj_isScaledContents)
      * [CRVideo_BoardUIObj.setTitleStyle](API.html#CRVideo_BoardUIObj_setTitleStyle)
      * [CRVideo_BoardUIObj.setBoardStyle](API.html#CRVideo_BoardUIObj_setBoardStyle)
      * [CRVideo_BoardUIObj.setPen](API.html#CRVideo_BoardUIObj_setPen)
      * [CRVideo_BoardUIObj.undo](API.html#CRVideo_BoardUIObj_undo)
      * [CRVideo_BoardUIObj.redo](API.html#CRVideo_BoardUIObj_redo)
      * [CRVideo_BoardUIObj.clear](API.html#CRVideo_BoardUIObj_clear)
      * *CRVideo_BoardUIObj.addElement
      * *CRVideo_BoardUIObj.removeElement
      * [CRVideo_NotifySwitchToPage.callback](API.html#CRVideo_NotifySwitchToPage)
      * [CRVideo_NotifyInitBoards.callback](API.html#CRVideo_NotifyInitBoards)
      * [CRVideo_NotifyBoardCurPageNo.callback](API.html#CRVideo_NotifyBoardCurPageNo)
      * [CRVideo_NotifyCreateBoard.callback](API.html#CRVideo_NotifyCreateBoard)
      * [CRVideo_NotifyCloseBoard.callback](API.html#CRVideo_NotifyCloseBoard)
      * 带*号表示暂不可用


## V2.4.0.1 &ensp; 2021-06-18
*&lt;script src="https://sdk.cloudroom.com/web/download/SDK/H5SDK/2.4.0.1/RTCSDKV2.min.js"&gt;&lt;/script&gt;*
  1. SDK:新增屏幕共享标注功能；
  2. SDK:新增业务层主动退订指定视频的方法；
  3. Demo:PC端会议Demo新增支持共享标注；
  4. Demo:移动端会议Demo新增支持显示房间内影音共享；
  5. Demo:修复PC端会议Demo屏幕共享时退出房间再次进入仍然显示共享窗口的问题；
  6. Demo:修复移动端会议Demo多人进出房间时视频墙异常的问题；
  7. Demo:修复移动端会议Demo某些情况下无法正常观看屏幕共享的问题；
  8. 本次更新涉及接口变动（相对于2.3.1.x），详见开发文档
      * [CRVideo_StartScreenMark](API.html#CRVideo_StartScreenMark)
      * [CRVideo_StopScreenMark](API.html#CRVideo_StopScreenMark)
      * [CRVideo_ScreenShareObj.setMark](API.html#ScreenShareUI)
      * [CRVideo_StartScreenMarkRslt.callback](API.html#CRVideo_StartScreenMarkRslt)
      * [CRVideo_StopScreenMarkRslt.callback](API.html#CRVideo_StopScreenMarkRslt)
      * [CRVideo_NotifyScreenMarkStarted.callback](API.html#CRVideo_NotifyScreenMarkStarted)
      * [CRVideo_NotifyScreenMarkStopped.callback](API.html#CRVideo_NotifyScreenMarkStopped)
      * [CRVideo_VideoObj.setVideo](API.html#VideoUI)

## V2.3.1.0 &ensp; 2021-05-17
*&lt;script src="https://sdk.cloudroom.com/web/download/SDK/H5SDK/2.3.1.0/RTCSDKV2.min.js"&gt;&lt;/script&gt;*
  1. SDK:新增修改房间成员昵称接口；
  2. SDK:新增房间成员昵称改变的通知接口；
  3. SDK:解决某些情况下屏幕共享无法正确停止的问题；
  4. 本次更新涉及接口变动（相对于2.3.0.x），详见开发文档
      * [CRVideo_SetNickName](API.html#CRVideo_SetNickName)
      * [CRVideo_NotifyNickNameChanged.callback](API.html#CRVideo_NotifyNickNameChanged)

## V2.3.0.3 &ensp; 2021-04-13
*&lt;script src="https://sdk.cloudroom.com/web/download/SDK/H5SDK/2.3.0.3/RTCSDKV2.min.js"&gt;&lt;/script&gt;*
  1. SDK:新增文件传输功能;
  2. SDK:新增取消发送数据接口;
  3. SDK:新增根据分辨率自动限制最大编码码率;
  3. SDK:修复发送大块数据功能的一些错误;
  4. SDK:优化影音共享，修复某些浏览器共享时对端黑屏的问题;
  5. Demo:PC端会议Demo新增透明通道模块;
  6. 本次更新涉及接口变动（相对于2.2.x.x），详见开发文档
      * [CRVideo_SendFile](API.html#CRVideo_SendFile)
      * [CRVideo_CancelSend](API.html#CRVideo_CancelSend)
      * [CRVideo_SendFileRslt.callback](API.html#CRVideo_SendFileRslt)
      * [CRVideo_NotifyFileData.callback](API.html#CRVideo_NotifyFileData)

## V2.2.0.6 &ensp; 2021-03-29
*&lt;script src="https://sdk.cloudroom.com/web/download/SDK/H5SDK/2.2.0.6/RTCSDKV2.min.js"&gt;&lt;/script&gt;*
  1. 新增对ios14.3+上uni-app的支持；
  2. 修复mac Safari上的一些错误；
  3. 修复某些情况下无法切换摄像头的问题；
  4. 修复某些情况下无法播放远端影音共享的问题；
  5. 优化服务器选择逻辑，选择更优的会议服务器；
  6. 其它优化；

## V2.2.0.2 &ensp; 2021-03-16
*&lt;script src="https://sdk.cloudroom.com/web/download/SDK/H5SDK/2.2.0.2/RTCSDKV2.min.js"&gt;&lt;/script&gt;*
  1. 新增支持订阅多个摄像头；
  2. 新增接口查询用户当前打开的摄像头ID集合；
  3. 新增接口设置/查询是否启用多摄像头；
  4. 优化媒体流摄像头功能；
  5. 优化视频、屏幕共享、影音共享相关功能；
  6. 重构PC端会议Demo，优化PC端呼叫(双录)Demo；
  7. 本次更新设计接口变动（相对于2.1.0.x）</br>
      * [CRVideo_GetOpenedVideoIDs](API.html#CRVideo_GetOpenedVideoIDs)
      * [CRVideo_SetEnableMutiVideo](API.html#CRVideo_SetEnableMutiVideo)
      * [CRVideo_GetEnableMutiVideo](API.html#CRVideo_GetEnableMutiVideo)
      * CRVideo_OpenStreamVideo（废弃）
      * CRVideo_CloseStreamVideo（废弃）

## V2.1.0.7 &ensp; 2021-02-23
  1. 新增支持iOS14.3上微信内置浏览器及QQ浏览器等;
  2. 解决某些浏览器没有setsinkid接口报错的问题；
  3. 修改rtc默认协议为UDP/TCP自动选择;

## V2.1.0.5 &ensp; 2021-01-28
  1. 解决SDK默认音频设备和系统默认音频设备不一致的问题；

## V2.1.0.4 &ensp; 2020-12-05
  1. 新增会议属性相关接口；
  2. 新增用户属性相关接口；
  3. 新增会议服务器Resm探测；
  4. 新增播放/暂停房间内声音接口；
  5. 修复被踢出房间后自动入会的问题；
  6. 修复某些情况下进入房间失败的问题；
  7. 解决某些移动设备浏览器不带移动端标识导致的一些问题；
  8. 本次更新涉及接口变动（相对于2.0.2.x）</br>
      * [CRVideo_PlaySpeaker](API.html#CRVideo_PlaySpeaker)
      * [CRVideo_PauseSpeaker](API.html#CRVideo_PauseSpeaker)
      * [所有房间属性、用户属性相关接口（详见文档）](API.html#room_attr)

## V2.0.2.1 &ensp; 2020-10-21
  1. 优化屏幕共享清晰度、流畅度；
  2. 新增参数设置屏幕共享帧率；
  3. 新增支持MacOS上Safari13屏幕共享；
  4. 本次更新设计接口变动（相对于2.0.1.x）
      * [CRVideo_SetSDKParams](API.html#CRVideo_SetSDKParams)
  

## V2.0.1.2 &ensp; 2020-09-25
  1. 新增设置SDK参数接口；
  2. 视频会议Demo新增邀请功能；
  3. 修改视频会议Demo为自动登录；
  4. 双录/呼叫Demo新增一些操作确认或提醒；
  5. 解决多项目环境录像只存在默认项目的问题；
  6. 解决vivo Chrome打不开摄像头的问题；
  7. 解决iPhone 6Plus不能切换前后摄像头的问题；
  8. 解决华为Mate30pro无法打开摄像头的问题；
  9. 解决各Demo离线访问不显示设备列表的问题；
  10. 解决Chrome离线访问时无法开启摄像头的问题；
  11. 新增初始化时判断浏览器是否支持，对应错误码8005、8006；
  12. 本次更新涉及接口变动（相对于2.0.0.x）：</br>
      * [CRVideo_SetSDKParams](API.html#CRVideo_SetSDKParams)

## V2.0.0.0 &ensp; 2020-08-18
  1. 重构队列管理模块；
  2. 重构呼叫模块；
  3. 新增邀请功能；
  4. 本次更新涉及接口变动：（相对于V1.8.3）</br>
      * [CRVideo_GetSDKVersion](API.html#CRVideo_GetSDKVersion)
      * [CRVideo_WriteLog](API.html#CRVideo_WriteLog)
      * [CRVideo_CreateMeetingFail.callback](API.html#CRVideo_CreateMeetingFail)
      * [CRVideo_GetAudioMicNames](API.html#CRVideo_GetAudioMicNames)
      * [CRVideo_GetAudioSpkNames](API.html#CRVideo_GetAudioSpkNames)
      * [CRVideo_GetMicEnergy](API.html#CRVideo_GetMicEnergy)
      * [CRVideo_SetAllAudioClose](API.html#CRVideo_SetAllAudioClose)
      * [CRVideo_GetAllVideoInfo](API.html#CRVideo_GetAllVideoInfo)
      * [CRVideo_SetVideoCfg](API.html#CRVideo_SetVideoCfg)
      * [CRVideo_GetVideoCfg](API.html#CRVideo_GetVideoCfg)
      * [CRVideo_GetMediaImg（新增）](API.html#CRVideo_GetMediaImg)
      * CRVideo_Getmediaimg（废弃）
      * [CRVideo_SendCmd](API.html#CRVideo_SendCmd)
      * [CRVideo_SendCmdRslt](API.html#CRVideo_SendCmdRslt)
      * CRVideo_SendIMMsg（废弃）
      * CRVideo_SendIMMsgRslt（废弃）
      * CRVideo_NotifyIMmsg（废弃）
      * CRVideo_NotifyIMMsg（废弃）
      * [CRVideo_ScreenShareObj.setVideo](API.html#CRVideo_ScreenShareObj_setVideo)
      * [CRVideo_MediaObj.setVideo](API.html#CRVideo_MediaObj_setVideo)
      * [所有队列管理相关接口（详见文档）](API.html#queue)
      * [所有呼叫相关接口（详见文档）](API.html#call)
      * [所有邀请相关接口（详见文档）](API.html#invite)
  </br>`注意：此版本为大版本更新，在使用V1.x版本的项目中升级V2.x的SDK务必检查所有改动的接口，对照文档检查传参是否一致`


## V1.8.3.2 &ensp; 2020-07-10
  1. 新增支持云端录制纯音频文件；
  2. 解决移动端反初始化后再次登录入会音频建流异常的问题；
  3. 新增后台是否支持多项目判断；
  4. 重构录制模块；
  5. 修改录制逻辑，SDK内部不再自动更新录制参数，需由业务层调用更新；
  6. 本地更新涉及接口变动：（相对于V1.8.2）</br>
      * [CRVideo_StartSvrMixer](API.html#CRVideo_StartSvrMixer)
      * [CRVideo_UpdateSvrMixerContent](API.html#CRVideo_UpdateSvrMixerContent)
      * [CRVideo_SvrMixerStateChanged.callback](API.html#CRVideo_SvrMixerStateChanged)
      * [CRVideo_SvrMixerCfgChanged.callback](API.html#CRVideo_SvrMixerCfgChanged)
      * [CRVideo_SvrMixerOutputInfo.callback](API.html#CRVideo_SvrMixerOutputInfo)
  </br>`注意：升级此版本后，使用WebSDK支持多项目需升级web后台！`


## V1.8.2.1 &ensp; 2020-06-30
  1. 新增房间内广播消息接口，废弃原IM接口；
  2. 各Demo聊天消息接口替换为房间内广播接口，与其他平台互通；
  3. 解决某些情况下快速开关麦导致的各种异常；
  4. 本次更新涉及接口变动：（相对于V1.8.1）</br>
      * [CRVideo_SendMeetingCustomMsg](API.html#CRVideo_SendMeetingCustomMsg)
      * [CRVideo_NotifyMeetingCustomMsg.callback](API.html#CRVideo_NotifyMeetingCustomMsg)


## V1.8.1.3 &ensp; 2020-06-22
  1. 解决某些情况下读取sessionStorage报错的问题；
  2. 解决ws协议会议服务器连接失败的问题；
  3. 解决http协议时某些服务器地址端口不正确的问题；
  4. 解决云端录制参数不正确导致最后一位成员没有画面的问题；
  5. 兼容safari13对webrtc的修改（服务端）；
  6. 新增init接口支持传参设置屏幕共享和影音共享上送最大码率；
  7. 优化分辨率设置逻辑，不再强制指定分辨率，交由浏览器处理；
  8. 本次更新没有接口变动


## V1.8.1.0 &ensp; 2020-05-11
  1. 新增支持添加媒体流作为摄像头相关接口；
  2. 优化入会速度；
  3. 优化部分错误提示；
  4. 优化视频分辨率上报逻辑；
  5. 修改各Demo登录界面账号密码字样为AppID；
  6. 修复某些情况下全体静音接口出错的问题；
  7. 修复某些情况下会议未启动导致进入会议失败的问题；
  8. 本次更新涉及接口变动：（相对于V1.8.0）</br>
      * [CRVideo_AddStreamCam](API.html#CRVideo_AddStreamCam) 
      * [CRVideo_OpenStreamVideo](API.html#CRVideo_OpenStreamVideo) 
      * [CRVideo_CloseStreamVideo](API.html#CRVideo_AddStreamCam) 
      

## V1.8.0.3 &ensp; 2020-01-06
  1. CRVideo_Init接口改为promise类型，初始化时获取媒体设备权限；
  2. 新增：支持第三方鉴权及相关错误回调；
  3. 新增：init接口支持传入参数控制流媒体协议；
  4. 新增：init接口支持传入参数控制是否连接callserver服务；
  5. 新增：登录接口新增支持cookie参数；
  6. 新增：入会接口新增支持cookie参数；
  7. 新增：网络掉线通知接口，由业务层处理重登逻辑；
  8. 新增：支持免插件共享屏幕；
  9. 优化：入会后媒体设备开关逻辑；
  10. 优化：网络波动导致的各种异常；
  11. 优化：会议中开关设备操作过快导致的各种异常；
  12. 本次更新涉及接口变动：（相对于V1.7.0）</br>
      * [CRVideo_Init](API.html#CRVideo_Init)

## V1.7.0.1 &ensp; 2019-11-29
  1. 新增：挂断接口支持发送自定义参数；
  2. 新增：支持Token鉴权；
  3. 新增：支持多项目帐号；
  4. 新增：支持强制http模式；
  5. 新增：发送透明通道消息新增结果回调接口；
  6. 新增：登录鉴权失败接口回调增加详细错误码；
  7. 新增：meeting掉线通知接口；
  8. 新增：callserver掉线通知接口；
  9. 解决：某些情况下2分钟呼叫被自动挂断的问题；
  10. 解决：某些情况下业务层传参队列id类型不匹配导致的异常问题；
  11. 修改：创建房间接口，只需要传房间名一个参数，且必须先登录鉴权才能创建房间；
  12. 本次更新涉及接口变动：（相对于V1.6.7）
      * [CRVideo_Init](API.html#CRVideo_Init)
      * [CRVideo_Login](API.html#CRVideo_Login)
      * [CRVideo_LoginByToken](API.html#CRVideo_LoginByToken)
      * [CRVideo_UpdateToken](API.html#CRVideo_UpdateToken)
      * [CRVideo_NotifyTokenWillExpire.callback](API.html#CRVideo_NotifyTokenWillExpire)
      * [CRVideo_CreateMeeting](API.html#CRVideo_CreateMeeting)
      * [CRVideo_SendCmdRslt.callback](API.html#CRVideo_SendCmdRslt)
      * [CRVideo_LineOff.callback](API.html#CRVideo_LineOff)
      * [CRVideo_MeetingDropped.callback](API.html#CRVideo_MeetingDropped)
      * [CRVideo_HungupCall](API.html#CRVideo_HungupCall)
      * [CRVideo_NotifyCallHungup.callback](API.html#CRVideo_NotifyCallHungup)

## V1.6.7.0 &ensp; 2019-11-22
  1. 新增Safari浏览器支持VP8编码互通；
  2. 新增呼叫接口支持添加自定义数据；
  3. 新增支持多台access服务器负载，自动选择网络最优服务器；
  4. 新增支持业务层控制视频上传最大带宽；
  5. 新增支持不显示对方画面时不建流，减少带宽占用；
  6. 新增支持初始化接口传入参数控制日志是否上传、是否开启音视频等；
  7. 新增支持对方打开多个摄像头时，订阅默认摄像头；
  8. 新增语音能量通知接口；
  9. 新增主视频模式设置，支持语音激励模式；
  10. 新增主视频变化通知接口；
  11. 新增callserver连接异常重连处理；
  12. 新增云端录制参数中userID不正确的兼容处理；
  13. 新增设置视频参数容错；
  14. 新增销毁会议接口及通知；
  15. 新增远程双录pc端demo；
  16. 新增影音共享功能；
  17. 新增呼叫会议外第三方入会；
  18. 优化屏幕共享，调整码率，分辨率，带宽等；
  19. 优化视频订阅建流逻辑；
  20. 优化日志上报；
  21. 优化入会耗时；
  22. 优化savePictoBase64接口，新增参数支持修改输出图片大小；
  23. 修复某些情况下关闭摄像头报错的问题；
  24. 修复设置主视频接口日志报错的问题；
  25. 修复某些情况下SDK账号不能创建固定房间的问题；
  26. 修复某些情况下没能创建音频播放器导致会议内没有声音的问题；
  27. 修复某些情况下队列ID类型不匹配导致坐席无法取消队列服务的问题；
  28. 修复某些情况下chrome76+上送画面模糊的问题；
  29. 修复某些设备上360浏览器poster属性导致视频画面不显示的问题；
  30. 修复chrome76+上某些情况下上送带宽不足导致画面模糊的问题；
  31. 修复IM聊天发送JSON数据对端解析失败的问题；
  32. 修复云端录制某些情况下摄像头id不正确导致偶尔没有画面的问题；
  33. 修复某些情况下队列状态不正确的问题；
  34. SDK默认创建固定会议；
  35. 合并基础白板功能到此版本SDK；