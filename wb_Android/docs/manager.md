# 白板管理

### 前提条件
已参考 [创建白板](create.md) 创建了一个白板

### 通知初始化白板列表
* 通过 [notifyInitBoardList](wb_api.md#notifyInitBoardList)

```java
@Override
public void notifyInitBoardList(List<String> boardIDList) {
}
```


### 白板切换
* 通过 [setCurrentBoard](wb_api.md#setCurrentBoard)

```java
CloudroomVideoMeeting.getInstance().setCurrentBoard((String boardID)
```
- 回调通知 [notifyCurrentBoard](wb_api.md#notifyCurrentBoard)：
```java
@Override
public void notifyCurrentBoard(String wId, String opId) {
}
```
### 删除白板
* 通过 [closeBoard](wb_api.md#closeBoard)
```java
CloudroomVideoMeeting.getInstance().closeBoard((String boardID)
```
* 白板删除通知 [notifyCloseBoard](wb_api.md#notifyCloseBoard)
```java
@Override
public void notifyCloseBoard(String wID, String opId){}
```

<h3 id=getAllBoard>获取房间中的所有白板</h3>

- 调用接口：

```java
CloudroomVideoMeeting.getInstance().getAllBoard()
```
相关API请参考:
- [getAllBoard](wb_api.md#getAllBoard)

<h3 id=updateBoardExInfo>更新白板的扩展信息</h3>

- 调用接口：

```java
board.updateBoardExInfo(String wId, String exInfo)
```

- 回调通知：
```java
@Override
public void notifyBoardExinfoUpdated(String wId, String extInfo, String opId) {
}
```
相关API请参考:
- [notifyBoardExinfoUpdated](wb_api.md#notifyBoardExinfoUpdated)
- [updateBoardExInfo](wb_api.md#updateBoardExInfo)

<h3 id=getBoardInfo>获取白板信息</h3>

- 调用接口：
```java
CloudroomVideoMeeting.getInstance().getBoardInfo(String boardID)
```
相关API请参考:
- [getBoardInfo](wb_api.md#getBoardInfo)

<h3 id=getCurrentBoard>获取当前白板</h3>

- 调用接口：
```java
CloudroomVideoMeeting.getInstance().getCurrentBoard()
```
相关API请参考:
- [getCurrentBoard](wb_api.md#getCurrentBoard)

<h3 id=setBoardViewCurPage>设置view的当前页</h3>

- 调用接口：
```java
boardView.setBoardViewCurPage(int pageNum)
```
相关API请参考:
- [setBoardViewCurPage](wb_api.md#setBoardViewCurPage)


<h3 id=getBoardViewCurPage>获取view的当前页</h3>

- 调用接口：
```java
boardView.getBoardViewCurPage()
```
相关API请参考:
- [getBoardViewCurPage](wb_api.md#getBoardViewCurPage)


<h3 id=clearCurPage>清空当前页标注</h3>

- 调用接口：
```java
boardView.clearCurPage()
```
相关API请参考:
- [clearCurPage](wb_api.md#clearCurPage)


<h3 id=clearAllPage>清空整个view的标注</h3>

- 调用接口：
```java
boardView.clearAllPage()
```
相关API请参考:
- [clearAllPage](wb_api.md#clearAllPage)


<h3 id=notifyMarkException>通知标注异常</h3>

- 调用接口：
```kotlin
override fun notifyMarkException(exType: Int) {}
```
相关API请参考:
- [notifyMarkException](wb_api.md#notifyMarkException)