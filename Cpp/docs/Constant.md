<h1 id=begin>常量定义</h1>

<h2 id=CRVSDK_ERR_DEF>CRVSDK_ERR_DEF 错误码</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDKERR_NOERR |  0 | 没有错误 |
| CRVSDKERR_VCAM_URLERR |  -1 | ipcam url不正确 |
| CRVSDKERR_VCAM_ALREADYEXIST | -2 | 已存在 |
| CRVSDKERR_VCAM_TOOMANY | -3 | 添加太多 |
| CRVSDKERR_VCAM_INVALIDFMT | -4 | 不支持的格式 |
| CRVSDKERR_VCAM_INVALIDMONITOR | -5 | 无效的屏幕id |
| CRVSDKERR_UNKNOWERR | 1 | 未知错误 |
| CRVSDKERR_OUTOF_MEM | 2 | 内存不足 |
| CRVSDKERR_INNER_ERR | 3 | sdk内部错误 |
| CRVSDKERR_MISMATCHCLIENTVER | 4 | 不支持的sdk版本 |
| CRVSDKERR_PARAM_ERR | 5 | 参数错误 |
| CRVSDKERR_ERR_DATA | 6 | 无效数据 |
| CRVSDKERR_ANCTPSWD_ERR | 7 | 帐号密码不正确 |
| CRVSDKERR_SERVER_EXCEPTION | 8 | 服务异常 |
| CRVSDKERR_LOGINSTATE_ERROR | 9 | 登录状态错误 |
| CRVSDKERR_KICKOUT_BY_RELOGIN | 10 | 帐号在别处被使用 |
| CRVSDKERR_NOT_INIT | 11 | sdk未初始化 |
| CRVSDKERR_NOT_LOGIN | 12 | 还没有登录 |
| CRVSDKERR_BASE64_COV_ERR | 13 | base64转换失败 |
| CRVSDKERR_CUSTOMAUTH_NOINFO | 14 | 启用了第三方鉴权，但没有携带鉴权信息 |
| CRVSDKERR_CUSTOMAUTH_NOTSUPPORT | 15 | 没有启用第三方鉴权，但携带了鉴权信息 |
| CRVSDKERR_CUSTOMAUTH_EXCEPTION | 16 | 访问第三方鉴权服务异常 |
| CRVSDKERR_CUSTOMAUTH_FAILED | 17 | 第三方鉴权不通过 |
| CRVSDKERR_TOKEN_TIMEOUT | 18 | token已过期 |
| CRVSDKERR_TOKEN_AUTHINFOERR | 19 | 鉴权信息错误 |
| CRVSDKERR_TOKEN_APPIDNOTEXIST | 20 | appid不存在 |
| CRVSDKERR_TOKEN_AUTH_FAILED | 21 | 鉴权失败 |
| CRVSDKERR_TOKEN_NOTTOKENTYPE | 22 | 非token鉴权方式 |
| CRVSDKERR_API_NO_PERMISSION | 23 | 没有api访问权限 |
| CRVSDKERR_ACCOUNT_EXPIRED | 24 | 账号已过期 |
| CRVSDKERR_NETWORK_INITFAILED | 200 | 网络初始化失败 |
| CRVSDKERR_NO_SERVERINFO | 201 | 没有服务器信息 |
| CRVSDKERR_NOSERVER_RSP | 202 | 服务器没有响应 |
| CRVSDKERR_CREATE_CONN_FAILED | 203 | 创建连接失败 |
| CRVSDKERR_SOCKETEXCEPTION | 204 | socket异常 |
| CRVSDKERR_SOCKETTIMEOUT | 205 | 网络超时 |
| CRVSDKERR_FORCEDCLOSECONNECTION | 206 | 连接被关闭 |
| CRVSDKERR_CONNECTIONLOST | 207 | 连接丢失 |
| CRVSDKERR_VOICEENG_INITFAILED | 208 | 语音引擎初始化失败 |
| CRVSDKERR_SSL_ERR | 209 | ssl通信错误 |
| CRVSDKERR_RSPDAT_ERR | 210 | 响应数据不正确 |
| CRVSDKERR_DATAENCRYPT_ERR | 211 | 数据加密失败 |
| CRVSDKERR_DATADECRYPT_ERR | 212 | 数据加密失败 |
| CRVSDKERR_QUE_ID_INVALID | 400 | 队列ID错误 |
| CRVSDKERR_QUE_NOUSER | 401 | 没有用户在排队 |
| CRVSDKERR_QUE_USER_CANCELLED | 402 | 排队用户已取消 |
| CRVSDKERR_QUE_SERVICE_NOT_START | 403 | 队列服务还未开启 |
| CRVSDKERR_ALREADY_OTHERQUE | 404 | 已在其它队列排队(客户只能在一个队列排队) |
| CRVSDKERR_INVALID_CALLID | 600 | 无效的呼叫ID |
| CRVSDKERR_CALL_EXIST | 601 | 已在呼叫中 |
| CRVSDKERR_PEER_BUSY | 602 | 对方忙 |
| CRVSDKERR_PEER_OFFLINE | 603 | 对方不在线 |
| CRVSDKERR_PEER_NOANSWER | 604 | 对方无应答 |
| CRVSDKERR_PEER_NOT_FOUND | 605 | 用户不存在 |
| CRVSDKERR_PEER_REFUSE | 606 | 对方拒接 |
| CRVSDKERR_MEETNOTEXIST | 800 | 房间不存在或已结束 |
| CRVSDKERR_AUTHERROR | 801 | 房间密码不正确 |
| CRVSDKERR_MEMBEROVERFLOW | 802 | 房间终端数量已满（购买的license不够) |
| CRVSDKERR_RESOURCEALLOCATEERROR | 803 | 分配房间资源失败 |
| CRVSDKERR_MEETROOMLOCKED | 804 | 房间已加锁 |
| CRVSDKERR_BALANCELESS | 805 | 余额不足 |
| CRVSDKERR_SEVICE_NOTENABLED | 806 | 业务权限未开启 |
| CRVSDKERR_ALREADYINMEETING | 807 | 不能再次进入房间 |
| CRVSDKERR_MIC_NORIGHT | 808 | 没有mic权限 |
| CRVSDKERR_MIC_BEING_USED | 809 | mic已被使用 |
| CRVSDKERR_MIC_UNKNOWERR | 810 | mic未知错误 |
| CRVSDKERR_SPK_NORIGHT | 811 | 没有扬声器权限 |
| CRVSDKERR_SPK_BEING_USED | 812 | 扬声器已被使用 |
| CRVSDKERR_SPK_UNKNOWERR | 813 | 扬声器未知错误 |
| CRVSDKERR_PIC_ISNULL | 814 | 图像为空 |
| CRVSDKERR_DEV_NOTEXIST | 815 | 设备不存在 |
| CRVSDKERR_MIC_OPENTOOMUCH | 816 | 开麦达到上限 |
| CRVSDKERR_NOT_INMEETING | 817 | 还没有进入房间 |
| CRVSDKERR_REPEAT_FAIL | 818 | 数据重复 或 功能重复开启失败 |
| CRVSDKERR_CATCH_SCREEN_ERR | 900 | 抓屏失败 |
| CRVSDKERR_RECORD_MAX | 901 | 单次录制达到最大时长(8h) |
| CRVSDKERR_RECORD_NO_DISK | 902 | 磁盘空间不够 |
| CRVSDKERR_RECORD_SIZE_ERR | 903 | 录制尺寸超出了允许值 |
| CRVSDKERR_CFG_RESTRICTED | 904 | 录制超出限制 |
| CRVSDKERR_FILE_ERR | 905 | 录制文件操作出错 |
| CRVSDKERR_RECORDSTARTED | 906 | 录制已开启 |
| CRVSDKERR_NOMORE_MCU | 907 | 录制服务器资源不足 |
| CRVSDKERR_SVRRECORD_SPACE_FULL | 908 | 云端录像空间已满 |
| CRVSDKERR_SENDFAIL | 1000 | 发送失败 |
| CRVSDKERR_CONTAIN_SENSITIVEWORDS | 1001 | 有敏感词语 |
| CRVSDKERR_SENDCMD_LARGE | 1100 | 发送信令数据过大 |
| CRVSDKERR_SENDBUFFER_LARGE | 1101 | 发送数据过大 |
| CRVSDKERR_SENDDATA_TARGETINVALID | 1102 | 目标用户不存在 |
| CRVSDKERR_SENDFILE_FILEINERROR | 1103 | 文件错误 |
| CRVSDKERR_TRANSID_INVALID | 1104 | 无效的发送id |
| CRVSDKERR_RECORDFILE_STATE_ERR | 1200 | 状态错误不可上传/取消上传 |
| CRVSDKERR_RECORDFILE_NOT_EXIST | 1106 | 录制文件不存在 |
| CRVSDKERR_RECORDFILE_UPLOAD_FAILED | 1107 | 上传失败，失败原因参考日志 |
| CRVSDKERR_RECORDFILE_DEL_FAILED | 1108 | 移除本地文件失败 |
| CRVSDKERR_FILE_NOT_EXIST | 1400 | 文件不存在 |
| CRVSDKERR_FILE_READ_ERR | 1401 | 文件读失败 |
| CRVSDKERR_FILE_WRITE_ERR | 1402 | 文件写失败 |
| CRVSDKERR_FILE_ALREADY_EXIST | 1403 | 目标文件已存在 |
| CRVSDKERR_FILE_OPERATOR_ERR | 1404 | 文件操作失败 |
| CRVSDKERR_FILE_SIZE_UNSUPPORT | 1405 | 不支持的文件尺寸 |
| CRVSDKERR_NETDISK_NOT_EXIST | 1500 | 网盘不存在 |
| CRVSDKERR_NETDISK_PERMISSIONDENIED | 1501 | 没有网盘权限 |
| CRVSDKERR_NETDISK_INVALIDFILENAME | 1502 | 不合法文件名 |
| CRVSDKERR_NETDISK_FILEALREADYEXISTS | 1503 | 文件已存在 |
| CRVSDKERR_NETDISK_FILEORDIRECTORYNOTEXISTS | 1504 | 文件或目录不存在 |
| CRVSDKERR_NETDISK_FILENOTTRANSFORM | 1505 | 文件没有转换 |
| CRVSDKERR_NETDISK_TRANSFORMFAILED | 1506 | 文件转换失败 |
| CRVSDKERR_NETDISK_NOSPACE | 1507 | 空间不足


