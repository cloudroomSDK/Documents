
## 查询用量（按天统计）

### API接口URL

https://www.cloudroom.com/CLOUDROOM-API/room/usageInfo/all/query

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
            <td style="font-weight:normal;">FromDate</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">否</td>
            <td  colspan="2" style="font-weight:normal;">起始时间，例如2017-01-01，格式：YYYY-MM-DD</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">ToDate</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">否</td>
            <td  colspan="2" style="font-weight:normal;">截止时间，例如2017-01-10，格式：YYYY-MM-DD</td>
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
            <td style="font-weight:normal;">Date</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">日期</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">Audio</td>
            <td  colspan="2" style="font-weight:normal;">Long</td>
            <td  colspan="2" style="font-weight:normal;">音频时长（单位：分钟）</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">WB</td>
            <td  colspan="2" style="font-weight:normal;">Long</td>
            <td  colspan="2" style="font-weight:normal;">白板时长（单位：分钟）</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">RecordCA</td>
            <td  colspan="2" style="font-weight:normal;">Long</td>
            <td  colspan="2" style="font-weight:normal;">录制1~5方时长（单位：分钟）</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">RecordCB</td>
            <td  colspan="2" style="font-weight:normal;">Long</td>
            <td  colspan="2" style="font-weight:normal;">录制6~9方时长（单位：分钟)</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">SD</td>
            <td  colspan="2" style="font-weight:normal;">Long</td>
            <td  colspan="2" style="font-weight:normal;">视频标清时长（单位：分钟）</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">HD</td>
            <td  colspan="2" style="font-weight:normal;">Long</td>
            <td  colspan="2" style="font-weight:normal;">视频高清时长（单位：分钟）</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">HDP</td>
            <td  colspan="2" style="font-weight:normal;">Long</td>
            <td  colspan="2" style="font-weight:normal;">视频超清时长（单位：分钟）</td>
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
            <td  colspan="2" style="font-weight:normal;">缺少必传参数</td>
        </tr>
    </tbody>   
</table>














