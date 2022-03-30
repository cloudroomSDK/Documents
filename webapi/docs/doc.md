---
sidebarDepth: 1
---

# 文档管理

## 查询文档

### API接口URL

https://www.cloudroom.com/CLOUDROOM-API/doc/query

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
            <td style="font-weight:normal;">FileName</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">否</td>
            <td  colspan="2" style="font-weight:normal;">文件名称</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">FilePath</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">否</td>
            <td  colspan="2" style="font-weight:normal;">文件路径</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">DirPath</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">否</td>
            <td  colspan="2" style="font-weight:normal;">目录路径</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">PageSize</td>
            <td  colspan="2" style="font-weight:normal;">Integer</td>
            <td  colspan="2" style="font-weight:normal;">否</td>
            <td  colspan="2" style="font-weight:normal;">分页查询每页数量，最小值 1 最大值 50 ，默认值 20 ，超出范围则使用默认值</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">PageNumber</td>
            <td  colspan="2" style="font-weight:normal;">Integer</td>
            <td  colspan="2" style="font-weight:normal;">否</td>
            <td  colspan="2" style="font-weight:normal;">分页查询页数，最小值 1 ，默认值 1 ，超出范围则使用默认值</td>
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
            <td style="font-weight:normal;">FileNum</td>
            <td  colspan="2" style="font-weight:normal;">Integer</td>
            <td  colspan="2" style="font-weight:normal;">查询的文件总数量</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">FileData</td>
            <td  colspan="2" style="font-weight:normal;">list</td>
            <td  colspan="2" style="font-weight:normal;">查询的文件</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">DirData</td>
            <td  colspan="2" style="font-weight:normal;">list</td>
            <td  colspan="2" style="font-weight:normal;">文档目录</td>
        </tr>
    </tbody>   
</table>

FileData

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
            <td style="font-weight:normal;">FileId</td>
            <td  colspan="2" style="font-weight:normal;">Integer</td>
            <td  colspan="2" style="font-weight:normal;">文件ID</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">FileName</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">文件名称</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">FilePath</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">文件路径</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">DownPath</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">下载路径</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">Size</td>
            <td  colspan="2" style="font-weight:normal;">Integer</td>
            <td  colspan="2" style="font-weight:normal;">文件大小，单位 b</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">Createtime</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">创建时间</td>
        </tr>
    </tbody>   
</table>

DirData

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
            <td style="font-weight:normal;">DirId</td>
            <td  colspan="2" style="font-weight:normal;">Integer</td>
            <td  colspan="2" style="font-weight:normal;">目录ID</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">DirName</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">目录名称</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">DirPath</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">目录路径</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">ParentId</td>
            <td  colspan="2" style="font-weight:normal;">Integer</td>
            <td  colspan="2" style="font-weight:normal;">父级目录ID</td>
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
            <td  colspan="2" style="font-weight:normal;">查询的账户不能为空</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">7</td>
            <td  colspan="2" style="font-weight:normal;">查询的账户错误</td>
        </tr>
    </tbody>   
</table>

## 删除文档

### API接口URL

https://www.cloudroom.com/CLOUDROOM-API/doc/delete

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
            <td style="font-weight:normal;">FileType</td>
            <td  colspan="2" style="font-weight:normal;">Integer</td>
            <td  colspan="2" style="font-weight:normal;">否</td>
            <td  colspan="2" style="font-weight:normal;">删除类型： 0 文件 1 文件夹，默认 0</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">FilePath</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">否</td>
            <td  colspan="2" style="font-weight:normal;">文件路径</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">DirPath</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">否</td>
            <td  colspan="2" style="font-weight:normal;">目录路径</td>
        </tr>
    </tbody>   
</table>
注：当删除文件时，文件路径必传；当删除文件夹时，文件夹路径必须传

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
            <td  colspan="2" style="font-weight:normal;">文件所属的账户不能为空</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">7</td>
            <td  colspan="2" style="font-weight:normal;">文件所属的账户错误</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">8</td>
            <td  colspan="2" style="font-weight:normal;">文件ID和文件路径必须传一项</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">9</td>
            <td  colspan="2" style="font-weight:normal;">文件路径错误</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">10</td>
            <td  colspan="2" style="font-weight:normal;">找不到该文件</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">11</td>
            <td  colspan="2" style="font-weight:normal;">文件夹ID和文件路径必须传一项</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">12</td>
            <td  colspan="2" style="font-weight:normal;">文件夹路径错误</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">13</td>
            <td  colspan="2" style="font-weight:normal;">找不到该文件夹</td>
        </tr>
    </tbody>   
</table>

## 上传文档

### API接口URL

https://www.cloudroom.com/CLOUDROOM-API/doc/upload

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
注：大小不能超过50M；支持格式：doc、docx、dot、dotx、rtf、ppt、pptx、pps、ppsx、xls、xlsx、xlt、xltx、xlw、xlwx、et、ett、wps、wpt、dps、dpt、txt、log、ini、bmp、png、jpg、jpeg、pdf

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
















