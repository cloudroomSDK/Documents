## 查询录像文件

### API接口URL

https://www.cloudroom.com/CLOUDROOM-API/netDisk/query

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
















