<h1 id=begin>API概述</h1>

API主要模块包括：[基础函数](#basic)、[登录](#login)、[透明通道](#customCmd)、
[队列管理](#queue)、[呼叫](#call)、[邀请](#invite)、[房间管理](#roomMgr)、[进出房间](#enterRoom)、[房间成员管理](#members)、[音频管理](#audio)、[音频自采集自渲染](#customAudio)、[视频管理](#video)、[视频自采集自渲染](#customVideo)、[虚拟视频设备](#virtualVideo)、[影音共享](#media)、[本地录制/本地直播](#record)、[云端录制/互动直播](#cloud)、[房间属性](#meetingAttrs)、[用户属性](#userAttrs)

<h2 id=basic>基础函数</h2>

| 方法 | 描述 | 所属文件 |
|:-|:-|:-|
| [getVersion](Apis.md#getVersion)| 获取sdk版本号| CRVideoSDKMain.h |
| [create](Apis.md#create)| 创建CRVideoSDKMain对象 | CRVideoSDKMain.h |
| [destroy](Apis.md#destroy)| 消毁CRVideoSDKMain对象 | CRVideoSDKMain.h |
| [getSDKQueue](Apis.md#getSDKQueue)| 得到CRVideoSDKQueue对象 | CRVideoSDKMain.h |
| [getSDKCall](Apis.md#getSDKCall)| 得到CRVideoSDKCall对象 | CRVideoSDKMain.h |
| [getSDKFileTransfer](Apis.md#getSDKFileTransfer)| 得到CRVideoSDKFileTransfer对象 | CRVideoSDKMain.h |
| [getSDKMeeting](Apis.md#getSDKMeeting)| 得到CRVideoSDKMeeting对象 | CRVideoSDKMain.h |
| [AddCallBack](Apis.md#CRVideoSDKMain_AddCallBack)| 增加CRVideoSDKMain的回调对象 | CRVideoSDKMain.h |
| [RmCallBack](Apis.md#CRVideoSDKMain_RmCallBack)| 移除CRVideoSDKMain的回调对象 | CRVideoSDKMain.h |
| [writeLog](Apis.md#writeLog)| 向sdk的日志文件写入日志| CRVideoSDKMain.h |
| [videoFrameCover](Apis.md#videoFrameCover)| 图像格式转换及缩小处理 | CRVideoSDKMain.h |
| [mirrorVideoFrame](Apis.md#mirrorVideoFrame)| 图像镜像处理 | CRVideoSDKMain.h |
| [coverToVideoFrame](Apis.md#coverToVideoFrame)| 将图片解码成图像帧 | CRVideoSDKMain.h |

<h2 id=login>登录(主调)</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [login](Apis.md#login)| 登录| CRVideoSDKMain.h |
| [logout](Apis.md#logout)| 登出 | CRVideoSDKMain.h |
| [updateToken](Apis.md#updateToken)| 更新token | CRVideoSDKMain.h |
| [getUserAuthErrCode](Apis.md#getUserAuthErrCode)| 第三方鉴权错误码获取 | CRVideoSDKMain.h |
| [getUserAuthErrDesc](Apis.md#getUserAuthErrDesc)| 第三方鉴权错误原因获取 | CRVideoSDKMain.h |
| [setDNDStatus](Apis.md#setDNDStatus)| 设置免打扰| CRVideoSDKMain.h |
| [getUserStatus](Apis.md#getUserStatus)| 获取本appID下的所有已登录用户| CRVideoSDKMain.h |
| [getOneUserStatus](Apis.md#getOneUserStatus)| 获取本appID下指定用户的登录状态 | CRVideoSDKMain.h |
| [startUserStatusNotify](Apis.md#startUserStatusNotify)| 开启appID下的用户登录状态消息推送 | CRVideoSDKMain.h |
| [stopUserStatusNotify](Apis.md#stopUserStatusNotify)| 关闭appID下的用户登录状态消息推送 | CRVideoSDKMain.h |

<h2 id=login_callback>登录(回调)</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [loginRslt](Apis.md#loginRslt)| 登录结果| CRVideoSDKMain.h |
| [notifyTokenWillExpire](Apis.md#notifyTokenWillExpire)| 通知token授权即将到期 | CRVideoSDKMain.h |
| [notifyLineOff](Apis.md#notifyLineOff)| 通知掉线 | CRVideoSDKMain.h |
| [setDNDStatusRslt](Apis.md#setDNDStatusRslt)| 设置免打扰结果 | CRVideoSDKMain.h |
| [getUserStatusSuccess](Apis.md#getUserStatusSuccess)| 获取用户登录状态信息成功 | CRVideoSDKMain.h |
| [getUserStatusFail](Apis.md#getUserStatusFail)| 获取用户登录状态信息失败| CRVideoSDKMain.h |
| [notifyUserStatus](Apis.md#notifyUserStatus)| 通知某用户登录状态变化 | CRVideoSDKMain.h |
| [startUserStatusNotifyRslt](Apis.md#startUserStatusNotifyRslt)| 开启用户状态通知结果 | CRVideoSDKMain.h |
| [stopUserStatusNotifyRslt](Apis.md#stopUserStatusNotifyRslt)| 关闭用户状态通知结果 | CRVideoSDKMain.h |


<h2 id=customCmd>透明通道（主调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [sendCmd](Apis.md#sendCmd)| 发送点对点消息| CRVideoSDKMain.h |
| [sendBuffer](Apis.md#sendBuffer)| 发送点对点大数据 | CRVideoSDKMain.h |
| [sendFile](Apis.md#sendFile)| 发送点对点文件 | CRVideoSDKMain.h |
| [cancelSend](Apis.md#cancelSend)| 取消大数据、文件的发送 | CRVideoSDKMain.h |
| [sendMeetingCustomMsg](Apis.md#sendMeetingCustomMsg)| 发送房间内群消息 | CRVideoSDKMeeting.h |


<h2 id=customCmd_callback>透明通道（回调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [sendCmdRlst](Apis.md#sendCmdRlst)| 发送点对点消息结果| CRVideoSDKMain.h |
| [sendBufferRlst](Apis.md#sendBufferRlst)| 发送点对点大数据结果 | CRVideoSDKMain.h |
| [sendFileRlst](Apis.md#sendFileRlst)| 发送点对点文件结果 | CRVideoSDKMain.h |
| [cancelSendRlst](Apis.md#cancelSendRlst)| 取消发送结果 | CRVideoSDKMain.h |
| [notifySendProgress](Apis.md#notifySendProgress)| 通知大数据、文件的发送进度 | CRVideoSDKMain.h |
| [notifyCmdData](Apis.md#notifyCmdData)| 通知收到点对点透明通道消息 | CRVideoSDKMain.h |
| [notifyBufferData](Apis.md#notifyBufferData)| 通知收到点对点大数据 | CRVideoSDKMain.h |
| [notifyFileData](Apis.md#notifyFileData)| 通知收到点对点文件 | CRVideoSDKMain.h |
| [sendMeetingCustomMsgRslt](Apis.md#sendMeetingCustomMsgRslt)| 发送房间内广播消息结果 | CRVideoSDKMeeting.h |
| [notifyMeetingCustomMsg](Apis.md#notifyMeetingCustomMsg)| 通知收到房间内广播消息 | CRVideoSDKMeeting.h |


<h2 id=queue>队列管理（主调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [AddCallBack](Apis.md#CRVideoSDKQueue_AddCallBack)| 增加CRVideoSDKQueue回调对象| CRVideoSDKQueue.h |
| [RmCallBack](Apis.md#CRVideoSDKQueue_RmCallBack)| 移除CRVideoSDKQueue回调对象 | CRVideoSDKQueue.h |
| [initQueueDat](Apis.md#initQueueDat)| 初始化队列功能 | CRVideoSDKQueue.h |
| [getAllQueueInfo](Apis.md#getAllQueueInfo)| 获取AppID下的所有队列基础信息 | CRVideoSDKQueue.h |
| [getQueueStatus](Apis.md#getQueueStatus)| 获取指定队列的排队状况 | CRVideoSDKQueue.h |
| [startQueuing](Apis.md#startQueuing)| 客户开始排队 | CRVideoSDKQueue.h |
| [stopQueuing](Apis.md#stopQueuing)| 客户停止排队 | CRVideoSDKQueue.h |
| [getQueuingInfo](Apis.md#getQueuingInfo)| 获取我的排队信息 | CRVideoSDKQueue.h |
| [startService](Apis.md#startService)| 座席开始服务某队列 | CRVideoSDKQueue.h |
| [stopService](Apis.md#stopService)| 座席停止服务某队列 | CRVideoSDKQueue.h |
| [getServingQueues](Apis.md#getServingQueues)| 获取我服务的所有队列 | CRVideoSDKQueue.h |
| [reqAssignUser](Apis.md#reqAssignUser)| 座席手动分配客户(免打扰开启后使用） | CRVideoSDKQueue.h |
| [acceptAssignUser](Apis.md#acceptAssignUser)| 接受系统分配的客户 | CRVideoSDKQueue.h |
| [rejectAssignUser](Apis.md#rejectAssignUser)| 拒绝系统分配的客户 | CRVideoSDKQueue.h |


<h2 id=queue_callback>队列管理（回调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [initQueueDatRslt](Apis.md#initQueueDatRslt)| 初始化队列功能结果 | CRVideoSDKQueue.h |
| [notifyQueueStatusChanged](Apis.md#notifyQueueStatusChanged)| 队列排队状态更新 | CRVideoSDKQueue.h |
| [notifyQueuingInfoChanged](Apis.md#notifyQueuingInfoChanged)| 我的排队信息更新 | CRVideoSDKQueue.h |
| [startQueuingRslt](Apis.md#startQueuingRslt)| 客户开始排队结果 | CRVideoSDKQueue.h |
| [stopQueuingRslt](Apis.md#stopQueuingRslt)| 客户停止排队结果 | CRVideoSDKQueue.h |
| [startServiceRslt](Apis.md#startServiceRslt)| 座席开始服务结果 | CRVideoSDKQueue.h |
| [stopServiceRslt](Apis.md#stopServiceRslt)| 座席停止服务结果 | CRVideoSDKQueue.h |
| [acceptAssignUserRslt](Apis.md#acceptAssignUserRslt)| 接受系统分配的客户结果 | CRVideoSDKQueue.h |
| [rejectAssignUserRslt](Apis.md#rejectAssignUserRslt)| 拒绝系统分配的客户结果 | CRVideoSDKQueue.h |
| [reqAssignUserRslt](Apis.md#reqAssignUserRslt)| 座席手动分配客户结果 | CRVideoSDKQueue.h |
| [getServingQueues](Apis.md#getServingQueues)| 获取我服务的所有队列 | CRVideoSDKQueue.h |
| [notifyAutoAssignUser](Apis.md#notifyAutoAssignUser)| 通知系统自动分配的客户 | CRVideoSDKQueue.h |
| [reqAssignUser](Apis.md#reqAssignUser)| 座席请求系统按规则分配一个客户结果 | CRVideoSDKQueue.h |
| [notifyAssignUserCanceled](Apis.md#notifyAssignUserCanceled)| 通知分配的客户取消了 | CRVideoSDKQueue.h |
| [notifyUserEnterQueue](Apis.md#notifyUserEnterQueue)| 通知客户进入了某队列 | CRVideoSDKQueue.h |
| [notifyUserLeaveQueue](Apis.md#notifyUserEnterQueue)| 通知客户离开了某队列 | CRVideoSDKQueue.h |


<h2 id=call>呼叫（主调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [AddCallBack](Apis.md#AddCallBack)| 增加CRVideoSDKCall回调对象| CRVideoSDKQueue.h |
| [RmCallBack](Apis.md#RmCallBack)| 移除CRVideoSDKCall回调对象 | CRVideoSDKQueue.h |
| [call](Apis.md#call)| 发起呼叫 | CRVideoSDKQueue.h |
| [acceptCall](Apis.md#acceptCall)| 接受他人的呼叫 | CRVideoSDKQueue.h |
| [rejectCall](Apis.md#rejectCall)| 拒接他人的呼叫 | CRVideoSDKQueue.h |
| [hungupCall](Apis.md#hungupCall)| 挂断通话 | CRVideoSDKQueue.h |
| [callMoreParty](Apis.md#stopQueuing)| 发起多方呼叫（或呼转） | CRVideoSDKQueue.h |
| [cancelCallMoreParty](Apis.md#cancelCallMoreParty)| 取消多方呼叫 | CRVideoSDKQueue.h |

<h2 id=call_callback>呼叫（回调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [callRslt](Apis.md#callRslt)| 发起的呼叫结果 | CRVideoSDKQueue.h |
| [acceptCallRslt](Apis.md#acceptCallRslt)| 接受他人呼叫的结果 | CRVideoSDKQueue.h |
| [rejectCallRslt](Apis.md#rejectCallRslt)| 拒绝他人呼叫的结果 | CRVideoSDKQueue.h |
| [hangupCallRslt](Apis.md#hangupCallRslt)| 挂断通话结果 | CRVideoSDKQueue.h |
| [notifyCallIn](Apis.md#notifyCallIn)| 通知呼入 | CRVideoSDKQueue.h |
| [notifyCallAccepted](Apis.md#notifyCallAccepted)| 通知呼叫被接受 | CRVideoSDKQueue.h |
| [notifyCallRejected](Apis.md#notifyCallRejected)| 通知呼叫被拒接 | CRVideoSDKQueue.h |
| [callMorePartyRslt](Apis.md#callMorePartyRslt)| 发起多方呼叫结果  | CRVideoSDKQueue.h |
| [cancelCallMorePartyRslt](Apis.md#cancelCallMorePartyRslt)| 取消多方呼叫结果 | CRVideoSDKQueue.h |
| [notifyCallMorePartyStatus](Apis.md#notifyCallMorePartyStatus)| 通知多方呼叫状态 | CRVideoSDKQueue.h |


<h2 id=invite>邀请（主调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [invite](Apis.md#invite)| 邀请他人 | CRVideoSDKQueue.h |
| [acceptInvite](Apis.md#acceptInvite)| 接受邀请 | CRVideoSDKQueue.h |
| [rejectInvite](Apis.md#rejectInvite)| 拒接邀请 | CRVideoSDKQueue.h |
| [cancelInvite](Apis.md#cancelInvite)| 取消邀请 | CRVideoSDKQueue.h |


<h2 id=invite_callback>邀请（回调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [inviteRslt](Apis.md#inviteRslt)| 邀请他人结果 | CRVideoSDKQueue.h |
| [cancelInviteRslt](Apis.md#cancelInviteRslt)| 取消邀请结果 | CRVideoSDKQueue.h |
| [acceptInviteRslt](Apis.md#acceptInviteRslt)| 接受邀请结果 | CRVideoSDKQueue.h |
| [rejectInviteRslt](Apis.md#rejectInviteRslt)| 拒接邀请结果 | CRVideoSDKQueue.h |
| [notifyInviteIn](Apis.md#notifyInviteIn)| 通知收到邀请 | CRVideoSDKQueue.h |
| [notifyInviteAccepted](Apis.md#notifyInviteAccepted)| 通知邀请被接受 | CRVideoSDKQueue.h |
| [notifyInviteRejected](Apis.md#notifyInviteRejected)| 通知邀请被拒接 | CRVideoSDKQueue.h |
| [notifyInviteCanceled](Apis.md#notifyInviteCanceled)| 通知邀请被取消  | CRVideoSDKQueue.h |


<h2 id=roomMgr>房间管理（主调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [createMeeting](Apis.md#createMeeting)| 创建房间 | CRVideoSDKMain.h |
| [destroyMeeting](Apis.md#destroyMeeting)| 消毁房间 | CRVideoSDKMain.h |


<h2 id=roomMgr_callback>房间管理（回调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [createMeetingSuccess](Apis.md#createMeetingSuccess)| 创建房间成功 | CRVideoSDKMain.h |
| [createMeetingFail](Apis.md#createMeetingFail)| 创建房间失败 | CRVideoSDKMain.h |
| [destroyMeetingRslt](Apis.md#destroyMeetingRslt)| 消毁房间结果 | CRVideoSDKMain.h |


<h2 id=enterRoom>进出房间（主调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [AddCallBack](Apis.md#AddCallBack)| 添加CRVideoSDKMeeting回调对象 | CRVideoSDKMeeting.h |
| [RmCallBack](Apis.md#RmCallBack)| 移除CRVideoSDKMeeting回调对象 | CRVideoSDKMeeting.h |
| [enterMeeting](Apis.md#enterMeeting)| 进入房间 | CRVideoSDKMeeting.h |
| [exitMeeting](Apis.md#exitMeeting)| 离开房间 | CRVideoSDKMeeting.h |

<h2 id=enterRoom_callback>进出房间（回调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [enterMeetingRslt](Apis.md#enterMeetingRslt)| 进入房间结果 | CRVideoSDKMeeting.h |
| [notifyMeetingStopped](Apis.md#notifyMeetingStopped)| 通知房间已结束 | CRVideoSDKMeeting.h |
| [notifyMeetingDropped](Apis.md#notifyMeetingStopped)| 与房间断开 | CRVideoSDKMeeting.h |
| [notifyNetStateChanged](Apis.md#notifyNetStateChanged)| 通知本端与房间服务器的网络状态变化 | CRVideoSDKMeeting.h |


<h2 id=members>房间成员管理（主调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [isUserInMeeting](Apis.md#isUserInMeeting)| 检查用户是否在房间中 | CRVideoSDKMeeting.h |
| [getAllMembers](Apis.md#getAllMembers)| 获取房间中所有所有成员信息 | CRVideoSDKMeeting.h |
| [getMemberInfo](Apis.md#getMemberInfo)| 获取房间中指定成员信息 | CRVideoSDKMeeting.h |
| [setNickName](Apis.md#setNickName)| 修改房间中成员昵称 | CRVideoSDKMeeting.h |
| [kickout](Apis.md#kickout)| 将他人请出房间 | CRVideoSDKMeeting.h |

<h2 id=members_callback>房间成员管理（回调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [notifyUserEnterMeeting](Apis.md#notifyUserEnterMeeting)| 通知有人进入房间 | CRVideoSDKMeeting.h |
| [notifyUserLeftMeeting](Apis.md#notifyUserLeftMeeting)| 通知有人离开房间 | CRVideoSDKMeeting.h |
| [setNickNameRslt](Apis.md#setNickNameRslt)| 修改房间中成员昵称结果 | CRVideoSDKMeeting.h |
| [notifyNickNameChanged](Apis.md#notifyNickNameChanged)| 通知房间有人昵称变化 | CRVideoSDKMeeting.h |
| [kickoutRslt](Apis.md#kickoutRslt)| 将他人请出房间结果 | CRVideoSDKMeeting.h |

<h2 id=audio>音频管理（主调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [getAudioMics](Apis.md#getAudioMics)| 得到系统麦克风设备列表 | CRVideoSDKMeeting.h |
| [getAudioSpks](Apis.md#getAudioSpks)| 得到系统扬声器设备列表 | CRVideoSDKMeeting.h |
| [getAudioCfg](Apis.md#getAudioCfg)| 得到当前音频配置 | CRVideoSDKMeeting.h |
| [setAudioCfg](Apis.md#setAudioCfg)| 设置音频参数 | CRVideoSDKMeeting.h |
| [setMicVolume](Apis.md#setMicVolume)| 配置麦克风音量 | CRVideoSDKMeeting.h |
| [getMicVolume](Apis.md#getMicVolume)| 获取麦克风音量 | CRVideoSDKMeeting.h |
| [setSpkVolume](Apis.md#setSpkVolume)| 配置扬声器音量 | CRVideoSDKMeeting.h |
| [getSpkVolume](Apis.md#getSpkVolume)| 获取扬声器音量 | CRVideoSDKMeeting.h |
| [setSpeakerMute](Apis.md#setSpeakerMute)| 配置扬声器静音 | CRVideoSDKMeeting.h |
| [getSpeakerMute](Apis.md#getSpeakerMute)| 获取扬声器静音状态 | CRVideoSDKMeeting.h |
| [startEchoTest](Apis.md#startEchoTest)| 开始本地语音环回测试 | CRVideoSDKMeeting.h |
| [stopEchoTest](Apis.md#stopEchoTest)| 停止本地语音环回测试 | CRVideoSDKMeeting.h |
| [openMic](Apis.md#openMic)| 开麦(将麦克风声音送入房间) | CRVideoSDKMeeting.h |
| [closeMic](Apis.md#closeMic)| 关麦(麦克风声音停止送入房间) | CRVideoSDKMeeting.h |
| [closeAllMic](Apis.md#closeMic)| 全体关麦 | CRVideoSDKMeeting.h |
| [getMicStatus](Apis.md#getMicStatus)| 获取指定人员的麦克风状态 | CRVideoSDKMeeting.h |
| [getLocMicDevEnergy](Apis.md#getLocMicDevEnergy)| 获取本地麦克风设备能量等级 | CRVideoSDKMeeting.h |
| [getUserMicEnergy](Apis.md#getUserMicEnergy)| 获取房间中指定人员麦克风能量等级 | CRVideoSDKMeeting.h |
| [setVoiceChange](Apis.md#setVoiceChange)| 设置目标用户变声 | CRVideoSDKMeeting.h |
| [getVoiceChangeType](Apis.md#getVoiceChangeType)| 获取目标用户变声类型 | CRVideoSDKMeeting.h |
| [setAudioFrameObserver](Apis.md#setAudioFrameObserver)| 设置语音观测器 | CRVideoSDKMeeting.h |


<h2 id=audio_callback>音频管理（回调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [notifyAudioDevChanged](Apis.md#notifyAudioDevChanged)| 通知本地音频设备变化 | CRVideoSDKMeeting.h |
| [notifyAudioErr](Apis.md#notifyAudioErr)| 通知本地音频相关错误 | CRVideoSDKMeeting.h |
| [notifyMicStatusChanged](Apis.md#notifyMicStatusChanged)| 通知房间中有人麦克风状态变化 | CRVideoSDKMeeting.h |
| [notifyMicEnergy](Apis.md#notifyMicEnergy)| 通知房间有人麦克风能量变化 | CRVideoSDKMeeting.h |
| [notifySetVoiceChange](Apis.md#notifySetVoiceChange)| 通知房间中有人变声状态变化 | CRVideoSDKMeeting.h |
| [onMicAudioFrame](Apis.md#onMicAudioFrame)| 安装语音观测器后的本地麦克风数据回调 | CRVideoSDK_Objs.h |
| [onSpkAudioFrame](Apis.md#onSpkAudioFrame)| 安装语音观测器后的本地扬声器数据回调 | CRVideoSDK_Objs.h |


<h2 id=customAudio>音频自采集自渲染</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [setCustomAudioCapture](Apis.md#setCustomAudioCapture)| 自定义音频采集 | CRVideoSDKMeeting.h |
| [pushCustomAudioDat](Apis.md#pushCustomAudioDat)| 向sdk送入自定义音频采集数据 | CRVideoSDKMeeting.h |
| [setCustomAudioPlayback](Apis.md#setCustomAudioPlayback)| 自定义音频渲染 | CRVideoSDKMeeting.h |
| [pullCustomAudioDat](Apis.md#pullCustomAudioDat)| 从sdk获取音频数据用于自渲染 | CRVideoSDKMeeting.h |


<h2 id=video>视频管理（主调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [getAllVideoInfo](Apis.md#getAllVideoInfo)| 得到视频设备列表 | CRVideoSDKMeeting.h |
| [showVideoAdvCfgDlg](Apis.md#showVideoAdvCfgDlg)| 显示系统摄像头高级配置（仅windows有效） | CRVideoSDKMeeting.h |
| [setVideoCfg](Apis.md#setVideoCfg)| 本地视频全局配置 | CRVideoSDKMeeting.h |
| [getVideoCfg](Apis.md#getVideoCfg)| 获取本地视频全局配置 | CRVideoSDKMeeting.h |
| [setVideoAttributes](Apis.md#setVideoAttributes)| 本地指定设备配置 | CRVideoSDKMeeting.h |
| [getVideoAttributes](Apis.md#getVideoAttributes)| 获取本地指定设备配置 | CRVideoSDKMeeting.h |
| [openVideo](Apis.md#openVideo)| 打开摄像头(他人观看后开始发流) | CRVideoSDKMeeting.h |
| [closeVideo](Apis.md#getSpkVolume)| 关闭摄像头 | CRVideoSDKMeeting.h |
| [getVideoStatus](Apis.md#getVideoStatus)| 房间中摄像头状态 | CRVideoSDKMeeting.h |
| [setDefaultVideo](Apis.md#setDefaultVideo)| 配置默认摄像头 | CRVideoSDKMeeting.h |
| [getDefaultVideo](Apis.md#getDefaultVideo)| 获取默认摄像头 | CRVideoSDKMeeting.h |
| [setMutiVideos](Apis.md#setMutiVideos)| 开启关闭多摄头功能 | CRVideoSDKMeeting.h |
| [getMutiVideos](Apis.md#getMutiVideos)| 获取多摄像头功能状态 | CRVideoSDKMeeting.h |
| [setVideoEffects](Apis.md#setVideoEffects)| 配置视频效果参数 | CRVideoSDKMeeting.h |
| [getVideoEffects](Apis.md#getVideoEffects)| 获取视频效果参数 | CRVideoSDKMeeting.h |
| [setVideoFrameObserver](Apis.md#setVideoFrameObserver)| 设置视频帧观测器 | CRVideoSDKMeeting.h |


<h2 id=video_callback>视频管理（回调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [notifyVideoDevChanged](Apis.md#notifyVideoDevChanged)| 通知房间中用户视频设备变化 | CRVideoSDKMeeting.h |
| [notifyDefaultVideoChanged](Apis.md#notifyDefaultVideoChanged)| 通知房间中用户默认视频设备变化 | CRVideoSDKMeeting.h |
| [openVideoDevRslt](Apis.md#openVideoDevRslt)| 本地视频设备打开结果 | CRVideoSDKMeeting.h |
| [notifyVideoStatusChanged](Apis.md#notifyVideoStatusChanged)| 通知房间中用户视频状态变化 | CRVideoSDKMeeting.h |


<h2 id=customVideo>视频自采集自渲染（主调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [createCustomVideoDev](Apis.md#createCustomVideoDev)| 创建自定义摄像头 | CRVideoSDKMeeting.h |
| [destroyCustomVideoDev](Apis.md#destroyCustomVideoDev)| 消毁自定义摄像头 | CRVideoSDKMeeting.h |
| [inputCustomVideoDat](Apis.md#inputCustomVideoDat)| 送入自定义摄像头数据 | CRVideoSDKMeeting.h |
| [addCustomRender](Apis.md#addCustomRender)| 送入自定义摄像头数据 | CRVideoSDKMeeting.h |


<h2 id=virtualVideo>虚拟视频设备（主调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [addIPCam](Apis.md#addIPCam)| 添加网络摄像头 | CRVideoSDKMeeting.h |
| [delIPCam](Apis.md#delIPCam)| 删除网络摄像头 | CRVideoSDKMeeting.h |
| [createScreenCamDev](Apis.md#createScreenCamDev)| 添加桌面摄像头 | CRVideoSDKMeeting.h |
| [updateScreenCamDev](Apis.md#updateScreenCamDev)| 调整桌面摄像头参数 | CRVideoSDKMeeting.h |
| [destroyScreenCamDev](Apis.md#destroyScreenCamDev)| 删除桌面摄像头 | CRVideoSDKMeeting.h |

<h2 id=media>影音共享（主调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [setMediaCfg](Apis.md#setMediaCfg)| 设置影音共享配置 | CRVideoSDKMeeting.h |
| [getMediaCfg](Apis.md#getMediaCfg)| 获取影音共享配置 | CRVideoSDKMeeting.h |
| [startPlayMedia](Apis.md#startPlayMedia)| 开始影音共享 | CRVideoSDKMeeting.h |
| [stopPlayMedia](Apis.md#stopPlayMedia)| 停止影音共享 | CRVideoSDKMeeting.h |
| [pausePlayMedia](Apis.md#pausePlayMedia)| 暂停影音共享 | CRVideoSDKMeeting.h |
| [setMediaPlayPos](Apis.md#setMediaPlayPos)| 设置播放位置 | CRVideoSDKMeeting.h |
| [getMediaInfo](Apis.md#getMediaInfo)| 获取当前影音共享信息 | CRVideoSDKMeeting.h |
| [setMediaVolume](Apis.md#setMediaVolume)| 配置影音音量 | CRVideoSDKMeeting.h |
| [getMediaVolume](Apis.md#getMediaVolume)| 获取影音音量 | CRVideoSDKMeeting.h |

<h2 id=media_callback>影音共享（回调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [startPlayMediaFail](Apis.md#startPlayMediaFail)| 影音共享开启失败 | CRVideoSDKMeeting.h |
| [notifyMediaStart](Apis.md#notifyMediaStart)| 通知影音共享开启 | CRVideoSDKMeeting.h |
| [notifyMediaOpened](Apis.md#notifyMediaOpened)| 本地影音共享文件打开成功通知 | CRVideoSDKMeeting.h |
| [notifyMediaStop](Apis.md#notifyMediaStop)| 通知影音共享停止 | CRVideoSDKMeeting.h |
| [notifyMediaPause](Apis.md#notifyMediaPause)| 通知影音共享暂停 | CRVideoSDKMeeting.h |

<h2 id=record>本地录制/本地直播（主调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [createLocMixer](Apis.md#createLocMixer)| 创建本地混图器 | CRVideoSDKMeeting.h |
| [updateLocMixerContent](Apis.md#updateLocMixerContent)| 更新本地混图内容 | CRVideoSDKMeeting.h |
| [addLocMixerOutput](Apis.md#addLocMixerOutput)| 添加混图器输出（本地文件或推流地址） | CRVideoSDKMeeting.h |
| [rmLocMixerOutput](Apis.md#rmLocMixerOutput)| 移除混图器输出 | CRVideoSDKMeeting.h |
| [destroyLocMixer](Apis.md#destroyLocMixer)| 消毁本地混图器 | CRVideoSDKMeeting.h |
| [getLocMixerState](Apis.md#getLocMixerState)| 得到混图器状态 | CRVideoSDKMeeting.h |
| [setPicResource](Apis.md#setPicResource)| 配置图片资源 | CRVideoSDKMeeting.h |


<h2 id=record_callback>本地录制/本地直播（回调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [notifyLocMixerStateChanged](Apis.md#notifyLocMixerStateChanged)| 通知本地录制/推流状态变化 | CRVideoSDKMeeting.h |
| [notifyLocMixerOutputInfo](Apis.md#notifyLocMixerOutputInfo)| 通知本地录制/推流输出信息 | CRVideoSDKMeeting.h |

<h2 id=cloud>云端录制/互动直播（主调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [createCloudMixer](Apis.md#createCloudMixer)| 创建云端混图器 | CRVideoSDKMeeting.h |
| [updateCloudMixerContent](Apis.md#updateCloudMixerContent)| 更新云端混图器 | CRVideoSDKMeeting.h |
| [destroyCloudMixer](Apis.md#destroyCloudMixer)| 消毁云端混图器 | CRVideoSDKMeeting.h |
| [getCloudMixerInfo](Apis.md#getCloudMixerInfo)| 得到云端混图器信息 | CRVideoSDKMeeting.h |
| [getAllCloudMixerInfo](Apis.md#getAllCloudMixerInfo)| 得到所有云端混图器 | CRVideoSDKMeeting.h |


<h2 id=cloud_callback>云端录制/互动直播（回调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [createCloudMixerFailed](Apis.md#createCloudMixerFailed)| 创建云端录制/推流失败| CRVideoSDKMeeting.h |
| [notifyCloudMixerInfoChanged](Apis.md#notifyCloudMixerInfoChanged)| 通知云端录制/推流信息变化 | CRVideoSDKMeeting.h |
| [notifyCloudMixerStateChanged](Apis.md#notifyCloudMixerStateChanged)| 通知云端录制/推流状态变化 | CRVideoSDKMeeting.h |
| [notifyCloudMixerOutputInfoChanged](Apis.md#notifyCloudMixerOutputInfoChanged)| 通知云端录制/推流输出信息变化 | CRVideoSDKMeeting.h |


<h2 id=meetingAttrs>房间属性（主调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [getMeetingAllAttrs](Apis.md#getMeetingAllAttrs)| 获取所有房间属性 | CRVideoSDKMeeting.h |
| [getMeetingAttrs](Apis.md#getMeetingAttrs)| 获取部份房间属性 | CRVideoSDKMeeting.h |
| [setMeetingAttrs](Apis.md#setMeetingAttrs)| 重置所有房间属性 | CRVideoSDKMeeting.h |
| [addOrUpdateMeetingAttrs](Apis.md#addOrUpdateMeetingAttrs)| 添加或更新房间属性 | CRVideoSDKMeeting.h |
| [delMeetingAttrs](Apis.md#delMeetingAttrs)| 删除房间属性 | CRVideoSDKMeeting.h |
| [clearMeetingAttrs](Apis.md#clearMeetingAttrs)| 清空所有房间属性 | CRVideoSDKMeeting.h |



<h2 id=meetingAttrs_callback>房间属性（回调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [getMeetingAllAttrsSuccess](Apis.md#getMeetingAllAttrsSuccess)| 获取所有房间属性成功 | CRVideoSDKMeeting.h |
| [getMeetingAllAttrsFail](Apis.md#getMeetingAllAttrsFail)| 获取所有房间属性失败 | CRVideoSDKMeeting.h |
| [getMeetingAttrsSuccess](Apis.md#getMeetingAttrsSuccess)| 获取部份房间属性成功 | CRVideoSDKMeeting.h |
| [getMeetingAttrsFail](Apis.md#getMeetingAttrsFail)| 获取部份房间属性失败 | CRVideoSDKMeeting.h |
| [setMeetingAttrsRslt](Apis.md#setMeetingAttrsRslt)| 重置所有房间属性结果 | CRVideoSDKMeeting.h |
| [addOrUpdateMeetingAttrsRslt](Apis.md#addOrUpdateMeetingAttrsRslt)| 添加或更新房间属性结果 | CRVideoSDKMeeting.h |
| [delMeetingAttrsRslt](Apis.md#delMeetingAttrsRslt)| 删除房间属性结果 | CRVideoSDKMeeting.h |
| [clearMeetingAttrsRslt](Apis.md#clearMeetingAttrsRslt)| 清空所有房间属性结果 | CRVideoSDKMeeting.h |
| [notifyMeetingAttrsChanged](Apis.md#notifyMeetingAttrsChanged)| 通知房间属性改变 | CRVideoSDKMeeting.h |



<h2 id=userAttrs>用户属性（主调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [getUserAttrs](Apis.md#getUserAttrs)| 获取指定用户的所有属性 | CRVideoSDKMeeting.h |
| [setUserAttrs](Apis.md#setUserAttrs)| 重置指定用户的属性 | CRVideoSDKMeeting.h |
| [addOrUpdateUserAttrs](Apis.md#addOrUpdateUserAttrs)| 添加或更新指定用户的属性 | CRVideoSDKMeeting.h |
| [delUserAttrs](Apis.md#delUserAttrs)| 删除指定用户的属性 | CRVideoSDKMeeting.h |
| [clearUserAttrs](Apis.md#clearUserAttrs)| 清空指定用户的属性 | CRVideoSDKMeeting.h |
| [clearAllUserAttrs](Apis.md#clearAllUserAttrs)| 清空所有用户的属性 | CRVideoSDKMeeting.h |



<h2 id=userAttrs_callback>房间属性（回调）</h2>

| 方法 | 描述 | 所属文件 |
|:-|:--|:-|
| [getUserAttrsSuccess](Apis.md#getUserAttrsSuccess)| 获取指定用户的所有属性成功 | CRVideoSDKMeeting.h |
| [getUserAttrsFail](Apis.md#getUserAttrsFail)| 获取指定用户的所有属性失败 | CRVideoSDKMeeting.h |
| [setUserAttrsRslt](Apis.md#setUserAttrsRslt)| 重置指定用户的属性结果 | CRVideoSDKMeeting.h |
| [addOrUpdateUserAttrsRslt](Apis.md#addOrUpdateUserAttrsRslt)| 添加或更新指定用户的属性结果 | CRVideoSDKMeeting.h |
| [delUserAttrsRslt](Apis.md#delUserAttrsRslt)| 删除指定用户的属性结果 | CRVideoSDKMeeting.h |
| [clearUserAttrsRslt](Apis.md#clearUserAttrsRslt)| 清空指定用户的属性结果 | CRVideoSDKMeeting.h |
| [clearAllUserAttrsRslt](Apis.md#clearAllUserAttrsRslt)| 清空所有用户的属性结果 | CRVideoSDKMeeting.h |
| [notifyUserAttrsChanged](Apis.md#notifyUserAttrsChanged)| 通知用户属性改变 | CRVideoSDKMeeting.h |

