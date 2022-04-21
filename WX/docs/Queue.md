# 排队

## 功能介绍

在呼叫中心的业务场景下，有多个客户呼叫进来，有多个坐席提供服务，简单的一对一呼叫无法满足业务需求。此时可以使用我们的排队功能，客户不再直接呼叫某个坐席，而是呼叫到一个坐席队列，由系统自动给客户分配一个空闲的坐席。
- 多个坐席可以服务于一个队列，客户排队这个队列时，系统会自动分配一个空闲坐席来提供服务。
- 一个坐席可以同时服务多个队列，优先服务高优先级队列里的客户，队列优先级相同时优先服务最早排队的客户。
- 业务高峰期没有空闲的坐席时，客户将在队列中排队等待，当有坐席空闲时，将为最早排队的客户提供服务。
- 同一队列的坐席可以配置不同的坐席优先级，队列中的客户优先由空闲的高优先级的坐席来提供服务。


<font color="#FF0000">注意：在登录成功并且启用呼叫功能的情况下才可以使用排队功能</font>


<h2 id=createQueue>1.创建队列</h2>

可以通过两种方式创建队列：

- 第一种是[登录云屋SDK后台](https://sdk.cloudroom.com/mgr_sdk/login.html)并创建。如下图：
 ![登录云屋SDK后台并创建](./images/createQ.png)

- 第二种是通过[Web API](/sdk/document/queue/queue_add?platform=serverside)创建。


<h2 id=initQueue>2.初始化队列</h2>

在登录成功后，初始化队列信息

- 调用接口：

```js
CR.InitQueueDat(); // 初始化队列数据，操作完成回调CR.InitQueueDatRslt
```

- 回调通知：

```js
//队列初始化操作结果
CR.InitQueueDatRslt.callback = function(sdkErr, cookie){
    if(sdkErr == 0){
        //初始化队列成功后，才可以获取队列相关信息并展示。
    }else{
        console.log("初始化队列信息 失败，错误码： "+ sdkErr);
    }
}

```

相关API请参考： 
* [CR.InitQueueDat](API.md#CRVideo_InitQueueDat)
* [CR.InitQueueDatRslt](API.md#CRVideo_InitQueueDatRslt)


<h2 id=getQueue> 3.获取队列信息</h2>


在初始化队列成功后，才可以使用获取队列信息。并且可以多次获取。

- 调用接口：

```js
//获取队列信息
const queueList = CR.GetAllQueueInfo(); 
```

相关API请参考： 
* [CR.GetAllQueueInfo](API.md#CRVideo_GetAllQueueInfo)

相关结构定义请参考：
* [CRVideo_QueueInfo](TypeDefinitions.md#CRVideo_QueueInfo)



<h2 id=servicesOpr>4.1坐席：服务队列</h2>


- 调用接口：

```js
CR.StartService(queID); //开始服务某个队列(可以多次调用，开启对多个队列的服务) .

CR.StopService(queID); //停止服务某个队列 
```

- 回调通知：

```js
// 开始服务队列操作结果
CR.StartServiceRslt.callback = function(queID, sdkErr, cookie){
    if(sdkErr == 0){
        //开始服务队列成功
    }else{
        console.log("开始服务队列 失败，错误码： "+ sdkErr);
    }
}

//停止服务队列操作结果
CR.StopServiceRslt.callback = function(queID, sdkErr, cookie){
    if(sdkErr == 0){
        //停止服务队列成功
    }else{
        console.log("停止服务队列 失败，错误码： "+ sdkErr);
    }
}

// 开始/停止服务队列，会触发队列状态变化通知
CR.QueueStatusChanged.callback = function(queStatus){

}
```

相关API请参考：   
* [CR.StartService](API.md#CRVideo_StartService)
* [CR.StopService](API.md#CRVideo_StopService)
* [CR.StartServiceRslt](API.md#CRVideo_StartServiceRslt)
* [CR.StopServiceRslt](API.md#CRVideo_StopServiceRslt)
* [CR.QueueStatusChanged](API.md#CRVideo_QueueStatusChanged)

相关结构定义请参考：
* [CR.QueStatus](TypeDefinitions.md#CRVideo_QueStatus)


<h2 id=clientQueue>4.2客户：排队</h2>


客户选择一个队列进行排队，每次只能排一个队列

- 调用接口：

```js
CR.StartQueuing(queID); // 客户开始排队， 操作完成回调CR.StartQueuingRslt

CR.StopQueuing(queID); //客户停止排队，操作完成回调CR.StopQueuingRslt
```

- 回调通知：

```js
// 开始排队操作结果
CR.StartQueuingRslt.callback = function(sdkErr, cookie){
    if(sdkErr == 0){
        //开始排队操作成功
    } else {
        console.log("开始排队操作失败，错误码：" + sdkErr);
    }
}

// 停止排队操作结果
CR.StopQueuingRslt.callback = function(sdkErr, cookie){
    if(sdkErr == 0){
        //停止排队操作成功
    } else {
        console.log("停止排队操作失败，错误码：" + sdkErr);
    }
}
```

```js
//开始/停止排队，会触发队列状态变化通知
CR.QueueStatusChanged.callback = function(queStatus){

}

//排队信息变化通知
CR.QueuingInfoChanged.callback = function(queuingInfo){

}
```

相关API请参考：
* [CR.StartQueuing](API.md#CRVideo_StartQueuing)
* [CR.StopQueuing](API.md#CRVideo_StopQueuing)
* [CR.StartQueuingRslt](API.md#CRVideo_StartQueuingRslt)
* [CR.StopQueuingRslt](API.md#CRVideo_StopQueuingRslt)
* [CR.QueuingInfoChanged](API.md#CRVideo_QueuingInfoChanged)

相关结构定义请参考：
* [CR.QueuingInfo](TypeDefinitions.md#CRVideo_QueuingInfo)

<h2 id=autoAssignUser>5.系统给坐席分配客户</h2>


客户分配模式有自动和手动两种：
- 在自动分配模式下，坐席一旦空闲系统就会立即分配当前排队的客户过来，适用于坐席可以持续提供服务的业务场景。
- 在手动分配模式下，坐席空闲后系统不自动分配客户，而是坐席准备好后手动触发分配一个当前排队的客户，适用于坐席接待完客户后需要进行信息录入之类的善后工作，或者需要在接待新客户之前进行一些准备工作的业务场景。


自动分配模式:

- 回调通知：

```js
// 系统自动安排客户
CR.AutoAssignUser.callback = function(QueUser){
    if(/*接受系统分配的客户*/){
        CR.AcceptAssignUser(QueUser.queID, QueUser.userID);

        //接下来做其他任务……  例如：创建房间

    } else {
        //拒绝系统分配的客户
        CR.RejectAssignUser(user.queID, user.usrID);
    }

}

//接受或拒绝分配的客户的操作结果
CR.ResponseAssignUserRslt.callback = function(sdkErr, cookie){
    if(sdkErr == 0){
        console.log("接受或拒绝系统分配的客户成功");
    }else{
        console.log("接受或拒绝系统分配的客户失败，错误码： "+ sdkErr);
    }
}

//系统取消已经安排的客户
CR.CancelAssignUser.callback = function(queID, userid){
    console.log("系统取消已经安排的客户,坐席不应该再进入房间……");
}
```

相关API请参考： 
* [CR.AutoAssignUser](API.md#CRVideo_AutoAssignUser)
* [CR.AcceptAssignUser](API.md#CRVideo_AcceptAssignUser)
* [CR.RejectAssignUser](API.md#CRVideo_RejectAssignUser)
* [CR.ResponseAssignUserRslt](API.md#CRVideo_ResponseAssignUserRslt)
* [CR.CancelAssignUser](API.md#CRVideo_CancelAssignUser)


手动分配模式:

- 调用接口：

```js
//坐席请求客户分为 2步：
//1.开启免打扰状态
CR.SetDNDStatus(1,cookie)：

// 2. 请求分配一个客户
CR.ReqAssignUser(cookie);
```

- 回调通知：

```js
//设置免打扰成功通知
CR.SetDNDStatusSuccess.callback = function(cookie){

}

//设置免打扰失败通知
CR.SetDNDStatusFail.callback = function(sdkErr, cookie){
    console.log("设置免打扰失败，错误码：" + sdkErr);    
}

//请求分配客户操作结果
CR.ReqAssignUserRslt.callback = function(sdkErr, user, cookie){
    if(sdkErr == 0){
        //请求分配客户成功，接下来做其他任务……  例如：创建房间
    } else {
        console.log("请求分配客户失败，错误码： "+ sdkErr);
    }
}

```

相关API请参考:
* [CR.SetDNDStatus](API.md#CRVideo_SetDNDStatus) 
* [CR.SetDNDStatusSuccess](API.md#CRVideo_SetDNDStatusSuccess)
* [CR.SetDNDStatusFail](API.md#CRVideo_SetDNDStatusFail)
* [CR.ReqAssignUser](API.md#CRVideo_ReqAssignUser)
* [CR.ReqAssignUserRslt](API.md#CRVideo_ReqAssignUserRslt)



<h2 id=callClient>6.坐席呼叫客户</h2>

接受系统分配的客户后， 就可以向客户发起呼叫处理， 相关流程参见：[呼叫功能](call.md)

