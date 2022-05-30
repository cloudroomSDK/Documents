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
  interface: "CRVideo_CreateCloudMixer",
  description: "创建云端混图器",
  detail: {
    content: `CRVideo_CreateCloudMixer`,
    returnVal: '云端混图器ID',
    data: [{
      param: 'cfg',
      type: 'Object',
      necessary: '是',
      explain: '云端混图器配置，josn格式，参见[CRVideo_CloudMixerCfgObj](TypeDefinitions.html#CRVideo_CloudMixerCfgObj)'
    }],
    resParam: [commonErrorCode],
    errParam: commonPromiseReject,
    attent: `
  > 可以开启多个云端混图器，具体个数和企业购买的授权相关；
  开启云端混图器后，房间内所有人都将收到[CRVideo_CloudMixerStateChanged](#CRVideo_CloudMixerStateChanged)通知状态值为1；
  云端混图器部署有少量耗时，如果在部署过程遇到异常，将收到[CRVideo_CreateCloudMixerFailed](#CRVideo_CreateCloudMixerFailed)回调；
  云端混图器启动完成并进入录制或推流状态时，将收到[CRVideo_CloudMixerStateChanged](#CRVideo_CloudMixerStateChanged)通知状态值为2；
  开启云端混图器在进入工作中的状态后，可以通过[CRVideo_UpdateCloudMixerContent](#CRVideo_UpdateCloudMixerContent)更新内容；
  混图器如果在工作中遇到异常而停止时，将收到[CRVideo_CloudMixerStateChanged](#CRVideo_CloudMixerStateChanged)通知，状态值为0，并携带错误原因；`,
  }
}, {
  interface: "CRVideo_UpdateCloudMixerContent",
  description: "更新云端混图器",
  detail: {
    content: `CRVideo_UpdateCloudMixerContent(mixerID, cfg)${promiseCallback}`,
    returnVal: commonReturnPromise,
    data: [{
      param: 'mixerID',
      type: 'String',
      necessary: '是',
      explain: '混图器ID, 参见[CRVideo_CreateCloudMixer](#CRVideo_CreateCloudMixer)'
    }, {
      param: 'cfg',
      type: 'Object',
      necessary: '是',
      explain: '混图器内容配置，参见[CRVideo_CloudMixerCfgObj](TypeDefinitions.html#CRVideo_CloudMixerCfgObj)'
    }],
    resParam: [commonErrorCode],
    errParam: commonPromiseReject,
    attent: `
> 更新混图器内容时，只能更新内容和布局，不能更改混图器规格、输出目标；
更新混图器内容时，房间内所有人都将收到[CRVideo_CloudMixerInfoChanged](#CRVideo_CloudMixerInfoChanged)通知；`
  }
}, {
  interface: "CRVideo_DestroyCloudMixer",
  description: "消毁云端混图器",
  detail: {
    content: `CRVideo_DestroyCloudMixer(mixerID)${promiseCallback}`,
    returnVal: commonReturnPromise,
    data: [{
      param: 'mixerID',
      type: 'String',
      necessary: '是',
      explain: '混图器ID, 参见[CRVideo_CreateCloudMixer](#CRVideo_CreateCloudMixer)'
    }],
    resParam: [commonErrorCode],
    errParam: commonPromiseReject,
    attent: `
> 消毁云端混图器时，房间内所有人都将收到[CRVideo_CloudMixerStateChanged](#CRVideo_CloudMixerStateChanged)通知,状态状态值为0
正常情况下房间内所有人也会收到[CRVideo_CloudMixerOutputInfoChanged](#CRVideo_CloudMixerOutputInfoChanged)通知`
  }
}, {
  interface: "CRVideo_GetAllCloudMixerInfo",
  description: "得到所有云端混图器信息",
  detail: {
    content: 'CRVideo_GetAllCloudMixerInfo()',
    returnVal: '[CRVideo_CloudMixerInfo](TypeDefinitions.html#CRVideo_CloudMixerInfo)[]',
    callback: '无',
  }
}, {
  interface: "CRVideo_GetCloudMixerInfo",
  description: "得到云端混图器信息",
  detail: {
    content: 'CRVideo_GetCloudMixerInfo(mixerID)',
    returnVal: '[CRVideo_CloudMixerInfo](TypeDefinitions.html#CRVideo_CloudMixerInfo)',
    data: [{
      param: 'mixerID',
      type: 'String',
      necessary: '是',
      explain: '混图器ID, 参见[CRVideo_CreateCloudMixer](#CRVideo_CreateCloudMixer)'
    }],
  }
}, {
  method: "回调",
  interface: "CRVideo_CreateCloudMixerFailed",
  description: "通知，启动云端录制、云端直播失败",
  detail: {
    content: 'CRVideo_CreateCloudMixerFailed.callback = function(mixerID, sdkErr){}',
    type: 'callback',
    callbackParam: [{
      param: 'mixerID',
      type: 'String',
      explain: '混图器ID, 参见[CRVideo_CreateCloudMixer](#CRVideo_CreateCloudMixer)'
    }, commonSDKErr]
  }
},{
  interface: "CRVideo_CloudMixerStateChanged",
  description: "通知，云端录制、云端直播状态变化",
  detail: {
    content: 'CRVideo_CloudMixerStateChanged.callback = function(mixerID, state, exParam, operUserID){}',
    type: 'callback',
    callbackParam: [{
      param: 'mixerID',
      type: 'String',
      explain: '混图器ID, 参见[CRVideo_CreateCloudMixer](#CRVideo_CreateCloudMixer)'
    }, {
      param: 'state',
      type: 'Number',
      explain: '录制状态'
    }, {
      param: 'exParam',
      type: 'Object',
      explain: `state为0时，包含err字段(取值为ERR_DEF), errDesc字段；
      state为2时，内容参见[CRVideo_CloudMixerCfgObj](TypeDefinitions.html#CRVideo_CloudMixerCfgObj)`
    }, {
      param: 'operUserID',
      type: 'String',
      explain: '操作者用户ID'
    }]
  }
}, {
  interface: "CRVideo_CloudMixerOutputInfoChanged",
  description: "通知，云端录制文件、云端直播输出变化",
  detail: {
    content: 'CRVideo_CloudMixerOutputInfoChanged.callback = function(mixerID, outputInfo){}',
    type: 'callback',
    callbackParam: [{
      param: 'mixerID',
      type: 'String',
      explain: '混图器ID, 参见[CRVideo_CreateCloudMixer](#CRVideo_CreateCloudMixer)'
    }, {
      param: 'outputInfo',
      type: 'Object',
      explain: '请参见[CRVideo_CloudMixerOutputInfo](TypeDefinitions.html#CRVideo_CloudMixerOutputInfo)'
    }]
  }
}, {
  interface: "CRVideo_CloudMixerInfoChanged",
  description: "通知，云端录制、云端直播配置变化",
  detail: {
    content: 'CRVideo_CloudMixerInfoChanged.callback = function(mixerID){}',
    type: 'callback',
    callbackParam: [{
      param: 'mixerID',
      type: 'String',
      explain: '混图器ID, 参见[CRVideo_CreateCloudMixer](#CRVideo_CreateCloudMixer)'
    }],
    attent: `
> 可调用：[CRVideo_GetCloudMixerInfo](#CRVideo_GetCloudMixerInfo)获取相关信息`
  }
}]