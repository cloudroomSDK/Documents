# API参考

<h2 id=getSDKJsVersion>string Version</h2>

- **功能**: SDK版本号


<h2 id=sdkPath>string sdkPath</h2>

- **功能**: 获取sdk所在的目录


<h2 id=setSDKParams>void setSDKParams(string jsonVal)</h2>

- **功能**: 设置SDK参数

- **返回值**:无

- **参数**:json格式,具体可用参数如下：

```json
//使用格式如下：
{"NoQueue":	0}
```
| 参数 | 取值 | 含义 |
|:-------- |:-----------|:----------|
| NoQueue| 0/1(缺省:0) | 设为1可加快登录速度（适合于不使用sdk的排队功能的业务，如：临柜双录业务、链接入 会业务）|
|Timeout|（缺 省:90000)|网络通信超时时间，单位是毫秒 |
|DatEncType|0/1	(缺省:1) |数据加密类型, 0:不加密(http、udp)，1:加密(https、udp数据des3加密)|
|VerifyHttpsCert|0/1(缺省:1)|是否验证服务器SSL证书（0:不验证，1:验证； 此参数仅在DatEncType为1时此参数才有效）。 如果web服务使用自签名SSL证书此参数应配置为0。|

- **补充说明**:

这个接口在init之前调用有效

<h2 id=setFileUploadRate>void setFileUploadRate(int maxbps)</h2>

- **功能**: 文件上传的流量控制(SDK默认不开启流控,目前对文件上传控制的功能有：录制文件上传、网盘文件上传。)

- **返回值**:无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| maxbps| int | 每秒上传的最大字节数，小于等于0表示不开启流控|

<h2 id=setFileDownloadRate>void setFileDownloadRate(int maxBytePerSec)</h2>

- **功能**: 文件下载的流量控制

- **返回值**:无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| maxBytePerSec| int | 每秒下载的最大字节数。-1代表不进行流控|


<h2 id=setAliyunOssAccountInfo>void setAliyunOssAccountInfo(string accessKey,string accessSecret)</h2>

- **功能**: 设置阿里云OSS信息

- **返回值**:无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| accessKey| string |用于标示用户|
| accessSecret| string |用户用于加密签名字符串和OSS用来验证签名字符串的密钥|

- **补充说明**:

参考阿里云的用户签名验证相关文档 ：https://help.aliyun.com/document_detail/31950.html?spm=a2c4g.11186623.6.707.44c0734ctzHsOa

<h2 id=init2>int init_2(string sdkDatSavePath )</h2>

- **功能**: 登录

