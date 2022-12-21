# 白板管理

### 前提条件
已参考 [创建白板](create.md) 创建了一个白板

### 白板切换
* 通过 [setCurrentBoard](wb_api.md#setCurrentBoard)

```Objective-C
[[CloudroomVideoMeeting shareInstance] setCurrentBoard:boardID];
```
- 回调通知 [notifyCurrentBoard](wb_api.md#notifyCurrentBoard)：
```Objective-C
- (void)notifyCurrentBoard:(NSString *)boardID operatorID:(NSString *)operatorID {
    [self.drawerView  setBoardID:boardID callBack:self jsonAttr:jsonAttr]; // 给白板配置白板ID
    [self.drawerView setBoardViewToolType:_currentToolType]; // 设置当前图元工具
}
```
### 删除白板
* 通过 [closeBoard](wb_api.md#closeBoard)
```Objective-C
[[CloudroomVideoMeeting shareInstance] closeBoard:boardID];
```
* 白板删除通知 [notifyCloseBoard](wb_api.md#notifyCloseBoard)
```Objective-C
- (void)notifyCloseBoard:(BoardInfo *)board operatorID:(NSString *)operatorID {
    
}
```

<h3 id=getAllBoard>获取房间中的所有白板</h3>

- 调用接口：

```Objective-C
NSArray<NSString *> *allBoardIDs = [[CloudroomVideoMeeting shareInstance] getAllBoard];
```
相关API请参考:
- [getAllBoard](wb_api.md#getAllBoard)

<h3 id=updateBoardExInfo>更新白板的扩展信息</h3>

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

<h3 id=getBoardInfo>获取白板信息</h3>

- 调用接口：
```Objective-C
BoardInfo *board = [[CloudroomVideoMeeting shareInstance] getBoardInfo:boardID];
```
相关API请参考:
- [getBoardInfo](wb_api.md#getBoardInfo)
- [BoardInfo](type_define.md#BoardInfo)

<h3 id=getCurrentBoard>获取当前白板</h3>

- 调用接口：
```Objective-C
NSString *boardID = [[CloudroomVideoMeeting shareInstance] getCurrentBoard];
```
相关API请参考:
- [getCurrentBoard](wb_api.md#getCurrentBoard)