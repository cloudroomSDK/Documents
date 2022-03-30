# 抽奖

## 获取直播抽奖信息

``` js 
crsdk.getLuckyDrawCfg().then((res) => {
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------| ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| data   | Object | [抽奖信息对象](luckyDraw#drawcfg) |


### 抽奖信息 ${#drawcfg}

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------| ----------------------------------------------------- |
| isEnabled   | Boolean | 是否开启抽奖 |
| memberType   | Number |	01/02/03 本地名单抽奖/观众名单抽奖/全部观众抽奖 |
| cdTime   | String |设置开奖时间 |
| isAutoDraw   | Boolean | 是否自动开奖 |
| prizeNum   | Number | 奖品数量 |
| prizeName   | String | 奖品名称 |

## 报名抽奖

请求参数：

| 参数名       | 必填       | 类型       | 描述                                                  |
| ------------ | ------------ | ------------| ----------------------------------------------------- |
| name   | 是       | String | 报名名称 |
| phone   | 是       | String | 报名手机号 |

``` js 
crsdk.joinLuckyDraw(name, phone).then((res) => {
    // res 响应值看下表
});
```

## 监听奖品配置通知

``` js
crsdk.on("notifyLuckyDrawCfg", (res) => {
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------| ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| data   | Object | [抽奖信息对象](luckyDraw#drawcfg) |

## 监听奖品开奖通知

``` js
crsdk.on("notifyLuckyDrawResult", (res) => {
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------| ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| data   | Object | [开奖信息对象](luckyDraw#draws) |

### 开奖信息对象 ${#draws}

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------| ----------------------------------------------------- |
| annouceTime   | String |设置开奖时间 |
| prizeNum   | Number | 奖品数量 |
| prizeName   | String | 奖品名称 |
| list   | Array | [获奖人员列表](luckyDraw#drawUsers) |

### 获奖人员列表 ${#drawUsers}

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------| ----------------------------------------------------- |
| name   | String | 获奖人名称 |
| phone   | Number | 获奖人号码 |