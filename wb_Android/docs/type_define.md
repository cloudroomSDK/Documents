# 类型定义
### 白板信息实体类
><font size=4, id =BoardInfo>com.cloudroom.cloudroomvideosdk.model.BoardInfo</font>

成员变量 | 类型 | 说明
:---|:---|:---
boardID | String | 唯一序号
wType | [WB_TYPE](const_define.md#WB_TYPE) | 画布类型
imgType | [WB_IMG_TYPE](const_define.md#WB_IMG_TYPE) | 图片类型
width | int | 宽度
height | String | 高度
xPos | float | 视图左上角x位置（0~1.0）
yPos | float | 视图左上角y位置（0~1.0）
scale | int | 白板缩放值（200代表两倍，范围在20~500）
pageCount | int | 页数
pageMode | [PageMode](const_define.md#PageMode) | 单/多页模式
extInfo | String | 额外信息

### 白板画笔属性
><font size=4, id =BoardViewToolAttr>com.cloudroom.cloudroomvideosdk.model.BoardViewToolAttr</font>

成员变量 | 类型 | 说明
:---|:---|:---
lineWidth | int | 线宽,单位px
color | int | 画笔及文本颜色
fontSize | int | 字体大小，单位px

### 白板权限属性
><font size=4, id =BoardViewAttr>com.cloudroom.cloudroomvideosdk.model.BoardViewAttr</font>

成员变量 | 类型 | 说明
:---|:---|:---
readOnly | boolean | 是否可以标注
asyncPage | boolean | 是否同步页面
followPage | boolean | 是否跟随页面
asyncScale | boolean | 是否同步缩放
followScale | boolean | 是否跟随缩放