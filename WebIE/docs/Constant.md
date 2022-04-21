# 常量定义

<!-- ## 错误码 {#CRVIDEOSDK_ERR_DEF} -->

<h2  id=CRVIDEOSDK_ERR_DEF> 错误码</h2>

>CRVIDEOSDK_ERR_DEF

----

| 代码     | 数值        | 含义      |
|:-------- |:-----------|:----------|
| CRVIDEOSDK_NOERR  | 0 | 没有错误    |
| CRVIDEOSDK_UNKNOWERR | 1| 未知错误    |
| CRVIDEOSDK_OUTOF_MEM  | 2 | 内存不足    |
| CRVIDEOSDK_INNER_ERR | 3| sdk内部错误    |
| CRVIDEOSDK_MISMATCHCLIENTVER | 4 | 不支持的sdk版本    |
| CRVIDEOSDK_MEETPARAM_ERR | 5| 参数错误    |
| CRVIDEOSDK_ERR_DATA | 6 | 无效数据    |
| CRVIDEOSDK_ANCTPSWD_ERR |7 | 帐号密码不正确    |
| CRVIDEOSDK_SERVER_EXCEPTION | 8 | 服务异常    |
| CRVIDEOSDK_LOGINSTATE_ERROR | 9 | 登录状态错误    |
| CRVIDEOSDK_CRVideoSDK_USER_BEEN_KICKOUT | 10 | 登录用户被踢下线    |
| CRVIDEOSDK_NOT_INIT 	| 11 	|sdk未初始化 |
| CRVIDEOSDK_NOT_LOGIN | 12 | 还没有登录    |
| CRVIDEOSDK_BASE64_COV_ERR |	13 |	base64转换失败|
| CRVIDEOSDK_CUSTOMAUTH_NOINFO 	|14 	|启用了第三方鉴权，但没有携带鉴权信息|
| CRVIDEOSDK_CUSTOMAUTH_NOTSUPPORT |	15 	|没有启用第三方鉴权，但携带了鉴权信息|
| CRVIDEOSDK_CUSTOMAUTH_EXCEPTION 	|16 |	访问第三方鉴权服务异常|
| CRVIDEOSDK_CUSTOMAUTH_FAILED |	17 	|第三方鉴权不通过|
| CRVIDEOSDK_TOKEN_TIMEOUT | 18 | token已过期 |
| CRVIDEOSDK_TOKEN_AUTHINFOERR | 19 | 鉴权信息错误 |
| CRVIDEOSDK_TOKEN_APPIDNOTEXIST | 20 | appid不存在 |
| CRVIDEOSDK_TOKEN_AUTH_FAILED | 21 | 鉴权失败 |
| CRVIDEOSDK_TOKEN_NOTTOKENTYPE | 22 | 非token鉴权方式 |
| CRVIDEOSDK_NETWORK_INITFAILED | 200 | 网络初始化失败  |
| CRVIDEOSDK_NO_SERVERINFO | 201 | 没有服务器信息    |
| CRVIDEOSDK_NOSERVER_RSP | 202 | 服务器没有响应    |
| CRVIDEOSDK_CREATE_CONN_FAILED | 203 | 创建连接失败    |
| CRVIDEOSDK_SOCKETEXCEPTION | 204 | socket异常    |
| CRVIDEOSDK_SOCKETTIMEOUT | 205 | 网络超时    |
| CRVIDEOSDK_FORCEDCLOSECONNECTION | 206 | 连接被关闭    |
| CRVIDEOSDK_CONNECTIONLOST | 207 | 连接丢失    |
| CRVIDEOSDK_VOICEENG_INITFAILED | 208 | 语音引擎初始化失败    |
| CRVIDEOSDK_SSL_ERR			|209|ssl相关错误|
| CRVIDEOSDK_QUE_ID_INVALID |400 | 队列ID错误    |
| CRVIDEOSDK_QUE_NOUSER | 401 | 没有用户在排队    |
| CRVIDEOSDK_QUE_USER_CANCELLED |402| 排队用户已取消    |
| CRVIDEOSDK_QUE_SERVICE_NOT_START | 403 | 队列服务还未开启    |
| CRVIDEOSDK_ALREADY_OTHERQUE | 404 | 已在其它队列排队(客户只能在一个队列排队)    |
| CRVIDEOSDK_INVALID_CALLID | 600 | 无效的呼叫ID    |
| CRVIDEOSDK_ERR_CALL_EXIST | 601| 已在呼叫中    |
| CRVIDEOSDK_ERR_BUSY | 602| 对方忙    |
| CRVIDEOSDK_ERR_OFFLINE | 603 | 对方不在线    |
| CRVIDEOSDK_ERR_NOANSWER | 604| 对方无应答    |
| CRVIDEOSDK_ERR_USER_NOT_FOUND | 605 | 用户不存在    |
| CRVIDEOSDK_ERR_REFUSE | 606 | 对方拒接    |
| CRVIDEOSDK_MEETNOTEXIST | 800 | 房间不存在或已结束   |
| CRVIDEOSDK_AUTHERROR | 801 | 房间密码不正确    |
| CRVIDEOSDK_MEMBEROVERFLOWERROR | 802| 房间终端数量已满（购买的license不够)    |
| CRVIDEOSDK_RESOURCEALLOCATEERROR | 803 | 分配房间资源失败    |
| CRVIDEOSDK_MEETROOMLOCKED | 804 | 房间已加锁    |
| CRVIDEOSDK_BALANCELESSERROR | 805 | 余额不足    |
| CRVIDEOSDK_SEVICE_NOTENABLED | 806 | 业务权限未开启     |
| CRVIDEOSDK_ALREADYLOGIN | 807 | 不能再次登录    |
| CRVIDEOSDK_MIC_NORIGHT				|808|没有mic权限|
| CRVIDEOSDK_MIC_BEING_USED			|809|mic已被使用|
| CRVIDEOSDK_MIC_UNKNOWERR			|810|mic相关未知错误|
| CRVIDEOSDK_SPK_NORIGHT				|811|没有扬声器权限|
| CRVIDEOSDK_SPK_BEING_USED			|812|扬声器已被使用|
| CRVIDEOSDK_SPK_UNKNOWERR			|813|扬声器相关未知错误|
| CRVIDEOSDK_CATCH_SCREEN_ERR | 900| 抓屏失败    |
| CRVIDEOSDK_RECORD_MAX | 901| 单次录制达到最大时长(8h)    |
| CRVIDEOSDK_RECORD_NO_DISK | 902| 磁盘空间不够    |
| CRVIDEOSDK_RECORD_SIZE_ERR | 903| 录像的分辨率超出限制    |
| CRVIDEOSDK_CFG_RESTRICTED          |904|配置超出限制|
| CRVIDEOSDK_FILE_ERR				|905|录像文件操作出错|
| CRVIDEOSDK_RECORDSTARTED			|906|录像已开启|
| CRVIDEOSDK_NOMORE_MCU | 907 | 录制服务器任务已满 |
| CRVIDEOSDK_SENDFAIL | 1000 | 发送失败    |
| CRVIDEOSDK_CONTAIN_SENSITIVEWORDS | 1001 | 有敏感词语    |
| CRVIDEOSDK_SENDCMD_LARGE | 1100 | 发送信令数据过大    |
| CRVIDEOSDK_SENDBUFFER_LARGE |1101| 发送数据过大    |
| CRVIDEOSDK_SENDDATA_TARGETINVALID | 1102 | 目标用户不存在    |
| CRVIDEOSDK_SENDFILE_FILEINERROR | 1103 | 文件错误    |
| CRVIDEOSDK_TRANSID_INVALID | 1104 | 无效的发送id    |
| CRVIDEOSDK_RECORDFILE_STATE_ERR | 1200 | 状态错误不可上传/取消上传    |
| CRVIDEOSDK_RECORDFILE_NOT_EXIST | 1201 | 录制文件不存在    |
| CRVIDEOSDK_IPCAM_URLERR | 1300 | 网络摄像头url不正确    |
| CRVIDEOSDK_IPCAM_ALREADYEXIST | 1301 | 网络摄像头已存在    |
| CRVIDEOSDK_IPCAM_TOOMUCH | 1302 | 网络摄像头达到最大数量    |
| CRVIDEOSDK_FILE_NOT_EXIST | 1400 | 文件不存在    |
| CRVIDEOSDK_FILE_READ_ERR | 1401 | 文件读失败    |
| CRVIDEOSDK_FILE_WRITE_ERR | 1402 | 文件写失败    |
| CRVIDEOSDK_FILE_ALREADY_EXIST  | 1403  |  目标文件已存在 |
| CRVIDEOSDK_FILE_OPERATOR_ERR   | 1404  | 文件操作失败  |
| CRVIDEOSDK_WEB_OCX_NOTINSTALLED | 2001 | ocx未安装    |
| CRVIDEOSDK_WEB_BROWER_NOTUPPORTED | 2002 | 不支持的浏览器    |
| CRVIDEOSDK_OCX_VERSION_NOTUPPORTED | 2003 | 不支持的插件版本    |


