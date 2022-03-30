
## 上传录像文件

### API接口URL

https://www.cloudroom.com/CLOUDROOM-API/netDisk/upload

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
            <td style="font-weight:normal;">file</td>
            <td  colspan="2" style="font-weight:normal;">File</td>
            <td  colspan="2" style="font-weight:normal;">是</td>
            <td  colspan="2" style="font-weight:normal;">上传文件</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">FileName</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">否</td>
            <td  colspan="2" style="font-weight:normal;">文件名称（带后缀），避免上传文件所带的文件名出现乱码情况，为了避免特殊字符造成问题，请对参数进行urlencode编码处理</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">DirPath</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">否</td>
            <td  colspan="2" style="font-weight:normal;">文件路径，如果不传，则上传到首页目录下，为了避免特殊字符造成问题，请对参数进行urlencode编码处理。例如：需要上传到首页下的目录2018中，则目录为 //2018 ，传值就是 %2f%2f2018</td>
        </tr>
    </tbody>   
</table>
注：只支持MP4文件，文件大小不能大于500M

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
            <td  colspan="2" style="font-weight:normal;">无效文件类型</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">7</td>
            <td  colspan="2" style="font-weight:normal;">文件大小超过500M</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">8</td>
            <td  colspan="2" style="font-weight:normal;">获取数据流失败</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">9</td>
            <td  colspan="2" style="font-weight:normal;">文件已存在</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">10</td>
            <td  colspan="2" style="font-weight:normal;">容量不足，上传失败</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">11</td>
            <td  colspan="2" style="font-weight:normal;">文件名错误，需要带后缀</td>
        </tr>
    </tbody>   
</table>
















