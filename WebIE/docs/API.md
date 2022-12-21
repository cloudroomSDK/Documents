

# API

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;word-wrap:break-word;'>
    <tbody>
        <tr>
            <td style='width:200px;text-align:center' rowspan=8>房间外接口</td>
            <td style='width:400px;text-align:center'><a href="#basic">基础函数</a></td>
        </tr>
        <tr>
            <td style='width:400px;text-align:center'><a href="#init">初始化/反初始化</a></td>
        </tr>
        <tr>
            <td style='width:400px;text-align:center'><a href="#login">登录/注销/掉线</a></td>
        </tr>
        <tr>
            <td style='width:400px;text-align:center'><a href="#queue">队列管理</a></td>
        </tr>
        <tr>
            <td style='width:400px;text-align:center'><a href="#call">透明通道/呼叫排队</a></td>
        </tr>
        <tr>
            <td style='width:400px;text-align:center'><a href="#invite">邀请</a></td>
        </tr>
        <tr>
            <td style='width:400px;text-align:center'><a href="#room">房间管理</a></td>
        </tr>
        <tr>
            <td style='width:400px;text-align:center'><a href="#http_component">http上传下载管理组件</a></td>
        </tr>
        <tr>
            <td style='width:200px;text-align:center' rowspan=12>房间内接口</td>
            <td style='width:400px;text-align:center'><a href="#in_out_room">进出房间</a></td>
        </tr>
        <tr>
            <td style='width:400px;text-align:center'><a href="#inroom_sync">房间内基础消息</a></td>
        </tr>
        <tr>
            <td style='width:400px;text-align:center'><a href="#members">房间成员管理</a></td>
        </tr>
        <tr>
            <td style='width:400px;text-align:center'><a href="#meetingattrs">房间和成员自定义属性</a></td>
        </tr>
        <tr>
            <td style='width:400px;text-align:center'><a href="#audio">音频管理</a></td>
        </tr>
        <tr>
            <td style='width:400px;text-align:center'><a href="#video">视频管理</a></td>
        </tr>
        <tr>
            <td style='width:400px;text-align:center'><a href="#starshare">屏幕共享</a></td>
        </tr>
        <tr>
            <td style='width:400px;text-align:center'><a href="#media">影音共享</a></td>
        </tr>
        <tr>
            <td style='width:400px;text-align:center'><a href="#record">本地录制/本地直播</a></td>
        </tr>
        <tr>
            <td style='width:400px;text-align:center'><a href="#cloud">云端录制/互动直播</a></td>
        </tr>
        <tr>
            <td style='width:400px;text-align:center'><a href="#board">电子白板/文档共享</a></td>
        </tr>
         <tr>
            <td style='width:400px;text-align:center'><a href="#visualization">可视化组件</a></td>
        </tr>
        </tr>
    </tbody>
</table>


## 接口描述

<h3 id=basic>基础函数：</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr>
            <th style='width:70px;text-align:left'>
                方式
            </th>
            <th>
                接口
            </th> 
            <th>
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=8>主调</td>
            <td><a href="#CRVideo_GetSDKJsVersion">CRVideo_GetSDKJsVersion</a></td>
            <td>
                获取Web	js版本号
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_PluginVersion">CRVideo_PluginVersion</a></td>
            <td>
                获取Plugin版本号
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SdkPath">CRVideo_SdkPath</a></td>
            <td>
                获取sdk所在的目录
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetSDKParams">CRVideo_SetSDKParams</a></td>
            <td>
                设置SDK参数
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetFileUploadRate">CRVideo_SetFileUploadRate</a></td>
            <td>
                文件上传的流量控制
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetFileDownloadRate">CRVideo_SetFileDownloadRate</a></td>
            <td>
               文件下载的流量控制
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetAliyunOssAccountInfo">CRVideo_SetAliyunOssAccountInfo</a></td>
            <td>
                设置阿里云OSS信息
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_WriteLog">CRVideo_WriteLog</a></td>
            <td>
                向日志文件中写入内容
            </td>
        </tr>
    </tbody>
</table>



<h3 id=init>初始化/反初始化：</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr>
            <th style='width:70px;text-align:left'>
                方式
            </th>
            <th>
                接口
            </th> 
            <th>
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=2>主调</td>
            <td><a href="#CRVideo_Init2">CRVideo_Init2</a></td>
            <td>
                SDK初始化
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_Uninit">CRVideo_Uninit</a></td>
            <td>
                SDK反初始化
            </td>
        </tr>
    </tbody>
</table>



<h3 id=login>登录/注销/掉线：</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr>
            <th style='width:70px;text-align:left'>
                方式
            </th>
            <th>
                接口
            </th> 
            <th>
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=8>主调</td>
            <td><a href="#CRVideo_SetNetworkProxy">CRVideo_SetNetworkProxy</a></td>
            <td>
                设置网络代理
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetServerAddr">CRVideo_SetServerAddr</a></td>
            <td>
                设置服务器地址
            </td>
        </tr>
         <tr>
            <td><a href="#CRVideo_Login">CRVideo_Login</a></td>
            <td>
                登录
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_LoginByToken">CRVideo_LoginByToken</a></td>
            <td>
                Token登录 
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_UpdateToken">CRVideo_UpdateToken</a></td>
            <td>
                更新Token
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_Logout">CRVideo_Logout</a></td>
            <td>
                注销
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetUserAuthErrCode">CRVideo_GetUserAuthErrCode</a></td>
            <td>
                获取第三方鉴权失败码
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetUserAuthErrDesc">CRVideo_GetUserAuthErrDesc</a></td>
            <td>
                获取第三方鉴权失败描述
            </td>
        </tr>
        <tr>
            <td rowspan=4>
                回调
            </td>
            <td>
                <a href="#CRVideo_LoginSuccess">CRVideo_LoginSuccess</a></td>
            <td>
                登陆成功
            </td>
        </tr>
        <tr>
            <td>
                <a href="#CRVideo_LoginFail">CRVideo_LoginFail</a> </td>
            <td>
                登录失败
            </td>
        </tr>
        <tr>
            <td>
                <a href="#CRVideo_NotifyTokenWillExpire">CRVideo_NotifyTokenWillExpire</a> </td>
            <td>
                Token即将失效的通知
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_LineOff">CRVideo_LineOff</a></td>
            <td>
                通知自己掉线
            </td>
        </tr>
    </tbody>
</table>


<h3 id=queue>队列管理</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr >
            <th style='width:70px;text-align:left'>
                方式
            </th>
            <th>
                接口
            </th>
            <th>
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=14>主调</td>
            <td><a href="#CRVideo_InitQueueDat">CRVideo_InitQueueDat</a></td>
            <td>
                初始化队列
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_RefreshAllQueueStatus">CRVideo_RefreshAllQueueStatus</a></td>
            <td>
                刷新所有队列状态
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetAllQueueInfo">CRVideo_GetAllQueueInfo</a></td>
            <td>
                查询队列
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetQueueStatus">CRVideo_GetQueueStatus</a></td>
            <td>
                获取队列状态
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetQueuingInfo">CRVideo_GetQueuingInfo</a></td>
            <td>
                获取我的排队信息
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetServingQueues">CRVideo_GetServingQueues</a></td>
            <td>
                获取我服务的所有队列
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetSessionInfo">CRVideo_GetSessionInfo</a></td>
            <td>
                获取我的会话信息
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_StartQueuing2">CRVideo_StartQueuing2</a></td>
            <td>
                开始排队
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_StopQueuing">CRVideo_StopQueuing</a></td>
            <td>
                停止排队
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_StartService2">CRVideo_StartService2</a></td>
            <td>
                开始服务队列
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_StopService">CRVideo_StopService</a></td>
            <td>
                停止服务队列
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_ReqAssignUser">CRVideo_ReqAssignUser</a></td>
            <td>
                请求分配一个客户
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_AcceptAssignUser">CRVideo_AcceptAssignUser</a></td>
            <td>
                接受分配的客户
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_RejectAssignUser">CRVideo_RejectAssignUser</a></td>
            <td>
                拒绝分配的客户
            </td>
        </tr>
        <tr>
            <td rowspan=11>
                回调
            </td>
            <td>
                <a href="#CRVideo_InitQueueDatRslt">CRVideo_InitQueueDatRslt</a>
            <td>
                列初始化操作结果
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_QueueStatusChanged">CRVideo_QueueStatusChanged</a></td>
            <td>
                队列状态变化通知
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_QueuingInfoChanged">CRVideo_QueuingInfoChanged</a></td>
            <td>
                排队信息变化通知
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_StartQueuingRslt">CRVideo_StartQueuingRslt</a></td>
            <td>
                开始排队通知
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_StopQueuingRslt">CRVideo_StopQueuingRslt</a></td>
            <td>
                停止排队通知
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_StartServiceRslt">CRVideo_StartServiceRslt</a></td>
            <td>
                开始服务队列通知
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_StopServiceRslt">CRVideo_StopServiceRslt</a></td>
            <td>
                停止服务队列通知
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_ResponseAssignUserRslt">CRVideo_ResponseAssignUserRslt</a></td>
            <td>
                响应分配客户操作结果
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_AutoAssignUser">CRVideo_AutoAssignUser</a></td>
            <td>
                自动分配用户通知
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_ReqAssignUserRslt">CRVideo_ReqAssignUserRslt</a></td>
            <td>
                请求分配用户结果
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_CancelAssignUser">CRVideo_CancelAssignUser</a></td>
            <td>
                分配用户被取消
            </td>
        </tr>
    </tbody>
</table>


<h3 id=call>透明通道/呼叫排队</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr >
            <th style='width:70px;text-align:left'>
                方式
            </th>
            <th>
                接口
            </th>
            <th>
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=13>主调</td>
            <td><a href="#CRVideo_Call">CRVideo_Call</a></td>
            <td>
                发起呼叫
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_AcceptCall">CRVideo_AcceptCall</a></td>
            <td>
                接受对方发起的呼叫
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_RejectCall">CRVideo_RejectCall</a></td>
            <td>
                拒绝对方发起的呼叫
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_HungupCall">CRVideo_HungupCall</a></td>
            <td>
                挂断呼叫
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetDNDStatus">CRVideo_SetDNDStatus</a></td>
            <td>
                设置免打扰状态
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetUserStatus">CRVideo_GetUserStatus</a></td>
            <td>
                获取企业下所有用户在线状态
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetOneUserStatus">CRVideo_GetOneUserStatus</a></td>
            <td>
                获取企业下指定用户的在线状态
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_StartUserStatusNotify">CRVideo_StartUserStatusNotify</a></td>
            <td>
                开启用户的状态推送
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_StopUserStatusNotify">CRVideo_StopUserStatusNotify</a></td>
            <td>
                关闭用户的状态推送
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SendCmd">CRVideo_SendCmd</a></td>
            <td>
                发送小块数据
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SendBuffer">CRVideo_SendBuffer</a></td>
            <td>
                发送大块数据
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SendFile">CRVideo_SendFile</a></td>
            <td>
                发送文件（分块发送 ）
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_CancelSend">CRVideo_CancelSend</a></td>
            <td>
                取消数据发送
            </td>
        </tr>
        <tr>
            <td rowspan=28>
                回调
            </td>
            <td>
                <a href="#CRVideo_CallSuccess">CRVideo_CallSuccess</a>
            <td>
                发起呼叫操作成功
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_CallFail">CRVideo_CallFail</a></td>
            <td>
                发起呼叫操作失败
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_AcceptCallSuccess">CRVideo_AcceptCallSuccess</a></td>
            <td>
                接受他人呼叫操作成功
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_AcceptCallFail">CRVideo_AcceptCallFail</a></td>
            <td>
                接受他人呼叫操作失败
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_RejectCallSuccess">CRVideo_RejectCallSuccess</a></td>
            <td>
                拒绝他人的呼叫成功
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_RejectCallFail">CRVideo_RejectCallFail</a></td>
            <td>
                拒绝他人的呼叫失败
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_HangupCallSuccess">CRVideo_HangupCallSuccess</a></td>
            <td>
                挂断他人的呼叫成功
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_HangupCallFail">CRVideo_HangupCallFail</a></td>
            <td>
                挂断他人的呼叫失败
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyCallIn">CRVideo_NotifyCallIn</a></td>
            <td>
                通知有人呼入
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyCallAccepted">CRVideo_NotifyCallAccepted</a></td>
            <td>
                通知呼叫被对方接受
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyCallRejected">CRVideo_NotifyCallRejected</a></td>
            <td>
                通知呼叫被对方拒绝
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyCallHungup">CRVideo_NotifyCallHungup</a></td>
            <td>
                通知呼叫被对方挂断
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetDNDStatusSuccess">CRVideo_SetDNDStatusSuccess</a></td>
            <td>
                设置免打扰状态操作成功
            </td>
        </tr> 
        <tr>
            <td><a href="#CRVideo_SetDNDStatusFail">CRVideo_SetDNDStatusFail</a></td>
            <td>
                设置免打扰状态操作失败
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetUserStatusSuccess">CRVideo_GetUserStatusSuccess</a></td>
            <td>
                获取所有用户在线状态成功
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetUserStatusFail">CRVideo_GetUserStatusFail</a></td>
            <td>
                获取所有用户在线状态失败
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_StartUserStatusNotifyRslt">CRVideo_StartUserStatusNotifyRslt</a></td>
            <td>
                开启用户状态推送结果
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_StopUserStatusNotifyRslt">CRVideo_StopUserStatusNotifyRslt</a></td>
            <td>
                关闭用户状态推送结果
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyUserStatus">CRVideo_NotifyUserStatus</a></td>
            <td>
                用户状态变化通知
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SendCmdRlst">CRVideo_SendCmdRlst</a></td>
            <td>
                发送小块数据
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SendBufferRlst">CRVideo_SendBufferRlst</a></td>
            <td>
                发送大块数据
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SendFileRlst">CRVideo_SendFileRlst</a></td>
            <td>
                发送文件
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SendProgress">CRVideo_SendProgress</a></td>
            <td>
                发送数据时，通知发送进度
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_CancelSendRlst">CRVideo_CancelSendRlst</a></td>
            <td>
                取消发送响应
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyCmdData">CRVideo_NotifyCmdData</a></td>
            <td>
                通知收到小块数据
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyBufferData">CRVideo_NotifyBufferData</a></td>
            <td>
                通知收到大块数据
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyFileData">CRVideo_NotifyFileData</a></td>
            <td>
                通知收到文件数据
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyCancelSend">CRVideo_NotifyCancelSend</a></td>
            <td>
                通知取消发送文件数据
            </td>
        </tr>
    </tbody>
</table>

<h3 id=invite>邀请</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr >
            <th style='width:70px;text-align:left'>
                方式
            </th>
            <th>
                接口
            </th>
            <th>
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=4>主调</td>
            <td><a href="#CRVideo_Invite">CRVideo_Invite</a></td>
            <td>
                发送邀请
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_AcceptInvite">CRVideo_AcceptInvite</a></td>
            <td>
                接受对方发送的邀请
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_RejectInvite">CRVideo_RejectInvite</a></td>
            <td>
                拒绝对方发送的邀请
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_CancelInvite">CRVideo_CancelInvite</a></td>
            <td>
                取消对方发送的邀请
            </td>
        </tr>
        <tr>
            <td rowspan=12>回调</td>
            <td><a href="#CRVideo_InviteSuccess">CRVideo_InviteSuccess</a></td>
            <td>
                发送邀请成功
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_InviteFail">CRVideo_InviteFail</a></td>
            <td>
                发送邀请失败
            </td>
        </tr>
       <tr>
            <td><a href="#CRVideo_CancelInviteSuccess">CRVideo_CancelInviteSuccess</a></td>
            <td>
                取消自己发送的邀请成功
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_CancelInviteFail">CRVideo_CancelInviteFail</a></td>
            <td>
                取消自己发送的邀请失败
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_AcceptInviteSuccess">CRVideo_AcceptInviteSuccess</a></td>
            <td>
                接受对方发送的邀请成功
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_AcceptInviteFail">CRVideo_AcceptInviteFail</a></td>
            <td>
                接受对方发送的邀请失败
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_RejectInviteSuccess">CRVideo_RejectInviteSuccess</a></td>
            <td>
                拒绝对方发送的邀请成功
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_RejectInviteFail">CRVideo_RejectInviteFail</a></td>
            <td>
                拒绝对方发送的邀请失败
            </td>
        </tr>
         <tr>
            <td><a href="#CRVideo_NotifyInviteIn">CRVideo_NotifyInviteIn</a></td>
            <td>
                通知有人邀请
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyInviteAccepted">CRVideo_NotifyInviteAccepted</a></td>
            <td>
                通知邀请被对方接受
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyInviteRejected">CRVideo_NotifyInviteRejected</a></td>
            <td>
                通知邀请被对方拒绝
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyInviteCanceled">CRVideo_NotifyInviteCanceled</a></td>
            <td>
                通知有邀请被取消
            </td>
        </tr>
    </tbody>
</table>

<h3 id=room>房间管理</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr >
            <th style='width:70px;text-align:left'>
                方式
            </th>
            <th>
                接口
            </th>
            <th>
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=4>主调</td>
            <td><a href="#CRVideo_CreateMeeting2">CRVideo_CreateMeeting2</a></td>
            <td>
                创建房间
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_DestroyMeeting">CRVideo_DestroyMeeting</a></td>
            <td>
                销毁房间
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetMeetings">CRVideo_GetMeetings</a></td>
            <td>
                获取房间列表
            </td>
        </tr>
         <tr>
            <td><a href="#CRVideo_GetMeetings2">CRVideo_GetMeetings2</a></td>
            <td>
                获取房间列表
            </td>
        </tr>
        <tr>
            <td rowspan=5>回调</td>
            <td><a href="#CRVideo_CreateMeetingSuccess">CRVideo_CreateMeetingSuccess</a></td>
            <td>
                创建房间成功
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_CreateMeetingFail">CRVideo_CreateMeetingFail</a></td>
            <td>
                创建房间失败
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_DestroyMeetingRslt">CRVideo_DestroyMeetingRslt</a></td>
            <td>
                销毁房间响应
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetMeetingsSuccess">CRVideo_GetMeetingsSuccess</a></td>
            <td>
                获取房间列表成功
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetMeetingsFail">CRVideo_GetMeetingsFail</a></td>
            <td>
                获取房间列表失败
            </td>
        </tr>
    </tbody>
</table>

<h3 id=http_component>Http文件管理组件</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr >
            <th style='width:70px;text-align:left'>
                方式
            </th>
            <th>
                接口
            </th>
            <th>
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=7>主调</td>
            <td><a href="#CRVideo_StartHttpMgr">CRVideo_StartHttpMgr</a></td>
            <td>
                开启http文档上传下载功能
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_StopHttpMgr">CRVideo_StopHttpMgr</a></td>
            <td>
                停止http文档上传下载功能
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetAllTransferInfos">CRVideo_GetAllTransferInfos</a></td>
            <td>
                获取所有本地上传、下载文件信息
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetTransferInfo">CRVideo_GetTransferInfo</a></td>
            <td>
                获取本地指定文件的上传、下载文件信息
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_StartTransferFile">CRVideo_StartTransferFile</a></td>
            <td>
                开始/取消传输文件
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_CancelFileTransfer">CRVideo_CancelFileTransfer</a></td>
            <td>
                取消传输
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_RmTransferInfo">CRVideo_RmTransferInfo</a></td>
            <td>
                 删除传输记录 
            </td>
        </tr>
        <tr>
            <td rowspan=5>回调</td>
            <td><a href="#CRVideo_FileStateChanged">CRVideo_FileStateChanged</a></td>
            <td>
                通知用户文件状态更改
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_FileProgress">CRVideo_FileProgress</a></td>
            <td>
                通知文件传输(上传/下载)进度
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_FileFinished">CRVideo_FileFinished</a></td>
            <td>
                通知用户文件传输结束
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_FileHttpRspHeader">CRVideo_FileHttpRspHeader</a></td>
            <td>
                通知http响应消息的header数据
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_FileHttpRspContent">CRVideo_FileHttpRspContent</a></td>
            <td>
                通知上传完成后，http的响应内容
            </td>
        </tr>
    </tbody>  
</table>

<h3 id=in_out_room>进出房间</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr >
            <th style='width:70px;text-align:left'>
                方式
            </th>
            <th>
                接口
            </th>
            <th>
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=4>主调</td>
            <td><a href="#CRVideo_EnterMeeting">CRVideo_EnterMeeting</a></td>
            <td>
                进入房间
            </td>
        </tr><tr>
            <td><a href="#CRVideo_StopMeeting">CRVideo_StopMeeting</a></td>
            <td>
                停止会议，离开房间
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_ExitMeeting">CRVideo_ExitMeeting</a></td>
            <td>
                退出会议，离开房间
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_Kickout">CRVideo_Kickout</a></td>
            <td>
                踢出房间，离开会议
            </td>
        </tr>
        <tr>
            <td rowspan=6>回调</td>
            <td><a href="#CRVideo_EnterMeetingRslt">CRVideo_EnterMeetingRslt</a></td>
            <td>
                进入房间结果
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_UserEnterMeeting">CRVideo_UserEnterMeeting</a></td>
            <td>
                有人进入房间通知
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_UserLeftMeeting">CRVideo_UserLeftMeeting</a></td>
            <td>
                有人离开房间通知
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_MeetingDropped">CRVideo_MeetingDropped</a></td>
            <td>
                掉线通知
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_MeetingStopped">CRVideo_MeetingStopped</a></td>
            <td>
                房间已被结束通知
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_KickoutRslt">CRVideo_KickoutRslt</a></td>
            <td>
                踢人结果
            </td>
        </tr>
    </tbody>
</table>

<h3 id=inroom_sync>房间内基础消息</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;word-wrap:break-word;'>
    <thead>
        <tr>
            <th style='width:70px;text-align:center'>
                方式
            </th>
            <th style='width:200px;text-align:center'>
                接口
            </th>
            <th style='width:300px;text-align:center'>
                描述
            </th>
        </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan=6>主调</td>
        <td><a href="#CRVideo_GetVideoWallMode2">CRVideo_GetVideoWallMode2</a></td>
        <td>
            获取视频墙当前分屏模式
        </td>
      </tr>
      <tr>
          <td><a href="#CRVideo_GetMainVideo">CRVideo_GetMainVideo</a></td>
          <td>
              获取当前哪个用户为主视频
          </td>
      </tr>
      <tr>
            <td><a href="#CRVideo_SetVideoWallMode2">CRVideo_SetVideoWallMode2</a></td>
            <td>
              设置视频墙分屏模式
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_Switchtopage">CRVideo_Switchtopage</a></td>
            <td>
                功能切换
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_Getcurrentmainpage">CRVideo_Getcurrentmainpage</a></td>
            <td>
                获取当前主功能区
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_Getcurrentsubpage">CRVideo_Getcurrentsubpage</a></td>
            <td>
                获取当前子页面
            </td>
        </tr>
        <tr>
          <td rowspan=4>回调</td>
            <td><a href="#CRVideo_NotifyVideoWallMode2">CRVideo_NotifyVideoWallMode2</a></td>
            <td>
                会话内视频分屏模式通知
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyMainVideoChanged">CRVideo_NotifyMainVideoChanged</a></td>
            <td>
                会话内主视频变化通知
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifySwitchToPage">CRVideo_NotifySwitchToPage</a></td>
            <td>
                会话内主功能页切换通知
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NetStateChanged">CRVideo_NetStateChanged</a></td>
            <td>
                通知我的网络变化
            </td>
        </tr>
    </tbody>
</table>



<h3 id=members>房间成员管理：</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr>
            <th style='width:70px;text-align:left'>
                方式
            </th>
            <th>
                接口
            </th> 
            <th>
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=5>主调</td>
            <td><a href="#CRVideo_GetAllMembers">CRVideo_GetAllMembers</a></td>
            <td>
                房间成员列表
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetMemberInfo">CRVideo_GetMemberInfo</a></td>
            <td>
                房间成员信息
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetMemberNickName">CRVideo_GetMemberNickName</a></td>
            <td>
                房间成员昵称
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_IsUserInMeeting">CRVideo_IsUserInMeeting</a></td>
            <td>
                用户是否在房间中
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetNickName">CRVideo_SetNickName</a></td>
            <td>
                设置某个用户的昵称
            </td>
        </tr>
        <tr>
            <td rowspan=2>回调</td>
            <td><a href="#CRVideo_SetNickNameRsp">CRVideo_SetNickNameRsp</a></td>
            <td>
                设置昵称结果
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyNickNameChanged">CRVideo_NotifyNickNameChanged</a></td>
            <td>
                昵称变化通知
            </td>
        </tr>
    </tbody>
</table>

<h3 id=meetingattrs>房间和成员自定义属性：</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr>
            <th style='width:70px;text-align:left'>
                方式
            </th>
            <th>
                接口
            </th> 
            <th>
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=13>主调</td>
            <td><a href="#CRVideo_GetMeetingAllAttrs">CRVideo_GetMeetingAllAttrs</a></td>
            <td>
                获取房间所有属性
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetMeetingAttrs">CRVideo_GetMeetingAttrs</a></td>
            <td>
                获取房间部分属性
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetMeetingAttrs">CRVideo_SetMeetingAttrs</a></td>
            <td>
                设置房间属性
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_AddOrUpdateMeetingAttrs">CRVideo_AddOrUpdateMeetingAttrs</a></td>
            <td>
                增加或者更新房间属性
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_DelMeetingAttrs">CRVideo_DelMeetingAttrs</a></td>
            <td>
                删除房间属性
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_ClearMeetingAttrs">CRVideo_ClearMeetingAttrs</a></td>
            <td>
                清除所有房间信息
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetUserAttrs">CRVideo_GetUserAttrs</a></td>
            <td>
                获取用户房间信息
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetUserAttrs">CRVideo_SetUserAttrs</a></td>
            <td>
                设置用户属性
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_AddOrUpdateUserAttrs">CRVideo_AddOrUpdateUserAttrs</a></td>
            <td>
                增加或更新用户属性
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_DelUserAttrs">CRVideo_DelUserAttrs</a></td>
            <td>
                删除用户的特定属性
            </td>
        </tr>
         <tr>
            <td><a href="#CRVideo_ClearAllUserAttrs">CRVideo_ClearAllUserAttrs</a></td>
            <td>
                清除所有用户属性
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_ClearUserAttrs">CRVideo_ClearUserAttrs</a></td>
            <td>
                清除特定用户属性
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SendMeetingCustomMsg">CRVideo_SendMeetingCustomMsg</a></td>
            <td>
                房间内发送广播消息
            </td>
        </tr>
        <tr>
            <td rowspan=18>回调</td>
            <td><a href="#CRVideo_GetMeetingAllAttrsSuccess">CRVideo_GetMeetingAllAttrsSuccess</a></td>
            <td>
                成功获取到房间所有属性
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetMeetingAllAttrsFail">CRVideo_GetMeetingAllAttrsFail</a></td>
            <td>
                获取房间属性失败
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetMeetingAttrsSuccess">CRVideo_GetMeetingAttrsSuccess</a></td>
            <td>
                获取房间指定属性成功
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetMeetingAttrsFail">CRVideo_GetMeetingAttrsFail</a></td>
            <td>
                获取房间指定属性失败
            </td>
        </tr>
         <tr>
            <td><a href="#CRVideo_SetMeetingAttrsRslt">CRVideo_SetMeetingAttrsRslt</a></td>
            <td>
                设置房间属性结果
            </td>
        </tr>
         <tr>
            <td><a href="#CRVideo_AddOrUpdateMeetingAttrsRslt">CRVideo_AddOrUpdateMeetingAttrsRslt</a></td>
            <td>
                增加或更新房间属性结果
            </td>
        </tr>
         <tr>
            <td><a href="#CRVideo_DelMeetingAttrsRslt">CRVideo_DelMeetingAttrsRslt</a></td>
            <td>
                删除房间属性结果
            </td>
        </tr>
         <tr>
            <td><a href="#CRVideo_ClearMeetingAttrsRslt">CRVideo_ClearMeetingAttrsRslt</a></td>
            <td>
                清除房间属性结果
            </td>
        </tr>
         <tr>
            <td><a href="#CRVideo_GetUserAttrsSuccess">CRVideo_GetUserAttrsSuccess</a></td>
            <td>
                获取房间内用户属性成功
            </td>
        </tr>
         <tr>
            <td><a href="#CRVideo_GetUserAttrsFail">CRVideo_GetUserAttrsFail</a></td>
            <td>
                获取房间内用户属性失败
            </td>
        </tr>
         <tr>
            <td><a href="#CRVideo_SetUserAttrsRslt">CRVideo_SetUserAttrsRslt</a></td>
            <td>
                设置用户属性结果
            </td>
        </tr>
         <tr>
            <td><a href="#CRVideo_AddOrUpdateUserAttrsRslt">CRVideo_AddOrUpdateUserAttrsRslt</a></td>
            <td>
                增加或者更新用户属性结果
            </td>
        </tr>
         <tr>
            <td><a href="#CRVideo_DelUserAttrsRslt">CRVideo_DelUserAttrsRslt</a></td>
            <td>
                删除特定用户属性结果
            </td>
        </tr>
         <tr>
            <td><a href="#CRVideo_ClearAllUserAttrsRslt">CRVideo_ClearAllUserAttrsRslt</a></td>
            <td>
                清除所有用户属性结果
            </td>
        </tr>
         <tr>
            <td><a href="#CRVideo_ClearUserAttrsRslt">CRVideo_ClearUserAttrsRslt</a></td>
            <td>
                清除特定用户属性结果
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyMeetingAttrsChanged">CRVideo_NotifyMeetingAttrsChanged</a></td>
            <td>
                房间属性发生改变
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SendMeetingCustomMsgRslt">CRVideo_SendMeetingCustomMsgRslt</a></td>
            <td>
                发送房间内用户广播结果
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyMeetingCustomMsg">CRVideo_NotifyMeetingCustomMsg</a></td>
            <td>
                接收到房间内用户自定义广播
            </td>
        </tr>
    </tbody>
</table>









