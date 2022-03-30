# 可视化组件

<h2 id=visualization>组件功能介绍</h2>

可视化组件由多个模块组成， 主要模块包括：[成员视频UI显示组件](#VideoUIView)， [屏幕共享UI显示组件](#ScreenShareUIView)， [影音共享UI显示组件](#MediaUIView)。 通过集成SDK的相关控件， 让使用者进行更加快速， 高效的开发工作。

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr>
            <th style='width:180px;text-align:center'>
                组件
            </th>
            <th style='width:80px;text-align:center'>
                方式
            </th>
			<th style='width:200px'>
                接口
            </th>
            <th style='width:400px'>
                描述
            </th>
        </tr>
    </thead>
	<tbody>
		<tr>
            <td rowspan=9><a href="#VideoUIView">成员视频UI显示组件</a></td>
            <td rowspan=9 style='text-align:center'>主调</td>
            <td>setUsrVideoId</td>
            <td>设置显示的目标用户视频</td>
        </tr>
		<tr>
            <td>getUsrVideoId</td>
            <td>获取当前显示的用户/摄像头编号</td>
        </tr>
		<tr>
            <td>savePicToFile</td>
            <td rowspan=2>保存视频截图到图片文件</td>
        </tr>
        <tr>
            <td>savePicToBase64</td>
        </tr>
        <tr>
            <td>getPicFrameTime</td>
            <td> 获取图像时间戳</td>
        </tr>
        <tr>
             <td>isPicEmpty</td>
             <td>检查图像是否为空</td>
        </tr>
        <tr>
            <td>getPicWidth, getPicHeight</td>
            <td>获取图像宽、高</td>
        </tr>
        <tr>
            <td>clear</td>
            <td>清空缓存的图像</td>
        </tr>
		<tr>
            <td>setScaleType,getScaleType</td>
            <td>设置图像显示模式</td>
        </tr>
		<tr>
            <td><a href="#ScreenShareUIView">屏幕共享UI显示组件</a></td>
            <td style='text-align:center'>主调</td>
            <td></td>
            <td></td>
        </tr>
		<tr>
            <td rowspan=7><a href="#MediaUIView">影音共享UI显示组件</a></td>
            <td rowspan=7 style='text-align:center'>主调</td>
            <td>savePicToFile</td>
            <td rowspan=2>保存播放影音画面到图片文件</td>
        </tr>
		<tr>
            <td>savePicToBase64</td>
        </tr>
        <tr>
            <td>getPicFrameTime</td>
            <td>获取图像时间戳</td>
        </tr>
        <tr>
            <td>isPicEmpty</td>
            <td>检查图像是否为空</td>
        </tr>
        <tr>
            <td>getPicWidth, getPicHeight</td>
            <td>获取图像宽、高</td>
        </tr>
        <tr>
            <td>clear</td>
            <td>清空缓存的图像</td>
        </tr>
        <tr>
            <td>setScaleType,getScaleType</td>
            <td>设置图像显示模式</td>
        </tr>
	</tbody>
</table>

<h2 id=VideoUIView >1. 成员视频UI显示组件</h2>

<font size=4>com.cloudroom.cloudroomvideosdk.VideoUIView 是视频显示控件，它显示设定的用户的视频，
是由视频房间组件内相关接口的封装而成，如果此方式不满足需求，可以使用视频房间组件内相关的接口自行实现。
多实例方式，在会话中可以为每一个视频用户创建一个用来显示其画面</font>

<h3 id=setUsrVideoId>void setUsrVideoId(UsrVideoId usrVideoId)</h3>

  + **功能**：  设置显示的目标用户视频

  + **返回值**：  无


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| usrVideoId| [UsrVideoId](TypeDefinitions.md#UsrVideoId)|     目标用户视频ID|

<h3 id=setUsrVideoId>void setUsrVideoId(UsrVideoId usrVideoId, int qualityLv)</h3>

  + **功能**：  设置显示的目标用户视频

  + **返回值**：  无


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| usrVideoId| [UsrVideoId](TypeDefinitions.md#UsrVideoId)|     目标用户视频ID|
| qualityLv| int|     视频档位(1:默认档位，2:对应quality2，3:对应quality3，如果2,3未开启时将显示1档的视频流）|

- <p style="color:red; font-size:20px">注意事项:</p>

  + 从房间内可观看摄像头列表中获取userID和videoID


<h3 id=getUsrVideoId>UsrVideoId getUsrVideoId()</h3>

  + **功能**：  获取当前显示的用户

  + **返回值**：  用户视频ID


<h3 id=savePicToFile> int savePicToFile(String pathFileName, CompressFormat format)</h3>

+ **功能**：  保存视频截图到图片文件
+ **返回值**：  0成功，非0为保存遇到的错误码

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| pathFileName| String|     保存为本地路径文件名|
| format| CompressFormat|     图片格式|

<h3 id=savePicToBase64>String savePicToBase64(CompressFormat format)</h3>

+ **功能**：  保存视频截图为base64数据字符串
+ **返回值**：  以base64编码的图片数据，不成功返回空

| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| format| CompressFormat|     图片格式|

<h3 id=getPicFrameTime>int getPicFrameTime()</h3>

+ **功能**：  获取图像时间戳
+ **返回值**：  当前图像数据对应的时间戳


<h3 id=isPicEmpty>boolean isPicEmpty()</h3>

+ **功能**：  检查图像是否为空
+ **返回值**：  图像是否为空


<h3 id=getPicWidth>int getPicWidth()</h3>

  + **功能**：  获取图像宽

  + **返回值**：  宽


<h3 id=getPicHeight>int getPicHeight()</h3>

  + **功能**：  获取图像高

  + **返回值**：  高


<h3 id=clear>void clear()</h3>

  + **功能**：  清空缓存的图像

  + **返回值**：  无


<h3 id=setScaleType>void setScaleType(int scaleType)</h3>

  + **功能**：  设置图像显示模式

  + **返回值**：  无


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| scaleType| int|     <p>0：等比缩放留空居中显示；</p><p>1：等比缩放裁剪铺满显示；</p><p>2：不等比缩放铺满显示（可能导致图像拉伸）；</p>|

<h3 id=getScaleType>int getScaleType()</h3>

  + **功能**：  获取视频显示模式

  + **返回值**：  int <p>0：等比缩放留空居中显示；</p><p>1：等比缩放裁剪铺满显示；</p><p>2：不等比缩放铺满显示（可能导致图像拉伸）；</p>

<h2 id=ScreenShareUIView >2. 屏幕共享UI显示组件</h2>

> <font size=4>com.cloudroom.cloudroomvideosdk.ScreenShareUIView 是屏幕共享开启后远端显示控件，
	是由视频房间组件内相关接口的封装而成，如果此方式不满足需求，可以使用视频房间组件内相关的接口自行实现。</font>

<h2 id=MediaUIView >3. 影音共享UI显示组件</h2>

><font size=4>com.cloudroom.cloudroomvideosdk.MediaUIView 影音显示控件，
	是由视频房间组件内相关接口的封装而成，如果此方式不满足需求，可以使用视频房间组件内相关的接口自行实现功能。</font>


<h3 id=savePicToFile>int savePicToFile(String pathFileName, CompressFormat format)</h3>

  + **功能**：  保存播放影音画面到图片文件

  + **返回值**：   0成功，非0为保存遇到的错误码


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| pathFileName| String|     保存为本地路径文件名|
| format| CompressFormat|     图片格式|

<h3 id=savePicToBase64>String savePicToBase64(CompressFormat format)</h3>

  + **功能**：  保存播放截图为base64数据字符串

  + **返回值**：   以base64编码的图片数据，不成功返回空


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| format| CompressFormat|     图片格式|


<h3 id=getPicFrameTime>int getPicFrameTime()</h3>

  + **功能**：  获取图像时间戳

  + **返回值**：  当前图像数据对应的时间戳


<h3 id=isPicEmpty>boolean isPicEmpty()</h3>

  + **功能**：  检查图像是否为空

  + **返回值**：  图像是否为空


<h3 id=getPicWidth>int getPicWidth()</h3>

  + **功能**：  获取图像宽

  + **返回值**：  宽


<h3 id=getPicHeight>int getPicHeight()</h3>

  + **功能**：  获取图像高

  + **返回值**：  高


<h3 id=clear>void clear()</h3>

  + **功能**：  清空缓存的图像

  + **返回值**：  无


<h3 id=setScaleType>void setScaleType(int scaleType)</h3>

  + **功能**：  设置图像显示模式

  + **返回值**：  无


| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| scaleType| int|     <p>0：等比缩放留空居中显示；</p><p>1：等比缩放裁剪铺满显示；</p><p>2：不等比缩放铺满显示（可能导致图像拉伸）；</p>|

<h3 id=getScaleType>int getScaleType()</h3>

  + **功能**：  获取视频显示模式

  + **返回值**：  int <p>0：等比缩放留空居中显示；</p><p>1：等比缩放裁剪铺满显示；</p><p>2：不等比缩放铺满显示（可能导致图像拉伸）；</p>


