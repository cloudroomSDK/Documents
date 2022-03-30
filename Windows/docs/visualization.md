# 组件与可视化组件

## 组件
<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr >
            <th style='width:70px;text-align:center'>
                组件名称
            </th>
            <th style='width:600px;text-align:center'>
                ClassID
            </th>
            <th>
                描述
            </th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td>CloudroomBoardUI</td>
        <td>
            {D9ED4651-4461-458a-99F4-A455977582FF}
        </td>
        <td>CloudroomBoardUI是提供白板操作和管理组件</td>
    </tr>
    <tr>
        <td>CloudroomHttpFileMgr</td>
        <td>
            {7E44F8C9-7C8D-4004-8F45-D9819D78663C}
        </td>
        <td>
        <p>CloudroomHttpFileMgr是http文件上传下载、及文件管理组件</p>
        </td>
    </tr>
    <tr>
        <td>CloudroomMediaUI</td>
        <td>
            {93A618D5-2535-42d0-B72B-95705263F398}
        </td>
        <td>
        <p>CloudroomMediaUI是影音播放和共享Ui组件</p>
        </td>
    </tr>
    <tr>
        <td>CloudroomQueue</td>
        <td>
            {9AAD199D-A02F-4513-875D-AA81091E44B9}
        </td>
        <td>
         <p>CloudroomQueue 是队列组件，实现队列功能，目的是为了实现用户自动分配。<p>
         <p>单例组件，整个程序的生命过程中只能有有一个实例。<p>
        </td>
    </tr>
    <tr>
        <td>CloudroomScreenShareUI</td>
        <td>
            {6FF142C5-8A36-49d7-B627-D60B803550FC}
        </td>
        <td>CloudroomScreenShareUI是屏幕共享、屏幕控制和标注功能的Ui组件</td>
    </tr>
    <tr>
        <td>CloudroomVideoMeeting</td>
        <td>
            {9E9DD983-A9F8-4dff-B694-B1AE1C708B1E}
        </td>
        <td>
        <p>会议核心组件，实现通话建立、音频采集播入、视频采集编解码、屏幕共享、录制、影音播放等。</p>
        <p> 单例组件，整个程序的生命过程中只能有有一个实例。</p>
        </td>
    </tr>
    <tr>
        <td>CloudroomVideoMgr</td>
        <td>
            {120AD2B0-68F2-46c6-88D8-52173F501C0F}
        </td>
        <td>
        <p>会议核心组件，实现会议登录、创建、透明传输等。</p>
        <p> 单例组件，整个程序的生命过程中只能有有一个实例。</p>
        </td>
    </tr>
    <tr>
        <td>CloudroomVideoSDK</td>
        <td>
            {07EFD662-A1BB-4d8d-9BEE-F7E43E5FEBF5}
        </td>
        <td>
         <p>CloudroomVideoSDK 是基础组件，负责整个SDK的初始化和反初始化操作</p>
         <p> 单例组件，整个程序的生命过程中只能有有一个实例。</p>
        </td>
    </tr>
    <tr>
        <td>CloudroomVideoUI</td>
        <td>
            {8A6BBBDC-C6BE-4a47-92F3-F9581C3FB95E}
        </td>
        <td>
        <p>会议核心控件，实现视频画面显示、画面缩放等。</p>
        </td>
    </tr>
    </tbody>
</table>



