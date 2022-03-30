# 关键词
- <font style="color:#4183c4;">SDK管理平台：</font>  
是云屋提供给SDK注册用户的[管理平台](https://sdk.cloudroom.com/mgr_sdk/)。 可以进行帐户管理、项目管理、录像管理、队列管理、 通信记录查询、用量监控等操作。  
[点此注册](https://sdk.cloudroom.com/mgr_sdk/register.html)一个账号，或者联系商务代为开通，或在网站咨询客服。

- <font style="color:#4183c4;">App ID：</font>  
用于区分不同的项目。每个项目都有属于自己唯一的App ID，不同App ID的项目完全独立，无法相互通信。  
可以通过[管理平台](https://sdk.cloudroom.com/mgr_sdk/)中的“项目管理”来创建App ID和维护相关配置。

- <font id="appSecret" style="color:#4183c4;" >App Secret：</font>  
App ID对应的密码，可登录云屋管理后台修改。

- <font style="color:#4183c4;">token：</font>  
云屋提供的token生成器生成的授权令牌。它具有动态性、时效性,可以替换appSecret用于登录鉴权。

- <font id="room" style="color:#4183c4;" >房间：</font>  
平台当前提供的音视频、白板、屏幕共享、IM群聊服务都是基于房间的，在使用这些服务之前，必须要先创建房间，只有加入到同一个房间的用户才能够使用这些业务互相通信。房间创建后如果不主动销毁将会长期有效。

- <font style="color:#4183c4;">房间号：</font>  
房间的唯一标识，用户需要先调用创建房间的api，然后在创建成功的回调通知中获取该房间的信息结构体。房间号来自该结构体。

- <font id="UID" style="color:#4183c4;" >UID: </font>  
用户ID，在登录和加入房间时传入，用于标识不同的用户。 同一个项目下的UID需要保证唯一。

- <font style="color:#4183c4;">发布视频流：</font>  
用户加入房间后，可以向房间内的其他用户发送本地采集的音视频数据流，也就是发布视频流。

- <font style="color:#4183c4;">订阅视频流：</font>  
用户加入房间后，可以选择接收房间内其他用户发布的音视频数据流，也就是订阅视频流。

- <font id="stream" style="color:#4183c4;">大小流模式：</font>  
大小流指视频大流和视频小流。发布端可以开启大小流模式，同时发送大流和小流，订阅端根据自己的网络情况选择接收大流或小流。大流和小流是一个相对的概念，通常小流占用的带宽会低于大流，适用于网络较差的场景。PC平台性能通常较强，最多可以支持发布3个不同大小的视频流，移动平台只支持发布一大一小两个视频流。

- <font style="color:#4183c4;">云端录制: </font>  
在服务器上对房间内的音视频、白板、屏幕共享等通讯内容进行录制，支持自定义录制内容和布局，录制文件在服务器保存，可以通过API下载到本地。

- <font style="color:#4183c4;" id="transparentPassage">透明通道：</font>  
用于多个客户端之间传递用户的自定义内容，支持文件和信令两种模式，透明通道可以在房间外使用。

- <font style="color:#4183c4;" id="cookie">cookie: </font>  
指接口cookie参数，提供给业务层的命令上下文本地缓存机制（cookie不会在网络上传输）。 在命令响应回调接口里传回给业务层，回调之后cookie数据就会自动消毁。  
用法举例：业务层分别向A、B各发一条消息（将目标用户的id存在cookie里）， 在失败回调接口里可从cookie取回用户id， 就能知道发给谁的消息失败了。