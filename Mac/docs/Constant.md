# 常量定义
>相关数值及含义定义

----

<!-- ## 错误码 {#CRVIDEOSDK_ERR_DEF} -->

<h3 id=CRVIDEOSDK_ERR_DEF> 错误码</h3>

>CRVIDEOSDK_ERR_DEF

----

| 代码     | 数值        | 含义      |
|:-------- |:-----------|:----------|
|CRVIDEOSDK_NOERR  | 0 | 没有错误    |
|CRVIDEOSDK_UNKNOWERR | 1| 未知错误    |
|CRVIDEOSDK_OUTOF_MEM  | 2 | 内存不足    |
|CRVIDEOSDK_INNER_ERR | 3| sdk内部错误    |
|CRVIDEOSDK_MISMATCHCLIENTVER | 4 | 不支持的sdk版本    |
|CRVIDEOSDK_PARAM_ERR | 5| 参数错误    |
|CRVIDEOSDK_ERR_DATA | 6 | 无效数据    |
|CRVIDEOSDK_ANCTPSWD_ERR |7 | AppID或AppSecret不正确    |
|CRVIDEOSDK_SERVER_EXCEPTION | 8 | 服务异常    |
|CRVIDEOSDK_LOGINSTATE_ERROR | 9 | 登录状态错误    |
|CRVIDEOSDK_KICKOUT_BY_RELOGIN | 10 | 帐号在别处被使用    |
|CRVIDEOSDK_NOT_INIT		 | 11 | sdk未初始化    |
|CRVIDEOSDK_NOT_LOGIN | 12 | 还没有登录    |
|CRVIDEOSDK_BASE64_COV_ERR | 13 | base64转换失败    |
|CRVIDEOSDK_CUSTOMAUTH_NOINFO | 14 | 启用了第三方鉴权，但没有携带鉴权信息 |
|CRVIDEOSDK_CUSTOMAUTH_NOTSUPPORT | 15 | 没有启用第三方鉴权，但携带了鉴权信息 |
|CRVIDEOSDK_CUSTOMAUTH_EXCEPTION | 16 | 访问第三方鉴权服务异常 |
|CRVIDEOSDK_CUSTOMAUTH_FAILED | 17 | 第三方鉴权不通过 |
|CRVIDEOSDK_TOKEN_TIMEOUT | 18 | token已过期 |
|CRVIDEOSDK_TOKEN_AUTHINFOERR | 19 | 鉴权信息错误 |
|CRVIDEOSDK_TOKEN_APPIDNOTEXIST | 20 | appid不存在 |
|CRVIDEOSDK_TOKEN_AUTH_FAILED | 21 | 鉴权失败 |
|CRVIDEOSDK_TOKEN_NOTTOKENTYPE | 22 | 非token鉴权方式 |
|CRVIDEOSDK_API_NO_PERMISSION | 23 | 没有api访问权限 |
|CRVIDEOSDK_ACCOUNT_EXPIRED | 24 | 账号已过期 |
|CRVIDEOSDK_NETWORK_INITFAILED | 200 | 网络初始化失败  |
|CRVIDEOSDK_NO_SERVERINFO | 201 | 没有服务器信息    |
|CRVIDEOSDK_NOSERVER_RSP | 202 | 服务器没有响应    |
|CRVIDEOSDK_CREATE_CONN_FAILED | 203 | 创建连接失败    |
|CRVIDEOSDK_SOCKETEXCEPTION | 204 | socket异常    |
|CRVIDEOSDK_SOCKETTIMEOUT | 205 | 网络超时    |
|CRVIDEOSDK_FORCEDCLOSECONNECTION | 206 | 连接被关闭    |
|CRVIDEOSDK_CONNECTIONLOST | 207 | 连接丢失    |
|CRVIDEOSDK_VOICEENG_INITFAILED  | 208  | 语音引擎初始化失败  |
|CRVIDEOSDK_SSL_ERR  | 209  | ssl错误  |
|CRVIDEOSDK_RSPDAT_ERR  | 210  | 响应数据不正确  |
|CRVIDEOSDK_QUE_ID_INVALID |400 | 队列ID错误    |
|CRVIDEOSDK_QUE_NOUSER | 401 | 没有用户在排队    |
|CRVIDEOSDK_QUE_USER_CANCELLED |402| 排队用户已取消    |
|CRVIDEOSDK_QUE_SERVICE_NOT_START | 403 | 队列服务还未开启    |
|CRVIDEOSDK_ALREADY_OTHERQUE | 404 | 已在其它队列排队(客户只能在一个队列排队)    |
|CRVIDEOSDK_INVALID_CALLID | 600 | 无效的呼叫ID    |
|CRVIDEOSDK_ERR_CALL_EXIST | 601| 已在呼叫中    |
|CRVIDEOSDK_ERR_BUSY | 602| 对方忙    |
|CRVIDEOSDK_ERR_OFFLINE | 603 | 对方不在线    |
|CRVIDEOSDK_ERR_NOANSWER | 604| 对方无应答    |
|CRVIDEOSDK_ERR_USER_NOT_FOUND | 605 | 用户不存在    |
|CRVIDEOSDK_ERR_REFUSE | 606 | 对方拒接    |
|CRVIDEOSDK_MEETNOTEXIST | 800 | 房间不存在或已结束    |
|CRVIDEOSDK_AUTHERROR | 801 | 房间密码不正确    |
|CRVIDEOSDK_MEMBEROVERFLOWERROR | 802| 房间终端数量已满（购买的license不够)    |
|CRVIDEOSDK_RESOURCEALLOCATEERROR | 803 | 分配房间资源失败    |
|CRVIDEOSDK_MEETROOMLOCKED | 804 | 房间已加锁    |
|CRVIDEOSDK_BALANCELESSERROR | 805 | 余额不足    |
|CRVIDEOSDK_SEVICE_NOTENABLED | 806 | 业务权限未开启     |
|CRVIDEOSDK_ALREADYLOGIN | 807 | 不能再次登录    |
|CRVIDEOSDK_MIC_NORIGHT   | 808  | 没有mic权限  |
|CRVIDEOSDK_MIC_BEING_USED  | 809  | mic已被使用  |
|CRVIDEOSDK_MIC_UNKNOWERR   | 810  | mic未知错误  |
|CRVIDEOSDK_SPK_NORIGHT   | 811  | 没有扬声器权限  |
|CRVIDEOSDK_SPK_BEING_USED   | 812  | 扬声器已被使用  |
|CRVIDEOSDK_SPK_UNKNOWERR   | 813  | 扬声器未知错误  |
|CRVIDEOSDK_PIC_ISNULL   | 814  | 图像为空  |
|CRVIDEOSDK_CATCH_SCREEN_ERR | 900| 抓屏失败    |
|CRVIDEOSDK_RECORD_MAX | 901| 单次录制达到最大时长(8h)    |
|CRVIDEOSDK_RECORD_NO_DISK | 902| 磁盘空间不够    |
|CRVIDEOSDK_RECORD_SIZE_ERR | 903| 录像的分辨率超出限制    |
|CRVIDEOSDK_CFG_RESTRICTED | 904 | 录制参数超出限制 |
|CRVIDEOSDK_FILE_ERR | 905 | 录制文件操作出错 |
|CRVIDEOSDK_RECORDSTARTED | 906 | 录制已开启 |
|CRVIDEOSDK_NOMORE_MCU | 907 | 录制服务器任务已满 |
|CRVIDEOSDK_SVRRECORD_SPACE_FULL | 908 | 购买的云端录像空间已满 |
|CRVIDEOSDK_SENDFAIL | 1000 | 发送失败    |
|CRVIDEOSDK_CONTAIN_SENSITIVEWORDS | 1001 | 有敏感词语    |
|CRVIDEOSDK_SENDCMD_LARGE | 1100 | 发送信令数据过大    |
|CRVIDEOSDK_SENDBUFFER_LARGE |1101| 发送数据过大    |
|CRVIDEOSDK_SENDDATA_TARGETINVALID | 1102 | 目标用户不存在    |
|CRVIDEOSDK_SENDFILE_FILEINERROR | 1103 | 文件错误    |
|CRVIDEOSDK_TRANSID_INVALID | 1104 | 无效的发送id    |
|CRVIDEOSDK_RECORDFILE_STATE_ERR | 1200 | 状态错误不可上传/取消上传    |
|CRVIDEOSDK_RECORDFILE_NOT_EXIST | 1201 | 录制文件不存在    |
|CRVIDEOSDK_RECORDFILE_UPLOAD_FAILED   | 1202  | 上传失败，失败原因参考日志  |
|CRVIDEOSDK_RECORDFILE_DEL_FAILED   | 1203  | 移除本地文件失败  |
|CRVIDEOSDK_IPCAM_URLERR | 1300 | 网络摄像头url不正确    |
|CRVIDEOSDK_IPCAM_ALREADYEXIST | 1301 | 网络摄像头已存在    |
|CRVIDEOSDK_IPCAM_TOOMUCH | 1302 | 网络摄像头达到最大数量    |
|CRVIDEOSDK_FILE_NOT_EXIST | 1400 | 文件不存在    |
|CRVIDEOSDK_FILE_READ_ERR | 1401 | 文件读失败    |
|CRVIDEOSDK_FILE_WRITE_ERR | 1402 | 文件写失败    |
|CRVIDEOSDK_FILE_ALREADY_EXIST  | 1403  |  目标文件已存在 |
|CRVIDEOSDK_FILE_OPERATOR_ERR   | 1404  | 文件操作失败  |
|CRVIDEOSDK_FILE_SIZE_UNSUPPORT   | 1405  | 不支持的文件尺寸  |
|CRVIDEOSDK_NETDISK_NOT_EXIST   | 1500  | 网盘不存在  |
|CRVIDEOSDK_NETDISK_PERMISSIONDENIED  | 1501  | 没有网盘权限  |
|CRVIDEOSDK_NETDISK_INVALIDFILENAME   | 1502  |  不合法文件名 |
|CRVIDEOSDK_NETDISK_FILEALREADYEXISTS   | 1503  | 文件已存在  |
|CRVIDEOSDK_NETDISK_FILEORDIRECTORYNOTEXISTS   | 1504  | 文件或目录不存在  |
|CRVIDEOSDK_NETDISK_FILENOTTRANSFORM   | 1505  | 文件没有转换  |
|CRVIDEOSDK_NETDISK_TRANSFORMFAILED | 1506  | 文件转换失败  |
|CRVIDEOSDK_NETDISK_NOSPACE   | 1507  | 空间不足  |