<h2 id=CRVSDK_LOG_LEVEL>CRVSDK_LOG_LEVEL 日志等级</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_LOGLV_DEBUG | 0 | 调试信息 |
| CRVSDK_LOGLV_INFO | 1 | 普通信息 |
| CRVSDK_LOGLV_WARN | 2 | 警告信息 |
| CRVSDK_LOGLV_ERR | 2 | 错误信息 |



<h2 id=CRVSDK_AUTHTYPE>CRVSDK_AUTHTYPE 登录鉴权方式</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_AUTHTP_TOKEN | 0 | token鉴权方式 |
| CRVSDK_AUTHTP_SECRET | 1 | appID + appSecret鉴权方式 |


<h2 id=CRVSDK_WEBPROTOCOL>CRVSDK_WEBPROTOCOL web通讯协议类型</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_WEBPTC_DEFAULT | -1 | 内部默认类型为：CRVSDK_WEBPTC_HTTPS |
| CRVSDK_WEBPTC_HTTP | 0 | http | 
| CRVSDK_WEBPTC_HTTPS | 1 | 标准https |
| CRVSDK_WEBPTC_HTTPS_NOVERRIFY | 2 | 不验证服务器SSL证书，支持自签证书 |



<h2 id=CRVSDK_USER_STATUS>CRVSDK_USER_STATUS 用户登录状态</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_USERST_OFFLINE | 0 | sdk用户未登录 |
| CRVSDK_USERST_ONLINE | 1 | sdk用户已登录 |
| CRVSDK_USERST_BUSY | 2 | sdk用户已登录，且呼叫中或会议中 |