<h2  id=CRVIDEOSDK_ASTATUS>麦克风状态</h2>
<!-- ## 麦克风状态  -->

>CRVIDEOSDK_ASTATUS

----

| 代码     | 数值        | 含义      |
|:-------- |:-----------|:----------|
|AUNKNOWN  |0|音频状态未知	   |
|ANULL	   |1	|没有麦克风设备	   |
|ACLOSE	   |2	|麦克风处于关闭状态（软开关）|
|AOPEN	   |3	|麦克风处于打开状态（软开关）	|
|AOPENING  |4	|向服务器发送打开消息中	|
|AACCEPTING |   5   |向服务器发送帮助他人开麦中 |


<h2  id=CRVIDEOSDK_VIDEO_SHOW_SIZE>视频尺寸定义</h2>
<!-- ## 视频尺寸定义  -->

>CRVIDEOSDK_VIDEO_SHOW_SIZE

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
|VIDEO_SZ_96	|1|推荐码率：70kbps（16:9时分辨率160*96）|
|VSIZE_SZ_128	|2|推荐码率：96kbps（16:9时分辨率224*128）|
|VSIZE_SZ_160	|3|推荐码率：123kbps（16:9时分辨率288*160）|
|VSIZE_SZ_192	|4|推荐码率：146kbps（16:9时分辨率352*192）	|
|VSIZE_SZ_256	|5|推荐码率：200kbps（16:9时分辨率448*256）	 |
|VSIZE_SZ_288	|6|推荐码率：250kbps（16:9时分辨率512*288）	 |
|VSIZE_SZ_320	|7|推荐码率：300kbps（16:9时分辨率576*320） 	 |
|VSIZE_SZ_360	|8|推荐码率：350kbps（16:9时分辨率640*360）	 |
|VSIZE_SZ_400	|9|推荐码率：420kbps（16:9时分辨率704*400）  |
|VSIZE_SZ_480	|10|推荐码率：500kbps（16:9时分辨率864*480）	 |
|VSIZE_SZ_576	|11| 推荐码率：650kbps（16:9时分辨率1024*576）|
|VSIZE_SZ_720	|12|推荐码率：1mbps（16:9时分辨率1280*720）	|
|VSIZE_SZ_1080	|13|推荐码率：2mbps（16:9时分辨率1920*1080）	|