<h3 id=CRVIDEOSDK_MEETING_DROPPED_REASON>房间断线原因</h3>

>MEETING_DROPPED_REASON

<!-- ## 房间断线原因  -->

----

| 代码     | 数值        | 含义      |
|:-------- |:-----------|:----------|
|CRVIDEOSDK_DROPPED_TIMEOUT  |0|网络通信超时|
|CRVIDEOSDK_DROPPED_KICKOUT  |1|被他人请出会议|
|CRVIDEOSDK_DROPPED_BALANCELESS  |2|余额不足|
|CRVIDEOSDK_DROPPED_TOKENINVALID  |3|Token鉴权方式下，token无效或过期|
<h3 id=CRVideo_ASTATUS>SDK日志等级定义</h3>
<!-- ## 麦克风状态  -->

>model.SDK_LOG_LEVEL_DEF

----

| 代码     | 数值        | 含义      |
|:-------- |:-----------|:----------|
|CRVIDEOSDK_LOG_DEBUG  |0|调试日志	   |
|CRVIDEOSDK_LOG_INFO  |1|重要日志	   |
|CRVIDEOSDK_LOG_WARN  |2|警告日志	   |
|CRVIDEOSDK_LOG_ERR  |3|错误日志	   |



<h3 id=ASTATUS>麦克风状态</h3>
<!-- ## 麦克风状态  -->

