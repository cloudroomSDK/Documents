
# 多方视频通话

## 功能简介

多方视频通话时，根据当前业务场景合理设置视频编码参数，可以在较低的带宽占用下实现流畅清晰的音视频沟通，下面将针对几种常见场景进行介绍。


<h2 id=one> 1.一对一</h2>

- 画中画布局示例图:

视频通话中，画中画布局指视频图像布局上有重叠。</br>
<font color="#FF0000">注意：画中画布局时需注意2点：</font></br>
<font color="#FF0000">（1）底层视频控件的父div和上层控件父div放入DOM树的顺序：先放入底层的，后放入上层的。</font></br>
<font color="#FF0000">（2）需要隐藏视频窗口时，直接操作父div（将父div 设置display:none）。</font>

![画中画布局示例图](./images/layout_overlap.jpg)

常用于如双人视频聊天场景，双方通常都希望看到对方比较清晰的视频，此时可以使用较高的视频编码分辨率，比如720P或480P。


- 示例代码：

```html
<!--html文件中：-->
<div class="videoContainer" style="position:relative">
    <div id="otherVideoContainer" style="position:absolute"></div> <!--底层，即对方的视频控件父div：-->
    <div id="myVideoContainer" style="position:absolute"></div>  <!--上层，即自己的视频控件父div-->
</div>
```

