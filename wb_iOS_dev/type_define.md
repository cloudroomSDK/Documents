# 类型定义

<h2  id=BoardInfo> 白板信息实体类</h2>

><font size=4>BoardInfo</font>

成员变量 | 类型 | 说明
:---|:---|:---
boardID | String | 唯一序号
wType | [WBTYPE_V2](const_define.md#WBTYPE_V2) | 画布类型
imgType | [WBIMGTYPE_V2](const_define.md#WBIMGTYPE_V2) | 图片类型
width | int | 宽度
height | String | 高度
xPos | float | 视图左上角x位置（0~1.0）
yPos | float | 视图左上角y位置（0~1.0）
scale | int | 白板缩放值 20-500
pageCount | int | 页数
pageMode | [CLPageMode](const_define.md#CLPageMode) | 单/多页模式
extInfo | String | 额外信息

<h2  id=CLBoardViewToolAttr> 白板画笔属性</h2>

><font size=4>CLBoardViewToolAttr</font>

成员变量 | 类型 | 说明
:---|:---|:---
lineWidth | int | 线宽(px)
color | int | 画笔及文本颜色
fontSize | int | 文本属性

<h2  id=CLBoardViewAttr> 白板权限属性</h2>

><font size=4>CLBoardViewAttr</font>

成员变量 | 类型 | 说明
:---|:---|:---
readOnly | boolean | 是否可以标注
asyncPage | boolean | 是否同步页面
followPage | boolean | 是否跟随页面
asyncScale | boolean | 是否同步缩放
followScale | boolean | 是否跟随缩放