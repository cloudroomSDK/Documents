# 使用

## 下载

[下载SDK https://sdk.cloudroom.com/web/download/SDK/LiveSDK/crsdk.4.1.0.min.js](https://sdk.cloudroom.com/web/download/SDK/LiveSDK/crsdk.4.1.0.min.js)${download=crsdk.4.1.0.min}

## 引入SDK

### html页面直接引入

``` js
<script src="https://sdk.cloudroom.com/web/download/SDK/LiveSDK/crsdk.4.1.0.min.js"></script>

<script>
// 实例
var crsdk = new CRLiveSDK();
</script>
```

### ES6引入

``` js
import CRLiveSDK from "crsdk.4.1.0.min.js";
// 实例
const crsdk = new CRLiveSDK();
```

### 初始化

``` js
var config = { 
   LiveCode: "",  // 必传 string  会议地址直播地址最后六位字符 如“afbse6” 
   NickName: "",  // 必传 string  用户的昵称 由用户设置，没有微信环境使用传入的昵称
   headerUrl: "", // 必传 string  用户头像url 地址，没有微信环境使用传入头像url
   userCode: "",  // 必传 string  用户识别码 用户id 传递方式：‘wx’ 加‘_’加微信id值 如：‘wx_123456’
};

crsdk.init(config).then(function() {
   // 初始化完成
   // 方法的调用、监听、可参照功能模块提供的方法
   // 例如：指定播放容器，创建播放器。
   crsdk.createVideo({
      elemId: "myVideo" // 容器id
   });
}).catch(function(error) {
   // 初始化失败
});

```
<!-- 
   isGetOpenId : false , // true时默认使用云屋的授权登录，这时会返回openId,微信昵称，微信头像。默认为false,
   videoContent: "",  // 必传 string  创建的video的父元素的id值名称 如id值传"contain"
   isAutoplay: false , // false时不自动播放，true时为自动播放。默认为false,
 -->
### 旧的SDK文档

[旧的SDK文档](https://sdk.cloudroom.com/sdkdoc/live/SDK_summary.html)