>ASTATUS

----

| 代码     | 数值        | 含义      |
|:-------- |:-----------|:----------|
|CRVIDEOSDK_AUNKNOWN  |0   |麦克风状态未知	   |
|CRVIDEOSDK_ANULL	   |1	|没有麦克风设备	   |
|CRVIDEOSDK_ACLOSE	   |2	|麦克风处于关闭状态（软开关）|
|CRVIDEOSDK_AOPEN	   |3	|麦克风处于打开状态（软开关）	|
|CRVIDEOSDK_AOPENING  |4	|开麦申请中	|
|CRVIDEOSDK_AOPENING2 |   5   |帮助他人开麦中 |


<h3 id=VIDEO_SIZE_TYPE>视频尺寸定义</h3>
<!-- ## 视频尺寸定义  -->

>VIDEO_SIZE_TYPE

----

| 代码     | 数值        |   分辨率及码率   |
|:-------- |:-----------|:----------|
|VSIZE_SZ_128	|0|224*128, 推荐码率：72kbps|
|VSIZE_SZ_160	|1|288*160, 推荐码率：100kbps|
|VSIZE_SZ_192	|2|336*192, 推荐码率：150kbps  |
|VSIZE_SZ_256	|3|448*256, 推荐码率：200kbps	 |
|VSIZE_SZ_288	|4|512*288, 推荐码率：250kbps	 |
|VSIZE_SZ_320	|5|576*320, 推荐码率：300kbps  |
|VSIZE_SZ_360	|6|640*360, 推荐码率：350kbps  |
|VSIZE_SZ_400	|7|720*400, 推荐码率：420kbps  |
|VSIZE_SZ_480	|8|848*480, 推荐码率：500kbps  |
|VSIZE_SZ_576	|9|1024*576, 推荐码率：650kbps  |
|VSIZE_SZ_720	|10|1280*720, 推荐码率：1mbps  |
|VSIZE_SZ_1080	|11|1920*1080, 推荐码率：2mbps  |


