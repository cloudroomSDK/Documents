const {
  commonCookie,
  commonMeetInfoObj,
  commonMeetId,
  commonSDKErr,
  commonUID,
  commonBoardID,
  commonQueId,
  commonQueUser,
  commonCallID,
  commonusrExtDat,
  commonErrorCode,
  commonErrorDesc,
  commonReturnPromise,
  commonPromiseReject,
  commonUserID,
  promiseCallback,
} = require('./commonPassiveKey');

// 云端录制
module.exports = [{
  method: "主调",
  interface: "CRVideo_StartSvrMixer",
  description: "开始云端录制、云端直播推流",
  detail: {
    content: `CRVideo_StartSvrMixer(Cfgs,Contents,Outputs)${promiseCallback}`,
    returnVal: commonReturnPromise,
    data: [{
      param: 'Cfgs',
      type: 'Array',
      necessary: '是',
      explain: '服务器混图配置列表，如：[ [CRVideo_MutiMixerCfg](TypeDefinitions.html#CRVideo_MutiMixerCfg), ... ]'
    }, {
      param: 'Contents',
      type: 'Array',
      necessary: '是',
      explain: '服务器混图内容列表，如：[ [CRVideo_MutiMixerContent](TypeDefinitions.html#CRVideo_MutiMixerContent), ... ]'
    }, {
      param: 'Outputs',
      type: 'Array',
      necessary: '是',
      explain: '服务器混图输出列表，如：[ [CRVideo_MutiMixerOutput](TypeDefinitions.html#CRVideo_MutiMixerOutput), ... ]'
    }],
    resParam: [commonErrorCode],
    errParam: commonPromiseReject,
    example: `
    // 正确录制参数格式示例：
    // 以下参数同时包含1.音视频和2.纯音频两个混图器，若只需要录制音视频，则应去掉id为2的混图器；

    // MixerCfgs（多个混图器对象的录制配置参数列表集合，id要和MixerContents及MixerOutputs中的id一一对应）:
    [{
      "id": 1, // 混图器1的录制参数配置
      "streamTypes": 3, // 混图器类型为音视频
      "cfg": {
        "width": 1280,
        "height": 720,
        "frameRate": 15,
        "bitRate": 2000000,
        "defaultQP": 15
      }
    }, {
      "id": 2, // 混图器2的录制参数配置
      "streamTypes": 1, // 混图器类型为纯音频
      "aCfg": {
        "channelType": 1,
        "audioFormat": 1
      }
    }]

    // MixerContents（多个混图器对象的录制内容列表集合，id要和MixerCfgs及MixerOutputs中的id一一对应）:
    [{
      "id": 1, // 混图器1的录制内容
      "content": [{
        "type": 0, // 录一个摄像头的画面
        "left": 0,
        "top": 0,
        "width": 1280,
        "height": 720,
        "param": {
          "camid": "张三.1"
        },
        "keepAspectRatio": 1
      }, {
        "type": 4, // 录一个时间戳
        "left": 35,
        "top": 3,
        "width": 175,
        "height": 32,
        "keepAspectRatio": 1
      }, {
        "type": 7, // 录一个纯文本
        "left": 40,
        "top": 30,
        "param": {
          "text": "<span style='font-size:14px;color:#e21918'>张三</span>"
        }
      }]
    }, {
      "id": 2, // 混图2的录制内容
      "content": [{
        "type": 9, // 录张三的语音
        "param": "张三"
      }]
    }]

    // MixerOutputs（多个混图器对象的录制输出列表集合，id要和MixerCfgs及MixerContents中的id一一对应）:
    [{
      "id": 1, // 混图器1的录制输出
      "output": [{
        "type": 0, // 输出一个录像视频文件
        "filename": "/2020-07-21/张三的录像.mp4"
      }, {
        "type": 1, // 输出一个rtmp协议的直播流
        "liveUrl": "rtmp://pub.cloudroom.com/live/xxxx"
      }]
    }, {
      "id": 2, // 混图器2的录制输出
      "output": [{
        "type": 0, // 输出一个音频文件
        "filename": "/2020-07-21/张三的录音.mp3"
      }]
    }]
    `,
    attent: `
  > 启动云端功能有一定耗时，请关注混图器的状态变化事件 [CRVideo_SvrMixerStateChanged](#CRVideo_SvrMixerStateChanged) 每个输出有私有的状态变化事件 [CRVideo_SvrMixerOutputInfo](#CRVideo_SvrMixerOutputInfo)
  > rCfgs、MutiMixerContents、MixerOutputs 三个参数均为数组，数组中的具体项请参考类型定义
  > 当调用此接口后，会收到混图器状态变化通知，若状态一直为启动中，则可能参数不正确或者录制服务异常，请先检查传参格式是否正确（建议用json工具格式化后与文档对比）`,
  }
}, {
  interface: "CRVideo_UpdateSvrMixerContent",
  description: "更新云端录制、云端直播推流内容",
  detail: {
    content: `CRVideo_UpdateSvrMixerContent(MixerContents)${promiseCallback}`,
    returnVal: commonReturnPromise,
    data: [{
      param: 'MixerContents',
      type: 'Array',
      necessary: '是',
      explain: '服务器混图内容列表，如：[ [CRVideo_MutiMixerContent](TypeDefinitions.html#CRVideo_MutiMixerContent), ... ]'
    }],
    resParam: [commonErrorCode],
    errParam: commonPromiseReject,
    attent: `
> MixerContents 参数格式与 [CRVideo_StartSvrMixer](#CRVideo_StartSvrMixer) 时的 MixerContents 参数格式一致`
  }
}, {
  interface: "CRVideo_StopSvrMixer",
  description: "停止云端录制、云端直播推流",
  detail: {
    content: `CRVideo_StopSvrMixer()${promiseCallback}`,
    returnVal: commonReturnPromise,
    resParam: [commonErrorCode],
    errParam: commonPromiseReject,
    attent: `
> 停止有有一定耗时，请关注混图器的状态变化事件 [CRVideo_SvrMixerStateChanged](#CRVideo_SvrMixerStateChanged) 每个输出有私有的状态变化事件 [CRVideo_SvrMixerOutputInfo](#CRVideo_SvrMixerOutputInfo)`
  }
}, {
  interface: "CRVideo_GetSvrMixerState",
  description: "获取云端录制、云端直播推流状态",
  detail: {
    content: 'CRVideo_GetSvrMixerState()',
    returnVal: '返回当前云端录制、云端直播推流状态（Number），详见：[CRVideo_MIXER_STATE](Constant.html#CRVideo_MIXER_STATE)',
    callback: '无',
  }
}, {
  method: "回调",
  interface: "CRVideo_SvrMixerStateChanged",
  description: "通知，云端录制、云端直播推流状态变化",
  detail: {
    content: 'CRVideo_SvrMixerStateChanged.callback = function(MIXER_STATE,sdkErr){}',
    type: 'callback',
    callbackParam: [{
      param: 'MIXER_STATE',
      type: 'Number',
      explain: '当前云端录制、云端直播推流状态，详见：[CRVideo_MIXER_STATE](Constant.html#CRVideo_MIXER_STATE)'
    }, commonSDKErr]
  }
  // }, {
  //   interface: "CRVideo_SvrMixerCfgChanged",
  //   description: "通知，云端录制、云端直播推流内容变化",
  //   detail: {
  //     content: 'CRVideo_SvrMixerCfgChanged.callback = function(){}',
  //     type: 'callback',
  //   }
}, {
  interface: "CRVideo_SvrMixerOutputInfo",
  description: "通知，云端录制文件、云端直播推流信息变化",
  detail: {
    content: 'CRVideo_SvrMixerOutputInfo.callback = function(MixerOutputInfo){}',
    type: 'callback',
    callbackParam: [{
      param: 'MixerOutputInfo',
      type: 'Object',
      explain: '云端录制文件、云端直播推流输出信息，详见：[CRVideo_MixerOutputInfoObj](TypeDefinitions.html#CRVideo_MixerOutputInfoObj)'
    }],
    attent: `
> 云端录制开启成功并不代表本次录制就一定是成功的，开启云端录制之后，需关注此通知。
> 服务器上一次完整的云端录制包括：启动录制、结束录制、生成录像文件、上传录像文件等过程，最终收到此通知，并且 [state](Constant.html#CRVideo_MIXER_STATE) 为7时，则表示此次录制全部完成`
  }
}]