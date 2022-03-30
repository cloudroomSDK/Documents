---
sidebarDepth: 1
---

# 录像管理

## 查询录像文件

### API接口URL

https://www.cloudroom.com/CLOUDROOM-API/netDisk/query

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
            <td  colspan="2" style="font-weight:normal;">string</td>
            <td  colspan="2" style="font-weight:normal;">否</td>
            <td  colspan="2" style="font-weight:normal;">详细文件地址，例如文件 demo.mp4 在根目录下，则值为 /demo.mp4；在二级目录 A 下，则值为 /A/demo.mp4</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">FilePath</td>
            <td  colspan="2" style="font-weight:normal;">string</td>
            <td  colspan="2" style="font-weight:normal;">否</td>
            <td  colspan="2" style="font-weight:normal;">文件夹地址，要以一个/为结束，例如A目录下的录像，则值为 /A/；</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">SearchTime</td>
            <td  colspan="2" style="font-weight:normal;">string</td>
            <td  colspan="2" style="font-weight:normal;">否</td>
            <td  colspan="2" style="font-weight:normal;">查询时间（用于解决翻页的脏数据问题，值传返回的searchTime即可）</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">PageNumber</td>
            <td  colspan="2" style="font-weight:normal;">Integer</td>
            <td  colspan="2" style="font-weight:normal;">否</td>
            <td  colspan="2" style="font-weight:normal;">分页查询页数，最小值 1 ，默认 1</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">PageSize</td>
            <td  colspan="2" style="font-weight:normal;">Integer</td>
            <td  colspan="2" style="font-weight:normal;">否</td>
            <td  colspan="2" style="font-weight:normal;">分页查询每页数量，最小值 1 最大值 50 ，默认 20</td>
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
            <td style="font-weight:normal;">fileList</td>
            <td  colspan="2" style="font-weight:normal;">list</td>
            <td  colspan="2" style="font-weight:normal;">文件集合</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">dirData</td>
            <td  colspan="2" style="font-weight:normal;">list</td>
            <td  colspan="2" style="font-weight:normal;">目录集合</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">fileNum</td>
            <td  colspan="2" style="font-weight:normal;">Long</td>
            <td  colspan="2" style="font-weight:normal;">录像总数</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">searchTime</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">查询时间</td>
        </tr>
    </tbody>   
</table>

fileList数据

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
            <td style="font-weight:normal;">id</td>
            <td  colspan="2" style="font-weight:normal;">Integer</td>
            <td  colspan="2" style="font-weight:normal;">文件id</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">fileName</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">文件名称</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">filePath</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">文件路径</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">fileSize</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">文件大小</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">downUrl</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">文件下载路径</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">ctime</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">文件上传时间</td>
        </tr>
    </tbody>   
</table>

dirData数据

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
            <td style="font-weight:normal;">dirId</td>
            <td  colspan="2" style="font-weight:normal;">Integer</td>
            <td  colspan="2" style="font-weight:normal;">目录id</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">parentId</td>
            <td  colspan="2" style="font-weight:normal;">Integer</td>
            <td  colspan="2" style="font-weight:normal;">父目录id</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">dirPath</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">目录路径</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">dirName</td>
            <td  colspan="2" style="font-weight:normal;">String</td>
            <td  colspan="2" style="font-weight:normal;">目录名称</td>
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

## 删除录像文件

### API接口URL

https://www.cloudroom.com/CLOUDROOM-API/netDisk/delete

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
            <td  colspan="2" style="font-weight:normal;">详细文件地址，例如文件 demo.mp4 在根目录下，则值为 /demo.mp4；在二级目录 A 下，则值为 /A/demo.mp4</td>
        </tr>
        <tr>
            <td style="font-weight:normal;">FileID</td>
            <td  colspan="2" style="font-weight:normal;">Integer</td>
            <td  colspan="2" style="font-weight:normal;">否</td>
            <td  colspan="2" style="font-weight:normal;">文件ID</td>
        </tr>
    </tbody>   
</table>
注：FileName和FileID其中一个必须传值，两个都传值则以FileID为准

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
    </tbody>   
</table>

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
