## 可视化组件
可视化组件主要包括[影音共享UI显示组件](#UIMediaShare)、[屏幕共享UI显示组件](#UIScreenShare)、[成员视频UI显示组件](#UIMemberVideo)、[白板显示UI显示组件](#UIWhiteBoard)。组件注册后，即可方便地集成到App中，快速开发出想要的产品。

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr>
            <th style='width:170px;text-align: center;'>
                模块
            </th>
            <th style='width:60px;text-align: center;'>
                方式
            </th>
            <th class=customClass>
                接口
            </th>
            <th>
                描述
            </th>
        </tr>
    </thead>
    <tbody>
         <tr>
            <td rowspan=10 id=UIMediaShare><a href="./API.html#creatMediaObj" >影音共享UI显示组件</a></td>
            <td  rowspan=10>主调</td>
            <td>
                creatMediaObj
            </td>
            <td>
                创建media对象
            </td>
        </tr>
        <tr>
            <td>disableToolBar</td>
            <!-- <td><a href="API.md#disableToolBar">disableToolBar</a></td> -->
            <td>
                设置工具条是否可用
            </td>
        </tr>
        <tr>
            <td>setKeepAspectRatio</td>
            <!-- <td><a href="API.md#keepAspectRatio">keepAspectRatio</a></td> -->
            <td>
               设置绘制模式，是否拉伸绘制
            </td>
        </tr>
        <tr>
            <td>setDblClickFullScreen</td>
            <!-- <td><a href="API.md#dblClickFullScreen">dblClickFullScreen</a></td> -->
            <td>
                设置是否支持双击全屏,默认不支持双击全屏
            </td>
        </tr>
        <tr>
            <td>savePicToBase64</td>
            <!-- <td><a href="API.md#savePicToBase64">savePicToBase64</a></td> -->
            <td>
                保存播放影音画面到图片文件
            </td>
        </tr>
        <tr>
            <td>savePicToFile</td>
            <td>
                保存播放影音画面到图片文件
            </td>
        </tr>
        <tr>
            <td>setToolBarUIElementVisible</td>
            <td>
                设置是否显示播放工具条上的界面元素
            </td>
        </tr>
        <tr>
            <td>setToolBarSize</td>
            <td>
                设置工具条的高度
            </td>
        </tr>
        <tr>
            <td>setFullScreen</td>
            <!-- <td><a href="API.md#setFullScreen">setFullScreen</a></td> -->
            <td>
                设置是否全屏显示
            </td>
        </tr>
        <tr>
            <td>getFullScreen</td>
            <!-- <td><a href="API.md#getFullScreen">getFullScreen</a></td> -->
            <td>
                 获取全屏状态
            </td>
        </tr>
        <tr>
            <td rowspan=16 id=UIScreenShare><a href="./API.html#creatScreenShareObj" >屏幕共享UI显示组件</a></td>
            <td  rowspan=16>主调</td>
            <td>
                creatScreenShareObj
            </td>
            <td>
                创建screenShare对象
            </td>
        </tr>
        <tr>
            <td>clear</td>
            <!-- <td><a href="API.md#clear">clear</a></td> -->
            <td>
                清空缓存的图像
            </td>
        </tr>
        <tr>
            <td>setCtrlOpen</td>
            <!-- <td><a href="API.md#ctrlOpen">ctrlOpen</a></td> -->
            <td>
                设置是否开启控制模式
            </td>
        </tr>
        <tr>
            <td>disableFloatToolbar</td>
            <!-- <td><a href="API.md#disableFloatToolbar">disableFloatToolbar</a></td> -->
            <td>
                设置是否禁止出现浮动工具条
            </td>
        </tr>
        <tr>
            <td>isCursorInUI</td>
            <!-- <td><a href="API.md#isCursorInUI">isCursorInUI</a></td> -->
            <td>
                鼠标是否在屏幕共享显示控件上
            </td>
        </tr>
        <tr>
            <td>getCursorPosInRemote</td>
            <!-- <td><a href="API.md#getCursorPosInRemote">getCursorPosInRemote</a></td> -->
            <td>
                鼠标在本地的屏幕共享UI控件上时，鼠标位置映射到远端的屏幕上的坐标
            </td>
        </tr>
        <tr>
            <td>getPicWidth</td>
            <!-- <td><a href="API.md#getPicWidth">getPicWidth</a></td> -->
            <td>
                获取远端屏幕的实际宽度
            </td>
        </tr>
        <tr>
            <td>getPicHeight</td>
            <!-- <td><a href="API.md#getPicHeight">getPicHeight</a></td> -->
            <td>
                获取远端屏幕的实际高度
            </td>
        </tr>
        <tr>
            <td>setEnableMarked</td>
            <!-- <td><a href="API.md#enableMarked">enableMarked</a></td> -->
            <td>
                设置是否开启标注模式
            </td>
        </tr>
        <tr>
            <td>get_isPicEmpty</td>
            <!-- <td><a href="API.md#isPicEmpty">isPicEmpty</a></td> -->
            <td>
                 检查图像是否为空
            </td>
        </tr>
        <tr>
            <td>setKeepAspectRatio</td>
            <!-- <td><a href="API.md#keepAspectRatio">keepAspectRatio</a></td> -->
            <td>
                设置绘制模式，是否拉伸绘制
            </td>
        </tr>
        <tr>
            <td>savePic</td>
            <!-- <td><a href="API.md#savePic">savePic</a></td> -->
            <td>
                拍照
            </td>
        </tr>
        <tr>
            <td>setFullScreen</td>
            <!-- <td><a href="API.md#setFullScreen">setFullScreen</a></td> -->
            <td>
                设置是否全屏
            </td>
        </tr>
        <tr>
            <td>getFullScreen</td>
            <!-- <td><a href="API.md#getFullScreen">getFullScreen</a></td> -->
            <td>
                 获取全屏状态
            </td>
        </tr>
        <tr>
            <td>setDblClickFullScreen</td>
            <!-- <td><a href="API.md#setDblClickFullScreen">setDblClickFullScreen</a></td> -->
            <td>
                配置是否允许双击全屏
            </td>
        </tr>
        <tr>
            <td>getDblClickFullScreen</td>
            <!-- <td><a href="API.md#getDblClickFullScreen">getDblClickFullScreen</a></td> -->
            <td>
                获取是否允许双击全屏状态
            </td>
        </tr>
        <tr>
            <td rowspan=19 id=UIMemberVideo><a href="./API.html#creatVideoObj" >成员视频UI显示组件</a></td>
            <td  rowspan=19>主调</td>
            <td>
                creatVideoObj
            </td>
            <td>
                创建video对象
            </td>
        </tr>
        <tr>
            <td>clear</td>
            <!-- <td><a href="API.md#clear">clear</a></td> -->
            <td>
                清空缓存图像
            </td>
        </tr>
        <tr>
            <td>getVideoID</td>
            <!-- <td><a href="API.md#getVideoID">getVideoID</a></td> -->
            <td>
                获取当前显示的用户的视频设备
            </td>
        </tr>
        <tr>
            <td>getIsPicEmpty</td>
            <!-- <td><a href="API.md#isPicEmpty">isPicEmpty</a></td> -->
            <td>
                检查图像是否为空
            </td>
        </tr>
        <tr>
            <td>getPicFrameTime</td>
            <!-- <td><a href="API.md#getPicFrameTime">getPicFrameTime</a></td> -->
            <td>
                获取图像时间戳
            </td>
        </tr>
        <tr>
            <td>setKeepAspectRatio</td>
            <!-- <td><a href="API.md#keepAspectRatio">keepAspectRatio</a></td> -->
            <td>
                设置显示的视频画面是否保持比例
            </td>
        </tr>
        <tr>
            <td>setDblClickFullScreen</td>
            <!-- <td><a href="API.md#dblClickFullScreen">dblClickFullScreen</a></td> -->
            <td>
                设置是否支持双击全屏,默认不支持双击全屏
            </td>
        </tr>
        <tr>
            <td>savePic</td>
            <!-- <td><a href="API.md#savePic">savePic</a></td> -->
            <td>
                拍照
            </td>
        </tr>
        <tr>
            <td>setSavePicRect</td>
            <!-- <td><a href="API.md#setSavePicRect">setSavePicRect</a></td> -->
            <td>
                设置拍照区域
            </td>
        </tr>
        <tr>
            <td>getPicWidth</td>
            <td>
                获取图像宽
            </td>
        </tr>
        <tr>
            <td>getPicHeight</td>
            <td>
                获取图像高
            </td>
        </tr>
        <tr>
            <td>setFullScreen</td>
            <td>
                设置是否全屏
            </td>
        </tr>
        <tr>
            <td>getFullScreen</td>
            <!-- <td><a href="API.md#getFullScreen">getFullScreen</a></td> -->
            <td>
                获取全屏状态
            </td>
        </tr>
        <tr>
            <td>setVideo</td>
            <!-- <td><a href="API.md#setVideo">setVideo</a></td> -->
            <td>
                设置显示的目标用户视频
            </td>
        </tr>
        <tr>
            <td>setVideo2</td>
            <!-- <td><a href="API.md#setVideo2">setVideo2</a></td> -->
            <td>
                设置显示目标用户的第2、第3档视频
            </td>
        </tr>
        <tr>
            <td>getQualityLv</td>
            <!-- <td><a href="API.md#getQualityLv">getQualityLv</a></td> -->
            <td>
                获取当前显示的视频档位
            </td>
        </tr>
        <tr>
            <td>getVisibleNickName</td>
            <!-- <td><a href="API.md#getVisibleNickName">getVisibleNickName</a></td> -->
            <td>
                获取是否显示昵称
            </td>
        </tr>
        <tr>
            <td>setVisibleNickName</td>
            <!-- <td><a href="API.md#setVisibleNickName">setVisibleNickName</a></td> -->
            <td>
                设置是否显示昵称
            </td>
        </tr>
        <tr>
            <td>setMaskPic</td>
            <!-- <td><a href="API.md#setMaskPic">setMaskPic</a></td> -->
            <td>
                在视频窗口上显示一个遮罩图片
            </td>
        </tr>
          <tr>
            <td rowspan=17 id=UIWhiteBoard><a href="./API.html#BoardContainer" >白板显示UI显示组件</a></td>
            <td  rowspan=17>主调</td>
            <td>
                creatBoardObj
            </td>
            <td>
                创建board对象
            </td>
        </tr>
        <tr>
            <td>getBoardIDs</td>
            <!-- <td><a href="API.md#getBoardIDs">getBoardIDs</a></td> -->
            <td>
                获取当前房间内的所有白板ID
            </td>
        </tr>
        <tr>
            <td>getBoardInfo</td>
            <!-- <td><a href="API.md#getBoardInfo">getBoardInfo</a></td> -->
            <td>
                获取指定白板的信息
            </td>
        </tr>
        <tr>
            <td>getCurBoardID</td>
            <!-- <td><a href="API.md#getCurBoardID">getCurBoardID</a></td> -->
            <td>
                获取当前显示的白板
            </td>
        </tr>
        <tr>
            <td>getCurPageNo</td>
            <!-- <td><a href="API.md#getCurPageNo">getCurPageNo</a></td> -->
            <td>
                获取当前白板的当前页
            </td>
        </tr>
        <tr>
            <td>setCurBoard</td>
            <!-- <td><a href="API.md#setCurBoard">setCurBoard</a></td> -->
            <td>
                设置当前白板
            </td>
        </tr>
        <tr>
            <td>undo</td>
            <!-- <td><a href="API.md#undo">undo</a></td> -->
            <td>
                撤消我的最后一个标注
            </td>
        </tr>
        <tr>
            <td>redo</td>
            <!-- <td><a href="API.md#redo">redo</a></td> -->
            <td>
                恢复我的最后一次撤消
            </td>
        </tr>
        <tr>
            <td>clear</td>
            <!-- <td><a href="API.md#clear">clear</a></td> -->
            <td>
                清空当前白板所有标注(清空操作不能再恢复）
            </td>
        </tr>
        <tr>
            <td>isScaledContents</td>
            <!-- <td><a href="API.md#isScaledContents">isScaledContents</a></td> -->
            <td>
                获取白板当前的缩放模式，缩放模式下内容将被缩小或放大以填充有效区域，非缩放模式下图像将按原始尺寸显示并可能出现滚动条
            </td>
        </tr>
        <tr>
            <td>setScaledContents</td>
            <!-- <td><a href="API.md#setScaledContents">setScaledContents</a></td> -->
            <td>
                设置白板的缩放模式
            </td>
        </tr>
        <tr>
            <td>setColor</td>
            <!-- <td><a href="API.md#setColor">setColor</a></td> -->
            <td>
                设置画笔颜色
            </td>
        </tr>
        <tr>
            <td>getColor</td>
            <!-- <td><a href="API.md#getColor">getColor</a></td> -->
            <td>
                获取当前画笔颜色
            </td>
        </tr>
        <tr>
            <td>setLineWidth</td>
            <!-- <td><a href="API.md#setLineWidth">setLineWidth</a></td> -->
            <td>
                设置画笔线宽
            </td>
        </tr>
        <tr>
            <td>getLineWidth</td>
            <!-- <td><a href="API.md#getLineWidth">getLineWidth</a></td> -->
            <td>
                获取当前画笔线宽
            </td>
        </tr>
        <tr>
            <td>setReadOnly</td>
            <!-- <td><a href="API.md#setReadOnly">setReadOnly</a></td> -->
            <td>
                设置白板本地只读（本地禁止标注，其他端不受影响）
            </td>
        </tr>
        <tr>
            <td>isReadOnly</td>
            <!-- <td><a href="API.md#isReadOnly">isReadOnly</a></td> -->
            <td>
                获取白板本地只读配置
            </td>
        </tr>
    </tbody>
</table>
