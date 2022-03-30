// 基础函数
module.exports = [{
  method: '主调',
  interface: 'CRVideo_GetSDKVersion',
  description: '获取当前SDK版本号',
  detail: {
    content: 'CRVideo_GetSDKVersion()',
    returnVal: '当前sdk版本，如："1.8.0.3"',
    callback: '无'
  }
}, {
  interface: 'CRVideo_WriteLog',
  description: '向日志中写入自定义内容',
  detail: {
    content: 'CRVideo_WriteLog(strLog)',
    returnVal: '无',
    callback: '无',
  }
}, {
  interface: 'CRVideo_SetSDKParams',
  description: '设置SDK基础配置',
  detail: {
    content: 'CRVideo_SetSDKParams(SDKParams)',
    returnVal: '无',
    callback: '无',
    data: [{
      param: 'SDKParams',
      type: 'Object',
      necessary: '否',
      explain: 'SDK参数对象，详见：[CRVideo_SDKParams](TypeDefinitions.html#CRVideo_SDKParams)，不传则为默认值'
    }],
  }
}]