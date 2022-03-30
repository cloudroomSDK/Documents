# 聊天

## 获取聊天信息

### 是否开启全员聊天

``` js
const isEnablePublicChat = crsdk.switchs.isEnablePublicChat;
```

### 获取最近的N条聊天信息

``` js
// 获取最近的size条聊天信息
const size = 10;
crsdk.getChats(size).then((res) => {
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| total   | Number |总条数 |
| data   | Array | [聊天信息对象](chat#chatObject) |

${.table}

### 获取从index开始的size条聊天信息

``` js
const index = 0;
const size = 10;
crsdk.getChatsLimit(index, size).then((res) => {
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| data   | Array | [聊天信息对象](chat#chatObject) |

${.table}

### 获取全部聊天信息

``` js 
crsdk.getAllChats().then((res) => {
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| total   | Number |总条数 |
| data   | Array | [聊天信息对象](chat#chatObject) |

${.table}

### 聊天信息对象 ${#chatObject}

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| context   | Array | 按顺序返回聊天内容，当前有文本和图标 [聊天内容对象](#chatContextObject) |
| headimg   | String | 头像 |
| index   | Number | 消息下标 |
| ishost   | Boolean | 是否主持人 |
| isSelf   | Boolean | 是否自己 |
| sendTime   | String | 发送聊天信息的时间 |
| sendTimestamp   | Number | 发送聊天信息的时间戳 |
| srcTermId   | Number | 发送人的 termId |
| srcNickname   | Number | 发送人的昵称 |
| targetTermId   | Number | 发送目标的 termId |
| targetNickname   | Number | 发送目标的昵称 |
| type   | Number | 0：正常聊天信息。</br> 1：发红包回调信息，此时data.pckNo为订单号，data.info为红包祝福语。</br> 2:抢红包回调信息，此时data.pckNo为订单号，data.amount为抢到金额（分），data.info为红包祝福语。</br> 3(移动端打赏) 或者 13（pc端打赏） ：打赏回调信息，data.pckNo为订单号data.amount为打赏金额，data.info打赏祝福语。</br>  5（移动端送礼）或者15（pc端送礼）：送礼信息回调，data.pckNo为订单好，data.info为送礼的礼物。 |

### 聊天内容对象（聊天信息type=0时） ${#chatContextObject}

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| type   | String | text: 文字, icon: 图标 |
| context   | String | 当type为text时，context: "消息文本"。 </br> 当type为icon时（为兼容云屋其他平台的聊天，返回图片路径。）， context: "/Res/FaceImg/QQ/n.gif"。 |

### 获取聊天信息总条数

``` js 
crsdk.getAllChatsCount().then((res) => {
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------| ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| total   | Number | 总条数 |

${.table}


### 发送消息

请求参数：

| 参数名       | 必填       | 类型       | 描述                                                  |
| ------------ | ------------ | ------------| ----------------------------------------------------- |
| context   | 是       | String | 聊天内容 |
| isEncodeIcon   | 否       | String | 例如：当聊天内容包含“[微笑]”时，会转为对应的图片路径/Res/FaceImg/QQ/0.gif。 相应的表情关键词在crsdk.faces数组中。 如果为false则不转换。默认为true。 |

``` js
crsdk.sendChatMsg(context, isEncodeIcon).then((res) => {
    // 这里不会返回自己发送的信息内容，需要在“接收聊天信息”回调处理
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------| ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |

## 订阅

### 接收聊天信息

``` js
crsdk.on("chatReceiveMsg", (res) => {
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| total   | Number |总条数 |
| data   | Array | [聊天信息对象](chat#chatObject) |

### 监听某一条信息删除事件

``` js
crsdk.on("chatDelMsg", (res) => {
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| total   | Number |总条数 |
| data   | Number | 聊天信息的下标 |

### 监听清空聊天信息

``` js
crsdk.on("chatDelAllMsg", (res) => {
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| total   | Number |总条数 |
| data   | Number | 操作人ID |

### 监听开启、关闭全员聊天

``` js
crsdk.on("chatRightChanged", (res) => {
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| enabled   | Boolean | 是否开启了全员聊天 |


### 监听开启、关闭聊天审核

``` js
crsdk.on("chatOptionChanged", (res) => {
    // res 响应值看下表
});
```

| 参数名       | 类型       | 描述                                                  |
| ------------ | ------------ | ----------------------------------------------------- |
| code   | Number |响应码 |
| message   | String |响应提示 |
| enabled   | Boolean | 是否开启了聊天审核 |

