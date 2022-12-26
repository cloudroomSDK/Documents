# 白板绘制

### 前提条件
已参考 [创建白板](create.md) 创建了一个白板

### 实现流程

1、设置boardID和相关权限
* [setBoardID](wb_api.md#setBoardID)
```java
boardview.setBoardID(String boardID, BoardViewAttr viewAttr)
```


2、开启绘制功能
* 通过 [setBoardViewToolType](wb_api.md#setBoardViewToolType) 设置为WB_SHAPE_TYPE.SHAPE_PEN
* 设置完成后，用手指在BoardView的范围内按下移动，即可看到画笔效果展现在BoardView上

```java
boardview.setBoardViewToolType(WB_SHAPE_TYPE.SHAPE_PEN)
```
* 获取view的工具类型 [getBoardViewToolType](wb_api.md#getBoardViewToolType)
```java
boardview.getBoardViewToolType()
```

3、设置绘制工具
* 通过 [setBoardViewToolType](wb_api.md#setBoardViewToolType) 设置工具类型
```java
boardview.setBoardViewToolType(int type);
```

4、设置画笔粗细颜色等属性
* 通过 [setBoardViewToolAttr](wb_api.md#setBoardViewToolAttr)
```java
boardview.setBoardViewToolAttr(BoardViewToolAttr property)
```


