#  对象结构定义

<h2 id=SdkInitDat> SdkInitDat</h2>

><font size=4>Sdk初始化数据实体类</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| sdkDatSavePath  | NSString | SDK内部使用文件位置    |
| noCall  | BOOL | 是否使用呼叫业务（可减少登录环节、及通信需求）    |
| noQueue  | BOOL | 是否使用sdk的排队功能的业务（可减少登录环节、及通信需求）    |
| noMediaDatToSvr  | BOOL |  是否与服务器实时流媒体数据（可减少复杂度，加快登录速度）    |
| timeOut  | int | 网络通信超时时间(10000-120000)，单位是毫秒，超出范围时就近取边界值    |
| showSDKLogConsole  | BOOL |  是否输出SDK日志到控制台，发布版本建议设置不输出    |
| datEncType  | NSString | 数据加密类型(0:敏感数据加密，1:全面加密; 缺省:1)    |
| isMultiDelegate  | BOOL | 配置是否启用多代理模式    |

<h2 id=LoginDat> LoginDat</h2>

><font size=4>登录数据实体类</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| authAcnt  | NSString | appID用于区分不同的项目，每个项目都有属于自己的唯一的appID，不同appID的项目完全独立，无法相互通信。appID请联系云屋销售获取，并开通相关套餐和功能权限    |
| authPswd  | NSString | appID对应的密码(md5加密传给sdk)，可登录云屋管理后台修改。    |
| nickName  | NSString | 昵称    |
| privAcnt  | NSString | 自定义帐号, 云屋服务器将会去配置的服务器进行认证（当不使用自定义帐号时，privAuthCode应为null)    |
| privAuthCode  | NSString | 默认填空。只有开启第三方认证才需要填写。（开启第三方认证时，云屋SDK服务器将连接提前配好的业务方服务器进行实时验证。）   |
| param  | NSString | 用户扩展信息    |

<h2 id=MeetInfo>MeetInfo</h2>

><font size=4>房间对象数据类</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| ID  | int | 房间号，数值0代表房间信息无效    |
| pswd  | NSString | 房间密码；（空代表房间无密码）    |
| subject  | NSString | 房间主题    |
| pubMeetUrl  | NSString | 房间公共链接    |
| hostPswd  | NSString | 主持人密码    |

<h2 id=UserStatus>UserStatus</h2>

