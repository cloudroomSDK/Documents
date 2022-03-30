# 自定义视频采集/渲染

## 功能介绍

自定义视频采集：开发者可以自定义一个视频输入源，数据需要开发者准备给SDK编码传输</br>
自定义视频渲染：开发者可以从SDK获取到视频数据自行绘制渲染，应用场景：需要在视频数据上绘制文本、图片等数据</br>

## 示例项目

云屋SDK 在 GitHub 上提供已经实现[自定义视频采集/渲染](https://github.com/cloudroomSDK/API-Demo/tree/main/Linux/src/TestCustomVideoCaptureRender)功能的开源示例项目。你可以下载体验或查看其中的源代码。

## 自定义视频采集

### 开启自定义视频采集

```cpp

//添加一个自定义设备
int capVideoDevID = g_sdkMain->getSDKMeeting().createCustomVideoDev(strUUID, CRVSDK_VFMT_YUV420P, 1280, 720, "");
//切换到该设备
g_sdkMain->getSDKMeeting().setDefaultVideo(capVideoDevID);
//打开摄像头
g_sdkMain->getSDKMeeting().openVideo(myUserID);
//开始视频采集(如果图像有变化，可启动定时器，定时送入不同图像）
CRByteArray jpgDat;//从jpg文件中读取一份1280x720数据
CRVideoFrame frm;
CRVSDK_ERR_DEF errCode = g_sdkMain->coverToVideoFrame(jpgDat, "jpg", frm);
//转换成yuv数据
g_sdkMain->videoFrameCover(frm, CRVSDK_VFMT_YUV420P, frm.getWidth(), frm.getHeight());
//送入图像
g_sdkMain->getSDKMeeting().inputCustomVideoDat(capVideoDevID, frm);

```

相关API请参考:</br>
[createCustomVideoDev](Apis.md#createCustomVideoDev)</br>
[inputCustomVideoDat](Apis.md#inputCustomVideoDat)</br>


### 关闭自定义视频采集

```cpp

//默认设备切换到其他视频设备
g_sdkMain->getSDKMeeting().setDefaultVideo(videoID);
//删除自定义采集设备
g_sdkMain->getSDKMeeting().destroyCustomVideoDev(capVideoDevID);

```

相关API请参考:</br>
[setDefaultVideo](Apis.md#setDefaultVideo)</br>
[destroyCustomVideoDev](Apis.md#destroyCustomVideoDev)</br>


## 自定义视频渲染

### 开启自定义视频渲染

```cpp

设置自定义视频渲染回调
class CustomRender : public CRCustomRenderHandler
{
CustomRender
	//视频数据回调
	void onRenderFrameDat(const CRVideoFrame &frm) override{}
}
CustomRender *render = new CustomRender;
g_sdkMain->getSDKMeeting().addCustomRender(render);
//默认是yuv格式，可以转换成rgb格式的数据进行绘制
g_sdkMain->videoFrameCover(frm, CRVSDK_VFMT_ARGB32, frm.width(), frm.height());
//得到frm中原始指针
uint8_t* rgb[1];
int      linesize[1];
frm.getRawDatPtr(rgb, linesize, 1);
//使用rgb数据进行绘制

```

相关API请参考:</br>
[addCustomRender](Apis.md#addCustomRender)


### 关闭自定义视频渲染


```cpp

g_sdkMain->getSDKMeeting().rmCustomRender(render);

```

相关API请参考:</br>
[rmCustomRender](Apis.md#rmCustomRender)

