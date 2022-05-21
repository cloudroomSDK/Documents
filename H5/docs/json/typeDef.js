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
            explain: '是否开启麦克风自动增益（AGC）'
        }, {
            param: 'echoCancellation',
            type: 'Bool',
            explain: '是否开启麦克风回声消除'
        }, {
            param: 'noiseSuppression',
            type: 'Bool',
            explain: '是否开启麦克风噪声消除'
        }, {
            param: 'micVolume',
            type: 'Number',
            explain: '设置麦克风音量（静态增益）'
        }],
        attent: `
> 设置麦克风音量必须在关闭麦克风自动增益时才能生效
> 麦克风音量为0时，表示麦克风静音，100为正常音量，0-100为降低音量，>100时为增大音量`
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
    interface: 'CRVideo_CloudMixerInfo',
    description: '云端混图器信息',
    detail: {
        type: 'Object',
        data: [{
            param: 'ID',
            type: 'String',
            explain: '混图器ID'
        }, {
            param: 'owner',
            type: 'String',
            explain: '创建者用户ID'
        }, {
            param: 'cfg',
            type: 'Object',
            explain: '录制配置，参见[CRVideo_CloudMixerCfgObj](#CRVideo_CloudMixerCfgObj)'
        }, {
            param: 'state',
            type: 'Number',
            explain: '录制状态，参见[CRVideo_MIXER_STATE](Constant.md#CRVideo_MIXER_STATE)'
        }]
    }
}, {
    interface: 'CRVideo_CloudMixerCfgObj',
    description: '云端混图器配置',
    detail: {
        type: 'Object',
        data: [{
            param: 'mode',
            type: 'Number',
            explain: `录制模式，取值范围：
            0-合流模式：将声音录制到一个声音文件、或将声音图像录制成一个视频文件；
            1-单流模式：将涉及到的声音流、图像流存到各自独立的文件中；`
        }, {
            param: 'audioFileCfg',
            type: '[CRVideo_CloudMixerAudioFileCfg](#CRVideo_CloudMixerAudioFileCfg)',
            explain: `生成音频文件配置，生成规则：进入房间并开启麦克风开始生成文件，离开房间结束生成文件`
        }, {
            param: 'videoFileCfg',
            type: '[CRVideo_CloudMixerVideoFileCfg](#CRVideo_CloudMixerVideoFileCfg)',
            explain: `生成视频文件配置，生成规则：进入房间并开启摄像头开始生成文件，离开房间结束生成文件`
        }, {
            param: 'storageConfig',
            type: '[CRVideo_CloudStorageConfig](#CRVideo_CloudStorageConfig)',
            explain: `云存储配置，不配置时将存储在云屋服务器上`
        }],
        example: `
        //为房间中所有人录制独立的声音文件，独立的默认摄像头视频文件
        {
            "mode": 1,
            "audioFileCfg": {
                "svrFileNameSuffix": ".mp3",
                "svrPath": "/xxx",
                "subscribeAudios": ["_cr_all_"]
            },
            "videoFileCfg": {
                "aStreamType": 1,
                "svrFileNameSuffix": ".mp4",
                "svrPath": "/xxx",
                "subscribeVideos": ["_cr_allDefCam_"]
            }
        }
        
        //录制一个2分屏左右布局图像+房间声音的mp4文件
        {
            "mode": 0,
            "videoFileCfg": {
                "svrPathName": "/2021-09-24/2021-09-24_13-47-41_Win32_73542046.mp4",
                "vWidth": 1280,
                "vHeight": 720,
                "vFps": 15,
                "layoutConfig": [
                    {
                        "type": 0,
                        "top": 180,
                        "left": 0,
                        "width": 640,
                        "height": 360,
                        "keepAspectRatio": 1,
                        "param": {"camid": "1.-1"}
                    },
                    {
                        "type": 0,
                        "top": 180,
                        "left": 640,
                        "width": 640,
                        "height": 360,
                        "keepAspectRatio": 1,
                        "param": {"camid": "2.-1"}
                    }
                ]
            }
        }
        `,
    },
}, {
    interface: 'CRVideo_CloudMixerAudioFileCfg',
    description: '云端录制语音文件配置',
    detail: {
        type: 'Object',
        multiple: true,
        data: [{
                title: '单流模式参数：',
                includeMust: true,
                data: [{
                    param: 'svrPath',
                    type: 'String',
                    explain: '服务器存储路径，默认为空',
                    isNeed: false
                }, {
                    param: 'svrFileNameSuffix',
                    type: 'String',
                    explain: `文件名后缀，支持：“.mp3”、“.wav”
                    文件命名规则：昵称_房间号_开始时间.后缀`,
                    isNeed: true
                }, {
                    param: 'subscribeAudios',
                    type: 'Array',
                    explain: `指定生成哪些人的音频文件；
                    取值：["&#95;cr_all_"]或["userId1","userId2"]；
                    _cr_all_代表生成所有人；`,
                    isNeed: true
                }]
            }, {
                title: '合流模式参数：',
                includeMust: true,
                data: [{
                    param: 'svrPathName',
                    type: 'String',
                    explain: '带服务器存储路径的文件名，文件格式支持“mp3”、“wav”，示例：/xxx/xxx/xxx.mp3',
                    isNeed: true
                }, {
                    param: 'aChannelType',
                    type: 'Number',
                    explain: `音频通道类型，取值范围：0-单声道，1-左右双声道，默认为0`,
                    isNeed: false
                }, {
                    param: 'aChannelContent',
                    type: 'Array',
                    explain: `音频通道内容。
                    左右声道模式时：必须传入两个用户ID，如：["UserID1", "UserID2"]，第一个人的为左声道，第二个人为右声道）                
                    单声道模式时：可选参数（默认为空），空代表所有人声音，要指定人员声音时传入：["UserID1","UserID2", "UserID3"]`,
                    isNeed: false
                }]
            }
        ],
    },
}, {
    interface: 'CRVideo_CloudMixerVideoFileCfg',
    description: '云端录制语音文件配置',
    detail: {
        type: 'Object',
        multiple: true,
        data: [{
                title: '单流模式参数：',
                includeMust: true,
                data: [{
                    param: 'svrPath',
                    type: 'String',
                    explain: '服务器存储路径，默认为空',
                    isNeed: false
                }, {
                    param: 'svrFileNameSuffix',
                    type: 'String',
                    explain: `文件名后缀，当前只支持：”.mp4”
                    文件命名规则：昵称_cam摄像头编号_房间号_开始时间.后缀`,
                    isNeed: true
                }, {
                    param: 'subscribeAudios',
                    type: 'Array',
                    explain: `指定生成哪些人的摄像头对应的视频文件；
                    取值：["&#95;cr_all_"]或["&#95;cr_allDefCam_"]或["userId1.camId", "userId2.camId", ...]；
                    _cr_all_代表所有人所有摄像头，_cr_allDefCam_代表生成所有人的默认摄像头`,
                    isNeed: true
                }, {
                    param: 'aStreamType',
                    type: 'Number',
                    explain: `视频文件内音频内容，取值：0-自己声音，1-所有人声音，默认0`,
                    isNeed: false
                }]
            }, {
                title: '合流模式参数：',
                includeMust: true,
                data: [{
                    param: 'svrPathName',
                    type: 'String',
                    explain: `带路径的文件名，文件格式支持：mp4、flv、ts、avi、rtmp://、rtsp://，可选一个或多个，以“;”分隔；
                    示例：”/xxx/xxx.mp4;rtmp://xxx1;rtmp://xxx2;”`,
                    isNeed: true
                }, {
                    param: 'aChannelType',
                    type: 'Number',
                    explain: `音频通道类型，取值：0-单声道，1-左右双声道，默认为0`,
                    isNeed: false
                }, {
                    param: 'aChannelContent',
                    type: 'Array',
                    explain: `音频通道内容。
                    左右声道模式时：必须传入两个用户ID，如：["UserID1", "UserID2"]，第一个人的为左声道，第二个人为右声道）
                    单声道模式时：可选参数（默认为空），空代表所有人声音，要指定人员声音时传入：["UserID1","UserID2", "UserID3"]`,
                    isNeed: false
                }, {
                    param: 'vWidth',
                    type: 'Number',
                    explain: `视频宽度`,
                    isNeed: true
                }, {
                    param: 'vHeight',
                    type: 'Number',
                    explain: `视频高度`,
                    isNeed: true
                }, {
                    param: 'vFps',
                    type: 'Number',
                    explain: `视频帧率，取值0-30, 默认值12`,
                    isNeed: false
                }, {
                    param: 'vBps',
                    type: 'Number',
                    explain: `视频码率，取值参见视频流默认码率定义 默认会根据视频尺寸生成码率`,
                    isNeed: false
                }, {
                    param: 'vQP',
                    type: 'Number',
                    explain: `视频质量，取值0~51(0表示完全无损, 51表示质量非常差)，推荐高质量取值18，中质量25，低质量34， 默认值19`,
                    isNeed: false
                }, {
                    param: 'layoutConfig',
                    type: 'Array',
                    explain: `布局内容列表，[[CRVideo_MixerContentObj](#CRVideo_MixerContentObj),[CRVideo_MixerContentObj](#CRVideo_MixerContentObj),...]`,
                    isNeed: true
                }]
            }
        ],
    },
}, {
    interface: 'CRVideo_CloudStorageConfig',
    description: '云端录制存储配置',
    detail: {
        type: 'Object',
        includeMust: true,
        data: [{
            param: 'vendor',
            type: 'Number',
            explain: '第三方云存储平台： 1-阿里云',
            isNeed: true
        }, {
            param: 'region',
            type: 'String',
            explain: `第三方云存储指定的地区信息`,
            isNeed: true
        }, {
            param: 'bucket',
            type: 'String',
            explain: '第三方云存储的 bucket',
            isNeed: true
        }, {
            param: 'accessKey',
            type: 'String',
            explain: '第三方云存储的 access key',
            isNeed: true
        }, {
            param: 'secretKey',
            type: 'String',
            explain: `第三方云存储的 secret key`,
            isNeed: true
        }]
    },
}, {
    interface: 'CRVideo_MixerContentObj',
    description: '混图器内容配置',
    detail: {
        type: 'Object',
        data: [{
            param: 'left',
            type: 'Number',
            explain: '在混图画面中的区域（水平位置）'
        }, {
            param: 'top',
            type: 'Number',
            explain: '在混图画面中的区域（垂直位置）'
        }, {
            param: 'width',
            type: 'Number',
            explain: '在混图画面中的区域宽'
        }, {
            param: 'height',
            type: 'Number',
            explain: '在混图画面中的区域高'
        }, {
            param: 'type',
            type: 'Number',
            explain: 'MIXER_VCONTENT_TYPE,请见后面type描述;'
        }, {
            param: 'keepAspectRatio',
            type: 'Number',
            explain: '内容保持原始比例，0不保持，1保持'
        }, {
            param: 'param',
            type: 'Object',
            explain: '如：{"camid":"usr2.1"}。请见后面param支持的参数;'
        }],
        attent: `
> type描述：

>当type=0时，表示混图的是摄像头，param必须包含camid；
当type=3时，表示混图的是影音共享，不用附加任何参数；
当type=5时，表示混图的是共享的屏幕，不用附加任何参数；
当type=6时，表示混图的是白板，不用附加任何参数；
当type=10时，表示混图的是文本，width和height将被忽略，元素大小由文本信息自动确定。 param必须包含text，可选color，background，font-size，text-margin；

>param 支持的参数如下：

>camid：用户id.摄像头id, 如："testuser.1"
text：文本内容，支持时间戳参数"%timestamp%"，格式为：YYYY-MM-DD HH:MM:SS
color：文本颜色，格式：#RRGGBB[AA]， 默认#FFFFFF
background：背景色，格式：#RRGGBB[AA]， 默认#0000007D
font-size：字体大小，默认18
text-margin：边距，默认5
        `,
        example: `
    //录制“usr1”的1号摄像头
    {
        type: 0,
        keepAspectRatio: 1,
        left: 5,
        top: 10,
        width: 633,
        height: 356,
        param: {
            camid: "usr1.1"
        }
    }

    //录制“usr2”的1号摄像头
    {
        type: 0,
        keepAspectRatio: 1,
        left: 642,
        top: 10,
        width: 633,
        height: 356,
        param: {
            camid: "usr2.1"
        }
    }

    //录制时间戳
    {
        type: 10,
        left: 980,
        top: 660,
        param: {
            text: '%timestamp%',
            color: "#ffffff",
            "font-size:": 30
        },
    }
`
    },
}, {
    interface: 'CRVideo_CloudMixerOutputInfo',
    description: '云端混图器输出信息',
    detail: {
        type: 'Object',
        data: [{
            param: 'id',
            type: 'String',
            explain: '混图器ID',
        }, {
            param: 'state',
            type: 'Number',
            explain: '具体参考[CRVideo_OUTPUT_STATE](Constant.md#CRVideo_OUTPUT_STATE)',
        }, {
            param: 'svrFilePathName',
            type: 'String',
            explain: '录像路径文件名',
        }, {
            param: 'startTime',
            type: 'Number',
            explain: '创建时间(从1970年1月1日00:00:00起的毫秒数)，当state为2才有该参数',
        }, {
            param: 'duration',
            type: 'Number',
            explain: '录像时长(ms)，当state为2才有该参数',
        }, {
            param: 'fileSize',
            type: 'Number',
            explain: '文件大小(Byte)，当state为2才有该参数',
        }, {
            param: 'errCode',
            type: 'Number',
            explain: '错误码, 当state为3才有该参数',
        }, {
            param: 'errDesc',
            type: 'String',
            explain: '错误描述, 当state为3才有该参数',
        }]
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