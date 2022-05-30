const {
  commonCookie,
  commonMeetInfoObj,
  commonMeetId,
  commonSDKErr,
  commonUID,
  commonQueId,
  commonQueUser
} = require('./commonPassiveKey');

// 音频管理
module.exports = [{
  method: "主调",
  interface: "CRVideo_GetAudioMicNames",
  description: "获取本地麦克风设备列表",
  detail: {
    content: 'CRVideo_GetAudioMicNames()',
    returnVal: '返回麦克风设备列表Array，如：[MicInfoObj1, MicInfoObj2, ...]，详见：[CRVideo_MicInfoObj](TypeDefinitions.html#CRVideo_MicInfoObj)',
    callback: '无',
  }
}, {
  interface: "CRVideo_GetAudioSpkNames",
  description: "获取本地扬声器设备列表",
  detail: {
    content: 'CRVideo_GetAudioSpkNames()',
    returnVal: '返回扬声器设备列表Array，如：[SpeakerInfoObj1, SpeakerInfoObj2, ...]，详见：[CRVideo_SpeakerInfoObj](TypeDefinitions.html#CRVideo_SpeakerInfoObj)',
    callback: '无',
  }
  // CRVideo_StartGetAudioPCM 开始获取语音pcm数据
  // CRVideo_StopGetAudioPCM 停止获取语音pcm数据
}, {
  interface: "CRVideo_SetAudioCfg",
  description: "设置本地音频参数",
  detail: {
    content: 'CRVideo_SetAudioCfg(AudioCfg)',
    returnVal: '无',
    callback: '无',
    data: [{
      param: 'AudioCfg',
      type: 'Object',
      necessary: '是',
      explain: '本地音频配置，详细介绍见类型定义：[CRVideo_AudioCfg](TypeDefinitions.html#CRVideo_AudioCfg)'
    }]
  }
}, {
  interface: "CRVideo_GetAudioCfg",
  description: "获取本地音频参数",
  detail: {
    content: 'CRVideo_GetAudioCfg()',
    returnVal: '返回本地音频参数对象：[CRVideo_AudioCfg](TypeDefinitions.html#CRVideo_AudioCfg)',
    callback: '无',
  }
}, {
  interface: "CRVideo_GetMicEnergy",
  description: "获取指定成员的麦克风声音大小",
  detail: {
    content: 'CRVideo_GetMicEnergy(UID)',
    returnVal: '返回该成员当前麦克风声音大小，0-10',
    callback: '无',
    data: [{
      commonUID
    }]
  }
}, {
  interface: "CRVideo_OpenMic",
  description: "打开指定成员的麦克风",
  detail: {
    content: 'CRVideo_OpenMic(UID)',
    returnVal: '无',
    callback: '无',
    data: [commonUID],
    attent: `
> 打开自已的麦克风时，先会进入到AOPENING状态，等服务器处理后才会进入AOPEN状态，此时说话才能被采集到`
  }
}, {
  interface: "CRVideo_CloseMic",
  description: "关闭指定成员的麦克风",
  detail: {
    content: 'CRVideo_CloseMic(UID)',
    returnVal: '无',
    callback: '无',
    data: [commonUID],
    attent: `
> 关麦操作是立即生效的，本地会立即停止采集`
  }
}, {
  interface: "CRVideo_GetAudioStatus",
  description: "获取指定成员的麦克风状态",
  detail: {
    content: 'CRVideo_GetAudioStatus(UID)',
    returnVal: '返回该成员当前的麦克风状态：[CRVideo_ASTATUS](Constant.html#CRVideo_ASTATUS)',
    callback: '无',
    data: [commonUID]
  }
}, {
  interface: "CRVideo_SetAllAudioClose",
  description: "关闭房间内所有人麦克风",
  detail: {
    content: 'CRVideo_SetAllAudioClose()',
    returnVal: '无',
    callback: '无',
  }
}, {
  interface: "CRVideo_PauseSpeaker",
  description: "暂停播放房间内通话声音（静音）",
  detail: {
    content: 'CRVideo_PauseSpeaker()',
    returnVal: '无',
    callback: '无',
  }
}, {
  interface: "CRVideo_PlaySpeaker",
  description: "恢复播放房间内通话声音",
  detail: {
    content: 'CRVideo_PlaySpeaker()',
    returnVal: '无',
    callback: '无',
  }
}, {
  interface: "CRVideo_StartGetAudioPCM",
  description: "开始获取语音PCM数据",
  detail: {
    content: 'CRVideo_StartGetAudioPCM(aSide, getType, jsonParam)',
    returnVal: '返回结果，0表示开启成功，其他数值表示相关 [错误码](Constant.html#CRVideo_ERR_DEF)',
    callback: 'getType为1时，回调：[CRVideo_NotifyAudioPCMDat.callback](#CRVideo_NotifyAudioPCMDat)',
    data: [{
      param: 'aSide',
      type: 'Number',
      necessary: '是',
      explain: 'PCM数据的来源，0：麦克风，1：扬声器'
    }, {
      param: 'getType',
      type: 'Number',
      necessary: '是',
      explain: 'PCM数据的获取方式，0：回调方式,1：文件下载方式'
    }, {
      param: 'jsonParam',
      type: 'Object',
      necessary: '是',
      explain: '当getType为0时，该参数对象需要包含eachTime（表示每次回调的间隔时间）或eachSize（表示每次回调的数据大小）；当getType为1时，该参数对象需要包含fileName（表示保存PCM数据的文件名）'
    }],
    attent: `
> getType为0时，jsonParam参数对象中eachTime和eachSize二选一必传，否则会开启失败
> getType为1时，jsonParam参数对象中fileName必传，否则会开启失败
> getType为1时，无回调，停止获取时，会自动下载PCM格式的文件
> 可以同时开启aSide为0和aSide为1的两个录制，但每种aSide不能重复开启`
  }
}, {
  interface: "CRVideo_StopGetAudioPCM",
  description: "停止获取语音PCM数据",
  detail: {
    content: 'CRVideo_StopGetAudioPCM(aSide)',
    returnVal: '无',
    callback: '无',
    data: [{
      param: 'aSide',
      type: 'Number',
      necessary: '是',
      explain: 'PCM数据的来源，0：麦克风，1：扬声器'
    }],
    attent: `
> getType为1时，调用此接口停止获取，会自动下载PCM格式的文件，文件保存位置为浏览器默认下载目录
> 若同时启动了aSide为0和aSide为1的两个录制，则需要分别停止`
  }
}, {
  method: "回调",
  // CRVideo_AudioDevChanged	麦克风设备变化
  interface: "CRVideo_AudioStatusChanged",
  description: "通知，成员麦克风状态变化",
  detail: {
    content: 'CRVideo_AudioStatusChanged.callback = function(UID,oldStatus,newStatus){}',
    type: 'callback',
    callbackParam: [commonUID, {
      param: 'oldStatus',
      type: 'Number',
      explain: '旧的麦克风状态，详见：[CRVideo_ASTATUS](Constant.html#CRVideo_ASTATUS)'
    }, {
        param: 'newStatus',
        type: 'Number',
        explain: '新的麦克风状态，详见：[CRVideo_ASTATUS](Constant.html#CRVideo_ASTATUS)'
      }]
  }
}, {
  interface: "CRVideo_MicEnergyUpdate",
  description: "通知，成员麦克风声音能量变化",
  detail: {
    content: 'CRVideo_MicEnergyUpdate.callback = function(UID,oldLevel,newLevel){}',
    type: 'callback',
    callbackParam: [commonUID, {
      param: 'oldLevel',
      type: 'Number',
      explain: '原来的说话声音强度等级，0-10'
    }, {
        param: 'newLevel',
        type: 'Number',
        explain: '现在的说话声音强度等级，0-10'
      }]
  }
}, {
  interface: "CRVideo_NotifyAudioStream",
  description: "通知，获取到webRTC语音流",
  detail: {
    content: 'CRVideo_NotifyAudioStream.callback = function(aSide, stream){}',
    type: 'callback',
    callbackParam: [{
      param: 'aSide',
      type: 'Number',
      explain: '是哪一端的语音流，0：本端；1：远端'
    }, {
      param: 'stream',
      type: 'Object',
      explain: 'webRTC语音流stream'
    }],
    attent: `
> webRTC语音流stream，可以通过设置audio标签的srcObject属性来播放，也可以通过web audio api来进行二次处理`
  }
}, {
  interface: "CRVideo_OpenMicFailed",
  description: "通知，打开本地麦克风失败",
  detail: {
    content: 'CRVideo_OpenMicFailed.callback = function(errDesc){}',
    type: 'callback',
    callbackParam: [{
      param: 'errDesc',
      type: 'String',
      explain: '错误描述'
    }],
    attent: `
> 打开麦克风是异步的，所以SDK将以通知的方式通知业务层失败的情形
> 打开麦克风失败可能的原因有：设备被占用、用户未授权访问、硬件设备发生错误等`
  },
}, {
  interface: "CRVideo_NotifyAudioPCMDat",
  description: "通知，获取到语音PCM数据",
  detail: {
    content: 'CRVideo_NotifyAudioPCMDat.callback = function(aSide, PCMDat){}',
    type: 'callback',
    callbackParam: [{
      param: 'aSide',
      type: 'Number',
      explain: '数据来源，0：麦克风，1：扬声器'
    }, {
      param: 'PCMDat',
      type: 'ArrayBuffer',
      explain: '语音PCM数据'
    }],
    attent: `
> 当使用回调方式获取语音PCM时，会触发此回调接口
> 此接口将根据开启录制时设置的eachSize或eachTime自动触发
> 业务层从此接口获取的pcm数据，可以自行添加到数组中。将数组转成blob数据后，可使用audio标签进行播放或下载`
  },
}]