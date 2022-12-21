<h1 id=begin>API概述</h1>

<h2 id=basic>模块介绍</h2>

 组件位于com.cloudroom.cloudroomvideosdk下

| 组件名称 | 描述 |
|:-|:-|
| CloudroomVideoSDK | 基础组件，负责整个SDK的初始化和反初始化操作。整个程序的生命过程中只能有一个实例。|
| CloudroomVideoMgr | 管理组件，实现登录、呼叫、房间创建销毁、透明传输等功能。 整个程序的生命过程中只能有一个实例。|
| CloudroomVideoMeeting | 房间核心组件，实现通话建立、音频采集播入、视频采集编解码、屏幕共享、录制、影音播放等功能。整个程序的生命过程中只能有一个实例。 |
| CloudroomQueue | 队列组件，实现队列功能，目的是为了实现用户自动分配。整个程序的生命过程中只能有一个实例。 |
| CloudroomHttpFileMgr | Http文件传输组件，实现Http文件上传下载、及文件管理。件，整个程序的生命过程中只能有一个实例。 |
| MediaUIView | 影音播放显示组件 |
| ScreenShareUIView | 屏幕共享显示、标注组件 |
| VideoUIView | 摄像头画面显示组件 |

<h2 id=basic>功能模块介绍</h2>

