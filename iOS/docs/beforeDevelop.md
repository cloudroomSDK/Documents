
# 准备工作

## 帐号申请

[点此注册](https://sdk.cloudroom.com/mgr_sdk/register.html) 一个账号，或者联系商务代为开通，或在网站咨询客服。

<h2 id=getappid>创建项目</h2>


可以在 [管理平台](https://sdk.cloudroom.com/mgr_sdk/) 中创建新的项目（系统有一个默认项目，可以直接使用），如下图：
![GetAPPID](./images/getAppID.png)

为了保障接口安全，后台不再显示App Secret，所以请在创建项目成功显示App Secret时妥善保存好。 如果遗忘只能如下图更换App Secret：
![ChangeAppSecret](./images/ChangeAppSecret.png)


<h2 id=fireWallSettings>防火墙开通</h2>

在使用云屋SDK提供的相关服务之前，您需要打开下面这些特定的端口：

<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;table-layout:fixed;'>
    <thead>
        <tr >
            <th style='width:12%;text-align:center'>端口</th>
            <th style='width:25%;text-align:center'>功能说明</th>
            <th style='width:23%;text-align:center'>Windows, Linux, Android, iOS, macOS, 网页插件</th>
            <th style='width:10%;text-align:center'>H5 SDK</th>
            <th style='width:10%;text-align:center'>小程序SDK</th>
            <th style='width:10%;text-align:center'>直播观看SDK</th>
            <th style='width:10%;text-align:center'>后台管理页面</th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td>TCP 2725</td>
        <td style='text-align:center'>后台管理服务端口</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style='text-align:center'>√</td>
    </tr>
    <tr>
        <td>TCP 2726</td>
        <td style='text-align:center'>https服务端口<br />(SDK缺省使用https)
        </td>
        <td style='text-align:center'>√</td>
        <td style='text-align:center'>√</td>
        <td style='text-align:center'>√</td>
        <td style='text-align:center'>√</td>
        <td style='text-align:center'></td>
    </tr>
    <tr>
        <td>TCP 2728</td>
        <td style='text-align:center'>信令服务端口</td>
        <td style='text-align:center'>√</td>
        <td style='text-align:center'></td>
        <td style='text-align:center'></td>
        <td style='text-align:center'></td>
        <td style='text-align:center'></td>
    </tr>
    <tr>
        <td>TCP 1935</td>
        <td style='text-align:center'>服务器音视频流端口(rtmp)</td>
        <td></td>
        <td></td>
        <td style='text-align:center'>√</td>
        <td style='text-align:center'>√</td>
        <td style='text-align:center'></td>
    </tr>
    <tr>
        <td>UDP 2698</td>
        <td style='text-align:center'>服务器音视频流端口</td>
        <td style='text-align:center'>√</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>UDP 2699</td>
        <td style='text-align:center'>服务器音视频流端口(H5)</td>
        <td></td>
        <td style='text-align:center'>√</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>    
    </tbody>
</table>

<h2 id=beforeDev>开发环境准备</h2>

### 运行环境要求

<font size="3" color="grey"> iOS 8.0及以上版本系统</font>


### SDK下载

- [点此下载](https://sdk.cloudroom.com/pages/download#sdk) iOS SDK


### 集成SDK

<font size="3" color="red">注意： 以Xcode作为集成SDK实例工具， 集成流程如下：</font>

> * 在项目中创建一个目录`Frameworks`(方便以后库管理):

<img src="./images/guide/create_frameworks.png" />

<img src="./images/guide/create_frameworks_complete.png" />

> * 将动态库`CloudroomVideoSDK_IOS.framework`添加到项目中:

<img src="./images/guide/add_cloudroomVideoSDK.png" />

<img src="./images/guide/add_cloudroomVideoSDK_setting.png" />

<img src="./images/guide/add_cloudroomVideoSDK_complete.png" />

> * 添加系统依赖库:

<img src="./images/guide/add_system_frameworks_complete.png" />

## 常见问题

> * bitcode

问题:

<img src="./images/problems/bitcode_question.png" />

解决方案:

<img src="./images/problems/bitcode_answer.png" />

> * image not found

问题:

<img src="./images/problems/image_not_found_question.png" />

解决方案:

<img src="./images/problems/image_not_found_answer_1.png" />

<img src="./images/problems/image_not_found_answer_2.png" />

<img src="./images/problems/image_not_found_answer_3.png" />

> * 权限问题

<img src="./images/problems/privacy_problem.png" />
