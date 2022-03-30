## 电子白板
功能简介：  
实现文件内容实时同步共享。

g_board_id = CRVideo_Createboard("Web Board-1", 960, 540, 1);
（CRVideo_NotifyInitBoards.callback  新入会者
当前在会议的：notifyCreateBoard

）


				CRVideo_InitBoardPageDat(g_board_id, 0, "", "")
				CRVideo_Switchtopage(2, g_board_id)

                或者：var currentBoard = g_boardObj.getCurBoardID();
					CRVideo_Switchtopage(2, currentBoard);

////1.最后创建的白板，为会议中的当前白板;
//2.第一个进会议的人：g_board_id 保留空白白板id;  非第一人，g_board_id 最后一个非空的白板，是当前白板id;
                CRVideo_NotifyInitBoards.callback = function (boardObjs) {


                    打开本地文件时  CRVideo_NotifyCoverSuccess.callback = function(coverRsltObjs)
{}  CRVideo_NotifyCoverFailed.callback = function(coverErr){
CRVideo_NotifyCoverStateChange.callback = function(jsonState){

    //监听白板被创建
CRVideo_NotifyCreateBoard.callback = function( jsonBoard,operatorID){


//打开文档
CRVideo_GetOpenFileName
if(!!g_openFile){
			$(".page_turn_file").hide();
			CRVideo_CoverFile(g_openFile,"{}");

//关闭
	setTimeout(function(){
			var current = g_boardObj.getCurBoardID();
		//	console.log("正在关闭文档 ,="+current)
			CRVideo_Closeboard(current);
		},1000)
    //通知白板被关闭
CRVideo_NotifyCloseBoard.callback = function(boardID,operatorID){

    //通知白板翻页
CRVideo_NotifyBoardCurPageNo.callback = function(boardID,pageNo,pagePos1,pagePos2,operatorID){


    翻页 
    var operate_board_id = g_boardObj.getCurBoardID();
		var g_page = g_boardObj.getBoardInfo(operate_board_id);
		var boardId = g_boardObj.boardID;
		var curren = g_page.curPage + 1;//当前是多少页
		var zon = g_page.pageCount;
		if(curren < zon){
			g_boardObj.setCurBoard(operate_board_id,g_page.curPage + 1);

            //撤销 恢复 删除
1. [](#)
1. [](#)
1. [](#)
1. [](#)


<h3 id=>1.</h3> 

每次


- 接口调用：

```js

```

- 回调通知：

```js


```

相关API请参考：
* [](API.md#)

相关结构定义请参考：
* [](Constant.md#)
* [](TypeDefinitions.md#)


