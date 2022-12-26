# API参考

<h2 id=createWhiteBoard>void createWhiteBoard(int width, int height, int pageCount, PageMode pageMode, String exInfo) </h2>

* **功能** ： 创建白板
* **返回值** ： 无


参数 | 类型 | 含义
:---|:---|:---
width | int | 宽度
height | int | 高度
pageCount | int | 页数
pageMode | [PageMode](const_define.md#PageMode)| 连页/单页
exInfo | String | 额外信息

<h2 id=notifyCreateBoard>void notifyCreateBoard(BoardInfo desc, String opId) </h2>

* **功能** ： 通知白板创建
* **返回值** ： 无


参数 | 类型 | 含义
:---|:---|:---
desc | [BoardInfo](type_define.md#BoardInfo) | 白板信息
opId | String | 操作者ID

<h2 id=closeBoard>void closeBoard(String wID) </h2>

* **功能** ： 关闭白板
* **返回值** ： 无


参数 | 类型 | 含义
:---|:---|:---
wID | String | 白板ID

<h2 id=notifyCloseBoard>void notifyCloseBoard(String wID, String opId) </h2>

* **功能** ： 关闭白板通知
* **返回值** ： 无


参数 | 类型 | 含义
:---|:---|:---
wID | String | 白板ID
opId | String | 操作者ID

<h2 id=getAllBoard>ArrayList&lt;BoardInfo&gt; getAllBoard() </h2>

* **功能** ： 获取所有白板
* **返回值** ： 所有白板


<h2 id=updateBoardExInfo>void updateBoardExInfo(String wId, String exInfo) </h2>

* **功能** ： 更新白板的扩展信息
* **返回值** ： 无


参数 | 类型 | 含义
:---|:---|:---
wID | String | 白板ID
exInfo | String | 扩展信息

<h2 id=notifyBoardExinfoUpdated>void notifyBoardExinfoUpdated(String wId, String extInfo, String opId) </h2>

* **功能** ： 通知白板扩展信息有更新
* **返回值** ： 无


参数 | 类型 | 含义
:---|:---|:---
wID | String | 白板ID
exInfo | String | 扩展信息
opId | String | 操作者ID

<h2 id=getBoardInfo>BoardInfo getBoardInfo(String boardID) </h2>

* **功能** ： 获取白板信息
* **返回值** ： 白板信息


参数 | 类型 | 含义
:---|:---|:---
boardID | String | 白板ID

<h2 id=getCurrentBoard>String getCurrentBoard() </h2>

* **功能** ： 获取白板信息
* **返回值** ： 白板ID

<h2 id=setCurrentBoard>void setCurrentBoard(String boardID) </h2>

* **功能** ： 设置当前白板
* **返回值** ： 无


参数 | 类型 | 含义
:---|:---|:---
boardID | String | 白板ID

<h2 id=notifyCurrentBoard>void notifyCurrentBoard(String wId, String opId) </h2>

* **功能** ： 通知更换当前白板
* **返回值** ： 无

参数 | 类型 | 含义
:---|:---|:---
wID | String | 白板ID
opId | String | 操作者ID

<h2 id=getBoardViewToolType><a href='const_define.md#WB_SHAPE_TYPE'> WB_SHAPE_TYPE</a> getBoardViewToolType() </h2>

* **功能** ： 获取view的工具类型
* **返回值** ： 工具类型

<h2 id=undo>void undo() </h2>

* **功能** ： 撤销
* **返回值** ： 无

<h2 id=redo>void redo() </h2>

* **功能** ： 恢复
* **返回值** ： 无

<h2 id=notifyViewScaleChanged>void notifyViewScaleChanged(String wId, int scale, String opId) </h2>

* **功能** ： 通知白板缩放比改变
* **返回值** ： 无


参数 | 类型 | 含义
:---|:---|:---
wID | String | 白板ID
scale | int | 缩放系数（200代表放大2倍），范围在20~500。
opId | String | 操作者ID

<h2 id=notifyWbCurrentPos>void notifyWbCurrentPos(String wId, float xPos,float yPos, String opId) </h2>

* **功能** ： 通知白板位置改变
* **返回值** ： 无


参数 | 类型 | 含义
:---|:---|:---
wID | String | 白板ID
xPos | float | X轴方向偏移量(取值范围0~1)
yPos | float | Y轴方向偏移量(取值范围0~1)
opId | String | 操作者ID


<h2 id=setBoardViewToolType>void setBoardViewToolType(WB_SHAPE_TYPE type) </h2>

* **功能** ： 设置白板操作模式
* **返回值** ： 无

参数 | 类型 | 含义
:---|:---|:---
type | [WB_SHAPE_TYPE](const_define.md#WB_SHAPE_TYPE) | 白板操作模式


<h2 id=setBoardViewToolAttr>void setBoardViewToolAttr(BoardViewToolAttr property)</h2>

* **功能** ： 设置白板画笔属性
* **返回值** ： 无

参数 | 类型 | 含义
:---|:---|:---
property | [BoardViewToolAttr](type_define.md#BoardViewToolAttr) | 白板画笔属性

<h2 id=getBoardViewToolAttr><a href='type_define.md#BoardViewToolAttr'>BoardViewToolAttr</a> getBoardViewToolAttr()</h2>

* **功能** ： 获取白板画笔属性
* **返回值** ： 画笔属性


<h2 id=notifyInitBoardList>void notifyInitBoardList(List&lt;String&gt; boardIDList)</h2>

* **功能** ： 通知初始化白板列表
* **返回值** ： 无

参数 | 类型 | 含义
:---|:---|:---
boardIDList | List | 白板ID列表


<h2 id=setBoardViewCurPage>void setBoardViewCurPage(int pageNum)</h2>

* **功能** ： 设置view的当前页
* **返回值** ： 无

参数 | 类型 | 含义
:---|:---|:---
pageNum | int | 页数


<h2 id=getBoardViewCurPage>int getBoardViewCurPage()</h2>

* **功能** ： 设置view的当前页
* **返回值** ： 当前页


<h2 id=clearCurPage>void clearCurPage()</h2>

* **功能** ： 清空当前页标注
* **返回值** ： 无


<h2 id=clearAllPage>void clearAllPage()</h2>

* **功能** ： 清空整个view的标注
* **返回值** ： 无


<h2 id=getRedoEnableState>boolean getRedoEnableState()</h2>

* **功能** ： 获取是否可以redo
* **返回值** ： 是否可以redo


<h2 id=getUndoEnableState>boolean getUndoEnableState()</h2>

* **功能** ： 获取是否可以undo
* **返回值** ： 是否可以undo


<h2 id=notifyRedoEnableChanged>void notifyRedoEnableChanged(boolean bEnable)</h2>

* **功能** ： 通知是否可以redo
* **返回值** ： 无


参数 | 类型 | 含义
:---|:---|:---
bEnable | boolean | 是否可以redo

<h2 id=notifyUndoEnableChanged>void notifyUndoEnableChanged(boolean bEnable)</h2>

* **功能** ： 通知是否可以undo
* **返回值** ： 无

参数 | 类型 | 含义
:---|:---|:---
bEnable | boolean | 是否可以undo

<h2 id=notifyMarkException>void notifyMarkException(MarkException exType)</h2>

* **功能** ： 通知标注异常
* **返回值** ： 无

参数 | 类型 | 含义
:---|:---|:---
exType | [MarkException](const_define.md#MarkException) | 异常类型

<h2 id=setBoardID>void setBoardID(String boardID, BoardViewAttr viewAttr)</h2>

* **功能** ： 设置白板ID和相关权限属性
* **返回值** ： 无

参数 | 类型 | 含义
:---|:---|:---
boardID | String | 白板id
viewAttr | [BoardViewAttr](type_define.md#BoardViewAttr) | 权限属性

<h2 id=setBoardViewAttr>void setBoardViewAttr(BoardViewAttr attr)</h2>

* **功能** ： 获取白板权限属性
* **返回值** ： 无

参数 | 类型 | 含义
:---|:---|:---
attr | [BoardViewAttr](type_define.md#BoardViewAttr) | 权限属性


<h2 id=getBoardViewAttr><a href='type_define.md#BoardViewAttr'>BoardViewAttr</a> getBoardViewAttr()</h2>

* **功能** ： 获取白板画笔属性
* **返回值** ： 白板画笔属性

<h2 id=setBoardViewCallback>void setBoardViewCallback(BoardViewCallback callback)</h2>

* **功能** ： 监听白板相关通知
* **返回值** ： 无

参数 | 类型 | 含义
:---|:---|:---
callback | BoardViewCallback | 回调对象

<h2 id=setViewScale>void setViewScale(float scale)</h2>

* **功能** ： 设置白板缩放值
* **返回值** ： 无

参数 | 类型 | 含义
:---|:---|:---
scale | float | 缩放值（200代表2倍，范围在20~500）

<h2 id=getViewScale>float getViewScale()</h2>

* **功能** ： 获取白板缩放值
* **返回值** ： 缩放值（2代表2倍，范围在0.2~5）


<h2 id=notifyBoardCurPageChanged>void notifyBoardCurPageChanged(int curPage, String operatorUserID)</h2>

* **功能** ： 通知白板页变化
* **返回值** ： 无

参数 | 类型 | 含义
:---|:---|:---
curPage | int | 当前页
operatorUserID | String | 操作者ID
