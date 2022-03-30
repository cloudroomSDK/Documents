#  对象结构定义

<h2 id=SdkInitDat>Sdk初始化数据实体类</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.SdkInitDat</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| sdkDatSavePath  | String | SDK内部使用文件位置    |
| noCall  | boolean | 是否使用呼叫业务（可减少登录环节、及通信需求），缺省:true     |
| noQueue  | boolean | 是否使用sdk的排队功能的业务（可减少登录环节、及通信需求），缺省:true    |
| timeOut  | int | 网络通信超时时间(10000-120000)，单位是毫秒，超出范围时就近取边界值，缺省:60s   |
| datEncType  | String | 数据加密类型("0":敏感数据加密，"1":全面加密; 缺省:"1")    |

<h2 id=MeetInfo>房间对象数据类</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.MeetInfo</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| ID  | int | 房间号，数值0代表房间信息无效    |
| pubMeetUrl  | String | 房间公共链接    |

<h2 id=UserStatus>用户状态</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.UserStatus</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| userID  | String | 用户id    |
| userStatus  | [CLIENT_STATUS](Constant.md#CLIENT_STATUS) | 用户的在线状态    |
| DNDType  | boolean | 用户免打扰状态，参见[setDNDStatus](API.md#setDNDStatus)    |

<h2 id=Size>大小描述</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.Size</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| width  | int |  宽    |
| height  | int |  高    |

<h2 id=MemberInfo>房间成员信息</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.MemberInfo</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| userID  | String |  用户ID    |
| nickname  | String |  用户昵称    |
| audioStatus | [ASTATUS](Constant.md#ASTATUS) |  音频状态    |
| videoStatus | [VSTATUS](Constant.md#VSTATUS) |  视频状态    |

<h2 id=AudioCfg>音频配置</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.AudioCfg</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| _micName  | String |  麦克风设备名称(空代表系统默认设备)    |
| _speakerName  | String |  扬声器名称(空代表系统默认设备)    |
| agc | boolean |  是否开启声音增益，默认开启   |
| ans | boolean |  是否开启降噪，默认开启    |
| aec | boolean |  是否开启回声消除，默认开启    |

<h2 id=VideoCfg>视频配置</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.VideoCfg</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| size  | Size |   视频尺寸   |
| fps  | int |  视频帧率(5~30)  |
| maxbps  | int |  视频码率（1~100*1000*1000）(未配置则使用内部默认值)  |
| minQuality  | int |  最佳质量(18~51，越小质量越好) (未配置则使用内部默认值25)  |
| maxQuality  | int |  最差质量(18~51， 越大质量越差) (未配置则使用内部默认值36)  |

- <p style="color:red; font-size:20px"> 注意事项</p>

	+ 我们采用的是vbr编码（由质量+码率，双重控制）
	+ qp范围：质量参数，为的是达到目标质量后，无需花费更大码率提高质量
	+ maxbps码率控制，是为了确保结果一定不大于“目标码率”（体积受控）, 当要超出码率控制时，自动降低质量；当质量达到目标时，自动减少码率甚至无码率输出 注：使用硬编时第二点是无效的。

<h2 id=VideoEffects>视频效果配置</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.VideoEffects</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| denoise  | boolean |  视频降噪  |
| upsideDown  | boolean |  视频上下翻转  |
| mirror  | int |  视频左右镜像(-1：自动，0：关，1：开)   |
| degree  | int |  视频旋转（-1：自动，0-270：旋转角度）  |
 
<h2 id=VideoAttributes>视频设备私有属性</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.VideoAttributes</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| disabled  | int |   取值0:不禁用此设备(默认值)，1：禁用此设备；   |
| quality1Cfg  | [VideoCfg](#VideoCfg) |   第一档视频配置，未配置时采用全局配置   |
| quality2Cfg  | [VideoCfg](#VideoCfg) |   第二档视频配置，未配置代表关闭对应档位视频流   |

- <p style="color:red; font-size:20px"> 注意事项</p>

	+ 一个摄像头出多档质量的视频流，将带来很大的cpu开销；
	+ 通过setUsrVideoId可以选择观看的视频流；

<h2 id=UsrVideoInfo>用户视频信息</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.UsrVideoInfo</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| videoName  | String |     设备名称   |
| isIPCamera  | boolean |    是否IP摄像头   |

<h2 id=UsrVideoId>用户摄像头</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.UsrVideoId</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| userId  | String |    用户id   |
| videoID  | String |    设备id   |
 
<h2 id=ScreenMarkData>屏幕共享标注信息</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.ScreenMarkData</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| userID  | String |    标注者用户ID   | 
| useridSN  | short |    标注SN   | 
| color  | int |    标注颜色   | 
| mousePosSeq  | byte[] |    标注数据   | 

<h2 id=RemoveScreenMarkData>屏幕共享删除标注信息</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.RemoveScreenMarkData</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| userID  | String |    标注者用户ID   | 
| useridSN  | short |    标注SN   | 
 
<h2 id=MixerCfg>混图器规格配置</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.MixerCfg</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| dstResolution  | [Size](#Size)  |    图像大小  | 
| frameRate  | int |    图像帧率，取值范围:1-30(值越大,cpu要求更高，录像推荐15帧，直播推存25帧)   |  
| bitRate  | int |    录制视频文件的最高码率，当图像变化小时，实际码率会低于此值   |  
| defaultQP  | int |    录制视频文件的缺省质量，缺省值：26  |  
| gop  | int |    I帧周期(I帧越少码率越小，但直播延时会越大）； 文件录制建议15秒一个I帧取值：fpsx15； 直播建议4秒一个I帧取值: fpsx4;  |  

- <p style="color:red; font-size:20px"> 注意事项</p>

	+ bitRate的设置应该按照录制大小：
		+  640 * 360大小录制对应 500000 -- (500kbps)
		+  1280 * 720大小录制对应 1000000 -- (1mbps)
		+  1920 * 1080大小录制对应 2000000 -- (2mbps)

	+ defaultQP取值范围：0~51，0表示完全无损, 51表示质量非常差，推荐高质量取值18，中质量26， 低质量34。

<h2 id=MixerCotent>混图器内容配置</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.MixerCotent</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| type  | [MIXER_VCONTENT_TYPE](Constant.md#MIXER_VCONTENT_TYPE) |    混图内容类型   | 
| rect  | Rect |    在混图画面中的区域（相对于混图尺寸）   | 

><font size=4>成员方法说明</font>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
	<thead>
        <tr>
			<th   style='width:250px'>
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
            <td rowspan=3>createVideoContent(静态)</td>
            <td >String userID</td>
            <td rowspan=3>MixerCotent</td>
            <td rowspan=3>通过摄像头ID，将摄像头配置到混图器内容中</td>
        </tr>
		<tr>
		    <td >short camID</td>
	    </tr>
		<tr>
			<td >Rect rect</td>
		</tr>
		<tr>
            <td>createMediaContent(静态)</td>
            <td>Rect rect</td>
            <td>MixerCotent</td>
            <td>将播放影音配置到混图器内容中</td>
        </tr>
	    <tr>
            <td rowspan=2>createPicContent(静态)</td>
            <td>String resID</td>
            <td rowspan=2>MixerCotent</td>
            <td rowspan=2>通过资源ID，将图片配置到混图器内容中</td>
        </tr>
		<tr>
            <td>Rect rect</td>
        </tr>
		<tr>
            <td>createRemoteScreenContent(静态)</td>
			<td>Rect rect</td>
            <td>MixerCotent</td>
            <td>将远端屏幕到混图器内容中</td>
        </tr>
		<tr>
            <td>createScreenContent(静态)</td>
            <td>Rect rect</td>
            <td>MixerCotent</td>
            <td>将共享屏幕配置到混图器内容中</td>
        </tr>
		<tr>
            <td rowspan=2>createTextContent(静态)</td>
            <td >String text</td>
            <td rowspan=2>MixerCotent</td>
            <td rowspan=2>将文字配置到混图器内容中</td>
        </tr>
		<tr>
			<td >Rect rect</td>
		</tr>
    </tbody>
</table>

- <p style="color:red; font-size:20px"> 注意事项</p>

	+ type, 类型[MIXER_VCONTENT_TYPE](Constant.md#MIXER_VCONTENT_TYPE):
		+ 当type=MIXVTP_VIDEO时，表示混图的是摄像头
		+ 当type=MIXVTP_PIC时，表示混图的是指定的图片（仅用于本地混图）
		+ 当type=MIXVTP_SCREEN时，表示混图的是本地屏幕
		+ 当type=MIXVTP_MEDIA时，表示混图的是影音共享
		+ 当type=MIXVTP_TIMESTAMP时，表示混图的是时戳
		+ 当type=MIXVTP_REMOTE_SCREEN时，表示混图的是远端共享的屏幕
		+ 当type=MIXVTP_WBOARD时，表示混图的是白板（仅用于云端混图，本地混图应该用MIXVTP_PIC)
		+ 当type=MIXVTP_TEXT时，表示混图的是文本(支持简单html) (此type下，width和height可为0，此时元素大小由文本信息自动确定)

<h2 id=MixerOutPutCfg>混图器输出配置</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.MixerOutPutCfg</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| type  | MIXER_OUTPUT_TYPE |    输出类型MIXER_OUTPUT_TYPE   | 
| filename  | String |    录像路径文件名（本地录像名格式如：/sdcard/1.mp4，服务器录像名格式如：/2018-11-21/1.mp4），支持的文件格式为mp4/ts/flv/avi，其中flv和ts两种格式在程序异常结束时产生的录制文件仍可用。   | 
| encryptType  | int |    录像文件是否加密，0:不加密，1:加密；   | 	
| isUploadOnRecording  | boolean |    录像文件是否边录边传，false:不上传，true:边录边传; (此参数仅本地录像有效）   | 
| serverPathFileName  | String |    边录边传时，上传到服务器的路径文件名； (此参数仅本地录像有效）   | 
| liveUrl  | String |    直播推流地址，支持rtmp/rtsp   | 
| errRetryTimes  | int |     直播推流异常时，重试次数   | 

<h2 id=MixerOutputInfo>录制文件、直播信息通知</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.MixerOutputInfo</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| state  | [MIXER_OUTPUT_STATE](Constant.md#MIXER_OUTPUT_STATE)  |    状态  | 
| duration  | long |    录像文件时长，单位：毫秒;   | 
| fileSize  | long |    录像文件大小；   | 
| errCode  | [CRVIDEOSDK_ERR_DEF](Constant.md#CRVIDEOSDK_ERR_DEF) |    错误码   | 
 
- <p style="color:red; font-size:20px"> 注意事项</p>

	+ 输出对象已创建;
	+ 输出目标信息更新; 可以从结构中取得duration, fileSize参数；
	+ 输出对象已关闭; 可以从结构中取得duration, fileSize参数；
	+ 输出对象异常；可以从结构中取得err参数；


<h2 id=RecordFileInfo>录制文件</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.RecordFileInfo</font>

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
 
<h2 id=RecordFileShow>录制文件</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.RecordFileShow</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| fileName  | String |    文件名，全路径  |  
| fileSize  | int |    文件大小  |  
| state  | [RECORD_FILE_STATE](Constant.md#RECORD_FILE_STATE) |    文件状态  |  
| uploadPercent  | int |    录制结果中视频尺寸高度上传进度  |  
 
<h2 id=MediaInfo>影音文件信息</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.MediaInfo</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| userID  | String |    用户id  |  
| state  | [MEDIA_STATE](Constant.md#MEDIA_STATE)  |    播放状态  |  
| mediaName  | String  |    影音文件名  |  

<h2 id=ScreenShareCfg>屏幕共享配置对象</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.ScreenShareCfg</font>

| 参数        | 类型         |   说明               |
|:-------- |:-----------|:----------           |
|maxFPS	|int|	帧率, 缺省为8 （当网络发不动时，帧率会自动下降）|
|maxBps|	int|	最大码率，缺省为800kbps|


<h2 id=SubPage>白板标识</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.SubPage</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|
| userID  | String |   用户id  |   
| pageID  | short |   白板页ID  |   
 
<h2 id=SubPageInfo>白板信息</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.SubPageInfo</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|  
| page  | [SubPage](#SubPage) |白板标识  |
| title  | String |白板的名字  |
| width  | int  |宽  |
| height  | int  |高  |
| pageCount  | int  |页数  |
| curPage  | int |当前页  |
| pagePos1  | int  |扩展参数1  |
| pagePos2  | int  |扩展参数2  |   

<h2 id=FileInfo>网盘文件</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.FileInfo</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|  
| ownerID  | short | 文件所有者的ID  |
| ownerName  | String | 文件所有者的名称  |
| name  | String | 在服务器上的文件名  |
| orgFileName  | String | 用户的原始文件名  |
| md5  | String | 压缩后的md5(如果不压缩，则原文件md5)  |
| ctime  | String | 上传时间，字符串，格式"yyyy-MM-dd hh:mm:ss"  |
| size  | int | 在服务器上的大小(单位B，类型ulong)  |
| orgSize  | int | 原始文件大小(单位B，类型ulong)  |
| status  | int | 文件状态  |

<h2 id=DiskSummary>网盘容量信息</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.DiskSummary</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|  
| confDiskLimit  | int | 网盘总容量（KB）  |
| confDiskUsed  | int | 网盘已用容量（KB）  |

<h2 id=QueueInfo>队列信息</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.QueueInfo</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|  
| queID  | String | 队列ID   |
| name  | String | 队列名称  |
| desc  | String | 队列描述  |
| prio  | int | 优先级，值越小优先级越高  |
 
<h2 id=QueueStatus>队列状态</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.QueueStatus</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|  
| queID  | String | 队列ID   |
| agent_num  | int | 坐席数量   |
| wait_num  | int | 排队客户数量   |
| srv_num  | int | 正在服务的客户数量   |

<h2 id=QueuingInfo>排队信息</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.QueuingInfo</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|  
| queID  | String | 我排的队列   (-1:代表我没有排队；-2:代表我正在会话中,通过GetSessionInfo可获取相关信息)|
| position  | int | 我的位置   |
| queuingTime  | int | 我排队的时长(单位s)   |
 
<h2 id=VideoSessionInfo>会话信息</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.VideoSessionInfo</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|  
| callID |  String  | 会话中的呼叫ID   |
| peerID | String | 会话中的目标用户ID   |
| peerName | String  | 会话中的目标用户昵称   |
| bCallAccepted | boolean  | 呼叫是否被对方接受 0:暂未接受，1:已接受   |
| meetingID |  int  | 会话中分配的房间ID   |
| meetingPswd | String  | 房间密码   |
| duration |  int  | 会话持续的时长(秒)   |

<h2 id=UserInfo>队列用户</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.UserInfo</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|  
| queID  | String | 队列ID  |
| usrID  | String | 用户ID |
| name  | String | 用户昵称 |
| queuingTime  | int | 用户排队的时长(单位s) |
| usrExtDat  | String | 用户排队时传入的扩展参数 |

<h2 id=HttpReqInfo>Http文件传输请求对象</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.HttpReqInfo</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|  
| filePathName  |  String  |  本地完整路径文件名  |
| fileVersio  |  String  |  文件版本（可以填版本号，也可以md5，也可以为空）  |
| httpUrl  |  String  |  目标URL  |
| bUploadType  |  boolean  |  是否上传  |

<h2 id=FileTransInfo>Http传输信息对象</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.FileTransInfo</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|  
| filePathName  |  String  |  本地完整路径文件名  |
| fileVersio  |  String  |  文件版本（可以填版本号，也可以md5，也可以为空）  |
| httpUrl  |  String  |  目标URL  |
| bUploadType  |  boolean  |  是否上传  |
| extHeaders  |  HashMap&lt;String, String&gt;   |  http头部扩展信息，字典数据  |
| fileSize  |  int  |   文件大小  |
| finishedSize  |  int  |  已传输大小 |
| state  |  [HTTP_TRANSFER_STATE](Constant.md#HTTP_TRANSFER_STATE)  |  文件传输状态  |

<h2 id=NetDiskDocDir>文档列表</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.NetDiskDocDir</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|  
| name  |  String  |  在网盘里的文件名  |
| files  |  ArrayList&lt;[FileInfo](TypeDefinitions.md#FileInfo)&gt;  |  目录下的所有文件  |
| subDirs  |  ArrayList&lt;[NetDiskDocDir](TypeDefinitions.md#NetDiskDocDir)&gt;  |  目录下的所有目录  |

<h2 id=NetDiskDocFilePageInfo>文档页信息</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.model.NetDiskDocFilePageInfo</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|  
| width  |  int  |  文档的图像宽度  |
| height  |  int  |  文档的图像高度  |
| fileList  |  ArrayList&lt;String&gt;  |  每页文档在服务器上的路径文件名  |

<h2 id=BoardElement>白板图元</h2>

><font size=4>BoardElement</font>

| 成员变量     | 类型        | 说明      |
|:-------- |:-----------|:----------|  
| elementID  |  String  |  图元id  |
| type   |  int  |  图元的类型，值100以下为云屋保留值，100及以上为自定义值  |
| left  |  String队列  |  图元在页内距离的左角位置  |
| top  |  String队列  |  图元在页内距离的上角位置  |

- <p style="color:red; font-size:20px"> 注意事项</p>

	+ 白板图元是后台服务器返回的json数据，而不是一个具体的实体类
	+ elementID必须调用createElementID获取, 即使是曾经调此接口创建的然后存入了磁盘文件，再次读入房间时，所有elementID也需要重新生成
	+ 如果要和云屋产品互通，那就需要按云屋的定义取值，可以联系云屋获取相关文档，网盘文件



<h2 id=MeetingAttr>MeetingAttr</h2>

>会议属性


| 参数    | 类型         |   说明               |
|:-------- |:-----------|:----------           |
| value  | String  | 属性值  |
| lastModifyUserID  | String  | 最后修改者 |
| lastModifyTs | long  | 最后的修改时间，1970-1-1 0:00:00以来的秒数  |
