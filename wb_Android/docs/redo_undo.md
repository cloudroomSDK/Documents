# 白板图元撤销恢复

### 前提条件
已参考 [创建白板](create.md) 创建了一个白板

### 实现流程
1、撤消上一步操作 [undo](wb_api.md#undo)

```java
boardview.undo()
```

2、恢复上一步撤销的操作 [redo](wb_api.md#redo)

```java
boardview.redo()
```

3、获取是否可以redo [getRedoEnableState](wb_api.md#getRedoEnableState)

```java
boardview.getRedoEnableState()
```

4、获取是否可以uedo [getUndoEnableState](wb_api.md#getUndoEnableState)

```java
boardview.getUndoEnableState()
```

5、监听白板相关通知[setBoardViewCallback](wb_api.md#setBoardViewCallback)

```
oardview.setBoardViewCallback(BoardViewCallback callback)
```

6、通知redo状态改变[notifyRedoEnableChanged](wb_api.md#notifyRedoEnableChanged)
* 已实现步骤5的前提下
```java
override fun notifyRedoEnableChanged(bEnable: Boolean) {}
```

7、通知undo状态改变[notifyUndoEnableChanged](wb_api.md#notifyUndoEnableChanged)
* 已实现步骤5的前提下
```java
override fun notifyUndoEnableChanged(bEnable: Boolean) {}
```