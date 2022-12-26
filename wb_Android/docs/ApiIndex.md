# API概述

### 白板管理

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr>
            <th style='width:170px;text-align:center'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:300px'> 
                描述
            </th>
        </tr>
    </thead>
	<tbody>
        <tr>
            <td rowspan=8>CloudroomVideoMeeting</td>
            <td rowspan=8 style='text-align:center'>主调</td>
            <td><a href="wb_api.md#createWhiteBoard">createWhiteBoard</a></td>
            <td> 创建白板</td>
        </tr>
		<tr>
            <td><a href="wb_api.md#closeBoard">closeBoard</a></td>
            <td> 关闭白板</td>
        </tr>
		<tr>
            <td><a href="wb_api.md#getAllBoard">getAllBoard</a></td>
            <td> 获取房间中的所有白板</td>
        </tr>
		<tr>
            <td><a href="wb_api.md#updateBoardExInfo">updateBoardExInfo</a></td>
            <td> 更新白板的扩展信息</td>
        </tr>
		<tr>
            <td><a href="wb_api.md#getBoardInfo">getBoardInfo</a></td>
            <td> 获取白板信息</td>
        </tr>
		<tr>
            <td><a href="wb_api.md#getCurrentBoard">getCurrentBoard</a></td>
            <td> 获取当前board</td>
        </tr>
		<tr>
            <td><a href="wb_api.md#setCurrentBoard">setCurrentBoard</a></td>
            <td> 设置当前board</td>
        </tr>
        </tbody>
        <tbody>
		<tr>
            <td rowspan=6>CloudroomVideoMeetingCallBack</td>
            <td rowspan=6 style='text-align:center'>回调</td>
            <td><a href="wb_api.md#notifyCreateBoard">notifyCreateBoard</a></td>
            <td>通知创建子功能页白板</td>
        </tr>
		<tr>
            <td><a href="wb_api.md#notifyCloseBoard">notifyCloseBoard</a></td>
            <td>通知关闭白板</td>
        </tr>
		<tr>
            <td><a href="wb_api.md#notifyBoardExinfoUpdated">notifyBoardExinfoUpdated</a></td>
            <td>通知白板的扩展信息改变</td>
        </tr>
		<tr>
            <td><a href="wb_api.md#notifyCurrentBoard">notifyCurrentBoard</a></td>
            <td>通知当前白板改变</td>
        </tr>
		<tr>
            <td><a href="wb_api.md#notifyInitBoardList">notifyInitBoardList</a></td>
            <td>通知白板列表</td>
        </tr>
	</tbody>
</table>


<h2 id=queue>白板View管理</h2>

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr>
            <th style='width:170px;text-align:center'>
                组件
            </th>
			 <th style='width:120px'>
                方式
            </th>
            <th style='width:140px'>
                接口
            </th> 
            <th style='width:300px'> 
                描述
            </th>
        </tr>
    </thead>
	<tbody>
        <tr>
            <td rowspan=22>BoardView</td>
            <td rowspan=22 style='text-align:center'>主调</td>
            <td><a href="wb_api.md#registerWhiteBoardCallback">registerWhiteBoardCallback</a></td>
            <td> 注册内部事件的监听者</td>
        </tr>
        <tr>
            <td><a href="wb_api.md#removeWhiteBoardCallBack">removeWhiteBoardCallBack</a></td>
            <td> 清理内部事件监听者</td>
        </tr>
        <tr>
            <td><a href="wb_api.md#setBoardViewCallback">setBoardViewCallback</a></td>
            <td> 配置白板View的代理对象</td>
        </tr>
        <tr>
            <td><a href="wb_api.md#setBoardID">setBoardID</a></td>
            <td> 配置白板View</td>
        </tr>
		<tr>
            <td><a href="wb_api.md#getBoardViewAttr">getBoardViewAttr</a></td>
            <td> 获取白板View属性</td>
        </tr>
		<tr>
            <td><a href="wb_api.md#setBoardViewAttr">setBoardViewAttr</a></td>
            <td> 更新白板View属性</td>
        </tr>
		<tr>
            <td><a href="wb_api.md#getBoardViewCurPage">getBoardViewCurPage</a></td>
            <td> 获取View的当前页</td>
        </tr>
		<tr>
            <td><a href="wb_api.md#setBoardViewCurPage">setBoardViewCurPage</a></td>
            <td> 设置View的当前页</td>
        </tr>
        <tr>
            <td><a href="wb_api.md#setBoardViewToolType">setBoardViewToolType</a></td>
            <td> 设置View的工具类型</td>
        </tr>
        <tr>
            <td><a href="wb_api.md#getBoardViewToolType">getBoardViewToolType</a></td>
            <td> 获取View的工具类型</td>
        </tr>
        <tr>
            <td><a href="wb_api.md#setBoardViewToolAttr">setBoardViewToolAttr</a></td>
            <td> 设置View的工具属性</td>
        </tr>
        <tr>
            <td><a href="wb_api.md#getBoardViewToolAttr">getBoardViewToolAttr</a></td>
            <td> 获取View的工具属性</td>
        </tr>
        <tr>
            <td><a href="wb_api.md#clearCurPage">clearCurPage</a></td>
            <td> 清空当页标注</td>
        </tr>
        <tr>
            <td><a href="wb_api.md#clearAllPage">clearAllPage</a></td>
            <td> 清空整个View的标注</td>
        </tr>
        <tr>
            <td><a href="wb_api.md#getRedoEnableState">getRedoEnableState</a></td>
            <td> 获取是否可以redo</td>
        </tr>
        <tr>
            <td><a href="wb_api.md#getUndoEnableState">getUndoEnableState</a></td>
            <td> 获取是否可以undo</td>
        </tr>
        <tr>
            <td><a href="wb_api.md#undo">undo</a></td>
            <td> 撤销上一步操作</td>
        </tr>
        <tr>
            <td><a href="wb_api.md#redo">redo</a></td>
            <td> 恢复上一步操作</td>
        </tr>
        <tr>
            <td><a href="wb_api.md#setViewScale">setViewScale</a></td>
            <td> 设置View的缩放系数</td>
        </tr>
        <tr>
            <td><a href="wb_api.md#getViewScale">getViewScale</a></td>
            <td> 获取View的缩放系数</td>
        </tr>
        </tbody>
        <tbody>
		<tr>
            <td rowspan=6>BoardViewCallBack</td>
            <td rowspan=6 style='text-align:center'>回调</td>
            <td><a href="wb_api.md#notifyBoardCurPageChanged">notifyBoardCurPageChanged</a></td>
            <td>通知白板view翻页改变</td>
        </tr>
		<tr>
            <td><a href="wb_api.md#notifyRedoEnableChanged">notifyRedoEnableChanged</a></td>
            <td>通知白板view是否可以重做</td>
        </tr>
		<tr>
            <td><a href="wb_api.md#notifyUndoEnableChanged">notifyUndoEnableChanged</a></td>
            <td>通知白板view是否可以撤销</td>
        </tr>
		<tr>
            <td><a href="wb_api.md#notifyViewScaleChanged">notifyViewScaleChanged</a></td>
            <td>通知当前白板view放大系数改变</td>
        </tr>
		<tr>
            <td><a href="wb_api.md#notifyMarkException">notifyMarkException</a></td>
            <td>通知白板异常</td>
        </tr>
	</tbody>
</table>
