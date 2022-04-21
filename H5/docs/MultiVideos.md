
# 多方视频通话

## 功能介绍

多方视频通话时，根据当前业务场景合理设置视频编码参数，可以在较低的带宽占用下实现流畅清晰的音视频沟通，下面将针对几种常见场景进行介绍。


<h2 id=one> 1.一对一</h2>

- 画中画布局示例图:

![画中画布局示例图](./images/layout_overlap.jpg)

常用于如双人视频聊天场景，双方通常都希望看到对方比较清晰的视频，此时可以使用较高的视频编码分辨率，比如720P或480P。


- 示例代码：

```html
<!--html代码-->
<div class="videoContainer">
    <div id="otherVideoContainer"></div> <!--底层，即对方的视频控件父div：-->
    <div id="myVideoContainer"></div>  <!--上层，即自己的视频控件父div-->
</div>
```
<br>

```css
/* css代码 */
.videoContainer {
    position: relative;
    width: 1280px;
    height: 720px;
}
#otherVideoContainer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
#myVideoContainer {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 2; /* 画中画需要处理层级关系 */
}
```
<br>

```js
//js部分：
//创建视频控件对象	
var otherVideoUI = CRVideo_CreatVideoObj();
//把创建的控件放入DOM树中
document.getElementById('otherVideoContainer').appendChlid(otherVideoUI.handler());   
//otherUID为对方的登录ID
otherVideoUI.setVideo(otherUID);

//创建视频控件对象	
var myVideoUI = CRVideo_CreatVideoObj();
//把创建的控件放入DOM树中
document.getElementById('myVideoContainer').appendChlid(myVideoUI.handler());
//myUID为自己的登录ID
myVideoUI.setVideo(myUID);

//3.打开用户摄像头
CRVideo_OpenVideo(myUID)

```

相关API请参考：
* [CRVideo_CreatVideoObj](API.md#CRVideo_CreatVideoObj)
* [CRVideo_OpenVideo](API.md#CRVideo_OpenVideo)
* [VideoObj.handler()](API.md#VideoObj_handler)
* [VideoObj.setVideo()](API.md#VideoObj_setVideo)


<h2 id=more> 2.多方视频</h2>

- 多方视频示例图：

![多方视频示例图](./images/five.jpg)

常用于在线教育场景，老师的视频画面比较大，可以使用较高的分辨率比如720P，下面学生的视频画面比较小，应采用较低的视频编码分辨率，比如360P或256P。


- 示例代码：

```html
<!-- html代码 -->
<div id="videoContent">
    <div class="mainVideo"></div>
    <div class="smallVideo"></div>
</div>
```

```css
/* css代码 */
* {
    margin: 0;
    padding: 0;
}

html,
body {
    height: 100%;
}

body {
    background-color: #0c1d25;
}

#videoContent {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#videoContent .mainVideo {
    display: flex;
    width: 1280px;
    height: 720px;
    margin-bottom: 10px;
    background-color: yellow;
}

#videoContent .smallVideo {
    font-size: 0;
    display: flex;
}

#videoContent .smallVideo .student {
    height: 243px;
    width: 432px;
    margin-right: 10px;
    background-color: green;
}

#videoContent .smallVideo .student:last-of-type {
    margin-right: 0;
}
```
<br>

```js
//js代码部分：
CRVideo_GetAllMembers().forEach(member => {
    const videoObj = CRVideo_CreatVideoObj();
    //假设老师的userID为teacher,需要放入指定的盒子
    if (member.userID === 'teacher') {
        document.getElementsByClassName('mainVideo')[0].appendChild(videoObj.handler());
    } else {
        const div = document.createElement('div');
        div.appendChild(videoObj.handler());
        div.className = 'student';
        document.getElementsByClassName('smallVideo')[0].appendChild(div);
    }
    videoObj.setVideo(member.userID);
});

//3.打开自己的摄像头
CRVideo_OpenVideo(UID);  //自己的登录ID

``` 

相关API请参考：
* [CRVideo_CreatVideoObj](API.md#CRVideo_CreatVideoObj)
* [CRVideo_GetAllMembers](API.md#CRVideo_GetAllMembers)
* [CRVideo_OpenVideo](API.md#CRVideo_OpenVideo)

相关结构定义请参考：
* [CRVideo_MemberInfo](TypeDefinitions.md#CRVideo_MemberInfo)


<h2 id=customize> 3.个性化视图</h2>

- 图一: 

![图一示例图](./images/nine.jpg)

- 图二:

![图2示例图](./images/one.jpg)

<font style="font-weight:bolder;font-size:20px;">描述：</font>在某些业务场景下，同一个房间内的用户视图不一致，导致同一个视频在不同的用户那里呈现的画面尺寸不一样，比如9方通话场景下原先9个视频画面平铺（如图一），大家都只需要编码256P的视频。某一个时刻用户B开始全屏观看A的视频（如图二），此时A需要编码高分辨率视频比如720P来确保B能看到A的清晰画面，这样一来房间中其他人虽然观看的是A的小画面，却也收到了A的720P视频流，浪费了带宽和解码性能，万一其他用户也做了类似B的操作，整个房间的通话将不可用。
对于这种场景，我们可以启用[视频大小流](KeyWords.md#stream)机制，看A小画面的用户订阅A的小流，看A大画面的用户订阅A的大流，这样既能满足各自的清晰度要求，又不会浪费带宽和CPU性能。

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