<h3 id=VSTATUS>摄像头（视频）状态定义</h3>
<!-- ## 摄像头（视频）状态定义  -->

>VSTATUS

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| CRVIDEOSDK_UNKNOWN|	0	|摄像头状态未知	|
| CRVIDEOSDK_NULL	|1|	没有摄像头设备	   |
| CRVIDEOSDK_CLOSE	|2|摄像头处于关闭状态（软开关）|
| CRVIDEOSDK_OPEN	|3|	摄像头处于打开状态（软开关）|
| CRVIDEOSDK_OPENING|	4	|向服务器发送打开消息中	 |


<h3 id=VIDEO_FORMAT>视频图像格式</h3>
<!-- ## 视频图像格式  -->

>VIDEO_FORMAT

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| CRVIDEOSDK_VFMT_INVALID|-1    |无效格式       |
| CRVIDEOSDK_VFMT_YUV420P|0	|yuv420p	   |
| CRVIDEOSDK_VFMT_ARGB32	|1 |32-bit ARGB format (0xAARRGGBB)	 |
| CRVIDEOSDK_VFMT_ARGA32    |2 |32-bit ARGB format (0xAARRGGBB)     |
| CRVIDEOSDK_VFMT_H264    |3 |32-bit ARGB format (0xAARRGGBB)     |


<h3 id=MIXER_VCONTENT_TYPE>混图内容类型</h3>
<!-- ## 视频图像格式  -->

>MIXER_VCONTENT_TYPE

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| MIXVTP_VIDEO|0	|摄像头|
| MIXVTP_PIC|1	|图片	   |
| MIXVTP_SCREEN|2	|屏幕  |
| MIXVTP_MEDIA|3	|影音共享	   |
| MIXVTP_TIMESTAMP|4	|时间戳	   |
| MIXVTP_REMOTE_SCREEN|5	|远端共享的屏幕	   |
| MIXVTP_WBOARD|6	|白板	   |
| MIXVTP_TEXT|7	|文本	   |

<h3 id=MIXER_OUTPUT_TYPE>混图输出类型</h3>
<!-- ## 视频图像格式  -->

>MIXER_OUTPUT_TYPE

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| MIXOT_FILE|0	|录像文件|
| MIXOT_LIVE|1	|直播流	   |

<h3 id=MIXER_STATE>混图器状态</h3>
<!-- ## 视频图像格式  -->

>MIXER_STATE

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| MIXER_NULL|0	|没有创建|
| MIXER_STARTING|1	|正在开启	   |
| MIXER_RUNNING|2	|正在运行	   |
| MIXER_RUNNING|4	|正在结束      |



<h3 id=MIXER_OUTPUT_STATE>混图器输出状态</h3>
<!-- ## 视频图像格式  -->

>MIXER_OUTPUT_STATE

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| OUTPUT_NONE|0	|没有创建|
| OUTPUT_CREATED|1	|输出对象已创建	   |
| OUTPUT_WRITING|2	|输出目标信息更新	   |
| OUTPUT_CLOSED|3	|输出对象已关闭	   |
| OUTPUT_ERR|4	|输出对象异常	   |

<h3 id=RECORD_FILE_STATE>录制文件上传状态</h3>
<!-- ## 视频图像格式  -->

