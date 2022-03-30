---
sidebarDepth: 0
---


# 信息安全说明

## 通信过程中数据安全说明

使用云屋sdk登录鉴权和业务通信描述图：

![Image text](/images/safety_desc.png)

&emsp;如上图，以https通道进行鉴权，以及通过https通道获得本次通讯的des密钥，对后续tcp，udp数据进行des加解密处理。 只要业务服务器不泄漏鉴权帐号信息，通信就是安全的。

## token机制说明

&emsp;云屋的token采用的是jwt这种开放标准（RFC 7519）生成的。  
&emsp;在token的payload中携带appID、授权有效期，并使用appSecret进行SHA256签名操作，在签名过程中会进行加盐(salt)处理。  
&emsp;由于appSecret是保密的， 所以外界无法伪造token。 再加上token设置了有效期，时间一到token就会失效，所以安全性相比采用appSecret会更高一些。
