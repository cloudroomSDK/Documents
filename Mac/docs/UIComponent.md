# 可视化组件

## 组件功能介绍

可视化组件由多个模块组成， 主要模块包括：[视频UI显示组件基类](#CLBaseView)，[成员视频UI显示组件](#CLCameraView)， [屏幕共享UI显示组件](#CLShareView)， [影音共享UI显示组件](#CLMediaView)。 通过集成SDK的相关控件， 让使用者进行更加快速， 高效的开发工作。

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
            <td rowspan=2><a href="#CLBaseView">视频UI显示组件基类</a></td>
            <td rowspan=2 style='text-align:center'>主调</td>
            <td>getVideoSize</td>
            <td>获取绘制视频size</td>
        </tr>
		<tr>
            <td>clearFrame</td>
            <td>清除图像缓存</td>
        </tr>
		<tr>
            <td rowspan=3><a href="#CLCameraView">成员视频UI显示组件</a></td>
            <td rowspan=3 style='text-align:center'>主调</td>
            <td>setUsrVideoId</td>
            <td>设置显示的目标用户视频</td>
        </tr>
		<tr>
            <td>getUsrVideoId</td>
            <td>获取当前显示的用户/摄像头编号</td>
        </tr>
        <tr>
            <td>getVideoImage</td>
            <td> 获取当前显示图像</td>
        </tr>
		<tr>
            <td><a href="#CLShareView">屏幕共享UI显示组件</a></td>
            <td style='text-align:center'>主调</td>
            <td>无</td>
            <td>无</td>
        </tr>
		<tr>
            <td ><a href="#CLMediaView">影音共享UI显示组件</a></td>
            <td style='text-align:center'>主调</td>
            <td>无</td>
            <td>无</td>
        </tr>
	</tbody>
</table>

<h2 id=CLBaseView >1. 视频UI显示组件基类</h2>

> <font size=4>CLBaseView 是视频显示控件的基类，提供基础接口。如果此方式不满足需求，可以使用视频房间组件内相关的接口自行实现。</font>


<h3 id = keepAspectRatio>@property (nonatomic, assign) BOOL keepAspectRatio</h3>

- <p style="font-size:20px">true:保持比例, false:不保持比例</p>


<h3 id=getVideoSize>-(CGSize)getVideoSize</h3>

  + **功能**:&emsp;   获取绘制视频size
  
  + **返回值**:&emsp;  视频大小
     
<h3 id=clearFrame>- (void)clearFrame</h3>

  + **功能**:&emsp;   清除图像缓存
  
  + **返回值**:&emsp;  无


<h2 id=CLCameraView >2. 成员视频UI显示组件</h2>

> <font size=4>CLCameraView 是视频显示控件，它显示设定的用户的视频，
	是由视频房间组件内相关接口的封装而成，如果此方式不满足需求，可以使用视频房间组件内相关的接口自行实现。 
	多实例方式，在会话中可以为每一个视频用户创建一个用来显示其画面</font>

<h3 id=setUsrVideoId>-(void)setUsrVideoId:(UsrVideoId *)usrVideoId</h3>

  + **功能**:&emsp;  设置显示的目标用户视频
  
  + **返回值**:&emsp;  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| usrVideoId| [UsrVideoId](TypeDefinitions.md#UsrVideoId)|     目标用户视频ID|   

<h3 id=setUsrVideoId>-(void)setUsrVideoId:(UsrVideoId *)usrVideoId qualityLv:(int)qualityLv</h3>

  + **功能**:&emsp;  设置显示的目标用户视频
  
  + **返回值**:&emsp;  无
     
 
| 参数 | 类型 | 含义 |
|:-------- |:-----------|:----------|
| usrVideoId| [UsrVideoId](TypeDefinitions.md#UsrVideoId)|     目标用户视频ID| 
| qualityLv| short|     视频档位(1:默认档位，2:对应quality2，3:对应quality3，如果2,3未开启时将显示1档的视频流）| 

- <p style="color:red; font-size:20px">注意事项:</p>

  + 从房间内可观看摄像头列表中获取userID和videoID
  
<h2 id=CLShareView >3. 屏幕共享UI显示组件</h2>

> <font size=4>CLShareView 是屏幕共享开启后远端显示控件，
	是由视频房间组件内相关接口的封装而成，如果此方式不满足需求，可以使用视频房间组件内相关的接口自行实现。 
	该方式整个程序内建议只创建一个实例。</font>

- <p style="color:red; font-size:20px">使用方式:</p>

  + 只需要摆放好控件，设置正确尺寸即可显示。

<h2 id=CLMediaView >4. 影音共享UI显示组件</h2>

><font size=4>CLMediaView 影音显示控件，
	是由视频房间组件内相关接口的封装而成，如果此方式不满足需求，可以使用视频房间组件内相关的接口自行实现功能。 
	单例方式，整个程序的生命过程中只能有一个实例。</font>
	
 - <p style="color:red; font-size:20px">使用方式:</p>

  + 只需要摆放好控件，设置正确尺寸即可显示。