<h2  id=CRVIDEOSDK_VSTATUS>摄像头（视频）状态定义</h2>
<!-- ## 摄像头（视频）状态定义  -->

>CRVIDEOSDK_VSTATUS

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| VUNKNOWN|	0	|摄像头状态未知	|
| VNULL	|1|	没有摄像头设备	   |
| VCLOSE	|2|摄像头处于关闭状态（软开关）|
| VOPEN	|3|	摄像头处于打开状态（软开关）|
| VOPENING|	4	|向服务器发送打开消息中	 |


<h2  id=CRVIDEOSDK_VIDEO_FORMAT>视频图像格式</h2>
<!-- ## 视频图像格式  -->

>CRVIDEOSDK_VIDEO_FORMAT

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| VFMT_YUV420P|0	|yuv420p	   |
| VFMT_ARGB32	|1 |32-bit ARGB format (0xAARRGGBB)	 |



<h2  id=CRVIDEOSDK_VIDEO_CFG_TAB>视频配置参考表</h2>
<!-- ## 视频尺寸定义  -->

>CRVIDEOSDK_VIDEO_CFG_TAB

----

|   <div style="width: 150px"> 视频尺寸（16:9时） </div>       |   <div style="width: 150px"> 推荐码率 </div>    |
|:--------------- |:----------|
|160\*96|	推荐码率：70kbps|
|224\*128|  推荐码率：96kbps|
|288\*160|	推荐码率：123kbps|
|352\*192|	推荐码率：146kbps	|
|448\*256|	推荐码率：200kbps	 |
|512\*288|	推荐码率：250kbps	 |
|576\*320|	推荐码率：300kbps 	 |
|640\*360|	推荐码率：350kbps	 |
|704\*400|	推荐码率：420kbps  |
|864\*480|	推荐码率：500kbps	 |
|1024\*576|	推荐码率：650kbps|
|1280\*720|	推荐码率：1mbps	|
|1920\*1080|	推荐码率：2mbps	|


