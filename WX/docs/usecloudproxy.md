# 使用云代理

## 云代理介绍

对于安全需求较高的企业用户比如金融、医院、高校、大型企业，设置防火墙可以限制员工访问不安全网站，保护内部信息安全。

云屋提供了云代理服务来接入这类有防火墙限制的用户，只需要在防火墙上将特定的域名及端口列入白名单，就可以正常访问云屋的音视频云服务。

![Image text](./images/cloudProxy.png)


## 使用云代理

1、将云屋云代理服务器和端口添加到企业防火墙的白名单

&emsp;云屋云代理服务器: proxy.cloudroom.com:643

2、在小程序公众平台-开发-开发设置-服务器域名添加request合法域名、socket合法域名
```
https://proxy.cloudroom.com:643;
wss://proxy.cloudroom.com:643;
```

3、设置到登录服务器

&emsp;把[登录](IntegratedGuide.md#Login)服务器地址替换为:proxy.cloudroom.com:643