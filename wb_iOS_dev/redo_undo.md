# 白板图元撤销恢复

### 前提条件
已参考 [创建白板](create.md) 创建了一个白板

### 实现流程
1、撤消上一步操作 [undo](wb_api.md#undo)

```Objective-C
if ([self.drawerView getUndoEnableState]) {
    [self.drawerView undo];
}
```

2、恢复上一步撤销的操作 [redo](wb_api.md#redo)

```Objective-C
if ([self.drawerView getRedoEnableState]) {
    [self.drawerView redo];
}
```