<h2  id=CRVIDEOSDK_RECORD_AUDIO_TYPE>录制语音类型</h2>
<!-- ## 录制语音类型  -->

>CRVIDEOSDK_RECORD_AUDIO_TYPE

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| REC_AUDIO_TYPE_NULL|	0	|不录制任何语音	   |
| REC_AUDIO_TYPE_LOC	|1|	录制本地语音	|
| REC_AUDIO_TYPE_OTHER|	2|	录制其他人语音	   |
| REC_AUDIO_TYPE_ALL|	3	|录制本地+其他人语音	|

<h2  id=CRVIDEOSDK_RECORD_VIDEO_TYPE>录制图像类型</h2>
<!-- ## 录制图像类型  -->

>CRVIDEOSDK_RECORD_VIDEO_TYPE

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| REC_VCONTENT_NULL|	0	|不录制任何图像	   |
| RECORD_VIDEO_TYPE_SCREEN	|1|	录制屏幕	|
| REC_VCONTENT_VIDEOS|3|	录制视频图像   |


<h2  id=CRVIDEOSDK_RECORD_VLAYOUT>录制视频的布局类型</h2>
<!-- ## 录制视频的布局类型  -->

>CRVIDEOSDK_RECORD_VLAYOUT

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| REC_VLAYOUT_GRID|	0	|表格类型	   |
| REC_VLAYOUT_PIP	|1|	画中画类型(只有在录两个视频时有效)	|


<h2  id=CRVIDEOSDK_MOUSE_MSG_TYPE>鼠标事件类型</h2>
<!-- ## 鼠标事件类型  -->

>CRVIDEOSDK_MOUSE_MSG_TYPE

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| MOUSE_MOVE	|0|	鼠标移动|
| MOUSE_DOWN|	1|	鼠标键按下	 |
| MOUSE_UP|	2	|鼠标键弹起	   |
| MOUSE_DBCLICK	|3|	鼠标双击|


<h2  id=CRVIDEOSDK_MOUSE_KEY_TYPE>鼠标键类型</h2>
<!-- ## 鼠标键类型  -->

>CRVIDEOSDK_MOUSE_KEY_TYPE

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| MOUSEKEY_NULL|	0|	无	 |
| MOUSEKEY_L|1	|鼠标左键	|
| MOUSEKEY_M|	2	|鼠标中键	|
| MOUSEKEY_R|3|鼠标右键	 |
| MOUSEKEY_WHEEL|	4|	鼠标滚轮	|
| MOUSEKEY_X	|5	|鼠标侧键|

<h2  id=CRVIDEOSDK_KEY_MSG_TYPE>键盘事件类型</h2>
<!-- ## 键盘事件类型  -->

>CRVIDEOSDK_KEY_MSG_TYPE

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| KEYT_DWON|	0|	键值按下|
| KEYT_UP	|1	|键值弹起|


<h2  id=CRVIDEOSDK_MAIN_PAGE_TYPE>功能类型</h2>
<!-- ## 功能类型   -->

>CRVIDEOSDK_MAIN_PAGE_TYPE

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| MAINPAGE_VIDEOWALL|	0|	视频墙	  |
| MAINPAGE_SHARE|	1|	共享	   |
| MAINPAGE_WHITEBOARD|	2	|白板	|

<h2  id=CRVIDEOSDK_VIDEOLAYOUTMODE>视频墙分屏模式 </h2>
<!-- ## 视频墙分屏模式  -->

>CRVIDEOSDK_VIDEOLAYOUTMODE

----

