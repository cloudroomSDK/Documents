const basic = require('./apis/api_basic');
const init = require('./apis/api_init');
const login = require('./apis/api_login');
const queue = require('./apis/api_queue');
const call = require('./apis/api_call');
const invite = require('./apis/api_invite');
const room = require('./apis/api_room');
const room_in_out = require('./apis/api_room_in_out');
const room_basic_msg = require('./apis/api_room_basic');
const room_attr = require('./apis/api_room_attr');
const room_members = require('./apis/api_room_members');
const board = require('./apis/api_board');
const audio_set = require('./apis/api_audio_set');
const video_set = require('./apis/api_video_set');
const screenShare = require('./apis/api_screenShare');
const mediaShare = require('./apis/api_mediaShare');
const svrRecorder = require('./apis/api_svrRecorder');
const cmd = require('./apis/api_cmd');
const msg = require('./apis/api_msg');
const videoUI = require('./apis/api_videoUI');
const boardUI = require('./apis/api_boardUI');

module.exports.APIAll = [{
  interfaceType: '房间外接口',
  method: '基础函数',
  path: '#basic'
}, {
  method: '初始化/反初始化',
  path: '#init'
}, {
  method: '登录/注销/掉线',
  path: '#login'
}, {
  method: '队列管理',
  path: '#queue'
}, {
  method: '呼叫',
  path: '#call'
}, {
  method: '邀请',
  path: '#invite'
}, {
  method: '房间管理',
  path: '#room'
}, {
  interfaceType: '房间内接口',
  method: '进出房间',
  path: '#room_in_out'
}, {
  method: '房间内基础消息',
  path: '#room_basic_msg'
}, {
  method: '房间、用户属性',
  path: '#room_attr'
}, {
  method: '成员管理',
  path: '#room_members'
}, {
  method: '音频管理',
  path: '#audio_set'
}, {
  method: '视频管理',
  path: '#video_set'
}, {
  method: '屏幕共享',
  path: '#screenShare'
}, {
  method: '影音共享',
  path: '#mediaShare'
}, {
  method: '电子白板',
  path: '#board'
}, {
  method: '云端录制/互动直播',
  path: '#svrRecorder'
}, {
  method: '可视化UI组件',
  path: '#videoUI'
}, {
  method: '白板UI组件（白板显示容器）',
  path: '#boardUI'
}, {
  interfaceType: '消息接口',
  method: '消息通道（房间外）',
  path: '#cmd'
}, {
  method: '广播消息（房间内）',
  path: '#msg'
}]

module.exports.modulesData = [{
  id: 'basic',
  name: '基础函数',
  data: basic
}, {
  id: 'init',
  name: '初始化/反初始化',
  data: init
}, {
  id: 'login',
  name: '登录/注销/掉线',
  data: login
}, {
  id: 'queue',
  name: '队列管理',
  data: queue
}, {
  id: 'call',
  name: '呼叫',
  data: call
}, {
  id: 'invite',
  name: '邀请',
  data: invite
}, {
  id: 'room',
  name: '房间管理',
  data: room
}, {
  id: 'room_in_out',
  name: '进出房间',
  data: room_in_out
}, {
  id: 'room_basic_msg',
  name: '房间内基础消息',
  data: room_basic_msg
}, {
  id: 'room_attr',
  name: '房间、用户属性',
  data: room_attr
}, {
  id: 'room_members',
  name: '房间成员管理',
  data: room_members
}, {
  id: 'audio_set',
  name: '音频管理',
  data: audio_set
}, {
  id: 'video_set',
  name: '视频管理',
  data: video_set
}, {
  id: 'screenShare',
  name: '屏幕共享',
  data: screenShare
}, {
  id: 'mediaShare',
  name: '影音共享',
  data: mediaShare
}, {
  id: 'board',
  name: '电子白板',
  data: board
}, {
  id: 'svrRecorder',
  name: '云端录制/互动直播',
  data: svrRecorder
}, {
  id: 'videoUI',
  name: '可视化UI组件',
  data: videoUI
}, {
  id: 'boardUI',
  name: '白板UI组件（白板显示容器）',
  data: boardUI
}, {
  id: 'cmd',
  name: '房间外点对点消息通道',
  data: cmd
}, {
  id: 'msg',
  name: '房间内广播消息',
  data: msg
}]