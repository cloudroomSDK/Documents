# API参考

<h2 id=globalAPI>global API</h2>

<h3 id=getVersion>const char* getVersion()</h3>

- **功能**：获取sdk版本号

- **返回值**：版本号字符串


<h2 id=CRVideoSDKMain>class CRVideoSDKMain</h2>


<h3 id=create>static CRVideoSDKMain* create(const char* sdkDatSavePath, const char *jsonParam = "")</h3>
<h3 id=create2>static CRVideoSDKMain *create(const char* sdkDatSavePath, CRMainThreadDispatch *mainThreadDispath, const char *jsonParam = "")</h3>


- **功能**：创建CRVideoSDKMain对象

- **返回值**：CRVideoSDKMain对象

- **参数**：

| 参数| 类型| 含义  |
|:-|:-|:-|
|sdkDatSavePath|char* |SDK工作目录，用于存储配置文件、临时文件、日志等文件;</br>如果传空值，则默认为sdk的安装目录;|
|jsonParam|char* |扩展参数，参见[CRSDKCreateParams](Structs.md#CRSDKCreateParams)|
|mainThreadDispath|[CRMainThreadDispatch](#CRMainThreadDispatch)|主线程消息派发对象，仅linux sdk需要正确传入此参数|

- **jsonParam说明**：

| 参数 | 取值 | 含义 |
|:-|:-|:-|
|Timeout|10000~120000|网络通信超时时间，单位是毫秒, 缺省值:60000 |
|DatEncType|0/1|数据加密类型(缺省值：1)：</br>0:不加密(http、udp)</br>1:加密(https、udp数据des3加密) |


<h3 id=destroy>void destroy()</h3>

- **功能**：消毁CRVideoSDKMain对象

- **返回值**：无


<h3 id=getSDKQueue>CRVideoSDKQueue &getSDKQueue()</h3>

- **功能**：得到sdk的队列管理对象

- **返回值**：CRVideoSDKCall对象



<h3 id=getSDKCall>CRVideoSDKCall &getSDKCall()</h3>

- **功能**：得到sdk的呼叫管理对象

- **返回值**：CRVideoSDKCall对象


<h3 id=getSDKFileTransfer>CRVideoSDKFileTransfer &getSDKFileTransfer()</h3>

- **功能**：得到sdk的文件传输对象

- **返回值**：CRVideoSDKFileTransfer对象


<h3 id=getSDKMeeting>CRVideoSDKMeeting &getSDKMeeting()</h3>

- **功能**：得到sdk的Meeting对象

- **返回值**：CRVideoSDKMeeting对象


<h3 id=CRVideoSDKMain_AddCallBack>void AddCallBack(CRVideoSDKMainCallBack *p)</h3>

- **功能**：增加CRVideoSDKMain的回调对象，可以增加多个；

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|p|[CRVideoSDKMainCallBack*](#CRVideoSDKMainCallBack)|CRVideoSDKMain的回调处理对象|


<h3 id=CRVideoSDKMain_RmCallBack>void RmCallBack(CRVideoSDKMainCallBack *p)</h3>

- **功能**：移除CRVideoSDKMain的回调对象

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|p|[CRVideoSDKMainCallBack*](#CRVideoSDKMainCallBack)|CRVideoSDKMain的回调处理对象|



<h3 id=login>void login(const CRLoginDat &loginDat, const char* cookie = "")</h3>

- **功能**：sdk登录

- **返回值**：无， 登录结果参见[loginRslt](#loginRslt)

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|loginDat|[CRLoginDat](Structs.md#CRLoginDat)|登录相关参数|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|


<h3 id=logout>void logout()</h3>

- **功能**：sdk登出

- **返回值**：无


<h3 id=updateToken>void updateToken(const char* token)</h3>

- **功能**：更新Token， 防止token因过期而掉线。

Token即将到期前30秒左右，将收到通知：[notifyTokenWillExpire](Apis.md#notifyTokenWillExpire)</br>
Token过期后，将引发掉线[notifyLineOff](Apis.md#notifyLineOff)，原因值为CRVSDKERR_TOKEN_TIMEOUT

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|token|char*|Token鉴权码，参见[token鉴权方案说明](loginIdentify.md#tokenMode)|


<h3 id=getUserAuthErrCode>int getUserAuthErrCode()</h3>

- **功能**：获取第三方鉴权错误码

- **返回值**：错误码，值含义第三方鉴权方提供


<h3 id=getUserAuthErrCode>CRString getUserAuthErrDesc()</h3>

- **功能**：获取第三方鉴权错描述串

- **返回值**：[CRString](#CRString)字符串，值由第三方鉴权方自由定义。 


<h3 id=setDNDStatus>void setDNDStatus(int DNDStatus, const char* cookie="")</h3>

- **功能**：开关免打扰。

设置结果请参见[setDNDStatusRslt](#setDNDStatusRslt);</br>
开启免打扰后，他人呼叫本人时，系统自动回绝呼叫，原因为[CRVSDKERR_PEER_BUSY](Constant.md#CRVSDK_ERR_DEF);</br>
开启免打扰后，系统将不再自动为座席分配客户[notifyAutoAssignUser](#notifyAutoAssignUser)，座席可以调用[reqAssignUser](#reqAssignUser)来手动分配客户（叫号模式）;

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|DNDStatus|int|0代表关闭免打扰， 其它值代表开启免打扰，含义自由定义|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|


<h3 id=getUserStatus>void getUserStatus(const char* cookie = "")</h3>

- **功能**：获取本AppID下的所有登录用户的状态信息

结果请参见[getUserStatusSuccess](#getUserStatusSuccess) / [getUserStatusFail](#getUserStatusFail)</br>
只返回在线用户状态信息，获取不到的代表未登录

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|



<h3 id=getOneUserStatus>void getOneUserStatus(const char* userID, const char* cookie = "")</h3>

- **功能**：获取本AppID下指定用户的在线状态

结果请参见[getUserStatusSuccess](#getUserStatusSuccess) / [getUserStatusFail](#getUserStatusFail)

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*|需要查询的UserID, 参见[CRLoginDat](Structs.md#CRLoginDat)的_userID字段|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|



<h3 id=startUserStatusNotify>void startUserStatusNotify(const char* cookie = "")</h3>

- **功能**：开启AppID下的用户登录状态消息推送。

开启后他人状态变化将收到[notifyUserStatus](#notifyUserStatus)通知</br>
开启结果请参见[startUserStatusNotifyRslt](#startUserStatusNotifyRslt)</br>
如果在线用户量很大时，将带来很大的开销请谨慎开启

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|


<h3 id=stopUserStatusNotify>void stopUserStatusNotify(const char* cookie = "")</h3>

- **功能**：关闭appID下的用户在线状态消息推送

结果请参见[stopUserStatusNotifyRslt](#stopUserStatusNotifyRslt)

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|



<h3 id=stopUserStatusNotify>void stopUserStatusNotify(const char* cookie = "")</h3>

- **功能**：关闭appID下的用户在线状态消息推送

结果请参见[stopUserStatusNotifyRslt](#stopUserStatusNotifyRslt)

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|



<h3 id=sendCmd>CRString sendCmd(const char* targetUserId, const CRString& data, const char* cookie = "")</h3>

- **功能**：发送点对点消息

发送结果请参见[sendCmdRlst](#sendCmdRlst)</br>
目标用户将收到通知[notifyCmdData](#notifyCmdData)</br>
房间内群发消息参见[sendMeetingCustomMsg](#sendMeetingCustomMsg)

- **返回值**：[CRString](#CRString) 任务ID

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|targetUserId|char*|目标用户ID， 参见[CRLoginDat](Structs.md#CRLoginDat)的_userID字段|
|data|[CRString](#CRString)|发送的数据(最大64KB)|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|


<h3 id=sendBuffer>CRString sendBuffer(const char* targetUserId, const CRByteArray& data, const char* cookie = "")</h3>

- **功能**：发送点对点大数据。

数据将被分块发送，发送进度参见[notifySendProgress](#notifySendProgress)</br>
取消发送参见[cancelSend](#cancelSend)</br>
结果请参见[sendBufferRlst](#sendBufferRlst)</br>
目标用户将收到通知[notifyBufferData](#notifyBufferData)

- **返回值**：[CRString](#CRString) 任务ID

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|targetUserId|char*|目标用户ID， 参见[CRLoginDat](Structs.md#CRLoginDat)的_userID字段|
|data|[CRByteArray](#CRByteArray)|发送的数据(最大100MB)|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|


<h3 id=sendFile>CRString sendFile(const char* targetUserId, const char* fileName, const char* cookie = "")</h3>

- **功能**：发送文件。

数据将被分块发送，发送进度参见[notifySendProgress](#notifySendProgress)</br>
取消发送参见[cancelSend](#cancelSend)</br>
结果请参见[sendFileRlst](#sendFileRlst)</br>
目标用户将收到通知[notifyFileData](#notifyFileData)

- **返回值**：[CRString](#CRString) 任务ID。

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|targetUserId|char*|目标用户ID， 参见[CRLoginDat](Structs.md#CRLoginDat)的_userID字段|
|fileName|char*|本地完整路径的文件名(文件内容最大100MB)|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|


<h3 id=cancelSend>void cancelSend(const CRString& sendID, const char* cookie = "")</h3>

- **功能**：取消大数据、文件的发送。

只能取消[sendBuffer](#sendBuffer)、[sendFile](#sendFile)的任务</br>
只有任务还未发送完成的才能被取消</br>
是否成功取消，可关注[cancelSendRlst](#cancelSendRlst)回调

- **返回值**：[CRString](#CRString) 任务ID。

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sendID|CRString|任务ID，[sendBuffer](#sendBuffer)、[sendFile](#sendFile)的返回值|
|fileName|char*|本地完整路径的文件名(文件内容最大100MB)|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|


<h3 id=createMeeting>void createMeeting(const char* params = "", const char* cookie = "")</h3>

- **功能**：创建房间

创建结果参见[createMeetingSuccess](#createMeetingSuccess) / [createMeetingFail](#createMeetingFail)；</br>
房间创建后，此房间ID将一直存在，直到调用[destroyMeeting](#destroyMeeting)消毁它；</br>
没有人使用房间时，系统会在一定时间后释放资源，并在下次使用是再临时分配，房间ID是保持不变的；</br>

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|params|char* | 保留参数 |
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|


<h3 id=destroyMeeting>void destroyMeeting(int meetID, const char* cookie = "")</h3>

- **功能**：销毁房间

创建结果参见[destroyMeetingRslt](#destroyMeetingRslt)</br>
房间被销毁后，房间中的其他人将收到[notifyMeetingStopped](#notifyMeetingStopped)

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|meetID| int | 房间号 |
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|



<h3 id=writeLog>void writeLog(CRVSDK_LOG_LEVEL level, const char* log)</h3>

- **功能**：向sdk的日志文件写入日志

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|level|[CRVSDK_LOG_LEVEL](Constant.md#CRVSDK_LOG_LEVEL)|日志等级|
|log|char*|日志内容（长度超过2K时，将被截断）|




<h3 id=videoFrameCover>bool videoFrameCover(CRVideoFrame& frm, CRVSDK_VIDEO_FORMAT dstFmt, int dstW, int dstH)</h3>

- **功能**：视频帧格式转换、缩小处理

不支持图像放大处理，传入放大参数时，图像将按原始大小处理</br>
格式转换、缩放有一定cpu开销</br>
此接口线程安全</br>

- **返回值**：处理结果

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|frm|[CRVideoFrame](Structs.md#CRVideoFrame)|调用时传入的图像帧，处理成功后存储结果帧|
|dstFmt|[CRVSDK_VIDEO_FORMAT](Constant.md#CRVSDK_VIDEO_FORMAT)|目标格式|
|dstW|int|目标宽|
|dstH|int|目标高|




<h3 id=mirrorVideoFrame>bool mirrorVideoFrame(CRVideoFrame& frm)</h3>

- **功能**：图像镜像处理（常用于本地图像镜像处理）

如果要对本地及远端都进行镜像处理，请使用[setVideoEffects](#setVideoEffects)接口</br>
镜像有少量cpu开销</br>
此接口线程安全</br>

- **返回值**：处理结果

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|frm|[CRVideoFrame](Structs.md#CRVideoFrame)|调用时传入的图像帧，处理成功后存储结果帧|



<h3 id=coverToVideoFrame>CRVSDK_ERR_DEF coverToVideoFrame(const char *fileName, CRVideoFrame& frm)</h3>
<h3 id=coverToVideoFrame2>CRVSDK_ERR_DEF coverToVideoFrame(const CRByteArray &dat, const char* fmt, CRVideoFrame& frm)</h3>

- **功能**：将图片解码成VideoFrame图像帧

支持图片格式：png, jpg, jpeg, bmp</br>
有一定cpu开销</br>
此接口线程安全</br>

- **返回值**：[CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF)， CRVSDKERR_NOERR代表调用成功

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|fileName|const char *|待解码图片路径文件名，文件后缀应该是：.png, .jpg, .jpeg, .bmp|
|dat|[CRByteArray](#CRByteArray)|图片数据|
|fmt|char*|图片数据格式,支持："png", "jpg", "jpeg", "bmp"|
|frm|[CRVideoFrame](Structs.md#CRVideoFrame)|解码后的图像帧|



<h2 id=CRMainThreadDispatch>class CRMainThreadDispatch</h2>

- **CRMainThreadDispatch背景说明：**

    为了让集成时不用过多考虑线程问题，所以需要将sdk的内部消息派发到主线程并在主线程与集成代码交互，而linux系统下没有一个标准的主线程消息队列，在此借助CRMainThreadDispatch来实现。CRMainThreadDispatch仅在linux系统下需要。

- **CRMainThreadDispatch原理说明：**

    1. 应用层将CRMainThreadDispatch对象设置给sdk；
    1. sdk其它线程（如网络线程）需要主线程处理逻辑或回调应用层代码时，在网络线程调用postCRMsg(msgSN)；
    1. 应用层在重载的postCRMsg函数中将消息挂入主线程消息队列；
	1. 应用层在处理sdk派发的消息时，调用sdk的dealCRMsg(msgSN)，将处理权交回给sdk；
	1. sdk便在主线程完成对msgSN的相关处理（包括回调业务代码，也将在主线程完成的）；

- **Qt应用举例说明：**

	```csharp

	//定义CRMsgEvent
	class CRMsgEvent : public QEvent
	{
	public:
		CRMsgEvent(uint32_t msgSN) : QEvent(QEvent::User), m_msgSN(msgSN) {}
		uint32_t m_msgSN;
	};
	
	//Qt版本的主线程消息派发器
	class CRMainThreadDispatch_Qt : public QObject, public CRMainThreadDispatch
	{
	public:
		CRMainThreadDispatch_Qt(QObject *parent) : QObject(parent)

		virtual void postCRMsg(uint32_t msgSN)
		{
			//向CRMainThreadDispatch_Qt发消息;
			//CRMainThreadDispatch_Qt为主线程对象，等于消息派发给了主线程
			//由于QCoreApplication::postEvent线程安全，所以无需提心多线程问题
			QCoreApplication::postEvent(this, new CRMsgEvent(msgSN));
		}
	
		bool event(QEvent *e)
		{
			//主线程的CRMainThreadDispatch_Qt在处理QEvent::User消息时，
			//调用dealCRMsg来完成消息的处理
			if (e->type() == QEvent::User)
			{
				CRMsgEvent *pMsg = static_cast<CRMsgEvent*>(e);
				dealCRMsg(pMsg->m_msgSN);
				return true;
			}
			return QObject::event(e);
		}
	};

	
	int main(int argc, char *argv[])
	{
		QApplication a(argc, argv);
	
		CRMainThreadDispatch_Qt *pDispatch = new CRMainThreadDispatch_Qt(&a);
	    g_sdkMain = CRVideoSDKMain::create(strAppPath.toUtf8().constData(), pDispatch);

		...
	}


	```

<h3 id=postCRMsg>virtual void postCRMsg(uint32_t msgSN) = 0</h3>

- **功能**：将消息派发到主线程

纯虚函数，业务代码必须在派生类实现；</br>
实现时必须将消息挂入主线程消息队列；</br>
postCRMsg将可能在非主线程被调用，所以挂入消息队列时要注意线程安全；</br>
在处理消息时，必需调用[CRMainThreadDispatch::dealCRMsg](#dealCRMsg)，驱动sdk来完成相关消息的处理；

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|msgSN| uint32_t | 消息序号 |


<h3 id=dealCRMsg>void dealCRMsg(uint32_t msgSN)</h3>

- **功能**：驱动sdk处理派发的消息

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|msgSN| uint32_t | 消息序号 |


<h2 id=CRVideoSDKMainCallBack>class CRVideoSDKMainCallBack</h2>


<h3 id=loginRslt>virtual void loginRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：登录结果回调

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表登录成功，其它值代表登录失败的具体原因 |
|cookie|char* | 登录时传入的cookie参数 |

<h3 id=notifyTokenWillExpire>virtual void notifyTokenWillExpire()</h3>

- **功能**：token授权即将到期通知

采用Token模式登录，才会收到此回调；</br>
Token到期前30秒左右回调，应尽快调用[updateToken](#updateToken)将授权更久的Token设置给SDK；

- **返回值**：无


<h3 id=notifyLineOff>virtual void notifyLineOff(CRVSDK_ERR_DEF sdkErr)</h3>

- **功能**：通知本端SDK掉线

掉线的原因参见[CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF)；</br>
掉线时，如果正在房间中也将自动离开房间；</br>
掉线时，之前的所有未完成的请求都将失败；</br>
掉线之后，可以按业务需求稍后重新登录； </br>

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | 掉线的原因 |


<h3 id=setDNDStatusRslt>virtual void setDNDStatusRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：设置免打扰结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |
|cookie|char* | 请求接口传入的cookie参数 |


<h3 id=getUserStatusSuccess>virtual void getUserStatusSuccess(const CRArray&lt;CRUserStatus&gt;& ustArray, const char* cookie)</h3>

- **功能**：获取用户登录状态信息成功 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|ustArray| [CRArray](#CRArray)<[CRUserStatus](Structs.md#CRUserStatus)> | 用户登录状态信息列表 |
|cookie|char* | 请求接口传入的cookie参数 |


<h3 id=getUserStatusFail>virtual void getUserStatusFail(CRVSDK_ERR_DEF sdkErr, const char* cookie) </h3>

- **功能**：获取用户登录状态信息失败 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | 失败的具体原因 |
|cookie|char* | 请求接口传入的cookie参数 |


<h3 id=notifyUserStatus>virtual void notifyUserStatus(const CRUserStatus& userStatus) </h3>

- **功能**：通知某用户登录状态变化

只在[startUserStatusNotify](#startUserStatusNotify)后，才会收到变化通知； 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userStatus| [CRUserStatus](Structs.md#CRUserStatus) | 用户状态信息 |


<h3 id=startUserStatusNotifyRslt>virtual void startUserStatusNotifyRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：开启用户状态通知结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |
|cookie|char* | 请求接口传入的cookie参数 |



<h3 id=stopUserStatusNotifyRslt>virtual void stopUserStatusNotifyRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：关闭用户状态通知结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |
|cookie|char* | 请求接口传入的cookie参数 |



<h3 id=createMeetingSuccess>virtual void createMeetingSuccess(const CRMeetInfo& meetObj, const char* cookie)</h3>

- **功能**：创建房间成功 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|meetObj| [CRMeetInfo](Structs.md#CRMeetInfo) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |
|cookie|char* | 请求接口传入的cookie参数 |



<h3 id=createMeetingFail>virtual void createMeetingFail(CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：创建房间失败 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | 失败的具体原因 |
|cookie|char* | 请求接口传入的cookie参数 |



<h3 id=destroyMeetingRslt>virtual void destroyMeetingRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：消毁房间结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |
|cookie|char* | 请求接口传入的cookie参数 |


<h3 id=sendCmdRlst>virtual void sendCmdRlst(const char* sendId, CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：发送点对点消息结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sendId|char* | 发送任务id， 见[sendCmd](#sendCmd)返回值 |
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |
|cookie|char* | 请求接口传入的cookie参数 |


<h3 id=sendBufferRlst>virtual void sendBufferRlst(const char* sendId, CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：发送点对点大数据结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sendId|char* | 发送任务id， 见[sendBuffer](#sendBuffer)返回值 |
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |
|cookie|char* | 请求接口传入的cookie参数 |


<h3 id=sendFileRlst>virtual void sendFileRlst(const char* sendId, const char* fileName，CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：发送点对点文件结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sendId|char* | 发送任务id， 见[sendFile](#sendFile)返回值 |
|fileName|char* | 发送的本地完整路径的文件名 |
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |
|cookie|char* | 请求接口传入的cookie参数 |



<h3 id=cancelSendRlst>virtual void cancelSendRlst(const char* sendId, CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：取消发送结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sendId|char* | 发送任务id， 见[sendBuffer](#sendBuffer) / [sendFile](#sendFile)返回值 |
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |
|cookie|char* | 请求接口传入的cookie参数 |



<h3 id=notifySendProgress>virtual void notifySendProgress(const char* sendId, int sendedLen, int totalLen, const char* cookie)</h3>

- **功能**：取消发送结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sendId|char* | 发送任务id， 见[sendBuffer](#sendBuffer) / [sendFile](#sendFile)返回值 |
|sendedLen| int | 已发送大小 |
|totalLen| int | 总大小 |
|cookie|char* | 请求接口传入的cookie参数 |



<h3 id=notifyCmdData>virtual void notifyCmdData(const char* sourceUserId, const CRString& data)</h3>

- **功能**：通知收到点对点透明通道消息 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sourceUserId|char* | 发送者UserID |
|data| [CRString](#CRString) | 消息内容 |



<h3 id=notifyBufferData>virtual void notifyBufferData(const char* sourceUserId, const CRByteArray& data)</h3>

- **功能**：通知收到点对点大数据 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sourceUserId|char* | 发送者UserID |
|data| [CRByteArray](#CRByteArray) | 消息内容 |


<h3 id=notifyFileData>virtual void notifyFileData(const char* sourceUserId, const char* tmpFile, const char* orgFileName)</h3>

- **功能**：通知收到点对点文件 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sourceUserId|char* | 发送者UserID |
|tmpFile|char* | 本地完整路径文件名（接收到的文件存放在系统Tmp目录下）|
|orgFileName|char* | 原始文件名（不包含路径）|




<h2 id=CRVideoSDKQueue>class CRVideoSDKQueue</h2>


<h3 id=CRVideoSDKQueue_AddCallBack>void AddCallBack(CRVideoSDKQueueCallBack *p)</h3>

- **功能**：增加CRVideoSDKQueue的回调对象，可以增加多个；

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|p|[CRVideoSDKQueueCallBack*](#CRVideoSDKQueueCallBack)|CRVideoSDKQueue的回调处理对象|


<h3 id=CRVideoSDKQueue_RmCallBack>void RmCallBack(CRVideoSDKQueueCallBack *p)</h3>

- **功能**：移除CRVideoSDKQueue的的回调对象

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|p|[CRVideoSDKMainCallBack*](#CRVideoSDKMainCallBack)|CRVideoSDKQueue的回调处理对象|



<h3 id=initQueueDat>void initQueueDat(const char* cookie = "")</h3>

- **功能**：初始化队列功能

初始化队列结果请参见[initQueueDatRslt](#initQueueDatRslt)；</br>
队列初始化成功后才可进行其它队列操作；

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|



<h3 id=getAllQueueInfo>CRArray&lt;CRQueInfo&gt; getAllQueueInfo()</h3>

- **功能**：获取AppID下的所有队列基础信息

- **返回值**：队列基础信息列表： [CRArray](#CRArray)<[CRQueInfo](Structs.md#CRQueInfo)>


<h3 id=getQueueStatus>bool getQueueStatus(int queID, CRQueStatus &st)</h3>

- **功能**：获取指定队列的排队状况

- **返回值**：获取是否成功

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|queID|int|队列ID|
|st|[CRQueStatus](Structs.md#CRQueStatus)|排队状况|



<h3 id=getQueuingInfo>void getQueuingInfo(CRQueuingInfo &st)</h3>

- **功能**：获取我的排队信息

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|st|[CRQueuingInfo](Structs.md#CRQueuingInfo)|我的排队信息|


<h3 id=getServingQueues>CRArray&lt;int&gt; getServingQueues()</h3>

- **功能**：获取我服务的所有队列

- **返回值**：队列Id列表：[CRArray](#CRArray)&lt;int&gt;




<h3 id=startQueuing>void startQueuing(int queID, const char* usrExtDat = "", const char* cookie = "")</h3>

- **功能**：客户开始排队

客户同一时间，只能排一个队列；</br>
排队结果请参见[startQueuingRslt](#startQueuingRslt)；

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|queID|int|队列ID|
|usrExtDat|char*|扩展信息，分配给座席时，座席可以获取此参数|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|



<h3 id=stopQueuing>void stopQueuing(const char* cookie = "")</h3>

- **功能**：客户停止排队

排队结果请参见[stopQueuingRslt](#stopQueuingRslt)；

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|



<h3 id=startService>void startService(int queID, int priority=0, const char* cookie = "")</h3>

- **功能**：座席开始服务某队列

可以多次调用，开启对多个队列的服务；</br>
开启服务结果请参见[startServiceRslt](#startServiceRslt) ；</br>
开启成功后：</br>
a. 如果没有开启免打扰[setDNDStatus](#setDNDStatus)，那么系统会自动分配客户：[notifyAutoAssignUser](#notifyAutoAssignUser)；</br>
b. 如果开启免打挽，系统就不会分配客户，如需服务客户可调用：[reqAssignUser](#reqAssignUser)；</br>


座席优先级描述：</br>
a. 客户优先分配给服务此队列优先级最高的，且空闲的座席；</br>
b. 优先级相同时，则分配给最先空闲的座席；</br>
c. 优先级高的座席变空闲时，不抢夺已分配的客户；

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|queID|int|队列ID|
|priority|int|坐席优先级 (缺省为0,取值为0~1000内整数。值越小优先级越高。0为最高优先级)|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|



<h3 id=stopService>void stopService(int queID, const char* cookie = "")</h3>

- **功能**：座席停止服务某队列

停止服务结果请参见[stopServiceRslt](#stopServiceRslt) ；

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|queID|int|队列ID|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|


<h3 id=reqAssignUser>void reqAssignUser(const char* cookie = "")</h3>
<h3 id=reqAssignUser2>void reqAssignUser(int queID, const char* userID, const char* cookie = "")</h3>

- **功能**：座席手动分配客户

[开启免打扰](#setDNDStatus)后手动分配客户接口；（当关闭免打扰时，系统将自动分配客户，无需调用此接口）</br>
分配结果请参见[reqAssignUserRslt](#reqAssignUserRslt) ；</br>
可以要求分配指定队列、指定客户，满足客户分配给历史座席类的需求； 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|queID|int|队列ID|
|userID|char*|请求分配指定用户|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|


<h3 id=acceptAssignUser>void acceptAssignUser(int queID, const char* userID, const char* cookie = "")</h3>

- **功能**：接受系统自动分配的客户

 结果请参见[acceptAssignUserRslt](#acceptAssignUserRslt)

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|queID|int|队列ID|
|userID|char*|用户ID|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|




<h3 id=rejectAssignUser>void rejectAssignUser(int queID, const char* userID, const char* cookie = "")</h3>

- **功能**：拒绝系统自动分配的客户

 结果请参见[rejectAssignUserRslt](#rejectAssignUserRslt)

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|queID|int|队列ID|
|userID|char*|用户ID|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|



<h2 id=CRVideoSDKQueueCallBack>class CRVideoSDKQueueCallBack</h2>



<h3 id=initQueueDatRslt>virtual void initQueueDatRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：初始化队列功能结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |
|cookie|char* | 请求接口传入的cookie参数 |



<h3 id=notifyQueueStatusChanged>virtual void notifyQueueStatusChanged(const CRQueStatus& queStatus)</h3>

- **功能**：队列排队状态更新 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|queStatus| [CRQueStatus](Structs.md#CRQueStatus)| 队列排队状态信息 |



<h3 id=notifyQueuingInfoChanged>virtual void notifyQueuingInfoChanged(const CRQueuingInfo& queuingInfo)</h3>

- **功能**：我的排队信息更新 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|queuingInfo| [CRQueuingInfo](Structs.md#CRQueuingInfo)| 我的排队信息 |



<h3 id=startQueuingRslt>virtual void startQueuingRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：客户开始排队结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |
|cookie|char* | 请求接口传入的cookie参数 |



<h3 id=stopQueuingRslt>virtual void stopQueuingRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：客户停止排队结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |
|cookie|char* | 请求接口传入的cookie参数 |



<h3 id=startServiceRslt>virtual void startServiceRslt(int queID, CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：座席开始服务结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|queID| int | 队列ID |
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |
|cookie|char* | 请求接口传入的cookie参数 |


<h3 id=stopServiceRslt>virtual void stopServiceRslt(int queID, CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：座席开始服务结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|queID| int | 队列ID |
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |
|cookie|char* | 请求接口传入的cookie参数 |



<h3 id=acceptAssignUserRslt>virtual void acceptAssignUserRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：接受系统分配的客户结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |
|cookie|char* | 请求接口传入的cookie参数 |


<h3 id=rejectAssignUserRslt>virtual void rejectAssignUserRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：拒绝系统分配的客户结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |
|cookie|char* | 请求接口传入的cookie参数 |


<h3 id=reqAssignUserRslt>virtual void reqAssignUserRslt(CRVSDK_ERR_DEF sdkErr, const CRQueUserInfo& usrInfo, const char* cookie)</h3>

- **功能**：座席手动分配客户结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |
|usrInfo| [CRQueUserInfo](Structs.md#CRQueUserInfo) | 客户信息。（请求成功时，此参数才有效) |
|cookie|char* | 请求接口传入的cookie参数 |



<h3 id=notifyAutoAssignUser>virtual void notifyAutoAssignUser(const CRQueUserInfo& usrInfo)</h3>

- **功能**：座席手动分配客户结果

如果不需要系统的自动分配，请通[setDNDStatus](#setDNDStatus)开启免打扰功能；</br>
acceptAssignUser后，还需要调用[call](#call)去呼叫对方进入目标房间；</br>
收到系统分配的客户后，如果座席不[acceptAssignUser](#acceptAssignUser)也不[rejectAssignUser](#rejectAssignUser)，系统将在30秒后取消本次分配[notifyAssignUserCanceled](#notifyAssignUserCanceled)，然后将客户放回到队首；

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|usrInfo| [CRQueUserInfo](Structs.md#CRQueUserInfo) | 客户信息 |



<h3 id=notifyAssignUserCanceled>virtual void notifyAssignUserCanceled(int queID, const char* usrID)</h3>

- **功能**：通知分配的客户取消了

被取消的原因，可能是用户取消排队了，或者用户掉线了，或者收到[notifyAutoAssignUser](#notifyAutoAssignUser)后没有及时[acceptAssignUser](#acceptAssignUser) / [rejectAssignUser](#rejectAssignUser)

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|queID| int | 客户信息 |
|usrID|char* | 客户信息 |



<h3 id=notifyUserEnterQueue>virtual void notifyUserEnterQueue(int queID, const CRQueUserInfo& usrInfo)</h3>

- **功能**：通知客户进入了某队列

只有座席服务的队列，才会收到此通知。

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|queID| int | 客户信息 |
|usrInfo| [CRQueUserInfo](Structs.md#CRQueUserInfo) | 客户信息 |



<h3 id=notifyUserLeaveQueue>virtual void notifyUserLeaveQueue(int queID, const char* usrID, CRVSDK_LEFT_QUEUE_REASON reason)</h3>

- **功能**：通知客户离开了某队列

只有座席服务的队列，才会收到此通知。

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|queID| int | 客户信息 |
|usrID|char* | 用户ID |
|reason| [CRVSDK_LEFT_QUEUE_REASON](Constant.md#CRVSDK_LEFT_QUEUE_REASON) | 原因值 |



<h2 id=CRVideoSDKCall>class CRVideoSDKCall</h2>



<h3 id=CRVideoSDKCall_AddCallBack>void AddCallBack(CRVideoSDKCallCallBack *p)</h3>

- **功能**：增加CRVideoSDKCall的回调对象，可以增加多个；

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|p|[CRVideoSDKCallCallBack*](#CRVideoSDKCallCallBack)|CRVideoSDKCall的回调处理对象|


<h3 id=CRVideoSDKCall_RmCallBack>void RmCallBack(CRVideoSDKCallCallBack *p)</h3>

- **功能**：移除CRVideoSDKCall的的回调对象

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|p|[CRVideoSDKCallCallBack*](#CRVideoSDKCallCallBack)|CRVideoSDKCall的回调处理对象|



<h3 id=call>CRString call(const char* calledUserID, const CRMeetInfo& meetObj, const char* usrExtDat = "", const char* cookie = "")</h3>

- **功能**：发起呼叫

发起的呼叫结果参见[callRslt](#callRslt)；</br>
呼叫时，对方迟迟不[acceptCall](#acceptCall) / [rejectCall](#rejectCall)，30秒后将超时而自动结束呼叫；

- **返回值**：[CRString](#CRString) 呼叫ID

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|calledUserID|char*|被叫用户ID|
|meetObj|[CRMeetInfo](Structs.md#CRMeetInfo)|房间信息|
|usrExtDat|char*|扩展信息|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|


<h3 id=acceptCall>void acceptCall(const char* callID, const CRMeetInfo& meetObj, const char* usrExtDat = "", const char* cookie = "")</h3>

- **功能**：接受他人的呼叫

接受结果参见[acceptCallRslt](#acceptCallRslt)；</br>

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|callID|char*|呼叫ID, 参见[call](#call) / [callMoreParty](#callMoreParty)返回值|
|meetObj|[CRMeetInfo](Structs.md#CRMeetInfo)|房间信息|
|usrExtDat|char*|扩展信息|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|


<h3 id=rejectCall>void rejectCall(const char* callID, const char* usrExtDat = "", const char* cookie = "")</h3>

- **功能**：拒接他人的呼叫

拒绝结果参见[rejectCallRslt](#rejectCallRslt)；</br>

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|callID|char*|呼叫ID, 参见[call](#call) / [callMoreParty](#callMoreParty)返回值|
|usrExtDat|char*|扩展信息|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|


<h3 id=hungupCall>void hungupCall(const char* callID, const char* usrExtDat = "", const char* cookie = "")</h3>

- **功能**：挂断通话

挂断结果参见[hangupCallRslt](#hangupCallRslt)；</br>

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|callID|char*|呼叫ID, 参见[call](#call) / [callMoreParty](#callMoreParty)返回值|
|usrExtDat|char*|扩展信息|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|



<h3 id=callMoreParty>CRString callMoreParty(const char* calledUserID, const CRMeetInfo& meetObj, const char* usrExtDat = "", const char* cookie = "")</h3>

- **功能**：发起多方呼叫（或呼转）

呼叫结果参见[callMorePartyRslt](#callMorePartyRslt)；</br>
呼转实现思路： A、B通话已建立（假设callID为IdAB)，B想由C来服务A，B callMoreParty C（假设callID为IdBC)， 在C接受进入通话后，A便可挂断IdAB通话并离开房间。</br>

- **返回值**：[CRString](#CRString) 呼叫ID

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|calledUserID|char*|被叫用户ID|
|meetObj|[CRMeetInfo](Structs.md#CRMeetInfo)|房间信息|
|usrExtDat|char*|扩展信息|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|



<h3 id=cancelCallMoreParty>void cancelCallMoreParty(const char* callID, const char* usrExtDat = "", const char* cookie = "")</h3>

- **功能**：取消多方呼叫

取消结果参见[cancelCallMorePartyRslt](#cancelCallMorePartyRslt)；</br>

- **返回值**：[CRString](#CRString) 呼叫ID

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|callID|char*|呼叫ID|
|usrExtDat|char*|扩展信息|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|



<h3 id=invite>CRString invite(const char* invitedUserID, const char* usrExtDat = "", const char* cookie = "")</h3>

- **功能**：邀请他人

邀请结果参见[inviteRslt](#inviteRslt)；

- **返回值**：[CRString](#CRString) 邀请ID

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|invitedUserID|char*|邀请的用户ID|
|usrExtDat|char*|扩展信息|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|




<h3 id=acceptInvite>void acceptInvite(const char* inviteID, const char* usrExtDat = "", const char* cookie = "")</h3>

- **功能**：接受邀请

接受结果参见[acceptInviteRslt](#acceptInviteRslt)；

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|inviteID|char*|邀请ID，参见[invite](#invite)返回值|
|usrExtDat|char*|扩展信息|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|



<h3 id=rejectInvite>void rejectInvite(const char* inviteID, const char* usrExtDat = "", const char* cookie = "")</h3>

- **功能**：拒接邀请

接受结果参见[rejectInviteRslt](#rejectInviteRslt)；

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|inviteID|char*|邀请ID，参见[invite](#invite)返回值|
|usrExtDat|char*|扩展信息|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|



<h3 id=cancelInvite>void cancelInvite(const char* inviteID, const char* usrExtDat = "", const char* cookie = "")</h3>

- **功能**：取消邀请

取消结果参见[cancelInviteRslt](#cancelInviteRslt)；

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|inviteID|char*|邀请ID，参见[invite](#invite)返回值|
|usrExtDat|char*|扩展信息|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|




<h2 id=CRVideoSDKCallCallBack>class CRVideoSDKCallCallBack</h2>



<h3 id=callRslt>virtual void callRslt(const char* callID, CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：呼叫结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|callID|char* | 呼叫ID |
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败原因，如：</br>CRVSDKERR_PEER_BUSY：对方通话中或免打扰</br>CRVSDKERR_PEER_OFFLINE：对方不在线|
|cookie|char* | 请求接口传入的cookie参数 |



<h3 id=acceptCallRslt>virtual void acceptCallRslt(const char* callID, CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：接受呼叫结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|callID|char* | 呼叫ID |
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |
|cookie|char* | 请求接口传入的cookie参数 |



<h3 id=rejectCallRslt>virtual void rejectCallRslt(const char* callID, CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：拒接呼叫结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|callID|char* | 呼叫ID |
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |
|cookie|char* | 请求接口传入的cookie参数 |



<h3 id=hangupCallRslt>virtual void hangupCallRslt(const char* callID, CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：挂断呼叫结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|callID|char* | 呼叫ID |
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |
|cookie|char* | 请求接口传入的cookie参数 |



<h3 id=notifyCallIn>virtual void notifyCallIn(const char* callID, const CRMeetInfo& meetObj, const char* callerID, const char* usrExtDat)</h3>

- **功能**：通知呼入 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|callID|char* | 呼叫ID |
|meetObj| [CRMeetInfo](Structs.md#CRMeetInfo) | 房间信息 |
|callerID|char* | 主叫用户ID |
|usrExtDat|char* | 主叫用户的扩展信息 |



<h3 id=notifyCallAccepted>virtual void notifyCallAccepted(const char* callID, const CRMeetInfo& meetObj, const char* usrExtDat)</h3>

- **功能**：通知呼叫被接受 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|callID|char* | 呼叫ID |
|meetObj| [CRMeetInfo](Structs.md#CRMeetInfo) | 房间信息 |
|usrExtDat|char* | 用户接受时的扩展信息 |



<h3 id=notifyCallRejected>virtual void notifyCallRejected(const char* callID, CRVSDK_ERR_DEF reason, const char* usrExtDat)</h3>

- **功能**：通知呼叫被拒接 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|callID|char* | 呼叫ID |
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | 如：</br>CRVSDKERR_PEER_REFUSE：对方拒接</br>CRVSDKERR_PEER_NOANSWER：对方30秒无响应 |
|usrExtDat|char* | 用户接受时的扩展信息 |



<h3 id=notifyCallHungup>virtual void notifyCallHungup(const char* callID, const char* usrExtDat)</h3>

- **功能**：通知呼叫被挂断 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|callID|char* | 呼叫ID |
|usrExtDat|char* | 用户挂断时的扩展信息 |



<h3 id=callMorePartyRslt>virtual void callMorePartyRslt(const char* callID, CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：发起多方呼叫结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|callID|char* | 呼叫ID， [callMoreParty](#callMoreParty)的返回值 |
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败原因，如：</br>CRVSDKERR_PEER_BUSY：对方通话中或免打扰</br>CRVSDKERR_PEER_OFFLINE：对方不在线 |
|cookie|char* | 请求接口传入的cookie参数 |



<h3 id=cancelCallMorePartyRslt>virtual void cancelCallMorePartyRslt(const char* callID, CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：取消多方呼叫结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|callID|char* | 呼叫ID， [callMoreParty](#callMoreParty)的返回值 |
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败原因 |
|cookie|char* | 请求接口传入的cookie参数 |



<h3 id=notifyCallMorePartyStatus>virtual void notifyCallMorePartyStatus(const char* callID, CRVSDK_CALLMORE_STATE status)</h3>

- **功能**：通知多方呼叫状态 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|callID|char* | 呼叫ID， [callMoreParty](#callMoreParty)的返回值 |
|status| [CRVSDK_CALLMORE_STATE](Constant.md#CRVSDK_CALLMORE_STATE) | 多方呼叫状态 |




<h3 id=inviteRslt>virtual void inviteRslt(const char* inviteID, CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：邀请他人结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|inviteID|char* | 邀请ID， [invite](#invite)的返回值 |
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败原因，如：</br>CRVSDKERR_PEER_OFFLINE：对方不在线 |
|cookie|char* | 请求接口传入的cookie参数 |



<h3 id=cancelInviteRslt>virtual void cancelInviteRslt(const char* inviteID, CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：取消邀请结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|inviteID|char* | 邀请ID， [invite](#invite)的返回值 |
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败原因 |
|cookie|char* | 请求接口传入的cookie参数 |


<h3 id=acceptInviteRslt>virtual void acceptInviteRslt(const char* inviteID, CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：接受邀请结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|inviteID|char* | 邀请ID， [invite](#invite)的返回值 |
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败原因 |
|cookie|char* | 请求接口传入的cookie参数 |



<h3 id=rejectInviteRslt>virtual void rejectInviteRslt(const char* inviteID, CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：拒接邀请结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|inviteID|char* | 邀请ID， [invite](#invite)的返回值 |
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败原因 |
|cookie|char* | 请求接口传入的cookie参数 |




<h3 id=notifyInviteIn>virtual void notifyInviteIn(const char* inviteID, const char* inviterUsrID, const char* usrExtDat)</h3>

- **功能**：通知收到邀请 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|inviteID|char* | 邀请ID |
|inviterUsrID|char* | 邀请人ID |
|usrExtDat|char* | 邀请的扩展信息 |



<h3 id=notifyInviteAccepted>virtual void notifyInviteAccepted(const char* inviteID, const char* usrExtDat)</h3>

- **功能**：通知邀请被接受 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|inviteID|char* | 邀请ID |
|usrExtDat|char* | 接受的扩展信息 |



<h3 id=notifyInviteRejected>virtual void notifyInviteRejected(const char* inviteID, CRVSDK_ERR_DEF reason, const char* usrExtDat)</h3>

- **功能**：通知邀请被拒接 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|inviteID|char* | 邀请ID |
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | 如：</br>CRVSDKERR_PEER_REFUSE：对方拒接</br>CRVSDKERR_PEER_NOANSWER：对方30秒无响应 |
|usrExtDat|char* | 接受的扩展信息 |




<h3 id=notifyInviteCanceled>virtual void notifyInviteCanceled(const char* inviteID, CRVSDK_ERR_DEF reason, const char* usrExtDat)</h3>

- **功能**：通知邀请被取消 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|inviteID|char* | 邀请ID |
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | 邀请被取消的原因 |
|usrExtDat|char* | 取消的扩展信息 |




<h2 id=CRVideoSDKMeeting>class CRVideoSDKMeeting</h2>




<h3 id=CRVideoSDKMeeting_AddCallBack>void AddCallBack(CRVideoSDKMeetingCallBack *p)</h3>

- **功能**：增加CRVideoSDKMeeting的回调对象，可以增加多个；

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|p|[CRVideoSDKMeetingCallBack*](#CRVideoSDKMeetingCallBack)|CRVideoSDKMeeting的回调处理对象|


<h3 id=CRVideoSDKMeeting_RmCallBack>void RmCallBack(CRVideoSDKMeetingCallBack *p)</h3>

- **功能**：移除CRVideoSDKMeeting的回调对象

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|p|[CRVideoSDKMeetingCallBack*](#CRVideoSDKMeetingCallBack)|CRVideoSDKMeeting的回调处理对象|



<h3 id=addCanvas>void addCanvas(CRCanvas* p)</h3>

- **功能**：添加SDK渲染对象，由SDK内部完成图像渲染

SDK渲染的当前支持平台有：Windows；（其它平台请使用自定义渲染来进行图像显示）</br>
支持为一个源添加多个渲染对象；</br>
支持一个源，某些窗口用SDK渲染，某些窗口由于有复杂需求用自定义渲染；</br>

SDK渲染与自定义渲染优劣对比：</br>
SDK渲染的优势：使用简单；</br> 
SDK渲染的劣势：功能偏弱、在某些UI库中图像上实现透明工具条可能存在困难；

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|p|[CRCanvas*](Structs.md#CRCanvas)|SDK渲染对象|



<h3 id=addCanvas>void rmCanvas(CRCanvas* p)</h3>

- **功能**：移除SDK渲染对象


- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|p|[CRCanvas*](Structs.md#CRCanvas)|SDK渲染对象|



<h3 id=addCustomRender>void addCustomRender(CRCustomRenderHandler* p)</h3>

- **功能**：添加自定义渲染对象

所有平台都支持自定义渲染</br>
支持为一个源添加多个自定义渲染对象；</br>
与SDK渲染的一些对比，请参见[addCanvas](#addCanvas)

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|p|[CRCustomRenderHandler*](Structs.md#CRCustomRenderHandler)|自定义渲染对象|



<h3 id=rmCustomRender>void rmCustomRender(CRCustomRenderHandler* p)</h3>

- **功能**：移除自定义渲染对象

所有平台都支持自定义渲染</br>
支持为一个源添加多个自定义渲染对象；</br>
与SDK渲染的一些对比，请参见[addCanvas](#addCanvas)

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|p|[CRCustomRenderHandler*](Structs.md#CRCustomRenderHandler)|自定义渲染对象|



<h3 id=enterMeeting>void enterMeeting(int meetID)</h3>

- **功能**：进入房间

进入房间结果：[enterMeetingRslt](#enterMeetingRslt)</br>
进入房间成功时，房间中其他人员将收到通知:[notifyUserEnterMeeting](#notifyUserEnterMeeting)

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|meetID|int|房间ID|



<h3 id=exitMeeting>void exitMeeting()</h3>

- **功能**：离开房间

离开房间不需要等待服务器响应（网络不好，或网络断开时不会影响离开房间），调用之后即代表离开房间了；</br>
离开房间后，不会再收房间中任何消息；</br>
离开房间时，如果网络正常，房间中其他人会立即收到[notifyUserLeftMeeting](#notifyUserLeftMeeting)通知，如果网络不正常，服务器会在sdk内部握手超时后发出[notifyUserLeftMeeting](#notifyUserLeftMeeting)通知；</br>
需要消毁房间，请参见[destroyMeeting](#destroyMeeting)；

- **返回值**：无



<h3 id=isUserInMeeting>bool isUserInMeeting(const char* userID)</h3>

- **功能**：检查用户是否在房间中

- **返回值**： true:在房间中， false:不在房间中

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*|用户ID|



<h3 id=getAllMembers>CRArray&lt;CRMeetingMember&gt; getAllMembers()</h3>

- **功能**：获取房间中所有所有成员信息

- **返回值**： [CRArray](#CRArray)<[CRMeetingMember](Structs.md#CRMeetingMember)>



<h3 id=getMemberInfo>bool getMemberInfo(const char* userID, CRMeetingMember& info)</h3>

- **功能**：获取房间中指定成员信息

- **返回值**： true:在房间中， false:不在房间中

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*|用户ID|
|info|[CRMeetingMember](Structs.md#CRMeetingMember)|返回的成员信息|



<h3 id=setNickName>void setNickName(const char* userID, const char* strNickName)</h3>

- **功能**：修改房间中成员昵称

设置结果请参见[setNickNameRslt](#setNickNameRslt)</br>
调用此接口如果设置成功，其他房间内用户会收到[notifyNickNameChanged](#notifyNickNameChanged)通知

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*|用户ID|
|strNickName|char*|用户新的昵称，utf-8编码，最大长度128|



<h3 id=kickout>void kickout(const char* userID)</h3>

- **功能**：将他人请出房间

请出结果请参见[kickoutRslt](#kickoutRslt)；</br>
被请出人将收到[notifyMeetingDropped](#notifyMeetingDropped)通知，原因值是：CRVSDK_DROPPED_KICKOUT；</br>
房间中剩余人员（包括操作者）将收到[notifyUserLeftMeeting](#notifyUserLeftMeeting)通知；

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*|用户ID|


<h3 id=sendMeetingCustomMsg>void sendMeetingCustomMsg(const char* msg, const char* cookie = "")</h3>

- **功能**：发送房间内群消息

发送结果请参见[sendMeetingCustomMsgRslt](#sendMeetingCustomMsgRslt)；</br>
只有当前在房间内的人员才能收到此消息；</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|msg|char*|自定义消息内容，最大8KB字节|



<h3 id=getAudioMics>CRArray&lt;CRAudioDevInfo&gt; getAudioMics()</h3>

- **功能**：得到系统麦克风设备列表

- **返回值**： [CRArray](#CRArray)<[CRAudioDevInfo](Structs.md#CRAudioDevInfo)>



<h3 id=getAudioSpks>CRArray&lt;CRAudioDevInfo&gt; getAudioSpks()</h3>

- **功能**：得到系统扬声器设备列表

- **返回值**： [CRArray](#CRArray)<[CRAudioDevInfo](Structs.md#CRAudioDevInfo)>



<h3 id=getAudioCfg>CRAudioCfg getAudioCfg()</h3>

- **功能**：得到当前音频配置

- **返回值**： [CRAudioCfg](Structs.md#CRAudioCfg)



<h3 id=setAudioCfg>void setAudioCfg(const CRAudioCfg& cfg)</h3>

- **功能**：设置音频参数

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|cfg|[CRAudioCfg](Structs.md#CRAudioCfg)|音频参数|



<h3 id=setMicVolume>void setMicVolume(int volume)</h3>

- **功能**：配置麦克风音量

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|volume|int|音量，0~255|



<h3 id=getMicVolume>int  getMicVolume()</h3>

- **功能**：获取麦克风音量

- **返回值**： 音量，0~255



<h3 id=setSpkVolume>void setSpkVolume(int volume)</h3>

- **功能**：配置扬声器音量

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|volume|int|音量，0~255|



<h3 id=getSpkVolume>int  getSpkVolume()</h3>

- **功能**：获取扬声器音量

- **返回值**： 音量，0~255



<h3 id=setSpeakerMute>void setSpeakerMute(bool bMute)</h3>

- **功能**：配置扬声器静音

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|bMute|bool|true:静音、false:不静音|



<h3 id=getSpeakerMute>bool  getSpeakerMute()</h3>

- **功能**：获取扬声器静音状态

- **返回值**： true:静音、false:不静音



<h3 id=getLocMicDevEnergy>int getLocMicDevEnergy()</h3>

- **功能**：获取本地麦克风设备能量等级

房间中关麦仍能获取当前麦设备的能量值；</br>
如果想获取在房间中的能量值，请使用[getUserMicEnergy](#getUserMicEnergy)；

- **返回值**： 能量等级0~9, (9为最大能量等级）



<h3 id=getUserMicEnergy>int getUserMicEnergy(const char* userID)</h3>

- **功能**：获取房间中指定人员麦克风能量等级

房间中关麦后，获取的麦能量值将为0</br>
如果想获取当前麦设备实际能量值，请使用[getLocMicDevEnergy](#getLocMicDevEnergy)；

- **返回值**： 能量等级0~9, (9为最大能量等级）

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*|用户ID|




<h3 id=openMic>void openMic(const char* userID)</h3>

- **功能**：开麦(将麦克风声音送入房间)

打开自已的麦克风时，先会进入到[CRVSDK_AST_OPENING](Constant.md#CRVSDK_ASTATUS)状态，等服务器处理后才会进入[CRVSDK_AST_OPEN](Constant.md#CRVSDK_ASTATUS)状态；</br>
当用户的麦克风状态变为[CRVSDK_AST_OPEN](Constant.md#CRVSDK_ASTATUS)状态时，说话才能被采集到；</br>
一个房间最大开麦数为8，超出的开麦人将保持在[CRVSDK_AST_OPENING](Constant.md#CRVSDK_ASTATUS)状态；</br>
[CRVSDK_AST_OPENING](Constant.md#CRVSDK_ASTATUS)状态的麦不会在有人关麦时自动打开，需要按需再次执行openMic；</br>
麦克风状态改变时，房间中所有人将收到[notifyMicStatusChanged](#notifyMicStatusChanged)通知；</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*|用户ID|



<h3 id=closeMic>void closeMic(const char* userID)</h3>

- **功能**：关麦(麦克风声音停止送入房间)

关麦操作是立即生效的，本地会立即停止采集；</br>
房间中所有人将收到[notifyMicStatusChanged](#notifyMicStatusChanged)通知；</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*|用户ID|



<h3 id=getMicStatus>CRVSDK_ASTATUS getMicStatus(const char* userID)</h3>

- **功能**：获取指定人员的麦克风状态

- **返回值**： [CRVSDK_ASTATUS](Constant.md#CRVSDK_ASTATUS)

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*|用户ID|




<h3 id=closeAllMic>void closeAllMic()</h3>

- **功能**：全体关麦

全体关麦时，不关闭操作者自已的麦；

- **返回值**： 无




<h3 id=startEchoTest>CRVSDK_ERR_DEF startEchoTest()</h3>

- **功能**：开始本地语音环回测试

环回测试时，将听不到其房间中的声音，房间中其他人也听不到本端的声音；</br>

- **返回值**： [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF)，CRVSDKERR_NOERR代表调用成功

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|nSeconds|int|录音时长(取值2~10秒)|



<h3 id=stopEchoTest>void stopEchoTest()</h3>

- **功能**：停止本地语音环回测试

- **返回值**： 无



<h3 id=setAudioFrameObserver>void setAudioFrameObserver(CRAudioFrameObserver *p)</h3>

- **功能**：设置语音观测器

传入NULL，代表移除观测器；</br>
此接口线程安全，可以在任意线程中调用；</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|p | CRAudioFrameObserver* | 音频观测器对象 |



<h3 id=setVoiceChange>void setVoiceChange(const char* userID, CRVSDK_VOICECHANGE_TYPE type)</h3>

- **功能**：设置指定人变声

变声功能为服务器实现，所以本地录制、本地声音环回测试，声音都是不变声过的；</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*|用户ID|
|type|[CRVSDK_VOICECHANGE_TYPE](Constant.md#CRVSDK_VOICECHANGE_TYPE)|变声类型|



<h3 id=getVoiceChangeType>CRVSDK_VOICECHANGE_TYPE getVoiceChangeType(const char* userID)</h3>

- **功能**：查询目标用户变声类型

- **返回值**： 变声类型[CRVSDK_VOICECHANGE_TYPE](Constant.md#CRVSDK_VOICECHANGE_TYPE) 

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*|用户ID|



<h3 id=setCustomAudioCapture>CRVSDK_ERR_DEF setCustomAudioCapture(bool enable, const char* param)</h3>

- **功能**：自定义音频采集

自定义音频采集，支持两种方式：a.从外部通过[pushCustomAudioDat](#pushCustomAudioDat)送入pcm数据；b.从网络摄像头获取；</br>
如果从网络摄像头获取时，请确保对应的摄像头被打开，否则将采集全是静音数据；</br>

- **返回值**： [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF)，CRVSDKERR_NOERR代表调用成功

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|enable|bool|是否启用自定义音频采集|
|param|char*|可选扩展参数，json格式，当前支持参数：</br>"fromIPCam"：摄像头ID，配置后将不再需要pushCustomAudioDat，sdk自动从IPCam中获取音频数据|



<h3 id=pushCustomAudioDat>CRVSDK_ERR_DEF pushCustomAudioDat(const CRAudioFrame2& frm)</h3>

- **功能**：向sdk送入自定义音频采集数据

- **返回值**： [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF)，CRVSDKERR_NOERR代表调用成功

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|frm|[CRAudioFrame2](Structs.md#CRAudioFrame2)|音频帧数据|



<h3 id=setCustomAudioPlayback>CRVSDK_ERR_DEF setCustomAudioPlayback(bool enable, const char* param)</h3>

- **功能**：自定义音频渲染

开启自定义渲染后，应定期通过[pullCustomAudioDat](#pullCustomAudioDat)拉取音频帧数据，内部有少量缓冲区，超出后会导至前面的数据丢失；</br>
开启自定义渲染后，本地将不再向系统扬声器播放声音；</br>

- **返回值**： [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF)，CRVSDKERR_NOERR代表调用成功

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|enable|bool|是否开启自定义音频播放|
|param|char*|保留参数|


<h3 id=pullCustomAudioDat>CRVSDK_ERR_DEF pullCustomAudioDat(CRAudioFrame2& frm)</h3>

- **功能**：从sdk获取音频数据用于自渲染

- **返回值**： [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF)，CRVSDKERR_NOERR代表调用成功

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|frm|[CRAudioFrame2](Structs.md#CRAudioFrame2)|音频帧数据|


<h3 id=getAllVideoInfo>const CRArray&lt;CRVideoDevInfo&gt;& getAllVideoInfo(const char* userID)</h3>

- **功能**：获取指定人员的摄像头信息

- **返回值**： 摄像头信息列表[CRArray](#CRArray)<[CRVideoDevInfo](Structs.md#CRVideoDevInfo)>

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*|用户ID|


<h3 id=showVideoAdvCfgDlg>bool showVideoAdvCfgDlg(int videoID, void* hParenWnd)</h3>

- **功能**：显示本地系统摄像头高级配置（仅windows有效）

- **返回值**： 显示是否成功

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|videoID|int|摄像头ID，系统的真实摄像头才能显示高级配置|
|hParenWnd|void*|系统弹窗的父窗口句柄|


<h3 id=setVideoCfg>CRVSDK_ERR_DEF setVideoCfg(const CRVideoCfg& cfg)</h3>

- **功能**：设置本地视频全局配置

- **返回值**： [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF)，CRVSDKERR_NOERR代表调用成功

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|cfg|[CRVideoCfg](Structs.md#CRVideoCfg)|视频配置|



<h3 id=getVideoCfg>CRVideoCfg getVideoCfg()</h3>

- **功能**：获取本地视频全局配置

- **返回值**： [CRVideoCfg](Structs.md#CRVideoCfg)



<h3 id=setDefaultVideo>void setDefaultVideo(int videoID)</h3>

- **功能**：配置本地默认摄像头

sdk内部会自动产生默认摄像头，除非系统没有任何真实摄像头、自定义摄像头、网络摄像头等；</br>
当默认摄像头被移除时，sdk内部会自动产生一个新的默认摄像头；</br>
sdk内部产生默认摄像头时，优先将将打开的多摄像头上选择；</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|videoID|int|摄像头ID|



<h3 id=getDefaultVideo>int getDefaultVideo(const char* userID)</h3>

- **功能**：获取本地或他人的默认摄像头

- **返回值**： 摄像头ID, 0代表没有默认摄像头；

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*|用户ID|



<h3 id=setMutiVideos>void setMutiVideos(const int moreVideoIDs[], int count)</h3>

- **功能**：配置本地多摄像头

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|moreVideoIDs|int[]|开启更多摄像头（不应该包含默认摄像头，即使传入也会被忽略）|
|count|int|moreVideoIDs个数，0代表关闭多摄像头功能|



<h3 id=getMutiVideos>CRArray&lt;int&gt; getMutiVideos(const char* userID)</h3>

- **功能**：获取本地的或他人的多摄像头

- **返回值**： 摄像头ID列表[CRArray](#CRArray)&lt;int&gt;

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*|用户ID|



<h3 id=setVideoAttributes>void setVideoAttributes(int videoID, const char* jsonAttributes)</h3>

- **功能**：设置本地指定设备私有配置

没有配置时，使用全局配置；</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|videoID|int|摄像头ID|
|jsonAttributes|char*|json格式，请参见[CRVideoAttributesObj](Structs.md#CRVideoAttributesObj)|



<h3 id=getVideoAttributes>CRString getVideoAttributes(int videoID)</h3>

- **功能**：获取本地指定设备私有配置

- **返回值**： 私有配置[CRString](#CRString)，json格式，请参见[CRVideoAttributesObj](Structs.md#CRVideoAttributesObj)

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|videoID|int|摄像头ID|



<h3 id=openVideo>void openVideo(const char* userID)</h3>

- **功能**：打开指定人的摄像头

打开用户的摄像头，以便本地、远端显示视频图像；</br>
打开多个摄像头，参见[setMutiVideos](#setMutiVideos)；</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*|用户ID|



<h3 id=closeVideo>void closeVideo(const char* userID)</h3>

- **功能**：关闭指定人的摄像头

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*|用户ID|




<h3 id=getVideoStatus>CRVSDK_VSTATUS getVideoStatus(const char* userID)</h3>

- **功能**：获取房间中视频状态

- **返回值**： [CRVSDK_VSTATUS](Constant.md#CRVSDK_VSTATUS)

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*|用户ID|




<h3 id=setVideoEffects>void setVideoEffects(const char* efs)</h3>

- **功能**：本地视频效果配置

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|efs|char*|视频效果配置，json字符串，请参见[CRVideoEffectsObj](Structs.md#CRVideoEffectsObj)|




<h3 id=getVideoEffects>CRString getVideoEffects()</h3>

- **功能**：本地视频效果配置

- **返回值**： 视频效果配置json字符串，请参见[CRVideoEffectsObj](Structs.md#CRVideoEffectsObj)



<h3 id=setVideoFrameObserver>void setVideoFrameObserver(CRVideoFrameObserver *p)</h3>

- **功能**：设置视频帧观测器

传入NULL，代表移除观测器</br>
此接口线程安全，可以在任意线程中调用；</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|p|CRVideoFrameObserver*|视频观测器对象|



<h3 id=addIPCam>int addIPCam(const char* url, const char* jsonParam)</h3>

- **功能**：添加网络摄像头

最多支持添加5个;</br>
添加成功后与本地摄像头处理一致；本地通过getAllVideoInfo接口可以识别哪些是网络摄像头;</br>
添加的摄像头在CRVideoSDKMain被消毁时被删除；</br>

- **返回值**： 返回值>=0代表添加成功，返回值为videoID（摄像头ID）； 返回值<0代表添加失败，参见[CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF)

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|url|char*|网络摄像头url，支持协议:rtmp,rtsp|
|jsonParam|char*|json格式参数， 支持：</br>name：摄像头名称，不配置则为url</br>maxRetry：连接失败或中断连时重试连接次数，<0代表无限重试，默认值-1</br>|



<h3 id=delIPCam>void delIPCam(int videoID)</h3>

- **功能**：删除网络摄像头

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|videoID|int|摄像头ID|



<h3 id=createScreenCamDev>int createScreenCamDev(const char* camName, int monitor)</h3>

- **功能**：添加桌面摄像头

最多支持添加5个;</br>
添加成功后与本地摄像头处理一致；本地通过getAllVideoInfo接口可以识别哪些是桌面摄像头;</br>
添加的摄像头在CRVideoSDKMain被消毁时被删除；</br>

- **返回值**： 返回值>=0代表添加成功，返回值为videoID（摄像头ID）； 返回值<0代表添加失败，参见[CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF)

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|camName|char*|摄像头名称|
|monitor|int|显示器编号，与系统编号一致，-1代表主屏。|



<h3 id=updateScreenCamDev>bool updateScreenCamDev(int videoID, int monitor)</h3>

- **功能**：调整桌面摄像头对应的屏幕

- **返回值**： 调整是否成功

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|videoID|int|摄像头ID|
|monitor|int|显示器编号，与系统编号一致，-1代表主屏。|



<h3 id=destroyScreenCamDev>void destroyScreenCamDev(int videoID)</h3>

- **功能**：删除桌面摄像头

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|videoID|int|摄像头ID|



<h3 id=createCustomVideoDev>int createCustomVideoDev(const char* camName, CRVSDK_VIDEO_FORMAT pixFmt, int width, int height, const char* extParams)</h3>

- **功能**：添加自定义摄像头

最多支持添加5个;</br>
添加成功后与本地摄像头处理一致；本地通过getAllVideoInfo接口可以识别哪些是自定义摄像头;</br>
添加的摄像头在CRVideoSDKMain被消毁时被删除；</br>
创建成功后，调用[inputCustomVideoDat](#inputCustomVideoDat)送入摄像头图像数据；</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|camName|char*|摄像头名|
|pixFmt|[CRVSDK_VIDEO_FORMAT](Constant.md#CRVSDK_VIDEO_FORMAT)|图像格式，CRVSDK_VFMT_YUV420P格式性能最佳；|
|width|int|图像宽|
|height|int|图像高|
|extParams|char*|保留参数|



<h3 id=destroyCustomVideoDev>void destroyCustomVideoDev(int videoID)</h3>

- **功能**：删除自定义摄像头

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|videoID|int|摄像ID|



<h3 id=inputCustomVideoDat>CRVSDK_ERR_DEF inputCustomVideoDat(int videoID, const CRVideoFrame &frm)</h3>

- **功能**：送入自定义摄像头数据

- **返回值**： [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF)，CRVSDKERR_NOERR代表调用成功

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|videoID|int|摄像ID|
|frm|[CRVideoFrame](Structs.md#CRVideoFrame)|图像数据（请保证格式、和尺寸与摄像头一致）|



<h3 id=setMediaCfg>CRVSDK_ERR_DEF setMediaCfg(const CRVideoCfg& cfg)</h3>

- **功能**：设置影音共享配置

- **返回值**： [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF)，CRVSDKERR_NOERR代表调用成功

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|videoID|int|摄像ID|
|cfg|[CRVideoCfg](Structs.md#CRVideoCfg)|配置参数|




<h3 id=getMediaCfg>CRVideoCfg getMediaCfg()</h3>

- **功能**：获取影音共享配置

- **返回值**： [CRVideoCfg](Structs.md#CRVideoCfg)



<h3 id=startPlayMedia>void startPlayMedia(const char* filename, bool bLocPlay=false, bool bPauseWhenFinished=false)</h3>

- **功能**：开始影音共享

支持本地完整路径文件，支持mp4、flv、avi、wmv、mkv、mov、3gp、wma、mp3、m4a、wav等常见文件格式；</br>
支持网络媒体流，支持的协议有：http、rtmp、rtsp；</br>
一个房间同一时间只能一个影音共享（本地播放除外）；</br>
开启共享失败时，将有[startPlayMediaFail](#startPlayMediaFail)回调；</br>
开启共享成功时，房间内所有人都将收到[notifyMediaStart](#notifyMediaStart)通知；</br>
开启共享成功后，共享端开始向房间内播放文件，共享者在文件打开成功时将收回[notifyMediaOpened](#notifyMediaOpened)回调；</br>
共享中，如果文件打开失败、或中途读取失败、或播放结果， sdk内部将自动停止影音共享，房间内所有人都将收到[notifyMediaStop](#notifyMediaStop)通知； </br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|filename|char*|媒体文件名|
|bLocPlay|bool|是否本地播放。本地播放时，声音图像不会送入房间，适用于本地录像检测|
|bPauseWhenFinished|bool|文件正常播放完成时，暂停在文件未尾|


<h3 id=pausePlayMedia>void pausePlayMedia(bool bPause)</h3>

- **功能**：暂停影音共享

共享暂停后，房间内所有人将收到[notifyMediaPause](#notifyMediaPause)通知；</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|bPause|bool|暂停共享/恢复共享|


<h3 id=setMediaPlayPos>void setMediaPlayPos(int ms)</h3>

- **功能**：设置播放位置

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|ms|int|设置播放位置，单位：毫秒|


<h3 id=stopPlayMedia>void stopPlayMedia()</h3>

- **功能**：停止影音共享

可以停止本地或他人的影音共享；</br>
影音共享被停止时，房间内所有人将收到[notifyMediaPause](#notifyMediaStop)通知；</br>

- **返回值**： 无




<h3 id=getMediaInfo>CRMediaInfo getMediaInfo()</h3>

- **功能**：获取当前影音共享信息

- **返回值**： [CRMediaInfo](Structs.md#CRMediaInfo)



<h3 id=setMediaVolume>void setMediaVolume(int volume)</h3>

- **功能**：配置影音播放音量

此调整同时影响本地影音的播放音量，也影晌他人的影音播放音量；</br>
此调整不影响他人的说话声音大小；</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|volume|int|影音音量，取值：0~255|


<h3 id=getMediaVolume>int getMediaVolume</h3>

- **功能**：获取影音播放音量

- **返回值**： 当前的影音播放音量

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|volume|int|影音音量，取值：0~255，默认为255|




<h3 id=createLocMixer>CRVSDK_ERR_DEF createLocMixer(const char* mixerID, const char* mixerCfg, const char* mixerContent)</h3>

- **功能**：创建本地混图器

开启成功后，可以通过[updateLocMixerContent](#updateLocMixerContent)更新内容；</br>
开启成功后，可以通过[addLocMixerOutput](#addLocMixerOutput)添加输出目标，如输出到文件，或输出到网络直播流；</br>
混图器如果异常停止时，将通过[notifyLocMixerStateChanged](#notifyLocMixerStateChanged)回调用户；</br>

- **返回值**： [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF)，CRVSDKERR_NOERR代表调用成功

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|char*| 混图器ID |
|mixerCfg|char*| 混图器规格配置，json格式，参见[CRLocMixerCfgObj](Structs.md#CRLocMixerCfgObj) |
|mixerContent|char*| 混图器内容配置，json格式，参见[CRLocMixerCfgObj](Structs.md#CRLocMixerCfgObj) |




<h3 id=updateLocMixerContent>CRVSDK_ERR_DEF updateLocMixerContent(const char* mixerID, const char* mixerContent)</h3>

- **功能**：更新本地混图内容

- **返回值**： [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF)，CRVSDKERR_NOERR代表调用成功

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|char*| 混图器ID, 请确保通过[createLocMixer](#createLocMixer)创建了有效的混图器 |
|mixerContent|char*| 混图器内容配置，json格式，参见[CRMixerContentObj](Structs.md#CRMixerContentObj) |



<h3 id=addLocMixerOutput>CRVSDK_ERR_DEF addLocMixerOutput(const char* mixerID, const char* mixerOutput)</h3>

- **功能**：添加混图器输出

添加输出节点后，可以通过[notifyLocMixerOutputInfo](#notifyLocMixerOutputInfo)关注输出信息</br>

- **返回值**： [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF)，CRVSDKERR_NOERR代表调用成功

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|char*| 混图器ID, 请确保通过[createLocMixer](#createLocMixer)创建了有效的混图器 |
|mixerOutput|char*| 混图器输出配置，json格式，参见[CRLocMixerOutputObj](Structs.md#CRLocMixerOutputObj) |



<h3 id=rmLocMixerOutput>void rmLocMixerOutput(const char* mixerID, const char* nameOrUrls)</h3>

- **功能**：移除混图器输出

移除输出时，内部将结束文件录制，或结束直播推流；</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|char*| 混图器ID, 请确保通过[createLocMixer](#createLocMixer)创建了有效的混图器 |
|nameOrUrls|char*| 输出的目标 |



<h3 id=destroyLocMixer>void destroyLocMixer(const char* mixerID)</h3>

- **功能**：消毁本地混图器

消毁本地混图器时，内部将自动正常移除所有输出；</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|char*| 混图器ID, 请确保通过[createLocMixer](#createLocMixer)创建了有效的混图器 |



<h3 id=getLocMixerState>CRVSDK_MIXER_STATE getLocMixerState(const char* mixerID)</h3>

- **功能**：得到混图器状态

- **返回值**： [CRVSDK_MIXER_STATE](Constant.md#CRVSDK_MIXER_STATE)

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|char*| 混图器ID, 请确保通过[createLocMixer](#createLocMixer)创建了有效的混图器 |



<h3 id=setPicResource>void setPicResource(const char* picID, const CRVideoFrame& frm)</h3>

- **功能**：配置图片资源(设置空的帧代表移除）

设置本地图像资源，可在本地混图器中引用，参见录制内容类型[CRVSDK_MIXER_CONTENT_TYPE](Constant.md#CRVSDK_MIXER_CONTENT_TYPE)的CRVSDK_MIXCONT_PIC；</br>
当资源不再需要时，应将此picID设置空的图像帧，以便sdk内部将释放相关资源；</br>
离开房间时，设置的相关图片资源，将自动被移除；</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|picID|char*| 本地资源唯一标识 |
|frm|[CRVideoFrame](Structs.md#CRVideoFrame)| 图像帧数据（CRVSDK_VFMT_YUV420P性能最佳） |




<h3 id=createCloudMixer>CRString createCloudMixer(const char* cfg);</h3>

- **功能**：创建云端混图器

可以开启多个云端混图器，具体个数和企业购买的授权相关；</br>
开启云端混图器后，房间内所有人都将收到[notifyCloudMixerStateChanged](#notifyCloudMixerStateChanged)通知进入CRVSDK_MIXER_STARTING（启动中状态）；</br>
云端混图器部署有少量耗时，如果在部署过程遇到异常，将收到[createCloudMixerFailed](#createCloudMixerFailed)回调；</br>
云端混图器启动完成并进入录制或推流状态时，将收到[notifyCloudMixerStateChanged](#notifyCloudMixerStateChanged)通知，进入CRVSDK_MIXER_RUNNING（工作中状态）；</br>
开启云端混图器在进入CRVSDK_MIXER_STARTING状态后，可以通过[updateCloudMixerContent](#updateCloudMixerContent)更新内容；</br>
混图器如果在工作中遇到异常而停止时，将收到[notifyCloudMixerStateChanged](#notifyCloudMixerStateChanged)通知，进入CRVSDK_MIXER_NULL并携带错误原因；</br>

- **返回值**： 云端混图器ID

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|cfg|char*| 云端混图器配置，josn格式，参见[CRCloudMixerCfgObj](Structs.md#CRCloudMixerCfgObj) |



<h3 id=updateCloudMixerContent>CRVSDK_ERR_DEF updateCloudMixerContent(const char* mixerID, const char* cfg)</h3>

- **功能**：更新云端混图器

更新混图器内容时，只能更新内容和布局，不能更改混图器规格、输出目标；</br>
更新混图器内容时，房间内所有人都将收到[notifyCloudMixerInfoChanged](#notifyCloudMixerInfoChanged)通知；


- **返回值**： [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF)，CRVSDKERR_NOERR代表调用成功

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|char*| 混图器ID, 参见[createCloudMixer](#createCloudMixer) |
|cfg|char*| 混图器内容配置，josn格式，参见[CRCloudMixerCfgObj](Structs.md#CRCloudMixerCfgObj) |



<h3 id=destroyCloudMixer>void destroyCloudMixer(const char* mixerID)</h3>

- **功能**：消毁云端混图器

消毁云端混图器时，调用者将收到[notifyCloudMixerStateChanged](#notifyCloudMixerStateChanged)通知进入CRVSDK_MIXER_STOPPING状态，在停止完成后，房间内所有人都将收到[notifyCloudMixerStateChanged](#notifyCloudMixerStateChanged)通知进入CRVSDK_MIXER_NULL状态；</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|char*| 混图器ID, 参见[createCloudMixer](#createCloudMixer) |



<h3 id=getAllCloudMixerInfo>CRString getAllCloudMixerInfo()</h3>

- **功能**：得到所有云端混图器信息

- **返回值**： json格式字符串， 参见[CRCloudMixerInfoList](Structs.md#CRCloudMixerInfoList)



<h3 id=getCloudMixerInfo>CRString getCloudMixerInfo(const char* mixerID)</h3>

- **功能**：得到云端混图器信息

- **返回值**： json格式字符串， 参见[CRCloudMixerInfo](Structs.md#CRCloudMixerInfo)

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|char*| 混图器ID, 参见[createCloudMixer](#createCloudMixer) |




<h3 id=getMeetingAllAttrs>void getMeetingAllAttrs(const char* cookie = "")</h3>

- **功能**：获取所有房间属性

获取结果请参见：[getMeetingAllAttrsSuccess](#getMeetingAllAttrsSuccess) 或 [getMeetingAllAttrsFail](#getMeetingAllAttrsFail)</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|




<h3 id=getMeetingAttrs>void getMeetingAttrs(const char* jsonKeys, const char* cookie = "")</h3>

- **功能**：获取部份房间属性

获取结果请参见：[getMeetingAllAttrsSuccess](#getMeetingAllAttrsSuccess) 或 [getMeetingAllAttrsFail](#getMeetingAllAttrsFail)</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|jsonKeys|char*|需要查询的房间属性key，json格式，如：["key1", "key2"]|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|



<h3 id=setMeetingAttrs>void setMeetingAttrs(const char* jsonAttrs, const char* options = "", const char* cookie = "")</h3>

- **功能**：重置所有房间属性

设置结果请参见：[setMeetingAttrsRslt](#setMeetingAttrsRslt)</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|jsonAttrs|char*|房间属性集,json格式，如：{"key1":"value1", "key2":"value2"} (key最大长度为64B，value最大长度为8KB)|
|options|char*|操作选项,json格式参见[CRMeetingAttrOptions](Structs.md#CRMeetingAttrOptions)|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|



<h3 id=addOrUpdateMeetingAttrs>void addOrUpdateMeetingAttrs(const char* jsonAttrs, const char* options = "", const char* cookie = "")</h3>

- **功能**：增加或者更新房间属性

结果请参见：[addOrUpdateMeetingAttrsRslt](#addOrUpdateMeetingAttrsRslt)</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|jsonAttrs|char*|房间属性集,json格式，如：{"key1":"value1", "key2":"value2"} (key最大长度为64B，value最大长度为8KB)|
|options|char*|操作选项,json格式参见[CRMeetingAttrOptions](Structs.md#CRMeetingAttrOptions)|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|



<h3 id=delMeetingAttrs>void delMeetingAttrs(const char* jsonKeys, const char* options = "", const char* cookie = "")</h3>

- **功能**：删除房间属性

结果请参见：[delMeetingAttrsRslt](#delMeetingAttrsRslt)</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|jsonKeys|char*|需要查询的房间属性key，json格式，如：["key1", "key2"]|
|options|char*|操作选项,json格式参见[CRMeetingAttrOptions](Structs.md#CRMeetingAttrOptions)|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|




<h3 id=clearMeetingAttrs>void clearMeetingAttrs(const char* options = "", const char* cookie = "")</h3>

- **功能**：清空房间属性

结果请参见：[clearMeetingAttrsRslt](#clearMeetingAttrsRslt)</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|options|char*|操作选项,json格式参见[CRMeetingAttrOptions](Structs.md#CRMeetingAttrOptions)|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|




<h3 id=getUserAttrs>void getUserAttrs(const char* jsonUIds, const char* jsonKeys = "", const char* cookie = "")</h3>

- **功能**：获取指定用户的所有属性

结果请参见：[getUserAttrsSuccess](#getUserAttrsSuccess) 或 [getUserAttrsFail](#getUserAttrsFail)</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|jsonUIds|char*|目标用户id列表，一次最多包含50个用户，json格式， 如：["uid1","uid2"]|
|jsonKeys|char*|将要获取的用户属性key列表（空串代表获取全部），json格式，如：["key1","key2"]|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|




<h3 id=setUserAttrs>void setUserAttrs(const char* uid, const char* jsonAttrs, const char* options = "", const char* cookie = "")</h3>

- **功能**：重置指定用户的属性

结果请参见：[setUserAttrsRslt](#setUserAttrsRslt)</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|uid|char*|目标用户id|
|jsonAttrs|char*|用户属性集, json格式，如：{"key1":"value1", "key2":"value2"} (key最大长度为64B，value最大长度为8KB)|
|options|char*|操作选项,json格式参见[CRMeetingAttrOptions](Structs.md#CRMeetingAttrOptions)|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|




<h3 id=addOrUpdateUserAttrs>void addOrUpdateUserAttrs(const char* uid, const char* jsonAttrs, const char* options = "", const char* cookie = "")</h3>

- **功能**：添加或更新指定用户的属性

结果请参见：[addOrUpdateUserAttrsRslt](#addOrUpdateUserAttrsRslt)</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|uid|char*|目标用户id|
|jsonAttrs|char*|用户属性集, json格式，如：{"key1":"value1", "key2":"value2"} (key最大长度为64B，value最大长度为8KB)|
|options|char*|操作选项,json格式参见[CRMeetingAttrOptions](Structs.md#CRMeetingAttrOptions)|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|




<h3 id=delUserAttrs>void delUserAttrs(const char* uid, const char* jsonKeys, const char* options = "", const char* cookie = "")</h3>

- **功能**：删除指定用户的属性

结果请参见：[delUserAttrsRslt](#delUserAttrsRslt)</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|uid|char*|目标用户id|
|jsonKeys|char*|需要删除的用户属性key列表，json格式，如：["key1","key2"]|
|options|char*|操作选项,json格式参见[CRMeetingAttrOptions](Structs.md#CRMeetingAttrOptions)|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|




<h3 id=clearUserAttrs>void clearUserAttrs(const char* uid, const char* options = "", const char* cookie = "")</h3>

- **功能**：清空指定用户的属性

结果请参见：[clearUserAttrsRslt](#clearUserAttrsRslt)</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|uid|char*|目标用户id|
|options|char*|操作选项,json格式参见[CRMeetingAttrOptions](Structs.md#CRMeetingAttrOptions)|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|




<h3 id=clearAllUserAttrs>void clearAllUserAttrs(const char* options = "", const char* cookie = "")</h3>

- **功能**：清空所有用户的属性

结果请参见：[clearAllUserAttrsRslt](#clearAllUserAttrsRslt)</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|options|char*|操作选项,json格式参见[CRMeetingAttrOptions](Structs.md#CRMeetingAttrOptions)|
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|



<h3 id=setScreenShareCfg>void setScreenShareCfg(const CRScreenShareCfg &cfg)</h3>

- **功能**：设置屏幕共享配置(此接口仅windows平台可用)

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|cfg|[CRScreenShareCfg](Structs.md#CRScreenShareCfg)|屏幕共享配置|


<h3 id=getScreenShareCfg>CRScreenShareCfg getScreenShareCfg()</h3>

- **功能**：获取屏幕共享配置(此接口仅windows平台可用)

- **返回值**： [CRScreenShareCfg](Structs.md#CRScreenShareCfg)


<h3 id=getScreenShareInfo>CRScreenShareInfo getScreenShareInfo()</h3>

- **功能**：获取共享信息(此接口仅windows平台可用)

- **返回值**： [CRScreenShareInfo](Structs.md#CRScreenShareInfo)



<h3 id=startScreenShare>void startScreenShare()</h3>

- **功能**：开始屏幕共享(此接口仅windows平台可用)

开始结果请参见：[startScreenShareRslt](#startScreenShareRslt)</br>
开始成功后，sdk内部将自动完成抓屏共享处理</br>
当前仅Windows平台支持发起屏幕共享</br>

- **返回值**： 无



<h3 id=stopScreenShare>void stopScreenShare()</h3>

- **功能**：开始屏幕共享(此接口仅windows平台可用)

结果请参见：[stopScreenShareRslt](#stopScreenShareRslt)</br>

- **返回值**： 无




<h3 id=pauseScreenShare>void pauseScreenShare(bool bPause)</h3>

- **功能**：暂停共享(此接口仅windows平台可用)

- **返回值**： 无

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|bPause|bool|true:共享暂停、false:正常共享|




<h3 id=setCustomizeCatchScreen>void setCustomizeCatchScreen(bool bCustomize)</h3>

- **功能**：开启/关闭自定义采屏(此接口仅windows平台可用)

开启自定义采屏后，sdk内部将不再采屏，等待集成代码调用[setCustomizeScreenImg](#setCustomizeScreenImg)接口将需要共享的图像送入SDK</br>

- **返回值**： 无

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|bCustomize|bool|true:开启、false:关闭|



<h3 id=setCustomizeScreenImg>void setCustomizeScreenImg(const CRVideoFrame &frm)</h3>

- **功能**：将自采集屏幕图像送入SDK(此接口仅windows平台可用)

此接口仅在开启自定义采屏后调用才有效，送入的图像帧率最好与[setScreenShareCfg](#setScreenShareCfg)配置的帧率匹配。</br>

- **返回值**： 无

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|frm|[CRVideoFrame](Structs.md#CRVideoFrame)|图像数据|


<h3 id=giveCtrlRight>void giveCtrlRight(const char* userID)</h3>

- **功能**：授予目标用户远程控制权限(此接口仅windows平台可用)

- **返回值**： 无

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*|目标用户id|



<h3 id=releaseCtrlRight>void releaseCtrlRight(const char* userID)</h3>

- **功能**：放弃或收回目标用户控制权限(此接口仅windows平台可用)

- **返回值**： 无

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*|目标用户id|




<h3 id=sendMouseCtrlMsg>void sendMouseCtrlMsg(CRVSDK_MOUSEMSG_TYPE msgType, CRVSDK_MOUSEKEY_TYPE keyType, int ptX, int ptY)</h3>

- **功能**：发送远控鼠标消息(此接口仅windows平台可用)

- **返回值**： 无

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|msgType|[CRVSDK_MOUSEMSG_TYPE](Constant.md#CRVSDK_MOUSEMSG_TYPE)|鼠标消息类型|
|keyType|[CRVSDK_MOUSEKEY_TYPE](Constant.md#CRVSDK_MOUSEKEY_TYPE)|鼠标键类型|
|ptX|int|鼠标在共享内容中的横坐标|
|ptY|int|鼠标在共享内容中的纵坐标|





<h3 id=sendKeyCtrlMsg>void sendKeyCtrlMsg(CRVSDK_KEYMSG_TYPE msgType, int vk, bool bExtendedKey)</h3>

- **功能**：发送远控键盘消息(此接口仅windows平台可用)

- **返回值**： 无

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|msgType|[CRVSDK_KEYMSG_TYPE](Constant.md#CRVSDK_KEYMSG_TYPE)|键盘消息类型|
|vk|int|键盘虚拟键值|
|bExtendedKey|int|是否是扩展按键|



<h2 id=CRVideoSDKMeetingCallBack>class CRVideoSDKMeetingCallBack</h2>



<h3 id=enterMeetingRslt>virtual void enterMeetingRslt(CRVSDK_ERR_DEF sdkErr)</h3>

- **功能**：进入房间结果 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |



<h3 id=notifyNetStateChanged>virtual void notifyNetStateChanged(int level)</h3>

- **功能**：通知网络状态变化

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|level| int | 网络评分0~10(10分为最佳网络) |


<h3 id=notifyMeetingStopped>virtual void notifyMeetingStopped()</h3>

- **功能**：通知房间被结束 

- **返回值**：无




<h3 id=notifyMeetingDropped>virtual void notifyMeetingDropped(CRVSDK_MEETING_DROPPED_REASON reason)</h3>

- **功能**：通知与房间断开 

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|reason| [CRVSDK_MEETING_DROPPED_REASON](Constant.md#CRVSDK_MEETING_DROPPED_REASON) | 断开原因 |



<h3 id=notifyUserEnterMeeting>virtual void notifyUserEnterMeeting(const char* userID)</h3>

- **功能**：通知有人进入房间

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*| 用户ID |



<h3 id=notifyUserLeftMeeting>virtual void notifyUserLeftMeeting(const char* userID)</h3>

- **功能**：通知有人离会

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*| 用户ID |



<h3 id=setNickNameRslt>virtual void setNickNameRslt(const char* userID, CRVSDK_ERR_DEF sdkErr)</h3>

- **功能**：修改昵称结果

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*| 用户ID |
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |



<h3 id=notifyNickNameChanged>virtual void notifyNickNameChanged(const char* userID, const char* oldName, const char* newName, const char* oprUserID)</h3>

- **功能**：通知昵称变化

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*| 用户ID |
|oldName|char*| 旧昵称 |
|newName|char*| 新昵称 |
|oprUserID|char*| 操作者用户ID |



<h3 id=kickoutRslt>virtual void kickoutRslt(CRVSDK_ERR_DEF sdkErr, const char* userID)</h3>

- **功能**：请出房间结果

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*| 用户ID |
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |



<h3 id=sendMeetingCustomMsgRslt>virtual void sendMeetingCustomMsgRslt(CRVSDK_ERR_DEF sdkErr, const char* userID)</h3>

- **功能**：发送房间内广播消息结果

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*| 用户ID |
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |



<h3 id=notifyMeetingCustomMsg>virtual void notifyMeetingCustomMsg(const char* fromUserID, const char* msg)</h3>

- **功能**：通知房间内广播消息

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|fromUserID|char*| 发送者用户ID |
|msg| char* | 自定义消息内容 |



<h3 id=notifyAudioDevChanged>virtual void notifyAudioDevChanged()</h3>

- **功能**：通知本地音频设备变化

- **返回值**：无



<h3 id=notifyAudioErr>virtual void notifyAudioErr(CRVSDK_ERR_DEF sdkErr)</h3>

- **功能**：请出房间结果

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |




<h3 id=notifyMicStatusChanged>virtual void notifyMicStatusChanged(const char* userID, CRVSDK_ASTATUS oldStatus, CRVSDK_ASTATUS newStatus, const char* oprUserID) </h3>

- **功能**：通知用户麦克风状态变化

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*| 用户ID |
|oldStatus| [CRVSDK_ASTATUS](Constant.md#CRVSDK_ASTATUS) | 旧的麦克风状态 |
|newStatus| [CRVSDK_ASTATUS](Constant.md#CRVSDK_ASTATUS) | 新的麦克风状态 |
|oprUserID|char*| 操作者用户ID |




<h3 id=notifyMicEnergy>virtual void notifyMicEnergy(const char* userID, int oldLevel, int newLevel)</h3>

- **功能**：通知用户房间内声音能量变化

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*| 用户ID |
|oldLevel| int | 之前的说话声音强度(0~10) |
|newLevel| int | 现在的说话声音强度(0~10) |




<h3 id=notifyCloseAllMic>virtual void notifyCloseAllMic(const char* oprUserID)</h3>

- **功能**：通知有人发起了全体关麦操作

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|oprUserID|char*| 操作者用户ID |




<h3 id=notifySetVoiceChange>virtual void notifySetVoiceChange(const char* userID, CRVSDK_VOICECHANGE_TYPE type, const char* oprUserID)</h3>

- **功能**：通知变声类型改变

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*| 用户ID |
|type| [CRVSDK_VOICECHANGE_TYPE](Constant.md#CRVSDK_VOICECHANGE_TYPE) | 变声类型 |
|oprUserID|char*| 操作者用户ID |



<h3 id=notifyEchoTestState>virtual void notifyEchoTestState(bool bTesting)</h3>

- **功能**：通知声音环回测试状态变化

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|bTesting|bool| 是否在声音环回测试 |



<h3 id=notifyVideoDevChanged>virtual void notifyVideoDevChanged(const char* userID)</h3>

- **功能**：通知用户视频设备变化(设备个数、设备能力参数、默认设备、启停多摄像头等）

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*| 用户ID |




<h3 id=notifyDefaultVideoChanged>virtual void notifyDefaultVideoChanged(const char* userID, int videoID)</h3>

- **功能**：通知用户默认视频设备变化

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*| 用户ID |
|videoID|int| 默认设备id |




<h3 id=openVideoDevRslt>virtual void openVideoDevRslt(int videoID, bool isSucceed)</h3>

- **功能**：本地视频设备打开结果

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|videoID|int| 默认设备id |
|isSucceed|bool| 打开结果 |



<h3 id=notifyVideoStatusChanged>virtual void notifyVideoStatusChanged(const char* userID, int oldStatus, int newStatus, const char* oprUserID)</h3>

- **功能**：通知用户视频状态变化

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*| 用户ID |
|oldStatus|[CRVSDK_VSTATUS](Constant.md#CRVSDK_VSTATUS)| 之前的状态 |
|newStatus|[CRVSDK_VSTATUS](Constant.md#CRVSDK_VSTATUS)| 当前的状态 |
|oprUserID|char*| 操作者用户ID |




<h3 id=startPlayMediaFail>virtual void startPlayMediaFail(CRVSDK_ERR_DEF sdkErr)</h3>

- **功能**：开启影音共享功能失败

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |




<h3 id=notifyMediaStart>virtual void notifyMediaStart(const char* userID)</h3>

- **功能**：通知影音共享开启

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*| 用户ID |




<h3 id=notifyMediaOpened>virtual void notifyMediaOpened(int totalTime, int w, int h)</h3>

- **功能**：通知本端影音共享文件打开成功

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|totalTime|int| 文件总时长(ms), -1代表没有总时长（通常为网络摄像头、直播流等） |
|w|int| 图像宽 |
|h|int| 图像高 |



<h3 id=notifyMediaStop>virtual void notifyMediaStop(const char* userID, CRVSDK_MEDIA_STOPREASON reason)</h3>

- **功能**：通知影音共享停止

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*| 用户ID |
|reason| [CRVSDK_MEDIA_STOPREASON](Constant.md#CRVSDK_MEDIA_STOPREASON) | 停止的原因 |




<h3 id=notifyMediaPause>virtual void notifyMediaPause(const char* userID, bool bPause)</h3>

- **功能**：通知影音共享停止

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID|char*| 用户ID |
|bPause| int | 是否暂停 |



<h3 id=notifyLocMixerStateChanged>virtual void notifyLocMixerStateChanged(const char* mixerID, CRVSDK_MIXER_STATE state)</h3>

- **功能**：通知本地录制/推流状态变化

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|char*| 混图器ID |
|state| [CRVSDK_MIXER_STATE](Constant.md#CRVSDK_MIXER_STATE) | 状态 |



<h3 id=notifyLocMixerOutputInfo>virtual void notifyLocMixerOutputInfo(const char* mixerID, const char* nameOrUrl, const char* outputInfo)</h3>

- **功能**：通知本地录制/推流状态变化

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|char*| 混图器ID |
|nameOrUrl|char*| 输出的目标 |
|outputInfo|char*| json格式,请参见[CRLocMixerOutputInfoObj](Structs.md#CRLocMixerOutputInfoObj) |



<h3 id=createCloudMixerFailed>virtual void createCloudMixerFailed(const char* mixerID, CRVSDK_ERR_DEF sdkErr)</h3>

- **功能**：创建云端录制/推流失败

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|char*| 混图器ID |
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |




<h3 id=notifyCloudMixerStateChanged>virtual void notifyCloudMixerStateChanged(const char* mixerID, CRVSDK_MIXER_STATE state, const char* exParam, const char* operUserID)</h3>

- **功能**：通知云端录制/推流状态变化

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|char*| 混图器ID |
|state| [CRVSDK_MIXER_STATE](Constant.md#CRVSDK_MIXER_STATE) | 录制状态 |
|exParam| char* | json格式扩展参数，state状态及参数定义：</br>MIXER_NULL：包含err([CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF)), errDesc字段；</br>MIXER_STARTING：包含jsonCfg字段 |
|operUserID|char*| 操作者用户ID |




<h3 id=notifyCloudMixerOutputInfoChanged>virtual void notifyCloudMixerOutputInfoChanged(const char* mixerID, const char* jsonStr)</h3>

- **功能**：通知云端录制/推流输出信息

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|char*| 混图器ID |
|jsonStr| char* | json格式，请参见[CRCloudMixerOutputInfo](Structs.md#CRCloudMixerOutputInfo) |




<h3 id=notifyCloudMixerInfoChanged>virtual void notifyCloudMixerInfoChanged(const char* mixerID)</h3>

- **功能**：通知云端录制/推流信息变化

可调用：[getCloudMixerInfo](#getCloudMixerInfo)获取相关信息</br>

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|char*| 混图器ID |




<h3 id=getMeetingAllAttrsSuccess>virtual void getMeetingAllAttrsSuccess(const char* attrs, const char* cookie)</h3>

- **功能**：获取所有房间属性成功

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|attrs|char*| 房间属性集，json结构体请参见[CRMeetingAttrObjs](Structs.md#CRMeetingAttrObjs) |
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|




<h3 id=getMeetingAllAttrsFail>virtual void getMeetingAllAttrsFail(CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：获取所有房间属性失败

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | 失败的具体原因 |
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|




<h3 id=getMeetingAttrsSuccess>virtual void getMeetingAttrsSuccess(const char* attrs, const char* cookie)</h3>

- **功能**：获取部份房间属性成功

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|attrs|char*| 房间属性集，json结构体请参见[CRMeetingAttrObjs](Structs.md#CRMeetingAttrObjs) |
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|




<h3 id=getMeetingAttrsFail>virtual void getMeetingAttrsFail(CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：获取部份房间属性失败

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | 失败的具体原因 |
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|




<h3 id=setMeetingAttrsRslt>virtual void setMeetingAttrsRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：重置所有房间属性结果

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|




<h3 id=addOrUpdateMeetingAttrsRslt>virtual void addOrUpdateMeetingAttrsRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：添加或更新房间属性结果

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|





<h3 id=delMeetingAttrsRslt>virtual void delMeetingAttrsRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：删除房间属性结果

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|




<h3 id=clearMeetingAttrsRslt>virtual void clearMeetingAttrsRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：清空所有房间属性结果

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | CRVSDK_NOERR代表成功，其它值代表失败的具体原因 |
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|




<h3 id=notifyMeetingAttrsChanged>virtual void notifyMeetingAttrsChanged(const char* adds, const char* updates, const char* delKeys)</h3>

- **功能**：通知房间属性改变

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|adds| char* | 增加房间属性集，json格式，请参见[CRMeetingAttrObjs](Structs.md#CRMeetingAttrObjs) |
|updates| char* | 变化的用户属性集，json格式，请参见[CRMeetingAttrObjs](Structs.md#CRMeetingAttrObjs) |
|delKeys| char* | 被删除的用户属性列表，json格式，如:["key1", "key2"] |




<h3 id=getUserAttrsSuccess>virtual void getUserAttrsSuccess(const char* attrs, const char* cookie)</h3>

- **功能**：获取指定用户的所有属性成功

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|attrs| char* |用户属性集，json结构体请参见[CRUsrAttrObjs](Structs.md#CRUsrAttrObjs) |
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|



<h3 id=getUserAttrsFail>virtual void getUserAttrsFail(CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：获取指定用户的所有属性失败

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | 失败的具体原因 |
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|


<h3 id=setUserAttrsRslt>virtual void setUserAttrsRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：重置指定用户的属性结果

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | 失败的具体原因 |
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|



<h3 id=addOrUpdateUserAttrsRslt>virtual void addOrUpdateUserAttrsRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：添加或更新指定用户的属性结果

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | 失败的具体原因 |
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|


<h3 id=delUserAttrsRslt>virtual void delUserAttrsRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：删除指定用户的属性结果

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | 失败的具体原因 |
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|



<h3 id=clearAllUserAttrsRslt>virtual void clearAllUserAttrsRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：清空所有用户的属性结果

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | 失败的具体原因 |
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|




<h3 id=clearUserAttrsRslt>virtual void clearUserAttrsRslt(CRVSDK_ERR_DEF sdkErr, const char* cookie)</h3>

- **功能**：清空指定用户的属性结果

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | 失败的具体原因 |
|cookie|char*|上下文参数，详细介绍参见[关键词](KeyWords.md#cookie)|




<h3 id=notifyUserAttrsChanged>virtual void notifyUserAttrsChanged(const char* uid, const char* adds, const char* updates, const char* delKeys)</h3>

- **功能**：通知用户属性改变

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|uid| char* | 用户ID |
|adds| char* | 增加房间属性集，json格式，请参见[CRMeetingAttrObjs](Structs.md#CRMeetingAttrObjs) |
|updates| char* | 变化的用户属性集，json格式，请参见[CRMeetingAttrObjs](Structs.md#CRMeetingAttrObjs) |
|delKeys| char* | 被删除的用户属性列表，json格式，如:["key1", "key2"] |





<h3 id=startScreenShareRslt>virtual void startScreenShareRslt(CRVSDK_ERR_DEF sdkErr)</h3>

- **功能**：开启屏幕共享结果

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | 失败的具体原因 |




<h3 id=stopScreenShareRslt>virtual void stopScreenShareRslt(CRVSDK_ERR_DEF sdkErr)</h3>

- **功能**：停止屏幕共享结果

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|sdkErr| [CRVSDK_ERR_DEF](Constant.md#CRVSDK_ERR_DEF) | 失败的具体原因 |




<h3 id=notifyScreenShareStarted>virtual void notifyScreenShareStarted(const char* userID)</h3>

- **功能**：通知屏幕共享开始

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|userID| char* | 共享开启人 |




<h3 id=notifyScreenShareStopped>virtual void notifyScreenShareStopped(const char* oprUserID)</h3>

- **功能**：通知屏幕共享开始

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|oprUserID| char* | 共享停止人 |



<h3 id=notifyGiveCtrlRight>virtual void notifyGiveCtrlRight(const char* operUserId, const char* targetUserId)</h3>

- **功能**：通知给予某人控制权限

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|operUserId| char* | 操作人 |
|targetUserId| char* | 权限赋予人 |




<h3 id=notifyReleaseCtrlRight>virtual void notifyReleaseCtrlRight(const char* operUserId, const char* targetUserId)</h3>

- **功能**：通知释放了控制权限

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|operUserId| char* | 操作人 |
|targetUserId| char* | 权限释放人 |




<h2 id=CRArray>class CRArray</h2>
sdk返回列表数据类型，可以拷贝对象保存，CRArray内部数据引用计数共享，拷贝、赋值开销很小；

<h3 id=CRArray_Copy>CRArray(const CRArray&lt;T&gt;& s)</h3>

- **功能**：CRArray拷贝构造

CRArray内部数据引用计数共享，开销很小；</br>


<h3 id=CRArray_Assign>CRArray& operator=(const CRArray&lt;T&gt;& s)</h3>

- **功能**：CRArray赋值

CRArray内部数据引用计数共享，开销很小；</br>


<h3 id=CRArray_Destructor>~CRArray()</h3>

- **功能**：CRArray析构

析构时减少对数据的引用，引用清0时，将释放真正数据内存；</br>


<h3 id=CRArray_clear>void clear()</h3>

- **功能**：清空数据

清空时减少对数据的引用，引用清0时，将释放真正数据内存；</br>


<h3 id=CRArray_clear>uint32_t count() const</h3>

- **功能**：得到数据个数

没有数据，或数据被清空时，返回0；</br>



<h3 id=CRArray_clear>const T* ptr() const</h3>

- **功能**：得到数组首指针

内部数据以数组方式存储，可以对指针进行++，获取后继元素；</br>



<h3 id=CRArray_clear>const T& item(uint32_t index) const</h3>

- **功能**：得到数组某个元素


<h2 id=CRString>class CRString</h2>
CRString为CRByteArray的别名，功能参见[CRByteArray](#CRByteArray)；

<h2 id=CRByteArray>class CRByteArray</h2>
CRByteArray为字节数组管理类, 有以下特性：</br>
1. 可以存储二进制buf，也可以存储字符串（CRByteArray总确保在数据尾部有一个'\0')；</br>
2. 内部数据引用计数共享，所以对象拷贝、赋值非常高效；</br>
3. 当对象数据被修改时，自动取消共享（临时深度copy），不影响其它对象内容；</br>
4. sdk中CRByteArray导出接口不包含c++ stl，stl有关接口都是以内联方式提供给外部，这样避免了对c++ stl的依赖，可以不同c++版本下二进制兼容；

<h3 id=CRByteArray_CRByteArray>CRByteArray()</h3>

- **功能**：构造函数一个空的CRByteArray

<h3 id=CRByteArray_CRByteArray2>CRByteArray(const CRByteArray &other)</h3>

- **功能**：拷贝构造，内部业务数据引用计数

<h3 id=CRByteArray_charPtr>CRByteArray(const char* data, int dataLen = -1)</h3>

- **功能**：从内存块构造CRByteArray

将对数据进行深度copy；</br>
当dataLen<0时，则假定数据为'\0'结尾的字符串，并计算其长度('\0'不计长度）；</br>
当data为NULL时，将构造出一个空的CRByteArrray;</br>


<h3 id=CRByteArray_stdstring>CRByteArray(const std::string &str)</h3>

- **功能**：从std::string构造CRByteArray

将对数据进行深度copy；</br>


<h3 id=CRByteArray_fromRawData>static CRByteArray fromRawData(const char* data, int dataLen)</h3>

- **功能**：从内存块构造CRByteArray，不copy数据，引用内存块方式

不会copy数据，且CRByteArray不拥有此指针，所以在CRByteArray仍使用此指针时，必须确保data有效；</br>
使用data指针的CRByteArray产生副本时（拷贝、赋值给其它对象），这些副本也将使用此指针；</br>
当CRByteArray以及副本都被清空或修改后，就不再引用data，此时data可以安全释放；</br>
不会在data尾部追加'\0'，所以通过[constData()](#CRByteArray_constData)获取指针当字符串处理时，要注意data以'\0'结尾；</br>


<h3 id=CRByteArray_size_ch>CRByteArray(int size, char ch)</h3>

- **功能**：构造一个size大小值都为ch的CRByteArray


<h3 id=CRByteArray_Destructor>~CRByteArray()</h3>

- **功能**：CRByteArray析构

析构时减少对数据的引用，引用清0时，将释放真正数据内存；</br>


<h3 id=CRByteArray_append_ptr>CRByteArray& append(const char* data, int dataLen=-1)</h3>

- **功能**：追加内存块

当dataLen<0时，则假定数据为'\0'结尾的字符串，并计算其长度('\0'不计长度）；</br>
当data为NULL或len为0时，将不做任何动作；</br>


<h3 id=CRByteArray_append_CRByteArray>CRByteArray& append(const CRByteArray &ba)</h3>

- **功能**：追加CRByteArray

当ba为空时，将不做任何动作；</br>
当this为空时，将自动与ba进行数据引用共享；</br>


<h3 id=CRByteArray_append_char>CRByteArray& append(char chr)</h3>

- **功能**：追加一个字符


<h3 id=CRByteArray_append_stdstring>CRByteArray& append(const std::string &str)</h3>

- **功能**：追加一个std::string


<h3 id=CRByteArray_remove>CRByteArray& remove(int pos, int len)</h3>

- **功能**：移除字符

当pos无效，或len<=0时，不做任何处理；</br>


<h3 id=CRByteArray_insert_CRByteArray>CRByteArray& insert(int pos, const CRByteArray &ba)</h3>

- **功能**：插入CRByteArray

当ba为空字符串时，将不做任何处理；</br>
当pos<0，或>length时，将不做任何处理；</br>
当pos为0时，代表插入在字符串头部；</br>
当pos为length时，代表插入在字符串尾部；</br>



<h3 id=CRByteArray_insert_ptr>CRByteArray& insert(int pos, const char *data, int dataLen = -1)</h3>

- **功能**：插入CRByteArray

当dataLen<0时，则假定数据为'\0'结尾的字符串，并计算其长度('\0'不计长度）；</br>
当data为NULL或dataLen为0时，将不做任何处理；</br>
当pos<0，或>length时，将不做任何处理；</br>
当pos为0时，代表插入在字符串头部；
当pos为length时，代表插入在字符串尾部；</br>



<h3 id=CRByteArray_reserve>void reserve(int size)</h3>

- **功能**：设置保留空间

CRByteArray将确保存内部分配的内存至少有size大小；</br>
如果size小于当前数据大小，不会做任何处理；</br>
对于要频繁插入、追加数据的情况，预先分配足够的大小，效率会更优；</br>


<h3 id=CRByteArray_capacity>int capacity() const</h3>

- **功能**：获取保留空间的大小


<h3 id=CRByteArray_squeeze>void squeeze()</h3>

- **功能**：释放多余内存空间


<h3 id=CRByteArray_clear>int clear() const</h3>

- **功能**：清空内容

CRByteArray将为成空串；</br>
如果之前的数据没有其它CRByteArray引用，将被释放；</br>


<h3 id=CRByteArray_resize>void resize(int size)</h3>

- **功能**：重置大小

如果size>当前大小，字节数组将被扩展到size大小，扩展的内存内容未初始化；</br>
如果size<当前大小，后面的数据将被删除；</br>



<h3 id=CRByteArray_size>int size() const</h3>

- **功能**：获取数据大小（同[length()](#CRByteArray_length))


<h3 id=CRByteArray_length>int length() const</h3>

- **功能**：获取数据大小（同[size()](#CRByteArray_size))



<h3 id=CRByteArray_isEmpty>bool isEmpty() const</h3>

- **功能**：判断数据是否为空 （同size()<=0)



<h3 id=CRByteArray_indexOf_char>int indexOf(char ch, int from = 0) const</h3>

- **功能**：查找字符

查找失败时，返回-1</br>


<h3 id=CRByteArray_indexOf_ptr>int indexOf(const char* data, int from = 0, int dataLen=-1) const</h3>

- **功能**：查找数据

当dataLen<0时，则假定data为'\0'结尾的字符串，并计算其长度('\0'不计长度）；</br>
查找失败时，返回-1</br>


<h3 id=CRByteArray_indexOf_CRByteArray>int indexOf(const CRByteArray &v, int from = 0) const</h3>

- **功能**：查找数据

查找失败时，返回-1</br>



<h3 id=CRByteArray_indexOf_std::string>int indexOf(const std::string &v, int from = 0) const</h3>

- **功能**：查找数据

查找失败时，返回-1</br>


<h3 id=CRByteArray_replace_char>CRByteArray& replace(char src, char dst)</h3>

- **功能**：字符替换


<h3 id=CRByteArray_replace_CRByteArray>CRByteArray& replace(const CRByteArray &src, const CRByteArray &dst)</h3>

- **功能**：数据替换


<h3 id=CRByteArray_replace_pos>CRByteArray& replace(int pos, int len, const CRByteArray&dst)</h3>

- **功能**：数据替换

pos无效时，将不做任何处理；</br>



<h3 id=CRByteArray_replace_pos>CRByteArray& replace(int pos, int len, const CRByteArray&dst)</h3>

- **功能**：数据替换

pos无效时，将不做任何处理；</br>




<h3 id=CRByteArray_mid>CRByteArray mid(int pos, int len = -1) const</h3>

- **功能**：获取子串

pos无效时，将不做任何处理；</br>
len<0，或pos+len超出length，将返回pos之后的所有内容；</br>




<h3 id=CRByteArray_left>CRByteArray left(int len) const</h3>

- **功能**：返回前len长度的子串

len<=0，将返回空串；</br>
len大于数据长度，将返整串；</br>



<h3 id=CRByteArray_left>CRByteArray left(int len) const</h3>

- **功能**：返回尾端len长度的子串

len<=0，将返回空串；</br>
len大于数据长度，将返整串；</br>



<h3 id=CRByteArray_constData>const char* constData() const</h3>

- **功能**：得到数据指针

不能对数据进行修改（内部数据为共享数据）；</br>
[fromRawData()](#CRByteArray_fromRawData)生成的CRByteArray对象，CRByteArray不会在其后追加'\0'，进行字符串处理时请注意数据尾部有结束符；</br>



<h3 id=CRByteArray_getData>char* getData()</h3>

- **功能**：得到可修改数据指针

如果有副本，将会解引用，并进行深度copy；</br>



<h3 id=CRByteArray_assign_char>CRByteArray& operator= (const char* pStr)</h3>

- **功能**：向CRByteArray设置字符串内容

将对pStr进行深度copy；</br>



<h3 id=CRByteArray_assign_CRByteArray>CRByteArray& operator= (const CRByteArray &ba)</h3>

- **功能**：向CRByteArray设置内容

内部业务数据引用计数，效率高；</br>



<h3 id=CRByteArray_assign_stdstring>CRByteArray& operator= (const std::string &str)</h3>

- **功能**：向CRByteArray设置字符串内容

将对str进行深度copy；</br>


<h3 id=CRByteArray_add_CRByteArray>CRByteArray& operator+= (const CRByteArray &ba)</h3>

- **功能**： 向CRByteArray追加串（同[append(CRByteArray&)](#CRByteArray_append_CRByteArray))


<h3 id=CRByteArray_add_CRByteArray>CRByteArray& operator+= (const char* pStr)</h3>

- **功能**： 向CRByteArray追加字符串（同[append(const char *, int len=-1)](#CRByteArray_append_char))


<h3 id=CRByteArray_add_stdstring>CRByteArray& operator+= (const std::string& str)</h3>

- **功能**： 向CRByteArray追加字符串（同[append(const std::string &)](#CRByteArray_append_stdstring))



<h3 id=CRByteArray_union>CRByteArray operator+ (const CRByteArray& ba)</h3>

- **功能**： 返回两个串拼接的结果



<h3 id=CRByteArray_union>CRByteArray operator+ (const std::string& str)</h3>

- **功能**： 返回两个串拼接的结果



<h3 id=CRByteArray_union>CRByteArray operator+ (const char* pStr)</h3>

- **功能**： 返回两个串拼接的结果



<h3 id=CRByteArray_return_char>char operator[ ](int pos) const</h3>

- **功能**： 返回pos位置上的值，请注意pos应该为合理位置；



<h3 id=CRByteArray_set_char>void set(int pos, char ch)</h3>

- **功能**： 设置pos位置上的值，请注意pos应该为合理位置；



<h3 id=CRByteArray_match>bool operator == (const CRByteArray &ba) const</h3>

- **功能**： 检查两个串的数据是否完全相同；



<h3 id=CRByteArray_dismatch>bool operator != (const CRByteArray &ba) const</h3>

- **功能**： 检查两个串的数据是否不相同；



<h3 id=CRByteArray_smallCheck>bool operator < (const CRByteArray &ba) const</h3>

- **功能**： 检查当前串是否小于ba；



<h3 id=CRByteArray_swap>void swap(CRByteArray &other)</h3>

- **功能**： 数据交换，效率高；



<h3 id=CRByteArray_trimmed>CRByteArray trimmed()</h3>

- **功能**： 返回移除了首尾空白字符的串

空白字符'\t', '\n', '\v', '\f', '\r', and ' '</br>



<h3 id=CRByteArray_toPercentEncoding>CRByteArray toPercentEncoding() const</h3>

- **功能**： 转换成URL编码串



<h3 id=CRByteArray_toStdString>std::string toStdString() const</h3>

- **功能**： 转换成std::string



<h3 id=CRByteArray_split>CRByteArrayList split(char sep) const</h3>

- **功能**： 数据分割， 返回结果为[CRByteArrayList](#CRByteArrayList)


<h2 id=CRByteArrayList>class CRByteArrayList</h2>

CRByteArrayList继承自std::list&lt;CRByteArray&gt;



<h3 id=CRByteArrayList_totalByteSize>int totalByteSize() const</h3>

- **功能**： 列表中数据总长度



<h3 id=CRByteArrayList_popByte_front>CRByteArray popByte_front(int nByteSize)</h3>

- **功能**： 从列表中取出nByteSize的数据

如果列表中数据总长度不足nByteSize，将返回所有数据；</br>
被取出数据将在列表中被移除；</br>



<h3 id=CRByteArrayList_join>CRByteArray join() const</h3>

- **功能**： 将列表中所有CRByteArray串接成一个单一的CRByteArray


<h3 id=CRByteArrayList_join>CRByteArray join(char ch) const</h3>

- **功能**： 将列表中所有CRByteArray串接成一个单一的CRByteArray， 各CRByteArray之间插入ch字符



<h3 id=CRByteArrayList_join>CRByteArray join(const CRByteArray &separator) const</h3>

- **功能**： 将列表中所有CRByteArray串接成一个单一的CRByteArray， 各CRByteArray之间插入separator