<h2 id=CRVSDK_MEETING_DROPPED_REASON>CRVSDK_MEETING_DROPPED_REASON 与房间断开原因</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_DROPPED_KICKOUT | 1 | 被他人请出房间 |
| CRVSDK_DROPPED_BALANCELESS | 2 | 余额不足 |




<h2 id=CRVSDK_LEFT_QUEUE_REASON>CRVSDK_LEFT_QUEUE_REASON 排队客户离开队列原因</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_LQR_STOPQUEUE | 0 | 用户停止排队 |
| CRVSDK_LQR_INSERVICE | 1 | 用户分配给了某座席 |


<h2 id=CRVSDK_CALLMORE_STATE>CRVSDK_CALLMORE_STATE 呼叫多方状态</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_CALLMORE_RING | 0 | 被叫振铃中 |
| CRVSDK_CALLMORE_ACCEPTED | 1 | 被叫接听 |
| CRVSDK_CALLMORE_REJECTED | 2 | 被叫拒接 |
| CRVSDK_CALLMORE_NOANSWER | 3 | 被叫无应签 |
| CRVSDK_CALLMORE_HUNGUP | 4 | 被叫结束通话 |


<h2 id=CRVSDK_FILETRANSFER_STATE>CRVSDK_FILETRANSFER_STATE 文件传输状态</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_FILEST_NULL | 0 | 未开始 |
| CRVSDK_FILEST_QUEUE | 1 | 排队中 |
| CRVSDK_FILEST_TRANSFERING | 2 | 传输(上传 / 下载)中 |
| CRVSDK_FILEST_FINISHED | 3 | 传输完成 |