<h3 id=audio>音频管理</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr >
            <th style='width:70px;text-align:left'>
                方式
            </th>
            <th>
                接口
            </th>
            <th>
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=19>主调</td>
            <td><a href="#CRVideo_GetAudioMicNames">CRVideo_GetAudioMicNames</a></td>
            <td>
                麦克风设备列表
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetAudioSpkNames">CRVideo_GetAudioSpkNames</a></td>
            <td>
                扬声器设备列表
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_StartGetAudioPCM">CRVideo_StartGetAudioPCM</a></td>
            <td>
                开始获取语音pcm数据
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_StopGetAudioPCM">CRVideo_StopGetAudioPCM</a></td>
            <td>
                停止获取语音pcm数据
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetAudioCfg">CRVideo_SetAudioCfg</a></td>
            <td>
                设置系统音频参数
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetAudioCfg">CRVideo_GetAudioCfg</a></td>
            <td>
                获取系统音频参数
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetMicEnergy">CRVideo_GetMicEnergy</a></td>
            <td>
                麦克风声音大小
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_OpenMic">CRVideo_OpenMic</a></td>
            <td>
                打开麦克风
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_CloseMic">CRVideo_CloseMic</a></td>
            <td>
                关闭麦克风
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetAudioStatus">CRVideo_GetAudioStatus</a></td>
            <td>
                获取麦克风状态
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetMicVolume">CRVideo_GetMicVolume</a></td>
            <td>
                获取麦克风音量
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetMicVolume">CRVideo_SetMicVolume</a></td>
            <td>
                设置麦克风音量
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetSpeakerVolume">CRVideo_GetSpeakerVolume</a></td>
            <td>
                获取扬声器音量
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetSpeakerVolume">CRVideo_SetSpeakerVolume</a></td>
            <td>
                设置扬声器音量
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetSpeakerMute">CRVideo_SetSpeakerMute</a></td>
            <td>
                设置扬声器是否静音
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetSpeakerMute">CRVideo_GetSpeakerMute</a></td>
            <td>
                获取扬声器是否静音
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetAllAudioClose">CRVideo_SetAllAudioClose</a></td>
            <td>
                关闭所有人麦克风
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetCustomAudioCapture">CRVideo_SetCustomAudioCapture</a></td>
            <td>
                自定义音频采集
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetCustomAudioPlayback">CRVideo_SetCustomAudioPlayback</a></td>
            <td>
                自定义音频播放
            </td>
        </tr>
        <tr>
            <td rowspan=4>回调</td>
            <td><a href="#CRVideo_AudioDevChanged">CRVideo_AudioDevChanged</a></td>
            <td>
                麦克风设备变化
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_AudioStatusChanged">CRVideo_AudioStatusChanged</a></td>
            <td>
                麦克风状态变化
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_MicEnergyUpdate">CRVideo_MicEnergyUpdate</a></td>
            <td>
                麦克风声音变化
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyAudioPCMDat">CRVideo_NotifyAudioPCMDat</a></td>
            <td>
                通知语音PCM数据
            </td>
        </tr>
    </tbody>
</table>

<h3 id=video>视频管理</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr >
            <th style='width:70px;text-align:left'>
                方式
            </th>
            <th>
                接口
            </th>
            <th>
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=30>主调</td>
            <td><a href="#inputCustomVideoDat2">inputCustomVideoDat2</a></td>
            <td>
                送入自定义摄像头数据
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetVideoCfg">CRVideo_GetVideoCfg</a></td>
            <td>
                获取视频参数
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetVideoCfg">CRVideo_SetVideoCfg</a></td>
            <td>
                设置视频参数
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetVideoStatus">CRVideo_GetVideoStatus</a></td>
            <td>
                获取视频状态
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetDefaultVideo">CRVideo_GetDefaultVideo</a></td>
            <td>
                获取默认摄像头ID
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetDefaultVideo">CRVideo_SetDefaultVideo</a></td>
            <td>
                设置默认摄像头
            </td>  
        </tr>
        <tr>
            <td><a href="#CRVideo_GetAllVideoInfo">CRVideo_GetAllVideoInfo</a></td>
            <td>
                获取摄像头设备列表
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetVideoDenoise">CRVideo_SetVideoDenoise</a></td>
            <td>
                开启或关闭摄像头降噪处理
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetVideoDenoise">CRVideo_GetVideoDenoise</a></td>
            <td>
                获取是否开启摄像头降噪
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_CreateScreenCamDev">CRVideo_CreateScreenCamDev</a></td>
            <td>
                创建桌面摄像头(sdk最大支持5个)
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_UpdateScreenCamDev">CRVideo_UpdateScreenCamDev</a></td>
            <td>
                更新桌面摄像头
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_DestroyScreenCamDev">CRVideo_DestroyScreenCamDev</a></td>
            <td>
                消毁桌面摄像头
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_CreateCustomVideoDev">CRVideo_CreateCustomVideoDev</a></td>
            <td>
                创建自定义摄像头(sdk最大支持5个)
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_DestroyCustomVideoDev">CRVideo_DestroyCustomVideoDev</a></td>
            <td>
                消毁自定义摄像头
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_InputCustomVideoDat">CRVideo_InputCustomVideoDat</a></td>
            <td>
                输入摄像头图像数据
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetWatchableVideos">CRVideo_GetWatchableVideos</a></td>
            <td>
                房间内可观看摄像头列表
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_OpenVideo">CRVideo_OpenVideo</a></td>
            <td>
                打开用户的摄像头
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_CloseVideo">CRVideo_CloseVideo</a></td>
            <td>
                关闭用户的摄像头
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetEnableMutiVideo">CRVideo_GetEnableMutiVideo</a></td>
            <td>
                获取是否启用多摄像头
            </td>
        </tr>
         <tr>
            <td><a href="#CRVideo_SetPicResource">CRVideo_SetPicResource</a></td>
            <td>
                添加图片资源
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetVideoImg">CRVideo_GetVideoImg</a></td>
            <td>
                摄像头图像数据
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_ShowVideoAdvCfgDlg">CRVideo_ShowVideoAdvCfgDlg</a></td>
            <td>
            调出摄像头驱动的高级配置（只对真实物理摄像头有效）
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetLocVideoAttributes">CRVideo_SetLocVideoAttributes</a></td>
            <td>
            视频设备私有参数配置
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetLocVideoAttributes">CRVideo_GetLocVideoAttributes</a></td>
            <td>
            获取某个摄像头私有参数
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetEnableMutiVideo">CRVideo_SetEnableMutiVideo</a></td>
            <td>
            设置用户是否启用多摄像头
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_AddIPCam">CRVideo_AddIPCam</a></td>
            <td>
                添加网络摄像头
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_DelIPCam">CRVideo_DelIPCam</a></td>
            <td>
                移除网络摄像头
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_BSupportVirtualBackground">CRVideo_BSupportVirtualBackground</a></td>
            <td>
                检查是否支持对应虚拟背景功能
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetVirtualBackground">CRVideo_SetVirtualBackground</a></td>
            <td>
                配置虚拟背景参数
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetVirtualBackground">CRVideo_GetVirtualBackground</a></td>
            <td>
                获取虚拟背景参数
            </td>
        </tr>
        <tr>
            <td rowspan=4>
                回调
            </td>
            <td>
                <a href="#CRVideo_OpenVideoDevRslt">CRVideo_OpenVideoDevRslt</a>
            </td>
            <td>
                SDK通知打开摄像头结果
            </td>
        </tr>
        <tr>
            <td>
                <a href="#CRVideo_VideoDevChanged">CRVideo_VideoDevChanged</a>
            </td>
            <td>
                SDK通知用户的视频设备有变化
            </td>
        </tr>
        <tr>
            <td>
                <a href="#CRVideo_DefVideoChanged">CRVideo_DefVideoChanged</a>
            </td>
            <td>
                SDK通知用户的视频默认设备有变化
            </td>
        </tr>
        <tr>
            <td>
                <a href="#CRVideo_VideoStatusChanged">CRVideo_VideoStatusChanged</a>
            </td>
            <td>
                视频状态变化
            </td>
        </tr>
    </tbody>
</table>




<h3 id=starshare>屏幕共享 </h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr >
            <th style='width:70px;text-align:left'>
                方式
            </th>
            <th>
                接口
            </th>
            <th>
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=13>主调</td>
            <td><a href="#CRVideo_GetScreenShareCfg">CRVideo_GetScreenShareCfg</a></td>
            <td>
                获取屏幕共享配置
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetScreenShareCfg">CRVideo_SetScreenShareCfg</a></td>
            <td>
                设置屏幕共享配置
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_StartScreenShare">CRVideo_StartScreenShare</a></td>
            <td>
                开启屏幕共享
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_StopScreenShare">CRVideo_StopScreenShare</a></td>
            <td>
                停止屏幕共享
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_RequestShare">CRVideo_RequestShare</a></td>
            <td>
                请求某人开启屏幕共享
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_CancelShareRequestion">CRVideo_CancelShareRequestion</a></td>
            <td>
                取消屏幕共享请求
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_RejectShareRequestion">CRVideo_RejectShareRequestion</a></td>
            <td>
                拒绝分享请求
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetShareScreenDecodeImg">CRVideo_GetShareScreenDecodeImg</a></td>
            <td>
                屏幕共享图像数据
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetCustomizeScreenImg">CRVideo_SetCustomizeScreenImg</a></td>
            <td>
                自定义的抓屏图像数据
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GiveCtrlRight">CRVideo_GiveCtrlRight</a></td>
            <td>
                赋予控制权限
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_ReleaseCtrlRight">CRVideo_ReleaseCtrlRight</a></td>
            <td>
                收回控制权限
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SendMouseCtrlMsg">CRVideo_SendMouseCtrlMsg</a></td>
            <td>
                发送鼠标控制消息
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SendKeyCtrlMsg">CRVideo_SendKeyCtrlMsg</a></td>
            <td>
                发送键盘控制消息
            </td>
        </tr>
        <tr>
            <td rowspan=9>
                回调
            </td>
            <td>
                <a href="#CRVideo_StartScreenShareRslt">CRVideo_StartScreenShareRslt</a>
            <td>
                开启屏幕共享的响应事件
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_StopScreenShareRslt">CRVideo_StopScreenShareRslt</a></td>
            <td>
                停止屏幕共享的响应事件
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyScreenShareStarted">CRVideo_NotifyScreenShareStarted</a></td>
            <td>
                收到他人开启了屏幕共享的通知
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyScreenShareStopped">CRVideo_NotifyScreenShareStopped</a></td>
            <td>
                收到他人停止了屏幕共享的通知
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyGiveCtrlRight">CRVideo_NotifyGiveCtrlRight</a></td>
            <td>
                SDK通知远程控制权限给予了他人
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyReleaseCtrlRight">CRVideo_NotifyReleaseCtrlRight</a></td>
            <td>
                SDK通知他人收回屏幕共享操作权限
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyRequestShare">CRVideo_NotifyRequestShare</a></td>
            <td>
                请求屏幕共享通知
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyCancelShareRequestion">CRVideo_NotifyCancelShareRequestion</a></td>
            <td>
                取消屏幕共享请求通知
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyRejectShareRequestion">CRVideo_NotifyRejectShareRequestion</a></td>
            <td>
                拒绝屏幕共享请求通知
            </td>
        </tr>
    </tbody>
</table>


<h3 id=media>影音共享</h3>


<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr >
            <th style='width:70px;text-align:left'>
                方式
            </th>
            <th>
                接口
            </th>
            <th>
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=9>主调</td>
            <td><a href="#CRVideo_StartPlayMedia">CRVideo_StartPlayMedia</a></td>
            <td>
                开始播放影音
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_PausePlayMedia">CRVideo_PausePlayMedia</a></td>
            <td>
                暂停或恢复播放影音
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_StopPlayMedia">CRVideo_StopPlayMedia</a></td>
            <td>
                停止播放影音
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetMediaplaypos">CRVideo_SetMediaplaypos</a></td>
            <td>
                设置播放进度
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetMediacfg">CRVideo_SetMediacfg</a></td>
            <td>
                配置远程影音共享时，图像质量参数
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetMediacfg">CRVideo_GetMediacfg</a></td>
            <td>
                获取影音共享的图像质量参数
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetAllFilesInMediaPath">CRVideo_GetAllFilesInMediaPath</a></td>
            <td>
                影音文件列表
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_Getmediainfo">CRVideo_Getmediainfo</a></td>
            <td>
                影音播放信息
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_Getmediaimg">CRVideo_Getmediaimg</a></td>
            <td>
                获取影音图像数据
            </td>
        </tr>
        <tr>
            <td rowspan=5>回调</td>
            <td><a href="#CRVideo_NotifyMediaOpened">CRVideo_NotifyMediaOpened</a></td>
            <td>
                通知影音文件打开
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyMediaStart">CRVideo_NotifyMediaStart</a></td>
            <td>
                通知影音开始播放
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyMediaStop">CRVideo_NotifyMediaStop</a></td>
            <td>
                通知影音播放停止
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyMediaPause">CRVideo_NotifyMediaPause</a></td>
            <td>
                通知影音播放是否暂停
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyPlayPosSetted">CRVideo_NotifyPlayPosSetted</a></td>
            <td>
                通知更新影音播放进度
            </td>
        </tr>
    </tbody>
</table>

<h3 id=record>本地录制/本地直播</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr >
            <th style='width:70px;text-align:left'>
                方式
            </th>
            <th>
                接口
            </th>
            <th>
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=18>主调</td>
            <td><a href="#CRVideo_CreateLocMixer">CRVideo_CreateLocMixer</a></td>
            <td>
                创建本地混图器
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_UpdateLocMixerContent">CRVideo_UpdateLocMixerContent</a></td>
            <td>
                更新本地混图器内容
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_DestroyLocMixer">CRVideo_DestroyLocMixer</a></td>
            <td>
                消毁本地混图器
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetLocMixerState">CRVideo_GetLocMixerState</a></td>
            <td>
                获取本地混图器状态
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_AddLocMixerOutput">CRVideo_AddLocMixerOutput</a></td>
            <td>
                开启本地录制、直播推流
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_RmLocMixerOutput">CRVideo_RmLocMixerOutput</a></td>
            <td>
                停止本地录制、直播推流
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetAllRecordFiles">CRVideo_GetAllRecordFiles</a></td>
            <td>
                录制文件列表
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_CancelUploadRecordFile">CRVideo_CancelUploadRecordFile</a></td>
            <td>
                取消上传录像文件
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_UploadRecordFile">CRVideo_UploadRecordFile</a></td>
            <td>
                上传录像文件
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_PlaybackRecordFile">CRVideo_PlaybackRecordFile</a></td>
            <td>
                回放录制文件
            </td>
        </tr>
                <tr>
            <td><a href="#CRVideo_AddFileToRecordMgr">CRVideo_AddFileToRecordMgr</a></td>
            <td>
                添加本地文件到录制文件管理中
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_RemoveFromRecordMgr">CRVideo_RemoveFromRecordMgr</a></td>
            <td>
                从录制管理器删除文件
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_UploadRecordFile2">CRVideo_UploadRecordFile2</a></td>
            <td>
                上传录像文件
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetRecordFileInfo">CRVideo_GetRecordFileInfo</a></td>
            <td>
                获取录制文件信息
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetMarkText">CRVideo_SetMarkText</a></td>
            <td>
                添加打点信息
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_RemoveMarkText">CRVideo_RemoveMarkText</a></td>
            <td>
              移除打点信息
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetAllMarks">CRVideo_GetAllMarks</a></td>
            <td>
                获取所有打点信息
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetVideoMarkFile">CRVideo_GetVideoMarkFile</a></td>
            <td>
                获取打点文件的绝对文件路径名
            </td>
        </tr>
        <tr>
            <td rowspan=5>
                回调
            </td>
            <td>
                <a href="#CRVideo_LocMixerStateChanged">CRVideo_LocMixerStateChanged</a>
            <td>
                本地录制、本地直播状态变化通知
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_LocMixerOutputInfo">CRVideo_LocMixerOutputInfo</a></td>
            <td>
                本地录制文件、本地直播信息通知
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyRecordFileStateChanged">CRVideo_NotifyRecordFileStateChanged</a></td>
            <td>
                通知录制文件状态更改
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyRecordFileUploadProgress">CRVideo_NotifyRecordFileUploadProgress</a></td>
            <td>
                通知上传录制文件进度
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_UploadRecordFileErr">CRVideo_UploadRecordFileErr</a></td>
            <td>
                录制文件上传错误
            </td>
        </tr>
    </tbody>
</table>


<h3 id=cloud>云端录制/互动直播</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr >
            <th style='width:70px;text-align:left'>
                方式
            </th>
            <th>
                接口
            </th>
            <th>
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=4>主调</td>
            <td><a href="#CRVideo_StartSvrMixer">CRVideo_StartSvrMixer</a></td>
            <td>
                开始云端录制、云端直播
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_UpdateSvrMixerContent">CRVideo_UpdateSvrMixerContent</a></td>
            <td>
                更新云端录制、云端直播内容
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_StopSvrMixer">CRVideo_StopSvrMixer</a></td>
            <td>
                停止云端录制、云端直播
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetSvrMixerState">CRVideo_GetSvrMixerState</a></td>
            <td>
                获取云端录制、云端直播状态
            </td>
        </tr>
        <tr>
            <td rowspan=4>
                回调
            </td>
            <td>
                <a href="#CRVideo_SvrMixerStateChanged">CRVideo_SvrMixerStateChanged</a>
            <td>
                云端录制、云端直播状态变化通知
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_StartSvrMixerFailed">CRVideo_StartSvrMixerFailed</a></td>
            <td>
                通知开启云端录制失败
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SvrMixerCfgChanged">CRVideo_SvrMixerCfgChanged</a></td>
            <td>
                云端录制、云端直播内容变化通知
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SvrMixerOutputInfo">CRVideo_SvrMixerOutputInfo</a></td>
            <td>
                云端录制文件、云端直播信息变化通知
            </td>
        </tr>
    </tbody>
</table>

<h3 id=board>电子白板/文档共享</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr >
            <th style='width:70px;text-align:left'>
                方式
            </th>
            <th>
                接口
            </th>
            <th>
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=16>主调</td>
            <td><a href="#CRVideo_Createboard">CRVideo_Createboard</a></td>
            <td>
                创建白板
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_Closeboard">CRVideo_Closeboard</a></td>
            <td>
                关闭白板
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_InitBoardPageDat">CRVideo_InitBoardPageDat</a></td>
            <td>
                初始化白板图元数据
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_CreateElementID">CRVideo_CreateElementID</a></td>
            <td>
                生成白板图元ID
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_Addboardelement">CRVideo_Addboardelement</a></td>
            <td>
                添加图元信息
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_ModifyBoardElement">CRVideo_ModifyBoardElement</a></td>
            <td>
                修改图元信息
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_Delboardelement">CRVideo_Delboardelement</a></td>
            <td>
                删除图元
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_Setmousehotspot">CRVideo_Setmousehotspot</a></td>
            <td>
                设置白板鼠标热点
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_SetBoardCurPageNo">CRVideo_SetBoardCurPageNo</a></td>
            <td>
                白板翻页
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_ListNetDiskDocFile">CRVideo_ListNetDiskDocFile</a></td>
            <td>
                查询文档列表
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_UploadDocFileToNetDisk">CRVideo_UploadDocFileToNetDisk</a></td>
            <td>
                上传文档并转换
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_DownloadDocSrcFile">CRVideo_DownloadDocSrcFile</a></td>
            <td>
                下载源始文档
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_CancelTransforNetDiskDocFile">CRVideo_CancelTransforNetDiskDocFile</a></td>
            <td>
                取消文档传输
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_DeleteNetDiskDocFile">CRVideo_DeleteNetDiskDocFile</a></td>
            <td>
                删除文档
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetNetDiskDocFilePageInfo">CRVideo_GetNetDiskDocFilePageInfo</a></td>
            <td>
                获取文档的转换信息
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_DownloadNetDiskDocFilePage">CRVideo_DownloadNetDiskDocFilePage</a></td>
            <td>
                下载文档转换后的页文件
            </td>
        </tr>
        <tr>
            <td rowspan=17>
                回调
            </td>
            <td>
                <a href="#CRVideo_NotifyInitBoards">CRVideo_NotifyInitBoards</a>
            <td>
                通知初始化电子白板列表
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyInitBoardPageDat">CRVideo_NotifyInitBoardPageDat</a></td>
            <td>
                通知初始化白板内图元数据
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyCreateBoard">CRVideo_NotifyCreateBoard</a></td>
            <td>
                通知创建白板
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyCloseBoard">CRVideo_NotifyCloseBoard</a></td>
            <td>
                通知关闭白板
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyBoardBkImage">CRVideo_NotifyBoardBkImage</a></td>
            <td>
                通知白板背景
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyAddBoardElement">CRVideo_NotifyAddBoardElement</a></td>
            <td>
                通知添加图元信息
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyModifyBoardElement">CRVideo_NotifyModifyBoardElement</a></td>
            <td>
                通知图元信息被修改
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyDelBoardElement">CRVideo_NotifyDelBoardElement</a></td>
            <td>
                通知删除图元
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyMouseHotSpot">CRVideo_NotifyMouseHotSpot</a></td>
            <td>
                通知白板鼠标热点
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyBoardCurPageNo">CRVideo_NotifyBoardCurPageNo</a></td>
            <td>
                通知白板翻页
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_UndoEnableChange">CRVideo_UndoEnableChange</a></td>
            <td>
                通知白板的“撤消”功能是否可用
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_RedoEnableChange">CRVideo_RedoEnableChange</a></td>
            <td>
                通知白板的“恢复”功能是否可用
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_ListNetDiskDocFileRslt">CRVideo_ListNetDiskDocFileRslt</a></td>
            <td>
                通知查询文档列表结果
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_GetNetDiskDocFilePageInfoRslt">CRVideo_GetNetDiskDocFilePageInfoRslt</a></td>
            <td>
                通知查询文档转换结果
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_DeleteNetDiskDocFileRslt">CRVideo_DeleteNetDiskDocFileRslt</a></td>
            <td>
                通知删除文档结果
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyNetDiskDocFileTrsfProgress">CRVideo_NotifyNetDiskDocFileTrsfProgress</a></td>
            <td>
                通知文档传输进度
            </td>
        </tr>
        <tr>
            <td><a href="#CRVideo_NotifyNetDiskIsFull">CRVideo_NotifyNetDiskIsFull</a></td>
            <td>
                通知网盘空间已满
            </td>
        </tr>
    </tbody>
</table>



