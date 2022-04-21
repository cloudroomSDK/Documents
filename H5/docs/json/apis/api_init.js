// 初始化、反初始化
module.exports = [{
  method: '主调',
  interface: 'CRVideo_Init',
  description: 'SDK初始化',
  detail: {
    content: 'CRVideo_Init(SDKParams).then(res=>{},err=>{})',
    returnVal: '返回一个promise对象，成功返回resolve，失败返回reject [错误码](Constant.html#CRVideo_ERR_DEF)',
    callback: '无',
    data: [{
      param: 'SDKParams',
      type: 'Object',
      necessary: '否',
      explain: 'SDK参数对象，详见：[CRVideo_SDKParams](TypeDefinitions.html#CRVideo_SDKParams)，可以不传，则全部为默认值'
    }],
    example: ` 
      // 传一个对象，对象内设置具体参数（只传需要修改的参数，不传的参数为缺省值）
      CRVideo_Init({
          isCallSer: false,
          MSProtocol: 1,
          videoSendBW: 1024,
          //...
      }).then(res => {
          //初始化成功后的处理...
      }, err => {
          //初始化失败后的处理...
      })
  
      //或者不传这个对象，全部为缺省值
      CRVideo_Init().then(res => {
          //初始化成功后的处理...
      }, err => {
          //初始化失败后的处理...
      })

      // 注：.then(callback1,callback2)方法中的参数为两个回调函数
      // 第一个参数为初始化成功的回调函数，第二个参数为初始化失败的回调函数
      // 可以通过错误码判断初始化失败的原因
        `,
    attent: `
> 注意:
> 程序开始时init，程序结束时uninit，整个程序的生命周期中只进行一次初始化和反初始化。
> webRTC默认不支持http协议（chrome78+已支持file:///协议），只能通过配置127.0.0.1或locallhost访问，或通过配置Chrome调试模式绕过此限制。`
  },
}, {
  interface: 'CRVideo_Uninit',
  description: 'SDK反初始化',
  detail: {
    content: 'CRVideo_Uninit()',
    returnVal: '无',
    callback: '无'
  }
}]