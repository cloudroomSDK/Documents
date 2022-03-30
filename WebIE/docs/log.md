

CRVideo_EnableLog2File

CRVideo_EnableLogReport


网盘文档：
1. 查询文档列表

void listNetDiskDocFile(string dir)
2. 上传文档并转换

void uploadDocFileToNetDisk(string svrPathFileName， string locPathFileName)
3. 下载源始文档

void downloadNetDiskDocFile(string svrPathFileName, string locPathFileName)
4. 消文档传输

void cancelTransforNetDiskDocFile(string svrPathFileName)
5.删除文档

void deleteNetDiskDocFile(string svrPathFileName)

获取文档的转换信息

void getNetDiskDocFilePageInfo(string svrPathFileName)

下载文档转换后的页文件

void downloadNetDiskDocFilePage(string pagePathFileName, string locPathFileName)