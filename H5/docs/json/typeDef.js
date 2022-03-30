const {
    commonCookie,
    commonMeetId,
    commonSDKErr,
    commonUID,
    commonQueId,
    commonQueUser,
    commonCallID,
} = require('./apis/commonPassiveKey');

module.exports.TYPEDEF = [{
    interface: 'CRVideo_SDKParams',
    description: 'SDK初始化参数对象',
    detail: {
        type: 'Object',
        data: [{
            param: 'isSDKConsole',
            type: 'Bool',
            explain: '是否开启浏览器控制台SDK日志显示，非必传，缺省为true，开启'
        }, {
            param: 'isUploadLog',
            type: 'Bool',
            explain: '是否开启SDK日志上传，非必传，缺省为true，开启'
        }, {
            param: 'videoSendBW',
            type: 'Number',
            explain: '单个视频画面上送最大码率(带宽)Kbps，非必传，缺省为2048，即256KB/s'
        }, {
            param: 'screenSendBW',
            type: 'Number',
            explain: '屏幕共享画面上送最大码率(带宽)Kbps，非必传，缺省不设置上限'
        }, {
            param: 'mediaSendBW',
            type: 'Number',
            explain: '影音共享画面上送最大码率(带宽)Kbps，非必传，缺省不设置上限'
        }, {
            param: 'isHttp',
            type: 'Bool',
            explain: '是否强制使用http协议（默认为https），非必传，缺省为false，不启用'
        }, {
            param: 'isCallSer',
            type: 'Bool',
            explain: '是否启用队列呼叫服务，非必传，缺省为true，启用'
        }, {
            param: 'isWebRTC',
            type: 'Bool',
            explain: '是否启用音视频服务，非必传，缺省为true，启用'
        }, {
            param: 'MSProtocol',
            type: 'Number',
            explain: '流媒体打洞协议，1：UDP，2：TCP，非必传，缺省为1，UDP协议'
        }]
    }
}, {
    interface: 'CRVideo_UserStatus',
    description: '用户在线信息',
    detail: {
        type: 'Object',
        data: [commonUID, {
            param: 'userStatus',
            type: 'Number',
            explain: '用户的在线状态(0离线 1空闲 2忙碌 3房间中)'
        }, {
                param: 'DNDType',
                type: 'Number',
                explain: '用户的免打扰状态(0关闭免打扰 1开启免打扰)'
            }]
    }
}, {
    interface: 'CRVideo_QueueInfo',
    description: '队列信息',
    detail: {
        type: 'Object',
        data: [commonQueId, {
            param: 'prio',
            type: 'Number',
            explain: '优先级，值越小优先级越高'
        }, {
                param: 'name',
                type: 'String',
                explain: '队列名称'
            }, {
                param: 'desc',
                type: 'String',
                explain: '队列描述'
            }]
    }
}, {
    interface: 'CRVideo_QueStatus',
    description: '队列状态',
    detail: {
        type: 'Object',
        data: [commonQueId, {
            param: 'agent_num',
            type: 'Number',
            explain: '正在服务此队列坐席数'
        }, {
                param: 'wait_num',
                type: 'Number',
                explain: '正在此队列排队的客户数'
            }, {
                param: 'srv_num',
                type: 'Number',
                explain: '此队列当前正在服务中的客户数'
            }]
    }
}, {
    interface: 'CRVideo_QueUser',
    description: '队列用户信息',
    detail: {
        type: 'Object',
        data: [commonQueId, commonUID, {
            param: 'nickname',
            type: 'String',
            explain: '用户昵称'
        }, {
                param: 'queuingTime',
                type: 'Number',
                explain: '用户已排队时长（秒）'
            }, {
                param: 'usrExtDat',
                type: 'String',
                explain: '用户排队时携带的拓展数据'
            }]
    }
}, {
    interface: 'CRVideo_QueuingInfo',
    description: '排队信息',
    detail: {
        type: 'Object',
        data: [commonQueId, {
            param: 'position',
            type: 'Number',
            explain: '我当前的位置'
        }, {
                param: 'queuingTime',
                type: 'Number',
                explain: '我排队的时长（单位s）'
            }]
    }
}, {
    interface: 'CRVideo_SessionInfo',
    description: '会话信息',
    detail: {
        type: 'Object',
        data: [commonCallID, {
            param: 'peerID',
            type: 'String',
            explain: '会话中对方的UID'
        }, {
                param: 'peerName',
                type: 'String',
                explain: '会话中对方的昵称'
            }, {
                param: 'bCallAccepted',
                type: 'Number',
                explain: '呼叫是否已接受，0：暂未接受，1：已接受'
            }, {
                param: 'meetingID',
                type: 'Number',
                explain: '当前会话中的房间ID'
            }, {
                param: 'meetingPswd',
                type: 'String',
                explain: '当前会话中房间的密码'
            }, {
                param: 'duration',
                type: 'Number',
                explain: '当前会话持续的时间，单位：s'
            }]
    }
}, {
    interface: 'CRVideo_CreateParams',
    description: '创建房间的参数对象',
    detail: {
        type: 'Object',
        data: [{
            param: 'meetSubject',
            type: 'String',
            explain: '房间名称'
        }, {
            param: 'needPswd',
            type: 'Number',
            explain: '是否创建密码（0:房间无密码，1:系统为房间随机创建一个密码）'
        }, {
            param: 'isRegular',
            type: 'Number',
            explain: '是否为固定房间（0:普通房间，房间无人30分钟后，自动消毁; 1:固定房间，房间一直存在直到用户主动消毁它）'
        }]
    }
}, {
    interface: 'CRVideo_RoomInfoObj',
    description: '房间信息对象',
    detail: {
        type: 'Object',
        data: [{
            param: 'ID',
            type: 'Number',
            explain: '房间号'
        }, {
            param: 'pswd',
            type: 'String',
            explain: '房间密码'
        }, {
            param: 'subject',
            type: 'String',
            explain: '房间主题'
        }, {
            param: 'pubMeetUrl',
            type: 'String',
            explain: '房间公共链接'
            //},{
            //     param:'creator',
            //     type:'String',
            //     explain:'房间创建者'
            //},{
            //     param:'memberCount',
            //     type:'Number',
            //     explain:'房间内人数'
            //},{
            //     param:'startTime',
            //     type:'Number',
            //     explain:'会议开始时间'
        }]
    }
}, {
    interface: 'CRVideo_MemberInfo',
    description: '成员信息',
    detail: {
        type: 'Object',
        data: [commonUID, {
            param: 'nickname',
            type: 'String',
            explain: '昵称'
        }, {
                param: 'audioStatus',
                type: 'Number',
                explain: '音频状态，数值参考麦克风状态定义 [CRVideo_ASTATUS](Constant.html#CRVideo_ASTATUS)'
            }, {
                param: 'videoStatus',
                type: 'Number',
                explain: '视频状态，数值参考摄像头（视频）状态定义 [CRVideo_VSTATUS](Constant.html#CRVideo_VSTATUS)'
            }]
    }
}, {
    interface: 'CRVideo_VideoInfoObj',
    description: '用户摄像头信息',
    detail: {
        type: 'Object',
        data: [commonUID, {
            param: 'videoID',
            type: 'Number',
            explain: '摄像头ID'
        }, {
                param: 'videoName',
                type: 'String',
                explain: '摄像头名称'
            }]
    }
}, {
    interface: 'CRVideo_MicInfoObj',
    description: '用户麦克风信息',
    detail: {
        type: 'Object',
        data: [{
            param: 'micID',
            type: 'Number',
            explain: '麦克风ID'
        }, {
            param: 'micName',
            type: 'String',
            explain: '麦克风名称'
        }]
    }
}, {
    interface: 'CRVideo_SpeakerInfoObj',
    description: '用户麦克风信息',
    detail: {
        type: 'Object',
        data: [{
            param: 'speakerID',
            type: 'Number',
            explain: '扬声器ID'
        }, {
            param: 'speakerName',
            type: 'String',
            explain: '扬声器名称'
        }]
    }
}, {
    interface: 'CRVideo_AudioCfg',
    description: '系统音频参数',
    detail: {
        type: 'Object',
        data: [{
            param: 'micID',
            type: 'Number',
            explain: '麦克风ID'
        }, {
            param: 'speakerID',
            type: 'Number',
            explain: '扬声器ID'
        }, {
            param: 'autoGainControl',
            type: 'Bool',
            explain: '是否开启麦克风自动增益'
        }, {
            param: 'echoCancellation',
            type: 'Bool',
            explain: '是否开启麦克风回声消除'
        }, {
            param: 'noiseSuppression',
            type: 'Bool',
            explain: '是否开启麦克风噪声消除'
        }]
    }
}, {
    interface: 'CRVideo_VideoCfg',
    description: '系统视频参数对象',
    detail: {
        type: 'Object',
        data: [{
            param: 'size',
            type: 'Number',
            explain: '视频尺寸（1：流畅&emsp; 2：标清&emsp; 3：高清&emsp; 4：超清）'
        }, {
            param: 'fps',
            type: 'Number',
            explain: '视频帧率（5~30）'
        }, {
            param: 'ratio',
            type: 'Number',
            explain: '预置视频画面比例（1：16/9&emsp;2：4/3&emsp;3：1/1&emsp;4：3/4&emsp;5：9/16）'
        }, {
            param: 'aspectRatio',
            type: 'Number',
            explain: '自定义视频画面比例，如 16/10, 0.65, 1。此参数和ratio只能选其中一个'
        }],
        attent: `
> SDK默认视频尺寸为 2：标清，默认帧率为 15fps
> PC端视频画面默认比例为 1：16/9，移动端视频画面默认比例为 3：1/1`
    }
}, {
    interface: 'CRVideo_ScreenCfgObj',
    description: '屏幕共享配置参数对象',
    detail: {
        type: 'Object',
        data: [{
            param: 'catchRect',
            type: 'Object',
            explain: '共享区域 例如：{ left:100, top:100, width:400, height:400 }，不设置区域时此参数不传或传null'
        }, {
            param: 'maxPFS',
            type: 'Number',
            explain: '最大帧率'
        }, {
            param: 'maxKbps',
            type: 'Number',
            explain: '最大码率Kbps'
        }],
    }
}, {
    interface: 'CRVideo_CreateUIParams',
    description: '创建成员视频UI显示组件的参数',
    detail: {
        type: 'Object',
        data: [{
            param: 'poster',
            type: 'String',
            explain: 'video标签的poster属性，当视频显示控件没有视频画面时的默认占位图片，非必传'
        }, {
            param: 'style',
            type: 'Object',
            explain: 'video标签的style属性对象，标签css样式，非必传。例如：style:{objectFit:"cover",backgroundColor:"#000"} 等'
        }],
        attent: `
> 此对象里面的各参数即video标签的官方属性，可以参考 [https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement)`
    }
}, {
    interface: 'CRVideo_MediaInfoObj',
    description: '影音信息',
    detail: {
        type: 'Object',
        data: [{
            param: 'userID',
            type: 'String',
            explain: '用户ID'
        }, {
            param: 'state',
            type: 'Number',
            explain: '播放状态 0:播放中 1:暂停中 2:未播放'
        }, {
            param: 'mediaName',
            type: 'String',
            explain: '影音文件名'
        }]
    }
}, {
    interface: 'CRVideo_MutiMixerCfg',
    description: '服务器混图配置对象',
    detail: {
        type: 'Object',
        data: [{
            param: 'id',
            type: 'Number',
            explain: '混图器ID，每个混图器的配置、内容、和输出要根据ID对应'
        }, {
            param: 'streamTypes',
            type: 'Number',
            explain: '录像类型，1：单音频录制（对应aCfg参数）&ensp;&ensp;2：单视频录制（暂不支持）&ensp;&ensp;3：音视频录制（对应cfg参数）'
        }, {
            param: 'cfg',
            type: 'Object',
            explain: '音视频混图器配置对象，每个混图器只有一个配置对象（cfg或aCfg），详见：[CRVideo_MixerCfgObj](#CRVideo_MixerCfgObj)'
        }, {
            param: 'acfg',
            type: 'Object',
            explain: '单音频混图器配置对象，每个混图器只有一个配置对象（cfg或aCfg），详见：[CRVideo_MixeraCfgObj](#CRVideo_MixeraCfgObj)'
        }],
        example: `
    [{
        "id": 1,
        "streamTypes": 3,
        "cfg": {
            "width": 1280,
            "height": 720,
            "frameRate": 15,
            "bitRate": 2000000,
            "defaultQP": 15
        }
    }, {
        "id": 2,
        "streamTypes": 1,
        "aCfg": {
            "channelType": 1,
            "audioFormat": 1
        }
    }]
        `,
    },
}, {
    interface: 'CRVideo_MutiMixerContent',
    description: '服务器混图内容对象',
    detail: {
        type: 'Object',
        data: [{
            param: 'id',
            type: 'Number',
            explain: '混图器ID，每个混图器的配置、内容、和输出要根据ID对应'
        }, {
            param: 'content',
            type: 'Object',
            explain: '混图器内容配置对象，详见：[CRVideo_MixerContentObj](#CRVideo_MixerContentObj)'
        }],
        example: `
    [{
        "id": 1,
        "content": [{
            "type": 0,
            "left": 0,
            "top": 0,
            "width": 1280,
            "height": 720,
            "param": {
                "camid": "张三.1"
            },
            "keepAspectRatio": 1
        }, {
            "type": 4,
            "left": 35,
            "top": 3,
            "width": 175,
            "height": 32,
            "keepAspectRatio": 1
        }, {
            "type": 7,
            "left": 40,
            "top": 30,
            "param": {
                "text": "<span style='font-size:14px;color:#e21918'>张三</span>"
            }
        }]
    }, {
        "id": 2,
        "content": [{
            "type": 9,
            "param": "张三"
        }]
    }]
        `,
    },
}, {
    interface: 'CRVideo_MutiMixerOutput',
    description: '服务器混图输出对象',
    detail: {
        type: 'Object',
        data: [{
            param: 'id',
            type: 'Number',
            explain: '混图器ID，每个混图器的配置、内容、和输出要根据ID对应'
        }, {
            param: 'output',
            type: 'Object',
            explain: '混图器输出配置对象，详见：[CRVideo_MixerOutputObj](#CRVideo_MixerOutputObj)'
        }],
        example: `
    [{
        "id": 1,
        "output": [{
            "type": 0,
            "filename": "/2020-07-21/张三的录像.mp4"
        }, {
            "type": 1,
            "liveUrl": "rtmp://pub.cloudroom.com/live/xxxx?xxx=xxx"
        }]
    }, {
        "id": 2,
        "output": [{
            "type": 0,
            "filename": "/2020-07-21/张三的录音.mp3"
        }]
    }]
        `,
    },
}, {
    interface: 'CRVideo_MixerCfgObj',
    description: '音视频混图器规格配置对象',
    detail: {
        type: 'Object',
        data: [{
            param: 'width',
            type: 'Number',
            explain: '图像宽度（要求8的倍数）'
        }, {
            param: 'height',
            type: 'Number',
            explain: '图像高度（要求8的倍数）'
        }, {
            param: 'frameRate',
            type: 'Number',
            explain: '图像帧率，取值范围:1-30(值越大，画面越流畅，cpu消耗更高。录像推荐15帧，直播推存25帧)'
        }, {
            param: 'bitRate',
            type: 'Number',
            explain: '录制视频文件的最高码率(如1M:1000000)，当图像变化小时，实际码率会低于此值'
        }, {
            param: 'defaultQP',
            type: 'Number',
            explain: '录制视频文件的目标质量，缺省值：26。取值范围：0~51，0表示完全无损,51表示质量非常差，推荐高质量取值18，中质量26，低质量34'
        }],
        example: `
    // 音视频
    {"width":1280,"height":720,"frameRate":15,"bitRate":2000000,"defaultQP":15}
        `
    },
}, {
    interface: 'CRVideo_MixeraCfgObj',
    description: '单音频混图器规格配置对象',
    detail: {
        type: 'Object',
        data: [{
            param: 'channelType',
            type: 'Number',
            explain: '音频文件通道类型，0：单声道&ensp;&ensp;1：双声道'
        }, {
            param: 'audioFormat',
            type: 'Number',
            explain: '音频文件格式，0：AAC&ensp;&ensp;1：MP3&ensp;&ensp;2：PCM'
        }],
        example: `
    // 单音频
    {"channelType":1,"audioFormat":1}
        `
    },
}, {
    interface: 'CRVideo_MixerContentObj',
    description: '混图器内容配置对象',
    detail: {
        type: 'Object',
        data: [{
            param: 'type',
            type: 'Number',
            explain: '类容类型，详见混图器内容类型定义 [CRVideo_MIXER_VCONTENT_TYPE](Constant.html#CRVideo_MIXER_VCONTENT_TYPE)'
        }, {
            param: 'left',
            type: 'Number',
            explain: '该内容在混图画面中水平方向相对于最左边的位置'
        }, {
            param: 'top',
            type: 'Number',
            explain: '该内容在混图画面中垂直方向相对于最顶部的位置'
        }, {
            param: 'width',
            type: 'Number',
            explain: '该内容在混图画面中的宽度'
        }, {
            param: 'height',
            type: 'Number',
            explain: '该内容在混图画面中的高度'
        }, {
            param: 'keepAspectRatio',
            type: 'Number',
            explain: '内容是否保持原始比例，0：不保持&ensp;&ensp;1：保持'
        }, {
            param: 'param',
            type: 'Object',
            explain: '参数配置，json格式，如：{"camid":"user_xxx.1"}，详见下方介绍'
        }],
        example: `
    // 摄像头画面
    {"type":0,"left":0,"top":0,"width":1280,"height":720,"param":{"camid":"user_xxx.1"},"keepAspectRatio":1}   
    // 影音
    {"type":3,"left":0,"top":0,"width":1280,"height":720} 
    // 时间戳
    {"type":4,"left":35,"top":3,"width":175,"height":32,"keepAspectRatio":1}
    // 共享中的屏幕
    {"type":5,"left":0,"top":0,"width":1280,"height":720}
    // 文本
    {"type":7,"left":40,"top":30,"param":{"text":"<span style='font-size:14px;color:#e21918'>H5_5598</span>"}}  
    // 纯音频
    {"type":9,"param":"user_H5_5598"}
        `,
        attent: `
> type描述：
> &ensp;&ensp;&ensp;当 type=0 时，表示混图的是摄像头，param必须包含camid；
> &ensp;&ensp;&ensp;当 type=1 时，表示混图的是指定的图片，param必须包含resourceid（仅用于本地混图，暂不支持）；
> &ensp;&ensp;&ensp;当 type=2 时，表示混图的是本地屏幕，param可以增加附加参数screenid/pid/area（暂不支持）；
> &ensp;&ensp;&ensp;当 type=3 时，表示混图的是影音共享，不用附加任何参数；
> &ensp;&ensp;&ensp;当 type=4 时，表示混图的是时戳，不用附加任何参数；
> &ensp;&ensp;&ensp;当 type=5 时，表示混图的是共享中的屏幕，不用附加任何参数；
> &ensp;&ensp;&ensp;当 type=6 时，表示混图的是白板，不用附加任何参数。（仅用于云端混图，本地混图应该用MIXVTP_PIC，暂不支持)；
> &ensp;&ensp;&ensp;当 type=7 时，表示混图的是文本(支持简单html)，param必须包含text；
> &ensp;&ensp;&ensp;注：当 type=7 时，width和height可为0，此时元素大小由文本信息自动确定；
> param支持的参数如下：
> &ensp;&ensp;&ensp;1.camid：用户id.摄像头id, 如："testuser.1"；
> &ensp;&ensp;&ensp;2.text： 录制文本内容，支持一些简单的html标签，如：
> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&lt;span style="font-weight:600; color:#00f;"&gt;客户姓名：&lt;/span&gt;
> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&lt;span style="color:#00f;"&gt;张三&lt;/span&gt;&lt;br/&gt; 
> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&lt;span style="font-weight:600; color:#00f;"&gt;录制日期：&lt;/span&gt;
> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&lt;span style="color:#00f;"&gt;2018-03-01&lt;/span&gt; 
> &ensp;&ensp;&ensp;3.录制纯音频文件时，param为某个用户的UID，表示录制该用户的声音；
`
    },
}, {
    interface: 'CRVideo_MixerOutputObj',
    description: '混图器输出配置对象',
    detail: {
        type: 'Object',
        data: [{
            param: 'type',
            type: 'Number',
            explain: '输出类型，0：输出文件，如MP4、MP3文件&ensp;&ensp;1：直播推流'
        }, {
            param: 'filename',
            type: 'String',
            explain: '录像路径文件名（服务器录像名格式如：/2018-11-21/xxx.mp4），支持的文件格式为mp4/ts/flv/avi，其中flv和ts两种格式在程序异常结束时产生的录制文件仍可用。'
        }, {
            param: 'liveUrl',
            type: 'String',
            explain: '直播推流地址，支持rtmp/rtsp协议'
        }],
        example: `
    // 文件
    {"type":0,"filename":"/2020-07-21/2020-07-21_14-21-53_Webrtc_53315471.mp4"}
    {"type":0,"filename":"/2020-07-21/2020-07-21_14-21-53_Webrtc_53315471.mp3"}
    // 推流
    {"type":1,"liveUrl":"rtmp://pub.cloudroom.com/live/xxxx?xxx=xxx"}
        `,
        attent: `
> 当 type为 0 时，需要传参 filename
> 当 type为 1 时，需要传参 liveUrl`
    },
}, {
    interface: 'CRVideo_MixerOutputInfoObj',
    description: '云端录制文件、云端直播推流信息',
    detail: {
        type: 'Object',
        data: [{
            param: 'id',
            type: 'Number',
            explain: '混图器ID'
        }, {
            param: 'state',
            type: 'Number',
            explain: '当前云端录制、云端直播推流状态，详见：[CRVideo_MIXER_STATE](Constant.html#CRVideo_MIXER_STATE)'
        }, {
            param: 'duration',
            type: 'Number',
            explain: '录像文件时长，单位：毫秒'
        }, {
            param: 'fileSize',
            type: 'Number',
            explain: '录像文件大小'
        }, {
            param: 'fileName',
            type: 'String',
            explain: '录像文件名'
        }, {
            param: 'errCode',
            type: 'Number',
            explain: '错误码，详见：[错误码定义](Constant.html#CRVideo_ERR_DEF)'
        }],
        example: `
    // 文件
    {"type":0,"filename":"/2020-07-21/2020-07-21_14-21-53_Webrtc_53315471.mp4"}
    {"type":0,"filename":"/2020-07-21/2020-07-21_14-21-53_Webrtc_53315471.mp3"}
    // 推流
    {"type":1,"liveUrl":"rtmp://pub.cloudroom.com/live/xxxx?xxx=xxx"}
        `,
        attent: `
> 当 type为 0 时，需要传参 filename
> 当 type为 1 时，需要传参 liveUrl`
    },
}, {
    interface: 'CRVideo_MeetingAttrObjs',
    description: '会议属性集',
    detail: {
        type: 'Object',
        data: [{
            param: 'value',
            type: 'String',
            explain: '属性值'
        }, {
            param: 'lastModifyUserID',
            type: 'String',
            explain: '最后修改者'
        }, {
            param: 'lastModifyTs',
            type: 'Number',
            explain: '最后的修改时间，1970-1-1 0:00:00以来的秒数'
        }],
        example: `
        {
            "userdef Key1": {
                "value": "11111",
                "lastModifyUserID": "111",
                "lastModifyTs": 11111
            },
            "userdef Key2": {
                "value": "22222",
                "lastModifyUserID": "222",
                "lastModifyTs": 22222
            }
        }
        `,
    },
}, {
    interface: 'CRVideo_UsrMeetingAttrObjs',
    description: '用户属性集',
    detail: {
        type: 'Object',
        data: [{
            param: 'value',
            type: 'String',
            explain: '属性值'
        }, {
            param: 'lastModifyUserID',
            type: 'String',
            explain: '最后修改者'
        }, {
            param: 'lastModifyTs',
            type: 'Number',
            explain: '最后的修改时间，1970-1-1 0:00:00以来的秒数'
        }],
        example: `
        {
            "userid1": {
                "userdef Key1": {
                    "value": "11111",
                    "lastModifyUserID": "111",
                    "lastModifyTs": 11111
                },
                "userdef Key2": {
                    "value": "22222",
                    "lastModifyUserID": "222",
                    "lastModifyTs": 22222
                }
            },
            "userid2": {
                "userdef Key1": {
                    "value": "11111",
                    "lastModifyUserID": "111",
                    "lastModifyTs": 11111
                },
                "userdef Key2": {
                    "value": "22222",
                    "lastModifyUserID": "222",
                    "lastModifyTs": 22222
                }
            }
        }
        `,
    },
}, {
    interface: 'CRVideo_MeetingAttrOptions',
    description: '操作房间属性选项',
    detail: {
        type: 'jsonString',
        data: [{
            param: 'notifyAll',
            type: 'Number',
            explain: '1：通知房间所有人员，0（默认值）:不通知。'
        }],
        example: `
        '{"notifyAll":1}'
        `,
    },
}, {
    interface: 'CRVideo_MarkOptions',
    description: '屏幕共享标注参数对象',
    detail: {
        type: 'Object',
        data: [{
            param: 'allowMark',
            type: 'Bool',
            explain: '是否允许标注。非必传，缺省为 false，不允许标注'
        }, {
            param: 'type',
            type: 'Number',
            explain: '画笔类型。非必传，缺省为 1，铅笔'
        }, {
            param: 'strokeStyle',
            type: 'String',
            explain: `画笔颜色。非必传，缺省为 '#000000'，黑色`
        }, {
            param: 'lineWidth',
            type: 'Number',
            explain: '画笔线宽px。为必传，缺省为 2，2px'
        }, {
            param: 'cursor',
            type: 'String',
            explain: `画笔鼠标样式，如：'url("./image/pc/meeting_pen1_.ico"), auto'。非必传，缺省为 'default'，默认样式`
        }],
        example: `
        {
            "allowMark": true,
            "type": 1,
            "strokeStyle": "#ff0000",
            "lineWidth": 3,
            "cursor": 'url("./image/pc/meeting_pen1_.ico"), auto'
        }
        `,
    },
}, {
    interface: 'CRVideo_BoardObj',
    description: '白板对象',
    detail: {
        type: 'Object',
        data: [{
            param: 'boardID',
            type: 'String',
            explain: '白板标识'
        }, {
            param: 'title',
            type: 'String',
            explain: '白板名'
        }, {
            param: 'width',
            type: 'Number',
            explain: `白板宽度`
        }, {
            param: 'height',
            type: 'Number',
            explain: '白板高度'
        }, {
            param: 'pageCount',
            type: 'Number',
            explain: `白板页数`
        }, {
            param: 'curPage',
            type: 'Number',
            explain: `白板当前页`
        }],
        example: `
        {
            boardID: "2.59",
            title: "默认白板",
            width: 800,
            height: 600,
            pageCount: 3,
            curPage: 2,
        }
        `,
    },
}, {
    interface: 'CRVideo_BoardPenOptions',
    description: '白板UI组件画笔配置对象',
    detail: {
        type: 'Object',
        data: [{
            param: 'type',
            type: 'Number',
            explain: '画笔类型，缺省为4(铅笔)。其它类型——5(荧光笔，暂不支持)，6(一条直线，暂不支持)，7(单箭头线，暂不支持)，8(双箭头线，暂不支持)，9(文本，暂不支持)，10(实心矩形，暂不支持)，11(空心矩形，暂不支持)，12(圆角实心矩形，暂不支持)，13(圆角空心矩形，暂不支持)，14(实心椭圆，暂不支持)，15(空心椭圆，暂不支持)，'
        }, {
            param: 'cursor',
            type: 'String',
            explain: `鼠标样式（css），缺省为:"default"，其它样式可自定义为css样式，如图片：'cursor: url("./image/pc/meeting_pen1_.ico"), auto'`
        }, {
            param: 'lineType',
            type: 'Number',
            explain: `线型，缺省为1(实线)。1(实线)，3(虚线)`
        }, {
            param: 'lineWidth',
            type: 'Number',
            explain: '线宽'
        }, {
            param: 'strokeStyle',
            type: 'String',
            explain: `线条颜色，hex值`
        }, {
            param: 'fillColor',
            type: 'String',
            explain: `填充颜色，hex值`
        }, {
            param: 'fullOpacity',
            type: 'Number',
            explain: `填充透明度，小数`
        }],
        example: `
        {
            type: 4, // 画笔类型  
            cursor: 'default', // 鼠标样式
            lineType: 1,  // 线型 1实线  3虚线
            lineWidth: 2, // 线宽
            strokeStyle: '#0000FF',  // 线条颜色
            fillColor: '#FC011A', // 填充颜色 
            fullOpacity: 0.5, // 填充透明度
        }
        `,
    },
}]