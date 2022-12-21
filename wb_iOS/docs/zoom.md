# 白板缩放

### 前提条件
已参考 [创建白板](create.md) 创建了一个白板

### 实现流程
1、开启缩放功能
* 通过 [setBoardViewToolType](wb_api.md#setBoardViewToolType) 设置type为 CLSHAPE_SCROLL
* 设置完成后，通过双指手势缩放，即可看到效果展示在BoardView上
```Objective-C
[self.drawerView setBoardViewToolType:CLSHAPE_SCROLL];
```
相关API请参考:
- [CLShapeType](const_define.md#CLShapeType)

2、通知view的缩放比改变 [notifyViewScaleChanged](wb_api.md#notifyViewScaleChanged)

- 回调通知：
```Objective-C
- (void)notifyViewScaleChanged:(NSString *)boardID boardView:(CLBoardView *)boardView scale:(int)scale {
    
}
```