><font size=4>用户状态</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| userID  | NSString | 用户id    |
| userStatus  | CLIENT_STATUS | 用户的在线状态，参见[CLIENT_STATUS](Constant.md#CLIENT_STATUS)    |
| DNDType  | int | 用户免打扰状态，参见[setDNDStatus](Apis.md#setDNDStatus)    |

<h2 id=MemberInfo>MemberInfo</h2>

><font size=4>房间成员信息</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| userID  | NSString |  用户ID    |
| nickname  | NSString |  用户昵称    |
| audioStatus | int |  音频状态   |
| videoStatus | int |  视频状态   |

<h2 id=AudioCfg>AudioCfg</h2>

><font size=4>音频配置</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| micDevID  | NSString |  麦克风设备id(空代表系统默认设备)    |
| spkDevID  | NSString |  麦克风设备id(空代表系统默认设备)    |
| micName  | NSString |  麦克风设备名称(空代表系统默认设备)    |
| speakerName  | NSString |  扬声器名称(空代表系统默认设备)    |
| agc | int | 是否开启声音增益，0：不开启；1：开启(默认值) |
| ans | int | 是否开启降噪，0：不开启；1：开启（默认值） |
| aec | int | 是否开启回声消除，0：不开启；1：开启（默认值） |

<h2 id=VideoCfg>VideoCfg</h2>

><font size=4>视频配置</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| size  | CGSize |   视频尺寸，常见尺寸参见：[VIDEO_SIZE_TYPE](Constant.md#VIDEO_SIZE_TYPE)   |
| fps  | int |  视频帧率(5~30)  |
| maxbps  | int |  视频码率（1000~100000000, 例如1m:1000000);(未配置则使用内部默认值，详见定义[VIDEO_SIZE_TYPE](Constant.md#VIDEO_SIZE_TYPE))  |
| minQuality  | int |  最佳质量(18~51，越小质量越好) (未配置则使用内部默认值25)  |
| maxQuality  | int |  最差质量(18~51， 越大质量越差) (未配置则使用内部默认值36)  |

- <p style="color:red; font-size:20px"> 注意事项</p>

	+ 我们采用的是vbr编码（由质量+码率，双重控制）
	+ qp范围：质量参数，为的是达到目标质量后，无需花费更大码率提高质量
	+ maxbps码率控制，是为了确保结果一定不大于“目标码率”（体积受控）, 当要超出码率控制时，自动降低质量；当质量达到目标时，自动减少码率甚至无码率输出 注：使用硬编时第二点是无效的。


<h2 id=CamAttribute>CamAttribute</h2>

><font size=4>视频设备私有属性</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| disabled  | int |   取值0:不禁用此设备(默认值)，1：禁用此设备；   |
| quality1_cfg  | VideoCfg |   参见定义[VideoCfg](#VideoCfg)，未配置时采用全局配置的VideoCfg   |
| quality2_cfg  | VideoCfg |   第二档视频配置，未配置代表关闭对应档位视频流；   |

- <p style="color:red; font-size:20px"> 注意事项</p>

	+ 一个摄像头出多档质量的视频流，将带来很大的cpu开销；
	+ 通过setUsrVideoId可以选择观看的视频流；

<h2 id=RawFrame>VideoFrame</h2>

><font size=4>视频帧图像</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| camShowNo  | int |   摄像头显示序号(0开始编号)   |
| fmt  | VIDEO_FORMAT |   图像格式,数值参考视频图像格式[VIDEO_FORMAT](Constant.md#VIDEO_FORMAT)   |
| picData  | const char * |   图像数据   |
| datLength  | int |   图像大小  |
| frameWidth  | int |   图像宽度   |
| frameHeight  | int |   图像高度   |
| frmTime  | unsigned long long |   图像的时间戳   |

<h2 id=UsrVideoInfo>UsrVideoInfo</h2>

><font size=4>用户视频信息</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| videoDevPath  | NSString |    设备路径   |
| videoName  | NSString |     设备名称   |

<h2 id=UsrVideoId>UsrVideoId</h2>

><font size=4>用户摄像头</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| userId  | NSString |    用户id   |
| videoID  | short |    设备id   |

<h2 id=ScreenShareImg>ScreenShareImg</h2>

><font size=4>屏幕共享帧图像</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| rgbDat  | void * |    图像数据   |
| datLength  | int |    图像大小   |
| rgbWidth  | int |    图像宽度   |
| rgbHeight  | int |    图像高度   |

<h2 id=MixerCfg>MixerCfg</h2>

><font size=4>混图器规格配置</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| dstResolution  | CGSize |    图像大小   |
| frameRate  | int |    图像帧率，取值范围:1-30(值越大,cpu要求更高，录像推荐15帧，直播推存25帧)   |
| bitRate  | int |    录制视频文件的最高码率，当图像变化小时，实际码率会低于此值   |
| defaultQP  | int |    录制视频文件的缺省质量，缺省值：26  |
| gop  | int |    I帧周期(I帧越少码率越小，但直播延时会越大）； 文件录制建议15秒一个I帧取值：fpsx15； 直播建议4秒一个I帧取值: fpsx4;  |

- <p style="color:red; font-size:20px"> 注意事项</p>

	+ bitRate的设置应该按照屏幕大小：
		+  640 * 360大小屏幕对应 500000 -- (500kbps)
		+  1280 * 720大小屏幕对应 1000000 -- (1mbps)
		+  1920 * 1080大小屏幕对应 2000000 -- (2mbps)

	+ defaultQP取值范围：0~51，0表示完全无损, 51表示质量非常差，推荐高质量取值18，中质量26， 低质量34。

	+ itemRt 在混图画面中的区域（相对于混图器尺寸)

	+ type, 类型MIXER_VCONTENT_TYPE:
		+ 当type=MIXVTP_VIDEO时，表示混图的是摄像头，param必须包含camid
		+ 当type=MIXVTP_PIC时，表示混图的是指定的图片，param必须包含resourceid。（仅用于本地混图）
		+ 当type=MIXVTP_SCREEN时，表示混图的是本地屏幕，param可以增加附加参数screenid/pid/area
		+ 当type=MIXVTP_TIMESTAMP时，表示混图的是时戳，不用附加任何参数
		+ 当type=MIXVTP_REMOTE_SCREEN时，表示混图的是远端共享的屏幕，不用附加任何参数
		+ 当type=MIXVTP_WBOARD时，表示混图的是白板，不用附加任何参数。（仅用于云端混图，本地混图应该用MIXVTP_PIC)
		+ 当type=MIXVTP_TEXT时，表示混图的是文本(支持简单html)，param必须包含resourceid和text 
		
	+ param 支持的参数如下：
	
		+ camid 用户id.摄像头id, 如："testuser.1"
		+ resourceid 具有唯一属性的字符串id，通过[setPicResource方法](Apis.md#setPicResource)将图片存储到id内供混图模块使用
		+ screenid 屏幕序号，-1表示主屏
		+ pid 进程号
		+ area 抓屏区域:x,y,w,h, 如："10,20,400,800"，无此参数时代表抓全屏
		
	+ MIXVTP_TEXT时，width和height可为0，此时元素大小由文本信息自动确定

<h2 id=MixerOutputCfg>OutputCfg</h2>

><font size=4>录制文件、直播信息输出信息</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| type  | OUT_TYPE |    类型，详见定义OUT_TYPE   |
| fileName  | NSString |    录像形成视频文件名  |
| encryptType  | int |    录像文件是否加密   |
| isUploadOnRecording  | BOOL |    是否边录边上传，默认是false   |
| serverPathFileName  | NSString |    文件上传后在服务器上的相对路径和文件名   |
| liveUrl  | NSString |    目标url   |
| live  | BOOL |    开启云屋直播   |
| errRetryTimes  | int |    失败时重试次数CRVSDK_EXPORT   |


<h2 id=OutputInfo>OutputInfo</h2>

><font size=4>录制文件、直播信息通知</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| state  | MIXER_OUTPUT_STATE |    状态，详见定义MIXER_OUTPUT_STATE   |
| duration  | long |    录像文件时长，单位：毫秒;   |
| fileSize  | long |    录像文件大小；   |
| errCode  | CRVIDEOSDK_ERR_DEF |    错误码，详见定义CRVIDEOSDK_ERR_DEF   |

- <p style="color:red; font-size:20px"> 注意事项</p>

	+ 输出对象已创建;
	+ 输出目标信息更新; 可以从结构中取得duration, fileSize参数；
	+ 输出对象已关闭; 可以从结构中取得duration, fileSize参数；
	+ 输出对象异常；可以从结构中取得err参数；


<h2 id=YWMixerContent>MixerContent</h2>

><font size=4>混图器内容配置</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| contents  | NSMutableArray&lt;RecContentItem* *&gt;* * |    混图器内容   |

<h2 id=YWMixerOutput>MixerOutput</h2>

><font size=4>混图器输出配置</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| outputs  | NSMutableArray&lt;OutputCfg* *&gt;* * |    混图器输出配置   |


<h2 id=RecordFileInfo>RecordFileInfo</h2>

><font size=4>录制文件</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| fileName  | String |    文件名，全路径  |
| startTime  | long |    开始录制时间  |
| duration  | int |    录制时长  |
| fileSize  | int |    文件大小  |

><font size=4>成员方法说明</font>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
	<thead>
        <tr>
			<th   style='width:200px'>
                成员方法
            </th>
			<th>
                参数
            </th>
			<th  style='width:50px'>
                返回值
            </th>
            <th>
                描述
            </th> 
        </tr>
    </thead>
	<tbody>
		<tr>
            <td>clear</td>
            <td>无</td>
            <td>无</td>
            <td>清空实体类中的参数</td>
        </tr>
    </tbody>
</table>

<h2 id=RecordFileShow>RecordFileShow</h2>

><font size=4>录制文件</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| fileName  | String |    文件名，全路径  |
| fileSize  | int |    文件大小  |
| state  | RECORD_FILE_STATE |    文件状态，详见定义RECORD_FILE_STATE  |
| uploadPercent  | int |    录制结果中视频尺寸高度上传进度  |

<h2 id=MediaInfo>MediaInfo</h2>

><font size=4>影音文件信息</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| userID  | NSString |    用户id  |
| state  | MEDIA_STATE  |    播放状态，详见定义MEDIA_STATE  |
| mediaName  | NSString  |    影音文件名  |


<h2 id=ScreenShareCfg>屏幕共享配置对象</h2>

| 成员变量        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|maxFPS	|int|	帧率, 缺省为8 （当网络发不动时，帧率会自动下降）|
|maxBps|	int|	最大码率，缺省为800kbps|

<h2 id=MediaDataFrame>MediaDataFrame</h2>

><font size=4>影音帧图像</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| buf  | void * |    图像数据  |
| datLength  | int |    图像大小  |
| w  | int |    图像宽度  |
| h  | int |    图像高度  |
| fmt  | int |    图像格式  |
| ms  | int64_t |   pts   |

<h2 id=SubPage>SubPage</h2>

><font size=4>白板</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| termID  | short |   终端ID  |
| localID  | short |   本地D  |

<h2 id=SubPageInfo>SubPageInfo</h2>

><font size=4>白板信息</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| boardID  | SubPage |白板标识，详见定义SubPage  |
| title  | NSString |白板的名字  |
| width  | int  |宽  |
| height  | int  |高  |
| pageCount  | int  |页数  |
| curPage  | int |当前页  |
| pagePos1  | int  |扩展参数1  |
| pagePos2  | int  |扩展参数2  |

<h2 id=BoardElement>BoardElement</h2>

>白板图元

```json

{ "elementID": "xx", "type":100, "left":0, "top":0 }

```

| 参数    | 类型         |   说明               |
|:-------- |:-----------|:----------           |
| elementID  | NSString  | 图元id  |
| type  | int  | 图元的类型，值100以下为云屋保留值，100及以上为自定义值  |
|  left、top  | int  | 图元在页内的左上角位置  |
| ...  | NSString  | 可自由扩展


:::danger

说明：
<p>1.elementID必须调用createElementID获取, 即使是曾经调此接口创建的然后存入了磁盘文件，再次读入房间时，所有elementID也需要重新生重。</p><p>2.如果要和云屋产品互通，那就需要按云屋的定义取值，可以联系云屋获取相关文档</p>

:::

<h2 id=FileInfo>FileInfo</h2>

><font size=4>网盘文件</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| ownerID  | short | 文件所有者的ID  |
| ownerName  | NSString | 文件所有者的名称  |
| name  | NSString | 在服务器上的文件名  |
| orgFileName  | NSString | 用户的原始文件名  |
| md5  | NSString | 压缩后的md5(如果不压缩，则原文件md5)  |
| ctime  | NSString | 上传时间，字符串，格式"yyyy-MM-dd hh:mm:ss"  |
| size  | int | 在服务器上的大小(单位B，类型ulong)  |
| orgSize  | int | 原始文件大小(单位B，类型ulong)  |
| status  | int | 文件状态  |

<h2 id=DiskSummary>DiskSummary</h2>

><font size=4>网盘容量信息</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| confDiskLimit  | int | 网盘总容量（KB）  |
| confDiskUsed  | int | 网盘已用容量（KB）  |

<h2 id=QueueInfo>QueueInfo</h2>

><font size=4>队列信息</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| queID  | int | 队列ID   |
| name  | NSString | 队列名称  |
| desc  | NSString | 队列描述  |
| prio  | int | 优先级，值越小优先级越高  |

<h2 id=QueueStatus>QueueStatus</h2>

><font size=4>队列状态</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| queID  | int | 队列ID   |
| agent_num  | int | 坐席数量   |
| wait_num  | int | 排队客户数量   |
| srv_num  | int | 正在服务的客户数量   |

<h2 id=QueuingInfo>QueuingInfo</h2>

><font size=4>排队信息</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| queID  | int | 我排的队列   (-1:代表我没有排队；-2:代表我正在会话中,通过GetSessionInfo可获取相关信息)|
| position  | int | 我的位置   |
| queuingTime  | int | 我排队的时长(单位s)   |

<h2 id=VideoSessionInfo>VideoSessionInfo</h2>

><font size=4>会话信息</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| callID |  NSString  | 会话中的呼叫ID   |
| peerID | NSString | 会话中的目标用户ID   |
| peerName | NSString  | 会话中的目标用户昵称   |
| bCallAccepted | BOOL  | 呼叫是否被对方接受 0:暂未接受，1:已接受   |
| meetingID |  int  | 会话中分配的房间ID   |
| meetingPswd | NSString  | 房间密码   |
| duration |  int  | 会话持续的时长(秒)   |

<h2 id=UserInfo>UserInfo</h2>

><font size=4>队列用户</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| queID  | int | 队列ID  |
| usrID  | NSString | 用户ID |
| name  | NSString | 用户昵称 |
| queuingTime  | int | 用户排队的时长(单位s) |

<h2 id=HttpReqInfo>HttpReqInfo</h2>

><font size=4>Http文件传输请求对象</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| filePathName  |  NSString  |  本地完整路径文件名  |
| fileVersio  |  NSString  |  文件版本（可以填版本号，也可以md5，也可以为空）  |
| httpUrl  |  NSString  |  目标URL  |
| params  |  NSString  |   特殊参数(如边录边传,云屋加密类型)  |
| bUploadType  |  BOOL  |  是否上传  |

<h2 id=FileTransInfo>FileTransInfo</h2>

><font size=4>Http传输信息对象</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| fileSize  |  int  |   文件大小  |
| finishedSize  |  int  |  已传输大小 |
| state  |  HTTP_TRANSFER_STATE  |  文件传输状态，详见[HTTP_TRANSFER_STATE](Constant.md#HTTP_TRANSFER_STATE)  |

<h2 id=NetDiskDocDir>NetDiskDocDir</h2>

><font size=4>文档列表</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| name  |  NSString  |  在网盘里的文件名  |
| files  | &lt;FileInfo *&gt;*  |  查询目录下的所有文件  |
| dirs  |  &lt;NetDiskDocDir *&gt;* |  查询目录下的所有目录  |

<h2 id=GetDocPageInfoRslt>GetDocPageInfoRslt</h2>

><font size=4>获取文档页信息结果</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| width  |  int  |  文档的图像宽度  |
| height  |  int |  文档的图像高度  |
| files  | NSMutableArray&lt;NSString* *&gt;* *  |  查询目录下的所有文件  |


