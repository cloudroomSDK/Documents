# 白板绘制

### 前提条件
已参考 [创建白板](create.md) 创建了一个白板

### 实现流程
1、开启绘制功能
* 通过 [setBoardViewToolType](wb_api.md#setBoardViewToolType) 设置type为 CLSHAPE_PEN
* 设置完成后，用手指在BoardView的范围内按下移动，即可看到画笔效果展现在BoardView上

```Objective-C
[self.drawerView setBoardViewToolType:CLSHAPE_PEN];
```

相关API请参考:
- [CLShapeType](const_define.md#CLShapeType)

* 获取view的工具类型 [getBoardViewToolType](wb_api.md#getBoardViewToolType)
```Objective-C
CLShapeType type = [self.drawerView getBoardViewToolType];
```

2、设置画笔粗细颜色
* 通过 [setBoardViewToolAttr](wb_api.md#setBoardViewToolAttr) 设置画笔粗细
* 画笔粗细为像素值，例如: 1、2、4、8
```Objective-C
CLBoardViewToolAttr *toolAttr = [self.drawerView getBoardViewToolAttr];
toolAttr.lineWidth = (int)thick;
[self.drawerView setBoardViewToolAttr:toolAttr];
```
相关API请参考:
- [CLBoardViewToolAttr](type_define.md#CLBoardViewToolAttr)

3、设置画笔颜色
* 通过 [setBoardViewToolAttr](wb_api.md#setBoardViewToolAttr) 设置画笔颜色
* pencilColor颜色值为Int值，例如: 0xFFF0F0F0, 0xFF7B7B7B
```Objective-C
CLBoardViewToolAttr *toolAttr = [self.drawerView getBoardViewToolAttr];
toolAttr.color = pencilColor;
[self.drawerView setBoardViewToolAttr:toolAttr];
```
相关API请参考:
- [CLBoardViewToolAttr](type_define.md#CLBoardViewToolAttr)

