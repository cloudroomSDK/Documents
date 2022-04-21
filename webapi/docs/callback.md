# 回调服务

## 说明

回调服务会以 HTTP 请求形式向你发送回调，回调的具体内容在请求包体中以 JSON 对象形式返回，根据事件不同，请求包体中 JSON 对象所包含的字段也不一样。使用回调服务之前需要先在管理后台配置回调服务的地址和需要回调的功能。

```json
{
	"EventType": "",
	"Time":,
	"Signature": "",
	"Details":{
	
	}
}
```



字段说明

<table>
    <thead>
        <tr>
            <th style="width:100px;font-weight:700;text-align: left;">名称</th>
            <th  colspan="2" style="width:800px; text-align: left;">类型</th>
            <th  colspan="2" style="width:800px; text-align: left;">说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="font-weight:normal;">EventType</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">事件类型</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">Time</td>
            <td  colspan="2" style="font-weight:normal;">Long</td>
            <td  colspan="2" style="font-weight:normal;">通知时间时间戳，单位：秒</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">Signature</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">签名，签名方式为MD5加密之后的32位小写串，Signature=MD5(CompID+'&'+CompSecret+'&'+Time)，
                企业CompID和企业密钥CompSecret可以登录云屋科技管理后台查看，Time为通知时间字段</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">Details</td>
            <td  colspan="2" style="font-weight:normal;">Object</td>
            <td  colspan="2" style="font-weight:normal;">详细内容</td>
        </tr>
    </tbody>
</table>


事件说明

<table>
    <thead>
        <tr>
            <th  colspan="2" style="width:800px; text-align: left;">EventType</th>
            <th  colspan="2" style="width:800px; text-align: left;">事件</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td  colspan="2" style="font-weight:normal;">ROOM_CREATE</td>
            <td  colspan="2" style="font-weight:normal;">创建房间事件</td>
        </tr>
        <tr>
            <td  colspan="2" style="font-weight:normal;">ROOM_DELETE</td>
            <td  colspan="2" style="font-weight:normal;">销毁房间事件</td>
        </tr>
        <tr>
            <td  colspan="2" style="font-weight:normal;">ROOM_JOIN</td>
            <td  colspan="2" style="font-weight:normal;">加入房间事件</td>
        </tr>
        <tr>
            <td  colspan="2" style="font-weight:normal;">ROOM_LEAVE</td>
            <td  colspan="2" style="font-weight:normal;">离开房间事件</td>
        </tr>
        <tr>
            <td  colspan="2" style="font-weight:normal;">RECORD_FINISH</td>
            <td  colspan="2" style="font-weight:normal;">录制完成事件</td>
        </tr>
    </tbody>
</table>


## 创建房间回调

字段说明

<table>
    <thead>
        <tr>
            <th style="width:100px;font-weight:700;text-align: left;">名称</th>
            <th  colspan="2" style="width:800px; text-align: left;">类型</th>
            <th  colspan="2" style="width:800px; text-align: left;">是否必传</th>
            <th  colspan="2" style="width:800px; text-align: left;">说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="font-weight:normal;">RoomId</td>
            <td  colspan="2" style="font-weight:normal;">long</td>
            <td  colspan="2" style="font-weight:normal;">是</td>
            <td  colspan="2" style="font-weight:normal;">房间id</td>
        </tr>
    </tbody>   
</table>

示例

```json
{
	"EventType": "ROOM_CREATE",
	"Time": 1624356396 ,
	"Signature": "c8ac997a192f6ce3fc290d3a81b81c34",
	"Details": {
		"RoomId": 12345678
	}
}
```





## 销毁房间回调

字段说明