| 代码     | 数值        |   含义   |
|:-------- |:-----------|:----------|
| VLO_1v1_M|	0	|互看	  |
| VLO_WALL1_M	|1|	1分屏	  |
| VLO_WALL2|	2	|2分屏 |
| VLO_WALL4|	3|	4分屏	 |
| VLO_WALL5_M	|4|5分屏	  |
| VLO_WALL6_M	|5|	6分屏	  |
| VLO_WALL9	|6|	9分屏	  |
| VLO_WALL13_M|	7	|13分屏|
| VLO_WALL16|	8	|16分屏	|
| VLO_WALL25	|9|	25分屏	|

<h2  id=CRVIDEOSDK_HTTP_TRANSFER_STATE>Http文件传输状态 </h2>
<!-- ## Http文件传输状态  -->

> CRVIDEOSDK_HTTP_TRANSFER_STATE

----

|代码|数值|含义|
|------------|-------------|-----|
|HTTPFS_NULL        |0| 未开始|
|HTTPFS_QUEUE       |1| 排队中|
|HTTPFS_TRANSFERING |2| 传输(上传/下载)中|
|HTTPFS_FINISHED    |3| 传输完成|

<h2  id=CRVIDEOSDK_HTTP_TRANSFER_RESULT>Http文件传输结果 </h2>
<!-- ## Http文件传输结果  -->

> CRVIDEOSDK_HTTP_TRANSFER_RESULT

----

|代码|数值|含义|
|------------|-------------|-----|
|HTTPR_Success              |0| 成功|
|HTTPR_InnerErr             |1| 内部错误|
|HTTPR_ParamErr             |2| 参数错误|
|HTTPR_NetworkFail          |3| 网络不通/地址不对|
|HTTPR_NetworkTimeout       |4| 超时失败|
|HTTPR_FileOperationFail    |5| 文件操作失败|
|HTTPR_PathNotSupprot       |6| 不支持的路径|
|HTTPR_FileTransfering      |7| 文件正在传输|
|HTTPR_HTTPERR_BEGIN        |1000|  http错误码启始|
|HTTPR_HTTPERR_END          |1999|  http错误码结束|

<h2  id=CRVIDEOSDK_ToolBarUI>影音播放工具条UI组件 </h2>
<!-- ## 影音播放工具条UI组件  -->

> CRVIDEOSDK_ToolBarUI

----

|代码|数值|含义|
|------------|-------------|-----|
|BTN_Pause   |0|    暂停|
|BTN_Stop    |1|    停止|


<h2  id=CRVIDEOSDK_REC_DATATYPE>录制的内容类型 </h2>
<!-- ## 录制的内容类型  -->

> CRVIDEOSDK_REC_DATATYPE

----

|代码|数值|含义|
|------------|-------------|-----|
|REC_AV_DEFAULT   |0|    录制所有|
|REC_AUDIO_LOC    |1|    录制本地音频|
|REC_AUDIO_OTHER    |2|    录制其它音频|
|REC_VIDEO   |3|    录制视频|


<h2  id=CRVIDEOSDK_STOP_REASON>影音结束原因 </h2>
<!-- ## 影音结束原因  -->

>CRVIDEOSDK_STOP_REASON

----

|代码|数值|含义|
|------------|-------------|-----|
|MEDIA_CLOSE|	0|	文件关闭|
|MEDIA_FINI	|1|	播放到文件尾部|
|MEDIA_FILEOPEN_ERR|	2|	打开文件失败|
|MEDIA_FORMAT_ERR	|3|	文件格式错误|
|MEDIA_UNSUPPORT|	4	|影音格式不支持|
|MEDIA_EXCEPTION|	5|	其他异常|

<h2  id=CRVIDEOSDK_VIDEO_WH_RATE>视频尺寸定义 </h2>
<!-- ## 视频尺寸定义  -->

>CRVIDEOSDK_VIDEO_WH_RATE

----

|代码|数值|含义|
|------------|-------------|-----|
|RATE_16_9	|0	|16:9宽高比|
|RATE_4_3	|1	|4:3宽高比|
|RATE_1_1	|2	|1:1宽高比|
|RATE_3_4	|3	|3:4宽高比|
|RATE_9_16	|4	|9:16宽高比|

<h2  id=CRVIDEOSDK_MIXER_VCONTENT_TYPE>混图内容类型 </h2>
<!-- ## 混图内容类型  -->

>CRVIDEOSDK_MIXER_VCONTENT_TYPE

----

