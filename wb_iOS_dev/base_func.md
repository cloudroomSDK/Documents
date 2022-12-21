<h2 id=getAllBoard>获取房间中的所有白板</h2>

- 调用接口：

```Objective-C
[[CloudroomVideoMeeting shareInstance] getAllBoard];
```
相关API请参考:
- [getAllBoard](wb_api.md#getAllBoard)

<h2 id=updateBoardExInfo>更新白板的扩展信息</h2>

- 调用接口：

```Objective-C
[[CloudroomVideoMeeting shareInstance] updateBoardExInfo:boardID exInfo:exInfo];
```

- 回调通知：
```Objective-C
- (void)notifyBoardExInfoUpdated:(NSString *)boardID exInfo:(NSString *)exInfo operatorID:(NSString *)operatorID {
}
```
相关API请参考:
- [notifyBoardExinfoUpdated](wb_api.md#notifyBoardExinfoUpdated)
- [updateBoardExInfo](wb_api.md#updateBoardExInfo)

<h2 id=getBoardInfo>获取白板信息</h2>

- 调用接口：
```Objective-C
WBDesc_V2 *wb = [[CloudroomVideoMeeting shareInstance] getBoardInfo:boardID];
```
相关API请参考:
- [getBoardInfo](wb_api.md#getBoardInfo)

<h2 id=getCurrentBoard>获取当前白板</h2>

- 调用接口：
```Objective-C
NSString *boardID = [[CloudroomVideoMeeting shareInstance] getCurrentBoard];
```
相关API请参考:
- [getCurrentBoard](wb_api.md#getCurrentBoard)

<h2 id=setCurrentBoard>设置当前白板</h2>

- 调用接口：
```Objective-C
[[CloudroomVideoMeeting shareInstance] setCurrentBoard:boardID];
```
- 回调通知：
```Objective-C
- (void)notifyCurrentBoard:(NSString *)boardID operatorID:(NSString *)operatorID {
    [self.drawerView  setBoardID:boardID callBack:self jsonAttr:jsonAttr]; // 给白板配置白板ID
    [self.drawerView setBoardViewToolType:_currentToolType]; // 设置当前图元工具
}
```
相关API请参考:
- [setCurrentBoard](wb_api.md#setCurrentBoard)
- [notifyCurrentBoard](wb_api.md#notifyCurrentBoard)

<h2 id=setBoardViewToolType>设置view的工具类型</h2>

- 调用接口：
```Objective-C
[self.drawerView setBoardViewToolType:CLSHAPE_PEN];
```
相关API请参考:
- [setBoardID](wb_api.md#setBoardID)
- [CLSHAPE_PEN](const_define.md#CLShapeType)
- [setBoardViewToolType](wb_api.md#setBoardViewToolType)


<h2 id=getBoardViewToolType>获取view的工具类型</h2>

- 调用接口：
```Objective-C
CLShapeType type = [self.drawerView getBoardViewToolType];
```
相关API请参考:
- [getBoardViewToolType](wb_api.md#getBoardViewToolType)

<h2 id=emptyElement>清空标注</h2>

- 调用接口：
```Objective-C
[self.drawerView clearAllPage];
```
相关API请参考:
- [clearAllPage](wb_api.md#clearAllPage)

<h2 id=undo>撤消上一步操作</h2>

```Objective-C
[self.drawerView undo];
```
相关API请参考:
- [undo](wb_api.md#undo)

<h2 id=redo>恢复上一步撤销的操作</h2>

```Objective-C
[self.drawerView redo];
```
相关API请参考:
- [redo](wb_api.md#redo)

<h2 id=notifyViewScaleChanged>通知view的缩放比改变</h2>

- 回调通知：
```Objective-C
- (void)notifyViewScaleChanged:(NSString *)wId boardView:(CLBoardView *)boardView scale:(int)scale {
}
```
相关API请参考:
- [notifyViewScaleChanged](wb_api.md#notifyViewScaleChanged)

