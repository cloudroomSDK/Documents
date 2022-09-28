# 常量定义
>相关数值及含义定义

----

<!-- ## 错误码 {#CRVIDEOSDK_ERR_DEF} -->

<h2 id=CRVIDEOSDK_ERR_DEF> 错误码</h2>

>com.cloudroom.cloudroomvideosdk.model.CRVIDEOSDK_ERR_DEF

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
|CRVIDEOSDK_DEV_NOTEXIST | 815 | 设备不存在 |
|CRVIDEOSDK_MIC_OPENTOOMUCH | 816 | 开麦达到上限 |
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

<h2 id=CRVIDEOSDK_MEETING_DROPPED_REASON>房间断线原因</h2>

>com.cloudroom.cloudroomvideosdk.model.MEETING_DROPPED_REASON

<!-- ## 房间断线原因  -->

----

| 代码     | 数值        | 含义      |
|:-------- |:-----------|:----------|
|CRVIDEOSDK_DROPPED_TIMEOUT  |0|网络通信超时|
|CRVIDEOSDK_DROPPED_KICKOUT  |1|被他人请出会议|
|CRVIDEOSDK_DROPPED_BALANCELESS  |2|余额不足|
|CRVIDEOSDK_DROPPED_TOKENINVALID  |3|Token鉴权方式下，token无效或过期|

<h2 id=CRVideo_ASTATUS>SDK日志等级定义</h2>
<!-- ## 麦克风状态  -->

>com.cloudroom.cloudroomvideosdk.model.SDK_LOG_LEVEL_DEF

----

| 代码     | 数值        | 含义      |
|:-------- |:-----------|:----------|
|SDKLEVEL_DEBUG  |0|调试日志	   |
|SDKLEVEL_INFO  |1|重要日志	   |
|SDKLEVEL_WARN  |2|警告日志	   |
|SDKLEVEL_ERR  |3|错误日志	   |
|SDKLEVEL_CRIT  |4|崩溃日志	   |



<h2 id=ASTATUS>麦克风状态</h2>
<!-- ## 麦克风状态  -->

>com.cloudroom.cloudroomvideosdk.model.ASTATUS

----

| 代码     | 数值        | 含义      |
|:-------- |:-----------|:----------|
|AUNKNOWN  |0   |麦克风状态未知	   |
|ANULL	   |1	|没有麦克风设备	   |
|ACLOSE	   |2	|麦克风处于关闭状态（软开关）|
|AOPEN	   |3	|麦克风处于打开状态（软开关）	|
|AOPENING  |4	|向服务器发送打开消息中	|
|AACCEPTING |   5   |向服务器发送帮助他人开麦中 |


<h2 id=VSTATUS>摄像头（视频）状态定义</h2>
<!-- ## 摄像头（视频）状态定义  -->

>com.cloudroom.cloudroomvideosdk.model.VSTATUS

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| VUNKNOWN|	0	|摄像头状态未知	|
| VNULL	|1|	没有摄像头设备	   |
| VCLOSE	|2|摄像头处于关闭状态（软开关）|
| VOPEN	|3|	摄像头处于打开状态（软开关）|
| VOPENING|	4	|向服务器发送打开消息中	 |


<h2 id=VIDEO_FORMAT>视频图像格式</h2>
<!-- ## 视频图像格式  -->

>com.cloudroom.cloudroomvideosdk.model.VIDEO_FORMAT

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| VFMT_YUV420P	|0	|yuv420p	   |
| VFMT_ARGB32	|2 |32-bit ARGB format (0xAARRGGBB)	 |
| VFMT_H264	|3	|h264	   |
| VFMT_OESTEXTURE	|4 |oes纹理	 |
| VFMT_NV21	|5	|NV21	   |
| VFMT_NV12	|6 |NV12	 |

<h2 id=MIXER_VCONTENT_TYPE>混图内容类型</h2>
<!-- ## 混图内容类型  -->

>com.cloudroom.cloudroomvideosdk.model.MIXER_VCONTENT_TYPE

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| MIXVTP_VIDEO|0	|摄像头|
| MIXVTP_PIC|1	|图片	   |
| MIXVTP_SCREEN|2	|屏幕  |
| MIXVTP_MEDIA|3	|影音共享	   |
| MIXVTP_REMOTE_SCREEN|5	|远端共享的屏幕	   |
| MIXVTP_WBOARD|6	|白板	   |
| MIXVTP_TEXT|10	|文本	   |

<h2 id=MIXER_OUTPUT_TYPE>混图输出类型</h2>
<!-- ## 混图输出类型  -->

>com.cloudroom.cloudroomvideosdk.model.MIXER_OUTPUT_TYPE

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| MIXOT_FILE|0	|录像文件|
| MIXOT_LIVE|1	|直播流	   |

<h2 id=MIXER_STATE>混图器状态</h2>
<!-- ## 混图器状态  -->

