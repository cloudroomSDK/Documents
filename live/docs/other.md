# 其他

## 销毁

SDK监听了unload事件，在关闭页面时会帮您调用销毁。但是如果在使用前端路由的框架（vue，react，angular）中使用，退出页面需要您手动调用销毁方法。

``` js
crsdk.destroy();
```

## 重命名

### 请求重命名

请求参数：

| 参数名       | 必填       | 类型       | 描述                                                  |
| ------------ | ------------ | ------------| ----------------------------------------------------- |
| nickname   | 是       | String | 要修改的昵称 |

``` js
const nickname = "要修改的昵称";
crsdk.changeNickname(nickname).then(res => {
   // res 响应值看下表
}).catch(err => {
    if(err.code === 807) {
        // 昵称存在
    }
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| data   | String | 重命名成功的昵称 |

### 接收其他用户重命名的消息

``` js
crsdk.on("nicknameChanged", (res) => {
    // res 响应值看下表
});
```
| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| data   | String | 重命名成功的昵称 |

## 获取观看人次

``` js
crsdk.getOnlineNum().then(res => {
   // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| onlineNum   | Number |观看人次 |

## 监听主播或助理进入房间

``` js
crsdk.on("entered", (res) => {
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| data   | Object | |

## 监听主播或助理离开房间

``` js
crsdk.on("left", (res) => {
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| data   | Object | |