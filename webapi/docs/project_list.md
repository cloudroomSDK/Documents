
## 查询项目列表

### API接口URL

https://www.cloudroom.com/CLOUDROOM-API/project/query/list

### 参数

[公共参数](README#common_param)

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
            <td style="font-weight:normal;">ProjectCount</td>
            <td  colspan="2" style="font-weight:normal;">Integer</td>
            <td  colspan="2" style="font-weight:normal;">项目数量</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">ProjectList</td>
            <td  colspan="2" style="font-weight:normal;">List</td>
            <td  colspan="2" style="font-weight:normal;">项目列表</td>
        </tr>
    </tbody>   
</table>


ProjectList数据

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
            <td style="font-weight:normal;">ProjectName</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">项目名称</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">AppId</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">项目账号id</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">AppSecret</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">项目账号密钥</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">Status</td>
            <td  colspan="2" style="font-weight:normal;">Integer</td>
            <td  colspan="2" style="font-weight:normal;">项目状态，0：关闭；1：开启</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">AuthType</td>
            <td  colspan="2" style="font-weight:normal;">Integer</td>
            <td  colspan="2" style="font-weight:normal;">鉴权方式，0：Secret鉴权；1：Token鉴权</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">CreateTime</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">创建时间</td>
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
    </tbody>   
</table>
















