# API参考

<h2 id=registerWhiteBoardCallback>- (void)registerWhiteBoardCallback </h2>

* **功能** ： 注册内部事件的监听者，以便处理图元等各种消息
* **返回值** ： 无


<h2 id=removeWhiteBoardCallBack>- (void)removeWhiteBoardCallBack </h2>

* **功能** ： 清理内部事件监听者，需要移除释放
* **返回值** ： 无

<h2 id=setBoardViewCallback>- (void)setBoardViewCallback:(id&lt;CLBoardViewCallBack&gt;)callback </h2>

* **功能** ： 设置View的代理对象
* **返回值** ： 无

参数 | 类型 | 含义
:---|:---|:---
callback | CLBoardViewCallBack | View代理对象

<h2 id=createWhiteBoard>- (void)createWhiteBoard:(int)w h:(int)h pageCount:(int)pageCount pageMode:(CLPageMode)pageMode exInfo:(NSString *)exInfo </h2>

* **功能** ： 创建白板
* **返回值** ： 无


参数 | 类型 | 含义
:---|:---|:---
width | int | 宽度
height | int | 高度
pageCount | int | 页数
pageMode | CLPageMode | 翻页模式, 详情请参考[CLPageMode](const_define.md#CLPageMode)
exInfo | NSString | 白板的扩展信息<=4KB(Json格式)

<h2 id=notifyCreateBoard>- (void)notifyCreateBoard:(BoardInfo *)board operatorID:(NSString *)operatorID </h2>

* **功能** ： 通知白板创建
* **返回值** ： 无


参数 | 类型 | 含义
:---|:---|:---
board | BoardInfo | 白板信息，详情请参考[BoardInfo](type_define.md#BoardInfo)
operatorID | NSString | 操作者ID

<h2 id=closeBoard>- (void)closeBoard:(NSString *)boardID </h2>

* **功能** ： 关闭白板
* **返回值** ： 无


参数 | 类型 | 含义
:---|:---|:---
boardID | NSString | 白板ID

<h2 id=notifyCloseBoard>- (void)notifyCloseBoard:(BoardInfo *)boardID operatorID:(NSString *)operatorID </h2>

* **功能** ： 关闭白板通知
* **返回值** ： 无


参数 | 类型 | 含义
:---|:---|:---
boardID | NSString | 白板ID
operatorID | NSString | 操作者ID

<h2 id=getAllBoard>- (NSArray<NSString *> *)getAllBoard</h2>

* **功能** ： 获取所有白板
* **返回值** ： 所有白板ID


<h2 id=updateBoardExInfo>- (void)updateBoardExInfo:(NSString *)boardID exInfo:(NSString *)exInfo </h2>

* **功能** ： 更新白板的扩展信息
* **返回值** ： 无


参数 | 类型 | 含义
:---|:---|:---
boardID | NSString | 白板ID
exInfo | NSString | 扩展信息


<h2 id=notifyBoardExinfoUpdated>- (void)notifyBoardExInfoUpdated:(NSString *)boardID exInfo:(NSString *)exInfo operatorID:(NSString *)operatorID </h2>

* **功能** ： 通知白板扩展信息有更新
* **返回值** ： 无


参数 | 类型 | 含义
:---|:---|:---
boardID | NSString | 白板ID
exInfo | NSString | 扩展信息
operatorID | NSString | 操作者ID

<h2 id=notifyInitBoardList>- (void)notifyInitBoardList:(NSArray&lt;NSString *&gt; *)boardIDList </h2>

* **功能** ： 通知白板列表
* **返回值** ： 无


参数 | 类型 | 含义
:---|:---|:---
boardIDList | NSArray | 白板ID列表

<h2 id=getBoardInfo>- (BoardInfo *)getBoardInfo:(NSString *)boardID </h2>

* **功能** ： 获取白板信息
* **返回值** ： 白板信息


参数 | 类型 | 含义
:---|:---|:---
boardID | NSString | 白板ID

<h2 id=getCurrentBoard>- (NSString *)getCurrentBoard </h2>

* **功能** ： 获取白板信息
* **返回值** ： 白板ID

<h2 id=setCurrentBoard>- (void)setCurrentBoard:(NSString *)boardID </h2>

* **功能** ： 设置当前白板
* **返回值** ： 无


参数 | 类型 | 含义
:---|:---|:---
boardID | NSString | 白板ID

<h2 id=notifyCurrentBoard>- (void)notifyCurrentBoard:(NSString *)boardID operatorID:(NSString *)operatorID </h2>

* **功能** ： 通知更换当前白板
* **返回值** ： 无

参数 | 类型 | 含义
:---|:---|:---
boardID | NSString | 白板ID
operatorID | NSString | 操作者ID

<h2 id=notifyViewScaleChanged>- (void)notifyViewScaleChanged:(NSString *)boardID boardView:(CLBoardView *)boardView scale:(int)scale </h2>

* **功能** ： 通知白板缩放比改变
* **返回值** ： 无


参数 | 类型 | 含义
:---|:---|:---
wID | NSString | 白板ID
scale | int | 缩放系数（50%-500%）
opId | String | 操作者ID

<h2 id=setBoardID>- (void)setBoardID:(NSString *__nullable)boardID callBack:(id&lt;CLBoardViewCallBack&gt;__nullable)callBack jsonAttr:(NSMutableDictionary *__nullable)jsonAttr </h2>

* **功能** ： 配置白板View
* **返回值** ： 无


参数 | 类型 | 含义
:---|:---|:---
boardID | NSString | 白板ID
callBack | int | 白板View事件回调对象
jsonAttr | int | 白板View属性

<h2 id=configBoardTextViewContainer>- (void)configBoardTextViewContainer:(UIView *)textViewContainer </h2>

* **功能** ： 配置白板文本图元输入控件的父视图，建议使用当前控制器的View方便内部控制textView效果
* **返回值** ： 无

参数 | 类型 | 含义
:---|:---|:---
textViewContainer | UIView | 输入控件的父视图

<h2 id=resignTextViewFirstResponder>- (void)resignTextViewFirstResponder </h2>

* **功能** ： 取消内部输入控件的第一响应
* **返回值** ： 无

<h2 id=setBoardViewAttr>- (void)setBoardViewAttr:(CLBoardViewAttr *)jsonAttr </h2>

* **功能** ： 更新白板View属性
* **返回值** ： 无

参数 | 类型 | 含义
:---|:---|:---
jsonAttr | CLBoardViewAttr | 白板View属性，详情请参考[CLBoardViewAttr](type_define.md#CLBoardViewAttr)

<h2 id=getBoardViewAttr>- (CLBoardViewAttr *)getBoardViewAttr </h2>

* **功能** ： 获取白板View属性
* **返回值** ： 白板View属性

<h2 id=setBoardViewToolType>- (void)setBoardViewToolType:(CLShapeType)type </h2>

* **功能** ： 设置view的工具类型
* **返回值** ： 无

参数 | 类型 | 含义
:---|:---|:---
type | CLShapeType | 工具类型, 详情请参考[CLShapeType](const_define.md#CLShapeType)

<h2 id=getBoardViewToolType>- (CLShapeType)getBoardViewToolType </h2>

* **功能** ： 获取view的工具类型
* **返回值** ： 工具类型

<h2 id=setBoardViewCurPage>- (void)setBoardViewCurPage:(NSInteger)pageNum </h2>

* **功能** ： 设置View的当前页
* **返回值** ： 无

参数 | 类型 | 含义
:---|:---|:---
pageNum | NSInteger | 当前页

<h2 id=getBoardViewCurPage>- (NSInteger)getBoardViewCurPage </h2>

* **功能** ： 获取View的当前页
* **返回值** ： 当前页

<h2 id=clearCurPage>- (void)clearCurPage </h2>

* **功能** ： 清空当页标注
* **返回值** ： 无

<h2 id=clearAllPage>- (void)clearAllPage </h2>

* **功能** ： 清空整个View的标注
* **返回值** ： 无

<h2 id=getRedoEnableState>- (BOOL)getRedoEnableState </h2>

* **功能** ： 获取是否可以redo
* **返回值** ： 可用状态

<h2 id=getUndoEnableState>- (BOOL)getUndoEnableState </h2>

* **功能** ： 获取是否可以undo
* **返回值** ： 可用状态

<h2 id=undo>- (void)undo</h2>

* **功能** ： 撤销
* **返回值** ： 无

<h2 id=redo>- (void)redo </h2>

* **功能** ： 恢复
* **返回值** ： 无


<h2 id=setBoardViewToolAttr>- (void)setBoardViewToolAttr:(CLBoardViewToolAttr *)property </h2>

* **功能** ： 设置View的工具属性
* **返回值** ： 无

参数 | 类型 | 含义
:---|:---|:---
property | CLBoardViewToolAttr | view属性, 详情请参考[CLBoardViewToolAttr](type_define.md#CLBoardViewToolAttr)


<h2 id=getBoardViewToolAttr>- (CLBoardViewToolAttr *)getBoardViewToolAttr </h2>

* **功能** ： 获取View的工具属性
* **返回值** ： 白板View的工具属性


<h2 id=setViewScale>- (void)setViewScale:(CGFloat)scale </h2>

* **功能** ： 设置View的缩放系数
* **返回值** ： 无

参数 | 类型 | 含义
:---|:---|:---
scale | CGFloat | 缩放系数 0.5~5.0


<h2 id=getViewScale>- (CGFloat)getViewScale </h2>

* **功能** ： 获取View的缩放系数
* **返回值** ： 白板View属性


<h2 id=notifyBoardCurPageChanged>- (void)notifyBoardCurPageChanged:(CLBoardView *)boardView curPage:(NSInteger)curPage operatorID:(NSString *)operatorID </h2>

* **功能** ： 通知白板View翻页变化
* **返回值** ： 无

参数 | 类型 | 含义
:---|:---|:---
boardView | CLBoardView | 白板view
curPage | NSInteger | 当前页
operatorID | NSString | 操作者


<h2 id=notifyRedoEnableChanged>- (void)notifyRedoEnableChanged:(CLBoardView *)boardView bEnable:(BOOL)bEnable </h2>

* **功能** ： 通知白板View可重做状态
* **返回值** ： 无

参数 | 类型 | 含义
:---|:---|:---
boardView | CLBoardView | 白板view
bEnable | BOOL | 可用状态


<h2 id=notifyUndoEnableChanged>- (void)notifyUndoEnableChanged:(CLBoardView *)boardView bEnable:(BOOL)bEnable; </h2>

* **功能** ： 通知白板View可撤销状态
* **返回值** ： 无

参数 | 类型 | 含义
:---|:---|:---
boardView | CLBoardView | 白板view
bEnable | BOOL | 可用状态


<h2 id=notifyViewScaleChanged>- (void)notifyViewScaleChanged:(NSString *)boardID boardView:(CLBoardView *)boardView scale:(int)scale </h2>

* **功能** ： 通知白板view放大系数改变
* **返回值** ： 无

参数 | 类型 | 含义
:---|:---|:---
boardView | CLBoardView | 白板view
scale | int | 放大系数


<h2 id=notifyMarkException>- (void)notifyMarkException:(CLBoardView *)boardView exType:(CLBoardViewMarkExceptionType)exType </h2>

* **功能** ： 通知白板view标注异常
* **返回值** ： 无

参数 | 类型 | 含义
:---|:---|:---
boardView | CLBoardView | 白板view
exType | CLBoardViewMarkExceptionType | 异常原因，详情参考[CLBoardViewMarkExceptionType](const_define.md#CLBoardViewMarkExceptionType)