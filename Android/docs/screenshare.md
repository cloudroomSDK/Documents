# 屏幕共享

## 功能介绍

在视频会话中为了提高沟通效率，可以将自己的屏幕内容分享给其他参与方观看。还支持在屏幕上进行标注，以及授权其他参与方进行远程控制。当屏幕共享者开启标注后，控件就进入标注模式。此时，房间内所有用户都可以进行标注，并观看他人标注的内容。
使用场景如下：
* 视频会议场景中，屏幕共享可以将讲话者本地的文件、数据、网页、PPT 等画面分享给其他与会人；
* 在线课堂场景中，屏幕共享可以将老师的课件、笔记、讲课内容等画面展示给学生观看。

:::danger

注意：同一个房间中，不支持多人同时开启屏幕共享。

:::


## 共享端

<h3 id=initShareScreenUI >1.创建屏幕共享观看组件</h3>

<font size = 3> 使用可视化UI组件进行屏幕共享显示和操作 </font>

+ 控件调用

```  xml
<com.cloudroom.cloudroomvideosdk.ScreenShareUIView
    android:id="@+id/view_screenshare"
    android:layout_width="match_parent"
    android:layout_height="match_parent" />
```

相关API请参考：
- [ScreenShareUIView](UIComponent.md#ScreenShareUIView)


<h3 id=startshare>2.开始共享</h3>

- 接口调用：

```csharp

//设置屏幕共享参数:帧率8，其他採用系統默认參數
ScreenShareCfg cfg = new ScreenShareCfg();
// 共享帧率
cfg.maxFps = 8;
// 配置共享参数
CloudroomVideoMeeting.getInstance().setScreenShareCfg(cfg);

//开启屏幕共享
/* 注：共享屏幕需要相应授权，请添加下面权限申请界面声明到主配置文件 
<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
<activity
	android:name="com.cloudroom.screencapture.PermissionActivity"
	android:configChanges="orientation|uiMode|screenLayout|screenSize|smallestScreenSize|locale|fontScale|keyboard|keyboardHidden|navigation"
	android:launchMode="singleTop" 
	android:screenOrientation="sensor" >
</activity>
<service android:name="com.cloudroom.screencapture.ScreenCaptureService"
    android:exported="false"
    android:enabled="true"
    android:foregroundServiceType="mediaProjection" />
 */


private void startScreenShare() {
	ScreenShareCfg cfg = new ScreenShareCfg();
	// 共享帧率
	cfg.maxFps = 12;
	// 共享码率
	cfg.maxBps = 2000 * 1000;
	// 配置共享参数
	CloudroomVideoMeeting.getInstance().setScreenShareCfg(cfg);
	// 开始共享
	CloudroomVideoMeeting.getInstance().startScreenShare(new ScreenCaptureService.ScreenCallback(){

		@Override
		public void configNotification(Notification.Builder notice) {
			Context context = getContext();
			// 通知图标
			notice.setSmallIcon(R.drawable.ic_launcher);
			// 通知标题文字
			notice.setContentTitle(context.getString(R.string.app_name));
			// 通知内容
			notice.setContentText(context.getString(R.string.app_name));
			notice.setTicker(context.getString(R.string.app_name));
			boolean hasPermission = isPermissionOpen(context);
			Log.i(TAG, "isPermissionOpen :" + hasPermission);
			if (!hasPermission) {
				openPermissionSetting(context);
			}
		}
	});

	mStartBtn.setVisibility(View.GONE);
	mStopBtn.setVisibility(View.VISIBLE);
}

private boolean isPermissionOpen(Context context) {
	if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
		return NotificationManagerCompat.from(context).getImportance() != NotificationManager.IMPORTANCE_NONE;
	}
	return NotificationManagerCompat.from(context).areNotificationsEnabled();
}

private void openPermissionSetting(Context context) {
	try {
		Intent localIntent = new Intent();
		localIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
		//直接跳转到应用通知设置的代码：
		if (android.os.Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
			localIntent.setAction(Settings.ACTION_APP_NOTIFICATION_SETTINGS);
			localIntent.putExtra(Settings.EXTRA_APP_PACKAGE, context.getPackageName());
			context.startActivity(localIntent);
			return;
		}
		if (android.os.Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
			localIntent.setAction("android.settings.APP_NOTIFICATION_SETTINGS");
			localIntent.putExtra("app_package", context.getPackageName());
			localIntent.putExtra("app_uid", context.getApplicationInfo().uid);
			context.startActivity(localIntent);
			return;
		}
		if (android.os.Build.VERSION.SDK_INT == Build.VERSION_CODES.KITKAT) {
			localIntent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
			localIntent.addCategory(Intent.CATEGORY_DEFAULT);
			localIntent.setData(Uri.parse("package:" + context.getPackageName()));
			context.startActivity(localIntent);
			return;
		}

		//4.4以下没有从app跳转到应用通知设置页面的sAction，可考虑跳转到应用详情页面,
		if (Build.VERSION.SDK_INT >= 9) {
			localIntent.setAction("android.settings.APPLICATION_DETAILS_SETTINGS");
			localIntent.setData(Uri.fromParts("package", context.getPackageName(), null));
			context.startActivity(localIntent);
			return;
		}

		localIntent.setAction(Intent.ACTION_VIEW);
		localIntent.setClassName("com.android.settings", "com.android.setting.InstalledAppDetails");
		localIntent.putExtra("com.android.settings.ApplicationPkgName", context.getPackageName());

	} catch (Exception e) {
		e.printStackTrace();
		Log.i(TAG, "openPermissionSetting ex:" + e.getMessage());
	}
}
```

- 回调通知：

```csharp

// 开启结果
void startScreenShareRslt(CRVIDEOSDK_ERR_DEF sdkErr) {
    if (sdkErr == CRVIDEOSDK_ERR_DEF.CRVIDEOSDK_NOERR){
        //开启屏幕共享成功
	...
    }else{
        //开启屏幕共享失败
	...
    }
}

```

相关API请参考：
* [setScreenShareCfg](API.md#setScreenShareCfg)
* [startScreenShare](API.md#startScreenShare)
* [startScreenShareRslt](API.md#startScreenShareRslt)
* [notifyScreenShareStarted](API.md#notifyScreenShareStarted)


 <h3 id=startmark>3.开启标注</h3>

:::danger

注意：只有主动开启屏幕共享的用户，才可以开启标注功能。

:::

- 接口调用：

```csharp
//开启标注
CloudroomVideoMeeting.getInstance().startScreenMark();

```
- 回调通知：

```csharp

//开启标注结果
void startScreenMarkRslt(CRVIDEOSDK_ERR_DEF sdkErr){
  if (e.p_sdkErr == CRVIDEOSDK_NOERR){
   	//标注开启成功后，显示屏幕共享控件
      	screenshareView.setVisiblity(View.VISIBLE);
  }else{
      //开启标注失败
      ...
  }
}

```


相关API请参考：
* [startScreenMark](API.md#startScreenMark)


<h3 id=stopmark>4.停止标注</h3>


- 接口调用：

```csharp
//停止标注
axVideoMeeting.stopScreenMark();

```
- 回调通知：

```csharp
//停止标注的结果
void stopScreenMarkRslt(CRVIDEOSDK_ERR_DEF sdkErr){
  //停止标注成功
  ...
}

```

相关API请参考：
* [stopScreenMark](API.md#stopScreenMark)


<h3 id=stopshare>5.停止共享</h3>

- 接口调用：

```csharp
//主动停止屏幕共享
axVideoMeeting.stopScreenShare();
```

- 回调通知：

```csharp

//主动停止屏幕共享的结果
void stopScreenShareRslt(CRVIDEOSDK_ERR_DEF sdkErr){
      ...
}

```

## 观看端


<h3 id=initShareScreenUI >1.创建屏幕共享观看组件</h3>

<font size = 3> 使用可视化UI组件进行屏幕共享显示和操作 </font>

+ 控件调用

```  xml
<com.cloudroom.cloudroomvideosdk.ScreenShareUIView
    android:id="@+id/view_screenshare"
    android:layout_width="match_parent"
    android:layout_height="match_parent" />
```

相关API请参考：
- [ScreenShareUIView](UIComponent.md#ScreenShareUIView)

<h3 id=startshareNotify>2.通知开始共享</h3>
- 回调通知：

```csharp

//收到屏幕共享通知的处理，显示屏幕共享控件
void notifyScreenShareStarted(){
    screenshareView.setVisibility(View.VISIBLE);
}

```

相关API请参考：
 * [notifyScreenShareStarted](API.md#notifyScreenShareStarted)



<h3 id=startmarkNotify>3.通知开启标注</h3>
- 回调通知：

```csharp

//收到屏幕共享已开启标注的通知
void notifyScreenMarkStarted() {
  ...
}

```


<h3 id=stopmarkNotify>4.通知停止标注</h3>

- 回调通知：

```csharp

//收到屏幕共享停止标注的通知
void notifyScreenMarkStopped(){
  ...
}

```


<h3 id=stopshareNotify>5.通知停止共享</h3>

```csharp

//收到他人停止了屏幕共享的通知
void notifyScreenShareStopped()
{
   //隐藏屏幕共享控件
   screenshareView.setVisibility(View.GONE);
}
```


相关API请参考：
 * [notifyScreenShareStopped](API.md#notifyScreenShareStopped)