|代码|数值|含义|
|------------|-------------|-----|
|MIXVTP_VIDEO	|0	|摄像头|
|MIXVTP_PIC	    |1	|图片|
|MIXVTP_SCREEN	|2	|屏幕|
|MIXVTP_MEDIA	|3	|影音共享|
|MIXVTP_TIMESTAMP	|4	|时间戳|
|MIXVTP_REMOTE_SCREEN	|5	|远端共享的屏幕|
|MIXVTP_WBOARD	|6	|白板|
|MIXVTP_TEXT	|7	|文本|

<h2  id=CRVIDEOSDK_MIXER_STATE>混图器状态 </h2>
<!-- ## 混图器状态  -->

>CRVIDEOSDK_MIXER_STATE

----

|代码|数值|含义|
|------------|-------------|-----|
|MIXER_NULL	|0	|没有创建|
|MIXER_STARTING	    |1	|正在开启|
|MIXER_RUNNING	|2	|正在运行|
|MIXER_STOPPING	|4	|正在结束|


<h2  id=CRVIDEOSDK_MIXER_OUTPUT_TYPE>混图输出类型 </h2>
<!-- ## 混图输出类型   -->

>CRVIDEOSDK_MIXER_OUTPUT_TYPE

----

|代码|数值|含义|
|------------|-------------|-----|
|MIXOT_FILE	|0	|录像文件|
|MIXOT_LIVE	    |1	|直播流|

<h2  id=CRVIDEOSDK_OUTPUT_STATE>输出对象状态 </h2>
<!-- ## 输出对象状态   -->

>CRVIDEOSDK_OUTPUT_STATE

----

|代码|数值|含义|
|------------|-------------|-----|
|OUTPUT_CREATED	|0	|输出对象已创建|
|OUTPUT_WRITING	    |1	|输出目标信息更新; 可以从结构中取得：duration, fileSize参数|
|OUTPUT_CLOSED	|2	|输出对象已关闭; 可以从结构中取得：duration, fileSize参数；|
|OUTPUT_ERR	    |3	|输出对象异常；可以从结构中取得：err参数；|



<h2  id=CRVIDEOSDK_MEDIA_STOP_REASON>播放停止原因 </h2>
<!-- ##  播放停止原因   -->

>CRVIDEOSDK_MEDIA_STOP_REASON

----

|代码|数值|含义|
|------------|-------------|-----|
|MEDIA_CLOSE|0	|文件关闭|
|MEDIA_FINI |1	|播放到文件尾部 |
|MEDIA_FILEOPEN_ERR |2|打开文件失败 |
| MEDIA_FORMAT_ERR	|3	|文件格式错误  |
| MEDIA_UNSUPPORT 	|4	|影音格式不支持 |
| MEDIA_EXCEPTION 	|5	|其他异常  |


<h2  id=CRVIDEOSDK_E_LOG_LEVEL_DEF>写日志的级别 </h2>
<!-- ##  写日志的级别   -->

>CRVIDEOSDK_E_LOG_LEVEL_DEF

----

|代码|数值|含义|
|------------|-------------|-----|
|LOGLEVEL_DEBUG|0	|调试日志|
|LOGLEVEL_INFO |1	| 信息|
|LOGLEVEL_WARN |2| 警告信息|
| LOGLEVEL_ERR	|3	| 报错 |


<h2  id=CRVIDEOSDK_MEETING_DROPPED_REASON>会议断线原因</h2>
<!-- ## 会议断线原因  -->

>CRVIDEOSDK_MEETING_DROPPED_REASON

----

| 代码     | 数值        | 含义      |
|:-------- |:-----------|:----------|
| CRVIDEOSDK_DROPPED_TIMEOUT  |0|网络通信超时|
| CRVIDEOSDK_DROPPED_KICKOUT  |1|被他人请出会议|
| CRVIDEOSDK_DROPPED_BALANCELESS  |2|余额不足|
| CRVIDEOSDK_DROPPED_TOKENINVALID  |3|Token鉴权方式下，token无效或过期|

<h2  id=CRVIDEOSDK_VIRTUALBK_TYPE>虚拟背景类型</h2>
<!-- ##  虚拟背景类型   -->

>CRVIDEOSDK_VIRTUALBK_TYPE

----

|代码|数值|含义|
|------------|-------------|-----|
|VBKT_NULL| 0	|不启用虚拟背景功能|
|VBKT_COLORKEY |1	|绿幕模式 |
|VBKT_HUMANONLY |2   |人像模式 |