```js
//js代码部分：
//1.创建视频控件对象	
var otherVideoUI = CRVideo_CreatVideoObj();  			
otherVideoUI.id("other_video_obj");
$("div.otherVideoContainer").append(otherVideoUI.handler());   //把创建的控件放入DOM树中

var myVideoUI = CRVideo_CreatVideoObj();			
myVideoUI.id("my_video_obj");
$("div.myVideoContainer").append(myVideoUI.handler()); 

//2.设置宽高和父div布局
$("#otherVideoContainer").css({"display":"block","left":"0px",
"top":"0px","width":"1280px","height":"720px","zIndex":1000});
otherVideoUI.width(1280);
otherVideoUI.height(720);			

$("#myVideoContainer").css({"display":"block","left":"795px",
"top":"445px","width":"480px","height":"270px","zIndex":1001});
myVideoUI.width(480);
myVideoUI.height(270);

//3.打开用户摄像头
CRVideo_OpenVideo(myUID)

//4.设置视频编码参数
var cfg = {};
cfg.size = "1280*720"; 
cfg.fps = 15;
CRVideo_SetVideoCfg(cfg);

//5.设置视频流
setTimeout(function(){
    otherVideoUI.setVideo(otherUID);  //otherUID为对方的登录ID
    myVideoUI.setVideo(myUID); //myUID为自己的登录ID
}, 500);

//6.画中画处理
setTimeout(function(){
    myVideoUI.raise(); 
}, 800);

```
相关API请参考：
* [CRVideo_CreatVideoObj](API.md#CRVideo_CreatVideoObj)
* [CRVideo_OpenVideo](API.md#CRVideo_OpenVideo)
* [CRVideo_SetVideoCfg](API.md#CRVideo_SetVideoCfg)

相关结构定义请参考：
* [CRVideo_VideoCfg](TypeDefinitions.md#CRVideo_VideoCfg)

<h2 id=more> 2.多方视频</h2>

- 多方视频示例图：

![多方视频示例图](./images/five.jpg)

常用于在线教育场景，老师的视频画面比较大，可以使用较高的分辨率比如720P，下面学生的视频画面比较小，应采用较低的视频编码分辨率，比如360P或256P。


- 示例代码：

```html
<!--html文件中：-->
<div class="videoContainer" style="position:relative">
    <div id="teacherVideoContainer" style="position:absolute"></div> <!--底层，老师的视频控件父div：-->
    <div id="studentVideoContainer1" style="position:absolute"></div>  <!--上层，学生的视频控件父div-->
    <div id="studentVideoContainer2" style="position:absolute"></div>  
    <div id="studentVideoContainer3" style="position:absolute"></div>  
    <div id="studentVideoContainer4" style="position:absolute"></div>  
</div>
```

```js
//js代码部分：
//1.创建视频控件对象	
var teacherVideoUI = CRVideo_CreatVideoObj();  			
teacherVideoUI.id("teacher_video_obj");
$("div.teacherVideoContainer").append(teacherVideoUI.handler());   //把创建的控件放入DOM树中

var stuVideoUI1 = CRVideo_CreatVideoObj();			
stuVideoUI1.id("stu_video_obj_1");
$("div.studentVideoContainer1").append(stuVideoUI1.handler()); 
var stuVideoUI2 = CRVideo_CreatVideoObj();			
stuVideoUI2.id("stu_video_obj_2");
$("div.studentVideoContainer2").append(stuVideoUI2.handler()); 
var stuVideoUI3 = CRVideo_CreatVideoObj();			
stuVideoUI3.id("stu_video_obj_3");
$("div.studentVideoContainer3").append(stuVideoUI3.handler()); 
var stuVideoUI4 = CRVideo_CreatVideoObj();			
stuVideoUI4.id("stu_video_obj_4");
$("div.studentVideoContainer4").append(stuVideoUI4.handler()); 

//2.设置宽高和父div布局
$("#teacherVideoContainer").css({"display":"block","left":"0px",
"top":"0px","width":"1280px","height":"720px","zIndex":1000});
teacherVideoUI.width(1280);
teacherVideoUI.height(720);			

$("#studentVideoContainer1").css({"display":"block","left":"0px",
"top":"535px","width":"320px","height":"180px","zIndex":1001});
stuVideoUI1.width(320);
stuVideoUI1.height(180);
$("#studentVideoContainer2").css({"display":"block","left":"320px",
"top":"535px","width":"320px","height":"180px","zIndex":1001});
stuVideoUI2.width(320);
stuVideoUI2.height(180);
$("#studentVideoContainer3").css({"display":"block","left":"640px",
"top":"535px","width":"320px","height":"180px","zIndex":1001});
stuVideoUI3.width(320);
stuVideoUI3.height(180);
$("#studentVideoContainer4").css({"display":"block","left":"960px",
"top":"535px","width":"320px","height":"180px","zIndex":1001});
stuVideoUI4.width(320);
stuVideoUI4.height(180);

//3.打开用户摄像头
CRVideo_OpenVideo(UID);  //自己的登录ID

//4.配置本视频清晰度(如果我是大画面，用高清晰度配置， 否则用低清晰度配置）
var cfg = {};
if ( UID==teacherUID )
{
	cfg.size = "1280*720";
}
else
{
	cfg.size = "448*256";
}
cfg.fps = 15;
CRVideo_SetVideoCfg(cfg);

//5.设置视频流
setTimeout(function(){
    teacherVideoUI.setVideo(teacherUID);  //teacherUID为老师登录ID
    stuVideoUI1.setVideo(stuUID1); //stuUID1为学生登录ID
    stuVideoUI2.setVideo(stuUID2); 
    stuVideoUI3.setVideo(stuUID3); 
    stuVideoUI4.setVideo(stuUID4); 
}, 500);

//6.画中画处理
setTimeout(function(){
    stuVideoUI1.raise(); 
    stuVideoUI2.raise(); 
    stuVideoUI3.raise(); 
    stuVideoUI4.raise(); 
}, 800);

``` 

相关API请参考：
* [CRVideo_CreatVideoObj](API.md#CRVideo_CreatVideoObj)
* [CRVideo_OpenVideo](API.md#CRVideo_OpenVideo)
* [CRVideo_SetVideoCfg](API.md#CRVideo_SetVideoCfg)

相关结构定义请参考：
* [CRVideo_VideoCfg](TypeDefinitions.md#CRVideo_VideoCfg)

<h2 id=customize> 3.个性化视图</h2>

- 图一: 

![图一示例图](./images/nine.jpg)

- 图二:

![图2示例图](./images/one.jpg)

<font style="font-weight:bolder;font-size:20px;">描述：</font>在某些业务场景下，同一个房间内的用户视图不一致，导致同一个视频在不同的用户那里呈现的画面尺寸不一样，比如9方通话场景下原先9个视频画面平铺（[如图一](#layout_customize)），大家都只需要编码256P的视频。某一个时刻用户B开始全屏观看A的视频（[如图二](#layout_customize2)），此时A需要编码高分辨率视频比如720P来确保B能看到A的清晰画面，这样一来房间中其他人虽然观看的是A的小画面，却也收到了A的720P视频流，浪费了带宽和解码性能，万一其他用户也做了类似B的操作，整个房间的通话将不可用。
对于这种场景，我们可以启用[视频大小流](README.md#stream)机制，看A小画面的用户订阅A的小流，看A大画面的用户订阅A的大流，这样既能满足各自的清晰度要求，又不会浪费带宽和CPU性能。

- 示例代码：

```js
//js代码部分：

/*设置视频流 用户A的代码：
 (1)A启用大小流机制 。把第一档视频设置为大流，第二档设置为小流
注意：其他用户在订阅A的视频流时，需要使用setVideo2接口，并指定视频档位
*/
var attrObj = {};
attrObj.size = "1280*720";  //大流,即1档的视频流  
attrObj.fps = 12;
attrObj.maxbps = 1000000;
attrObj.quality2 = {"size":"448*256"};  //小流，即2档的视频流
var videoID = CRVideo_GetDefaultVideo(UID);
CRVideo_SetLocVideoAttributes(videoID, attrObj);

//设置视频流
setTimeout(function(){
    //显示本地视频时，用小流, 即第三个参数为指定视频档位为2
    myVideoUI.setVideo2(myUID, -1, 2);  //设置自己的视频流
}, 500);


//(2)用户D的代码：用户D订阅A的大流，otherVideoUI1 ，otherUID1都对应用户A
//用大流, 即第三个参数为指定视频档位为1
otherVideoUI1.setVideo2(otherUID1, -1, 1);

//(3)其他用户的代码：其他用户订阅A的小流
otherVideoUI1.setVideo2(otherUID1, -1, 2);


```

相关API请参考：
* [CRVideo_CreatVideoObj](API.md#CRVideo_CreatVideoObj)
* [CRVideo_OpenVideo](API.md#CRVideo_OpenVideo)
* [CRVideo_SetLocVideoAttributes](API.md#CRVideo_SetLocVideoAttributes)
* [CRVideo_GetDefaultVideo](API.md#CRVideo_GetDefaultVideo)


相关结构定义请参考：
* [VideoAttributesObj](TypeDefinitions.md#VideoAttributesObj)