# 打赏、送礼、红包

| 操作   | PC 端          | 移动端非微信 | 移动端微信   |
| ------ | -------------- | ------------ | ------------ |
| 打赏   | 返回支付二维码 | 不支持       | 拉起微信支付 |
| 送礼   | 返回支付二维码 | 不支持       | 拉起微信支付 |
| 发红包 | 不支持         | 不支持       | 拉起微信支付 |

## 获取打赏列表

| 参数名      | 必填 | 类型   | 描述                                   |
| ----------- | ---- | ------ | -------------------------------------- |
| curPage | 否   | Number | 当前页数（默认1）                     |
| pageSize| 否   | Number | 每页条数（默认10） |

```js
crsdk
  .wxReward({
    curPage: 1,
    pageSize: 10,
  })
  .then((res) => {
    // res 响应值看下表
  });
```

| 参数名  | 类型   | 描述         |
| ------- | ------ | ------------ |
| nickName   | String | 昵称 |
| headerUrl | String | 头像   |
| totalnum | Number | 打赏总人数（分）   |
| totalamount | Number | 打赏总金额（分）  |
| totalFee | Number | 打赏金额（分）   |


## 打赏

| 参数名      | 必填 | 类型   | 描述                                   |
| ----------- | ---- | ------ | -------------------------------------- |
| totalAmount | 是   | Number | 总金额（单位：分）                     |
| remark      | 是   | String | 支付的 title（会在接受消息聊天接受到） |

```js
crsdk
  .wxReward({
    totalAmount: 100,
    remark: "支付的title",
  })
  .then((res) => {
    // res 响应值看下表
  });
```

| 参数名     | 类型   | 描述                                                                                                                                |
| ---------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| code       | Number | 0：在 PC 端表示返回二维码成功、在微信端表示微信拉起支付支付成功。 1: 微信取消支付。 2: 微信支付失败。 3：移动端非微信，不支持支付。 |
| message    | String | 响应提示                                                                                                                            |
| clientType | String | pc（PC 端）、mobile（移动端非微信）、weixin（移动端微信）                                                                           |
| data       | Object | PC 端才会返回： [PC 端打赏的响应值](reward#pc_reward)                                                                               |

### PC 端打赏响应值 ${#pc_reward}

| 参数名  | 类型   | 描述         |
| ------- | ------ | ------------ |
| title   | String | 支付的 title |
| codeUrl | String | 二维码地址   |

## 送礼

| 参数名      | 必填 | 类型   | 描述                                   |
| ----------- | ---- | ------ | -------------------------------------- |
| totalAmount | 是   | Number | 总金额（单位：分）                     |
| remark      | 是   | String | 支付的 title（会在接受消息聊天接受到） |

```js
crsdk
  .wxSendGift({
    totalAmount: 100,
    remark: "支付的title",
  })
  .then((res) => {
    // res 响应值看下表
  });
```

| 参数名     | 类型   | 描述                                                                                                           |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| code       | Number | 0：PC 返回二维码成功、微信拉起支付支付成功。 1: 微信取消支付。 2: 微信支付失败。 3：移动端非微信，不支持支付。 |
| message    | String | 响应提示                                                                                                       |
| clientType | String | pc（PC 端）、mobile（移动端非微信）、weixin（移动端微信）                                                      |
| data       | Object | PC 端才会返回： [PC 端送礼的响应值](reward#pc_sendgift)                                                        |

### PC 端送礼响应值 ${#pc_sendgift}

| 参数名  | 类型   | 描述         |
| ------- | ------ | ------------ |
| title   | String | 支付的 title |
| codeUrl | String | 二维码地址   |

## 发红包

| 参数名      | 必填 | 类型   | 描述       |
| ----------- | ---- | ------ | ---------- |
| totalAmount | 是   | String | 红包金额   |
| totalNum    | 否   | String | 红包个数   |
| remark      | 否   | String | 发红包标题 |

```js
crsdk
  .wxRedPacket({
    totalAmount: 1,
    totalNum: 1,
    remark: "",
  })
  .then((res) => {
    // res 响应值看下表
  });
```

## 抢红包

| 参数名  | 必填 | 类型   | 描述       |
| ------- | ---- | ------ | ---------- |
| orderId | 是   | String | 红包 ID    |
| infor   | 否   | String | 抢红包留言 |

```js
crsdk
  .getWxRedPacket({
    orderId: orderid,
    infor: "抢红包留言",
  })
  .then((res) => {
    // res 响应值看下表
  });
```

| 参数名   | 类型   | 描述                             |
| -------- | ------ | -------------------------------- |
| code     | Number | 0：抢红包成功； 6000：已抢过红包 |
| message  | String | 响应提示                         |
| totalFee | Number | 抢到该红包的金额（单位分）       |

## 获取红包领取记录列表

| 参数名  | 必填 | 类型   | 描述    |
| ------- | ---- | ------ | ------- |
| orderId | 是   | String | 红包 ID |

```js
crsdk.getWxRedPacketList(orderId).then((res) => {
  // res 响应值看下表
});
```

| 参数名  | 类型   | 描述                                 |
| ------- | ------ | ------------------------------------ |
| code    | Number | 0：抢红包成功                        |
| message | String | 响应提示                             |
| data    | Object | [红包列表对象信息](reward#redpacket) |

### 红包列表对象信息 ${#redpacket}

| 参数名    | 类型   | 描述                               |
| --------- | ------ | ---------------------------------- |
| nickName  | String | 微信昵称                           |
| headerUrl | String | 微信头像 url                       |
| grabDate  | String | 抢红包时间                         |
| totalFee  | Number | 抢红包的金额（单位分）             |
| state     | Number | 1:红包还没抢完 ，2：红包已经抢完了 |
| leftnum   | Number | 还剩多少个红包没抢                 |
