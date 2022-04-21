const {
  commonCookie,
  commonMeetId,
  commonSDKErr,
  commonUID,
  commonQueId,
  commonQueUser,
  commonCallID,
  commonusrExtDat,
  commonMeetInfoObj
} = require('./commonPassiveKey');

// 透明通道、呼叫排队
module.exports = [{
  method: "主调",
  interface: "CRVideo_SendCmd",
  description: "发送点对点消息",
  detail: {
    content: 'CRVideo_SendCmd(UID,data,cookie)',
    returnVal: 'uuid，本次发送任务的ID',
    callback: '[CRVideo_SendCmdRslt.callback](#CRVideo_SendCmdRslt)',
    data: [{
      param: 'UID',
      type: 'String',
      necessary: '是',
      explain: '发送目标用户ID'
    }, {
      param: 'data',
      type: 'String',
      necessary: '是',
      explain: '要发送的数据，字符串(最大64KB)'
    }, commonCookie],
    attent: `
> 发送点对点消息不需要进入房间，但是需要登录呼叫系统，即 [init](#CRVideo_Init) 时 isCallSer 参数的值不能为false
> 可以通过此接口发送自定义的json格式消息来实现一些自定义功能`,
  }
}, {
  interface: "CRVideo_SendBuffer",
  description: "发送大块数据",
  detail: {
    content: 'CRVideo_SendBuffer(UID,data,cookie)',
    returnVal: 'uuid，本次发送任务的ID',
    callback: '[CRVideo_SendBufferRslt.callback](#CRVideo_SendBufferRslt)',
    data: [{
      param: 'UID',
      type: 'String',
      necessary: '是',
      explain: '发送目标用户ID'
    }, {
      param: 'data',
      type: 'String',
      necessary: '是',
      explain: '要发送的数据(最大100MB)'
    }, commonCookie],
    attent: `
> 发送进度通知 [CRVideo_SendProgress.callback](#CRVideo_SendProgress)
> 发送结果回调 [CRVideo_SendBufferRslt.callback](#CRVideo_SendBufferRslt)`
  }
}, {
  interface: "CRVideo_SendFile",
  description: "发送文件数据",
  detail: {
    content: 'CRVideo_SendFile(UID,File,cookie)',
    returnVal: 'uuid，本次发送任务的ID',
    callback: '[CRVideo_SendFileRslt.callback](#CRVideo_SendFileRslt)',
    data: [{
      param: 'UID',
      type: 'String',
      necessary: '是',
      explain: '发送目标用户ID'
    }, {
      param: 'File',
      type: 'File',
      necessary: '是',
      explain: '要发送的文件对象'
    }, commonCookie],
    attent: `
> 发送进度通知 [CRVideo_SendProgress.callback](#CRVideo_SendProgress)
> 发送结果回调 [CRVideo_SendFileRslt.callback](#CRVideo_SendFileRslt)`
  }
}, {
  interface: "CRVideo_CancelSend",
  description: "取消发送",
  detail: {
    content: 'CRVideo_CancelSend(taskID)',
    returnVal: '无',
    callback: '无',
    data: [{
      param: 'taskID',
      type: 'Number',
      necessary: '是',
      explain: '要取消发送的任务ID'
    }],
  }
}, {
  method: "回调",
  interface: "CRVideo_SendCmdRslt",
  description: "回调，发送点对点消息的结果",
  detail: {
    content: 'CRVideo_SendCmdRslt.callback = function(taskID,sdkErr,cookie){}',
    type: 'callback',
    callbackParam: [{
      param: 'taskID',
      type: 'String',
      explain: '发送任务id'
    }, commonSDKErr, commonCookie]
  }
}, {
  interface: "CRVideo_SendBufferRslt",
  description: "回调，发送大块数据的结果",
  detail: {
    content: 'CRVideo_SendBufferRslt.callback = function(taskID,sdkErr,cookie){}',
    type: 'callback',
    callbackParam: [{
      param: 'taskID',
      type: 'String',
      explain: '发送任务id'
    }, commonSDKErr, commonCookie]
  }
}, {
  interface: "CRVideo_SendFileRslt",
  description: "回调，发送文件的结果",
  detail: {
    content: 'CRVideo_SendFileRslt.callback = function(taskID,sdkErr,cookie){}',
    type: 'callback',
    callbackParam: [{
      param: 'taskID',
      type: 'String',
      necessary: '是',
      explain: '发送任务id'
    }, commonSDKErr, commonCookie]
  }
}, {
  interface: "CRVideo_SendProgress",
  description: "通知，当前发送进度",
  detail: {
    content: 'CRVideo_SendProgress.callback = function(taskID,sendedLenth,totalLenth,cookie){}',
    type: 'callback',
    callbackParam: [{
      param: 'taskID',
      type: 'String',
      explain: '发送任务id'
    }, {
      param: 'sendedLenth',
      type: 'Number',
      explain: '已发送的数据长度'
    }, {
      param: 'totalLenth',
      type: 'Number',
      explain: '需要发送的总长度'
    }, commonCookie]
  }
}, {
  interface: "CRVideo_NotifyCmdData",
  description: "通知，收到点对点消息",
  detail: {
    content: 'CRVideo_NotifyCmdData.callback = function(UID,data){}',
    type: 'callback',
    callbackParam: [{
      param: 'UID',
      type: 'String',
      explain: '消息来源用户ID'
    }, {
      param: 'data',
      type: 'String',
      explain: '收到的数据'
    }]
  }
}, {
  interface: "CRVideo_NotifyBufferData",
  description: "通知，收到大块数据",
  detail: {
    content: 'CRVideo_NotifyBufferData.callback = function(UID,data){}',
    type: 'callback',
    callbackParam: [{
      param: 'UID',
      type: 'String',
      explain: '数据来源用户ID'
    }, {
      param: 'data',
      type: 'String',
      explain: '收到的数据'
    }]
  }
}, {
  interface: "CRVideo_NotifyFileData",
  description: "通知，收到文件数据",
  detail: {
    content: 'CRVideo_NotifyFileData.callback = function(UID,fileBuffer,fileName){}',
    type: 'callback',
    callbackParam: [{
      param: 'UID',
      type: 'String',
      explain: '文件来源用户ID'
    }, {
      param: 'fileBuffer',
      type: 'ArrayBuffer',
      explain: '收到的文件数据， ArrayBuffer'
    }, {
      param: 'fileName',
      type: 'String',
      explain: '收到的文件文件名'
    }],
    attent: `
> 收到的文件数据为ArrayBuffer格式，需要业务层根据需要转成url下载`,
    example: `
    // 将ArrayBuffer转成url并借助a标签自动下载
    const blob = new Blob([fileBuffer]);
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    `
  }
}]