<h2 id=CRVSDK_FILETRANSFER_RESULT>CRVSDK_FILETRANSFER_RESULT 文件传输结果</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_FILERSLT_SUCCESS | 0 | 成功 |
| CRVSDK_FILERSLT_UNKNOWERR | 1 | 内部错误 |
| CRVSDK_FILERSLT_PARAMERR | 2 | 参数错误 |
| CRVSDK_FILERSLT_NETWORKFAIL | 3 | 网络不通 / 地址不对 |
| CRVSDK_FILERSLT_NETWORKTIMEOUT | 4 | 超时失败 |
| CRVSDK_FILERSLT_FILEOPERATIONFAIL | 5 | 文件操作失败 |
| CRVSDK_FILERSLT_PATHNOTSUPPROT | 6 | 不支持的路径 |
| CRVSDK_FILERSLT_FILETRANSFERING | 7 | 文件正在传输 |
| CRVSDK_FILERSLT_HTTPERR_BEGIN | 1000 | HTTP错误码启始(10404: 代表HTTP 404) |
| CRVSDK_FILERSLT_HTTPERR_END | 1999 | HTTP错误码结束 |



<h2 id=CRVSDK_VDEV_TYPE>CRVSDK_VDEV_TYPE 视频设备类型</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_VDEVTP_UNKNOW | 0 | 未知类型 |
| CRVSDK_VDEVTP_SYSDV | 1 | 系统物理设备 |
| CRVSDK_VDEVTP_IP | 2 | 网络摄像头 |
| CRVSDK_VDEVTP_CUSTOM | 3 | 自定义摄像头 |
| CRVSDK_VDEVTP_SCREEN | 4 | 屏幕摄像头 |




<h2 id=CRVSDK_ASTATUS>CRVSDK_ASTATUS 麦状态</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_AST_UNKNOWN | 0 | 未知，正在从系统获取 |
| CRVSDK_AST_NULL | 1 | 没有麦克风设备 |
| CRVSDK_AST_CLOSE | 2 | 麦克风关闭 |
| CRVSDK_AST_OPEN | 3 | 麦克风打开 |
| CRVSDK_AST_OPENING | 4 | 开麦申请中 |
| CRVSDK_AST_OPENING2 | 5 | 帮助他人开麦中 |



<h2 id=CRVSDK_VSTATUS>CRVSDK_VSTATUS 视频状态</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_VST_UNKNOWN | 0 | 未知，正在从系统获取 |
| CRVSDK_VST_NULL | 1 | 无摄像头 |
| CRVSDK_VST_CLOSE | 2 | 摄像头关闭 |
| CRVSDK_VST_OPEN | 3 | 摄像头打开 |
| CRVSDK_VST_OPENING | 4 | 打开摄像头申请中 |



<h2 id=CRVSDK_AUDIO_FORMAT>CRVSDK_AUDIO_FORMAT 音频格式</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_AFMT_INVALID | -1 | 无效格式 |
| CRVSDK_AFMT_PCM16BIT | 0 | pcm 16bit |



