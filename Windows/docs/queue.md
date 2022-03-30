# 排队

## 功能简介

在呼叫中心的业务场景下，有多个客户呼叫进来，有多个坐席提供服务，简单的一对一呼叫无法满足业务需求。此时可以使用我们的排队功能，客户不再直接呼叫某个坐席，而是呼叫到一个坐席队列，由系统自动给客户分配一个空闲的坐席。
- 多个坐席可以服务于一个队列，客户排队这个队列时，系统会自动分配一个空闲坐席来提供服务。
- 一个坐席可以同时服务多个队列，优先服务高优先级队列里的客户，队列优先级相同时优先服务最早排队的客户。
- 业务高峰期没有空闲的坐席时，客户将在队列中排队等待，当有坐席空闲时，将为最早排队的客户提供服务。
- 同一队列的坐席可以配置不同的坐席优先级，队列中的客户优先由空闲的高优先级的坐席来提供服务。


:::danger

注意：在登录成功后才可以使用排队功能。

:::


<h2 id=createQueue>1.创建队列</h2>

可以通过两种方式创建队列：

- 第一种是[登录云屋SDK后台](https://sdk.cloudroom.com/mgr_sdk/login.html)并创建。如下图：
 ![登录云屋SDK后台并创建](./images/createQ.png)

- 第二种是通过[Web API](http://sdk.cloudroom.com/sdkdoc/webapi)创建。




<h2 id=initQueue>2.初始化队列</h2>

在登录成功后，初始化队列信息

- 调用接口：

```csharp
//操作完成回调InitQueueDatRslt
axVideoSDK.initQueueDat("");

```

- 回调通知：

```csharp

void initQueueDatRslt(object sender, ICloudroomQueueEvents_initQueueDatRsltEvent e) {
  //通过返回的全部队列信息加载专家坐席和用户数据
  List<QueueInfo> queues = axVideoSDK.getAllQueueInfo());
  ...
  }

```

相关API请参考：
* [initQueueDat](API.md#initQueueDat)
* [initQueueDatRslt](API.md#initQueueDatRslt)
* [getAllQueueInfo](API.md#getAllQueueInfo)


<h2 id=getQueue>3.获取队列信息</h2>


在初始化队列成功后，才可以使用获取队列信息。并且可以多次获取。

- 调用接口：

```csharp
//获取队列信息
string getAllQueueInfo();

```

<h2 id=servicesOpr>4.1坐席：服务队列</h2>


- 调用接口：

```csharp
//开始服务某个队列(可以多次调用，开启对多个队列的服务) .
axQueue.startService(int p_queID, string p_cookie);
axQueue.startService2(int p_queID, int p_priority, string p_cookie);

//停止服务某个队列
axQueue.stopService(int p_queID, string p_cookie);

//获取本坐席服务的所有队列
string str = axVideoSDK.getServingQueues();

//获取某个队列排队客户列表
string users = axVideoSDK.getQueueUsers(int p_queID);

```

- 回调通知：

```csharp
// 开始服务队列操作结果
void StartServiceRslt(object sender, ICloudroomQueueEvents_startServiceRsltEvent e){
  Console.WriteLine("开始服务队列"+sdkErr);
}

//停止服务队列操作结果
void StopServiceRslt(object sender, ICloudroomQueueEvents_stopServiceRsltEvent e){
  Console.WriteLine("停止服务队列: " + e.p_sdkErr);
}

// 开始/停止服务队列，会触发队列状态变化通知
void QueueStatusChanged(object sender, ICloudroomQueueEvents_queueStatusChangedEvent e){

}
```

相关API请参考：
* [startService2](API.md#startService2)
* [stopService](API.md#stopService)
* [startServiceRslt](API.md#startServiceRslt)
* [stopServiceRslt](API.md#stopServiceRslt)
* [getServingQueues](API.md#getServingQueues)
* [getQueueUsers](API.md#getQueueUsers)
* [queueStatusChanged](API.md#queueStatusChanged)


<h2 id=clientQueue>4.2客户：排队</h2>


客户选择一个队列进行排队，每次只能排一个队列

- 调用接口：

```csharp

// 客户开始排队， 操作完成回调StartQueuingRslt
axVideoSDK.startQueuing(int p_queID, string p_cookie);
axVideoSDK.startQueuing2(int p_queID, string p_usrExtDat, string p_cookie);

//客户停止排队，操作完成回调StopQueuingRslt
axVideoSDK.stopQueuing(string p_cookie);

```

- 回调通知：

```csharp

// 开始排队操作结果
void StartQueuingRslt(object sender, ICloudroomQueueEvents_startQueuingRsltEvent e){
    Console.WriteLine("startQueuingRslt: " + e.p_sdkErr);
}

// 停止排队操作结果
void StopQueuingRslt(sdkErr,cookie){
    Console.WriteLine("stopQueuingRslt: " + e.p_sdkErr);
}

```

```csharp
//开始/停止排队，会触发队列状态变化通知
void QueueStatusChanged(object sender, ICloudroomQueueEvents_queueStatusChangedEvent e){
      if (state.queID == queID){//更改对应队列的状态
        ...
      }
}

//排队信息变化通知
void QueuingInfoChanged(object sender, ICloudroomQueueEvents_queuingInfoChangedEvent e){
  QueuingInfo queuingInfo = JsonConvert.DeserializeObject<QueuingInfo>(e.p_queuingInfo);
  Console.WriteLine("队列信息变化: "  + queuingInfo.position+ ", wait_time:" queuingInfo.queuingTime);
}

```

相关API请参考：
* [startQueuing2](API.md#startQueuing2)
* [stopQueuing](API.md#stopQueuing)
* [startQueuingRslt](API.md#startQueuingRslt)
* [stopQueuingRslt](API.md#stopQueuingRslt)
* [queuingInfoChanged](API.md#queuingInfoChanged)


<h2 id=autoAssignUser>5.系统给坐席分配客户</h2>


客户分配模式有自动和手动两种：
- 在自动分配模式下，坐席一旦空闲系统就会立即分配当前排队的客户过来，适用于坐席可以持续提供服务的业务场景。
- 在手动分配模式下，坐席空闲后系统不自动分配客户，而是坐席准备好后手动触发分配一个当前排队的客户，适用于坐席接待完客户后需要进行信息录入之类的善后工作，或者需要在接待新客户之前进行一些准备工作的业务场景。


自动分配模式:

- 回调通知：

```csharp

// 系统自动安排客户
void autoAssignUser(object sender, ICloudroomQueueEvents_autoAssignUserEvent e){
    //检测是否开启免打扰，如果未开启免打扰，则可创建会议，否则不创建
}

//系统取消已经安排的客户，并且关闭连接
void cancelAssignUser(object sender, ICloudroomQueueEvents_cancelAssignUserEvent e){
    Console.WriteLine("系统取消已经安排的客户,坐席不应该再进入房间……");
}

//接受或拒绝分配的客户的操作结果
void responseAssignUserRslt(object sender, ICloudroomQueueEvents_responseAssignUserRsltEvent e){

    if(sdkErr == NOERR){
        Console.WriteLine("接受或拒绝系统分配的客户成功");
    }else{
        Console.WriteLine("接受或拒绝系统分配的客户失败，错误码： "+sdkErr);
    }
}

```

- 调用接口：

```csharp

// 接受系统分配的客户
axVideoSDK.acceptAssignUser(int queID, string userID, string cookie)

// 拒绝系统分配的客户
axVideoSDK.rejectAssignUser(int queID, string userID, string cookie)

```

相关API请参考：
* [autoAssignUser](API.md#autoAssignUser)
* [acceptAssignUser](API.md#acceptAssignUser)
* [rejectAssignUser](API.md#rejectAssignUser)
* [responseAssignUserRslt](API.md#responseAssignUserRslt)
* [cancelAssignUser](API.md#cancelAssignUser)


手动分配模式:

- 调用接口：

```csharp
//开启免打扰状态
 void SetDNDStatus(1,cookie)：
//请求分配一个客户
axQueue.reqAssignUser(cookie);
//请求分配一个指定客户
axQueue.reqAssignUser2(int p_queID, string p_userID, cookie);
```

- 回调通知：

```csharp
//设置免打扰成功通知
void setDNDStatusSucceed(object sender, ICloudroomVideoMgrEvents_setDNDStatusSuccessEvent e){
    Console.WriteLine("setDNDStatusSucceed");
}

//设置免打扰失败通知
void SetDNDStatusFail.callback(object sender, ICloudroomVideoMgrEvents_setDNDStatusSuccessEvent e){
    Console.WriteLine("setDNDStatusFailed: " + e.p_sdkErr);
}

//请求分配客户操作结果
void ReqAssignUserRslt(object sender, ICloudroomQueueEvents_reqAssignUserRsltEvent e)
{
    Console.WriteLine("reqAssignUserRslt:" + e.p_sdkErr);
    if (e.p_sdkErr == (int)VCALLSDK_ERR_DEF.VCALLSDK_NOERR){
        //请求分配客户成功，接下来做其他任务……  例如：创建房间
    } else if(e.p_sdkErr == (int)VCALLSDK_ERR_DEF.VCALLSDK_QUE_NOUSER){
      //队列中无排队人员
    } else{
      //请求分配客户失败
    }
}

```

相关API请参考:
* [setDNDStatus](API.md#setDNDStatus)
* [setDNDStatusSuccess](API.md#setDNDStatusSuccess)
* [setDNDStatusFail](API.md#setDNDStatusFail)
* [reqAssignUser](API.md#reqAssignUser)
* [reqAssignUser2](API.md#reqAssignUser2)
* [reqAssignUserRslt](API.md#reqAssignUserRslt)



<h2 id=callClient>6.坐席呼叫客户</h2>

- 调用接口：

```csharp
//发起呼叫，邀请客户进入房间。
string callID = axVideoSDK.call(string UserID, MeetInfoObj meetObj, string usrExtDat, string cookie)
```

呼叫相关流程及API请参考:
* [呼叫功能](call.md)

