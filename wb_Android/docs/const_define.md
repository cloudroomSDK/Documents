# 常量定义

### 白板翻页模式
><font size=4, id = PageMode>com.cloudroom.cloudroomvideosdk.model.PageMode</font>

代码 | 数值 | 含义
:---|:---|:---
PageModeFullPage | 0 | 单页模式，存在多页时翻页时整页翻
PageModeMutilPage | 1 | 连页模式，存在多页时翻页时滑动翻

### 白板画布类型
><font size=4, id = WB_TYPE>com.cloudroom.cloudroomvideosdk.model.WB_TYPE</font>

代码 | 数值 | 含义
:---|:---|:---
WB_WHITE | 0 | 白板
WB_DOC | 1 | 文档

### 白板图片类型
><font size=4, id = WB_IMG_TYPE>com.cloudroom.cloudroomvideosdk.model.WB_IMG_TYPE</font>

代码 | 数值 | 含义
:---|:---|:---
WD_IMG | 0 | 普通图片
WD_PPTANIM | 1 | PPT动画图片
WD_PPT | 2 | 普通PPT图片

### 白板操作类型
><font size=4, id = WB_SHAPE_TYPE>com.cloudroom.cloudroomvideosdk.model.WB_SHAPE_TYPE</font>

代码 | 数值 | 含义
:---|:---|:---
SHAPE_NULL | 0 | 无
SHAPE_PEN | 1 | 画笔
SHAPE_LINE | 2 | 直线
SHAPE_RECT | 3 | 矩形
SHAPE_ELLIPSE | 4 | 圆
SHAPE_ARROW | 5 | 箭头
SHAPE_TEXT | 6 | 文本
SHAPE_IMAGE | 7 | 图片
SHAPE_PITCH | 8 | 选中
SHAPE_ERASER | 9 | 橡皮擦
SHAPE_MOVE | 10 | 画布移动

### 白板操作异常提示
><font size=4, id = MarkException>com.cloudroom.cloudroomvideosdk.model.MarkException</font>

代码 | 数值 | 含义
:---|:---|:---
TypeUnknown | 0 | 未知错误
TypeSinglePageLimit | 1 | 单页标注已达最大无法再标注
TypeSingleLineLimt | 2 | 单笔标注超长截断