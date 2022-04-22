# 浏览器兼容性说明

## 1. 概述

WebRTC 是一个支持网页浏览器进行实时语音对话或视频对话、进行实时数据传输（Web Real-Time Communication）的 JavaScript API。

Cloudroom Web SDK 使用了 WebRTC 技术实现实时音视频功能。因此，在当前浏览器中能否使用 Web SDK，依赖于当前浏览器对 WebRTC 能否兼容。目前 WebRTC 主要在桌面端的 Chrome、 Firefox、Safari 等浏览器，以及移动端的 Safari浏览器、微信内置浏览器上有较为完整的支持。本文将分别介绍桌面端和移动端的浏览器兼容性情况。

> 由于平台和一些应用内置浏览器的实现各不相同，无法涵盖所有浏览器，以下文档中未列举的浏览器并不代表不支持。开发者如有疑问，请联系技术支持咨询。

## 2. 桌面端

### 2.1 浏览器兼容性

目前 Web SDK 在桌面端支持的浏览器及版本如下：

> WebRTC 技术在 Chrome 平台支持度最好，建议开发者使用最新版本的 [Chrome 浏览器](https://www.google.cn/chrome/) 或 [Edge 浏览器](https://www.microsoft.com/zh-cn/edge)，下载最新版本的 [Web SDK](https://sdk.cloudroom.com/pages/download#sdk)。

<table>
    <colgroup>
        <col width="10%">
        <col width="22%">
        <col width="16%">
        <col width="50%">
    </colgroup>
    <tbody>
        <tr>
            <th>操作系统</th>
            <th>浏览器</th>
            <th>版本兼容性</th>
            <th>备注</th>
        </tr>
        <tr>
            <td rowspan="6">Windows</td>
            <td>Chrome 浏览器</td>
            <td>56 或以上版本</td>
            <td>屏幕共享需要Chrome 72 或以上版本</td>
        </tr>
        <tr>
            <td>Firefox 浏览器</td>
            <td>56 或以上版本</td>
            <td>屏幕共享需要Firefox 66 或以上版本</td>
        </tr>
        <tr>
            <td>Edge 浏览器</td>
            <td>80 或以上版本</td>
            <td></td>
        </tr>
        <tr>
            <td>微信内置浏览器</td>
            <td>微信3.6.0+</td>
            <td>不支持屏幕共享</td>
        </tr>
        <tr>
            <td>企业微信内置浏览器</td>
            <td>-</td>
            <td>仅支持拉流</td>
        </tr>
        <tr>
            <td>其它使用Chromium<br>内核的浏览器</td>
            <td>Chrome/68+</td>
            <td>部分国产浏览器，如：360浏览器的极速模式等</td>
        </tr>
        <tr>
            <td rowspan="6">macOS</td>
            <td>Safari 浏览器</td>
            <td>11 或以上版本</td>
            <td>屏幕共享需要Safari 13 或以上版本</td>
        </tr>
        <tr>
            <td>Chrome 浏览器</td>
            <td>56 或以上版本</td>
            <td>屏幕共享需要Chrome 72 或以上版本</td>
        </tr>
        <tr>
            <td>Firefox 浏览器</td>
            <td>56 或以上版本</td>
            <td>屏幕共享需要Firefox 66 或以上版本</td>
        </tr>
        <tr>
            <td>Edge 浏览器</td>
            <td>80 或以上版本</td>
            <td></td>
        </tr>
        <tr>
            <td>微信内置浏览器</td>
            <td>微信3.4.0+</td>
            <td>不支持屏幕共享</td>
        </tr>
        <tr>
            <td>企业微信内置浏览器</td>
            <td>-</td>
            <td>仅支持拉流</td>
        </tr>
    </tbody>
</table>

### 2.2 兼容性限制

> 不同的浏览器存在差异，导致支持的功能可能有所不同。
> WebRTC 技术是由 Google 最先提出，Chrome 也是最先支持的浏览器，所以在 Chrome 上的限制较少。

<table>
    <colgroup>
        <col width="15%">
        <col width="85%">
    </colgroup>
    <tbody>
        <tr>
            <th>浏览器</th>
            <th>限制</th>
        </tr>
        <tr>
            <td>Chrome</td>
            <td>
                <p></p>
                <ul>
                    <li>Chrome 版本要求 58 或以上，建议使用 <b>Chrome 68</b> 或以上版本。</li>
                    <li>Chrome 72 或以上支持屏幕共享，72 以下版本需要安装屏幕共享插件。</li>
                    <li>macOS 上 Chrome 84 存在缺陷，采用 H.264 格式进行编码时， WebRTC 有概率出现帧率突然下降导致图像卡顿。详见 Google 官方说明 <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=1203206&amp;can=2&amp;q=webrtc%20drop%20component%3ABlink%3EWebRTC%3EVideo" id="" rel="nofollow">Issue 1088650</a> 和 <a href="https://bugs.chromium.org/p/webrtc/issues/detail?id=12704#c3" id="" rel="nofollow">Issue 12704</a>。解决方案：建议你在 macOS 上 Chrome 84 及以后版本中使用 VP8 ，直至 Google 修复该缺陷。</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Edge</td>
            <td>
                <p></p>
                <ul>
                    <li>Windows 10+ 平台上自带的 Edge 要求 80 及以上版本。</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Safari</td>
            <td>
                <p></p>
                <ul>
                    <li>Safari 无法获取音频输出设备（扬声器）信息。</li>
                    <li>Safari 无法共享本地影音文件。</li>
                    <li>Safari 屏幕共享默认共享整个显示器屏幕，不可选择共享哪些内容。</li>
                    <li>Safari 11 只支持 480p 及以上的分辨率。</li>
                    <li>Safari 12.1（或以下版本）仅支持 H.264 编解码格式。</li>
                    <li>Safari 13 的用户可能听不到远端用户的声音。</li>
                    <li>Safari 14.0.1 在 macOS 上音频可能断断续续。</li>
                    <li>Safari 15.1 上使用H.264编码可能会导致页面崩溃。</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Firefox</td>
            <td>
                <p></p>
                <ul>
                    <li>Firefox 视频帧率只支持 30 fps。</li>
                    <li>Firefox 在使用 Apple M1 芯片的 Mac 设备上不支持 H.264 编解码。</li>
                    <li>Firefox 与某些设备互通时，Firefox 端看其他端的视频画面可能会发生旋转。</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>其它限制</td>
            <td>
                <p></p>
                <ul>
                    <li>Chrome 81 及以上版本、Safari 和 Firefox 浏览器需要在获得媒体设备权限后才能获取到完整的设备列表。</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## 3. 移动端

### 3.1 浏览器兼容性

> Android：由于不同手机产商对自带浏览器或多或少会对其浏览器内核做出改动，无法保证自带浏览器能够很好地支持 WebRTC，建议使用 **Chrome 浏览器** 或 **微信内置浏览器**。
> Android 平台原⽣ WebView 可⽀持⾃定义，因此不同平台不同设备以及不同应⽤的 WebView 实现可能存在差异。
> iOS 只支持系统 WebView，因此对 Web SDK 的支持只与 iOS 系统版本有关。

<table>
    <colgroup>
        <col width="12%">
        <col width="20%">
        <col width="16%">
        <col width="50%">
    </colgroup>
    <tbody>
        <tr>
            <th>操作系统</th>
            <th>浏览器</th>
            <th>版本兼容性</th>
            <th>备注</th>
        </tr>
        <tr>
            <td rowspan="9">Android</td>
            <td>Chrome 浏览器</td>
            <td>✔️</td>
            <td>Chorme 68 或以上</td>
        </tr>
        <tr>
            <td>Firefox 浏览器</td>
            <td>✔️</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Edge 浏览器</td>
            <td>✔️</td>
            <td>内核版本 Chrome/68.0 或以上</td>
        </tr>
        <tr>
            <td>QQ 浏览器</td>
            <td>✔️</td>
            <td>-</td>
        </tr>
        <tr>
            <td>微信内置浏览器</td>
            <td>✔️</td>
            <td>-</td>
        </tr>
        <tr>
            <td>企业微信内置浏览器</td>
            <td>✔️</td>
            <td>-</td>
        </tr>
        <tr>
            <td>UC 浏览器</td>
            <td>✖</td>
            <td>-</td>
        </tr>
        <tr>
            <td>WebView</td>
            <td>✔️</td>
            <td>内核版本 Chrome/68.0 或以上</td>
        </tr>
        <tr>
            <td>其它使用Chromium<br>内核的浏览器</td>
            <td>✔️</td>
            <td>如系统 <b>自带浏览器</b> 等，内核版本 Chrome/68.0 或以上</td>
        </tr>
        <tr>
            <td>iOS 12.2+</td>
            <td>Safari 浏览器</td>
            <td>✔️</td>
            <td>-</td>
        </tr>
        <tr>
            <td rowspan="3">iOS 14.3+</td>
            <td>Safari 浏览器</td>
            <td>✔️</td>
            <td>-</td>
        </tr>
        <tr>
            <td>微信内置浏览器</td>
            <td>✔️</td>
            <td>微信 6.5 或以上</td>
        </tr>
        <tr>
            <td>内嵌 WebView 的应用</td>
            <td>✔️</td>
            <td>其它内嵌 WebView 的应用，如 Chrome 浏览器等</td>
        </tr>
    </tbody>
</table>

### 3.2 兼容性限制

Web SDK 在 **Android** 上的兼容性限制如下：

<table>
  <colgroup>
    <col width="15%">
    <col width="85%">
  </colgroup>
  <tbody><tr>
    <th>浏览器</th>
    <th>限制</th>
  </tr>
  <tr>
    <td>所有浏览器 或 WebView</td>
    <td>
        <ul>
            <p></p>
            <li>均不支持屏幕共享。</li>
            <li>部分 Android 设备上可能无法获取到媒体设备的 device label。</li>
            <li>浏览器是否兼容，和浏览器版本、运行内核，设备芯片等都相关，强烈建议在使用前，先进行兼容性检测。</li> 
            <li>部分自研安卓设备或应用未取得H.264授权，仅支持VP8编码格式。</li> 
        </ul>
    </td>
  </tr>
  <tr>
    <td>Chrome</td>
    <td>
        <p></p>
        <ul>
            <li>部分安卓设备上，Chrome 浏览器不支持 H.264 编解码格式，仅支持VP8编码格式。</li>
        </ul>
    </td>
  </tr>
  <tr>
    <td>Firefox</td>
    <td>
        <p></p>
        <ul>
            <li>在Firefox 上使用 Web SDK 与某些设备通话时，可能会出现所看到的对端画面发生了旋转。</li>
        </ul>
    </td>
  </tr>
  <tr>
    <td>微信内置<br>浏览器</td>
    <td>
        <p></p>
        <ul>
            <li>部分微信浏览器中视频无法自动播放。并且当用户通过手势（点击、触摸）恢复播放后，下一次视频仍然无法自动播放。</li>
        </ul>
    </td>
  </tr>
  <tr>
    <td>系统自带<br>浏览器</td>
    <td>
        <p></p>
        <ul>
            <li>系统自带浏览器需要满足Chromium内核版本要求：Chrome/68 或以上。</li>
            <li>部分安卓系统自带浏览器不支持WebRTC，即使内核版本满足要求。</li>
        </ul>
    </td>
  </tr>
</tbody></table>

Web SDK 在 **iOS** 上的兼容性限制如下：

<table>
  <colgroup>
    <col width="15%">
    <col width="85%">
  </colgroup>
  <tbody><tr>
    <th>浏览器</th>
    <th>限制</th>
  </tr>
  <tr>
    <td>所有浏览器 或 webview</td>
    <td>
        <p></p>
        <ul>
            <li>均不支持屏幕共享。</li>
            <li>iOS 15.x: 浏览器或应用切换到后台后，音频流发送中断。</li>
            <li>iOS 15.x: 被其它语音或视频通话应用、Siri 呼叫、闹钟等打断后，音视频播放有概率无法自动恢复。</li>
            <li>iOS 15.x: 本地用户听到远端音频流的 <b>音量极低</b>。</li>
            <li>iOS 15.x: 播放视频有概率出现黑屏。</li>
            <li>iOS 15.1.x: 使用 H.264 编码发送视频流会导致 <b>页面崩溃</b>。</li>
        </ul>
    </td>
  </tr>
  <tr>
    <td>Safari </td>
    <td>
        <p></p>
        <ul>
            <li>第二次调用浏览器的 “getUserMedia” 接口获取相同媒体类型的轨道，会导致第一次获取的媒体轨道静音或黑屏。</li>
            <li>iOS 13 版本中可能出现远端音量大小随机变化的问题。</li>
            <li>可能出现没有插耳机却从听筒出声或者插上了耳机仍然从扬声器出声的情况。</li>
            <li>使用过其它音视频输入设备的 App 后（例如 Siri），无法采集本地音频或视频。（偶现）</li>
            <li>iOS Safari 14.2 和 macOS Safari 14.0.1 上音频可能断断续续。</li>
        </ul>
    </td>
  </tr>
</tbody></table>