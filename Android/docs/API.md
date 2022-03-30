# API


## 模块介绍

API接口由多个模块组成 ，主要模块包括：[基础函数](#basic)、[注册/反注册回调](#listener)、[登录/反注册](#login)、[成员管理](#members)、
[队列管理](#queue)、[透明通道/呼叫排队](#call)、[邀请](#invite_function)、[房间管理](#room)、[音频管理](#audio)、[视频管理](#video)、
[屏幕共享](#starshare)、[影音共享](#media)、[本地录制/本地直播](#record)、[云端录制/互动直播](#cloud)、
[电子白板/文档共享](#board)、[Http文件组件](#httpManager)

<h3 id=basic>基础函数</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr>
            <th style='width:70px;text-align:left'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:400px'> 
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=7>CloudroomVideoSDK</td>
            <td rowspan=7 style='text-align:center'>主调</td>
            <td><a href="#GetCloudroomVideoSDKVer">GetCloudroomVideoSDKVer</a></td>
            <td>获取sdk的版本信息</td>
        </tr>
        <tr>
            <td><a href="#init">init</a></td>
            <td>SDK初始化</td>
        </tr>
		 <tr>
            <td><a href="#uninit">uninit</a></td>
            <td>SDK反初始化</td>
        </tr>
        <tr>
            <td><a href="#serverAddr">serverAddr</a></td>
            <td>获取服务器地址</td>
        </tr>
        <tr>
            <td><a href="#setServerAddr">setServerAddr</a></td>
            <td>设置服务器地址</td>
        </tr>
        <tr>
            <td><a href="#setFileUploadRate">setFileUploadRate</a></td>
            <td>文件上传的流量控制</td>
        </tr>
        <tr>
            <td><a href="#setFileDownloadRate">setFileDownloadRate</a></td>
            <td>文件下载的流量控制</td>
        </tr>
    </tbody>
</table>

<h3 id=listener>注册/反注册回调</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
   <thead>
        <tr>
            <th style='width:70px;text-align:left'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:400px'> 
                描述
            </th>		   
        </tr>
   </thead>
   <tbody>
        <tr>   
			<td rowspan=2>CloudroomVideoMgr</td>
			<td rowspan=2 style='text-align:center'>主调</td>
            <td><a href="#CloudroomVideoMgr_registerCallBack">registerCallBack</a> </td>
			<td>房间管理注册监听回调</td>
        </tr>   
        <tr>
			<td><a href="#CloudroomVideoMgr_unregisterCallBack">unregisterCallBack</a> </td>
			<td>房间管理反注册监听回调</td>
        </tr> 		
		<tr>   
			<td rowspan=2>CloudroomVideoMeeting</td>
			<td rowspan=2 style='text-align:center'>主调</td>
            <td><a href="#CloudroomVideoMeeting_registerCallBack">registerCallBack</a> </td>
			<td>注册视频房间核心管理监听回调</td>
        </tr> 
		<tr>
			<td><a href="#CloudroomVideoMeeting_unregisterCallBack">unregisterCallBack</a> </td>
			<td>反注册房间管理监听回调</td>
        </tr> 
		<tr>   
			<td rowspan=2>CloudroomQueue</td>
			<td rowspan=2 style='text-align:center'>主调</td>
            <td><a href="#CloudroomQueue_registerCallBack">registerCallBack</a> </td>
			<td>注册队列管理监听回调</td>
        </tr> 
		<tr>
			<td><a href="#CloudroomQueue_unregisterCallBack">unregisterCallBack</a> </td>
			<td>反注册队列管理监听回调</td>
        </tr> 
		<tr>   
			<td rowspan=2>CloudroomHttpFileMgr</td>
			<td rowspan=2 style='text-align:center'>主调</td>
            <td><a href="#CloudroomHttpFileMgr_registerCallBack">registerCallBack</a> </td>
			<td>注册Http文件传输管理监听回调</td>
        </tr> 
		<tr>
			<td><a href="#CloudroomHttpFileMgr_unregisterCallBack">unregisterCallBack</a> </td>
			<td>反注册Http文件传输管理监听回调</td>
        </tr> 
   </tbody> 
</table>

<h3 id=login>登录/反注册</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr>
            <th style='width:70px;text-align:left'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:400px'> 
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=6>CloudroomVideoMgr</td>
	    <td rowspan=6 style='text-align:center'>主调</td>
            <td><a href="#Userlogin">login</a></td>
            <td>密码登录</td>
        </tr>
	<tr>
            <td><a href="#loginByToken">loginByToken</a></td>
            <td>Token登录</td>
	</tr>
	    	<tr>
			<td><a href="#getUserAuthErrCode">getUserAuthErrCode</a></td>
			<td>获取用户认证错误码</td>
		</tr>
    	<tr>
			<td><a href="#getUserAuthErrDesc">getUserAuthErrDesc</a></td>
			<td>获取用户验证错误描述信息</td>
		</tr>
        <tr>
            <td><a href="#logout">logout</a></td>
            <td>反注册本次登陆</td>
        </tr>
	<tr>
            <td><a href="#updateToken">updateToken</a></td>
            <td>更新Token</td>
        </tr>
        <tr>
            <td rowspan=4>CloudroomVideoMgrCallback</td>
            <td rowspan=4 style='text-align:center'>主调</td>
            <td><a href="#loginSuccess">loginSuccess</a></td>
	    <td>登录成功响应</td>
        </tr>
        <tr>
            <td><a href="#loginFail">loginFail</a> </td>
            <td>登录失败响应</td>
        </tr>
	<tr>
            <td><a href="#notifyTokenWillExpire">notifyTokenWillExpire</a> </td>
            <td>Token即将失效</td>
        </tr>
	<tr>
            <td><a href="#lineOff">lineOff</a> </td>
            <td>通知用户掉线</td>
        </tr>
    </tbody>
</table>

<h3 id=members>成员管理</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
 <thead>
        <tr>
            <th style='width:70px;text-align:left'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:400px'> 
                描述
            </th>
        </tr>
    </thead>
	<tbody>
		<tr>
            <td rowspan=14>CloudroomVideoMeeting</td>
            <td rowspan=14 style='text-align:center'>主调</td>
			<td><a href="#getAllMembers">getAllMembers</a></td>
            <td> 获取房间所有成员的列表</td>
        </tr>
		 <tr>
			<td><a href="#getMemberInfo">getMemberInfo</a></td>
            <td> 获取某个用户的信息</td>
		</tr>
		<tr>
		    <td><a href="#getNickName">getNickName</a></td>
            <td>获取某个用户的昵称</td>
		</tr>
		<tr>
		    <td><a href="#setNickName">setNickName</a></td>
            <td>设置某个用户的昵称</td>
		</tr>
		<tr>
		    <td><a href="#isUserInMeeting">isUserInMeeting</a></td>
            <td>判断某个用户是否在房间中</td>
		</tr>
	</tbody>
</table>


<h3 id=room_attributes>房间、用户属性</h3>
<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;word-wrap:break-word;'>
    <thead>
        <tr>
            <th style='width:70px;text-align:left'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:400px'> 
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
			<td rowspan=13>CloudroomVideoMeeting</td>
            <td rowspan=13 style='text-align:center'>主调</td>
            <td><a href="#getMeetingAllAttrs">getMeetingAllAttrs</a></td>
            <td>
                获取房间所有属性
            </td>
        </tr>
        <tr>
            <td><a href="#getMeetingAttrs">getMeetingAttrs</a></td>
            <td>
                获取房间部份属性
            </td>
        </tr>
        <tr>
            <td><a href="#setMeetingAttrs">setMeetingAttrs</a></td>
            <td>
                设置房间信息
            </td>
        </tr>
        <tr>
            <td><a href="#addOrUpdateMeetingAttrs">addOrUpdateMeetingAttrs</a></td>
            <td>
                增加或者更新房间属性
            </td>
        </tr>
        <tr>
            <td><a href="#delMeetingAttrs">delMeetingAttrs</a></td>
            <td>
                删除特定房间属性
            </td>
        </tr>
        <tr>
            <td><a href="#clearMeetingAttrs">clearMeetingAttrs</a></td>
            <td>
                清除房间属性
            </td>
        </tr>
        <tr>
            <td><a href="#getUserAttrs">getUserAttrs</a></td>
            <td>
                获取用户属性
            </td>
        </tr>
        <tr>
            <td><a href="#setUserAttrs">setUserAttrs</a></td>
            <td>
                设置用户属性
            </td>
        </tr>
        <tr>
            <td><a href="#addOrUpdateUserAttrs">addOrUpdateUserAttrs</a></td>
            <td>
                增加或者更新房间属性
            </td>
        </tr>
        <tr>
            <td><a href="#delUserAttrs">delUserAttrs</a></td>
            <td>
                删除特定用户的特定属性
            </td>
        </tr>
        <tr>
            <td><a href="#clearUserAttrs">clearUserAttrs</a></td>
            <td>
                清除特定用户的所有属性
            </td>
        </tr>
        <tr>
            <td><a href="#clearAllUserAttrs">clearAllUserAttrs</a></td>
            <td>
                清除所有用户的属性
            </td>
        </tr>
        <tr>
            <td><a href="#sendMeetingCustomMsg">sendMeetingCustomMsg</a></td>
            <td>
                房间内发送广播消息
            </td>
        </tr>
        <tr>
			<td rowspan=19>CloudroomVideoCallback</td>
            <td rowspan=19 style='text-align:center'>回调</td>
            <td><a href="#getMeetingAllAttrsSuccess">getMeetingAllAttrsSuccess</a></td>
            <td>
                成功获取到房间所有属性
            </td>
        </tr>
        <tr>
            <td><a href="#getMeetingAllAttrsFail">getMeetingAllAttrsFail</a></td>
            <td>
                获取房间所有属性失败
            </td>
        </tr>
       <tr>
            <td><a href="#getMeetingAttrsSuccess">getMeetingAttrsSuccess</a></td>
            <td>
                成功获取到房间属性
            </td>
        </tr>
        <tr>
            <td><a href="#getMeetingAttrsFail">getMeetingAttrsFail</a></td>
            <td>
                获取房间属性失败
            </td>
        </tr>
        <tr>
            <td><a href="#setMeetingAttrsRslt">setMeetingAttrsRslt</a></td>
            <td>
                设置房间属性结果
            </td>
        </tr>
        <tr>
            <td><a href="#addOrUpdateMeetingAttrsRslt">addOrUpdateMeetingAttrsRslt</a></td>
            <td>
                增加或更新房间属性结果
            </td>
        </tr>
        <tr>
            <td><a href="#delMeetingAttrsRslt">delMeetingAttrsRslt</a></td>
            <td>
                删除房间属性结果
            </td>
        </tr>
        <tr>
            <td><a href="#clearMeetingAttrsRslt">clearMeetingAttrsRslt</a></td>
            <td>
                清除房间属性结果
            </td>
        </tr>
        <tr>
            <td><a href="#getUserAttrsSuccess">getUserAttrsSuccess</a></td>
            <td>
                获取用户属性
            </td>
        </tr>
        <tr>
            <td><a href="#getUserAttrsFail">getUserAttrsFail</a></td>
            <td>
                获取用户属性失败
            </td>
        </tr>
        <tr>
            <td><a href="#setUserAttrsRslt">setUserAttrsRslt</a></td>
            <td>
                设置用户属性结果
            </td>
        </tr>
        <tr>
            <td><a href="#addOrUpdateUserAttrsRslt">addOrUpdateUserAttrsRslt</a></td>
            <td>
                增加或更新用户属性结果
            </td>
        </tr>
        <tr>
            <td><a href="#delUserAttrsRslt">delUserAttrsRslt</a></td>
            <td>
                删除用户属性结果
            </td>
        </tr>
        <tr>
            <td><a href="#clearUserAttrsRslt">clearUserAttrsRslt</a></td>
            <td>
                清除特定用户的所有属性结果
            </td>
        </tr>
        <tr>
            <td><a href="#clearAllUserAttrsRslt">clearAllUserAttrsRslt</a></td>
            <td>
                清除所有用户的属性结果
            </td>
        </tr>
        <tr>
            <td><a href="#notifyMeetingAttrsChanged">notifyMeetingAttrsChanged</a></td>
            <td>
                房间属性发生改变
            </td>
        </tr>
        <tr>
            <td><a href="#notifyUserAttrsChanged">notifyUserAttrsChanged</a></td>
            <td>
                用户属性发生改变
            </td>
        </tr>
        <tr>
            <td><a href="#sendMeetingCustomMsgRslt">sendMeetingCustomMsgRslt</a></td>
            <td>
                发送房间内用户广播结果
            </td>
        </tr>
        <tr>
            <td><a href="#notifyMeetingCustomMsg">notifyMeetingCustomMsg</a></td>
            <td>
                接收到房间内用户自定义广播
            </td>
        </tr>
    </tbody>
</table>

<h3 id=queue>队列管理</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr>
            <th style='width:70px;text-align:left'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:400px'> 
                描述
            </th>
        </tr>
    </thead>
	<tbody>
        <tr>
            <td rowspan=14>CloudroomQueue</td>
            <td rowspan=14 style='text-align:center'>主调</td>
            <td><a href="#initQueue">initQueue</a></td>
            <td>初始化用户队列功能数据</td>
        </tr>
        <tr>
            <td><a href="#refreshAllQueueStatus">refreshAllQueueStatus</a></td>
            <td>刷新所有队列状态信息</td>
        </tr>
		<tr>
            <td><a href="#getAllQueueInfo">getAllQueueInfo</a></td>
            <td>获取队列信息</td>
        </tr>
		<tr>
            <td><a href="#getQueueStatus">getQueueStatus</a></td>
            <td>获取指定队列状态</td>
        </tr>
		<tr>
            <td><a href="#getQueuingInfo">getQueuingInfo</a></td>
            <td>获取我的排队信息</td>
        </tr>
		<tr>
            <td><a href="#getServiceQueues">getServiceQueues</a></td>
            <td>获取我服务的所有队列</td>
        </tr>
		<tr>
            <td><a href="#getSessionInfo">getSessionInfo</a></td>
            <td> 获取我的会话信息</td>
        </tr>
		<tr>
            <td><a href="#startQueuing">startQueuing</a></td>
            <td> 客户开始排队</td>
        </tr>
		<tr>
            <td><a href="#stopQueuing">stopQueuing</a></td>
            <td> 客户停止排队</td>
        </tr>
		<tr>
            <td><a href="#startService">startService</a></td>
            <td> 开始服务某个队列(可以多次调用，开启对多个队列的服务)</td>
        </tr>
		<tr>
            <td><a href="#stopService">stopService</a></td>
            <td> 停止服务某个队列</td>
        </tr>
		<tr>
            <td><a href="#reqAssignUser">reqAssignUser</a></td>
            <td> 请求分配一个客户</td>
        </tr>
		<tr>
            <td><a href="#acceptAssignUser">acceptAssignUser</a></td>
            <td> 接受系统安排的客户</td>
        </tr>
		<tr>
            <td><a href="#rejectAssignUser">rejectAssignUser</a></td>
            <td> 拒绝系统安排的客户</td>
        </tr>
		<tr>
            <td rowspan=10>CloudroomQueueCallback</td>
            <td rowspan=10 style='text-align:center'>回调</td>
            <td><a href="#initQueue">initQueueDatRslt</a></td>
            <td>队列初始化操作结果</td>
        </tr>
		<tr>
            <td><a href="#queueStatusChanged">queueStatusChanged</a></td>
            <td>队列状态变化通知</td>
        </tr>
		<tr>
            <td><a href="#queuingInfoChanged">queuingInfoChanged</a></td>
            <td>排队信息变化通知</td>
        </tr>
		<tr>
            <td><a href="#startQueuingRslt">startQueuingRslt</a></td>
            <td>startQueuing 开始排队操作结果</td>
        </tr>
		<tr>
            <td><a href="#stopQueuingRslt">stopQueuingRslt</a></td>
            <td>stopQueuing 停止排队操作结果</td>
        </tr>
		<tr>
            <td><a href="#startServiceRslt">startServiceRslt</a></td>
            <td>startService 开始服务队列操作结果</td>
        </tr>
		<tr>
            <td><a href="#reqAssignUserRslt">reqAssignUserRslt</a></td>
            <td>请求分配客户操作结果</td>
        </tr>
		<tr>
            <td><a href="#autoAssignUser">autoAssignUser</a></td>
            <td>队列系统自动分配客户</td>
        </tr>
		<tr>
            <td><a href="#cancelAssignUser">cancelAssignUser</a></td>
            <td>队列系统取消之前自动分配的的客户</td>
        </tr>
		<tr>
            <td><a href="#responseAssignUserRslt">responseAssignUserRslt</a></td>
            <td>接受分配的用户</td>
        </tr>
	</tbody>
</table>


<h3 id=call>透明通道/呼叫排队</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
     <thead>
        <tr>
            <th style='width:70px;text-align:left'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:400px'> 
                描述
            </th>
        </tr>
    </thead>
    <tbody>
		<tr>
			<td rowspan=16>CloudroomVideoMgr</td>
			<td rowspan=16 style='text-align:center'>主调</td>
			<td><a href="#setDNDStatus">setDNDStatus</a></td>
			<td>设置免打扰状态</td>
		</tr>
		<tr>
			<td><a href="#setDNDStatus">getUserStatus</a></td>
			<td>获取企业下指定用户的在线状态（包括呼叫房间状态、免打扰状态）</td>
		</tr>
		<tr>
			<td><a href="#startUserStatusNotify">startUserStatusNotify</a></td>
			<td>开启用户的状态推送</td>
		</tr>
		<tr>
			<td><a href="#stopUserStatusNotify">stopUserStatusNotify</a></td>
			<td>关闭用户的状态推送</td>
		</tr>
		<tr>
			<td><a href="#callOut">call</a></td>
			<td>发起呼叫，邀请用户参加视频会话</td>
		</tr>
		<tr>
			<td><a href="#acceptCall">acceptCall</a></td>
			<td>接受对方发起的视频请求，开始进入视频会话</td>
		</tr>
		<tr>
			<td><a href="#rejectCall">rejectCall</a></td>
			<td>拒绝对方的视频请求</td>
		</tr>
		<tr>
			<td><a href="#hangupCall">hangupCall</a></td>
			<td>挂断正在进行的视频呼叫或视频通话</td>
		</tr>
		<tr>
			<td><a href="#sendCmd">sendCmd</a></td>
			<td>发送小块数据（50K以内）</td>
		</tr>
		<tr>
			<td><a href="#sendBuffer">sendBuffer</a></td>
			<td>发送大块数据</td>
		</tr>
		<tr>
			<td><a href="#sendFile">sendFile</a></td>
			<td>发送文件</td>
		</tr>
		<tr>
			<td><a href="#cancelSend">cancelSend</a></td>
			<td>取消数据发送</td>
		</tr>
    	<tr>
			<td><a href="#setMarkText">setMarkText</a></td>
			<td>添加打点信息</td>
		</tr>
    	<tr>
			<td><a href="#removeMarkText">removeMarkText</a></td>
			<td>移除打点信息</td>
		</tr>
    	<tr>
			<td><a href="#getAllMarks">getAllMarks</a></td>
			<td>获取所有打点信息</td>
		</tr>
    	<tr>
			<td><a href="#getVideoMarkFile">getVideoMarkFile</a></td>
			<td>获取打点文件的绝对文件路径名</td>
		</tr>
    	</tr>
		<tr>
			<td rowspan=1>CloudroomVideoMeeting</td>
			<td rowspan=1 style='text-align:center'>主调</td>
			<td><a href="#sendMeetingCustomMsg">sendMeetingCustomMsg</a></td>
			<td>房间内发送广播消息</td>
		</tr>
		<tr>
			<td rowspan=27>CloudroomVideoMgrCallback</td>
			<td rowspan=27 style='text-align:center'>回调</td>
			<td><a href="#setDNDStatusSuccess">setDNDStatusSuccess</a></td>
			<td>客户端设置免打扰状态操作成功响应</td>
		</tr>
		<tr>
			<td><a href="#setDNDStatusFail">setDNDStatusFail</a></td>
			<td>客户端设置免打扰状态操作失败响应</td>
		</tr>
		<tr>
			<td><a href="#setDNDStatusFail">getUserStatusRslt</a></td>
			<td>获取企业内所有用户在线状态响应</td>
		</tr>
		<tr>
			<td><a href="#setDNDStatusFail">startStatusPushRslt</a></td>
			<td>启动用户状态推送响应</td>
		</tr>
		<tr>
			<td><a href="#setDNDStatusFail">stopStatusPushRslt</a></td>
			<td>结束用户状态推送响应</td>
		</tr>
		<tr>
			<td><a href="#notifyUserStatus">notifyUserStatus</a></td>
			<td>某个用户状态变化通知</td>
		</tr>
		<tr>
			<td><a href="#callSuccess">callSuccess</a></td>
			<td>呼叫他人操作成功响应</td>
		</tr>
		<tr>
			<td><a href="#callFail">callFail</a></td>
			<td>呼叫他人操作失败响应</td>
		</tr>
		<tr>
			<td><a href="#acceptCallSuccess">acceptCallSuccess</a></td>
			<td>接受他人呼叫操作成功响应</td>
		</tr>
		<tr>
			<td><a href="#acceptCallFail">acceptCallFail</a></td>
			<td>接受他人呼叫操作失败响应</td>
		</tr>
		<tr>
			<td><a href="#rejectCallSuccess">rejectCallSuccess</a></td>
			<td>拒绝他人的呼叫成功响应</td>
		</tr>
		<tr>
			<td><a href="#rejectCallFail">rejectCallFail</a></td>
			<td>拒绝他人的呼叫失败响应</td>
		</tr>
		<tr>
			<td><a href="#hangupCallSuccess">hangupCallSuccess</a></td>
			<td>挂断呼叫操作成功响应</td>
		</tr>
		<tr>
			<td><a href="#hangupCallFail">hangupCallFail</a></td>
			<td>拒绝他人呼叫操作失败响应</td>
		</tr>
		<tr>
			<td><a href="#notifyCallIn">notifyCallIn</a></td>
			<td>SDK通知自己被呼叫</td>
		</tr>
		<tr>
			<td><a href="#notifyCallAccepted">notifyCallAccepted</a></td>
			<td>SDK通知自己视频呼叫被对方接受</td>
		</tr>
		<tr>
			<td><a href="#notifyCallRejected">notifyCallRejected</a></td>
			<td>SDK通知自己呼叫被对方拒绝</td>
		</tr>
		<tr>
			<td><a href="#notifyCallhangup">notifyCallhangup</a></td>
			<td>SDK通知呼叫被挂断</td>
		</tr>
		<tr>
			<td><a href="#sendCmdRlst">sendCmdRlst</a></td>
		    <td rowspan=3> 发送数据时，SDK通知发送结果</td>
		</tr>
		<tr>
			<td><a href="#sendBufferRlst">sendBufferRlst</a></td>
		</tr>
		<tr>
			<td><a href="#sendFileRlst">sendFileRlst</a></td>
		</tr>
		<tr>
			<td><a href="#sendProgress">sendProgress</a></td>
			<td>发送数据时，SDK通知发送进度</td>
		</tr>
		<tr>
			<td><a href="#cancelSendRlst">cancelSendRlst</a></td>
			<td>取消发送结果</td>
		</tr>
		<tr>
			<td><a href="#notifyCmdData">notifyCmdData</a></td>
			<td>SDK通知收到小块数据</td>
		</tr>
		<tr>
			<td><a href="#notifyBufferData">notifyBufferData</a></td>
			<td>SDK通知收到大块数据</td>
		</tr>
		<tr>
			<td><a href="#notifyFileData">notifyFileData</a></td>
			<td>SDK通知收到文件数据</td>
		</tr>
		<tr>
			<td><a href="#notifyCancelSend">notifyCancelSend</a></td>
			<td>SDK通知取消发送文件数据</td>
		</tr>
		<tr>
            <td rowspan=2>CloudroomVideoCallback</td>
            <td rowspan=2 style='text-align:center'>回调</td>
            <td><a href="#sendMeetingCustomMsgRslt">sendMeetingCustomMsgRslt</a></td>
            <td>发送房间内用户广播结果</td>
        </tr>
		<tr>
            <td><a href="#sendMeetingCustomMsgRslt">sendMeetingCustomMsgRslt</a></td>
            <td>接收到房间内用户自定义广播</td>
        </tr>
    </tbody> 
</table>

<h3 id=invite_function>邀请</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;word-wrap:break-word;'>
     <thead>
        <tr>
            <th style='width:70px;text-align:left'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:400px'> 
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
	    <td rowspan=4>CloudroomVideoMgr</td>
            <td rowspan=4>主调</td>
            <td><a href="#invite">invite</a></td>
            <td>
                发送邀请
            </td>
        </tr>
        <tr>
            <td><a href="#acceptInvite">acceptInvite</a></td>
            <td>
                接受对方发送的邀请
            </td>
        </tr>
        <tr>
            <td><a href="#rejectInvite">rejectInvite</a></td>
            <td>
                拒绝对方发送的邀请
            </td>
        </tr>
        <tr>
            <td><a href="#cancelInvite">cancelInvite</a></td>
            <td>
                取消自己发送的邀请
            </td>
        </tr>
        <tr>
            <td rowspan=12>CloudroomVideoMgrCallback</td>
            <td rowspan=12>回调</td>
            <td>
                <a href="#inviteSuccess">inviteSuccess</a>
            <td>
                发送邀请成功
            </td>
        </tr>
        <tr>
            <td><a href="#inviteFail">inviteFail</a></td>
            <td>
                发送邀请失败
            </td>
        </tr>
        <tr>
            <td><a href="#cancelInviteSuccess">cancelInviteSuccess</a></td>
            <td>
                取消自己发送的邀请成功
            </td>
        </tr>
        <tr>
            <td><a href="#cancelInviteFail">cancelInviteFail</a></td>
            <td>
                取消自己发送的邀请失败
            </td>
        </tr>
        <tr>
            <td><a href="#acceptInviteSuccess">acceptInviteSuccess</a></td>
            <td>
                接受对方发送的邀请成功
            </td>
        </tr>
        <tr>
            <td><a href="#acceptInviteFail">acceptInviteFail</a></td>
            <td>
                接受对方发送的邀请失败
            </td>
        </tr>
        <tr>
            <td><a href="#rejectInviteSuccess">rejectInviteSuccess</a></td>
            <td>
                拒绝对方发送的邀请成功
            </td>
        </tr>
        <tr>
            <td><a href="#rejectInviteFail">rejectInviteFail</a></td>
            <td>
                拒绝对方发送的邀请失败
            </td>
        </tr>
        <tr>
            <td><a href="#notifyInviteIn">notifyInviteIn</a></td>
            <td>
                通知有人邀请
            </td>
        </tr>
        <tr>
            <td><a href="#notifyInviteAccepted">notifyInviteAccepted</a></td>
            <td>
                通知邀请被对方接受
            </td>
        </tr>
        <tr>
            <td><a href="#notifyInviteRejected">notifyInviteRejected</a></td>
            <td>
                通知邀请被对方拒绝
            </td>
        </tr>
        <tr>
            <td><a href="#notifyInviteCanceled">notifyInviteCanceled</a></td>
            <td>
                通知有邀请被取消
            </td>
        </tr>
    </tbody> 
</table>

<h3 id=room>房间管理</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
     <thead>
        <tr>
            <th style='width:70px;text-align:left'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:400px'> 
                描述
            </th>
        </tr>
    </thead>
    <tbody>
		<tr>
            <td rowspan=2>CloudroomVideoMgr</td>
            <td rowspan=2 style='text-align:center'>主调</td>
            <td><a href="#createMeeting">createMeeting</a></td>
            <td>创建视频房间</td>
        </tr>
		<tr>  
            <td><a href="#destroyMeeting">destroyMeeting</a></td>
            <td>销毁视频房间</td>
        </tr>
		<tr>
            <td rowspan=6>CloudroomVideoMeeting</td>
            <td rowspan=6 style='text-align:center'>主调</td>
            <td><a href="#enterMeeting">enterMeeting</a></td>
            <td>使用房间ID和密码（可为空）进入指定的视频房间</td>
        </tr>
		<tr>  
            <td><a href="#exitMeeting">exitMeeting</a></td>
            <td>离开房间</td>
        </tr>
		<tr>  
            <td><a href="#destroyMeeting">destroyMeeting</a></td>
            <td>结束房间</td>
        </tr>
		<tr>  
            <td><a href="#switchToPage">switchToPage</a></td>
            <td>功能页切换</td>
        </tr>
		<tr>  
            <td><a href="#getCurrentMainPage">getCurrentMainPage</a></td>
            <td>获取当前主功能区</td>
        </tr>
		<tr>  
            <td><a href="#getCurrentSubPage">getCurrentSubPage</a></td>
            <td>获取当前子页面</td>
        </tr>
		<tr>
			<td rowspan=3>CloudroomVideoMgrCallback</td>
			<td rowspan=3 style='text-align:center'>回调</td>
			<td><a href="#createMeetingSuccess">createMeetingSuccess</a></td>
			<td>创建房间成功响应</td>
		</tr>
		<tr>  
            <td><a href="#createMeetingFail">createMeetingFail</a></td>
            <td>创建房间失败响应</td>
        </tr>
		<tr>  
            <td><a href="#destroyMeetingRslt">destroyMeetingRslt</a></td>
            <td>结束房间响应</td>
        </tr>
		<tr>
			<td rowspan=9>CloudroomVideoCallback</td>
			<td rowspan=9 style='text-align:center'>回调</td>
			<td><a href="#enterMeetingRslt">enterMeetingRslt</a></td>
			<td>进入房间结果</td>
		</tr>
		<tr>
			<td><a href="#setNickNameRsp">setNickNameRsp</a></td>
			<td>设置房间成员昵称的结果</td>
		</tr>
		<tr>
			<td><a href="#notifyNickNameChanged">notifyNickNameChanged</a></td>
			<td>某用户改变了昵称(改昵称的用户自身不会接收到此通知)</td>
		</tr>
		<tr>
			<td><a href="#userEnterMeeting">userEnterMeeting</a></td>
			<td>某用户进入了房间</td>
		</tr>
		<tr>
			<td><a href="#userLeftMeeting">userLeftMeeting</a></td>
			<td>某用户离开了房间</td>
		</tr>
		<tr>
			<td><a href="#meetingDropped">meetingDropped</a></td>
			<td>通知从房间里掉线了，收到该通知后可以调用enterMeeting尝试重新入会</td>
		</tr>
		<tr>
			<td><a href="#meetingStoped">meetingStoped</a></td>
			<td> 房间已被结束</td>
		</tr>
		<tr>
			<td><a href="#netStateChanged">netStateChanged</a></td>
			<td>网络变化通知</td>
		</tr>
		<tr>
			<td><a href="#notifySwitchToPage">notifySwitchToPage</a></td>
			<td>通知主功能页切换</td>
		</tr>
	</tbody>
</table>

<h3 id=audio>音频管理</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
     <thead>
        <tr>
            <th style='width:70px;text-align:left'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:400px'> 
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=16>CloudroomVideoMeeting</td>
            <td rowspan=16 style='text-align:center'>主调</td>
            <td><a href="#setAudioCfg">setAudioCfg</a></td>
            <td>设置麦克风音频参数</td>
        </tr>
		<tr>
            <td><a href="#getAudioCfg">getAudioCfg</a></td>
            <td> 获取音频参数</td>
        </tr>
		<tr>
            <td><a href="#setMicVolumeScaling">setMicVolumeScaling</a></td>
            <td> 设置麦克风音量增益</td>
        </tr>
		<tr>
            <td><a href="#getMicEnergy">getMicEnergy</a></td>
            <td> 获取用户说话声音大小</td>
        </tr>
		<tr>
            <td><a href="#openMic">openMic</a></td>
            <td> 打开用户的麦克风</td>
        </tr>
		<tr>
            <td><a href="#closeMic">closeMic</a></td>
            <td> 关闭用户的麦克风</td>
        </tr>
		<tr>
            <td><a href="#getAudioStatus">getAudioStatus</a></td>
            <td> 获取用户的麦状态</td>
        </tr>
		<tr>
            <td><a href="#setSpeakerVolume">setSpeakerVolume</a></td>
            <td> 设置本地扬声器音量</td>
        </tr>
		<tr>
            <td><a href="#getSpeakerVolume">getSpeakerVolume</a></td>
            <td> 获取本地扬声器音量</td>
        </tr>
		<tr>
            <td><a href="#setSpeakerMute">setSpeakerMute</a></td>
            <td> 设置播放是否静音</td>
        </tr>
		<tr>
            <td><a href="#getSpeakerMute">getSpeakerMute</a></td>
            <td> 获取播放是否静音</td>
        </tr>
		<tr>
            <td><a href="#setSpeakerOut">setSpeakerOut</a></td>
            <td> 设置外放状态</td>
        </tr>
		<tr>
            <td><a href="#getSpeakerOut">getSpeakerOut</a></td>
            <td> 获取外放状态</td>
        </tr>
		<tr>
            <td><a href="#setAllAudioClose">setAllAudioClose</a></td>
            <td> 关闭所有用户的麦克风</td>
        </tr>
        <tr>
            <td><a href="#startGetAudioPCM">startGetAudioPCM</a></td>
            <td>
                开始获取语音pcm数据
            </td>
        </tr>
        <tr>
            <td><a href="#stopGetAudioPCM">stopGetAudioPCM</a></td>
            <td>
                停止获取语音pcm数据
            </td>
        </tr>
		 <tr>
            <td rowspan=3>CloudroomVideoCallback</td>
            <td rowspan=3 style='text-align:center'>主调</td>
            <td><a href="#audioDevChanged">audioDevChanged</a></td>
            <td>通知本地音频设备有变化</td>
        </tr>
		<tr>
            <td><a href="#audioStatusChanged">audioStatusChanged</a></td>
            <td>通知音频状态变化</td>
        </tr>
		<tr>
            <td><a href="#micEnergyUpdate">micEnergyUpdate</a></td>
            <td>通知用户的说话声音强度更新</td>
        </tr>
    </tbody>
</table>

<h3 id=video>视频管理</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
     <thead>
        <tr>
            <th style='width:70px;text-align:left'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:400px'> 
                描述
            </th>
        </tr>
    </thead>
	<tbody>
		<tr>
            <td rowspan=21>CloudroomVideoMeeting</td>
            <td rowspan=21 style='text-align:center'>主调</td>
            <td><a href="#getAllVideoInfo">getAllVideoInfo</a></td>
            <td>获取用户所有的摄像头信息</td>
        </tr>
		<tr>
            <td><a href="#createCustomVideoDev">createCustomVideoDev</a></td>
            <td>创建自定义摄像头</td>
        </tr>
		<tr>
            <td><a href="#destroyCustomVideoDev">destroyCustomVideoDev</a></td>
            <td>消毁自定义摄像头</td>
        </tr>
		<tr>
            <td><a href="#inputCustomVideoDat">inputCustomVideoDat</a></td>
            <td>输入摄像头图像数据</td>
        </tr>
		<tr>
            <td><a href="#setVideoCfg">setVideoCfg</a></td>
            <td>设置摄像头参数</td>
        </tr>
		<tr>
            <td><a href="#getVideoCfg">getVideoCfg</a></td>
            <td>获取设置的摄像头参数</td>
        </tr>
		<tr>
            <td><a href="#setVideoEffects">setVideoEffects</a></td>
            <td>设置视频效果配置</td>
        </tr>
		<tr>
            <td><a href="#getVideoEffects">getVideoEffects</a></td>
            <td>获取视频效果配置</td>)
        </tr>
		<tr>
            <td><a href="#setLocVideoAttributes">setLocVideoAttributes</a></td>
            <td>设置某个摄像头私有参数</td>
        </tr>
		<tr>
            <td><a href="#getWatchableVideos">getWatchableVideos</a></td>
            <td>获取房间内所有可观看的摄像头</td>
        </tr>
		<tr>
            <td><a href="#openVideo">openVideo</a></td>
            <td>打开用户的摄像头，以便本地、远端显示视频图像</td>
        </tr>
		<tr>
            <td><a href="#closeVideo">closeVideo</a></td>
            <td>关闭用户的摄像头</td>
        </tr>
		<tr>
            <td><a href="#getVideoStatus">getVideoStatus</a></td>
            <td>获取用户的摄像头状态</td>
        </tr>
		<tr>
            <td><a href="#getDefaultVideo">getDefaultVideo</a></td>
            <td>获取指定用户的默认摄像头</td>
        </tr>
		<tr>
            <td><a href="#setDefaultVideo">setDefaultVideo</a></td>
            <td>设置默认的摄像头</td>
        </tr>
		<tr>
            <td><a href="#getLocalVideoParams">getLocalVideoParams</a></td>
            <td>获取指定本地摄像头参数</td>
        </tr>
		<tr>
            <td><a href="#setLocalVideoParam">setLocalVideoParam</a></td>
            <td>设置指定本地摄像头参数</td>
        </tr>
		<tr>
            <td><a href="#getVideoWallMode">getVideoWallMode</a></td>
            <td>获取视频墙当前分屏模式</td>
        </tr>
		<tr>
            <td><a href="#setVideoWallMode">setVideoWallMode</a></td>
            <td>设置视频墙分屏模式</td>
        </tr>
		<tr>
            <td><a href="#setMainVideo">setMainVideo</a></td>
            <td>设置当前哪个用户为主视频</td>
        </tr>
		<tr>
            <td><a href="#getMainVideo">getMainVideo</a></td>
            <td>获取当前哪个用户为主视频</td>
        </tr>
		<tr>
		    <td rowspan=7>CloudroomVideoCallback</td>
            <td rowspan=7 style='text-align:center'>回调</td>
            <td><a href="#openVideoRslt">openVideoRslt</a></td>
            <td>打开摄像头设备操作结果</td>
		</tr>
		<tr>
            <td><a href="#videoStatusChanged">videoStatusChanged</a></td>
            <td>视频状态变化</td>
		</tr>
		<tr>
            <td><a href="#videoDevChanged">videoDevChanged</a></td>
            <td>通知用户的视频设备有变化</td>
		</tr>
		<tr>
            <td><a href="#notifyVideoData">notifyVideoData</a></td>
            <td>通知用户有新的视频数据</td>
		</tr>
		<tr>
            <td><a href="#defVideoChanged">defVideoChanged</a></td>
            <td>通知用户的视频默认设备有变化</td>
		</tr>
		<tr>
            <td><a href="#notifyVideoWallMode">notifyVideoWallMode</a></td>
            <td>通知视频分屏模式切换</td>
		</tr>
		<tr>
            <td><a href="#notifyMainVideoChanged">notifyMainVideoChanged</a></td>
            <td>通知主视频更改</td>
		</tr>
	</tbody>
</table>

<h3 id=starshare>屏幕共享 </h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
     <thead>
        <tr>
            <th style='width:70px;text-align:left'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:400px'> 
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=8>CloudroomVideoMeeting</td>
            <td rowspan=8 style='text-align:center'>主调</td>
            <td><a href="#isScreenShareStarted">isScreenShareStarted</a></td>
            <td>获取屏幕共享是否已开启</td>
        </tr>
		<tr>
		        <tr>
            <td><a href="#getScreenShareCfg">getScreenShareCfg</a></td>
            <td>
                获取屏幕共享配置
            </td>
        </tr>
        <tr>
            <td><a href="#setScreenShareCfg">setScreenShareCfg</a></td>
            <td>
                设置屏幕共享配置
            </td>
        </tr>
        <tr>
            <td><a href="#startScreenShare">startScreenShare</a></td>
            <td>
                开始屏幕共享
            </td>
        </tr>
        <tr>
            <td><a href="#stopScreenShare">stopScreenShare</a></td>
            <td>
                停止屏幕共享
            </td>
        </tr>
        <tr>
            <td><a href="#isEnableOtherMark">isEnableOtherMark</a></td>
            <td>
                获取是否允许他人标注屏幕
            </td>
        </tr>
        <tr>
            <td><a href="#enableOtherMark">enableOtherMark</a></td>
            <td>
                允许他人标注屏幕
            </td>
        </tr>
            <td rowspan=8>CloudroomVideoCallback</td>
            <td rowspan=8 style='text-align:center'>回调</td>
            <td>
                <a href="#startScreenShareRslt">startScreenShareRslt</a>
            <td>
                开启屏幕共享的响应事件
            </td>
        </tr>
        <tr>
            <td><a href="#stopScreenShareRslt">stopScreenShareRslt</a></td>
            <td>
                停止屏幕共享的响应事件
            </td>
        </tr>
        <tr>
            <td><a href="#notifyScreenShareStarted">notifyScreenShareStarted</a></td>
            <td>
                通知屏幕共享开始
            </td>
        </tr>
        <tr>
            <td><a href="#notifyScreenShareStopped">notifyScreenShareStopped</a></td>
            <td>
                通知屏幕共享停止
            </td>
        </tr>
        <tr>
            <td><a href="#startScreenMarkRslt">startScreenMarkRslt</a></td>
            <td>
                开始屏幕标注结果
            </td>
        </tr>
        <tr>
            <td><a href="#stopScreenMarkRslt">stopScreenMarkRslt</a></td>
            <td>
                停止屏幕标注结果
            </td>
        </tr>
        <tr>
            <td><a href="#notifyScreenMarkStarted">notifyScreenMarkStarted</a></td>
            <td>
                通知屏幕标注开始
            </td>
        </tr>
        <tr>
            <td><a href="#notifyScreenMarkStopped">notifyScreenMarkStopped</a></td>
            <td>
                通知屏幕标注停止
            </td>
        </tr>
    </tbody>
</table>


<h3 id=media>影音共享</h3>


<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
     <thead>
        <tr>
            <th style='width:70px;text-align:left'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:400px'> 
                描述
            </th>
        </tr>
    </thead>
	<tbody>
		<tr>
            <td rowspan=10>CloudroomVideoMeeting</td>
            <td rowspan=10 style='text-align:center'>主调</td>
            <td><a href="#setMediaCfg ">setMediaCfg </a></td>
            <td>配置远程影音共享时，图像质量参数</td>
        </tr>
		<tr>
            <td><a href="#getMediaCfg">getMediaCfg</a></td>
            <td>获取影音共享图像质量参数</td>
        </tr>
		<tr>
            <td><a href="#startPlayMedia">startPlayMedia</a></td>
            <td>播放影音文件</td>
        </tr>
		<tr>
            <td><a href="#pausePlayMedia">pausePlayMedia</a></td>
            <td>暂停播放影音</td>
        </tr>
		<tr>
            <td><a href="#stopPlayMedia">stopPlayMedia</a></td>
            <td>停止影音播放</td>
        </tr>
		<tr>
            <td><a href="#setMediaPlayPos">setMediaPlayPos</a></td>
            <td>设置播放进度</td>
        </tr>
		<tr>
            <td><a href="#getAllFilesInMediaPath">getAllFilesInMediaPath</a></td>
            <td>取得影音文件夹下的所有可播放文件</td>
        </tr>
		<tr>
            <td><a href="#getMediaInfo">getMediaInfo</a></td>
            <td> 取得影音文件信息</td>
        </tr>
		<tr>
            <td><a href="#setMediaVolume">setMediaVolume</a></td>
            <td> 设置影音播放的音量</td>
        </tr>
		<tr>
            <td><a href="#getMediaVolume">getMediaVolume</a></td>
            <td> 读取影音播放的音量</td>
        </tr>
		<tr>
            <td rowspan=11>CloudroomVideoCallback</td>
            <td rowspan=11 style='text-align:center'>回调</td>
            <td><a href="#notifyMediaOpened ">notifyMediaOpened </a></td>
            <td>通知影音文件打开</td>
        </tr>
		<tr>
            <td><a href="#notifyMediaStart ">notifyMediaStart </a></td>
            <td>通知影音开始播放</td>
        </tr>
		<tr>
            <td><a href="#notifyMediaPause ">notifyMediaPause </a></td>
            <td>通知影音暂停播放</td>
        </tr>
		<tr>
            <td><a href="#notifyMediaStop ">notifyMediaStop </a></td>
            <td>通知影音播放停止</td>
        </tr>
		<tr>
            <td><a href="#notifyPlayPosSetted ">notifyPlayPosSetted </a></td>
            <td>通知播放进度已设置完成</td>
        </tr>
		<tr>
            <td><a href="#notifyMemberMediaData ">notifyMemberMediaData </a></td>
            <td>通知影音帧数据已解码完毕</td>
        </tr>
		<tr>
            <td><a href="#notifyAudioPCMDat ">notifyAudioPCMDat </a></td>
            <td>通知语音PCM数据</td>
        </tr>
    </tbody>
</table>

<h3 id=record>本地录制/本地直播</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr>
            <th style='width:70px;text-align:left'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:400px'> 
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=13>CloudroomVideoMeeting</td>
            <td rowspan=13 style='text-align:center'>主调</td>
            <td><a href="#createLocMixer">createLocMixer</a></td>
            <td>创建本地混图器</td>
        </tr>
        <tr>
            <td><a href="#updateLocMixerContent">updateLocMixerContent</a></td>
            <td>更新本地混图器内容</td>
        </tr>
		<tr>
            <td><a href="#destroyLocMixer">destroyLocMixer</a></td>
            <td>消毁本地混图器</td>
        </tr>
		<tr>
            <td><a href="#getLocMixerState">getLocMixerState</a></td>
            <td>获取本地混图器状态</td>
        </tr>
		<tr>
			<td><a href="#addLocMixerOutput">addLocMixerOutput</a></td>
			<td>开启本地录制、开启直播推流</td>
		</tr>
		<tr>
			<td><a href="#rmLocMixerOutput">rmLocMixerOutput</a></td>
			<td>停止本地录制、直播推流</td>
		</tr>
		<tr>
			<td><a href="#getAllRecordFiles">getAllRecordFiles</a></td>
			<td> 取得所有录制文件信息</td>
		</tr>
		<tr>
			<td><a href="#addFileToRecordMgr">addFileToRecordMgr</a></td>
			<td>添加本地文件到录制文件管理中</td>
		</tr>
		<tr>
			<td><a href="#removeFromFileMgr">removeFromFileMgr</a></td>
			<td>删除本地的录制文件，上传中的文件会被取消上传</td>
		</tr>
		<tr>
			<td><a href="#uploadRecordFile">uploadRecordFile</a></td>
			<td>上传录制文件</td>
		</tr>
		<tr>
			<td><a href="#uploadRecordFile">uploadRecordFile</a></td>
			<td>上传录制文件到服务器指定位置</td>
		</tr>
		<tr>
			<td><a href="#cancelUploadRecordFile">cancelUploadRecordFile</a></td>
			<td>取消上传中的录制文件</td>
		</tr>
		<tr>
			<td><a href="#playbackRecordFile">playbackRecordFile</a></td>
			<td>回放录制文件</td>
		</tr>
		<tr>
			<td rowspan=7>CloudroomVideoCallback</td>
			<td rowspan=7 style='text-align:center'>回调</td>
			<td><a href="#uploadRecordFileErr">uploadRecordFileErr</a></td>
			<td> 上传录制文件错误通知</td>
		</tr>
		<tr>
			<td><a href="#cancelUploadRecordFileErr">cancelUploadRecordFileErr</a></td>
			<td>取消上传错误通知</td>
		</tr>
		<tr>
			<td><a href="#locMixerStateChanged">locMixerStateChanged</a></td>
			<td>本地混图器状态变化通知</td>
		</tr>
		<tr>
			<td><a href="#locMixerOutputInfo">locMixerOutputInfo</a></td>
			<td>本地录制文件、本地直播信息通知</td>
		</tr>
		<tr>
			<td><a href="#notifyRecordFileStateChanged">notifyRecordFileStateChanged</a></td>
			<td>通知录制文件状态更改</td>
		</tr>
		<tr>
			<td><a href="#uploadRecordFileSuccess">uploadRecordFileSuccess</a></td>
			<td>通知录制文件上传成功</td>
		</tr>
		<tr>
			<td><a href="#notifyRecordFileUploadProgress">notifyRecordFileUploadProgress</a></td>
			<td>通知录制文件上传进度</td>
		</tr>
    </tbody>
</table>

<h3 id=cloud>云端录制/互动直播</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
     <thead>
        <tr>
            <th style='width:70px;text-align:left'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:400px'> 
                描述
            </th>
        </tr>
	  </thead>
		<tbody>
			<tr>
				<td rowspan=4>CloudroomVideoMeeting</td>
				<td rowspan=4 style='text-align:center'>主调</td>
				<td><a href="#startSvrMixer">startSvrMixer</a></td>
				<td>开始云端录制、云端直播</td>
			</tr>
			<tr>
				<td><a href="#updateSvrMixerContent">updateSvrMixerContent</a></td>
				<td>更新云端录制、云端直播内容</td>
			</tr>
			<tr>
				<td><a href="#stopSvrMixer">stopSvrMixer</a></td>
				<td>停止云端录制、云端直播</td>
			</tr>
			<tr>
				<td><a href="#getSvrMixerState">getSvrMixerState</a></td>
				<td>获取云端录制、云端直播状态</td>
			</tr>
			<tr>
				<td rowspan=3>CloudroomVideoCallback</td>
				<td rowspan=3 style='text-align:center'>回调</td>
				<td><a href="#svrMixerStateChanged">svrMixerStateChanged</a></td>
				<td>云端录制、云端直播状态变化通知</td>
			</tr>
			<tr>
				<td><a href="#svrMixerCfgChanged">svrMixerCfgChanged</a></td>
				<td>云端录制、云端直播内容变化通知</td>
			</tr>
			<tr>
				<td><a href="#svrMixerOutputInfo">svrMixerOutputInfo</a></td>
				<td>云端录制文件、云端直播信息变化通知</td>
			</tr>
		</tbody>
    </thead>
    
</table>

<h3 id=board>电子白板/文档共享</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
     <thead>
        <tr>
            <th style='width:70px;text-align:left'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:400px'> 
                描述
            </th>
        </tr>
    </thead>
   <tbody>
        <tr>
            <td rowspan=16>CloudroomVideoMeeting</td>
            <td rowspan=16 style='text-align:center'>主调</td>
            <td><a href="#createBoard">createBoard</a></td>
            <td>创建电子白板</td>
        </tr>
		<tr>
            <td><a href="#closeBoard">closeBoard</a></td>
            <td>关闭电子白板</td>
        </tr>
		<tr>
            <td><a href="#initBoardPageDat">initBoardPageDat</a></td>
            <td>初始化白板指定页数据</td>
        </tr>
		<tr>
            <td><a href="#createElementID">createElementID</a></td>
            <td>创建图元标识</td>
        </tr>
		<tr>
            <td><a href="#addBoardElement">addBoardElement</a></td>
            <td>添加图元信息</td>
        </tr>
		<tr>
            <td><a href="#modifyBoardElement">modifyBoardElement</a></td>
            <td>修改图元信息</td>
        </tr>
		<tr>
            <td><a href="#delBoardElement">delBoardElement</a></td>
            <td>删除图元</td>
        </tr>
		<tr>
            <td><a href="#setMouseHotSpot">setMouseHotSpot</a></td>
            <td>设置鼠标热点信息</td>
        </tr>
		<tr>
            <td><a href="#setBoardCurPageNo">setBoardCurPageNo</a></td>
            <td>白板翻页</td>
        </tr>
		<tr>
            <td><a href="#listNetDiskDocFile">listNetDiskDocFile</a></td>
            <td>查询服务器指定目录下的内容（子目录名、上传的文档源文件及文档转换状态）</td>
        </tr>
		<tr>
            <td><a href="#uploadDocFileToNetDisk">uploadDocFileToNetDisk</a></td>
            <td>上传并转换文档</td>
        </tr>
		<tr>
            <td><a href="#downloadNetDiskDocFile">downloadNetDiskDocFile</a></td>
            <td>下载源始文档</td>
        </tr>
		<tr>
            <td><a href="#deleteNetDiskDocFile">deleteNetDiskDocFile</a></td>
            <td>删除文档</td>
        </tr>
		<tr>
            <td><a href="#getNetDiskDocFilePageInfo">getNetDiskDocFilePageInfo</a></td>
            <td>获取文档的转换信息</td>
        </tr>
		<tr>
            <td><a href="#downloadNetDiskDocFilePage">downloadNetDiskDocFilePage</a></td>
            <td>获取文档的转换信息</td>
        </tr>
		<tr>
            <td><a href="#setPicResource">setPicResource</a></td>
            <td>将图片资源设置给sdk</td>
        </tr>
		<tr>
            <td rowspan=13>CloudroomVideoCallback</td>
            <td rowspan=13 style='text-align:center'>回调</td>
            <td><a href="#notifyInitBoards">notifyInitBoards</a></td>
            <td>SDK入会后通知房间中已经存在的白板列表</td>
        </tr>
		<tr>
            <td><a href="#notifyInitBoardPageDat">notifyInitBoardPageDat</a></td>
            <td>初始化白板页数据</td>
        </tr>
		<tr>
            <td><a href="#notifyCreateBoard">notifyCreateBoard</a></td>
            <td>通知创建白板</td>
        </tr>
		<tr>
            <td><a href="#notifyCloseBoard">notifyCloseBoard</a></td>
            <td>通知关闭白板</td>
        </tr>
		<tr>
            <td><a href="#notifyAddBoardElement">notifyAddBoardElement</a></td>
            <td>通知添加图元信息</td>
        </tr>
		<tr>
            <td><a href="#notifyModifyBoardElement">notifyModifyBoardElement</a></td>
            <td>通知图元信息被修改</td>
        </tr>
		<tr>
            <td><a href="#notifyDelBoardElement">notifyDelBoardElement</a></td>
            <td>通知图元被删除</td>
        </tr>
		<tr>
            <td><a href="#notifyMouseHotSpot">notifyMouseHotSpot</a></td>
            <td>通知鼠标热点消息</td>
        </tr>
		<tr>
            <td><a href="#notifyBoardCurPageNo">notifyBoardCurPageNo</a></td>
            <td>通知白板翻页</td>
        </tr>
		<tr>
            <td><a href="#listNetDiskDocFileRslt">listNetDiskDocFileRslt</a></td>
            <td>通知查询文档列表结果</td>
        </tr>
		<tr>
            <td><a href="#getNetDiskDocFilePageInfoRslt">getNetDiskDocFilePageInfoRslt</a></td>
            <td>通知查询文档转换结果</td>
        </tr>
		<tr>
            <td><a href="#deleteNetDiskDocFileRslt">deleteNetDiskDocFileRslt</a></td>
            <td>通知删除文档结果</td>
        </tr>
		<tr>
            <td><a href="#notifyNetDiskDocFileTrsfProgress">notifyNetDiskDocFileTrsfProgress</a></td>
            <td>通知文档传输进度</td>
        </tr>
    </tbody>
</table>

<h3 id=httpManager>Http文件组件</h3>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr>
            <th style='width:70px;text-align:left'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:400px'> 
                描述
            </th>
        </tr>
    </thead>
	<tbody>
		<tr>
            <td rowspan=6>CloudroomHttpFileMgr</td>
            <td rowspan=6 style='text-align:center'>主调</td>
			<td><a href="#startMgr">startMgr</a></td>
            <td>启动Http文件文件组件运行</td>
        </tr>
		<tr>
			<td><a href="#stopMgr">stopMgr</a></td>
            <td>停止Http文件文件组件运行</td>
        </tr>
		<tr>
			<td><a href="#getAllTransferInfos">getAllTransferInfos</a></td>
            <td>获取本地上传、下载文件信息</td>
        </tr>
		<tr>
			<td><a href="#startTransferFile">startTransferFile</a></td>
            <td>开始下载/上传文件</td>
        </tr>
		<tr>
			<td><a href="#cancelFileTransfer">cancelFileTransfer</a></td>
            <td>取消传输</td>
        </tr>
		<tr>
			<td><a href="#rmTransferInfo">rmTransferInfo</a></td>
            <td>删除传输记录及相关文件</td>
        </tr>
		<tr>
			<td rowspan=3>CloudroomHttpFileMgrCallback</td>
            <td rowspan=3 style='text-align:center'>回调</td>
			<td><a href="#fileStateChanged">fileStateChanged</a></td>
            <td>通知用户文件状态更改</td>
        </tr>
		<tr>
			<td><a href="#fileProgress">fileProgress</a></td>
            <td>通知用户文件的传输进度</td>
        </tr>
		<tr>
			<td><a href="#fileFinished">fileFinished</a></td>
            <td>通知用户文件传输结束</td>
        </tr>
	</tbody>
</table>


## 接口函数详情

云屋SDK的方法/回调接口的相关内容分别实现在基础组件， 房间组件， 视频房间组件
， 房间内可视化UI显示组件， 队列组件， Http文件传输组件六个组件中

1. [基础组件（CloudroomVideoSDK）的接口函数](#CloudroomVideoSDK)
1. [房间组件（CloudroomVideoMgr）的接口函数](#CloudroomVideoMgr)
1. [视频房间组件（CloudroomVideoMeeting）的接口函数](#CloudroomVideoMeeting)
1. [队列组件（CloudroomQueue）的接口函数](#CloudroomQueue)
1. [Http文件传输组件（CloudroomHttpFileMgr）的接口函数](#CloudroomHttpFileMgr)

<h3 id=CloudroomVideoSDK>1. 基础组件（CloudroomVideoSDK）的接口函数</h3>

> <font size=4>CloudroomVideoSDK 是基础控件，负责整个SDK的初始化和反初始化操作。整个程序的生命过程中只能有一个实例</font>

----

<h4 id=GetCloudroomVideoSDKVer >String GetCloudroomVideoSDKVer() </h4>

  + **功能**:  获取sdk的版本信息
  
  + **返回值**:  返回云屋SDK版本号
  
<h4 id=init>CRVIDEOSDK_ERR_DEF init(Context context, SdkInitDat dat)</h4>

  + **功能**:   SDK初始化 
  
  + **返回值**:  CRVIDEOSDK_NOERR为成功操作，其他详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| context| Context | 程序上下文，不可为空|
|dat|[SdkInitDat](TypeDefinitions.md#SdkInitDat)| SDK配置、临时文件存放位置，不可为空 |
  
<h4 id=uninit>void uninit()</h4>

  + **功能**: SDK反初始化
  
  + **返回值**: 无 
 
<h4 id=serverAddr>String serverAddr()</h4>

  + **功能**: 获取服务器地址
  
  + **返回值**: 服务器地址（如：www.cloudroom.com）或多个服务器地址串（如：www.cloudroom.com:8080;183.60.47.52:8080;）

<h4 id=setServerAddr>void setServerAddr(String serverList)</h4>

  + **功能**: 设置服务器地址
  
  + **返回值**:  无
      
		
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| serverList| String| 服务器地址（如：www.cloudroom.com）或多个服务器地址串（如：www.cloudroom.com:8080;183.60.47.52:8080;）|

<h4 id=setFileUploadRate>void setFileUploadRate(int maxBytePerSec)</h4>

  + **功能**:  文件上传的流量控制
  
  + **返回值**: 无
		
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| maxBytePerSec | int | 每秒上传的最大字节数 。-1代表不进行流控 |

<h4 id=setFileDownloadRate>void setFileDownloadRate(int maxBytePerSec)</h4>

  + **功能**:  文件下载的流量控制
  
  + **返回值**: 无
		
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| maxBytePerSec| int| 每秒下载的最大字节数。-1代表不进行流控|


<h3 id=CloudroomVideoMgr >2. 房间组件（CloudroomVideoMgr）的接口函数</h3>

><font size=4>CloudroomVideoMgr 是房间组件，实现登录、呼叫、房间创建销毁、透明传输等功能。 整个程序的生命过程中只能有一个实例。</font>

----

<h4 id=CloudroomVideoMgr_registerCallBack>void registerCallBack(CloudroomVideoMgrCallback callBack) </h4>

  + **功能**:  注册监听回调
  
  + **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callBack| [CloudroomVideoMgrCallback](#CloudroomVideoMgrCallback)| 回调对象|  

<h4 id=CloudroomVideoMgr_unregisterCallBack>void unregisterCallBack(CloudroomVideoMgrCallback callBack) </h4>

  + **功能**:  反注册监听回调
  
  + **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callBack| CloudroomVideoMgrCallback| 反注册的回调对象|  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callBack| CloudroomVideoMgrCallback| 回调对象|  

<h4 id=Userlogin>void login(String appID, String appSecret, String nickName, String userID, String userAuthCode, String cookie)</h4>

  + **功能**:  登陆服务器
  
  + **返回值**:  无
>登录成功则触发回调[loginSuccess](#loginSuccess) ， 登录失败则触发回调[loginFail](#loginFail) 
    

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|appID	|String	|项目授权appID|
|appSecret	|String	|项目授权appID对应密码|
|nickName	|String|	昵称|
|userID	|String|	用户ID。和云屋系统无关，业务方自由填写，保证唯一性即可（同一appID下，具有唯一性即可）|
|userAuthCode|	String|	默认填空。只有开启第三方认证才需要填写。（开启第三方认证时，云屋SDK服务器将连接提前配好的业务方服务器进行实时验证。）|
|cookie	|String	|可缺省。详细介绍见[关键词](KeyWords.md#stream)|

<h4 id=loginByToken>void loginByToken(String token, string nickName, String userID, String userAuthCode, String cookie)</h4>

- **功能**: Token登录
- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|token	|String	|Token鉴权码|
|nickName	|String|	昵称|
|userID	|String|	用户ID。和云屋系统无关，业务方自由填写，保证唯一性即可（同一appID下，具有唯一性即可）|
|userAuthCode|	String|	默认填空。只有开启第三方认证才需要填写。（开启第三方认证时，云屋SDK服务器将连接提前配好的业务方服务器进行实时验证。）|
|cookie	|String	|可缺省。详细介绍见[关键词](KeyWords.md#stream)|

>登陆成功则回调[loginSuccess](API.md#loginSuccess),登陆失败则回调[loginFail](API.md#loginFail)

<h4 id=logout>void logout()</h4>

  + **功能**:  反注册本次登陆
  
  + **返回值**:  无

<h4 id=getUserAuthErrCode>int getUserAuthErrCode()</h4>

  + **功能**:  获取第三方认证错误码
  
  + **返回值**:  错误码

  <h4 id=getUserAuthErrDesc>String getUserAuthErrDesc()</h4>

  + **功能**:  获取第三方认证错误描述
  
  + **返回值**:  错误描述

<h4 id=updateToken>void updateToken(String token))</h4>

  + **功能**:  更新Token(在Token即将失效的时候更新Token延长有限时间)
  
  + **返回值**:  无
  
| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|token	|String	|Token鉴权码|

<h4 id=setDNDStatus>void setDNDStatus(int DNDStatus, String cookie)</h4>

  + **功能**:  设置免打扰状态， 如果使用到了SDK的队列功能，则入会后需调用此接口，设置自己的为免打扰状态，防止系统再次推送自己
 
 + **返回值**:  无
>设置免打扰状态成功则触发回调[setDNDStatusSuccess](#setDNDStatusSuccess) ， 设置免打扰状态失败则触发回调[setDNDStatusFail](#setDNDStatusFail) 
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| DNDStatus| int| 0代表关闭免打扰， 其它值代表开启免打扰，含义自由定义| 
| cookie| String| 自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h4 id=getUserStatus>void getUserStatus(String userID, String cookie)</h4>

  + **功能**:  获取企业下指定用户的在线状态
  
  + **返回值**:  无
>回调函数[getUserStatusRslt](#getUserStatusRslt)     
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String| 具体用户的账户ID| 
| cookie| String| 自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h4 id=getUserStatus>void getUserStatus(String cookie)</h4>

  + **功能**:  将获取企业下所有用户在线状态（包括呼叫房间状态、免打扰状态）
  
  + **返回值**:  无
>回调函数[getUserStatusRslt](#getUserStatusRslt)         
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cookie| String| 自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h4 id=startUserStatusNotify>void startUserStatusNotify(String cookie)</h4>

  + **功能**:  开启用户的状态推送 。开启后，企业下所有用户状态有变化时(包括呼叫房间状态、免打扰状态)，都会收到通知。开启后，用户量越大消息量越大，所以请按需开启。
 
 + **返回值**:  无
>回调函数[startStatusPushRslt](#startStatusPushRslt)        
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cookie| String| 自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h4 id=stopUserStatusNotify>void stopUserStatusNotify(String cookie)</h4>

  + **功能**:  关闭用户的状态推送
  
  + **返回值**:  无
>回调函数[stopStatusPushRslt](#stopStatusPushRslt)       
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cookie| String| 自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h4 id=createMeeting>void createMeeting(String cookie)</h4>

  + **功能**:  创建视频房间
  
  + **返回值**:  无
>创建房间成功则触发回调[createMeetingSuccess](#createMeetingSuccess)，创建房间失败则触发[createMeetingFail](#createMeetingFail)   
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cookie| String|  自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h4 id=destroyMeeting>void destroyMeeting(int meetID, String cookie)</h4>

  + **功能**:  销毁视频房间
  
  + **返回值**:  无
>回调函数[destroyMeetingRslt](#destroyMeetingRslt)     
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| meetID| int|   房间号）| 
| cookie| String|  自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h4 id=callOut>String call(String calledUserID, MeetInfo meetInfo, String userExtDat, String cookie)</h4>

  + **功能**:  发起呼叫，邀请用户参加视频会话， 呼叫时，对方迟迟不响应，30秒后系统自动结束呼叫
  
  + **返回值**:  本次呼叫标识码（呼叫ID）
>发起呼叫成功则触发回调[callSuccess](#callSuccess)，发起呼叫失败则触发[callFail](#callFail)  
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| calledUserID| String|   被叫用户的账户ID| 
| meetInfo| [MeetInfo](TypeDefinitions.md#MeetInfo)|   房间信息，空时代表无房间信息，应由被叫创建或提供房间信息| 
| usrExtDat| String|   自定义扩展参数| 
| cookie| String|  自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h4 id=acceptCall>void acceptCall(String callID, MeetInfo meetInfo, String usrExtDat, String cookie)</h4>

  + **功能**:  接受对方发起的视频请求，开始进入视频会话
  
  + **返回值**:  无
>接受对方发起的视频请求成功则触发回调[acceptCallSuccess](#acceptCallSuccess)，接受对方发起的视频请求失败则触发[acceptCallFail](#acceptCallFail)  
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|    呼叫标识码| 
| meetInfo| [MeetInfo](TypeDefinitions.md#MeetInfo)|    房间信息| 
| usrExtDat| String|   自定义扩展参数| 
| cookie| String|  自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h4 id=rejectCall>void rejectCall(String callID, String usrExtDat, String cookie)</h4>

  + **功能**:  拒绝对方的视频请求
 
  + **返回值**:  无
>拒绝对方发起的视频请求成功则触发回调[rejectCallSuccess](#rejectCallSuccess)，拒绝对方发起的视频请求失败则触发[rejectCallFail](#rejectCallFail)      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|    呼叫标识码| 
| usrExtDat| String|   自定义扩展参数| 
| cookie| String|  自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h4 id=hangupCall>void hangupCall(String callID, String usrExtDat, String cookie)</h4>

  + **功能**:  挂断正在进行的视频呼叫或视频通话
  
  + **返回值**:  无
>挂断视频成功则触发回调[hangupCallSuccess](#hangupCallSuccess)，挂断视频失败则触发[hangupCallFail](#hangupCallFail)      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|    呼叫标识码| 
| usrExtDat| String|   自定义扩展参数| 
| cookie| String|  自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 


<h4 id=sendCmd>String sendCmd(String targetUserId, String data)</h4>

  + **功能**:  发送小块数据（50K以内），此接口不能被cancelSend, 一次性发送，不会有进度通知
  
  + **返回值**:  分配的任务ID
>回调函数[sendCmdRlst](#sendCmdRlst)
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| targetUserId| String|    目标用户ID| 
| data| String|   发送的数据，base64编码| 

<h4 id=sendBuffer>String sendBuffer(String targetUserId, String data)</h4>

  + **功能**:  发送大块数据 ，分块发送，进度通知事件[sendProgress](#sendProgress), 调用cancelSend 取消发送
  
  + **返回值**:  分配的任务ID
>回调函数[sendBufferRlst](#sendBufferRlst)
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| targetUserId| String|    目标用户ID| 
| data| String|   发送的数据，base64编码| 

<h4 id=sendFile>String sendFile(String targetUserId, String fileName)</h4>

  + **功能**:  发送文件 ，分块发送，进度通知事件sendProgress，调用cancelSend取消发送
  
  + **返回值**:  分配的任务ID
>回调函数[sendFileRlst](#sendFileRlst)    
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| targetUserId| String|    目标用户ID| 
| fileName| String|    需要发送的文件名| 

<h4 id=cancelSend>void cancelSend(String taskID)</h4>

  + **功能**:  取消数据发送
  
  + **返回值**:  无
>回调函数[cancelSendRlst](#cancelSendRlst)   
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| taskID| String|    任务ID| 

<h4 id=setMarkText>void setMarkText(String videoFilePathName, int timestamp, String markText)</h4>

  + **功能**:  添加视频打点信息
  
  + **返回值**:  无
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoFilePathName| NSString|    视频文件全路径| 
| timestamp| int|    时间戳| 
| markText| NSString|    打点信息| 

<h4 id=removeMarkText>void removeMarkText(String videoFilePathName, int timestamp)</h4>

  + **功能**:  移除视频打点信息
  
  + **返回值**:  无
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoFilePathName| NSString|    视频文件全路径| 
| timestamp| int|    时间戳| 

<h4 id=getAllMarks>String getAllMarks(String videoFilePathName)</h4>

  + **功能**:  获取所有打点信息
  
  + **返回值**:  打点信息
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoFilePathName| NSString|    视频文件全路径| 

<h4 id=getVideoMarkFile>String getVideoMarkFile(String videoFilePathName)</h4>

  + **功能**:  获取打点文件的绝对文件路径名
  
  + **返回值**:  打点文件的绝对文件路径名
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoFilePathName| NSString|    视频文件全路径| 


<h4 id=CloudroomVideoMgrCallback></h4>

###  通知回调函数 

CloudroomVideoMgrCallback是登录、呼叫、房间创建销毁、透明传输等功能的回调接口

------

<h4 id=loginSuccess>void loginSuccess(String usrID, String cookie)</h4>

  + **功能**:  登录成功响应
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| usrID| String|    用户账户| 
| cookie| String|    自定义用户数据| 

<h4 id=loginFail>void loginFail(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h4>

  + **功能**:  登录失败响应
  
  + **返回值**:  无
      
  如果启用了第三方鉴权，并在鉴权失败时（sdkErr为CRVIDEOSDK_CUSTOMAUTH_FAILED），可以通过getUserAuthErrCode、getUserAuthErrDesc获取详细原因。
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|    操作结果代码| 
| cookie| String|    自定义用户数据| 

<h4 id=setDNDStatusSuccess>void setDNDStatusSuccess(String cookie)</h4>

  + **功能**:  客户端设置免打扰状态操作成功响应
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cookie| String|    自定义用户数据| 

<h4 id=setDNDStatusFail>void setDNDStatusFail(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h4>

  + **功能**:  客户端设置免打扰状态操作失败响应
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|    操作结果代码| 
| cookie| String|    自定义用户数据| 

<h4 id=getUserStatusRslt>void getUserStatusRslt(CRVIDEOSDK_ERR_DEF sdkErr, ArrayList&lt;UserStatus&gt;  userStatus, String cookie)</h4>

  + **功能**:  获取企业内所有用户在线状态响应
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|    操作结果代码| 
| usersStatus| ArrayList&lt;[UserStatus](TypeDefinitions.md#UserStatus)&gt; |    用户在线状态信息列表| 
| cookie| String|    自定义用户数据| 

<h4 id=startStatusPushRslt>void startStatusPushRslt(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h4>

  + **功能**:  启动用户状态推送响应
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|    操作结果代码| 
| cookie| String|    自定义用户数据| 

<h4 id=stopStatusPushRslt>void stopStatusPushRslt(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h4>

  + **功能**:  结束用户状态推送响应
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|    操作结果代码| 
| cookie| String|    自定义用户数据| 

<h4 id=notifyUserStatus>void notifyUserStatus(UserStatus userStatus)</h4>

  + **功能**:  某个用户状态变化通知
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userStatus| [UserStatus](TypeDefinitions.md#UserStatus)|     单个用户在线状态信息| 

<h4 id=lineOff>void lineOff(CRVIDEOSDK_ERR_DEF sdkErr)</h4>

  + **功能**:  SDK通知自己掉线
  
  + **返回值**:  无
      
<h4 id=notifyTokenWillExpire>void notifyTokenWillExpire()</h4>

  + **功能**:  通知Token即将失效,有效时间剩余30s左右(可调用[updateToken](#updateToken)更新Token)
  
  + **返回值**:  无

<h4 id=createMeetingSuccess>void createMeetingSuccess(MeetInfo meetInfo, String cookie)</h4>

  + **功能**:  创建房间成功响应
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| meetInfo| [MeetInfo](TypeDefinitions.md#MeetInfo)|     房间信息| 
| cookie| String|     自定义用户数据| 

<h4 id=createMeetingFail>void createMeetingFail(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h4>

  + **功能**:  创建房间成功响应
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|    操作失败代码| 
| cookie| String|     自定义用户数据| 

<h4 id=destroyMeetingRslt>void destroyMeetingRslt(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h4>

  + **功能**:  结束房间响应
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|   操作结果代码，成功为CRVIDEOSDK_NOERR | 
| cookie| String|     自定义用户数据| 

<h4 id=callSuccess>void callSuccess(String callID, String cookie)</h4>

  + **功能**:  呼叫他人操作成功响应
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|     呼叫全局标识| 
| cookie| String|     自定义用户数据| 

<h4 id=callFail>void callFail(String callID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h4>

  + **功能**:  呼叫他人操作失败响应
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|     呼叫全局标识| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|     操作失败代码| 
| cookie| String|     自定义用户数据| 

<h4 id=acceptCallSuccess>void acceptCallSuccess(String callID, String cookie)</h4>

  + **功能**:  接受他人呼叫操作成功响应
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|     呼叫全局标识| 
| cookie| String|     自定义用户数据| 

<h4 id=acceptCallFail>void acceptCallFail(String callID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h4>

  + **功能**:  接受他人呼叫操作失败响应
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|     呼叫全局标识| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|     操作失败代码| 
| cookie| String|     自定义用户数据| 

<h4 id=rejectCallSuccess>void rejectCallSuccess(String callID, String cookie)</h4>

  + **功能**:  拒绝他人的呼叫成功响应
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|     呼叫全局标识| 
| cookie| String|     自定义用户数据| 

<h4 id=rejectCallFail>void rejectCallFail(String callID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h4>

  + **功能**:  拒绝他人的呼叫失败响应
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|     呼叫全局标识| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|     操作失败代码| 
| cookie| String|     自定义用户数据| 

<h4 id=hangupCallSuccess>void hangupCallSuccess(String callID, String cookie)</h4>

  + **功能**:  挂断呼叫操作成功响应
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|     呼叫全局标识| 
| cookie| String|     自定义用户数据| 

<h4 id=hangupCallFail>void hangupCallFail(String callID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h4>

  + **功能**:  拒绝他人呼叫操作失败响应
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|     呼叫全局标识| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|     操作失败代码 | 
| cookie| String|     自定义用户数据| 

<h4 id=notifyCallIn>void  notifyCallIn(String callID, MeetInfo meetInfo, String callerID, String usrExtDat)</h4>

  + **功能**:  服务端通知被邀请
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|     呼叫全局标识| 
| meetInfo| [MeetInfo](TypeDefinitions.md#MeetInfo)|     房间信息，空时代表无房间信息，应由被叫创建或提供房间信息| 
| callerID| String|     呼叫人员的标识ID| 
| usrExtDat| String|     自定义扩展参数| 

<h4 id=notifyCallAccepted>void notifyCallAccepted(String callID, MeetInfo meetInfo, String usrExtDat)</h4>

  + **功能**:   服务端通知呼叫邀请被接受回调
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|     呼叫全局标识| 
| meetInfo| [MeetInfo](TypeDefinitions.md#MeetInfo)|     房间信息，空时代表无房间信息，应由被叫创建或提供房间信息| 
| usrExtDat| String|     自定义扩展参数| 

<h4 id=notifyCallRejected>void notifyCallRejected(String callID, CRVIDEOSDK_ERR_DEF reason, String usrExtDat)</h4>

  + **功能**:   服务端通知呼叫邀请被拒绝回调
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|     呼叫全局标识| 
| reason| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|     呼叫被对方拒绝的原因代码| 
| usrExtDat| String|     自定义扩展参数| 

<h4 id=notifyCallhangup>void notifyCallhangup(String callID, String usrExtDat)</h4>

  + **功能**:  SDK通知呼叫被挂断
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|     呼叫全局标识| 
| usrExtDat| String|     自定义扩展参数| 
 
<h4 id=sendCmdRlst>void sendCmdRlst(String taskID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h4>

  + **功能**:  发送数据时，SDK通知发送结果
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| taskID| String|     发送任务id| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|     操作结果代码| 
| cookie| String|     自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h4 id=sendBufferRlst>void sendBufferRlst(String taskID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h4>

  + **功能**:  发送数据时，SDK通知发送结果
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| taskID| String|     发送任务id| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|     操作结果代码| 
| cookie| String|     自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h4 id=sendFileRlst>void sendFileRlst(String taskID, String fileName, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h4>

  + **功能**:  发送数据时，SDK通知发送结果
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| taskID| String|     发送任务id| 
| fileName| String|     文件名| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|     操作结果代码| 
| cookie| String|     自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h4 id=sendProgress>void sendProgress(String taskID, int sendedLen, int totalLen, String cookie)</h4>

  + **功能**:  发送数据时，SDK通知发送进度
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| taskID| String|     发送任务id| 
| sendedLen| int|     已发送的数据长度| 
| totalLen| int|     需要发送的总长度| 
| cookie| String|     自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h4 id=cancelSendRlst>void cancelSendRlst(String taskID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h4>

  + **功能**:  取消发送操作响应
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| taskID| String|     发送任务id| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|     操作结果代码| 
| cookie| String|     自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h4 id=notifyCmdData>void notifyCmdData(String sourceUserId, String data)</h4>

  + **功能**:  SDK通知收到小块数据
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sourceUserId| String|     数据来源| 
| data| String|     数组数据| 

<h4 id=notifyBufferData>void notifyBufferData(String sourceUserId, String data)</h4>

  + **功能**:  SDK通知收到大块数据
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sourceUserId| String|     数据来源| 
| data| String|     数组数据| 

<h4 id=notifyFileData>void notifyFileData(String sourceUserId, String tmpFile, String orgFileName)</h4>

  + **功能**:  SDK通知收到文件数据
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sourceUserId| String|     数据来源| 
| tmpFile| String|     临时文件，不需要时，请移除或删除对应文件| 
| orgFileName| String|     源始文件名| 

<h4 id=notifyCancelSend>void notifyCancelSend(String taskID)</h4>

  + **功能**:  通知发来的数据/文件被取消
  
  + **返回值**:  无
      
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| taskID| 发送的任务ID|     数据来源|



<h4 id=invite>String invite(String invitedUserID, String usrExtDat, String cookie)</h4>

- **功能**：发送邀请

- **返回值**:返回inviteID(每个邀请对应的唯一ID)

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteeUserID  | String  | 受邀者用户ID  |
| usrExtDat  | String  |  用户扩展数据 |
| cookie  | String  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h4 id=acceptInvite>void acceptInvite(String inviteID, String usrExtDat, String cookie)</h4>

- **功能**：接受对方的邀请

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| usrExtDat  | String  |  用户扩展数据 |
| cookie  | String  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h4 id=rejectInvite>void rejectInvite(String inviteID, String usrExtDat, String cookie)</h4>

- **功能**：拒绝对方的邀请

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| usrExtDat  | String  |  用户扩展数据 |
| cookie  | String  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h4 id=cancelInvite>void cancelInvite(String inviteID, String usrExtDat, String cookie)</h4>

- **功能**：取消自己发送的邀请

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| usrExtDat  | String  |  用户扩展数据 |
| cookie  | String  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h4 id=inviteSuccess>void inviteSuccess(String inviteID, String cookie)</h4>

- **功能**：发送邀请成功

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| cookie  | String  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h4 id=inviteFail>void inviteFail(String inviteID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h4>

- **功能**：发送邀请失败

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| sdkErr  | CRVIDEOSDK_ERR_DEF  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
| cookie  | String  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h4 id=cancelInviteSuccess>void cancelInviteSuccess(String inviteID, String cookie)</h4>

- **功能**：取消自己发送的邀请成功

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| cookie  | String  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h4 id=cancelInviteFail>void cancelInviteFail(String inviteID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h4>

- **功能**：取消自己发送的邀请失败

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| sdkErr  | CRVIDEOSDK_ERR_DEF  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
| cookie  | String  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h4 id=acceptInviteSuccess>void acceptInviteSuccess(String inviteID, String cookie)</h4>

- **功能**：接受对方的邀请成功

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| cookie  | String  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h4 id=acceptInviteFail>void acceptInviteFail(String inviteID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h4>

- **功能**：接受对方的邀请失败

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| sdkErr  | CRVIDEOSDK_ERR_DEF  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
| cookie  | String  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h4 id=rejectInviteSuccess>void rejectInviteSuccess(String inviteID, String cookie)</h4>

- **功能**：拒绝对方的邀请成功

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| cookie  | String  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h4 id=rejectInviteFail>void rejectInviteFail(String inviteID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h4>

- **功能**：拒绝对方的邀请失败

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| sdkErr  | CRVIDEOSDK_ERR_DEF  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
| cookie  | String  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h4 id=notifyInviteIn>void notifyInviteIn(String inviteID, String inviterUsrID, String usrExtDat)</h4>

- **功能**：通知有人邀请

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| inviterUsrID  | String  | 邀请者用户ID  |
| usrExtDat  | String  | 用户扩展数据  |

<h4 id=notifyInviteAccepted>void notifyInviteAccepted(String inviteID, String usrExtDat)</h4>

- **功能**：通知邀请被接受

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| usrExtDat  | String  | 用户扩展数据  |

<h4 id=notifyInviteRejected>void notifyInviteRejected(String inviteID, CRVIDEOSDK_ERR_DEF reason, String usrExtDat)</h4>

- **功能**：通知邀请被拒绝

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| reason  | CRVIDEOSDK_ERR_DEF  | 邀请被拒绝原因，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
| usrExtDat  | String  | 用户扩展数据  |

<h4 id=notifyInviteCanceled>void notifyInviteCanceled(String inviteID, CRVIDEOSDK_ERR_DEF reason, String usrExtDat)</h4>

- **功能**：通知邀请被取消

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| reason  | CRVIDEOSDK_ERR_DEF  | 邀请被取消原因，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
| usrExtDat  | String  | 用户扩展数据  |


<h3 id=CloudroomVideoMeeting >3. 视频房间组件（CloudroomVideoMeeting）的接口函数</h3>

><font size=4>CloudroomVideoMeeting 是房间核心控件，实现通话建立、音频采集播入、视频采集编解码、屏幕共享、录制、影音播放等功能，整个程序的生命过程中只能有一个实例</font>

----

<h4 id=CloudroomVideoMeeting_registerCallBack>void registerCallBack(CloudroomVideoCallback  callBack) </h4>

  + **功能**:  注册监听回调
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callBack| CloudroomVideoCallback| 回调对象|  

<h4 id=CloudroomVideoMeeting_unregisterCallBack>void unregisterCallBack(CloudroomVideoCallback  callBack) </h4>

  + **功能**:  反注册监听回调
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callBack| CloudroomVideoCallback| 反注册的回调对象|  

<h4 id=enterMeeting>void enterMeeting(int meetID)</h4>

  + **功能**:  使用房间ID和密码（可为空）进入指定的视频房间
  
  + **返回值**:  无
>回调函数[enterMeetingRslt](#enterMeetingRslt)  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| meetID| int| 视频房间ID|  

<h4 id=exitMeeting>void exitMeeting()</h4>

  + **功能**:  离开房间 ，调用此接口离开会话时，其他会话用户会收到userLeftMeeting的消息通知
  
  + **返回值**:  无
>回调函数[userLeftMeeting](#userLeftMeeting)  

<h4 id=getAllMembers>ArrayList&lt;MemberInfo&gt;  getAllMembers()</h4>

  + **功能**:  获取所有用户的信息
  
  + **返回值**:  ArrayList&lt;[MemberInfo](TypeDefinitions.md#MemberInfo)&gt;-所有用户的信息


<h4 id=getMemberInfo>MemberInfo getMemberInfo(String userId)</h4>

  + **功能**:  获取某个用户的信息
  
  + **返回值**:  [MemberInfo](TypeDefinitions.md#MemberInfo) - 用户的信息
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userId| String|  用户ID| 

<h4 id=getNickName>String getNickName(String userId)</h4>

  + **功能**:  获取某个用户的昵称
  
  + **返回值**: 用户的昵称
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userId| String|  用户ID| 

<h4 id=setNickName>void setNickName(String userID, String nickName)</h4>

  + **功能**:  设置某个用户的昵称， 调用此接口如果设置成功，其他会话用户会收到 notifyNickNameChanged
 
  + **返回值**: 无
>回调函数[setNickNameRsp](#setNickNameRsp)  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userId| String|  用户ID| 
| nickname| String|  新的用户昵称| 

<h4 id=isUserInMeeting>boolean isUserInMeeting(String userID)</h4>

  + **功能**:  判断某个用户是否在房间中
  
  + **返回值**: 用户是否在房间中
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userId| String|  用户ID| 

<h4 id=setAudioCfg>void setAudioCfg(AudioCfg cfg)</h4>

  + **功能**:  设置麦克风音频参数
  
  + **返回值**: 无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cfg| [AudioCfg](TypeDefinitions.md#AudioCfg)|  音频参数 | 

 <h4 id=getAudioCfg>AudioCfg getAudioCfg()</h4>

  + **功能**:  获取音频参数
  
  + **返回值**: [AudioCfg](TypeDefinitions.md#AudioCfg)-音频参数

 <h4 id=setMicVolumeScaling>boolean setMicVolumeScaling(int scale)</h4>

  + **功能**:  设置麦克风音量增益
  
  + **返回值**: 是否成功
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| scale| int|  麦克风音量增益（范围：1-20）| 

<h4 id=getMicEnergy >int getMicEnergy(String userID)</h4>

  + **功能**:  获取用户说话声音大小
  
  + **返回值**: 音量大小（0~10）
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|  用户的ID| 

<h4 id=openMic>void openMic(String userID)</h4>

  + **功能**:  打开用户的麦克风， 打开麦克风会触发音频状态变化的回调函数audioStatusChanged 新状态参数先会进入到AOPENING状态，
  等服务器处理后才会进入AOPEN状态，此时说话才能被采集到
  
  + **返回值**: 无
>回调函数[audioStatusChanged](#audioStatusChanged)  
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|  用户的ID| 

<h4 id=closeMic>void closeMic(String userID)</h4>

  + **功能**:  关闭用户的麦克风 ，关麦克风会触发音频状态变化的回调函数audioStatusChanged 新状态参数会变为ACLOSE 关麦操作是立即生效的，会立即停止采集
  
  + **返回值**: 无
>回调函数[audioStatusChanged](#audioStatusChanged)  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|  用户的ID| 

<h4 id=getAudioStatus>ASTATUS getAudioStatus(String userID)</h4>

  + **功能**:  获取用户的麦状态
   
  + **返回值**: [ASTATUS](Constant.md#ASTATUS)-麦克风设备状态
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|  用户的ID| 

<h4 id=setSpeakerVolume>boolean setSpeakerVolume(int level)</h4>

  + **功能**:  设置本地扬声器音量
   
  + **返回值**: 是否成功
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| level| int|  本地扬声器音量| 

<h4 id=getSpeakerVolume>int getSpeakerVolume()</h4>

  + **功能**:  获取本地扬声器音量 ，读写属性，音量等级类型 0-255
   
  + **返回值**: 本地扬声器音量


<h4 id=setSpeakerMute>void setSpeakerMute(boolean bMute)</h4>

  + **功能**:  设置播放是否静音
   
  + **返回值**: 是否静音
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| bMute| boolean|  播放是否静音| 

<h4 id=getSpeakerMute>boolean getSpeakerMute()</h4>

  + **功能**:  获取播放是否静音
   
  + **返回值**: 是否静音


<h4 id=setSpeakerOut>boolean setSpeakerOut(boolean speakerOut)</h4>

  + **功能**:  设置外放状态
   
  + **返回值**: 是否成功
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| speakerOut| boolean|  是否外放| 

<h4 id=getSpeakerOut>boolean getSpeakerOut()</h4>

  + **功能**:  获取外放状态
   
  + **返回值**: 是否外放
 
<h4 id=setAllAudioClose>void setAllAudioClose()</h4>

  + **功能**:  关闭所有用户的麦克风 ， 调用此接口后会话内其他人的麦克风会关闭，同时收到消息audioStatusChanged
  + **返回值**: 无
>回调函数[audioStatusChanged](#audioStatusChanged) 

<h4 id=getAllVideoInfo>ArrayList&lt;UsrVideoInfo&gt; getAllVideoInfo(String userId)</h4>

  + **功能**:  获取用户所有的摄像头信息
   
  + **返回值**: ArrayList&lt;[UsrVideoInfo](TypeDefinitions.md#UsrVideoInfo)&gt;-用户所有的摄像头信息

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|   用户ID| 

<h4 id=createCustomVideoDev>short createCustomVideoDev(String camName, VIDEO_FORMAT pixFmt, int width, int height, String extParams)</h4>

  + **功能**:  创建自定义摄像头（sdk最大支持5个)， 添加成功后与本地摄像头处理一致；getAllVideoInfo接口可以识别摄像头类型
   
  + **返回值**:  返回值小于0， 则代表创建失败， 返回值大于等于0， 则代表摄像头编号

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| camName| String|   摄像头名称| 
| pixFmt| [VIDEO_FORMAT](Constant.md#VIDEO_FORMAT)|    图像格式| 
| width| int|   图像宽度| 
| height| int|   图像高度| 
| extParams| String|    扩展参数，没有为空| 

<h4 id=destroyCustomVideoDev>void destroyCustomVideoDev(short videoID)</h4>

  + **功能**:  消毁自定义摄像头
   
  + **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoID| short|    摄像头id (createCustomVideoDev返回值）| 

<h4 id=inputCustomVideoDat>void inputCustomVideoDat(short videoID, byte[] data, int timeStamp)</h4>

  + **功能**:  输入摄像头图像数据
   
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoID| short|    摄像头id (createCustomVideoDev返回值）| 
| data| byte[]|    图像数据（请保证格式、和尺寸与摄像头匹配）| 
| timeStamp| int|    保留字段，请填0 | 

<h4 id=inputCustomVideoDat>void inputCustomVideoDat(short videoID, byte[] data, int timeStamp)</h4>

  + **功能**:  输入摄像头图像数据
   
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoID| short|    摄像头id (createCustomVideoDev返回值）| 
| data| byte[]|    图像数据（请保证格式、和尺寸与摄像头匹配）| 
| timeStamp| int|    保留字段，请填0 | 

<h4 id=setVideoCfg>void setVideoCfg(VideoCfg cfg)</h4>

  + **功能**:  设置摄像头参数
   
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cfg| [VideoCfg](TypeDefinitions.md#VideoCfg) |    摄像头参数| 

<h4 id=getVideoCfg>VideoCfg getVideoCfg()</h4>

  + **功能**:  获取设置的摄像头参数
   
  + **返回值**:  [VideoCfg](TypeDefinitions.md#VideoCfg)-摄像头参数
  
<h4 id=setVideoEffects>void setVideoEffects(VideoEffects effects)</h4>

  + **功能**:  配置视频效果
   
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cfg| [VideoEffects](TypeDefinitions.md#VideoEffects) |    视频效果配置| 

<h4 id=getVideoEffects>VideoCfg getVideoEffects()</h4>

  + **功能**:  获取视频效果配置
   
  + **返回值**:  [VideoEffects](TypeDefinitions.md#VideoEffects)-视频效果配置

<h4 id=setLocVideoAttributes>void setLocVideoAttributes(short videoID, VideoAttributes attributes)</h4>

  + **功能**:  设置某个摄像头私有参数
   
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoID| short|    本地摄像头id| 
| attributes| [VideoAttributes](TypeDefinitions.md#VideoAttributes)|    摄像头私有参数,| 

<h4 id=getLocVideoAttributes>VideoAttributes getLocVideoAttributes(short videoID)</h4>

  + **功能**:  获取某个摄像头私有参数
   
  + **返回值**:  [VideoAttributes](TypeDefinitions.md#VideoAttributes)-摄像头私有参数
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoID| short|    本地摄像头id| 

<h4 id=getWatchableVideos>ArrayList&lt;UsrVideoId&gt;  getWatchableVideos()</h4>

  + **功能**:  获取房间内所有可观看的摄像头
   
  + **返回值**:  ArrayList&lt;[UsrVideoId](TypeDefinitions.md#UsrVideoId)&gt;-房间内所有可观看的摄像头 

<h4 id=openVideo>void openVideo(String userID)</h4>

  + **功能**:  打开用户的摄像头，以便本地、远端显示视频图像

  + **返回值**:  无
>回调函数[openVideoRslt](#openVideoRslt), 调用打开和关闭麦克风接口都会触发对应用户的回调[videoStatusChanged](#videoStatusChanged) 

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    用户的ID| 

<h4 id=closeVideo>void closeVideo(String userID)</h4>

  + **功能**:  关闭用户的摄像头 ，
  
  + **返回值**:  无
>调用打开和关闭麦克风接口都会触发对应用户的回调[videoStatusChanged](#videoStatusChanged) 

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    用户的ID| 

<h4 id=getVideoStatus>VSTATUS getVideoStatus(String userID)</h4>

  + **功能**:  获取用户的摄像头状态
  
  + **返回值**:  [VSTATUS](Constant.md#VSTATUS)-麦克风摄像头状态
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    用户的ID| 

<h4 id=getDefaultVideo>short getDefaultVideo(String userID)</h4>

  + **功能**:  获取指定用户的默认摄像头 ，如果用户没有摄像头，返回0
  
  + **返回值**:  摄像头ID
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    用户的ID| 

<h4 id=setDefaultVideo>void setDefaultVideo(String userID, short videoID)</h4>

  + **功能**:  设置默认的摄像头 ，videoID 应该从getAllVideoInfo返回值中获取
  
  + **返回值**:  无
      

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    用户的ID| 
| videoID| short|    摄像头ID| 

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| usrVideoID| [UsrVideoId](TypeDefinitions.md#UsrVideoId)|    用户摄像头ID | 
 
<h4 id=getLocalVideoParams>String getLocalVideoParams(short videoID)</h4>

  + **功能**:  获取指定本地摄像头参数
  
  + **返回值**:  指定本地摄像头参数,json格式，如{"摄像头参数名称":[可用参数列表]}
      

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoID| short|    摄像头ID| 

<h4 id=setLocalVideoParam>void setLocalVideoParam(short videoID, String param, String value)</h4>

  + **功能**:  设置指定本地摄像头参数
  
  + **返回值**:  指定本地摄像头参数,json格式，如{"摄像头参数名称":[可用参数列表]}
      

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoID| short|    摄像头ID| 
| param| String|    摄像头参数名称| 
| value| String|    摄像头参数值| 

<h4 id=isScreenShareStarted>boolean isScreenShareStarted()</h4>

  + **功能**:  获取屏幕共享是否已开启
  
  + **返回值**:  屏幕共享是否已开启



<h4 id=getScreenShareCfg>string getScreenShareCfg()</h4>

- **功能**: 获取屏幕共享配置

- **返回值**:屏幕共享配置，参见[ScreenShareCfg](TypeDefinitions.md#ScreenShareCfg)


<h4 id=setScreenShareCfg>void setScreenShareCfg(ScreenShareCfg cfg)</h4>

- **功能**: 设置屏幕共享配置

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|string	|[ScreenShareCfg](TypeDefinitions.md#ScreenShareCfg) |	屏幕共享配置|


<h4 id=startScreenShare>void startScreenShare()</h4>

- **功能**: 开启屏幕共享

- **返回值**:无

- <p style="color:red; font-size:20px">注意事项: </p>
	+ 共享屏幕需要相应授权，请添加下面权限申请界面声明到主配置文件
```csharp
	<activity
	  android:name="com.cloudroom.screencapture.PermissionActivity"
	  android:configChanges="orientation|uiMode|screenLayout|screenSize|smallestScreenSize|locale|fontScale|keyboard|keyboardHidden|navigation"
	  android:launchMode="singleTop" 
	  android:screenOrientation="sensor" >
	</activity>
```


<h4 id=stopScreenShare>void stopScreenShare()</h4>

- **功能**: 停止屏幕共享

- **返回值**:无

<h4 id=startScreenMark>void startScreenMark()</h4>

- **功能**: 开始屏幕共享标注

- **返回值**: 无


<h4 id=stopScreenMark>void stopScreenMark()</h4>

- **功能**: 停止屏幕共享标注

- **返回值**: 无


<h4 id=enableOtherMark>void enableOtherMark(boolean enable)</h4>

-  **功能**：允许他人标注屏幕

-  **返回值**:无

-  **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| enable  | boolean  | 是否允许他人标注 |

<h4 id=isEnableOtherMark>boolean isEnableOtherMark()</h4>

-  **功能**：获取是否允许他人标注屏幕

-  **返回值**: 是否允许他人标注

-  **参数**:


<h4 id=createLocMixer>CRVIDEOSDK_ERR_DEF createLocMixer(String mixerID, MixerCfg mixerCfg, ArrayList&lt; MixerContent&gt; MixerContent)</h4>

  + **功能**:  创建本地混图器（用于本地录制、本地推流），当需要多个不同内容的录制、或直播时，就要创建多个混图器 。混图器开消比较大，多个同样图像的输出应该有一个混图器加上多个输出实现
  
  + **返回值**:  [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)-操作结果码
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| String|    混图器唯一标识| 
| mixerCfg| [MixerCfg](TypeDefinitions.md#MixerCfg)|    混图器规格配置 | 
| mixerContents| ArrayList&lt;[MixerContent](TypeDefinitions.md#MixerContent)&gt;|    混图器内容配置 | 

 <h4 id=updateLocMixerContent>CRVIDEOSDK_ERR_DEF updateLocMixerContent(String mixerID, ArrayList&lt; MixerContent&gt; MixerContents></h4>

  + **功能**:  更新本地混图器内容
  
  + **返回值**:  [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)-操作结果码
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| String|    混图器唯一标识| 
| MixerContents| ArrayList&lt;[MixerContent](TypeDefinitions.md#MixerContent)&gt;|    混图器内容配置  | 
 
<h4 id=destroyLocMixer>void destroyLocMixer(String mixerID)</h4>

  + **功能**:  消毁本地混图器 , 消毁本地混图器后， 基于此混图器的录制输出、直播推流输出将自动结束
  
  + **返回值**:  无
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| String|    混图器唯一标识| 

 <h4 id=getLocMixerState>MIXER_STATE getLocMixerState(String mixerID)</h4>

  + **功能**:  获取本地混图器状态
  
  + **返回值**:  [MIXER_STATE](Constant.md#MIXER_STATE)-混图器状态
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| String|    混图器唯一标识| 

 <h4 id=addLocMixerOutput>CRVIDEOSDK_ERR_DEF addLocMixerOutput(String mixerID, ArrayList&lt;MixerOutPutCfg&gt; mixerOutput)</h4>

  + **功能**:  开启本地录制、开启直播推流
  
  + **返回值**:  [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)-操作结果码
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| String|    混图器唯一标识| 
| mixerOutput| ArrayList&lt;[MixerOutPutCfg](TypeDefinitions.md#MixerOutPutCfg)&gt;|    本地输出对象  | 

- <p style="color:red; font-size:20px">注意事项:</p>

	+ 可以一次添加多个输出，也可以依据业务需要稍后再添加新的输出
	+ 多个输出不能同名、或同一url
	+ 每个输出，有独立的信息通知，请见事件locMixerOutputInfo
	+ 如果输出异常时，将自动停止, 停止本地录制、直播推流


 <h4 id=rmLocMixerOutput>void rmLocMixerOutput(String mixerID, ArrayList&lt;String&gt; nameOrUrls)</h4>

  + **功能**:  停止本地录制、直播推流 , 所有输出停止后并不会消毁混图器，如果混图器不再需要请手工消毁
  
  + **返回值**:  无
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| String|    混图器唯一标识| 
| nameOrUrls| ArrayList&lt;String&gt;|    要停止的录制文件名或直播url列表| 

<h4 id=getAllRecordFiles>ArrayList&lt;RecordFileShow&gt; getAllRecordFiles()</h4>

  + **功能**:  取得所有录制文件信息
  
  + **返回值**:  ArrayList&lt;义[RecordFileShow](TypeDefinitions.md#RecordFileShow)&gt;所有录制文件信息
   

<h4 id=addFileToRecordMgr>int addFileToRecordMgr(String fileName, String filePath)</h4>

  + **功能**:  添加本地文件到录制文件管理中 , 第三方录制文件调用此接口后可进行本地回放和上传到视频服务器上，和自己录制的文件一样可以正常
  
  + **返回值**:  -1：本地文件不存在，0：成功，1：文件已经被添加过
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| filename| String|    文件名，不含路径| 
| filePath| String|    文件路径，不含文件名| 

<h4 id=removeFromFileMgr>void removeFromFileMgr(String fileName)</h4>

  + **功能**:  删除本地的录制文件，上传中的文件会被取消上传 , 已上传完成的服务器文件不受影响
  
  + **返回值**:  无
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| filename| String|    文件名，不含路径| 

<h4 id=uploadRecordFile>void uploadRecordFile(String fileName)</h4>

  + **功能**:  上传文件
  
  + **返回值**:  无
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| filename| String|    文件名，不含路径| 

<h4 id=uploadRecordFile>void uploadRecordFile(String fileName, String svrPathFileName)</h4>

  + **功能**:  上传文件到服务器指定位置
  
  + **返回值**:  无
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| filename| String|    文件名，不含路径| 
| svrPathFileName| String|    文件存放在服务器上的相对路径文件名（如/AA/BB/CC/test.mp4）| 

<h4 id=cancelUploadRecordFile>void cancelUploadRecordFile(String filename)</h4>

  + **功能**:  取消上传中的录制文件
  
  + **返回值**:  无
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| filename| String|    文件名，不含路径| 

<h4 id=playbackRecordFile>void playbackRecordFile(String filename)</h4>

  + **功能**:  回放录制文件 , 可创建影音控件显示录制内容，功能同接口startPlayMedia，如果录制文件被加密，则只能使用playbackRecordFile来回放
  
  + **返回值**:  无
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| filename| String|    文件名，不含路径| 

<h4 id=startSvrMixer>CRVIDEOSDK_ERR_DEF startSvrMixer(Map&lt; String, MixerCfg&gt; mutiMixerCfgs, Map&lt; String, ArrayList&lt; MixerContent&gt;&gt; mutiMixerContents, Map&lt;String, ArrayList&lt;MixerOutPutCfg&gt;&gt; mutiMixerOutputs)</h4>

  + **功能**:  开始云端录制、云端直播
  
  + **返回值**:  [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)-操作结果
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mutiMixerCfgs| Map&lt;String, [MixerCfg](TypeDefinitions.md#MixerCfg)&gt;|     服务器混图配置  | 
| mutiMixerContents|  Map&lt;String, ArrayList&lt;[MixerContent](TypeDefinitions.md#MixerContent)&gt;&gt;|    服务器混图内容  | 
| mutiMixerOutputs| ArrayList&lt;[MixerOutPutCfg](TypeDefinitions.md#MixerOutPutCfg)&gt;&gt;|    服务器输出 | 

- <p style="color:red; font-size:20px">注意事项:</p>
  
  + 启动云端功能有一定耗时，请关注混图器的状态变化事件[svrMixerStateChanged](#svrMixerStateChanged)
  + 每个输出有私有的状态变化事件svrMixerOutputInfo


<h4 id=updateSvrMixerContent>CRVIDEOSDK_ERR_DEF updateSvrMixerContent(Map&lt; String, ArrayList&lt; MixerContent&gt; &gt;  mutiMixerContents)</h4>

  + **功能**:  更新云端录制、云端直播内容
  
  + **返回值**:  [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)-操作结果
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mutiMixerContents| Map&lt;String, ArrayList&lt;[MixerContent](TypeDefinitions.md#MixerContent)&gt; &gt; |    服务器混图内容  | 

<h4 id=stopSvrMixer>void stopSvrMixer()</h4>

  + **功能**:  停止云端录制、云端直播
  
  + **返回值**:  [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)-操作结果

- <p style="color:red; font-size:20px">注意事项:</p>

  + 停止有一定耗时，请关注混图器的状态变化事件svrMixerStateChanged*
  + 每个输出有私有的状态变化事件svrMixerOutputInfo*


<h4 id=getSvrMixerState>MIXER_STATE getSvrMixerState()</h4>

  + **功能**:  获取云端录制、云端直播状态
  
  + **返回值**:   [MIXER_STATE](Constant.md#MIXER_STATE)

<h4 id=switchToPage>void switchToPage(MAIN_PAGE main, SubPage sub)</h4>

  + **功能**:  功能切换
  
  + **返回值**:   无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| main| [MAIN_PAGE](Constant.md#MAIN_PAGE) |    功能类型 | 
| sub| [SubPage](TypeDefinitions.md#SubPage) |    子页面标识（如创建白板时返回的boardID） | 

<h4 id=getCurrentMainPage>MAIN_PAGE getCurrentMainPage()</h4>

  + **功能**:  获取当前主功能区
  
  + **返回值**:   [MAIN_PAGE](Constant.md#MAIN_PAGE)-当前主功能区
     
<h4 id=getCurrentSubPage>SubPage getCurrentSubPage()</h4>

  + **功能**:  获取当前子页面
  
  + **返回值**:   [SubPage](TypeDefinitions.md#SubPage)-当前子页面

<h4 id=getVideoWallMode>VIDEO_WALL_MODE getVideoWallMode()</h4>

  + **功能**:  获取视频墙当前分屏模式
  
  + **返回值**:   [VIDEO_WALL_MODE](Constant.md#VIDEO_WALL_MODE)-分屏模式

<h4 id=setVideoWallMode>void setVideoWallMode(VIDEO_WALL_MODE wallMode)</h4>

  + **功能**:  设置视频墙分屏模式
  
  + **返回值**:   无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoWallMode| [VIDEO_WALL_MODE](Constant.md#VIDEO_WALL_MODE) |    分屏模式| 

<h4 id=setMainVideo>void setMainVideo(String userID)</h4>

  + **功能**:  设置当前哪个用户为主视频
  
  + **返回值**:   无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String |    用户ID| 

<h4 id=getMainVideo>String getMainVideo()</h4>

  + **功能**:  获取当前哪个用户为主视频
  
  + **返回值**:   用户ID
 
<h4 id=createBoard>SubPage createBoard(String title, int width, int height, int pageCount)</h4>

  + **功能**:  创建电子白板
  
  + **返回值**:   [SubPage](TypeDefinitions.md#SubPage)-白板标识
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| title| String |    白板名称| 
| width| int |    白板宽度| 
| height| int |    白板高度| 
| pageCount| int |    白板内有多个页（一般空白板1页，文档白板为实际页数）| 

- <p style="color:red; font-size:20px">注意事项:</p>

  + 其他参会者会收到notifyCreateBoard事件
  + 后台会记录下白板数据，新入会者会收到notifyInitBoards事件
  + 创建完白板后，一定要及尽快调用initBoardPageDat初始化各页数据
  + 如果需要所有参会者同步切到此白板，请调用switchToPage


<h4 id=closeBoard>void closeBoard(SubPage boardID)</h4>

  + **功能**:  关闭电子白板 , 其他参会者将收到notifyCloseBoard事件；同时后台会移除对应白板的所有信息
  + **返回值**:   无
>回调函数[notifyCloseBoard](#notifyCloseBoard)  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage)  |    白板标识| 

<h4 id=initBoardPageDat>void initBoardPageDat(SubPage boardID, int boardPageNo, String imgID, String elemetDatas)</h4>

  + **功能**:  初始化白板指定页数据 
  + **返回值**:   无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage)  |    白板标识| 
| boardPageNo| int |    白板第几页（0:代表第一页）| 
| imgID| String |    白板的背景图片标识（空代表无背影图）| 
| elemetDatas| String |    白板的初始图元（空代表无图元，一般在导入历史文件才用到），白板图元数据Json数组，详见定义[BoardElement](TypeDefinitions.md#BoardElement)  | 
 
- <p style="color:red; font-size:20px">注意事项:</p>

  + imgID非空时, 代表背景的图片ID。img来源请参见getNetDiskDocFilePageInfo
  + 其他参会者将收到notifyInitBoardPageDat事件
  + 后台会记录下白板的页数据，在新用户入会时，也会收到notifyInitBoardPageDat事件


<h4 id=createElementID>String createElementID()</h4>

  + **功能**:  创建图元标识
  + **返回值**:   elementID图元标识
 

<h4 id=addBoardElement>void addBoardElement(SubPage boardID, int boardPageNo, String element)</h4>

  + **功能**:  添加图元信息 , 其他参会者会收到：notifyAddBoardElement事件同时后台会保存图元，新入会者会在notifyInitBoardPageDat中得到这些图元  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage)  |    白板标识| 
| boardPageNo| int |    白板第几页（0:代表第一页）| 
| element| String |    图元信息，Json数据格式详见定义[BoardElement](TypeDefinitions.md#BoardElement)| 

<h4 id=modifyBoardElement>void modifyBoardElement(SubPage boardID, int boardPageNo, String element)</h4>

  + **功能**:  修改图元信息 , 其他参会者会收到：notifyModifyBoardElement事件，同时后台会覆盖对应图元的数据，新入会者会在notifyInitBoardPageDat中得到这些图元  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage)  |    白板标识| 
| boardPageNo| int |    白板第几页（0:代表第一页）| 
| element| String |    图元信息，Json数据格式详见定义[BoardElement](TypeDefinitions.md#BoardElement)| 
 
<h4 id=delBoardElement>void delBoardElement(SubPage boardID, int boardPageNo, ArrayList&lt;String&gt; elementIDs)</h4>

  + **功能**:  删除图元  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| SubPage |    白板标识| 
| boardPageNo| int |    白板第几页（0:代表第一页）| 
| elementIDs| ArrayList&lt;String&gt; |     图元id列表| 
 
<h4 id=setMouseHotSpot>void setMouseHotSpot(SubPage boardID, int boardPageNo, int x, int y)</h4>

  + **功能**:  设置鼠标热点信息 
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage) |    白板标识 | 
| boardPageNo| int |    白板第几页（0:代表第一页）| 
| x| int |     屏幕横坐标| 
| y| int |     屏幕纵坐标| 

<h4 id=setBoardCurPageNo>void setBoardCurPageNo([SubPage](TypeDefinitions.md#SubPage) boardID, int boardPageNo, int pagePos1, int pagePos2)</h4>

  + **功能**:  白板翻页
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage) |    白板标识 | 
| boardPageNo| int |    白板第几页（0:代表第一页）| 
| pagePos1| int |     私有扩展参数1（如可用于页内x方向滚动位置）| 
| pagePos2| int |     私有扩展参数2（如可用于页内y方向滚动位置）| 
 
<h4 id=listNetDiskDocFile>void listNetDiskDocFile(String dir)</h4>

  + **功能**:  查询服务器指定目录下的内容（子目录名、上传的文档源文件及文档转换状态）
  + **返回值**:  无
>回调函数[listNetDiskDocFileRslt](#listNetDiskDocFileRslt)
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| dir| String |    要查询的目录，空或"/"时，代表查询根目录下的内容| 

<h4 id=uploadDocFileToNetDisk>void uploadDocFileToNetDisk(String svrPathFileName, String locPathFileName)</h4>

  + **功能**:  上传并转换文档
  
  + **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| svrPathFileName| String |    服务器的路径文件名，包含目录时，服务器自动创建对应目录| 
| locPathFileName| String |    要上传文件的本地的路径文件名| 

- <p style="color:red; font-size:20px">注意事项:</p>

  + 支持的文件格式有：doc，docx, ppt, pptx, pps, ppsx, xls, xlsx, et, ett, wps, wpt, dps, pdf, txt, log, ini, bmp, png, jpg, jpeg；


<h4 id=downloadNetDiskDocFile>void downloadNetDiskDocFile(String svrPathFileName, String locPathFileName)</h4>

  + **功能**:  下载源始文档
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| svrPathFileName| String |    服务器的路径文件名，包含目录时，服务器自动创建对应目录| 
| locPathFileName| String |    要上传文件的本地的路径文件名| 

<h4 id=cancelTransforNetDiskDocFile>void cancelTransforNetDiskDocFile(String svrPathFileName)</h4>

  + **功能**:  取消文档传输
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| svrPathFileName| String |    服务器的路径文件名，包含目录时，服务器自动创建对应目录| 

<h4 id=deleteNetDiskDocFile>void deleteNetDiskDocFile(String svrPathFileName)</h4>

  + **功能**:  删除文档
  
  + **返回值**:  无
>回调函数[deleteNetDiskDocFileRslt](#deleteNetDiskDocFileRslt)(删除结果)
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| svrPathFileName| String |    服务器的路径文件名，包含目录时，服务器自动创建对应目录| 

<h4 id=getNetDiskDocFilePageInfo>void getNetDiskDocFilePageInfo(String svrPathFileName)</h4>

  + **功能**:  获取文档的转换信息
  
  + **返回值**:  无
>回调函数[getNetDiskDocFilePageInfoRslt](#getNetDiskDocFilePageInfoRslt)(获取结果)
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| svrPathFileName| String |    服务器的路径文件名，包含目录时，服务器自动创建对应目录| 

- <p style="color:red; font-size:20px">注意事项:</p>

  + 获取到的文档转换后的信息后， 就可以创建白板createBoard, 然后为白板初始化文档内容

<h4 id=downloadNetDiskDocFilePage>void downloadNetDiskDocFilePage(String pagePathFileName, String locPathFileName)</h4>

  + **功能**:  下载文档转换后的页文件
  
  + **返回值**:  无
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| pagePathFileName| String |    页文件在服务器的路径文件名| 
| locPathFileName| String |    文件下载后存放的本地的路径文件名，目录不存在时自动创建| 

- <p style="color:red; font-size:20px">注意事项:</p>

  + 页文件格式： 6字节保留，4字节图像格式（2:jpg, 4:png），4字节图像内容长度，图像内容


<h4 id=setMediaCfg>void setMediaCfg(VideoCfg cfg)</h4>

  + **功能**:  配置远程影音共享时，图像质量参数
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cfg| [VideoCfg](TypeDefinitions.md#VideoCfg) |    影音共享配置参数 | 

<h4 id=getMediaCfg>VideoCfg getMediaCfg()</h4>

  + **功能**:  获取影音共享配置参数
  
  + **返回值**:  [VideoCfg](TypeDefinitions.md#VideoCfg)-影音共享配置参数
 
 
<h4 id=startPlayMedia>void startPlayMedia(String filename, boolean bLocPlay)</h4>

  + **功能**:  播放影音文件
  
  + **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| filename| String |    文件名，全路径| 
| bLocPlay| int |    是否仅仅本地播放（true:本地播放，false：房间内播放）|  

<h4>void startPlayMedia(String filename, int bLocPlay, boolean bPauseWhenFinished)</h4>

  + **功能**:  播放影音文件
  
  + **返回值**:  无
>播放视频则触发回调[notifyMediaOpened](#notifyMediaOpened)， 停止播放则触发回调[notifyMediaStop](#notifyMediaStop)

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| filename| String |    文件名，全路径| 
| bLocPlay| int |    是否仅仅本地播放（1:本地播放，0：房间内播放）|  
| bPauseWhenFinished| boolean |    是否停在最后一帧, 如果播放成功，其他人收到[notifyMediaStart](#notifyMediaStart)，如果播放失败，请关注通知事件[notifyMediaStop](#notifyMediaStop)|  
 
<h4 id=pausePlayMedia>void pausePlayMedia(boolean bPause)</h4>

  + **功能**:  暂停播放影音
  
  + **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| bPause| boolean |    是否暂停| 

<h4 id=stopPlayMedia>void stopPlayMedia()</h4>

  + **功能**:  停止影音播放
  
  + **返回值**:  无
>回调函数[notifyMediaStop](#notifyMediaStop)

<h4 id=setMediaPlayPos>void setMediaPlayPos(int pos)</h4>

  + **功能**:  设置播放进度
  
  + **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| pos| int |    设置播放位置，单位：毫秒| 

<h4 id=getAllFilesInMediaPath>ArrayList&lt;String&gt; getAllFilesInMediaPath()</h4>

  + **功能**:  取得影音文件夹下的所有可播放文件
 
 + **返回值**:  文件名列表
     
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| pos| int |    设置播放位置，单位：毫秒| 
 
- <p style="color:red; font-size:20px">注意事项:</p>

  + 影音文件夹位于方法init的第二个参数sdkFilePath，sdk会在此文件中建立media的子文件夹，即为影音文件夹


<h4 id=getMediaInfo>MediaInfo getMediaInfo()</h4>

  + **功能**:  正在播放的影音信息
  
  + **返回值**:  [MediaInfo](TypeDefinitions.md#MediaInfo)-影音文件信息
 

<h4 id=setMediaVolume>void setMediaVolume(int level)</h4>

  + **功能**:  设置影音播放的音量
 
 + **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| level| int |    影音播放的音量，类型范围（0-255）| 

<h4 id=getMediaVolume>int getMediaVolume()</h4>

  + **功能**:  读取影音播放的音量
  
  + **返回值**:  影音播放的音量，类型范围（0-255）


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String |    用户id| 


<h4 id=setPicResource>void setPicResource(String resID, Bitmap bitmap)</h4>

  + **功能**:  将图片资源设置给sdk
  
  + **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| resID| String |    资源唯一标识 | 
| bitmap| Bitmap |    图片对象，为空代表移除资源| 

<h4>void setPicResource(String resID, String picFile)</h4>

  + **功能**:  将图片资源设置给sdk
 
  + **返回值**:  无
 

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| resID| String |    资源唯一标识 | 
| picFile| Bitmap |    资源文件路径，为空代表移除资源| 
 
<h4>boolean setPicResource(String resID, View view)</h4>

  + **功能**:  将图片资源设置给sdk
 
  + **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| resID| String |    资源唯一标识 | 
| view| View |    控件对象，为空代表移除资源（注：不能是opengl显示控件，必须是在界面已经显示的控件）| 

<h4>boolean setPicResource(String resID, View view, Size size)</h4>

  + **功能**:  将图片资源设置给sdk
  
  + **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| resID| String |    资源唯一标识；| 
| view| Bitmap |    控件对象，为空代表移除资源（注：不能是opengl显示控件，必须是在界面已经显示的控件）| 
| size| Size |    size 图片大小| 


###  通知回调函数

CloudroomVideoCallback是通话建立、音频采集播入、视频采集编解码、屏幕共享、录制、影音播放等功能的回调接口

------

<h4 id=enterMeetingRslt>void enterMeetingRslt(CRVIDEOSDK_ERR_DEF sdkErr)</h4>

  + **功能**:  自己进入房间的结果
  
  + **返回值**:  无
      
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|    操作结果码 | 
| cookie| String|    自定义用户数据| 

<h4 id=setNickNameRsp>void setNickNameRsp(CRVIDEOSDK_ERR_DEF sdkErr, String userid, String newName)</h4>

  + **功能**:  设置昵称的结果
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|    操作结果码 | 
| userid| String|    用户id| 
| newName| String|    新的昵称| 

<h4 id=notifyNickNameChanged>void notifyNickNameChanged(String userID, String oldName, String newName)</h4>

  + **功能**:  某用户改变了昵称(改昵称的用户自身不会接收到此通知)
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    改变昵称的某用户id| 
| oldName| String|    改变昵称的某用户昵称(改变之前的昵称)| 
| newName| String|    改变昵称的某用户昵称(改变之后的昵称)| 

<h4 id=userEnterMeeting>void userEnterMeeting(String userID)</h4>

  + **功能**:  某用户进入了房间
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    进入房间的用户id| 

<h4 id=userLeftMeeting>void userLeftMeeting(String userID)</h4>

  + **功能**:  某用户离开了房间
  
  + **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    离开房间的用户id| 

<h4 id=meetingDropped>void meetingDropped(CRVIDEOSDK_MEETING_DROPPED_REASON reason)</h4>

  + **功能**:  通知从房间里掉线了，收到该通知后可以调用enterMeeting尝试重新入会
  
  + **返回值**:  无
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| [CRVIDEOSDK_MEETING_DROPPED_REASON](Constant.md#CRVIDEOSDK_MEETING_DROPPED_REASON)|    掉线原因 | 
  
- <p style="color:red; font-size:20px">注意事项:</p>

  + 如果用到了呼叫队列，掉线后不重新入会就必须调用hangupCall释放本次呼叫


<h4 id=meetingStoped>void meetingStoped()</h4>

  + **功能**:  房间已被结束
  
  + **返回值**:  无
 

<h4 id=netStateChanged>void netStateChanged(int level)</h4>

  + **功能**:  网络变化通知
  
  + **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| level| int|    网络状况等级(0~10，10分为最佳网络)| 

<h4 id=audioDevChanged>void audioDevChanged()</h4>

  + **功能**:  通知本地音频设备有变化
  
  + **返回值**:  无
 

<h4 id=audioStatusChanged>void audioStatusChanged(String userID, ASTATUS oldStatus, ASTATUS newStatus)</h4>

  + **功能**:  通知音频状态变化
  
  
  + **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    房间中设备的所有者| 
| oldStatus| [ASTATUS](Constant.md#ASTATUS)|    旧状态| 
| newStatus| [ASTATUS](Constant.md#ASTATUS)|    新状态| 

<h4 id=micEnergyUpdate>void micEnergyUpdate( String userID, int oldLevel, int newLevel)</h4>

  + **功能**:  通知用户的说话声音强度更新
  
  + **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    用户标识ID| 
| oldLevel| int|    原来的说话声音强度(0~10)| 
| newLevel| int|    现在的说话声音强度(0~10)| 
 
<h4 id=openVideoRslt>void openVideoRslt(String devID, boolean bSuccess)</h4>

  + **功能**:  打开摄像头设备操作结果
  
  + **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| devID| String|    摄像头设备ID| 
| bSuccess| boolean|    是否成功| 

<h4 id=videoStatusChanged>void videoStatusChanged(String userID, VSTATUS oldStatus, VSTATUS newStatus)</h4>

  + **功能**:  视频状态变化
  
  + **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    房间中设备的所有者| 
| oldStatus| [VSTATUS](Constant.md#VSTATUS)|    旧状态| 
| newStatus| [VSTATUS](Constant.md#VSTATUS)|    新状态| 
 
<h4 id=videoDevChanged>void videoDevChanged(String userID)</h4>

  + **功能**:  通知用户的视频设备有变化
  
  + **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| String| String|    设备变化的用户ID| 

<h4 id=notifyVideoData>void notifyVideoData(UsrVideoId usrVideoID, long frameTime)</h4>

  + **功能**:  通知用户有新的视频数据
  
  + **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| usrVideoID| [UsrVideoId](TypeDefinitions.md#UsrVideoId)|    用户摄像头标识ID|  
| frmTime| long|    图像的创建时间，可用作时间戳|  

<h4 id=defVideoChanged>void defVideoChanged(String userID, short videoID)</h4>

  + **功能**:  通知用户的视频默认设备有变化
  
  + **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    设备变化的用户ID|  

<h4 id=uploadRecordFileErr>void uploadRecordFileErr(String fileName, int err)</h4>

  + **功能**:  上传录制文件错误通知
  
  + **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName| String|    上传文件名|  
| err| int|    操作失败代码|  

<h4 id=cancelUploadRecordFileErr>void cancelUploadRecordFileErr(int sdkErr)</h4>

  + **功能**:  取消上传错误通知
  
  + **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| int|    操作失败代码|  


<h4 id=locMixerStateChanged>void locMixerStateChanged(String mixerID, MIXER_STATE state)</h4>

  + **功能**:  本地混图器状态变化通知
  
  + **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| String|    混图器唯一标识|  
| state| [MIXER_STATE](Constant.md#MIXER_STATE)|    状态|  

<h4 id=locMixerOutputInfo>void locMixerOutputInfo(String mixerID, String nameOrUrl, MixerOutputInfo outputInfo)</h4>

  + **功能**:  本地录制文件、本地直播信息通知
  
  + **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| String|    混图器唯一标识|  
| nameOrUrl| String|    录像名称、或直播url|  
| outputInfo| [MixerOutputInfo](TypeDefinitions.md#MixerOutputInfo)|    通知内容|  
 
<h4 id=svrMixerStateChanged>void svrMixerStateChanged(MIXER_STATE state, int err，String operatorID)</h4>

  + **功能**:  云端录制、云端直播状态变化通知
  
  + **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| state| [MIXER_STATE](Constant.md#MIXER_STATE)|    状态值|  
| err| int|    错误值，请参考[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|  
| operatorID| String|    引起变化的用户id| 

<h4 id=svrMixerCfgChanged>void svrMixerCfgChanged()</h4>

  + **功能**:  云端录制、云端直播内容变化通知
 
  + **返回值**:  无
  

<h4 id=svrMixerOutputInfo>void svrMixerOutputInfo(MixerOutputInfo info)</h4>

  + **功能**:  云端录制文件、云端直播信息变化通知
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| outputInfo| [MixerOutputInfo](TypeDefinitions.md#MixerOutputInfo)|    通知内容|  

<h4 id=startScreenShareRslt>void startScreenShareRslt(CRVIDEOSDK_ERR_DEF sdkErr)</h4>

- **功能**: 开启屏幕共享的响应事件

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| sdkEr  | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |  错误码 |


<h4 id=stopScreenShareRslt>void stopScreenShareRslt(int sdkErr)</h4>

- **功能**停止屏幕共享的响应事件

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| sdkEr  | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  | 错误码  |

<h4 id=notifyScreenShareStarted>void notifyScreenShareStarted()</h4>

  + **功能**:  通知他人开启了屏幕共享
  
  + **返回值**:  无
 

<h4 id=notifyScreenShareStopped>void notifyScreenShareStopped()</h4>

  + **功能**:  通知他人停止了屏幕共享
  
  + **返回值**:  无
     

<h4 id=startScreenMarkRslt>void startScreenMarkRslt(CRVIDEOSDK_ERR_DEF sdkErr)</h4>

- **功能**: 开始屏幕标注结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| sdkEr  | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |  错误码 |


<h4 id=stopScreenMarkRslt>void stopScreenMarkRslt(int sdkErr)</h4>

- **功能**: 停止屏幕标注结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| sdkEr  | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  | 错误码  |

<h4 id=notifyScreenMarkStarted>void notifyScreenMarkStarted()</h4>

  + **功能**:  通知屏幕标注开始
  
  + **返回值**:  无
 

<h4 id=notifyScreenMarkStopped>void notifyScreenMarkStopped()</h4>

  + **功能**:  通知屏幕标注停止
  
  + **返回值**:  无
     

<h4 id=notifySwitchToPage>void notifySwitchToPage(MAIN_PAGE mainPage, [SubPage](TypeDefinitions.md#SubPage) pageID)</h4>

  + **功能**:  通知功能切换
 
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mainPage| [MAIN_PAGE](Constant.md#MAIN_PAGE)|    功能类型 |   
| pageID| [SubPage](TypeDefinitions.md#SubPage)|    子页面标识 |   

<h4 id=notifyVideoWallMode>void notifyVideoWallMode(VIDEO_WALL_MODE model)</h4>

  + **功能**:  通知视频分屏模式切换
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| model| [VIDEO_LAYOUT_MODE](Constant.md#VIDEO_LAYOUT_MODE)|    分屏模式|   

<h4 id=notifyMainVideoChanged>void notifyMainVideoChanged()</h4>

  + **功能**:  通知主视频更改
  
  + **返回值**:  无

  + **参数**:  无

 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    主视频用户ID|  

<h4 id=notifyInitBoards>void notifyInitBoards(ArrayList&lt;SubPageInfo&gt; boards)</h4>

  + **功能**:  SDK入会后通知房间中已经存在的白板列表
  
  + **返回值**:  无
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boards| ArrayList&lt;[SubPageInfo](TypeDefinitions.md#SubPageInfo)&gt;|    已经创建好的白板列表 |  

<h4 id=notifyInitBoardPageDat>void notifyInitBoardPageDat(SubPage boardID, int boardPageNo, String imgID, String elementDatas,String operatorID)</h4>

  + **功能**:  初始化白板页数据
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage)|    白板标识|  
| boardPageNo| int|    白板页序号|  
| imgID| String|    页背景文件ID（空代表无背景）, 使用downloadNetDiskDocFile进行下载 |  
| elementDatas| String|    此页的所有图元,白板图元数据Json数组，详见定义[BoardElement](TypeDefinitions.md#BoardElement) |  
| operatorID| String|    初始化用户（为空时，代表入会时后台事件）|  
 
<h4 id=notifyCreateBoard>void notifyCreateBoard(SubPageInfo board, String operatorID)</h4>

  + **功能**:  通知创建白板
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| board| [SubPageInfo](TypeDefinitions.md#SubPageInfo)|    白板信息|  
| operatorID| String|    创建白板的用户ID|  

<h4 id=notifyCloseBoard>void notifyCloseBoard(SubPage boardID, String operatorID)</h4>

  + **功能**:  通知关闭白板
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage)|    白板标识|  
| operatorID| String|    关闭白板的用户ID|  
 
<h4 id=notifyAddBoardElement>void notifyAddBoardElement(SubPage boardID, int boardPageNo, String element, String operatorID)</h4>

  + **功能**:  通知添加图元信息
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage)|    白板标识|  
| boardPageNo| int|    白板页序号|  
| element| String|    图元信息, Json数据格式详见定义[BoardElement](TypeDefinitions.md#BoardElement)|  
| operatorID| String|    添加图元的用户ID|  
 
<h4 id=notifyModifyBoardElement>void notifyModifyBoardElement(SubPage boardID, int boardPageNo, String element, String operatorID)</h4>

  + **功能**:  通知图元信息被修改
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage)|    白板标识|  
| boardPageNo| int|    白板页序号|  
| element| String|    图元信息, Json数据格式详见定义[BoardElement](TypeDefinitions.md#BoardElement)|  
| operatorID| String|    添加图元的用户ID|  
 
<h4 id=notifyDelBoardElement>void notifyDelBoardElement(SubPage boardID, int boardPageNo, ArrayList&lt;String&gt; elementIDs, String operatorID)</h4>

  + **功能**:  通知图元被删除
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage)|    白板标识|  
| boardPageNo| int|    白板页序号|  
| elementIDs| ArrayList&lt;String&gt;|    图元id列表|  
| operatorID| String|    添加图元的用户ID|  

<h4 id=notifyMouseHotSpot>void notifyMouseHotSpot(SubPage boardID, int boardPageNo, int x, int y, String operatorID)</h4>

  + **功能**:  通知鼠标热点消息
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage)|    白板标识|  
| x| int|    屏幕横坐标|  
| y| int|    屏幕纵坐标|  
| operatorID| String|    添加图元的用户ID|  

<h4 id=notifyBoardCurPageNo>void notifyBoardCurPageNo(SubPage boardID, int boardPageNo, int pagePos1, int pagePos2)</h4>

  + **功能**:  通知白板翻页
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage)|    白板标识|  
| boardPageNo| int|    白板的页序号(0为第一页)|  
| pagePos1| int|    私有扩展参数1（如可用于页内x方向滚动位置）|  
| pagePos2| int|     私有扩展参数2（如可用于页内y方向滚动位置）|  
 
<h4 id=notifyRecordFileStateChanged>void notifyRecordFileStateChanged(String fileName, int state)</h4>

  + **功能**:  通知录制文件状态更改
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName| String|    本地文件路径|  
| state| int|    状态，0未上传，1上传中，2已上传，3上传失败|  

<h4 id=uploadRecordFileSuccess>void uploadRecordFileSuccess(String fileName, String fileUrl)</h4>

  + **功能**:  通知录制文件上传成功
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName| String|    本地文件路径|  
| fileUrl| String|    服务端录制文件地址|  

<h4 id=notifyRecordFileUploadProgress>void notifyRecordFileUploadProgress(String fileName, int percent)</h4>

  + **功能**:  通知录制文件上传进度
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName| String|    本地文件路径|  
| percent| int|    进度0-100|  

<h4 id=startGetAudioPCM>int startGetAudioPCM(int aSide, int getType, String jsonParam)</h4>

- **功能**: 开始获取语音pcm数据

- **返回值**:返回值 整形数值，1：正常，0：失败(int)

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|aSide|	int|	声道类型 0:麦克风，1:扬声器|
|getType	|int|	获取方式 0:回调方式，1:保存为文件|
|jsonParam	|String	|当getType=0 表示回调方式，jsonParam可配置回调的数据大小(320-32000)，如: {"EachSize":320};当getType=1 表示保存为文件，jsonParam可配置文件名，如: { "FileName" ： "/sdcard/test.pcm" }|


<h4 id=stopGetAudioPCM>void stopGetAudioPCM(aSide)</h4>

- **功能**: 停止获取语音pcm数据

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|aSide	| int| 	声道类型 0:麦克风，1:扬声器|


<h4 id=notifyMediaOpened>void notifyMediaOpened(int totalTime, Size picSZ)</h4>

  + **功能**:  通知影音文件打开
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| totalTime| long|    影音时长(毫秒)|  
| picSZ| Size|    宽高|  


<h4 id=notifyMediaStart>void notifyMediaStart(String userid)</h4>

  + **功能**:  通知影音开始播放
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userid| String|     操作者的用户id|  

<h4 id=notifyMediaPause>void notifyMediaPause(String userid, boolean bPause)</h4>

  + **功能**:  通知设置鼠标热点消息
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userid| String|     操作者的用户id|   
| bPause| boolean|      是否暂停|   

<h4 id=notifyMediaStop>void notifyMediaStop(String userid, int reason)</h4>

  + **功能**:  通知影音播放停止
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userid| String|     操作者的用户id|   
| reason| int|      播放停止原因，数值参考MEDIA_STOP_REASON|    

<h4 id=notifyPlayPosSetted>void notifyPlayPosSetted(int setPTS)</h4>

  + **功能**:  通知播放进度已设置完成
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| setPTS| int|     播放进度|   
 
<h4 id=notifyMemberMediaData>void notifyMemberMediaData(String userid, int curPos)</h4>

  + **功能**:  通知影音帧数据已解码完毕
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userid| String|     操作者的用户id|   
| curPos| int|     该影音帧的时间，毫秒为单位|  

- <p style="color:red; font-size:20px">注意事项:</p>

  + 收到此通知消息后，可通过getMediaImg获取图像显示；但如果之前显示的帧时戳更大，说明此通知消息已过时，直接忽略即可 如果使用了影音共享UI显示方式，不再需要自已关注此事件和进行显示处理

 
<h4 id=notifyAudioPCMDat>void notifyAudioPCMDat(int aSide, byte[] audioDat)</h4>

  + **功能**:  通知语音PCM数据
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| aSide| int|     声道类型|   
| audioDat| byte[]|     PCM数据|  
 
<h4 id=listNetDiskDocFileRslt>void listNetDiskDocFileRslt(String dir, CRVIDEOSDK_ERR_DEF sdkERR, NetDiskDocDir docDir)</h4>

  + **功能**:  通知查询文档列表结果
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| dir| String|     查询的目录|   
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|     操作结果 |  
| docDir| [NetDiskDocDir](TypeDefinitions.md#NetDiskDocDir)|     成功时的查询的结果 |  

<h4 id=getNetDiskDocFilePageInfoRslt >void getNetDiskDocFilePageInfoRslt(String svrPathFileName, CRVIDEOSDK_ERR_DEF sdkErr, NetDiskDocFilePageInfo pageInfo)</h4>

  + **功能**:  通知查询文档转换结果
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| svrPathFileName| String|     查询的文档名|   
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|     操作结果|  
| pageInfo| [NetDiskDocFilePageInfo](TypeDefinitions.md#NetDiskDocFilePageInfo)|     成功的查询的结果|  

<h4 id=deleteNetDiskDocFileRslt>void deleteNetDiskDocFileRslt(String svrPathFileName, CRVIDEOSDK_ERR_DEF sdkERR)</h4>

  + **功能**:  通知删除文档结果
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| svrPathFileName| String|     查询的文档名|   
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|     操作结果|  

<h4 id=notifyNetDiskDocFileTrsfProgress>void notifyNetDiskDocFileTrsfProgress(String svrPathFileName, int percent)</h4>

  + **功能**:  通知文档传输进度
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| svrPathFileName| String|     查询的文档名|   
| percent| int|     传输进度（等于100代表传输完成）|  

<h3 id=CloudroomQueue >5. 队列组件（CloudroomQueue）的接口函数</h3>

><font size=4>CloudroomQueue 是队列组件，实现队列功能，目的是为了实现用户自动分配。，整个程序的生命过程中只能有一个实例。</font>

----

<h4 id=CloudroomQueue_registerCallBack>void registerCallBack(CloudroomQueueCallback callBack)</h4>

  + **功能**:  注册监听回调
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callBack| CloudroomQueueCallback |    回调对象| 

<h4 id=CloudroomQueue_unregisterCallBack>void unregisterCallBack(CloudroomQueueCallback callBack)</h4>

  + **功能**:  反注册监听回调
  
  + **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callBack| CloudroomQueueCallback |    指定的反注册回调对象| 

<h4 id=initQueue>void initQueue(String cookie)</h4>

  + **功能**:  初始化用户队列功能数据
  
  + **返回值**:  无
>回调函数[initQueueDatRslt](#initQueueDatRslt)
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cookie| String |    自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

- <p style="color:red; font-size:20px">注意事项:</p>

  + 在响应回调initQueueDatRslt初始化成功后，才可获取队列队列相关信息


<h4 id=refreshAllQueueStatus>void refreshAllQueueStatus()</h4>

  + **功能**:  刷新所有队列状态信息
  
  + **返回值**:  无
>回调函数[queueStatusChanged](#queueStatusChanged)
 
- <p style="color:red; font-size:20px">注意事项:</p>

  + 当前排队的队列或服务的队列，sdk自动有状态变化回调；其它队列则需要此函数来查询


<h4 id=getAllQueueInfo>ArrayList&lt;QueueInfo&gt; getAllQueueInfo()</h4>

  + **功能**:  获取队列信息
  
  + **返回值**:  ArrayList&lt;[QueueInfo](TypeDefinitions.md#QueueInfo)&gt;-队列信息列表
 
<h4 id=getQueueStatus>QueueStatus getQueueStatus(int queID)</h4>

  + **功能**:  获指定取队列状态
  
  + **返回值**:  [QueueStatus](TypeDefinitions.md#QueueStatus)-队列状态
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| queID| int |    队列ID|   

<h4 id=getQueuingInfo>QueuingInfo getQueuingInfo()</h4>

  + **功能**:  功能获取我的排队信息
  
  + **返回值**:  [QueuingInfo](TypeDefinitions.md#QueuingInfo)-我的排队信息


<h4 id=getServiceQueues>ArrayList&lt;Integer&gt; getServiceQueues()</h4>

  + **功能**:  获取我服务的所有队列
  
  + **返回值**:  队列ID列表


<h4 id=getSessionInfo>VideoSessionInfo getSessionInfo()</h4>

  + **功能**:  获取我的会话信息
  
  + **返回值**:  [VideoSessionInfo](TypeDefinitions.md#VideoSessionInfo)-我的会话信息


<h4 id=startQueuing>void startQueuing(int queID, String usrExtDat, String cookie)</h4>

  + **功能**:  客户开始排队
  
  + **返回值**:  无
>回调函数[startQueuingRslt](#startQueuingRslt) 
    
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| queID| int |    排队的队列ID|   
| usrExtDat| String |    用户排队扩展数据|   
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串|   

<h4 id=stopQueuing>void stopQueuing(String cookie)</h4>

  + **功能**:  客户停止排队
  
  + **返回值**:  无
>回调函数[stopQueuingRslt](#stopQueuingRslt)     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串|  

<h4 id=startService>void startService(int queID, String cookie)</h4>

  + **功能**:  开始服务某个队列(可以多次调用，开启对多个队列的服务)
  
  + **返回值**:  无
>回调函数[startServiceRslt](#startServiceRslt)        

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| queID| int |    排队的队列ID|   
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串|  
 
<h4 id=startService>void startService(int queID, int priority, String cookie)</h4>

  + **功能**:  开始服务某个队列(可以多次调用，开启对多个队列的服务)
  
  + **返回值**:  无
>回调函数[startServiceRslt](#startServiceRslt)     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| queID| int |    排队的队列ID|   
| priority| int |    座席优先级（缺省为0, 0为最高优先级, 值越大优先级越低)|   
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串|  

- <p style="color:red; font-size:20px">注意事项:</p>

  + 如果没有开启免打扰，那么系统会自动分配客户：将收到事件autoAssignUser
  + 如果开启免打扰，系统就不会分配客户，如需服务客户可调用reqAssignUser
  + 座席优先级描述
  
	+ 座席优先级只在服务的队列内部有效；
	+ 客户优先分配给服务此队列优先级最高的，且空闲的座席；
	+ 优先级相同时，则分配给最先空闲的座席；
	+ 优先级高的座席变空闲时，不抢夺已分配的客户；


<h4 id=stopService>void stopService(int queID, String cookie)</h4>

  + **功能**:  停止服务某个队列
  
  + **返回值**:  无   
>回调函数[stopServiceRslt](#stopServiceRslt)   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| queID| int |    排队的队列ID|    
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串|  

<h4 id=reqAssignUser>void reqAssignUser(String cookie)</h4>

  + **功能**:  请求分配一个客户
  
  + **返回值**:  无
>回调函数[reqAssignUserRslt](#reqAssignUserRslt)   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串|  

- <p style="color:red; font-size:20px">注意事项:</p>

  + 当关闭免打扰时，系统将自动分配客户，无需调用此函数
  + 当开启免打扰时，系统不再自动分配客户，座席如需服务客户可使用此函数分配

<h4 id=acceptAssignUser>void acceptAssignUser(int queID, String userID, String cookie)</h4>

  + **功能**:  接受系统安排的客户
  
  + **返回值**:  无    
>回调函数[reqAssignUserRslt](#reqAssignUserRslt) 

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| queID| int |    排队的队列ID| 
| userID| String |    队列中的用户ID| 
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h4 id=rejectAssignUser>void rejectAssignUser(int queID, String userID, String cookie)</h4>

  + **功能**:  拒绝系统安排的客户
  
  + **返回值**:  无
>回调函数[reqAssignUserRslt](#reqAssignUserRslt) 

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| queID| int |    排队的队列ID| 
| userID| String |    队列中的用户ID| 
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

###  通知回调函数

CloudroomQueueCallback 是队列回调接口
 
------
 
<h4 id=initQueueDatRslt>void initQueueDatRslt(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h4>

  + **功能**:  队列初始化操作结果
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) |    操作结果代码，成功为CRVIDEOSDK_NOERR| 
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串|  

<h4 id=queueStatusChanged>void queueStatusChanged(QueueStatus queStatus)</h4>

  + **功能**:  队列状态变化通知
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| queStatus| [QueueStatus](TypeDefinitions.md#QueueStatus) |    新的队列状态 | 

- <p style="color:red; font-size:20px">注意事项:</p>

  + 在排队的队列、或服务的队列发生变化时，将有队列状态变化通知到来
  + 在调用refreshAllQueueStatus时，查询到的队列数据有变化时，会有通知到来
 
<h4 id=queuingInfoChanged>void queuingInfoChanged(QueuingInfo queuingInfo)</h4>

  + **功能**:  排队信息变化通知
  
  + **返回值**:  无  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| queuingInfo| [QueuingInfo](TypeDefinitions.md#QueuingInfo) |    排队信息 | 

<h4 id=startQueuingRslt>void startQueuingRslt(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h4>

  + **功能**:  开始排队操作结果
  
  + **返回值**:  无    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) |    操作结果代码，CRVIDEOSDK_NOERR为成功操作 | 
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h4 id=stopQueuingRslt>void stopQueuingRslt(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h4>

  + **功能**:  停止排队操作结果
  
  + **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) |    操作结果代码，CRVIDEOSDK_NOERR为成功操作| 
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h4 id=startServiceRslt>void startServiceRslt(int queID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h4>

  + **功能**:  开始服务队列操作结果
  
  + **返回值**:  无  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| queID| int |    排队的队列ID| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) |    操作结果代码，CRVIDEOSDK_NOERR为成功操作| 
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h4 id=stopServiceRslt>void stopServiceRslt(int queID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h4>

  + **功能**:  停止服务队列操作结果
  
  + **返回值**:  无  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| queID| int |    排队的队列ID| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) |    操作结果代码，CRVIDEOSDK_NOERR为成功操作| 
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h4 id=reqAssignUserRslt>void reqAssignUserRslt(CRVIDEOSDK_ERR_DEF sdkErr, UserInfo usr, String cookie)</h4>

  + **功能**:  停止服务队列操作结果
  
  + **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) |    操作结果代码，CRVIDEOSDK_NOERR为成功操作| 
| usr| [UserInfo](TypeDefinitions.md#UserInfo) |    请求到的队列用户 | 
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h4 id=autoAssignUser>void autoAssignUser(UserInfo usr)</h4>

  + **功能**:  队列系统自动分配客户
  
  + **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| usr| [UserInfo](TypeDefinitions.md#UserInfo) |    请求到的队列用户 | 

- <p style="color:red; font-size:20px">注意事项:</p>

  + 如果想停止系统的自动分配，请调用CloudroomVideoMgr中的 setDNDStatus 设置免打扰功能。

<h4 id=cancelAssignUser>void cancelAssignUser(int queID, String userID)</h4>

  + **功能**:  队列系统取消之前自动分配的的客户
  
  + **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| queID| int |    服务的队列| 
| userID| String |    自动分配用户被取消| 

<h4 id=responseAssignUserRslt>void responseAssignUserRslt(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h4>

  + **功能**:  拒绝、接受分配的用户
  
  + **返回值**:  无   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) |    操作结果代码，CRVIDEOSDK_NOERR为成功操作 | 
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

- <p style="color:red; font-size:20px">注意事项:</p>

  + 队列系统通过接口autoAssignUser给开始队列服务的人自动推送用户，收到系统分配的用户后，
如果队列服务者还未决定接受acceptAssignUser还是拒绝rejectAssignUser推送的用户，系统可用取消本次推送，
并通过本接口通知队列服务者。


<h3 id=CloudroomHttpFileMgr >6. Http文件传输组件（CloudroomHttpFileMgr）的接口函数</h3>

><font size=4>CloudroomHttpFileMgr是Http文件传输组件，实现Http文件上传下载、及文件管理。</font>

----

<h4 id=CloudroomHttpFileMgr_registerCallBack>void registerCallBack(CloudroomHttpFileMgrCallback callBack)</h4>

  + **功能**:  注册监听回调
  
  + **返回值**:  无    
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callBack| CloudroomHttpFileMgrCallback |    回调对象| 

<h4 id=CloudroomHttpFileMgr_unregisterCallBack>void unregisterCallBack(CloudroomHttpFileMgrCallback callBack)</h4>

  + **功能**:  反注册监听回调
  
  + **返回值**:  无   
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callBack| CloudroomHttpFileMgrCallback |    指定的反注册回调对象| 

<h4 id=startMgr>void startMgr()</h4>

  + **功能**:  启动Http文件文件组件运行
  
  + **返回值**:  无 
 
- <p style="color:red; font-size:20px">注意事项:</p>

  + 在调用CloudroomVideoSDK的 init 初始化SDK后后方可调用

<h4 id=stopMgr>void stopMgr()</h4>

  + **功能**:  停止Http文件文件组件运行
  
  + **返回值**:  无

<h4 id=getAllTransferInfos>ArrayList&lt;FileTransInfo&gt; getAllTransferInfos()</h4>

  + **功能**:  获取本地上传、下载文件信息
  
  + **返回值**:  ArrayList&lt;[FileTransInfo](TypeDefinitions.md#FileTransInfo)&gt;-文件信息 

<h4 id=startTransferFile>void startTransferFile(HttpReqInfo info)</h4>

  + **功能**:  开始下载/上传文件
  
  + **返回值**:  无  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| info| [HttpReqInfo](TypeDefinitions.md#HttpReqInfo) |    上传文件信息| 

- <p style="color:red; font-size:20px">注意事项:</p>

  + 上传不支持断点续传； 下载支持断点续传；如果文件传输完成，且fileVersion一致，下次再请求时会立即报告完成。
 
<h4 id=cancelFileTransfer>void cancelFileTransfer(String fileName)</h4>

  + **功能**:  取消传输
  
  + **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName| String |    本地路径文件名| 

- <p style="color:red; font-size:20px">注意事项:</p>
1. 取消时，只是停止了传输任务，不清理记录及断点文件。

<h4 id=rmTransferInfo>void rmTransferInfo(String fileName, int bRemoveLocFile)</h4>

  + **功能**:  删除传输记录及相关文件
  
  + **返回值**:  无
    
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName | String |    本地路径文件名   | 
| bRemoveLocFile | int |    是否移除本地文件   | 

- <p style="color:red; font-size:20px">注意事项:</p>

  + 此接口将文件从管理器中移除（getAllTransferInfos将不再返回相关信息），如果bRemoveLocFile为1时， 那么上传的源始文件、下载的临时文件或结果文件都将被移除。


###  通知回调函数

CloudroomHttpFileMgrCallback是Http上传下载通知回调接口
 
 ------

<h4 id=fileStateChanged>void fileStateChanged(String fileName, HTTP_TRANSFER_STATE state)</h4>

  + **功能**:  通知用户文件状态更改
  
  + **返回值**:  无 

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName| String |    本地路径文件名   | 
| state| [HTTP_TRANSFER_STATE](Constant.md#HTTP_TRANSFER_STATE) |    状态 | 

<h4 id=fileProgress>void fileProgress(String fileName, int finisedSize, int totalSize)</h4>

  + **功能**:  通知用户文件的传输进度
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName| String |    本地路径文件名   | 
| finisedSize| int |    已传输大小| 
| totalSize| int |    文件总大小| 
 
<h4 id=fileFinished>void fileFinished(String fileName, int rslt)</h4>

  + **功能**:  通知用户文件传输结束
  
  + **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName| String |    本地路径文件名   | 
| rslt| int |    传输结果，详见定义 [HTTP_TRANSFER_STATE](Constant.md#HTTP_TRANSFER_STATE)|

<h4 id=getMeetingAllAttrs>void getMeetingAllAttrs(String cookie)</h4>

- **功能**:获取房间所有属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h4 id=getMeetingAttrs >void getMeetingAttrs(List&lt;String&gt; keys, String cookie)</h4>

- **功能**:获取房间部份属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|keys|    List&lt;String>  |需要查询的房间属性key|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h4 id=setMeetingAttrs >void setMeetingAttrs(HashMap&lt;String, String&gt; attrs, HashMap&lt;String, Object&gt; options, String cookie)</h4>

- **功能**:重置房间属性集

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|attrs|    HashMap&lt;String, String>  |房间属性集，key最大长度为64B，value最大长度为8KB|
|options|    HashMap&lt;String, Object>  |操作选项|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h4 id=addOrUpdateMeetingAttrs >void addOrUpdateMeetingAttrs(HashMap&lt;String, String&gt; attrs, HashMap&lt;String, Object&gt; options, String cookie)</h4>

- **功能**:增加或者更新房间属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|attrs|    HashMap&lt;String, String>  |房间属性集,json格式，key最大长度为64B，value最大长度为8KB|
|options|    HashMap&lt;String, Object>  |操作选项|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h4 id=delMeetingAttrs >void delMeetingAttrs(List&lt;String&gt; keys, HashMap&lt;String, Object&gt; options, String cookie)</h4>

- **功能**:删除房间属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|keys|    List&lt;String>  |需要删除的房间属性key，json格式，如["key1","key2"]|
|options|    HashMap&lt;String, Object>  |操作选项|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h4 id=clearMeetingAttrs >void clearMeetingAttrs(HashMap&lt;String, Object&gt; options, String cookie)</h4>

- **功能**:清除房间所有属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|options|    HashMap&lt;String, Object>  |操作选项|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h4 id=getUserAttrs >void getUserAttrs(String uids, List&lt;String&gt; keys, String cookie)</h4>

- **功能**:获取指定用户的指定属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|uids|    string  |目标用户id列表，一次最多包含50个用户，json格式， 如：["uid1","uid2"]|
|keys|    List&lt;String>  |将要获取的用户属性key列表（空串代表获取全部），json格式，如：["key1","key2"]|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h4 id=setUserAttrs >void setUserAttrs(String uid, string attrs, HashMap&lt;String, Object&gt; options, String cookie)</h4>

- **功能**:重置用户属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|uid|    String  |目标用户id|
|attrs|    HashMap&lt;String, String>  |用户属性集, json格式，如：{"key1":"value1", "key2":"value2"} (key最大长度为64B，value最大长度为8KB)|
|options|    HashMap&lt;String, Object>  |操作选项|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h4 id=addOrUpdateUserAttrs >void addOrUpdateUserAttrs(String uid, string attrs, HashMap&lt;String, Object&gt; options, String cookie)</h4>

- **功能**:增加或更新用户属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|uid|    String  |目标用户id|
|attrs|    HashMap&lt;String, String>  |用户属性集, json格式，如：{"key1":"value1", "key2":"value2"} (key最大长度为64B，value最大长度为8KB)|
|options|    HashMap&lt;String, Object>  |操作选项|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h4 id=delUserAttrs >void delUserAttrs(String uid, List&lt;String&gt; keys, HashMap&lt;String, Object&gt; options, String cookie)</h4>

- **功能**:删除用户的特定属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|uid|    String  |目标用户id|
|keys|    List&lt;String>  |需要删除的用户属性key列表，json格式，如：["key1","key2"]|
|options|    HashMap&lt;String, Object>  |操作选项|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h4 id=clearAllUserAttrs >void clearAllUserAttrs(HashMap&lt;String, Object&gt; options, String cookie)</h4>

- **功能**:清除所有用户的所有属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|options|    HashMap&lt;String, Object>  |操作选项|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h4 id=clearUserAttrs >void clearUserAttrs(String uid, HashMap&lt;String, Object&gt; options, String cookie)</h4>

- **功能**:清除特定用户的所有属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|uid|    String  |目标用户id|
|options|    HashMap&lt;String, Object>  |操作选项|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h4 id=sendMeetingCustomMsg>void sendMeetingCustomMsg(String text, String cookie)</h4>

- **功能**:发送房间内自定义广播消息

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|text|    String  |用户自定义消息|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|

>回调函数[sendMeetingCustomMsgRslt](#sendMeetingCustomMsgRslt)


<h4 id=getMeetingAllAttrsSuccess > void getMeetingAllAttrsSuccess(string attrs, String cookie) </h4>

- **功能**:成功获取到房间所有属性

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| attrs|    HashMap&lt;String, String>  | 房间属性集|
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |



<h4 id=getMeetingAllAttrsFail > void getMeetingAllAttrsFail(CRVIDEOSDK_ERR_DEF err, String cookie) </h4>

- **功能**:获取房间属性失败

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |错误码，错误码为CRVIDEOSDK_NOERR表示没有错误 |
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |



<h4 id=getMeetingAttrsSuccess > void getMeetingAttrsSuccess(string attrs, String cookie) </h4>

- **功能**:成功获取到房间指定属性

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| attrs|    HashMap&lt;String, String>  | 房间属性集|
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |



<h4 id=getMeetingAttrsFail > void getMeetingAttrsFail(CRVIDEOSDK_ERR_DEF err, String cookie) </h4>

- **功能**:获取房间指定属性失败

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |错误码，错误码为CRVIDEOSDK_NOERR表示没有错误 |
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |




<h4 id=setMeetingAttrsRslt > void setMeetingAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) </h4>

- **功能**:设置用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |错误码，错误码为CRVIDEOSDK_NOERR表示没有错误 |
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |



<h4 id=addOrUpdateMeetingAttrsRslt > void addOrUpdateMeetingAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) </h4>

- **功能**:增加或更新房间属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |错误码，错误码为CRVIDEOSDK_NOERR表示没有错误 |
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |


<h4 id=delMeetingAttrsRslt > void delMeetingAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) </h4>

- **功能**:删除房间属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |错误码，错误码为CRVIDEOSDK_NOERR表示没有错误 |
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |


<h4 id=clearMeetingAttrsRslt > void clearMeetingAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) </h4>

- **功能**:清除房间属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |错误码，错误码为CRVIDEOSDK_NOERR表示没有错误 |
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |




<h4 id=getUserAttrsSuccess > void getUserAttrsSuccess(HashMap&lt;String, HashMap&lt;String, MeetingAttr&gt;&gt; attrsMap, String cookie) </h4>

- **功能**:获取房间内用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| attrsMap | HashMap&lt;String, HashMap&lt;String, MeetingAttr>>  | 房间属性|
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |



<h4 id=getUserAttrsFail > void getUserAttrsFail(CRVIDEOSDK_ERR_DEF err, String cookie) </h4>

- **功能**:获取房间内用户属性失败

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |错误码，错误码为CRVIDEOSDK_NOERR表示没有错误 |
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |


<h4 id=setUserAttrsRslt > void setUserAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) </h4>

- **功能**:设置用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |错误码，错误码为CRVIDEOSDK_NOERR表示没有错误 |
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |



<h4 id=addOrUpdateUserAttrsRslt > void addOrUpdateUserAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) </h4>

- **功能**:增加或者更新用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |错误码，错误码为CRVIDEOSDK_NOERR表示没有错误 |
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |


<h4 id=delUserAttrsRslt > void delUserAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) </h4>

- **功能**:删除特定用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |错误码，错误码为CRVIDEOSDK_NOERR表示没有错误 |
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |




<h4 id=clearAllUserAttrsRslt > void clearAllUserAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) </h4>

- **功能**:清除所有用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |错误码，错误码为CRVIDEOSDK_NOERR表示没有错误 |
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |



<h4 id=clearUserAttrsRslt > void clearUserAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) </h4>

- **功能**:清除特定用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |错误码，错误码为CRVIDEOSDK_NOERR表示没有错误 |
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |



<h4 id=notifyMeetingAttrsChanged > void notifyMeetingAttrsChanged(HashMap&lt;String, MeetingAttr&gt; adds, HashMap&lt;String, MeetingAttr&gt; updates, List&lt;String&gt; delKeys) </h4>

- **功能**:通知房间属性发生改变

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| adds | HashMap&lt;String, [MeetingAttr](TypeDefinitions.md#MeetingAttr)>  |增加房间属性集 |
| updates | HashMap&lt;String, [MeetingAttr](TypeDefinitions.md#MeetingAttr)>  |变化的房间属性集 |
| delKeys | List&lt;String>  |被删除的房间属性列表 |

<h4 id=notifyUserAttrsChanged > void notifyUserAttrsChanged(String uid, HashMap&lt;String, MeetingAttr&gt; adds, HashMap&lt;String, MeetingAttr&gt; updates, List&lt;String&gt; delKeys) </h4>

- **功能**:通知用户属性发生改变

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| uid | String  |变化的用户id |
| adds | HashMap&lt;String, [MeetingAttr](TypeDefinitions.md#MeetingAttr)>  |增加的用户属性集 |
| updates | HashMap&lt;String, [MeetingAttr](TypeDefinitions.md#MeetingAttr)>  |变化的用户属性集 |
| delKeys | List&lt;String>  |被删除的用户属性列表 |

<h4 id=sendMeetingCustomMsgRslt>void sendMeetingCustomMsgRslt(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h4>

- **功能**:通知发送房间内自定义广播消息结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| sdkErr | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  | 错误码，错误码为CRVIDEOSDK_NOERR表示没有错误|
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |

<h4 id=notifyMeetingCustomMsg>void notifyMeetingCustomMsg(String fromUserID, String text)</h4>

- **功能**:通知收到房间内自定义广播消息

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| fromUserID | String  | 房间内广播消息的发送者的用户id |
| text   | String  | 广播内容  |