<table>
    <thead>
        <tr>
            <th style="width:100px;font-weight:700;text-align: left;">名称</th>
            <th  colspan="2" style="width:800px; text-align: left;">类型</th>
            <th  colspan="2" style="width:800px; text-align: left;">是否必传</th>
            <th  colspan="2" style="width:800px; text-align: left;">说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="font-weight:normal;">RoomId</td>
            <td  colspan="2" style="font-weight:normal;">long</td>
            <td  colspan="2" style="font-weight:normal;">是</td>
            <td  colspan="2" style="font-weight:normal;">房间id</td>
        </tr>
    </tbody>   
</table>

示例

```json
{
	"EventType": "ROOM_DELETE",
	"Time": 1624356396 ,
	"Signature": "c8ac997a192f6ce3fc290d3a81b81c34",
	"Details": {
		"RoomId": 12345678
	}
}
```





## 加入房间回调

字段说明

<table>
    <thead>
        <tr>
            <th style="width:100px;font-weight:700;text-align: left;">名称</th>
            <th  colspan="2" style="width:800px; text-align: left;">类型</th>
            <th  colspan="2" style="width:800px; text-align: left;">是否必传</th>
            <th  colspan="2" style="width:800px; text-align: left;">说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="font-weight:normal;">RoomId</td>
            <td  colspan="2" style="font-weight:normal;">long</td>
            <td  colspan="2" style="font-weight:normal;">是</td>
            <td  colspan="2" style="font-weight:normal;">房间id</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">UID</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">是</td>
            <td  colspan="2" style="font-weight:normal;">用户ID</td>
        </tr>
    </tbody>   
</table>

示例

```json
{
	"EventType": "ROOM_JOIN",
	"Time": 1624356396 ,
	"Signature": "c8ac997a192f6ce3fc290d3a81b81c34",
	"Details": {
		"RoomId": 12345678,
		"UID": "UID123456"
	}
}
```





## 离开房间回调

字段说明

<table>
    <thead>
        <tr>
            <th style="width:100px;font-weight:700;text-align: left;">名称</th>
            <th  colspan="2" style="width:800px; text-align: left;">类型</th>
            <th  colspan="2" style="width:800px; text-align: left;">是否必传</th>
            <th  colspan="2" style="width:800px; text-align: left;">说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="font-weight:normal;">RoomId</td>
            <td  colspan="2" style="font-weight:normal;">long</td>
            <td  colspan="2" style="font-weight:normal;">是</td>
            <td  colspan="2" style="font-weight:normal;">房间id</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">UID</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">是</td>
            <td  colspan="2" style="font-weight:normal;">用户ID</td>
        </tr>
    </tbody>   
</table>

示例

```json
{
	"EventType": "ROOM_LEAVE",
	"Time": 1624356396 ,
	"Signature": "c8ac997a192f6ce3fc290d3a81b81c34",
	"Details": {
		"RoomId": 12345678,
		"UID": "UID123456"
	}
}
```





## 录制完成回调

字段说明

<table>
    <thead>
        <tr>
            <th style="width:100px;font-weight:700;text-align: left;">名称</th>
            <th  colspan="2" style="width:800px; text-align: left;">类型</th>
            <th  colspan="2" style="width:800px; text-align: left;">是否必传</th>
            <th  colspan="2" style="width:800px; text-align: left;">说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="font-weight:normal;">RoomId</td>
            <td  colspan="2" style="font-weight:normal;">long</td>
            <td  colspan="2" style="font-weight:normal;">是</td>
            <td  colspan="2" style="font-weight:normal;">房间id</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">DirPath</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">是</td>
            <td  colspan="2" style="font-weight:normal;">文件路径</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">FileName</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">是</td>
            <td  colspan="2" style="font-weight:normal;">文件名称</td>
        </tr>
    </tbody>   
</table>

示例

```json
{
	"EventType": "RECORD_FINISH",
	"Time": 1624356396 ,
	"Signature": "c8ac997a192f6ce3fc290d3a81b81c34",
	"Details": {
		"RoomId": 12345678,
		"DirPath": "/",
		"FileName": "12345678.mp4"
	}
}
```











