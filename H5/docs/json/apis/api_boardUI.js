const {
    commonUID,
    commonBoardID
} = require('./commonPassiveKey');

module.exports = [{
    isUIObject: true,
    method: 'CRVideo_BoardUIObj',
    interface: 'handler',
    description: '获取白板UI组件的Dom对象',
    id: 'CRVideo_BoardUIObj_handler',
    detail: {
        content: 'CRVideo_BoardUIObj.handler()',
        returnVal: '返回白板UI组件的Dom对象（div）',
    }
}, {
    interface: 'setCurBoardPage',
    description: '设置该组件上要显示的白板页',
    id: 'CRVideo_BoardUIObj_setCurBoardPage',
    detail: {
        content: 'CRVideo_BoardUIObj.setCurBoardPage(boardID,pageNo)',
        returnVal: '无',
        data: [commonBoardID, {
            param: 'pageNo',
            type: 'Number',
            necessary: '是',
            explain: '白板页码'
        }]
    }
}, {
    interface: 'isScaledContents',
    description: '设置（查询）当前组件是否内容允许缩放',
    id: 'CRVideo_BoardUIObj_isScaledContents',
    detail: {
        content: 'CRVideo_BoardUIObj.isScaledContents(bool)',
        returnVal: '不传参时返回 true/false',
        data: [{
            param: 'bool',
            type: 'Bool',
            necessary: '否',
            explain: '当前组件是否内容允许缩放'
        }]
    }
}, {
    interface: 'setTitleStyle',
    description: '设置当前组件的标题样式',
    id: 'CRVideo_BoardUIObj_setTitleStyle',
    detail: {
        content: 'CRVideo_BoardUIObj.setTitleStyle(style)',
        returnVal: '无',
        data: [{
            param: 'style',
            type: 'Object',
            necessary: '是',
            explain: '当前组件的标题的css样式对象'
        }],
    }
}, {
    interface: 'setBoardStyle',
    description: '设置当前组件的canvas样式',
    id: 'CRVideo_BoardUIObj_setBoardStyle',
    detail: {
        content: 'CRVideo_BoardUIObj.setBoardStyle(style)',
        returnVal: '无',
        data: [{
            param: 'style',
            type: 'Object',
            necessary: '是',
            explain: '当前组件的canvas的css样式对象'
        }],
    }
}, {
    interface: 'setPen',
    description: '设置当前组件的画笔样式',
    id: 'CRVideo_BoardUIObj_setPen',
    detail: {
        content: 'CRVideo_BoardUIObj.setPen(CRVideo_BoardPenOptions)',
        returnVal: '无',
        data: [{
            param: 'CRVideo_BoardPenOptions',
            type: 'Object',
            necessary: '是',
            explain: '白板UI组件画笔配置对象，详见：[CRVideo_BoardPenOptions](TypeDefinitions.html#CRVideo_BoardPenOptions)'
        }],
    }
}, {
    interface: 'undo',
    description: '撤销一笔',
    id: 'CRVideo_BoardUIObj_undo',
    detail: {
        content: 'CRVideo_BoardUIObj.undo()',
        returnVal: '无',
    }
}, {
    interface: 'redo',
    description: '恢复一笔',
    id: 'CRVideo_BoardUIObj_redo',
    detail: {
        content: 'CRVideo_BoardUIObj.redo()',
        returnVal: '无',
    }
}, {
    interface: 'clear',
    description: '清空组件',
    id: 'CRVideo_BoardUIObj_clear',
    detail: {
        content: 'CRVideo_BoardUIObj.clear()',
        returnVal: '无',
    }
    // }, {
    //     interface: 'addElement',
    //     description: '添加自定义图元（暂不支持）',
    //     id: 'CRVideo_BoardUIObj_addElement',
    //     detail: {
    //         content: 'CRVideo_BoardUIObj.addElement(element)',
    //         returnVal: '无',
    //         data: [{
    //             param: 'element',
    //             type: 'Object',
    //             necessary: '是',
    //             explain: '图元对象'
    //         }],
    //     }
    // }, {
    //     interface: 'removeElement',
    //     description: '移除指定图元（暂不支持）',
    //     id: 'CRVideo_BoardUIObj_removeElement',
    //     detail: {
    //         content: 'CRVideo_BoardUIObj.removeElement(eIDs)',
    //         returnVal: '无',
    //         data: [{
    //             param: 'eIDs',
    //             type: 'Array',
    //             necessary: '是',
    //             explain: '图元ID集合'
    //         }],
    //     }
}, {
    interface: 'importImg',
    description: '导入背景图片',
    id: 'CRVideo_BoardUIObj_importImg',
    detail: {
        content: 'CRVideo_BoardUIObj.importImg(Image)',
        returnVal: '无',
        data: [{
            param: 'Image',
            type: 'Object',
            necessary: '是',
            explain: 'Image对象，通过new Image()获得，并设置其src属性后在onload事件中调用此方法导入'
        }],
        example: `
        const img = new Image();
        img.src = 'xxx.png'; // 支持在线url、本地相对路径、URL对象或base64URL
        img.onload = (e) => {
            CRVideo_BoardUIObj.importImg(img);
        }
        `
    }
}, {
    interface: 'getCanvasElement',
    description: '导入背景图片',
    id: 'CRVideo_BoardUIObj_getCanvasElement',
    detail: {
        content: 'CRVideo_BoardUIObj.getCanvasElement()',
        returnVal: '返回白板容器中的canvas组件',
    }
}]