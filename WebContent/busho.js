// AjaxでJSONを取得する
function executeAjax () {
	'use strict';

	// ?以降のパラメータを取得
	// 今回で言うとhttp://localhost:8080/wt1/hobby.html?q=0001でいう0001が取得される


	// --------------- TODO 編集ここから---------------


	$.ajax({
		type : 'GET',
		url : '/myFirstApp/BushoServlet',
		dataType : 'json',
		success : function (json) {
			console.log(json);
			//$('#bushodata').html(json.bushoId );
			//$('#bushodata').html(json.bushoName );


			for(var i=0;i<json.length;i++){
				var busho = json[i];
				var tableElement='';
				 tableElement+='<tr>'
								+'<td>'+busho.bushoId+'</td>'
								+'<td>'+busho.bushoName+'</td>'
								+'<td>'+'<button id="js-henshu">編集</button>'+'</td>'
								+'<td>'+'<button id="js-delete">削除</button>'+'</td>'
								+'</tr>'
				$('#bushoData').append(tableElement);
			}

		}
	});
	// ---------------ここまで---------------

}

$(document).ready(function () {
	'use strict';

	// 初期表示用
	executeAjax();

	// 更新ボタンにイベント設定
	$('#searchBtn').bind('click',executeAjax);

});