- **返回值**:返回[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误）(int)

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkDatSavePath| string | SDK工作目录，用于存储配置文件、临时文件、录制文件、影音文件、日志等文件，如果传空值，则默认为sdk的安装目录|

- **补充说明**:

1. 程序开始时需要调用init_2，程序结束时调用uninit</br>
1. 注意目录的读写权限，如果目录只读，则无法在此目录下生成其他文件和文件夹</br>


<h2 id=uninit>void uninit()</h2>

- **功能**: SDK反初始化

- **返回值**:无

- **参数**:无

<h2 id=setNetworkProxy>void setNetworkProxy(string proxy)</h2>

- **功能**: 设置网络代理
- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|proxy	|string	|网络代理，json格式，参见[NetworkProxyObj](TypeDefinitions.md#CRVideo_NetworkProxyObj)|


<h2 id=serverAddr>string serverAddr</h2>

- **功能**: 设置或获取服务器地址

- **补充说明**:

1. 多个服务器地址使用分号隔开（如：www.cloudroom.com:8080;183.60.47.52:8080;）</br>
1. sdk init之后，登录之前设置</br>

<h2 id=CRVideo_Login>void login(string appID, string md5_appSecret, string nickName, string userID, string userAuthCode, string cookie)</h2>

- **功能**: 密码登录
- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|appID	|string	|appID用于区分不同的项目，每个项目都有属于自己的唯一的appID，不同appID的项目完全独立，无法相互通信。appID请联系云屋销售获取，并开通相关套餐和功能权限。|
|md5_appSecret	|string|	appID对应的密码(md5加密传给sdk)，可登录云屋管理后台修改。|
|nickName	|string| 昵称, 长度不能大于128|
|userID	|string|	用户ID，长度不能大于128。和云屋系统无关，业务方自由填写，保证唯一性即可（同一appID下，具有唯一性即可）|
|userAuthCode|	string|	默认填空。只有开启第三方认证才需要填写。（开启第三方认证时，云屋SDK服务器将连接提前配好的业务方服务器进行实时验证。）|
|cookie	|string	|可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|

- **补充说明**:

1. 登陆成功则回调[loginSuccess](#loginSuccess)</br>
1. 登陆失败则回调[loginFail](#loginFail)</br>

<h2 id=loginByToken>void loginByToken(string token, string nickName, string userID, string userAuthCode, string cookie)</h2>

- **功能**: Token登录
- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|token	|string	|Token鉴权码|
|nickName	|string|	昵称|
|userID	|string|	用户ID。和云屋系统无关，业务方自由填写，保证唯一性即可（同一appID下，具有唯一性即可）|
|userAuthCode|	string|	默认填空。只有开启第三方认证才需要填写。（开启第三方认证时，云屋SDK服务器将连接提前配好的业务方服务器进行实时验证。）|
|cookie	|string	|可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|

- **补充说明**:

1. 登陆成功则回调[loginSuccess](#loginSuccess)</br>
1. 登陆失败则回调[loginFail](#loginFail)</br>
1. 在token有效期只有30秒时，sdk将发出[notifyTokenWillExpire](#notifyTokenWillExpire)通知，集成方应尽快通过[updateToken](#updateToken)更新新的token延长有限时间。</br>

<h2 id=loginSuccess>void loginSuccess(string usrID, string cookie)</h2>

- **功能**: 登录成功回调

- **返回值**:无

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| usrID  | string  | 用户ID  |
| cookie  | string  | 详细介绍见[关键词](KeyWords.md#cookie)  |


<h2 id=loginFail>void loginFail(CRVIDEOSDK_ERR_DEF sdkErr, string &cookie)</h2>

- **功能**: 登录失败回调,登录出错，可以弹出错误提示，或调用登录接口再次重试登录

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| sdkErr  | int  | [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)  |
| cookie  | string  | 详细介绍见[关键词](KeyWords.md#cookie)  |

如果启用了第三方鉴权，并在鉴权失败时（sdkErr为CRVIDEOSDK_CUSTOMAUTH_FAILED），可以通过[getUserAuthErrCode](#getUserAuthErrCode)、[getUserAuthErrDesc](#getUserAuthErrDesc)获取详细原因。

<h2 id=updateToken>void updateToken(string &token)</h2>

- **功能**: 更新Token(在Token即将失效的时候更新Token延长有限时间)

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| token  | string  | Token鉴权码 |

<h2 id=getUserAuthErrCode>int getUserAuthErrCode()</h2>

- **功能**: 获取第三方鉴权失败码（只有在登录失败原因为：CRVIDEOSDK_CUSTOMAUTH_FAILED时有效）

- **返回值**: 第三方返回的失败码



<h2 id=getUserAuthErrDesc>string getUserAuthErrDesc()</h2>

- **功能**: 获取第三方鉴权失败原因描述（只有在登录失败原因为：CRVIDEOSDK_CUSTOMAUTH_FAILED时有效）

- **返回值**: 第三方返回的描述串


<h2 id=logout>void logout()</h2>

- **功能**: 注销

- **返回值**: 无

:::danger

退出程序时，必须注销本次登录，然后再进行SDK反初始化操作

:::

<h2 id=getAllMembers>string getAllMembers()</h2>

- **功能**: 房间成员列表

- **返回值**:返回含多个成员信息，json格式，参见[MembersObj](TypeDefinitions.md#CRVideo_MembersObj)


<h2 id=getMemberInfo>string getMemberInfo(string userID)</h2>

- **功能**: 返回房间内指定成员信息

- **返回值**: userID的成员信息，json格式，参见[MemberObj](TypeDefinitions.md#CRVideo_MemberObj)

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|userid| string	|	用户ID|


<h2 id=getMemberNickName>string getMemberNickName(string userID)</h2>

- **功能**: 房间成员昵称

- **返回值**:用户userID的昵称(string)

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|userid| string	|	用户ID|


<h2 id=isUserInMeeting>int isUserInMeeting(string userID)</h2>

- **功能**: 检查用户是否在房间中

- **返回值**:如果用户不存在则返回0，否则返回1

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|userid| string	|	用户ID|


<h2 id=setNickName>void setNickName(string userid, string strNickName)</h2>

- **功能**: 设置某个用户的昵称

- **返回值**: 无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|userid| string	|	用户ID|
|strNickName| string|	新的用户昵称|

- **补充说明**:

1. 回调函数 [setNickNameRsp](#setNickNameRsp)</br>
1. 调用此接口如果设置成功，其他房间内用户会收到 [notifyNickNameChanged](#notifyNickNameChanged)</br>


<h2 id=getScreenShareCfg>string getScreenShareCfg()</h2>

- **功能**: 获取屏幕共享配置

- **返回值**:屏幕共享配置，json格式，参见[screenShareCfgObj](TypeDefinitions.md#CRVideo_ScreenShareCfgObj)


<h2 id=setScreenShareCfg>void setScreenShareCfg(string jsonCfg)</h2>

- **功能**: 设置本地屏幕共享配置

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|string	|[ScreenShareCfgObj](TypeDefinitions.md#CRVideo_ScreenShareCfgObj) |	屏幕共享配置|


<h2 id=startScreenShare>void startScreenShare()</h2>

- **功能**: 开启屏幕共享

- **返回值**:无

- **补充说明**:

1. 启动屏幕共享结果参见[startScreenShareRslt](#startScreenShareRslt)</br>
1. 开启屏幕共享成功时，房间中其他人将收到[notifyScreenShareStarted](#notifyScreenShareStarted)</br>


<h2 id=stopScreenShare>void stopScreenShare()</h2>

- **功能**: 停止屏幕共享

- **返回值**:无

<h2 id=setCustomizeCatchScreen>void setCustomizeCatchScreen(int newVal)</h2>

- **功能**: 开启/关闭自定义的抓屏

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|newVal	|int| 0:关闭，1:开启（开启后，应按fps周期调用[setCustomizeScreenImg](#setCustomizeScreenImg)送入图像|


<h2 id=setCustomizeScreenImg>void setCustomizeScreenImg(VIDEO_FORMAT format, int width, int heigh, string dat)</h2>
<h2 id=setCustomizeScreenImg2>void setCustomizeScreenImg2(VIDEO_FORMAT format, int width, int heigh, SAFEARRAY(BYTE) dat)</h2>

- **功能**: 送入自定义的抓屏图像数据

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|format	|[VIDEO_FORMA](Constant.md#CRVIDEOSDK_VIDEO_FORMAT)	|图像格式|
|width	|int|	图像的宽度|
|heigh|	int	|图像的高度|
|dat |string	|图像数据，base64编码|
|dat | SAFEARRAY(BYTE)|图像数据 |


- **补充说明**:

1. 当前只支持VFMT_ARGB32格式</br>
1. 送入的图像大小可以变化，但dat要和大小匹配</br>


<h2 id=giveCtrlRight>void giveCtrlRight(string userID)</h2>

- **功能**: 赋予控制权限

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|userID	|string|	用户ID|

- **补充说明**:

1. 房间内所有人将收到[notifyGiveCtrlRight](#notifyGiveCtrlRight)通知</br>

<h2 id=releaseCtrlRight>void releaseCtrlRight(string userID)</h2>

- **功能**: 收回控制权限

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|userID	|string	|用户ID|


<h2 id=sendMouseCtrlMsg>void sendMouseCtrlMsg(MOUSE_MSG_TYPE msgType,MOUSE_KEY_TYPE mouseMsgType, int x, int y)</h2>

- **功能**: 发送鼠标控制消息

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|msgType| [MOUSE_MSG_TYPE](Constant.md#CRVIDEOSDK_MOUSE_MSG_TYPE)	| 鼠标事件类型|
| mouseMsgType| 	[MOUSE_KEY_TYPE](Constant.md#CRVIDEOSDK_MOUSE_MSG_TYPE)| 	鼠标键类型|
| x| 	int| 	鼠标在屏幕中的横坐标|
| y	| int| 	鼠标在屏幕中的纵坐标|


<h2 id=sendKeyCtrlMsg>void sendKeyCtrlMsg(KEY_MSG_TYPE keyMsgType, int vk, int bExtendedKey)</h2>

- **功能**: 发送键盘控制消息

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|keyMsgType	|[KEY_MSG_TYPE](Constant.md#CRVIDEOSDK_KEY_MSG_TYPE)|	键盘事件类型|
|vk|	int|	键盘虚拟键值|
|bExtendedKey|	int	| 是否是扩展按键 |


<h2 id=getShareScreenDecodeImg>string getShareScreenDecodeImg()</h2>

- **功能**: 屏幕共享图像数据

- **返回值**:获取屏幕共享图像数据。json格式，参见([VideoImgObj](TypeDefinitions.md#CRVideo_VideoImgObj))

<h2 id=getShareScreenDecodeImg2>bool getShareScreenDecodeImg2([in,out] int* pixFormat, [in,out] int* w, [in,out] int* h, [out] int* pts, [out] SAFEARRAY(BYTE)* dat)</h2>

- **功能**: 屏幕共享图像数据

- **返回值**: 是否获取成功


| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|pixFormat|	[in,out] int*	|图像格式[CRVIDEOSDK_VIDEO_FORMAT](Constant.md#CRVIDEOSDK_VIDEO_FORMAT), 传入-1代表获取原始格式，传入有效格式，将按目标格式转换|
|w|	[in,out] int*	|图像的宽度, 传入-1代表按原始宽度，否则按目标尺寸缩小（不支持放大，将按原始大小返回）|
|h|	[in,out] int*	|图像的高度, 传入-1代表按原始高度，否则按目标尺寸缩小（不支持放大，将按原始大小返回）|
|pts|	[out] pts*	|图像的时戳|
|dat|	[out] SAFEARRAY(BYTE)*	|图像数据|

Qt使用方法：
```cpp
 	QList<QVariant> params;
 	params.push_back(-1); //原始格式
 	params.push_back(-1); //原始w
 	params.push_back(-1); //原始h
 	params.push_back(-1); //pts
 	params.push_back(QByteArray()); //dat
 	QVariant vRslt = VideoSDK.dynamicCall("getShareScreenDecodeImg2(int&, int&, int&, int&, QByteArray&)", params);
 	if (!vRslt.toBool())
 		return;

	//获取到返回数据
 	int fmt = params[0].toInt();
 	int w = params[1].toInt();
 	int h = params[2].toInt();
 	QByteArray dat = params[4].toByteArray();
```


<h2 id=startScreenShareRslt>void startScreenShareRslt(int sdkErr)</h2>

- **功能**: 开启屏幕共享的响应事件

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| sdkEr  | int  |  [错误码](Constant.md#CRVIDEOSDK_ERR_DEF) |


<h2 id=stopScreenShareRslt>void stopScreenShareRslt(int sdkErr)</h2>

- **功能**停止屏幕共享的响应事件

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| sdkEr  | int  | [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)  |


<h2 id=notifyScreenShareStarted>void notifyScreenShareStarted(string userID)</h2>

- **功能**：通知他人开启了屏幕共享

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  userID |  string |  开启共用的用户ID |



<h2 id=notifyScreenShareStopped>void notifyScreenShareStopped()</h2>

- **功能**: 通知他人停止了屏幕共享


<h2 id=notifyScreenShareData>void notifyScreenShareData(const string &userID, const string &datInfo)</h2>

- **功能**：通知对端屏幕图像有变化

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  userID |  string |  用户ID |
| datInfo  |  string |  变化的区域；（可以只重绘这块区域） |


<h2 id=notifyGiveCtrlRight>void notifyGiveCtrlRight(const string &operId, const string &targetId)</h2>

- **功能**：SDK通知远程控制权限给予了某人

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  operId |  string |  操作的用户ID |
| targetId  |  string |  控制权限给予了谁 |


<h2 id=notifyReleaseCtrlRight>void notifyReleaseCtrlRight(string operId, string targetId )</h2>

- **功能**：SDK通知收回屏幕共享操作权限

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  operId |  string |  操作的用户ID |
| targetId  |  string |  收回了谁的控制权限 |


<h2 id=notifyShareRectChanged>void notifyShareRectChanged(int x, int y, int w, int h)</h2>

- **功能**：通知屏幕共享大小改变

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  x |  int | 矩形起始坐标X  |
| y  |  int | 矩形起始坐标Y  |
| w  |  int |  矩形长 |
| h  |  int |  矩形宽 |

<h2 id=createLocMixer>int createLocMixer(string mixerID, string mixerCfg, string mixerContent)</h2>

- **功能**: 创建本地混图器

- **返回值**: [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|mixerID| string|	混图器唯一标识|
|mixerCfg| [LocMixerCfgObj](TypeDefinitions.md#CRVideo_LocMixerCfgObj)	 |混图器规格配置，json格式|
|mixerContent| [MixerContentObj](TypeDefinitions.md#CRVideo_MixerContentObj)	 |混图器内容配置，json格式|


<h2 id=updateLocMixerContent>int updateLocMixerContent(string mixerID, string mixerContent)</h2>

- **功能**: 更新本地混图器内容

- **返回值**: [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|mixerID| string|	混图器唯一标识|
|mixerContent| [MixerContentObj](TypeDefinitions.md#CRVideo_MixerContentObj)	 |混图器内容配置，json格式|


<h2 id=destroyLocMixer>void destroyLocMixer(string mixerID)</h2>

- **功能**: 消毁本地混图器

- **返回值**: 无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|mixerID| string|	混图器唯一标识|


<h2 id=getLocMixerState>int getLocMixerState(string mixerID)</h2>

- **功能**: 获取本地混图器状态

- **返回值**: 返回本地混图器状态，可参考 [MIXER_STATE](Constant.md#CRVIDEOSDK_MIXER_STATE)

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|mixerID| string|	混图器唯一标识|


<h2 id=addLocMixerOutput>int addLocMixerOutput(string mixerID,string mixerOutput)</h2>

- **功能**: 开启本地录制、直播推流

- **返回值**: [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|mixerID| string|	混图器唯一标识，请确保创建了有效的混图器[createLocMixer](#createLocMixer)。|
|mixerOutput| [LocMixerOutputObj](TypeDefinitions.md#CRVideo_LocMixerOutputObj)	 |混图器输出配置，json格式|

:::danger

   - 可以一次添加多个输出，也可以依据业务需要稍后再添加新的输出；
   - 多个输出不能同名、或同一url；
   - 每个输出，有独立的信息通知，请见事件[LocMixerOutputInfoObj](#LocMixerOutputInfoObj).如果输出异常时，将自动停止；

:::

<h2 id=rmLocMixerOutput>void rmLocMixerOutput(string mixerID, string nameOrUrl)</h2>

- **功能**: 停止本地录制、直播推流

- **返回值**: 无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|mixerID| string|	混图器唯一标识|
|nameOrUrl|string	 |要停止的录制文件名或直播url，支持多值，以";"分隔；|

- **补充说明**:

所有输出停止后并不会消毁混图器，如果混图器不再需要请手工消毁；



<h2 id=getAllRecordFiles>string getAllRecordFiles()</h2>

- **功能**: 录制文件列表

- **返回值**:返回含多个录制文件信息，请见[RecordFileInfoObj](TypeDefinitions.md#CRVideo_RecordFileInfo)



<h2 id=cancelFileTransfer>void cancelFileTransfer(string fileName)</h2>

- **功能**: 取消传输

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|fileName	|string	|本地路径文件名|

- **补充说明**:

取消时，只是停止了传输任务，不清理记录及断点文件


<h2 id=cancelUploadRecordFile>void cancelUploadRecordFile(string filename)</h2>

- **功能**: 取消上传录像文件

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|filename	|string	|文件名|


<h2 id=uploadRecordFile>void uploadRecordFile(string filename)</h2>

- **功能**: 上传录像文件

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|filename	|string	|文件名|

- **补充说明**:

上传文件在默认位置


<h2 id=uploadRecordFile2>void uploadRecordFile2(string fileName,string svrPathFileName)</h2>

- **功能**: 上传录像文件

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|filename	|string	|文件名|
|svrPathFileName	|string	|服务器路径文件名|


<h2 id=playbackRecordFile>void playbackRecordFile(string filename)</h2>

- **功能**: 回放录制文件

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|filename	|string	|文件名|


<h2 id=locMixerStateChanged>void locMixerStateChanged(string mixerID, int state)</h2>

- **功能**：SDK通知本地录制、本地直播状态变化

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| mixerID	|string	|混图器唯一标识|
| state  | int  |  [MIXER_STATE](Constant.md#CRVIDEOSDK_MIXER_STATE) |


<h2 id=locMixerOutputInfo>void locMixerOutputInfo(string mixerID, string nameOrUrl, string outputInfo)</h2>

- **功能**：SDK通知本地录制文件、本地直播信息通知

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| mixerID	|string	|混图器唯一标识|
| nameOrUrl  | string  |  录像名称、或直播url |
| outputInfo  | string  | json结构的字符串,请参见[LocMixerOutputInfoObj](TypeDefinitions.md#CRVideo_LocMixerOutputInfoObj)  |


<h2 id=notifyRecordFileStateChanged>void notifyRecordFileStateChanged(const string &fileName, int state)</h2>

- **功能**：SDK通知录制文件状态更改

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| fileName	|string	|本地文件路径|
| state  | int  |   状态： 0未上传 1上传中 2已上传 |


<h2 id=notifyRecordFileUploadProgress>void notifyRecordFileUploadProgress(const string &fileName, int percent)</h2>

- **功能**：SDK通知上传录制文件进度

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| fileName	|string	|文件名|
| percent  | int  |   进度0-100 |


<h2 id=uploadRecordFileErr>void uploadRecordFileErr(const string &fileName, int sdkErr)</h2>

- **功能**：上传录制文件错误通知

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| fileName	|string	|本地文件路径|
| sdkEr  | int  |   操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) |



<h2 id=createCloudMixer>string createCloudMixer(string cfg)</h2>

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


<h2 id=updateCloudMixerContent>int updateCloudMixerContent(string mixerID, string cfg)</h2>

- **功能**：更新云端混图器

更新混图器内容时，只能更新内容和布局，不能更改混图器规格、输出目标；</br>
更新混图器内容时，房间内所有人都将收到[cloudMixerInfoChanged](#cloudMixerInfoChanged)通知；


- **返回值**： [ERR_DEF](Constant.md#CRVIDEOSDK_CRVIDEOSDK_ERR_DEF)，CRVIDEOSDK_NOERR代表调用成功

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|string| 混图器ID, 参见[createCloudMixer](#createCloudMixer) |
|cfg|string| 混图器内容配置，josn格式，参见[CloudMixerCfgObj](TypeDefinitions.md#CloudMixerCfgObj) |



<h2 id=destroyCloudMixer>void destroyCloudMixer(string mixerID)</h2>

- **功能**：消毁云端混图器

消毁云端混图器时，调用者将收到[cloudMixerStateChanged](#cloudMixerStateChanged)通知进入MIXER_STOPPING状态，在停止完成后，房间内所有人都将收到[cloudMixerStateChanged](#cloudMixerStateChanged)通知进入MIXER_NULL状态；</br>

- **返回值**： 无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|string| 混图器ID, 参见[createCloudMixer](#createCloudMixer) |



<h2 id=getAllCloudMixerInfo>string getAllCloudMixerInfo()</h2>

- **功能**：得到所有云端混图器信息

- **返回值**： json格式字符串， 参见[CloudMixerInfoList](TypeDefinitions.md#CloudMixerInfoList)



<h2 id=getCloudMixerInfo>string getCloudMixerInfo(string mixerID)</h2>

- **功能**：得到云端混图器信息

- **返回值**： json格式字符串， 参见[CloudMixerInfo](TypeDefinitions.md#CloudMixerInfo)

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|string| 混图器ID, 参见[createCloudMixer](#createCloudMixer) |



<h2 id=createCloudMixerFailed>void createCloudMixerFailed(string mixerID, int sdkErr)</h2>

- **功能**：启动云端录制、云端直播失败通知

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|string| 混图器ID |
|sdkErr| [ERR_DEF](Constant.md#CRVIDEOSDK_CRVIDEOSDK_ERR_DEF) | CRVIDEOSDK_NOERR代表成功，其它值代表失败的具体原因 |




<h2 id=cloudMixerStateChanged>void cloudMixerStateChanged(string mixerID, int state, string exParam, string operUserID)</h2>

- **功能**：云端录制、云端直播状态变化通知

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|string| 混图器ID |
|state| [MIXER_STATE](Constant.md#CRVIDEOSDK_MIXER_STATE) | 录制状态 |
|exParam| string | json格式扩展参数，state状态及参数定义：</br>MIXER_NULL：包含err字段(取值为[ERR_DEF](Constant.md#CRVIDEOSDK_CRVIDEOSDK_ERR_DEF)), errDesc字段；</br>MIXER_STARTING：内容参见[CloudMixerCfgObj](TypeDefinitions.md#CloudMixerCfgObj) |
|operUserID| string | 操作者用户ID |




<h2 id=cloudMixerOutputInfoChanged>void cloudMixerOutputInfoChanged(string mixerID, string jsonStr)</h2>

- **功能**：云端录制文件、云端直播输出变化通知

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|string| 混图器ID |
|jsonStr| string | json格式，请参见[CloudMixerOutputInfo](TypeDefinitions.md#CloudMixerOutputInfo) |




<h2 id=cloudMixerInfoChanged>void cloudMixerInfoChanged(string mixerID)</h2>

- **功能**：云端录制、云端直播配置变化通知

可调用：[getCloudMixerInfo](#getCloudMixerInfo)获取相关信息</br>

- **返回值**：无

- **参数**：

| 参数 | 类型 | 含义 |
|:-|:-|:-|
|mixerID|string| 混图器ID |




<h2 id=createboard>void createboard(string title, int width, int height, int pageCount)</h2>

- **功能**: 创建白板

- **返回值**:白板  boardID

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|title|	string|	白板名称|
|width	|int|	白板宽度|
|height|	int|	白板高度|
|pageCount	|int|	白板内有多个页（一般空白板1页，文档白板为实际页数|

- **补充说明**:

1. 其他参会者会收到：[notifyCreateBoard](#notifyCreateBoard)事件;</br>
1. 同时后台会记录下白板数据，新入会者会收到：[notifyInitBoards](#notifyInitBoards)事件;</br>
1. 创建完白板后，一定要及尽快调用[initBoardPageDat](#initBoardPageDat)初始化各页数据;</br>


<h2 id=closeboard>void closeboard(string boardID)</h2>

- **功能**: 关闭白板

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|boardID	|string	|白板标识|

- **补充说明**:

其他参会者将收到[notifyCloseBoard](#notifyCloseBoard)事件；同时后台会移除对应白板的所有信息


<h2 id=getBoardFilesDir>string getBoardFilesDir(const string &boardID)</h2>

- **功能**: 得到白板文档文件存储目录

- **返回值**:白板文档文件存储目录

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|boardID	|string	|白板标识|


<h2 id=initBoardPageDat>void initBoardPageDat(string boardID, int boardPageNo, string imgID,string  elemets)</h2>

- **功能**: 初始化白板图元数据

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|boardID | 	string	 | 白板标识 |
| boardPageNo | 	int | 	白板第几页（0:代表第一页） |
| imgID	 | string | 	白板的背景图片标识(空代表无背影图) |
| elemets | 	string	 | 白板的初始图元（空代表无图元，一般在导入历史文件才用到）|

- **补充说明**:

1. imgID非空时, 代表背景的图片ID。 img来源请参见[getNetDiskDocFilePageInfo](#getNetDiskDocFilePageInfo)</br>
1. 其他参会者将收到[notifyInitBoardPageDat](#notifyInitBoardPageDat)事件；</br>
1. 后台会记录下白板的页数据，在新用户入会时，也会收到[notifyInitBoardPageDat](#notifyInitBoardPageDat)事件;</br>


 <h2 id=createElementID>string createElementID()</h2>

- **功能**: 生成白板图元ID

- **返回值**:图元id

- **补充说明**:

本地操作；所有白板图元id，必须由此接口创建；（历史文件存储的图元id，在房间内不能再使用，应重新创建）


<h2 id=addboardelement>void addboardelement(string boardID, int boardPageNo, string element)</h2>

- **功能**: 添加图元信息

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|boardID	|string|	白板标识|
|boardPageNo	| int |	白板的页序号(0为第一页)|
|element|	string	|图元信息，参见json格式之[BoardElementObj](TypeDefinitions.md#CRVideo_BoardElementObj)|

- **补充说明**:

1. 其他参会者会收到：[notifyAddBoardElement](#notifyAddBoardElement)事件;</br>
1. 同时后台会保存图元，新入会者会在[notifyInitBoardPageDat](#notifyInitBoardPageDat)中得到这些图元;</br>


<h2 id=modifyBoardElement>void modifyBoardElement(string boardID, int boardPageNo, string element)</h2>

- **功能**: 修改图元信息

- **返回值**:elementID图元标识(string)

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|boardID| 	string	| 白板标识|
| boardPageNo	| int| 	白板的页序号(0为第一页)|
| element	 |string| 	图元信息，参见json格式之 [BoardElementObj](TypeDefinitions.md#CRVideo_BoardElementObj)|

- **补充说明**:

1. 其他参会者会收到：[notifyModifyBoardElement](#notifyModifyBoardElement)事件;</br>
1. 同时后台会覆盖对应图元的数据，新入会者会在[notifyInitBoardPageDat](#notifyInitBoardPageDat)中得到这些图元;</br>


<h2 id=delboardelement>void delboardelement(string boardID, int boardPageNo, string elementIDs)</h2>

- **功能**: 删除图元

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|boardID	|string|	白板标识|
|boardPageNo	|int|	白板的页序号(0为第一页)|
|elementIDs|	string|	图元id列表，多值时，以“；”分隔，如：“id1；id2”|

- **补充说明**:

1. 其他参会者会收到：[notifyDelBoardElement](#notifyDelBoardElement)事件；</br>
1. 同时后台会移除这些图元，新入会者会在[notifyInitBoardPageDat](#notifyInitBoardPageDat)中将不包含这些图元;</br>


<h2 id=setmousehotspot>void setmousehotspot(string boardID, int boardPageNo, int x, int y)</h2>

- **功能**: 设置白板鼠标热点

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|boardID | 	string | 	白板标识 |
| boardPageNo | 	int | 	白板的页序号(0为第一页)
| x	 | int | 	屏幕横坐标 |
| y | 	int | 	屏幕纵坐标|


<h2 id=setBoardCurPageNo>void setBoardCurPageNo(string boardID, int boardPageNo, int pagePos1, int pagePos2)</h2>

- **功能**: 白板翻页

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|boardID	|string	|白板标识|
|boardPageNo|int |白板的页序号(0为第一页)|
|pagePos1	|int	|私有扩展参数1（如可用于页内x方向滚动位置）|
|pagePos2	|int |私有扩展参数2（如可用于页内y方向滚动位置）|


<h2 id=listNetDiskDocFile>void listNetDiskDocFile(string dir)</h2>

- **功能**: 查询文档列表

- **返回值**:无  .查询结果请参见[listNetDiskDocFileRslt](#listNetDiskDocFileRslt)

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|dir	|string	|要查询的目录，空或"/"时，代表查询根目录下的内容；|

- **补充说明**:

查询服务器指定目录下的内容（子目录名、上传的文档源文件及文档转换状态）


<h2 id=uploadDocFileToNetDisk>void uploadDocFileToNetDisk(string svrPathFileName,string locPathFileName)</h2>

- **功能**: 上传文档并转换

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|svrPathFileName	|string	|服务器的路径文件名，包含目录时，服务器自动创建对应目录|
|locPathFileName	|string	|要上传文件的本地的路径文件名|

- **补充说明**:

1. 上传进度请参见[notifyNetDiskDocFileTrsfProgress](#notifyNetDiskDocFileTrsfProgress),</br>
1. 转换结果请调用[listNetDiskDocFile](#listNetDiskDocFile)或者[getNetDiskDocFilePageInfo](#getNetDiskDocFilePageInfo)</br>
1. 支持的文件格式有：doc，docx, ppt, pptx, pps, ppsx, xls, xlsx, et, ett, wps, wpt, dps, pdf, txt, log, ini, bmp, png, jpg, jpeg；</br>


<h2 id=downloadDocSrcFile>void downloadDocSrcFile(string svrPathFileName, string locPathFileName)</h2>

- **功能**: 下载源始文档

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|svrPathFileName	|string	|服务器的路径文件名|
|locPathFileName	|string	|文件下载后存放的本地的路径文件名，目录不存在时自动创建|

- **补充说明**:

下载进度请参见[notifyNetDiskDocFileTrsfProgress](#notifyNetDiskDocFileTrsfProgress)


<h2 id=cancelTransforNetDiskDocFile>void cancelTransforNetDiskDocFile(string svrPathFileName)</h2>

- **功能**: 取消文档传输

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|svrPathFileName	|string	|服务器的路径文件名|


<h2 id=deleteNetDiskDocFile>void deleteNetDiskDocFile(string svrPathFileName)</h2>

- **功能**: 删除文档

- **返回值**:无,  删除结果请参见[deleteNetDiskDocFileRslt](#deleteNetDiskDocFileRslt)

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|svrPathFileName	|string	|服务器的路径文件名|


<h2 id=getNetDiskDocFilePageInfo>void getNetDiskDocFilePageInfo(string svrPathFileName)</h2>

- **功能**: 获取文档的转换信息

- **返回值**:无， 结果请参见[getNetDiskDocFilePageInfoRslt](#getNetDiskDocFilePageInfoRslt)

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|svrPathFileName	|string	|服务器的路径文件名|

- **补充说明**:

获取到的文档转换后的信息后， 就可以创建白板[createboard](#createboard), 然后为白板初始化文档内容[initBoardPageDat](#initBoardPageDat)


<h2 id=downloadNetDiskDocFilePage>void downloadNetDiskDocFilePage(string pagePathFileName,string locPathFileName)</h2>

- **功能**: 下载文档转换后的页文件

- **返回值**:无， 下载进度请参见[notifyNetDiskDocFileTrsfProgress](#notifyNetDiskDocFileTrsfProgress)

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|pagePathFileName	|string	|页文件在服务器的路径文件名|
|locPathFileName	|string	|文件下载后存放的本地的路径文件名，目录不存在时自动创建|

- **补充说明**:

页文件格式： 6字节保留，4字节图像格式（2:jpg, 4:png），4字节图像内容长度，图像内容


<h2 id=setPicResource>void setPicResource(string resourceid, string picJsonVal)</h2>

- **功能**: 添加图片资源

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|resourceid	| string| 	资源唯一标识；（可以是guserID，也可以序号方式）|
|picJsonVal	| object| 资源内容，json格式，详见[picResourceObj](TypeDefinitions.md#CRVideo_PicResourceObj)说明|


<h2 id=notifyInitBoards>void notifyInitBoards(const string &jsonBoards)</h2>

- **功能**：SDK入会后通知房间中已经存在的白板列表

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| jsonBoards  | string  |  已经创建好的白板列表， json结构体请参见[BoardObjs](TypeDefinitions.md#CRVideo_BoardObjs)说明 |


<h2 id=notifyInitBoardPageDat>void notifyInitBoardPageDat(const string &boardID, int pageNo, const string &bkImgID, const string &elementDatas, const string &operatorID)</h2>

- **功能**：通知初始化白板内图元数据

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| boardID  | string  |  白板标识 |
|  boardPageNo| int  | 白板页序号  |
|  imgID |  string | 页背景文件ID（空代表无背景）  |
| elementDatas  | string  | 此页的所有图元， json结构体请参见[BoardElementObjs](TypeDefinitions.md#CRVideo_BoardElementObjs)  |
|  operatorID | string  | 初始化用户（为空时，代表入会时后台事件）  |


<h2 id=notifyCreateBoard>void notifyCreateBoard(const string &jsonBoard, const string &operatorID)</h2>

- **功能**：SDK通知创建白板

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| jsonBoard  | string  |  白板信息，json结构体请参见[BoardObj](TypeDefinitions.md#CRVideo_BoardObj) |
|  operatorID| string  | 创建白板的用户ID  |


<h2 id=notifyCloseBoard>void notifyCloseBoard(const string &boardID, const string &operatorID)</h2>

- **功能**：SDK通知关闭白板

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| boardID  | string  |  白板标识 |
|  operatorID| string  | 关闭白板的用户ID  |


<h2 id=notifyAddBoardElement>void notifyAddBoardElement(const string &boardID, int pageNo, const string &elementData, const string &operatorID)</h2>

- **功能**：SDK通知添加图元信息

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| boardID  | string  |  白板标识 |
|  boardPageNo| int  | 白板页序号  |
|  element | string  |此页的所有图元， json格式请参见[BoardElementObj](TypeDefinitions.md#CRVideo_BoardElementObj)  |
|  operatorID | string  | 添加图元的用户ID  |


<h2 id=notifyModifyBoardElement>void notifyModifyBoardElement(const string &boardID, int pageNo, const string &elementData, const string &operatorID)</h2>

- **功能**：SDK通知图元信息被修改

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| boardID  | string  |  白板标识 |
|  boardPageNo| int  | 白板页序号  |
|  element | string  |此页的所有图元, json格式请参见[BoardElementObj](TypeDefinitions.md#CRVideo_BoardElementObj)  |
|  operatorID | string  | 添加图元的用户ID  |


<h2 id=notifyDelBoardElement>void notifyDelBoardElement(const string &boardID, int pageNo, const string &elementIDs, const string &operatorID)</h2>

- **功能**：SDK通知删除图元

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| boardID  | string  |  白板标识 |
|  boardPageNo| int  | 白板页序号  |
|  elementIDs | string  | 图元id列表，以 “；”分隔  |
|  operatorID | string  | 删除图元的用户ID  |


<h2 id=notifyMouseHotSpot>void notifyMouseHotSpot(const string&, int pageNo, int, int, const string &)</h2>

- **功能**：SDK通知设置鼠标热点消息

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| e.p_boardID  | string  |  白板标识 |
|  e.p_x | int  | 屏幕横坐标  |
|   e.p_y | int  | 屏幕纵坐标  |
|  e.p_operatorID | string  | 操作者的用户ID  |


<h2 id=notifyBoardCurPageNo>void notifyBoardCurPageNo(const string &boardID, int pageNo, int pagePos1, int pagePos2, const string &operatorID)</h2>

- **功能**：SDK通知通知白板翻页

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| boardID  | string  |  白板标识 |
|  pageNo | int  | 翻到第几页  |
|  pagePos1 | int  | 扩展参数1  |
|  pagePos2 | int  | 扩展参数2  |
| operatorID  | string  | 操作者的用户ID  |


<h2 id=undoEnableChange>void undoEnableChange(bool isEnable)</h2>

- **功能**：SDK通知白板的“撤消”功能是否可用

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| isEnable  | bool  |  撤消功能是否可用 |


<h2 id=redoEnableChange>void redoEnableChange(bool isEnable)</h2>

- **功能**：SDK通知白板的“恢复”功能是否可用

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| isEnable  | bool  |  恢复功能是否可用 |


<h2 id=listNetDiskDocFileRslt>void listNetDiskDocFileRslt(const string &dir, int sdkErr, const string &rslt)</h2>

- **功能** 通知查询文档列表结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| dir  | string  |  查询的目录 |
|  sdkERR | int  | 0代表成功，非0参见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
| rslt  |  string | 成功时的查询的结果，json格式请参见[ListDocFileRsltObj](TypeDefinitions.md#CRVideo_ListDocFileRslt)  |


<h2 id=getNetDiskDocFilePageInfoRslt>void getNetDiskDocFilePageInfoRslt(const string &svrPathFileName, int sdkErr, const string &rslt)</h2>

- **功能** 通知查询文档转换结果

+ **参数**

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| svrPathFileName  | string  |  查询的文档名 |
|  sdkERR | int  | 0代表成功，非0参见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
| rslt  |  string | 成功时的查询的结果，json格式请参见[GetDocPageInfoRsltObj](TypeDefinitions.md#CRVideo_GetDocPageInfoRslt)  |


<h2 id=deleteNetDiskDocFileRslt>void deleteNetDiskDocFileRslt(const string &svrPathFileName, int sdkERR)</h2>

- **功能**: 通知删除文档结果

+ **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| svrPathFileName  | string  |  要删除的文档，或页文件名 |
|  sdkERR | int  | 删除结果，0代表删除成功, 错误码取值参考[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |


<h2 id=notifyNetDiskDocFileTrsfProgress>void notifyNetDiskDocFileTrsfProgress(const string &svrPathFileName, int percent)</h2>

- **功能** 通知文档传输进度

+ **参数**

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| svrPathFileName  | string  |  传输的文档，或页文件名 |
|  percent | int  | 传输进度（等于100代表传输完成）  |


<h2 id=getOpenFileName>string getOpenFileName(string title, string directory, string filter)</h2>

- **功能**：获取用户打开的全路径文件名

- **返回值**: 结果，空串表示用户取消， 否则返回用户选择的文件路径文件名

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|title   |string|    打开文件框的标题|
|directory|  string| 打开对话框初始路径,不设初始值时请传空|
|filter|    string| 文件类型过滤器（可为空），示例："Images (*.png *.xpm *.jpg);;Text files (*.txt)"|

<h2 id=getSaveFileName>string getSaveFileName(string title, string directory, string filter)</h2>

- **功能**：获取用户保存的全路径文件名

- **返回值**: 结果，空串表示用户取消， 否则返回用户保存的文件路径文件名

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|title   |string|    打开文件框的标题|
|directory|    string| 打开对话框初始路径,不设初始值时请传空|
|filter|    string| 文件类型过滤器（可为空），示例："Images (*.png *.xpm *.jpg);;Text files (*.txt)"|


<h2 id=getFileSize>int getFileSize(const string &diskFileName)</h2>

- **功能**：获取指定文件的大小

- **返回值**: 文件长度

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|diskFileName   |string| 指定的文件名 |


<h2 id=deleteFile>int deleteFile(const string &diskFileName);</h2>

- **功能**：删除指定文件

- **返回值**: CRVIDEOSDK_ERR_DEF类型的错误码，若无错误则返回CRVIDEOSDK_NOERR

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|diskFileName   || 指定的文件名 |


<h2 id=sendCmd>string sendCmd(string targetUserId, string data)</h2>

- **功能**：发送小块数据

- **返回值**: TaskID

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|targetUserId	|string	|目标用户ID|
|data|	string|	发送的数据(最大64KB)|

- **补充说明**:

1. 一次性发送不会有进度通知，发送结果事件[sendCmdRlst](#sendCmdRlst)</br>
1. sendCmd不能被[cancelSend](#cancelSend)</br>
1. 对方将收到[notifyCmdData](#notifyCmdData)回调</br>

<h2 id=sendBuffer>string sendBuffer(string targetUserId, string data)</h2>

- **功能**：发送大块数据（分块发送）

- **返回值**: TaskID

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|targetUserId	|string	|目标用户ID|
|data|	string|	发送的数据(最大100MB)|

- **补充说明**:

1. 进度通知事件[sendProgress](#sendProgress)</br>
1. 发送结果事件[sendBufferRlst](#sendBufferRlst)</br>
1. 取消发送[cancelSend](#cancelSend)</br>
1. 对方将收到[notifyBufferData](#notifyBufferData)回调</br>

<h2 id=sendFile>string sendFile(string targetUserId, string fileName)</h2>

- **功能**：发送文件（分块发送 ）

- **返回值**: TaskID

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|targetUserId	|string	|目标用户ID|
|fileName|	string|	需要发送的文件名(文件内容最大100MB)|

- **补充说明**:

1. 进度通知事件[sendProgress](#sendProgress)</br>
1. 发送结果事件[sendFileRlst](#sendFileRlst)</br>
1. 取消发送[cancelSend](#cancelSend))</br>
1. 对方将收到[notifyFileData](#notifyFileData)回调</br>

<h2 id=cancelSend>void cancelSend(string taskID)</h2>

- **功能**： 取消数据发送

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|taskID	|string	|任务ID|

- **补充说明**:

取消数据发送 操作完成则回调[cancelSendRlst](#cancelSendRlst)

<h2 id=initQueueDat>void initQueueDat(string cookie)</h2>

- **功能**: 初始化队列

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|cookie	|string|	详细介绍见[关键词](KeyWords.md#cookie)|

- **补充说明**:

操作完成回调[initQueueDatRslt](#initQueueDatRslt)，队列初始化成功后才可获取队列队列相关信息


<h2 id=refreshAllQueueStatus>void refreshAllQueueStatus()</h2>

- **功能**: 刷新所有队列状态

- **返回值**:无

- **补充说明**:

操作完成则触发[queueStatusChanged](#queueStatusChanged)（当前排队的队列，或服务的队列，sdk自动有状态变化回调）


<h2 id=getAllQueueInfo>string getAllQueueInfo()</h2>

- **功能**: 查询队列

- **返回值**:返回所有队列信息（[QueueInfoObj](TypeDefinitions.md#CRVideo_QueueInfo)）


<h2 id=getQueueStatus>int getQueueStatus(int queID)</h2>

- **功能**: 获取队列状态

- **返回值**:返回队列状态（[QueStatusObj](TypeDefinitions.md#CRVideo_QueueStatusObj)）

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|queID	 |int	|队列ID|


<h2 id=getQueuingInfo>string getQueuingInfo()</h2>

- **功能**: 获取我的排队信息

- **返回值**:返回排队信息（[QueuingInfoObj](TypeDefinitions.md#CRVideo_QueuingInfo)）


<h2 id=getServingQueues>string getServingQueues()</h2>

- **功能**: 获取我服务的所有队列

- **返回值**:返回我服务的队列列表


<h2 id=getSessionInfo>string getSessionInfo()</h2>

- **功能**: 获取我的会话信息

- **返回值**: 返回会话信息[SessionInfoObj](TypeDefinitions.md#CRVideo_SessionInfo)


<h2 id=startQueuing2>void startQueuing2(int queID,string usrExtDat,string cookie)</h2>

- **功能**: 开始排队

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|queID   |int |  队列ID |
|usrExtDat  |string |用户排队携带的扩展数据, 座席在服务时可获得。 |
|cookie  |string |详细介绍见[关键词](KeyWords.md#cookie)|

- **补充说明**:

操作完成回调[startQueuingRslt](#startQueuingRslt)


<h2 id=stopQueuing>void stopQueuing(string cookie)</h2>

- **功能**: 停止排队

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|cookie	|string|	详细介绍见[关键词](KeyWords.md#cookie)|

- **补充说明**:

操作完成回调[stopQueuingRslt](#stopQueuingRslt)


<h2 id=startService2>void startService2(int queID, int priority, string cookie)</h2>

- **功能**: 开始服务队列

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|queID   |int |  队列ID |
|priority   |int |  坐席优先级 (缺省为0,取值为0~1000内整数。值越小优先级越高。0为最高优先级 ))|
|cookie |   string |    详细介绍见[关键词](KeyWords.md#cookie)|

- **补充说明**:

可以多次调用，开启对多个队列的服务。 操作回调[startServiceRslt](#startServiceRslt) 开启成功后： </br>
a. 如果没有开启免打挽，那么系统会自动分配客户：[autoAssignUser](#autoAssignUser)；</br>
b. 如果开启免打挽，系统就不会分配客户，如需服务客户可调用：[reqAssignUser](#reqAssignUser)</br>
座席优先级描述：</br>
1. 座席优先级只在服务的队列内部有效；</br>
1. 客户优先分配给服务此队列优先级最高的，且空闲的座席；</br>
1. 优先级相同时，则分配给最先空闲的座席；</br>
1. 优先级高的座席变空闲时，不抢夺已分配的客户；</br>


<h2 id=stopService>void stopService(int queID, string cookie)</h2>

- **功能**: 停止服务队列

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|queID	|int|	queID 队列ID|
|cookie	|string|	详细介绍见[关键词](KeyWords.md#cookie)|

- **补充说明**:

操作完成回调[stopServiceRslt](#stopServiceRslt)


<h2 id=getQueueUsers>string getQueueUsers(int queID)</h2>

- **功能**: 获取指定队列的客户

- **返回值**:返回排队的客户列表，json格式，参见[QueUserList](TypeDefinitions.md#CRVideo_QueUserList)

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|queID	 |int	|队列ID|


<h2 id=reqAssignUser>void reqAssignUser(string cookie)</h2>

- **功能**: 请求分配一个客户

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|cookie	|string	|详细介绍见[关键词](KeyWords.md#cookie)|

- **补充说明**:

1. 回调函数：[reqAssignUserRslt](#reqAssignUserRslt)</br>
1. 当关闭免打扰时，系统将自动分配客户，无需调用此函数；</br>

<h2 id=reqAssignUser2>void reqAssignUser2(int queID, string userID, string cookie)</h2>

- **功能**: 请求分配一个指定的客户

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|queID|	int	|队列ID|
|userID|	string	|队列中的用户ID|
|cookie	|string	|详细介绍见[关键词](KeyWords.md#cookie)|

- **补充说明**:

1. 回调函数：[reqAssignUserRslt](#reqAssignUserRslt)</br>
1. 当关闭免打扰时，系统将自动分配客户，无需调用此函数；</br>


<h2 id=acceptAssignUser>void acceptAssignUser(int queID, string userID, string cookie)</h2>

- **功能**: 接受分配的客户

| 参数     | 类型        | 含义      |
|:-------- |:-----------|:----------|
|queID|	int	|队列ID|
|userID|	string	|队列中的用户ID|
|cookie	|string|	详细介绍见[关键词](KeyWords.md#cookie)|


<h2 id=rejectAssignUser>void rejectAssignUser(int queID, string userID, string cookie)</h2>

- **功能**: 拒绝分配的客户

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|queID	 | int | 	队列ID |
|userID | 	string | 	队列中的用户ID |
|cookie	 | string | 	详细介绍见[关键词](KeyWords.md#cookie)|


<h2 id=initQueueDatRslt>void initQueueDatRslt(int sdkErr, const string &cookie)</h2>

- **功能**：队列初始化操作结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| sdkEr	 | int | 	详细介绍见[关键词](Constant.md#CRVIDEOSDK_ERR_DEF) |
| cookie	 | string | 详细介绍见[关键词](KeyWords.md#cookie)	|


<h2 id=queueStatusChanged>void queueStatusChanged(const string &json queStatus)</h2>

- **功能**：队列状态变化通知

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| queStatus	 | string | 	[队列状态](TypeDefinitions.md#QueueStatusObj) |


<h2 id=queuingInfoChanged>void queuingInfoChanged(const string &queuingInfo)</h2>

- **功能**：排队信息变化通知

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| queuingInfo	 | string | 	[排队信息](TypeDefinitions.md#CRVideo_QueuingInfo) |


<h2 id=startQueuingRslt>void startQueuingRslt(int sdkErr, const string &cookie)</h2>

- **功能**：开始排队操作结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| sdkEr	 | int | 	详细介绍见[关键词](Constant.md#CRVIDEOSDK_ERR_DEF) |
| cookie	 | string | 详细介绍见[关键词](KeyWords.md#cookie)	|


<h2 id=stopQueuingRslt>void stopQueuingRslt(int sdkErr, const string &cookie)</h2>

- **功能**：停止排队操作结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| sdkEr	 | int | 	详细介绍见[关键词](Constant.md#CRVIDEOSDK_ERR_DEF) |
| cookie	 | string | 详细介绍见[关键词](KeyWords.md#cookie)	|


<h2 id=startServiceRslt>void startServiceRslt(int queID, int sdkErr, const string &cookie)</h2>

- **功能**：开始服务队列操作结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| queID  | int  |  服务的队列ID |
| sdkEr	 | int |操作失败代码,定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)	|
| cookie  | string  | 详细介绍见[关键词](KeyWords.md#cookie)  |


<h2 id=stopServiceRslt>void stopServiceRslt(int queID, int sdkErr, const string &cookie)</h2>

- **功能**：停止服务队列操作结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| queID  | int  |  服务的队列ID |
| sdkEr	 | int |操作失败代码,定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)	|
| cookie  | string  | 详细介绍见[关键词](KeyWords.md#cookie)  |


<h2 id=responseAssignUserRslt>void responseAssignUserRslt(int sdkErr, const string &cookie)</h2>

- **功能**：响应分配客户操作结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| sdkEr	 | int |操作失败代码,定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)	|
| cookie  | string  | 详细介绍见[关键词](KeyWords.md#cookie)  |


<h2 id=autoAssignUser>void autoAssignUser(const string &jsonUsr)</h2>


- **功能**：系统自动安排客户

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| jsonUsr	 | string |队列用户信息[QueUser](TypeDefinitions.html#CRVideo_QueUser)。|

- **补充说明**:

1. 如果不需要系统的自动分配，请通[setDNDStatus](#setDNDStatus)设置免打扰功能</br>
1. 收到系统分配的客户后，如果队列服务者30秒之内不接受[acceptAssignUser](#acceptAssignUser)也不拒绝[rejectAssignUser](#rejectAssignUser)推送的客户，系统将取消本次分配[cancelAssignUser](#cancelAssignUser)，然后将客户分配给其他空闲的座席。</br>
1. acceptAssignUser后，还需要调用[call](#call)去通知对方进入目标房间；

<h2 id=reqAssignUserRslt>void reqAssignUserRslt(int sdkErr, const string &jsonUsr, const string &cookie)</h2>


- **功能**：请求分配客户操作结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| sdkEr  | int  |  操作失败代码,定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) |
| jsonUsr	 | string |队列用户信息[QueUser](TypeDefinitions.html#CRVideo_QueUser)	|
| cookie  | string  | 详细介绍见[关键词](KeyWords.md#cookie)  |


<h2 id=cancelAssignUser>void cancelAssignUser(int queID, const string &usrID)</h2>

- **功能**：系统取消之前分配的的客户

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| queID  | int  |  服务的队列 |
| userid	 | string |用户id	|


<h2 id=userEnter>void userEnter(int queID, const string &jsonUsr)</h2>

- **功能**：客户进入队列通知

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| queID  | int  |  服务的队列 |
| jsonUsr	 | string |队列用户信息，json格式，参见：[QueUser](TypeDefinitions.html#CRVideo_QueUser)	|


<h2 id=userLeave>void userLeave(int queID, const string &usrID, int inService)</h2>

- **功能**：客户离开队列通知

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| queID  | int  |  服务的队列 |
| userid	 | string |用户id	|
| inService  | int  |  服务状态（0-未被服务 1-开始被服务） |


- **补充说明**:

1. 客户取消排队，将从队列中离开，inService的值将为0</br>
1. 客户被分配给某个座席时，也将从队列离开，此时inService值为1</br>
1. 客户被分配给某个座席后，座席未接受时，客户将重新回到队头(最先被服务）</br>


<h2 id=call>string call(string calledUserID, MeetInfoObj meetObj, string usrExtDat, string cookie)</h2>

- **功能**: 发起呼叫

- **返回值**:返回本次呼叫标识码（呼叫ID）

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|calledUserID	|string	|被叫用户的账户ID|
|meetObj	|[MeetInfoObj](TypeDefinitions.md#CRVideo_MeetInfoObj)	|房间对象信息|
|usrExtDat	|string	|自定义扩展参数|
|cookie	|string	|详细介绍见[关键词](KeyWords.md#cookie)|

- **补充说明**:

1. 操作成功则回调[callSuccess](#callSuccess)，失败则回调[callFail](#callFail)。</br>
1. 呼叫时，对方迟迟不响应，30秒超时后系统自动结束呼叫</br>

<h2 id=acceptCall>void acceptCall(string callID, meetObj, string usrExtDat, string cookie)</h2>

- **功能**: 接受对方发起的呼叫

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|callID	|string	|呼叫ID|
|meetObj|	[MeetInfoObj](TypeDefinitions.md#CRVideo_MeetInfoObj)	|房间对象信息|
|usrExtDat|	string|	自定义扩展参数|
|cookie	|string|	详细介绍见[关键词](KeyWords.md#cookie)|

- **补充说明**:

1. 成功则回调[acceptCallSuccess](#acceptCallSuccess)</br>
1. 失败则回调[acceptCallFail](#acceptCallFail)</br>



<h2 id=rejectCall>void rejectCall(string callID, string usrExtDat, string cookie)</h2>

- **功能**: 拒绝对方发起的呼叫

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|callID	|string	|呼叫ID|
|usrExtDat|	string	|自定义扩展参数|
|cookie	|string|	详细介绍见[关键词](KeyWords.md#cookie)|

- **补充说明**:

1. 成功则回调[rejectCallSuccess](#rejectCallSuccess)</br>
1. 失败则回调[rejectCallFail](#rejectCallFail)</br>


<h2 id=hungupCall>void hungupCall(string callID, string usrExtDat, string cookie)</h2>

- **功能**: 挂断呼叫

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|callID	 | string | 	呼叫ID |
| usrExtDat	 | string	 | 自定义扩展参数 |
| cookie | 	string | 	详细介绍见[关键词](KeyWords.md#cookie)|

- **补充说明**:

1. 成功则回调[hangupCallSuccess](#hangupCallSuccess)</br>
1. 失败则回调[hangupCallFail](#hangupCallFail)</br>

<h2 id=callSuccess>void callSuccess(const string& callID, const string &cookie)</h2>

- **功能**：呼叫他人操作成功响应

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| callID  | string  | 呼叫全局标识  |
| cookie  | string  |  详细介绍见[关键词](KeyWords.md#cookie) |


<h2 id=callFail>void callFail(const string& callID, int sdkErr, const string &cookie)</h2>

- **功能**：呼叫他人操作失败响应

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| callID  | string  | 呼叫全局标识  |
|  sdkEr |   | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
| cookie  | string  |  详细介绍见[关键词](KeyWords.md#cookie) |


<h2 id=acceptCallSuccess>void acceptCallSuccess(const string& callID, const string &cookie)</h2>

- **功能**：接受他人呼叫操作成功响应

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| callID  | string  | 呼叫全局标识  |
| cookie  | string  |  详细介绍见[关键词](KeyWords.md#cookie) |


<h2 id=acceptCallFail>void acceptCallFail(const string& callID, int sdkErr, const string &cookie)</h2>

- **功能**：接受他人呼叫操作失败响应

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| callID  | string  | 呼叫全局标识  |
|  sdkEr |   | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
| cookie  | string  |  详细介绍见[关键词](KeyWords.md#cookie) |


<h2 id=rejectCallSuccess>void rejectCallSuccess(const string& callID, const string &cookie)</h2>

- **功能**：拒绝他人的呼叫成功响应

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| callID  | string  | 呼叫全局标识 |
| cookie  | string  |  详细介绍见[关键词](KeyWords.md#cookie) |


<h2 id=rejectCallFail>void rejectCallFail(const string& callID, int sdkErr, const string &cookie)</h2>

- **功能**：拒绝他人的呼叫失败响应

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| callID  | string  | 呼叫全局标识  |
|  sdkEr |   | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
| cookie  | string  |  详细介绍见[关键词](KeyWords.md#cookie) |


<h2 id=hangupCallSuccess>void hangupCallSuccess(const string& callID, const string &cookie)</h2>

- **功能**：挂断他人的呼叫成功响应

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| callID  | string  | 呼叫全局标识  |
| cookie  | string  |  详细介绍见[关键词](KeyWords.md#cookie) |



<h2 id=hangupCallFail>void hangupCallFail(const string& callID, int sdkErr, const string &cookie)</h2>

- **功能**：挂断呼叫操作失败响应

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| callID  | string  | 呼叫全局标识  |
|  sdkEr |   | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
| cookie  | string  |  详细介绍见[关键词](KeyWords.md#cookie) |


<h2 id=notifyCallIn>void notifyCallIn(const string& callID, const string &meetObj, const string& callerID, const string& usrExtDat)</h2>

- **功能**：SDK通知自己被呼叫

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| callID  | string  | 呼叫全局标识  |
|  meetObj | string  | [房间对象](TypeDefinitions.md#CRVideo_MeetInfoObj)  |
| callerID  | string  |  呼叫人员的标识ID |
|  usrExtDat | string  | 自定义扩展参数  |


<h2 id=notifyCallAccepted>void notifyCallAccepted(const string& callID, const string &meetObj, const string& usrExtDat)</h2>

- **功能**：SDK通知自己视频呼叫被对方接受

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| callID  | string  | 呼叫全局标识  |
|  meetObj | string  | [房间对象](TypeDefinitions.md#CRVideo_MeetInfoObj)  |
|  usrExtDat | string  | 自定义扩展参数  |


<h2 id=notifyCallRejected>void notifyCallRejected(const string& callID, int reason, const string& usrExtDat)</h2>

- **功能**：SDK通知自己呼叫被对方拒绝

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| callID  | string  | 呼叫全局标识  |
|  reason | int  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
|  usrExtDat | string  | 自定义扩展参数  |


<h2 id=notifyCallHungup>void notifyCallHungup(const string& callID, const string& usrExtDat)</h2>

- **功能**：SDK通知自己呼叫被挂断

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| callID  | string  | 呼叫全局标识  |
|  usrExtDat | string  | 自定义扩展参数  |


<h2 id=sendCmdRlst>void sendCmdRlst(const string &taskId, int sdkErr, const string &reserve)</h2>

- **功能**：发送小块数据时，SDK通知发送结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| taskID  | string  | 发送任务id  |
|  sdkEr | int  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |


<h2 id=sendBufferRlst>void sendBufferRlst(const string &taskId, int sdkErr, const string &reserve)</h2>

- **功能**：发送大块数据时，SDK通知发送结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| taskID  | string  | 发送任务id  |
|  sdkEr | int  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |


<h2 id=sendFileRlst>void sendFileRlst(const string &taskId, const string &fileName, int sdkErr, const string &reserve)</h2>

- **功能**：发送文件时，SDK通知发送结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| taskID  | string  | 发送任务id  |
| fileName  | int  |  文件名 |
|  sdkEr | int  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |


<h2 id=sendProgress>void sendProgress(const string &taskId, int sendedLen, int totalLen, const string &reserve)</h2>

- **功能**：发送数据时，SDK通知发送进度

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| taskID  | string  | 发送任务id  |
| sendedLen  | int  |  已发送的数据长度 |
|  totalLen | int  | 需要发送的总长度  |


<h2 id=cancelSendRlst>void cancelSendRlst(const string &taskId, int sdkErr, const string &reserve)</h2>

- **功能**：取消发送响应

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|taskID|	string	|发送任务id|
| sdkEr  | int  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |


<h2 id=notifyCmdData>void notifyCmdData(const string &sourceUserId, const string &data)</h2>

- **功能**：SDK通知收到小块数据

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|sourceUserId|	string	|数据来源的用户|
| data  | string  | 数据类型  |


<h2 id=notifyBufferData>void notifyBufferData(const string &sourceUserId, const string &data)</h2>

- **功能**：SDK通知收到大块数据

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|sourceUserId|	string	|数据来源的用户|
| data  | string  | 数据类型  |


<h2 id=notifyFileData>void notifyFileData(const string &sourceUserId, const string &tmpFile, const string &orgFileName)</h2>


- **功能**：SDK通知收到文件数据（收到的文件生成在系统临时目录下，请尽快移走对应文件）

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|sourceUserId|	string	|数据来源的用户|
| tmpFile  | string  | 临时文件，不需要时，请移除或删除对应文件  |
| orgFileName  | string  | 原始文件名  |


<h2 id=notifyCancelSend>void notifyCancelSend(const string &taskId)</h2>

- **功能**：SDK通知取消发送文件数据

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|taskID|	string	|取消的任务id|

<h2 id=invite>string invite(const string &inviteeUserID, const string &usrExtDat, const string &cookie)</h2>

- **功能**：发送邀请

- **返回值**:返回inviteID(每个邀请对应的唯一ID)

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteeUserID  | string  | 受邀者用户ID  |
| usrExtDat  | string  |  用户扩展数据 |
| cookie  | string  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h2 id=acceptInvite>string acceptInvite(const string &inviteID, const string &usrExtDat, const string &cookie)</h2>

- **功能**：接受对方的邀请

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | string  | 邀请ID  |
| usrExtDat  | string  |  用户扩展数据 |
| cookie  | string  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h2 id=rejectInvite>string rejectInvite(const string &inviteID, const string &usrExtDat, const string &cookie)</h2>

- **功能**：拒绝对方的邀请

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | string  | 邀请ID  |
| usrExtDat  | string  |  用户扩展数据 |
| cookie  | string  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h2 id=cancelInvite>string cancelInvite(const string &inviteID, const string &usrExtDat, const string &cookie)</h2>

- **功能**：取消自己发送的邀请

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | string  | 邀请ID  |
| usrExtDat  | string  |  用户扩展数据 |
| cookie  | string  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h2 id=inviteSuccess>void inviteSuccess(const string &inviteID, const string &cookie)</h2>

- **功能**：发送邀请成功

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | string  | 邀请ID  |
| cookie  | string  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h2 id=inviteFail>void inviteFail(const string &inviteID, int sdkErr, const string &cookie)</h2>

- **功能**：发送邀请失败

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | string  | 邀请ID  |
| sdkErr  | int  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
| cookie  | string  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h2 id=cancelInviteSuccess>void cancelInviteSuccess(const string &inviteID, const string &cookie)</h2>

- **功能**：取消自己发送的邀请成功

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | string  | 邀请ID  |
| cookie  | string  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h2 id=cancelInviteFail>void cancelInviteFail(const string &inviteID, int sdkErr, const string &cookie)</h2>

- **功能**：取消自己发送的邀请失败

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | string  | 邀请ID  |
| sdkErr  | int  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
| cookie  | string  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h2 id=acceptInviteSuccess>void acceptInviteSuccess(const string &inviteID, const string &cookie)</h2>

- **功能**：接受对方的邀请成功

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | string  | 邀请ID  |
| cookie  | string  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h2 id=acceptInviteFail>void acceptInviteFail(const string &inviteID, int sdkErr, const string &cookie)</h2>

- **功能**：接受对方的邀请失败

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | string  | 邀请ID  |
| sdkErr  | int  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
| cookie  | string  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h2 id=rejectInviteSuccess>void rejectInviteSuccess(const string &inviteID, const string &cookie)</h2>

- **功能**：拒绝对方的邀请成功

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | string  | 邀请ID  |
| cookie  | string  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h2 id=rejectInviteFail>void rejectInviteFail(const string &inviteID, int sdkErr, const string &cookie)</h2>

- **功能**：拒绝对方的邀请失败

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | string  | 邀请ID  |
| sdkErr  | int  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
| cookie  | string  | 详细介绍见[关键词](KeyWords.md#cookie)  |

<h2 id=notifyInviteIn>void notifyInviteIn(const string &inviteID, const string &inviterUsrID, const string &usrExtDat)</h2>

- **功能**：通知有人邀请

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | string  | 邀请ID  |
| inviterUsrID  | string  | 邀请者用户ID  |
| usrExtDat  | string  | 用户扩展数据  |

<h2 id=notifyInviteAccepted>void notifyInviteAccepted(const string &inviteID, const string &usrExtDat)</h2>

- **功能**：通知邀请被接受

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | string  | 邀请ID  |
| usrExtDat  | string  | 用户扩展数据  |

<h2 id=notifyInviteRejected>void notifyInviteRejected(const string &inviteID, int reason, const string &usrExtDat)</h2>

- **功能**：通知邀请被拒绝

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | string  | 邀请ID  |
| reason  | int  | 邀请被拒绝原因，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
| usrExtDat  | string  | 用户扩展数据  |

<h2 id=notifyInviteCanceled>void notifyInviteCanceled(const string &inviteID, int reason, const string &usrExtDat)</h2>

- **功能**：通知邀请被取消

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| inviteID  | string  | 邀请ID  |
| reason  | int  | 邀请被取消原因，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
| usrExtDat  | string  | 用户扩展数据  |

<h2 id=getVideoWallMode2>int getVideoWallMode2()</h2>

- **功能**: 获取视频墙当前分屏模式

- **返回值**:分屏模式(业务层自由定义)


<h2 id=setVideoWallMode2>void setVideoWallMode2(int videoWallMode)</h2>

- **功能**: 设置视频墙分屏模式

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|videoWallMode|	int	|分屏模式(业务层自由定义)|


<h2 id=getVideoCfg>string getVideoCfg()</h2>

- **功能**: 获取视频参数

- **返回值**:获取视频参数，可参考（[VideoCfgObj](TypeDefinitions.md#CRVideo_VideoCfg)）


<h2 id=setVideoCfg>bool setVideoCfg(string cfg)</h2>

- **功能**: 视频设置

- **返回值**: 设置成功与否，true/false

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|cfg|	[VideoCfgObj](TypeDefinitions.md#CRVideo_VideoCfg)|	设置参数|


<h2 id=getVideoStatus>int getVideoStatus(string userID)</h2>

- **功能**: 视频状态

- **返回值**:麦克风摄像头状态，可参考 [CRVideo_VSTATUS](Constant.md#CRVIDEOSDK_VSTATUS)

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|userID	|string|	用户ID|


<h2 id=getDefaultVideo>int getDefaultVideo(string userID)</h2>

- **功能**: 获取默认摄像头ID

- **返回值**:返回摄像头ID （int）

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|userID	 |string	|用户ID|


<h2 id=setScaleType>void setScaleType(int scaleType)</h2>

- **功能**: 设置图像显示模式

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|scaleType	 |int	| <p>0: 等比例缩放留空居中显示</p>  <p>1: 等比例缩放裁剪铺满显示； </p> <p>2: 不等比例缩放铺满显示（可能导致图像拉伸） </p>|



<h2 id=setDefaultVideo>void setDefaultVideo(string userID, int videoID)</h2>

- **功能**: 设置默认摄像头

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|userID	| string| 	用户ID|
| videoID	| int| 	摄像头ID|

- **补充说明**:

1. 如果用户只有一个摄像头，可以不设置默认摄像头；</br>
1. 如果用户有多个摄像头并且没有开启多摄头功能，需要把这个设置为默认摄像头；</br>
1. 如果用户有多个摄像头并且开启多摄头功能，可以不设置默认摄像头，[打开摄像头](#openVideo)时会全部打开；</br>

<h2 id=getSupportMaxScreenWidth>int supportMaxScreenWidth</h2>

- **功能**: 获取当前最大支持宽


<h2 id=getSupportMaxScreenHeight>int supportMaxScreenHeight</h2>

- **功能**: 获取当前最大支持高



<h2 id=getAllVideoInfo>string getAllVideoInfo(const string &userID )</h2>

- **功能**: 获取用户的所有摄像头信息

- **返回值**:用户的所有摄像头信息列表，数据类型为：videoInfoObj的json格式（[VideoInfosObj](TypeDefinitions.md#CRVideo_VideoInfosObj)）

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| userID |	string |	用户ID |


- **补充说明**:

1. 当系统上有设备插拨时，sdk会发出[videoDevChanged](#videoDevChanged), 可通过getAllVideoInfo获取到新设备</br>
1. 本地进入房间成功后可getAllVideoInfo查询本地设备，但可能本地设备暂时未获取到，在获取到所有设备后会有[videoDevChanged](#videoDevChanged)通知</br>

<h2 id=setVideoEffects>void setVideoEffects(string effects)</h2>

- **功能**: 视频效果配置

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|effects|	string|	json字符串，请参考 [VideoEffectsObj](TypeDefinitions.md#CRVideo_VideoEffectsObj)|


<h2 id=getVideoEffects>string getVideoEffects()</h2>

- **功能**: 获取视频效果配置

- **返回值**:json字符串，请参考 [VideoEffectsObj](TypeDefinitions.md#CRVideo_VideoEffectsObj)


<h2 id=createScreenCamDev>int createScreenCamDev(string camName,int monitor)</h2>

- **功能**: 创建桌面摄像头(sdk最大支持5个)

- **返回值**:>=0添加成功，返回值为videoID(摄像头ID); <0代表添加失败，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|camName|	string|	摄像头名称|
|monitor|	int|	显示器序号，与系统显示编号一致，-1代表主屏。|

- **补充说明**:

1. 添加成功后与本地摄像头处理一致；</br>
1. getAllVideoInfo接口可以识别摄像头类型；</br>
1. 创建时对应monitor不存在时将失败，运行中monitor对应的屏关闭时显示全黑，开启后恢复正常工作；</br>
1. 添加的摄像头将在sdk uninit之前都存在。</br>


<h2 id=updateScreenCamDev>bool updateScreenCamDev(int videoID, int monitor)</h2>

- **功能**: 更新桌面摄像头

- **返回值**:false失败, true成功 (bool)

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|videoID|	int|	摄像头id|
|monitor|	int|	显示器序号，与系统显示编号一致，-1代表主屏。(monitorID不存在时将失败）|


<h2 id=destroyScreenCamDev>void destroyScreenCamDev(int videoID)</h2>

- **功能**: 消毁桌面摄像头

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|videoID|	int|	摄像头id|


<h2 id=createCustomVideoDev>int createCustomVideoDev(string camName, VIDEO_FORMAT pixFmt, int width, int height,string extParams)</h2>

- **功能**: 创建自定义摄像头(sdk最大支持5个)

- **返回值**:>=0添加成功，返回值为videoID(摄像头ID); <0代表添加失败，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|camName|	string|	摄像头名称|
|pixFmt|	VIDEO_FORMAT|	参见 [VIDEO_FORMAT](Constant.md#CRVIDEOSDK_VIDEO_FORMAT)定义|
|width|	int|	图像宽度|
|height|	int|	图像高度|
|extParams|	string|	扩展参数，没有为空|

- **补充说明**:

1. 添加成功后与本地摄像头处理一致；</br>
1. getAllVideoInfo接口可以识别摄像头类型。</br>
1. 添加的摄像头将在sdk uninit之前都存在。</br>


<h2 id=destroyCustomVideoDev>void destroyCustomVideoDev(int videoID)</h2>

- **功能**: 消毁自定义摄像头

- **返回值**: 无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|videoID| int|	摄像头id (createCustomVideoDev返回值)|


<h2 id=inputCustomVideoDat>void inputCustomVideoDat(int videoID,string base64Dat, int timeStamp)</h2>

- **功能**: 输入摄像头图像数据

- **返回值**: 无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|videoID| int|	摄像头id|
|base64Dat| string|	图像数据，base64编码。（请保证格式、和尺寸与摄像头匹配） |
|timeStamp| int|	时间戳 |


<h2 id=inputCustomVideoDat2>void inputCustomVideoDat2(int devID, SAFEARRAY(BYTE) data, int timeStamp)</h2>

- **功能**: 输入摄像头图像数据

- **返回值**: 无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|devID|	int |	摄像头ID|
|data| SAFEARRAY(BYTE)|图像数据（请保证格式、和尺寸与摄像头匹配） |
|timeStamp|	int|	时间戳|


<h2 id=getWatchableVideos>string getWatchableVideos()</h2>

- **功能**: 房间内可观看摄像头列表

- **返回值**: 房间内可观看摄像头列表的json字符串，请参考 [VideoIDObjs](TypeDefinitions.md#CRVideo_VideoIDObjs)

- **补充说明**:

只有摄像头打开才能被获取到，能获取到自已的和房间里其他人的


<h2 id=setCustomWatchVideos>void setCustomWatchVideos(string videos)</h2>

- **功能**: 自定义观看摄像头

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|videos	|string	| 要观看的摄像头列表，json格式: [VideoIDObjs](TypeDefinitions.md#CRVideo_VideoIDObjs)|

- **补充说明**:

1. 配置观看的摄像头后，就会触发视频流传输；（所以只传需要观看摄像头）</br>
1. 每次调用都需要传“全集”，不在观看列表的，将认为是取消观看；（将自动停止视频流的传输）</br>
1. 此功能与VideoUI控件冲突，所以请不要混用；</br>

<h2 id=openVideo>void openVideo(string userID)</h2>

- **功能**: 打开用户的摄像头

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|userID	|string	|用户的ID|

- **补充说明**:

1. 打开用户的摄像头，以便本地、远端显示视频图像</br>
1. 打开多个摄像头，参见[启用多摄像头](#setEnableMutiVideo)</br>


<h2 id=closeVideo>void closeVideo(string userID)</h2>

- **功能**: 关闭用户的摄像头

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|userID |	string	|用户ID|

<h2 id=setEnableMutiVideo>void setEnableMutiVideo(string userID,bool enable)</h2>

- **功能**: 设置用户是否启用多摄像头

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|userID	| string| 	用户ID  (当前只能配置自已）|
| enable	| bool| 1表示开启（将启用本地所有摄像头），0表示关闭（只启用默认摄像头，[setDefaultVideo](#setDefaultVideo)）|

- **补充说明**:

如果只想开启某几个摄像头（不是所有）， 那么需要：setEnableMutiVideo(myUserID, true), 然后调用[setLocVideoAttributes](#setLocVideoAttributes)将不需要的摄像头disable掉。

<h2 id=getEnableMutiVideo>int getEnableMutiVideo(string userID)</h2>

- **功能**: 获取是否启用多摄像头

- **返回值**:用户是否多摄像头（bool）

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|userID	 |string	|用户ID(当前仅支持查询自已）|


<h2 id=getVideoImg>string getVideoImg()</h2>

- **功能**: 摄像头图像数据

- **返回值**:返回frame视频数据，可参考 [VideoImgObj](TypeDefinitions.md#CRVideo_VideoImgObj)

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|userID	|string|	用户ID|
|videoID|	int	|设备id|

<h2 id=getVideoImg2>bool getVideoImg2(string userID, int videoID, [in,out] int* pixFormat, [in,out] int* w, [in,out] int* h, [out] int* pts, [out] SAFEARRAY(BYTE)* dat)</h2>

- **功能**: 摄像头图像数据

- **返回值**:返回成功/失败， 视频图像数据从[out]参数中获取

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|userID	|string|	用户ID|
|videoID|	int	|设备id|
|pixFormat|	[in,out] int*	|图像格式[CRVIDEOSDK_VIDEO_FORMAT](Constant.md#CRVIDEOSDK_VIDEO_FORMAT), 传入-1代表获取原始格式，传入有效格式，将按目标格式转换|
|w|	[in,out] int*	|图像的宽度, 传入-1代表按原始宽度，否则按目标尺寸缩小（不支持放大，将按原始大小返回）|
|h|	[in,out] int*	|图像的高度, 传入-1代表按原始高度，否则按目标尺寸缩小（不支持放大，将按原始大小返回）|
|pts|	[out] pts*	|图像的时戳|
|dat|	[out] SAFEARRAY(BYTE)*	|图像数据|

Qt使用方法：
```cpp
 	QList<QVariant> params;
 	params.push_back(g_strUserID);
 	params.push_back(-1); //默认摄像头
 	params.push_back(-1); //原始格式
 	params.push_back(-1); //原始w
 	params.push_back(-1); //原始h
 	params.push_back(-1); //pts
 	params.push_back(QByteArray()); //dat
 	QVariant vRslt = VideoSDK.dynamicCall("getVideoImg2(const QString&, int, int&, int&, int&, int&, QByteArray&)", params);
 	if (!vRslt.toBool())
 		return;

	//获取到返回数据
 	int fmt = params[2].toInt();
 	int w = params[3].toInt();
 	int h = params[4].toInt();
 	QByteArray dat = params[6].toByteArray();
```

c#使用方法：
```c#
	int pixFormat, w, h, pts;
	pixFormat = w = h = pts = -1;
	Array dat = Array.CreateInstance(typeof(Byte), 0);
	bool rslt = VideoSDK.getVideoImg2(mUserID, -1, ref pixFormat, ref w, ref h, ref pts, ref dat);
```


<h2 id=showVideoAdvCfgDlg>bool showVideoAdvCfgDlg(int videoID, int hParenWnd)</h2>

- **功能**: 调出摄像头驱动的高级配置（只对真实物理摄像头有效）

- **返回值**:true/false

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|videoID	|int|	摄像头id|
|hParenWnd	|int|	高级配置界面的父窗口, 没有特别需求传0即可|


<h2 id=setLocVideoAttributes>void setLocVideoAttributes(string videoID, string jsonAttributes)</h2>

- **功能**: 视频设备私有参数配置

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|videoID	|string	|本地摄像头id|
|jsonAttributes|string |详见[VideoAttributesObj](TypeDefinitions.md#VideoAttributesObj)|

- **补充说明**:

未设置的参数，使用全局参数


<h2 id=getLocVideoAttributes>string getLocVideoAttributes(string videoID)</h2>

- **功能**: 获取某个摄像头私有参数

- **返回值**:私有参数, json格式，详见（[VideoAttributesObj](TypeDefinitions.md#VideoAttributesObj)）

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|videoID	|string	|本地摄像头id|


<h2 id=addIPCam>int addIPCam(string url)</h2>
<h2 id=addIPCam>int addIPCam2(string url, string param)</h2>

- **功能**: 添加网络摄像头（sdk最大支持5个）

- **返回值**:>=0添加成功，返回值为videoID(摄像头ID); <0代表添加失败，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|url|	string|	网络摄像头url，支持协议:rtmp,rtsp|
|param|	string|	扩展参数，json格式， 支持参数：</br>name: 摄像头名称，不配置则为url</br>maxRetry：连接失败或中断连时重试连接次数，<0代表无限重试，默认值-1|

- **补充说明**:

1. 添加成功后与本地摄像头处理一致；[getAllVideoInfo](#getAllVideoInfo)接口可以识别哪些是网络摄像头。</br>
1. 添加的摄像头将在sdk uninit之前都存在。</br>


<h2 id=delIPCam>void delIPCam(string url)</h2>

- **功能**: 移除网络摄像头

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|url|	string|	网络摄像头url，支持协议:rtmp,rtsp|


<h2 id=bSupportVirtualBackground>void bSupportVirtualBackground(int type)</h2>

- **功能**: 检查是否支持虚拟背景功能

- **返回值**: true:支持，false:不支持

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|type|	int|检查是否支持type类型虚拟背景，取值参见：[VIRTUALBK_TYPE](Constant.md#VIRTUALBK_TYPE)|


<h2 id=setVirtualBackground>bool setVirtualBackground(string cfg)</h2>

- **功能**: 配置虚拟背景参数

- **返回值**: true:成功，false:失败

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|cfg| string |配置虚拟背景参数，json格式，参见：[VirtualBkCfg](TypeDefinitions.md#VirtualBkCfg)|


<h2 id=getVirtualBackground>string getVirtualBackground()</h2>

- **功能**: 获取虚拟背景参数

- **返回值**: json格式，参见：[VirtualBkCfg](TypeDefinitions.md#VirtualBkCfg)


<h2 id=videoDevChanged>void videoDevChanged(const string &userID)</h2>

- **功能**：SDK通知用户的视频设备有变化

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| userID |	string |	设备变化的用户ID |


<h2 id=videoStatusChanged>void videoStatusChanged(const string &userID, int oldStatus, int newStatus)</h2>


- **功能**：SDK通知打开本地视频状态变化

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| userID |	string |	房间中设备的所有者ID |
| oldStatus |	int |	旧状态|
| newStatus  | int  | 新状态  |




<h2 id=switchToPage>void switchToPage(int mainPage, string pageID)</h2>

- **功能**: 功能切换

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|mainPage |	int |	功能页类型[MAIN_PAGE_TYPE](Constant.md#CRVIDEOSDK_MAIN_PAGE_TYPE) |
|pageID |	string |	子页面标识（如创建白板时返回的boardID）|


<h2 id=getCurrentMainPage>int getCurrentMainPage()</h2>

- **功能**: 获取当前主功能页

- **返回值**:功能页([MAIN_PAGE_TYPE](Constant.md#CRVIDEOSDK_MAIN_PAGE_TYPE))


<h2 id=getCurrentSubPage>string getCurrentSubPage()</h2>

- **功能**: 获取当前子页面

- **返回值**:返回pageID(如：创建白板时返回的boardID）


<h2 id=getMainVideo>string mainVideo</h2>

- **功能**: 设置或者获取当前哪个用户为主视频




<h2 id=setDNDStatus>void setDNDStatus(int DNDStatus, string cookie)</h2>

- **功能**: 设置免打扰状态

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|DNDStatus	 |int |	0代表关闭免打扰， 其它值代表开启免打扰，含义自由定义 |
|cookie |	string |	自定义数据 （在回调时，回传给调用者）|

- **补充说明**:

1. 操作成功则回调[setDNDStatusSuccess](#setDNDStatusSuccess)，失败则回调[setDNDStatusFailed](#setDNDStatusFail)</br>
1. 开启免打扰后，他人呼叫本人时，系统自动回绝呼叫，原因为CRVIDEOSDK_ERR_BUSY</br>
1. 开启免打扰后，系统将不再自动为座席分配客户[autoAssignUser](#autoAssignUser)，座席可以调用[reqAssignUser](#reqAssignUser)来手动分配客户（叫号模式）</br>


<h2 id=getUserStatus>void getUserStatus(string cookie)</h2>

- **功能**: 获取项目下所有用户在线状态

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|cookie	 |string	|自定义数据（在回调时，回传给调用者，不需要时传空字符串）|

>操作成功则回调[getUserStatusSuccess](#getUserStatusSuccess)，失败则回调[getUserStatusFail](#getUserStatusFail)


<h2 id=getOneUserStatus>void getOneUserStatus(string usrID, string cookie)</h2>

- **功能**: 获取项目下指定用户的在线状态

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|usrID	 |string	|用户ID|
|cookie	 |string	|自定义数据（在回调时，回传给调用者，不需要时传空字符串）|

- **补充说明**:

1. 成功则回调[getUserStatusSuccess](#getUserStatusSuccess)</br>
1. 失败则回调[getUserStatusFail](#getUserStatusFail)</br>


<h2 id=startUserStatusNotify>void startUserStatusNotify(string cookie)</h2>

- **功能**: 开启用户的状态推送

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|cookie |	string |自定义数据（在回调时，回传给调用者，不需要时传空字符串）|

- **补充说明**:

1. 回调函数： [startUserStatusNotifyRslt](#startUserStatusNotifyRslt)</br>
1. 项目下所有用户状态有变化时包括呼叫房间状态、免打扰状态），都会收到通知开启后，用户量越大消息量越大，所以请按需开启在[startUserStatusNotify](#startUserStatusNotify)前，应该先通过[getUserStatus](#getUserStatus)获取所有用户状态</br>


<h2 id=stopUserStatusNotify>void stopUserStatusNotify(string cookie)</h2>

- **功能**: 关闭用户的状态推送

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|cookie	|string|	自定义数据（在回调时，回传给调用者，不需要时传空字符串） |

- **补充说明**:

回调函数： [stopUserStatusNotifyRslt](#stopUserStatusNotifyRslt)

<h2 id=createMeeting2>void createMeeting2(string params, string cookie)</h2>

- **功能**: 创建房间

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|params	|string	|保留参数|

- **补充说明**:

1. 成功则回调[createMeetingSuccess](#createMeetingSuccess)</br>
1. 失败则回调[createMeetingFail](#createMeetingFail)</br>


<h2 id=destroyMeeting>void destroyMeeting(string meetID, string cookie)</h2>

- **功能**: 销毁房间

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|meetID	|int	|房间id|
|cookie	|string|	详细介绍见[关键词](KeyWords.md#cookie)|

- **补充说明**:

1. 销毁结果:[destroyMeetingRslt](#destroyMeetingRslt)</br>
1. 房间被销毁后，房间中的其他人将收到:[meetingStopped](#meetingStopped)</br>


<h2 id=setNickNameRsp>void setNickNameRsp(int err, const string &userid, const string &newname)</h2>

- **功能**：SDK通知设置房间成员昵称的结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  sdkErr |  int | 操作结果码, 0代表设置成功, 非0代表设置失败  |
| userid  | string  |用户id  |
| newname  | string  | 新的昵称 |


<h2 id=notifyNickNameChanged>void notifyNickNameChanged(const string &userid, const string &oldname, const string &newname)</h2>

- **功能**：SDK通知某用户改变了昵称(改昵称的用户自身不会接收到此通知)

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  userid |  string | 用户id  |
| oldname  | string  |当前的昵称  |
| newname  | string  | 新的昵称 |


<h2 id=notifyVideoWallMode2>void notifyVideoWallMode2(int model)</h2>

- **功能**：SDK通知视频分屏模式切换

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|model	|int|	分屏模式|


<h2 id=notifyMainVideoChanged>void notifyMainVideoChanged()</h2>

- **功能**：SDK通知主视频更改


<h2 id=notifySwitchToPage>void notifySwitchToPage(int mainPage, const string &subPageID)</h2>

- **功能**：SDK通知功能切换

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|mainPage	|int|	功能类型|
|pageID	|	string|子页面标识|


<h2 id=defVideoChanged>void defVideoChanged(const string &userID, int videoID)</h2>

- **功能**：SDK通知用户的视频默认设备有变化

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|userID	|string|	用户id,， 命名规则 详见[关键词](KeyWords.md#userID)|
|videoID	|int	|默认设备id|


<h2 id=netStateChanged>void netStateChanged(int level)</h2>

- **功能**：SDK通知我的网络变化

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  level | int  |网络状况等级（0~10，10分为最佳网络）  |


<h2 id=mousePressed>void mousePressed(int btnType, int x, int y, int keyboardModifiers)</h2>

- **功能**：SDK通知鼠标按下

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  btnType | int  | [按键类型](Constant.md#CRVIDEOSDK_BtnModifiers) |
|  x | int  |  鼠标位置x |
| y  | int  |  鼠标位置y |
|  keyboardModifiers | int  |辅助键值  |


<h2 id=mouseReleased>void mouseReleased(int btnType, int x, int y, int keyboardModifiers)</h2>

- **功能**：SDK通知鼠标释放

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  btnType | int  | [按键类型](Constant.md#CRVIDEOSDK_BtnModifiers) |
|  x | int  |  鼠标位置x |
| y  | int  |  鼠标位置y |
|  keyboardModifiers | int  | 辅助键值 |


<h2 id=mouseDoubleClicked>void mouseDoubleClicked(int btnType, int x, int y, int keyboardModifiers)</h2>

- **功能**：SDK通知鼠标双击

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  btnType | int  | [按键类型](Constant.md#CRVIDEOSDK_BtnModifiers)  |
|  x | int  |  鼠标位置x |
| y  | int  |  鼠标位置y |
|  keyboardModifiers | int  | 辅助键值 |


<h2 id=toolButtonClicked>void toolButtonClicked(int id)</h2>

- **功能**：SDK通知鼠标点击到文件条目索引

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  id | int  | 文件条目索引 |


<h2 id=enterMeeting>void enterMeeting3(int meetID)</h2>

- **功能**: 进入房间

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|meetID|	int|	房间ID|

- **补充说明**:

1. 进入房间结果：[enterMeetingRslt](#enterMeetingRslt)
1. 进入房间成功时，房间中其他人员将收到通知：[userEnter](#userEnter)


<h2 id=exitMeeting>void exitMeeting()</h2>

- **功能**: 离开房间

- **返回值**:无

- **补充说明**:

1. 离开房间后，不会再收房间中任何消息；</br>
1. 房间中的其他人将收到[userLeftMeeting](#userLeftMeeting)</br>


<h2 id=kickout>void kickout(string userId)</h2>

- **功能**:把某个参会者请出房间

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|userId|    string  |用户id|

- **补充说明**:

1. 请出房间结果：[kickoutRslt](#kickoutRslt)</br>
1. 被请出人将收到通知：[meetingDropped](#meetingDropped)</br>
1. 房间中剩余人员将收到：[userLeftMeeting](#userLeftMeeting)</br>


<h2 id=enterMeetingRslt>void enterMeetingRslt(int sdkErr)</h2>

- **功能**：进入房间完成响应

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  sdkErr | int  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |


<h2 id=kickoutRslt>void kickoutRslt(int sdkErr， string userID)</h2>

- **功能**：踢人结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  sdkErr | int  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
|  userID | string  | 被踢人UserID |


<h2 id=userEnterMeeting>void userEnterMeeting(const string &userID)</h2>

- **功能**某用户进入了房间


<h2 id=userLeftMeeting>void userLeftMeeting(const string &userID)</h2>

- **功能**：某用户离开了房间


<h2 id=meetingDropped>void meetingDropped(int reason)</h2>

- **功能**：与房间的连接断开通知

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  reason | int  | 断线原因，定义见[MEETING_DROPPED_REASON](Constant.md#CRVIDEOSDK_MEETING_DROPPED_REASON)  |

- **补充说明**:

1. meetingDropped通知，只有自已能收到；</br>
1. 房间内其他人，将收到通知：[userLeftMeeting](#userLeftMeeting)</br>



<h2 id=meetingStopped>void meetingStopped()</h2>

- **功能**：房间已被结束

- **补充说明**:

他人离开房间的回调事件[userLeftMeeting](#userLeftMeeting)


<h2 id=setDNDStatusSuccess>void setDNDStatusSuccess(const string &cookie)</h2>

- **功能**：客户端设置免打扰状态操作成功响应

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  cookie | string  |  详细介绍见[关键词](KeyWords.md#cookie) |


<h2 id=setDNDStatusFail>void setDNDStatusFail(int sdkErr, const string &cookie)</h2>

- **功能**：客户端设置免打扰状态操作失败响应

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  sdkErr | int  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
|  cookie | string  |  详细介绍见[关键词](KeyWords.md#cookie) |


<h2 id=getUserStatusSuccess>void getUserStatusSuccess(const string &usersStatus, const string &cookie)</h2>

- **功能**：客获取所有用户在线状态成功响应

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  usersStatus | string  | 用户在线状态信息列表，userID:用户id，userStatus:用户的在线状态(0离线 ；1在线空闲 ；2在线忙碌；3在线房间中)，DNDType：用户免打扰状态（0代表关闭免打扰，其它值代表开启免打扰）  |
|  cookie | string  |  详细介绍见[关键词](KeyWords.md#cookie) |


<h2 id=getUserStatusFail>void getUserStatusFail(int sdkErr, const string &cookie)</h2>

- **功能**：获取所有用户在线状态失败响应

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  sdkErr | int  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
|  cookie | string  |  详细介绍见[关键词](KeyWords.md#cookie) |


<h2 id=startUserStatusNotifyRslt>void startUserStatusNotifyRslt(int sdkErr, const string &cookie)</h2>

- **功能**：启动用户状态推送响应

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  sdkErr | int  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
|  cookie | string  |  详细介绍见[关键词](KeyWords.md#cookie) |



<h2 id=stopUserStatusNotifyRslt>void stopUserStatusNotifyRslt(int sdkErr, const string &cookie)</h2>

- **功能**：结束用户状态推送响应

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  sdkErr | int  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
|  cookie | string  |  详细介绍见[关键词](KeyWords.md#cookie) |


<h2 id=notifyUserStatus>void notifyUserStatus(const string &userStatus)</h2>

- **功能**：某个用户状态变化通知

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  userStatus | string  | 用户的在线状态(0离线 ；1在线空闲 ；2在线忙碌；3在线房间中) |


<h2 id=lineOff>void lineOff(int sdkErr)</h2>

- **功能**：SDK通知自己掉线

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  sdkErr | int  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |


<h2 id=notifyTokenWillExpire>void notifyTokenWillExpire()</h2>

- **功能**：通知Token即将失效,有效时间剩余30s左右(可调用[updateToken](#updateToken)更新Token)

<h2 id=createMeetingSuccess>void createMeetingSuccess(const string &meetObj, const string &cookie)</h2>

- **功能**：创建房间成功响应

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  meetObj | string  | [房间对象](TypeDefinitions.md#CRVideo_MeetInfoObj)  |
|  cookie | string  |  详细介绍见[关键词](KeyWords.md#cookie) |


<h2 id=createMeetingFail>void createMeetingFailed(int sdkErr, const string &cookie)</h2>

- **功能**：创建房间失败响应

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  sdkErr | int  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
|  cookie | string  |  详细介绍见[关键词](KeyWords.md#cookie) |


<h2 id=destroyMeetingRslt>void destroyMeetingRslt(int sdkErr, const string &cookie)</h2>

- **功能**：销毁房间响应

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  sdkErr | int  | 操作失败代码，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)  |
|  cookie | string  |  详细介绍见[关键词](KeyWords.md#cookie) |


<h2 id=setMediaCfg>void setMediaCfg(string jsonCfg)</h2>

- **功能**: 设置音频配置

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|jsonCfg	|string|	详见[VideoCfgObj](TypeDefinitions.md#CRVideo_VideoCfg)说明|


<h2 id=getMediacfg>string getMediacfg()</h2>

- **功能**: 获取音频参数

- **返回值**:json格式的音频参数,详见[VideoCfgObj](TypeDefinitions.md#CRVideo_VideoCfg)说明


<h2 id=setSpeakerMute>int speakerMute</h2>

- **功能**: 扬声器静音状态


<h2 id=getAudioMicNames>string getAudioMicNames()</h2>

- **功能**: 麦克风设备列表


- **返回值**:返回麦克风设备字符串列表（Array）


<h2 id=getAudioSpkNames>string getAudioSpkNames()</h2>

- **功能**: 扬声器设备列表

- **返回值**:扬声器设备列表（Array）


<h2 id=setAudioCfg>void setAudioCfg(string cfg)</h2>

- **功能**: 设置音频参数


- **返回值**:无

+ **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|cfg | 	[AudioCfgObj](TypeDefinitions.md#CRVideo_AudioCfg)|	音频参数|


<h2 id=getAudioCfg>string getAudioCfg()</h2>

- **功能**: 获取音频参数

- **返回值**:cfg对象（[AudioCfgObj](TypeDefinitions.md#CRVideo_AudioCfg)）


<h2 id=getMicEnergy>int getMicEnergy(string userID)</h2>

- **功能**: 麦克风声音大小

- **返回值**:返回音量（0~10）(int)

+ **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|userID	 |string	|用户的ID|


<h2 id=openMic>void openMic(string userID)</h2>

- **功能**: 打开麦克风


- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|userID	|string	|用户的ID|

- **补充说明**:

1. 所有人将收到麦克风状态改变通知：[audioStatusChanged](#audioStatusChanged)</br>
1. 打开自已的麦克风时，先会进入到AOPENING状态，等服务器处理后才会进入AOPEN状态</br>
1. 当本地麦克风状态变为AOPEN状态时说话才能被采集到</br>
1. 一个房间最大开麦数为8个, 超出的开麦人进保持在AOPENING状态， 即使有人关麦，AOPENING状态的麦也不会自动打开</br>

<h2 id=closeMic>void closeMic(string userID)</h2>

- **功能**: 关闭麦克风

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|userID |	string	|用户的ID|

- **补充说明**:

1. 关麦操作是立即生效的，本地会立即停止采集;
1. 麦克风状态改变通知：[audioStatusChanged](#audioStatusChanged)</br>


<h2 id=getAudioStatus>int getAudioStatus(string userID)</h2>

- **功能**: 麦克风状态

- **返回值**:返回麦克风状态([ASTATUS](Constant.md#CRVIDEOSDK_ASTATUS))

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|userID	 |string	|用户的ID|


<h2 id=getMicVolume>int micVolume</h2>

- **功能**: 设置或者获取麦克风音量，取值：0~255


<h2 id=getSpeakerVolume>int speakerVolume</h2>

- **功能**: 获取或者设置扬声器音量，取值：0~255


<h2 id=setAllAudioClose>void setAllAudioClose()</h2>

- **功能**: 关闭所有人麦克风

- **返回值**:无


<h2 id=audioDevChanged>void audioDevChanged()</h2>

- **功能**：通知本地音频设备有变化


<h2 id=audioStatusChanged>void audioStatusChanged(const string &userID, int oldStatus, int newStatus)</h2>


- **功能**：通知本地音频状态变化

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| userID  |  string | 用户ID |
| oldStatus  |  int | 音频旧状态，参考麦克风状态[ASTATUS](Constant.md#CRVIDEOSDK_ASTATUS)  |
| newStatus  | int  | 音频新状态，参考麦克风状态[ASTATUS](Constant.md#CRVIDEOSDK_ASTATUS)  |


<h2 id=micEnergyUpdate>void micEnergyUpdate(const string& userID, int oldLevel, int newLevel)</h2>

- **功能**：通知用户的说话声音强度更新

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| userID  | string  |  用户ID |
|  oldLevel  |  int |  原来的说话声音强度 |
| newLevel  |  int | 现在的说话声音强度  |


<h2 id=openVideoDevRslt>void openVideoDevRslt(int videoID, bool isSucceed)</h2>

- **功能**：打开摄像头结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  videoID  |  int |  摄像头索引 |
| isSucceed  |  int | 是否成功  |


<h2 id=startPlayMedia>int startPlayMedia(string filename, int locPlay, int bPauseWhenFinished)</h2>

- **功能**: 开始播放影音

- **返回值**:返回值 整形数值，1：正常，0：失败(int)

| 参数    | 类型        | 含义       |
|:-------- |:-----------|:----------|
|filename	| string| 	媒体文件名（本地全路径文件名，或网络流媒体，支持的协议有：http, rtmp, rtsp)|
| locPlay	| int| 	是否仅仅本地播放（1：本地播放，0：房间内播放）|
| bPauseWhenFinished| 	int	| 是否播放完毕后暂停在最后一帧(1：暂停, 0:不暂停按停止处理)|


<h2 id=getMediaVolume>int mediaVolume</h2>

- **功能**: 设置或者获取影音音量


<h2 id=pausePlayMedia>void pausePlayMedia(bool bPause)</h2>

- **功能**: 暂停或恢复播放影音

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|bPause	|bool	|ture为暂停，false为恢复|


<h2 id=stopPlayMedia>void stopPlayMedia()</h2>

- **功能**: 停止播放影音

- **返回值**:无


<h2 id=setMediaplaypos>void setMediaplaypos(int pos)</h2>

- **功能**: 设置播放进度

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|pos	|int	|设置播放位置，单位：毫秒|


<h2 id=getmediainfo>string getmediainfo(string param)</h2>

- **功能**: 影音播放信息

- **返回值**:影音文件信息（[MediaInfoObj](TypeDefinitions.md#CRVideo_MediaInfoObj)）

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|param	 |string	|保留参数，传空|


<h2 id=getmediaimg>string getmediaimg(string param)</h2>

- **功能**: 获取影音图像数据

- **返回值**:帧信息([videoImgObj](TypeDefinitions.md#CRVideo_VideoImgObj))

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|param	 |string	|保留参数，传空|

<h2 id=getmediaimg2>bool getmediaimg2(string param, [in,out] int* pixFormat, [in,out] int* w, [in,out] int* h, [out] int* pts, [out] SAFEARRAY(BYTE)* dat)</h2>

- **功能**: 获取影音图像数据

- **返回值**:获取成功/失败，图像数据从[out]参数中获取

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|param	|string|保留参数，传空|
|pixFormat|	[in,out] int*	|图像格式[CRVIDEOSDK_VIDEO_FORMAT](Constant.md#CRVIDEOSDK_VIDEO_FORMAT), 传入-1代表获取原始格式，传入有效格式，将按目标格式转换|
|w|	[in,out] int*	|图像的宽度, 传入-1代表按原始宽度，否则按目标尺寸缩小（不支持放大，将按原始大小返回）|
|h|	[in,out] int*	|图像的高度, 传入-1代表按原始高度，否则按目标尺寸缩小（不支持放大，将按原始大小返回）|
|pts|	[out] pts*	|图像的时戳|
|dat|	[out] SAFEARRAY(BYTE)*	|图像数据|

- **补充说明**:

使用方法，参见[getVideoImg2](#getVideoImg2)

<h2 id=startGetAudioPCM>int startGetAudioPCM(int aSide, int getType, string jsonParam)</h2>

- **功能**: 开始获取语音pcm数据

- **返回值**:返回值 整形数值，1：正常，0：失败(int)

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|aSide|	int|	声道类型 0:麦克风，1:扬声器|
|getType	|int|	获取方式 0:回调方式，1:保存为文件|
|jsonParam	|string	|当getType=0 表示回调方式，jsonParam可配置回调的数据大小(320-32000)，如: {"EachSize":320};当getType=1 表示保存为文件，jsonParam可配置文件名，如: { "FileName" ： "e:\\test.pcm" }|

- **补充说明**:
1. getType为0时，回调事件请参见[notifyAudioPCMDat](#notifyAudioPCMDat)</br>
1. pcm数据为：16khz采样率, 16bit采样宽度</br>


<h2 id=stopGetAudioPCM>void stopGetAudioPCM(int aSide)</h2>

- **功能**: 停止获取语音pcm数据

- **返回值**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|aSide	| int| 	声道类型 0:麦克风，1:扬声器|


<h2 id=setCustomAudioCapture>int setCustomAudioCapture(bool enable, string param)</h2>

- **功能**: 自定义音频采集

- **返回值**:操作结果，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|enable	| bool| 是否开启自定义音频采集, 开启后将不再从系统麦克风采集数据，而由业务代码定期调用pushCustomAudioDat来送入pcm数据|
|param	| string| 可选扩展参数，json格式，当前支持参数：</br>"fromIPCam":摄像头ID, 配置后将不再需要pushCustomAudioDat，sdk自动从IPCam中获取音频|

- **补充说明**:

1. 如果开启从网络摄像头采集麦克风数据时， 请确保对应的摄像头被打开，否则将采集不到声音；</br>


<h2 id=pushCustomAudioDat>int pushCustomAudioDat(string pcmBase64, int64 ts)</h2>
<h2 id=pushCustomAudioDat>int pushCustomAudioDat2(SAFEARRAY(BYTE) pcm, int64 ts)</h2>

- **功能**: 向sdk送入采集到的pcm数据

- **返回值**:操作结果，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|pcmBase64	| string| pcm数据，base64编码，数据要求参见：pcm|
|pcm	| SAFEARRAY(BYTE)| pcm数据，采样频率应为：16khz, 采样位数应为：16bit，打包时长应为10ms|
|ts	| int64| 每帧pcm数据的时戳，精度为ms|


<h2 id=setCustomAudioPlayback>int setCustomAudioPlayback(bool enable, string param)</h2>

- **功能**: 自定义音频播放

- **返回值**:操作结果，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|enable	| bool| 是否开启自定义音频播放, 开启后本地将不再播放声音|
|param	| string| 保留参数|

- **补充说明**:

1. 开启自定义音频播放后，请定期调用pullCustomAudioDat来获取音频数据；</br>


<h2 id=pullCustomAudioDat>int pullCustomAudioDat([out] string *pcmBase64, [out] int64 *ts)</h2>
<h2 id=pullCustomAudioDat>int pullCustomAudioDat([out] SAFEARRAY(BYTE) *pcm, [out] int64 *ts)</h2>

- **功能**: 从sdk获取要播放的pcm数据

- **返回值**: 操作结果，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|pcmBase64	| [in,out] string *| pcm数据，base64编码，数据说明参见：pcm|
|pcm	|[out] SAFEARRAY(BYTE) *| pcm数据，采样频率为：16khz, 采样位数为：16bit，打包时长为10ms|
|ts	| int64| 每帧pcm数据的时戳，精度为ms|


<h2 id=setVoiceChange>void setVoiceChange(string userID, int type)</h2>

- **功能**：设置变声效果

- **返回值**：无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| userID	| string  |  用户ID |
| type	| int  |  变声类型，0-原声(即关闭变声)，1-低沉， 2-尖锐 |


<h2 id=getVoiceChangeType>int getVoiceChangeType(string userID)</h2>

- **功能**：获取变声类型

- **返回值**：变声类型，0-原声(即关闭变声)，1-低沉， 2-尖锐 

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|userID	| string  |  用户ID |

<h2 id=startEchoTest>int startEchoTest()</h2>

- **功能**：开始声音环回测试

- **返回值**：开启结果，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)

- **补充说明**:

1. 声音环回测试时，将听不到其他人的声音，其他人也听不到本端的声音 </br>

<h2 id=stopEchoTest>void stopEchoTest()</h2>

- **功能**：停止声音环回测试

- **返回值**：无


<h2 id=notifyMediaOpened>void notifyMediaOpened(int totalTime, int w, int h)</h2>

- **功能**：SDK通知影音文件打开

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  totalTime | int  | 影音时长（ms）  |
|w   | int  | 宽度  |
|h   | int  | 高度  |


<h2 id=notifyMediaStart>void notifyMediaStart(const string &userid)</h2>

- **功能**：SDK通知影音开始播放

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| userid  | string  |  操作者的用户id |


<h2 id=notifyMediaStop>void notifyMediaStop(const string &userid, int reason)</h2>

- **功能**：SDK通知影音播放停止

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| userid  | string  |  操作者的用户id |
| reason  | int  | 播放停止原因，详见[MEDIA_STOP_REASON](Constant.md#MEDIA_STOP_REASON)  |


<h2 id=notifyMediaPause>void notifyMediaPause(const string &userid, int bPause)</h2>

- **功能**：SDK通知影音播放是否暂停

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| userid  | string  |  操作者的用户id |
|  pause | int  | 是否暂停 1暂停 0播放  |


<h2 id=notifyPlayPosSetted>void notifyPlayPosSetted(int setPos)</h2>

- **功能**：通知播放进度已设置完成

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| setPos  | int  | 播放进度  |


<h2 id=notifyAudioPCMDat>void notifyAudioPCMDat(int aSide, const string &base64PcmDat)</h2>

- **功能**：SDK通知语音PCM数据

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| aSide  | int  |  声道类型 |
|  base64PcmDat | string  | PCM数据（base64格式）  |


<h2 id=notifyAllAudioClose>void notifyAllAudioClose(const string &userID)</h2>

- **功能**：通知全体静音

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  userID | string  | 操作者用户ID  |


<h2 id=notifySetVoiceChange>void notifySetVoiceChange(const string &userID, int type)</h2>

- **功能**：变声状态变化通知

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| userID	| string |用户id	|
| type	| int  |  变声类型，0-原声(即关闭变声)，1-低沉， 2-尖锐  |


<!-- ### 影音共享UI显示组件 {#MediaContainer} -->

<h2 id=creatMediaObj>影音共享UI显示组件</h2>


<h2 id=disableToolBar>void disableToolBar(int bDisable)</h2>

- **功能**：设置工具条是否可用

 - **返回值**:无


 <h2 id=savePicToFile>int savePicToFile(const string &pathFileName)</h2>

 - **功能**：保存当前图像帧到文件

  - **返回值**:保存是否成功

  +  **参数**:

  | 参数    | 类型        | 含义      |
  |:-------- |:-----------|:----------|
  | pathFileName  | string  | 本地绝对路径文件名(支持格式：bmp, png, gif, jpg, jpeg)  |


<h2 id=setDblClickFullScreen>void setDblClickFullScreen(int value)</h2>

- **功能**：设置是否支持双击全屏,默认不支持双击全屏

- **返回值**:无


<h2 >string savePicToBase64(string format)</h2>

- **功能**：保存播放影音画面到图片文件

- **返回值**:保存文件路径


<h2 >string savePicToBase64(string pathFileName)</h2>

-  **功能**：保存播放影音画面到图片文件

-  **返回值**:0成功，非0失败 (int)

+  **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| pathFileName  | string  | 本地绝对路径文件名(支持格式：bmp, png, gif, jpg, jpeg)  |


<h2 id=setToolBarUIElementVisible>void setToolBarUIElementVisible(int UIElement, bool isVisible)</h2>

-  **功能**：显示隐藏播放工具条上的界面元素

-  **返回值**:无

+  **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  UIElement |  int | 界面元素[ToolBarUI](Constant.md#CRVIDEOSDK_ToolBarUI)  |
|  isVisible | bool  | 是否可见  |


<h2 id=setToolBarSize>void setToolBarSize(int size)</h2>

-  **功能**：设置影音工具条的大小

-  **返回值**:无

+  **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  size | int  | 尺寸大小  |


<h2 id=disableChangePlayPos>void disableChangePlayPos(int bDisable)</h2>

-  **功能**：设置禁止调整播放位置

-  **返回值**:无

+  **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  bDisable | int  | 是否禁止  |


<h2 >void  setFullScreen(bool bFullScreen)</h2>

-  **功能**：设置全屏

-  **返回值**:无

+  **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| bFullScreen  | bool  | true ：全屏  |


<h2 >void getFullScreen()</h2>

-  **功能**：获取全屏状态

-  **返回值**:无表示该控件当前是否全屏，true  表示全屏


<!-- ### 屏幕共享UI显示组件 {#ScreenShareContainer} -->

<h2 id=creatScreenShareObj>屏幕共享UI显示组件</h2>

<h2 id=clear>void clear()</h2>

-  **功能**： 清空缓存的图像

-  **返回值**: 无

-  **参数**: 无

<h2 id=propert_ctrlOpen>int ctrlOpen</h2>

-  **功能**： 控制模式开关 

- **补充说明**:

1. 当我拥有控制权限[giveCtrlRight](#giveCtrlRight)并且ctrlOpen为1时，进入控制模式。 本地的鼠标、键盘操作将发送到被控端</br>


<h2 id=disableFloatToolbar>void disableFloatToolbar(bool bDisabled)</h2>

-  **功能**： 是否禁止出现浮动工具

-  **返回值**:无

+  **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| bDisabled  | bool  | true:禁止出现， false：允许出现（缺省值）  |


<h2 id=isCursorInUI>bool isCursorInUI()</h2>

-  **功能**：鼠标是否在屏幕共享显示控件上

-  **返回值**:鼠标是否在控件上，true- 在控件上； false - 不在控件上 （bool）


<h2 >string getCursorPosInRemote()</h2>

-  **功能**：鼠标在本地的屏幕共享UI控件上时，鼠标位置映射到远端的屏幕上的坐标

-  **返回值**:映射到远端的屏幕上的坐标。数据格式：json格式，如：｛"x"=1,"y"=1}


<h2 id=screen_getPicWidth>int getPicWidth()</h2>

-  **功能**：获取远端屏幕的实际宽度

-  **返回值**:远端屏幕的实际宽度（int）


<h2 id=screen_getPicHeight>int getPicHeight()</h2>

-  **功能**：获取远端屏幕的实际高度

-  **返回值**:远端屏幕的实际高度（int）


<h2 >void enableMarked(bool value)</h2>

-  **功能**：开启标注模式

-  **返回值**:无

-  **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| value  | bool  | 0: 不开启, 1:开启  |


<h2 >int isPicEmpty()</h2>

-  **功能**： 检查图像是否为空

-  **返回值**:int

-  **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| value  |  int | 0: 有图像, 1:无图像  |


<h2 >bool savePic(string pathFileName)</h2>

-  **功能**：拍照

-  **返回值**:0:成功； 非0：保存遇到的错误码(bool)

-  **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| pathFileName  | string  | 本地绝对路径文件名(支持格式：bmp, png, gif, jpg, jpeg)  |



<h2 id=CloudroomScreenShareUI_setPenStyle>void setPenStyle(intRgba color, int penType))</h2>

-  **功能**：设置标注画笔样式

-  **返回值**:无

-  **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  intRgba | int  | 颜色，排列方式bgr(8:8:8)  |
| penType  | int  | 画笔类型（1:铅笔, 2:水笔）  |



<h2 >void setFullScreen(bool bFullScreen)</h2>

-  **功能**：设置全屏

-  **返回值**:无

-  **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| bFullScreen  |  bool | true ：全屏  |


<h2 >bool getFullScreen()</h2>

-  **功能**：获取全屏

-  **返回值**:表示该控件当前是否全屏，true  表示全屏


<h2 >void setDblClickFullScreen(bool bVal)</h2>

-  **功能**：配置是否允许双击全屏

-  **返回值**:无

-  **参数**:无

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| bVal  | bool  | true:允许(缺省值)， false：不允许 |


<h2 >bool getDblClickFullScreen()</h2>

-  **功能**：获取是否允许双击全屏

- **返回值**:表示该控件是否允许双击全屏，true 允许， false：不允许


<!-- ### 成员视频UI显示组件 {#VideoContainer} -->

<h2 id=creatVideoObj>成员视频UI显示组件</h2>

<h2 >void clear()</h2>

-  **功能**：清理当前图像


<h2 id=getUserID>string getUserID()</h2>

-  **功能**：获取当前的userID

- **返回值**:当前的userID


<h2 id=getVideoID>string getVideoID()</h2>

-  **功能**：获取当前显示的用户的视频设备

- **返回值**:视频ID (string)


<h2 id=getVisibleNickName>bool visibleNickName</h2>

-  **功能**： 设置或者获取当前是否显示昵称



<h2 id=getIsPicEmpty>int gisPicEmpty</h2>

-  **功能**： 当前是否有图像


<h2 id=hasKeepAspectRatio>int keepAspectRatio</h2>

-  **功能**： 是否保持宽高比例

- **返回值**:bool




<h2 id=isDblClickFullScreen>bool dblClickFullScreen</h2>

-  **功能**： 设置或者获取是否双击全屏


<h2 id=setMaskPic> void setMaskPic(string base64PNG, bool bScaleToFitVideoUI)</h2>

-  **功能**：在视频窗口上显示一个遮罩图片

- **返回值**:无

-  **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  base64PNG | string  | base64格式的png图像数据  |
|  bScaleToFitVideoUI | bool  | true:铺满视频窗口，false:居中显示  |


<h2 id=setMaskPic2> void setMaskPic2(string pngDat, bool bScaleToFitVideoUI)</h2>

-  **功能**：在视频窗口上显示一个遮罩图片

- **返回值**:无

-  **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  pngDat | string  |png图像原始数据  |
|  bScaleToFitVideoUI | bool  | true:铺满视频窗口，false:居中显示  |


<h2 id=isPicEmpty>bool isPicEmpty()</h2>

-  **功能**： 检查图像是否为空

- **返回值**:图像是否为空

<h2 id=getPicFrameTime>int getPicFrameTime()</h2>

-  **功能**： 获取图像时间戳

- **返回值**:当前图像数据对应的时间戳(int)



<h2 > bool dblClickFullScreen(bool value)</h2>

-  **功能**： 设置是否支持双击全屏,默认不支持双击全屏


<h2 id=savePic>int savePic(string pathFileName)</h2>

-  **功能**： 拍照

- **返回值**:0:成功； 非0：保存遇到的错误码 (bool)

- **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| pathFileName  |  string | 本地绝对路径文件名(支持格式：bmp, png, gif, jpg, jpeg)  |


<h2 id=propert_isEnableMarked>bool enableMarked</h2>

-  **功能**： 检查是否支持标注



<h2 id=savePicToBase64>string savePicToBase64(string format)</h2>

-  **功能**： 拍照

- **返回值**:Base64为图片数据字符串，不成功则为空 (string)

- **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| format  |  string | 图片格式，支持bmp, png, gif, jpg, jpeg  |


<h2 >void setMaskPic(string base64PNG, bool scaleToFitVideoUI)</h2>

-  **功能**： 在视频窗口上显示一个遮罩图片

- **返回值**:无

- **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| base64PNG  | string  | base64格式的png图像数据  |
|  scaleToFitVideoUI | bool  | true:铺满视频窗口，false:居中显示  |


<h2 id=setToolbarHeight> void setToolbarHeight(int height)</h2>

-  **功能**： 配置工具条高度

- **返回值**:无

- **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| height  | int  |  工具条高度 |


<h2 id=setToolButton> void setToolButton(int id, const string &iconFileName, const string &toolTip)</h2>

-  **功能**： 设置显示文件条目控件属性，若iconFileName所指向的文件不存在，则在界面上删除该条目

- **返回值**:无

- **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| id  | int  |  条目索引 |
| iconFileName  | string  |  按钮显示的文件名 |
| toolTip  | string  |  文件说明 |


<h2 id=lockNickNameText> void lockNickNameText(const string &lockNickNameText)</h2>

-  **功能**： 锁定昵称显示内容，设为空代表取消锁定

- **返回值**:无

- **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| lockNickNameText  | string  |  昵称显示内容 |


<h2 id=setSavePicRect>void setSavePicRect(int x, int y, int w, int h)</h2>

-  **功能**： 设置拍照区域

- **返回值**:无

- **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  x | int  |  相对于VideoUI控件的左上角位置（水平方向） |
| y   | int  | 相对于VideoUI控件的左上角位置（垂直方向）  |
| w  | int  | 拍照的图像大小(宽)  |
| h   |  int | 拍照的图像大小（高）  |
|  status | int  |  第3方呼叫状态码：0-振铃； 1-接通 ；2-拒绝； 3-未应答 ；4-挂断 |


- **补充说明**:

<font color=#ff0000>注意：此设配置对以下所有保存接口有效， 当x,y,w,h均为0时，代表保存完整图像。</font>

<h2 id=video_getPicWidth>int getPicWidth()</h2>

-  **功能**：  获取图像宽

- **返回值**:图像宽

<h2 id=video_getPicHeight> int getPicHeight()</h2>

-  **功能**：获取图像高

- **返回值**:图像高


<h2 id=setFullScreen>void setFullScreen(bool bFullScreen)</h2>

- **功能**：设置全屏

- **返回值**:无


<h2 id=getFullScreen>bool getFullScreen()</h2>

- **功能**： 获取全屏

- **返回值**: 表示该控件当前是否全屏，true  表示全屏


<h2 id=setVideo> void setVideo(string userID, int videoID)</h2>

- **功能**： 设置显示的目标用户视频

- **返回值**:无

- **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| userID  | string  | 目标用户ID  |
| videoID  | int  | 用户的指定视频设备（-1，代表用户的默认视频设备）  |



<h2 id=setVideo2>void setVideo2(string userID, int videoID, int qualityLv)</h2>

- **功能**： 设置显示目标用户的第2档视频

- **返回值**:无

- **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| userID  | string  | 目标用户ID  |
|  videoID | int  | 用户的指定视频设备（-1，代表用户的默认视频设备）  |
|  qualityLv | int  | 视频档位(1:默认档位，2:对应quality2，如果2未开启时将显示1档的视频流）  |


- **补充说明**:

1. 从[房间内可观看摄像头列表](#getWatchableVideos)中获取userID和videoID</br>
1. 开启一个摄像头多档视频流，请参见[setLocVideoAttributes](#setLocVideoAttributes)</br>
1. <font color=#ff0000>注意：配置后就会建立视频通道并占用带宽。 如果不再观看时，应设为空：setVideo("", -1)。</font></br>


<h2 id=getQualityLv>int getQualityLv()</h2>

- **功能**： 获取当前显示的视频档位

- **返回值**: 视频档位

- **参数**:无



<!-- ### 白板显示UI显示组件 {#BoardContainer} -->

<h2 id=BoardContainer>白板显示UI显示组件</h2>

CloudroomBoardUI 白板显示组件，是由视频房间组件内相关接口的封装而成，如果此组件不满足需求，可以使用视频房间组件内相关的接口自行实现。


<h2 id=getBoardIDs> string getBoardIDs()</h2>

- **功能**： 获取当前房间内的所有白板ID

- **返回值**: 白板的ID，字符串数组 (string[])

<h2 id=getBoardInfo> string getBoardInfo(boardID)</h2>

- **功能**：获取指定白板的信息

- **返回值**: 白板信息，json格式，详见[BoardObj](TypeDefinitions.md#CRVideo_BoardObj)说明

<h2 id=getCurBoardID> string getCurBoardID()</h2>

- **功能**：获取当前显示的白板

- **返回值**: 白板的ID (string)

<h2 id=getCurPageNo>int getCurPageNo()</h2>

- **功能**：  获取当前白板的当前页

- **返回值**: 页序号（0为第一页) (int)

<h2 id=setCurBoard>void setCurBoard(string boardID, int pageNo)</h2>

- **功能**： 设置当前白板

- **返回值**: 无

- **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| boardID  | string  | 白板的ID  |
|  pageNo |  int | 白板的页序号，0为第一页  |


<h2 id=undo>void undo()</h2>

- **功能**：   撤消我的最后一个标注

- **返回值**: 无

<h2 id=redo>void redo()</h2>

- **功能**： 恢复我的最后一次撤消

- **返回值**: 无

<h2 id=board_clear>void clear()</h2>

- **功能**：  清空当前白板所有标注(清空操作不能再恢复）

- **返回值**: 无

<h2 id=isScaledContents> bool isScaledContents()</h2>

- **功能**： 获取白板当前的缩放模式，缩放模式下内容将被缩小或放大以填充有效区域，非缩放模式下图像将按原始尺寸显示并可能出现滚动条

- **返回值**: bool

<h2 id=setScaledContents>void setScaledContents(bool bScaled)</h2>

- **功能**： 设置白板的缩放模式

- **返回值**: 无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| bScaled  | bool  | 是否启用缩放模式  |


<h2 id=setColor>void setColor(int argb)</h2>

- **功能**： 设置画笔颜色

- **返回值**: 无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| argb  | int  | 画笔颜色为argb8888  |


<h2 id=getColor>int getColor()</h2>

- **功能**： 获取画笔颜色

- **返回值**: int


<h2 id=setLineWidth>void setLineWidth(int width)</h2>

- **功能**： 设置画笔粗细

- **返回值**: 无

+ **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  width | int  | 线条的宽度  |


<h2 id=getLineWidth>int getLineWidth()</h2>

- **功能**： 获取当前画笔颜色

- **返回值**: 线条的宽度 (int)

<h2 id=setReadOnly>void setReadOnly(bool bReadOnly)</h2>

- **功能**： 设置白板本地只读（本地禁止标注，其他端不受影响）

- **返回值**: 无

- **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| bReadOnly  |  bool | 是否只读  |


<h2 id=isReadOnly> bool isReadOnly()</h2>

- **功能**： 获取白板本地只读配置

- **返回值**: 是否只读 (bool), true - 白板本地只读

<h2 id=startHttpMgr>void startMgr()</h2>

- **功能**: 启动http文档上传下载功能

- **返回值**:无


<h2 id=stopHttpMgr>void stopMgr()</h2>

- **功能**: 停止http文档上传下载功能

- **返回值**:无


<h2 id=getAllTransferInfos>string getAllTransferInfos()</h2>

- **功能**: 获取本地所有上传、下载文件信息

- **返回值**:详见 [HttpFileInfoObjs](TypeDefinitions.md#CRVideo_HttpFileInfoObjs)


<h2 id=getTransferInfo>HttpFileInfoObj getTransferInfo(string filePathName)</h2>

- **功能**: 获取本地指定文件的上传、下载文件信息

- **返回值**:详见 [HttpFileInfoObj](TypeDefinitions.md#CRVideo_HttpFileInfoObj)

- **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| filePathName	|string|	本地路径文件名|


<h2 id=startTransferFile>void startTransferFile(HttpReqInfo fileinfo)</h2>

- **功能**: 开始下载/上传文件

- **返回值**:无

+ **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|fileinfo	|string| 详见[HttpReqInfo](TypeDefinitions.md#CRVideo_HttpReqInfoObj)|


<h2 id=cancelFileTransfer>void cancelFileTransfer(string fileName)</h2>

- **功能**: 取消传输

- **返回值**:无

+ **参数**:

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|fileName	|string| 本地路径文件名|

- **补充说明**:

取消时，只是停止了传输任务，不清理记录及断点文件。

<h2 id=rmTransferInfo>void rmTransferInfo(string fileName,int bRemoveLocFile)</h2>

- **功能**: 删除传输记录及相关文件

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|fileName	|string| 文件名|
|bRemoveLocFile	|int| 是否移除本地文件,为1时，那么上传的源始文件、下载的临时文件或结果文件都将被移除。|

- **补充说明**:

此接口将文件从管理器中移除（getAllTransferInfos将不再返回相关信息），如果bRemoveLocFile为1时， 那么上传的源始文件、下载的临时文件或结果文件都将被移除。

<h2 id=fileStateChanged>void fileStateChanged(const string &fileName, HTTP_TRANSFER_STAT state)</h2>

- **功能**: 通知用户文件状态更改

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| fileName  |  string  | 文件名  |
|  state |  int  | 详细介绍见[HTTP_TRANSFER_STAT](Constant.md#CRVIDEOSDK_HTTP_TRANSFER_STATE)  |


<h2 id=fileProgress>void fileProgress(conststring &fileName, int64 finisedSize, int64 totalSize)</h2>

- **功能**: 通知用户文件的传输进度

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  fileName | string  | 文件名  |
|  finisedSize | int64  |  已传输大小 |
|  totalSize | int64  |  文件总大小 |


<h2 id=fileFinished>void fileFinished(const string &fileName, int rslt)</h2>

- **功能**: 通知用户文件传输结束

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| fileName  | string  | 文件名  |
| rslt  | int  | 传输结果,详见[HTTP_TRANSFER_RESULT](Constant.md#CRVIDEOSDK_HTTP_TRANSFER_RESULT)  |


<h2 id=fileHttpRspHeader>void fileHttpRspHeader(const string &fileName, const string &rspHeader)</h2>

- **功能**: 通知http响应消息的header数据

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  fileName | string  |  文件名 |
|  rspHeader |  string |  http响应头 |


<h2 id=fileHttpRspContent>void fileHttpRspContent(const string &filename, const string &content)</h2>

- **功能**: 通知上传完成后，http的响应内容

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|  fileName | string  |  文件名 |
|  rspContent | string  |  http上传完成后的响应内容 |


<h2 id=tryReadFile>int tryReadFile(string diskPathFileName)</h2>

- **功能**: 尝试读取文件

- **返回值**:尝试结果，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|diskPathFileName   |string|    本地路径文件名|

<h2 id=readFileAsBase64>string readFileAsBase64(string diskPathFileName)</h2>

- **功能**: 读取文件

- **返回值**: 以base64编码读取到的内容，并返回编码后的内容

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|diskPathFileName   |string|    本地路径文件名|

<h2 id=readFileData>SAFEARRAY(BYTE) readFileData(const string &diskFileName, int offset, int dataLength);</h2>

- **功能**: 读取文件

- **返回值**: 返回读取到的文件内容

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|diskPathFileName   |string|    本地路径文件名|
| offset  | int  | 相对于文件开头的偏移量  |
|  dataLength | int  |  读取长度 |



<h2 id=writeBase64ToFile>int writeBase64ToFile(string diskPathFileName, string base64Dat)</h2>

- **功能**: 创建或重写文件（如果目录不存在，则创建目录）


- **返回值**: 结果，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|diskPathFileName   |string|    本地路径文件名|
|base64Dat   |string|    base64编码格式的文件数据|



<h2 id=moveFile>int moveFile(string srcDiskFileName, string dstDiskFileName)</h2>

- **功能**: 移动文件


- **返回值**: 结果，定义见[ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF)

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|srcDiskFileName   |string|    本地源文件|
|dstDiskFileName   |string|    本地目标文件|

- **补充说明**:

目标文件如果已存在，将按失败处理，不会覆盖;


<h2 id=videoDataCover>SAFEARRAY(BYTE) videoDataCover(int srcFormat, int srcW, int srcH, SAFEARRAY(BYTE) srcDat, int dstFormat, int dstW, int dstH);</h2>

- **功能**: 视频图像格式转换

- **返回值**: SAFEARRAY(BYTE)，结果图像数据

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|srcFormat   |int| 源图图像格式[CRVIDEOSDK_VIDEO_FORMAT](Constant.md#CRVIDEOSDK_VIDEO_FORMAT)|
|srcW   |int| 源图的宽|
|srcH   |int| 源图的高|
|srcDat   |SAFEARRAY(BYTE)| 源图的数据|
|dstFormat   |int| 目标图像格式[CRVIDEOSDK_VIDEO_FORMAT](Constant.md#CRVIDEOSDK_VIDEO_FORMAT)|
|dstW   |int| 目标的宽|
|dstH   |int| 目标的高|

- **补充说明**:

yuv格式的数据，请保持宽高为2的倍数

<h2 id=getOpenFileName>string getOpenFileName(string title, string directory, string filter)</h2>

- **功能**: 获取用户打开的全路径文件名

- **返回值**: 结果，空串表示用户取消， 否则返回用户选择的文件路径文件名

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|title   |string|    打开文件框的标题|
|directory|    string| 打开对话框初始路径,不设初始值时请传空|
|filter|    string| 文件类型过滤器（可为空），示例："Images (*.png *.xpm *.jpg);;Text files (*.txt)"|


<h2 id=getSaveFileName>string getSaveFileName(string title, string directory, string filter)</h2>

- **功能**: 获取用户保存的全路径文件名

- **返回值**: 结果，空串表示用户取消， 否则返回用户保存的文件路径文件名

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|title   |string|    打开文件框的标题|
|directory|    string| 打开对话框初始路径,不设初始值时请传空|
|filter|    string| 文件类型过滤器（可为空），示例："Images (*.png *.xpm *.jpg);;Text files (*.txt)"|

<h2 id=removeFromRecordMgr>void removeFromRecordMgr(string filename)</h2>

- **功能**: 删除本地的录制文件

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|filename	|string	|文件名|

- **补充说明**:

上传中的文件会被取消上传,已上传完成的服务器文件不受影响


<h2 id=addFileToRecordMgr>int addFileToRecordMgr(string fileName, string filePath)</h2>

- **功能**: 添加本地文件到录制文件管理中

- **返回值**:  -1：本地文件不存在，0：成功，1：文件已经被添加过

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|filename	|string	|文件名，不含路径|
|filePath	|string	|文件路径，不含文件名|

- **补充说明**:

第三方录制文件调用此接口后可进行本地回放和上传到视频服务器上，和自己录制的文件一样可以正常在线播放和下载

<h2 id=getWriteablePathInIEProtectedMode>string getWriteablePathInIEProtectedMode()</h2>

- **功能**: 获取ie的保护模式下可读写的路径（获取到的为InternetCache目录，在系统重启或InternetCache目录清理时，此目录下的内容将会丢失）

- **返回值**:ie的保护模式下可读写的


<h2 id=isIEProtectedMode>bool isIEProtectedMode()</h2>

- **功能**: 检查插件是否运行在ie的保护模式下

- **返回值**:true - ie保护模式下； false - 非ie或非保护模式{bool}


<h2 id=startScreenMark>void startScreenMark()</h2>

- **功能**: 开始屏幕共享标注

- **返回值**: 无


<h2 id=stopScreenMark>void stopScreenMark()</h2>

- **功能**: 停止屏幕共享标注

- **返回值**: 无


<h2 id=setMarkText>void setMarkText(string videoFilePathName,int msecond, string markText)</h2>

- **功能**: 添加视频打点信息

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|videoFilePathName   |string|    视频文件路径名|
|msecond|    int| 视频播放的位置(毫秒)|
|markText|    string| 打点信息|

- **补充说明**:

调用此接口会生成一个和视频文件同名且有.json后缀的打点文本文件


<h2 id=removeMarkText>void removeMarkText(string videoFilePathName,msecond)</h2>

- **功能**: 移除视频打点信息


- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|videoFilePathName   |string|    视频文件路径名|
|msecond|    int| 视频播放的位置(毫秒)|

<h2 id=getVideoMarkFile>string getVideoMarkFile(string videoFilePathName)</h2>

- **功能**: 获取视频文件对应的打点文件

- **返回值**:打点文件的路径文件名

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|videoFilePathName   |string|    视频文件路径名|

<h2 id=getAllMarks>string getAllMarks(string videoFilePathName)</h2>

- **功能**:获取所有的视频打点信息

- **返回值**:打点信息集合字符串，json格式

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|videoFilePathName   |string|    视频文件路径名|



<h2 id=getRecordFileInfo>string getRecordFileInfo(string fileName)</h2>

- **功能**:获取录制文件信息

- **返回值**:文件信息，详见[RecordFileInfoObj](TypeDefinitions.md#CRVideo_RecordFileInfo)

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|fileName|    string  |文件名， 不含路径|


<h2 id=getMeetingAllAttrs>void getMeetingAllAttrs(string cookie)</h2>

- **功能**:获取房间所有属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|cookie|    string  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h2 id=getMeetingAttrs >void getMeetingAttrs( string keys,  string cookie)</h2>

- **功能**:获取房间部份属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|keys|    string  |需要查询的房间属性key，json格式，如：["key1", "key2"]|
|cookie|    string  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h2 id=setMeetingAttrs >void setMeetingAttrs( string attrs,  string options,  string cookie)</h2>

- **功能**:重置房间属性集

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|attrs|    string  |房间属性集,json格式，如：{"key1":"value1", "key2":"value2"} (key最大长度为64B，value最大长度为8KB)|
|options|    string  |操作选项,json格式参见[MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions)|
|cookie|    string  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h2 id=addOrUpdateMeetingAttrs >void addOrUpdateMeetingAttrs( string attrs, string options, string cookie)</h2>

- **功能**:增加或者更新房间属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|attrs|    string  |房间属性集,json格式，如：{"key1":"value1", "key2":"value2"} (key最大长度为64B，value最大长度为8KB)|
|options|    string  |操作选项,json格式参见[MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions)|
|cookie|    string  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h2 id=delMeetingAttrs >void delMeetingAttrs( string keys, string options, string cookie)</h2>

- **功能**:删除房间属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|keys|    string  |需要删除的房间属性key，json格式，如["key1","key2"]|
|options|    string  |操作选项,json格式参见[MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions)|
|cookie|    string  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h2 id=clearMeetingAttrs >void clearMeetingAttrs(string options, string cookie)</h2>

- **功能**:清除房间所有属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|options|    string  |操作选项,json格式参见[MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions)|
|cookie|    string  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h2 id=getUserAttrs >void getUserAttrs(string uids, string keys, string cookie)</h2>

- **功能**:获取指定用户的指定属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|uids|    string  |目标用户id列表，一次最多包含50个用户，json格式， 如：["uid1","uid2"]|
|keys|    string  |将要获取的用户属性key列表（空串代表获取全部），json格式，如：["key1","key2"]|
|cookie|    string  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h2 id=setUserAttrs >void setUserAttrs(string uid, string attrs, string options, string cookie)</h2>

- **功能**:重置用户属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|uid|    string  |目标用户id|
|attrs|    string  |用户属性集, json格式，如：{"key1":"value1", "key2":"value2"} (key最大长度为64B，value最大长度为8KB)|
|options|    string  |操作选项,json格式参见[MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions)|
|cookie|    string  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h2 id=addOrUpdateUserAttrs >void addOrUpdateUserAttrs(string uid, string attrs, string options, string cookie)</h2>

- **功能**:增加或更新用户属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|uid|    string  |目标用户id|
|attrs|    string  |用户属性集, json格式，如：{"key1":"value1", "key2":"value2"} (key最大长度为64B，value最大长度为8KB)|
|options|    string  |操作选项,json格式参见[MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions)|
|cookie|    string  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h2 id=delUserAttrs >void delUserAttrs(string uid, string keys, string options, string cookie)</h2>

- **功能**:删除用户的特定属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|uid|    string  |目标用户id|
|keys|    string  |需要删除的用户属性key列表，json格式，如：["key1","key2"]|
|options|    string  |操作选项,json格式参见[MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions)|
|cookie|    string  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h2 id=clearAllUserAttrs >void clearAllUserAttrs(string options, string cookie)</h2>

- **功能**:清除所有用户的所有属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|options|    string  |操作选项,json格式参见[MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions)|
|cookie|    string  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h2 id=clearUserAttrs >void clearUserAttrs(string uid, string options, string cookie)</h2>

- **功能**:清除特定用户的所有属性

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|uid|    string  |目标用户id|
|options|    string  |操作选项,json格式参见[MeetingAttrOptions](TypeDefinitions.md#CRVideo_MeetingAttrOptions)|
|cookie|    string  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|


<h2 id=sendMeetingCustomMsg>void sendMeetingCustomMsg(string msg, string cookie)</h2>

- **功能**:发送房间内自定义广播消息

- **返回值**:无

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
|msg|    string  |用户自定义消息(最大8KB)|
|cookie|    string  |可为空字符串。详细介绍见[关键词](KeyWords.md#stream)|




<h2 id=getMeetingAllAttrsSuccess > void getMeetingAllAttrsSuccess(string attrs, string cookie) </h2>

- **功能**:成功获取到房间所有属性

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| attrs | string  | 房间属性集，json结构体请参见[MeetingAttrObjs](TypeDefinitions.md#CRVideo_MeetingAttrObjs)|
| cookie   | string  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |



<h2 id=getMeetingAllAttrsFail > void getMeetingAllAttrsFail(int err, string cookie) </h2>

- **功能**:获取房间属性失败

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  |[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |
| cookie   | string  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |



<h2 id=getMeetingAttrsSuccess > void getMeetingAttrsSuccess(string attrs, string cookie) </h2>

- **功能**:成功获取到房间指定属性

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| attrs | string  | 房间属性集，json结构体请参见[MeetingAttrObjs](TypeDefinitions.md#CRVideo_MeetingAttrObjs)|
| cookie   | string  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |



<h2 id=getMeetingAttrsFail > void getMeetingAttrsFail(int err, string cookie) </h2>

- **功能**:获取房间指定属性失败

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  |[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |
| cookie   | string  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |




<h2 id=setMeetingAttrsRslt > void setMeetingAttrsRslt(int err, string cookie) </h2>

- **功能**:设置用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  |[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |
| cookie   | string  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |



<h2 id=addOrUpdateMeetingAttrsRslt > void addOrUpdateMeetingAttrsRslt(int err, string cookie) </h2>

- **功能**:增加或更新房间属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  |[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |
| cookie   | string  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |


<h2 id=delMeetingAttrsRslt > void delMeetingAttrsRslt(int err, string cookie) </h2>

- **功能**:删除房间属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  | [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误）|
| cookie   | string  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |


<h2 id=clearMeetingAttrsRslt > void clearMeetingAttrsRslt(int err, string cookie) </h2>

- **功能**:清除房间属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  |[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |
| cookie   | string  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |




<h2 id=getUserAttrsSuccess > void getUserAttrsSuccess(string attrsMap, string cookie) </h2>

- **功能**:获取房间内用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| attrsMap | string  | 用户属性集，json结构体请参见[UsrMeetingAttrObjs](TypeDefinitions.md#CRVideo_UsrMeetingAttrObjs)|
| cookie   | string  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |



<h2 id=getUserAttrsFail > void getUserAttrsFail(int err, string cookie) </h2>

- **功能**:获取房间内用户属性失败

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  |[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |
| cookie   | string  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |


<h2 id=setUserAttrsRslt > void setUserAttrsRslt(int err, string cookie) </h2>

- **功能**:设置用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  | [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误）|
| cookie   | string  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |



<h2 id=addOrUpdateUserAttrsRslt > void addOrUpdateUserAttrsRslt(int err, string cookie) </h2>

- **功能**:增加或者更新用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  |[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |
| cookie   | string  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |


<h2 id=delUserAttrsRslt > void delUserAttrsRslt(int err, string cookie) </h2>

- **功能**:删除特定用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  |[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |
| cookie   | string  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |




<h2 id=clearAllUserAttrsRslt > void clearAllUserAttrsRslt(int err, string cookie) </h2>

- **功能**:清除所有用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  |[错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误） |
| cookie   | string  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |



<h2 id=clearUserAttrsRslt > void clearUserAttrsRslt(int err, string cookie) </h2>

- **功能**:清除特定用户属性结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  | [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误）|
| cookie   | string  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |



<h2 id=notifyMeetingAttrsChanged > void notifyMeetingAttrsChanged(string adds, string updates, string delKeys) </h2>

- **功能**:通知房间属性发生改变

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| adds | string  |增加房间属性集，json结构体请参见[MeetingAttrObjs](TypeDefinitions.md#CRVideo_MeetingAttrObjs) |
| updates | string  |变化的房间属性集，json结构体请参见[MeetingAttrObjs](TypeDefinitions.md#CRVideo_MeetingAttrObjs) |
| delKeys | string  |被删除的房间属性列表，json格式，如:["key1", "key2"] |

<h2 id=notifyUserAttrsChanged > void notifyUserAttrsChanged(string uid, string adds, string updates, string delKeys) </h2>

- **功能**:通知用户属性发生改变

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| uid | string  |变化的用户id |
| adds | string  |增加的用户属性集，json结构体请参见[MeetingAttrObjs](TypeDefinitions.md#CRVideo_MeetingAttrObjs) |
| updates | string  |变化的用户属性集，json结构体请参见[MeetingAttrObjs](TypeDefinitions.md#CRVideo_MeetingAttrObjs) |
| delKeys | string  |被删除的用户属性列表，json格式，如:["key1", "key2"] |

<h2 id=sendMeetingCustomMsgRslt > void sendMeetingCustomMsgRslt( int err, string cookie) </h2>

- **功能**:通知发送房间内自定义广播消息结果

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| err | int  | [错误码](Constant.md#CRVIDEOSDK_ERR_DEF)（错误码为CRVIDEOSDK_NOERR表示没有错误）|
| cookie   | string  | 可为空字符串。详细介绍见[关键词](KeyWords.md#stream)  |



<h2 id=notifyMeetingCustomMsg > void notifyMeetingCustomMsg(string uid, string jsonDat) </h2>

- **功能**:通知收到房间内自定义广播消息

+ **参数**：

| 参数    | 类型        | 含义      |
|:-------- |:-----------|:----------|
| uid | string  | 房间内广播消息的发送者的用户id |
| jsonDat   | string  | 广播内容  |