<h2 id=CRVSDK_VSTEAMLV_TYPE>CRVSDK_VSTEAMLV_TYPE 视频大小流类型</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_VSTP_LV0 | 0 | 视频标准流 |
| CRVSDK_VSTP_LV1 | 1 | 视频第二档流 |



<h2 id=CRVSDK_VIDEO_FORMAT>CRVSDK_VIDEO_FORMAT 图像格式</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_VFMT_INVALID | -1 | 无效格式 |
| CRVSDK_VFMT_YUV420P | 0 | yuv420p, 3个平面数据y,u,v |
| CRVSDK_VFMT_ARGB32 | 1 | rgb32, 1个平面数据，0xAA,0xRR,0xGG,0xBB |
| CRVSDK_VFMT_RGBA32 | 2 | rgb32, 1个平面数据，0xRR,0xGG,0xBB,0xAA |
| CRVSDK_VFMT_H264 | 3 | h264裸数据，1个平面数据 |



<h2 id=CRVSDK_MOUSEMSG_TYPE>CRVSDK_MOUSEMSG_TYPE 远程控制鼠标消息类型</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_MOUSEMSG_MOVE | 0 | 鼠标移动 |
| CRVSDK_MOUSEMSG_DOWN | 1 | 鼠标按下 |
| CRVSDK_MOUSEMSG_UP | 2 | 鼠标松开 |
| CRVSDK_MOUSEMSG_DBCLICK | 3 | 鼠标双击 |


<h2 id=CRVSDK_MOUSEKEY_TYPE>CRVSDK_MOUSEKEY_TYPE 远程控制鼠标键类型</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_MOUSEKEY_NULL | 0 | 无按键 |
| CRVSDK_MOUSEKEY_L | 1 | 鼠标左键 |
| CRVSDK_MOUSEKEY_M | 2 | 鼠标中键 |
| CRVSDK_MOUSEKEY_R | 3 | 鼠标右键 |
| CRVSDK_MOUSEKEY_WHEEL | 4 | 鼠标滚轮 |
| CRVSDK_MOUSEKEY_X | 5 | 鼠标侧键 |



<h2 id=CRVSDK_KEYMSG_TYPE>CRVSDK_KEYMSG_TYPE 远程控制键盘消息类型</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_KEYMSG_DWON | 0 | 按下 |
| CRVSDK_KEYMSG_UP | 1 | 弹起 |



<h2 id=CRVSDK_MEDIA_STATE>CRVSDK_MEDIA_STATE 影音共享状态</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_MEDIAST_PLAYING | 0 | 播放中 |
| CRVSDK_MEDIAST_PAUSED | 1 | 暂停中 |
| CRVSDK_MEDIAST_STOPPED | 2 | 未播放 |



<h2 id=CRVSDK_MEDIA_STOPREASON>CRVSDK_MEDIA_STOPREASON 影音停止原因</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_MEDIASR_CLOSE | 0 | 被关闭 |
| CRVSDK_MEDIASR_FINI | 1 | 播放完成 |
| CRVSDK_MEDIASR_FILEOPEN_ERR | 2 | 打开失败 |
| CRVSDK_MEDIASR_FORMAT_ERR | 3 | 格式错误 |
| CRVSDK_MEDIASR_UNSUPPORTCODEC | 4 | 不支持的编码 |
| CRVSDK_MEDIASR_EXCEPTION | 5 | 不支持的编码 |



<h2 id=CRVSDK_SCALE_MODE>CRVSDK_SCALE_MODE 图像显示模式</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_RENDERMD_FIT | 0 | 等比缩放到在窗口大小并完整显示，空区域填黑 |
| CRVSDK_RENDERMD_HIDDEN | 1 | 等比缩放到完整覆盖窗口，超出区域图像被裁剪掉 |
| CRVSDK_RENDERMD_FILL | 2 | 缩放图像充满窗口（图像可能变形） |




