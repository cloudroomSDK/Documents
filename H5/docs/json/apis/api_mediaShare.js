const {
  commonCookie,
  commonMeetInfoObj,
  commonMeetId,
  commonSDKErr,
  commonUID,
  commonQueId,
  commonQueUser,
  commonCallID,
  commonusrExtDat
} = require('./commonPassiveKey');

// 影音共享
module.exports = [{
  method: "主调",
  interface: "CRVideo_CreatMediaObj",
  description: "创建影音共享显示UI组件",
  detail: {
    content: 'CRVideo_CreatMediaObj(CreatParams)',
    returnVal: '返回影音共享UI显示对象 [CRVideo_MediaObj](#CRVideo_VideoObj)',
    callback: '无',
    data: [{
      param: 'CreateUIParams',
      type: 'Object',
      necessary: '否',
      explain: '详细介绍见：[CRVideo_CreateUIParams](TypeDefinitions.html#CRVideo_CreateUIParams)'
    }],
    attent: `
> 无论是共享自己的影音还是收看别人共享的影音，都需要创建此对象`
  }
}, {
  interface: "CRVideo_StartPlayMedia",
  description: "开始播放影音",
  detail: {
    content: 'CRVideo_StartPlayMedia(mediaObj,file,locPlay,bPauseWhenFinished)',
    returnVal: '返回播放状态，0未在播放，1播放中',
    callback: '无',
    data: [{
      param: 'mediaObj',
      type: 'MediaContainerObj',
      necessary: '是',
      explain: '封装好的videoUI对象，即需要播放的视频容器'
    }, {
      param: 'file',
      type: 'File',
      necessary: '是',
      explain: '支持File类型文件也支持同源播放地址URL(String)'
    }, {
      param: 'locPlay',
      type: 'Number',
      necessary: '否',
      explain: '是否仅仅本地播放（0：房间内播放，1：本地播放）缺省为0'
    }, {
      param: 'bPauseWhenFinished',
      type: 'Number',
      necessary: '否',
      explain: '是否播放完毕自动暂在再最后一帧（0：播放完自动结束共享，1：播放完暂停在最后一帧，2：自动循环播放）缺省为0'
    }],
    attent: `
> MediaContainerObj 通过调用 [CRVideo_CreatMediaObj](#CRVideo_CreatMediaObj) 接口创建`
  }
}, {
  interface: "CRVideo_PausePlayMedia",
  description: "暂停或恢复播放影音",
  detail: {
    content: 'CRVideo_PausePlayMedia(bPause)',
    returnVal: '无',
    callback: '无',
    data: [{
      param: 'bPause',
      type: 'Bool',
      necessary: '是',
      explain: 'ture为暂停，false为播放'
    }]
  }
}, {
  interface: "CRVideo_StopPlayMedia",
  description: "停止播放影音及共享",
  detail: {
    content: 'CRVideo_StopPlayMedia()',
    returnVal: '无',
    callback: '无',
    attent: `
> 房间内其他人将会收到 [CRVideo_NotifyMediaStop](#CRVideo_NotifyMediaStop) 通知`
  }
}, {
  interface: "CRVideo_SetMediaplaypos",
  description: "设置播放进度",
  detail: {
    content: 'CRVideo_SetMediaplaypos(setPTS)',
    returnVal: '无',
    callback: '无',
    data: [{
      param: 'setPTS',
      type: 'Number',
      necessary: '是',
      explain: '设置播放位置，单位：毫秒'
    }]
  }
}, {
  interface: "CRVideo_SetMediaVolume",
  description: "设置本地媒体音量",
  detail: {
    content: 'CRVideo_SetMediaVolume(level)',
    returnVal: '无',
    callback: '无',
    data: [{
      param: 'level',
      type: 'Number',
      necessary: '是',
      explain: '本地音量 0-100'
    }]
  }
  // }, {
  //   interface: "CRVideo_SetMediacfg",
  //   description: "配置远程影音共享时，图像质量参数"
  // }, {
  //   interface: "CRVideo_GetMediacfg",
  //   description: "获取影音共享的图像质量参数"
  // },{
  //   interface: "CRVideo_GetAllFilesInMediaPath",
  //   description: "影音文件列表"
}, {
  interface: "CRVideo_Getmediainfo",
  description: "获取影音播放信息",
  detail: {
    content: 'CRVideo_Getmediainfo(UID)',
    returnVal: '返回影音信息，详见：[CRVideo_MediaInfoObj](TypeDefinitions.html#CRVideo_MediaInfoObj)',
    callback: '无',
    data: [commonUID]
  }
}, {
  interface: "CRVideo_GetMediaImg",
  description: "获取影音图像数据",
  detail: {
    content: 'CRVideo_Getmediaimg(UID,format)',
    returnVal: '当前播放的一帧图片',
    callback: '无',
    data: [commonUID, {
      param: 'format',
      type: 'String',
      necessary: '否',
      explain: '图片格式，缺省为jpg'
    }]
  }
}, {
  method: "回调",
  interface: "CRVideo_NotifyMediaOpened",
  description: "通知，影音文件已打开",
  detail: {
    content: 'CRVideo_NotifyMediaOpened.callback = function(){}',
    type: 'callback',
  }
}, {
  interface: "CRVideo_NotifyMediaStart",
  description: "通知，影音开始播放",
  detail: {
    content: 'CRVideo_NotifyMediaStart.callback = function(UID){}',
    type: 'callback',
    callbackParam: [commonUID]
  }
}, {
  interface: "CRVideo_NotifyMediaStop",
  description: "通知，影音播放停止",
  detail: {
    content: 'CRVideo_NotifyMediaStop.callback = function(){}', // 参数和web不一致
    type: 'callback',
  }
}, {
  interface: "CRVideo_NotifyMediaPause",
  description: "通知，影音播放暂停/取消暂停",
  detail: {
    content: 'CRVideo_NotifyMediaPause.callback = function(UID,status){}',
    type: 'callback',
    callbackParam: [commonUID, {
      param: 'status',
      type: 'Number',
      explain: '是否暂停， 0：播放中 1：暂停中 '
    }]
  }
}, {
  interface: "CRVideo_NotifyPlayPosSetted",
  description: "通知，影音播放位置更新",
  detail: {
    content: 'CRVideo_NotifyPlayPosSetted.callback = function(setPTS){}',
    type: 'callback',
    callbackParam: [{
      param: 'setPTS',
      type: 'Number',
      explain: '新的播放位置，单位：毫秒'
    }]
  }
}]