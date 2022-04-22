## 新增队列

### API接口URL

https://www.cloudroom.com/CLOUDROOM-API/queue/add

请求方式：`POST`



### 参数

[公共参数](README#common_param)

接口参数
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
            <td style="font-weight:normal;">QueueName</td>
            <td  colspan="2" style="font-weight:normal;">string</td>
            <td  colspan="2" style="font-weight:normal;">是</td>
            <td  colspan="2" style="font-weight:normal;">队列名称（64 长度以内）</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">Priority</td>
            <td  colspan="2" style="font-weight:normal;">Integer</td>
            <td  colspan="2" style="font-weight:normal;">否</td>
            <td  colspan="2" style="font-weight:normal;">队列优先级：1 ~ 10，默认 10 （数值越小，优先级越高）</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">Global</td>
            <td  colspan="2" style="font-weight:normal;">Integer</td>
            <td  colspan="2" style="font-weight:normal;">否</td>
            <td  colspan="2" style="font-weight:normal;">是否全局队列：0 否 1 是，默认 0</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">QueDesc</td>
            <td  colspan="2" style="font-weight:normal;">string</td>
            <td  colspan="2" style="font-weight:normal;">否</td>
            <td  colspan="2" style="font-weight:normal;">描述信息（200 长度以内）</td>
        </tr>
    </tbody>   
</table>


### 返回数据

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
            <td style="font-weight:normal;">RspCode</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">响应码</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">RspDesc</td>
            <td  colspan="2" style="font-weight:normal;">string</td>
            <td  colspan="2" style="font-weight:normal;">响应描述</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">Data</td>
            <td  colspan="2" style="font-weight:normal;">map</td>
            <td  colspan="2" style="font-weight:normal;">数据集合</td>
        </tr>
    </tbody>   
</table>

Data数据

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
            <td style="font-weight:normal;">QueueID</td>
            <td  colspan="2" style="font-weight:normal;">Integer</td>
            <td  colspan="2" style="font-weight:normal;">队列id</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">QueueName</td>
            <td  colspan="2" style="font-weight:normal;">string</td>
            <td  colspan="2" style="font-weight:normal;">队列名称</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">Priority</td>
            <td  colspan="2" style="font-weight:normal;">Integer</td>
            <td  colspan="2" style="font-weight:normal;">队列优先级：1 ~ 10 （数值越小，优先级越高）</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">Global</td>
            <td  colspan="2" style="font-weight:normal;">Integer</td>
            <td  colspan="2" style="font-weight:normal;">是否全局队列：0 否 1 是</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">QueDesc</td>
            <td  colspan="2" style="font-weight:normal;">string</td>
            <td  colspan="2" style="font-weight:normal;">描述信息</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">CreateTime</td>
            <td  colspan="2" style="font-weight:normal;">string</td>
            <td  colspan="2" style="font-weight:normal;">队列创建时间</td>
        </tr>
    </tbody>   
</table>


### 返回状态码RspCode说明

<table>
    <thead>
        <tr>
            <th style="width:100px;font-weight:700;text-align: left;">数值</th>
            <th  colspan="2" style="width:800px; text-align: left;">说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="font-weight:normal;">0</td>
            <td  colspan="2" style="font-weight:normal;">请求成功</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">1</td>
            <td  colspan="2" style="font-weight:normal;">用户所属企业没有接口API权限</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">2</td>
            <td  colspan="2" style="font-weight:normal;">账号不存在</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">3</td>
            <td  colspan="2" style="font-weight:normal;">密码错误</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">4</td>
            <td  colspan="2" style="font-weight:normal;">未获取到正确参数</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">5</td>
            <td  colspan="2" style="font-weight:normal;">未知错误</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">6</td>
            <td  colspan="2" style="font-weight:normal;">队列名称已存在</td>
        </tr>
    </tbody>   
</table>












