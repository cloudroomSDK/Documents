# 白板缩放

### 前提条件
已参考 [创建白板](create.md) 创建了一个白板

### 实现流程
1、开启缩放功能
* 通过 [setBoardViewToolType](wb_api.md#setBoardViewToolType)
* 设置完成后，通过双指手势缩放，即可看到效果展现在BoardView上
```java
boardview.setBoardViewToolType(WB_SHAPE_TYPE.SHAPE_MOVE.value())
```

2、通知view的缩放比改变 [notifyViewScaleChanged](wb_api.md#notifyViewScaleChanged)

- 回调通知：
```java
@Override
public void notifyViewScaleChanged(String wId,int scale, String opId) {
}
```
3、放大后支持移动，通过手指按在BoardView然后上下滑动
* 通知view的位置改变 [notifyWbCurrentPos](wb_api.md#notifyWbCurrentPos)

```java
@Override
public void notifyWbCurrentPos(String wId,float xPos,float yPos, String opId) {
}
```