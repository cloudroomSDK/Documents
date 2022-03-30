const {
    commonUID
} = require('./commonPassiveKey');

module.exports = [{
    isUIObject: true,
    method: 'CRVideo_VideoObj、CRVideo_ScreenShareObj、CRVideo_MediaObj 公共方法',
    interface: 'id',
    description: '设置/查询组件的独立ID',
    id: 'VideoObj_id',
    detail: {
        content: 'VideoObj.id(ID)',
        returnVal: '不传参时返回改组件的独立ID，默认为空',
        data: [{
            param: 'ID',
            type: 'String',
            necessary: '否',
            explain: '组件独立ID'
        }],
        attent: `
> 非必须调用的方法。不调用此方法设置时，组件没有独立ID，所有调用 [CRVideo_CreatVideoObj](#CRVideo_CreatVideoObj) 方法创建的组件独立ID均为""`,
    }
}, {
    interface: 'height',
    description: '设置/查询组件的高度',
    id: 'VideoObj_height',
    detail: {
        content: 'VideoObj.height(height)',
        returnVal: '不传参时返回组件的高度，单位px',
        data: [{
            param: 'height',
            type: 'String',
            necessary: '否',
            explain: '组件高度，单位px'
        }],
        attent: `
> 非必须调用的方法。不调用此方法设置时，默认为父元素高度的100%`,
        example: `
        VideoObj.height('720px');
        // 或者
        const domHeight = VideoObj.height();
        `
    }
}, {
    interface: 'width',
    description: '设置/查询组件的宽度',
    id: 'VideoObj_width',
    detail: {
        content: 'VideoObj.width(width)',
        returnVal: '不传参时返回组件的宽度，单位px',
        data: [{
            param: 'width',
            type: 'String',
            necessary: '否',
            explain: '组件宽度，单位px'
        }],
        attent: `
> 非必须调用的方法。不调用此方法设置时，默认为父元素宽度的100%`,
        example: `
        VideoObj.width('1280px');
        // 或者
        const domWidth = VideoObj.width();
        `
    }
}, {
    interface: 'left',
    description: '设置/查询组件在父元素中的left位置',
    id: 'VideoObj_left',
    detail: {
        content: 'VideoObj.left(left)',
        returnVal: '不传参时返回组件在父元素中的left位置，单位px',
        data: [{
            param: 'left',
            type: 'String',
            necessary: '否',
            explain: '组件在父元素中的left位置，单位px'
        }],
        attent: `
> 非必须调用的方法。不调用此方法设置时，默认为0`,
        example: `
        VideoObj.left('100px');
        // 或者
        const domLeftPos = VideoObj.left();
        `
    }
}, {
    interface: 'top',
    description: '设置/查询组件在父元素中的top位置',
    id: 'VideoObj_top',
    detail: {
        content: 'VideoObj.top(top)',
        returnVal: '不传参时返回组件在父元素中的top位置，单位px',
        data: [{
            param: 'top',
            type: 'String',
            necessary: '否',
            explain: '组件在父元素中的top位置，单位px'
        }],
        attent: `
> 非必须调用的方法。不调用此方法设置时，默认为0`,
        example: `
        VideoObj.top('100px');
        // 或者
        const domTopPos = VideoObj.top();
        `
    }
}, {
    interface: 'show',
    description: '显示组件',
    id: 'VideoObj_show',
    detail: {
        content: 'VideoObj.show()',
        returnVal: '无',
        attent: `
> 组件默认是显示状态，在组件隐藏后调用此方法重新显示组件。SDK此时会重新订阅该组件所对应的视频流`,
    }
}, {
    interface: 'hide',
    description: '隐藏组件',
    id: 'VideoObj_hide',
    detail: {
        content: 'VideoObj.hide()',
        returnVal: '无',
        attent: `
> 组件默认是显示状态，调用此方法隐藏组件时，SDK会退订组件对应的视频流以节省带宽`,
    }
}, {
    interface: 'handler',
    description: '获取该组件的DOM对象',
    id: 'VideoObj_handler',
    detail: {
        content: 'VideoObj.handler()',
        returnVal: '返回该组件的DOM对象',
        example: `
        $('#userVideo').append(CRVideo_VideoObj.handler());
        // 或者
        $('#userScreen).append(CRVideo_ScreenShareObj.handler());
        `
    }
}, {
    interface: 'setVideo',
    description: '设置组件上要显示的视频画面，订阅视频',
    id: 'VideoObj_setVideo',
    detail: {
        content: 'VideoObj.setVideo(UID,camID)',
        returnVal: '无',
        data: [commonUID, {
            param: 'camID',
            type: 'Number',
            necessary: '否',
            explain: '要显示画面的摄像头ID，-1为默认摄像头。可以不传，缺省为-1（仅组件类型为CRVideo_VideoObj时才需要传此参数）'
        }],
        example: `
        VideoObj.setVideo('Victor');
        `,
        attent: `
> 组件类型为 CRVideo_VideoObj 时，可以传camID参数，为其它类型时不需要此参数`
    }
}, {
    interface: 'clear',
    description: '清除组件中的图像',
    id: 'VideoObj_clear',
    detail: {
        content: 'VideoObj.clear()',
        returnVal: '无',
        attent: `
> 若需要再次显示图像，需重新调用 setVideo() 方法`
    }
}, {
    interface: 'isPicEmpty',
    description: '检查组件当前图像是否为空',
    id: 'VideoObj_isPicEmpty',
    detail: {
        content: 'VideoObj.isPicEmpty()',
        returnVal: '返回组件当前图像是否为空，0为空，1为非空',
    }
}, {
    interface: 'setNickNameStyle',
    description: '设置组件上昵称的显示样式',
    id: 'VideoObj_setNickNameStyle',
    detail: {
        content: 'VideoObj.setNickNameStyle(style)',
        returnVal: '无',
        data: [{
            param: 'style',
            type: 'Object',
            necessary: '是',
            explain: '昵称显示css样式'
        }],
        example: `
    const style = {
        left: "10px",
        top: "10px",
        backgroundColor: "rgba(0, 0, 0, .7)",
        padding: "0 10px",
        borderRadius: "15px",
        display: "block"
    }
    VideoObj.setNickNameStyle(style);
        `
    }
}, {
    interface: 'setNickNameContent',
    description: '设置组件上昵称的显示内容',
    id: 'VideoObj_setNickNameContent',
    detail: {
        content: 'VideoObj.setNickNameContent(content)',
        returnVal: '无',
        data: [{
            param: 'content',
            type: 'String',
            necessary: '是',
            explain: '要显示的昵称内容'
        }],
        attent: `
> 当组件类型为 CRVideo_VideoObj 时，昵称内容默认为该用户的昵称；
> 当组件类型为 CRVideo_ScreenShareObj 时，昵称内容默认为 xxx's screenShare；
> 当组件类型为 CRVideo_MeidaObj 时，昵称内容默认为 xxx's media；
> 若需要显示其他内容，可调用此接口修改`,
        example: `
    VideoObj.setNickNameContent("主持人的屏幕");
        `
    }
}, {
    interface: 'setVisibleNickName',
    description: '设置组件上是否显示昵称',
    id: 'VideoObj_setVisibleNickName',
    detail: {
        content: 'VideoObj.setVisibleNickName(isVisible)',
        returnVal: '无',
        data: [{
            param: 'isVisible',
            type: 'Bool',
            necessary: '是',
            explain: '是否显示昵称，true：显示昵称，false：隐藏昵称'
        }],
        example: `
    VideoObj.setVisibleNickName(true);
        `
    }
}, {
    interface: 'getVisibleNickName',
    description: '获取组件当前是否显示昵称',
    id: 'VideoObj_getVisibleNickName',
    detail: {
        content: 'VideoObj.getVisibleNickName()',
        returnVal: '返回组件当前是否显示昵称，true：显示昵称，false：隐藏昵称',
    }
}, {
    interface: 'dblClickFullScreen',
    description: '设置/查询组件是否支持双击全屏',
    id: 'VideoObj_dblClickFullScreen',
    detail: {
        content: 'VideoObj.dblClickFullScreen(bool)',
        returnVal: '不传参时返回组件是否支持双击全屏',
        data: [{
            param: 'bool',
            type: 'Bool',
            necessary: '否',
            explain: '是否显示支持双击全屏，true：支持，false：不支持'
        }]
    }
}, {
    interface: 'savePic',
    description: '保存组件当前显示的一帧画面为图片文件',
    id: 'VideoObj_savePic',
    detail: {
        content: 'VideoObj.savePic(fileName)',
        returnVal: '无',
        data: [{
            param: 'fileName',
            type: 'String',
            necessary: '是',
            explain: '保存的图片文件名，如：123.png'
        }],
        attent: `
> 调用此接口后，会自动触发浏览器的下载，图片将以下载的方式保存到本地，下载路径由用户行为决定，无法指定
> 支持常见的图片格式，如：jpg、jpeg、png、bmp、gif 等
> 组件上有视频画面时才可以调用此方法，否则SDK不会有任何响应`,
        example: `
        VideoObj.savePic('123.png');
        `
    }
}, {
    interface: 'savePicToBase64',
    description: '保存组件当前显示的一帧画面为base64数据',
    id: 'VideoObj_savePicToBase64',
    detail: {
        content: 'VideoObj.savePicToBase64(format)',
        returnVal: '返回当前一帧画面的base64数据',
        data: [{
            param: 'format',
            type: 'String',
            necessary: '否',
            explain: '图片格式，缺省为png'
        }],
        attent: `
> 返回的base64数据带有mimeType头，比如："data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...."，如不需要可将 "data:image/png;base64," 去掉，只保留后面的数据
> 支持常见的图片格式，如：jpg、jpeg、png、bmp、gif 等
> 组件上有视频画面时才可以调用此方法，否则SDK不会有任何响应`,
        example: `
        const picBase64 = VideoObj.savePicToBase64('png');
        `
    }
}, {
    method: 'CRVideo_VideoObj',
    interface: 'setVideo',
    description: '订阅成员摄像头画面',
    id: 'CRVideo_VideoObj_setVideo',
    detail: {
        content: 'CRVideo_VideoObj.setVideo(UID, camID)',
        returnVal: '无',
        data: [commonUID, {
            param: 'camID',
            type: 'Number',
            necessary: '否',
            explain: '成员的摄像头ID，非必传。不传或传-1则订阅该成员默认摄像头。传0则为退订'
        }],
        attent: `
> 若要退订某个UI组件上的视频，则调用：CRVideo_VideoObj.setVideo('',0) 即可
> 每个组件可以反复订阅不同成员的不同摄像头ID，订阅新的摄像头之后，此前订阅的摄像头则会自动退订
> 组件setVideo之后，若不退订或不进行销毁，则无论该组件是否显示，都会持续传输其所订阅的摄像头视频流，并占用资源`
    },
}, {
    interface: 'getVideoID',
    description: '查询组件当前订阅的摄像头ID',
    id: 'CRVideo_VideoObj_getVideoID',
    detail: {
        content: 'CRVideo_VideoObj.getVideoID()',
        returnVal: '返回组件当前订阅的摄像头ID',
    }
}, {
    interface: 'destroy',
    description: '销毁组件，退订视频',
    id: 'CRVideo_VideoObj_destroy',
    detail: {
        content: 'CRVideo_VideoObj.destroy()',
        returnVal: '无',
        attent: `
> 调用此方法彻底销毁UI组件，组件销毁后，SDK会退订相关视频流，以节省带宽`
    }
}, {
    method: 'CRVideo_ScreenShareObj',
    interface: 'setVideo',
    description: '设置组件显示的屏幕内容（谁的屏幕）',
    id: 'CRVideo_ScreenShareObj_setVideo',
    detail: {
        content: 'CRVideo_ScreenShareObj.setVideo(UID)',
        returnVal: '无',
        data: [commonUID],
    }
}, {
    interface: 'setMark',
    description: '设置屏幕共享标注样式',
    id: 'CRVideo_ScreenShareObj_setMark',
    detail: {
        content: 'CRVideo_ScreenShareObj.setMark(CRVideo_MarkOptions)',
        returnVal: '无',
        data: [{
            param: 'CRVideo_MarkOptions',
            type: 'Object',
            necessary: '是',
            explain: '屏幕共享标注样式参数对象, 详见：[CRVideo_MarkOptions](TypeDefinitions.html#CRVideo_MarkOptions)'
        }],
    }
}, {
    method: 'CRVideo_MediaObj',
    interface: 'setVideo',
    description: '设置组件显示的影音内容（谁的影音）',
    id: 'CRVideo_MediaObj_setVideo',
    detail: {
        content: 'CRVideo_MediaObj.setVideo(UID)',
        returnVal: '无',
        data: [commonUID],
    }
}]