<h2 id=CRVSDK_MIXER_CONTENT_TYPE>CRVSDK_MIXER_CONTENT_TYPE 混图器内容类型</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_MIXCONT_VIDEO | 0 | 摄像头 |
| CRVSDK_MIXCONT_PIC | 1 | 图片 |
| CRVSDK_MIXCONT_SCREEN | 2 | 本地屏幕 |
| CRVSDK_MIXCONT_MEDIA | 3 | 影音共享 |
| CRVSDK_MIXCONT_DEPRECATED_4 | 4 |（已废弃）|
| CRVSDK_MIXCONT_SCREEN_SHARED | 5 | 共享中的屏幕 |
| CRVSDK_MIXCONT_WBOARD | 6 | 白板 |
| CRVSDK_MIXCONT_DEPRECATED7 | 7 |（已废弃）|
| CRVSDK_MIXCONT_DEPRECATED8 | 8 |（已废弃） |
| CRVSDK_MIXCONT_DEPRECATED9 | 9 |（已废弃）|
| CRVSDK_MIXCONT_TEXT | 10 | 文本、时戳 |




<h2 id=CRVSDK_MIXER_STATE>CRVSDK_MIXER_STATE 录制、直播状态</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_MIXER_NULL | 0 | 已停止 |
| CRVSDK_MIXER_STARTING | 1 | 启动中 |
| CRVSDK_MIXER_RUNNING | 2 | 工作中 |
| CRVSDK_MIXER_PAUSED | 3 | 暂停中(仅本地录制、直播支持） |
| CRVSDK_MIXER_STOPPING | 4 | 停止中 |




<h2 id=CRVSDK_MIXER_OUTPUT_TYPE>CRVSDK_MIXER_OUTPUT_TYPE 录制、直播输出类型</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_MIXER_OUTPUT_FILE | 0 | 录制文件 |
| CRVSDK_MIXER_OUTPUT_LIVE | 1 | 直播推流 |




<h2 id=CRVSDK_CLOUDMIXER_OUTPUT_STATE>CRVSDK_CLOUDMIXER_OUTPUT_STATE 云端混图输出状态</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_CLOUDMO_NULL | 0 | 未录制/直播 |
| CRVSDK_CLOUDMO_RUNNING | 1 | 录制/直播中 |
| CRVSDK_CLOUDMO_STOPPED | 2 | 录制/直播结束 |
| CRVSDK_CLOUDMO_FAIL | 3 | 录制/直播失败 |
| CRVSDK_CLOUDMO_UPLOADING | 4 | 录像文件上传中 |
| CRVSDK_CLOUDMO_UPLOADED | 5 | 录像文件上传结束 |
| CRVSDK_CLOUDMO_UPLOADFAIL | 6 | 录像文件上传失败 |



<h2 id=CRVSDK_VOICECHANGE_TYPE>CRVSDK_VOICECHANGE_TYPE 变声类型</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_VOICETYPE_NULL | 0 | 原声 |
| CRVSDK_VOICETYPE_LOWERING | 1 | 低沉 |
| CRVSDK_VOICETYPE_SHARP | 2 | 尖锐 |


<h2 id=CRVSDK_DEFAULTBPS>视频流默认码率定义</h2>

其它分辨率，将按面积进行对应档位换算处理

| 分辨率 | 默认码率 | 可设置的最大码率 |
|:-|:-|:-|
| 80*48 | 48kbps | 96kbps |
| 112*64 | 53kbps | 106kbps |
| 160*96 | 75kbps | 150kbps |
| 224*128 | 100kbps | 200kbps |
| 288*160 | 123kbps | 246kbps |
| 352*192 | 160kbps | 320kbps |
| 448*256 | 230kbps | 440kbps |
| 512*288 | 260kbps | 520kbps |
| 576*320 | 300kbps | 600kbps |
| 640*360 | 350kbps | 700kbps |
| 704*400 | 420kbps | 840kbps |
| 848*480 | 500kbps | 1mbps |
| 1024*576 | 650kbps | 1300kbps |
| 1280*720 | 1mbps | 2mbps |
| 1920*1080 | 2mbps | 4mbps |
| 2560*1440 | 3mbps | 4.5mbps |
| 3840*2160 | 5mbps | 8mbps |



<h2 id=CRVSDK_STREAM_VIEWTYPE>CRVSDK_STREAM_VIEWTYPE 视图类型</h2>

| 代码 | 数值 | 含义 |
|:-|:-|:-|
| CRVSDK_VIEWTP_VIDEO | 0 | 摄像头显示View |
| CRVSDK_VIEWTP_SCREEN | 1 | 屏幕共享显示View |
| CRVSDK_VIEWTP_MEDIA | 2 | 影音共享显示View |
