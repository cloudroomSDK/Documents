# API参考

<h2 id=CloudroomVideoSDK>1. 基础组件（CloudroomVideoSDK）的接口函数</h2>

> <font size=4>CloudroomVideoSDK 是基础控件，负责整个SDK的初始化和反初始化操作。整个程序的生命过程中只能有一个实例</font>

----

<h3 id=GetCloudroomVideoSDKVer >+ (NSString *)getCloudroomVideoSDKVer</h3>

  + **功能**:  获取sdk的版本信息
  
  + **返回值**:  返回SDK版本号

<h3 id=initSDK>- (CRVIDEOSDK_ERR_DEF)initSDK:(SdkInitDat *)dat</h3>

  + **功能**:   SDK初始化 
  
  + **返回值**:  CRVIDEOSDK_NOERR为成功操作，其他详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
|dat|SdkInitDat|dat SDK配置、临时文件存放位置，不可为空，详见说明[SdkInitDat](TypeDefinitions.md#SdkInitDat) |

<h3 id=uninit>- (void)uninit</h3>

  + **功能**: SDK反初始化
  
  + **返回值**: 无 

<h3 id=serverAddr>- (NSString *)serverAddr</h3>

  + **功能**: 获取服务器地址
  
  + **返回值**: 服务器地址（如：www.cloudroom.com）或多个服务器地址串（如：www.cloudroom.com:8080;183.60.47.52:8080;）

<h3 id=setServerAddr>- (void)setServerAddr:(NSString *)serverList</h3>

  + **功能**: 设置服务器地址
  
  + **返回值**:  无
    
    ​    
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| serverList| NSString| 服务器地址（如：www.cloudroom.com）或多个服务器地址串（如：www.cloudroom.com:8080;183.60.47.52:8080;）|

<h3 id=isInitSuccess>- (BOOL)isInitSuccess</h3>

  + **功能**:   初始化是否成功
  
  + **返回值**: 初始化是否成功


<h2 id=CloudroomVideoMgr >2. 房间组件（CloudroomVideoMgr）的接口函数</h2>

><font size=4>CloudroomVideoMgr 是房间组件，实现登录、呼叫、房间创建销毁、透明通道传输等功能。 整个程序的生命过程中只能有一个实例。</font>

----

<h3 id=addMgrCallback>-(void) addMgrCallback:(id&lt;CloudroomVideoMgrCallBack&gt;)callBack </h3>

  + **功能**:  注册监听回调
  
  + **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callBack| id&lt;CloudroomVideoMgrCallBack&gt; | 回调对象|  

<h3 id=removeMgrCallback>-(void) removeMgrCallback:(id&lt;CloudroomVideoMgrCallBack&gt;)callBack </h3>

  + **功能**:  反注册监听回调
  
  + **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callBack| id&lt;CloudroomVideoMgrCallBack&gt;| 回调对象|  

<h3 id=Userlogin>- (void)login:(LoginDat *)loginDat</h3>

  + **功能**:  登陆服务器
  
  + **返回值**:  无
>登录成功则触发回调[loginSuccess](#loginSuccess) ， 登录失败则触发回调[loginFail](#loginFail) 


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| loginDat| LoginDat| 登录数据对象，详见定义[LoginDat](TypeDefinitions.md#LoginDat) |  

<h4>- (void)login:(LoginDat *)loginDat cookie:(NSString *)cookie;</h3>

  + **功能**:  密码登陆服务器
  
  + **返回值**:  无
>登录成功则触发回调[loginSuccess](#loginSuccess) ， 登录失败则触发回调[loginFail](#loginFail) 


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| loginDat| LoginDat| 登录数据对象，详见定义[LoginDat](TypeDefinitions.md#LoginDat) | 
| cookie| NSString| 自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=loginByToken>-(void)loginByToken:(NSString*)token nickName:(NSString*)nickName userID:(NSString*)userID userAuthCode:(NSString*)userAuthCode cookie:(NSString *)cookie;</h3>

  + **功能**:  token登陆服务器
  
  + **返回值**:  无
>成功则触发回调[loginSuccess](#loginSuccess) ， 登录失败则触发回调[loginFail](#loginFail) 


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| token| NSString| token鉴权码 | 
| nickName| NSString| 昵称 | 
| userID| NSString| 用户ID,业务方自由填写，保证唯一性即可（同一app下，具有唯一性即可） | 
| userAuthCode| NSString| 默认填空，只有开启第三方认证才需要填写，（开启第三方认证时，SDK服务器将连接提前配好的业务方服务器进行实时验证） | 
| cookie| NSString| 自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=updateToken>-(void)updateToken:(NSString*)token</h3>

  + **功能**:  更新Token
  
  + **返回值**:  无    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| token| NSString| token鉴权码 | 

<h3 id=logout>- (void)logout</h3>

  + **功能**:  反注册本次登陆
  
  + **返回值**:  无


<h3 id=setDNDStatus>- (void)setDNDStatus:(int)DNDStatus cookie:(NSString *)cookie</h3>

  + **功能**:  设置免打扰状态， 如果使用到了SDK的队列功能，则入会后需调用此接口，设置自己的为免打扰状态，防止系统再次推送自己

 + **返回值**:  无
>设置免打扰状态成功则触发回调[setDNDStatusSuccess](#setDNDStatusSuccess) ， 设置免打扰状态失败则触发回调[setDNDStatusFail](#setDNDStatusFail) 


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| DNDStatus| int| 0代表关闭免打扰， 其它值代表开启免打扰，含义自由定义| 
| cookie| NSString| 自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=getUserStatus>- (void)getUserStatus:(NSString *)userID cookie:(NSString *)cookie</h3>

  + **功能**:  获取企业下指定用户的在线状态
  
  + **返回值**:  无
>回调函数[getUserStatusRslt](#getUserStatusRslt)     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| NSString| 具体用户的账户ID| 
| cookie| NSString| 自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=getUserStatus>- (void)getUserStatus:(NSString *)cookie</h3>

  + **功能**:  将获取企业下所有用户在线状态（包括呼叫房间状态、免打扰状态）
  
  + **返回值**:  无
>回调函数[getUserStatusRslt](#getUserStatusRslt)         

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cookie| NSString| 自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=startUserStatusNotify>- (void)startUserStatusNotify:(NSString *)cookie</h3>

  + **功能**:  开启用户的状态推送 。开启后，企业下所有用户状态有变化时(包括呼叫房间状态、免打扰状态)，都会收到通知。开启后，用户量越大消息量越大，所以请按需开启。

 + **返回值**:  无
>回调函数[startStatusPushRslt](#startStatusPushRslt)        

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cookie| NSString| 自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=stopUserStatusNotify>- (void)stopUserStatusNotify:(NSString *)cookie</h3>

  + **功能**:  关闭用户的状态推送
  
  + **返回值**:  无
>回调函数[stopStatusPushRslt](#stopStatusPushRslt)       

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cookie| NSString| 自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=createMeeting>- (void)createMeeting:(NSString *)cookie</h3>

  + **功能**:  创建视频房间
  
  + **返回值**:  无
>创建房间成功则触发回调[createMeetingSuccess](#createMeetingSuccess)，创建房间失败则触发[createMeetingFail](#createMeetingFail)   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cookie| NSString|  自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=destroyMeeting>-(void)destroyMeeting(int)meetID cookie:(NSString *)cookie)</h3>

  + **功能**:  销毁视频房间
  
  + **返回值**:  无
>回调函数[destroyMeetingRslt](#destroyMeetingRslt)     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| meetID| int|   房间号 | 
| cookie| NSString|  自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=getMeetings>-(void)getMeetings:(NSString*)cookie</h3>

  + **功能**:  获取房间列表
  
  + **返回值**:  无
>获取房间列表成功则触发回调[getMeetingSuccess](#getMeetingSuccess)，获取房间列表失败则触发[getMeetingFailed](#getMeetingFailed)         

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cookie| NSString|  自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=callIn>- (NSString *)call:(NSString *)calledUserID meetInfo:(MeetInfo *)meetInfo param:(NSString *)param cookie:(NSString *)cookie</h3>

  + **功能**:  发起呼叫，邀请用户参加视频会话， 呼叫时，对方迟迟不响应，30秒后系统自动结束呼叫
  
  + **返回值**:  本次呼叫标识码（呼叫ID）
>发起呼叫成功则触发回调[callSuccess](#callSuccess)，发起呼叫失败则触发[callFail](#callFail)  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| calledUserID| NSString|   被叫用户的账户ID| 
| meetInfo| MeetInfo|   房间信息，详见定义[MeetInfo](TypeDefinitions.md#MeetInfo)，空时代表无房间信息，应由被叫创建或提供房间信息| 
| usrExtDat| NSString|   自定义扩展参数| 
| cookie| NSString|  自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=acceptCall>- (void)acceptCall:(NSString *)callID meetInfo:(MeetInfo *)meetInfo usrExtDat:(NSString *)usrExtDat cookie:(NSString *)cookie;</h3>

  + **功能**:  接受对方发起的视频请求，开始进入视频会话
  
  + **返回值**:  无
>接受对方发起的视频请求成功则触发回调[acceptCallSuccess](#acceptCallSuccess)，接受对方发起的视频请求失败则触发[acceptCallFail](#acceptCallFail)  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| NSString|    呼叫标识码| 
| meetInfo| MeetInfo|    房间信息，详见定义[MeetInfo](TypeDefinitions.md#MeetInfo)| 
| usrExtDat| NSString|   自定义扩展参数| 
| cookie| NSString|  自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=rejectCall>- (void)rejectCall:(NSString *)callID usrExtDat:(NSString *)usrExtDat cookie:(NSString *)cookie;</h3>

  + **功能**:  拒绝对方的视频请求

  + **返回值**:  无
>拒绝对方发起的视频请求成功则触发回调[rejectCallSuccess](#rejectCallSuccess)，拒绝对方发起的视频请求失败则触发[rejectCallFail](#rejectCallFail)      

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| NSString|    呼叫标识码| 
| usrExtDat| NSString|   自定义扩展参数| 
| cookie| NSString|  自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=hangupCall>-(void)hangupCall:(NSString *)callID usrExtDat:(NSString *)usrExtDat cookie:(NSString *)cookie</h3>

  + **功能**:  挂断正在进行的视频呼叫或视频通话
  
  + **返回值**:  无
>挂断视频成功则触发回调[hangupCallSuccess](#hangupCallSuccess)，挂断视频失败则触发[hangupCallFail](#hangupCallFail)      

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| NSString|    呼叫标识码| 
| usrExtDat| NSString|   自定义扩展参数| 
| cookie| NSString|  自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=callMoreParty>- (NSString *)callMoreParty:(NSString *)calledID meetInfo:(MeetInfo *)meetInfo usrExtDat:(NSString *)usrExtDat cookie:(NSString *)cookie</h3>

  + **功能**:  呼叫其他人进入房间
  
  + **返回值**:  呼叫邀请ID
>回调函数[callMorePartyRslt](#callMorePartyRslt)  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| calledUserID| NSString|    被呼叫的用户ID| 
| meetInfo| MeetInfo|    房间信息，详见定义[MeetInfo](TypeDefinitions.md#MeetInfo)| 
| usrExtDat| NSString|   自定义扩展参数| 
| cookie| NSString|  自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=cancelCallMoreParty>- (void)cancelCallMoreParty:(NSString *)inviteID usrExtDat:(NSString *)usrExtDat cookie:(NSString *)cookie</h3>

  + **功能**:  取消呼叫他人进入房间
  
  + **返回值**:  无 
>回调函数[cancelCallMorePartyRslt](#cancelCallMorePartyRslt)

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| inviteID| NSString|    呼叫邀请ID| 
| usrExtDat| NSString|   自定义扩展参数| 
| cookie| NSString|  自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=sendCmd>- (NSString *)sendCmd:(NSString *)targetUserId data:(NSString *)data cookie:(NSString *)cookie</h3>

  + **功能**:  发送小块数据（50K以内），此接口不能被cancelSend, 一次性发送，不会有进度通知
  
  + **返回值**:  分配的任务ID
>回调函数[sendCmdRlst](#sendCmdRlst)


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| targetUserId| NSString|    目标用户ID| 
| data| NSString|   发送的数据| 
| cookie| NSString|  自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=sendBuffer>- (NSString *)sendBuffer:(NSString *)targetUserId data:(NSString *)data cookie:(NSString *)cookie</h3>

  + **功能**:  发送大块数据 ，分块发送，进度通知事件[sendProgress](#sendProgress), 调用cancelSend 取消发送
  
  + **返回值**:  分配的任务ID
>回调函数[sendBufferRlst](#sendBufferRlst)

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| targetUserId| NSString|    目标用户ID| 
| data| NSString|   发送的数据，base64编码| 
| cookie| NSString|  自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=sendFile>- (NSString *)sendFile:(NSString *)targetUserId fileName:(NSString *)fileName cookie:(NSString *)cookie</h3>

  + **功能**:  发送文件 ，分块发送，进度通知事件sendProgress，调用cancelSend取消发送
  
  + **返回值**:  分配的任务ID
>回调函数[sendFileRlst](#sendFileRlst)    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| targetUserId| NSString|    目标用户ID| 
| fileName| NSString|    需要发送的文件名| 
| cookie| NSString|  自定义数据(在响应消息中回传给调用者)，不需要时传空字符串|

<h3 id=cancelSend>- (void)cancelSend:(NSString *)sendId</h3>

  + **功能**:  取消数据发送
  
  + **返回值**:  无
>回调函数[cancelSendRlst](#cancelSendRlst)   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| taskID| NSString|    任务ID| 

<h3 id=setMarkText>-(void)setMarkText:(NSString*)videoFilePathName timestamp:(int)timestamp markText:(NSString*)markText</h3>

  + **功能**:  添加视频打点信息
  
  + **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoFilePathName| NSString|    视频文件全路径| 
| timestamp| NSString|    时间戳| 
| markText| NSString|    打点信息| 

<h3 id=removeMarkText>-(void)removeMarkText:(NSString*)videoFilePathName timestamp:(int)timestamp</h3>

  + **功能**:  移除视频打点信息
  
  + **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoFilePathName| NSString|    视频文件全路径| 
| timestamp| NSString|    时间戳| 

<h3 id=getAllMarks>-(NSString*)getAllMarks:(NSString*)videoFilePathName</h3>

  + **功能**:  获取所有打点信息
  
  + **返回值**:  打点信息

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoFilePathName| NSString|    视频文件全路径| 

<h3 id=getVideoMarkFile>-(NSString*)getVideoMarkFile:(NSString*)videoFilePathName</h3>

  + **功能**:  获取打点文件的绝对文件路径名
  
  + **返回值**:  打点文件的绝对文件路径名

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoFilePathName| NSString|    视频文件全路径| 


<h3 id=CloudroomVideoMgrCallback></h3>

###  通知回调函数 

CloudroomVideoMgrCallback是登录、呼叫、房间创建销毁、透明传输等功能的回调接口

------

<h3 id=loginSuccess>- (void)loginSuccess:(NSString *)usrID cookie:(NSString *)cookie</h3>

  + **功能**:  登录成功响应
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| usrID| NSString|    用户账户| 
| cookie| NSString|    自定义用户数据| 

<h3 id=loginFail>- (void)loginFail:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie</h3>

  + **功能**:  登录失败响应
  
  + **返回值**:  无
    

  如果启用了第三方鉴权，并在鉴权失败时（sdkErr为CRVIDEOSDK_CUSTOMAUTH_FAILED），可以通过getUserAuthErrCode、getUserAuthErrDesc获取详细原因。

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| CRVIDEOSDK_ERR_DEF|    操作结果代码，详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)| 
| cookie| NSString|    自定义用户数据| 

<h3 id=getUserAuthErrCode> -(int)getUserAuthErrCode</h3>

  + **功能**:  获取第三方认证错误码
  
  + **返回值**:  错误码

  <h3 id=getUserAuthErrDesc>-(NSString*)getUserAuthErrDesc</h3>

  + **功能**:  获取第三方认证错误描述
  
  + **返回值**:  错误描述


<h3 id=setDNDStatusSuccess>- (void)setDNDStatusSuccess:(NSString *)cookie</h3>

  + **功能**:  客户端设置免打扰状态操作成功响应
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cookie| NSString|    自定义用户数据| 

<h3 id=setDNDStatusFail>- (void)setDNDStatusFail:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie</h3>

  + **功能**:  客户端设置免打扰状态操作失败响应
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| CRVIDEOSDK_ERR_DEF|    操作结果代码，详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)| 
| cookie| NSString|    自定义用户数据| 

<h3 id=getUserStatusRslt>void getUserStatusRslt(CRVIDEOSDK_ERR_DEF sdkErr, ArrayList&lt;UserStatus&gt;  userStatus, String cookie)</h3>

  + **功能**:  获取企业内所有用户在线状态响应
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| CRVIDEOSDK_ERR_DEF|    操作结果代码，详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)| 
| usersStatus| ArrayList&lt;UserStatus&gt; |    用户在线状态信息列表， 详见json结构之UserStatus| 
| cookie| String|    自定义用户数据| 

<h3 id=startStatusPushRslt>void startStatusPushRslt(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h3>

  + **功能**:  启动用户状态推送响应
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| CRVIDEOSDK_ERR_DEF|    操作结果代码，详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)| 
| cookie| String|    自定义用户数据| 

<h3 id=stopStatusPushRslt>void stopStatusPushRslt(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h3>

  + **功能**:  结束用户状态推送响应
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| CRVIDEOSDK_ERR_DEF|    操作结果代码，详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)| 
| cookie| String|    自定义用户数据| 

<h3 id=notifyUserStatus>void notifyUserStatus(UserStatus userStatus)</h3>

  + **功能**:  某个用户状态变化通知
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userStatus| UserStatus|     单个用户在线状态信息，详见定义[UserStatus](TypeDefinitions.md#UserStatus)| 

<h3 id=lineOff>- (void)lineOff:(CRVIDEOSDK_ERR_DEF)sdkErr</h3>

  + **功能**:  SDK通知自己掉线
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| CRVIDEOSDK_ERR_DEF|     掉线的错误代码，详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)| 

<h3 id=createMeetingSuccess>- (void)createMeetingSuccess:(MeetInfo *)meetInfo cookie:(NSString *)cookie</h3>

  + **功能**:  创建房间成功响应
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| meetInfo| MeetInfo|     房间信息, 详见定义[MeetInfo](TypeDefinitions.md#MeetInfo)| 
| cookie| NSString|     自定义用户数据| 

<h3 id=createMeetingFail>- (void)createMeetingFail:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie</h3>

  + **功能**:  创建房间成功响应
  
  + **返回值**:  无

  <h3 id=notifyTokenNearTimeout>-(void)notifyTokenNearTimeout</h3>

  + **功能**:  通知Token即将失效，有效时间剩余30s左右（可调用[updateToken](#(updateToken))更新Token）
  
  + **返回值**:  无    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| CRVIDEOSDK_ERR_DEF|    操作失败代码，详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)| 
| cookie| NSString|     自定义用户数据| 

<h3 id=destroyMeetingRslt>void destroyMeetingRslt(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h3>

  + **功能**:  结束房间响应
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| CRVIDEOSDK_ERR_DEF|   操作结果代码，成功为CRVIDEOSDK_NOERR，其他详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) | 
| cookie| String|     自定义用户数据| 

<h3 id=getMeetingSuccess>void getMeetingSuccess(ArrayList&lt; MeetInfo&gt;  meetings, String cookie)</h3>

  + **功能**:  获取当前房间列表响应
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| meetInfo| MeetInfo|     房间信息, 详见定义[MeetInfo](TypeDefinitions.md#MeetInfo)| 
| cookie| String|     自定义用户数据| 

<h3 id=getMeetingFailed>void getMeetingFailed(CRVIDEOSDK_ERR_DEF sdkErr, String cookie)</h3>

  + **功能**:  获取当前房间列表失败
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| meetInfo| MeetInfo|     房间信息, 详见定义[MeetInfo](TypeDefinitions.md#MeetInfo)| 
| cookie| String|     自定义用户数据| 

<h3 id=callSuccess>- (void)callSuccess:(NSString *)callID cookie:(NSString *)cookie</h3>

  + **功能**:  呼叫他人操作成功响应
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| NSString|     呼叫全局标识| 
| cookie| NSString|     自定义用户数据| 

<h3 id=callFail>- (void)callFail:(NSString *)callID errCode:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie</h3>

  + **功能**:  呼叫他人操作失败响应
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| NSString|     呼叫全局标识| 
| sdkErr| CRVIDEOSDK_ERR_DEF|     操作失败代码，详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)| 
| cookie| NSString|     自定义用户数据| 

<h3 id=acceptCallSuccess>- (void)acceptCallSuccess:(NSString *)callID cookie:(NSString *)cookie</h3>

  + **功能**:  接受他人呼叫操作成功响应
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| NSString|     呼叫全局标识| 
| cookie| NSString|     自定义用户数据| 

<h3 id=acceptCallFail>- (void)acceptCallFail:(NSString *)callID errCode:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie</h3>

  + **功能**:  接受他人呼叫操作失败响应
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| NSString|     呼叫全局标识| 
| sdkErr| CRVIDEOSDK_ERR_DEF|     操作失败代码，详见定义[CRVIDEOSDK_ERR_DEF](ndroidConstant.md#CRVIDEOSDK_ERR_DEF)| 
| cookie| NSString|     自定义用户数据| 

<h3 id=rejectCallSuccess>- (void)rejectCallSuccess:(NSString *)callID cookie:(NSString *)cookie</h3>

  + **功能**:  拒绝他人的呼叫成功响应
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| NSString|     呼叫全局标识| 
| cookie| NSString|     自定义用户数据| 

<h3 id=rejectCallFail>- (void)rejectCallFail:(NSString *)callID errCode:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie</h3>

  + **功能**:  拒绝他人的呼叫失败响应
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| NSString|     呼叫全局标识| 
| sdkErr| CRVIDEOSDK_ERR_DEF|     操作失败代码，详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)| 
| cookie| NSString|     自定义用户数据| 

<h3 id=hangupCallSuccess>- (void)hangupCallSuccess:(NSString *)callID cookie:(NSString *)cookie</h3>

  + **功能**:  挂断呼叫操作成功响应
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| NSString|     呼叫全局标识| 
| cookie| NSString|     自定义用户数据| 

<h3 id=hangupCallFail>- (void)hangupCallFail:(NSString *)callID errCode:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie</h3>

  + **功能**:  拒绝他人呼叫操作失败响应
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| NSString|     呼叫全局标识| 
| sdkErr| CRVIDEOSDK_ERR_DEF|     操作失败代码，详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) | 
| cookie| NSString|     自定义用户数据| 

<h3 id=notifyCallIn>- (void)notifyCallIn:(NSString *)callID meetInfo:(MeetInfo *)meetInfo callerID:(NSString *)callerID usrExtDat:(NSString *)usrExtDat</h3>

  + **功能**:  服务端通知被邀请
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| NSString|     呼叫全局标识| 
| meetInfo| MeetInfo|     房间信息，详见定义[MeetInfo](TypeDefinitions.md#MeetInfo)，空时代表无房间信息，应由被叫创建或提供房间信息| 
| callerID| NSString|     呼叫人员的标识ID| 
| usrExtDat| NSString|     自定义扩展参数| 

<h3 id=notifyCallAccepted>- (void)notifyCallAccepted:(NSString *)callID meetInfo:(MeetInfo *)meetInfo usrExtDat:(NSString *)usrExtDat</h3>

  + **功能**:   服务端通知会议邀请被接受回调
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| NSString|     呼叫全局标识| 
| meetInfo| MeetInfo|     房间信息，详见定义[MeetInfo](TypeDefinitions.md#MeetInfo)，空时代表无房间信息，应由被叫创建或提供房间信息| 
| usrExtDat| NSString|     自定义扩展参数| 

<h3 id=notifyCallRejected>- (void)notifyCallRejected:(NSString *)callID reason:(CRVIDEOSDK_ERR_DEF)reason usrExtDat:(NSString *)usrExtDat</h3>

  + **功能**:   服务端通知邀请被拒绝回调
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| NSString|     呼叫全局标识| 
| reason| CRVIDEOSDK_ERR_DEF|     呼叫被对方拒绝的原因代码，详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)| 
| usrExtDat| NSString|     自定义扩展参数| 

<h3 id=notifyCallhangup>- (void)notifyCallhangup:(NSString *)callID, usrExtDat:(NSString *)usrExtDat</h3>

  + **功能**:  SDK通知呼叫被挂断
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callID| NSString|     呼叫全局标识| 
| usrExtDat| NSString|     自定义扩展参数| 

<h3 id=callMorePartyRslt>- (void)callMorePartyRslt:(NSString *)inviteID sdkErr:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie</h3>

  + **功能**:  呼叫操作结果
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| inviteID| NSString|     邀请标识码（邀请ID）| 
| sdkErr| CRVIDEOSDK_ERR_DEF|     操作结果代码，详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)| 
| cookie| NSString|     自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=cancelCallMorePartyRslt>- (void)cancelCallMorePartyRslt:(NSString *)inviteID, sdkErr:(CRVIDEOSDK_ERR_DEF)sdkErr, cookie:(NSString *)cookie</h3>

  + **功能**:  取消呼叫操作结果
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| inviteID| String|     邀请标识码（邀请ID）| 
| sdkErr| CRVIDEOSDK_ERR_DEF|     操作结果代码，详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)| 
| cookie| String|     自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=notifyCallMorePartyStatus>void notifyCallMorePartyStatus(String inviteID, INVITE_STATUS status)</h3>

  + **功能**:  通知呼叫状态改变
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| inviteID| String|     邀请标识码（邀请ID）| 
| sdkErr| CRVIDEOSDK_ERR_DEF|     操作结果代码，详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)| 

<h3 id=sendCmdRlst>- (void)sendCmdRlst:(NSString *)sendId sdkErr:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie</h3>

  + **功能**:  发送数据时，SDK通知发送结果
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| taskID| NSString|     发送任务id| 
| sdkErr| CRVIDEOSDK_ERR_DEF|     操作结果代码，详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)| 
| cookie| NSString|     自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=sendBufferRlst>- (void)sendBufferRlst:(NSString *)sendId sdkErr:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie</h3>

  + **功能**:  发送数据时，SDK通知发送结果
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| taskID| NSString|     发送任务id| 
| sdkErr| CRVIDEOSDK_ERR_DEF|     操作结果代码，详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)| 
| cookie| NSString|     自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=sendFileRlst>- (void)sendFileRlst:(NSString *)sendId fileName:(NSString *)fileName sdkErr:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie</h3>

  + **功能**:  发送数据时，SDK通知发送结果
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| taskID| NSString|     发送任务id| 
| fileName| NSString|     文件名| 
| sdkErr| CRVIDEOSDK_ERR_DEF|     操作结果代码，详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)| 
| cookie| NSString|     自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=sendProgress>- (void)sendProgress:(NSString *)sendId sendedLen:(int)sendedLen totalLen:(int)totalLen cookie:(NSString *)cookie</h3>

  + **功能**:  发送数据时，SDK通知发送进度
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| taskID| NSString|     发送任务id| 
| sendedLen| int|     已发送的数据长度| 
| totalLen| int|     需要发送的总长度| 
| cookie| NSString|     自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=cancelSendRlst>- (void)cancelSendRlst:(NSString *)sendId sdkErr:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie</h3>

  + **功能**:  取消发送操作响应
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| taskID| NSString|     发送任务id| 
| sdkErr| CRVIDEOSDK_ERR_DEF|     操作结果代码，详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)| 
| cookie| NSString|     自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=notifyCmdData>- (void)notifyCmdData:(NSString *)sourceUserId data:(NSString *)data</h3>

  + **功能**:  SDK通知收到小块数据
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sourceUserId| NSString|     数据来源| 
| data| NSString|     数组数据| 

<h3 id=notifyBufferData>- (void)notifyBufferData:(NSString *)sourceUserId data:(NSString *)data</h3>

  + **功能**:  SDK通知收到大块数据
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sourceUserId| NSString|     数据来源| 
| data| NSString|     数组数据| 

<h3 id=notifyFileData>- (void)notifyFileData:(NSString *)sourceUserId tmpFile:(NSString *)tmpFile orgFileName:(NSString *)orgFileName</h3>

  + **功能**:  SDK通知收到文件数据
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sourceUserId| NSString|     数据来源| 
| tmpFile| NSString|     临时文件，不需要时，请移除或删除对应文件| 
| orgFileName| NSString|     源始文件名| 

<h3 id=notifyCancelSend>- (void)notifyCancelSend:(NSString *)sendId</h3>

  + **功能**:  通知发来的数据/文件被取消
  
  + **返回值**:  无
    
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| taskID| NSString |发送的任务ID  数据来源|


<h2 id=CloudroomVideoMeeting >3. 视频房间组件（CloudroomVideoMeeting）的接口函数</h2>

><font size=4>CloudroomVideoMeeting 是房间核心控件，实现通话建立、音频采集播入、视频采集编解码、屏幕共享、录制、影音播放等功能，整个程序的生命过程中只能有一个实例</font>

----

<h3 id=addMeetingCallBack>- (void)addMeetingCallBack:(id )callBack </h3>

  + **功能**:  注册监听回调
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callBack| id| 回调对象|  

<h3 id=removeMeetingCallBack>-(void) removeMeetingCallBack:(id)callBack</h3>

  + **功能**:  反注册监听回调
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callBack| id| 反注册的回调对象|  

<h3 id=enterMeeting>- (void)enterMeeting:(int)meetID pswd:(NSString *)pswd userID:(NSString *)userID nikeName:(NSString *)nikeName</h3>

  + **功能**:  使用房间ID和密码（可为空）进入指定的视频房间
  
  + **返回值**:  无
>回调函数[enterMeetingRslt](#enterMeetingRslt)  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| meetID| int| 视频房间ID|  
| pswd| NSString| 本次房间中的密码|  
| userID| NSString| 用户账号|  
| nickName| NSString| 用户昵称|  

<h3 id=exitMeeting>- (void)exitMeeting</h3>

  + **功能**:  离开房间 ，调用此接口离开会话时，其他会话用户会收到userLeftMeeting的消息通知
  
  + **返回值**:  无
>回调函数[userLeftMeeting](#userLeftMeeting)  

<h3 id=getAllMembers>- (NSMutableArray *)getAllMembers</h3>

  + **功能**:  获取所有用户的信息
  
  + **返回值**:  NSMutableArray *;-所有用户的信息,详见定义[MemberInfo](TypeDefinitions.md#MemberInfo)


<h3 id=getMemberInfo>- (MemberInfo *) getMemberInfo:(NSString *)userId</h3>

  + **功能**:  获取某个用户的信息
  
  + **返回值**:  MemberInfo - 用户的信息,详见定义[MemberInfo](TypeDefinitions.md#MemberInfo)说明
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userId| StNSStringring|  用户ID| 

<h3 id=getMyUserID>- (NSString *)getMyUserID</h3>

  + **功能**:  获取自身的userID
  
  + **返回值**: 自身的userID
    

<h3 id=getNickName>- (NSString *)getNickName:(NSString *)userID</h3>

  + **功能**:  获取某个用户的昵称
  
  + **返回值**: 用户的昵称
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userId| NSString|  用户ID| 

<h3 id=setNickName>- (void)setNickName:(NSString*)userID nickName:(NSString*)nickName</h3>

  + **功能**:  设置某个用户的昵称， 调用此接口如果设置成功，其他会话用户会收到 notifyNickNameChanged

  + **返回值**: 无
>回调函数[setNickNameRsp](#setNickNameRsp)  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userId| NSString|  用户ID| 
| nickname| NSString|  新的用户昵称| 

<h3 id=isUserInMeeting>- (BOOL)isUserInMeeting:(NSString *)userID</h3>

  + **功能**:  判断某个用户是否在房间中
  
  + **返回值**: 用户是否在房间中
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userId| NSString|  用户ID| 

<h3 id=setAudioCfg>-(void) setAudioCfg:(AudioCfg*)cfg</h3>

  + **功能**:  设置音频参数
  
  + **返回值**: 无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cfg| AudioCfg|  音频参数，详见定义[AudioCfg](TypeDefinitions.md#AudioCfg) | 

 <h3 id=getAudioCfg>-(AudioCfg*) getAudioCfg</h3>

  + **功能**:  获取音频参数
  
  + **返回值**: 音频参数，详见定义[AudioCfg](TypeDefinitions.md#AudioCfg)

 <h3 id=setMicVolumeScaling>-(bool)setMicVolumeScaling:(int)scale</h3>

  + **功能**:  设置麦克风音量增益
  
  + **返回值**: 是否成功
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| scale| int|  麦克风音量增益（范围：1-20）| 

<h3 id=getMicEnergy >- (int)getMicEnergy:(NSString *)userID</h3>

  + **功能**:  获取用户说话声音大小
  
  + **返回值**: 音量大小（0~10）
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| NSString|  用户的ID| 

<h3 id=openMic>- (void)openMic:(NSString *)userId</h3>

  + **功能**:  打开用户的麦克风， 打开麦克风会触发音频状态变化的回调函数audioStatusChanged 新状态参数先会进入到AOPENING状态，
    等服务器处理后才会进入AOPEN状态，此时说话才能被采集到
  
  + **返回值**: 无
>回调函数[audioStatusChanged](#audioStatusChanged)  


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| NSString|  用户的ID| 

<h3 id=closeMic>- (void)closeMic:(NSString *)userId</h3>

  + **功能**:  关闭用户的麦克风 ，关麦克风会触发音频状态变化的回调函数audioStatusChanged 新状态参数会变为ACLOSE 关麦操作是立即生效的，会立即停止采集
  
  + **返回值**: 无
>回调函数[audioStatusChanged](#audioStatusChanged)  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| NSString|  用户的ID| 

<h3 id=getAudioStatus>- (AUDIO_STATUS)getAudioStatus:(NSString *)userID</h3>

  + **功能**:  获取用户的麦状态
   
  + **返回值**: 麦克风设备状态，详见定义[ASTATUS](Constant.md#ASTATUS)
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|  用户的ID| 

<h3 id=getMicVolume >- (int)getMicVolume</h3>

  + **功能**:  获取麦克风音量大小 ，音量范围类型 0-255
   
  + **返回值**: 麦克风音量大小

<h3 id=setSpeakerVolume>- (bool)setSpeakerVolume:(int)level</h3>

  + **功能**:  设置本地扬声器音量
   
  + **返回值**: 是否成功
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| level| int|  本地扬声器音量| 

<h3 id=getSpeakerVolume>- (int)getSpeakerVolume</h3>

  + **功能**:  获取本地扬声器音量 ，读写属性，音量等级类型 0-255
   
  + **返回值**: 本地扬声器音量


<h3 id=setSpeakerMute>- (void)setSpeakerMute:(BOOL)bMute</h3>

  + **功能**:  设置播放是否静音
   
  + **返回值**: 是否静音
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| bMute| BOOL|  播放是否静音| 

<h3 id=getSpeakerMute>- (BOOL)getSpeakerMute</h3>

  + **功能**:  获取播放是否静音
   
  + **返回值**: 是否静音


<h3 id=setSpeakerOut>- (BOOL)setSpeakerOut:(BOOL)speakerOut</h3>

  + **功能**:  设置外放状态
   
  + **返回值**: 是否成功
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| speakerOut| BOOL|  是否外放| 

<h3 id=getSpeakerOut>- (BOOL)getSpeakerOut</h3>

  + **功能**:  获取外放状态
   
  + **返回值**: 是否外放

<h3 id=setAllAudioClose>void setAllAudioClose()</h3>

  + **功能**:  关闭所有用户的麦克风 ， 调用此接口后会话内其他人的麦克风会关闭，同时收到消息audioStatusChanged
  + **返回值**: 无
>回调函数[audioStatusChanged](#audioStatusChanged) 

<h3 id=getAllVideoInfo>- (NSMutableArray &lt;UsrVideoInfo *&gt; *)getAllVideoInfo:(NSString *)userId</h3>

  + **功能**:  获取用户所有的摄像头信息
   
  + **返回值**: 用户所有的摄像头信息,详见UsrVideoInfo说明

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| NSString|   用户ID| 

<h3 id=createCustomVideoDev>-(int) createCustomVideoDev:(NSString*)camName pixFmt:(VIDEO_FORMAT)pixFmt width:(int)width height:(int)height extParams:(NSString*)extParams</h3>

  + **功能**:  创建自定义摄像头（sdk最大支持5个)， 添加成功后与本地摄像头处理一致；getAllVideoInfo接口可以识别摄像头类型
   
  + **返回值**:  返回值小于0， 则代表创建失败， 返回值大于等于0， 则代表摄像头编号

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| camName| NSString|   摄像头名称| 
| pixFmt| VIDEO_FORMAT|   详见定义[VIDEO_FORMAT](Constant.md#VIDEO_FORMAT)| 
| width| int|   图像宽度| 
| height| int|   图像高度| 
| extParams| NSString|    扩展参数，没有为空| 

<h3 id=destroyCustomVideoDev>-(void) destroyCustomVideoDev:(int)devID</h3>

  + **功能**:  消毁自定义摄像头
   
  + **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| devID| int|    摄像头id (createCustomVideoDev返回值）| 

<h3 id=inputCustomVideoDat>-(void) inputCustomVideoDat:(int)devID data:(NSData*)data timeStamp:(int)timeStamp</h3>

  + **功能**:  输入摄像头图像数据
   
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| devID| int|    摄像头id (createCustomVideoDev返回值）| 
| data| NSData|    图像数据（请保证格式、和尺寸与摄像头匹配）| 
| timeStamp| int|    保留字段，请填0 | 

<h3 id=inputCustomVideoDat>void inputCustomVideoDat(short videoID, byte[] data, int timeStamp)</h3>

  + **功能**:  输入摄像头图像数据
   
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoID| short|    摄像头id (createCustomVideoDev返回值）| 
| data| byte[]|    图像数据（请保证格式、和尺寸与摄像头匹配）| 
| timeStamp| int|    保留字段，请填0 | 

<h3 id=setVideoCfg>-(BOOL) setVideoCfg:(VideoCfg*)cfg</h3>

  + **功能**:  设置摄像头参数
   
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cfg| VideoCfg |    摄像头参数，详见定义[VideoCfg](TypeDefinitions.md#VideoCfg)| 

<h3 id=getVideoCfg>-(VideoCfg*) getVideoCfg</h3>

  + **功能**:  获取设置的摄像头参数
   
  + **返回值**:  摄像头参数, 详见定义[VideoCfg](TypeDefinitions.md#VideoCfg)

<h3 id=setLocVideoAttributes>-(void)setLocVideoAttributes:(int)videoID attributes:(CamAttribute*)attributes</h3>

  + **功能**:  设置某个摄像头私有参数
   
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoID| int|    本地摄像头id| 
| attributes| CamAttribute|    摄像头私有参数, 详见定义[CamAttribute](TypeDefinitions.md#CamAttribute)| 

<h3 id=getLocVideoAttributes>-(CamAttribute*)getLocVideoAttributes:(int)videoID</h3>

  + **功能**:  获取某个摄像头私有参数
   
  + **返回值**:  摄像头私有参数, 详见定义[CamAttribute](TypeDefinitions.md#CamAttribute)
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoID| short|    本地摄像头id| 

<h3 id=getWatchableVideos>- (NSMutableArray &lt;UsrVideoId *&gt;*)getWatchableVideos</h3>

  + **功能**:  获取房间内所有可观看的摄像头
   
  + **返回值**:  房间内所有可观看的摄像头,详见定义[UsrVideoId](TypeDefinitions.md#UsrVideoId) 

<h3 id=openVideo>- (void)openVideo:(NSString *)userID</h3>

  + **功能**:  打开用户的摄像头，以便本地、远端显示视频图像

  + **返回值**:  无
>回调函数[openVideoRslt](#openVideoRslt), 调用打开和关闭麦克风接口都会触发对应用户的回调[videoStatusChanged](#videoStatusChanged) 

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    用户的ID| 

<h3 id=closeVideo>- (void)closeVideo:(NSString *)userID</h3>

  + **功能**:  关闭用户的摄像头 ，
  
  + **返回值**:  无
>调用打开和关闭麦克风接口都会触发对应用户的回调[videoStatusChanged](#videoStatusChanged) 

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    用户的ID| 

<h3 id=getVideoStatus>- (VIDEO_STATUS)getVideoStatus:(NSString *)userID</h3>

  + **功能**:  获取用户的摄像头状态
  
  + **返回值**:  麦克风摄像头状态，请参见[VSTATUS](Constant.md#VSTATUS)定义
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    用户的ID| 

<h3 id=getDefaultVideo>- (short)getDefaultVideo:(NSString *)userId</h3>

  + **功能**:  获取指定用户的默认摄像头 ，如果用户没有摄像头，返回0
  
  + **返回值**:  摄像头ID
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| NSString|    用户的ID| 

<h3 id=setDefaultVideo>- (void)setDefaultVideo:(NSString *)userId videoID:(short)videoID</h3>

  + **功能**:  设置默认的摄像头 ，videoID 应该从getAllVideoInfo返回值中获取
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| NSString|    用户的ID| 
| videoID| short|    摄像头ID| 

<h3 id=getVideoImg>- (VideoFrame *)getVideoImg:(UsrVideoId *)userID</h3>

  + **功能**:  获取指定用户摄像头的最新图像
  
  + **返回值**:  指定用户摄像头的最新图像,详见[VideoFrame](TypeDefinitions.md#RawFrame)
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| usrVideoID| UsrVideoId|    详见定义[UsrVideoId](TypeDefinitions.md#UsrVideoId) | 

<h3 id=getLocalVideoParams>String getLocalVideoParams(short videoID)</h3>

  + **功能**:  获取指定本地摄像头参数
  
  + **返回值**:  指定本地摄像头参数,json格式，如{"摄像头参数名称":[可用参数列表]}
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoID| short|    摄像头ID| 

<h3 id=setLocalVideoParam>void setLocalVideoParam(short videoID, String param, String value)</h3>

  + **功能**:  设置指定本地摄像头参数
  
  + **返回值**:  指定本地摄像头参数,json格式，如{"摄像头参数名称":[可用参数列表]}
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoID| short|    摄像头ID| 
| param| String|    摄像头参数名称| 
| value| String|    摄像头参数值| 

<h3 id=isScreenShareStarted>- (BOOL)isScreenShareStarted</h3>

  + **功能**:  获取屏幕共享是否已开启
  
  + **返回值**:  屏幕共享是否已开启



<h3 id=getScreenShareCfg>-(ScreenShareCfg*) getScreenShareCfg</h3>

- **功能**: 获取屏幕共享配置

- **返回值**:屏幕共享配置，参见[ScreenShareCfg](TypeDefinitions.md#ScreenShareCfg)


<h3 id=setScreenShareCfg>-(void) setScreenShareCfg:(ScreenShareCfg *)cfg</h3>

- **功能**: 设置屏幕共享配置

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|cfg    |[ScreenShareCfg](TypeDefinitions.md#ScreenShareCfg) |    屏幕共享配置|


<h3 id=startScreenShare>-(void) startScreenShare</h3>

- **功能**: 开启屏幕共享

- **返回值**:无


<h3 id=stopScreenShare>-(void) stopScreenShare</h3>

- **功能**: 停止屏幕共享

- **返回值**:无

<h3 id=startScreenMark>-(void)startScreenMark</h3>

- **功能**: 开始屏幕共享标注

- **返回值**: 无


<h3 id=stopScreenMark>-(void)stopScreenMark</h3>

- **功能**: 停止屏幕共享标注

- **返回值**: 无


<h3 id=enableOtherMark>-(void)enableOtherMark:(BOOL)enable</h3>

-  **功能**：允许他人标注屏幕

-  **返回值**:无

-  **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| enable  | BOOL  | 是否允许他人标注 |

<h3 id=isEnableOtherMark>- (BOOL)isEnableOtherMark</h3>

-  **功能**：获取是否允许他人标注屏幕

-  **返回值**: 是否允许他人标注

-  **参数**:


<h3 id=createLocMixer>CRVIDEOSDK_ERR_DEF createLocMixer(String mixerID, MixerCfg mixerCfg, ArrayList&lt; MixerContent&gt; MixerContent)</h3>

  + **功能**:  创建本地混图器（用于本地录制、本地推流），当需要多个不同内容的录制、或直播时，就要创建多个混图器 。混图器开消比较大，多个同样图像的输出应该有一个混图器加上多个输出实现
  
  + **返回值**:  CRVIDEOSDK_ERR_DEF


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| NSString|    混图器唯一标识| 
| mixerCfg| MixerCfg|    混图器规格配置，详见定义[MixerCfg](TypeDefinitions.md#MixerCfg) | 
| content| MixerContent |    混图器内容配置，详见定义[MixerContent](TypeDefinitions.md#YWMixerContent) | 

 <h3 id=updateLocMixerCotent>-(CRVIDEOSDK_ERR_DEF)updateLocMixerContent:(NSString*)mixerID content:(MixerContent*)content</h3>

  + **功能**:  更新本地混图器内容
  
  + **返回值**:  CRVIDEOSDK_ERR_DEF


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| NSString|    混图器唯一标识| 
| content| MixerContent|    混图器内容配置，详见定义[MixerContent](TypeDefinitions.md#YWMixerContent)  | 

<h3 id=destroyLocMixer>-(void)destroyLocMixer:(NSString*)mixerID</h3>

  + **功能**:  消毁本地混图器 , 消毁本地混图器后， 基于此混图器的录制输出、直播推流输出将自动结束
  
  + **返回值**:  无


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| String|    混图器唯一标识| 

 <h3 id=getLocMixerState>-(MIXER_STATE)getLocMixerState:(NSString*)mixerID</h3>

  + **功能**:  获取本地混图器状态
  
  + **返回值**:  MIXER_STATE


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| NSString|    混图器唯一标识| 

 <h3 id=addLocMixerOutput>-(CRVIDEOSDK_ERR_DEF)addLocMixer:(NSString*)mixerID outputs:(MixerOutput*)outputs</h3>

  + **功能**:  开启本地录制、开启直播推流
  
  + **返回值**:  CRVIDEOSDK_ERR_DEF


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| NSString|    混图器唯一标识| 
| outputs| MixerOutput|    本地输出对象，详见定义[MixerOutput](TypeDefinitions.md#YWMixerOutput)  | 

- <p style="color:red; font-size:20px">注意事项:</p>

    + 可以一次添加多个输出，也可以依据业务需要稍后再添加新的输出
    + 多个输出不能同名、或同一url
    + 每个输出，有独立的信息通知，请见事件locMixerOutputInfo
    + 如果输出异常时，将自动停止, 停止本地录制、直播推流


 <h3 id=rmLocMixerOutput>-(void)rmLocMixerOutput:(NSString*)mixerID  nameOrUrls:(NSArray&lt;NSString*&gt;*)nameOrUrls</h3>

  + **功能**:  停止本地录制、直播推流 , 所有输出停止后并不会消毁混图器，如果混图器不再需要请手工消毁
  
  + **返回值**:  无


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| NSString|    混图器唯一标识| 
| nameOrUrls| NSArray&lt;NSString*&gt;*|    要停止的录制文件名或直播url列表| 

<h3 id=getAllRecordFiles>- (NSArray &lt;RecFileShow *&gt; *)getAllRecordFiles</h3>

  + **功能**:  取得所有录制文件信息
  
  + **返回值**:  所有录制文件信息,详见定义[RecordFileShow](TypeDefinitions.md#RecordFileShow)


<h3 id=addFileToRecordMgr>- (int)addFileToRecordMgr:(NSString *)fileName filePath:(NSString *)filePath</h3>

  + **功能**:  添加本地文件到录制文件管理中 , 第三方录制文件调用此接口后可进行本地回放和上传到视频服务器上，和自己录制的文件一样可以正常
  
  + **返回值**:  -1：本地文件不存在，0：成功，1：文件已经被添加过


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| filename| NSString|    文件名，不含路径| 
| filePath| NSString|    文件路径，不含文件名| 

<h3 id=removeFromFileMgr>- (int)removeFromFileMgr:(NSString *)fileName</h3>

  + **功能**:  删除本地的录制文件，上传中的文件会被取消上传 , 已上传完成的服务器文件不受影响
  
  + **返回值**:  无


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| filename| NSString|    文件名，不含路径| 

<h3 id=uploadRecordFile>- (void)uploadRecordFile:(NSString *)fileName</h3>

  + **功能**:  上传文件
  
  + **返回值**:  无


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| filename| NSString|    文件名，不含路径| 

<h3 id=uploadRecordFile>- (void)uploadRecordFile:(NSString *)fileName svrPathFileName:(NSString *)svrPathFileName</h3>

  + **功能**:  上传文件到服务器指定位置
  
  + **返回值**:  无


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| filename| NSString|    文件名，不含路径| 
| svrPathFileName| NSString|    文件存放在服务器上的相对路径文件名（如/AA/BB/CC/test.mp4）| 

<h3 id=cancelUploadRecordFile>- (void)cancelUploadRecordFile:(NSString *)fileName</h3>

  + **功能**:  取消上传中的录制文件
  
  + **返回值**:  无


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| filename| NSString|    文件名，不含路径| 

<h3 id=playbackRecordFile>- (void)playbackRecordFile:(NSString *)fileName</h3>

  + **功能**:  回放录制文件 , 可创建影音控件显示录制内容，功能同接口startPlayMedia，如果录制文件被加密，则只能使用playbackRecordFile来回放
  
  + **返回值**:  无


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| filename| NSString|    文件名，不含路径| 

<h3 id=createCloudMixer>- (NSString *)createCloudMixer:(NSString *)cfg;
</h3>

  + **功能**:  开始云端录制、云端直播
  
  + **返回值**:  NSString


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cfg| NSString |     服务器混图配置，详见定义[MixerCfg](TypeDefinitions.md#MixerCfg)  | 

- <p style="color:red; font-size:20px">注意事项:</p>
  
  + 可以开启多个云端混图器，具体个数和企业购买的授权相关；
  + 开启云端混图器后，房间内所有人都将收到[cloudMixerStateChanged](#cloudMixerStateChanged)通知进入MIXER_STARTING（启动中状态）；
  + 云端混图器部署有少量耗时，如果在部署过程遇到异常，将收到[createCloudMixerFailed](#createCloudMixerFailed)回调；
  + 云端混图器启动完成并进入录制或推流状态时，将收到[cloudMixerStateChanged](#cloudMixerStateChanged)通知，进入MIXER_RUNNING（工作中状态）；
  + 开启云端混图器在进入MIXER_STARTING状态后，可以通过[updateCloudMixerContent](#updateCloudMixerContent)更新内容；
  + 混图器如果在工作中遇到异常而停止时，将收到[cloudMixerStateChanged](#cloudMixerStateChanged)通知，进入MIXER_NULL并携带错误原因；


<h3 id=updateCloudMixerContent>- (CRVIDEOSDK_ERR_DEF)updateCloudMixerContent:(NSString *)mixerID cfg:(NSString *)cfg;</h3>

  + **功能**:  更新云端录制、云端直播内容
  
  + **返回值**:  CRVIDEOSDK_ERR_DEF

- <p style="color:red; font-size:20px">注意事项:</p>
 
  + 更新混图器内容时，只能更新内容和布局，不能更改混图器规格、输出目标；
  + 更新混图器内容时，房间内所有人都将收到[cloudMixerInfoChanged](#cloudMixerInfoChanged)通知；

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID |  NSString |    混图器ID | 
| cfg |  NSString |    混图器内容配置，josn格式 | 

<h3 id=destroyCloudMixer>- (void)destroyCloudMixer:(NSString *)mixerID;</h3>

  + **功能**:  停止云端录制、云端直播
  
  + **返回值**:  CRVIDEOSDK_ERR_DEF

- <p style="color:red; font-size:20px">注意事项:</p>

  + 消毁云端混图器时，调用者将收到notifyCloudMixerStateChanged通知进入MIXER_STOPPING状态，在停止完成后，房间内所有人都将收到[notifyCloudMixerStateChanged](#notifyCloudMixerStateChanged)通知进入MIXER_NULL状态；

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID |  NSString |    混图器ID | 

<h3 id=getCloudMixerInfo>- (NSString *)getAllCloudMixerInfo;</h3>

  + **功能**:  得到所有云端混图器信息
  
  + **返回值**:   NSString  json格式字符串


<h3 id=getCloudMixerInfo>- (NSString *)getCloudMixerInfo:(NSString *)mixerID;</h3>
  + **功能**:  得到云端混图器信息
  
  + **返回值**:   NSString  json格式字符串
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID |  NSString |    混图器ID | 

<h3 id=switchToPage>-(void)switchToPage:(MainPageType)main subPage:(SubPage*)sub</h3>

  + **功能**:  功能切换
  
  + **返回值**:   无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| main| MAIN_PAGE |    功能类型，详见定义[MAIN_PAGE](Constant.md#MAIN_PAGE) | 
| sub| SubPage |    子页面标识（如创建白板时返回的boardID），详见定义[SubPage](TypeDefinitions.md#SubPage) | 

<h3 id=getCurrentMainPage>-(MainPageType)getCurrentMainPage</h3>

  + **功能**:  获取当前主功能区
  
  + **返回值**:   无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mainPage| MAIN_PAGE |    功能类型，详见定义[MAIN_PAGE](Constant.md#MAIN_PAGE) | 

<h3 id=getCurrentSubPage>-(SubPage*)getCurrentSubPage</h3>

  + **功能**:  获取当前子页面
  
  + **返回值**:   当前子页面，详见定义[SubPage](TypeDefinitions.md#SubPage)

<h3 id=getVideoWallMode>- (int)getVideoWallMode</h3>

  + **功能**:  获取视频墙当前分屏模式
  
  + **返回值**:   分屏模式(业务层自由定义)

<h3 id=setVideoWallMode>- (void)setVideoWallMode:(int)videoWallMode</h3>

  + **功能**:  设置视频墙分屏模式
  
  + **返回值**:   无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| videoWallMode| int |    分屏模式

<h3 id=setMainVideo>- (void)setMainVideo:(NSString *)userID</h3>

  + **功能**:  设置当前哪个用户为主视频
  
  + **返回值**:   无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String |    用户ID| 

<h3 id=getMainVideo>- (NSString *)getMainVideo</h3>

  + **功能**:  获取当前哪个用户为主视频
  
  + **返回值**:   用户ID

<h3 id=createBoard>- (SubPage *)createBoard:(NSString *)title width:(int)width height:(int)height pageCount:(int)pageCount</h3>

  + **功能**:  创建电子白板
  
  + **返回值**:   boardID，详见定义[SubPage](TypeDefinitions.md#SubPage)
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| title| NSString |    白板名称| 
| width| int |    白板宽度| 
| height| int |    白板高度| 
| pageCount| int |    白板内有多个页（一般空白板1页，文档白板为实际页数）| 

- <p style="color:red; font-size:20px">注意事项:</p>

  + 其他参会者会收到notifyCreateBoard事件
  + 后台会记录下白板数据，新入会者会收到notifyInitBoards事件
  + 创建完白板后，一定要及尽快调用initBoardPageDat初始化各页数据
  + 如果需要所有参会者同步切到此白板，请调用switchToPage


<h3 id=closeBoard>- (void)closeBoard:(SubPage *)boardID</h3>

  + **功能**:  关闭电子白板 , 其他参会者将收到notifyCloseBoard事件；同时后台会移除对应白板的所有信息
  + **返回值**:   无
>回调函数[notifyCloseBoard](#notifyCloseBoard)  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| String |    白板标识| 

<h3 id=initBoardPageDat>- (void)notifyInitBoardPageDat:(SubPage *)boardID boardPageNo:(int)boardPageNo bkImgID:(NSString *)bkImgID elements:(NSString *)elements operatorID:(NSString *)operatorID</h3>

  + **功能**:  初始化白板指定页数据 
  + **返回值**:   无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| NSString |    白板标识| 
| boardPageNo| int |    白板第几页（0:代表第一页）| 
| imgID| NSString |    白板的背景图片标识（空代表无背影图）| 
| elemetDatas| NSString |    白板的初始图元（空代表无图元，一般在导入历史文件才用到），白板图元数据Json数组，详见定义[BoardElement](TypeDefinitions.md#BoardElement)  | 

- <p style="color:red; font-size:20px">注意事项:</p>

  + imgID非空时, 代表背景的图片ID。img来源请参见getNetDiskDocFilePageInfo
  + 其他参会者将收到notifyInitBoardPageDat事件
  + 后台会记录下白板的页数据，在新用户入会时，也会收到notifyInitBoardPageDat事件


<h3 id=createElementID>- (NSString *)createElementID</h3>

  + **功能**:  创建图元标识
  + **返回值**:   elementID图元标识


<h3 id=addBoardElement>- (void)addBoardElement:(SubPage *)boardID boardPageNo:(int)boardPageNo elementData:(NSString *)element</h3>

  + **功能**:  添加图元信息 , 其他参会者会收到：notifyAddBoardElement事件同时后台会保存图元，新入会者会在notifyInitBoardPageDat中得到这些图元  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| SubPage |    白板标识| 
| boardPageNo| int |    白板第几页（0:代表第一页）| 
| element| NSString |    图元信息，Json数据格式详见定义[BoardElement](TypeDefinitions.md#BoardElement)| 

<h3 id=modifyBoardElement>- (void)modifyBoardElement:(SubPage *)boardID boardPageNo:(int)boardPageNo elementData:(NSString *)element</h3>

  + **功能**:  修改图元信息 , 其他参会者会收到：notifyModifyBoardElement事件，同时后台会覆盖对应图元的数据，新入会者会在notifyInitBoardPageDat中得到这些图元  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| SubPage |    白板标识| 
| boardPageNo| int |    白板第几页（0:代表第一页）| 
| element| NSString |    图元信息，Json数据格式详见定义[BoardElement](TypeDefinitions.md#BoardElement)| 

<h3 id=delBoardElement>- (void)delBoardElement:(SubPage *)boardID boardPageNo:(int)boardPageNo elementIDs:(NSArray&lt;NSString *&gt; *)elementIDs</h3>

  + **功能**:  删除图元  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| SubPage |    白板标识| 
| boardPageNo| int |    白板第几页（0:代表第一页）| 
| elementIDs| NSArray * |     图元id列表| 

<h3 id=setMouseHotSpot>- (void)setMouseHotSpot:(SubPage *)boardID boardPageNo:(int)boardPageNo x:(int)x y:(int)y</h3>

  + **功能**:  设置鼠标热点信息 
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| SubPage |    白板标识，详见定义[SubPage](TypeDefinitions.md#SubPage) | 
| boardPageNo| int |    白板第几页（0:代表第一页）| 
| x| int |     屏幕横坐标| 
| y| int |     屏幕纵坐标| 

<h3 id=setBoardCurPageNo>void setBoardCurPageNo(SubPage boardID, int boardPageNo, int pagePos1, int pagePos2)</h3>

  + **功能**:  白板翻页
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| SubPage |    白板标识，详见定义[SubPage](TypeDefinitions.md#SubPage) | 
| boardPageNo| int |    白板第几页（0:代表第一页）| 
| pagePos1| int |     私有扩展参数1（如可用于页内x方向滚动位置）| 
| pagePos2| int |     私有扩展参数2（如可用于页内y方向滚动位置）| 

<h3 id=listNetDiskDocFile>-(void)listNetDiskDocFile:(NSString*)dir</h3>

  + **功能**:  查询服务器指定目录下的内容（子目录名、上传的文档源文件及文档转换状态）
  + **返回值**:  无
>回调函数[listNetDiskDocFileRslt](#listNetDiskDocFileRslt)

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| dir| NSString |    要查询的目录，空或"/"时，代表查询根目录下的内容| 

<h3 id=uploadDocFileToNetDisk>-(void)uploadDocFileToNetDisk:(NSString*)svrPathFileName locPathFileName:(NSString*)locPathFileName</h3>

  + **功能**:  上传并转换文档
  
  + **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| svrPathFileName| NSString |    服务器的路径文件名，包含目录时，服务器自动创建对应目录| 
| locPathFileName| NSString |    要上传文件的本地的路径文件名| 

- <p style="color:red; font-size:20px">注意事项:</p>

  + 支持的文件格式有：doc，docx, ppt, pptx, pps, ppsx, xls, xlsx, et, ett, wps, wpt, dps, pdf, txt, log, ini, bmp, png, jpg, jpeg；


<h3 id=downloadNetDiskDocFile>-(void)downloadNetDiskDocFilePage:(NSString*)pagePathFileName locPathFileName:(NSString*)locPathFileName</h3>

  + **功能**:  下载源始文档
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| svrPathFileName| NSString |    服务器的路径文件名，包含目录时，服务器自动创建对应目录| 
| locPathFileName| NSString |    要上传文件的本地的路径文件名| 

<h3 id=cancelTransforNetDiskDocFile>-(void)cancelTransforNetDiskDocFile:(NSString*)svrPathFileName</h3>

  + **功能**:  取消文档传输
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| svrPathFileName| String |    服务器的路径文件名，包含目录时，服务器自动创建对应目录| 

<h3 id=deleteNetDiskDocFile>-(void)deleteNetDiskDocFile:(NSString*)svrPathFileName</h3>

  + **功能**:  删除文档
  
  + **返回值**:  无
>回调函数[deleteNetDiskDocFileRslt](#deleteNetDiskDocFileRslt)(删除结果)

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| svrPathFileName| String |    服务器的路径文件名，包含目录时，服务器自动创建对应目录| 

<h3 id=getNetDiskDocFilePageInfo>-(void)getNetDiskDocFilePageInfo:(NSString*)svrPathFileName</h3>

  + **功能**:  获取文档的转换信息
  
  + **返回值**:  无
>回调函数[getNetDiskDocFilePageInfoRslt](#getNetDiskDocFilePageInfoRslt)(获取结果)

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| svrPathFileName| NSString |    服务器的路径文件名，包含目录时，服务器自动创建对应目录| 

- <p style="color:red; font-size:20px">注意事项:</p>

  + 获取到的文档转换后的信息后， 就可以创建白板createBoard, 然后为白板初始化文档内容

<h3 id=downloadNetDiskDocFilePage>void downloadNetDiskDocFilePage(String pagePathFileName, String locPathFileName)</h3>

  + **功能**:  下载文档转换后的页文件
  
  + **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| pagePathFileName| String |    页文件在服务器的路径文件名| 
| locPathFileName| String |    文件下载后存放的本地的路径文件名，目录不存在时自动创建| 

- <p style="color:red; font-size:20px">注意事项:</p>

  + 页文件格式： 6字节保留，4字节图像格式（2:jpg, 4:png），4字节图像内容长度，图像内容


<h3 id=setMediaCfg>- (BOOL)setMediaCfg:(VideoCfg *)cfg</h3>

  + **功能**:  配置远程影音共享时，图像质量参数
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cfg| VideoCfg |    图像质量参数，详见定义[VideoCfg](TypeDefinitions.md#VideoCfg) | 

<h3 id=getMediaCfg>- (VideoCfg *)getMediaCfg</h3>

  + **功能**:  获取影音共享图像质量参数
  
  + **返回值**:  图像质量参数，详见定义[VideoCfg](TypeDefinitions.md#VideoCfg)


<h3 id=startPlayMedia>- (void)startPlayMedia:(NSString *)filename bLocPlay:(int)bLocPlay</h3>

  + **功能**:  播放影音文件
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| filename| NSString |    文件名，全路径| 
| bLocPlay| int |    是否仅仅本地播放（true:本地播放，false：房间内播放）|  

<h4>- (void)startPlayMedia:(NSString *)filename bLocPlay:(int)bLocPlay bPauseWhenFinished:(int)bPauseWhenFinished</h3>

  + **功能**:  播放影音文件
  
  + **返回值**:  无
>播放视频则触发回调[notifyMediaOpened](#notifyMediaOpened)(监听)， 停止播放则触发回调[notifyMediaStop](notifyMediaStop)

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| filename| NSString |    文件名，全路径| 
| bLocPlay| int |    是否仅仅本地播放（1:本地播放，0：房间内播放）|  
| bPauseWhenFinished| boolean |    是否停在最后一帧, 如果播放成功，其他人收到notifyMediaOpened，如果播放失败，请关注通知事件notifyMediaStop|  

<h3 id=pausePlayMedia>- (void)pausePlayMedia:(BOOL)bPause</h3>

  + **功能**:  暂停播放影音
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| bPause| BOOL |    是否暂停| 

<h3 id=stopPlayMedia>- (void)stopPlayMedia</h3>

  + **功能**:  停止影音播放
  
  + **返回值**:  无
>回调函数[notifyMediaStop](#notifyMediaStop)

<h3 id=setMediaPlayPos>void setMediaPlayPos(int pos)</h3>

  + **功能**:  设置播放进度
  
  + **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| pos| int |    设置播放位置，单位：毫秒| 

<h3 id=getAllFilesInMediaPath>- (NSArray &lt;NSString *&gt; *)getAllFilesInMediaPath</h3>

  + **功能**:  取得影音文件夹下的所有可播放文件

 + **返回值**:  文件名列表
   
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| pos| int |    设置播放位置，单位：毫秒| 

- <p style="color:red; font-size:20px">注意事项:</p>

  + 影音文件夹位于方法init的第二个参数sdkFilePath，sdk会在此文件中建立media的子文件夹，即为影音文件夹


<h3 id=getMediaInfo>- (MediaInfo *)getMediaInfo</h3>

  + **功能**:  取得影音文件夹下的所有可播放文件
  
  + **返回值**:  文件名列表 , 影音文件信息,详见定义[MediaInfo](TypeDefinitions.md#MediaInfo)


<h3 id=setMediaVolume>- (void)setMediaVolume:(int)level;</h3>

  + **功能**:  设置影音播放的音量

 + **返回值**:  无
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| level| int |    影音播放的音量，类型范围（0-255）| 

<h3 id=getMediaVolume>- (int)getMediaVolume</h3>

  + **功能**:  读取影音播放的音量
  
  + **返回值**:  影音播放的音量，类型范围（0-255）


<h3 id=getMediaImg>- (MediaDataFrame *)getMediaImg:(NSString *)userId</h3>

  + **功能**:  取得影音帧信息

 + **返回值**:  影音帧信息,详见定义[MediaDataFrame](TypeDefinitions.md#MediaDataFrame)
   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| NSString |    用户id| 

<h3 id=sendIMmsg>- (NSString *)sendIMmsg:(NSString *)text toUserID:(NSString *)toUserID cookie:(NSString *)cookie</h3>

  + **功能**:  发送IM消息

 + **返回值**:  taskID 发送任务id
>回调函数[sendIMmsgRlst](#sendIMmsgRlst)

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| text| NSString |    发送的文本消息| 
| toUsrID| NSString |    目标用户，如果用户ID为空，消息发送给房间内所有用户| 
| cookie| NSString |    自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=setPicResource>- (void)setPicResource:(NSString *)resID mediaDataFrame:(MediaDataFrame *)frame</h3>

  + **功能**:  将图片资源设置给sdk
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| resID| NSString |    资源唯一标识 | 
| bitmap| Bitmap |    图片对象，为空代表移除资源| 

<h4>- (void)setPicResource:(NSString *)resID picFile:(NSString*)picFile</h3>

  + **功能**:  将图片资源设置给sdk

  + **返回值**:  无


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| resID| String |    资源唯一标识 | 
| picFile| NSString |    资源文件路径，为空代表移除资源| 

###  通知回调函数

CloudroomVideoCallback是通话建立、音频采集播入、视频采集编解码、屏幕共享、录制、影音播放等功能的回调接口

------

<h3 id=enterMeetingRslt>- (void)enterMeetingRslt:(CRVIDEOSDK_ERR_DEF)code</h3>

  + **功能**:  自己进入房间的结果
  
  + **返回值**:  无
    
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| CRVIDEOSDK_ERR_DEF|    操作结果码, 详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) | 
| cookie| String|    自定义用户数据| 

<h3 id=stopMeetingRslt>- (void)stopMeetingRslt:(CRVIDEOSDK_ERR_DEF)code</h3>

  + **功能**:  通知结束视频房间结果
  
  + **返回值**:  无
    
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| CRVIDEOSDK_ERR_DEF|    操作结果码, 详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)| 
| cookie| String|    自定义用户数据| 

<h3 id=setNickNameRsp>-(void)setNickNameRsp:(CRVIDEOSDK_ERR_DEF)sdkErr userid:(NSString*)userid newName:(NSString*)newName</h3>

  + **功能**:  设置昵称的结果
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| CRVIDEOSDK_ERR_DEF|    操作结果码, 详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) | 
| userid| NSString|    用户id| 
| newName| NSString|    新的昵称| 

<h3 id=notifyNickNameChanged>-(void)notifyNickNameChanged:(NSString*)userid oldName:(NSString*)oldName newName:(NSString*)newName</h3>

  + **功能**:  某用户改变了昵称(改昵称的用户自身不会接收到此通知)
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| NSString|    改变昵称的某用户id| 
| oldName| NSString|    改变昵称的某用户昵称(改变之前的昵称)| 
| newName| NSString|    改变昵称的某用户昵称(改变之后的昵称)| 

<h3 id=userEnterMeeting>- (void)userEnterMeeting:(NSString *)userID</h3>

  + **功能**:  某用户进入了房间
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| NSString|    进入房间的用户id| 

<h3 id=userLeftMeeting>- (void)userLeftMeeting:(NSString *)userID</h3>

  + **功能**:  某用户离开了房间
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| NSString|    离开房间的用户id| 

<h3 id=meetingDropped>- (void)meetingDropped</h3>

  + **功能**:  通知从房间里掉线了，收到该通知后可以调用enterMeeting尝试重新入会
  
  + **返回值**:  无


- <p style="color:red; font-size:20px">注意事项:</p>

  + 如果用到了呼叫队列，掉线后不重新入会就必须调用hangupCall释放本次呼叫


<h3 id=meetingStoped>- (void)meetingStopped</h3>

  + **功能**:  房间已被结束
  
  + **返回值**:  无


<h3 id=netStateChanged>- (void)netStateChanged:(int)level</h3>

  + **功能**:  网络变化通知
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| level| int|    网络状况等级(0~10，10分为最佳网络)| 

<h3 id=audioDevChanged>- (void)audioDevChanged</h3>

  + **功能**:  通知本地音频设备有变化
  
  + **返回值**:  无


<h3 id=audioStatusChanged>- (void)audioStatusChanged:(NSString *)userID oldStatus:(AUDIO_STATUS)oldStatus newStatus:(AUDIO_STATUS)newStatus</h3>

  + **功能**:  通知音频状态变化


  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| NSString|    房间中设备的所有者| 
| oldStatus| ASTATUS|    旧状态，详见定义[ASTATUS](Constant.md#ASTATUS)| 
| newStatus| ASTATUS|    新状态，详见定义[ASTATUS](Constant.md#ASTATUS)| 

<h3 id=micEnergyUpdate>- (void)micEnergyUpdate:(NSString *)userID oldLevel:(int)oldLevel newLevel:(int)newLevel</h3>

  + **功能**:  通知用户的说话声音强度更新
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| NSString|    用户标识ID| 
| oldLevel| int|    原来的说话声音强度(0~10)| 
| newLevel| int|    现在的说话声音强度(0~10)| 

<h3 id=openVideoRslt>- (void)openVideoRslt:(NSString *)devID success:(BOOL)bSuccess</h3>

  + **功能**:  打开摄像头设备操作结果
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| devID| NSString|    摄像头设备ID| 
| bSuccess| BOOL|    是否成功| 

<h3 id=videoStatusChanged>- (void)videoStatusChanged:(NSString *)userID oldStatus:(VIDEO_STATUS)oldStatus newStatus:(VIDEO_STATUS)newStatus</h3>

  + **功能**:  视频状态变化
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| NSString|    房间中设备的所有者| 
| oldStatus| VSTATUS|    详见定义[VSTATUS](Constant.md#VSTATUS)| 
| newStatus| VSTATUS|    新状态，详见定义[VSTATUS](Constant.md#VSTATUS)| 

<h3 id=videoDevChanged>- (void)videoDevChanged:(NSString *)userID</h3>

  + **功能**:  通知用户的视频设备有变化
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| String| String|    设备变化的用户ID| 

<h3 id=notifyVideoData>- (void)notifyVideoData:(UsrVideoId *)userID frameTime:(long)frameTime</h3>

  + **功能**:  通知用户有新的视频数据
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| usrVideoID| UsrVideoId|    用户摄像头标识ID，详见定义[UsrVideoId](TypeDefinitions.md#UsrVideoId)|  
| frmTime| long|    图像的创建时间，可用作时间戳|  

- <p style="color:red; font-size:20px">注意事项:</p>

  + 收到此通知消息后，可通过getVideoImg获取图像显示；如果之前显示的帧时间和此值一致，说明此帧已显示过，直接忽略即可 如果使用了成员视频UI显示组件，不再需要自已关注此事件并进行显示处理

<h3 id=videoDevChanged>- (void)videoDevChanged:(NSString *)userID</h3>

  + **功能**:  通知用户的视频默认设备有变化
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| NSString|    设备变化的用户ID|  
| videoID| short|    默认设备id|  

<h3 id=uploadRecordFileErr>- (void)uploadRecordFile:(NSString *)fileName err:(CRVIDEOSDK_ERR_DEF)sdkErr</h3>

  + **功能**:  上传录制文件错误通知
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName| String|    上传文件名|  
| err| int|    操作失败代码，详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|  

<h3 id=cancelUploadRecordFileErr>void cancelUploadRecordFileErr(int sdkErr)</h3>

  + **功能**:  取消上传错误通知
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr| int|    操作失败代码，详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|  


<h3 id=locMixerStateChanged>- (void)locMixerStateChanged:(NSString*)mixerID state:(MIXER_STATE)state</h3>

  + **功能**:  本地混图器状态变化通知
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| NSString|    混图器唯一标识|  
| state| MIXER_STATE|    状态，详见定义[MIXER_STATE](Constant.md#MIXER_STATE)|  

<h3 id=locMixerOutputInfo>-(void)locMixerOutputInfo:(NSString*)mixerID nameUrl:(NSString*)nameUrl outputInfo:(OutputInfo*)outputInfo</h3>

  + **功能**:  本地录制文件、本地直播信息通知
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| NSString|    混图器唯一标识|  
| nameOrUrl| NSString|    录像名称、或直播url|  
| outputInfo| NSString|    详见定义[OutputInfo](TypeDefinitions.md#OutputInfo)|  

<h3 id=createCloudMixerFailed>- (void)createCloudMixerFailed:(NSString *)mixerID err:(CRVIDEOSDK_ERR_DEF)err</h3>

  + **功能**:  本地混图器状态变化通知
  + **返回值**:  无
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| NSString|    混图器唯一标识|  
| err| CRVIDEOSDK_ERR_DEF|    状态，详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|  

<h3 id=cloudMixerStateChanged>- (void)cloudMixerStateChanged:(NSString *)operatorID mixerID:(NSString *)mixerID state:(MIXER_STATE)state exParam:(NSString *)exParam</h3>

  + **功能**:  云端录制、云端直播状态变化通知
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mixerID| NSString|    混图器唯一标识|
| state| MIXER_STATE|    状态值，请参考MIXER_STATE|  
|exParam| string | json格式扩展参数，state状态及参数定义：</br>MIXER_NULL：包含err([CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)), errDesc字段；</br>MIXER_STARTING：包含jsonCfg字段 |
| operatorID| NSString|    引起变化的用户id| 

<h3 id=cloudMixerInfoChanged>- (void)cloudMixerInfoChanged:(NSString *)mixerID</h3>

  + **功能**:  通知云端录制/推流信息变化

  + **返回值**:  无

可调用：[getCloudMixerInfo](#getCloudMixerInfo)获取相关信息</br>

| 参数 | 类型 | 含义 |
|:-|:-|:-|
| mixerID | NSString| 混图器ID |

<h3 id=cloudMixerOutputInfoChanged>- (void)cloudMixerOutputInfoChanged:(NSString *)mixerID jsonStr:(NSString *)jsonStr</h3>

  + **功能**:  通知云端录制/推流输出信息
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
|mixerID|NSString| 混图器ID |
| jsonStr | NSString |    通知内容，详见定义[OutputInfo](TypeDefinitions.md#OutputInfo)|  

<h3 id=startScreenShareRslt>-(void)startScreenShareRslt:(CRVIDEOSDK_ERR_DEF)sdkErr</h3>

- **功能**: 开启屏幕共享的响应事件

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| sdkEr  | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |  错误码 |


<h3 id=stopScreenShareRslt>-(void)stopScreenShareRslt:(CRVIDEOSDK_ERR_DEF)sdkErr</h3>

- **功能**停止屏幕共享的响应事件

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| sdkEr  | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  | 错误码  |

<h3 id=notifyScreenShareStarted>- (void)notifyScreenShareStarted</h3>

  + **功能**:  通知他人开启了屏幕共享
  
  + **返回值**:  无


<h3 id=notifyScreenShareStopped>- (void)notifyScreenShareStopped</h3>

  + **功能**:  通知他人停止了屏幕共享
  
  + **返回值**:  无
    

<h3 id=startScreenMarkRslt>-(void)startScreenMarkRslt:(CRVIDEOSDK_ERR_DEF)sdkErr</h3>

- **功能**: 开始屏幕标注结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| sdkEr  | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |  错误码 |


<h3 id=stopScreenMarkRslt>-(void)stopScreenMarkRslt:(CRVIDEOSDK_ERR_DEF)sdkErr</h3>

- **功能**: 停止屏幕标注结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| sdkEr  | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  | 错误码  |

<h3 id=notifyScreenMarkStarted>- (void)notifyScreenMarkStarted</h3>

  + **功能**:  通知屏幕标注开始
  
  + **返回值**:  无


<h3 id=notifyScreenMarkStopped>- (void)notifyScreenMarkStopped</h3>

  + **功能**:  通知屏幕标注停止
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| taskID| NSString|    发送任务id|   
| sdkErr| CRVIDEOSDK_ERR_DEF|    操作返回码，详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|   
| cookie| String|    自定义数据(在响应消息中回传给调用者)，不需要时传空字符串|

<h3 id=notifyIMmsg>- (void)notifyIMmsg:(NSString *)romUserID text:(NSString *)text sendTime:(int)sendTime</h3>

  + **功能**:  通知收到IM消息
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fromUserID| String|    消息来源|   
| text| String|    消息内容|   
| sendTime| String|    消息发送时间戳，从1970开始算起|   

<h3 id=notifySwitchToPage>-(void)notifySwitchToPage:(MainPageType)mainPage subPage:(SubPage*)sPage</h3>

  + **功能**:  通知功能切换

  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| mainPage| MAIN_PAGE|    功能类型，详见定义[MAIN_PAGE](Constant.md#MAIN_PAGE) |   
| pageID| SubPage|    子页面标识，详见定义[SubPage](TypeDefinitions.md#SubPage) |   

<h3 id=notifyVideoWallMode>- (void)notifyVideoWallMode:(int)wallMode</h3>

  + **功能**:  通知视频分屏模式切换
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| model| int|    分屏模式

<h3 id=notifyMainVideo>- (void)notifyMainVideo:(NSString *)userID</h3>

  + **功能**:  通知主视频更改
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userID| String|    主视频用户ID|  

<h3 id=notifyInitBoards>- (void)notifyInitBoards:(NSArray&lt;SubPageInfo *&gt; *)boards</h3>

  + **功能**:  SDK入会后通知房间中已经存在的白板列表
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boards| NSArray*| 已经创建好的白板列表, 详见定义[SubPageInfo](TypeDefinitions.md#SubPageInfo) |  

<h3 id=notifyInitBoardPageDat>- (void)notifyInitBoardPageDat:(SubPage *)boardID boardPageNo:(int)boardPageNo bkImgID:(NSString *)bkImgID elements:(NSString *)elements operatorID:(NSString *)operatorID</h3>

  + **功能**:  初始化白板页数据
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| NSString|    白板标识|  
| boardPageNo| int|    白板页序号|  
| imgID| NSString|    页背景文件ID（空代表无背景）, 使用downloadNetDiskDocFile进行下载 |  
| elementDatas| NSString|    此页的所有图元,白板图元数据Json数组，详见定义[BoardElement](TypeDefinitions.md#BoardElement) |  
| operatorID| NSString|    初始化用户（为空时，代表入会时后台事件）|  

<h3 id=notifyCreateBoard>- (void)notifyCreateBoard:(SubPageInfo *)board operatorID:(NSString *)operatorID</h3>

  + **功能**:  通知创建白板
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| board| SubPageInfo|    白板信息，详见定义[SubPageInfo](TypeDefinitions.md#SubPageInfo)|  
| operatorID| NSString|    创建白板的用户ID|  

<h3 id=notifyCloseBoard>- (void)notifyCloseBoard:(SubPage *)boardID operatorID:(NSString *)operatorID</h3>

  + **功能**:  通知关闭白板
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| SubPage|    白板标识，详见定义[SubPage](TypeDefinitions.md#SubPage)|  
| operatorID| NSString|    关闭白板的用户ID|  

<h3 id=notifyAddBoardElement>- (void)notifyAddBoardElement:(SubPage *)boardID boardPageNo:(int)boardPageNo element:(NSString *)element operatorID:(NSString *)operatorID</h3>

  + **功能**:  通知添加图元信息
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| SubPage|    白板标识，详见定义[SubPage](TypeDefinitions.md#SubPage)|  
| boardPageNo| int|    白板页序号|  
| element| NSString|    图元信息, Json数据格式详见定义[BoardElement](TypeDefinitions.md#BoardElement)|  
| operatorID| NSString|    添加图元的用户ID|  

<h3 id=notifyModifyBoardElement>- (void)notifyModifyBoardElement:(SubPage *)boardID boardPageNo:(int)boardPageNo element:(NSString *)element operatorID:(NSString *)operatorID</h3>

  + **功能**:  通知图元信息被修改
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| SubPage|    白板标识，详见定义[SubPage](TypeDefinitions.md#SubPage)|  
| boardPageNo| int|    白板页序号|  
| element| String|    图元信息, Json数据格式详见定义[BoardElement](TypeDefinitions.md#BoardElement)|  
| operatorID| String|    添加图元的用户ID|  

<h3 id=notifyDelBoardElement>- (void)notifyDelBoardElement:(SubPage *)boardID boardPageNo:(int)boardPageNo elementIDs:(NSArray&lt;NSString *&lt; *)elementIDs operatorID:(NSString *)operatorID</h3>

  + **功能**:  通知图元被删除
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| SubPage|    白板标识，详见定义[SubPage](TypeDefinitions.md#SubPage)|  
| boardPageNo| int|    白板页序号|  
| elementIDs| NSArray* |    图元id列表|  
| operatorID| NSString|    添加图元的用户ID|  

<h3 id=notifyMouseHotSpot>- (void)notifyMouseHotSpot:(SubPage *)boardID boardPageNo:(int)boardPageNo x:(int)x y:(int)y operatorID:(NSString *)operatorID</h3>

  + **功能**:  通知鼠标热点消息
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| SubPage|    白板标识，详见定义[SubPage](TypeDefinitions.md#SubPage)|  
| x| int|    屏幕横坐标|  
| y| int|    屏幕纵坐标|  
| operatorID| NSString|    添加图元的用户ID|  

<h3 id=notifyBoardCurPageNo>-(void)notifyBoardCurPageNo:(SubPage *)boardID boardPageNo:(int)boardPageNo pos1:(int)pos1 pos2:(int)pos2 operatorID:(NSString*)operatorID</h3>

  + **功能**:  通知白板翻页
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| boardID| SubPage|    白板标识，详见定义[SubPage](TypeDefinitions.md#SubPage)|  
| boardPageNo| int|    白板的页序号(0为第一页)|  
| pagePos1| int|    私有扩展参数1（如可用于页内x方向滚动位置）|  
| pagePos2| int|     私有扩展参数2（如可用于页内y方向滚动位置）|  

<h3 id=notifyRecordFileStateChanged>- (void)notifyRecordFileStateChanged:(NSString *)fileName state:(REC_FILE_STATE)state</h3>

  + **功能**:  通知录制文件状态更改
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName| NSString|    本地文件路径|  
| state| int|    状态，0未上传，1上传中，2已上传，3上传失败|  

<h3 id=uploadRecordFileSuccess>- (void)uploadRecordFileSuccess:(NSString *)fileName fileUrl:(NSString *)fileUrl</h3>

  + **功能**:  通知录制文件上传成功
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName| String|    本地文件路径|  
| fileUrl| String|    服务端录制文件地址|  

<h3 id=notifyRecordFileUploadProgress>- (void)notifyRecordFileUploadProgress:(NSString *)fileName percent:(int)percent</h3>

  + **功能**:  通知录制文件上传进度
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName| String|    本地文件路径|  
| percent| int|    进度0-100|  

<h3 id=notifyMediaOpened>- (void)notifyMediaOpened:(long)totalTime size:(CGSize)picSZ</h3>

  + **功能**:  通知影音文件打开
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| totalTime| long|    影音时长(毫秒)|  
| picSZ| CGSize|    宽高|  


<h3 id=notifyMediaStart>- (void)notifyMediaStart:(NSString *)userid</h3>

  + **功能**:  通知影音开始播放
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userid| String|     操作者的用户id|  

<h3 id=notifyMediaPause>- (void)notifyMediaPause:(NSString *)userid bPause:(BOOL)bPause</h3>

  + **功能**:  通知设置鼠标热点消息
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userid| NSString|     操作者的用户id|   
| bPause| BOOL|      是否暂停，1暂停，0播放|   

<h3 id=notifyMediaStop>- (void)notifyMediaStop:(NSString *)userid reason:(MEDIA_STOP_REASON)reason</h3>

  + **功能**:  通知影音播放停止
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userid| NSString|     操作者的用户id|   
| reason| MEDIA_STOP_REASON|      播放停止原因，数值参考MEDIA_STOP_REASON|    

<h3 id=notifyPlayPosSetted>- (void)notifyPlayPosSetted:(int)setPTS</h3>

  + **功能**:  通知播放进度已设置完成
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| setPTS| int|     播放进度|   

<h3 id=notifyMemberMediaData>- (void)notifyMemberMediaData:(NSString *)userid curPos:(int)curPos</h3>

  + **功能**:  通知影音帧数据已解码完毕
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| userid| NSString|     操作者的用户id|   
| curPos| int|     该影音帧的时间，毫秒为单位|  

- <p style="color:red; font-size:20px">注意事项:</p>

  + 收到此通知消息后，可通过getMediaImg获取图像显示；但如果之前显示的帧时戳更大，说明此通知消息已过时，直接忽略即可 如果使用了影音共享UI显示方式，不再需要自已关注此事件和进行显示处理


<h3 id=notifyAudioPCMDat>void notifyAudioPCMDat(int aSide, byte[] audioDat)</h3>

  + **功能**:  通知语音PCM数据
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| aSide| int|     声道类型|   
| audioDat| byte[]|     PCM数据|  

<h3 id=listNetDiskDocFileRslt>-(void)listNetDiskDocFileRslt:(NSString*)dir err:(CRVIDEOSDK_ERR_DEF)sdkErr rslt:(NetDiskDocDir*)rslt</h3>

  + **功能**:  通知查询文档列表结果
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| dir| NSString|     查询的目录|   
| sdkErr| CRVIDEOSDK_ERR_DEF|     操作结果，详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) |  
| rslt| NetDiskDocDir|     成功时的查询的结果，详见定义[NetDiskDocDir](TypeDefinitions.md#NetDiskDocDir) |  

<h3 id=getNetDiskDocFilePageInfoRslt >-(void)getNetDiskDocFilePageInfoRslt:(NSString*)svrPathFileName err:(CRVIDEOSDK_ERR_DEF)sdkErr rslt:(GetDocPageInfoRslt*)rslt</h3>

  + **功能**:  通知查询文档转换结果
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| svrPathFileName| NSString|     查询的文档名|   
| sdkErr| CRVIDEOSDK_ERR_DEF|     操作结果，详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|  
| rslt| GetDocPageInfoRslt|     成功的查询的结果，详见定义[GetDocPageInfoRslt](TypeDefinitions.md#NetDiskDocFilePageInfo)|  

<h3 id=deleteNetDiskDocFileRslt>-(void)deleteNetDiskDocFileRslt:(NSString*)svrPathFileName sdkERR:(int)sdkERR</h3>

  + **功能**:  通知删除文档结果
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| svrPathFileName| String|     查询的文档名|   
| sdkErr| CRVIDEOSDK_ERR_DEF|     操作结果，详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)|  

<h3 id=notifyNetDiskDocFileTrsfProgress>-(void)notifyNetDiskDocFilePageTransforProgress:(NSString*)svrPathFileName percent:(int)percent isUpload:(bool)isUpload;</h3>

  + **功能**:  通知文档传输进度
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| svrPathFileName| NSString|     查询的文档名|   
| percent| int|     传输进度（等于100代表传输完成）|  

<h2 id=CloudroomQueue >5. 队列组件（CloudroomQueue）的接口函数</h2>

><font size=4>CloudroomQueue 是队列组件，实现队列功能，目的是为了实现用户自动分配。，整个程序的生命过程中只能有一个实例。</font>

----

<h3 id=addQueueCallback>- (void)addQueueCallback:(id )callBack;</h3>

  + **功能**:  注册监听回调
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callBack| id |    回调对象| 

<h3 id=removeQueueCallback>- (void)removeQueueCallback:(id)callBack</h3>

  + **功能**:  反注册监听回调
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callBack| CloudroomQueueCallback |    指定的反注册回调对象| 

<h3 id=initQueue>- (void)initQueueDat:(NSString *)cookie</h3>

  + **功能**:  初始化用户队列功能数据
  
  + **返回值**:  无
>回调函数[initQueueDatRslt](#initQueueDatRslt)


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cookie| NSString |    自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

- <p style="color:red; font-size:20px">注意事项:</p>

  + 在响应回调initQueueDatRslt初始化成功后，才可获取队列队列相关信息


<h3 id=refreshAllQueueStatus>- (void)refreshAllQueueStatus</h3>

  + **功能**:  刷新所有队列状态信息
  
  + **返回值**:  无
>回调函数[queueStatusChanged](#queueStatusChanged)

- <p style="color:red; font-size:20px">注意事项:</p>

  + 当前排队的队列或服务的队列，sdk自动有状态变化回调；其它队列则需要此函数来查询


<h3 id=getAllQueueInfo>ArrayList&lt;QueueInfo&gt; getAllQueueInfo()</h3>

  + **功能**:  获取队列信息
  
  + **返回值**:  队列信息列表，详见定义[QueueInfo](TypeDefinitions.md#QueueInfo)

<h3 id=getQueueStatus>- (QueueStatus *)getQueueStatus:(int)queID</h3>

  + **功能**:  获取指定取队列状态
  
  + **返回值**:  队列状态，详见定义[QueueStatus](TypeDefinitions.md#QueueStatus)
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| queID| int |    队列ID|   

<h3 id=getQueuingInfo>- (QueuingInfo *)getQueuingInfo</h3>

  + **功能**:  功能获取我的排队信息
  
  + **返回值**:  我的排队信息，详见定义[QueuingInfo](TypeDefinitions.md#QueuingInfo)


<h3 id=getServiceQueues>- (NSMutableArray &lt;NSNumber *&gt; *)getServiceQueues</h3>

  + **功能**:  获取我服务的所有队列
  
  + **返回值**:  队列ID列表


<h3 id=getSessionInfo>- (VideoSessionInfo *)getSessionInfo</h3>

  + **功能**:  获取我的会话信息
  
  + **返回值**:  我的会话信息，详见定义[VideoSessionInfo](TypeDefinitions.md#VideoSessionInfo)


<h3 id=startQueuing>- (void)startQueuing:(int)queID usrExtDat:(NSString *)usrExtDat cookie:(NSString *)cookie</h3>

  + **功能**:  客户开始排队
  
  + **返回值**:  无
>回调函数[startQueuingRslt](#startQueuingRslt) 

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| queID| int |    排队的队列ID|   
| usrExtDat| NSString |    用户排队扩展数据|   
| cookie| NSString |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串|   

<h3 id=stopQueuing>- (void)stopQueuing:(NSString *)cookie</h3>

  + **功能**:  客户停止排队
  
  + **返回值**:  无
>回调函数[stopQueuingRslt](#stopQueuingRslt)     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| cookie| NSString |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串|  

<h3 id=startService>- (void)startService:(int)queID cookie:(NSString *)cookie</h3>

  + **功能**:  开始服务某个队列(可以多次调用，开启对多个队列的服务)
  
  + **返回值**:  无
>回调函数[startServiceRslt](#startServiceRslt)        

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| queID| int |    排队的队列ID|   
| cookie| NSString |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串|  

<h3 id=startService>- (void)startService:(int)queID priority:(int)priority cookie:(NSString *)cookie</h3>

  + **功能**:  开始服务某个队列(可以多次调用，开启对多个队列的服务)
  
  + **返回值**:  无
>回调函数[startServiceRslt](#startServiceRslt)     

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| queID| int |    排队的队列ID|   
| priority| int |    座席优先级（缺省为0, 0为最高优先级, 值越大优先级越低)|   
| cookie| NSString |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串|  

- <p style="color:red; font-size:20px">注意事项:</p>

  + 如果没有开启免打扰，那么系统会自动分配客户：将收到事件autoAssignUser
  + 如果开启免打扰，系统就不会分配客户，如需服务客户可调用reqAssignUser
  + 座席优先级描述
  
    + 座席优先级只在服务的队列内部有效；
    + 客户优先分配给服务此队列优先级最高的，且空闲的座席；
    + 优先级相同时，则分配给最先空闲的座席；
    + 优先级高的座席变空闲时，不抢夺已分配的客户；


<h3 id=stopService>- (void)stopService:(int)queID cookie:(NSString *)cookie</h3>

  + **功能**:  停止服务某个队列
  
  + **返回值**:  无   
>回调函数[stopServiceRslt](#stopServiceRslt)   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| queID| int |    排队的队列ID|    
| cookie| NSString |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串|  

<h3 id=reqAssignUser>- (void)reqAssignUser:(NSString *)cookie</h3>

  + **功能**:  请求分配一个客户
  
  + **返回值**:  无
>回调函数[reqAssignUserRslt](#reqAssignUserRslt)   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| cookie| NSString |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串|  

- <p style="color:red; font-size:20px">注意事项:</p>

  + 当关闭免打扰时，系统将自动分配客户，无需调用此函数
  + 当开启免打扰时，系统不再自动分配客户，座席如需服务客户可使用此函数分配

<h3 id=acceptAssignUser>- (void)acceptAssignUser:(int)queID userID:(NSString *)userID cookie:(NSString *)cookie</h3>

  + **功能**:  接受系统安排的客户
  
  + **返回值**:  无    
>回调函数[reqAssignUserRslt](#reqAssignUserRslt) 

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| queID| int |    排队的队列ID| 
| userID| NSString |    队列中的用户ID| 
| cookie| NSString |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=rejectAssignUser>- (void)rejectAssignUser:(int)queID userID:(NSString *)userID cookie:(NSString *)cookie</h3>

  + **功能**:  拒绝系统安排的客户
  
  + **返回值**:  无
>回调函数[reqAssignUserRslt](#reqAssignUserRslt) 

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| queID| int |    排队的队列ID| 
| userID| NSString |    队列中的用户ID| 
| cookie| NSString |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

###  通知回调函数

CloudroomQueueCallback 是队列回调接口

------

<h3 id=initQueueDatRslt>- (void)initQueueDatRslt:(CRVIDEOSDK_ERR_DEF)errCode cookie:(NSString *)cookie;</h3>

  + **功能**:  队列初始化操作结果
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| sdkErr| CRVIDEOSDK_ERR_DEF |    操作结果代码，成功为CRVIDEOSDK_NOERR，其他详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)| 
| cookie| NSString |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串|  

<h3 id=queueStatusChanged>- (void)queueStatusChanged:(QueueStatus *)queStatus</h3>

  + **功能**:  队列状态变化通知
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| queStatus| QueueStatus |    新的队列状态，详见定义[QueueStatus](TypeDefinitions.md#QueueStatus) | 

- <p style="color:red; font-size:20px">注意事项:</p>

  + 在排队的队列、或服务的队列发生变化时，将有队列状态变化通知到来
  + 在调用refreshAllQueueStatus时，查询到的队列数据有变化时，会有通知到来

<h3 id=queuingInfoChanged>- (void)queuingInfoChanged:(QueuingInfo *)queuingInfo</h3>

  + **功能**:  排队信息变化通知
  
  + **返回值**:  无  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| queuingInfo| QueuingInfo |    排队信息，详见定义[QueuingInfo](TypeDefinitions.md#QueuingInfo) | 

<h3 id=startQueuingRslt>- (void)startQueuingRslt:(CRVIDEOSDK_ERR_DEF)errCode cookie:(NSString *)cookie</h3>

  + **功能**:  开始排队操作结果
  
  + **返回值**:  无    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| sdkErr| CRVIDEOSDK_ERR_DEF |    操作结果代码，CRVIDEOSDK_NOERR为成功操作，其他详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) | 
| cookie| NSString |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=stopQueuingRslt>- (void)stopQueuingRslt:(CRVIDEOSDK_ERR_DEF)errCode cookie:(NSString *)cookie</h3>

  + **功能**:  停止排队操作结果
  
  + **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| sdkErr| CRVIDEOSDK_ERR_DEF |    操作结果代码，CRVIDEOSDK_NOERR为成功操作，其他详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)| 
| cookie| NSString |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=startServiceRslt>- (void)startServiceRslt:(int)queID errCode:(CRVIDEOSDK_ERR_DEF)errCode cookie:(NSString *)cookie</h3>

  + **功能**:  开始服务队列操作结果
  
  + **返回值**:  无  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| queID| int |    排队的队列ID| 
| sdkErr| CRVIDEOSDK_ERR_DEF |    操作结果代码，CRVIDEOSDK_NOERR为成功操作，其他详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)| 
| cookie| NSString |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=stopServiceRslt>- (void)stopServiceRslt:(int)queID errCode:(CRVIDEOSDK_ERR_DEF)errCode cookie:(NSString *)cookie</h3>

  + **功能**:  停止服务队列操作结果
  
  + **返回值**:  无  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| queID| int |    排队的队列ID| 
| sdkErr| CRVIDEOSDK_ERR_DEF |    操作结果代码，CRVIDEOSDK_NOERR为成功操作，其他详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)| 
| cookie| NSString |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=reqAssignUserRslt>- (void)reqAssignUserRslt:(CRVIDEOSDK_ERR_DEF)errCode userInfo:(UserInfo *)usr cookie:(NSString *)cookie</h3>

  + **功能**:  停止服务队列操作结果
  
  + **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| sdkErr| CRVIDEOSDK_ERR_DEF |    操作结果代码，CRVIDEOSDK_NOERR为成功操作，其他详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)| 
| usr| UserInfo |    请求到的队列用户，结构详见定义[UserInfo](TypeDefinitions.md#UserInfo) | 
| cookie| NSString |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

<h3 id=autoAssignUser>- (void)autoAssignUser:(UserInfo *)usr</h3>

  + **功能**:  队列系统自动分配客户
  
  + **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| usr| UserInfo |    请求到的队列用户，结构详见定义[UserInfo](TypeDefinitions.md#UserInfo) | 

- <p style="color:red; font-size:20px">注意事项:</p>

  + 如果想停止系统的自动分配，请调用CloudroomVideoMgr中的 setDNDStatus 设置免打扰功能。

<h3 id=cancelAssignUser>- (void)cancelAssignUser:(int)queID usrID:(NSString *)usrID</h3>

  + **功能**:  队列系统取消之前自动分配的的客户
  
  + **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| queID| int |    服务的队列| 
| userID| NSString |    自动分配用户被取消| 

<h3 id=responseAssignUserRslt>- (void)responseAssignUserRslt:(CRVIDEOSDK_ERR_DEF)errCode cookie:(NSString *)cookie</h3>

  + **功能**:  拒绝、接受分配的用户
  
  + **返回值**:  无   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------| 
| sdkErr| CRVIDEOSDK_ERR_DEF |    操作结果代码，CRVIDEOSDK_NOERR为成功操作，其他详见定义[CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) | 
| cookie| NSString |    用户自定义数据(在响应消息中回传给调用者)，不需要时传空字符串| 

- <p style="color:red; font-size:20px">注意事项:</p>

  + 队列系统通过接口autoAssignUser给开始队列服务的人自动推送用户，收到系统分配的用户后，
如果队列服务者还未决定接受acceptAssignUser还是拒绝rejectAssignUser推送的用户，系统可用取消本次推送，
并通过本接口通知队列服务者。


<h2 id=CloudroomHttpFileMgr >6. Http文件传输组件（CloudroomHttpFileMgr）的接口函数</h2>

><font size=4>CloudroomHttpFileMgr是Http文件传输组件，实现Http文件上传下载、及文件管理。</font>

----

<h3 id=addHttpFileMgrCallback>- (void)addHttpFileMgrCallback:(id )callBack</h3>

  + **功能**:  注册监听回调
  
  + **返回值**:  无    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callBack| id |    回调对象| 

<h3 id=removeHttpFileMgrCallback>- (void)removeHttpFileMgrCallback:(id )callBack;</h3>

  + **功能**:  反注册监听回调
  
  + **返回值**:  无   

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| callBack| id |    指定的反注册回调对象| 

<h3 id=startMgr>- (BOOL)startMgr</h3>

  + **功能**:  启动Http文件文件组件运行
  
  + **返回值**:  无 

- <p style="color:red; font-size:20px">注意事项:</p>

  + 在调用CloudroomVideoSDK的 init 初始化SDK后后方可调用

<h3 id=startMgr>- (void)stopMgr</h3>

  + **功能**:  停止Http文件文件组件运行
  
  + **返回值**:  无

<h3 id=getAllTransferInfos>ArrayList&lt;FileTransInfo&gt; getAllTransferInfos()</h3>

  + **功能**:  获取本地上传、下载文件信息
  
  + **返回值**:  文件信息，详见定义 FileTransInfo

<h3 id=startTransferFile>- (void)startTransferFile:(HTTPReqInfo *)file</h3>

  + **功能**:  开始下载/上传文件
  
  + **返回值**:  无  

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| info| HttpReqInfo |    上传文件信息，详见定义 HttpReqInfo| 

- <p style="color:red; font-size:20px">注意事项:</p>

  + 上传不支持断点续传； 下载支持断点续传；如果文件传输完成，且fileVersion一致，下次再请求时会立即报告完成。

<h3 id=cancelFileTransfer>- (void)cancelFileTransfer:(NSString *)fileName</h3>

  + **功能**:  取消传输
  
  + **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName| NSString |    本地路径文件名| 

- <p style="color:red; font-size:20px">注意事项:</p>
1. 取消时，只是停止了传输任务，不清理记录及断点文件。

<h3 id=rmTransferInfo>- (void)rmTransferInfo:(NSString *)fileName rmLocFile:(BOOL)rmLocFile</h3>

  + **功能**:  删除传输记录及相关文件
  
  + **返回值**:  无
    
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName | NSString |    本地路径文件名   | 
| bRemoveLocFile | int |    是否移除本地文件   | 

- <p style="color:red; font-size:20px">注意事项:</p>

  + 此接口将文件从管理器中移除（getAllTransferInfos将不再返回相关信息），如果bRemoveLocFile为1时， 那么上传的源始文件、下载的临时文件或结果文件都将被移除。


###  通知回调函数

CloudroomHttpFileMgrCallback是Http上传下载通知回调接口

------

<h3 id=fileStateChanged>- (void)fileStateChanged:(NSString *)fileName state:(HTTP_TRANSFER_STATE)state</h3>

  + **功能**:  通知用户文件状态更改
  
  + **返回值**:  无 

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName| NSString |    本地路径文件名   | 
| state| HTTP_TRANSFER_STATE |    状态，详见定义 [HttpTransferState](Constant.md#HTTP_TRANSFER_STATE)| 

<h3 id=fileProgress>- (void)fileProgress:(NSString *)fileName finishedSize:(int)finishedSize totalSize:(int)totalSize</h3>

  + **功能**:  通知用户文件的传输进度
  
  + **返回值**:  无
    

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName| String |    本地路径文件名   | 
| finisedSize| int |    已传输大小| 
| totalSize| int |    文件总大小| 

<h3 id=fileFinished>- (void)fileFinished:(NSString *)fileName rslt:(HTTP_TRANSFER_STATE)rslt</h3>

  + **功能**:  通知用户文件传输结束
  
  + **返回值**:  无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| fileName| String |    本地路径文件名   | 
| rslt| int |    传输结果，详见定义 [HttpTransferState](Constant.md#HTTP_TRANSFER_STATE)|


<h3 id=getMeetingAllAttrs>- (void)getMeetingAllAttrs:(NSString *)cookie</h3>

+ **功能**:获取房间所有属性

+ **返回值**:无


<h3 id=getMeetingAttrs>- (void)getMeetingAttrs:(NSArray&lt;NSString *&gt; *)keys cookie:(NSString *)cookie</h3>

+ **功能**:获取房间部份属性

+ **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|keys|    String  |需要查询的房间属性key，json格式，如：["key1", "key2"]|


<h3 id=setMeetingAttrs >- (void)setMeetingAttrs:(NSMutableDictionary *)attrs options:(NSMutableDictionary *)options cookie:(NSString *)cookie</h3>

+ **功能**:重置房间属性集

+ **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|attrs|    String  |房间属性集,json格式，如：{"key1":"value1", "key2":"value2"} (key最大长度为64B，value最大长度为8KB)|
|options|    String  |操作选项,json格式参见[MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions)|


<h3 id=addOrUpdateMeetingAttrs >- (void)addOrUpdateMeetingAttrs:(NSMutableDictionary *)attrs options:(NSMutableDictionary *)options cookie:(NSString *)cookie</h3>

+ **功能**:增加或者更新房间属性

+ **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|attrs|    String  |房间属性集,json格式，如：{"key1":"value1", "key2":"value2"} (key最大长度为64B，value最大长度为8KB)|
|options|    String  |操作选项,json格式参见[MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions)|


<h3 id=delMeetingAttrs >- (void)delMeetingAttrs:(NSArray&lt;NSString *&gt; *)keys options:(NSMutableDictionary *)options cookie:(NSString *)cookie</h3>

+ **功能**:删除房间属性

+ **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|keys|    String  |需要删除的房间属性key，json格式，如["key1","key2"]|
|options|    String  |操作选项,json格式参见[MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions)|


<h3 id=clearMeetingAttrs >- (void)clearMeetingAttrs:(NSString *)options cookie:(NSString *)cookie</h3>

+ **功能**:清除房间所有属性

+ **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|options|    String  |操作选项,json格式参见[MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions)|


<h3 id=getUserAttrs >- (void)getUserAttrs:(NSArray&lt;NSString *&gt;*)uids keys:(NSArray&lt;NSString *&gt; *)keys  cookie:(NSString *)cookie</h3>

+ **功能**:获取指定用户的指定属性

+ **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|uids|    String  |目标用户id列表，一次最多包含50个用户，json格式， 如：["uid1","uid2"]|
|keys|    String  |将要获取的用户属性key列表（空串代表获取全部），json格式，如：["key1","key2"]|


<h3 id=setUserAttrs >- (void)setUserAttrs:(MeetingAttrs*)uid attrs:(NSMutableDictionary *)attrs options:(NSMutableDictionary *)options cookie:(NSString *)cookie</h3>

+ **功能**:重置用户属性

+ **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|uid|    String  |目标用户id|
|attrs|    String  |用户属性集, json格式，如：{"key1":"value1", "key2":"value2"} (key最大长度为64B，value最大长度为8KB)|
|options|    String  |操作选项,json格式参见[MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions)|


<h3 id=addOrUpdateUserAttrs >- (void)addOrUpdateUserAttrs:(NSString*)uid attrs:(NSMutableDictionary *)attrs options:(NSMutableDictionary *)options cookie:(NSString *)cookie</h3>

+ **功能**:增加或更新用户属性

+ **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|uid|    StringString  |目标用户id|
|attrs|    String  |用户属性集, json格式，如：{"key1":"value1", "key2":"value2"} (key最大长度为64B，value最大长度为8KB)|
|options|    String  |操作选项,json格式参见[MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions)|


<h3 id=delUserAttrs >- (void)delUserAttrs:(NSString*)uid keys:(NSArray&lt;NSString *&gt;*)keys options:(NSMutableDictionary*)options cookie:(NSString*)cookie</h3>

- **功能**:删除用户的特定属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|uid|    String  |目标用户id|
|keys|    String  |需要删除的用户属性key列表，json格式，如：["key1","key2"]|
|options|    String  |操作选项,json格式参见[MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions)|


<h3 id=clearAllUserAttrs >- (void)clearAllUserAttrs:(NSMutableDictionary*)options cookie:(NSString*)cookie</h3>

+ **功能**:清除所有用户的所有属性

+ **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|options|    String  |操作选项,json格式参见[MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions)|


<h3 id=clearUserAttrs >- (void)clearUserAttrs:(NSString*)uID options:(NSString*)options cookie:(NSString*)cookie</h3>

+ **功能**:清除特定用户的所有属性

+ **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|uid|    String  |目标用户id|
|options|    String  |操作选项,json格式参见[MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions)|


<h3 id=sendMeetingCustomMsg>- (void)sendMeetingCustomMsg:(NSString *)text cookie:(NSString *)cookie</h3>

+ **功能**:发送房间内自定义广播消息

+ **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|msg|    String  |用户自定义消息(最大8KB)|




<h3 id=getMeetingAllAttrsSuccess >- (void)getMeetingAllAttrsSuccess:(MeetingAttrs*)attrSeq cookie:(NSString *)cookie</h3>

+ **功能**:成功获取到房间所有属性

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| attrs | String  | 房间属性集，json结构体请参见[MeetingAttrObjs](TypeDefinitions.md#CRVideo_MeetingAttrObjs)|



<h3 id=getMeetingAllAttrsFail >- (void)getMeetingAllAttrsFail:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie</h3>

+ **功能**:获取房间属性失败

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  |[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |


<h3 id=getMeetingAttrsSuccess > void getMeetingAttrsSuccess(string attrs, string cookie) </h3>

+ **功能**:成功获取到房间指定属性

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| attrs | string  | 房间属性集，json结构体请参见[MeetingAttrObjs](TypeDefinitions.md#CRVideo_MeetingAttrObjs)|



<h3 id=getMeetingAttrsFail > void getMeetingAttrsFail(int err, string cookie) </h3>

+ **功能**:获取房间指定属性失败

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  |[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |




<h3 id=setMeetingAttrsRslt >- (void)resetMeetingAttrsRslt:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie</h3>

+ **功能**:设置用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  |[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |



<h3 id=addOrUpdateMeetingAttrsRslt >- (void)addOrUpdateMeetingAttrsRslt:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie</h3>

+ **功能**:增加或更新房间属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  |[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |


<h3 id=delMeetingAttrsRslt > -(void)delMeetingAttrsRslt:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie </h3>

+ **功能**:删除房间属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  | [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误）|


<h3 id=clearMeetingAttrsRslt > -(void)clearMeetingAttrsRslt:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie </h3>

+ **功能**:清除房间属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  |[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |




<h3 id=getUserAttrsSuccess > -(void)getUserAttrsSuccess:(UsrMeetingAttrs*)attrMap cookie:(NSString *)cookie </h3>

- **功能**:获取房间内用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| attrsMap | String  | 房间属性，json结构体请参见[UsrMeetingAttrObjs](TypeDefinitions.md#CRVideo_UsrMeetingAttrObjs)|



<h3 id=getUserAttrsFail > -(void)getUserAttrsFail:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie </h3>

+ **功能**:获取房间内用户属性失败

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  |[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |


<h3 id=setUserAttrsRslt > - (void)setUserAttrsRslt:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie </h3>

- **功能**:设置用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  | [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误）|



<h3 id=addOrUpdateUserAttrsRslt > - (void)addOrUpdateUserAttrsRslt:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie </h3>

+ **功能**:增加或者更新用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  |[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |


<h3 id=delUserAttrsRslt > - (void)delUserAttrsRslt:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie </h3>

+ **功能**:删除特定用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  |[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |



<h3 id=clearAllUserAttrsRslt > - (void)clearAllUserAttrsRslt:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie </h3>

+ **功能**:清除所有用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  |[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |


<h3 id=clearUserAttrsRslt > - (void)clearUserAttrsRslt:(CRVIDEOSDK_ERR_DEF)sdkErr cookie:(NSString *)cookie </h3>

+ **功能**:清除特定用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  | [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误）|


<h3 id=notifyMeetingAttrsChanged > - (void)notifyMeetingAttrsChanged:(MeetingAttrs*)add updates:(MeetingAttrs*)updates delKeys:(NSMutableArray&lt;NSString *&gt;*)delKeys </h3>

+ **功能**:通知房间属性发生改变

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| adds | String  |增加房间属性集，json结构体请参见[MeetingAttrObjs](TypeDefinitions.md#CRVideo_MeetingAttrObjs) |
| updates | String  |变化的房间属性集，json结构体请参见[MeetingAttrObjs](TypeDefinitions.md#CRVideo_MeetingAttrObjs) |
| delKeys | String  |被删除的房间属性列表，json格式，如:["key1", "key2"] |

<h3 id=notifyUserAttrsChanged > - (void)notifyUserAttrsChanged:(NSString*)uid adds:(MeetingAttrs*)adds updates:(MeetingAttrs*)updates delKeys:(NSMutableArray&lt;NSString *&gt;*)delKeys </h3>

+ **功能**:通知用户属性发生改变

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| uid | String  |变化的用户id |
| adds | String  |增加的用户属性集，json结构体请参见[MeetingAttrObjs](TypeDefinitions.md#CRVideo_MeetingAttrObjs) |
| updates | String  |变化的用户属性集，json结构体请参见[MeetingAttrObjs](TypeDefinitions.md#CRVideo_MeetingAttrObjs) |
| delKeys | String  |被删除的用户属性列表，json格式，如:["key1", "key2"] |

<h3 id=sendMeetingCustomMsgRslt > - (void)sendMeetingCustomMsgRslt:(int)err cookie:(NSString *)cookie </h3>

+ **功能**:通知发送房间内自定义广播消息结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  | [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误）|



<h3 id=notifyMeetingCustomMsg > - (void)notifyMeetingCustomMsg:(NSString *)uid jsonDat:(NSString *)jsonDat </h3>

+ **功能**:通知收到房间内自定义广播消息

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| uid | String  | 房间内广播消息的发送者的用户id |
| jsonDat   | String  | 广播内容  |


