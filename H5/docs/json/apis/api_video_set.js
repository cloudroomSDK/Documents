const {
  commonCookie,
  commonMeetInfoObj,
  commonMeetId,
  commonSDKErr,
  commonUID,
  commonQueId,
  commonQueUser,
  commonReturnPromise,
  commonErrorCode,
  commonPromiseReject,
  promiseCallback,
} = require('./commonPassiveKey');

// 视频管理
module.exports = [{
  method: "主调",
  interface: "CRVideo_CreatVideoObj",
  description: "创建成员视频UI显示对象",
  detail: {
    content: 'CRVideo_CreatVideoObj(CreateUIParams)',
    returnVal: '返回成员视频UI显示对象 [CRVideo_VideoObj](#CRVideo_VideoObj)',
    callback: '无',
    data: [{
      param: 'CreateUIParams',
      type: 'Object',
      necessary: '否',
      explain: '详细介绍见：[CRVideo_CreateUIParams](TypeDefinitions.html#CRVideo_CreateUIParams)'
    }],
    attent: `
> 必须创建成员视频UI对象才能在网页上显示成员的摄像头画面`,
    example: `
    // 创建对象
    const user1VideoObj = CRVideo_CRVideo_CreatVideoObj();
    // 设置对象属性
    const userVideoDOM = user1VideoObj.handler(); // 获取组件DOM
    $('#userVideo').append(userVideoDOM); // 将组件DOM放到页面上
    const nicknameStyle = {
      left: "10px",
      top: "10px",
      backgroundColor: "rgba(0, 0, 0, .7)",
      padding: "0 10px",
      borderRadius: "15px",
      display: "block"
    }
    user1VideoObj.setNickNameStyle(nicknameStyle); // 设置昵称样式
    user1VideoObj.setVisibleNickName(true); // 设置是否显示昵称
    user1VideoObj.setVideo(UID); // 设置显示成员摄像头画面
    `
  }
}, {
  interface: "CRVideo_GetVideoCfg",
  description: "获取当前视频参数",
  detail: {
    content: 'CRVideo_GetVideoCfg()',
    returnVal: '返回当前视频配置参数对象，详见：[CRVideo_VideoCfg](TypeDefinitions.html#CRVideo_VideoCfg)',
    callback: '无',
  }
}, {
  interface: "CRVideo_SetVideoCfg",
  description: "设置视频参数",
  detail: {
    content: 'CRVideo_SetVideoCfg(VideoCfg)',
    returnVal: '无',
    callback: '无',
    data: [{
      param: 'VideoCfg',
      type: 'Object',
      necessary: '是',
      explain: '详细介绍见：[CRVideo_VideoCfg](TypeDefinitions.html#CRVideo_VideoCfg)'
    }],
    attent: `
> 设置视频参数会根据浏览器支持的能力自适应，相关属性不一定能设置成功，超出浏览器能力时浏览器会选择适合的值。例如：设置fps:35，在chrome上不支持，最终结果是30fps，而在safari上最终结果是31fps`
  }
}, {
  interface: "CRVideo_GetVideoStatus",
  description: "获取指定成员的视频状态",
  detail: {
    content: 'CRVideo_GetVideoStatus(UID)',
    returnVal: '返回该用户的视频状态，详见：[CRVideo_VSTATUS](Constant.html#CRVideo_VSTATUS)',
    callback: '无',
    data: [commonUID]
  }
}, {
  interface: "CRVideo_GetDefaultVideo",
  description: "获取指定成员的默认摄像头",
  detail: {
    content: 'CRVideo_GetDefaultVideo(UID)',
    returnVal: '返回该成员的默认摄像头ID（Number），如：1',
    callback: '无',
    data: [commonUID]
  }
}, {
  interface: "CRVideo_SetDefaultVideo",
  description: "设置指定成员的默认摄像头",
  detail: {
    content: 'CRVideo_SetDefaultVideo(UID,videoID)',
    returnVal: '无',
    callback: '无',
    data: [commonUID, {
      param: 'videoID',
      type: 'Number',
      necessary: '是',
      explain: '摄像头ID'
    }],
    attent: `
> 如果用户只有一个摄像头，可以不设置默认摄像头
> 如果用户有多个摄像头，但是只想用其中一个，需要把这个摄像头设置为默认摄像头（切换摄像头）
> 可以通过调用 [CRVideo_GetAllVideoInfo](#CRVideo_GetAllVideoInfo) 接口获取用户的摄像头列表
> 如果调用此接口设置了新的默认摄像头，房间内用户将会收到 [CRVideo_DefVideoChanged.callback](#CRVideo_DefVideoChanged) 接口通知`
  }
}, {
  interface: "CRVideo_GetAllVideoInfo",
  description: "获取指定成员的所有摄像头信息",
  detail: {
    content: 'CRVideo_GetAllVideoInfo(UID)',
    returnVal: '返回该用户摄像头信息列表Array，如：[VideoInfoObj1,VideoInfoObj2,...]，详见：[CRVideo_VideoInfoObj](TypeDefinitions.html#CRVideo_VideoInfoObj)',
    callback: '无',
    data: [commonUID]
  }
}, {
  interface: "CRVideo_GetOpenedVideoIDs",
  description: "获取指定成员当前打开的摄像头ID列表",
  detail: {
    content: 'CRVideo_GetOpenedVideoIDs(UID)',
    returnVal: '返回该用户当前打开的摄像头ID列表集合，如：[1, 2, 3, ...]',
    callback: '无',
    data: [commonUID]
  }
  // CRVideo_SetVideoDenoise 开启或关闭摄像头降噪处理
  // CRVideo_GetVideoDenoise 获取是否开启摄像头降噪
  // CRVideo_GetWatchableVideos	房间内可观看摄像头列表
}, {
  interface: "CRVideo_OpenVideo",
  description: "打开指定成员的摄像头",
  detail: {
    content: 'CRVideo_OpenVideo(UID)',
    returnVal: '无',
    callback: '无',
    data: [commonUID],
    attent: `
> 打开指定成员的摄像头，以便本地和远端显示视频图像
> 调用此接口后，如果获取到对应的视频流，将会收到CRVideo_NotifyVideoStream.callback(#CRVideo_NotifyVideoStream) 接口通知`
  }
}, {
  interface: "CRVideo_CloseVideo",
  description: "关闭指定成员的摄像头",
  detail: {
    content: 'CRVideo_CloseVideo(UID)',
    returnVal: '无',
    callback: '无',
    data: [commonUID]
  }
}, {
  interface: "CRVideo_SetEnableMutiVideo",
  description: "设置是否启用多摄像头",
  detail: {
    content: 'CRVideo_SetEnableMutiVideo(UID,bool)',
    returnVal: '无',
    callback: '无',
    data: [commonUID, {
      param: 'bool',
      type: 'bool',
      necessary: '是',
      explain: '是否启用多摄像头'
    }]
  }
}, {
  interface: "CRVideo_GetEnableMutiVideo",
  description: "获取当前是否启用多摄像头",
  detail: {
    content: 'CRVideo_GetEnableMutiVideo(UID,bool)',
    returnVal: '返回当前是否启用了多摄像头',
    callback: '无',
    data: [commonUID]
  }
}, {
  interface: "CRVideo_AddStreamCam",
  description: "添加WebRTC媒体流摄像头",
  detail: {
    content: 'CRVideo_AddStreamCam(videoStream,videoName)',
    returnVal: '返回摄像头ID',
    data: [{
      param: 'videoStream',
      type: 'MediaStream',
      necessary: '是',
      explain: 'WebRTC媒体流，详见：[MediaStream](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaStream)'
    }, {
      param: 'videoName',
      type: 'String',
      necessary: '是',
      explain: '自定义摄像头名称，如：“媒体流摄像头1”'
    }],
    attent: `
> 添加媒体流摄像头后，可以调用 [CRVideo_GetAllVideoInfo](#CRVideo_GetAllVideoInfo) 接口来获取该摄像头对应的videoID，打开此摄像头时需要传入videoID`
  }
}, {
  interface: "CRVideo_RemoveStreamVideo",
  description: "移除WebRTC媒体流摄像头",
  detail: {
    content: 'CRVideo_RemoveStreamVideo(videoID)',
    returnVal: '无',
    callback: '无',
    data: [{
      param: 'videoID',
      type: 'Number',
      necessary: '是',
      explain: '需要移除的媒体流摄像头的ID'
    }]
  }
}, {
  interface: "CRVideo_AddCanvasVCam",
  description: "添加canvas虚拟摄像头",
  detail: {
    content: 'CRVideo_AddCanvasVCam(canvas,videoName,options)',
    returnVal: '返回摄像头ID',
    data: [{
      param: 'canvas',
      type: 'Object',
      necessary: '是',
      explain: 'canvas element， Dom对象'
    }, {
      param: 'videoName',
      type: 'String',
      necessary: '是',
      explain: '自定义摄像头名称，如：“canvas摄像头1”'
    }, {
      param: 'options',
      type: 'Object',
      necessary: '否',
      explain: '保留参数'
    }],
    attent: `
> 添加canvas摄像头后，可以调用 [CRVideo_GetAllVideoInfo](#CRVideo_GetAllVideoInfo) 接口来获取该摄像头对应的videoID，打开此摄像头时需要传入videoID`
  }
}, {
  interface: "CRVideo_RemoveCanvasVCam",
  description: "移除canvas摄像头",
  detail: {
    content: 'CRVideo_RemoveCanvasVCam(videoID)',
    returnVal: '无',
    callback: '无',
    data: [{
      param: 'videoID',
      type: 'Number',
      necessary: '是',
      explain: '需要移除的canvas摄像头的ID'
    }]
  }
}, {
  interface: "CRVideo_SetVirtualBackground",
  description: "设置虚拟背景",
  detail: {
    content: `CRVideo_SetVirtualBackground(jsonCfg)${promiseCallback}`,
    returnVal: commonReturnPromise,
    data: [{
      param: 'jsonCfg',
      type: 'Object',
      necessary: '是',
      explain: '虚拟背景配置对象'
    }],
    resParam: [commonErrorCode],
    errParam: commonPromiseReject
  }
}, {
  method: "回调",
  interface: "CRVideo_VideoDevChanged",
  description: "通知，某个成员的摄像头设备发生了变化",
  detail: {
    content: 'CRVideo_VideoDevChanged.callback = function(UID){}',
    type: 'callback',
    callbackParam: [commonUID]
  }
}, {
  interface: "CRVideo_DefVideoChanged",
  description: "通知，某个成员的默认摄像头发生了变化",
  detail: {
    content: 'CRVideo_DefVideoChanged.callback = function(UID,videoID){}',
    type: 'callback',
    callbackParam: [commonUID, {
      param: 'videoID',
      type: 'Number',
      explain: '摄像头ID'
    }]
  }
}, {
  interface: "CRVideo_VideoStatusChanged",
  description: "通知，某个成员的视频状态发生了变化",
  detail: {
    content: 'CRVideo_VideoStatusChanged.callback = function(UID,oldStatus,newStatus){}',
    type: 'callback',
    callbackParam: [commonUID, {
      param: 'oldStatus',
      type: 'Number',
      explain: '旧的视频状态，详见：[CRVideo_VSTATUS](Constant.html#CRVideo_VSTATUS)'
    }, {
        param: 'newStatus',
        type: 'Number',
        explain: '新的视频状态，详见：[CRVideo_VSTATUS](Constant.html#CRVideo_VSTATUS)'
      }]
  }
}, {
  interface: "CRVideo_NotifyVideoStream",
  description: "通知，获取到某个成员的WebRTC视频流",
  detail: {
    content: 'CRVideo_NotifyVideoStream.callback = function(UID,videoStream){}',
    type: 'callback',
    callbackParam: [commonUID, {
      param: 'videoStream',
      type: 'MediaStream',
      explain: '该成员的WebRTC视频流，详见：[MediaStream](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaStream)',
    }],
    attent: `
> 获取到成员的视频流后，可以给界面上的&lt;video&gt;标签设置srcObject属性显示此视频流的画面，一般不建议这样使用，可以直接通过创建该成员的视频UI组件 [CRVideo_CreatVideoObj](#CRVideo_CreatVideoObj) 来显示他的画面`
  }
}]