>com.cloudroom.cloudroomvideosdk.model.MIXER_STATE

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| MIXER_NULL|0	|没有创建|
| MIXER_STARTING|1	|正在开启	   |
| MIXER_RUNNING|2	|正在运行	   |
| MIXER_PAUSED|3	|暂停中(仅本地录制、直播支持）	   |
| MIXER_STOPPING|4	|正在结束      |

<h2 id=MIXER_OUTPUT_STATE>混图器输出状态</h2>
<!-- ## 混图器输出状态  -->

>com.cloudroom.cloudroomvideosdk.model.MIXER_OUTPUT_STATE

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| OUTPUT_NONE|0	|没有创建|
| OUTPUT_CREATED|1	|输出对象已创建	   |
| OUTPUT_WRITING|2	|输出目标信息更新	   |
| OUTPUT_CLOSED|3	|输出对象已关闭	   |
| OUTPUT_ERR|4	|输出对象异常	   |
| OUTPUT_UPLOADING|5	|输出对象正在上传	   |
| OUTPUT_UPLOADSUCCESS|6	|输出对象上传成功	   |
| OUTPUT_UPLOADERR|7	|输出对象上传失败	   |

<h2 id=CLOUDMIXER_OUTPUT_STATE>云端混图器输出状态</h2>
<!-- ## 云端混图器输出状态  -->

>com.cloudroom.cloudroomvideosdk.model.CLOUDMIXER_OUTPUT_STATE

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| CLOUDMO_NULL|0	|未录制/直播|
| CLOUDMO_RUNNING|1	|录制/直播中	   |
| CLOUDMO_STOPPED|2	|录制/直播结束	   |
| CLOUDMO_FAIL|3	|录制/直播失败	   |
| CLOUDMO_UPLOADING|4	|输出对象正在上传	   |
| CLOUDMO_UPLOADED|5	|输出对象上传成功	   |
| CLOUDMO_UPLOADFAIL|6	|输出对象上传失败	   |


<h2 id=RECORD_FILE_STATE>录制文件上传状态</h2>
<!-- ## 录制文件上传状态  -->

>com.cloudroom.cloudroomvideosdk.model.RECORD_FILE_STATE

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| RFS_NoUpload|0	|未上传|
| RFS_Uploading|1	|上传中	   |
| RFS_Uploaded|2	|已上传	   |
| RFS_UploadFail|3	|上传失败	   |

<h2 id=MAIN_PAGE>主功能页类型</h2>
<!-- ## 主功能页类型  -->

>com.cloudroom.cloudroomvideosdk.model.MAIN_PAGE

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| MAINPAGE_VIDEOWALL|0	|视频墙|
| MAINPAGE_SCREENSHARE|1	|屏幕共享	   |
| MAINPAGE_WHITEBOARD|2	|电子白板	   |
| MAINPAGE_MEDIASHARE|3	|影音共享	   |

<h2 id=MEDIA_STATE>影音播放状态</h2>
<!-- ## 影音播放状态  -->

>com.cloudroom.cloudroomvideosdk.model.MEDIA_STATE

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| MEDIA_START|0	|开始|
| MEDIA_PAUSE|1	|暂停	   |
| MEDIA_STOP|2	|停止	   |

<h2 id=MEDIA_STOP_REASON>影音结束原因</h2>
<!-- ## 影音结束原因  -->

>com.cloudroom.cloudroomvideosdk.model.MEDIA_STOP_REASON

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| MEDIA_CLOSE|0	|文件关闭|
| MEDIA_FINI|1	|播放到文件尾部	   |
| MEDIAMEDIA_FILEOPEN_ERR_STOP|2	|打开文件失败	   |
| MEDIA_FORMAT_ERR|3	|文件格式错误	   |
| MEDIA_UNSUPPORT|4	|影音格式不支持	   |
| MEDIA_EXCEPTION|5 |其他异常	   |

<h2 id=VIDEO_WALL_MODE >视频墙分屏模式</h2>
<!-- ## 视频墙分屏模式  -->

>com.cloudroom.cloudroomvideosdk.model.VIDEO_WALL_MODE 

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

<h2 id=HTTP_TRANSFER_STATE >Http文件传输状态</h2>
<!-- ## Http文件传输状态  -->

>com.cloudroom.cloudroomvideosdk.model.HTTP_TRANSFER_STATE 

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| HTTPFS_NULL|0	|	未开始|
| HTTPFS_QUEUE|1	|	排队中|
| HTTPFS_TRANSFERING|2	|	传输(上传/下载)中|
| HTTPFS_FINISHED|3	|	传输完成|

<h2 id=HTTP_TRANSFER_RESULT >Http文件传输结果</h2>
<!-- ## Http文件传输结果  -->

>com.cloudroom.cloudroomvideosdk.model.HTTP_TRANSFER_RESULT 

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

<h2 id=CLIENT_STATUS >用户状态</h2>
<!-- ## 用户状态  -->

>com.cloudroom.cloudroomvideosdk.model.CLIENT_STATUS 

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| OFFLINE|0	|	离线状态|
| ONLINE|1	|	在线，且空闲状态|
| BUSY|2	|	在线，忙状态|
| MEETING|3	|	在线，在房间中状态|

<h2 id=INVITE_STATUS >呼叫状态</h2>
<!-- ## 呼叫状态  -->

>com.cloudroom.cloudroomvideosdk.model.INVITE_STATUS 

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| IS_RINGING|0	|	振铃|
| IS_ACCEPTED|1	|	接通|
| IS_DECLINED|2	|	拒绝|
| IS_NORESPONSE|3	|	未应答|
| IS_hangup|4	|	挂断|