<h3 id=visualization>可视化组件：</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr>
            <th style='width:170px;text-align: center;'>
                模块
            </th>
            <th style='width:60px;text-align: center;'>
                方式
            </th>
            <th class=customClass>
                接口
            </th> 
            <th>
                描述
            </th>
        </tr>
    </thead>
    <tbody>
         <tr>
            <td rowspan=19><a href="#CRVideo_CreatMediaObj">影音共享UI显示组件</a></td>
            <td  rowspan=19>主调</td>
            <td>
                <a href="#CRVideo_CreatMediaObj">CRVideo_CreatMediaObj</a>
            </td>
            <td>
                创建media对象
            </td>
        </tr>
        <tr>
            <td>disableToolBar</td>
            <!-- <td><a href="#disableToolBar">disableToolBar</a></td> -->
            <td>
                工具条是否可用
            </td>
        </tr>
        <tr>
            <td>shows</td>
            <!-- <td><a href="#shows">shows</a></td> -->
            <td>
                UI组件的显示
            </td>
        </tr>
        <tr>
            <td>hidden</td>
            <!-- <td><a href="#hidden">hidden</a></td> -->
            <td>
                 UI组件的隐藏
            </td>
        </tr>
        <tr>
            <td>handler</td>
            <!-- <td><a href="#handler">handler</a></td> -->
            <td>
                 object对象
            </td>
        </tr>
        <tr>
            <td>style</td>
            <!-- <td><a href="#style">style</a></td> -->
            <td>
                UI组件的样式
            </td>
        </tr>    
        <tr>
            <td>width</td>
            <!-- <td><a href="#width">width</a></td> -->
            <td>
                 UI组件的宽度
            </td>
        </tr>  
        <tr>
            <td>height</td>
            <!-- <td><a href="#height">height</a></td> -->
            <td>
                UI组件的高度
            </td>
        </tr>
        <tr>
            <td>id</td>
            <!-- <td><a href="#id">id</a></td> -->
            <td>
                id
            </td>
        </tr>      
        <tr>
            <td>keepAspectRatio</td>
            <!-- <td><a href="#keepAspectRatio">keepAspectRatio</a></td> -->
            <td>
               绘制模式，是否拉伸绘制
            </td>
        </tr>      
        <tr>
            <td>dblClickFullScreen</td>
            <!-- <td><a href="#dblClickFullScreen">dblClickFullScreen</a></td> -->
            <td>
                设置是否支持双击全屏,默认不支持双击全屏
            </td>
        </tr>      
        <tr>
            <td>savePicToBase64</td>
            <!-- <td><a href="#savePicToBase64">savePicToBase64</a></td> -->
            <td>
                保存播放影音画面到图片文件
            </td>
        </tr>      
        <tr>
            <td>savePicToFile</td>
            <!-- <td><a href="#savePicToFile">savePicToFile</a></td> -->
            <td>
                保存播放影音画面到图片文件
            </td>
        </tr>      
        <tr>
            <td>setToolBarUIElementVisible</td>
            <!-- <td><a href="#setToolBarUIElementVisible">setToolBarUIElementVisible</a></td> -->
            <td>
                显示隐藏播放工具条上的界面元素
            </td>
        </tr>      
        <tr>
            <td>setToolBarSize</td>
            <!-- <td><a href="#setToolBarSize">setToolBarSize</a></td> -->
            <td>
                设置工具条的高度
            </td>
        </tr>
        <tr>
            <td>disableChangePlayPos</td>
            <!-- <td><a href="#disableChangePlayPos">disableChangePlayPos</a></td> -->
            <td>
                禁止调整播放位置
            </td>
        </tr>            
        <tr>
            <td>setFullScreen</td>
            <!-- <td><a href="#setFullScreen">setFullScreen</a></td> -->
            <td>
                设置全屏
            </td>
        </tr>    
        <tr>
            <td>getFullScreen</td>
            <!-- <td><a href="#getFullScreen">getFullScreen</a></td> -->
            <td>
                 获取全屏
            </td>
        </tr>
        <tr>
            <td>setScaleType</td>
            <td>
                设置图像显示模式
            </td>
        </tr>    
        <tr>
            <td rowspan=18><a href="#CRVideo_CreatScreenShareObj">屏幕共享UI显示组件</a></td>
            <td  rowspan=18>主调</td>
            <td>               
                <a href="#CRVideo_CreatScreenShareObj">CRVideo_CreatScreenShareObj</a>
            </td>
            <td>
                创建screenShare对象
            </td>
        </tr>
        <tr>
            <td>clear</td>
            <!-- <td><a href="#clear">clear</a></td> -->
            <td>
                清空缓存的图像
            </td>
        </tr>
        <tr>
            <td>ctrlOpen</td>
            <!-- <td><a href="#ctrlOpen">ctrlOpen</a></td> -->
            <td>
                开启控制模式
            </td>
        </tr>
        <tr>
            <td>disableFloatToolbar</td>
            <!-- <td><a href="#disableFloatToolbar">disableFloatToolbar</a></td> -->
            <td>
                禁止出现浮动工具条
            </td>
        </tr>
        <tr>
            <td>isCursorInUI</td>
            <!-- <td><a href="#isCursorInUI">isCursorInUI</a></td> -->
            <td>
                鼠标是否在屏幕共享显示控件上
            </td>
        </tr>
        <tr>
            <td>getCursorPosInRemote</td>
            <!-- <td><a href="#getCursorPosInRemote">getCursorPosInRemote</a></td> -->
            <td>
                鼠标在本地的屏幕共享UI控件上时，鼠标位置映射到远端的屏幕上的坐标
            </td>
        </tr>
        <tr>
            <td>getPicWidth</td>
            <!-- <td><a href="#getPicWidth">getPicWidth</a></td> -->
            <td>
                获取远端屏幕的实际宽度
            </td>
        </tr>
        <tr>
            <td>getPicHeight</td>
            <!-- <td><a href="#getPicHeight">getPicHeight</a></td> -->
            <td>
                获取远端屏幕的实际高度
            </td>
        </tr>
        <tr>
            <td>enableMarked</td>
            <!-- <td><a href="#enableMarked">enableMarked</a></td> -->
            <td>
                开启标注模式
            </td>
        </tr>      
        <tr>
            <td>isPicEmpty</td>
            <!-- <td><a href="#isPicEmpty">isPicEmpty</a></td> -->
            <td>
                 检查图像是否为空
            </td>
        </tr>      
        <tr>
            <td>keepAspectRatio</td>
            <!-- <td><a href="#keepAspectRatio">keepAspectRatio</a></td> -->
            <td>
                绘制模式，是否拉伸绘制
            </td>
        </tr>      
        <tr>
            <td>savePic</td>
            <!-- <td><a href="#savePic">savePic</a></td> -->
            <td>
                拍照
            </td>
        </tr>      
        <tr>
            <td>setPenStyle</td>
            <!-- <td><a href="#setPenStyle">setPenStyle</a></td> -->
            <td>
                设置标注画笔样式
            </td>
        </tr>      
        <tr>
            <td>setFullScreen</td>
            <!-- <td><a href="#setFullScreen">setFullScreen</a></td> -->
            <td>
                设置全屏
            </td>
        </tr>      
        <tr>
            <td>getFullScreen</td>
            <!-- <td><a href="#getFullScreen">getFullScreen</a></td> -->
            <td>
                 获取全屏
            </td>
        </tr>      
        <tr>
            <td>setDblClickFullScreen</td>
            <!-- <td><a href="#setDblClickFullScreen">setDblClickFullScreen</a></td> -->
            <td>
                配置是否允许双击全屏
            </td>
        </tr>      
        <tr>
            <td>getDblClickFullScreen</td>
            <!-- <td><a href="#getDblClickFullScreen">getDblClickFullScreen</a></td> -->
            <td>
                获取是否允许双击全屏
            </td>
        </tr>
        <tr>
            <td>setScaleType</td>
            <td>
                设置图像显示模式
            </td>
        </tr>
        <tr>
            <td rowspan=28><a href="#CRVideo_CreatVideoObj">成员视频UI显示组件</a></td>
            <td  rowspan=28>主调</td>
            <td>
                <a href="#CRVideo_CreatVideoObj">CRVideo_CreatVideoObj</a>
            </td>
            <td>
                创建video对象
            </td>
        </tr>
        <tr>
            <td>clear</td>
            <!-- <td><a href="#clear">clear</a></td> -->
            <td>
                object对象
            </td>
        </tr>
        <tr>
            <td>getVideoID</td>
            <!-- <td><a href="#getVideoID">getVideoID</a></td> -->
            <td>
                获取当前显示的用户的视频设备
            </td>
        </tr>
        <tr>
            <td>setVisibleNickName</td>
            <!-- <td><a href="#setVisibleNickName">setVisibleNickName</a></td> -->
            <td>
                设置是否显示昵称
            </td>
        </tr>
        <tr>
            <td>getVisibleNickName</td>
            <!-- <td><a href="#getVisibleNickName">getVisibleNickName</a></td> -->
            <td>
                获取是否显示昵称
            </td>
        </tr>
        <tr>
            <td>handler</td>
            <!-- <td><a href="#handler">handler</a></td> -->
            <td>
                object对象
            </td>
        </tr>
        <tr>
            <td>style</td>
            <!-- <td><a href="#style">style</a></td> -->
            <td>
                成员视频UI显示组件的样式
            </td>
        </tr>
        <tr>
            <td>width</td>
            <!-- <td><a href="#width">width</a></td> -->
            <td>
                成员视频UI显示组件宽度
            </td>
        </tr>
        <tr>
            <td>height</td>
            <!-- <td><a href="#height">height</a></td> -->
            <td>
                成员视频UI组件的高度
            </td>
        </tr>
        <tr>
            <td>id</td>
            <!-- <td><a href="#id">id</a></td> -->
            <td>
                id
            </td>
        </tr>
        <tr>
            <td>isPicEmpty</td>
            <!-- <td><a href="#isPicEmpty">isPicEmpty</a></td> -->
            <td>
                检查图像是否为空
            </td>
        </tr>
        <tr>
            <td>getPicFrameTime</td>
            <!-- <td><a href="#getPicFrameTime">getPicFrameTime</a></td> -->
            <td>
                获取图像时间戳
            </td>
        </tr>
        <tr>
            <td>keepAspectRatio</td>
            <!-- <td><a href="#keepAspectRatio">keepAspectRatio</a></td> -->
            <td>
                设置显示的视频画面是否保持比例
            </td>
        </tr>
        <tr>
            <td>dblClickFullScreen</td>
            <!-- <td><a href="#dblClickFullScreen">dblClickFullScreen</a></td> -->
            <td>
                设置是否支持双击全屏,默认不支持双击全屏
            </td>
        </tr>
        <tr>
            <td>savePic</td>
            <!-- <td><a href="#savePic">savePic</a></td> -->
            <td>
                拍照
            </td>
        </tr>
        <tr>
            <td>pathFileName</td>
            <!-- <td><a href="#pathFileName">pathFileName</a></td> -->
            <td>
                本地绝对路径文件名(支持格式：bmp, png, gif, jpg, jpeg)
            </td>
        </tr>
        <tr>
            <td>setSavePicRect</td>
            <!-- <td><a href="#setSavePicRect">setSavePicRect</a></td> -->
            <td>
                设置拍照区域
            </td>
        </tr>
        <tr>
            <td>getPicWidth</td>
            <!-- <td><a href="#getPicWidth">getPicWidth</a></td> -->
            <td>
                获取图像宽
            </td>
        </tr>
        <tr>
            <td>getPicHeight</td>
            <!-- <td><a href="#getPicHeight">getPicHeight</a></td> -->
            <td>
                获取图像高
            </td>
        </tr>
        <tr>
            <td>setFullScreen</td>
            <!-- <td><a href="#setFullScreen">setFullScreen</a></td> -->
            <td>
                设置全屏
            </td>
        </tr>
        <tr>
            <td>getFullScreen</td>
            <!-- <td><a href="#getFullScreen">getFullScreen</a></td> -->
            <td>
                获取全屏
            </td>
        </tr>
        <tr>
            <td>setVideo</td>
            <!-- <td><a href="#setVideo">setVideo</a></td> -->
            <td>
                设置显示的目标用户视频
            </td>
        </tr>
        <tr>
            <td>setVideo2</td>
            <!-- <td><a href="#setVideo2">setVideo2</a></td> -->
            <td>
                设置显示目标用户的第2、第3档视频
            </td>
        </tr>
        <tr>
            <td>getQualityLv</td>
            <!-- <td><a href="#getQualityLv">getQualityLv</a></td> -->
            <td>
                获取当前显示的视频档位
            </td>
        </tr>
        <tr>
            <td>setMaskPic</td>
            <!-- <td><a href="#setMaskPic">setMaskPic</a></td> -->
            <td>
                在视频窗口上显示一个遮罩图片
            </td>
        </tr>
        <tr>
            <td>shows</td>
            <!-- <td><a href="#shows">shows</a></td> -->
            <td>
                成员视频UI显示组件显示
            </td>
        </tr>
        <tr>
            <td>hidden</td>
            <!-- <td><a href="#hidden">hidden</a></td> -->
            <td>
                成员视频UI显示组件的隐藏
            </td>
        </tr>
        <tr>
            <td>setScaleType</td>
            <td>
                设置图像显示模式
            </td>
        </tr>    
          <tr>
            <td rowspan=20><a href="#BoardContainer">白板显示UI显示组件</a></td>
            <td  rowspan=20>主调</td>
            <td>
                <a href="#BoardContainer">CRVideo_CreatBoardObj</a>
            </td>
            <td>
                创建board对象
            </td>
        </tr>
        <tr>
            <td>id</td>
            <!-- <td><a href="#id">id</a></td> -->
            <td>
                id
            </td>
        </tr>
        <tr>
            <td>width</td>
            <!-- <td><a href="#width">width</a></td> -->
            <td>
                白板显示UI显示组件宽度
            </td>
        </tr>
        <tr>
            <td>height</td>
            <!-- <td><a href="#height">height</a></td> -->
            <td>
                白板显示UI显示组件高度
            </td>
        </tr>
        <tr>
            <td>getBoardIDs</td>
            <!-- <td><a href="#getBoardIDs">getBoardIDs</a></td> -->
            <td>
                获取当前房间内的所有白板ID
            </td>
        </tr>
        <tr>
            <td>getBoardInfo</td>
            <!-- <td><a href="#getBoardInfo">getBoardInfo</a></td> -->
            <td>
                获取指定白板的信息
            </td>
        </tr>
        <tr>
            <td>getCurBoardID</td>
            <!-- <td><a href="#getCurBoardID">getCurBoardID</a></td> -->
            <td>
                获取当前显示的白板
            </td>
        </tr>
        <tr>
            <td>getCurPageNo</td>
            <!-- <td><a href="#getCurPageNo">getCurPageNo</a></td> -->
            <td>
                获取当前白板的当前页
            </td>
        </tr>
        <tr>
            <td>setCurBoard</td>
            <!-- <td><a href="#setCurBoard">setCurBoard</a></td> -->
            <td>
                设置当前白板
            </td>
        </tr>
        <tr>
            <td>undo</td>
            <!-- <td><a href="#undo">undo</a></td> -->
            <td>
                撤消我的最后一个标注
            </td>
        </tr>
        <tr>
            <td>redo</td>
            <!-- <td><a href="#redo">redo</a></td> -->
            <td>
                恢复我的最后一次撤消
            </td>
        </tr>
        <tr>
            <td>clear</td>
            <!-- <td><a href="#clear">clear</a></td> -->
            <td>
                清空当前白板所有标注(清空操作不能再恢复）
            </td>
        </tr>
        <tr>
            <td>isScaledContents</td>
            <!-- <td><a href="#isScaledContents">isScaledContents</a></td> -->
            <td>
                获取白板当前的缩放模式，缩放模式下内容将被缩小或放大以填充有效区域，非缩放模式下图像将按原始尺寸显示并可能出现滚动条
            </td>
        </tr>
        <tr>
            <td>setScaledContents</td>
            <!-- <td><a href="#setScaledContents">setScaledContents</a></td> -->
            <td>
                设置白板的缩放模式
            </td>
        </tr>
        <tr>
            <td>setColor</td>
            <!-- <td><a href="#setColor">setColor</a></td> -->
            <td>
                设置画笔颜色
            </td>
        </tr>
        <tr>
            <td>getColor</td>
            <!-- <td><a href="#getColor">getColor</a></td> -->
            <td>
                获取当前画笔颜色
            </td>
        </tr>
        <tr>
            <td>setLineWidth</td>
            <!-- <td><a href="#setLineWidth">setLineWidth</a></td> -->
            <td>
                设置画笔粗细
            </td>
        </tr>
        <tr>
            <td>getLineWidth</td>
            <!-- <td><a href="#getLineWidth">getLineWidth</a></td> -->
            <td>
                获取当前画笔宽带
            </td>
        </tr>
        <tr>
            <td>setReadOnly</td>
            <!-- <td><a href="#setReadOnly">setReadOnly</a></td> -->
            <td>
                设置白板本地只读（本地禁止标注，其他端不受影响）
            </td>
        </tr>
        <tr>
            <td>isReadOnly</td>
            <!-- <td><a href="#isReadOnly">isReadOnly</a></td> -->
            <td>
                获取白板本地只读配置
            </td>
        </tr>
    </tbody>
</table>


## 接口详情

<h3 id=CRVideo_GetSDKJsVersion>CRVideo_GetSDKJsVersion()</h3>

- **功能**: 获取Web	js版本号

- **返回值**:云屋SDK js的版本号(string)

<h3 id=CRVideo_PluginVersion>CRVideo_PluginVersion()</h3>

- **功能**: 获取Plugin版本号

- **返回值**:Plugin版本号(string)

<h3 id=CRVideo_SdkPath>CRVideo_SdkPath()</h3>

- **功能**: 获取sdk所在的目录

- **返回值**:返回sdk所在的目录(string)

<h3 id=CRVideo_SetSDKParams>CRVideo_SetSDKParams(jsonVal)</h3>

- **功能**: 设置SDK参数

- **返回值**:无

- **参数**:json格式,具体可用参数如下：

```json
//使用格式如下：
{"NoQueue":	0}
```
| 参数            | 取值         | 含义                                                                                                                          |
| :-------------- | :----------- | :---------------------------------------------------------------------------------------------------------------------------- |
| NoQueue         | 0/1(缺省:0)  | 设为1可加快登录速度（适合于不使用sdk的排队功能的业务，如：临柜双录业务、链接入 会业务）                                       |
| Timeout         | 缺 省:90000  | 网络通信超时时间，单位是毫秒                                                                                                  |
| DatEncType      | 0/1	(缺省:1) | 数据加密类型(0:敏感数据加密，1:全面加密)                                                                                      |
| VerifyHttpsCert | 0/1(缺省:1)  | 是否校验服务器SSL证书(0:不验证，1:验证；此参数仅在DatEncType为1时才会生效)。如果web服务使用自签名SSL证书，则此参数应配置为0。 |

>这个接口在init之前调用有效

<h3 id=CRVideo_SetFileUploadRate>CRVideo_SetFileUploadRate(maxbps)</h3>

- **功能**: 文件上传的流量控制(SDK默认不开启流控,目前对文件上传控制的功能有：录制文件上传、网盘文件上传。)

- **返回值**:无 

| 参数   | 类型   | 含义                                          |
| :----- | :----- | :-------------------------------------------- |
| maxbps | number | 每秒上传的最大字节数，小于等于0表示不开启流控 |

<h3 id=CRVideo_SetFileDownloadRate>CRVideo_SetFileDownloadRate(maxBytePerSec)</h3>

- **功能**: 文件下载的流量控制

- **返回值**:无

| 参数          | 类型   | 含义                                   |
| :------------ | :----- | :------------------------------------- |
| maxBytePerSec | number | 每秒下载的最大字节数。-1代表不进行流控 |


<h3 id=CRVideo_SetAliyunOssAccountInfo>CRVideo_SetAliyunOssAccountInfo(accessKey,accessSecret)</h3>

- **功能**: 设置阿里云OSS信息

- **返回值**:无 

| 参数         | 类型   | 含义                                                |
| :----------- | :----- | :-------------------------------------------------- |
| accessKey    | string | 用于标示用户                                        |
| accessSecret | string | 用户用于加密签名字符串和OSS用来验证签名字符串的密钥 |

>参考阿里云的用户签名验证相关文档 ：https://help.aliyun.com/document_detail/31950.html?spm=a2c4g.11186623.6.707.44c0734ctzHsOa

<h3 id=CRVideo_WriteLog>CRVideo_WriteLog(level, log)</h3>

- **功能**: 向日志文件中写入内容

- **返回值**:无 

| 参数  | 类型   | 含义                                                               |
| :---- | :----- | :----------------------------------------------------------------- |
| level | number | 详见[CRVideo_E_LOG_LEVEL_DEF](Constant.md#CRVideo_E_LOG_LEVEL_DEF) |
| log   | string | 日志内容                                                           |

<h3 id=CRVideo_Init2>CRVideo_Init2(sdkFilePath, isCallSer, isMediaSer, isHttp)</h3>

- **功能**: 登录

- **返回值**:返回[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVideo_NOERR表示没有错误）(number)

| 参数        | 类型   | 含义                                                                                                       |
| :---------- | :----- | :--------------------------------------------------------------------------------------------------------- |
| sdkFilePath | string | SDK工作目录，用于存储配置文件、临时文件、录制文件、影音文件、日志等文件，如果传空值，则默认为sdk的安装目录 |
| isCallSer   | number | 是否启用callSer模块。 0为不启用，1为启用。（可缺省，缺省为1）                                              |
| isMediaSer  | number | 是否启用mediaSer模块。 0为不启用，1为启用，（可缺省，缺省为1）                                             |
| isHttp      | number | 是否启用http模块。0为不启用，1为启用，（可缺省，缺省为0）                                                  |

>* 注意:程序开始时init，程序结束时uninit，整个程序的生命周期中只进行一次初始化和反初始化。

>* 注意目录的读写权限，如果目录只读，则无法在此目录下生成其他文件和文件夹

<h3 id=CRVideo_Uninit>CRVideo_Uninit()</h3>

- **功能**: SDK反初始化

- **返回值**:无

- **参数**:无
  
<h3 id=CRVideo_SetServerAddr>CRVideo_SetServerAddr(serverList)</h3>

- **功能**: 设置服务器地址

- **返回值**:无

| 参数       | 类型   | 含义                                                                                    |
| :--------- | :----- | :-------------------------------------------------------------------------------------- |
| serverList | string | 服务器地址，多个服务器地址使用分号隔开（如：www.cloudroom.com:8080;183.60.47.52:8080;） |

<h3 id=CRVideo_SetNetworkProxy>CRVideo_SetNetworkProxy(proxy)</h3>

- **功能**: 设置网络代理

- **返回值**:无

| 参数  | 类型 | 含义                                                                                |
| :---- | :--- | :---------------------------------------------------------------------------------- |
| proxy | json | json格式，详见[CRVideo_NetworkProxyObj](TypeDefinitions.md#CRVideo_NetworkProxyObj) |

<h3 id=CRVideo_Login>CRVideo_Login(appID, md5_appSecret, nickName, UID, userAuthCode, cookie)</h3>

- **功能**: 登录
- **返回值**:无

| 参数          | 类型   | 含义                                                                                                                                                               |
| :------------ | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appID         | string | 云屋鉴权帐号。用于区分不同的项目，每个项目都有属于自己的唯一的appID，不同appID的项目完全独立，无法相互通信。appID请联系云屋销售获取，并开通相关套餐和功能权限。    |
| md5_appSecret | string | 云屋鉴权密码，可登录云屋管理后台修改。                                                                                                                             |
| nickName      | string | 昵称                                                                                                                                                               |
| UID           | string | 用户ID。和云屋系统无关，业务方自由填写，保证唯一性即可。在登录和加入房间时传入（同一appID下，具有唯一性即可）                                                      |
| userAuthCode  | string | 用户验证信息，可缺省。为空代表不需要sdk验证（一般由业务方先对userID认证完了，再来使用云屋sdk)。如果不为空，云屋SDK服务器将连接提前配好的业务方服务器进行实时验证。 |
| cookie        | string | 可缺省。详细介绍见[关键词](KeyWords.md#cookie)                                                                                                                     |

>登陆成功则回调[CRVideo_LoginSuccess](#CRVideo_LoginSuccess),登陆失败则回调[CRVideo_LoginFail](#CRVideo_LoginFail)


<h3 id=CRVideo_LoginByToken>CRVideo_LoginByToken(token,nickName,userID,userAuthCode,cookie)</h3>

- **功能**: Token登录
- **返回值**:无

| 参数         | 类型   | 含义                                                                                                                  |
| :----------- | :----- | :-------------------------------------------------------------------------------------------------------------------- |
| token        | string | Token鉴权码                                                                                                           |
| nickName     | string | 昵称                                                                                                                  |
| userID       | string | 用户ID。和云屋系统无关，业务方自由填写，保证唯一性即可（同一appID下，具有唯一性即可）                                 |
| userAuthCode | string | 默认填空。只有开启第三方认证才需要填写。（开启第三方认证时，云屋SDK服务器将连接提前配好的业务方服务器进行实时验证。） |
| cookie       | string | 可缺省。详细介绍见[关键词](KeyWords.md#cookie)                                                                        |

>    登陆成功则回调CRVideo_LoginSuccess,登陆失败则回调CRVideo_LoginFail

<h3 id=CRVideo_UpdateToken>CRVideo_UpdateToken(token)</h3>

- **功能**: Token登录
- **返回值**:无

| 参数  | 类型   | 含义        |
| :---- | :----- | :---------- |
| token | string | Token鉴权码 |


<h3 id=CRVideo_LoginSuccess>CRVideo_LoginSuccess.callback = function(UID,cookie){}</h3>

- **功能**: 登录成功回调
- **返回值**:无


<h3 id=CRVideo_LoginFail>CRVideo_LoginFail.callback = function(sdkErr,cookie){}</h3>

- **功能**: 登录失败回调,登录出错，可以弹出错误提示，或调用登录接口再次重试登录

<h3 id=CRVideo_NotifyTokenWillExpire>CRVideo_NotifyTokenWillExpire.callback = function(){}</h3>

- **功能**: Token即将失效的通知

<h3 id=CRVideo_Logout>CRVideo_Logout</h3>

- **功能**: 注销

```js
/**
* 注销本次登陆
* @access public
*/
CRVideo_Logout()
```

退出程序时，必须注销本次登录，然后再进行SDK反初始化操作


<h3 id=CRVideo_GetAllMembers>CRVideo_GetAllMembers()</h3>

- **功能**: 房间成员列表


- **返回值**:返回含多个成员信息（Array ------[CRVideo_MemberInfo](TypeDefinitions.md#CRVideo_MemberInfo)）


<h3 id=CRVideo_GetMemberInfo>CRVideo_GetMemberInfo(UID)</h3>

- **功能**: 房间成员信息

- **返回值**:返回用户UID的成员信息（[CRVideo_MemberInfo](TypeDefinitions.md#CRVideo_MemberInfo)）

| 参数 | 类型   | 含义   |
| :--- | :----- | :----- |
| UID  | string | 用户ID |


<h3 id=CRVideo_GetMemberNickName>CRVideo_GetMemberNickName(UID)</h3>

- **功能**: 房间成员昵称

- **返回值**:用户UID的昵称(string)

| 参数 | 类型   | 含义   |
| :--- | :----- | :----- |
| UID  | string | 用户ID |


<h3 id=CRVideo_IsUserInMeeting>CRVideo_IsUserInMeeting(UID)</h3>

- **功能**: 用户是否在房间中

- **返回值**:如果用户存在则返回true，否则返回false(bool)

| 参数 | 类型   | 含义     |
| :--- | :----- | :------- |
| UID  | string | 用户的id |



<h3 id=CRVideo_SetNickName>CRVideo_SetNickName(userid,strNickName)</h3>

- **功能**: 设置某个用户的昵称

- **返回值**: 无

| 参数        | 类型   | 含义         |
| :---------- | :----- | :----------- |
| userid      | string | 用户ID       |
| strNickName | string | 新的用户昵称 |

> 回调函数 [CRVideo_SetNickNameRsp](API.md#CRVideo_SetNickNameRsp)
> 调用此接口如果设置成功，其他会话用户会收到 [CRVideo_NotifyNickNameChanged](API.md#CRVideo_NotifyNickNameChanged)

<h3 id=CRVideo_GetMeetingAllAttrs>CRVideo_GetMeetingAllAttrs( cookie)</h3>

- **功能**:获取房间属性

- **返回值**:无

+ **参数**：

| 参数   | 类型   | 含义                                                 |
| :----- | :----- | :--------------------------------------------------- |
| cookie | string | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream) |


<h3 id=CRVideo_GetMeetingAttrs >CRVideo_GetMeetingAttrs( keys,   cookie)</h3>

- **功能**:获取房间部分属性

- **返回值**:无

+ **参数**：

| 参数   | 类型   | 含义                                                 |
| :----- | :----- | :--------------------------------------------------- |
| keys   | string | string数组，该数组包含了需要查询的房间属性关键字     |
| cookie | string | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream) |

>keys示例：[\"name\",\"time\"]

<h3 id=CRVideo_SetMeetingAttrs >CRVideo_SetMeetingAttrs(  attrs, options, cookie)</h3>

- **功能**:设置房间属性

- **返回值**:无

+ **参数**：

| 参数    | 类型       | 含义                                                                                                                                                                               |
| :------ | :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| attrs   | json结构体 | 房间属性,json结构体请参见[CRVideo_MeetingAttrObjs](TypeDefinitions.md#CRVideo_MeetingAttrObjs)                                                                                     |
| options | json格式   | 接口选项， 支持的选项:  <p>"notifyAll"：是否发送通知消息（有此选项且值为1时发出通知消息，参见：[CRVideo_NotifyMeetingAttrsChanged](API.md#CRVideo_NotifyMeetingAttrsChanged)）</p> |
| cookie  | string     | 可为空字符串。详细介绍见[关键词](KeyWords.md#cookie)                                                                                                                               |


<h3 id=CRVideo_AddOrUpdateMeetingAttrs >CRVideo_AddOrUpdateMeetingAttrs(  attrs,  options,  cookie)</h3>

- **功能**:增加或者更新房间属性

- **返回值**:无

+ **参数**：

| 参数    | 类型       | 含义                                                                                                                                                                               |
| :------ | :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| attrs   | json结构体 | 房间属性,json结构体请参见[CRVideo_MeetingAttrObjs](TypeDefinitions.md#CRVideo_MeetingAttrObjs)                                                                                     |
| options | string     | 接口选项， 支持的选项:  <p>"notifyAll"：是否发送通知消息（有此选项且值为1时发出通知消息，参见：[CRVideo_NotifyMeetingAttrsChanged](API.md#CRVideo_NotifyMeetingAttrsChanged)）</p> |
| cookie  | string     | 可为空字符串。详细介绍见[关键词](KeyWords.md#cookie)                                                                                                                               |


<h3 id=CRVideo_DelMeetingAttrs >CRVideo_DelMeetingAttrs(  keys,  options, cookie)</h3>

- **功能**:删除房间属性

- **返回值**:无

+ **参数**：

| 参数    | 类型       | 含义                                                                                             |
| :------ | :--------- | :----------------------------------------------------------------------------------------------- |
| keys    | string数组 | 需要删除的房间属性key，json格式，如["key1","key2"]                                               |
| options | json格式   | 操作选项,json格式参见[CRVideo_MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions) |
| cookie  | string     | 可为空字符串。详细介绍见[关键词](KeyWords.md#cookie)                                             |

>keys示例：[\"name\",\"time\"]


<h3 id=CRVideo_ClearMeetingAttrs >CRVideo_ClearMeetingAttrs(options, cookie)</h3>

- **功能**:清除房间所有属性

- **返回值**:无

+ **参数**：

| 参数    | 类型   | 含义                                                                                             |
| :------ | :----- | :----------------------------------------------------------------------------------------------- |
| options | string | 操作选项,json格式参见[CRVideo_MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions) |
| cookie  | string | 可为空字符串。详细介绍见[关键词](KeyWords.md#cookie)                                             |


<h3 id=CRVideo_GetUserAttrs >CRVideo_GetUserAttrs( uids, keys, cookie)</h3>

- **功能**:获取用户属性

- **返回值**:无

+ **参数**：

| 参数   | 类型   | 含义                                                 |
| :----- | :----- | :--------------------------------------------------- |
| uids   | string | 包含了即将要获取的用户的id，最多包含50个             |
| keys   | string | string数组，该数组包含了需要查询的用户房间属性关键字 |
| cookie | string | 可为空字符串。详细介绍见[关键词](KeyWords.md#cookie) |

>例如想要查询lucy和Drake的是否允许聊天、用户身份等信息，uids:[\"lucy\",\"Drake\"...], keys:["","",...]


<h3 id=CRVideo_SetUserAttrs >CRVideo_SetUserAttrs( uid,  attrs, options, cookie)</h3>

- **功能**:设置用户属性

- **返回值**: 无

+ **参数**：

| 参数    | 类型     | 含义                                                                                             |
| :------ | :------- | :----------------------------------------------------------------------------------------------- |
| uid     | string   | 目标用户id                                                                                       |
| attrs   | json格式 | 用户属性集, json格式，如：{"key1":"value1", "key2":"value2"}                                     |
| options | json格式 | 操作选项,json格式参见[CRVideo_MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions) |
| cookie  | string   | 可为空字符串。详细介绍见[关键词](KeyWords.md#cookie)                                             |


<h3 id=CRVideo_AddOrUpdateUserAttrs >CRVideo_AddOrUpdateUserAttrs( uid,  attrs,options, cookie)</h3>

- **功能**:增加或更新用户属性

- **返回值**:无

+ **参数**：

| 参数    | 类型     | 含义                                                                                             |
| :------ | :------- | :----------------------------------------------------------------------------------------------- |
| uid     | string   | 目标用户id                                                                                       |
| attrs   | json格式 | 用户属性集, json格式，如：{"key1":"value1", "key2":"value2"}                                     |
| options | json格式 | 操作选项,json格式参见[CRVideo_MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions) |
| cookie  | string   | 可为空字符串。详细介绍见[关键词](KeyWords.md#cookie)                                             |


<h3 id=CRVideo_DelUserAttrs >CRVideo_DelUserAttrs( uid,  keys,  options,cookie)</h3>

- **功能**:删除用户的特定属性

- **返回值**:无

+ **参数**：

| 参数    | 类型     | 含义                                                                                             |
| :------ | :------- | :----------------------------------------------------------------------------------------------- |
| uid     | string   | 目标用户id                                                                                       |
| keys    | string   | 需要删除的用户属性key列表，json格式，如：["key1","key2"]                                         |
| options | json格式 | 操作选项,json格式参见[CRVideo_MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions) |
| cookie  | string   | 可为空字符串。详细介绍见[关键词](KeyWords.md#cookie)                                             |


<h3 id=CRVideo_ClearAllUserAttrs >CRVideo_ClearAllUserAttrs(options, cookie)</h3>

- **功能**:清除所有用户的所有属性

- **返回值**:无

+ **参数**：

| 参数    | 类型     | 含义                                                                                             |
| :------ | :------- | :----------------------------------------------------------------------------------------------- |
| options | json格式 | 操作选项,json格式参见[CRVideo_MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions) |
| cookie  | string   | 可为空字符串。详细介绍见[关键词](KeyWords.md#cookie)                                             |


<h3 id=CRVideo_ClearUserAttrs >CRVideo_ClearUserAttrs( uid, options, cookie)</h3>

- **功能**:清除特定用户属性

- **返回值**:无

+ **参数**：

| 参数    | 类型     | 含义                                                                                             |
| :------ | :------- | :----------------------------------------------------------------------------------------------- |
| uid     | string   | 目标用户id                                                                                       |
| options | json格式 | 操作选项,json格式参见[CRVideo_MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions) |
| cookie  | string   | 可为空字符串。详细介绍见[关键词](KeyWords.md#cookie)                                             |


<h3 id=CRVideo_GetQueueUsers>CRVideo_GetQueueUsers(queID)</h3>

- **功能**: 获取指定队列的客户

- **返回值**:返回排队的客户列表(类型：json字符串，需要JSON.parse解析后使用)

| 参数  | 类型   | 含义   |
| :---- | :----- | :----- |
| queID | string | 队列ID |


<h3 id=CRVideo_ReqAssignUser2>CRVideo_ReqAssignUser2(queID, userID, cookie)</h3>

- **功能**: 请求分配一个指定的客户

- **返回值**:无

| 参数   | 类型   | 含义                                   |
| :----- | :----- | :------------------------------------- |
| queID  | string | 队列ID                                 |
| userID | string | 队列中的用户ID                         |
| cookie | string | 详细介绍见[关键词](KeyWords.md#cookie) |

>回调函数：[CRVideo_ReqAssignUserRslt](#CRVideo_ReqAssignUserRslt)
>当关闭免打扰时，系统将自动分配客户，无需调用此函数； 当开启免打扰时，系统不再自动分配客户，座席如需服务指定的客户可使用此函数分配

<h3 id=CRVideo_GetMeetingAttrsSuccess > CRVideo_GetMeetingAttrsSuccess.callback = function( attrs,  cookie){} </h3>

- **功能**:成功获取到房间指定属性

+ **参数**：

| 参数   | 类型   | 含义                                                                                                                            |
| :----- | :----- | :------------------------------------------------------------------------------------------------------------------------------ |
| attrs  | string | json格式字符串，需要自行转换为json结构体。json结构体请参见[CRVideo_MeetingAttrObjs](TypeDefinitions.md#CRVideo_MeetingAttrObjs) |
| cookie | string | 可为空字符串。详细介绍见[关键词](KeyWords.md#cookie)                                                                            |

<h3 id=CRVideo_GetMeetingAttrsFail > CRVideo_GetMeetingAttrsFail.callback = function( err,  cookie){} </h3>

- **功能**:获取房间指定属性失败

+ **参数**：

| 参数   | 类型   | 含义                                                                             |
| :----- | :----- | :------------------------------------------------------------------------------- |
| err    | number | [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |
| cookie | string | 可为空字符串。详细介绍见[关键词](KeyWords.md#cookie)                             |


<h3 id=CRVideo_GetMeetingAllAttrsSuccess > CRVideo_GetMeetingAllAttrsSuccess.callback = function( attrs,  cookie){} </h3>

- **功能**:成功获取到所有房间属性

+ **参数**：

| 参数   | 类型   | 含义                                                                                                                        |
| :----- | :----- | :-------------------------------------------------------------------------------------------------------------------------- |
| attrs  | string | json格式字符串，需要自行转换为json结构体。json结构参见[CRVideo_MeetingAttrObjs](TypeDefinitions.md#CRVideo_MeetingAttrObjs) |
| cookie | string | 可为空字符串。详细介绍见[关键词](KeyWords.md#cookie)                                                                        |


<h3 id=CRVideo_GetMeetingAllAttrsFail > CRVideo_GetMeetingAllAttrsFail.callback = function( err,  cookie){} </h3>

- **功能**:获取所有房间属性失败

+ **参数**：

| 参数   | 类型   | 含义                                                                             |
| :----- | :----- | :------------------------------------------------------------------------------- |
| err    | number | [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |
| cookie | string | 可为空字符串。详细介绍见[关键词](KeyWords.md#cookie)                             |

<h3 id=CRVideo_SetMeetingAttrsRslt >CRVideo_SetMeetingAttrsRslt.callback = function( err,  cookie) {}</h3>

- **功能**:设置房间属性结果

+ **参数**：

| 参数   | 类型   | 含义                                                                             |
| :----- | :----- | :------------------------------------------------------------------------------- |
| err    | number | [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |
| cookie | string | 可为空字符串。详细介绍见[关键词](KeyWords.md#cookie)                             |



<h3 id=CRVideo_AddOrUpdateMeetingAttrsRslt > CRVideo_AddOrUpdateMeetingAttrsRslt.callback = function( err,  cookie){}</h3>

- **功能**:增加或更新房间属性结果

+ **参数**：

| 参数   | 类型   | 含义                                                                             |
| :----- | :----- | :------------------------------------------------------------------------------- |
| err    | number | [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |
| cookie | string | 可为空字符串。详细介绍见[关键词](KeyWords.md#cookie)                             |


<h3 id=CRVideo_DelMeetingAttrsRslt > CRVideo_DelMeetingAttrsRslt.callback = function( err,  cookie){} </h3>

- **功能**:删除房间属性结果

+ **参数**：

| 参数   | 类型   | 含义                                                                             |
| :----- | :----- | :------------------------------------------------------------------------------- |
| err    | number | [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |
| cookie | string | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)                             |


<h3 id=CRVideo_ClearMeetingAttrsRslt >CRVideo_ClearMeetingAttrsRslt.callback = function( err,  cookie) {}</h3>

- **功能**:清除房间属性结果

+ **参数**：

| 参数   | 类型   | 含义                                                                             |
| :----- | :----- | :------------------------------------------------------------------------------- |
| err    | number | [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |
| cookie | string | 可为空字符串。详细介绍见[关键词](KeyWords.md#cookie)                             |

<h3 id=CRVideo_GetUserAttrsSuccess >CRVideo_GetUserAttrsSuccess.callback = function( attrsMap,  cookie){} </h3>

- **功能**:获取房间内用户属性结果

+ **参数**：

| 参数     | 类型   | 含义                                                                                                                                              |
| :------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| attrsMap | string | 房间属性，json格式的字符串，需要自行转化为json结构。json结构体请参见[CRVideo_UserMeetingAttrObjs](TypeDefinitions.md#CRVideo_UserMeetingAttrObjs) |
| cookie   | string | 可为空字符串。详细介绍见[关键词](KeyWords.md#cookie)                                                                                              |



<h3 id=CRVideo_GetUserAttrsFail > CRVideo_GetUserAttrsFail.callback = function( err,  cookie) {}</h3>

- **功能**:获取房间内用户属性失败

+ **参数**：

| 参数   | 类型   | 含义                                                                             |
| :----- | :----- | :------------------------------------------------------------------------------- |
| err    | number | [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |
| cookie | string | 可为空字符串。详细介绍见[关键词](KeyWords.md#cookie)                             |


<h3 id=CRVideo_SetUserAttrsRslt > CRVideo_SetUserAttrsRslt.callback = function( err,  cookie) {}</h3>

- **功能**:设置用户属性结果

+ **参数**：

| 参数   | 类型   | 含义                                                                             |
| :----- | :----- | :------------------------------------------------------------------------------- |
| err    | number | [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |
| cookie | string | 可为空字符串。详细介绍见[关键词](KeyWords.md#cookie)                             |



<h3 id=CRVideo_AddOrUpdateUserAttrsRslt > CRVideo_AddOrUpdateUserAttrsRslt.callback = function( err,  cookie){} </h3>

- **功能**:增加或者更新用户属性结果

+ **参数**：

| 参数   | 类型   | 含义                                                                             |
| :----- | :----- | :------------------------------------------------------------------------------- |
| err    | number | [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |
| cookie | string | 可为空字符串。详细介绍见[关键词](KeyWords.md#cookie)                             |


<h3 id=CRVideo_DelUserAttrsRslt > CRVideo_DelUserAttrsRslt.callback = function( err,  cookie){} </h3>

- **功能**:删除特定用户属性结果

+ **参数**：

| 参数   | 类型   | 含义                                                                             |
| :----- | :----- | :------------------------------------------------------------------------------- |
| err    | number | [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |
| cookie | string | 可为空字符串。详细介绍见[关键词](KeyWords.md#cookie)                             |




<h3 id=CRVideo_ClearAllUserAttrsRslt > CRVideo_ClearAllUserAttrsRslt.callback = function( err,  cookie){} </h3>

- **功能**:删除所有用户属性结果

+ **参数**：

| 参数   | 类型   | 含义                                                                             |
| :----- | :----- | :------------------------------------------------------------------------------- |
| err    | number | [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |
| cookie | string | 可为空字符串。详细介绍见[关键词](KeyWords.md#cookie)                             |



<h3 id=CRVideo_ClearUserAttrsRslt > CRVideo_ClearUserAttrsRslt.callback = function(err, cookie){} </h3>

- **功能**:删除特定用户属性结果

+ **参数**：

| 参数   | 类型   | 含义                                                                             |
| :----- | :----- | :------------------------------------------------------------------------------- |
| err    | number | [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |
| cookie | string | 可为空字符串。详细介绍见[关键词](KeyWords.md#cookie)                             |



<h3 id=CRVideo_NotifyMeetingAttrsChanged >CRVideo_NotifyMeetingAttrsChanged.callback = function(attrs) {}</h3>

- **功能**:通知房间属性发生改变

+ **参数**：

| 参数  | 类型   | 含义                                                                                            |
| :---- | :----- | :---------------------------------------------------------------------------------------------- |
| attrs | string | 房间属性，json结构体请参见[CRVideo_MeetingAttrObjs](TypeDefinitions.md#CRVideo_MeetingAttrObjs) |


<h3 id=CRVideo_NotifyUserAttrsChanged >CRVideo_NotifyUserAttrsChanged.callback = function(uid, adds, updates, delKeys) </h3>

- **功能**:通知用户属性发生改变

+ **参数**：

| 参数    | 类型   | 含义                                                                                                    |
| :------ | :----- | :------------------------------------------------------------------------------------------------------ |
| uid     | string | 变化的用户id                                                                                            |
| adds    | string | 增加的用户属性集，json结构体请参见[CRVideo_MeetingAttrObjs](TypeDefinitions.md#CRVideo_MeetingAttrObjs) |
| updates | string | 变化的用户属性集，json结构体请参见[CRVideo_MeetingAttrObjs](TypeDefinitions.md#CRVideo_MeetingAttrObjs) |
| delKeys | string | 被删除的用户属性列表，json格式，如:["key1", "key2"]                                                     |

<h3 id=CRVideo_GetScreenShareCfg>CRVideo_GetScreenShareCfg()</h3>

- **功能**: 获取屏幕共享配置

- **返回值**:屏幕共享配置（[CRVideo_ScreenShareCfgObj](TypeDefinitions.md#CRVideo_ScreenShareCfgObj)）


<h3 id=CRVideo_SetScreenShareCfg>CRVideo_SetScreenShareCfg(jsonCfg)</h3>

- **功能**: 设置屏幕共享配置

- **返回值**:无

| 参数    | 类型                                                                      | 含义         |
| :------ | :------------------------------------------------------------------------ | :----------- |
| jsonCfg | [CRVideo_ScreenShareCfgObj](TypeDefinitions.md#CRVideo_ScreenShareCfgObj) | 屏幕共享配置 |


<h3 id=CRVideo_StartScreenShare>CRVideo_StartScreenShare()</h3>

- **功能**: 开启屏幕共享


- **返回值**:无


<h3 id=CRVideo_StopScreenShare>CRVideo_StopScreenShare()</h3>

- **功能**: 停止屏幕共享


- **返回值**:无


<h3 id=CRVideo_RejectShareRequestion>CRVideo_RejectShareRequestion(requesterId,param)</h3>

- **功能**: 拒绝分享请求


<h3 id=CRVideo_SetCustomizeScreenImg>CRVideo_SetCustomizeScreenImg(format, width, heigh, dat)</h3>

- **功能**: 自定义的抓屏图像数据

- **返回值**:无

| 参数   | 类型                                                     | 含义                     |
| :----- | :------------------------------------------------------- | :----------------------- |
| format | [CRVideo_VIDEO_FORMAT](Constant.md#CRVideo_VIDEO_FORMAT) | 视频格式                 |
| width  | number                                                   | 图像的宽度               |
| heigh  | number                                                   | 图像的高度               |
| dat    | string                                                   | 承载argb数据，base64编码 |


<h3 id=CRVideo_GiveCtrlRight>CRVideo_GiveCtrlRight(UID)</h3>

- **功能**: 赋予控制权限

- **返回值**:无

| 参数 | 类型   | 含义   |
| :--- | :----- | :----- |
| UID  | string | 用户ID |


<h3 id=CRVideo_ReleaseCtrlRight>CRVideo_ReleaseCtrlRight(UID)</h3>

- **功能**: 收回控制权限

- **返回值**:无

| 参数 | 类型   | 含义   |
| :--- | :----- | :----- |
| UID  | string | 用户ID |


<h3 id=CRVideo_SendMouseCtrlMsg>CRVideo_SendMouseCtrlMsg(msgType, mouseMsgType, x, y)</h3>

- **功能**: 发送鼠标控制消息

- **返回值**:无

| 参数         | 类型                                                         | 含义                 |
| :----------- | :----------------------------------------------------------- | :------------------- |
| msgType      | [CRVideo_MOUSE_MSG_TYPE](Constant.md#CRVideo_MOUSE_MSG_TYPE) | 鼠标事件类型         |
| mouseMsgType | [CRVideo_MOUSE_KEY_TYPE](Constant.md#CRVideo_MOUSE_KEY_TYPE) | 鼠标键类型           |
| x            | number                                                       | 鼠标在屏幕中的横坐标 |
| y            | number                                                       | 鼠标在屏幕中的纵坐标 |


<h3 id=CRVideo_SendKeyCtrlMsg>CRVideo_SendKeyCtrlMsg(keyMsgType, vk, bExtendedKey)</h3>

- **功能**: 发送键盘控制消息

- **返回值**:无

| 参数         | 类型                                                     | 含义         |
| :----------- | :------------------------------------------------------- | :----------- |
| keyMsgType   | [CRVideo_KEY_MSG_TYPE](Constant.md#CRVideo_KEY_MSG_TYPE) | 键盘事件类型 |
| vk           | number                                                   | 键盘虚拟键值 |
| bExtendedKey | number                                                   | -            |


<h3 id=CRVideo_GetShareScreenDecodeImg>CRVideo_GetShareScreenDecodeImg()</h3>

- **功能**: 屏幕共享图像数据

- **返回值**:([CRVideo_VideoImgObj](TypeDefinitions.md#CRVideo_VideoImgObj))


<h3 id=CRVideo_StartScreenShareRslt>CRVideo_StartScreenShareRslt.callback = function(sdkEr){}</h3>

- **功能**: 开启屏幕共享的响应事件

+ **参数**：
    - sdkEr ----- 操作失败代码，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)



<h3 id=CRVideo_StopScreenShareRslt>CRVideo_StopScreenShareRslt.callback = function(sdkEr){}</h3>

- **功能**停止屏幕共享的响应事件

+ **参数**：
    - sdkEr ----- 操作失败代码，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)



<h3 id=CRVideo_NotifyRequestShare>CRVideo_NotifyRequestShare.callback = function(sharerId,requesterId, param){}</h3>


- **功能**：SDK通知请求屏幕共享

+ **参数**：
    - sharerId ----- 共享者ID
    - requesterId ----- 请求者ID
    - param ----- 自定义参数


<h3 id=CRVideo_NotifyCancelShareRequestion>CRVideo_NotifyCancelShareRequestion.callback = function(sharerId,requesterId){}</h3>


- **功能**：SDK通知取消屏幕共享请求

+ **参数**：
    - sharerId ----- 共享者ID
    - requesterId ----- 请求者ID


<h3 id=CRVideo_NotifyRejectShareRequestion>CRVideo_NotifyRejectShareRequestion.callback = function(requesterId,sharerId, param){}</h3>

- **功能**：SDK通知拒绝屏幕共享请求

+ **参数**：
    - requesterId ----- 请求者ID
    - sharerId ----- 共享者ID
    - param ----- 自定义参数



<h3 id=CRVideo_RequestShare>CRVideo_RequestShare(sharerId,param)</h3>

- **功能**: 请求某人开启屏幕共享

- **返回值**: 无

| 参数     | 类型   | 含义                 |
| :------- | :----- | :------------------- |
| sharerId | number | 需要开启共享的用户ID |
| param    | string | 自定义参数，可传空   |


<h3 id=CRVideo_CancelShareRequestion>CRVideo_CancelShareRequestion(sharerId)</h3>

- **功能**: 取消屏幕共享请求

- **返回值**: 无

| 参数     | 类型   | 含义                                                |
| :------- | :----- | :-------------------------------------------------- |
| sharerId | number | 需要取消的共享者ID,与CRVideo_RequestShare的参数对应 |


<h3 id=CRVideo_RejectShareRequestion>CRVideo_RejectShareRequestion(requesterId,param)</h3>

- **功能**: 拒绝分享请求

- **返回值**: 无

| 参数        | 类型   | 含义               |
| :---------- | :----- | :----------------- |
| requesterId | number | 请求者ID           |
| param       | string | 自定义参数，可传空 |


<h3 id=CRVideo_NotifyScreenShareStarted>CRVideo_NotifyScreenShareStarted.callback = function(userID){}</h3>


- **功能**：收到他人开启了屏幕共享的通知

+ **参数**：
    - userID ----- 开启共享者的用户ID


<h3 id=CRVideo_NotifyScreenShareStopped>CRVideo_NotifyScreenShareStopped.callback = function(){}</h3>

- **功能**: 收到他人停止了屏幕共享的通知



<h3 id=CRVideo_NotifyScreenShareData>CRVideo_NotifyScreenShareData.callback = function(UID,rect){}</h3>

- **功能**：通知对端屏幕图像有变化

+ **参数**：
    - UID ----- 用户ID
    - rect ----- 变化的区域；（可以只重绘这块区域）

<h3 id=CRVideo_NotifyGiveCtrlRight>CRVideo_NotifyGiveCtrlRight.callback = function(operId,targetId){}</h3>

- **功能**：SDK通知远程控制权限给予了他人

+ **参数**：
    - operId ----- 操作的用户ID
    - targetId ----- 控制权限给予了谁


<h3 id=CRVideo_NotifyReleaseCtrlRight>CRVideo_NotifyReleaseCtrlRight.callback = function(operId,targetId){}</h3>

- **功能**：SDK通知他人收回屏幕共享操作权限

+ **参数**：
    - operId ----- 操作的用户ID
    - targetId ----- 收回了谁的控制权限


<h3 id=CRVideo_NotifyShareRectChanged>CRVideo_NotifyShareRectChanged.callback = function(w,h){}</h3>


- **功能**：通知屏幕共享大小改变

+ **参数**：
    - w ----- 宽度
    - h ----- 高度


<h3 id=CRVideo_CreateLocMixer>CRVideo_CreateLocMixer(mixerID, mixerCfg, mixerContent)</h3>

- **功能**: 创建本地混图器


- **返回值**: [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)

| 参数         | 类型                                                                  | 含义                     |
| :----------- | :-------------------------------------------------------------------- | :----------------------- |
| mixerID      | string                                                                | 混图器唯一标识           |
| mixerCfg     | [CRVideo_MixerCfgObj](TypeDefinitions.md#CRVideo_MixerCfgObj)         | 混图器规格配置，json格式 |
| mixerContent | [CRVideo_MixerContentObj](TypeDefinitions.md#CRVideo_MixerContentObj) | 混图器内容配置，json格式 |


<h3 id=CRVideo_UpdateLocMixerContent>CRVideo_UpdateLocMixerContent(mixerID,mixerContent)</h3>

- **功能**: 更新本地混图器内容

- **返回值**: [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)

| 参数         | 类型                                                                  | 含义                     |
| :----------- | :-------------------------------------------------------------------- | :----------------------- |
| mixerID      | string                                                                | 混图器唯一标识           |
| mixerContent | [CRVideo_MixerContentObj](TypeDefinitions.md#CRVideo_MixerContentObj) | 混图器内容配置，json格式 |


<h3 id=CRVideo_DestroyLocMixer>CRVideo_DestroyLocMixer(mixerID)</h3>

- **功能**: 消毁本地混图器

- **返回值**: 无

| 参数    | 类型   | 含义           |
| :------ | :----- | :------------- |
| mixerID | string | 混图器唯一标识 |


<h3 id=CRVideo_GetLocMixerState>CRVideo_GetLocMixerState(mixerID)</h3>

- **功能**: 获取本地混图器状态

- **返回值**: [CRVideo_MIXER_STATE](Constant.md#CRVideo_MIXER_STATE)

| 参数    | 类型   | 含义           |
| :------ | :----- | :------------- |
| mixerID | string | 混图器唯一标识 |


<h3 id=CRVideo_AddLocMixerOutput>CRVideo_AddLocMixerOutput(mixerID, mixerOutput)</h3>

- **功能**: 开启本地录制、直播推流

- **返回值**: [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)

| 参数        | 类型                                                                | 含义                                                                                              |
| :---------- | :------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------ |
| mixerID     | string                                                              | 混图器唯一标识，请确保创建了有效的混图器[CRVideo_CreateLocMixer](API.md#CRVideo_CreateLocMixer)。 |
| mixerOutput | [CRVideo_MixerOutputObj](TypeDefinitions.md#CRVideo_MixerOutputObj) | 混图器输出配置，json格式                                                                          |

- <p style="color:#FF0000;font-size:20px;">注意事项:</p>

   - 可以一次添加多个输出，也可以依据业务需要稍后再添加新的输出；
   - 多个输出不能同名、或同一url；
   - 每个输出，有独立的信息通知，请见事件[CRVideo_LocMixerOutputInfo](API.md#CRVideo_LocMixerOutputInfo).如果输出异常时，将自动停止；



<h3 id=CRVideo_RmLocMixerOutput>CRVideo_RmLocMixerOutput(mixerID,nameOrUrl)</h3>

- **功能**: 停止本地录制、直播推流

- **返回值**: 无

| 参数      | 类型   | 含义                                               |
| :-------- | :----- | :------------------------------------------------- |
| mixerID   | string | 混图器唯一标识                                     |
| nameOrUrl | string | 要停止的录制文件名或直播url，支持多值，以";"分隔； |

>注意事项：所有输出停止后并不会消毁混图器，如果混图器不再需要请手工消毁；


<h3 id=CRVideo_GetAllRecordFiles>CRVideo_GetAllRecordFiles()</h3>

- **功能**: 录制文件列表


- **返回值**:返回含多个录制文件信息(Array-[CRVideo_RecordFileInfo](TypeDefinitions.md#CRVideo_RecordFileInfo))


<h3 id=CRVideo_CancelUploadRecordFile>CRVideo_CancelUploadRecordFile(filename)</h3>

- **功能**: 取消上传录像文件


- **返回值**:无

| 参数     | 类型   | 含义   |
| :------- | :----- | :----- |
| filename | string | 文件名 |


<h3 id=CRVideo_UploadRecordFile>CRVideo_UploadRecordFile(filename)</h3>

- **功能**: 上传录像文件

- **返回值**:无

| 参数     | 类型   | 含义   |
| :------- | :----- | :----- |
| filename | string | 文件名 |

>上传文件在默认位置


<h3 id=CRVideo_UploadRecordFile2>CRVideo_UploadRecordFile2(fileName,svrPathFileName)</h3>

- **功能**: 上传录像文件

- **返回值**:无

| 参数            | 类型   | 含义             |
| :-------------- | :----- | :--------------- |
| filename        | string | 文件名           |
| svrPathFileName | string | 服务器路径文件名 |

>上传文件到服务器指定位置


<h3 id=CRVideo_PlaybackRecordFile>CRVideo_PlaybackRecordFile(filename)</h3>

- **功能**: 回放录制文件

- **返回值**:无

| 参数     | 类型   | 含义   |
| :------- | :----- | :----- |
| filename | number | 文件名 |



<h3 id=CRVideo_LocMixerStateChanged>CRVideo_LocMixerStateChanged.callback = function(mixerID,state){}</h3>

- **功能**：SDK通知本地录制、本地直播状态变化

+ **参数**：
    - mixerID ----- 混图器唯一标识
    - state ----- 见 [CRVideo_MIXER_STATE](Constant.md#CRVideo_MIXER_STATE)


<h3 id=CRVideo_LocMixerOutputInfo>CRVideo_LocMixerOutputInfo.callback = function(mixerID,nameOrUrl,outputInfo){}</h3>


- **功能**：SDK通知本地录制文件、本地直播信息通知

+ **参数**：
    - mixerID ----- 混图器唯一标识
    - nameOrUrl ----- 录像名称、或直播url
    - outputInfo ----- json结构的字符串,请参见[CRVideo_MixerOutputInfoObj](TypeDefinitions.md#CRVideo_MixerOutputInfoObj)   



<h3 id=CRVideo_NotifyRecordFileStateChanged>CRVideo_NotifyRecordFileStateChanged.callback = function(fileName,state){}</h3>


- **功能**：SDK通知录制文件状态更改

+ **参数**：
    - fileName ----- 本地文件路径
    - state ----- 状态： 0未上传 1上传中 2已上传


<h3 id=CRVideo_NotifyRecordFileUploadProgress>CRVideo_NotifyRecordFileUploadProgress.callback = function(fileName,percent){}</h3>


- **功能**：SDK通知上传录制文件进度

+ **参数**：
    - fileName ----- 文件名
    - percent ----- 进度0-100



<h3 id=CRVideo_UploadRecordFileErr>CRVideo_UploadRecordFileErr.callback = function(fileName,sdkEr){}</h3>

- **功能**：上传录制文件错误通知

+ **参数**：
    - fileName ----- 本地文件路径
    - sdkEr ----- 操作失败代码，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)





<h3 id=CRVideo_StartSvrMixer>CRVideo_StartSvrMixer(mutiMixerCfgs, mutiMixerContents,mutiMixerOutputs)</h3>

- **功能**: 开始云端录制、云端直播

- **返回值**: [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)

| 参数              | 类型                                                                            | 含义           |
| :---------------- | :------------------------------------------------------------------------------ | :------------- |
| mutiMixerCfgs     | [CRVideo_MutiMixerCfgsObj](TypeDefinitions.md#CRVideo_MutiMixerCfgsObj)         | 服务器混图配置 |
| mutiMixerContents | [CRVideo_MutiMixerContentsObj](TypeDefinitions.md#CRVideo_MutiMixerContentsObj) | 服务器混图内容 |
| mutiMixerOutputs  | [CRVideo_MutiMixerOutputsObj](TypeDefinitions.md#CRVideo_MutiMixerOutputsObj)   | 服务器输出     |

>注意事项 :
>启动云端功能有一定耗时，请关注混图器的状态变化事件CRVideo_SvrMixerStateChanged
>每个输出有私有的状态变化事件CRVideo_SvrMixerOutputInfo


<h3 id=CRVideo_UpdateSvrMixerContent>CRVideo_UpdateSvrMixerContent(mutiMixerContents)</h3>

- **功能**: 更新云端录制、云端直播内容

- **返回值**: [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)

| 参数              | 类型                                                                            | 含义           |
| :---------------- | :------------------------------------------------------------------------------ | :------------- |
| mutiMixerContents | [CRVideo_MutiMixerContentsObj](TypeDefinitions.md#CRVideo_MutiMixerContentsObj) | 服务器混图内容 |


<h3 id=CRVideo_StopSvrMixer>CRVideo_StopSvrMixer()</h3>

- **功能**: 停止云端录制、云端直播


- **返回值**: 无

>注意事项 :
>停止有有一定耗时，请关注混图器的状态变化事件svrMixerStateChanged
>每个输出有私有的状态变化事件svrMixerOutputInfo


<h3 id=CRVideo_GetSvrMixerState>CRVideo_GetSvrMixerState()</h3>

- **功能**: 获取云端录制、云端直播状态


- **返回值**: [CRVideo_MIXER_STATE](Constant.md#CRVideo_MIXER_STATE)



<h3 id=CRVideo_SvrMixerStateChanged>CRVideo_SvrMixerStateChanged.callback = function(state, err,operatorID){}</h3>


- **功能**：SDK通知云端录制、云端直播状态变化

+ **参数**：
    - state ----- 状态值请参考[CRVideo_MIXER_STATE](Constant.md#CRVideo_MIXER_STATE)
    - err ----- 错误值请参考[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
    - operatorID ----- 引起变化的用户id


<h3 id=CRVideo_SvrMixerCfgChanged>CRVideo_SvrMixerCfgChanged.callback = function(){}</h3>

- **功能**：SDK通知云端录制、云端直播内容变化
- **参数**：无


<h3 id=CRVideo_SvrMixerOutputInfo>CRVideo_SvrMixerOutputInfo.callback = function(outputInfo){}</h3>



- **功能**：SDK通知云端录制文件、云端直播信息变化

+ **参数**：
    - outputInfo ----- 通知内容，json结构,请参见[CRVideo_MixerOutputInfoObj](TypeDefinitions.md#CRVideo_MixerOutputInfoObj)


<h3 id=CRVideo_Createboard>CRVideo_Createboard(title, width, height, pageCount)</h3>

- **功能**: 创建白板

- **返回值**:白板  boardID

| 参数      | 类型   | 含义                                              |
| :-------- | :----- | :------------------------------------------------ |
| title     | string | 白板名称                                          |
| width     | number | 白板宽度                                          |
| height    | number | 白板高度                                          |
| pageCount | number | 白板内有多个页（一般空白板1页，文档白板为实际页数 |

>其他房间成员会收到：[CRVideo_NotifyCreateBoard](#CRVideo_NotifyCreateBoard)事件;同时后台会记录下白板数据，新进入房间人员会收到：[CRVideo_NotifyInitBoards](#CRVideo_NotifyInitBoards)事件.注意：创建完白板后，一定要及尽快调用[CRVideo_InitBoardPageDat](#CRVideo_InitBoardPageDat)初始化各页数据


<h3 id=CRVideo_Closeboard>CRVideo_Closeboard(boardID)</h3>

- **功能**: 关闭白板

- **返回值**:无

| 参数    | 类型   | 含义     |
| :------ | :----- | :------- |
| boardID | string | 白板标识 |

>其他房间成员将收到[CRVideo_NotifyCloseBoard](#CRVideo_NotifyCloseBoard)事件；同时后台会移除对应白板的所有信息


<h3 id=CRVideo_InitBoardPageDat>CRVideo_InitBoardPageDat(boardID, boardPageNo, imgID, elemets)</h3>

- **功能**: 初始化白板图元数据

- **返回值**:无

| 参数        | 类型   | 含义                                                     |
| :---------- | :----- | :------------------------------------------------------- |
| boardID     | string | 白板标识                                                 |
| boardPageNo | number | 白板第几页（0:代表第一页）                               |
| imgID       | string | 白板的背景图片标识(空代表无背影图)                       |
| elemets     | string | 白板的初始图元（空代表无图元，一般在导入历史文件才用到） |

> 1. imgID非空时, 代表背景的图片ID。 img来源请参见[CRVideo_GetNetDiskDocFilePageInfo](#CRVideo_GetNetDiskDocFilePageInfo)

> 2. 其他房间成员将收到[CRVideo_NotifyInitBoardPageDat](#CRVideo_NotifyInitBoardPageDat)事件；

> 3. 后台会记录下白板的页数据，在新用户进入房间时，也会收到[CRVideo_NotifyInitBoardPageDat](#CRVideo_NotifyInitBoardPageDat)事件


 
 <h3 id=CRVideo_CreateElementID>CRVideo_CreateElementID()</h3>

- **功能**: 生成白板图元ID

- **返回值**:图元id

>本地操作；所有白板图元id，必须由此接口创建；（历史文件存储的图元id，在房间内不能再使用，应重新创建）


<h3 id=CRVideo_Addboardelement>CRVideo_Addboardelement(boardID, boardPageNo, element)</h3>

- **功能**: 添加图元信息

- **返回值**:elementID ----- 图元标识

| 参数        | 类型   | 含义                                                                                          |
| :---------- | :----- | :-------------------------------------------------------------------------------------------- |
| boardID     | string | 白板标识                                                                                      |
| boardPageNo | number | 白板的页序号(0为第一页)                                                                       |
| element     | string | 图元信息，参见json格式之[CRVideo_BoardElementObj](TypeDefinitions.md#CRVideo_BoardElementObj) |

>其他房间成员会收到：[CRVideo_NotifyAddBoardElement](#CRVideo_NotifyAddBoardElement)事件;同时后台会保存图元，新进入房间人员会在[CRVideo_NotifyInitBoardPageDat](#CRVideo_NotifyInitBoardPageDat)中得到这些图元


<h3 id=CRVideo_ModifyBoardElement>CRVideo_ModifyBoardElement(boardID, boardPageNo, element)</h3>

- **功能**: 修改图元信息

- **返回值**:elementID图元标识(string)

| 参数        | 类型   | 含义                                                                                           |
| :---------- | :----- | :--------------------------------------------------------------------------------------------- |
| boardID     | string | 白板标识                                                                                       |
| boardPageNo | number | 白板的页序号(0为第一页)                                                                        |
| element     | string | 图元信息，参见json格式之 [CRVideo_BoardElementObj](TypeDefinitions.md#CRVideo_BoardElementObj) |

>说明：其他房间成员会收到：[CRVideo_NotifyModifyBoardElement](#CRVideo_NotifyModifyBoardElement)事件;同时后台会覆盖对应图元的数据，新进入房间人员会在[CRVideo_NotifyInitBoardPageDat](#CRVideo_NotifyInitBoardPageDat)中得到这些图元


<h3 id=CRVideo_Delboardelement>CRVideo_Delboardelement(boardID, boardPageNo, elementIDs)</h3>

- **功能**: 删除图元

- **返回值**:无

| 参数        | 类型   | 含义                                           |
| :---------- | :----- | :--------------------------------------------- |
| boardID     | string | 白板标识                                       |
| boardPageNo | number | 白板的页序号(0为第一页)                        |
| elementIDs  | string | 图元id列表，多值时，以“；”分隔，如：“id1；id2” |

>说明：其他房间成员会收到：[CRVideo_NotifyDelBoardElement](#CRVideo_NotifyDelBoardElement)事件；同时后台会移除这些图元，新进入房间人员会在[CRVideo_NotifyInitBoardPageDat](#CRVideo_NotifyInitBoardPageDat)中将不包含这些图元


<h3 id=CRVideo_Setmousehotspot>CRVideo_Setmousehotspot(boardID, boardPageNo, x, y)</h3>

- **功能**: 设置白板鼠标热点

- **返回值**:无

| 参数        | 类型   | 含义                    |
| :---------- | :----- | :---------------------- |
| boardID     | string | 白板标识                |
| boardPageNo | number | 白板的页序号(0为第一页) |
| x           | number | 屏幕横坐标              |
| y           | number | 屏幕纵坐标              |




<h3 id=CRVideo_SetBoardCurPageNo>CRVideo_SetBoardCurPageNo(boardID, boardPageNo, pagePos1, pagePos2)</h3>

- **功能**: 白板翻页

- **返回值**:无

| 参数        | 类型   | 含义                                       |
| :---------- | :----- | :----------------------------------------- |
| boardID     | string | 白板标识                                   |
| boardPageNo | number | 白板的页序号(0为第一页)                    |
| pagePos1    | number | 私有扩展参数1（如可用于页内x方向滚动位置） |
| pagePos2    | number | 私有扩展参数2（如可用于页内y方向滚动位置） |


<h3 id=CRVideo_ListNetDiskDocFile>CRVideo_ListNetDiskDocFile(dir)</h3>

- **功能**: 查询文档列表

- **返回值**:无  .查询结果请参见[CRVideo_ListNetDiskDocFileRslt](#CRVideo_ListNetDiskDocFileRslt)

| 参数 | 类型   | 含义                                              |
| :--- | :----- | :------------------------------------------------ |
| dir  | string | 要查询的目录，空或"/"时，代表查询根目录下的内容； |

>查询服务器指定目录下的内容（子目录名、上传的文档源文件及文档转换状态）


<h3 id=CRVideo_UploadDocFileToNetDisk>CRVideo_UploadDocFileToNetDisk(svrPathFileName,locPathFileName)</h3>

- **功能**: 上传文档并转换

- **返回值**:无

| 参数            | 类型   | 含义                                                   |
| :-------------- | :----- | :----------------------------------------------------- |
| svrPathFileName | string | 服务器的路径文件名，包含目录时，服务器自动创建对应目录 |
| locPathFileName | string | 要上传文件的本地的路径文件名                           |

>上传进度请参见[CRVideo_NotifyNetDiskDocFileTrsfProgress](#CRVideo_NotifyNetDiskDocFileTrsfProgress), 转换结果请调用[CRVideo_ListNetDiskDocFile](#CRVideo_ListNetDiskDocFile)或者[CRVideo_GetNetDiskDocFilePageInfo](#CRVideo_GetNetDiskDocFilePageInfo)

>说明:支持的文件格式有：doc，docx, ppt, pptx, pps, ppsx, xls, xlsx, et, ett, wps, wpt, dps, pdf, txt, log, ini, bmp, png, jpg, jpeg；


<h3 id=CRVideo_DownloadDocSrcFile>CRVideo_DownloadDocSrcFile(svrPathFileName, locPathFileName)</h3>

- **功能**: 下载源始文档

- **返回值**:无

| 参数            | 类型   | 含义                                                   |
| :-------------- | :----- | :----------------------------------------------------- |
| svrPathFileName | string | 服务器的路径文件名                                     |
| locPathFileName | string | 文件下载后存放的本地的路径文件名，目录不存在时自动创建 |

>下载进度请参见[CRVideo_NotifyNetDiskDocFileTrsfProgress](#CRVideo_NotifyNetDiskDocFileTrsfProgress)



<h3 id=CRVideo_CancelTransforNetDiskDocFile>CRVideo_CancelTransforNetDiskDocFile(svrPathFileName)</h3>

- **功能**: 取消文档传输

- **返回值**:无

| 参数            | 类型   | 含义               |
| :-------------- | :----- | :----------------- |
| svrPathFileName | string | 服务器的路径文件名 |



<h3 id=CRVideo_DeleteNetDiskDocFile>CRVideo_DeleteNetDiskDocFile(svrPathFileName)</h3>

- **功能**: 删除文档

- **返回值**:无,  删除结果请参见[CRVideo_DeleteNetDiskDocFileRslt](#CRVideo_DeleteNetDiskDocFileRslt)

| 参数            | 类型   | 含义               |
| :-------------- | :----- | :----------------- |
| svrPathFileName | string | 服务器的路径文件名 |



<h3 id=CRVideo_GetNetDiskDocFilePageInfo>CRVideo_GetNetDiskDocFilePageInfo(svrPathFileName)</h3>

- **功能**: 获取文档的转换信息

- **返回值**:无， 结果请参见[CRVideo_GetNetDiskDocFilePageInfoRslt](#CRVideo_GetNetDiskDocFilePageInfoRslt)

| 参数            | 类型   | 含义               |
| :-------------- | :----- | :----------------- |
| svrPathFileName | string | 服务器的路径文件名 |

>说明:获取到的文档转换后的信息后， 就可以创建白板[CRVideo_Createboard](#CRVideo_Createboard), 然后为白板初始化文档内容[CRVideo_InitBoardPageDat](#CRVideo_InitBoardPageDat)



<h3 id=CRVideo_DownloadNetDiskDocFilePage>CRVideo_DownloadNetDiskDocFilePage(pagePathFileName, locPathFileName)</h3>

- **功能**: 下载文档转换后的页文件

- **返回值**:无， 下载进度请参见[CRVideo_NotifyNetDiskDocFileTrsfProgress](#CRVideo_NotifyNetDiskDocFileTrsfProgress)

| 参数             | 类型   | 含义                                                   |
| :--------------- | :----- | :----------------------------------------------------- |
| pagePathFileName | string | 页文件在服务器的路径文件名                             |
| locPathFileName  | string | 文件下载后存放的本地的路径文件名，目录不存在时自动创建 |

>说明:页文件格式： 6字节保留，4字节图像格式（2:jpg, 4:png），4字节图像内容长度，图像内容 


<h3 id=CRVideo_SetPicResource>CRVideo_SetPicResource(resourceid, picJsonVal)</h3>

- **功能**: (为本地录制的录像文件)添加图片资源

- **返回值**:无

| 参数       | 类型   | 含义                                                                                            |
| :--------- | :----- | :---------------------------------------------------------------------------------------------- |
| resourceid | string | 资源唯一标识；（可以是guid，也可以序号方式）                                                    |
| picJsonVal | object | 资源内容，json格式，详见[CRVideo_PicResourceObj](TypeDefinitions.md#CRVideo_PicResourceObj)说明 |




<h3 id=CRVideo_NotifyInitBoards>CRVideo_NotifyInitBoards.callback = function(BoardObjs){}
</h3>


- **功能**：SDK进入房间后通知房间中已经存在的白板列表

+ **参数**：
    - BoardObjs ----- 已经创建好的白板列表， json结构体请参见[CRVideo_BoardObjs](TypeDefinitions.md#CRVideo_BoardObjs)说明


<h3 id=CRVideo_NotifyInitBoardPageDat>CRVideo_NotifyInitBoardPageDat.callback = function(boardID,boardPageNo,imgID,elementDatas,operatorID){}</h3>

- **功能**：通知初始化白板内图元数据

+ **参数**：
    - boardID ----- 白板标识
    - boardPageNo ----- 白板页序号
    - imgID ----- 页背景文件ID（空代表无背景）
    - elementDatas ----- 此页的所有图元， 详见json结构之[CRVideo_BoardElementObjs](TypeDefinitions.md#CRVideo_BoardElementObjs)
    - operatorID ----- 初始化用户（为空时，代表进入房间时后台事件）


<h3 id=CRVideo_NotifyCreateBoard>CRVideo_NotifyCreateBoard.callback = function(jsonBoard,operatorID){}</h3>

- **功能**：SDK通知创建白板

+ **参数**：
    - jsonBoard ----- 白板信息，详见json格式之[CRVideo_BoardObj](TypeDefinitions.md#CRVideo_BoardObj)
    - operatorID ----- 创建白板的用户ID


<h3 id=CRVideo_NotifyCloseBoard>CRVideo_NotifyCloseBoard.callback = function(boardID,operatorID){}</h3>

- **功能**：SDK通知关闭白板

+ **参数**：
    - boardID ----- 白板标识
    - operatorID ----- 关闭白板的用户ID


<h3 id=CRVideo_NotifyBoardBkImage>CRVideo_NotifyBoardBkImage.callback = function(subPage,imgFileID,operatorID){}</h3>

- **功能**：SDK通知白板背景

+ **参数**：
    - subPage ----- 白板信息
    - imgFileID ----- 背景图片文件，通过downloadNetDiskFile可下载到本地显示
    - operatorID ----- 操作用户ID


<h3 id=CRVideo_NotifyAddBoardElement>CRVideo_NotifyAddBoardElement.callback = function(boardID,boardPageNo,element,operatorID){}</h3>


- **功能**：SDK通知添加图元信息

+ **参数**：
    - boardID ----- 白板标识
    - boardPageNo ----- 白板页序号
    - element ----- 此页的所有图元， 详见json结构之[CRVideo_BoardElementObj](TypeDefinitions.md#CRVideo_BoardElementObj)
    - operatorID ----- 添加图元的用户ID


<h3 id=CRVideo_NotifyModifyBoardElement>CRVideo_NotifyModifyBoardElement.callback = function(boardID,boardPageNo,element,operatorID){}</h3>


- **功能**：SDK通知图元信息被修改

+ **参数**：
    - boardID ----- 白板标识
    - boardPageNo ----- 白板页序号
    - element ----- 此页的所有图元, 详见json结构之[CRVideo_BoardElementObj](TypeDefinitions.md#CRVideo_BoardElementObj)
    - operatorID ----- 添加图元的用户ID

>应从页内找到旧的图元并替换；

<h3 id=CRVideo_NotifyDelBoardElement>CRVideo_NotifyDelBoardElement.callback = function(boardID,boardPageNo,elementIDs,operatorID){}</h3>

- **功能**：SDK通知删除图元

+ **参数**：
    - boardID ----- 白板标识
    - boardPageNo ----- 白板页序号
    - elementIDs -----  图元id列表，以 “；”分隔
    - operatorID ----- 删除图元的用户ID


<h3 id=CRVideo_NotifyMouseHotSpot>CRVideo_NotifyMouseHotSpot.callback = function(boardID,x,y,operatorID){}</h3>

- **功能**：SDK通知设置鼠标热点消息

+ **参数**：
    - boardID ----- 白板标识
    - x ----- 屏幕横坐标
    - y -----  屏幕纵坐标
    - operatorID ----- 操作者的用户ID



<h3 id=CRVideo_NotifyBoardCurPageNo>CRVideo_NotifyBoardCurPageNo.callback = function(boardID, pageNo, pagePos1, pagePos2, operatorID){}</h3>

- **功能**：SDK通知通知白板翻页

+ **参数**：
    - boardID ----- 白板标识
    - pageNo ----- 翻到第几页
    - pagePos1 ----- 扩展参数1
    - pagePos2 ----- 扩展参数2
    - operatorID ----- 操作者的用户ID


<h3 id=CRVideo_UndoEnableChange>CRVideo_UndoEnableChange.callback = function(isEnable){}</h3>


- **功能**：SDK通知白板的“撤消”功能是否可用

+ **参数**：
    - isEnable -----  撤消功能是否可用(bool)


<h3 id=CRVideo_RedoEnableChange>CRVideo_RedoEnableChange.callback = function(isEnable){}</h3>

- **功能**：SDK通知白板的“恢复”功能是否可用

+ **参数**：
    - isEnable -----  恢复功能是否可用(bool)




<h3 id=CRVideo_ListNetDiskDocFileRslt>CRVideo_ListNetDiskDocFileRslt.callback = function(dir, sdkErr, rslt){}</h3>

- **功能** 通知查询文档列表结果

+ **参数**：
    - dir ----- 查询的目录
    - sdkErr ----- 0代表成功，非0参见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
    - rslt ----- 成功时的查询的结果，参见json格式之[CRVideo_ListDocFileRslt](TypeDefinitions.md#CRVideo_ListDocFileRslt)


<h3 id=CRVideo_GetNetDiskDocFilePageInfoRslt>CRVideo_GetNetDiskDocFilePageInfoRslt.callback = function(svrPathFileName, sdkErr,rslt) {}</h3>


- **功能** 通知查询文档转换结果

+ **参数**
  - svrPathFileName ----- 查询的文档名
  - sdkErr ----- 0代表成功，非0参见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
  - rslt ----- 成功时的查询的结果，参见json格式之[CRVideo_GetDocPageInfoRslt](TypeDefinitions.md#CRVideo_GetDocPageInfoRslt)



<h3 id=CRVideo_DeleteNetDiskDocFileRslt>CRVideo_DeleteNetDiskDocFileRslt.callback = function(svrPathFileName, sdkERR) {}</h3>

- **功能**: 通知删除文档结果

+ **参数**:
  - svrPathFileName ----- 查询的文档名
  - sdkERR ----- 删除结果，0代表删除成功, 错误码取值参考[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)


<h3 id=CRVideo_NotifyNetDiskDocFileTrsfProgress>CRVideo_NotifyNetDiskDocFileTrsfProgress.callback = function(svrPathFileName, percent){}</h3>


- **功能** 通知文档传输进度

+ **参数**
  - svrPathFileName ----- 传输的文档，或页文件名
  - percent ----- 传输进度（等于100代表传输完成）


<h3 id=CRVideo_NotifyNetDiskIsFull>CRVideo_NotifyNetDiskIsFull.callback = function(fileList){}</h3>

- **功能**：SDK通知网盘空间已满，容量不足

+ **参数**：
    - fileList ----- 文件列表

<h3 id=CRVideo_GetOpenFileName>CRVideo_GetOpenFileName(title,directory,filter)</h3>

- **功能**：获取用户打开的全路径文件名

- **返回值**: 结果，空串表示用户取消， 否则返回用户选择的文件路径文件名

| 参数      | 类型   | 含义                                                                             |
| :-------- | :----- | :------------------------------------------------------------------------------- |
| title     | string | 打开文件框的标题                                                                 |
| directory | string | 打开对话框初始路径,不设初始值时请传空                                            |
| filter    | string | 文件类型过滤器（可为空），示例："Images (*.png *.xpm *.jpg);;Text files (*.txt)" |

<h3 id=CRVideo_GetSaveFileName>CRVideo_GetSaveFileName(title,directory,filter)</h3>

- **功能**：获取用户保存的全路径文件名

- **返回值**: 结果，空串表示用户取消， 否则返回用户保存的文件路径文件名

| 参数      | 类型   | 含义                                                                             |
| :-------- | :----- | :------------------------------------------------------------------------------- |
| title     | string | 打开文件框的标题                                                                 |
| directory | string | 打开对话框初始路径,不设初始值时请传空                                            |
| filter    | string | 文件类型过滤器（可为空），示例："Images (*.png *.xpm *.jpg);;Text files (*.txt)" |

<h3 id=CRVideo_SendCmd>CRVideo_SendCmd(targetUserId, data)</h3>

- **功能**：发送小块数据

- **返回值**:分配的任务ID(string)

| 参数         | 类型   | 含义                                   |
| :----------- | :----- | :------------------------------------- |
| targetUserId | string | 目标用户ID                             |
| data         | string | 发送的数据，，数据最大长度不应超过64KB |

>一次性发送不会有进度通知，发送结果事件[CRVideo_SendCmdRlst](#CRVideo_SendCmdRlst)，CRVideo_SendCmd不能被[CRVideo_CancelSend](#CRVideo_CancelSend)

<h3 id=CRVideo_SendBuffer>CRVideo_SendBuffer(targetUserId, data)</h3>

- **功能**：发送大块数据（分块发送）

- **返回值**:分配的任务ID(string)

| 参数         | 类型   | 含义                                  |
| :----------- | :----- | :------------------------------------ |
| targetUserId | string | 目标用户ID                            |
| data         | string | 发送的数据，数据最大长度不应超过100MB |

>进度通知事件[CRVideo_SendProgress](#CRVideo_SendProgress)，发送结果事件[CRVideo_SendBufferRlst](#CRVideo_SendBufferRlst)，取消发送[CRVideo_CancelSend](#CRVideo_CancelSend)

<h3 id=CRVideo_SendFile>CRVideo_SendFile(targetUserId, fileName)</h3>

- **功能**：发送文件（分块发送 ）

- **返回值**:分配的任务ID(string)

| 参数         | 类型   | 含义                                      |
| :----------- | :----- | :---------------------------------------- |
| targetUserId | string | 目标用户ID                                |
| fileName     | string | 需要发送的文件名名，文件大小不应超过100MB |

>进度通知事件[CRVideo_SendProgress](#CRVideo_SendProgress)，发送结果事件[CRVideo_SendFileRlst](#CRVideo_SendFileRlst)，取消发送[CRVideo_CancelSend](#CRVideo_CancelSend))


<h3 id=CRVideo_CancelSend>CRVideo_CancelSend(taskID)</h3>

- **功能**： 取消数据发送

- **返回值**:无

| 参数   | 类型   | 含义   |
| :----- | :----- | :----- |
| taskID | string | 任务ID |

>取消数据发送 操作完成则回调[CRVideo_CancelSendRlst](#CRVideo_CancelSendRlst)


<h3 id=CRVideo_Invite>CRVideo_Invite(invitedUserID, usrExtDat, cookie)</h3>

- **功能**: 发送邀请

- **返回值**: 返回inviteID(每个邀请对应的唯一ID) (string)

| 参数          | 类型   | 含义                                   |
| :------------ | :----- | :------------------------------------- |
| invitedUserID | string | 受邀者用户ID                           |
| usrExtDat     | string | 用户扩展数据                           |
| cookie        | string | 详细介绍见[关键词](KeyWords.md#cookie) |

>邀请成功则触发回调[CRVideo_InviteSuccess](#CRVideo_InviteSuccess)，失败则触发回调[CRVideo_InviteFail](#CRVideo_InviteFail)。

<h3 id=CRVideo_AcceptInvite>CRVideo_AcceptInvite(inviteID, usrExtDat, cookie)</h3>

- **功能**: 接受对方的邀请

- **返回值**: 无

| 参数      | 类型   | 含义                                   |
| :-------- | :----- | :------------------------------------- |
| inviteID  | string | 邀请ID                                 |
| usrExtDat | string | 用户扩展数据                           |
| cookie    | string | 详细介绍见[关键词](KeyWords.md#cookie) |

>操作成功则回调[CRVideo_AcceptInviteSuccess](#CRVideo_AcceptInviteSuccess),失败则回调[CRVideo_AcceptInviteFail](#CRVideo_AcceptInviteFail)。另外，对方（主动邀请者）会收到回调[CRVideo_NotifyInviteAccepted](#CRVideo_NotifyInviteAccepted)。


<h3 id=CRVideo_RejectInvite>CRVideo_RejectInvite(inviteID, usrExtDat, cookie)</h3>

- **功能**: 拒绝对方的邀请

- **返回值**: 无

| 参数      | 类型   | 含义                                   |
| :-------- | :----- | :------------------------------------- |
| inviteID  | string | 邀请ID                                 |
| usrExtDat | string | 用户扩展数据                           |
| cookie    | string | 详细介绍见[关键词](KeyWords.md#cookie) |

>操作成功则触发回调[CRVideo_RejectInviteSuccess](#CRVideo_RejectInviteSuccess),失败则触发回调[CRVideo_RejectInviteFail](#CRVideo_RejectInviteFail)。另外，对方（主动邀请者）会收到回调[CRVideo_NotifyInviteRejected](#CRVideo_NotifyInviteRejected)。

<h3 id=CRVideo_CancelInvite>CRVideo_CancelInvite(inviteID, usrExtDat, cookie)</h3>

- **功能**: 取消自己发送的邀请

- **返回值**: 无

| 参数      | 类型   | 含义                                   |
| :-------- | :----- | :------------------------------------- |
| inviteID  | string | 邀请ID                                 |
| usrExtDat | string | 用户扩展数据                           |
| cookie    | string | 详细介绍见[关键词](KeyWords.md#cookie) |

>操作成功则触发回调[CRVideo_CancelInviteSuccess](#CRVideo_CancelInviteSuccess),失败则触发回调[CRVideo_CancelInviteFail](#CRVideo_CancelInviteFail)。另外，对方（被邀请者） 收到回调[CRVideo_NotifyInviteCanceled](#CRVideo_NotifyInviteCanceled)。

<h3 id=CRVideo_InviteSuccess>CRVideo_InviteSuccess.callback = function(inviteID,cookie){}</h3>

- **功能**: 发送邀请成功

| 参数     | 类型   | 含义                                   |
| :------- | :----- | :------------------------------------- |
| inviteID | string | 邀请ID                                 |
| cookie   | string | 详细介绍见[关键词](KeyWords.md#cookie) |

<h3 id=CRVideo_InviteFail>CRVideo_InviteFail.callback = function(inviteID,sdkErr,cookie){}</h3>

- **功能**: 发送邀请失败

| 参数     | 类型   | 含义                                                       |
| :------- | :----- | :--------------------------------------------------------- |
| inviteID | string | 邀请ID                                                     |
| sdkErr   | number | 操作失败代码，详见[错误码](Constant.md#CRVIDEOSDK_ERR_DEF) |
| cookie   | string | 详细介绍见[关键词](KeyWords.md#cookie)                     |

<h3 id=CRVideo_CancelInviteSuccess>CRVideo_CancelInviteSuccess.callback = function(inviteID,cookie){}</h3>

- **功能**: 取消自己发送的邀请成功

| 参数     | 类型   | 含义                                   |
| :------- | :----- | :------------------------------------- |
| inviteID | string | 邀请ID                                 |
| cookie   | string | 详细介绍见[关键词](KeyWords.md#cookie) |

<h3 id=CRVideo_CancelInviteFail>CRVideo_CancelInviteFail.callback = function(inviteID,sdkErr,cookie){}</h3>

- **功能**: 取消自己发送的邀请失败

| 参数     | 类型   | 含义                                                       |
| :------- | :----- | :--------------------------------------------------------- |
| inviteID | string | 邀请ID                                                     |
| sdkErr   | number | 操作失败代码，详见[错误码](Constant.md#CRVIDEOSDK_ERR_DEF) |
| cookie   | string | 详细介绍见[关键词](KeyWords.md#cookie)                     |

<h3 id=CRVideo_AcceptInviteSuccess>CRVideo_AcceptInviteSuccess.callback = function(inviteID,cookie){}</h3>

- **功能**: 接受对方的邀请成功

| 参数     | 类型   | 含义                                   |
| :------- | :----- | :------------------------------------- |
| inviteID | string | 邀请ID                                 |
| cookie   | string | 详细介绍见[关键词](KeyWords.md#cookie) |

<h3 id=CRVideo_AcceptInviteFail>CRVideo_AcceptInviteFail.callback = function(inviteID,sdkErr,cookie){}</h3>

- **功能**: 接受对方的邀请失败

| 参数     | 类型   | 含义                                                       |
| :------- | :----- | :--------------------------------------------------------- |
| inviteID | string | 邀请ID                                                     |
| sdkErr   | number | 操作失败代码，详见[错误码](Constant.md#CRVIDEOSDK_ERR_DEF) |
| cookie   | string | 详细介绍见[关键词](KeyWords.md#cookie)                     |


<h3 id=CRVideo_RejectInviteSuccess>CRVideo_RejectInviteSuccess.callback = function(inviteID,cookie){}</h3>

- **功能**: 拒绝对方的邀请成功

| 参数     | 类型   | 含义                                   |
| :------- | :----- | :------------------------------------- |
| inviteID | string | 邀请ID                                 |
| cookie   | string | 详细介绍见[关键词](KeyWords.md#cookie) |

<h3 id=CRVideo_RejectInviteFail>CRVideo_RejectInviteFail.callback = function(inviteID,sdkErr,cookie){}</h3>

- **功能**: 拒绝对方的邀请失败

| 参数     | 类型   | 含义                                                       |
| :------- | :----- | :--------------------------------------------------------- |
| inviteID | string | 邀请ID                                                     |
| sdkErr   | number | 操作失败代码，详见[错误码](Constant.md#CRVIDEOSDK_ERR_DEF) |
| cookie   | string | 详细介绍见[关键词](KeyWords.md#cookie)                     |

<h3 id=CRVideo_NotifyInviteIn>CRVideo_NotifyInviteIn.callback = function(inviteID,inviterUsrID,usrExtDat){}</h3>

- **功能**: 通知有人邀请

| 参数         | 类型   | 含义         |
| :----------- | :----- | :----------- |
| inviteID     | string | 邀请ID       |
| inviterUsrID | string | 邀请者用户ID |
| usrExtDat    | string | 用户扩展数据 |

<h3 id=CRVideo_NotifyInviteAccepted>CRVideo_NotifyInviteAccepted.callback = function(inviteID,usrExtDat){}</h3>

- **功能**: 通知邀请被接受

| 参数      | 类型   | 含义         |
| :-------- | :----- | :----------- |
| inviteID  | string | 邀请ID       |
| usrExtDat | string | 用户扩展数据 |

<h3 id=CRVideo_NotifyInviteRejected>CRVideo_NotifyInviteRejected.callback = function(inviteID,reason,usrExtDat){}</h3>

- **功能**: 通知邀请被拒绝

| 参数      | 类型   | 含义                                                           |
| :-------- | :----- | :------------------------------------------------------------- |
| inviteID  | string | 邀请ID                                                         |
| reason    | number | 邀请被拒绝原因，定义见[错误码](Constant.md#CRVIDEOSDK_ERR_DEF) |
| usrExtDat | string | 用户扩展数据                                                   |

<h3 id=CRVideo_NotifyInviteCanceled>CRVideo_NotifyInviteCanceled.callback = function(inviteID,reason,usrExtDat){}</h3>

- **功能**: 通知邀请被取消

| 参数      | 类型   | 含义                                                           |
| :-------- | :----- | :------------------------------------------------------------- |
| inviteID  | string | 邀请ID                                                         |
| reason    | number | 邀请被取消原因，定义见[错误码](Constant.md#CRVIDEOSDK_ERR_DEF) |
| usrExtDat | string | 用户扩展数据                                                   |


<h3 id=CRVideo_InitQueueDat>CRVideo_InitQueueDat(cookie)</h3>

- **功能**: 初始化队列

- **返回值**:无

| 参数   | 类型   | 含义                                   |
| :----- | :----- | :------------------------------------- |
| cookie | string | 详细介绍见[关键词](KeyWords.md#cookie) |

>操作完成回调[CRVideo_InitQueueDatRslt](#CRVideo_InitQueueDatRslt)，队列初始化成功后才可获取队列队列相关信息


<h3 id=CRVideo_RefreshAllQueueStatus>CRVideo_RefreshAllQueueStatus()</h3>

- **功能**: 刷新所有队列状态

- **返回值**:无

>操作完成则触发[CRVideo_QueueStatusChanged](#CRVideo_QueueStatusChanged)（当前排队的队列，或服务的队列，sdk自动有状态变化回调）


<h3 id=CRVideo_GetAllQueueInfo>CRVideo_GetAllQueueInfo()</h3>

- **功能**: 查询队列

- **返回值**:返回所有队列信息（Array ----- [CRVideo_QueueInfo](TypeDefinitions.md#CRVideo_QueueInfo)）


<h3 id=CRVideo_GetQueueStatus>CRVideo_GetQueueStatus(queID)</h3>

- **功能**: 获取队列状态

- **返回值**:返回队列状态（[CRVideo_QueueStatusObj](TypeDefinitions.md#CRVideo_QueueStatusObj)）

| 参数  | 类型   | 含义   |
| :---- | :----- | :----- |
| queID | string | 队列ID |


<h3 id=CRVideo_GetQueuingInfo>CRVideo_GetQueuingInfo()</h3>

- **功能**: 获取我的排队信息

- **返回值**:返回排队信息（[CRVideo_QueuingInfo](TypeDefinitions.md#CRVideo_QueuingInfo)）


<h3 id=CRVideo_GetServingQueues>CRVideo_GetServingQueues()</h3>

- **功能**: 获取我服务的所有队列


- **返回值**:返回我服务的队列列表（Array）


<h3 id=CRVideo_GetSessionInfo>CRVideo_GetSessionInfo()</h3>

- **功能**: 获取我的房间信息

- **返回值**: 返回房间信息（[CRVideo_SessionInfo](TypeDefinitions.md#CRVideo_SessionInfo)）


<h3 id=CRVideo_StartQueuing2>CRVideo_StartQueuing2(queID,usrExtDat,cookie)</h3>

- **功能**: 开始排队


- **返回值**:无

| 参数      | 类型   | 含义                                         |
| :-------- | :----- | :------------------------------------------- |
| queID     | string | 队列ID                                       |
| usrExtDat | string | 用户排队携带的扩展数据, 座席在服务时可获得。 |
| cookie    | string | 详细介绍见[关键词](KeyWords.md#cookie)       |

>带自定义扩展参数。
>操作完成回调[CRVideo_StartQueuingRslt](#CRVideo_StartQueuingRslt)


<h3 id=CRVideo_StopQueuing>CRVideo_StopQueuing(cookie)</h3>

- **功能**: 停止排队


- **返回值**:无

| 参数   | 类型   | 含义                                   |
| :----- | :----- | :------------------------------------- |
| cookie | string | 详细介绍见[关键词](KeyWords.md#cookie) |

>操作完成回调[CRVideo_StopQueuingRslt](#CRVideo_StopQueuingRslt)


<h3 id=CRVideo_StartService2>CRVideo_StartService2(queID,priority,cookie)</h3>

- **功能**: 开始服务队列

- **返回值**:无

| 参数     | 类型   | 含义                                                                       |
| :------- | :----- | :------------------------------------------------------------------------- |
| queID    | number | 队列ID                                                                     |
| priority | number | 坐席优先级 (缺省为0,取值为0~1000内整数。值越小优先级越高。0为最高优先级) |
| cookie   | string | 详细介绍见[关键词](KeyWords.md#cookie)                                     |

>可以多次调用，开启对多个队列的服务。操作回调[CRVideo_StartServiceRslt](#CRVideo_StartServiceRslt) 开启成功后： a. 如果没有开启免打挽，那么系统会自动分配客户：[CRVideo_AutoAssignUser](#CRVideo_AutoAssignUser)； b. 如果开启免打挽，系统就不会分配客户，如需服务客户可调用：[CRVideo_ReqAssignUser](#CRVideo_ReqAssignUser)
> 座席优先级描述：
> 1. 座席优先级只在服务的队列内部有效；
> 1. 客户优先分配给服务此队列优先级最高的，且空闲的座席；
> 1. 优先级相同时，则分配给最先空闲的座席；
> 1. 优先级高的座席变空闲时，不抢夺已分配的客户；


<h3 id=CRVideo_StopService>CRVideo_StopService(queID, cookie)</h3>

- **功能**: 停止服务队列

- **返回值**:无

| 参数   | 类型   | 含义                                   |
| :----- | :----- | :------------------------------------- |
| queID  | string | queID 队列ID                           |
| cookie | string | 详细介绍见[关键词](KeyWords.md#cookie) |

>操作完成回调[CRVideo_StopServiceRslt](#CRVideo_StopServiceRslt)


<h3 id=CRVideo_ReqAssignUser>CRVideo_ReqAssignUser(cookie)</h3>

- **功能**: 请求分配一个客户


- **返回值**:无

| 参数   | 类型   | 含义                                   |
| :----- | :----- | :------------------------------------- |
| cookie | string | 详细介绍见[关键词](KeyWords.md#cookie) |

>回调函数：[CRVideo_ReqAssignUserRslt](#CRVideo_ReqAssignUserRslt)

>当关闭免打扰时，系统将自动分配客户，无需调用此函数； 当开启免打扰时，系统不再自动分配客户，座席如需服务客户可使用此函数分配


<h3 id=CRVideo_AcceptAssignUser>CRVideo_AcceptAssignUser(queID, UID, cookie)</h3>

- **功能**: 接受分配的客户


| 参数   | 类型   | 含义                                   |
| :----- | :----- | :------------------------------------- |
| queID  | string | 队列ID                                 |
| UID    | string | 队列中的用户ID                         |
| cookie | string | 详细介绍见[关键词](KeyWords.md#cookie) |


<h3 id=CRVideo_RejectAssignUser>CRVideo_RejectAssignUser(queID, UID, cookie)</h3>

- **功能**: 拒绝分配的客户


- **返回值**:无

| 参数   | 类型   | 含义                                   |
| :----- | :----- | :------------------------------------- |
| queID  | string | 队列ID                                 |
| UID    | string | 队列中的用户ID                         |
| cookie | string | 详细介绍见[关键词](KeyWords.md#cookie) |



<h3 id=CRVideo_InitQueueDatRslt>CRVideo_InitQueueDatRslt.callback = function(sdkEr,cookie){}</h3>


- **功能**：队列初始化操作结果

+ **参数**：
    - sdkEr ----- 操作失败代码，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)



<h3 id=CRVideo_QueueStatusChanged>CRVideo_QueueStatusChanged.callback = function(queStatus){}</h3>

- **功能**：队列状态变化通知

+ **参数**：
    - queStatus ----- [队列状态](TypeDefinitions.md#CRVideo_QueStatus)


<h3 id=CRVideo_QueuingInfoChanged>CRVideo_QueuingInfoChanged.callback = function(queuingInfo){}</h3>


- **功能**：排队信息变化通知

+ **参数**：
    - queuingInfo ----- [排队信息](TypeDefinitions.md#CRVideo_QueuingInfo)


<h3 id=CRVideo_StartQueuingRslt>CRVideo_StartQueuingRslt.callback = function(sdkEr,cookie){}</h3>


- **功能**：开始排队操作结果

+ **参数**：
    - sdkEr ----- 操作失败代码，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_StopQueuingRslt>CRVideo_StopQueuingRslt.callback = function(sdkEr,cookie){}</h3>

- **功能**：停止排队操作结果

+ **参数**：
    - sdkEr ----- 操作失败代码，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_StartServiceRslt>CRVideo_StartServiceRslt.callback = function(queID,sdkEr,cookie){}</h3>

- **功能**：开始服务队列操作结果

+ **参数**：
    - queID ----- 服务的队列ID
    - sdkEr ----- 操作失败代码,定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_StopServiceRslt>CRVideo_StopServiceRslt.callback = function(queID,sdkEr,cookie){}</h3>

- **功能**：停止服务队列操作结果

+ **参数**：
    - queID ----- 服务的队列ID
    - sdkEr ----- 操作失败代码,定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_ResponseAssignUserRslt>CRVideo_ResponseAssignUserRslt.callback = function(sdkEr,cookie){}</h3>


- **功能**：响应分配客户操作结果

+ **参数**：
    - sdkEr ----- 操作失败代码,定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_AutoAssignUser>CRVideo_AutoAssignUser.callback = function(user){}</h3>


- **功能**：系统自动安排客户

+ **参数**：
    - user ----- 队列用户信息，详见[CRVideo_QueUser](TypeDefinitions.md#CRVideo_QueUser)。如果想停止系统的自动分配，请通[CRVideo_SetDNDStatus](API.md#CRVideo_SetDNDStatus)设置免打扰功能


<h3 id=CRVideo_ReqAssignUserRslt>CRVideo_ReqAssignUserRslt.callback = function(sdkEr,user,cookie){}</h3>


- **功能**：请求分配客户操作结果

+ **参数**：
    - sdkEr ----- 操作失败代码,定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
    - user ----- 队列用户信息，详见[CRVideo_QueUser](TypeDefinitions.md#CRVideo_QueUser)
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_CancelAssignUser>CRVideo_CancelAssignUser.callback = function(queID,userid){}</h3>

- **功能**：系统取消之前分配的的客户

+ **参数**：
    - queID ----- 服务的队列
    - userid ----- 用户id

> 系统通过接口[CRVideo_AutoAssignUser](#CRVideo_AutoAssignUser)给队列服务者自动推送客户（或队列服务者通过[CRVideo_ReqAssignUser](#CRVideo_ReqAssignUser)请求分配客户），收到系统分配的客户后，如果队列服务者30秒之内不接受[CRVideo_AcceptAssignUser](#CRVideo_AcceptAssignUser)也不拒绝[CRVideo_RejectAssignUser](#CRVideo_RejectAssignUser)推送的客户，系统将通过本接口取消分配，然后将客户分配给其他空闲的服务者。



<h3 id=CRVideo_UserEnter>CRVideo_UserEnter(queID, jsonUsr)</h3>

- **功能**：客户进入通知

+ **参数**：

| 参数    | 类型     | 含义         |
| :------ | :------- | :----------- |
| queID   | number   | 服务的队列   |
| jsonUsr | json格式 | 队列用户信息 |


<h3 id=CRVideo_UserLeave>CRVideo_UserLeave(queID, usrID, inService)</h3>

- **功能**：客户离开通知

+ **参数**：

| 参数      | 类型   | 含义                            |
| :-------- | :----- | :------------------------------ |
| queID     | number | 服务的队列                      |
| userid    | string | 用户id                          |
| inService | number | 服务状态（0-未服务 1-开始服务） |


> 系统通过接口[CRVideo_AutoAssignUser](#CRVideo_AutoAssignUser)给队列服务者自动推送客户（或队列服务者通过[CRVideo_ReqAssignUser](#CRVideo_ReqAssignUser)请求分配客户），收到系统分配的客户后，如果队列服务者30秒之内不接受[CRVideo_AcceptAssignUser](#CRVideo_AcceptAssignUser)也不拒绝[CRVideo_RejectAssignUser](#CRVideo_RejectAssignUser)推送的客户，系统将通过本接口取消分配，然后将客户分配给其他空闲的服务者。


<h3 id=CRVideo_Call>CRVideo_Call(calledUserID, meetObj, usrExtDat, cookie)</h3>

- **功能**: 发起呼叫

- **返回值**:返回本次呼叫标识码（呼叫ID）

| 参数         | 类型                                                          | 含义                                   |
| :----------- | :------------------------------------------------------------ | :------------------------------------- |
| calledUserID | string                                                        | 被叫用户的账户ID                       |
| meetObj      | [CRVideo_MeetInfoObj](TypeDefinitions.md#CRVideo_MeetInfoObj) | 房间信息                               |
| usrExtDat    | string                                                        | 自定义扩展参数                         |
| cookie       | string                                                        | 详细介绍见[关键词](KeyWords.md#cookie) |

>操作成功则触发回调[CRVideo_CallSuccess](#CRVideo_CallSuccess),失败则触发回调[CRVideo_CallFail](#CRVideo_CallFail)。 呼叫时，对方迟迟不响应，30秒后系统自动结束呼叫


<h3 id=CRVideo_AcceptCall>CRVideo_AcceptCall(callID, meetObj, usrExtDat, cookie)</h3>

- **功能**: 接受对方发起的呼叫

| 参数      | 类型                                                          | 含义                                   |
| :-------- | :------------------------------------------------------------ | :------------------------------------- |
| callID    | string                                                        | 呼叫ID                                 |
| meetObj   | [CRVideo_MeetInfoObj](TypeDefinitions.md#CRVideo_MeetInfoObj) | 房间信息                               |
| usrExtDat | string                                                        | 自定义扩展参数                         |
| cookie    | string                                                        | 详细介绍见[关键词](KeyWords.md#cookie) |

>开始进入视频房间。操作成功则回调[CRVideo_AcceptCallSuccess](#CRVideo_AcceptCallSuccess)，失败则回调[CRVideo_AcceptCallFail](#CRVideo_AcceptCallFail)


<h3 id=CRVideo_RejectCall>CRVideo_RejectCall(callID, usrExtDat, cookie)</h3>

- **功能**: 拒绝对方发起的呼叫

- **返回值**:无

| 参数      | 类型   | 含义                                   |
| :-------- | :----- | :------------------------------------- |
| callID    | string | 呼叫ID                                 |
| usrExtDat | string | 自定义扩展参数                         |
| cookie    | string | 详细介绍见[关键词](KeyWords.md#cookie) |

>操作成功则回调[CRVideo_RejectCallSuccess](#CRVideo_RejectCallSuccess)，失败则回调[CRVideo_RejectCallFail](#CRVideo_RejectCallFail)


<h3 id=CRVideo_HungupCall>CRVideo_HungupCall(callID, usrExtDat, cookie)</h3>

- **功能**: 挂断呼叫

- **返回值**:无

| 参数      | 类型   | 含义                                   |
| :-------- | :----- | :------------------------------------- |
| callID    | string | 呼叫ID                                 |
| usrExtDat | string | 自定义扩展参数                         |
| cookie    | string | 详细介绍见[关键词](KeyWords.md#cookie) |

>操作成功则回调[CRVideo_HangupCallSuccess](#CRVideo_HangupCallSuccess)，失败则回调[CRVideo_HangupCallFail](#CRVideo_HangupCallFail)



<h3 id=CRVideo_CallSuccess>CRVideo_CallSuccess.callback = function(callID ,cookie){}</h3>


- **功能**：呼叫他人操作成功响应

+ **参数**：
    - callID ----- 呼叫全局标识
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_CallFail>CRVideo_CallFail.callback = function(callID,sdkEr,cookie){}</h3>


- **功能**：呼叫他人操作失败响应

+ **参数**：
    - callID ----- 呼叫全局标识
    - sdkEr ----- 操作失败代码，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_AcceptCallSuccess>CRVideo_AcceptCallSuccess.callback = function(callID,cookie){}</h3>


- **功能**：接受他人呼叫操作成功响应

+ **参数**：
    - callID ----- 呼叫全局标识
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_AcceptCallFail>CRVideo_AcceptCallFail.callback = function(callID,sdkEr,cookie){}</h3>


- **功能**：接受他人呼叫操作失败响应

+ **参数**：
    - callID ----- 呼叫全局标识
    - sdkEr ----- 操作失败代码，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_RejectCallSuccess>CRVideo_RejectCallSuccess.callback = function(callID,cookie){}</h3>

- **功能**：拒绝他人的呼叫成功响应

+ **参数**：
    - callID ----- 呼叫全局标识
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_RejectCallFail>CRVideo_RejectCallFail.callback = function(callID,sdkEr,cookie){}</h3>

- **功能**：拒绝他人的呼叫失败响应

+ **参数**：
    - callID ----- 呼叫全局标识
    - sdkEr ----- 操作失败代码,定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_HangupCallSuccess>CRVideo_HangupCallSuccess.callback = function(callID,cookie){}</h3>



- **功能**：挂断他人的呼叫成功响应

+ **参数**：
    - callID ----- 呼叫全局标识
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_HangupCallFail>CRVideo_HangupCallFail.callback = function(callID,sdkEr,cookie){}</h3>



- **功能**：挂断呼叫操作失败响应

+ **参数**：
    - callID ----- 呼叫全局标识
    - sdkEr ----- 操作失败代码，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_NotifyCallIn>CRVideo_NotifyCallIn.callback = function(callID,meetObj,callerID,usrExtDat){}</h3>


- **功能**：SDK通知自己被呼叫

+ **参数**：
    - callID ----- 呼叫全局标识
    - meetObj ----- [房间信息](TypeDefinitions.md#MeetInfoObj)
    - callerID ----- 呼叫人员的标识ID
    - usrExtDat ----- 自定义扩展参数


<h3 id=CRVideo_NotifyCallAccepted>CRVideo_NotifyCallAccepted.callback = function(callID,meetObj,usrExtDat){}</h3>


- **功能**：SDK通知自己视频呼叫被对方接受

+ **参数**：
    - callID ----- 呼叫全局标识
    - meetObj ----- 房间信息
    - usrExtDat ----- 自定义扩展参数


<h3 id=CRVideo_NotifyCallRejected>CRVideo_NotifyCallRejected.callback = function(callID,sdkErr,usrExtDat){}</h3>


- **功能**：SDK通知自己呼叫被对方拒绝

+ **参数**：
    - callID ----- 呼叫全局标识
    - sdkErr ----- 操作失败代码，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
    - usrExtDat ----- 自定义扩展参数


<h3 id=CRVideo_NotifyCallHungup>CRVideo_NotifyCallHungup.callback = function(callID,usrExtDat){}</h3>

- **功能**：SDK通知自己呼叫被挂断

+ **参数**：
    - callID ----- 呼叫全局标识
    - usrExtDat ----- 自定义扩展参数


<h3 id=CRVideo_SendCmdRlst>CRVideo_SendCmdRlst.callback = function(taskID,sdkEr,cookie){}</h3>


- **功能**：发送小块数据时，SDK通知发送结果

+ **参数**：
    - taskID ----- 发送任务id
    - sdkEr ----- 操作失败代码，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
    - cookie  ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_SendBufferRlst>CRVideo_SendBufferRlst.callback = function(taskID,sdkEr,cookie){}</h3>


- **功能**：发送大块数据时，SDK通知发送结果

+ **参数**：
    - taskID ----- 发送任务id
    - sdkEr ----- 操作失败代码，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
    - cookie  ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_SendFileRlst>CRVideo_SendFileRlst.callback = function(taskID,fileName,sdkEr,cookie){}</h3>


- **功能**：发送文件时，SDK通知发送结果

+ **参数**：
    - taskID ----- 发送任务id
    - fileName ----- 文件名
    - sdkEr ----- 操作失败代码，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
    - cookie  ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_SendProgress>CRVideo_SendProgress.callback = function(taskID,sendedLen,totalLen,cookie){}</h3>


- **功能**：发送数据时，SDK通知发送进度

+ **参数**：
    - taskID ----- 发送任务id
    - sendedLen ----- 已发送的数据长度
    - totalLen ----- 需要发送的总长度
    - cookie  ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_CancelSendRlst>CRVideo_CancelSendRlst.callback = function(taskID,sdkEr,cookie){}</h3>



- **功能**：取消发送响应

+ **参数**：
    - taskID ----- 发送任务id
    - sdkEr ----- 操作失败代码，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
    - cookie  ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_NotifyCmdData>CRVideo_NotifyCmdData.callback = function(sourceUserId,data){}</h3>


- **功能**：SDK通知收到小块数据

+ **参数**：
    - sourceUserId ----- 发送数据的用户id
    - data ----- 数据的内容（string）


<h3 id=CRVideo_NotifyBufferData>CRVideo_NotifyBufferData.callback = function(sourceUserId,data){}</h3>



- **功能**：SDK通知收到大块数据

+ **参数**：
    - sourceUserId ----- 发送数据的用户id 
    - data ----- 数据的内容（string）      


<h3 id=CRVideo_NotifyFileData>CRVideo_NotifyFileData.callback = function(sourceUserId,tmpFile,orgFileName){}</h3>


- **功能**：SDK通知收到文件数据（收到的文件生成在系统临时目录下，请尽快移走对应文件）

+ **参数**：
    - sourceUserId ----- 发送数据的用户id
    - tmpFile ----- 临时文件，不需要时，请移除或删除对应文件
    - orgFileName ----- 源始文件名


<h3 id=CRVideo_NotifyCancelSend>CRVideo_NotifyCancelSend.callback = function(taskID){}</h3>


- **功能**：SDK通知取消发送文件数据

+ **参数**：
    - taskID ----- 取消的任务id




<h3 id=CRVideo_GetVideoWallMode2>CRVideo_GetVideoWallMode2()</h3>

- **功能**: 获取视频墙当前分屏模式

- **返回值**:分屏模式(业务层自由定义)


<h3 id=CRVideo_SetVideoWallMode2>CRVideo_SetVideoWallMode2(videoWallMode)</h3>

- **功能**: 设置视频墙分屏模式

- **返回值**:无

| 参数          | 类型                                                           | 含义     |
| :------------ | :------------------------------------------------------------- | :------- |
| videoWallMode | [CRVideo_VIDEOLAYOUTMODE](Constant.md#CRVideo_VIDEOLAYOUTMODE) | 分屏模式 |



<h3 id=CRVideo_GetVideoCfg>CRVideo_GetVideoCfg()</h3>

- **功能**: 获取视频参数


- **返回值**:获取视频参数（[CRVideo_VideoCfg](TypeDefinitions.md#CRVideo_VideoCfg)）



<h3 id=CRVideo_SetVideoCfg>CRVideo_SetVideoCfg(cfg)</h3>

- **功能**: 视频设置


- **返回值**: 设置成功与否，true/false

| 参数 | 类型                                                    | 含义     |
| :--- | :------------------------------------------------------ | :------- |
| cfg  | [CRVideo_VideoCfg](TypeDefinitions.md#CRVideo_VideoCfg) | 设置参数 |




<h3 id=CRVideo_GetVideoStatus>CRVideo_GetVideoStatus(UID)</h3>

- **功能**: 视频状态

- **返回值**:麦克风摄像头状态（[CRVideo_VSTATUS](Constant.md#CRVideo_VSTATUS)）

| 参数 | 类型   | 含义   |
| :--- | :----- | :----- |
| UID  | string | 用户ID |


<h3 id=CRVideo_GetDefaultVideo>CRVideo_GetDefaultVideo(UID)</h3>

- **功能**: 获取默认视频

- **返回值**:返回摄像头ID （number）

| 参数 | 类型   | 含义   |
| :--- | :----- | :----- |
| UID  | string | 用户ID |


<h3 id=CRVideo_SetDefaultVideo>CRVideo_SetDefaultVideo(UID, videoID)</h3>

- **功能**: 设置默认视频

- **返回值**:无

| 参数    | 类型   | 含义     |
| :------ | :----- | :------- |
| UID     | string | 用户ID   |
| videoID | number | 摄像头ID |

>注意：  
>1、如果用户只有一个摄像头，可以不设置默认摄像头；  
>2、如果用户有多个摄像头，但是只想用其中一个，需要把这个设置为默认摄像头；  
>3、如果用户有多个摄像头，全都要用到，就不需要设置默认摄像头，[打开摄像头](#CRVideo_OpenVideo)时会全部打开；  
>4、如果用户有多个摄像头，想用到其中部分几个摄像头，不用设置默认摄像头，但是要先[启用多摄像头](#CRVideo_SetEnableMutiVideo),然后调用[CRVideo_SetLocVideoAttributes](#CRVideo_SetLocVideoAttributes)把不想用的禁用了，之后打开的时候就只打开没禁用的那几个；


<h3 id=CRVideo_GetAllVideoInfo>CRVideo_GetAllVideoInfo(userID)</h3>

- **功能**: 获取用户的所有摄像头信息

- **返回值**:用户的所有摄像头信息列表，数据类型为：[CRVideo_VideoInfosObj](TypeDefinitions.md#CRVideo_VideoInfosObj)。

| 参数   | 类型   | 含义   |
| :----- | :----- | :----- |
| userID | string | 用户ID |


<h3 id=CRVideo_SetVideoDenoise>CRVideo_SetVideoDenoise(bDenoise)</h3>

- **功能**: 开启或关闭摄像头降噪处理

- **返回值**:无

| 参数     | 类型 | 含义                     |
| :------- | :--- | :----------------------- |
| bDenoise | bool | 取值true时，开启降噪处理 |
 

<h3 id=CRVideo_GetVideoDenoise>CRVideo_GetVideoDenoise()</h3>

- **功能**: 获取是否开启摄像头降噪

- **返回值**:true:降噪已开启，false:降噪未开启




<h3 id=CRVideo_CreateScreenCamDev>CRVideo_CreateScreenCamDev(camName,monitor)</h3>

- **功能**: 创建桌面摄像头(sdk最大支持5个)

- **返回值**:<0,  失败,  >=0, 为videoID(摄像头ID) (number)

| 参数    | 类型   | 含义                                                                                                                                         |
| :------ | :----- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| camName | string | 摄像头名称                                                                                                                                   |
| monitor | number | 显示器序号，与系统显示编号一致，-1代表主屏。(创建时对应monitorID不存在时将失败， 运行中monitorID对应的屏关闭时显示全黑，开启后恢复正常工作） |

>添加成功后与本地摄像头处理一致；getAllVideoInfo接口可以识别摄像头类型。


<h3 id=CRVideo_UpdateScreenCamDev>CRVideo_UpdateScreenCamDev(videoID,monitor)</h3>

- **功能**: 更新桌面摄像头

- **返回值**:false失败, true成功 (bool)

| 参数    | 类型   | 含义                                                                   |
| :------ | :----- | :--------------------------------------------------------------------- |
| videoID | number | 摄像头id                                                               |
| monitor | number | 显示器序号，与系统显示编号一致，-1代表主屏。(monitorID不存在时将失败） |


<h3 id=CRVideo_DestroyScreenCamDev>CRVideo_DestroyScreenCamDev(videoID)</h3>

- **功能**: 消毁桌面摄像头

- **返回值**:无

| 参数    | 类型   | 含义     |
| :------ | :----- | :------- |
| videoID | number | 摄像头id |


<h3 id=CRVideo_CreateCustomVideoDev>CRVideo_CreateCustomVideoDev(camName,pixFmt,width,height,extParams)</h3>

- **功能**: 创建自定义摄像头(sdk最大支持5个)

- **返回值**: <0 ,失败; >=0, 为videoID(摄像头ID) (number)

| 参数      | 类型   | 含义                                                              |
| :-------- | :----- | :---------------------------------------------------------------- |
| camName   | string | 摄像头名称                                                        |
| pixFmt    | number | 参见 [CRVideo_VIDEO_FORMAT](Constant.md#CRVideo_VIDEO_FORMAT)定义 |
| width     | number | 图像宽度                                                          |
| height    | number | 图像高度                                                          |
| extParams | string | 扩展参数，没有为空                                                |

>添加成功后与本地摄像头处理一致；getAllVideoInfo接口可以识别摄像头类型。


<h3 id=CRVideo_DestroyCustomVideoDev>CRVideo_DestroyCustomVideoDev(videoID)</h3>

- **功能**: 消毁自定义摄像头

- **返回值**: 无

| 参数    | 类型   | 含义                                          |
| :------ | :----- | :-------------------------------------------- |
| videoID | number | 摄像头id (CRVideo_CreateCustomVideoDev返回值) |


<h3 id=CRVideo_InputCustomVideoDat>CRVideo_InputCustomVideoDat(videoID,base64Dat,timeStamp)</h3>

- **功能**: 输入摄像头图像数据

- **返回值**: 无

| 参数      | 类型   | 含义                                                     |
| :-------- | :----- | :------------------------------------------------------- |
| videoID   | number | 摄像头id                                                 |
| base64Dat | string | 图像数据，base64编码。（请保证格式、和尺寸与摄像头匹配） |
| timeStamp | number | 保留字段，请填0                                          |



<h3 id=CRVideo_GetWatchableVideos>CRVideo_GetWatchableVideos()</h3>

- **功能**: 房间内可观看摄像头列表


- **返回值**:对象VideoIDArray（Array ------ [CRVideo_VideoIDsObj](TypeDefinitions.md#CRVideo_VideoIDsObj)）

>只有摄像头打开才能被获取到，能获取到自已的和房间里其他人的


<h3 id=CRVideo_OpenVideo>CRVideo_OpenVideo(UID)</h3>

- **功能**: 打开用户的摄像头

- **返回值**:无

| 参数 | 类型   | 含义     |
| :--- | :----- | :------- |
| UID  | string | 用户的ID |

>打开用户的摄像头，以便本地、远端显示视频图像


<h3 id=CRVideo_CloseVideo>CRVideo_CloseVideo(UID)</h3>

- **功能**: 关闭用户的摄像头

- **返回值**:无

| 参数 | 类型   | 含义   |
| :--- | :----- | :----- |
| UID  | string | 用户ID |



<h3 id=CRVideo_GetEnableMutiVideo>CRVideo_GetEnableMutiVideo(UID)</h3>

- **功能**: 获取是否启用多摄像头

- **返回值**:用户是否多摄像头（bool）

| 参数 | 类型   | 含义   |
| :--- | :----- | :----- |
| UID  | string | 用户ID |


<h3 id=CRVideo_GetVideoImg>CRVideo_GetVideoImg()</h3>

- **功能**: 摄像头图像数据

- **返回值**:返回frame视频数据（[CRVideo_VideoImgObj](TypeDefinitions.md#CRVideo_VideoImgObj)）

| 参数    | 类型   | 含义   |
| :------ | :----- | :----- |
| UID     | string | 用户ID |
| videoID | number | 设备id |



<h3 id=CRVideo_ShowVideoAdvCfgDlg>CRVideo_ShowVideoAdvCfgDlg(videoID, hParenWnd)</h3>

- **功能**: 调出摄像头驱动的高级配置（只对真实物理摄像头有效）

- **返回值**:true/false

| 参数      | 类型   | 含义                                      |
| :-------- | :----- | :---------------------------------------- |
| videoID   | number | 摄像头id                                  |
| hParenWnd | number | 高级配置界面的父窗口, 没有特别需求传0即可 |



<h3 id=CRVideo_SetLocVideoAttributes>CRVideo_SetLocVideoAttributes(videoID, jsonAttributes)</h3>

- **功能**: 视频设备私有参数配置

- **返回值**:无

| 参数           | 类型     | 含义                                                                                                                       |
| :------------- | :------- | :------------------------------------------------------------------------------------------------------------------------- |
| videoID        | string   | 本地摄像头id                                                                                                               |
| jsonAttributes | json格式 | 支持的参数有：{"disabled": 取值0/1}，1:代表不启用此摄像头；详见[VideoAttributesObj](TypeDefinitions.md#VideoAttributesObj) |

>注：未设置的参数，使用全局参数


<h3 id=CRVideo_GetLocVideoAttributes>CRVideo_GetLocVideoAttributes(videoID)</h3>

- **功能**: 获取某个摄像头私有参数


- **返回值**:私有参数, json格式，详见（[VideoAttributesObj](TypeDefinitions.md#VideoAttributesObj)）

| 参数    | 类型   | 含义         |
| :------ | :----- | :----------- |
| videoID | string | 本地摄像头id |




<h3 id=CRVideo_SetEnableMutiVideo>CRVideo_SetEnableMutiVideo(UID,enable)</h3>

- **功能**: 设置用户是否启用多摄像头

| 参数   | 类型   | 含义                                                                                                                        |
| :----- | :----- | :-------------------------------------------------------------------------------------------------------------------------- |
| UID    | string | 用户ID  (当前只能配置自已）                                                                                                 |
| enable | bool   | 1表示开启（将启用本地所有摄像头），0表示关闭（只启用默认摄像头，[CRVideo_SetDefaultVideo](API.md#CRVideo_SetDefaultVideo)） |

> 如果只想开启某几个摄像头（不是所有）， 那么需要：CRVideo_SetEnableMutiVideo(myUserID, true), 然后调用[CRVideo_SetLocVideoAttributes](API.md#CRVideo_SetLocVideoAttributes)将不需要的摄像头disable掉。



<h3 id=CRVideo_AddIPCam>CRVideo_AddIPCam(url)</h3>

- **功能**: 添加网络摄像头（sdk最大支持5个）

- **返回值**:sdkErr 操作结果码, 0代成功, 非0代表进入房间失败，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)

| 参数 | 类型   | 含义                              |
| :--- | :----- | :-------------------------------- |
| url  | string | 网络摄像头url，支持协议:rtmp,rtsp |
>添加成功后与本地摄像头处理一致；[CRVideo_GetAllVideoInfo](API.md#CRVideo_GetAllVideoInfo)接口可以识别哪些是网络摄像头。


<h3 id=CRVideo_DelIPCam>CRVideo_DelIPCam(url)</h3>

- **功能**: 移除网络摄像头

- **返回值**:无

| 参数 | 类型   | 含义                              |
| :--- | :----- | :-------------------------------- |
| url  | string | 网络摄像头url，支持协议:rtmp,rtsp |


<h3 id=CRVideo_BSupportVirtualBackground>CRVideo_BSupportVirtualBackground(type)</h3>

- **功能**: 检查是否支持对应虚拟背景功能

- **返回值**: true:支持，false:不支持

| 参数 | 类型   | 含义                                                                                                 |
| :--- | :----- | :--------------------------------------------------------------------------------------------------- |
| type | number | 检查是否支持type类型虚拟背景，取值参见：[CRVideo_VIRTUALBK_TYPE](Constant.md#CRVideo_VIRTUALBK_TYPE) |


<h3 id=CRVideo_SetVirtualBackground>CRVideo_SetVirtualBackground(cfg)</h3>

- **功能**: 配置虚拟背景参数

- **返回值**: true:成功，false:失败

| 参数 | 类型     | 含义                                                                                              |
| :--- | :------- | :------------------------------------------------------------------------------------------------ |
| cfg  | json格式 | 配置虚拟背景参数，json格式，参见：[CRVideo_VirtualBkCfg](TypeDefinitions.md#CRVideo_VirtualBkCfg) |


<h3 id=CRVideo_GetVirtualBackground>CRVideo_GetVirtualBackground()</h3>

- **功能**: 获取虚拟背景参数

- **返回值**: json格式，参见：[CRVideo_VirtualBkCfg](TypeDefinitions.md#CRVideo_VirtualBkCfg)

<h3 id=CRVideo_OpenVideoDevRslt>CRVideo_OpenVideoDevRslt.callback = function(videoID,isSucceed){}</h3>

- **功能**：SDK通知打开摄像头结果
+ **参数**：
    - videoID ----- 摄像头索引 (number)
    - isSucceed ----- 是否打开成功 （bool）

<h3 id=CRVideo_VideoDevChanged>CRVideo_VideoDevChanged.callback = function(UID){}</h3>

- **功能**：SDK通知用户的视频设备有变化

+ **参数**：
    - UID ----- 设备变化的用户ID



<h3 id=CRVideo_VideoStatusChanged>CRVideo_VideoStatusChanged.callback = function(UID,oldStatus,newStatus){}</h3>


- **功能**：SDK通知打开本地视频状态变化

+ **参数**：
    - UID ----- 房间中设备的所有者ID
    - oldStatus ----- 旧状态
    - newStatus ----- 新状态



<h3 id=CRVideo_Switchtopage>CRVideo_Switchtopage(mainPage, pageID)</h3>

- **功能**: 功能切换

- **返回值**:无

| 参数     | 类型   | 含义                                    |
| :------- | :----- | :-------------------------------------- |
| mainPage | number | 功能类型                                |
| pageID   | string | 子页面标识（如创建白板时返回的boardID） |


<h3 id=CRVideo_Getcurrentmainpage>CRVideo_Getcurrentmainpage()</h3>

- **功能**: 获取当前主功能区

- **返回值**:功能区([CRVideo_MAIN_PAGE_TYPE](Constant.md#CRVideo_MAIN_PAGE_TYPE))


<h3 id=CRVideo_Getcurrentsubpage>CRVideo_Getcurrentsubpage()</h3>

- **功能**: 获取当前子页面

- **返回值**:返回pageID(如：创建白板时返回的boardID）


<h3 id=CRVideo_GetMainVideo>CRVideo_GetMainVideo()</h3>

- **功能**: 获取当前哪个用户为主视频

- **返回值**:用户ID (string)


<h3 id=CRVideo_SetMainVideo>CRVideo_SetMainVideo(UID)</h3>

- **功能**: 设置当前哪个用户为主视频

- **返回值**:无

| 参数 | 类型   | 含义   |
| :--- | :----- | :----- |
| UID  | string | 用户ID |




<h3 id=CRVideo_SetDNDStatus>CRVideo_SetDNDStatus(DNDStatus, cookie)</h3>

- **功能**: 设置免打扰状态

- **返回值**:无

| 参数      | 类型   | 含义                                                 |
| :-------- | :----- | :--------------------------------------------------- |
| DNDStatus | number | 0代表关闭免打扰， 其它值代表开启免打扰，含义自由定义 |
| cookie    | string | 自定义数据 （在回调时，回传给调用者）                |

>操作成功则回调[CRVideo_SetDNDStatusSuccess](#CRVideo_SetDNDStatusSuccess)，失败则回调[CRVideo_SetDNDStatusFail](#CRVideo_SetDNDStatusFail)   

> - 如果是使用到了SDK的队列功能，则进入房间后需调用此接口，设置自己的为免打扰状态，防止系统再次推送自己.


<h3 id=CRVideo_GetUserStatus>CRVideo_GetUserStatus(cookie)</h3>

- **功能**: 获取企业下所有用户在线状态

- **返回值**:无

| 参数   | 类型   | 含义                                                     |
| :----- | :----- | :------------------------------------------------------- |
| cookie | string | 自定义数据（在回调时，回传给调用者，不需要时传空字符串） |

>操作成功则回调[CRVideo_GetUserStatusSuccess](#CRVideo_GetUserStatusSuccess)，失败则回调[CRVideo_GetUserStatusFail](#CRVideo_GetUserStatusFail)


<h3 id=CRVideo_GetOneUserStatus>CRVideo_GetOneUserStatus(usrID,cookie)</h3>

- **功能**: 获取企业下指定用户的在线状态

- **返回值**:无

| 参数   | 类型   | 含义                                                     |
| :----- | :----- | :------------------------------------------------------- |
| usrID  | string | 用户ID                                                   |
| cookie | string | 自定义数据（在回调时，回传给调用者，不需要时传空字符串） |

>操作成功则回调[CRVideo_GetUserStatusSuccess](#CRVideo_GetUserStatusSuccess)，失败则回调[CRVideo_GetUserStatusFail](#CRVideo_GetUserStatusFail)


<h3 id=CRVideo_StartUserStatusNotify>CRVideo_StartUserStatusNotify(cookie)</h3>

- **功能**: 开启用户的状态推送

- **返回值**:无

| 参数   | 类型   | 含义                                                     |
| :----- | :----- | :------------------------------------------------------- |
| cookie | number | 自定义数据（在回调时，回传给调用者，不需要时传空字符串） |

>回调函数： [CRVideo_StartUserStatusNotifyRslt](#CRVideo_StartUserStatusNotifyRslt)

>  

>企业下所有用户状态有变化时包括呼叫房间状态、免打扰状态），都会收到通知开启后，用户量越大消息量越大，所以请按需开启在[CRVideo_StartUserStatusNotify](#CRVideo_StartUserStatusNotify)前，应该先通过[CRVideo_GetUserStatus](#CRVideo_GetUserStatus)获取所有用户状态


<h3 id=CRVideo_StopUserStatusNotify>CRVideo_StopUserStatusNotify(cookie)</h3>

- **功能**: 关闭用户的状态推送

- **返回值**:无

| 参数   | 类型   | 含义                                                     |
| :----- | :----- | :------------------------------------------------------- |
| cookie | string | 自定义数据（在回调时，回传给调用者，不需要时传空字符串） |

>回调函数： [CRVideo_StopUserStatusNotifyRslt](#CRVideo_StopUserStatusNotifyRslt)

>  


<h3 id=CRVideo_CreateMeeting2>CRVideo_CreateMeeting2(params, cookie)</h3>

- **功能**: 创建房间

- **返回值**:无

| 参数        | 类型                                                            | 含义                                                           |
| :---------- | :-------------------------------------------------------------- | :------------------------------------------------------------- |
| params      |string                                                           | 保留参数        |
| cookie      | string                                                          | 自定义数据 （在回调时，回传给调用者）                          |

>操作成功则回调[CRVideo_CreateMeetingSuccess](#CRVideo_CreateMeetingSuccess)，失败则回调[CRVideo_CreateMeetingFail](#CRVideo_CreateMeetingFail)


<h3 id=CRVideo_DestroyMeeting>CRVideo_DestroyMeeting(meetID, cookie)</h3>

- **功能**: 销毁房间

- **返回值**:无

| 参数   | 类型   | 含义                                   |
| :----- | :----- | :------------------------------------- |
| meetID | number | 房间id                                 |
| cookie | string | 详细介绍见[关键词](KeyWords.md#cookie) |

>回调函数[CRVideo_DestroyMeetingRslt](API.md#CRVideo_DestroyMeetingRslt)

>另外，会话中其他用户会收到[CRVideo_MeetingStopped](API.md#CRVideo_MeetingStopped)通知


<h3 id=CRVideo_GetMeetings>CRVideo_GetMeetings(cookie)</h3>
<h3 id=CRVideo_GetMeetings2>CRVideo_GetMeetings2(json,cookie)</h3>

- **功能**: 获取房间列表


- **返回值**:无

| 参数   | 类型                                                                    | 含义                                   |
| :----- | :---------------------------------------------------------------------- | :------------------------------------- |
| cookie | string                                                                  | 详细介绍见[关键词](KeyWords.md#cookie) |
| json   | [CRVideo_GetMeetingsParam](TypeDefinitions.md#CRVideo_GetMeetingsParam) | 获取视频房间列表的参数,json结构体      |

>响应事件[CRVideo_GetMeetingsSuccess](#CRVideo_GetMeetingsSuccess)，房间被他人结束的回调事件[CRVideo_GetMeetingsFail](#CRVideo_GetMeetingsFail)



<h3 id=CRVideo_SetNickNameRsp>CRVideo_SetNickNameRsp.callback = function(sdkErr,userid,newname){}</h3>

- **功能**：SDK通知设置房间成员昵称的结果

+ **参数**：
    - sdkErr -----  操作结果码, 0代表设置成功, 非0代表设置失败
    - userid ----- 用户id
    - newname ----- 新的昵称 


<h3 id=CRVideo_NotifyNickNameChanged>CRVideo_NotifyNickNameChanged.callback = function(userid,oldname,newname){}</h3>


- **功能**：SDK通知某用户改变了昵称(改昵称的用户自身不会接收到此通知)

+ **参数**：
    - userid ----- 用户id
    - oldname ----- 改变昵称的某用户昵称(改变之前的昵称)
    - newname ----- 改变昵称的某用户昵称(改变之后的昵称)


<h3 id=CRVideo_NotifyVideoWallMode2>CRVideo_NotifyVideoWallMode2.callback = function(model){}</h3>

- **功能**：SDK通知视频分屏模式切换

+ **参数**：
    - model ----- 分屏模式


<h3 id=CRVideo_NotifyMainVideoChanged>CRVideo_NotifyMainVideoChanged.callback = function(operId,targetId){}</h3>

- **功能**：SDK通知主视频更改


<h3 id=CRVideo_NotifySwitchToPage>CRVideo_NotifySwitchToPage.callback = function(mainPage,pageID){}</h3>


- **功能**：SDK通知功能切换

+ **参数**：
    - mainPage ----- 功能类型
    - pageID ----- 子页面标识



<h3 id=CRVideo_DefVideoChanged>CRVideo_DefVideoChanged.callback = function(UID,videoID){}</h3>


- **功能**：SDK通知用户的视频默认设备有变化

+ **参数**：
    - UID ----- 设备变化的用户ID
    - videoID ----- 默认设备id


<h3 id=CRVideo_NetStateChanged>CRVideo_NetStateChanged.callback = function(level){}</h3>


- **功能**：SDK通知我的网络变化

+ **参数**：
    - level ----- 网络状况等级（0~10，10分为最佳网络）


<h3 id=CRVideo_EnterMeeting3>CRVideo_EnterMeeting3(meetID)</h3>

- **功能**: 进入房间

- **返回值**:无

| 参数   | 类型   | 含义   |
| :----- | :----- | :----- |
| meetID | number | 房间ID |

>双方开始进入房间 操作完成则回调[CRVideo_EnterMeetingRslt](#CRVideo_EnterMeetingRslt)


<h3 id=CRVideo_ExitMeeting>CRVideo_ExitMeeting()</h3>

- **功能**: 离开房间


- **返回值**:无


<h3 id=CRVideo_EnterMeetingRslt>CRVideo_EnterMeetingRslt.callback = function(sdkEr){}</h3>



- **功能**：进入房间完成响应

+ **参数**：
    - sdkEr ----- 操作失败代码，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)


<h3 id=CRVideo_StopMeetingRslt>CRVideo_StopMeetingRslt.callback = function(sdkEr){}</h3>


- **功能**：通知结束视频房间结果

+ **参数**：
    - sdkEr ----- 操作失败代码，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)


<h3 id=CRVideo_KickoutRslt>CRVideo_KickoutRslt(sdkErr, userID)</h3>

- **功能**：踢人结果

+ **参数**：

| 参数   | 类型   | 含义                                                                  |
| :----- | :----- | :-------------------------------------------------------------------- |
| sdkErr | number | 操作失败代码，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) |
| userID | string | 被踢人UserID                                                          |


<h3 id=CRVideo_UserEnterMeeting>CRVideo_UserEnterMeeting.callback = function(usrID){}</h3>

- **功能**某用户进入了房间

+ **参数**：
    - usrID ----- 进入房间的用户ID


<h3 id=CRVideo_UserLeftMeeting>CRVideo_UserLeftMeeting.callback = function(id){}</h3>


- **功能**：某用户离开了房间

+ **参数**：
    - id ----- 离开房间的用户ID


<h3 id=CRVideo_MeetingDropped>CRVideo_MeetingDropped.callback = function(reason){}</h3>



- **功能**：SDK通知从房间里掉线了

+ **参数**：
    - reason ----- 断线原因，定义见[CRVideo_MEETING_DROPPED_REASON](Constant.md#CRVideo_MEETING_DROPPED_REASON)


<h3 id=CRVideo_MeetingStopped>CRVideo_MeetingStopped.callback = function(){}</h3>


- **功能**：房间已被结束


>他人离开房间的回调事件[CRVideo_UserLeftMeeting](#CRVideo_UserLeftMeeting)


<h3 id=CRVideo_StopMeeting>CRVideo_StopMeeting(meetID,reserve)</h3>

- **功能**: 停止房间

- **返回值**:无

| 参数    | 类型   | 含义            |
| :------ | :----- | :-------------- |
| meetID  | number | 房间id          |
| reserve | string | 保留字段， 填空 |

>回调函数[CRVideo_StopMeetingRslt](#CRVideo_StopMeetingRslt)，调用此接口结束房间时，其他会话用户会收到[CRVideo_MeetingStopped](#CRVideo_MeetingStopped)




<h3 id=CRVideo_SetDNDStatusSuccess>CRVideo_SetDNDStatusSuccess.callback = function(cookie){}</h3>



- **功能**：客户端设置免打扰状态操作成功响应

+ **参数**：
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_SetDNDStatusFail>CRVideo_SetDNDStatusFail.callback = function(sdkEr,cookie){}</h3>


- **功能**：客户端设置免打扰状态操作失败响应

+ **参数**：
    - sdkEr ----- 操作失败代码,定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_GetUserStatusSuccess>CRVideo_GetUserStatusSuccess.callback = function(userStatus,cookie){}</h3>


- **功能**：客获取所有用户在线状态成功响应

+ **参数**：
    - userStatus ----- 用户在线状态信息列表，定义见[userStatus](TypeDefinitions.md#CRVideo_UserStatus)
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_GetUserStatusFail>CRVideo_GetUserStatusFail.callback = function(sdkEr ,cookie){}</h3>

- **功能**：获取所有用户在线状态失败响应

+ **参数**：
    - sdkEr ----- 操作失败代码，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_StartUserStatusNotifyRslt>CRVideo_StartUserStatusNotifyRslt.callback = function(sdkEr ,cookie){}</h3>


- **功能**：启动用户状态推送响应

+ **参数**：
    - sdkEr ----- 操作失败代码，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_StopUserStatusNotifyRslt>CRVideo_StopUserStatusNotifyRslt.callback = function(sdkEr ,cookie){}</h3>


- **功能**：结束用户状态推送响应

+ **参数**：
    - sdkEr ----- 操作失败代码，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_NotifyUserStatus>CRVideo_NotifyUserStatus.callback = function(userStatus ,cookie){}</h3>



- **功能**：某个用户状态变化通知

+ **参数**：
    - userStatus ----- [userStatus](TypeDefinitions.md#CRVideo_UserStatus)单个用户在线状态信息
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_LineOff>CRVideo_LineOff.callback = function(sdkEr){}</h3>


- **功能**：SDK通知自己掉线

+ **参数**：
    - sdkEr ----- 掉线原因，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)


<h3 id=CRVideo_CreateMeetingSuccess>CRVideo_CreateMeetingSuccess.callback = function(meetObj,cookie){}</h3>



- **功能**：创建房间成功响应

+ **参数**：
    - meetObj ----- [房间信息](TypeDefinitions.md#CRVideo_MeetInfoObj)
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_CreateMeetingFail>CRVideo_CreateMeetingFail.callback = function(sdkEr ,cookie){}</h3>


- **功能**：创建房间失败响应

+ **参数**：
    - sdkEr ----- 操作失败代码，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_DestroyMeetingRslt>CRVideo_DestroyMeetingRslt.callback = function(sdkEr ,cookie){}</h3>


- **功能**：销毁房间响应

+ **参数**：
    - sdkEr ----- 操作失败代码，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_GetMeetingsSuccess>CRVideo_GetMeetingsSuccess.callback = function(jsonMeetings,cookie){}</h3>


- **功能**：获取房间列表成功响应

+ **参数**：
    - jsonMeetings ------ [房间列表信息](TypeDefinitions.md#CRVideo_MeetInfoObjs)
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)


<h3 id=CRVideo_GetMeetingsFail>CRVideo_GetMeetingsFail.callback = function(sdkEr,cookie){}</h3>

- **功能**：获取房间列表失败响应

+ **参数**：
    - sdkEr ----- 操作失败代码，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
    - cookie ----- 详细介绍见[关键词](KeyWords.md#cookie)



<h3 id=CRVideo_SetMediacfg>CRVideo_SetMediacfg(jsonCfg)</h3>

- **功能**: 配置远程影音共享时，图像质量参数

- **返回值**:无

| 参数    | 类型     | 含义                                                            |
| :------ | :------- | :-------------------------------------------------------------- |
| jsonCfg | json格式 | 详见[CRVideo_VideoCfg](TypeDefinitions.md#CRVideo_VideoCfg)说明 |


<h3 id=CRVideo_GetMediacfg>CRVideo_GetMediacfg()</h3>

- **功能**: 获取影音共享时的图像质量参数

- **返回值**:json格式的音频参数,详见[CRVideo_VideoCfg](TypeDefinitions.md#CRVideo_VideoCfg)说明



<h3 id=CRVideo_GetAudioMicNames>CRVideo_GetAudioMicNames()</h3>

- **功能**: 麦克风设备列表

- **返回值**:返回麦克风设备名称的字符串数组（Array）

>类似：["audiomic1","audiomic2"……,"audiomicN"]


<h3 id=CRVideo_GetAudioSpkNames>CRVideo_GetAudioSpkNames()</h3>

- **功能**: 扬声器设备列表

- **返回值**:扬声器设备名称的字符串数组（Array）

>类似：["AudioSpkName1","AudioSpkName2"……,"AudioSpkNameN"]


<h3 id=CRVideo_StartGetAudioPCM>CRVideo_StartGetAudioPCM(aSide, getType, jsonParam)</h3>

- **功能**: 开始获取语音pcm数据

- **返回值**:返回值 整形数值，1：正常，0：失败(number)

| 参数      | 类型   | 含义                                                                                                                                                                             |
| :-------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aSide     | number | 声道类型 0:麦克风，1:扬声器                                                                                                                                                      |
| getType   | number | 获取方式 0:回调方式，1:保存为文件                                                                                                                                                |
| jsonParam | string | 当getType=0 表示回调方式，jsonParam可配置回调的数据大小(320-32000)，如: {"EachSize":320};</br>当getType=1 表示保存为文件，jsonParam可配置文件名，如: { "FileName" ： "e:\\test.pcm" } |


<h3 id=CRVideo_StopGetAudioPCM>CRVideo_StopGetAudioPCM(aSide)</h3>

- **功能**: 停止获取语音pcm数据

- **返回值**:无

| 参数  | 类型   | 含义                        |
| :---- | :----- | :-------------------------- |
| aSide | number | 声道类型 0:麦克风，1:扬声器 |


<h3 id=CRVideo_SetAudioCfg>CRVideo_SetAudioCfg(cfg)</h3>

- **功能**: 设置系统音频参数

- **返回值**:无

| 参数 | 类型                                                    | 含义     |
| :--- | :------------------------------------------------------ | :------- |
| cfg  | [CRVideo_AudioCfg](TypeDefinitions.md#CRVideo_AudioCfg) | 设置参数 |


<h3 id=CRVideo_GetAudioCfg>CRVideo_GetAudioCfg()</h3>

- **功能**: 获取系统音频参数

- **返回值**:cfg对象（[CRVideo_AudioCfg](TypeDefinitions.md#CRVideo_AudioCfg)）


<h3 id=CRVideo_GetMicEnergy>CRVideo_GetMicEnergy(UID)</h3>

- **功能**: 麦克风声音大小

- **返回值**:返回音量（0~10）(number)

| 参数 | 类型   | 含义     |
| :--- | :----- | :------- |
| UID  | string | 用户的ID |


<h3 id=CRVideo_OpenMic>CRVideo_OpenMic(UID)</h3>

- **功能**: 打开麦克风

- **返回值**:无

| 参数 | 类型   | 含义     |
| :--- | :----- | :------- |
| UID  | string | 用户的ID |

>打开自已的麦克风时，先会进入到AOPENING状态，等服务器处理后才会进入AOPEN状态，此时说话才能被采集到


<h3 id=CRVideo_CloseMic>CRVideo_CloseMic(UID)</h3>

- **功能**: 关闭麦克风

- **返回值**:无

| 参数 | 类型   | 含义     |
| :--- | :----- | :------- |
| UID  | string | 用户的ID |

>关麦操作是立即生效的，本地会立即停止采集


<h3 id=CRVideo_GetAudioStatus>CRVideo_GetAudioStatus(UID)</h3>

- **功能**: 麦克风状态

- **返回值**:返回麦克风状态([CRVideo_ASTATUS](Constant.md#CRVideo_ASTATUS))

| 参数 | 类型   | 含义     |
| :--- | :----- | :------- |
| UID  | string | 用户的ID |

>双方开始进入本次视频会话。操作完成则回调[CRVideo_EnterMeetingRslt](#CRVideo_EnterMeetingRslt)


<h3 id=CRVideo_GetMicVolume>CRVideo_GetMicVolume()</h3>

- **功能**: 获取麦克风音量


- **返回值**:返回麦克风音量（0~255）（number）


<h3 id=CRVideo_SetMicVolume>CRVideo_SetMicVolume(level)</h3>

- **功能**: 设置麦克风音量


- **返回值**:设置成功则返回true,否则返回false（bool）

| 参数  | 类型   | 含义                         |
| :---- | :----- | :--------------------------- |
| level | number | 音量等级（ 取值范围：0~255） |


<h3 id=CRVideo_SetSpeakerVolume>CRVideo_SetSpeakerVolume(level)</h3>

- **功能**: 设置扬声器音量
- **返回值**:设置成功则返回true,否则返回false（bool）

| 参数  | 类型   | 含义                         |
| :---- | :----- | :--------------------------- |
| level | number | 音量等级（ 取值范围：0~255） |


<h3 id=CRVideo_GetSpeakerVolume>CRVideo_GetSpeakerVolume()</h3>

- **功能**: 获取扬声器音量


- **返回值**:返回扬声器音量（0~255）（number）




<h3 id=CRVideo_SetSpeakerMute>CRVideo_SetSpeakerMute(value)</h3>

- **功能**: 设置扬声器是否静音

- **返回值**:设置成功则返回true,否则返回false（bool）

| 参数  | 类型   | 含义              |
| :---- | :----- | :---------------- |
| value | number | 1,静音，0，不静音 |



<h3 id=CRVideo_GetSpeakerMute>CRVideo_GetSpeakerMute()</h3>

- **功能**: 获取扬声器是否静音


- **返回值**:扬声器是否静音， 1,静音，0，不静音


<h3 id=CRVideo_SetAllAudioClose>CRVideo_SetAllAudioClose()</h3>

- **功能**: 关闭所有人麦克风

- **返回值**:无


<h3 id=CRVideo_SetCustomAudioCapture>CRVideo_SetCustomAudioCapture(enable, params)</h3>

- **功能**: 自定义音频采集

- **返回值**:返回操作结果

| 参数   | 类型   | 含义                                                                                       |
| :----- | :----- | :----------------------------------------------------------------------------------------- |
| enable | bool   | 是否开启自定义音频采集, 开启后将不再从系统麦克风采集数据                                   |
| param  | object | 可选扩展参数，json格式，当前支持参数："fromIPCam":摄像头ID, 配置后sdk自动从IPCam中获取音频 |


<h3 id=CRVideo_SetCustomAudioPlayback>CRVideo_SetCustomAudioPlayback(enable, params)</h3>

- **功能**: 自定义音频播放

- **返回值**:返回操作结果

| 参数   | 类型   | 含义                                             |
| :----- | :----- | :----------------------------------------------- |
| enable | bool   | 是否开启自定义音频播放, 开启后本地将不再播放声音 |
| param  | object | 可选扩展参数，保留参数                           |



<h3 id=CRVideo_AudioDevChanged>CRVideo_AudioDevChanged.callback = function(){}</h3>

- **功能**: 麦克风设备变化


- **功能**：SDK通知本地音频设备有变化


<h3 id=CRVideo_AudioStatusChanged>CRVideo_AudioStatusChanged.callback = function(UID,oldStatus,newStatus){}</h3>


- **功能**：SDK通知打开本地音频状态变化

+ **参数**：
    - UID ----- 会话中设备的所有者ID
    - oldStatus ----- 旧状态
    - newStatus ----- 新状态


<h3 id=CRVideo_MicEnergyUpdate>CRVideo_MicEnergyUpdate.callback = function(UID,oldLevel,newLevel){}</h3>


- **功能**：SDK通知用户的说话声音强度更新

+ **参数**：
    - UID ----- 用户ID
    - oldLevel ----- 原来的说话声音强度
    - newLevel ----- 现在的说话声音强度



<h3 id=CRVideo_StartPlayMedia>CRVideo_StartPlayMedia(filename, locPlay, bPauseWhenFinished)</h3>

- **功能**: 开始播放影音


- **返回值**:返回值 整形数值，1：正常，0：失败(number)

| 参数               | 类型   | 含义                                                                        |
| :----------------- | :----- | :-------------------------------------------------------------------------- |
| filename           | string | 媒体文件名（本地全路径文件名，或网络流媒体，支持的协议有：http, rtmp, rtsp) |
| locPlay            | number | 是否仅仅本地播放（1:本地播放，0：房间内播放）                               |
| bPauseWhenFinished | number | 是否播放完毕自动暂停在最后一帧                                              |

>如果播放成功，其他人收到[CRVideo_NotifyMediaStart](#CRVideo_NotifyMediaStart)，如果播放失败，请关注通知事件[CRVideo_NotifyMediaStop](#CRVideo_NotifyMediaStop)

<h3 id=CRVideo_PausePlayMedia>CRVideo_PausePlayMedia(bPause)</h3>

- **功能**: 暂停或恢复播放影音


- **返回值**:无

| 参数   | 类型 | 含义                    |
| :----- | :--- | :---------------------- |
| bPause | bool | ture为暂停，false为恢复 |


<h3 id=CRVideo_StopPlayMedia>CRVideo_StopPlayMedia()</h3>

- **功能**: 停止播放影音


- **返回值**:无

>其他人收到[CRVideo_NotifyMediaStop](#CRVideo_NotifyMediaStop)


<h3 id=CRVideo_SetMediaplaypos>CRVideo_SetMediaplaypos(pos)</h3>

- **功能**: 设置播放进度

- **返回值**:无

| 参数 | 类型   | 含义                     |
| :--- | :----- | :----------------------- |
| pos  | number | 设置播放位置，单位：毫秒 |


<h3 id=CRVideo_GetAllFilesInMediaPath>CRVideo_GetAllFilesInMediaPath()</h3>

- **功能**: 取得影音文件夹下的所有可播放文件

- **返回值**:文件名列表数组（Array）

>影音文件夹位于方法CRVideo_Init2的第一个参数sdkFilePath，sdk会在此文件中建立media的子文件夹，即为影音文件夹

<h3 id=CRVideo_Getmediainfo>CRVideo_Getmediainfo(UID)</h3>

- **功能**: 影音播放信息


- **返回值**:影音文件信息（[CRVideo_MediaInfoObj](TypeDefinitions.md#CRVideo_MediaInfoObj)）

| 参数 | 类型   | 含义                               |
| :--- | :----- | :--------------------------------- |
| UID  | string | 用户id，详见[UID](KeyWords.md#UID) |


<h3 id=CRVideo_Getmediaimg>CRVideo_Getmediaimg(UID)</h3>

- **功能**: 获取影音图像数据


- **返回值**:帧信息([CRVideo_VideoImgObj](TypeDefinitions.md#CRVideo_VideoImgObj))

| 参数 | 类型   | 含义   |
| :--- | :----- | :----- |
| UID  | string | 用户id |



<h3 id=CRVideo_NotifyMediaOpened>CRVideo_NotifyMediaOpened.callback = function(totalTime,w,h){}</h3>


- **功能**SDK通知影音文件打开

+ **参数**：
    - totalTime ----- 影音时长（秒）
    - w ----- 宽度
    - h ----- 高度


<h3 id=CRVideo_NotifyMediaStart>CRVideo_NotifyMediaStart.callback = function(userid){}</h3>



- **功能**：SDK通知影音开始播放

+ **参数**：
    - userid ----- 操作者的用户id


<h3 id=CRVideo_NotifyMediaStop>CRVideo_NotifyMediaStop.callback = function(userid,reason){}</h3>



- **功能**：SDK通知影音播放停止

+ **参数**：
    - userid ----- 操作者的用户id
    - reason ----- 播放停止原因，详见[CRVideo_MEDIA_STOP_REASON](Constant.md#CRVideo_MEDIA_STOP_REASON)


<h3 id=CRVideo_NotifyMediaPause>CRVideo_NotifyMediaPause.callback = function(userid,pause){}</h3>



- **功能**：SDK通知影音播放是否暂停

+ **参数**：
    - userid ----- 操作者的用户id
    - pause ----- 是否暂停 1暂停 0播放


<h3 id=CRVideo_NotifyPlayPosSetted>CRVideo_NotifyPlayPosSetted.callback = function(setPTS){}</h3>



- **功能**：SDK通知播放进度已设置完成

+ **参数**：
    - setPTS ----- 播放进度


<h3 id=CRVideo_NotifyAudioPCMDat>CRVideo_NotifyAudioPCMDat.callback = function(aSide,base64PcmDat){}</h3>


- **功能**：SDK通知语音PCM数据

+ **参数**：
    - aSide ----- 声道类型
    - base64PcmDat ----- PCM数据（base64格式）



<!-- ### UI显示组件公用接口 {#container} -->

<h3 id=Container>UI显示组件公用接口</h3>

>CRVideo.Container()

### Methods

- handler() ------ <font color="red">object对象</font>
- height() ------ <font color="red">容器的高度</font>
- id() ------ <font color="red">id</font>
- style() ------ <font color="red">容器的样式</font>
- width() ------ <font color="red">容器的宽度</font>
- shows() ------ <font color="red">容器的显示</font>
- hidden() ------ <font color="red">容器的消失</font>

<!-- ### 影音共享UI显示组件 {#MediaContainer} -->

<h3 id=CRVideo_CreatMediaObj>影音共享UI显示组件</h3>

>CRVideo_CreatMediaObj()

- **功能**: 创建media对象

- **返回值**:影音共享UI显示组件对象

- **参数**:无


### Methods

- disableToolBar(bDisable) ------ <font color="red">工具条是否可用</font>

| 参数     | 类型   | 说明                |
| -------- | ------ | ------------------- |
| bDisable | number | 0:可用; 非0:不可用; |

- shows() ------ <font color="red">UI组件的显示</font>
  + **继承**:[CRVideo.Container](#Container).shows()

- hidden() ------ <font color="red">UI组件的隐藏</font>
  + **继承**:[CRVideo.Container](#Container).hidden()

- handler() ------ <font color="red">object对象</font>
   + **继承**:[CRVideo.Container](#Container).handler()

- height() ------ <font color="red">UI组件的高度</font>
   + **继承**:[CRVideo.Container](#Container).height()

- id() ------ <font color="red">id</font>
   + **继承**:[CRVideo.Container](#Container).id()

- keepAspectRatio(value) ------ <font color="red">绘制模式，是否拉伸绘制</font>

| 参数  | 类型 | 说明                                            |
| ----- | ---- | ----------------------------------------------- |
| value | bool | true: 保持比例不拉伸， false:不保持比例进行拉伸 |

- dblClickFullScreen(value) ------ <font color="red">设置是否支持双击全屏,默认不支持双击全屏</font>

| 参数  | 类型 | 说明                                      |
| ----- | ---- | ----------------------------------------- |
| value | bool | true: 支持双击全屏， false:不支持双击全屏 |

- savePicToBase64(format) ------ <font color="red">保存播放影音画面到图片文件</font>
   + **返回值**:Base64字符串 (string)

| 参数   | 类型   | 说明                              |
| ------ | ------ | --------------------------------- |
| format | string | 支持格式:bmp, png, gif, jpg, jpeg |

- savePicToFile(pathFileName) ------ <font color="red">保存播放影音画面到图片文件</font>
   + **返回值**:0成功，非0失败 (number)

| 参数         | 类型   | 说明                                                   |
| ------------ | ------ | ------------------------------------------------------ |
| pathFileName | string | 本地绝对路径文件名(支持格式：bmp, png, gif, jpg, jpeg) |

- setToolBarUIElementVisible(UIElement, isVisible) ------ <font color="red">显示隐藏播放工具条上的界面元素</font>
   + **返回值**:无

| 参数      | 类型                                               | 说明     |
| --------- | -------------------------------------------------- | -------- |
| UIElement | [CRVideo_ToolBarUI](Constant.md#CRVideo_ToolBarUI) | 界面元素 |
| isVisible | bool                                               | 是否可见 |

- setToolBarSize(size) ------ <font color="red">设置工具条的高度</font>
   + **返回值**:无

| 参数 | 类型   | 说明                   |
| ---- | ------ | ---------------------- |
| size | number | 工具条高度,范围(24-48) |


- disableChangePlayPos(bDisable) ------ <font color="red">禁止调整播放位置</font>
   + **返回值**:无

| 参数     | 类型   | 说明                                 |
| -------- | ------ | ------------------------------------ |
| bDisable | number | 禁止调整播放位置。1：禁止，0：不禁止 |

- style() ------ <font color="red">UI组件的样式</font>
   + **继承**:[CRVideo.Container](#Container).style()

- width() ------ <font color="red">UI组件的宽度</font>
   + **继承**:[CRVideo.Container](#Container).width()

- setFullScreen(bFullScreen) ------ <font color="red">设置全屏</font>
   + **返回值**:无

| 参数        | 类型 | 说明        |
| ----------- | ---- | ----------- |
| bFullScreen | bool | true ：全屏 |

- getFullScreen() ------ <font color="red">获取全屏</font>
   + **参数**:无

   + **返回值**: 表示该控件当前是否全屏，true  表示全屏


<!-- ### 屏幕共享UI显示组件 {#ScreenShareContainer} -->

<h3 id=CRVideo_CreatScreenShareObj>屏幕共享UI显示组件</h3>


>CRVideo_CreatScreenShareObj()

- **功能**: 创建screenShare对象 

- **返回值**:屏幕共享UI显示组件对象

- **参数**:无

### Methods

- clear() ------ <font color="red">清空缓存的图像</font>

- ctrlOpen(value) ------ <font color="red">开启控制模式</font>
  + **返回值**:无

| 参数  | 类型 | 说明                      |
| ----- | ---- | ------------------------- |
| value | bool | true: 开启， false:不开启 |

- disableFloatToolbar(bDisabled) ------ <font color="red">禁止出现浮动工具条</font>
  + **返回值**:无

| 参数      | 类型 | 说明                                      |
| --------- | ---- | ----------------------------------------- |
| bDisabled | bool | true:禁止出现， false：允许出现（缺省值） |

- isCursorInUI() ------ <font color="red">鼠标是否在屏幕共享显示控件上</font>

   + **返回值**:鼠标是否在控件上，true- 在控件上； false - 不在控件上 （bool）

   - **参数**:无

- getCursorPosInRemote() ------ <font color="red">鼠标在本地的屏幕共享UI控件上时，鼠标位置映射到远端的屏幕上的坐标</font>

   + **返回值**:映射到远端的屏幕上的坐标。数据格式：json格式，如：｛"x"=1,"y"=1}

   - **参数**:无

- getPicWidth() ------ <font color="red">获取远端屏幕的实际宽度</font>

   + **返回值**:远端屏幕的实际宽度（number）

   - **参数**:无

- getPicHeight() ------ <font color="red">获取远端屏幕的实际高度</font>

   + **返回值**:远端屏幕的实际高度（number）

   - **参数**:无

- enableMarked(value) ------ <font color="red">开启标注模式</font>
   + **返回值**:无

| 参数  | 类型 | 说明              |
| ----- | ---- | ----------------- |
| value | bool | 0: 不开启, 1:开启 |

- isPicEmpty() ------ <font color="red">检查图像是否为空</font>
   + **返回值**:无

   - **参数**:无

- keepAspectRatio(num) ------ <font color="red">绘制模式，是否拉伸绘制</font>
   + **返回值**:无

| 参数  | 类型 | 说明                                            |
| ----- | ---- | ----------------------------------------------- |
| value | bool | true: 保持比例不拉伸， false:不保持比例进行拉伸 |

- savePic(pathFileName) ------ <font color="red">拍照</font>
   + **返回值**:0:成功； 非0：保存遇到的错误码(bool)

| 参数         | 类型   | 说明                                                   |
| ------------ | ------ | ------------------------------------------------------ |
| pathFileName | string | 本地绝对路径文件名(支持格式：bmp, png, gif, jpg, jpeg) |

- setPenStyle(intRgba, penType) ------ <font color="red">设置标注画笔样式</font>
   + **返回值**:无

| 参数    | 类型   | 说明                       |
| ------- | ------ | -------------------------- |
| intRgba | number | 颜色，排列方式bgr(8:8:8)   |
| penType | number | 画笔类型（1:铅笔, 2:水笔） |

- setFullScreen(bFullScreen) ------ <font color="red">设置全屏</font>
   + **返回值**:无

| 参数        | 类型 | 说明        |
| ----------- | ---- | ----------- |
| bFullScreen | bool | true ：全屏 |

- getFullScreen() ------ <font color="red">获取全屏</font>
   + **参数**:无

   + **返回值**: 表示该控件当前是否全屏，true  表示全屏

- setDblClickFullScreen(bVal) ------ <font color="red">配置是否允许双击全屏</font>
   + **返回值**:无

| 参数 | 类型 | 说明                              |
| ---- | ---- | --------------------------------- |
| bVal | bool | true:允许(缺省值)， false：不允许 |

- getDblClickFullScreen() ------ <font color="red">获取是否允许双击全屏</font>
   + **参数**:无

   + **返回值**: 表示该控件是否允许双击全屏，true 允许， false：不允许



  - setScaleType(type) ------ <font color="red">设置图像显示模式</font>
   + **参数**:

    | 参数 | 类型   | 说明                                                                                                                      |
    | ---- | ------ | ------------------------------------------------------------------------------------------------------------------------- |
    | type | number | <p>0: 等比例缩放留空居中显示</p>  <p>1: 等比例缩放裁剪铺满显示； </p> <p>2: 不等比例缩放铺满显示（可能导致图像拉伸） </p> |

   

    + **返回值**: 无
  


<!-- ### 成员视频UI显示组件 {#VideoContainer} -->

<h3 id=CRVideo_CreatVideoObj>成员视频UI显示组件</h3>


>CRVideo_CreatVideoObj()

   + **功能**: 创建video对象

   + **参数**:无

   + **返回值**: 成员视频UI显示组件对象。

### Methods

- clear() ------ <font color="red">清理当前图像</font>

- getVideoID() ------ <font color="red">获取当前显示的用户的视频设备</font>
   + **返回值**:视频ID (string)

- getVisibleNickName() ------ <font color="red">获取是否显示昵称</font>
   + **返回值**:否显示昵称 (bool)


- setMaskPic(base64PNG,bScaleToFitVideoUI) ------ <font color="red">在视频窗口上显示一个遮罩图片</font>
   + **返回值**:无

| 参数               | 类型   | 说明                              |
| ------------------ | ------ | --------------------------------- |
| base64PNG          | string | base64格式的png图像数据           |
| bScaleToFitVideoUI | bool   | true:铺满视频窗口，false:居中显示 |

- handler() ------ <font color="red">object对象</font>
   + **继承**:[CRVideo.Container](#Container).handler()

- height() ------ <font color="red">成员视频UI组件的高度</font>
   + **继承**:[CRVideo.Container](#Container).height()

- id() ------ <font color="red">id</font>
   + **继承**:[CRVideo.Container](#Container).id()

- isPicEmpty() ------ <font color="red">检查图像是否为空</font>
   + **返回值**:图像是否为空 (bool)

- getPicFrameTime() ------ <font color="red">获取图像时间戳</font>
   + **返回值**:当前图像数据对应的时间戳(number)

- keepAspectRatio(value) ------ <font color="red">设置显示的视频画面是否保持比例</font>

| 参数  | 类型 | 说明                                            |
| ----- | ---- | ----------------------------------------------- |
| value | bool | true: 保持比例不拉伸， false:不保持比例进行拉伸 |

- dblClickFullScreen(value) ------ <font color="red">设置是否支持双击全屏,默认不支持双击全屏</font>

| 参数  | 类型 | 说明                                      |
| ----- | ---- | ----------------------------------------- |
| value | bool | true: 支持双击全屏， false:不支持双击全屏 |

- savePic(pathFileName) ------ <font color="red">拍照</font>

   + **返回值**:0:成功； 非0：保存遇到的错误码 (bool)

| 参数         | 类型   | 说明                                                   |
| ------------ | ------ | ------------------------------------------------------ |
| pathFileName | string | 本地绝对路径文件名(支持格式：bmp, png, gif, jpg, jpeg) |

- savePicToBase64(format) ------ <font color="red">拍照</font>

   + **返回值**:Base64为图片数据字符串，不成功则为空 (string)

| 参数   | 类型   | 说明                                   |
| ------ | ------ | -------------------------------------- |
| format | string | 图片格式，支持bmp, png, gif, jpg, jpeg |

- setMaskPic(base64PNG, scaleToFitVideoUI) ------ <font color="red">在视频窗口上显示一个遮罩图片</font>

    + **返回值**:无

| 参数              | 类型   | 说明                              |
| ----------------- | ------ | --------------------------------- |
| base64PNG         | string | base64格式的png图像数据           |
| scaleToFitVideoUI | bool   | true:铺满视频窗口，false:居中显示 |

- setToolbarHeight(height) ------ <font color="red">配置工具条高度</font>

    + **返回值**:无

| 参数   | 类型   | 说明       |
| ------ | ------ | ---------- |
| height | number | 工具条高度 |

- setToolButton(id,  iconFileName, toolTip) ------ <font color="red">配置工具条内容</font>

    + **返回值**:无

| 参数         | 类型   | 说明               |
| ------------ | ------ | ------------------ |
| id           | number | 按钮id             |
| iconFileName | string | 按钮图标路径文件名 |
| toolTip      | string | 按钮的tooltip      |

> 同一id多次配置时，将以最后一次配置为准；当iconFileName为空时，则代表移除对应按钮；

- setSavePicRect(x, y, w, h) ------ <font color="red">设置拍照区域</font>

  + **返回值**:无

| 参数 | 类型   | 说明                                      |
| ---- | ------ | ----------------------------------------- |
| x    | number | 相对于VideoUI控件的左上角位置（水平方向） |
| y    | number | 相对于VideoUI控件的左上角位置（垂直方向） |
| w    | number | 拍照的图像大小(宽)                        |
| h    | number | 拍照的图像大小（高）                      |

><font color=#ff0000>注意：此设配置对以下所有保存接口有效， 当x,y,w,h均为0时，代表保存完整图像。</font>

- getPicWidth() ------ <font color="red">获取图像宽</font>

  + **返回值**:图像宽

- getPicHeight() ------ <font color="red">获取图像高</font>

  + **返回值**:图像高


- setFullScreen(bFullScreen) ------ <font color="red">设置全屏</font>
   + **返回值**:无

| 参数        | 类型 | 说明        |
| ----------- | ---- | ----------- |
| bFullScreen | bool | true ：全屏 |

- getFullScreen() ------ <font color="red">获取全屏</font>
   + **参数**:无

   + **返回值**: 表示该控件当前是否全屏，true  表示全屏

- setVideo(UID, videoID) ------ <font color="red">设置显示的目标用户视频</font> 

   + **返回值**:无

| 参数    | 类型   | 说明                                             |
| ------- | ------ | ------------------------------------------------ |
| UID     | string | 目标用户ID                                       |
| videoID | number | 用户的指定视频设备（-1，代表用户的默认视频设备） |

- setVideo2(UID, videoID, qualityLv) ------ <font color="red">设置显示目标用户的第2档视频</font>

   + **返回值**:无

| 参数      | 类型   | 说明                                                                  |
| --------- | ------ | --------------------------------------------------------------------- |
| UID       | string | 目标用户ID                                                            |
| videoID   | number | 用户的指定视频设备（-1，代表用户的默认视频设备）                      |
| qualityLv | number | 视频档位(1:默认档位，2:对应quality2，如果2未开启时将显示1档的视频流） |

>从[房间内可观看摄像头列表](API.md#CRVideo_GetWatchableVideos)中获取UID和videoID

>开启一个摄像头多档视频流，请参见[CRVideo_SetLocVideoAttributes](API.md#CRVideo_SetLocVideoAttributes)

><font color=#ff0000>注意：配置后就会建立视频通道并占用带宽。 如果不再观看时，应设为空：setVideo("", -1)。</font>

- getQualityLv() ------ <font color="red">获取当前显示的视频档位</font>
   + **返回值**: 视频档位
   + **参数**:无

- setVisibleNickName(value) ------ <font color="red">设置是否显示昵称</font>
   + **返回值**:无

| 参数  | 类型 | 说明         |
| ----- | ---- | ------------ |
| value | bool | 是否显示昵称 |


- style() ------ <font color="red">成员视频UI显示组件的样式</font>
   + **继承**:[CRVideo.Container](#Container).style()

- width() ------ <font color="red">成员视频UI显示组件宽度</font>
   + **继承**:[CRVideo.Container](#Container).width()

- shows() ------ <font color="red">成员视频UI显示组件显示</font>
  + **继承**:[CRVideo.Container](#Container).shows()

- hidden() ------ <font color="red">成员视频UI显示组件的隐藏</font>
  + **继承**:[CRVideo.Container](#Container).hidden()


<!-- ### 白板显示UI显示组件 {#BoardContainer} -->

<h3 id=BoardContainer>白板显示UI显示组件</h3>

CloudroomBoardUI 白板显示组件，是由[视频房间组件](API.md#CRVideo_Createboard)内相关接口的封装而成，如果此组件不满足需求，可以使用[视频房间组件](API.md#CRVideo_Createboard)内相关的接口自行实现。


>CRVideo_CreatBoardObj()


- **功能**: 创建board对象

- **返回值**:白板UI显示组件对象

- **参数**:无


### Methods

- handler() ------ <font color="red">object对象</font>
   + **继承**:[CRVideo.Container](#Container).handler()

- id() ------ <font color="red">id</font>
   + **继承**:[CRVideo.Container](#Container).id()

- width() ------ <font color="red">白板显示UI显示组件宽度</font>
   + **继承**:[CRVideo.Container](#Container).width()

- height() ------ <font color="red">白板显示UI显示组件高度</font>
   + **继承**:[CRVideo.Container](#Container).height()

- getBoardIDs() ------ <font color="red">获取当前房间内的所有白板ID</font>
  + **返回值**: 白板的ID，字符串数组 (string[])

- getBoardInfo(boardID) ------ <font color="red">获取指定白板的信息</font>
    + **返回值**: 白板信息，json格式，详见[CRVideo_BoardObj](TypeDefinitions.md#CRVideo_BoardObj)说明

- getCurBoardID() ------ <font color="red">获取当前显示的白板</font>
    + **返回值**: 白板的ID (string)

- getCurPageNo() ------ <font color="red"> 获取当前白板的当前页</font>
    + **返回值**: 页序号（0为第一页) (number)

- setCurBoard(boardID, pageNo) ------ <font color="red"> 设置当前白板</font>
    + **返回值**: 无

| 参数    | 类型   | 说明                      |
| ------- | ------ | ------------------------- |
| boardID | string | 白板的ID                  |
| pageNo  | number | 白板的页序号，0为第一页。 |

- undo() ------ <font color="red">  撤消我的最后一个标注</font>
    + **返回值**: 无

- redo() ------ <font color="red">  恢复我的最后一次撤消</font>
+ **返回值**: 无

- clear() ------ <font color="red">  清空当前白板所有标注(清空操作不能再恢复）</font>
+ **返回值**: 无

- isScaledContents() ------ <font color="red"> 获取白板当前的缩放模式，缩放模式下内容将被缩小或放大以填充有效区域，非缩放模式下图像将按原始尺寸显示并可能出现滚动条</font>
    + **返回值**: 无

- setScaledContents(bScaled) ------ <font color="red"> 设置白板的缩放模式</font>
    + **返回值**: 无

| 参数    | 类型 | 说明             |
| ------- | ---- | ---------------- |
| bScaled | bool | 是否启用缩放模式 |

- setColor(penColorObj) ------ <font color="red"> 设置画笔颜色</font>
    + **返回值**: 无

| 参数        | 类型     | 说明                                                                              |
| ----------- | -------- | --------------------------------------------------------------------------------- |
| penColorObj | json格式 | 画笔颜色值对象，详见[CRVideo_PenColorObj](TypeDefinitions.md#CRVideo_PenColorObj) |

- getColor() ------ <font color="red"> 获取当前画笔颜色</font>
    + **返回值**: CRVideo_PenColorObj, json格式,详见[CRVideo_PenColorObj](TypeDefinitions.md#CRVideo_PenColorObj)

- setLineWidth(width) ------ <font color="red"> 设置画笔粗细</font>
    + **返回值**: 无

| 参数  | 类型   | 说明       |
| ----- | ------ | ---------- |
| width | number | 线条的宽度 |

- getLineWidth() ------ <font color="red"> 获取当前画笔颜色</font>
    + **返回值**: 线条的宽度 (number)

- setReadOnly(bReadOnly) ------ <font color="red"> 设置白板本地只读（本地禁止标注，其他端不受影响）</font>
    + **返回值**: 无

| 参数      | 类型 | 说明     |
| --------- | ---- | -------- |
| bReadOnly | bool | 是否只读 |

- isReadOnly() ------ <font color="red">  获取白板本地只读配置</font>
+ **返回值**: 是否只读 (bool), true - 白板本地只读









<h3 id=CRVideo_StartHttpMgr>CRVideo_StartHttpMgr()</h3>

- **功能**: 启动http文档上传下载功能

- **返回值**:无
- **参数**:无

<h3 id=CRVideo_StopHttpMgr>CRVideo_StopHttpMgr()</h3>

- **功能**: 停止http文档上传下载功能

- **返回值**:无
- **参数**:无

<h3 id=CRVideo_GetAllTransferInfos>CRVideo_GetAllTransferInfos()</h3>

- **功能**: 获取本地所有上传、下载文件信息

- **返回值**:详见 [CRVideo_HttpFileInfoObjs](TypeDefinitions.md#CRVideo_HttpFileInfoObjs)
- **参数**:无

<h3 id=CRVideo_GetTransferInfo>CRVideo_GetTransferInfo(filePathName)</h3>

- **功能**: 获取本地指定文件的上传、下载文件信息

- **返回值**:详见 [CRVideo_HttpFileInfoObj](TypeDefinitions.md#CRVideo_HttpFileInfoObj)


| 参数         | 类型   | 含义           |
| :----------- | :----- | :------------- |
| filePathName | string | 本地路径文件名 |

<h3 id=CRVideo_StartTransferFile>CRVideo_StartTransferFile(fileinfo)</h3>

- **功能**: 开始下载/上传文件

- **返回值**:无


| 参数     | 类型     | 含义                                                                    |
| :------- | :------- | :---------------------------------------------------------------------- |
| fileinfo | json格式 | 详见[CRVideo_HttpReqInfoObj](TypeDefinitions.md#CRVideo_HttpReqInfoObj) |


<h3 id=CRVideo_CancelFileTransfer>CRVideo_CancelFileTransfer(fileName)</h3>

- **功能**: 取消传输

- **返回值**:无

| 参数     | 类型   | 含义           |
| :------- | :----- | :------------- |
| fileName | string | 本地路径文件名 |

>注意：取消时，只是停止了传输任务，不清理记录及断点文件。

<h3 id=CRVideo_RmTransferInfo>CRVideo_RmTransferInfo(fileName,bRemoveLocFile)</h3>

- **功能**: 删除传输记录及相关文件

- **返回值**:无

| 参数           | 类型   | 含义                                                                             |
| :------------- | :----- | :------------------------------------------------------------------------------- |
| fileName       | string | 文件名                                                                           |
| bRemoveLocFile | number | 是否移除本地文件,为1时，那么上传的源始文件、下载的临时文件或结果文件都将被移除。 |

>注意： 此接口将文件从管理器中移除（CRVideo_GetAllTransferInfos将不再返回相关信息），如果bRemoveLocFile为1时， 那么上传的源始文件、下载的临时文件或结果文件都将被移除。


<h3 id=CRVideo_FileStateChanged>CRVideo_FileStateChanged.callback = function( fileName, state)){}</h3>

- **功能**: 通知用户文件状态更改

+ **参数**：
    - fileName ----- 文件名
    - state ----- 详细介绍见[CRVideo_HTTP_TRANSFER_STATE](Constant.md#CRVideo_HTTP_TRANSFER_STATE)


<h3 id=CRVideo_FileProgress>CRVideo_FileProgress.callback = function( fileName, finisedSize, totalSize)){}</h3>

- **功能**: 通知用户文件的传输进度

+ **参数**：
    - fileName ----- 文件名
    - finisedSize ----- 已传输大小(number)
    - totalSize ----- 文件总大小(number)

<h3 id=CRVideo_FileFinished>CRVideo_FileFinished.callback = function( fileName, rslt)){}</h3>

- **功能**: 通知用户文件传输结束

+ **参数**：
    - fileName ----- 文件名
    - rslt ----- 传输结果,详见[CRVideo_HTTP_TRANSFER_RESULT](Constant.md#CRVideo_HTTP_TRANSFER_RESULT) 
 

<h3 id=CRVideo_FileHttpRspHeader>CRVideo_FileHttpRspHeader.callback = function( fileName,  rspHeader)){}</h3>

- **功能**: 通知http响应消息的header数据

+ **参数**：
    - fileName ----- 文件名(string)
    - rspHeader ----- http响应头(string)

<h3 id=CRVideo_FileHttpRspContent>CRVideo_FileHttpRspContent.callback = function( fileName,   rspContent)){}</h3>

- **功能**: 通知上传完成后，http的响应内容

+ **参数**：
    - fileName ----- 文件名(string)
    - rspContent ----- http上传完成后的响应内容(string)

<h3 id=CRVideo_TryReadFile>CRVideo_TryReadFile(diskPathFileName)</h3>

- **功能**: 尝试读取文件

- **返回值**:尝试结果，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)

| 参数             | 类型   | 含义           |
| :--------------- | :----- | :------------- |
| diskPathFileName | string | 本地路径文件名 |

<h3 id=CRVideo_ReadFileAsBase64>CRVideo_ReadFileAsBase64(diskPathFileName)</h3>

- **功能**: 读取文件

- **返回值**: 以base64编码返回文件内容

| 参数             | 类型   | 含义           |
| :--------------- | :----- | :------------- |
| diskPathFileName | string | 本地路径文件名 |

<h3 id=CRVideo_WriteBase64ToFile>CRVideo_WriteBase64ToFile(diskPathFileName, base64Dat)</h3>

- **功能**: 创建或重写文件（如果目录不存在，则创建目录）


- **返回值**: 结果，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)

| 参数             | 类型   | 含义                     |
| :--------------- | :----- | :----------------------- |
| diskPathFileName | string | 本地路径文件名           |
| base64Dat        | string | base64编码格式的文件数据 |



<h3 id=CRVideo_MoveFile>CRVideo_MoveFile(srcDiskFileName, dstDiskFileName)</h3>

- **功能**: 移动文件


- **返回值**: 结果，定义见[CRVideo_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)

| 参数            | 类型   | 含义         |
| :-------------- | :----- | :----------- |
| srcDiskFileName | string | 本地源文件   |
| dstDiskFileName | string | 本地目标文件 |

>注意：目标文件如果已存在，将按失败处理，不会覆盖;



<h3 id=CRVideo_GetOpenFileName>CRVideo_GetOpenFileName(title,directory,filter)</h3>

- **功能**: 获取用户打开的全路径文件名

- **返回值**: 结果，空串表示用户取消， 否则返回用户选择的文件路径文件名

| 参数      | 类型   | 含义                                                                             |
| :-------- | :----- | :------------------------------------------------------------------------------- |
| title     | string | 打开文件框的标题                                                                 |
| directory | string | 打开对话框初始路径,不设初始值时请传空                                            |
| filter    | string | 文件类型过滤器（可为空），示例："Images (*.png *.xpm *.jpg);;Text files (*.txt)" |


<h3 id=CRVideo_GetSaveFileName>CRVideo_GetSaveFileName(title,directory,filter)</h3>

- **功能**: 获取用户保存的全路径文件名

- **返回值**: 结果，空串表示用户取消， 否则返回用户保存的文件路径文件名

| 参数      | 类型   | 含义                                                                             |
| :-------- | :----- | :------------------------------------------------------------------------------- |
| title     | string | 打开文件框的标题                                                                 |
| directory | string | 打开对话框初始路径,不设初始值时请传空                                            |
| filter    | string | 文件类型过滤器（可为空），示例："Images (*.png *.xpm *.jpg);;Text files (*.txt)" |

<h3 id=CRVideo_RemoveFromRecordMgr>CRVideo_RemoveFromRecordMgr(filename)</h3>

- **功能**: 从录制管理器删除文件

- **返回值**:无

| 参数     | 类型   | 含义   |
| :------- | :----- | :----- |
| filename | string | 文件名 |

>上传中的文件会被取消上传,已上传完成的服务器文件不受影响


<h3 id=CRVideo_AddFileToRecordMgr>CRVideo_AddFileToRecordMgr(fileName, filePath)</h3>

- **功能**: 添加本地文件到录制文件管理中

- **返回值**:  -1：本地文件不存在，0：成功，1：文件已经被添加过

| 参数     | 类型   | 含义                 |
| :------- | :----- | :------------------- |
| filename | string | 文件名，不含路径     |
| filePath | string | 文件路径，不含文件名 |

>第三方录制文件调用此接口后可进行本地回放和上传到视频服务器上，和自己录制的文件一样可以正常在线播放和下载

<h3 id=CRVideo_GetWriteablePathInIEProtectedMode>CRVideo_GetWriteablePathInIEProtectedMode()</h3>

- **功能**: 获取ie的保护模式下可读写的路径（获取到的为numberernetCache目录，在系统重启或numberernetCache目录清理时，此目录下的内容将会丢失）

- **返回值**:路径


<h3 id=CRVideo_IsIEProtectedMode>CRVideo_IsIEProtectedMode()</h3>

- **功能**: 检查插件是否运行在ie的保护模式下

- **返回值**:true - ie保护模式下； false - 非ie或非保护模式{bool}


<h3 id=CRVideo_SetMarkText>CRVideo_SetMarkText(videoFilePathName,msecond,markText)</h3>

- **功能**: 添加视频打点信息

- **返回值**:无

| 参数              | 类型   | 含义                 |
| :---------------- | :----- | :------------------- |
| videoFilePathName | string | 视频文件路径名       |
| msecond           | number | 视频播放的位置(毫秒) |
| markText          | string | 打点信息             |

>调用此接口会生成一个和视频文件同名且有.json后缀的打点文本文件


<h3 id=CRVideo_RemoveMarkText>CRVideo_RemoveMarkText(videoFilePathName,msecond)</h3>

- **功能**: 移除视频打点信息


- **返回值**:无

| 参数              | 类型   | 含义                 |
| :---------------- | :----- | :------------------- |
| videoFilePathName | string | 视频文件路径名       |
| msecond           | number | 视频播放的位置(毫秒) |

<h3 id=CRVideo_GetVideoMarkFile>CRVideo_GetVideoMarkFile(videoFilePathName)</h3>

- **功能**: 获取视频文件对应的打点文件

- **返回值**:打点文件的路径文件名

| 参数              | 类型   | 含义           |
| :---------------- | :----- | :------------- |
| videoFilePathName | string | 视频文件路径名 |

<h3 id=CRVideo_GetAllMarks>CRVideo_GetAllMarks(videoFilePathName)</h3>

- **功能**:获取所有的视频打点信息

- **返回值**:打点信息集合字符串，json格式

| 参数              | 类型   | 含义           |
| :---------------- | :----- | :------------- |
| videoFilePathName | string | 视频文件路径名 |

<h3 id=CRVideo_GetRecordFileInfo>CRVideo_GetRecordFileInfo(fileName)</h3>

- **功能**:获取录制文件信息

- **返回值**:文件信息， json格式,详见[CRVideo_RecordFileInfo](TypeDefinitions.md#CRVideo_RecordFileInfo)

| 参数     | 类型   | 含义              |
| :------- | :----- | :---------------- |
| fileName | string | 文件名， 不含路径 |

<h3 id=CRVideo_Kickout>CRVideo_Kickout(userId)</h3>

- **功能**:踢出房间，离开房间

- **返回值**:无

| 参数   | 类型   | 含义   |
| :----- | :----- | :----- |
| userId | string | 用户id |

<h3 id=CRVideo_GetUserAuthErrCode>CRVideo_GetUserAuthErrCode()</h3>

- **功能**: 获取第三方鉴权失败码（只有在登录失败原因为：CRVIDEOSDK_CUSTOMAUTH_FAILED 时有效）

- **返回值**: 第三方返回的失败码,(number)


<h3 id=CRVideo_GetUserAuthErrDesc>CRVideo_GetUserAuthErrDesc()</h3>

- **功能**: 获取第三方鉴权失败原因描述（只有在登录失败原因为：CRVIDEOSDK_CUSTOMAUTH_FAILED 时有效）

- **返回值**: 第三方返回的描述串,(string)

<h3 id=CRVideo_SetMarkText>CRVideo_SetMarkText(videoFilePathName,msecond,markText)</h3>

- **功能**: 添加视频打点信息

- **返回值**:无

+ **参数**：

| 参数              | 类型   | 含义                 |
| :---------------- | :----- | :------------------- |
| videoFilePathName | string | 视频文件路径名       |
| msecond           | number | 视频播放的位置(毫秒) |
| markText          | string | 打点信息             |

>调用此接口会生成一个和视频文件同名且有.json后缀的打点文本文件


<h3 id=CRVideo_RemoveMarkText>CRVideo_RemoveMarkText( videoFilePathName,msecond)</h3>

- **功能**: 移除视频打点信息


- **返回值**:无

+ **参数**：

| 参数              | 类型   | 含义                 |
| :---------------- | :----- | :------------------- |
| videoFilePathName | string | 视频文件路径名       |
| msecond           | number | 视频播放的位置(毫秒) |

<h3 id=CRVideo_GetVideoMarkFile>CRVideo_GetVideoMarkFile( videoFilePathName)</h3>

- **功能**: 获取视频文件对应的打点文件

- **返回值**:打点文件的路径文件名

+ **参数**：

| 参数              | 类型   | 含义           |
| :---------------- | :----- | :------------- |
| videoFilePathName | string | 视频文件路径名 |

<h3 id=CRVideo_GetAllMarks>CRVideo_GetAllMarks(videoFilePathName)</h3>

- **功能**:获取所有的视频打点信息

- **返回值**:打点信息集合字符串，json格式

+ **参数**：

| 参数              | 类型   | 含义           |
| :---------------- | :----- | :------------- |
| videoFilePathName | string | 视频文件路径名 |



<h3 id=CRVideo_SendMeetingCustomMsg>CRVideo_SendMeetingCustomMsg( msg,  cookie)</h3>

- **功能**:发送房间内自定义广播消息

- **返回值**:无

+ **参数**：

| 参数   | 类型   | 含义                                                 |
| :----- | :----- | :--------------------------------------------------- |
| msg    | string | 用户自定义消息                                       |
| cookie | string | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream) |

<h3 id=CRVideo_SendMeetingCustomMsgRslt >CRVideo_SendMeetingCustomMsgRslt.callback = function(  err,  cookie){} </h3>

- **功能**:通知发送房间内自定义广播消息结果

+ **参数**：

| 参数   | 类型   | 含义                                                                             |
| :----- | :----- | :------------------------------------------------------------------------------- |
| err    | number | [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |
| cookie | string | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)                             |



<h3 id=CRVideo_NotifyMeetingCustomMsg >CRVideo_NotifyMeetingCustomMsg.callback = function( uid,  jsonDat){} </h3>

- **功能**:通知接收到房间内用户自定义广播

+ **参数**：

| 参数    | 类型   | 含义                           |
| :------ | :----- | :----------------------------- |
| uid     | string | 房间内广播消息的发送者的用户id |
| jsonDat | string | 广播内容                       |



<h3 id=CRVideo_StartSvrMixerFailed >CRVideo_StartSvrMixerFailed.callback = function(err){} </h3>

- **功能**:开启云端录制失败

+ **参数**：

| 参数 | 类型   | 含义                                                                                      |
| :--- | :----- | :---------------------------------------------------------------------------------------- |
| err  | number | 返回[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVideo_NOERR表示没有错误）(number) |

