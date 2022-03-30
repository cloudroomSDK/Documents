# WEB后台设置

## 观看权限

管理后台打开了观看权限

``` js
let verify = null;
crsdk.on("loginVerify", (res) => {
    // res 响应值看下表
    // 根据res.type传入对应的参数执行res.resolve();
    // 例如密码登录
    if (type === 1) {
        verify = res;
        // do something
        // 例如：显示输入密码的弹框
    }
});

// 提交密码表单调用的函数
const submit = (password) => {
    verify.resolve(password).then(() => {
        // 验证成功
    }).catch(err => {
        // 验证失败
    });
}
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------| ----------------------------------------------------- |
| type   | Number |1，3，4，5，6 |
| title   | String | type的对应提示  1: 自定义标题（默认“密码观看”）。 3: 手机号码观看（不需要验证码）。 4: 5的前置，获取验证码。 5: 手机号码观看（需要验证码）。 6：登录观看（管理后台用户账号登录）。 |
| resolve   | Function |接收参数，处理成功会执行下一步 |
| message   | String |对应的操作提示：  1：请执行resolve方法，传入观看密码。 3： 请执行resolve方法，传入手机号码。 4：请执行resolve方法，传入手机号码，获取验证码。 5：请执行resolve方法，传入验证码。 6：请执行resolve方法，传入账号(手机号码), 密码。 |


## 调查问卷

管理后台打开了调查问卷

``` js
crsdk.on("questionnaire", (res) => {
    // res 响应值看下表
    // 根据res.type传入对应的参数
    res.resolve();
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------| ----------------------------------------------------- |
| type   | Number |0，1 |
| title   | String | type的对应提示  0: 获取验证码(调查问卷开启了需要验证码)。 1: 填写问卷。 |
| resolve   | Function |接收参数，处理成功会执行下一步 |
| message   | String |对应的操作提示：0： 问卷调查，请执行resolve方法，传入手机号，获取验证码。  1：问卷调查，请执行resolve方法，传入rowlist对应的JSON。 |
| data   | Object | [自定义的问卷表单](webSetting#questionForm)  |

### 自定义的问卷表单 ${#questionForm}

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| adImg   | String |问卷顶部图片src |
| name   | String | 问卷主标题|
| remark   | String |问卷副标题 |
| rowList   | Array |[问卷内容列表](webSetting#rowList) |

### 问卷内容列表 ${#rowList}

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| isRequired   | Boolean |是否必填 |
| isSmsCode   | Boolean | 是否发送验证码|
| orderNo   | Number |序号 |
| rowid   | Number |行id |
| rowName   | Number |	行名称 |
| rowType   | Number |行类型（0手机号、1单行填写、2多行填写） |

## 自定义菜单

``` js
const menus = crsdk.autoMenu;
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| menuId   | Number |菜单id |
| menuType   | Number |菜单类型　0互动聊天、1直播简介、2图文、3视频点播 |
| title   | String |	菜单标题 |
| content   | String |菜单相关内容 |
| orderNo   | Number |菜单序号 |
| dbVideos   | Object |[视频点播列表](webSetting#dbVideos) |



### 视频点播列表 ${#dbVideos}

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| title   | String | 视频名称 |
| url	| String | 视频播放地址。 [设置播放](video#setVideo) |
| imgurl   | String |视频封面图地址 |

## 自定义图片

由web后台设置，自定义图片包括直播引导图，直播背景图，频道图标等。

``` js
const images = crsdk.autoImg;
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| guideImg   | String |直播引导图 |
| coverImg   | String |直播背景图 |
| channelImg   | String |直播频道图 |

## 自定义广告

由web后台设置，开启自定义广告，设置广告内容。

``` js
const advertising = crsdk.autoAd;
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| adType   | Number |	广告类型，0为文字广告，1为图片广告 |
| isShowAd   | Boolean |是否显示默认广告位(对应WEB后台switch开关) |
| isShowChat   | Boolean |是否显示在线人数(对应WEB后台switch开关) |
| isShowNum   | Boolean |	是否显示聊天数(对应WEB后台switch开关) |
| adList   | Array |	广告内容 |



adList 广告内容的参数如下：

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| showword   | String |	广告内容，文字或者图片url |
| url   | String | 	广告链接地址url |

## 倒计时

管理后台打开了倒计时

### 倒计时中

``` js
crsdk.on("countDown", (res) => {
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------| ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| title   | String | 倒计时标题（管理后台输入）。 |
| startTime   | String | 倒计时开始时间（管理后台输入）。 |

> 注意：直播倒计时只是类似于一个提醒功能，时间到并不能真正开启直播，仍需要手动开启直播。


### 倒计时结束

``` js
crsdk.on("countDownEnd", (res) => {
    // res 响应值看下表
});
```


| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------| ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |