# 问答

### 是否开启问答

``` js
const isEnableQuestion = crsdk.switchs.isEnableQuestion;
```

## 获取问答列表

``` js
crsdk.getQuestions().then((res) => {
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| data   | Array | [问答信息对象](question#questionObject) |

### 问答信息对象 ${#questionObject}

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| id   | Number |问答ID |
| ask   | Object | [问题信息对象](question#questionObject)  |
| deal   | Object | [答题信息对象](question#dealObject)  |

### 问题信息对象 ${#askObject}

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| termID   | Number |提问人的termID |
| nickname   | String | 提问人昵称 |
| content   | String |提问的内容 |
| asktime   | Number |提问时间戳（秒） |

### 答题信息对象 ${#dealObject}


| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| replyTermId   | Number |回答人的termId |
| replyCon   | String | 回答的内容 |
| replyTime   | Number |序号 |
| publishTermID   | Number |公开问题人的termId |
| publishTime   | Number |	公开问题的时间 |
| state   | Number | 问答状态: 0: 未答复 1: 答复中 2: 已答复未公开 3: 已答复并公开 |

## 发送问题 ${#sendQuestion}

| 参数名       | 必填       | 类型       | 描述                                                  |
| ------------ | ------------ | ------------| ----------------------------------------------------- |
| context   | 是       | String | 提问内容 |

``` js
crsdk.sendQuestion().then((res) => {
    // res 响应值看下表
    // 这里不会返回自己发送的提问内容，需要在“订阅收到提问问题”回调处理
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------| ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |


## 订阅开关问答面板

``` js
crsdk.on("changeBroadCastQuesNotify", (res) => {
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| enable   | Boolean |是否开启问题面板 |

## 订阅收到提问问题

``` js
crsdk.on("askQuesNotify", (res) => {
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| id   | Number |问答ID |
| ask   | Object | [问题信息对象](question#questionObject)  |


## 订阅正在回答问题

``` js
crsdk.on("lockQuesNotify", (res) => {
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| id   | Number |正在回答的问题ID |


## 订阅答复问题

``` js
crsdk.on("replyQuesNotify", (res) => {
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| id   | Number |问答ID |
| deal   | Object | [答题信息对象](question#dealObject)  |


## 订阅修改问题答复

``` js
crsdk.on("modifyQuesNotify", (res) => {
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| id   | Number |问答ID |
| deal   | Object | [答题信息对象](question#dealObject)  |


## 订阅删除单个问题


``` js
crsdk.on("delQuesNotify", (res) => {
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| data   | Object |  { id: id } 删除的问题的id |


## 订阅清空问题列表

``` js
crsdk.on("delAllQuesNotify", (res) => {
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |


## 订阅公开问答状态（从未公开 -> 公开） ${#publicQuesNotify}

``` js
crsdk.on("publicQuesNotify", (res) => {
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| replyTermId   | Number |回答人的termId |
| replyCon   | String | 回答的内容 |
| replyTime   | Number |序号 |
| publishTermID   | Number |公开问题人的termId |
| publishTime   | Number |	公开问题的时间 |
| state   | Number | 问答状态: 0: 未答复 1: 答复中 2: 已答复未公开 3: 已答复并公开 |

## 订阅取消公开问答 ${#cancelPublicQuesNotify}

``` js
crsdk.on("cancelPublicQuesNotify", (res) => {
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| data   | Object |  { id: id } 取消公开的问题的id |