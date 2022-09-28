# API参考

## CloudroomVideoSDK接口详情

> <font size=4>CloudroomVideoSDK 是基础控件，负责整个SDK的初始化和反初始化操作。整个程序的生命过程中只能有一个实例</font>

----

<h2 id=GetCloudroomVideoSDKVer >String GetCloudroomVideoSDKVer() </h2>

- **功能**:  获取SDK版本号
  
- **返回值**:  SDK版本号
  

<h2 id=init>CRVIDEOSDK_ERR_DEF init(Context context, SdkInitDat dat)</h2>

- **功能**:   SDK初始化 
  
- **返回值**:  CRVIDEOSDK_NOERR为成功操作，其他详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| context| Context | 程序上下文，不可为空|
|dat|[SdkInitDat](TypeDefinitions.md#SdkInitDat)| SDK配置、临时文件存放位置，不可为空 |
  
<h2 id=uninit>void uninit()</h2>

- **功能**: SDK反初始化
  
- **返回值**: 无 
 
<h2 id=serverAddr>String serverAddr()</h2>

- **功能**: 获取服务器地址
  
- **返回值**: 服务器地址（如：www.cloudroom.com）或多个服务器地址串（如：www.cloudroom.com:8080;183.60.47.52:8080;）

<h2 id=setServerAddr>void setServerAddr(String serverList)</h2>

- **功能**: 设置服务器地址
  
- **返回值**:  无
      
		
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| serverList| String| 服务器地址（如：www.cloudroom.com）或多个服务器地址串（如：www.cloudroom.com:8080;183.60.47.52:8080;）|

<h2 id=setFileUploadRate>void setFileUploadRate(int maxBytePerSec)</h2>

- **功能**: 文件上传的流量控制(SDK默认不开启流控,目前对文件上传控制的功能有：录制文件上传、网盘文件上传。)

- **返回值**:无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| maxBytePerSec | int | 每秒上传的最大字节数，小于等于0表示不开启流控|

<h2 id=setFileDownloadRate>void setFileDownloadRate(int maxBytePerSec)</h2>

- **功能**: 文件下载的流量控制

- **返回值**:无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| maxBytePerSec| int | 每秒下载的最大字节数。-1代表不进行流控|


<h2 id=setAliyunOssAccountInfo>void setAliyunOssAccountInfo(String accessKey, String accessSecret)</h2>

- **功能**: 设置阿里云OSS信息

- **返回值**:无


## CloudroomVideoMgr接口详情

管理组件，实现登录、呼叫、房间创建销毁、透明传输等功能。 整个程序的生命过程中只能有一个实例。

----

<h2 id=CloudroomVideoMgr_registerCallBack>void registerCallBack(CloudroomVideoMgrCallback callBack) </h2>

- **功能**:  注册监听回调
  
- **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| accessKey| string |用于标示用户|
| accessSecret| string |用户用于加密签名字符串和OSS用来验证签名字符串的密钥|

- **补充说明**:

参考阿里云的用户签名验证相关文档 ：https://help.aliyun.com/document_detail/31950.html?spm=a2c4g.11186623.6.707.44c0734ctzHsOa

| callBack| [CloudroomVideoMgrCallback](#CloudroomVideoMgrCallback)| 回调对象|  

<h2 id=CloudroomVideoMgr_unregisterCallBack>void unregisterCallBack(CloudroomVideoMgrCallback callBack) </h2>

- **功能**:  反注册监听回调
  
- **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callBack| CloudroomVideoMgrCallback| 反注册的回调对象|  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callBack| CloudroomVideoMgrCallback| 回调对象|  

<h2 id=Userlogin>void login(String appID, String appSecret, String nickName, String userID, String userAuthCode, String cookie)</h2>

- **功能**:  密码登录
  
- **返回值**:  无
>登录成功则触发回调[loginSuccess](#loginSuccess) ， 登录失败则触发回调[loginFail](#loginFail) 
    

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|appID		|String	|appID用于区分不同的项目，每个项目都有属于自己的唯一的appID，不同appID的项目完全独立，无法相互通信。appID请联系云屋销售获取，并开通相关套餐和功能权限。|
|appSecret	|String	|appID对应的密码(md5加密传给sdk)，可登录云屋管理后台修改|
|nickName	|String	|昵称, 长度不能大于128|
|userID		|String	|用户ID，长度不能大于128。和云屋系统无关，业务方自由填写，保证唯一性即可（同一appID下，具有唯一性即可）|
|userAuthCode	|String	|默认填空。只有开启第三方认证才需要填写。（开启第三方认证时，云屋SDK服务器将连接提前配好的业务方服务器进行实时验证。）|
|cookie		|String	|可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|

- **补充说明**:

1. 登陆成功则回调[loginSuccess](#loginSuccess)</br>
1. 登陆失败则回调[loginFail](#loginFail)</br>

<h2 id=loginByToken>void loginByToken(String token, string nickName, String userID, String userAuthCode, String cookie)</h2>

- **功能**: Token登录
- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|token	|String	|Token鉴权码|
|nickName	|String|	昵称|
|userID	|String|	用户ID。和云屋系统无关，业务方自由填写，保证唯一性即可（同一appID下，具有唯一性即可）|
|userAuthCode|	String|	默认填空。只有开启第三方认证才需要填写。（开启第三方认证时，云屋SDK服务器将连接提前配好的业务方服务器进行实时验证。）|
|cookie	|String	|可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|

- **补充说明**:

1. 登陆成功则回调[loginSuccess](#loginSuccess)</br>
1. 登陆失败则回调[loginFail](#loginFail)</br>
1. 在token有效期只有30秒时，sdk将发出[notifyTokenWillExpire](#notifyTokenWillExpire)通知，集成方应尽快通过[updateToken](#updateToken)更新新的token延长有限时间。</br>

<h2 id=updateToken>void updateToken(String token)</h2>

- **功能**: 更新Token(在Token即将失效的时候更新Token延长有限时间)

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| token  | String  | Token鉴权码 |

<h2 id=getUserAuthErrCode>int getUserAuthErrCode()</h2>

- **功能**: 获取第三方鉴权失败码（只有在登录失败原因为：CRVIDEOSDK_CUSTOMAUTH_FAILED时有效）

- **返回值**: 第三方返回的失败码



<h2 id=getUserAuthErrDesc>String getUserAuthErrDesc()</h2>

- **功能**: 获取第三方鉴权失败原因描述（只有在登录失败原因为：CRVIDEOSDK_CUSTOMAUTH_FAILED时有效）

- **返回值**: 第三方返回的描述串


<h2 id=logout>void logout()</h2>

- **功能**: 注销
  
- **返回值**:  无

:::danger

退出程序时，必须注销本次登录，然后再进行SDK反初始化操作

:::


<h2 id=setDNDStatus>void setDNDStatus(int DNDStatus, String cookie)</h2>

- **功能**:  设置免打扰状态， 如果使用到了SDK的队列功能，则入会后需调用此接口，设置自己的为免打扰状态，防止系统再次推送自己
 
 + **返回值**:  无
>设置免打扰状态成功则触发回调[setDNDStatusSuccess](#setDNDStatusSuccess) ， 设置免打扰状态失败则触发回调[setDNDStatusFail](#setDNDStatusFail) 
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| DNDStatus| int| 0代表关闭免打扰， 其它值代表开启免打扰，含义自由定义| 
| cookie| String| 自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h2 id=getUserStatus>void getUserStatus(String userID, String cookie)</h2>

- **功能**:  获取企业下指定用户的在线状态
  
- **返回值**:  无
>回调函数[getUserStatusRslt](#getUserStatusRslt)     
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String| 具体用户的账户ID| 
| cookie| String| 自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h2 id=getUserStatus>void getUserStatus(String cookie)</h2>

- **功能**:  将获取企业下所有用户在线状态（包括呼叫房间状态、免打扰状态）
  
- **返回值**:  无
>回调函数[getUserStatusRslt](#getUserStatusRslt)         
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cookie| String| 自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h2 id=startUserStatusNotify>void startUserStatusNotify(String cookie)</h2>

- **功能**:  开启用户的状态推送 。开启后，企业下所有用户状态有变化时(包括呼叫房间状态、免打扰状态)，都会收到通知。开启后，用户量越大消息量越大，所以请按需开启。
 
 + **返回值**:  无
>回调函数[startStatusPushRslt](#startStatusPushRslt)        
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cookie| String| 自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h2 id=stopUserStatusNotify>void stopUserStatusNotify(String cookie)</h2>

- **功能**:  关闭用户的状态推送
  
- **返回值**:  无
>回调函数[stopStatusPushRslt](#stopStatusPushRslt)       
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cookie| String| 自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h2 id=createMeeting>void createMeeting(String cookie)</h2>

- **功能**:  创建视频房间
  
- **返回值**:  无
>创建房间成功则触发回调[createMeetingSuccess](#createMeetingSuccess)，创建房间失败则触发[createMeetingFail](#createMeetingFail)   
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cookie| String|  自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h2 id=destroyMeeting>void destroyMeeting(int meetID, String cookie)</h2>

- **功能**:  销毁视频房间
  
- **返回值**:  无
>回调函数[destroyMeetingRslt](#destroyMeetingRslt)     
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| meetID| int|   房间号）| 
| cookie| String|  自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h2 id=callOut>String call(String calledUserID, MeetInfo meetInfo, String userExtDat, String cookie)</h2>

- **功能**:  发起呼叫，邀请用户参加视频会话， 呼叫时，对方迟迟不响应，30秒后系统自动结束呼叫
  
- **返回值**:  本次呼叫标识码（呼叫ID）
>发起呼叫成功则触发回调[callSuccess](#callSuccess)，发起呼叫失败则触发[callFail](#callFail)  
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| calledUserID| String|   被叫用户的账户ID| 
| meetInfo| [MeetInfo](TypeDefinitions.md#MeetInfo)|   房间信息，空时代表无房间信息，应由被叫创建或提供房间信息| 
| usrExtDat| String|   自定义扩展参数| 
| cookie| String|  自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h2 id=acceptCall>void acceptCall(String callID, MeetInfo meetInfo, String usrExtDat, String cookie)</h2>

- **功能**:  接受对方发起的视频请求，开始进入视频会话
  
- **返回值**:  无
>接受对方发起的视频请求成功则触发回调[acceptCallSuccess](#acceptCallSuccess)，接受对方发起的视频请求失败则触发[acceptCallFail](#acceptCallFail)  
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|    呼叫标识码| 
| meetInfo| [MeetInfo](TypeDefinitions.md#MeetInfo)|    房间信息| 
| usrExtDat| String|   自定义扩展参数| 
| cookie| String|  自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h2 id=rejectCall>void rejectCall(String callID, String usrExtDat, String cookie)</h2>

- **功能**:  拒绝对方的视频请求
 
- **返回值**:  无
>拒绝对方发起的视频请求成功则触发回调[rejectCallSuccess](#rejectCallSuccess)，拒绝对方发起的视频请求失败则触发[rejectCallFail](#rejectCallFail)      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|    呼叫标识码| 
| usrExtDat| String|   自定义扩展参数| 
| cookie| String|  自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h2 id=hangupCall>void hangupCall(String callID, String usrExtDat, String cookie)</h2>

- **功能**:  挂断正在进行的视频呼叫或视频通话
  
- **返回值**:  无
>挂断视频成功则触发回调[hangupCallSuccess](#hangupCallSuccess)，挂断视频失败则触发[hangupCallFail](#hangupCallFail)      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|    呼叫标识码| 
| usrExtDat| String|   自定义扩展参数| 
| cookie| String|  自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 


<h2 id=sendCmd>String sendCmd(String targetUserId, String data)</h2>

- **功能**:  发送小块数据（50K以内），此接口不能被cancelSend, 一次性发送，不会有进度通知
  
- **返回值**:  分配的任务ID
>回调函数[sendCmdRlst](#sendCmdRlst)
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| targetUserId| String|    目标用户ID| 
| data| String|   发送的数据，base64编码| 

<h2 id=sendBuffer>String sendBuffer(String targetUserId, String data)</h2>

- **功能**:  发送大块数据 ，分块发送，进度通知事件[sendProgress](#sendProgress), 调用cancelSend 取消发送
  
- **返回值**:  分配的任务ID
>回调函数[sendBufferRlst](#sendBufferRlst)
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| targetUserId| String|    目标用户ID| 
| data| String|   发送的数据，base64编码| 

<h2 id=sendFile>String sendFile(String targetUserId, String fileName)</h2>

- **功能**:  发送文件 ，分块发送，进度通知事件sendProgress，调用cancelSend取消发送
  
- **返回值**:  分配的任务ID
>回调函数[sendFileRlst](#sendFileRlst)    
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| targetUserId| String|    目标用户ID| 
| fileName| String|    需要发送的文件名| 

<h2 id=cancelSend>void cancelSend(String taskID)</h2>

- **功能**:  取消数据发送
  
- **返回值**:  无
>回调函数[cancelSendRlst](#cancelSendRlst)   
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| taskID| String|    任务ID| 

<h2 id=setMarkText>void setMarkText(String videoFilePathName, int timestamp, String markText)</h2>

- **功能**:  添加视频打点信息
  
- **返回值**:  无
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoFilePathName| NSString|    视频文件全路径| 
| timestamp| int|    时间戳| 
| markText| NSString|    打点信息| 

<h2 id=removeMarkText>void removeMarkText(String videoFilePathName, int timestamp)</h2>

- **功能**:  移除视频打点信息
  
- **返回值**:  无
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoFilePathName| NSString|    视频文件全路径| 
| timestamp| int|    时间戳| 

<h2 id=getAllMarks>String getAllMarks(String videoFilePathName)</h2>

- **功能**:  获取所有打点信息
  
- **返回值**:  打点信息
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoFilePathName| NSString|    视频文件全路径| 

<h2 id=getVideoMarkFile>String getVideoMarkFile(String videoFilePathName)</h2>

- **功能**:  获取打点文件的绝对文件路径名
  
- **返回值**:  打点文件的绝对文件路径名
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoFilePathName| NSString|    视频文件全路径| 


##  CloudroomVideoMgr通知回调接口详情

<h2 id=loginSuccess>void loginSuccess(String usrID, String cookie)</h2>

- **功能**: 登录成功回调

- **返回值**:无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| usrID| String|    用户ID| 
| cookie| String|    详细介绍见[关键词](KeyWords.md#cookie)| 

<h2 id=loginFail>void loginFail(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h2>

- **功能**:  登录失败回调,登录出错，可以弹出错误提示，或调用登录接口再次重试登录
  
- **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|    操作结果代码| 
| cookie| String|    详细介绍见[关键词](KeyWords.md#cookie)| 

如果启用了第三方鉴权，并在鉴权失败时（sdkErr为CRVIDEOSDK_CUSTOMAUTH_FAILED），可以通过[getUserAuthErrCode](#getUserAuthErrCode)、[getUserAuthErrDesc](#getUserAuthErrDesc)获取详细原因。


<h2 id=setDNDStatusSuccess>void setDNDStatusSuccess(String cookie)</h2>

- **功能**:  客户端设置免打扰状态操作成功响应
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cookie| String|    自定义用户数据| 

<h2 id=setDNDStatusFail>void setDNDStatusFail(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h2>

- **功能**:  客户端设置免打扰状态操作失败响应
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|    操作结果代码| 
| cookie| String|    自定义用户数据| 

<h2 id=getUserStatusRslt>void getUserStatusRslt(CRVIDEOSDK_ERR_DEF sdkErr, ArrayList&lt;UserStatus&gt;  userStatus, String cookie)</h2>

- **功能**:  获取企业内所有用户在线状态响应
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|    操作结果代码| 
| usersStatus| ArrayList&lt;[UserStatus](TypeDefinitions.md#UserStatus)&gt; |    用户在线状态信息列表| 
| cookie| String|    自定义用户数据| 

<h2 id=startStatusPushRslt>void startStatusPushRslt(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h2>

- **功能**:  启动用户状态推送响应
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|    操作结果代码| 
| cookie| String|    自定义用户数据| 

<h2 id=stopStatusPushRslt>void stopStatusPushRslt(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h2>

- **功能**:  结束用户状态推送响应
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|    操作结果代码| 
| cookie| String|    自定义用户数据| 

<h2 id=notifyUserStatus>void notifyUserStatus(UserStatus userStatus)</h2>

- **功能**:  某个用户状态变化通知
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userStatus| [UserStatus](TypeDefinitions.md#UserStatus)|     单个用户在线状态信息| 

<h2 id=lineOff>void lineOff(CRVIDEOSDK_ERR_DEF sdkErr)</h2>

- **功能**:  SDK通知自己掉线
  
- **返回值**:  无
      
<h2 id=notifyTokenWillExpire>void notifyTokenWillExpire()</h2>

- **功能**:  通知Token即将失效,有效时间剩余30s左右(可调用[updateToken](#updateToken)更新Token)
  
- **返回值**:  无

<h2 id=createMeetingSuccess>void createMeetingSuccess(MeetInfo meetInfo, String cookie)</h2>

- **功能**:  创建房间成功响应
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| meetInfo| [MeetInfo](TypeDefinitions.md#MeetInfo)|     房间信息| 
| cookie| String|     自定义用户数据| 

<h2 id=createMeetingFail>void createMeetingFail(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h2>

- **功能**:  创建房间成功响应
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|    操作失败代码| 
| cookie| String|     自定义用户数据| 

<h2 id=destroyMeetingRslt>void destroyMeetingRslt(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h2>

- **功能**:  结束房间响应
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|   操作结果代码，成功为CRVIDEOSDK_NOERR | 
| cookie| String|     自定义用户数据| 

<h2 id=callSuccess>void callSuccess(String callID, String cookie)</h2>

- **功能**:  呼叫他人操作成功响应
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|     呼叫全局标识| 
| cookie| String|     自定义用户数据| 

<h2 id=callFail>void callFail(String callID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h2>

- **功能**:  呼叫他人操作失败响应
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|     呼叫全局标识| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|     操作失败代码| 
| cookie| String|     自定义用户数据| 

<h2 id=acceptCallSuccess>void acceptCallSuccess(String callID, String cookie)</h2>

- **功能**:  接受他人呼叫操作成功响应
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|     呼叫全局标识| 
| cookie| String|     自定义用户数据| 

<h2 id=acceptCallFail>void acceptCallFail(String callID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h2>

- **功能**:  接受他人呼叫操作失败响应
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|     呼叫全局标识| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|     操作失败代码| 
| cookie| String|     自定义用户数据| 

<h2 id=rejectCallSuccess>void rejectCallSuccess(String callID, String cookie)</h2>

- **功能**:  拒绝他人的呼叫成功响应
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|     呼叫全局标识| 
| cookie| String|     自定义用户数据| 

<h2 id=rejectCallFail>void rejectCallFail(String callID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h2>

- **功能**:  拒绝他人的呼叫失败响应
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|     呼叫全局标识| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|     操作失败代码| 
| cookie| String|     自定义用户数据| 

<h2 id=hangupCallSuccess>void hangupCallSuccess(String callID, String cookie)</h2>

- **功能**:  挂断呼叫操作成功响应
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|     呼叫全局标识| 
| cookie| String|     自定义用户数据| 

<h2 id=hangupCallFail>void hangupCallFail(String callID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h2>

- **功能**:  拒绝他人呼叫操作失败响应
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|     呼叫全局标识| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|     操作失败代码 | 
| cookie| String|     自定义用户数据| 

<h2 id=notifyCallIn>void  notifyCallIn(String callID, MeetInfo meetInfo, String callerID, String usrExtDat)</h2>

- **功能**:  服务端通知被邀请
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|     呼叫全局标识| 
| meetInfo| [MeetInfo](TypeDefinitions.md#MeetInfo)|     房间信息，空时代表无房间信息，应由被叫创建或提供房间信息| 
| callerID| String|     呼叫人员的标识ID| 
| usrExtDat| String|     自定义扩展参数| 

<h2 id=notifyCallAccepted>void notifyCallAccepted(String callID, MeetInfo meetInfo, String usrExtDat)</h2>

- **功能**:   服务端通知呼叫邀请被接受回调
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|     呼叫全局标识| 
| meetInfo| [MeetInfo](TypeDefinitions.md#MeetInfo)|     房间信息，空时代表无房间信息，应由被叫创建或提供房间信息| 
| usrExtDat| String|     自定义扩展参数| 

<h2 id=notifyCallRejected>void notifyCallRejected(String callID, CRVIDEOSDK_ERR_DEF reason, String usrExtDat)</h2>

- **功能**:   服务端通知呼叫邀请被拒绝回调
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|     呼叫全局标识| 
| reason| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|     呼叫被对方拒绝的原因代码| 
| usrExtDat| String|     自定义扩展参数| 

<h2 id=notifyCallhangup>void notifyCallhangup(String callID, String usrExtDat)</h2>

- **功能**:  SDK通知呼叫被挂断
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| String|     呼叫全局标识| 
| usrExtDat| String|     自定义扩展参数| 
 
<h2 id=sendCmdRlst>void sendCmdRlst(String taskID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h2>

- **功能**:  发送数据时，SDK通知发送结果
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| taskID| String|     发送任务id| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|     操作结果代码| 
| cookie| String|     自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h2 id=sendBufferRlst>void sendBufferRlst(String taskID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h2>

- **功能**:  发送数据时，SDK通知发送结果
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| taskID| String|     发送任务id| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|     操作结果代码| 
| cookie| String|     自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h2 id=sendFileRlst>void sendFileRlst(String taskID, String fileName, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h2>

- **功能**:  发送数据时，SDK通知发送结果
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| taskID| String|     发送任务id| 
| fileName| String|     文件名| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|     操作结果代码| 
| cookie| String|     自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h2 id=sendProgress>void sendProgress(String taskID, int sendedLen, int totalLen, String cookie)</h2>

- **功能**:  发送数据时，SDK通知发送进度
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| taskID| String|     发送任务id| 
| sendedLen| int|     已发送的数据长度| 
| totalLen| int|     需要发送的总长度| 
| cookie| String|     自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h2 id=cancelSendRlst>void cancelSendRlst(String taskID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h2>

- **功能**:  取消发送操作响应
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| taskID| String|     发送任务id| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|     操作结果代码| 
| cookie| String|     自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h2 id=notifyCmdData>void notifyCmdData(String sourceUserId, String data)</h2>

- **功能**:  SDK通知收到小块数据
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sourceUserId| String|     数据来源| 
| data| String|     数组数据| 

<h2 id=notifyBufferData>void notifyBufferData(String sourceUserId, String data)</h2>

- **功能**:  SDK通知收到大块数据
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sourceUserId| String|     数据来源| 
| data| String|     数组数据| 

<h2 id=notifyFileData>void notifyFileData(String sourceUserId, String tmpFile, String orgFileName)</h2>

- **功能**:  SDK通知收到文件数据
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sourceUserId| String|     数据来源| 
| tmpFile| String|     临时文件，不需要时，请移除或删除对应文件| 
| orgFileName| String|     源始文件名| 

<h2 id=notifyCancelSend>void notifyCancelSend(String taskID)</h2>

- **功能**:  通知发来的数据/文件被取消
  
- **返回值**:  无
      
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| taskID| 发送的任务ID|     数据来源|



<h2 id=invite>String invite(String invitedUserID, String usrExtDat, String cookie)</h2>

- **功能**：发送邀请

- **返回值**:返回inviteID(每个邀请对应的唯一ID)

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteeUserID  | String  | 受邀者用户ID  |
| usrExtDat  | String  |  用户扩展数据 |
| cookie  | String  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h2 id=acceptInvite>void acceptInvite(String inviteID, String usrExtDat, String cookie)</h2>

- **功能**：接受对方的邀请

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| usrExtDat  | String  |  用户扩展数据 |
| cookie  | String  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h2 id=rejectInvite>void rejectInvite(String inviteID, String usrExtDat, String cookie)</h2>

- **功能**：拒绝对方的邀请

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| usrExtDat  | String  |  用户扩展数据 |
| cookie  | String  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h2 id=cancelInvite>void cancelInvite(String inviteID, String usrExtDat, String cookie)</h2>

- **功能**：取消自己发送的邀请

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| usrExtDat  | String  |  用户扩展数据 |
| cookie  | String  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h2 id=inviteSuccess>void inviteSuccess(String inviteID, String cookie)</h2>

- **功能**：发送邀请成功

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| cookie  | String  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h2 id=inviteFail>void inviteFail(String inviteID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h2>

- **功能**：发送邀请失败

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| sdkErr  | CRVIDEOSDK_ERR_DEF  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
| cookie  | String  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h2 id=cancelInviteSuccess>void cancelInviteSuccess(String inviteID, String cookie)</h2>

- **功能**：取消自己发送的邀请成功

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| cookie  | String  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h2 id=cancelInviteFail>void cancelInviteFail(String inviteID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h2>

- **功能**：取消自己发送的邀请失败

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| sdkErr  | CRVIDEOSDK_ERR_DEF  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
| cookie  | String  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h2 id=acceptInviteSuccess>void acceptInviteSuccess(String inviteID, String cookie)</h2>

- **功能**：接受对方的邀请成功

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| cookie  | String  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h2 id=acceptInviteFail>void acceptInviteFail(String inviteID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h2>

- **功能**：接受对方的邀请失败

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| sdkErr  | CRVIDEOSDK_ERR_DEF  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
| cookie  | String  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h2 id=rejectInviteSuccess>void rejectInviteSuccess(String inviteID, String cookie)</h2>

- **功能**：拒绝对方的邀请成功

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| cookie  | String  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h2 id=rejectInviteFail>void rejectInviteFail(String inviteID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h2>

- **功能**：拒绝对方的邀请失败

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| sdkErr  | CRVIDEOSDK_ERR_DEF  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
| cookie  | String  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h2 id=notifyInviteIn>void notifyInviteIn(String inviteID, String inviterUsrID, String usrExtDat)</h2>

- **功能**：通知有人邀请

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| inviterUsrID  | String  | 邀请者用户ID  |
| usrExtDat  | String  | 用户扩展数据  |

<h2 id=notifyInviteAccepted>void notifyInviteAccepted(String inviteID, String usrExtDat)</h2>

- **功能**：通知邀请被接受

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| usrExtDat  | String  | 用户扩展数据  |

<h2 id=notifyInviteRejected>void notifyInviteRejected(String inviteID, CRVIDEOSDK_ERR_DEF reason, String usrExtDat)</h2>

- **功能**：通知邀请被拒绝

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| reason  | CRVIDEOSDK_ERR_DEF  | 邀请被拒绝原因，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
| usrExtDat  | String  | 用户扩展数据  |

<h2 id=notifyInviteCanceled>void notifyInviteCanceled(String inviteID, CRVIDEOSDK_ERR_DEF reason, String usrExtDat)</h2>

- **功能**：通知邀请被取消

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | String  | 邀请ID  |
| reason  | CRVIDEOSDK_ERR_DEF  | 邀请被取消原因，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
| usrExtDat  | String  | 用户扩展数据  |


## CloudroomVideoMeeting接口详情

房间核心组件，实现通话建立、音频采集播入、视频采集编解码、屏幕共享、录制、影音播放等功能。整个程序的生命过程中只能有一个实例。

----

<h2 id=CloudroomVideoMeeting_registerCallBack>void registerCallBack(CloudroomVideoCallback  callBack) </h2>

- **功能**:  注册监听回调
  
- **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callBack| CloudroomVideoCallback| 回调对象|  

<h2 id=CloudroomVideoMeeting_unregisterCallBack>void unregisterCallBack(CloudroomVideoCallback  callBack) </h2>

- **功能**:  反注册监听回调
  
- **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callBack| CloudroomVideoCallback| 反注册的回调对象|  

<h2 id=enterMeeting>void enterMeeting(int meetID)</h2>

- **功能**:  使用房间ID和密码（可为空）进入指定的视频房间
  
- **返回值**:  无
>回调函数[enterMeetingRslt](#enterMeetingRslt)  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| meetID| int| 视频房间ID|  

<h2 id=exitMeeting>void exitMeeting()</h2>

- **功能**:  离开房间 ，调用此接口离开会话时，其他会话用户会收到userLeftMeeting的消息通知
  
- **返回值**:  无
>回调函数[userLeftMeeting](#userLeftMeeting)  

<h2 id=getAllMembers>ArrayList&lt;MemberInfo&gt;  getAllMembers()</h2>

- **功能**:  获取所有用户的信息
  
- **返回值**:  ArrayList&lt;[MemberInfo](TypeDefinitions.md#MemberInfo)&gt;-所有用户的信息


<h2 id=getMemberInfo>MemberInfo getMemberInfo(String userId)</h2>

- **功能**:  获取某个用户的信息
  
- **返回值**:  [MemberInfo](TypeDefinitions.md#MemberInfo) - 用户的信息
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userId| String|  用户ID| 

<h2 id=getNickName>String getNickName(String userId)</h2>

- **功能**:  获取某个用户的昵称
  
- **返回值**: 用户的昵称
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userId| String|  用户ID| 

<h2 id=setNickName>void setNickName(String userID, String nickName)</h2>

- **功能**:  设置某个用户的昵称， 调用此接口如果设置成功，其他会话用户会收到 notifyNickNameChanged
 
- **返回值**: 无
>回调函数[setNickNameRsp](#setNickNameRsp)  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userId| String|  用户ID| 
| nickname| String|  新的用户昵称| 

<h2 id=isUserInMeeting>boolean isUserInMeeting(String userID)</h2>

- **功能**:  判断某个用户是否在房间中
  
- **返回值**: 用户是否在房间中
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userId| String|  用户ID| 

<h2 id=setAudioCfg>void setAudioCfg(AudioCfg cfg)</h2>

- **功能**:  设置麦克风音频参数
  
- **返回值**: 无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cfg| [AudioCfg](TypeDefinitions.md#AudioCfg)|  音频参数 | 

 <h2 id=getAudioCfg>AudioCfg getAudioCfg()</h2>

- **功能**:  获取音频参数
  
- **返回值**: [AudioCfg](TypeDefinitions.md#AudioCfg)-音频参数

 <h2 id=setMicVolumeScaling>boolean setMicVolumeScaling(int scale)</h2>

- **功能**:  设置麦克风音量增益
  
- **返回值**: 是否成功
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| scale| int|  麦克风音量增益（范围：1-20）| 

<h2 id=getMicEnergy >int getMicEnergy(String userID)</h2>

- **功能**:  获取用户说话声音大小
  
- **返回值**: 音量大小（0~10）
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|  用户的ID| 

<h2 id=openMic>void openMic(String userID)</h2>

- **功能**:  打开用户的麦克风， 打开麦克风会触发音频状态变化的回调函数audioStatusChanged 新状态参数先会进入到AOPENING状态，
  等服务器处理后才会进入AOPEN状态，此时说话才能被采集到
  
- **返回值**: 无
>回调函数[audioStatusChanged](#audioStatusChanged)  
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|  用户的ID| 

<h2 id=closeMic>void closeMic(String userID)</h2>

- **功能**:  关闭用户的麦克风 ，关麦克风会触发音频状态变化的回调函数audioStatusChanged 新状态参数会变为ACLOSE 关麦操作是立即生效的，会立即停止采集
  
- **返回值**: 无
>回调函数[audioStatusChanged](#audioStatusChanged)  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|  用户的ID| 

<h2 id=getAudioStatus>ASTATUS getAudioStatus(String userID)</h2>

- **功能**:  获取用户的麦状态
   
- **返回值**: [ASTATUS](Constant.md#ASTATUS)-麦克风设备状态
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|  用户的ID| 

<h2 id=setSpeakerVolume>boolean setSpeakerVolume(int level)</h2>

- **功能**:  设置本地扬声器音量
   
- **返回值**: 是否成功
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| level| int|  本地扬声器音量| 

<h2 id=getSpeakerVolume>int getSpeakerVolume()</h2>

- **功能**:  获取本地扬声器音量 ，读写属性，音量等级类型 0-255
   
- **返回值**: 本地扬声器音量


<h2 id=setSpeakerMute>void setSpeakerMute(boolean bMute)</h2>

- **功能**:  设置播放是否静音
   
- **返回值**: 是否静音
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| bMute| boolean|  播放是否静音| 

<h2 id=getSpeakerMute>boolean getSpeakerMute()</h2>

- **功能**:  获取播放是否静音
   
- **返回值**: 是否静音


<h2 id=setSpeakerOut>boolean setSpeakerOut(boolean speakerOut)</h2>

- **功能**:  设置外放状态
   
- **返回值**: 是否成功
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| speakerOut| boolean|  是否外放| 

<h2 id=getSpeakerOut>boolean getSpeakerOut()</h2>

- **功能**:  获取外放状态
   
- **返回值**: 是否外放
 
<h2 id=setAllAudioClose>void setAllAudioClose()</h2>

- **功能**:  关闭所有用户的麦克风 ， 调用此接口后会话内其他人的麦克风会关闭，同时收到消息audioStatusChanged
- **返回值**: 无
>回调函数[audioStatusChanged](#audioStatusChanged) 

<h2 id=getAllVideoInfo>ArrayList&lt;UsrVideoInfo&gt; getAllVideoInfo(String userId)</h2>

- **功能**:  获取用户所有的摄像头信息
   
- **返回值**: ArrayList&lt;[UsrVideoInfo](TypeDefinitions.md#UsrVideoInfo)&gt;-用户所有的摄像头信息

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|   用户ID| 

<h2 id=createCustomVideoDev>short createCustomVideoDev(String camName, VIDEO_FORMAT pixFmt, int width, int height, String extParams)</h2>

- **功能**:  创建自定义摄像头（sdk最大支持5个)， 添加成功后与本地摄像头处理一致；getAllVideoInfo接口可以识别摄像头类型
   
- **返回值**:  返回值小于0， 则代表创建失败， 返回值大于等于0， 则代表摄像头编号

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| camName| String|   摄像头名称| 
| pixFmt| [VIDEO_FORMAT](Constant.md#VIDEO_FORMAT)|    图像格式| 
| width| int|   图像宽度| 
| height| int|   图像高度| 
| extParams| String|    扩展参数，没有为空| 

<h2 id=destroyCustomVideoDev>void destroyCustomVideoDev(short videoID)</h2>

- **功能**:  消毁自定义摄像头
   
- **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoID| short|    摄像头id (createCustomVideoDev返回值）| 

<h2 id=inputCustomVideoDat>void inputCustomVideoDat(short videoID, byte[] data, int timeStamp)</h2>

- **功能**:  输入摄像头图像数据
   
- **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoID| short|    摄像头id (createCustomVideoDev返回值）| 
| data| byte[]|    图像数据（请保证格式、和尺寸与摄像头匹配）| 
| timeStamp| int|    保留字段，请填0 | 

<h2 id=inputCustomVideoDat>void inputCustomVideoDat(short videoID, byte[] data, int timeStamp)</h2>

- **功能**:  输入摄像头图像数据
   
- **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoID| short|    摄像头id (createCustomVideoDev返回值）| 
| data| byte[]|    图像数据（请保证格式、和尺寸与摄像头匹配）| 
| timeStamp| int|    保留字段，请填0 | 

<h2 id=setVideoCfg>void setVideoCfg(VideoCfg cfg)</h2>

- **功能**:  设置摄像头参数
   
- **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cfg| [VideoCfg](TypeDefinitions.md#VideoCfg) |    摄像头参数| 

<h2 id=getVideoCfg>VideoCfg getVideoCfg()</h2>

- **功能**:  获取设置的摄像头参数
   
- **返回值**:  [VideoCfg](TypeDefinitions.md#VideoCfg)-摄像头参数
  
<h2 id=setVideoEffects>void setVideoEffects(VideoEffects effects)</h2>

- **功能**:  配置视频效果
   
- **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cfg| [VideoEffects](TypeDefinitions.md#VideoEffects) |    视频效果配置| 

<h2 id=getVideoEffects>VideoCfg getVideoEffects()</h2>

- **功能**:  获取视频效果配置
   
- **返回值**:  [VideoEffects](TypeDefinitions.md#VideoEffects)-视频效果配置

<h2 id=setLocVideoAttributes>void setLocVideoAttributes(short videoID, VideoAttributes attributes)</h2>

- **功能**:  设置某个摄像头私有参数
   
- **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoID| short|    本地摄像头id| 
| attributes| [VideoAttributes](TypeDefinitions.md#VideoAttributes)|    摄像头私有参数,| 

<h2 id=getLocVideoAttributes>VideoAttributes getLocVideoAttributes(short videoID)</h2>

- **功能**:  获取某个摄像头私有参数
   
- **返回值**:  [VideoAttributes](TypeDefinitions.md#VideoAttributes)-摄像头私有参数
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoID| short|    本地摄像头id| 

<h2 id=getWatchableVideos>ArrayList&lt;UsrVideoId&gt;  getWatchableVideos()</h2>

- **功能**:  获取房间内所有可观看的摄像头
   
- **返回值**:  ArrayList&lt;[UsrVideoId](TypeDefinitions.md#UsrVideoId)&gt;-房间内所有可观看的摄像头 

<h2 id=openVideo>void openVideo(String userID)</h2>

- **功能**:  打开用户的摄像头，以便本地、远端显示视频图像

- **返回值**:  无
>回调函数[openVideoRslt](#openVideoRslt), 调用打开和关闭麦克风接口都会触发对应用户的回调[videoStatusChanged](#videoStatusChanged) 

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    用户的ID| 

<h2 id=closeVideo>void closeVideo(String userID)</h2>

- **功能**:  关闭用户的摄像头 ，
  
- **返回值**:  无
>调用打开和关闭麦克风接口都会触发对应用户的回调[videoStatusChanged](#videoStatusChanged) 

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    用户的ID| 

<h2 id=getVideoStatus>VSTATUS getVideoStatus(String userID)</h2>

- **功能**:  获取用户的摄像头状态
  
- **返回值**:  [VSTATUS](Constant.md#VSTATUS)-麦克风摄像头状态
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    用户的ID| 

<h2 id=getDefaultVideo>short getDefaultVideo(String userID)</h2>

- **功能**:  获取指定用户的默认摄像头 ，如果用户没有摄像头，返回0
  
- **返回值**:  摄像头ID
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    用户的ID| 

<h2 id=setDefaultVideo>void setDefaultVideo(String userID, short videoID)</h2>

- **功能**:  设置默认的摄像头 ，videoID 应该从getAllVideoInfo返回值中获取
  
- **返回值**:  无
      

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    用户的ID| 
| videoID| short|    摄像头ID| 

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| usrVideoID| [UsrVideoId](TypeDefinitions.md#UsrVideoId)|    用户摄像头ID | 

<h3 id=getVideoImg>VideoFrame getVideoImg(UsrVideoId usrVideoID)</h3>
<h3 >VideoFrame getVideoImg(UsrVideoId usrVideoID, VIDEO_FORMAT fmt)</h3>
<h3 >VideoFrame getVideoImg(UsrVideoId usrVideoID, Size size)</h3>
<h3 >VideoFrame getVideoImg(UsrVideoId usrVideoID, Size size, VIDEO_FORMAT fmt)</h3>

  + **功能**:  获取指定用户摄像头的最新图像
  
  + **返回值**:  指定用户摄像头的最新图像,详见[VideoFrame](TypeDefinitions.md#RawFrame)
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| usrVideoID| UsrVideoId|     用户摄像头标识ID，详见定义[UsrVideoId](TypeDefinitions.md#UsrVideoId) | 
| size| Size|    图像大小，详见定义[Size](TypeDefinitions.md#Size) | 
| fmt| VIDEO_FORMAT|    图像格式，详见定义[VIDEO_FORMAT](Constant.md#VIDEO_FORMAT) | 
 
<h2 id=getLocalVideoParams>String getLocalVideoParams(short videoID)</h2>

- **功能**:  获取指定本地摄像头参数
  
- **返回值**:  指定本地摄像头参数,json格式，如{"摄像头参数名称":[可用参数列表]}
      

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoID| short|    摄像头ID| 

<h2 id=setLocalVideoParam>void setLocalVideoParam(short videoID, String param, String value)</h2>

- **功能**:  设置指定本地摄像头参数
  
- **返回值**:  指定本地摄像头参数,json格式，如{"摄像头参数名称":[可用参数列表]}
      

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoID| short|    摄像头ID| 
| param| String|    摄像头参数名称| 
| value| String|    摄像头参数值| 

<h2 id=isScreenShareStarted>boolean isScreenShareStarted()</h2>

- **功能**:  获取屏幕共享是否已开启
  
- **返回值**:  屏幕共享是否已开启



<h2 id=getScreenShareCfg>string getScreenShareCfg()</h2>

- **功能**: 获取屏幕共享配置

- **返回值**:屏幕共享配置，参见[ScreenShareCfg](TypeDefinitions.md#ScreenShareCfg)


<h2 id=setScreenShareCfg>void setScreenShareCfg(ScreenShareCfg cfg)</h2>

- **功能**: 设置屏幕共享配置

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|string	|[ScreenShareCfg](TypeDefinitions.md#ScreenShareCfg) |	屏幕共享配置|


<h2 id=startScreenShare>void startScreenShare()</h2>

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


<h2 id=setCustomizeCatchScreen>void setCustomizeCatchScreen(boolean newVal)</h2>

- **功能**: 开启/关闭自定义的抓屏

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|newVal	|boolean| 开启后，应按fps周期调用[setCustomizeScreenImg](#setCustomizeScreenImg)送入图像|


<h2 id=setCustomizeScreenImg>void setCustomizeScreenImg(final View view)</h2>
<h2 id=setCustomizeScreenImg2>void setCustomizeScreenImg(final Bitmap bitmap)</h2>

- **功能**: 送入自定义的抓屏图像数据

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|view	|View|抓View的显示图像|
|bitmap|Bitmap|图像数据|


<h2 id=stopScreenShare>void stopScreenShare()</h2>

- **功能**: 停止屏幕共享

- **返回值**:无

<h2 id=startScreenMark>void startScreenMark()</h2>

- **功能**: 开始屏幕共享标注

- **返回值**: 无


<h2 id=stopScreenMark>void stopScreenMark()</h2>

- **功能**: 停止屏幕共享标注

- **返回值**: 无


<h2 id=enableOtherMark>void enableOtherMark(boolean enable)</h2>

-  **功能**：允许他人标注屏幕

-  **返回值**:无

-  **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| enable  | boolean  | 是否允许他人标注 |

<h2 id=isEnableOtherMark>boolean isEnableOtherMark()</h2>

-  **功能**：获取是否允许他人标注屏幕

-  **返回值**: 是否允许他人标注

-  **参数**:


<h2 id=createLocMixer>CRVIDEOSDK_ERR_DEF createLocMixer(String mixerID, MixerCfg mixerCfg, ArrayList&lt; MixerCotent&gt; mixerContent)</h2>

- **功能**:  创建本地混图器（用于本地录制、本地推流），当需要多个不同内容的录制、或直播时，就要创建多个混图器 。混图器开消比较大，多个同样图像的输出应该有一个混图器加上多个输出实现
  
- **返回值**:  [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)-操作结果码
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| String|    混图器唯一标识| 
| mixerCfg| [MixerCfg](TypeDefinitions.md#MixerCfg)|    混图器规格配置 | 
| mixerContents| ArrayList&lt;[MixerCotent](TypeDefinitions.md#MixerCotent)&gt;|    混图器内容配置 | 

 <h2 id=updateLocMixerContent>CRVIDEOSDK_ERR_DEF updateLocMixerContent(String mixerID, ArrayList&lt; MixerCotent&gt; mixerContents></h2>

- **功能**:  更新本地混图器内容
  
- **返回值**:  [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)-操作结果码
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| String|    混图器唯一标识| 
| MixerContents| ArrayList&lt;[MixerCotent](TypeDefinitions.md#MixerCotent)&gt;|    混图器内容配置  | 
 
<h2 id=destroyLocMixer>void destroyLocMixer(String mixerID)</h2>

- **功能**:  消毁本地混图器 , 消毁本地混图器后， 基于此混图器的录制输出、直播推流输出将自动结束
  
- **返回值**:  无
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| String|    混图器唯一标识| 

 <h2 id=getLocMixerState>MIXER_STATE getLocMixerState(String mixerID)</h2>

- **功能**:  获取本地混图器状态
  
- **返回值**:  [MIXER_STATE](Constant.md#MIXER_STATE)-混图器状态
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| String|    混图器唯一标识| 

 <h2 id=addLocMixerOutput>CRVIDEOSDK_ERR_DEF addLocMixerOutput(String mixerID, ArrayList&lt;MixerOutPutCfg&gt; mixerOutput)</h2>

- **功能**:  开启本地录制、开启直播推流
  
- **返回值**:  [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)-操作结果码
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| String|    混图器唯一标识| 
| mixerOutput| ArrayList&lt;[MixerOutPutCfg](TypeDefinitions.md#MixerOutPutCfg)&gt;|    本地输出对象  | 

- <p style="color:red; font-size:20px">注意事项:</p>

	+ 可以一次添加多个输出，也可以依据业务需要稍后再添加新的输出
	+ 多个输出不能同名、或同一url
	+ 每个输出，有独立的信息通知，请见事件locMixerOutputInfo
	+ 如果输出异常时，将自动停止, 停止本地录制、直播推流


 <h2 id=rmLocMixerOutput>void rmLocMixerOutput(String mixerID, ArrayList&lt;String&gt; nameOrUrls)</h2>

- **功能**:  停止本地录制、直播推流 , 所有输出停止后并不会消毁混图器，如果混图器不再需要请手工消毁
  
- **返回值**:  无
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| String|    混图器唯一标识| 
| nameOrUrls| ArrayList&lt;String&gt;|    要停止的录制文件名或直播url列表| 

<h2 id=getAllRecordFiles>ArrayList&lt;RecordFileShow&gt; getAllRecordFiles()</h2>

- **功能**:  取得所有录制文件信息
  
- **返回值**:  ArrayList&lt;义[RecordFileShow](TypeDefinitions.md#RecordFileShow)&gt;所有录制文件信息
   

<h2 id=addFileToRecordMgr>int addFileToRecordMgr(String fileName, String filePath)</h2>

- **功能**:  添加本地文件到录制文件管理中 , 第三方录制文件调用此接口后可进行本地回放和上传到视频服务器上，和自己录制的文件一样可以正常
  
- **返回值**:  -1：本地文件不存在，0：成功，1：文件已经被添加过
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| filename| String|    文件名，不含路径| 
| filePath| String|    文件路径，不含文件名| 

<h2 id=removeFromFileMgr>void removeFromFileMgr(String fileName)</h2>

- **功能**:  删除本地的录制文件，上传中的文件会被取消上传 , 已上传完成的服务器文件不受影响
  
- **返回值**:  无
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| filename| String|    文件名，不含路径| 

<h2 id=uploadRecordFile>void uploadRecordFile(String fileName)</h2>

- **功能**:  上传文件
  
- **返回值**:  无
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| filename| String|    文件名，不含路径| 

<h2 id=uploadRecordFile>void uploadRecordFile(String fileName, String svrPathFileName)</h2>

- **功能**:  上传文件到服务器指定位置
  
- **返回值**:  无
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| filename| String|    文件名，不含路径| 
| svrPathFileName| String|    文件存放在服务器上的相对路径文件名（如/AA/BB/CC/test.mp4）| 

<h2 id=cancelUploadRecordFile>void cancelUploadRecordFile(String filename)</h2>

- **功能**:  取消上传中的录制文件
  
- **返回值**:  无
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| filename| String|    文件名，不含路径| 

<h2 id=playbackRecordFile>void playbackRecordFile(String filename)</h2>

- **功能**:  回放录制文件 , 可创建影音控件显示录制内容，功能同接口startPlayMedia，如果录制文件被加密，则只能使用playbackRecordFile来回放
  
- **返回值**:  无
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| filename| String|    文件名，不含路径| 


<h2 id=createCloudMixer>String createCloudMixer(string cfg)</h2>

- **功能**：创建云端混图器

可以开启多个云端混图器，具体个数和企业购买的授权相关；</br>
开启云端混图器后，房间内所有人都将收到[cloudMixerStateChanged](#cloudMixerStateChanged)通知进入MIXER_STARTING（启动中状态）；</br>
云端混图器部署有少量耗时，如果在部署过程遇到异常，将收到[createCloudMixerFailed](#createCloudMixerFailed)回调；</br>
云端混图器启动完成并进入录制或推流状态时，将收到[cloudMixerStateChanged](#cloudMixerStateChanged)通知，进入MIXER_RUNNING（工作中状态）；</br>
开启云端混图器在进入MIXER_STARTING状态后，可以通过[updateCloudMixerContent](#updateCloudMixerContent)更新内容；</br>
混图器如果在工作中遇到异常而停止时，将收到[cloudMixerStateChanged](#cloudMixerStateChanged)通知，进入MIXER_NULL并携带错误原因；</br>

- **返回值**： 云端混图器ID

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|cfg|string| 云端混图器配置，josn格式，参见[CloudMixerCfgObj](TypeDefinitions.md#CloudMixerCfgObj) |


<h2 id=updateCloudMixerContent>CRVIDEOSDK_ERR_DEF updateCloudMixerContent(String mixerID, String cfg)</h2>

- **功能**：更新云端混图器

更新混图器内容时，只能更新内容和布局，不能更改混图器规格、输出目标；</br>
更新混图器内容时，房间内所有人都将收到[cloudMixerInfoChanged](#cloudMixerInfoChanged)通知；


- **返回值**： [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)，CRVIDEOSDK_NOERR代表调用成功

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|String| 混图器ID, 参见[createCloudMixer](#createCloudMixer) |
|cfg|String| 混图器内容配置，josn格式，参见[CloudMixerCfgObj](TypeDefinitions.md#CloudMixerCfgObj) |



<h2 id=destroyCloudMixer>void destroyCloudMixer(String mixerID)</h2>

- **功能**：消毁云端混图器

消毁云端混图器时，调用者将收到[cloudMixerStateChanged](#cloudMixerStateChanged)通知进入MIXER_STOPPING状态，在停止完成后，房间内所有人都将收到[cloudMixerStateChanged](#cloudMixerStateChanged)通知进入MIXER_NULL状态；</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|String| 混图器ID, 参见[createCloudMixer](#createCloudMixer) |



<h2 id=getAllCloudMixerInfo>string getAllCloudMixerInfo()</h2>

- **功能**：得到所有云端混图器信息

- **返回值**： json格式字符串， 参见[CloudMixerInfoList](TypeDefinitions.md#CloudMixerInfoList)



<h2 id=getCloudMixerInfo>String getCloudMixerInfo(String mixerID)</h2>

- **功能**：得到云端混图器信息

- **返回值**： json格式字符串， 参见[CloudMixerInfo](TypeDefinitions.md#CloudMixerInfo)

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|String| 混图器ID, 参见[createCloudMixer](#createCloudMixer) |



<h2 id=switchToPage>void switchToPage(MAIN_PAGE main, SubPage sub)</h2>

- **功能**:  功能切换
  
- **返回值**:   无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| main| [MAIN_PAGE](Constant.md#MAIN_PAGE) |    功能类型 | 
| sub| [SubPage](TypeDefinitions.md#SubPage) |    子页面标识（如创建白板时返回的boardID） | 

<h2 id=getCurrentMainPage>MAIN_PAGE getCurrentMainPage()</h2>

- **功能**:  获取当前主功能区
  
- **返回值**:   [MAIN_PAGE](Constant.md#MAIN_PAGE)-当前主功能区
     
<h2 id=getCurrentSubPage>SubPage getCurrentSubPage()</h2>

- **功能**:  获取当前子页面
  
- **返回值**:   [SubPage](TypeDefinitions.md#SubPage)-当前子页面

<h2 id=getVideoWallMode>VIDEO_WALL_MODE getVideoWallMode()</h2>

- **功能**:  获取视频墙当前分屏模式
  
- **返回值**:   [VIDEO_WALL_MODE](Constant.md#VIDEO_WALL_MODE)-分屏模式

<h2 id=setVideoWallMode>void setVideoWallMode(VIDEO_WALL_MODE wallMode)</h2>

- **功能**:  设置视频墙分屏模式
  
- **返回值**:   无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoWallMode| [VIDEO_WALL_MODE](Constant.md#VIDEO_WALL_MODE) |    分屏模式| 

<h2 id=setMainVideo>void setMainVideo(String userID)</h2>

- **功能**:  设置当前哪个用户为主视频
  
- **返回值**:   无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String |    用户ID| 

<h2 id=getMainVideo>String getMainVideo()</h2>

- **功能**:  获取当前哪个用户为主视频
  
- **返回值**:   用户ID
 
<h2 id=createBoard>SubPage createBoard(String title, int width, int height, int pageCount)</h2>

- **功能**:  创建电子白板
  
- **返回值**:   [SubPage](TypeDefinitions.md#SubPage)-白板标识
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| title| String |    白板名称| 
| width| int |    白板宽度| 
| height| int |    白板高度| 
| pageCount| int |    白板内有多个页（一般空白板1页，文档白板为实际页数）| 

- <p style="color:red; font-size:20px">注意事项:</p>

- 其他参会者会收到notifyCreateBoard事件
- 后台会记录下白板数据，新入会者会收到notifyInitBoards事件
- 创建完白板后，一定要及尽快调用initBoardPageDat初始化各页数据
- 如果需要所有参会者同步切到此白板，请调用switchToPage


<h2 id=closeBoard>void closeBoard(SubPage boardID)</h2>

- **功能**:  关闭电子白板 , 其他参会者将收到notifyCloseBoard事件；同时后台会移除对应白板的所有信息
- **返回值**:   无
>回调函数[notifyCloseBoard](#notifyCloseBoard)  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage)  |    白板标识| 

<h2 id=initBoardPageDat>void initBoardPageDat(SubPage boardID, int boardPageNo, String imgID, String elemetDatas)</h2>

- **功能**:  初始化白板指定页数据 
- **返回值**:   无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage)  |    白板标识| 
| boardPageNo| int |    白板第几页（0:代表第一页）| 
| imgID| String |    白板的背景图片标识（空代表无背影图）| 
| elemetDatas| String |    白板的初始图元（空代表无图元，一般在导入历史文件才用到），白板图元数据Json数组，详见定义[BoardElement](TypeDefinitions.md#BoardElement)  | 
 
- <p style="color:red; font-size:20px">注意事项:</p>

- imgID非空时, 代表背景的图片ID。img来源请参见getNetDiskDocFilePageInfo
- 其他参会者将收到notifyInitBoardPageDat事件
- 后台会记录下白板的页数据，在新用户入会时，也会收到notifyInitBoardPageDat事件


<h2 id=createElementID>String createElementID()</h2>

- **功能**:  创建图元标识
- **返回值**:   elementID图元标识
 

<h2 id=addBoardElement>void addBoardElement(SubPage boardID, int boardPageNo, String element)</h2>

- **功能**:  添加图元信息 , 其他参会者会收到：notifyAddBoardElement事件同时后台会保存图元，新入会者会在notifyInitBoardPageDat中得到这些图元  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage)  |    白板标识| 
| boardPageNo| int |    白板第几页（0:代表第一页）| 
| element| String |    图元信息，Json数据格式详见定义[BoardElement](TypeDefinitions.md#BoardElement)| 

<h2 id=modifyBoardElement>void modifyBoardElement(SubPage boardID, int boardPageNo, String element)</h2>

- **功能**:  修改图元信息 , 其他参会者会收到：notifyModifyBoardElement事件，同时后台会覆盖对应图元的数据，新入会者会在notifyInitBoardPageDat中得到这些图元  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage)  |    白板标识| 
| boardPageNo| int |    白板第几页（0:代表第一页）| 
| element| String |    图元信息，Json数据格式详见定义[BoardElement](TypeDefinitions.md#BoardElement)| 
 
<h2 id=delBoardElement>void delBoardElement(SubPage boardID, int boardPageNo, ArrayList&lt;String&gt; elementIDs)</h2>

- **功能**:  删除图元  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| SubPage |    白板标识| 
| boardPageNo| int |    白板第几页（0:代表第一页）| 
| elementIDs| ArrayList&lt;String&gt; |     图元id列表| 
 
<h2 id=setMouseHotSpot>void setMouseHotSpot(SubPage boardID, int boardPageNo, int x, int y)</h2>

- **功能**:  设置鼠标热点信息 
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage) |    白板标识 | 
| boardPageNo| int |    白板第几页（0:代表第一页）| 
| x| int |     屏幕横坐标| 
| y| int |     屏幕纵坐标| 

<h2 id=setBoardCurPageNo>void setBoardCurPageNo([SubPage](TypeDefinitions.md#SubPage) boardID, int boardPageNo, int pagePos1, int pagePos2)</h2>

- **功能**:  白板翻页
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage) |    白板标识 | 
| boardPageNo| int |    白板第几页（0:代表第一页）| 
| pagePos1| int |     私有扩展参数1（如可用于页内x方向滚动位置）| 
| pagePos2| int |     私有扩展参数2（如可用于页内y方向滚动位置）| 
 
<h2 id=listNetDiskDocFile>void listNetDiskDocFile(String dir)</h2>

- **功能**:  查询服务器指定目录下的内容（子目录名、上传的文档源文件及文档转换状态）
- **返回值**:  无
>回调函数[listNetDiskDocFileRslt](#listNetDiskDocFileRslt)
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| dir| String |    要查询的目录，空或"/"时，代表查询根目录下的内容| 

<h2 id=uploadDocFileToNetDisk>void uploadDocFileToNetDisk(String svrPathFileName, String locPathFileName)</h2>

- **功能**:  上传并转换文档
  
- **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| svrPathFileName| String |    服务器的路径文件名，包含目录时，服务器自动创建对应目录| 
| locPathFileName| String |    要上传文件的本地的路径文件名| 

- <p style="color:red; font-size:20px">注意事项:</p>

- 支持的文件格式有：doc，docx, ppt, pptx, pps, ppsx, xls, xlsx, et, ett, wps, wpt, dps, pdf, txt, log, ini, bmp, png, jpg, jpeg；


<h2 id=downloadNetDiskDocFile>void downloadNetDiskDocFile(String svrPathFileName, String locPathFileName)</h2>

- **功能**:  下载源始文档
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| svrPathFileName| String |    服务器的路径文件名，包含目录时，服务器自动创建对应目录| 
| locPathFileName| String |    要上传文件的本地的路径文件名| 

<h2 id=cancelTransforNetDiskDocFile>void cancelTransforNetDiskDocFile(String svrPathFileName)</h2>

- **功能**:  取消文档传输
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| svrPathFileName| String |    服务器的路径文件名，包含目录时，服务器自动创建对应目录| 

<h2 id=deleteNetDiskDocFile>void deleteNetDiskDocFile(String svrPathFileName)</h2>

- **功能**:  删除文档
  
- **返回值**:  无
>回调函数[deleteNetDiskDocFileRslt](#deleteNetDiskDocFileRslt)(删除结果)
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| svrPathFileName| String |    服务器的路径文件名，包含目录时，服务器自动创建对应目录| 

<h2 id=getNetDiskDocFilePageInfo>void getNetDiskDocFilePageInfo(String svrPathFileName)</h2>

- **功能**:  获取文档的转换信息
  
- **返回值**:  无
>回调函数[getNetDiskDocFilePageInfoRslt](#getNetDiskDocFilePageInfoRslt)(获取结果)
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| svrPathFileName| String |    服务器的路径文件名，包含目录时，服务器自动创建对应目录| 

- <p style="color:red; font-size:20px">注意事项:</p>

- 获取到的文档转换后的信息后， 就可以创建白板createBoard, 然后为白板初始化文档内容

<h2 id=downloadNetDiskDocFilePage>void downloadNetDiskDocFilePage(String pagePathFileName, String locPathFileName)</h2>

- **功能**:  下载文档转换后的页文件
  
- **返回值**:  无
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| pagePathFileName| String |    页文件在服务器的路径文件名| 
| locPathFileName| String |    文件下载后存放的本地的路径文件名，目录不存在时自动创建| 

- <p style="color:red; font-size:20px">注意事项:</p>

- 页文件格式： 6字节保留，4字节图像格式（2:jpg, 4:png），4字节图像内容长度，图像内容


<h2 id=setMediaCfg>void setMediaCfg(VideoCfg cfg)</h2>

- **功能**:  配置远程影音共享时，图像质量参数
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cfg| [VideoCfg](TypeDefinitions.md#VideoCfg) |    影音共享配置参数 | 

<h2 id=getMediaCfg>VideoCfg getMediaCfg()</h2>

- **功能**:  获取影音共享配置参数
  
- **返回值**:  [VideoCfg](TypeDefinitions.md#VideoCfg)-影音共享配置参数
 
 
<h2 id=startPlayMedia>void startPlayMedia(String filename, boolean bLocPlay)</h2>

- **功能**:  播放影音文件
  
- **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| filename| String |    文件名，全路径| 
| bLocPlay| int |    是否仅仅本地播放（true:本地播放，false：房间内播放）|  

<h2>void startPlayMedia(String filename, int bLocPlay, boolean bPauseWhenFinished)</h2>

- **功能**:  播放影音文件
  
- **返回值**:  无
>播放视频则触发回调[notifyMediaOpened](#notifyMediaOpened)， 停止播放则触发回调[notifyMediaStop](#notifyMediaStop)

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| filename| String |    文件名，全路径| 
| bLocPlay| int |    是否仅仅本地播放（1:本地播放，0：房间内播放）|  
| bPauseWhenFinished| boolean |    是否停在最后一帧, 如果播放成功，其他人收到[notifyMediaStart](#notifyMediaStart)，如果播放失败，请关注通知事件[notifyMediaStop](#notifyMediaStop)|  
 
<h2 id=pausePlayMedia>void pausePlayMedia(boolean bPause)</h2>

- **功能**:  暂停播放影音
  
- **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| bPause| boolean |    是否暂停| 

<h2 id=stopPlayMedia>void stopPlayMedia()</h2>

- **功能**:  停止影音播放
  
- **返回值**:  无
>回调函数[notifyMediaStop](#notifyMediaStop)

<h2 id=setMediaPlayPos>void setMediaPlayPos(int pos)</h2>

- **功能**:  设置播放进度
  
- **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| pos| int |    设置播放位置，单位：毫秒| 

<h2 id=getAllFilesInMediaPath>ArrayList&lt;String&gt; getAllFilesInMediaPath()</h2>

- **功能**:  取得影音文件夹下的所有可播放文件
 
 + **返回值**:  文件名列表
     
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| pos| int |    设置播放位置，单位：毫秒| 
 
- <p style="color:red; font-size:20px">注意事项:</p>

- 影音文件夹位于方法init的第二个参数sdkFilePath，sdk会在此文件中建立media的子文件夹，即为影音文件夹


<h2 id=getMediaInfo>MediaInfo getMediaInfo()</h2>

- **功能**:  正在播放的影音信息
  
- **返回值**:  [MediaInfo](TypeDefinitions.md#MediaInfo)-影音文件信息
 

<h2 id=setMediaVolume>void setMediaVolume(int level)</h2>

- **功能**:  设置影音播放的音量
 
 + **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| level| int |    影音播放的音量，类型范围（0-255）| 

<h2 id=getMediaVolume>int getMediaVolume()</h2>

- **功能**:  读取影音播放的音量
  
- **返回值**:  影音播放的音量，类型范围（0-255）


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String |    用户id| 


<h2 id=setPicResource>void setPicResource(String resID, Bitmap bitmap)</h2>

- **功能**:  将图片资源设置给sdk
  
- **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| resID| String |    资源唯一标识 | 
| bitmap| Bitmap |    图片对象，为空代表移除资源| 

<h2>void setPicResource(String resID, String picFile)</h2>

- **功能**:  将图片资源设置给sdk
 
- **返回值**:  无
 

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| resID| String |    资源唯一标识 | 
| picFile| Bitmap |    资源文件路径，为空代表移除资源| 
 
<h2>boolean setPicResource(String resID, View view)</h2>

- **功能**:  将图片资源设置给sdk
 
- **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| resID| String |    资源唯一标识 | 
| view| View |    控件对象，为空代表移除资源（注：不能是opengl显示控件，必须是在界面已经显示的控件）| 

<h2>boolean setPicResource(String resID, View view, Size size)</h2>

- **功能**:  将图片资源设置给sdk
  
- **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| resID| String |    资源唯一标识；| 
| view| Bitmap |    控件对象，为空代表移除资源（注：不能是opengl显示控件，必须是在界面已经显示的控件）| 
| size| Size |    size 图片大小| 


<h2 id=getMeetingAllAttrs>void getMeetingAllAttrs(String cookie)</h2>

- **功能**:获取房间所有属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h2 id=getMeetingAttrs >void getMeetingAttrs(List&lt;String&gt; keys, String cookie)</h2>

- **功能**:获取房间部份属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|keys|    List&lt;String>  |需要查询的房间属性key|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h2 id=setMeetingAttrs >void setMeetingAttrs(HashMap&lt;String, String&gt; attrs, HashMap&lt;String, Object&gt; options, String cookie)</h2>

- **功能**:重置房间属性集

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|attrs|    HashMap&lt;String, String>  |房间属性集，key最大长度为64B，value最大长度为8KB|
|options|    HashMap&lt;String, Object>  |操作选项|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h2 id=addOrUpdateMeetingAttrs >void addOrUpdateMeetingAttrs(HashMap&lt;String, String&gt; attrs, HashMap&lt;String, Object&gt; options, String cookie)</h2>

- **功能**:增加或者更新房间属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|attrs|    HashMap&lt;String, String>  |房间属性集,json格式，key最大长度为64B，value最大长度为8KB|
|options|    HashMap&lt;String, Object>  |操作选项|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h2 id=delMeetingAttrs >void delMeetingAttrs(List&lt;String&gt; keys, HashMap&lt;String, Object&gt; options, String cookie)</h2>

- **功能**:删除房间属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|keys|    List&lt;String>  |需要删除的房间属性key，json格式，如["key1","key2"]|
|options|    HashMap&lt;String, Object>  |操作选项|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h2 id=clearMeetingAttrs >void clearMeetingAttrs(HashMap&lt;String, Object&gt; options, String cookie)</h2>

- **功能**:清除房间所有属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|options|    HashMap&lt;String, Object>  |操作选项|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h2 id=getUserAttrs >void getUserAttrs(String uids, List&lt;String&gt; keys, String cookie)</h2>

- **功能**:获取指定用户的指定属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|uids|    string  |目标用户id列表，一次最多包含50个用户，json格式， 如：["uid1","uid2"]|
|keys|    List&lt;String>  |将要获取的用户属性key列表（空串代表获取全部），json格式，如：["key1","key2"]|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h2 id=setUserAttrs >void setUserAttrs(String uid, string attrs, HashMap&lt;String, Object&gt; options, String cookie)</h2>

- **功能**:重置用户属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|uid|    String  |目标用户id|
|attrs|    HashMap&lt;String, String>  |用户属性集, json格式，如：{"key1":"value1", "key2":"value2"} (key最大长度为64B，value最大长度为8KB)|
|options|    HashMap&lt;String, Object>  |操作选项|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h2 id=addOrUpdateUserAttrs >void addOrUpdateUserAttrs(String uid, string attrs, HashMap&lt;String, Object&gt; options, String cookie)</h2>

- **功能**:增加或更新用户属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|uid|    String  |目标用户id|
|attrs|    HashMap&lt;String, String>  |用户属性集, json格式，如：{"key1":"value1", "key2":"value2"} (key最大长度为64B，value最大长度为8KB)|
|options|    HashMap&lt;String, Object>  |操作选项|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h2 id=delUserAttrs >void delUserAttrs(String uid, List&lt;String&gt; keys, HashMap&lt;String, Object&gt; options, String cookie)</h2>

- **功能**:删除用户的特定属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|uid|    String  |目标用户id|
|keys|    List&lt;String>  |需要删除的用户属性key列表，json格式，如：["key1","key2"]|
|options|    HashMap&lt;String, Object>  |操作选项|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h2 id=clearAllUserAttrs >void clearAllUserAttrs(HashMap&lt;String, Object&gt; options, String cookie)</h2>

- **功能**:清除所有用户的所有属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|options|    HashMap&lt;String, Object>  |操作选项|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h2 id=clearUserAttrs >void clearUserAttrs(String uid, HashMap&lt;String, Object&gt; options, String cookie)</h2>

- **功能**:清除特定用户的所有属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|uid|    String  |目标用户id|
|options|    HashMap&lt;String, Object>  |操作选项|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h2 id=sendMeetingCustomMsg>void sendMeetingCustomMsg(String text, String cookie)</h2>

- **功能**:发送房间内自定义广播消息

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|text|    String  |用户自定义消息|
|cookie|    String  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|

>回调函数[sendMeetingCustomMsgRslt](#sendMeetingCustomMsgRslt)


## CloudroomVideoMeeting通知回调接口详情

<h2 id=enterMeetingRslt>void enterMeetingRslt(CRVIDEOSDK_ERR_DEF sdkErr)</h2>

- **功能**:  自己进入房间的结果
  
- **返回值**:  无
      
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|    操作结果码 | 
| cookie| String|    自定义用户数据| 

<h2 id=setNickNameRsp>void setNickNameRsp(CRVIDEOSDK_ERR_DEF sdkErr, String userid, String newName)</h2>

- **功能**:  设置昵称的结果
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|    操作结果码 | 
| userid| String|    用户id| 
| newName| String|    新的昵称| 

<h2 id=notifyNickNameChanged>void notifyNickNameChanged(String userID, String oldName, String newName)</h2>

- **功能**:  某用户改变了昵称(改昵称的用户自身不会接收到此通知)
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    改变昵称的某用户id| 
| oldName| String|    改变昵称的某用户昵称(改变之前的昵称)| 
| newName| String|    改变昵称的某用户昵称(改变之后的昵称)| 

<h2 id=userEnterMeeting>void userEnterMeeting(String userID)</h2>

- **功能**:  某用户进入了房间
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    进入房间的用户id| 

<h2 id=userLeftMeeting>void userLeftMeeting(String userID)</h2>

- **功能**:  某用户离开了房间
  
- **返回值**:  无
      
  
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    离开房间的用户id| 

<h2 id=meetingDropped>void meetingDropped(CRVIDEOSDK_MEETING_DROPPED_REASON reason)</h2>

- **功能**:  通知从房间里掉线了，收到该通知后可以调用enterMeeting尝试重新入会
  
- **返回值**:  无
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| [CRVIDEOSDK_MEETING_DROPPED_REASON](Constant.md#CRVIDEOSDK_MEETING_DROPPED_REASON)|    掉线原因 | 
  
- <p style="color:red; font-size:20px">注意事项:</p>

- 如果用到了呼叫队列，掉线后不重新入会就必须调用hangupCall释放本次呼叫


<h2 id=meetingStoped>void meetingStoped()</h2>

- **功能**:  房间已被结束
  
- **返回值**:  无
 

<h2 id=netStateChanged>void netStateChanged(int level)</h2>

- **功能**:  网络变化通知
  
- **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| level| int|    网络状况等级(0~10，10分为最佳网络)| 

<h2 id=audioDevChanged>void audioDevChanged()</h2>

- **功能**:  通知本地音频设备有变化
  
- **返回值**:  无
 

<h2 id=audioStatusChanged>void audioStatusChanged(String userID, ASTATUS oldStatus, ASTATUS newStatus)</h2>

- **功能**:  通知音频状态变化
  
  
- **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    房间中设备的所有者| 
| oldStatus| [ASTATUS](Constant.md#ASTATUS)|    旧状态| 
| newStatus| [ASTATUS](Constant.md#ASTATUS)|    新状态| 

<h2 id=micEnergyUpdate>void micEnergyUpdate( String userID, int oldLevel, int newLevel)</h2>

- **功能**:  通知用户的说话声音强度更新
  
- **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    用户标识ID| 
| oldLevel| int|    原来的说话声音强度(0~10)| 
| newLevel| int|    现在的说话声音强度(0~10)| 
 
<h2 id=openVideoRslt>void openVideoRslt(String devID, boolean bSuccess)</h2>

- **功能**:  打开摄像头设备操作结果
  
- **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| devID| String|    摄像头设备ID| 
| bSuccess| boolean|    是否成功| 

<h2 id=videoStatusChanged>void videoStatusChanged(String userID, VSTATUS oldStatus, VSTATUS newStatus)</h2>

- **功能**:  视频状态变化
  
- **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    房间中设备的所有者| 
| oldStatus| [VSTATUS](Constant.md#VSTATUS)|    旧状态| 
| newStatus| [VSTATUS](Constant.md#VSTATUS)|    新状态| 
 
<h2 id=videoDevChanged>void videoDevChanged(String userID)</h2>

- **功能**:  通知用户的视频设备有变化
  
- **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| String| String|    设备变化的用户ID| 

<h2 id=notifyVideoData>void notifyVideoData(UsrVideoId usrVideoID, long frameTime)</h2>

- **功能**:  通知用户有新的视频数据
  
- **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| usrVideoID| [UsrVideoId](TypeDefinitions.md#UsrVideoId)|    用户摄像头标识ID|  
| frmTime| long|    图像的创建时间，可用作时间戳|  

<h2 id=defVideoChanged>void defVideoChanged(String userID, short videoID)</h2>

- **功能**:  通知用户的视频默认设备有变化
  
- **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    设备变化的用户ID|  

<h2 id=uploadRecordFileErr>void uploadRecordFileErr(String fileName, int err)</h2>

- **功能**:  上传录制文件错误通知
  
- **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName| String|    上传文件名|  
| err| int|    操作失败代码|  

<h2 id=cancelUploadRecordFileErr>void cancelUploadRecordFileErr(int sdkErr)</h2>

- **功能**:  取消上传错误通知
  
- **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| int|    操作失败代码|  


<h2 id=locMixerStateChanged>void locMixerStateChanged(String mixerID, MIXER_STATE state)</h2>

- **功能**:  本地混图器状态变化通知
  
- **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| String|    混图器唯一标识|  
| state| [MIXER_STATE](Constant.md#MIXER_STATE)|    状态|  

<h2 id=locMixerOutputInfo>void locMixerOutputInfo(String mixerID, String nameOrUrl, MixerOutputInfo outputInfo)</h2>

- **功能**:  本地录制文件、本地直播信息通知
  
- **返回值**:  无
     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| String|    混图器唯一标识|  
| nameOrUrl| String|    录像名称、或直播url|  
| outputInfo| [MixerOutputInfo](TypeDefinitions.md#MixerOutputInfo)|    通知内容|  
 
 
<h2 id=startScreenShareRslt>void startScreenShareRslt(CRVIDEOSDK_ERR_DEF sdkErr)</h2>

- **功能**: 开启屏幕共享的响应事件

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| sdkEr  | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |  错误码 |


<h2 id=stopScreenShareRslt>void stopScreenShareRslt(int sdkErr)</h2>

- **功能**停止屏幕共享的响应事件

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| sdkEr  | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  | 错误码  |

<h2 id=notifyScreenShareStarted>void notifyScreenShareStarted()</h2>

- **功能**:  通知他人开启了屏幕共享
  
- **返回值**:  无
 

<h2 id=notifyScreenShareStopped>void notifyScreenShareStopped()</h2>

- **功能**:  通知他人停止了屏幕共享
  
- **返回值**:  无
     

<h2 id=startScreenMarkRslt>void startScreenMarkRslt(CRVIDEOSDK_ERR_DEF sdkErr)</h2>

- **功能**: 开始屏幕标注结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| sdkEr  | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |  错误码 |


<h2 id=stopScreenMarkRslt>void stopScreenMarkRslt(int sdkErr)</h2>

- **功能**: 停止屏幕标注结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| sdkEr  | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  | 错误码  |

<h2 id=notifyScreenMarkStarted>void notifyScreenMarkStarted()</h2>

- **功能**:  通知屏幕标注开始
  
- **返回值**:  无
 

<h2 id=notifyScreenMarkStopped>void notifyScreenMarkStopped()</h2>

- **功能**:  通知屏幕标注停止
  
- **返回值**:  无
     

<h2 id=notifySwitchToPage>void notifySwitchToPage(MAIN_PAGE mainPage, [SubPage](TypeDefinitions.md#SubPage) pageID)</h2>

- **功能**:  通知功能切换
 
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mainPage| [MAIN_PAGE](Constant.md#MAIN_PAGE)|    功能类型 |   
| pageID| [SubPage](TypeDefinitions.md#SubPage)|    子页面标识 |   

<h2 id=notifyVideoWallMode>void notifyVideoWallMode(VIDEO_WALL_MODE model)</h2>

- **功能**:  通知视频分屏模式切换
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| model| [VIDEO_LAYOUT_MODE](Constant.md#VIDEO_LAYOUT_MODE)|    分屏模式|   

<h2 id=notifyMainVideoChanged>void notifyMainVideoChanged()</h2>

- **功能**:  通知主视频更改
  
- **返回值**:  无

- **参数**:  无

 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    主视频用户ID|  

<h2 id=notifyInitBoards>void notifyInitBoards(ArrayList&lt;SubPageInfo&gt; boards)</h2>

- **功能**:  SDK入会后通知房间中已经存在的白板列表
  
- **返回值**:  无
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boards| ArrayList&lt;[SubPageInfo](TypeDefinitions.md#SubPageInfo)&gt;|    已经创建好的白板列表 |  

<h2 id=notifyInitBoardPageDat>void notifyInitBoardPageDat(SubPage boardID, int boardPageNo, String imgID, String elementDatas,String operatorID)</h2>

- **功能**:  初始化白板页数据
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage)|    白板标识|  
| boardPageNo| int|    白板页序号|  
| imgID| String|    页背景文件ID（空代表无背景）, 使用downloadNetDiskDocFile进行下载 |  
| elementDatas| String|    此页的所有图元,白板图元数据Json数组，详见定义[BoardElement](TypeDefinitions.md#BoardElement) |  
| operatorID| String|    初始化用户（为空时，代表入会时后台事件）|  
 
<h2 id=notifyCreateBoard>void notifyCreateBoard(SubPageInfo board, String operatorID)</h2>

- **功能**:  通知创建白板
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| board| [SubPageInfo](TypeDefinitions.md#SubPageInfo)|    白板信息|  
| operatorID| String|    创建白板的用户ID|  

<h2 id=notifyCloseBoard>void notifyCloseBoard(SubPage boardID, String operatorID)</h2>

- **功能**:  通知关闭白板
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage)|    白板标识|  
| operatorID| String|    关闭白板的用户ID|  
 
<h2 id=notifyAddBoardElement>void notifyAddBoardElement(SubPage boardID, int boardPageNo, String element, String operatorID)</h2>

- **功能**:  通知添加图元信息
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage)|    白板标识|  
| boardPageNo| int|    白板页序号|  
| element| String|    图元信息, Json数据格式详见定义[BoardElement](TypeDefinitions.md#BoardElement)|  
| operatorID| String|    添加图元的用户ID|  
 
<h2 id=notifyModifyBoardElement>void notifyModifyBoardElement(SubPage boardID, int boardPageNo, String element, String operatorID)</h2>

- **功能**:  通知图元信息被修改
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage)|    白板标识|  
| boardPageNo| int|    白板页序号|  
| element| String|    图元信息, Json数据格式详见定义[BoardElement](TypeDefinitions.md#BoardElement)|  
| operatorID| String|    添加图元的用户ID|  
 
<h2 id=notifyDelBoardElement>void notifyDelBoardElement(SubPage boardID, int boardPageNo, ArrayList&lt;String&gt; elementIDs, String operatorID)</h2>

- **功能**:  通知图元被删除
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage)|    白板标识|  
| boardPageNo| int|    白板页序号|  
| elementIDs| ArrayList&lt;String&gt;|    图元id列表|  
| operatorID| String|    添加图元的用户ID|  

<h2 id=notifyMouseHotSpot>void notifyMouseHotSpot(SubPage boardID, int boardPageNo, int x, int y, String operatorID)</h2>

- **功能**:  通知鼠标热点消息
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage)|    白板标识|  
| x| int|    屏幕横坐标|  
| y| int|    屏幕纵坐标|  
| operatorID| String|    添加图元的用户ID|  

<h2 id=notifyBoardCurPageNo>void notifyBoardCurPageNo(SubPage boardID, int boardPageNo, int pagePos1, int pagePos2)</h2>

- **功能**:  通知白板翻页
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| [SubPage](TypeDefinitions.md#SubPage)|    白板标识|  
| boardPageNo| int|    白板的页序号(0为第一页)|  
| pagePos1| int|    私有扩展参数1（如可用于页内x方向滚动位置）|  
| pagePos2| int|     私有扩展参数2（如可用于页内y方向滚动位置）|  
 
<h2 id=notifyRecordFileStateChanged>void notifyRecordFileStateChanged(String fileName, int state)</h2>

- **功能**:  通知录制文件状态更改
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName| String|    本地文件路径|  
| state| int|    状态，0未上传，1上传中，2已上传，3上传失败|  

<h2 id=uploadRecordFileSuccess>void uploadRecordFileSuccess(String fileName, String fileUrl)</h2>

- **功能**:  通知录制文件上传成功
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName| String|    本地文件路径|  
| fileUrl| String|    服务端录制文件地址|  

<h2 id=notifyRecordFileUploadProgress>void notifyRecordFileUploadProgress(String fileName, int percent)</h2>

- **功能**:  通知录制文件上传进度
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName| String|    本地文件路径|  
| percent| int|    进度0-100|  

<h2 id=startGetAudioPCM>int startGetAudioPCM(int aSide, int getType, String jsonParam)</h2>

- **功能**: 开始获取语音pcm数据

- **返回值**:返回值 整形数值，1：正常，0：失败(int)

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|aSide|	int|	声道类型 0:麦克风，1:扬声器|
|getType	|int|	获取方式 0:回调方式，1:保存为文件|
|jsonParam	|String	|当getType=0 表示回调方式，jsonParam可配置回调的数据大小(320-32000)，如: {"EachSize":320};当getType=1 表示保存为文件，jsonParam可配置文件名，如: { "FileName" ： "/sdcard/test.pcm" }|


<h2 id=stopGetAudioPCM>void stopGetAudioPCM(aSide)</h2>

- **功能**: 停止获取语音pcm数据

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|aSide	| int| 	声道类型 0:麦克风，1:扬声器|


<h2 id=notifyMediaOpened>void notifyMediaOpened(int totalTime, Size picSZ)</h2>

- **功能**:  通知影音文件打开
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| totalTime| long|    影音时长(毫秒)|  
| picSZ| Size|    宽高|  


<h2 id=notifyMediaStart>void notifyMediaStart(String userid)</h2>

- **功能**:  通知影音开始播放
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userid| String|     操作者的用户id|  

<h2 id=notifyMediaPause>void notifyMediaPause(String userid, boolean bPause)</h2>

- **功能**:  通知设置鼠标热点消息
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userid| String|     操作者的用户id|   
| bPause| boolean|      是否暂停|   

<h2 id=notifyMediaStop>void notifyMediaStop(String userid, int reason)</h2>

- **功能**:  通知影音播放停止
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userid| String|     操作者的用户id|   
| reason| int|      播放停止原因，数值参考MEDIA_STOP_REASON|    

<h2 id=notifyPlayPosSetted>void notifyPlayPosSetted(int setPTS)</h2>

- **功能**:  通知播放进度已设置完成
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| setPTS| int|     播放进度|   
 
<h2 id=notifyMemberMediaData>void notifyMemberMediaData(String userid, int curPos)</h2>

- **功能**:  通知影音帧数据已解码完毕
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userid| String|     操作者的用户id|   
| curPos| int|     该影音帧的时间，毫秒为单位|  

- <p style="color:red; font-size:20px">注意事项:</p>

- 收到此通知消息后，可通过getMediaImg获取图像显示；但如果之前显示的帧时戳更大，说明此通知消息已过时，直接忽略即可 如果使用了影音共享UI显示方式，不再需要自已关注此事件和进行显示处理

 
<h2 id=notifyAudioPCMDat>void notifyAudioPCMDat(int aSide, byte[] audioDat)</h2>

- **功能**:  通知语音PCM数据
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| aSide| int|     声道类型|   
| audioDat| byte[]|     PCM数据|  
 
<h2 id=listNetDiskDocFileRslt>void listNetDiskDocFileRslt(String dir, CRVIDEOSDK_ERR_DEF sdkERR, NetDiskDocDir docDir)</h2>

- **功能**:  通知查询文档列表结果
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| dir| String|     查询的目录|   
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|     操作结果 |  
| docDir| [NetDiskDocDir](TypeDefinitions.md#NetDiskDocDir)|     成功时的查询的结果 |  

<h2 id=getNetDiskDocFilePageInfoRslt >void getNetDiskDocFilePageInfoRslt(String svrPathFileName, CRVIDEOSDK_ERR_DEF sdkErr, NetDiskDocFilePageInfo pageInfo)</h2>

- **功能**:  通知查询文档转换结果
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| svrPathFileName| String|     查询的文档名|   
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|     操作结果|  
| pageInfo| [NetDiskDocFilePageInfo](TypeDefinitions.md#NetDiskDocFilePageInfo)|     成功的查询的结果|  

<h2 id=deleteNetDiskDocFileRslt>void deleteNetDiskDocFileRslt(String svrPathFileName, CRVIDEOSDK_ERR_DEF sdkERR)</h2>

- **功能**:  通知删除文档结果
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| svrPathFileName| String|     查询的文档名|   
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|     操作结果|  

<h2 id=notifyNetDiskDocFileTrsfProgress>void notifyNetDiskDocFileTrsfProgress(String svrPathFileName, int percent)</h2>

- **功能**:  通知文档传输进度
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| svrPathFileName| String|     查询的文档名|   
| percent| int|     传输进度（等于100代表传输完成）|  


<h2 id=getMeetingAllAttrsSuccess > void getMeetingAllAttrsSuccess(string attrs, String cookie) </h2>

- **功能**:成功获取到房间所有属性

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| attrs|    HashMap&lt;String, String>  | 房间属性集|
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |



<h2 id=getMeetingAllAttrsFail > void getMeetingAllAttrsFail(CRVIDEOSDK_ERR_DEF err, String cookie) </h2>

- **功能**:获取房间属性失败

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |错误码，错误码为CRVIDEOSDK_NOERR表示没有错误 |
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |



<h2 id=getMeetingAttrsSuccess > void getMeetingAttrsSuccess(string attrs, String cookie) </h2>

- **功能**:成功获取到房间指定属性

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| attrs|    HashMap&lt;String, String>  | 房间属性集|
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |



<h2 id=getMeetingAttrsFail > void getMeetingAttrsFail(CRVIDEOSDK_ERR_DEF err, String cookie) </h2>

- **功能**:获取房间指定属性失败

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |错误码，错误码为CRVIDEOSDK_NOERR表示没有错误 |
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |




<h2 id=setMeetingAttrsRslt > void setMeetingAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) </h2>

- **功能**:设置用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |错误码，错误码为CRVIDEOSDK_NOERR表示没有错误 |
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |



<h2 id=addOrUpdateMeetingAttrsRslt > void addOrUpdateMeetingAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) </h2>

- **功能**:增加或更新房间属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |错误码，错误码为CRVIDEOSDK_NOERR表示没有错误 |
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |


<h2 id=delMeetingAttrsRslt > void delMeetingAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) </h2>

- **功能**:删除房间属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |错误码，错误码为CRVIDEOSDK_NOERR表示没有错误 |
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |


<h2 id=clearMeetingAttrsRslt > void clearMeetingAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) </h2>

- **功能**:清除房间属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |错误码，错误码为CRVIDEOSDK_NOERR表示没有错误 |
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |




<h2 id=getUserAttrsSuccess > void getUserAttrsSuccess(HashMap&lt;String, HashMap&lt;String, MeetingAttr&gt;&gt; attrsMap, String cookie) </h2>

- **功能**:获取房间内用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| attrsMap | HashMap&lt;String, HashMap&lt;String, MeetingAttr>>  | 房间属性|
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |



<h2 id=getUserAttrsFail > void getUserAttrsFail(CRVIDEOSDK_ERR_DEF err, String cookie) </h2>

- **功能**:获取房间内用户属性失败

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |错误码，错误码为CRVIDEOSDK_NOERR表示没有错误 |
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |


<h2 id=setUserAttrsRslt > void setUserAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) </h2>

- **功能**:设置用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |错误码，错误码为CRVIDEOSDK_NOERR表示没有错误 |
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |



<h2 id=addOrUpdateUserAttrsRslt > void addOrUpdateUserAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) </h2>

- **功能**:增加或者更新用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |错误码，错误码为CRVIDEOSDK_NOERR表示没有错误 |
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |


<h2 id=delUserAttrsRslt > void delUserAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) </h2>

- **功能**:删除特定用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |错误码，错误码为CRVIDEOSDK_NOERR表示没有错误 |
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |




<h2 id=clearAllUserAttrsRslt > void clearAllUserAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) </h2>

- **功能**:清除所有用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |错误码，错误码为CRVIDEOSDK_NOERR表示没有错误 |
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |



<h2 id=clearUserAttrsRslt > void clearUserAttrsRslt(CRVIDEOSDK_ERR_DEF err, String cookie) </h2>

- **功能**:清除特定用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |错误码，错误码为CRVIDEOSDK_NOERR表示没有错误 |
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |



<h2 id=notifyMeetingAttrsChanged > void notifyMeetingAttrsChanged(HashMap&lt;String, MeetingAttr&gt; adds, HashMap&lt;String, MeetingAttr&gt; updates, List&lt;String&gt; delKeys) </h2>

- **功能**:通知房间属性发生改变

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| adds | HashMap&lt;String, [MeetingAttr](TypeDefinitions.md#MeetingAttr)>  |增加房间属性集 |
| updates | HashMap&lt;String, [MeetingAttr](TypeDefinitions.md#MeetingAttr)>  |变化的房间属性集 |
| delKeys | List&lt;String>  |被删除的房间属性列表 |

<h2 id=notifyUserAttrsChanged > void notifyUserAttrsChanged(String uid, HashMap&lt;String, MeetingAttr&gt; adds, HashMap&lt;String, MeetingAttr&gt; updates, List&lt;String&gt; delKeys) </h2>

- **功能**:通知用户属性发生改变

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| uid | String  |变化的用户id |
| adds | HashMap&lt;String, [MeetingAttr](TypeDefinitions.md#MeetingAttr)>  |增加的用户属性集 |
| updates | HashMap&lt;String, [MeetingAttr](TypeDefinitions.md#MeetingAttr)>  |变化的用户属性集 |
| delKeys | List&lt;String>  |被删除的用户属性列表 |

<h2 id=sendMeetingCustomMsgRslt>void sendMeetingCustomMsgRslt(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h2>

- **功能**:通知发送房间内自定义广播消息结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| sdkErr | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  | 错误码，错误码为CRVIDEOSDK_NOERR表示没有错误|
| cookie   | String  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |

<h2 id=notifyMeetingCustomMsg>void notifyMeetingCustomMsg(String fromUserID, String text)</h2>

- **功能**:通知收到房间内自定义广播消息

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| fromUserID | String  | 房间内广播消息的发送者的用户id |
| text   | String  | 广播内容  |


<h2 id=createCloudMixerFailed>void createCloudMixerFailed(String mixerID, CRVIDEOSDK_ERR_DEF sdkErr)</h2>

- **功能**：启动云端录制、云端直播失败通知

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|string| 混图器ID |
|sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) | CRVIDEOSDK_NOERR代表成功，其它值代表失败的具体原因 |




<h2 id=cloudMixerStateChanged>void cloudMixerStateChanged(String mixerID, MIXER_STATE state, String exParam, String operUserID)</h2>

- **功能**：云端录制、云端直播状态变化通知

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|string| 混图器ID |
|state| [MIXER_STATE](Constant.md#MIXER_STATE) | 录制状态 |
|exParam| string | json格式扩展参数，state状态及参数定义：</br>MIXER_NULL：包含err字段(取值为[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)), errDesc字段；</br>MIXER_STARTING：内容参见[CloudMixerCfgObj](TypeDefinitions.md#CloudMixerCfgObj) |
|operUserID| string | 操作者用户ID |




<h2 id=cloudMixerOutputInfoChanged>void cloudMixerOutputInfoChanged(String mixerID, String jsonStr)</h2>

- **功能**：云端录制文件、云端直播输出变化通知

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|string| 混图器ID |
|jsonStr| string | json格式，请参见[CloudMixerOutputInfo](TypeDefinitions.md#CloudMixerOutputInfo) |




<h2 id=cloudMixerInfoChanged>void cloudMixerInfoChanged(String mixerID)</h2>

- **功能**：云端录制、云端直播配置变化通知

可调用：[getCloudMixerInfo](#getCloudMixerInfo)获取相关信息</br>

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|String| 混图器ID |


## CloudroomQueue接口详情

队列组件，实现队列功能，目的是为了实现用户自动分配。整个程序的生命过程中只能有一个实例。

----

<h2 id=CloudroomQueue_registerCallBack>void registerCallBack(CloudroomQueueCallback callBack)</h2>

- **功能**:  注册监听回调
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callBack| CloudroomQueueCallback |    回调对象| 

<h2 id=CloudroomQueue_unregisterCallBack>void unregisterCallBack(CloudroomQueueCallback callBack)</h2>

- **功能**:  反注册监听回调
  
- **返回值**:  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callBack| CloudroomQueueCallback |    指定的反注册回调对象| 

<h2 id=initQueue>void initQueue(String cookie)</h2>

- **功能**:  初始化用户队列功能数据
  
- **返回值**:  无
>回调函数[initQueueDatRslt](#initQueueDatRslt)
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cookie| String |    自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

- <p style="color:red; font-size:20px">注意事项:</p>

- 在响应回调initQueueDatRslt初始化成功后，才可获取队列队列相关信息


<h2 id=refreshAllQueueStatus>void refreshAllQueueStatus()</h2>

- **功能**:  刷新所有队列状态信息
  
- **返回值**:  无
>回调函数[queueStatusChanged](#queueStatusChanged)
 
- <p style="color:red; font-size:20px">注意事项:</p>

- 当前排队的队列或服务的队列，sdk自动有状态变化回调；其它队列则需要此函数来查询


<h2 id=getAllQueueInfo>ArrayList&lt;QueueInfo&gt; getAllQueueInfo()</h2>

- **功能**:  获取队列信息
  
- **返回值**:  ArrayList&lt;[QueueInfo](TypeDefinitions.md#QueueInfo)&gt;-队列信息列表
 
<h2 id=getQueueStatus>QueueStatus getQueueStatus(int queID)</h2>

- **功能**:  获指定取队列状态
  
- **返回值**:  [QueueStatus](TypeDefinitions.md#QueueStatus)-队列状态
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| queID| int |    队列ID|   

<h2 id=getQueuingInfo>QueuingInfo getQueuingInfo()</h2>

- **功能**:  功能获取我的排队信息
  
- **返回值**:  [QueuingInfo](TypeDefinitions.md#QueuingInfo)-我的排队信息


<h2 id=getServiceQueues>ArrayList&lt;Integer&gt; getServiceQueues()</h2>

- **功能**:  获取我服务的所有队列
  
- **返回值**:  队列ID列表


<h2 id=getSessionInfo>VideoSessionInfo getSessionInfo()</h2>

- **功能**:  获取我的会话信息
  
- **返回值**:  [VideoSessionInfo](TypeDefinitions.md#VideoSessionInfo)-我的会话信息


<h2 id=startQueuing>void startQueuing(int queID, String usrExtDat, String cookie)</h2>

- **功能**:  客户开始排队
  
- **返回值**:  无
>回调函数[startQueuingRslt](#startQueuingRslt) 
    
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| queID| int |    排队的队列ID|   
| usrExtDat| String |    用户排队扩展数据|   
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串|   

<h2 id=stopQueuing>void stopQueuing(String cookie)</h2>

- **功能**:  客户停止排队
  
- **返回值**:  无
>回调函数[stopQueuingRslt](#stopQueuingRslt)     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串|  

<h2 id=startService>void startService(int queID, String cookie)</h2>

- **功能**:  开始服务某个队列(可以多次调用，开启对多个队列的服务)
  
- **返回值**:  无
>回调函数[startServiceRslt](#startServiceRslt)        

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| queID| int |    排队的队列ID|   
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串|  
 
<h2 id=startService>void startService(int queID, int priority, String cookie)</h2>

- **功能**:  开始服务某个队列(可以多次调用，开启对多个队列的服务)
  
- **返回值**:  无
>回调函数[startServiceRslt](#startServiceRslt)     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| queID| int |    排队的队列ID|   
| priority| int |    座席优先级（缺省为0, 0为最高优先级, 值越大优先级越低)|   
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串|  

- <p style="color:red; font-size:20px">注意事项:</p>

- 如果没有开启免打扰，那么系统会自动分配客户：将收到事件autoAssignUser
- 如果开启免打扰，系统就不会分配客户，如需服务客户可调用reqAssignUser
- 座席优先级描述
  
	+ 座席优先级只在服务的队列内部有效；
	+ 客户优先分配给服务此队列优先级最高的，且空闲的座席；
	+ 优先级相同时，则分配给最先空闲的座席；
	+ 优先级高的座席变空闲时，不抢夺已分配的客户；


<h2 id=stopService>void stopService(int queID, String cookie)</h2>

- **功能**:  停止服务某个队列
  
- **返回值**:  无   
>回调函数[stopServiceRslt](#stopServiceRslt)   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| queID| int |    排队的队列ID|    
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串|  

<h2 id=reqAssignUser>void reqAssignUser(String cookie)</h2>

- **功能**:  请求分配一个客户
  
- **返回值**:  无
>回调函数[reqAssignUserRslt](#reqAssignUserRslt)   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串|  

- <p style="color:red; font-size:20px">注意事项:</p>

- 当关闭免打扰时，系统将自动分配客户，无需调用此函数
- 当开启免打扰时，系统不再自动分配客户，座席如需服务客户可使用此函数分配

<h2 id=acceptAssignUser>void acceptAssignUser(int queID, String userID, String cookie)</h2>

- **功能**:  接受系统安排的客户
  
- **返回值**:  无    
>回调函数[reqAssignUserRslt](#reqAssignUserRslt) 

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| queID| int |    排队的队列ID| 
| userID| String |    队列中的用户ID| 
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h2 id=rejectAssignUser>void rejectAssignUser(int queID, String userID, String cookie)</h2>

- **功能**:  拒绝系统安排的客户
  
- **返回值**:  无
>回调函数[reqAssignUserRslt](#reqAssignUserRslt) 

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| queID| int |    排队的队列ID| 
| userID| String |    队列中的用户ID| 
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 


## CloudroomQueue通知回调接口详情


<h2 id=initQueueDatRslt>void initQueueDatRslt(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h2>

- **功能**:  队列初始化操作结果
  
- **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) |    操作结果代码，成功为CRVIDEOSDK_NOERR| 
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串|  

<h2 id=queueStatusChanged>void queueStatusChanged(QueueStatus queStatus)</h2>

- **功能**:  队列状态变化通知
  
- **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| queStatus| [QueueStatus](TypeDefinitions.md#QueueStatus) |    新的队列状态 | 

- <p style="color:red; font-size:20px">注意事项:</p>

- 在排队的队列、或服务的队列发生变化时，将有队列状态变化通知到来
- 在调用refreshAllQueueStatus时，查询到的队列数据有变化时，会有通知到来
 
<h2 id=queuingInfoChanged>void queuingInfoChanged(QueuingInfo queuingInfo)</h2>

- **功能**:  排队信息变化通知
  
- **返回值**:  无  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| queuingInfo| [QueuingInfo](TypeDefinitions.md#QueuingInfo) |    排队信息 | 

<h2 id=startQueuingRslt>void startQueuingRslt(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h2>

- **功能**:  开始排队操作结果
  
- **返回值**:  无    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) |    操作结果代码，CRVIDEOSDK_NOERR为成功操作 | 
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h2 id=stopQueuingRslt>void stopQueuingRslt(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h2>

- **功能**:  停止排队操作结果
  
- **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) |    操作结果代码，CRVIDEOSDK_NOERR为成功操作| 
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h2 id=startServiceRslt>void startServiceRslt(int queID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h2>

- **功能**:  开始服务队列操作结果
  
- **返回值**:  无  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| queID| int |    排队的队列ID| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) |    操作结果代码，CRVIDEOSDK_NOERR为成功操作| 
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h2 id=stopServiceRslt>void stopServiceRslt(int queID, CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h2>

- **功能**:  停止服务队列操作结果
  
- **返回值**:  无  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| queID| int |    排队的队列ID| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) |    操作结果代码，CRVIDEOSDK_NOERR为成功操作| 
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h2 id=reqAssignUserRslt>void reqAssignUserRslt(CRVIDEOSDK_ERR_DEF sdkErr, UserInfo usr, String cookie)</h2>

- **功能**:  停止服务队列操作结果
  
- **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) |    操作结果代码，CRVIDEOSDK_NOERR为成功操作| 
| usr| [UserInfo](TypeDefinitions.md#UserInfo) |    请求到的队列用户 | 
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h2 id=autoAssignUser>void autoAssignUser(UserInfo usr)</h2>

- **功能**:  队列系统自动分配客户
  
- **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| usr| [UserInfo](TypeDefinitions.md#UserInfo) |    请求到的队列用户 | 

- <p style="color:red; font-size:20px">注意事项:</p>

- 如果想停止系统的自动分配，请调用CloudroomVideoMgr中的 setDNDStatus 设置免打扰功能。

<h2 id=cancelAssignUser>void cancelAssignUser(int queID, String userID)</h2>

- **功能**:  队列系统取消之前自动分配的的客户
  
- **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| queID| int |    服务的队列| 
| userID| String |    自动分配用户被取消| 

<h2 id=responseAssignUserRslt>void responseAssignUserRslt(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h2>

- **功能**:  拒绝、接受分配的用户
  
- **返回值**:  无   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| sdkErr| [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) |    操作结果代码，CRVIDEOSDK_NOERR为成功操作 | 
| cookie| String |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

- <p style="color:red; font-size:20px">注意事项:</p>

- 队列系统通过接口autoAssignUser给开始队列服务的人自动推送用户，收到系统分配的用户后，
如果队列服务者还未决定接受acceptAssignUser还是拒绝rejectAssignUser推送的用户，系统可用取消本次推送，
并通过本接口通知队列服务者。


## CloudroomHttpFileMgr接口详情

Http文件传输组件，实现Http文件上传下载、及文件管理。件，整个程序的生命过程中只能有一个实例。

----

<h2 id=CloudroomHttpFileMgr_registerCallBack>void registerCallBack(CloudroomHttpFileMgrCallback callBack)</h2>

- **功能**:  注册监听回调
  
- **返回值**:  无    
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callBack| CloudroomHttpFileMgrCallback |    回调对象| 

<h2 id=CloudroomHttpFileMgr_unregisterCallBack>void unregisterCallBack(CloudroomHttpFileMgrCallback callBack)</h2>

- **功能**:  反注册监听回调
  
- **返回值**:  无   
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callBack| CloudroomHttpFileMgrCallback |    指定的反注册回调对象| 

<h2 id=startMgr>void startMgr()</h2>

- **功能**:  启动Http文件文件组件运行
  
- **返回值**:  无 
 
- <p style="color:red; font-size:20px">注意事项:</p>

- 在调用CloudroomVideoSDK的 init 初始化SDK后后方可调用

<h2 id=stopMgr>void stopMgr()</h2>

- **功能**:  停止Http文件文件组件运行
  
- **返回值**:  无

<h2 id=getAllTransferInfos>ArrayList&lt;FileTransInfo&gt; getAllTransferInfos()</h2>

- **功能**:  获取本地上传、下载文件信息
  
- **返回值**:  ArrayList&lt;[FileTransInfo](TypeDefinitions.md#FileTransInfo)&gt;-文件信息 

<h2 id=startTransferFile>void startTransferFile(HttpReqInfo info)</h2>

- **功能**:  开始下载/上传文件
  
- **返回值**:  无  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| info| [HttpReqInfo](TypeDefinitions.md#HttpReqInfo) |    上传文件信息| 

- <p style="color:red; font-size:20px">注意事项:</p>

- 上传不支持断点续传； 下载支持断点续传；如果文件传输完成，且fileVersion一致，下次再请求时会立即报告完成。
 
<h2 id=cancelFileTransfer>void cancelFileTransfer(String fileName)</h2>

- **功能**:  取消传输
  
- **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName| String |    本地路径文件名| 

- <p style="color:red; font-size:20px">注意事项:</p>
1. 取消时，只是停止了传输任务，不清理记录及断点文件。

<h2 id=rmTransferInfo>void rmTransferInfo(String fileName, int bRemoveLocFile)</h2>

- **功能**:  删除传输记录及相关文件
  
- **返回值**:  无
    
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName | String |    本地路径文件名   | 
| bRemoveLocFile | int |    是否移除本地文件   | 

- <p style="color:red; font-size:20px">注意事项:</p>

- 此接口将文件从管理器中移除（getAllTransferInfos将不再返回相关信息），如果bRemoveLocFile为1时， 那么上传的源始文件、下载的临时文件或结果文件都将被移除。


## CloudroomHttpFileMgr通知回调接口详情
 

<h2 id=fileStateChanged>void fileStateChanged(String fileName, HTTP_TRANSFER_STATE state)</h2>

- **功能**:  通知用户文件状态更改
  
- **返回值**:  无 

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName| String |    本地路径文件名   | 
| state| [HTTP_TRANSFER_STATE](Constant.md#HTTP_TRANSFER_STATE) |    状态 | 

<h2 id=fileProgress>void fileProgress(String fileName, int finisedSize, int totalSize)</h2>

- **功能**:  通知用户文件的传输进度
  
- **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName| String |    本地路径文件名   | 
| finisedSize| int |    已传输大小| 
| totalSize| int |    文件总大小| 
 
<h2 id=fileFinished>void fileFinished(String fileName, int rslt)</h2>

- **功能**:  通知用户文件传输结束
  
- **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName| String |    本地路径文件名   | 
| rslt| int |    传输结果，详见定义 [HTTP_TRANSFER_STATE](Constant.md#HTTP_TRANSFER_STATE)|



## 可视化组件接口详情

<h1 id=VideoUIView >1. 成员视频UI显示组件</h2>

<font size=4>com.cloudroom.cloudroomvideosdk.VideoUIView 是视频显示控件，它显示设定的用户的视频，
是由视频房间组件内相关接口的封装而成，如果此方式不满足需求，可以使用视频房间组件内相关的接口自行实现。
多实例方式，在会话中可以为每一个视频用户创建一个用来显示其画面</font>

<h2 id=setUsrVideoId>void setUsrVideoId(UsrVideoId usrVideoId)</h2>

 - **功能**：  设置显示的目标用户视频

 - **返回值**：  无


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| usrVideoId| [UsrVideoId](TypeDefinitions.md#UsrVideoId)|     目标用户视频ID|

<h2 id=setUsrVideoId>void setUsrVideoId(UsrVideoId usrVideoId, int qualityLv)</h2>

 - **功能**：  设置显示的目标用户视频

 - **返回值**：  无


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| usrVideoId| [UsrVideoId](TypeDefinitions.md#UsrVideoId)|     目标用户视频ID|
| qualityLv| int|     视频档位(1:默认档位，2:对应quality2，3:对应quality3，如果2,3未开启时将显示1档的视频流）|

- <p style="color:red; font-size:20px">注意事项:</p>

 - 从房间内可观看摄像头列表中获取userID和videoID


<h2 id=getUsrVideoId>UsrVideoId getUsrVideoId()</h2>

 - **功能**：  获取当前显示的用户

 - **返回值**：  用户视频ID

<h2 id=VideoUIView_getPicFrameTime>int getPicFrameTime()</h2>

+ **功能**：  获取图像时间戳
+ **返回值**：  当前图像数据对应的时间戳


<h2 id=VideoUIView_isPicEmpty>boolean isPicEmpty()</h2>

+ **功能**：  检查图像是否为空
+ **返回值**：  图像是否为空


<h2 id=VideoUIView_getPicWidth>int getPicWidth()</h2>

 - **功能**：  获取图像宽

 - **返回值**：  宽


<h2 id=VideoUIView_getPicHeight>int getPicHeight()</h2>

 - **功能**：  获取图像高

 - **返回值**：  高


<h2 id=VideoUIView_clear>void clear()</h2>

 - **功能**：  清空显示

 - **返回值**：  无


<h2 id=VideoUIView_setScaleType>void setScaleType(int scaleType)</h2>

 - **功能**：  设置图像显示模式

 - **返回值**：  无


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| scaleType| int|     <p>0：等比缩放留空居中显示；</p><p>1：等比缩放裁剪铺满显示；</p><p>2：不等比缩放铺满显示（可能导致图像拉伸）；</p>|

<h2 id=VideoUIView_getScaleType>int getScaleType()</h2>

 - **功能**：  获取视频显示模式

 - **返回值**：  int <p>0：等比缩放留空居中显示；</p><p>1：等比缩放裁剪铺满显示；</p><p>2：不等比缩放铺满显示（可能导致图像拉伸）；</p>

 <h2 id=VideoUIView_getShowPic>Bitmap getShowPic()</h2>

 - **功能**：  获取当前显示图像

 - **返回值**：  当前显示图像
 

<h1 id=ScreenShareUIView >2. 屏幕共享UI显示组件</h2>

> <font size=4>com.cloudroom.cloudroomvideosdk.ScreenShareUIView 是屏幕共享开启后远端显示控件，
	是由视频房间组件内相关接口的封装而成，如果此方式不满足需求，可以使用视频房间组件内相关的接口自行实现。</font>

<h2 id=ScreenShareUIView_getPicFrameTime>int getPicFrameTime()</h2>

 - **功能**：  获取图像时间戳

 - **返回值**：  当前图像数据对应的时间戳


<h2 id=ScreenShareUIView_isPicEmpty>boolean isPicEmpty()</h2>

 - **功能**：  检查图像是否为空

 - **返回值**：  图像是否为空


<h2 id=ScreenShareUIView_getPicWidth>int getPicWidth()</h2>

 - **功能**：  获取图像宽

 - **返回值**：  宽


<h2 id=ScreenShareUIView_getPicHeight>int getPicHeight()</h2>

 - **功能**：  获取图像高

 - **返回值**：  高


<h2 id=ScreenShareUIView_clear>void clear()</h2>

 - **功能**：  清空显示

 - **返回值**：  无


<h2 id=ScreenShareUIView_setScaleType>void setScaleType(int scaleType)</h2>

 - **功能**：  设置图像显示模式

 - **返回值**：  无


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| scaleType| int|     <p>0：等比缩放留空居中显示；</p><p>1：等比缩放裁剪铺满显示；</p><p>2：不等比缩放铺满显示（可能导致图像拉伸）；</p>|

<h2 id=ScreenShareUIView_getScaleType>int getScaleType()</h2>

 - **功能**：  获取视频显示模式

 - **返回值**：  int <p>0：等比缩放留空居中显示；</p><p>1：等比缩放裁剪铺满显示；</p><p>2：不等比缩放铺满显示（可能导致图像拉伸）；</p>
 
 <h2 id=ScreenShareUIView_getShowPic>Bitmap getShowPic()</h2>

 - **功能**：  获取当前显示图像

 - **返回值**：  当前显示图像


<h1 id=MediaUIView >3. 影音共享UI显示组件</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.MediaUIView 影音显示控件，
	是由视频房间组件内相关接口的封装而成，如果此方式不满足需求，可以使用视频房间组件内相关的接口自行实现功能。</font>



<h2 id=MediaUIView_getPicFrameTime>int getPicFrameTime()</h2>

 - **功能**：  获取图像时间戳

 - **返回值**：  当前图像数据对应的时间戳


<h2 id=MediaUIView_isPicEmpty>boolean isPicEmpty()</h2>

 - **功能**：  检查图像是否为空

 - **返回值**：  图像是否为空


<h2 id=MediaUIView_getPicWidth>int getPicWidth()</h2>

 - **功能**：  获取图像宽

 - **返回值**：  宽


<h2 id=MediaUIView_getPicHeight>int getPicHeight()</h2>

 - **功能**：  获取图像高

 - **返回值**：  高


<h2 id=MediaUIView_clear>void clear()</h2>

 - **功能**：  清空显示

 - **返回值**：  无


<h2 id=MediaUIView_setScaleType>void setScaleType(int scaleType)</h2>

 - **功能**：  设置图像显示模式

 - **返回值**：  无


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| scaleType| int|     <p>0：等比缩放留空居中显示；</p><p>1：等比缩放裁剪铺满显示；</p><p>2：不等比缩放铺满显示（可能导致图像拉伸）；</p>|

<h2 id=MediaUIView_getScaleType>int getScaleType()</h2>

 - **功能**：  获取视频显示模式

 - **返回值**：  int <p>0：等比缩放留空居中显示；</p><p>1：等比缩放裁剪铺满显示；</p><p>2：不等比缩放铺满显示（可能导致图像拉伸）；</p>


<h2 id=MediaUIView_getShowPic>Bitmap getShowPic()</h2>

 - **功能**：  获取当前显示图像

 - **返回值**：  当前显示图像
