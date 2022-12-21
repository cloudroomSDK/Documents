<h1 id=begin>API概述</h1>

<h2 id=basic>COM组件介绍</h2>

| 组件名称 | ClassID | 描述 |
|:-|:-|:-|
| CloudroomVideoSDK | {07EFD662-A1BB-4d8d-9BEE-F7E43E5FEBF5} | 核心组件，SDK的用户鉴权、房间管理、队列呼叫、房间相关的功能</br>单例组件，整个程序的生命过程中只能有有一个实例。|
| CloudroomBoardUI | {D9ED4651-4461-458a-99F4-A455977582FF}	| 白板显示、操作组件 |
| CloudroomMediaUI | {93A618D5-2535-42d0-B72B-95705263F398}	| 影音播放显示组件 |
| CloudroomScreenShareUI | {6FF142C5-8A36-49d7-B627-D60B803550FC} | 屏幕共享显示、远程控制、标注组件 |
| CloudroomVideoUI | {8A6BBBDC-C6BE-4a47-92F3-F9581C3FB95E}	| 摄像头画面显示组件 |

<h2 id=basic>功能模块介绍</h2>

API主要模块包括：[基础函数](#basic_function)、[初始化/反初始化](#init_function)、[登录/注销](#login_function)、[队列管理](#queue_function)、[透明通道/呼叫排队](#transparent_call)、[邀请](#invite_function)、[房间管理](#room_function)、[http上传下载管理组件](#http_compotent_function)、[进出房间](#in_out_room)、[房间内基础消息](#inroom_sync)、[房间成员管理](#room_member_function)、[房间、用户属性](#room_attributes)、[音频管理](#audio_function)、[视频管理](#video_function)、[影音共享](#starshare_function)、[影音共享](#media_function)、[本地录制/本地直播](#record_function)、[云端录制/互动直播](#cloud_function)、[电子白板/文档共享](#board_function)


<h3 id=basic_function>基础函数</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [Version](API.md#getSDKJsVersion) | 获取SDK版本号 | CloudroomVideoSDK |
| [sdkPath](API.md#sdkPath) | 获取sdk所在的目录 | CloudroomVideoSDK |
| [setFileUploadRate](API.md#setFileUploadRate) | 文件上传的流量控制 | CloudroomVideoSDK |
| [setFileDownloadRate](API.md#setFileDownloadRate) | 文件下载的流量控制 | CloudroomVideoSDK |
| [setSDKParams](API.md#setSDKParams) | 设置SDK参数 | CloudroomVideoSDK |
| [setAliyunOssAccountInfo](API.md#setAliyunOssAccountInfo) | 设置阿里云OSS信息 | CloudroomVideoSDK |
| [isIEProtectedMode](API.md#isIEProtectedMode) | 查询插件是否运行在“IE保护模式下” | CloudroomVideoSDK |
| [getWriteablePathInIEProtectedMode](API.md#getWriteablePathInIEProtectedMode) | 获得一个在保护模式下可读写的目录 | CloudroomVideoSDK |
| [tryReadFile](API.md#tryReadFile) | 尝试读文件 | CloudroomVideoSDK |
| [readFileAsBase64](API.md#readFileAsBase64) | 读取文件并以base64编码读取到的内容，返回编码后的文件内容 | CloudroomVideoSDK |
| [readFileData](API.md#readFileData) | 读取文件并返回读取到的文件内容 | CloudroomVideoSDK |
| [writeBase64ToFile](API.md#writeBase64ToFile) | 将字符串Base64编码后，写入文件 | CloudroomVideoSDK |
| [getOpenFileName](API.md#getOpenFileName) | 获取打开文件的文件名 | CloudroomVideoSDK |
| [getSaveFileName](API.md#getSaveFileName) | 获取保存文件的文件名 | CloudroomVideoSDK |
| [getFileSize](API.md#getFileSize) | 获取文件大小 | CloudroomVideoSDK |
| [deleteFile](API.md#deleteFile) | 删除文件 | CloudroomVideoSDK |
| [moveFile](API.md#moveFile) | 移动文件 | CloudroomVideoSDK |
| [videoDataCover](API.md#videoDataCover) | 视频图像格式转换 | CloudroomVideoSDK |



<h3 id=init_function>初始化/反初始化</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [init_2](API.md#init2) | SDK初始化 | CloudroomVideoSDK |
| [uninit](API.md#uninit) | SDK反初始化 | CloudroomVideoSDK |



<h3 id=login_function>登录/注销/掉线(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [setNetworkProxy](API.md#setNetworkProxy) | 配置网络代理 | CloudroomVideoSDK |
| [serverAddr](API.md#serverAddr) | 设置和获取服务器地址 | CloudroomVideoSDK |
| [loginByToken](API.md#loginByToken) | Token登录 | CloudroomVideoSDK |
| [updateToken](API.md#updateToken) | 更新Token | CloudroomVideoSDK |
| [logout](API.md#logout) | 注销 | CloudroomVideoSDK |
| [getUserAuthErrCode](API.md#getUserAuthErrCode) | 获取第三方鉴权失败码 | CloudroomVideoSDK |
| [getUserAuthErrDesc](API.md#getUserAuthErrDesc) | 获取第三方鉴权失败描述 | CloudroomVideoSDK |


<h3 id=login_function_callback>登录/注销/掉线(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [loginSuccess](API.md#loginSuccess) | 登陆成功 | CloudroomVideoSDK |
| [loginFail](API.md#loginFail) | 登录失败 | CloudroomVideoSDK |
| [lineOff](API.md#lineOff) | 掉线 | CloudroomVideoSDK |
| [notifyTokenWillExpire](API.md#notifyTokenWillExpire) | Token即将失效 | CloudroomVideoSDK |


<h3 id=queue_function>队列管理(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [initQueueDat](API.md#initQueueDat) | 初始化队列 | CloudroomVideoSDK |
| [refreshAllQueueStatus](API.md#refreshAllQueueStatus) | 刷新所有队列状态 | CloudroomVideoSDK |
| [getAllQueueInfo](API.md#getAllQueueInfo) | 查询队列 | CloudroomVideoSDK |
| [getQueueStatus](API.md#getQueueStatus) | 获取队列状态 | CloudroomVideoSDK |
| [getQueuingInfo](API.md#getQueuingInfo) | 获取我的排队信息 | CloudroomVideoSDK |
| [getServingQueues](API.md#getServingQueues) | 获取我服务的所有队列 | CloudroomVideoSDK |
| [getSessionInfo](API.md#getSessionInfo) | 获取我的会话信息 | CloudroomVideoSDK |
| [startQueuing2](API.md#startQueuing2) | 开始排队 | CloudroomVideoSDK |
| [stopQueuing](API.md#stopQueuing) | 停止排队 | CloudroomVideoSDK |
| [startService2](API.md#startService2) | 开始服务队列 | CloudroomVideoSDK |
| [stopService](API.md#stopService) | 停止服务队列 | CloudroomVideoSDK |
| [reqAssignUser](API.md#reqAssignUser) | 请求分配一个客户 | CloudroomVideoSDK |
| [getQueueUsers](API.md#getQueueUsers) | 获取某个队列排队的客户 | CloudroomVideoSDK |
| [reqAssignUser2](API.md#reqAssignUser2) | 请求分配一个指定的客户 | CloudroomVideoSDK |
| [acceptAssignUser](API.md#acceptAssignUser) | 接受分配的客户 | CloudroomVideoSDK |
| [rejectAssignUser](API.md#rejectAssignUser) | 拒绝分配的客户 | CloudroomVideoSDK |



<h3 id=queue_function>队列管理(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [initQueueDatRslt](API.md#initQueueDatRslt) | 列初始化操作结果 | CloudroomVideoSDK |
| [queueStatusChanged](API.md#queueStatusChanged) | 队列状态变化通知 | CloudroomVideoSDK |
| [queuingInfoChanged](API.md#queuingInfoChanged) | 排队信息变化通知 | CloudroomVideoSDK |
| [startQueuingRslt](API.md#startQueuingRslt) | 开始排队结果 | CloudroomVideoSDK |
| [stopQueuingRslt](API.md#stopQueuingRslt) | 停止排队结果 | CloudroomVideoSDK |
| [startServiceRslt](API.md#startServiceRslt) | 开始服务队列结果 | CloudroomVideoSDK |
| [stopServiceRslt](API.md#stopServiceRslt) | 停止服务队列结果 | CloudroomVideoSDK |
| [responseAssignUserRslt](API.md#responseAssignUserRslt) | 响应分配客户操作结果 | CloudroomVideoSDK |
| [autoAssignUser](API.md#autoAssignUser) | 自动分配用户通知 | CloudroomVideoSDK |
| [reqAssignUserRslt](API.md#reqAssignUserRslt) | 请求分配用户结果 | CloudroomVideoSDK |
| [cancelAssignUser](API.md#cancelAssignUser) | 分配用户被取消通知 | CloudroomVideoSDK |
| [userEnter](API.md#userEnter) | 客户进入队列通知 | CloudroomVideoSDK |
| [userLeave](API.md#userLeave) | 客户离开队列通知 | CloudroomVideoSDK |


<h3 id=transparent_call>透明通道/呼叫排队(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [call](API.md#call) | 发起呼叫 | CloudroomVideoSDK |
| [acceptCall](API.md#acceptCall) | 接受对方发起的呼叫 | CloudroomVideoSDK |
| [rejectCall](API.md#rejectCall) | 拒绝对方发起的呼叫 | CloudroomVideoSDK |
| [setDNDStatus](API.md#setDNDStatus) | 设置免打扰状态 | CloudroomVideoSDK |
| [getUserStatus](API.md#getUserStatus) | 获取项目下所有用户在线状态 | CloudroomVideoSDK |
| [getOneUserStatus](API.md#getOneUserStatus) | 获取项目下指定用户的在线状态 | CloudroomVideoSDK |
| [startUserStatusNotify](API.md#startUserStatusNotify) | 开启用户的状态推送 | CloudroomVideoSDK |
| [stopUserStatusNotify](API.md#stopUserStatusNotify) | 关闭用户的状态推送 | CloudroomVideoSDK |
| [sendCmd](API.md#sendCmd) | 发送小块数据 | CloudroomVideoSDK |
| [sendBuffer](API.md#sendBuffer) | 发送小块数据 | CloudroomVideoSDK |
| [sendFile](API.md#sendFile) | 发送文件（分块发送 ） | CloudroomVideoSDK |
| [cancelSend](API.md#cancelSend) | 取消数据发送 | CloudroomVideoSDK |



<h3 id=transparent_call>透明通道/呼叫排队(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [callSuccess](API.md#callSuccess) | 发起呼叫操作成功 | CloudroomVideoSDK |
| [callFail](API.md#callFail) | 发起呼叫操作失败 | CloudroomVideoSDK |
| [acceptCallSuccess](API.md#acceptCallSuccess) | 接受他人呼叫操作成功 | CloudroomVideoSDK |
| [acceptCallFail](API.md#acceptCallFail) | 接受他人呼叫操作失败 | CloudroomVideoSDK |
| [rejectCallSuccess](API.md#rejectCallSuccess) | 拒绝他人的呼叫成功 | CloudroomVideoSDK |
| [hangupCallFail](API.md#hangupCallFail) | 挂断他人的呼叫失败 | CloudroomVideoSDK |
| [notifyCallIn](API.md#notifyCallIn) | 通知有人呼入 | CloudroomVideoSDK |
| [notifyCallAccepted](API.md#notifyCallAccepted) | 通知呼叫被对方接受 | CloudroomVideoSDK |
| [notifyCallRejected](API.md#notifyCallRejected) | 通知呼叫被对方拒绝 | CloudroomVideoSDK |
| [notifyCallHungup](API.md#notifyCallHungup) | 通知呼叫被对方挂断 | CloudroomVideoSDK |
| [setDNDStatusSuccess](API.md#setDNDStatusSuccess) | 设置免打扰状态操作成功 | CloudroomVideoSDK |
| [setDNDStatusFail](API.md#setDNDStatusFail) | 设置免打扰状态操作失败 | CloudroomVideoSDK |
| [getUserStatusSuccess](API.md#getUserStatusSuccess) | 获取所有用户在线状态成功 | CloudroomVideoSDK |
| [getUserStatusFail](API.md#getUserStatusFail) | 获取所有用户在线状态失败 | CloudroomVideoSDK |
| [startUserStatusNotifyRslt](API.md#startUserStatusNotifyRslt) | 开启用户状态推送结果 | CloudroomVideoSDK |
| [stopUserStatusNotifyRslt](API.md#stopUserStatusNotifyRslt) | 关闭用户状态推送结果 | CloudroomVideoSDK |
| [notifyUserStatus](API.md#notifyUserStatus) | 用户状态变化通知 | CloudroomVideoSDK |
| [sendCmdRlst](API.md#sendCmdRlst) | 发送小块数据 | CloudroomVideoSDK |
| [sendBufferRlst](API.md#sendBufferRlst) | 发送大块数据 | CloudroomVideoSDK |
| [sendFileRlst](API.md#sendFileRlst) | 发送文件 | CloudroomVideoSDK |
| [sendProgress](API.md#sendProgress) | 发送数据时，通知发送进度 | CloudroomVideoSDK |
| [cancelSendRlst](API.md#cancelSendRlst) | 取消发送响应 | CloudroomVideoSDK |
| [notifyCmdData](API.md#notifyCmdData) | 通知收到小块数据 | CloudroomVideoSDK |
| [notifyBufferData](API.md#notifyBufferData) | 通知收到大块数据 | CloudroomVideoSDK |
| [notifyFileData](API.md#notifyFileData) | 通知收到文件数据 | CloudroomVideoSDK |
| [notifyCancelSend](API.md#notifyCancelSend) | 通知收到文件数据 | CloudroomVideoSDK |


<h3 id=invite_function>邀请(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [invite](API.md#invite) | 发送邀请 | CloudroomVideoSDK |
| [acceptInvite](API.md#acceptInvite) | 接受对方发送的邀请 | CloudroomVideoSDK |
| [rejectInvite](API.md#rejectInvite) | 拒绝对方发送的邀请 | CloudroomVideoSDK |
| [cancelInvite](API.md#cancelInvite) | 取消自己发送的邀请 | CloudroomVideoSDK |

<h3 id=invite_function>邀请(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [inviteSuccess](API.md#inviteSuccess) | 发送邀请成功 | CloudroomVideoSDK |
| [inviteFail](API.md#inviteFail) | 发送邀请失败 | CloudroomVideoSDK |
| [cancelInviteSuccess](API.md#cancelInviteSuccess) | 取消自己发送的邀请成功 | CloudroomVideoSDK |
| [cancelInviteFail](API.md#cancelInviteFail) | 取消自己发送的邀请失败 | CloudroomVideoSDK |
| [acceptInviteSuccess](API.md#acceptInviteSuccess) | 接受对方发送的邀请成功 | CloudroomVideoSDK |
| [acceptInviteFail](API.md#acceptInviteFail) | 接受对方发送的邀请失败 | CloudroomVideoSDK |
| [rejectInviteSuccess](API.md#rejectInviteSuccess) | 拒绝对方发送的邀请成功 | CloudroomVideoSDK |
| [rejectInviteFail](API.md#rejectInviteFail) | 拒绝对方发送的邀请失败 | CloudroomVideoSDK |
| [notifyInviteIn](API.md#notifyInviteIn) | 通知有人邀请 | CloudroomVideoSDK |
| [notifyInviteAccepted](API.md#notifyInviteAccepted) | 通知邀请被对方接受 | CloudroomVideoSDK |
| [notifyInviteRejected](API.md#notifyInviteRejected) | 通知邀请被对方拒绝 | CloudroomVideoSDK |
| [notifyInviteCanceled](API.md#notifyInviteCanceled) | 通知有邀请被取消 | CloudroomVideoSDK |


<h3 id=room_function>房间管理(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [createMeeting2](API.md#createMeeting2) | 创建房间 | CloudroomVideoSDK |
| [destroyMeeting](API.md#destroyMeeting) | 销毁房间 | CloudroomVideoSDK |


<h3 id=room_function>房间管理(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [createMeetingSuccess](API.md#createMeetingSuccess) | 创建房间成功 | CloudroomVideoSDK |
| [createMeetingFail](API.md#createMeetingFail) | 创建房间失败 | CloudroomVideoSDK |
| [destroyMeetingRslt](API.md#destroyMeetingRslt) | 销毁房间响应 | CloudroomVideoSDK |



<h3 id=http_compotent_function>http上传下载(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [startMgr](API.md#startHttpMgr) | 开启http文档上传下载功能 | CloudroomVideoSDK |
| [stopMgr](API.md#stopHttpMgr) | 停止http文档上传下载功能 | CloudroomVideoSDK |
| [getAllTransferInfos](API.md#getAllTransferInfos) | 获取所有本地上传、下载文件信息 | CloudroomVideoSDK |
| [getTransferInfo](API.md#getTransferInfo) | 获取本地指定文件的上传、下载文件信息 | CloudroomVideoSDK |
| [startTransferFile](API.md#startTransferFile) | 开始传输文件 | CloudroomVideoSDK |
| [cancelFileTransfer](API.md#cancelFileTransfer) | 取消传输 | CloudroomVideoSDK |
| [rmTransferInfo](API.md#rmTransferInfo) | 删除传输记录 | CloudroomVideoSDK |


<h3 id=http_compotent_function>http上传下载(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [fileStateChanged](API.md#fileStateChanged) | 通知用户文件状态更改 | CloudroomVideoSDK |
| [fileProgress](API.md#fileProgress) | 通知文件传输(上传/下载)进度 | CloudroomVideoSDK |
| [fileFinished](API.md#fileFinished) | 通知用户文件传输结束 | CloudroomVideoSDK |
| [fileHttpRspHeader](API.md#fileHttpRspHeader) | 通知http响应消息的header数据 | CloudroomVideoSDK |
| [fileHttpRspContent](API.md#fileHttpRspContent) | 通知上传完成后，http的响应内容 | CloudroomVideoSDK |



<h3 id=in_out_room>进出房间(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [enterMeeting3](API.md#enterMeeting) | 进入房间 | CloudroomVideoSDK |
| [exitMeeting](API.md#exitMeeting) | 离开房间 | CloudroomVideoSDK |
| [kickout](API.md#kickout) | 把某个房间成员踢出房间 | CloudroomVideoSDK |


<h3 id=in_out_room>进出房间(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [enterMeetingRslt](API.md#enterMeetingRslt) | 进入房间结果 | CloudroomVideoSDK |
| [userEnterMeeting](API.md#userEnterMeeting) | 有人进入房间通知 | CloudroomVideoSDK |
| [userLeftMeeting](API.md#userLeftMeeting) | 有人离开房间通知 | CloudroomVideoSDK |
| [meetingDropped](API.md#meetingDropped) | 与房间的连接断开通知 | CloudroomVideoSDK |
| [meetingStopped](API.md#meetingStopped) | 房间已停止通知 | CloudroomVideoSDK |
| [kickoutRslt](API.md#kickoutRslt) | 踢人结果 | CloudroomVideoSDK |


<h3 id=inroom_sync>房间内基础消息</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [sendMeetingCustomMsg](API.md#sendMeetingCustomMsg) | 房间内发送广播消息 | CloudroomVideoSDK |
| [sendMeetingCustomMsgRslt](API.md#sendMeetingCustomMsgRslt) | 发送房间内用户广播结果 | CloudroomVideoSDK |
| [notifyMeetingCustomMsg](API.md#notifyMeetingCustomMsg) | 接收到房间内用户自定义广播 | CloudroomVideoSDK |
| [netStateChanged](API.md#netStateChanged) | 通知我的网络变化 | CloudroomVideoSDK |


<h3 id=room_member_function>房间成员管理(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [getAllMembers](API.md#getAllMembers) | 获取房间内所有人员 | CloudroomVideoSDK |
| [getMemberInfo](API.md#getMemberInfo) | 获取指定人员信息 | CloudroomVideoSDK |
| [getMemberNickName](API.md#getMemberNickName) | 设置指定人昵称 | CloudroomVideoSDK |
| [setNickName](API.md#setNickName) | 设置指定人的昵称 | CloudroomVideoSDK |
| [isUserInMeeting](API.md#isUserInMeeting) | 检查某人是否在房间里 | CloudroomVideoSDK |
| [setNickName](API.md#setNickName) | 设置指定人的昵称 | CloudroomVideoSDK |


<h3 id=room_member_function>房间成员管理(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [setNickNameRsp](API.md#setNickNameRsp) | 设置指定人昵称响应 | CloudroomVideoSDK |
| [notifyNickNameChanged](API.md#notifyNickNameChanged) | 用户昵称变更通知 | CloudroomVideoSDK |


<h3 id=room_attributes>房间、用户属性(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [getMeetingAllAttrs](API.md#getMeetingAllAttrs) | 获取房间所有属性 | CloudroomVideoSDK |
| [getMeetingAttrs](API.md#getMeetingAttrs) | 获取房间部份属性 | CloudroomVideoSDK |
| [setMeetingAttrs](API.md#setMeetingAttrs) | 设置房间信息 | CloudroomVideoSDK |
| [addOrUpdateMeetingAttrs](API.md#addOrUpdateMeetingAttrs) | 增加或者更新房间属性 | CloudroomVideoSDK |
| [delMeetingAttrs](API.md#delMeetingAttrs) | 删除特定房间属性 | CloudroomVideoSDK |
| [clearMeetingAttrs](API.md#clearMeetingAttrs) | 清除房间属性 | CloudroomVideoSDK |
| [getUserAttrs](API.md#getUserAttrs) | 获取用户属性 | CloudroomVideoSDK |
| [setUserAttrs](API.md#setUserAttrs) | 设置用户属性 | CloudroomVideoSDK |
| [addOrUpdateUserAttrs](API.md#addOrUpdateUserAttrs) | 增加或者更新房间属性 | CloudroomVideoSDK |
| [delUserAttrs](API.md#delUserAttrs) | 删除特定用户的特定属性 | CloudroomVideoSDK |
| [clearUserAttrs](API.md#clearUserAttrs) | 清除特定用户的所有属性 | CloudroomVideoSDK |
| [clearAllUserAttrs](API.md#clearAllUserAttrs) | 清除所有用户的属性 | CloudroomVideoSDK |

<h3 id=room_attributes>房间、用户属性(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [getMeetingAllAttrsSuccess](API.md#getMeetingAllAttrsSuccess) | 成功获取到房间所有属性 | CloudroomVideoSDK |
| [getMeetingAllAttrsFail](API.md#getMeetingAllAttrsFail) | 获取房间所有属性失败 | CloudroomVideoSDK |
| [getMeetingAttrsSuccess](API.md#getMeetingAttrsSuccess) | 成功获取到房间属性 | CloudroomVideoSDK |
| [getMeetingAttrsFail](API.md#getMeetingAttrsFail) | 获取房间属性失败 | CloudroomVideoSDK |
| [setMeetingAttrsRslt](API.md#setMeetingAttrsRslt) | 设置房间属性结果 | CloudroomVideoSDK |
| [addOrUpdateMeetingAttrsRslt](API.md#addOrUpdateMeetingAttrsRslt) | 增加或更新房间属性结果 | CloudroomVideoSDK |
| [delMeetingAttrsRslt](API.md#delMeetingAttrsRslt) | 删除房间属性结果 | CloudroomVideoSDK |
| [clearMeetingAttrsRslt](API.md#clearMeetingAttrsRslt) | 清除房间属性结果 | CloudroomVideoSDK |
| [getUserAttrsSuccess](API.md#getUserAttrsSuccess) | 获取用户属性 | CloudroomVideoSDK |
| [getUserAttrsFail](API.md#getUserAttrsFail) | 获取用户属性失败 | CloudroomVideoSDK |
| [setUserAttrsRslt](API.md#setUserAttrsRslt) | 设置用户属性结果 | CloudroomVideoSDK |
| [addOrUpdateUserAttrsRslt](API.md#addOrUpdateUserAttrsRslt) | 增加或更新用户属性结果 | CloudroomVideoSDK |
| [delUserAttrsRslt](API.md#delUserAttrsRslt) | 删除用户属性结果 | CloudroomVideoSDK |
| [clearUserAttrsRslt](API.md#clearUserAttrsRslt) | 清除特定用户的所有属性结果 | CloudroomVideoSDK |
| [clearAllUserAttrsRslt](API.md#clearAllUserAttrsRslt) | 清除所有用户的属性结果 | CloudroomVideoSDK |
| [notifyMeetingAttrsChanged](API.md#notifyMeetingAttrsChanged) | 房间属性发生改变 | CloudroomVideoSDK |
| [notifyUserAttrsChanged](API.md#notifyUserAttrsChanged) | 用户属性发生改变 | CloudroomVideoSDK |


<h3 id=audio_function>音频管理(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [getAudioMicNames](API.md#getAudioMicNames) | 麦克风设备列表 | CloudroomVideoSDK |
| [getAudioSpkNames](API.md#getAudioSpkNames) | 扬声器设备列表 | CloudroomVideoSDK |
| [setAudioCfg](API.md#setAudioCfg) | 设置音频参数 | CloudroomVideoSDK |
| [getAudioCfg](API.md#getAudioCfg) | 获取音频参数 | CloudroomVideoSDK |
| [getMicEnergy](API.md#getMicEnergy) | 麦克风声音大小 | CloudroomVideoSDK |
| [openMic](API.md#openMic) | 打开麦克风 | CloudroomVideoSDK |
| [closeMic](API.md#closeMic) | 关闭麦克风 | CloudroomVideoSDK |
| [getAudioStatus](API.md#getAudioStatus) | 麦克风状态 | CloudroomVideoSDK |
| [getMicVolume](API.md#getMicVolume) | 麦克风音量控制 | CloudroomVideoSDK |
| [getSpeakerVolume](API.md#getSpeakerVolume) | 扬声器音量控制 | CloudroomVideoSDK |
| [setSpeakerMute](API.md#setSpeakerMute) | 扬声器静音状态 | CloudroomVideoSDK |
| [setAllAudioClose](API.md#setAllAudioClose) | 关闭所有人麦克风 | CloudroomVideoSDK |
| [startGetAudioPCM](API.md#startGetAudioPCM) | 开始获取语音pcm数据 | CloudroomVideoSDK |
| [stopGetAudioPCM](API.md#stopGetAudioPCM) | 停止获取语音pcm数据 | CloudroomVideoSDK |
| [setCustomAudioCapture](API.md#setCustomAudioCapture) | 自定义音频采集 | CloudroomVideoSDK |
| [pushCustomAudioDat](API.md#pushCustomAudioDat) | 向sdk送入采集到的pcm数据 | CloudroomVideoSDK |
| [setCustomAudioPlayback](API.md#setCustomAudioPlayback) | 自定义音频播放 | CloudroomVideoSDK |
| [pullCustomAudioDat](API.md#pullCustomAudioDat) | 从sdk获取要播放的pcm数据 | CloudroomVideoSDK |
| [setVoiceChange](API.md#setVoiceChange) | 设置变声类型 | CloudroomVideoSDK |
| [getVoiceChangeType](API.md#getVoiceChangeType) | 获取变声类型 | CloudroomVideoSDK |
| [startEchoTest](API.md#startEchoTest) | 开始声音环回测试 | CloudroomVideoSDK |
| [stopEchoTest](API.md#stopEchoTest) | 停止声音环回测试 | CloudroomVideoSDK |

<h3 id=audio_function>音频管理(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [audioStatusChanged](API.md#audioStatusChanged) | 麦克风状态变化 | CloudroomVideoSDK |
| [micEnergyUpdate](API.md#micEnergyUpdate) | 麦克风声音变化 | CloudroomVideoSDK |
| [notifyAudioPCMDat](API.md#notifyAudioPCMDat) | 通知语音PCM数据 | CloudroomVideoSDK |
| [notifyAllAudioClose](API.md#notifyAllAudioClose) | 通知全体静音 | CloudroomVideoSDK |
| [notifySetVoiceChange](API.md#notifySetVoiceChange) | 变声类型变化通知 | CloudroomVideoSDK |


<h3 id=video_function>视频管理(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [getVideoCfg](API.md#getVideoCfg) | 获取视频参数 | CloudroomVideoSDK |
| [setVideoCfg](API.md#setVideoCfg) | 设置视频参数 | CloudroomVideoSDK |
| [getDefaultVideo](API.md#getDefaultVideo) | 获取默认摄像头ID | CloudroomVideoSDK |
| [setDefaultVideo](API.md#setDefaultVideo) | 设置默认默认摄像头 | CloudroomVideoSDK |
| [getAllVideoInfo](API.md#getAllVideoInfo) | 摄像头设备列表 | CloudroomVideoSDK |
| [setVideoEffects](API.md#setVideoEffects) | 视频效果配置 | CloudroomVideoSDK |
| [getVideoEffects](API.md#getVideoEffects) | 获取视频效果配置 | CloudroomVideoSDK |
| [createScreenCamDev](API.md#createScreenCamDev) | 创建桌面摄像头(sdk最大支持5个) | CloudroomVideoSDK |
| [updateScreenCamDev](API.md#updateScreenCamDev) | 更新桌面摄像头 | CloudroomVideoSDK |
| [destroyScreenCamDev](API.md#destroyScreenCamDev) | 消毁桌面摄像头 | CloudroomVideoSDK |
| [createCustomVideoDev](API.md#createCustomVideoDev) | 创建自定义摄像头(sdk最大支持5个) | CloudroomVideoSDK |
| [destroyCustomVideoDev](API.md#destroyCustomVideoDev) | 消毁自定义摄像头 | CloudroomVideoSDK |
| [inputCustomVideoDat](API.md#inputCustomVideoDat) | 输入摄像头图像数据 | CloudroomVideoSDK |
| [getWatchableVideos](API.md#getWatchableVideos) | 房间内可观看摄像头列表 | CloudroomVideoSDK |
| [setCustomWatchVideos](API.md#setCustomWatchVideos) | 自定义观看摄像头 | CloudroomVideoSDK |
| [getVideoStatus](API.md#getVideoStatus) | 获取视频状态 | CloudroomVideoSDK |
| [openVideo](API.md#openVideo) | 打开用户的摄像头 | CloudroomVideoSDK |
| [closeVideo](API.md#closeVideo) | 关闭用户的摄像头 | CloudroomVideoSDK |
| [setEnableMutiVideo](API.md#setEnableMutiVideo) | 设置用户是否启用多摄像头 | CloudroomVideoSDK |
| [getEnableMutiVideo](API.md#getEnableMutiVideo) | 获取是否启用多摄像头 | CloudroomVideoSDK |
| [getVideoImg](API.md#getVideoImg) | 摄像头图像数据 | CloudroomVideoSDK |
| [showVideoAdvCfgDlg](API.md#showVideoAdvCfgDlg) | 调出摄像头驱动的高级配置（只对真实物理摄像头有效） | CloudroomVideoSDK |
| [setLocVideoAttributes](API.md#setLocVideoAttributes) | 视频设备私有参数配置 | CloudroomVideoSDK |
| [getLocVideoAttributes](API.md#getLocVideoAttributes) | 获取某个摄像头私有参数 | CloudroomVideoSDK |
| [addIPCam](API.md#addIPCam) | 添加网络摄像头 | CloudroomVideoSDK |
| [delIPCam](API.md#delIPCam) | 移除网络摄像头 | CloudroomVideoSDK |
| [bSupportVirtualBackground](API.md#bSupportVirtualBackground) | 检查是否支持虚拟背景功能 | CloudroomVideoSDK |
| [setVirtualBackground](API.md#setVirtualBackground) | 配置虚拟背景参数 | CloudroomVideoSDK |
| [getVirtualBackground](API.md#getVirtualBackground) | 获取虚拟背景参数 | CloudroomVideoSDK |
| [visibleNickName](API.md#getVisibleNickName) | 设置、获取视频组件上昵称是否可见状态 | CloudroomVideoUI |
| [isPicEmpty](API.md#isPicEmpty) | 获取当前是否有图像 | CloudroomVideoUI |
| [keepAspectRatio](API.md#hasKeepAspectRatio) | 是否保持宽高比例 | CloudroomVideoUI |
| [setScaleType](API.md#setScaleType) | 设置图像显示模式 | CloudroomVideoUI |
| [dblClickFullScreen](API.md#isDblClickFullScreen) | 设置、获取是否双击全屏 | CloudroomVideoUI |
| [setVideo](API.md#setVideo) | 设置显示的目标用户视频 | CloudroomVideoUI |
| [getUserID](API.md#getUserID) | 获取当前的userID | CloudroomVideoUI |
| [getVideoID](API.md#getVideoID) | 获取当前显示的用户的视频设备 | CloudroomVideoUI |
| [savePic](API.md#savePic) | 保存图像帧到文件 | CloudroomVideoUI |
| [savePicToBase64](API.md#savePicToBase64) | 保存当前图片帧为Base64 | CloudroomVideoUI |
| [getPicFrameTime](API.md#getPicFrameTime) | 获取当前图像帧的显示时间戳 | CloudroomVideoUI |
| [setMaskPic](API.md#setMaskPic) | 设置掩码图片 | CloudroomVideoUI |
| [setSavePicRect](API.md#setSavePicRect) | 设置保存的视频区域 | CloudroomVideoUI |
| [getPicWidth](API.md#video_getPicWidth) | 获取图片宽度 | CloudroomVideoUI |
| [getPicHeight](API.md#video_getPicHeight) | 获取图片高度 | CloudroomVideoUI |
| [getQualityLv](API.md#getQualityLv) | 获取视频等级 | CloudroomVideoUI |
| [setFullScreen](API.md#setFullScreen) | 设置全屏状态 | CloudroomVideoUI |
| [setToolbarHeight](API.md#setToolbarHeight) | 设置工具条高度 | CloudroomVideoUI |
| [setToolButton](API.md#setToolButton) | 设置工具条按钮属性 | CloudroomVideoUI |
| [lockNickNameText](API.md#lockNickNameText) | 锁定昵称显示内容，设为空代表取消锁定 | CloudroomVideoUI |


<h3 id=video_function>视频管理(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [videoDevChanged](API.md#videoDevChanged) | 通知用户的视频设备有变化 | CloudroomVideoSDK |
| [videoStatusChanged](API.md#videoStatusChanged) | 通知打开本地视频状态变化 | CloudroomVideoSDK |
| [defVideoChanged](API.md#defVideoChanged) | 通知用户的视频默认设备有变化 | CloudroomVideoSDK |
| [openVideoDevRslt](API.md#openVideoDevRslt) | 通知打开摄像头结果 | CloudroomVideoSDK |
| [mousePressed](API.md#mousePressed) | 通知鼠标按下 | CloudroomVideoUI |
| [mouseReleased](API.md#mouseReleased) | 通知鼠标释放 | CloudroomVideoUI |
| [mouseDoubleClicked](API.md#mouseDoubleClicked) | 通知鼠标双击 | CloudroomVideoUI |
| [toolButtonClicked](API.md#toolButtonClicked) | 通知工具条按钮鼠标单击 | CloudroomVideoUI |



<h3 id=starshare_function>屏幕共享(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [getSupportMaxScreenWidth](API.md#getSupportMaxScreenWidth) | 获取支持的最大视频宽度 | CloudroomVideoSDK |
| [getSupportMaxScreenHeight](API.md#getSupportMaxScreenHeight) | 获取支持的最大视频高度 | CloudroomVideoSDK |
| [getScreenShareCfg](API.md#getScreenShareCfg) | 获取屏幕共享配置 | CloudroomVideoSDK |
| [setScreenShareCfg](API.md#setScreenShareCfg) | 设置本地屏幕共享配置 | CloudroomVideoSDK |
| [startScreenShare](API.md#startScreenShare) | 开始屏幕共享 | CloudroomVideoSDK |
| [stopScreenShare](API.md#stopScreenShare) | 停止屏幕共享 | CloudroomVideoSDK |
| [getShareScreenDecodeImg](API.md#getShareScreenDecodeImg) | 屏幕共享图像数据 | CloudroomVideoSDK |
| [setCustomizeCatchScreen](API.md#setCustomizeCatchScreen) | 开启/关闭自定义的抓屏 | CloudroomVideoSDK |
| [setCustomizeScreenImg](API.md#setCustomizeScreenImg) | 送入自定义的抓屏图像数据 | CloudroomVideoSDK |
| [giveCtrlRight](API.md#giveCtrlRight) | 赋予控制权限 | CloudroomVideoSDK |
| [releaseCtrlRight](API.md#releaseCtrlRight) | 收回控制权限 | CloudroomVideoSDK |
| [sendMouseCtrlMsg](API.md#sendMouseCtrlMsg) | 发送鼠标控制消息 | CloudroomVideoSDK |
| [sendKeyCtrlMsg](API.md#sendKeyCtrlMsg) | 发送键盘控制消息 | CloudroomVideoSDK |
| [hasKeepAspectRatio](API.md#hasKeepAspectRatio) | 是否保持宽高比例 | CloudroomScreenShareUI |
| [isEnableMarked](API.md#propert_isEnableMarked) | 检查是否支持标注 | CloudroomScreenShareUI |
| [ctrlOpen](API.md#propert_ctrlOpen) | 控制模式开关 | CloudroomScreenShareUI |
| [savePic](API.md#savePic) | 保存当前图像到文件 | CloudroomScreenShareUI |
| [savePicToBase64](API.md#savePicToBase64) | 转换当前帧画面为base64 | CloudroomScreenShareUI |
| [getPicFrameTime](API.md#CloudroomScreenShareUI_getPicFrameTime) | 获取当前图像帧的显示时间戳 | CloudroomScreenShareUI |
| [setPenStyle](API.md#CloudroomScreenShareUI_setPenStyle) | 设置标注画笔样式 | CloudroomScreenShareUI |
| [startScreenMark](API.md#startScreenMark) | 开始屏幕标注 | CloudroomScreenShareUI |
| [stopScreenMark](API.md#stopScreenMark) | 停止屏幕标注 | CloudroomScreenShareUI |
| [IsMarkedState](API.md#IsMarkedState) | 是否处于标注状态 | CloudroomScreenShareUI |
| [disableFloatToolbar](API.md#disableFloatToolbar) | 设置浮动工作条是否可见 | CloudroomScreenShareUI |
| [getPicWidth](API.md#screen_getPicWidth) | 得到图像宽 | CloudroomScreenShareUI |
| [getPicHeight](API.md#screen_getPicHeight) | 得到图像高 | CloudroomScreenShareUI |
| [isCursorInUI](API.md#isCursorInUI) | 判断鼠标是否在当前的窗口上 | CloudroomScreenShareUI |
| [getCursorPosInRemote](API.md#getCursorPosInRemote) | 获得鼠标在远端的对应位置 | CloudroomScreenShareUI |
| [setFullScreen](API.md#setFullScreen) | 设置全屏 | CloudroomScreenShareUI |
| [getFullScreen](API.md#getFullScreen) | 获取全屏状态 | CloudroomScreenShareUI |
| [setDblClickFullScreen](API.md#setDblClickFullScreen) | 设置双击全屏 | CloudroomScreenShareUI |
| [getDblClickFullScreen](API.md#getDblClickFullScreen) | 获取双击全屏状态 | CloudroomScreenShareUI |


<h3 id=starshare_function>屏幕共享(回调) </h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [startScreenShareRslt](API.md#startScreenShareRslt) | 开启屏幕共享的响应事件 | CloudroomVideoSDK |
| [stopScreenShareRslt](API.md#stopScreenShareRslt) | 停止屏幕共享的响应事件 | CloudroomVideoSDK |
| [notifyScreenShareStarted](API.md#notifyScreenShareStarted) | 通知屏幕共享开始 | CloudroomVideoSDK |
| [notifyScreenShareStopped](API.md#notifyScreenShareStopped) | 通知屏幕共享停止 | CloudroomVideoSDK |
| [notifyCatchScreen](API.md#notifyCatchScreen) | 通知自定义抓取屏幕 | CloudroomVideoSDK |
| [notifyGiveCtrlRight](API.md#notifyGiveCtrlRight) | 通知远程控制权限给予了某人 | CloudroomVideoSDK |
| [notifyReleaseCtrlRight](API.md#notifyReleaseCtrlRight) | 通知某人释放控制权限 | CloudroomVideoSDK |
| [notifyShareRectChanged](API.md#notifyShareRectChanged) | 通知共享区域发生改变 | CloudroomVideoSDK |
| [startScreenMarkRslt](API.md#startScreenMarkRslt) | 开始屏幕标记结果 | CloudroomVideoSDK |
| [stopScreenMarkRslt](API.md#stopScreenMarkRslt) | 停止屏幕标记结果 | CloudroomVideoSDK |
| [notifyScreenMarkStarted](API.md#notifyScreenMarkStarted) | 通知屏幕标记开始 | CloudroomVideoSDK |
| [notifyScreenMarkStopped](API.md#notifyScreenMarkStopped) | 通知屏幕标记停止 | CloudroomVideoSDK |


<h3 id=media_function>影音共享(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [setMediaCfg](API.md#setMediaCfg) | 设置影音共享配置 | CloudroomVideoSDK |
| [getMediaCfg](API.md#getMediaCfg) | 获取影音共享参数 | CloudroomVideoSDK |
| [startPlayMedia](API.md#startPlayMedia) | 开始播放影音 | CloudroomVideoSDK |
| [getMediaVolume](API.md#getMediaVolume) | 获取播放音量 | CloudroomVideoSDK |
| [pausePlayMedia](API.md#pausePlayMedia) | 暂停或恢复播放影音 | CloudroomVideoSDK |
| [stopPlayMedia](API.md#stopPlayMedia) | 停止播放影音 | CloudroomVideoSDK |
| [setMediaplaypos](API.md#setMediaplaypos) | 设置播放进度 | CloudroomVideoSDK |
| [getmediainfo](API.md#getmediainfo) | 影音播放信息 | CloudroomVideoSDK |
| [getmediaimg](API.md#getmediaimg) | 获取影音图像数据 | CloudroomVideoSDK |
| [hasKeepAspectRatio](API.md#hasKeepAspectRatio) | 是否保持宽高缩放比例 | CloudroomMediaUI |
| [isDblClickFullScreen](API.md#isDblClickFullScreen) | 是否双击全屏 | CloudroomMediaUI |
| [disableToolBar](API.md#disableToolBar) | 禁用工具栏 | CloudroomMediaUI |
| [savePicToFile](API.md#savePicToFile) | 保存当前画面到文件 | CloudroomMediaUI |
| [savePicToBase64](API.md#savePicToBase64) | 当前画面数据转换成base64 | CloudroomMediaUI |
| [getPicFrameTime](API.md#getPicFrameTime) | 获取当前图像帧的显示时间戳 | CloudroomMediaUI |
| [setToolBarUIElementVisible](API.md#setToolBarUIElementVisible) | 显示隐藏播放工具条上的界面元素 | CloudroomMediaUI |
| [setToolBarSize](API.md#setToolBarSize) | 设置影音工具条的大小 | CloudroomMediaUI |
| [disableChangePlayPos](API.md#disableChangePlayPos) | 禁止调整播放位置 | CloudroomMediaUI |
| [setFullScreen](API.md#setFullScreen) | 设置全屏 | CloudroomMediaUI |
| [getFullScreen](API.md#getFullScreen) | 是否全屏 | CloudroomMediaUI |

<h3 id=media_function>影音共享(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [notifyMediaOpened](API.md#notifyMediaOpened) | 通知影音文件打开 | CloudroomVideoSDK |
| [notifyMediaStart](API.md#notifyMediaStart) | 通知影音开始播放 | CloudroomVideoSDK |
| [notifyMediaStop](API.md#notifyMediaStop) | 通知影音播放停止 | CloudroomVideoSDK |
| [notifyMediaPause](API.md#notifyMediaPause) | 通知影音播放是否暂停 | CloudroomVideoSDK |
| [notifyPlayPosSetted](API.md#notifyPlayPosSetted) | 通知播放进度已设置完成 | CloudroomVideoSDK |


<h3 id=record_function>本地录制/本地直播(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [createLocMixer](API.md#createLocMixer) | 创建本地混图器 | CloudroomVideoSDK |
| [updateLocMixerContent](API.md#updateLocMixerContent) | 更新本地混图器内容 | CloudroomVideoSDK |
| [destroyLocMixer](API.md#destroyLocMixer) | 消毁本地混图器 | CloudroomVideoSDK |
| [setPicResource](API.md#setPicResource) | 添加图片资源 | CloudroomVideoSDK |
| [getLocMixerState](API.md#getLocMixerState) | 获取本地混图器状态 | CloudroomVideoSDK |
| [addLocMixerOutput](API.md#addLocMixerOutput) | 开启本地录制、直播推流 | CloudroomVideoSDK |
| [rmLocMixerOutput](API.md#rmLocMixerOutput) | 停止本地录制、直播推流 | CloudroomVideoSDK |
| [getAllRecordFiles](API.md#getAllRecordFiles) | 录制文件列表 | CloudroomVideoSDK |
| [getRecordFileInfo](API.md#getRecordFileInfo) | 获取录制文件信息 | CloudroomVideoSDK |
| [cancelUploadRecordFile](API.md#cancelUploadRecordFile) | 取消上传录像文件 | CloudroomVideoSDK |
| [uploadRecordFile](API.md#uploadRecordFile) | 上传录像文件 | CloudroomVideoSDK |
| [uploadRecordFile2](API.md#uploadRecordFile2) | 上传录像文件 | CloudroomVideoSDK |
| [addFileToRecordMgr](API.md#addFileToRecordMgr) | 添加文件到录制管理器 | CloudroomVideoSDK |
| [removeFromRecordMgr](API.md#removeFromRecordMgr) | 从录制管理器删除文件 | CloudroomVideoSDK |
| [playbackRecordFile](API.md#playbackRecordFile) | 回放录制文件 | CloudroomVideoSDK |
| [setMarkText](API.md#setMarkText) | 添加打点信息 | CloudroomVideoSDK |
| [removeMarkText](API.md#removeMarkText) | 移除打点信息 | CloudroomVideoSDK |
| [getVideoMarkFile](API.md#getVideoMarkFile) | 移除打点信息 | CloudroomVideoSDK |


<h3 id=record_function>本地录制/本地直播(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [locMixerStateChanged](API.md#locMixerStateChanged) | 本地录制、本地直播状态变化通知 | CloudroomVideoSDK |
| [locMixerOutputInfo](API.md#locMixerOutputInfo) | 本地录制文件、本地直播信息通知 | CloudroomVideoSDK |
| [notifyRecordFileStateChanged](API.md#notifyRecordFileStateChanged) | 通知文件上传状态 | CloudroomVideoSDK |
| [notifyRecordFileUploadProgress](API.md#notifyRecordFileUploadProgress) | 通知上传录制文件进度 | CloudroomVideoSDK |
| [uploadRecordFileErr](API.md#uploadRecordFileErr) | 录制文件上传错误 | CloudroomVideoSDK |


<h3 id=cloud_function>云端录制/互动直播(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [createCloudMixer](API.md#createCloudMixer) | 开始云端录制、云端直播 | CloudroomVideoSDK |
| [updateCloudMixerContent](API.md#updateCloudMixerContent) | 更新云端录制、云端直播内容 | CloudroomVideoSDK |
| [destroyCloudMixer](API.md#destroyCloudMixer) | 停止云端录制、云端直播 | CloudroomVideoSDK |
| [getCloudMixerInfo](API.md#getCloudMixerInfo) | 获取云端录制、云端直播信息 | CloudroomVideoSDK |
| [getAllCloudMixerInfo](API.md#getAllCloudMixerInfo) | 获取房间内所有云端录制、云端直播信息 | CloudroomVideoSDK |

 
<h3 id=cloud_function>云端录制/互动直播(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [createCloudMixerFailed](API.md#createCloudMixerFailed) | 启动云端录制、云端直播失败通知 | CloudroomVideoSDK |
| [cloudMixerStateChanged](API.md#cloudMixerStateChanged) | 云端录制、云端直播状态变化通知 | CloudroomVideoSDK |
| [cloudMixerInfoChanged](API.md#cloudMixerInfoChanged) | 云端录制、云端直播配置变化通知 | CloudroomVideoSDK |
| [cloudMixerOutputInfoChanged](API.md#cloudMixerOutputInfoChanged) | 云端录制文件、云端直播输出变化通知 | CloudroomVideoSDK |


<h3 id=board_function>电子白板/文档共享(主调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [createboard](API.md#createboard) | 创建白板 | CloudroomVideoSDK |
| [closeboard](API.md#closeboard) | 关闭白板 | CloudroomVideoSDK |
| [getBoardFilesDir](API.md#getBoardFilesDir) | 获取白板文档文件存储目录 | CloudroomVideoSDK |
| [initBoardPageDat](API.md#initBoardPageDat) | 初始化白板图元数据 | CloudroomVideoSDK |
| [createElementID](API.md#createElementID) | 生成白板图元ID | CloudroomVideoSDK |
| [addboardelement](API.md#addboardelement) | 添加图元信息 | CloudroomVideoSDK |
| [modifyBoardElement](API.md#modifyBoardElement) | 修改图元信息 | CloudroomVideoSDK |
| [delboardelement](API.md#delboardelement) | 删除图元 | CloudroomVideoSDK |
| [setmousehotspot](API.md#setmousehotspot) | 设置白板鼠标热点 | CloudroomVideoSDK |
| [setBoardCurPageNo](API.md#setBoardCurPageNo) | 白板翻页 | CloudroomVideoSDK |
| [listNetDiskDocFile](API.md#listNetDiskDocFile) | 查询文档列表 | CloudroomVideoSDK |
| [uploadDocFileToNetDisk](API.md#uploadDocFileToNetDisk) | 上传文档并转换 | CloudroomVideoSDK |
| [cancelTransforNetDiskDocFile](API.md#cancelTransforNetDiskDocFile) | 取消文档传输 | CloudroomVideoSDK |
| [deleteNetDiskDocFile](API.md#deleteNetDiskDocFile) | 删除文档 | CloudroomVideoSDK |
| [getNetDiskDocFilePageInfo](API.md#getNetDiskDocFilePageInfo) | 获取文档的转换信息 | CloudroomVideoSDK |
| [downloadNetDiskDocFilePage](API.md#downloadNetDiskDocFilePage) | 下载文档转换后的页文件 | CloudroomVideoSDK |
| [undo](API.md#undo) | 撤销上次操作 | CloudroomBoardUI |
| [redo](API.md#redo) | 重复上次操作 | CloudroomBoardUI |
| [clear](API.md#board_clear) | 删除图元 | CloudroomBoardUI |
| [getBoardIDs](API.md#getBoardIDs) | 获取所有白板ID | CloudroomBoardUI |
| [getBoardInfo](API.md#getBoardInfo) | 获取所有白板信息 | CloudroomBoardUI |
| [getCurBoardID](API.md#getCurBoardID) | 获取当前白板ID | CloudroomBoardUI |
| [getCurPageNo](API.md#getCurPageNo) | 获取当前页号 | CloudroomBoardUI |
| [setCurBoard](API.md#setCurBoard) | 设置当前白板 | CloudroomBoardUI |
| [isScaledContents](API.md#isScaledContents) | 是否允许缩放 | CloudroomBoardUI |
| [setScaledContents](API.md#setScaledContents) | 设置是否允许缩放 | CloudroomBoardUI |
| [setColor](API.md#setColor) | 设置颜色 | CloudroomBoardUI |
| [getColor](API.md#getColor) | 获取颜色 | CloudroomBoardUI |
| [setLineWidth](API.md#setLineWidth) | 设置线宽 | CloudroomBoardUI |
| [getLineWidth](API.md#getLineWidth) | 获取线宽 | CloudroomBoardUI |
| [isReadOnly](API.md#isReadOnly) | 获取是否只读状态 | CloudroomBoardUI |
| [setReadOnly](API.md#setReadOnly) | 设置只读 | CloudroomBoardUI |


<h3 id=board_function>电子白板/文档共享(回调)</h3>

| 方法 | 描述 | 所属组件 |
|:-|:-|:-|
| [notifyInitBoards](API.md#notifyInitBoards) | 通知初始化电子白板列表 | CloudroomVideoSDK |
| [notifyInitBoardPageDat](API.md#notifyInitBoardPageDat) | 通知初始化白板内图元数据 | CloudroomVideoSDK |
| [notifyCreateBoard](API.md#notifyCreateBoard) | 通知创建白板 | CloudroomVideoSDK |
| [notifyCloseBoard](API.md#notifyCloseBoard) | 通知关闭白板 | CloudroomVideoSDK |
| [notifyAddBoardElement](API.md#notifyAddBoardElement) | 通知添加图元信息 | CloudroomVideoSDK |
| [notifyModifyBoardElement](API.md#notifyModifyBoardElement) | 通知图元信息被修改 | CloudroomVideoSDK |
| [notifyDelBoardElement](API.md#notifyDelBoardElement) | 通知删除图元 | CloudroomVideoSDK |
| [notifyMouseHotSpot](API.md#notifyMouseHotSpot) | 通知白板鼠标热点 | CloudroomVideoSDK |
| [listNetDiskDocFileRslt](API.md#listNetDiskDocFileRslt) | 通知查询文档列表结果 | CloudroomVideoSDK |
| [getNetDiskDocFilePageInfoRslt](API.md#getNetDiskDocFilePageInfoRslt) | 通知查询文档转换结果 | CloudroomVideoSDK |
| [deleteNetDiskDocFileRslt](API.md#deleteNetDiskDocFileRslt) | 通知删除文档结果 | CloudroomVideoSDK |
| [notifyNetDiskDocFileTrsfProgress](API.md#notifyNetDiskDocFileTrsfProgress) | 通知文档传输进度 | CloudroomVideoSDK |
| [notifyBoardCurPageNo](API.md#notifyBoardCurPageNo) | 通知白板翻页 | CloudroomBoardUI |
| [undoEnableChange](API.md#undoEnableChange) | 通知白板的“撤消”功能是否可用 | CloudroomBoardUI |
| [redoEnableChange](API.md#redoEnableChange) | 通知白板的“恢复”功能是否可用 | CloudroomBoardUI |