API主要模块包括：[基础函数](#basic_function)、[初始化/反初始化](#init_function)、[登录/注销](#login_function)、[队列管理](#queue_function)、[透明通道/呼叫排队](#transparent_call)、[邀请](#invite_function)、[房间管理](#room_function)、[http上传下载管理组件](#http_compotent_function)、[进出房间](#in_out_room)、[房间内基础消息](#inroom_sync)、[房间成员管理](#room_member_function)、[房间、用户属性](#room_attributes)、[音频管理](#audio_function)、[视频管理](#video_function)、[影音共享](#starshare_function)、[影音共享](#media_function)、[本地录制/本地直播](#record_function)、[云端录制/互动直播](#cloud_function)、[电子白板/文档共享](#board_function)


<h3 id=basic_function>基础函数</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [GetCloudroomVideoMeetingVer](API.md#GetCloudroomVideoMeetingVer) | 获取SDK版本号 | CloudroomVideoSDK |
| [setFileUploadRate](API.md#setFileUploadRate) | 文件上传的流量控制 | CloudroomVideoSDK |
| [setFileDownloadRate](API.md#setFileDownloadRate) | 文件下载的流量控制 | CloudroomVideoSDK |
| [setAliyunOssAccountInfo](API.md#setAliyunOssAccountInfo) | 设置阿里云OSS信息 | CloudroomVideoSDK |


<h3 id=init_function>初始化/反初始化</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [init](API.md#init) | SDK初始化 | CloudroomVideoSDK |
| [uninit](API.md#uninit) | SDK反初始化 | CloudroomVideoSDK |


<h3 id=login_function>登录/注销/掉线(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [setServerAddr](API.md#setServerAddr) | 设置服务器地址 | CloudroomVideoMeeting |
| [serverAddr](API.md#serverAddr) | 获取服务器地址 | CloudroomVideoMeeting |
| [loginByToken](API.md#loginByToken) | Token登录 | CloudroomVideoMgr |
| [updateToken](API.md#updateToken) | 更新Token | CloudroomVideoMgr |
| [logout](API.md#logout) | 注销 | CloudroomVideoMgr |
| [getUserAuthErrCode](API.md#getUserAuthErrCode) | 获取第三方鉴权失败码 | CloudroomVideoMgr |
| [getUserAuthErrDesc](API.md#getUserAuthErrDesc) | 获取第三方鉴权失败描述 | CloudroomVideoMgr |


<h3 id=login_function_callback>登录/注销/掉线(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [loginSuccess](API.md#loginSuccess) | 登陆成功 | CloudroomVideoMgr |
| [loginFail](API.md#loginFail) | 登录失败 | CloudroomVideoMgr |
| [lineOff](API.md#lineOff) | 掉线 | CloudroomVideoMgr |
| [notifyTokenWillExpire](API.md#notifyTokenWillExpire) | Token即将失效 | CloudroomVideoMgr |


<h3 id=queue_function>队列管理(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [initQueueDat](API.md#initQueueDat) | 初始化队列 | CloudroomQueue |
| [refreshAllQueueStatus](API.md#refreshAllQueueStatus) | 刷新所有队列状态 | CloudroomQueue |
| [getAllQueueInfo](API.md#getAllQueueInfo) | 查询队列 | CloudroomQueue |
| [getQueueStatus](API.md#getQueueStatus) | 获取队列状态 | CloudroomQueue |
| [getQueuingInfo](API.md#getQueuingInfo) | 获取我的排队信息 | CloudroomQueue |
| [getServingQueues](API.md#getServingQueues) | 获取我服务的所有队列 | CloudroomQueue |
| [getSessionInfo](API.md#getSessionInfo) | 获取我的会话信息 | CloudroomQueue |
| [startQueuing](API.md#startQueuing) | 开始排队 | CloudroomQueue |
| [stopQueuing](API.md#stopQueuing) | 停止排队 | CloudroomQueue |
| [startService](API.md#startService) | 开始服务队列 | CloudroomQueue |
| [stopService](API.md#stopService) | 停止服务队列 | CloudroomQueue |
| [reqAssignUser](API.md#reqAssignUser) | 请求分配一个客户 | CloudroomQueue |
| [getQueueUsers](API.md#getQueueUsers) | 获取某个队列排队的客户 | CloudroomQueue |
| [reqAssignUser](API.md#reqAssignUser) | 请求分配一个指定的客户 | CloudroomQueue |
| [acceptAssignUser](API.md#acceptAssignUser) | 接受分配的客户 | CloudroomQueue |
| [rejectAssignUser](API.md#rejectAssignUser) | 拒绝分配的客户 | CloudroomQueue |



<h3 id=queue_function>队列管理(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [initQueueDatRslt](API.md#initQueueDatRslt) | 列初始化操作结果 | CloudroomQueue |
| [queueStatusChanged](API.md#queueStatusChanged) | 队列状态变化通知 | CloudroomQueue |
| [queuingInfoChanged](API.md#queuingInfoChanged) | 排队信息变化通知 | CloudroomQueue |
| [stopQueuingRslt](API.md#stopQueuingRslt) | 停止排队结果 | CloudroomQueue |
| [startServiceRslt](API.md#startServiceRslt) | 开始服务队列结果 | CloudroomQueue |
| [stopServiceRslt](API.md#stopServiceRslt) | 停止服务队列结果 | CloudroomQueue |
| [responseAssignUserRslt](API.md#responseAssignUserRslt) | 响应分配客户操作结果 | CloudroomQueue |
| [autoAssignUser](API.md#autoAssignUser) | 自动分配用户通知 | CloudroomQueue |
| [reqAssignUserRslt](API.md#reqAssignUserRslt) | 请求分配用户结果 | CloudroomQueue |
| [cancelAssignUser](API.md#cancelAssignUser) | 分配用户被取消通知 | CloudroomQueue |
| [userEnter](API.md#userEnter) | 客户进入队列通知 | CloudroomQueue |
| [userLeave](API.md#userLeave) | 客户离开队列通知 | CloudroomQueue |


<h3 id=transparent_call>透明通道/呼叫排队(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [call](API.md#call) | 发起呼叫 | CloudroomVideoMgr |
| [acceptCall](API.md#acceptCall) | 接受对方发起的呼叫 | CloudroomVideoMgr |
| [rejectCall](API.md#rejectCall) | 拒绝对方发起的呼叫 | CloudroomVideoMgr |
| [setDNDStatus](API.md#setDNDStatus) | 设置免打扰状态 | CloudroomVideoMgr |
| [getUserStatus](API.md#getUserStatus) | 获取项目下所有用户在线状态 | CloudroomVideoMgr |
| [getOneUserStatus](API.md#getOneUserStatus) | 获取项目下指定用户的在线状态 | CloudroomVideoMgr |
| [startUserStatusNotify](API.md#startUserStatusNotify) | 开启用户的状态推送 | CloudroomVideoMgr |
| [stopUserStatusNotify](API.md#stopUserStatusNotify) | 关闭用户的状态推送 | CloudroomVideoMgr |
| [sendCmd](API.md#sendCmd) | 发送小块数据 | CloudroomVideoMgr |
| [sendBuffer](API.md#sendBuffer) | 发送小块数据 | CloudroomVideoMgr |
| [sendFile](API.md#sendFile) | 发送文件（分块发送 ） | CloudroomVideoMgr |
| [cancelSend](API.md#cancelSend) | 取消数据发送 | CloudroomVideoMgr |



<h3 id=transparent_call>透明通道/呼叫排队(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [callSuccess](API.md#callSuccess) | 发起呼叫操作成功 | CloudroomVideoMgr |
| [callFail](API.md#callFail) | 发起呼叫操作失败 | CloudroomVideoMgr |
| [acceptCallSuccess](API.md#acceptCallSuccess) | 接受他人呼叫操作成功 | CloudroomVideoMgr |
| [acceptCallFail](API.md#acceptCallFail) | 接受他人呼叫操作失败 | CloudroomVideoMgr |
| [rejectCallSuccess](API.md#rejectCallSuccess) | 拒绝他人的呼叫成功 | CloudroomVideoMgr |
| [hangupCallFail](API.md#hangupCallFail) | 挂断他人的呼叫失败 | CloudroomVideoMgr |
| [notifyCallIn](API.md#notifyCallIn) | 通知有人呼入 | CloudroomVideoMgr |
| [notifyCallAccepted](API.md#notifyCallAccepted) | 通知呼叫被对方接受 | CloudroomVideoMgr |
| [notifyCallRejected](API.md#notifyCallRejected) | 通知呼叫被对方拒绝 | CloudroomVideoMgr |
| [notifyCallHungup](API.md#notifyCallHungup) | 通知呼叫被对方挂断 | CloudroomVideoMgr |
| [setDNDStatusSuccess](API.md#setDNDStatusSuccess) | 设置免打扰状态操作成功 | CloudroomVideoMgr |
| [setDNDStatusFail](API.md#setDNDStatusFail) | 设置免打扰状态操作失败 | CloudroomVideoMgr |
| [getUserStatusSuccess](API.md#getUserStatusSuccess) | 获取所有用户在线状态成功 | CloudroomVideoMgr |
| [getUserStatusFail](API.md#getUserStatusFail) | 获取所有用户在线状态失败 | CloudroomVideoMgr |
| [startUserStatusNotifyRslt](API.md#startUserStatusNotifyRslt) | 开启用户状态推送结果 | CloudroomVideoMgr |
| [stopUserStatusNotifyRslt](API.md#stopUserStatusNotifyRslt) | 关闭用户状态推送结果 | CloudroomVideoMgr |
| [notifyUserStatus](API.md#notifyUserStatus) | 用户状态变化通知 | CloudroomVideoMgr |
| [sendCmdRlst](API.md#sendCmdRlst) | 发送小块数据 | CloudroomVideoMgr |
| [sendBufferRlst](API.md#sendBufferRlst) | 发送大块数据 | CloudroomVideoMgr |
| [sendFileRlst](API.md#sendFileRlst) | 发送文件 | CloudroomVideoMgr |
| [sendProgress](API.md#sendProgress) | 发送数据时，通知发送进度 | CloudroomVideoMgr |
| [cancelSendRlst](API.md#cancelSendRlst) | 取消发送响应 | CloudroomVideoMgr |
| [notifyCmdData](API.md#notifyCmdData) | 通知收到小块数据 | CloudroomVideoMgr |
| [notifyBufferData](API.md#notifyBufferData) | 通知收到大块数据 | CloudroomVideoMgr |
| [notifyFileData](API.md#notifyFileData) | 通知收到文件数据 | CloudroomVideoMgr |
| [notifyCancelSend](API.md#notifyCancelSend) | 通知收到文件数据 | CloudroomVideoMgr |


<h3 id=invite_function>邀请(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [invite](API.md#invite) | 发送邀请 | CloudroomVideoMeeting |
| [acceptInvite](API.md#acceptInvite) | 接受对方发送的邀请 | CloudroomVideoMgr |
| [rejectInvite](API.md#rejectInvite) | 拒绝对方发送的邀请 | CloudroomVideoMgr |
| [cancelInvite](API.md#cancelInvite) | 取消自己发送的邀请 | CloudroomVideoMgr |

<h3 id=invite_function>邀请(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [inviteSuccess](API.md#inviteSuccess) | 发送邀请成功 | CloudroomVideoMgr |
| [inviteFail](API.md#inviteFail) | 发送邀请失败 | CloudroomVideoMgr |
| [cancelInviteSuccess](API.md#cancelInviteSuccess) | 取消自己发送的邀请成功 | CloudroomVideoMgr |
| [cancelInviteFail](API.md#cancelInviteFail) | 取消自己发送的邀请失败 | CloudroomVideoMgr |
| [acceptInviteSuccess](API.md#acceptInviteSuccess) | 接受对方发送的邀请成功 | CloudroomVideoMgr |
| [acceptInviteFail](API.md#acceptInviteFail) | 接受对方发送的邀请失败 | CloudroomVideoMgr |
| [rejectInviteSuccess](API.md#rejectInviteSuccess) | 拒绝对方发送的邀请成功 | CloudroomVideoMgr |
| [rejectInviteFail](API.md#rejectInviteFail) | 拒绝对方发送的邀请失败 | CloudroomVideoMgr |
| [notifyInviteIn](API.md#notifyInviteIn) | 通知有人邀请 | CloudroomVideoMgr |
| [notifyInviteAccepted](API.md#notifyInviteAccepted) | 通知邀请被对方接受 | CloudroomVideoMgr |
| [notifyInviteRejected](API.md#notifyInviteRejected) | 通知邀请被对方拒绝 | CloudroomVideoMgr |
| [notifyInviteCanceled](API.md#notifyInviteCanceled) | 通知有邀请被取消 | CloudroomVideoMgr |


<h3 id=room_function>房间管理(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [createMeeting](API.md#createMeeting) | 创建房间 | CloudroomVideoMgr |
| [destroyMeeting](API.md#destroyMeeting) | 销毁房间 | CloudroomVideoMgr |


<h3 id=room_function>房间管理(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [createMeetingSuccess](API.md#createMeetingSuccess) | 创建房间成功 | CloudroomVideoMgr |
| [createMeetingFail](API.md#createMeetingFail) | 创建房间失败 | CloudroomVideoMgr |
| [destroyMeetingRslt](API.md#destroyMeetingRslt) | 销毁房间响应 | CloudroomVideoMgr |



<h3 id=http_compotent_function>http上传下载(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [startMgr](API.md#startHttpMgr) | 开启http文档上传下载功能 | CloudroomHttpFileMgr |
| [stopMgr](API.md#stopHttpMgr) | 停止http文档上传下载功能 | CloudroomHttpFileMgr |
| [getAllTransferInfos](API.md#getAllTransferInfos) | 获取所有本地上传、下载文件信息 | CloudroomHttpFileMgr |
| [getTransferInfo](API.md#getTransferInfo) | 获取本地指定文件的上传、下载文件信息 | CloudroomHttpFileMgr |
| [startTransferFile](API.md#startTransferFile) | 开始传输文件 | CloudroomHttpFileMgr |
| [cancelFileTransfer](API.md#cancelFileTransfer) | 取消传输 | CloudroomHttpFileMgr |
| [rmTransferInfo](API.md#rmTransferInfo) | 删除传输记录 | CloudroomHttpFileMgr |


<h3 id=http_compotent_function>http上传下载(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [fileStateChanged](API.md#fileStateChanged) | 通知用户文件状态更改 | CloudroomHttpFileMgr |
| [fileProgress](API.md#fileProgress) | 通知文件传输(上传/下载)进度 | CloudroomHttpFileMgr |
| [fileFinished](API.md#fileFinished) | 通知用户文件传输结束 | CloudroomHttpFileMgr |
| [fileHttpRspHeader](API.md#fileHttpRspHeader) | 通知http响应消息的header数据 | CloudroomHttpFileMgr |
| [fileHttpRspContent](API.md#fileHttpRspContent) | 通知上传完成后，http的响应内容 | CloudroomHttpFileMgr |



<h3 id=in_out_room>进出房间(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [enterMeeting](API.md#enterMeeting) | 进入房间 | CloudroomVideoMeeting |
| [exitMeeting](API.md#exitMeeting) | 离开房间 | CloudroomVideoMeeting |
| [kickout](API.md#kickout) | 把某个成员踢出房间 | CloudroomVideoMeeting |


<h3 id=in_out_room>进出房间(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [enterMeetingRslt](API.md#enterMeetingRslt) | 进入房间结果 | CloudroomVideoMeeting |
| [userEnterMeeting](API.md#userEnterMeeting) | 有人进入房间通知 | CloudroomVideoMeeting |
| [userLeftMeeting](API.md#userLeftMeeting) | 有人离开房间通知 | CloudroomVideoMeeting |
| [meetingDropped](API.md#meetingDropped) | 与房间的连接断开通知 | CloudroomVideoMeeting |
| [meetingStopped](API.md#meetingStopped) | 房间已停止通知 | CloudroomVideoMeeting |
| [kickoutRslt](API.md#kickoutRslt) | 踢人结果 | CloudroomVideoMeeting |


<h3 id=inroom_sync>房间内基础消息</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [sendMeetingCustomMsg](API.md#sendMeetingCustomMsg) | 房间内发送广播消息 | CloudroomVideoMeeting |
| [sendMeetingCustomMsgRslt](API.md#sendMeetingCustomMsgRslt) | 发送房间内用户广播结果 | CloudroomVideoMeeting |
| [notifyMeetingCustomMsg](API.md#notifyMeetingCustomMsg) | 接收到房间内用户自定义广播 | CloudroomVideoMeeting |
| [netStateChanged](API.md#netStateChanged) | 通知我的网络变化 | CloudroomVideoMeeting |


<h3 id=room_member_function>房间成员管理(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [getAllMembers](API.md#getAllMembers) | 获取房间内所有人员 | CloudroomVideoMeeting |
| [getMemberInfo](API.md#getMemberInfo) | 获取指定人员信息 | CloudroomVideoMeeting |
| [getMemberNickName](API.md#getMemberNickName) | 设置指定人昵称 | CloudroomVideoMeeting |
| [setNickName](API.md#setNickName) | 设置指定人的昵称 | CloudroomVideoMeeting |
| [isUserInMeeting](API.md#isUserInMeeting) | 检查某人是否在房间里 | CloudroomVideoMeeting |
| [setNickName](API.md#setNickName) | 设置指定人的昵称 | CloudroomVideoMeeting |


<h3 id=room_member_function>房间成员管理(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [setNickNameRsp](API.md#setNickNameRsp) | 设置指定人昵称响应 | CloudroomVideoMeeting |
| [notifyNickNameChanged](API.md#notifyNickNameChanged) | 用户昵称变更通知 | CloudroomVideoMeeting |


<h3 id=room_attributes>房间、用户属性(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [getMeetingAllAttrs](API.md#getMeetingAllAttrs) | 获取房间所有属性 | CloudroomVideoMeeting |
| [getMeetingAttrs](API.md#getMeetingAttrs) | 获取房间部份属性 | CloudroomVideoMeeting |
| [setMeetingAttrs](API.md#setMeetingAttrs) | 设置房间信息 | CloudroomVideoMeeting |
| [addOrUpdateMeetingAttrs](API.md#addOrUpdateMeetingAttrs) | 增加或者更新房间属性 | CloudroomVideoMeeting |
| [delMeetingAttrs](API.md#delMeetingAttrs) | 删除特定房间属性 | CloudroomVideoMeeting |
| [clearMeetingAttrs](API.md#clearMeetingAttrs) | 清除房间属性 | CloudroomVideoMeeting |
| [getUserAttrs](API.md#getUserAttrs) | 获取用户属性 | CloudroomVideoMeeting |
| [setUserAttrs](API.md#setUserAttrs) | 设置用户属性 | CloudroomVideoMeeting |
| [addOrUpdateUserAttrs](API.md#addOrUpdateUserAttrs) | 增加或者更新房间属性 | CloudroomVideoMeeting |
| [delUserAttrs](API.md#delUserAttrs) | 删除特定用户的特定属性 | CloudroomVideoMeeting |
| [clearUserAttrs](API.md#clearUserAttrs) | 清除特定用户的所有属性 | CloudroomVideoMeeting |
| [clearAllUserAttrs](API.md#clearAllUserAttrs) | 清除所有用户的属性 | CloudroomVideoMeeting |

<h3 id=room_attributes>房间、用户属性(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [getMeetingAllAttrsSuccess](API.md#getMeetingAllAttrsSuccess) | 成功获取到房间所有属性 | CloudroomVideoMeeting |
| [getMeetingAllAttrsFail](API.md#getMeetingAllAttrsFail) | 获取房间所有属性失败 | CloudroomVideoMeeting |
| [getMeetingAttrsSuccess](API.md#getMeetingAttrsSuccess) | 成功获取到房间属性 | CloudroomVideoMeeting |
| [getMeetingAttrsFail](API.md#getMeetingAttrsFail) | 获取房间属性失败 | CloudroomVideoMeeting |
| [setMeetingAttrsRslt](API.md#setMeetingAttrsRslt) | 设置房间属性结果 | CloudroomVideoMeeting |
| [addOrUpdateMeetingAttrsRslt](API.md#addOrUpdateMeetingAttrsRslt) | 增加或更新房间属性结果 | CloudroomVideoMeeting |
| [delMeetingAttrsRslt](API.md#delMeetingAttrsRslt) | 删除房间属性结果 | CloudroomVideoMeeting |
| [clearMeetingAttrsRslt](API.md#clearMeetingAttrsRslt) | 清除房间属性结果 | CloudroomVideoMeeting |
| [getUserAttrsSuccess](API.md#getUserAttrsSuccess) | 获取用户属性 | CloudroomVideoMeeting |
| [getUserAttrsFail](API.md#getUserAttrsFail) | 获取用户属性失败 | CloudroomVideoMeeting |
| [setUserAttrsRslt](API.md#setUserAttrsRslt) | 设置用户属性结果 | CloudroomVideoMeeting |
| [addOrUpdateUserAttrsRslt](API.md#addOrUpdateUserAttrsRslt) | 增加或更新用户属性结果 | CloudroomVideoMeeting |
| [delUserAttrsRslt](API.md#delUserAttrsRslt) | 删除用户属性结果 | CloudroomVideoMeeting |
| [clearUserAttrsRslt](API.md#clearUserAttrsRslt) | 清除特定用户的所有属性结果 | CloudroomVideoMeeting |
| [clearAllUserAttrsRslt](API.md#clearAllUserAttrsRslt) | 清除所有用户的属性结果 | CloudroomVideoMeeting |
| [notifyMeetingAttrsChanged](API.md#notifyMeetingAttrsChanged) | 房间属性发生改变 | CloudroomVideoMeeting |
| [notifyUserAttrsChanged](API.md#notifyUserAttrsChanged) | 用户属性发生改变 | CloudroomVideoMeeting |


<h3 id=audio_function>音频管理(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [getAudioMicNames](API.md#getAudioMicNames) | 麦克风设备列表 | CloudroomVideoMeeting |
| [getAudioSpkNames](API.md#getAudioSpkNames) | 扬声器设备列表 | CloudroomVideoMeeting |
| [setAudioCfg](API.md#setAudioCfg) | 设置音频参数 | CloudroomVideoMeeting |
| [getAudioCfg](API.md#getAudioCfg) | 获取音频参数 | CloudroomVideoMeeting |
| [getMicEnergy](API.md#getMicEnergy) | 麦克风声音大小 | CloudroomVideoMeeting |
| [openMic](API.md#openMic) | 打开麦克风 | CloudroomVideoMeeting |
| [closeMic](API.md#closeMic) | 关闭麦克风 | CloudroomVideoMeeting |
| [getAudioStatus](API.md#getAudioStatus) | 麦克风状态 | CloudroomVideoMeeting |
| [getMicVolume](API.md#getMicVolume) | 麦克风音量控制 | CloudroomVideoMeeting |
| [getSpeakerVolume](API.md#getSpeakerVolume) | 扬声器音量控制 | CloudroomVideoMeeting |
| [setSpeakerMute](API.md#setSpeakerMute) | 扬声器静音状态 | CloudroomVideoMeeting |
| [setAllAudioClose](API.md#setAllAudioClose) | 关闭所有人麦克风 | CloudroomVideoMeeting |
| [startGetAudioPCM](API.md#startGetAudioPCM) | 开始获取语音pcm数据 | CloudroomVideoMeeting |
| [stopGetAudioPCM](API.md#stopGetAudioPCM) | 停止获取语音pcm数据 | CloudroomVideoMeeting |
| [setCustomAudioCapture](API.md#setCustomAudioCapture) | 自定义音频采集 | CloudroomVideoMeeting |
| [pushCustomAudioDat](API.md#pushCustomAudioDat) | 向sdk送入采集到的pcm数据 | CloudroomVideoMeeting |
| [setCustomAudioPlayback](API.md#setCustomAudioPlayback) | 自定义音频播放 | CloudroomVideoMeeting |
| [pullCustomAudioDat](API.md#pullCustomAudioDat) | 从sdk获取要播放的pcm数据 | CloudroomVideoMeeting |
| [setVoiceChange](API.md#setVoiceChange) | 设置变声类型 | CloudroomVideoMeeting |
| [getVoiceChangeType](API.md#getVoiceChangeType) | 获取变声类型 | CloudroomVideoMeeting |
| [startEchoTest](API.md#startEchoTest) | 开始声音环回测试 | CloudroomVideoMeeting |
| [stopEchoTest](API.md#stopEchoTest) | 停止声音环回测试 | CloudroomVideoMeeting |

<h3 id=audio_function>音频管理(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [audioStatusChanged](API.md#audioStatusChanged) | 麦克风状态变化 | CloudroomVideoMeeting |
| [micEnergyUpdate](API.md#micEnergyUpdate) | 麦克风声音变化 | CloudroomVideoMeeting |
| [notifyAudioPCMDat](API.md#notifyAudioPCMDat) | 通知语音PCM数据 | CloudroomVideoMeeting |
| [notifyAllAudioClose](API.md#notifyAllAudioClose) | 通知全体静音 | CloudroomVideoMeeting |
| [notifySetVoiceChange](API.md#notifySetVoiceChange) | 变声类型变化通知 | CloudroomVideoMeeting |


<h3 id=video_function>视频管理(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [getVideoCfg](API.md#getVideoCfg) | 获取视频参数 | CloudroomVideoMeeting |
| [setVideoCfg](API.md#setVideoCfg) | 设置视频参数 | CloudroomVideoMeeting |
| [getDefaultVideo](API.md#getDefaultVideo) | 获取默认摄像头ID | CloudroomVideoMeeting |
| [setDefaultVideo](API.md#setDefaultVideo) | 设置默认默认摄像头 | CloudroomVideoMeeting |
| [getAllVideoInfo](API.md#getAllVideoInfo) | 摄像头设备列表 | CloudroomVideoMeeting |
| [setVideoEffects](API.md#setVideoEffects) | 视频效果配置 | CloudroomVideoMeeting |
| [getVideoEffects](API.md#getVideoEffects) | 获取视频效果配置 | CloudroomVideoMeeting |
| [createScreenCamDev](API.md#createScreenCamDev) | 创建桌面摄像头(sdk最大支持5个) | CloudroomVideoMeeting |
| [updateScreenCamDev](API.md#updateScreenCamDev) | 更新桌面摄像头 | CloudroomVideoMeeting |
| [destroyScreenCamDev](API.md#destroyScreenCamDev) | 消毁桌面摄像头 | CloudroomVideoMeeting |
| [createCustomVideoDev](API.md#createCustomVideoDev) | 创建自定义摄像头(sdk最大支持5个) | CloudroomVideoMeeting |
| [destroyCustomVideoDev](API.md#destroyCustomVideoDev) | 消毁自定义摄像头 | CloudroomVideoMeeting |
| [inputCustomVideoDat](API.md#inputCustomVideoDat) | 输入摄像头图像数据 | CloudroomVideoMeeting |
| [getWatchableVideos](API.md#getWatchableVideos) | 房间内可观看摄像头列表 | CloudroomVideoMeeting |
| [getVideoStatus](API.md#getVideoStatus) | 获取视频状态 | CloudroomVideoMeeting |
| [openVideo](API.md#openVideo) | 打开用户的摄像头 | CloudroomVideoMeeting |
| [closeVideo](API.md#closeVideo) | 关闭用户的摄像头 | CloudroomVideoMeeting |
| [setEnableMutiVideo](API.md#setEnableMutiVideo) | 设置用户是否启用多摄像头 | CloudroomVideoMeeting |
| [getEnableMutiVideo](API.md#getEnableMutiVideo) | 获取是否启用多摄像头 | CloudroomVideoMeeting |
| [getVideoImg](API.md#getVideoImg) | 摄像头图像数据 | CloudroomVideoMeeting |
| [setLocVideoAttributes](API.md#setLocVideoAttributes) | 视频设备私有参数配置 | CloudroomVideoMeeting |
| [getLocVideoAttributes](API.md#getLocVideoAttributes) | 获取某个摄像头私有参数 | CloudroomVideoMeeting |
| [bSupportVirtualBackground](API.md#bSupportVirtualBackground) | 检查是否支持虚拟背景功能 | CloudroomVideoMeeting |
| [setVirtualBackground](API.md#setVirtualBackground) | 配置虚拟背景参数 | CloudroomVideoMeeting |
| [getVirtualBackground](API.md#getVirtualBackground) | 获取虚拟背景参数 | CloudroomVideoMeeting |
| [isPicEmpty](API.md#VideoUIView_isPicEmpty) | 获取当前是否有图像 | VideoUIView |
| [getScaleType](API.md#VideoUIView_getScaleType) | 获取图像显示模式 | VideoUIView |
| [setScaleType](API.md#VideoUIView_setScaleType) | 设置图像显示模式 | VideoUIView |
| [getShowPic](API.md#VideoUIView_getShowPic) | 获取当前显示图像 | VideoUIView |
| [getPicFrameTime](API.md#VideoUIView_getPicFrameTime) | 获取当前图像帧的显示时间戳 | VideoUIView |
| [getPicWidth](API.md#VideoUIView_getPicWidth) | 获取图片宽度 | VideoUIView |
| [getPicHeight](API.md#VideoUIView_getPicHeight) | 获取图片高度 | VideoUIView |
| [clear](API.md#VideoUIView_clear) | 清空显示 | VideoUIView |
| [setUsrVideoId](API.md#setUsrVideoId) | 设置显示的目标用户视频 | VideoUIView |
| [getUsrVideoId](API.md#getUsrVideoId) | 获取当前显示的用户视频 | VideoUIView |
| [getQualityLv](API.md#getQualityLv) | 获取视频等级 | VideoUIView |


<h3 id=video_function>视频管理(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [videoDevChanged](API.md#videoDevChanged) | 通知用户的视频设备有变化 | CloudroomVideoMeeting |
| [videoStatusChanged](API.md#videoStatusChanged) | 通知打开本地视频状态变化 | CloudroomVideoMeeting |
| [defVideoChanged](API.md#defVideoChanged) | 通知用户的视频默认设备有变化 | CloudroomVideoMeeting |
| [openVideoDevRslt](API.md#openVideoDevRslt) | 通知打开摄像头结果 | CloudroomVideoMeeting |



<h3 id=starshare_function>屏幕共享(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [getSupportMaxScreenSize](API.md#getSupportMaxScreenSize) | 获取支持的最大视频大小 | CloudroomVideoMeeting |
| [getScreenShareCfg](API.md#getScreenShareCfg) | 获取屏幕共享配置 | CloudroomVideoMeeting |
| [setScreenShareCfg](API.md#setScreenShareCfg) | 设置本地屏幕共享配置 | CloudroomVideoMeeting |
| [startScreenShare](API.md#startScreenShare) | 开始屏幕共享 | CloudroomVideoMeeting |
| [stopScreenShare](API.md#stopScreenShare) | 停止屏幕共享 | CloudroomVideoMeeting |
| [getShareScreenDecodeImg](API.md#getShareScreenDecodeImg) | 屏幕共享图像数据 | CloudroomVideoMeeting |
| [setCustomizeCatchScreen](API.md#setCustomizeCatchScreen) | 开启/关闭自定义的抓屏 | CloudroomVideoMeeting |
| [setCustomizeScreenImg](API.md#setCustomizeScreenImg) | 送入自定义的抓屏图像数据 | CloudroomVideoMeeting |
| [startScreenMark](API.md#startScreenMark) | 开始屏幕标注 | CloudroomVideoMeeting |
| [stopScreenMark](API.md#stopScreenMark) | 停止屏幕标注 | CloudroomVideoMeeting |
| [isEnableMarked](API.md#isEnableMarked) | 检查是否支持标注 | CloudroomVideoMeeting |
| [isPicEmpty](API.md#ScreenShareUIView_isPicEmpty) | 获取当前是否有图像 | ScreenShareUIView |
| [getScaleType](API.md#ScreenShareUIView_getScaleType) | 获取图像显示模式 | ScreenShareUIView |
| [setScaleType](API.md#ScreenShareUIView_setScaleType) | 设置图像显示模式 | ScreenShareUIView |
| [getShowPic](API.md#ScreenShareUIView_getShowPic) | 获取当前显示图像 | ScreenShareUIView |
| [getPicFrameTime](API.md#ScreenShareUIView_getPicFrameTime) | 获取当前图像帧的显示时间戳 | ScreenShareUIView |
| [getPicWidth](API.md#ScreenShareUIView_getPicWidth) | 获取图片宽度 | ScreenShareUIView |
| [getPicHeight](API.md#ScreenShareUIView_getPicHeight) | 获取图片高度 | ScreenShareUIView |
| [clear](API.md#MediaUIView_clear) | 清空显示 | MediaUIView |

<h3 id=starshare_function>屏幕共享(回调) </h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [startScreenShareRslt](API.md#startScreenShareRslt) | 开启屏幕共享的响应事件 | CloudroomVideoMeeting |
| [stopScreenShareRslt](API.md#stopScreenShareRslt) | 停止屏幕共享的响应事件 | CloudroomVideoMeeting |
| [notifyScreenShareStarted](API.md#notifyScreenShareStarted) | 通知屏幕共享开始 | CloudroomVideoMeeting |
| [notifyScreenShareStopped](API.md#notifyScreenShareStopped) | 通知屏幕共享停止 | CloudroomVideoMeeting |
| [notifyCatchScreen](API.md#notifyCatchScreen) | 通知自定义抓取屏幕 | CloudroomVideoMeeting |
| [notifyGiveCtrlRight](API.md#notifyGiveCtrlRight) | 通知远程控制权限给予了某人 | CloudroomVideoMeeting |
| [notifyReleaseCtrlRight](API.md#notifyReleaseCtrlRight) | 通知某人释放控制权限 | CloudroomVideoMeeting |
| [notifyShareRectChanged](API.md#notifyShareRectChanged) | 通知共享区域发生改变 | CloudroomVideoMeeting |
| [startScreenMarkRslt](API.md#startScreenMarkRslt) | 开始屏幕标记结果 | CloudroomVideoMeeting |
| [stopScreenMarkRslt](API.md#stopScreenMarkRslt) | 停止屏幕标记结果 | CloudroomVideoMeeting |
| [notifyScreenMarkStarted](API.md#notifyScreenMarkStarted) | 通知屏幕标记开始 | CloudroomVideoMeeting |
| [notifyScreenMarkStopped](API.md#notifyScreenMarkStopped) | 通知屏幕标记停止 | CloudroomVideoMeeting |


<h3 id=media_function>影音共享(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [setMediaCfg](API.md#setMediaCfg) | 设置影音共享配置 | CloudroomVideoMeeting |
| [getMediaCfg](API.md#getMediaCfg) | 获取影音共享参数 | CloudroomVideoMeeting |
| [startPlayMedia](API.md#startPlayMedia) | 开始播放影音 | CloudroomVideoMeeting |
| [getMediaVolume](API.md#getMediaVolume) | 获取播放音量 | CloudroomVideoMeeting |
| [pausePlayMedia](API.md#pausePlayMedia) | 暂停或恢复播放影音 | CloudroomVideoMeeting |
| [stopPlayMedia](API.md#stopPlayMedia) | 停止播放影音 | CloudroomVideoMeeting |
| [setMediaplaypos](API.md#setMediaplaypos) | 设置播放进度 | CloudroomVideoMeeting |
| [getmediainfo](API.md#getmediainfo) | 影音播放信息 | CloudroomVideoMeeting |
| [getmediaimg](API.md#getmediaimg) | 获取影音图像数据 | CloudroomVideoMeeting |
| [isPicEmpty](API.md#MediaUIView_isPicEmpty) | 获取当前是否有图像 | MediaUIView |
| [getScaleType](API.md#MediaUIView_getScaleType) | 获取图像显示模式 | MediaUIView |
| [setScaleType](API.md#MediaUIView_setScaleType) | 设置图像显示模式 | MediaUIView |
| [getShowPic](API.md#MediaUIView_getShowPic) | 获取当前显示图像 | MediaUIView |
| [getPicFrameTime](API.md#ScreenShareUIView_getPicFrameTime) | 获取当前图像帧的显示时间戳 | MediaUIView |
| [getPicWidth](API.md#MediaUIView_getPicWidth) | 获取图片宽度 | MediaUIView |
| [getPicHeight](API.md#MediaUIView_getPicHeight) | 获取图片高度 | MediaUIView |
| [clear](API.md#MediaUIView_clear) | 清空显示 | MediaUIView |

<h3 id=media_function>影音共享(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [notifyMediaOpened](API.md#notifyMediaOpened) | 通知影音文件打开 | CloudroomVideoMeeting |
| [notifyMediaStart](API.md#notifyMediaStart) | 通知影音开始播放 | CloudroomVideoMeeting |
| [notifyMediaStop](API.md#notifyMediaStop) | 通知影音播放停止 | CloudroomVideoMeeting |
| [notifyMediaPause](API.md#notifyMediaPause) | 通知影音播放是否暂停 | CloudroomVideoMeeting |
| [notifyPlayPosSetted](API.md#notifyPlayPosSetted) | 通知播放进度已设置完成 | CloudroomVideoMeeting |


<h3 id=record_function>本地录制/本地直播(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [createLocMixer](API.md#createLocMixer) | 创建本地混图器 | CloudroomVideoMeeting |
| [updateLocMixerContent](API.md#updateLocMixerContent) | 更新本地混图器内容 | CloudroomVideoMeeting |
| [destroyLocMixer](API.md#destroyLocMixer) | 消毁本地混图器 | CloudroomVideoMeeting |
| [setPicResource](API.md#setPicResource) | 添加图片资源 | CloudroomVideoMeeting |
| [getLocMixerState](API.md#getLocMixerState) | 获取本地混图器状态 | CloudroomVideoMeeting |
| [addLocMixerOutput](API.md#addLocMixerOutput) | 开启本地录制、直播推流 | CloudroomVideoMeeting |
| [rmLocMixerOutput](API.md#rmLocMixerOutput) | 停止本地录制、直播推流 | CloudroomVideoMeeting |
| [getAllRecordFiles](API.md#getAllRecordFiles) | 录制文件列表 | CloudroomVideoMeeting |
| [getRecordFileInfo](API.md#getRecordFileInfo) | 获取录制文件信息 | CloudroomVideoMeeting |
| [cancelUploadRecordFile](API.md#cancelUploadRecordFile) | 取消上传录像文件 | CloudroomVideoMeeting |
| [uploadRecordFile](API.md#uploadRecordFile) | 上传录像文件 | CloudroomVideoMeeting |
| [addFileToRecordMgr](API.md#addFileToRecordMgr) | 添加文件到录制管理器 | CloudroomVideoMeeting |
| [removeFromRecordMgr](API.md#removeFromRecordMgr) | 从录制管理器删除文件 | CloudroomVideoMeeting |
| [playbackRecordFile](API.md#playbackRecordFile) | 回放录制文件 | CloudroomVideoMeeting |
| [setMarkText](API.md#setMarkText) | 添加打点信息 | CloudroomVideoMeeting |
| [removeMarkText](API.md#removeMarkText) | 移除打点信息 | CloudroomVideoMeeting |
| [getVideoMarkFile](API.md#getVideoMarkFile) | 移除打点信息 | CloudroomVideoMeeting |


<h3 id=record_function>本地录制/本地直播(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [locMixerStateChanged](API.md#locMixerStateChanged) | 本地录制、本地直播状态变化通知 | CloudroomVideoMeeting |
| [locMixerOutputInfo](API.md#locMixerOutputInfo) | 本地录制文件、本地直播信息通知 | CloudroomVideoMeeting |
| [notifyRecordFileStateChanged](API.md#notifyRecordFileStateChanged) | 通知文件上传状态 | CloudroomVideoMeeting |
| [notifyRecordFileUploadProgress](API.md#notifyRecordFileUploadProgress) | 通知上传录制文件进度 | CloudroomVideoMeeting |
| [uploadRecordFileErr](API.md#uploadRecordFileErr) | 录制文件上传错误 | CloudroomVideoMeeting |


<h3 id=cloud_function>云端录制/互动直播(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [createCloudMixer](API.md#createCloudMixer) | 开始云端录制、云端直播 | CloudroomVideoMeeting |
| [updateCloudMixerContent](API.md#updateCloudMixerContent) | 更新云端录制、云端直播内容 | CloudroomVideoMeeting |
| [destroyCloudMixer](API.md#destroyCloudMixer) | 停止云端录制、云端直播 | CloudroomVideoMeeting |
| [getCloudMixerInfo](API.md#getCloudMixerInfo) | 获取云端录制、云端直播信息 | CloudroomVideoMeeting |
| [getAllCloudMixerInfo](API.md#getAllCloudMixerInfo) | 获取房间内所有云端录制、云端直播信息 | CloudroomVideoMeeting |

 
<h3 id=cloud_function>云端录制/互动直播(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [createCloudMixerFailed](API.md#createCloudMixerFailed) | 启动云端录制、云端直播失败通知 | CloudroomVideoMeeting |
| [cloudMixerStateChanged](API.md#cloudMixerStateChanged) | 云端录制、云端直播状态变化通知 | CloudroomVideoMeeting |
| [cloudMixerInfoChanged](API.md#cloudMixerInfoChanged) | 云端录制、云端直播配置变化通知 | CloudroomVideoMeeting |
| [cloudMixerOutputInfoChanged](API.md#cloudMixerOutputInfoChanged) | 云端录制文件、云端直播输出变化通知 | CloudroomVideoMeeting |


<h3 id=board_function>电子白板/文档共享(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [createboard](API.md#createboard) | 创建白板 | CloudroomVideoMeeting |
| [closeboard](API.md#closeboard) | 关闭白板 | CloudroomVideoMeeting |
| [initBoardPageDat](API.md#initBoardPageDat) | 初始化白板图元数据 | CloudroomVideoMeeting |
| [createElementID](API.md#createElementID) | 生成白板图元ID | CloudroomVideoMeeting |
| [addboardelement](API.md#addboardelement) | 添加图元信息 | CloudroomVideoMeeting |
| [modifyBoardElement](API.md#modifyBoardElement) | 修改图元信息 | CloudroomVideoMeeting |
| [delboardelement](API.md#delboardelement) | 删除图元 | CloudroomVideoMeeting |
| [setmousehotspot](API.md#setmousehotspot) | 设置白板鼠标热点 | CloudroomVideoMeeting |
| [setBoardCurPageNo](API.md#setBoardCurPageNo) | 白板翻页 | CloudroomVideoMeeting |
| [listNetDiskDocFile](API.md#listNetDiskDocFile) | 查询文档列表 | CloudroomVideoMeeting |
| [uploadDocFileToNetDisk](API.md#uploadDocFileToNetDisk) | 上传文档并转换 | CloudroomVideoMeeting |
| [cancelTransforNetDiskDocFile](API.md#cancelTransforNetDiskDocFile) | 取消文档传输 | CloudroomVideoMeeting |
| [deleteNetDiskDocFile](API.md#deleteNetDiskDocFile) | 删除文档 | CloudroomVideoMeeting |
| [getNetDiskDocFilePageInfo](API.md#getNetDiskDocFilePageInfo) | 获取文档的转换信息 | CloudroomVideoMeeting |
| [downloadNetDiskDocFilePage](API.md#downloadNetDiskDocFilePage) | 下载文档转换后的页文件 | CloudroomVideoMeeting |


<h3 id=board_function>电子白板/文档共享(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [notifyInitBoards](API.md#notifyInitBoards) | 通知初始化电子白板列表 | CloudroomVideoMeeting |
| [notifyInitBoardPageDat](API.md#notifyInitBoardPageDat) | 通知初始化白板内图元数据 | CloudroomVideoMeeting |
| [notifyCreateBoard](API.md#notifyCreateBoard) | 通知创建白板 | CloudroomVideoMeeting |
| [notifyCloseBoard](API.md#notifyCloseBoard) | 通知关闭白板 | CloudroomVideoMeeting |
| [notifyAddBoardElement](API.md#notifyAddBoardElement) | 通知添加图元信息 | CloudroomVideoMeeting |
| [notifyModifyBoardElement](API.md#notifyModifyBoardElement) | 通知图元信息被修改 | CloudroomVideoMeeting |
| [notifyDelBoardElement](API.md#notifyDelBoardElement) | 通知删除图元 | CloudroomVideoMeeting |
| [notifyMouseHotSpot](API.md#notifyMouseHotSpot) | 通知白板鼠标热点 | CloudroomVideoMeeting |
| [listNetDiskDocFileRslt](API.md#listNetDiskDocFileRslt) | 通知查询文档列表结果 | CloudroomVideoMeeting |
| [getNetDiskDocFilePageInfoRslt](API.md#getNetDiskDocFilePageInfoRslt) | 通知查询文档转换结果 | CloudroomVideoMeeting |
| [deleteNetDiskDocFileRslt](API.md#deleteNetDiskDocFileRslt) | 通知删除文档结果 | CloudroomVideoMeeting |
| [notifyNetDiskDocFileTrsfProgress](API.md#notifyNetDiskDocFileTrsfProgress) | 通知文档传输进度 | CloudroomVideoMeeting |


