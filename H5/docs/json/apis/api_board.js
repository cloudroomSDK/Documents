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

// 房间成员管理
module.exports = [{
  method: '主调',
  interface: 'CRVideo_Creatboard',
  description: '创建白板',
  detail: {
    content: `CRVideo_Creatboard(title,width,height,pageCount)${promiseCallback}`,
    returnVal: commonReturnPromise,
    data: [{
      param: 'title',
      type: 'String',
      necessary: '是',
      explain: '白板名称',
    }, {
      param: 'width',
      type: 'Number',
      necessary: '是',
      explain: '白板宽度',
    }, {
      param: 'height',
      type: 'Number',
      necessary: '是',
      explain: '白板高度',
    }, {
      param: 'pageCount',
      type: 'Number',
      necessary: '是',
      explain: '白板页数（一般空白板1页，文档白板为实际页数）',
    }],
    resParam: [commonErrorCode, commonBoardID],
    errParam: commonPromiseReject
  }
}, {
  interface: 'CRVideo_Closeboard',
  description: '关闭白板',
  detail: {
    content: `CRVideo_Closeboard(boardID)${promiseCallback}`,
    returnVal: commonReturnPromise,
    data: [commonBoardID],
    resParam: [commonErrorCode],
    errParam: commonPromiseReject
  }
}, {
  interface: 'CRVideo_SetBoardCurPageNo',
  description: '白板翻页',
  detail: {
    content: `CRVideo_SetBoardCurPageNo(boardID,pageNo)${promiseCallback}`,
    returnVal: commonReturnPromise,
    data: [commonBoardID, {
      param: 'pageNo',
      type: 'Number',
      necessary: '是',
      explain: '白板页码'
    }],
    resParam: [commonErrorCode],
    errParam: commonPromiseReject
  }
}, {
  interface: 'CRVideo_CreateBoardUIObj',
  description: '创建白板UI显示组件（白板容器）',
  detail: {
    content: `CRVideo_CreateBoardUIObj(jsonParams)`,
    returnVal: '[CRVideo_BoardUIObj](#boardUI)',
    data: [{
      param: 'jsonParams',
      type: 'Object',
      necessary: '否',
      explain: '保留参数，非必传'
    }],
  }
}, {
  method: '回调',
  interface: 'CRVideo_NotifyInitBoards',
  description: '通知，初始化白板列表',
  detail: {
    content: 'CRVideo_NotifyInitBoards.callback = function(CRVideo_BoardObjs){}',
    type: 'callback',
    callbackParam: [{
      param: 'CRVideo_BoardObjs',
      type: 'Array',
      explain: '白板对象的集合，详见：[[CRVideo_BoardObj](TypeDefinitions.html#CRVideo_BoardObj), CRVideo_BoardObj, ...]'
    }]
  }
}, {
  interface: 'CRVideo_NotifyCreateBoard',
  description: '通知，创建了新的白板',
  detail: {
    content: 'CRVideo_NotifyCreateBoard.callback = function(CRVideo_BoardObj,UID){}',
    type: 'callback',
    callbackParam: [{
      param: 'CRVideo_BoardObj',
      type: 'Object',
      explain: '白板对象，详见：[CRVideo_BoardObj](TypeDefinitions.html#CRVideo_BoardObj)'
    }, commonUID]
  }
}, {
  interface: 'CRVideo_NotifyCloseBoard',
  description: '通知，关闭某个白板',
  detail: {
    content: 'CRVideo_NotifyCloseBoard.callback = function(boardID,UID){}',
    type: 'callback',
    callbackParam: [commonBoardID, commonUID]
  }
}, {
  interface: 'CRVideo_NotifyBoardCurPageNo',
  description: '通知，白板翻页',
  detail: {
    content: 'CRVideo_NotifyBoardCurPageNo.callback = function(boardID,curPage,pagePos1,pagePos2,UID){}',
    type: 'callback',
    callbackParam: [commonBoardID, {
      param: 'curPage',
      type: 'Number',
      explain: '目标页码'
    }, {
        param: 'pagePos1',
        type: 'Number',
        explain: 'SDK保留参数'
      }, {
        param: 'pagePos2',
        type: 'Number',
        explain: 'SDK保留参数'
      }, commonUID]
  }
}]