>RECORD_FILE_STATE

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| RFS_NoUpload|0	|未上传|
| RFS_Uploading|1	|上传中	   |
| RFS_Uploaded|2	|已上传	   |
| RFS_UploadFail|3	|上传失败	   |

<h3 id=MAIN_PAGE>主功能页类型</h3>
<!-- ## 视频图像格式  -->

>MAIN_PAGE

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| MAINPAGE_VIDEOWALL|0	|视频墙|
| MAINPAGE_SCREENSHARE|1	|屏幕共享	   |
| MAINPAGE_WHITEBOARD|2	|电子白板	   |
| MAINPAGE_MEDIASHARE|3	|影音共享	   |

<h3 id=MEDIA_STATE>影音播放状态</h3>
<!-- ## 视频图像格式  -->

>MEDIA_STATE

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| MEDIA_START|0	|开始|
| MEDIA_PAUSE|1	|暂停	   |
| MEDIA_STOP|2	|停止	   |

<h3 id=MEDIA_STOP_REASON>影音结束原因</h3>
<!-- ## 视频图像格式  -->

>MEDIA_STOP_REASON

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| MEDIA_CLOSE|0	|文件关闭|
| MEDIA_FINI|1	|播放到文件尾部	   |
| MEDIAMEDIA_FILEOPEN_ERR_STOP|2	|打开文件失败	   |
| MEDIA_FORMAT_ERR|3	|文件格式错误	   |
| MEDIA_UNSUPPORT|4	|影音格式不支持	   |
| MEDIA_EXCEPTION|5 |其他异常	   |

<h3 id=VIDEO_LAYOUT_MODE >视频墙分屏模式</h3>
<!-- ## 视频图像格式  -->

>VIDEO_LAYOUT_MODE 

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| VLO_1v1_M|0	|互看|
| VLO_WALL1_M|1	|1分屏|	   
| VLO_WALL2|2	|2分屏|
| VLO_WALL4|3	|4分屏|
| VLO_WALL5_M|4	|5分屏|
| VLO_WALL6_M|5	|6分屏|
| VLO_WALL9|6	|9分屏|
| VLO_WALL13_M|7	|13分屏|
| VLO_WALL16|8	|16分屏|
| VLO_WALL25|9	|25分屏|

<h3 id=HTTP_TRANSFER_STATE >Http文件传输状态</h3>
<!-- ## 视频图像格式  -->

>HTTP_TRANSFER_STATE 

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| HTTPFS_NULL|0	|	未开始|
| HTTPFS_QUEUE|1	|	排队中|
| HTTPFS_TRANSFERING|2	|	传输(上传/下载)中|
| HTTPFS_FINISHED|3	|	传输完成|

<h3 id=HTTP_TRANSFER_RESULT >Http文件传输结果</h3>
<!-- ## 视频图像格式  -->

>HTTP_TRANSFER_RESULT 

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| HTTPR_Success|0	|	成功|
| HTTPR_InnerErr|1	|	内部错误|
| HTTPR_ParamErr|2	|	参数错误|
| HTTPR_NetworkFail|3	|	网络不通/地址不对|
| HTTPR_NetworkTimeout|4	|	超时失败|
| HTTPR_FileOperationFail|5	|	文件操作失败|
| HTTPR_PathNotSupprot|6	|	不支持的路径|
| HTTPR_FileTransfering|7	|	文件正在传输|
| HTTPR_HTTPERR_BEGIN|1000	|	http错误码启始|
| HTTPR_HTTPERR_END|1999	|	http错误码结束|

<h3 id=CLIENT_STATUS >用户状态</h3>
<!-- ## 视频图像格式  -->

>CLIENT_STATUS 

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| OFFLINE|0	|	离线状态|
| ONLINE|1	|	在线，且空闲状态|
| BUSY|2	|	在线，忙状态|
| MEETING|3	|	在线，在房间中状态|

<h3 id=INVITE_STATUS >呼叫状态</h3>
<!-- ## 视频图像格式  -->

>INVITE_STATUS 

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| IS_RINGING|0	|	振铃|
| IS_ACCEPTED|1	|	接通|
| IS_DECLINED|2	|	拒绝|
| IS_NORESPONSE|3	|	未应答|
| IS_hangup|4	|	挂断|
