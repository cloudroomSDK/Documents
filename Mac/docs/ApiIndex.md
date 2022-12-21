# API概述

## 模块介绍

API接口由多个模块组成 ，主要模块包括：[基础函数](#basic)、[注册/反注册回调](#listener)、[登录/反注册](#login)、[成员管理](#members)、[队列管理](#queue)、[透明通道/呼叫排队](#call)、[房间管理](#room)、[音频管理](#audio)、[视频管理](#video)、
[屏幕共享](#starshare)、[影音共享](#media)、[本地录制/本地直播](#record)、[云端录制/互动直播](#cloud)、[电子白板/文档共享](#board)、[Http文件组件](#httpManager)

<h2 id=basic>基础函数</h2>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr>
            <th style='width:170px;text-align:center'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:300px'> 
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=7>CloudroomVideoSDK</td>
            <td rowspan=7 style='text-align:center'>主调</td>
            <td><a href="Apis.md#GetCloudroomVideoSDKVer">GetCloudroomVideoSDKVer</a></td>
            <td>获取sdk的版本信息</td>
        </tr>
        <tr>
            <td><a href="Apis.md#initSDK">initSDK</a></td>
            <td>SDK初始化</td>
        </tr>
		 <tr>
            <td><a href="Apis.md#uninit">uninit</a></td>
            <td>SDK反初始化</td>
        </tr>
        <tr>
            <td><a href="Apis.md#serverAddr">serverAddr</a></td>
            <td>获取服务器地址</td>
        </tr>
        <tr>
            <td><a href="Apis.md#setServerAddr">setServerAddr</a></td>
            <td>设置服务器地址</td>
        </tr>
        <tr>
            <td><a href="Apis.md#isInitSuccess">isInitSuccess</a></td>
            <td>初始化是否成功</td>
        </tr>
    </tbody>
</table>

<h2 id=listener>设置/移除回调</h2>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
   <thead>
        <tr>
            <th style='width:170px;text-align:center'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:300px'> 
                描述
            </th>		   
        </tr>
   </thead>
   <tbody>
        <tr>   
			<td rowspan=2>CloudroomVideoMgr</td>
			<td rowspan=2 style='text-align:center'>主调</td>
            <td><a href="Apis.md#addMgrCallback">addMgrCallback</a> </td>
			<td>房间管理注册监听回调</td>
        </tr>   
        <tr>
			<td><a href="Apis.md#removeMgrCallback">removeMgrCallback</a> </td>
			<td>房间管理反注册监听回调</td>
        </tr> 		
		<tr>   
			<td rowspan=2>CloudroomVideoMeeting</td>
			<td rowspan=2 style='text-align:center'>主调</td>
            <td><a href="Apis.md#addMeetingCallBack">addMeetingCallBack</a> </td>
			<td>注册视频房间核心管理监听回调</td>
        </tr> 
		<tr>
			<td><a href="Apis.md#removeMeetingCallBack">removeMeetingCallBack</a> </td>
			<td>反注册房间管理监听回调</td>
        </tr> 
		<tr>   
			<td rowspan=2>CloudroomQueue</td>
			<td rowspan=2 style='text-align:center'>主调</td>
            <td><a href="Apis.md#addQueueCallback">addQueueCallback</a> </td>
			<td>注册队列管理监听回调</td>
        </tr> 
		<tr>
			<td><a href="Apis.md#removeQueueCallback">removeQueueCallback</a> </td>
			<td>反注册队列管理监听回调</td>
        </tr> 
		<tr>   
			<td rowspan=2>CloudroomHttpFileMgr</td>
			<td rowspan=2 style='text-align:center'>主调</td>
            <td><a href="Apis.md#addHttpFileMgrCallback">addHttpFileMgrCallback</a> </td>
			<td>注册Http文件传输管理监听回调</td>
        </tr> 
		<tr>
			<td><a href="Apis.md#removeHttpFileMgrCallback">removeHttpFileMgrCallback</a> </td>
			<td>反注册Http文件传输管理监听回调</td>
        </tr> 
   </tbody> 
</table>



<h2 id=login>登录/反注册</h2>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr>
            <th style='width:170px;text-align:center'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:300px'> 
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=4>CloudroomVideoMgr</td>
			<td rowspan=4 style='text-align:center'>主调</td>
            <td><a href="Apis.md#Userlogin">login</a></td>
            <td>登陆服务器</td>
        </tr>
        <tr>
            <td><a href="Apis.md#logout">logout</a></td>
            <td>反注册本次登陆</td>
        </tr>
         <tr>
            <td><a href="Apis.md#loginByToken">loginByToken</a></td>
            <td>token登录</td>
        </tr>
         <tr>
            <td><a href="Apis.md#updateToken">updateToken</a></td>
            <td>更新token</td>
        </tr>
        <tr>
            <td rowspan=3>CloudroomVideoMgrCallback</td>
            <td rowspan=3 style='text-align:center'>主调</td>
            <td><a href="Apis.md#loginSuccess">loginSuccess</a></td>
			<td>登录成功响应</td>
        </tr>
        <tr>
            <td><a href="Apis.md#loginFail">loginFail</a> </td>
            <td>登录失败响应</td>
        </tr>
		<tr>
            <td><a href="Apis.md#lineOff">lineOff</a> </td>
            <td>通知用户掉线</td>
        </tr>
    </tbody>
</table>

<h2 id=members>成员管理</h2>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
 <thead>
        <tr>
            <th style='width:170px;text-align:center'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:300px'> 
                描述
            </th>
        </tr>
    </thead>
	<tbody>
		<tr>
            <td rowspan=14>CloudroomVideoMeeting</td>
            <td rowspan=14 style='text-align:center'>主调</td>
			<td><a href="Apis.md#getAllMembers">getAllMembers</a></td>
            <td> 获取房间所有成员的列表</td>
        </tr>
		 <tr>
			<td><a href="Apis.md#getMemberInfo">getMemberInfo</a></td>
            <td> 获取某个用户的信息</td>
		</tr>
		<tr>
		    <td><a href="Apis.md#getNickName">getNickName</a></td>
            <td>获取某个用户的昵称</td>
		</tr>
		<tr>
		    <td><a href="Apis.md#setNickName">setNickName</a></td>
            <td>设置某个用户的昵称</td>
		</tr>
		<tr>
		    <td><a href="Apis.md#isUserInMeeting">isUserInMeeting</a></td>
            <td>判断某个用户是否在房间中</td>
		</tr>
	</tbody>
</table>

<h2 id=queue>队列管理</h2>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr>
            <th style='width:170px;text-align:center'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:300px'> 
                描述
            </th>
        </tr>
    </thead>
	<tbody>
        <tr>
            <td rowspan=14>CloudroomQueue</td>
            <td rowspan=14 style='text-align:center'>主调</td>
            <td><a href="Apis.md#initQueue">initQueue</a></td>
            <td>初始化用户队列功能数据</td>
        </tr>
        <tr>
            <td><a href="Apis.md#refreshAllQueueStatus">refreshAllQueueStatus</a></td>
            <td>刷新所有队列状态信息</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getAllQueueInfo">getAllQueueInfo</a></td>
            <td>获取队列信息</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getQueueStatus">getQueueStatus</a></td>
            <td>获取指定队列状态</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getQueuingInfo">getQueuingInfo</a></td>
            <td>获取我的排队信息</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getServiceQueues">getServiceQueues</a></td>
            <td>获取我服务的所有队列</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getSessionInfo">getSessionInfo</a></td>
            <td> 获取我的会话信息</td>
        </tr>
		<tr>
            <td><a href="Apis.md#startQueuing">startQueuing</a></td>
            <td> 客户开始排队</td>
        </tr>
		<tr>
            <td><a href="Apis.md#stopQueuing">stopQueuing</a></td>
            <td> 客户停止排队</td>
        </tr>
		<tr>
            <td><a href="Apis.md#startService">startService</a></td>
            <td> 开始服务某个队列(可以多次调用，开启对多个队列的服务)</td>
        </tr>
		<tr>
            <td><a href="Apis.md#stopService">stopService</a></td>
            <td> 停止服务某个队列</td>
        </tr>
		<tr>
            <td><a href="Apis.md#reqAssignUser">reqAssignUser</a></td>
            <td> 请求分配一个客户</td>
        </tr>
		<tr>
            <td><a href="Apis.md#acceptAssignUser">acceptAssignUser</a></td>
            <td> 接受系统安排的客户</td>
        </tr>
		<tr>
            <td><a href="Apis.md#rejectAssignUser">rejectAssignUser</a></td>
            <td> 拒绝系统安排的客户</td>
        </tr>
		<tr>
            <td rowspan=10>CloudroomQueueCallback</td>
            <td rowspan=10 style='text-align:center'>回调</td>
            <td><a href="Apis.md#initQueue">initQueueDatRslt</a></td>
            <td>队列初始化操作结果</td>
        </tr>
		<tr>
            <td><a href="Apis.md#queueStatusChanged">queueStatusChanged</a></td>
            <td>队列状态变化通知</td>
        </tr>
		<tr>
            <td><a href="Apis.md#queuingInfoChanged">queuingInfoChanged</a></td>
            <td>排队信息变化通知</td>
        </tr>
		<tr>
            <td><a href="Apis.md#startQueuingRslt">startQueuingRslt</a></td>
            <td>startQueuing 开始排队操作结果</td>
        </tr>
		<tr>
            <td><a href="Apis.md#stopQueuingRslt">stopQueuingRslt</a></td>
            <td>stopQueuing 停止排队操作结果</td>
        </tr>
		<tr>
            <td><a href="Apis.md#startServiceRslt">startServiceRslt</a></td>
            <td>startService 开始服务队列操作结果</td>
        </tr>
		<tr>
            <td><a href="Apis.md#reqAssignUserRslt">reqAssignUserRslt</a></td>
            <td>请求分配客户操作结果</td>
        </tr>
		<tr>
            <td><a href="Apis.md#autoAssignUser">autoAssignUser</a></td>
            <td>队列系统自动分配客户</td>
        </tr>
		<tr>
            <td><a href="Apis.md#cancelAssignUser">cancelAssignUser</a></td>
            <td>队列系统取消之前自动分配的的客户</td>
        </tr>
		<tr>
            <td><a href="Apis.md#responseAssignUserRslt">responseAssignUserRslt</a></td>
            <td>接受分配的用户</td>
        </tr>
	</tbody>
</table>


<h2 id=call>透明通道/呼叫排队</h2>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
     <thead>
        <tr>
            <th style='width:170px;text-align:center'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:300px'> 
                描述
            </th>
        </tr>
    </thead>
    <tbody>
		<tr>
			<td rowspan=20>CloudroomVideoMgr</td>
			<td rowspan=20 style='text-align:center'>主调</td>
			<td><a href="Apis.md#setDNDStatus">setDNDStatus</a></td>
			<td>设置免打扰状态</td>
		</tr>
		<tr>
			<td><a href="Apis.md#setDNDStatus">getUserStatus</a></td>
			<td>获取企业下指定用户的在线状态（包括呼叫房间状态、免打扰状态）</td>
		</tr>
		<tr>
			<td><a href="Apis.md#startUserStatusNotify">startUserStatusNotify</a></td>
			<td>开启用户的状态推送</td>
		</tr>
		<tr>
			<td><a href="Apis.md#stopUserStatusNotify">stopUserStatusNotify</a></td>
			<td>关闭用户的状态推送</td>
		</tr>
		<tr>
			<td><a href="Apis.md#callIn">call</a></td>
			<td>发起呼叫，邀请用户参加视频会话</td>
		</tr>
		<tr>
			<td><a href="Apis.md#acceptCall">acceptCall</a></td>
			<td>接受对方发起的视频请求，开始进入视频会话</td>
		</tr>
		<tr>
			<td><a href="Apis.md#rejectCall">rejectCall</a></td>
			<td>拒绝对方的视频请求</td>
		</tr>
		<tr>
			<td><a href="Apis.md#hangupCall">hangupCall</a></td>
			<td>挂断正在进行的视频呼叫或视频通话</td>
		</tr>
		<tr>
			<td><a href="Apis.md#callMoreParty">callMoreParty</a></td>
			<td>呼叫其他人进入房间</td>
		</tr>
		<tr>
			<td><a href="Apis.md#cancelCallMoreParty">cancelCallMoreParty</a></td>
			<td>取消呼叫他人进入房间</td>
		</tr>
		<tr>
			<td><a href="Apis.md#sendCmd">sendCmd</a></td>
			<td>发送小块数据（50K以内）</td>
		</tr>
		<tr>
			<td><a href="Apis.md#sendBuffer">sendBuffer</a></td>
			<td>发送大块数据</td>
		</tr>
		<tr>
			<td><a href="Apis.md#sendFile">sendFile</a></td>
			<td>发送文件</td>
		</tr>
		<tr>
			<td><a href="Apis.md#cancelSend">cancelSend</a></td>
			<td>取消数据发送</td>
		</tr>
    	<tr>
			<td><a href="Apis.md#setMarkText">setMarkText</a></td>
			<td>添加打点信息</td>
		</tr>
    	<tr>
			<td><a href="Apis.md#removeMarkText">removeMarkText</a></td>
			<td>移除打点信息</td>
		</tr>
    	<tr>
			<td><a href="Apis.md#getAllMarks">getAllMarks</a></td>
			<td>获取所有打点信息</td>
		</tr>
    	<tr>
			<td><a href="Apis.md#getVideoMarkFile">getVideoMarkFile</a></td>
			<td>获取打点文件的绝对文件路径名</td>
		</tr>
    	</tr>
    	<tr>
			<td><a href="Apis.md#getUserAuthErrCode">getUserAuthErrCode</a></td>
			<td>获取用户认证错误码</td>
		</tr>
    	</tr>
    	<tr>
			<td><a href="Apis.md#getUserAuthErrDesc">getUserAuthErrDesc</a></td>
			<td>获取用户验证错误描述信息</td>
		</tr>
		<tr>
			<td rowspan=1>CloudroomVideoMeeting</td>
			<td rowspan=1 style='text-align:center'>主调</td>
			<td><a href="Apis.md#sendIMmsg">sendIMmsg</a></td>
			<td>发送IM消息</td>
		</tr>
		<tr>
			<td rowspan=30>CloudroomVideoMgrCallback</td>
			<td rowspan=30 style='text-align:center'>回调</td>
			<td><a href="Apis.md#setDNDStatusSuccess">setDNDStatusSuccess</a></td>
			<td>客户端设置免打扰状态操作成功响应</td>
		</tr>
		<tr>
			<td><a href="Apis.md#setDNDStatusFail">setDNDStatusFail</a></td>
			<td>客户端设置免打扰状态操作失败响应</td>
		</tr>
		<tr>
			<td><a href="Apis.md#setDNDStatusFail">getUserStatusRslt</a></td>
			<td>获取企业内所有用户在线状态响应</td>
		</tr>
		<tr>
			<td><a href="Apis.md#setDNDStatusFail">startStatusPushRslt</a></td>
			<td>启动用户状态推送响应</td>
		</tr>
		<tr>
			<td><a href="Apis.md#setDNDStatusFail">stopStatusPushRslt</a></td>
			<td>结束用户状态推送响应</td>
		</tr>
		<tr>
			<td><a href="Apis.md#notifyUserStatus">notifyUserStatus</a></td>
			<td>某个用户状态变化通知</td>
		</tr>
		<tr>
			<td><a href="Apis.md#callSuccess">callSuccess</a></td>
			<td>呼叫他人操作成功响应</td>
		</tr>
		<tr>
			<td><a href="Apis.md#callFail">callFail</a></td>
			<td>呼叫他人操作失败响应</td>
		</tr>
		<tr>
			<td><a href="Apis.md#acceptCallSuccess">acceptCallSuccess</a></td>
			<td>接受他人呼叫操作成功响应</td>
		</tr>
		<tr>
			<td><a href="Apis.md#acceptCallFail">acceptCallFail</a></td>
			<td>接受他人呼叫操作失败响应</td>
		</tr>
		<tr>
			<td><a href="Apis.md#rejectCallSuccess">rejectCallSuccess</a></td>
			<td>拒绝他人的呼叫成功响应</td>
		</tr>
		<tr>
			<td><a href="Apis.md#rejectCallFail">rejectCallFail</a></td>
			<td>拒绝他人的呼叫失败响应</td>
		</tr>
		<tr>
			<td><a href="Apis.md#hangupCallSuccess">hangupCallSuccess</a></td>
			<td>挂断呼叫操作成功响应</td>
		</tr>
		<tr>
			<td><a href="Apis.md#hangupCallFail">hangupCallFail</a></td>
			<td>拒绝他人呼叫操作失败响应</td>
		</tr>
		<tr>
			<td><a href="Apis.md#notifyCallIn">notifyCallIn</a></td>
			<td>SDK通知自己被呼叫</td>
		</tr>
		<tr>
			<td><a href="Apis.md#notifyCallAccepted">notifyCallAccepted</a></td>
			<td>SDK通知自己视频呼叫被对方接受</td>
		</tr>
		<tr>
			<td><a href="Apis.md#notifyCallRejected">notifyCallRejected</a></td>
			<td>SDK通知自己呼叫被对方拒绝</td>
		</tr>
		<tr>
			<td><a href="Apis.md#notifyCallhangup">notifyCallhangup</a></td>
			<td>SDK通知呼叫被挂断</td>
		</tr>
		<tr>
			<td><a href="Apis.md#callMorePartyRslt">callMorePartyRslt</a></td>
			<td>呼叫操作结果</td>
		</tr>
		<tr>
			<td><a href="Apis.md#cancelCallMorePartyRslt">cancelCallMorePartyRslt</a></td>
			<td>取消呼叫操作结果</td>
		</tr>
		<tr>
			<td><a href="Apis.md#notifyCallMorePartyStatus">notifyCallMorePartyStatus</a></td>
			<td>通知呼叫状态改变</td>
		</tr>
		<tr>
			<td><a href="Apis.md#sendCmdRlst">sendCmdRlst</a></td>
		    <td rowspan=3> 发送数据时，SDK通知发送结果</td>
		</tr>
		<tr>
			<td><a href="Apis.md#sendBufferRlst">sendBufferRlst</a></td>
		</tr>
		<tr>
			<td><a href="Apis.md#sendFileRlst">sendFileRlst</a></td>
		</tr>
		<tr>
			<td><a href="Apis.md#sendProgress">sendProgress</a></td>
			<td>发送数据时，SDK通知发送进度</td>
		</tr>
		<tr>
			<td><a href="Apis.md#cancelSendRlst">cancelSendRlst</a></td>
			<td>取消发送结果</td>
		</tr>
		<tr>
			<td><a href="Apis.md#notifyCmdData">notifyCmdData</a></td>
			<td>SDK通知收到小块数据</td>
		</tr>
		<tr>
			<td><a href="Apis.md#notifyBufferData">notifyBufferData</a></td>
			<td>SDK通知收到大块数据</td>
		</tr>
		<tr>
			<td><a href="Apis.md#notifyFileData">notifyFileData</a></td>
			<td>SDK通知收到文件数据</td>
		</tr>
		<tr>
			<td><a href="Apis.md#notifyCancelSend">notifyCancelSend</a></td>
			<td>SDK通知取消发送文件数据</td>
		</tr>
		<tr>
            <td rowspan=2>CloudroomVideoCallback</td>
            <td rowspan=2 style='text-align:center'>回调</td>
            <td><a href="Apis.md#sendIMmsgRlst">sendIMmsgRlst</a></td>
            <td>发送IM消息时，通知使用者发送结果</td>
        </tr>
		<tr>
            <td><a href="Apis.md#notifyIMmsg">notifyIMmsg</a></td>
            <td>通知收到IM消息</td>
        </tr>
    </tbody> 
</table>

<h2 id=room>房间管理</h2>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
     <thead>
        <tr>
            <th style='width:170px;text-align:center'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:300px'> 
                描述
            </th>
        </tr>
    </thead>
    <tbody>
		<tr>
            <td rowspan=2>CloudroomVideoMgr</td>
            <td rowspan=2 style='text-align:center'>主调</td>
            <td><a href="Apis.md#createMeeting">createMeeting</a></td>
            <td>创建视频房间</td>
        </tr>
		<tr>  
            <td><a href="Apis.md#destroyMeeting">destroyMeeting</a></td>
            <td>销毁视频房间</td>
        </tr>
		<tr>
            <td rowspan=7>CloudroomVideoMeeting</td>
            <td rowspan=7 style='text-align:center'>主调</td>
            <td><a href="Apis.md#enterMeeting">enterMeeting</a></td>
            <td>使用房间ID进入指定的视频房间</td>
        </tr>
		<tr>  
            <td><a href="Apis.md#exitMeeting">exitMeeting</a></td>
            <td>离开房间</td>
        </tr>
		<tr>  
            <td><a href="Apis.md#exitMeeting">exitMeeting</a></td>
            <td>离开房间</td>
        </tr>
		<tr>  
            <td><a href="Apis.md#destroyMeeting">destroyMeeting</a></td>
            <td>结束房间</td>
        </tr>
		<tr>  
            <td><a href="Apis.md#switchToPage">switchToPage</a></td>
            <td>功能页切换</td>
        </tr>
		<tr>  
            <td><a href="Apis.md#getCurrentMainPage">getCurrentMainPage</a></td>
            <td>获取当前主功能区</td>
        </tr>
		<tr>  
            <td><a href="Apis.md#getCurrentSubPage">getCurrentSubPage</a></td>
            <td>获取当前子页面</td>
        </tr>
		<tr>
			<td rowspan=6>CloudroomVideoMgrCallback</td>
			<td rowspan=6 style='text-align:center'>回调</td>
			<td><a href="Apis.md#createMeetingSuccess">createMeetingSuccess</a></td>
			<td>创建房间成功响应</td>
		</tr>
		<tr>  
            <td><a href="Apis.md#destroyMeeting">createMeetingFail</a></td>
            <td>创建房间失败响应</td>
        </tr>
        <tr>  
            <td><a href="Apis.md#notifyTokenNearTimeout">notifyTokenNearTimeout</a></td>
            <td>Token失效通知</td>
        </tr>
		<tr>  
            <td><a href="Apis.md#destroyMeeting">destroyMeetingRslt</a></td>
            <td>结束房间响应</td>
        </tr>
		<tr>  
            <td><a href="Apis.md#destroyMeeting">getMeetingSuccess</a></td>
            <td>获取当前房间列表响应</td>
        </tr>
		<tr>  
            <td><a href="Apis.md#getMeetingFailed">getMeetingFailed</a></td>
            <td>获取当前房间列表失败</td>
        </tr>
		<tr>
			<td rowspan=10>CloudroomVideoCallback</td>
			<td rowspan=10 style='text-align:center'>回调</td>
			<td><a href="Apis.md#setDNDStatusSuccess">createMeetingSuccess</a></td>
			<td>创建房间成功响应</td>
		</tr>
		<tr>
			<td><a href="Apis.md#stopMeetingRslt">stopMeetingRslt</a></td>
			<td>通知结束视频房间结果</td>
		</tr>
		<tr>
			<td><a href="Apis.md#setNickNameRsp">setNickNameRsp</a></td>
			<td>设置房间成员昵称的结果</td>
		</tr>
		<tr>
			<td><a href="Apis.md#notifyNickNameChanged">notifyNickNameChanged</a></td>
			<td>某用户改变了昵称(改昵称的用户自身不会接收到此通知)</td>
		</tr>
		<tr>
			<td><a href="Apis.md#userEnterMeeting">userEnterMeeting</a></td>
			<td>某用户进入了房间</td>
		</tr>
		<tr>
			<td><a href="Apis.md#userLeftMeeting">userLeftMeeting</a></td>
			<td>某用户离开了房间</td>
		</tr>
		<tr>
			<td><a href="Apis.md#meetingDropped">meetingDropped</a></td>
			<td>通知从房间里掉线了，收到该通知后可以调用enterMeeting尝试重新进入房间</td>
		</tr>
		<tr>
			<td><a href="Apis.md#meetingStoped">meetingStoped</a></td>
			<td> 房间已被结束</td>
		</tr>
		<tr>
			<td><a href="Apis.md#netStateChanged">netStateChanged</a></td>
			<td>网络变化通知</td>
		</tr>
		<tr>
			<td><a href="Apis.md#notifySwitchToPage">notifySwitchToPage</a></td>
			<td>通知主功能页切换</td>
		</tr>
	</tbody>
</table>

<h2 id=audio>音频管理</h2>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
     <thead>
        <tr>
            <th style='width:170px;text-align:center'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:300px'> 
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=15>CloudroomVideoMeeting</td>
            <td rowspan=15 style='text-align:center'>主调</td>
            <td><a href="Apis.md#setAudioCfg">setAudioCfg</a></td>
            <td>设置音频参数</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getAudioCfg">getAudioCfg</a></td>
            <td> 获取音频参数</td>
        </tr>
		<tr>
            <td><a href="Apis.md#setMicVolumeScaling">setMicVolumeScaling</a></td>
            <td> 设置麦克风音量增益</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getMicEnergy">getMicEnergy</a></td>
            <td> 获取用户说话声音大小</td>
        </tr>
		<tr>
            <td><a href="Apis.md#openMic">openMic</a></td>
            <td> 打开用户的麦克风</td>
        </tr>
		<tr>
            <td><a href="Apis.md#closeMic">closeMic</a></td>
            <td> 关闭用户的麦克风</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getAudioStatus">getAudioStatus</a></td>
            <td> 获取用户的麦状态</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getMicVolume">getMicVolume</a></td>
            <td> 获取麦克风音量大小</td>
        </tr>
		<tr>
            <td><a href="Apis.md#setSpeakerVolume">setSpeakerVolume</a></td>
            <td> 设置本地扬声器音量</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getSpeakerVolume">getSpeakerVolume</a></td>
            <td> 获取本地扬声器音量</td>
        </tr>
		<tr>
            <td><a href="Apis.md#setSpeakerMute">setSpeakerMute</a></td>
            <td> 设置播放是否静音</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getSpeakerMute">getSpeakerMute</a></td>
            <td> 获取播放是否静音</td>
        </tr>
		<tr>
            <td><a href="Apis.md#setSpeakerOut">setSpeakerOut</a></td>
            <td> 设置外放状态</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getSpeakerOut">getSpeakerOut</a></td>
            <td> 获取外放状态</td>
        </tr>
		<tr>
            <td><a href="Apis.md#setAllAudioClose">setAllAudioClose</a></td>
            <td> 关闭所有用户的麦克风</td>
        </tr>
		 <tr>
            <td rowspan=3>CloudroomVideoCallback</td>
            <td rowspan=3 style='text-align:center'>主调</td>
            <td><a href="Apis.md#audioDevChanged">audioDevChanged</a></td>
            <td>通知本地音频设备有变化</td>
        </tr>
		<tr>
            <td><a href="Apis.md#audioStatusChanged">audioStatusChanged</a></td>
            <td>通知音频状态变化</td>
        </tr>
		<tr>
            <td><a href="Apis.md#micEnergyUpdate">micEnergyUpdate</a></td>
            <td>通知用户的说话声音强度更新</td>
        </tr>
    </tbody>
</table>

<h2 id=room_attributes>房间、用户属性</h2>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;word-wrap:break-word;'>
    <thead>
        <tr>
            <th style='width:170px;text-align:center'>
                组件
            </th>
            <th style='width:120px;text-align:center'>
                方式
            </th>
            <th style='width:140px;text-align:center'>
                接口
            </th>
            <th style='width:300px;text-align:center'>
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=32>CloudroomVideoSDK</td>
            <td rowspan=13>主调</td>
            <td><a href="Apis.md#getMeetingAllAttrs">getMeetingAllAttrs</a></td>
            <td>
                获取房间所有属性
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#getMeetingAttrs">getMeetingAttrs</a></td>
            <td>
                获取房间部份属性
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#setMeetingAttrs">setMeetingAttrs</a></td>
            <td>
                设置房间信息
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#addOrUpdateMeetingAttrs">addOrUpdateMeetingAttrs</a></td>
            <td>
                增加或者更新房间属性
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#delMeetingAttrs">delMeetingAttrs</a></td>
            <td>
                删除特定房间属性
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#clearMeetingAttrs">clearMeetingAttrs</a></td>
            <td>
                清除房间属性
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#getUserAttrs">getUserAttrs</a></td>
            <td>
                获取用户属性
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#setUserAttrs">setUserAttrs</a></td>
            <td>
                设置用户属性
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#addOrUpdateUserAttrs">addOrUpdateUserAttrs</a></td>
            <td>
                增加或者更新房间属性
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#delUserAttrs">delUserAttrs</a></td>
            <td>
                删除特定用户的特定属性
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#clearUserAttrs">clearUserAttrs</a></td>
            <td>
                清除特定用户的所有属性
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#clearAllUserAttrs">clearAllUserAttrs</a></td>
            <td>
                清除所有用户的属性
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#sendMeetingCustomMsg">sendMeetingCustomMsg</a></td>
            <td>
                房间内发送广播消息
            </td>
        </tr>
        <tr>
            <td rowspan=20>回调</td>
            <td><a href="Apis.md#getMeetingAllAttrsSuccess">getMeetingAllAttrsSuccess</a></td>
            <td>
                成功获取到房间所有属性
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#getMeetingAllAttrsFail">getMeetingAllAttrsFail</a></td>
            <td>
                获取房间所有属性失败
            </td>
        </tr>
       <tr>
            <td><a href="Apis.md#getMeetingAttrsSuccess">getMeetingAttrsSuccess</a></td>
            <td>
                成功获取到房间属性
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#getMeetingAttrsFail">getMeetingAttrsFail</a></td>
            <td>
                获取房间属性失败
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#setMeetingAttrsRslt">setMeetingAttrsRslt</a></td>
            <td>
                设置房间属性结果
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#addOrUpdateMeetingAttrsRslt">addOrUpdateMeetingAttrsRslt</a></td>
            <td>
                增加或更新房间属性结果
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#delMeetingAttrsRslt">delMeetingAttrsRslt</a></td>
            <td>
                删除房间属性结果
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#clearMeetingAttrsRslt">clearMeetingAttrsRslt</a></td>
            <td>
                清除房间属性结果
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#getUserAttrsSuccess">getUserAttrsSuccess</a></td>
            <td>
                获取用户属性
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#getUserAttrsFail">getUserAttrsFail</a></td>
            <td>
                获取用户属性失败
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#setUserAttrsRslt">setUserAttrsRslt</a></td>
            <td>
                设置用户属性结果
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#addOrUpdateUserAttrsRslt">addOrUpdateUserAttrsRslt</a></td>
            <td>
                增加或更新用户属性结果
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#delUserAttrsRslt">delUserAttrsRslt</a></td>
            <td>
                删除用户属性结果
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#clearUserAttrsRslt">clearUserAttrsRslt</a></td>
            <td>
                清除特定用户的所有属性结果
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#clearAllUserAttrsRslt">clearAllUserAttrsRslt</a></td>
            <td>
                清除所有用户的属性结果
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#notifyMeetingAttrsChanged">notifyMeetingAttrsChanged</a></td>
            <td>
                房间属性发生改变
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#notifyUserAttrsChanged">notifyUserAttrsChanged</a></td>
            <td>
                用户属性发生改变
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#sendMeetingCustomMsgRslt">sendMeetingCustomMsgRslt</a></td>
            <td>
                发送房间内用户广播结果
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#notifyMeetingCustomMsg">notifyMeetingCustomMsg</a></td>
            <td>
                接收到房间内用户自定义广播
            </td>
        </tr>
    </tbody>
</table>

<h2 id=video>视频管理</h2>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
     <thead>
        <tr>
            <th style='width:170px;text-align:center'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:300px'> 
                描述
            </th>
        </tr>
    </thead>
	<tbody>
		<tr>
            <td rowspan=20>CloudroomVideoMeeting</td>
            <td rowspan=20 style='text-align:center'>主调</td>
            <td><a href="Apis.md#getAllVideoInfo">getAllVideoInfo</a></td>
            <td>获取用户所有的摄像头信息</td>
        </tr>
		<tr>
            <td><a href="Apis.md#createCustomVideoDev">createCustomVideoDev</a></td>
            <td>创建自定义摄像头</td>
        </tr>
		<tr>
            <td><a href="Apis.md#destroyCustomVideoDev">destroyCustomVideoDev</a></td>
            <td>消毁自定义摄像头</td>
        </tr>
		<tr>
            <td><a href="Apis.md#inputCustomVideoDat">inputCustomVideoDat</a></td>
            <td>输入摄像头图像数据</td>
        </tr>
		<tr>
            <td><a href="Apis.md#setVideoCfg">setVideoCfg</a></td>
            <td>设置摄像头参数</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getVideoCfg">getVideoCfg</a></td>
            <td>获取设置的摄像头参数</td>
        </tr>
		<tr>
            <td><a href="Apis.md#setLocVideoAttributes">setLocVideoAttributes</a></td>
            <td>设置某个摄像头私有参数</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getWatchableVideos">getWatchableVideos</a></td>
            <td>获取房间内所有可观看的摄像头</td>
        </tr>
		<tr>
            <td><a href="Apis.md#openVideo">openVideo</a></td>
            <td>打开用户的摄像头，以便本地、远端显示视频图像</td>
        </tr>
		<tr>
            <td><a href="Apis.md#closeVideo">closeVideo</a></td>
            <td>关闭用户的摄像头</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getVideoStatus">getVideoStatus</a></td>
            <td>获取用户的摄像头状态</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getDefaultVideo">getDefaultVideo</a></td>
            <td>获取指定用户的默认摄像头</td>
        </tr>
		<tr>
            <td><a href="Apis.md#setDefaultVideo">setDefaultVideo</a></td>
            <td>设置默认的摄像头</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getVideoImg">getVideoImg</a></td>
            <td>获取指定用户摄像头的最新图像</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getLocalVideoParams">getLocalVideoParams</a></td>
            <td>获取指定本地摄像头参数</td>
        </tr>
		<tr>
            <td><a href="Apis.md#setLocalVideoParam">setLocalVideoParam</a></td>
            <td>设置指定本地摄像头参数</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getVideoWallMode">getVideoWallMode</a></td>
            <td>获取视频墙当前分屏模式</td>
        </tr>
		<tr>
            <td><a href="Apis.md#setVideoWallMode">setVideoWallMode</a></td>
            <td>设置视频墙分屏模式</td>
        </tr>
		<tr>
            <td><a href="Apis.md#setMainVideo">setMainVideo</a></td>
            <td>设置当前哪个用户为主视频</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getMainVideo">getMainVideo</a></td>
            <td>获取当前哪个用户为主视频</td>
        </tr>
		<tr>
		    <td rowspan=7>CloudroomVideoCallback</td>
            <td rowspan=7 style='text-align:center'>回调</td>
            <td><a href="Apis.md#openVideoRslt">openVideoRslt</a></td>
            <td>打开摄像头设备操作结果</td>
		</tr>
		<tr>
            <td><a href="Apis.md#videoStatusChanged">videoStatusChanged</a></td>
            <td>视频状态变化</td>
		</tr>
		<tr>
            <td><a href="Apis.md#videoDevChanged">videoDevChanged</a></td>
            <td>通知用户的视频设备有变化</td>
		</tr>
		<tr>
            <td><a href="Apis.md#notifyVideoData">notifyVideoData</a></td>
            <td>通知用户有新的视频数据</td>
		</tr>
		<tr>
            <td><a href="Apis.md#videoDevChanged">videoDevChanged</a></td>
            <td>通知用户的视频默认设备有变化</td>
		</tr>
		<tr>
            <td><a href="Apis.md#notifyVideoWallMode">notifyVideoWallMode</a></td>
            <td>通知视频分屏模式切换</td>
		</tr>
		<tr>
            <td><a href="Apis.md#notifyMainVideo">notifyMainVideo</a></td>
            <td>通知主视频更改</td>
		</tr>
	</tbody>
</table>

<h2 id=starshare>屏幕共享 </h2>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
     <thead>
        <tr>
            <th style='width:170px;text-align:center'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:300px'> 
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=8>CloudroomVideoMeeting</td>
            <td rowspan=8 style='text-align:center'>主调</td>
            <td><a href="Apis.md#isScreenShareStarted">isScreenShareStarted</a></td>
            <td>获取屏幕共享是否已开启</td>
        </tr>
		<tr>
		        <tr>
            <td><a href="Apis.md#getScreenShareCfg">getScreenShareCfg</a></td>
            <td>
                获取屏幕共享配置
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#setScreenShareCfg">setScreenShareCfg</a></td>
            <td>
                设置屏幕共享配置
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#startScreenShare">startScreenShare</a></td>
            <td>
                开始屏幕共享
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#stopScreenShare">stopScreenShare</a></td>
            <td>
                停止屏幕共享
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#isEnableOtherMark">isEnableOtherMark</a></td>
            <td>
                获取是否允许他人标注屏幕
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#enableOtherMark">enableOtherMark</a></td>
            <td>
                允许他人标注屏幕
            </td>
        </tr>
            <td rowspan=8>CloudroomVideoCallback</td>
            <td rowspan=8 style='text-align:center'>回调</td>
            <td>
                <a href="Apis.md#startScreenShareRslt">startScreenShareRslt</a>
            <td>
                开启屏幕共享的响应事件
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#stopScreenShareRslt">stopScreenShareRslt</a></td>
            <td>
                停止屏幕共享的响应事件
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#notifyScreenShareStarted">notifyScreenShareStarted</a></td>
            <td>
                通知屏幕共享开始
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#notifyScreenShareStopped">notifyScreenShareStopped</a></td>
            <td>
                通知屏幕共享停止
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#startScreenMarkRslt">startScreenMarkRslt</a></td>
            <td>
                开始屏幕标注结果
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#stopScreenMarkRslt">stopScreenMarkRslt</a></td>
            <td>
                停止屏幕标注结果
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#notifyScreenMarkStarted">notifyScreenMarkStarted</a></td>
            <td>
                通知屏幕标注开始
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#notifyScreenMarkStopped">notifyScreenMarkStopped</a></td>
            <td>
                通知屏幕标注停止
            </td>
        </tr>
    </tbody>
</table>


<h2 id=media>影音共享</h2>


<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
     <thead>
        <tr>
            <th style='width:170px;text-align:center'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:300px'> 
                描述
            </th>
        </tr>
    </thead>
	<tbody>
		<tr>
            <td rowspan=11>CloudroomVideoMeeting</td>
            <td rowspan=11 style='text-align:center'>主调</td>
            <td><a href="Apis.md#setMediaCfg ">setMediaCfg </a></td>
            <td>配置远程影音共享时，图像质量参数</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getMediaCfg">getMediaCfg</a></td>
            <td>获取影音共享图像质量参数</td>
        </tr>
		<tr>
            <td><a href="Apis.md#startPlayMedia">startPlayMedia</a></td>
            <td>播放影音文件</td>
        </tr>
		<tr>
            <td><a href="Apis.md#pausePlayMedia">pausePlayMedia</a></td>
            <td>暂停播放影音</td>
        </tr>
		<tr>
            <td><a href="Apis.md#stopPlayMedia">stopPlayMedia</a></td>
            <td>停止影音播放</td>
        </tr>
		<tr>
            <td><a href="Apis.md#setMediaPlayPos">setMediaPlayPos</a></td>
            <td>设置播放进度</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getAllFilesInMediaPath">getAllFilesInMediaPath</a></td>
            <td>取得影音文件夹下的所有可播放文件</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getMediaInfo">getMediaInfo</a></td>
            <td> 取得影音文件信息</td>
        </tr>
		<tr>
            <td><a href="Apis.md#setMediaVolume">setMediaVolume</a></td>
            <td> 设置影音播放的音量</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getMediaVolume">getMediaVolume</a></td>
            <td> 读取影音播放的音量</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getMediaImg">getMediaImg</a></td>
            <td> 取得影音帧信息</td>
        </tr>
		<tr>
            <td rowspan=11>CloudroomVideoCallback</td>
            <td rowspan=11 style='text-align:center'>回调</td>
            <td><a href="Apis.md#notifyMediaOpened ">notifyMediaOpened </a></td>
            <td>通知影音文件打开</td>
        </tr>
		<tr>
            <td><a href="Apis.md#notifyMediaStart ">notifyMediaStart </a></td>
            <td>通知影音开始播放</td>
        </tr>
		<tr>
            <td><a href="Apis.md#notifyMediaPause ">notifyMediaPause </a></td>
            <td>通知影音暂停播放</td>
        </tr>
		<tr>
            <td><a href="Apis.md#notifyMediaStop ">notifyMediaStop </a></td>
            <td>通知影音播放停止</td>
        </tr>
		<tr>
            <td><a href="Apis.md#notifyPlayPosSetted ">notifyPlayPosSetted </a></td>
            <td>通知播放进度已设置完成</td>
        </tr>
		<tr>
            <td><a href="Apis.md#notifyMemberMediaData ">notifyMemberMediaData </a></td>
            <td>通知影音帧数据已解码完毕</td>
        </tr>
		<tr>
            <td><a href="Apis.md#notifyAudioPCMDat ">notifyAudioPCMDat </a></td>
            <td>通知语音PCM数据</td>
        </tr>
    </tbody>
</table>

<h2 id=record>本地录制/本地直播</h2>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr>
            <th style='width:170px;text-align:center'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:300px'> 
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=13>CloudroomVideoMeeting</td>
            <td rowspan=13 style='text-align:center'>主调</td>
            <td><a href="Apis.md#createLocMixer">createLocMixer</a></td>
            <td>创建本地混图器</td>
        </tr>
        <tr>
            <td><a href="Apis.md#updateLocMixerCotent">updateLocMixerCotent</a></td>
            <td>更新本地混图器内容</td>
        </tr>
		<tr>
            <td><a href="Apis.md#destroyLocMixer">destroyLocMixer</a></td>
            <td>消毁本地混图器</td>
        </tr>
		<tr>
            <td><a href="Apis.md#getLocMixerState">getLocMixerState</a></td>
            <td>获取本地混图器状态</td>
        </tr>
		<tr>
			<td><a href="Apis.md#addLocMixerOutput">addLocMixerOutput</a></td>
			<td>开启本地录制、开启直播推流</td>
		</tr>
		<tr>
			<td><a href="Apis.md#rmLocMixerOutput">rmLocMixerOutput</a></td>
			<td>停止本地录制、直播推流</td>
		</tr>
		<tr>
			<td><a href="Apis.md#getAllRecordFiles">getAllRecordFiles</a></td>
			<td> 取得所有录制文件信息</td>
		</tr>
		<tr>
			<td><a href="Apis.md#addFileToRecordMgr">addFileToRecordMgr</a></td>
			<td>添加本地文件到录制文件管理中</td>
		</tr>
		<tr>
			<td><a href="Apis.md#removeFromFileMgr">removeFromFileMgr</a></td>
			<td>删除本地的录制文件，上传中的文件会被取消上传</td>
		</tr>
		<tr>
			<td><a href="Apis.md#uploadRecordFile">uploadRecordFile</a></td>
			<td>上传录制文件</td>
		</tr>
		<tr>
			<td><a href="Apis.md#uploadRecordFile">uploadRecordFile</a></td>
			<td>上传录制文件到服务器指定位置</td>
		</tr>
		<tr>
			<td><a href="Apis.md#cancelUploadRecordFile">cancelUploadRecordFile</a></td>
			<td>取消上传中的录制文件</td>
		</tr>
		<tr>
			<td><a href="Apis.md#playbackRecordFile">playbackRecordFile</a></td>
			<td>回放录制文件</td>
		</tr>
		<tr>
			<td rowspan=7>CloudroomVideoCallback</td>
			<td rowspan=7 style='text-align:center'>回调</td>
			<td><a href="Apis.md#uploadRecordFileErr">uploadRecordFileErr</a></td>
			<td> 上传录制文件错误通知</td>
		</tr>
		<tr>
			<td><a href="Apis.md#cancelUploadRecordFileErr">cancelUploadRecordFileErr</a></td>
			<td>取消上传错误通知</td>
		</tr>
		<tr>
			<td><a href="Apis.md#locMixerStateChanged">locMixerStateChanged</a></td>
			<td>本地混图器状态变化通知</td>
		</tr>
		<tr>
			<td><a href="Apis.md#locMixerOutputInfo">locMixerOutputInfo</a></td>
			<td>本地录制文件、本地直播信息通知</td>
		</tr>
		<tr>
			<td><a href="Apis.md#notifyRecordFileStateChanged">notifyRecordFileStateChanged</a></td>
			<td>通知录制文件状态更改</td>
		</tr>
		<tr>
			<td><a href="Apis.md#uploadRecordFileSuccess">uploadRecordFileSuccess</a></td>
			<td>通知录制文件上传成功</td>
		</tr>
		<tr>
			<td><a href="Apis.md#notifyRecordFileUploadProgress">notifyRecordFileUploadProgress</a></td>
			<td>通知录制文件上传进度</td>
		</tr>
    </tbody>
</table>

<h2 id=cloud>云端录制/互动直播</h2>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
     <thead>
        <tr>
            <th style='width:170px;text-align:center'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:300px'> 
                描述
            </th>
        </tr>
	  </thead>
		<tbody>
			<tr>
				<td rowspan=4>CloudroomVideoMeeting</td>
				<td rowspan=4 style='text-align:center'>主调</td>
				<td><a href="Apis.md#createCloudMixer">createCloudMixer</a></td>
				<td>开始云端录制、云端直播</td>
			</tr>
			<tr>
				<td><a href="Apis.md#updateCloudMixerContent">updateCloudMixerContent</a></td>
				<td>更新云端录制、云端直播内容</td>
			</tr>
			<tr>
				<td><a href="Apis.md#destroyCloudMixer">destroyCloudMixer</a></td>
				<td>停止云端录制、云端直播</td>
			</tr>
			<tr>
				<td><a href="Apis.md#getCloudMixerInfo">getCloudMixerInfo</a></td>
				<td>获取云端录制、云端直播状态</td>
			</tr>
			<tr>
				<td rowspan=4>CloudroomVideoCallback</td>
				<td rowspan=4 style='text-align:center'>回调</td>
				<td><a href="Apis.md#createCloudMixerFailed">createCloudMixerFailed</a></td>
				<td>启动云端录制、云端直播失败通知</td>
			</tr>
			<tr>
			   <td><a href="Apis.md#cloudMixerStateChanged">cloudMixerStateChanged</a></td>
				<td>云端录制、云端直播状态变化通知</td>
			</tr>
			<tr>
				<td><a href="Apis.md#cloudMixerInfoChanged">cloudMixerInfoChanged</a></td>
				<td>云端录制、云端直播配置变化通知</td>
			</tr>
			<tr>
				<td><a href="Apis.md#cloudMixerOutputInfoChanged">cloudMixerOutputInfoChanged</a></td>
				<td>云端录制文件、云端直播输出变化通知</td>
			</tr>
		</tbody>
    </thead>

</table>


<h2 id=httpManager>Http文件组件</h2>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr>
            <th style='width:170px;text-align:center'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:300px'> 
                描述
            </th>
        </tr>
    </thead>
	<tbody>
		<tr>
            <td rowspan=6>CloudroomHttpFileMgr</td>
            <td rowspan=6 style='text-align:center'>主调</td>
			<td><a href="Apis.md#startMgr">startMgr</a></td>
            <td>启动Http文件文件组件运行</td>
        </tr>
		<tr>
			<td><a href="Apis.md#stopMgr">stopMgr</a></td>
            <td>停止Http文件文件组件运行</td>
        </tr>
		<tr>
			<td><a href="Apis.md#getAllTransferInfos">getAllTransferInfos</a></td>
            <td>获取本地上传、下载文件信息</td>
        </tr>
		<tr>
			<td><a href="Apis.md#startTransferFile">startTransferFile</a></td>
            <td>开始下载/上传文件</td>
        </tr>
		<tr>
			<td><a href="Apis.md#cancelFileTransfer">cancelFileTransfer</a></td>
            <td>取消传输</td>
        </tr>
		<tr>
			<td><a href="Apis.md#rmTransferInfo">rmTransferInfo</a></td>
            <td>删除传输记录及相关文件</td>
        </tr>
		<tr>
			<td rowspan=3>CloudroomHttpFileMgrCallback</td>
            <td rowspan=3 style='text-align:center'>回调</td>
			<td><a href="Apis.md#fileStateChanged">fileStateChanged</a></td>
            <td>通知用户文件状态更改</td>
        </tr>
		<tr>
			<td><a href="Apis.md#fileProgress">fileProgress</a></td>
            <td>通知用户文件的传输进度</td>
        </tr>
		<tr>
			<td><a href="Apis.md#fileFinished">fileFinished</a></td>
            <td>通知用户文件传输结束</td>
        </tr>
	</tbody>
</table>

<h2 id=invite_function>邀请</h2>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;word-wrap:break-word;'>
    <thead>
        <tr>
            <th style='width:200px;text-align:center'>
                组件
            </th>
            <th style='width:170px;text-align:center'>
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
            <td rowspan=17>CloudroomVideoMgr</td>
            <td rowspan=4>主调</td>
            <td><a href="Apis.md#invite">invite</a></td>
            <td>
                发送邀请
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#acceptInvite">acceptInvite</a></td>
            <td>
                接受对方发送的邀请
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#rejectInvite">rejectInvite</a></td>
            <td>
                拒绝对方发送的邀请
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#cancelInvite">cancelInvite</a></td>
            <td>
                取消自己发送的邀请
            </td>
        </tr>
        <tr>
            <td rowspan=12>
                回调
            </td>
            <td>
                <a href="Apis.md#inviteSuccess">inviteSuccess</a>
            <td>
                发送邀请成功
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#inviteFail">inviteFail</a></td>
            <td>
                发送邀请失败
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#cancelInviteSuccess">cancelInviteSuccess</a></td>
            <td>
                取消自己发送的邀请成功
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#cancelInviteFail">cancelInviteFail</a></td>
            <td>
                取消自己发送的邀请失败
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#acceptInviteSuccess">acceptInviteSuccess</a></td>
            <td>
                接受对方发送的邀请成功
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#acceptInviteFail">acceptInviteFail</a></td>
            <td>
                接受对方发送的邀请失败
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#rejectInviteSuccess">rejectInviteSuccess</a></td>
            <td>
                拒绝对方发送的邀请成功
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#rejectInviteFail">rejectInviteFail</a></td>
            <td>
                拒绝对方发送的邀请失败
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#notifyInviteIn">notifyInviteIn</a></td>
            <td>
                通知有人邀请
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#notifyInviteAccepted">notifyInviteAccepted</a></td>
            <td>
                通知邀请被对方接受
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#notifyInviteRejected">notifyInviteRejected</a></td>
            <td>
                通知邀请被对方拒绝
            </td>
        </tr>
        <tr>
            <td><a href="Apis.md#notifyInviteCanceled">notifyInviteCanceled</a></td>
            <td>
                通知有邀请被取消
            </td>
        </tr>
    </tbody>
</table>



