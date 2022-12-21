# 常量定义

<h2 id=WBTYPE_V2> 白板画布类型</h2>

><font size=4>WBTYPE_V2</font>

代码 | 数值 | 含义
:---|:---|:---
WB_WHITE | 0 | 白板
WB_DOC | 1 | 文档

<h2 id=WBIMGTYPE_V2> 白板图片类型</h2>

><font size=4>WBIMGTYPE_V2</font>

代码 | 数值 | 含义
:---|:---|:---
WD_IMG | 0 | 普通图片
WD_PPTANIM | 1 | PPT动画图片
WD_PPT | 2 | 普通PPT图片


<h2 id=CLPageMode> 翻页显示类型</h2>

><font size=4>CLPageMode</font>

代码 | 数值 | 含义
:---|:---|:---
CLPageModeFullPage | 0 | 单页模式，存在多页时翻页时整页翻
CLPageModeMutilPage | 1 | 连页模式，存在多页时翻页时滑动翻

<h2 id=CLShapeType> 白板操作类型</h2>

><font size=4>CLShapeType</font>

代码 | 数值 | 含义
:---|:---|:---
CLSHAPE_NULL | 0 | 无
CLSHAPE_PEN | 1 | 画笔
CLSHAPE_LINE | 2 | 直线
CLSHAPE_RECT | 3 | 矩形
CLSHAPE_ELLIPSE | 4 | 圆
CLSHAPE_ARROW | 5 | 箭头
CLSHAPE_TEXT | 6 | 文本
CLSHAPE_IMAGE | 7 | 图片
CLSHAPE_PITCH | 8 | 选中
CLSHAPE_ERASER | 9 | 橡皮擦
CLSHAPE_MOVE | 10 | 画布移动

<h2 id=CLBoardViewMarkExceptionType> 白板操作异常提示</h2>

><font size=4>CLBoardViewMarkExceptionType</font>

代码 | 数值 | 含义
:---|:---|:---
CLMarkExceptionTypeUnknown | 0 | 未知错误
CLMarkExceptionTypeSinglePageLimit | 1 | 单页标注已达最大无法再标注
CLMarkExceptionTypeSingleLineLimt | 2 | 单笔标注超长截断