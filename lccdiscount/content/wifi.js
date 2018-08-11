/*WiFi*/
var json = [
			  {
			    "title" : "東北亞",
			    "item" : [
							{"name":"日本。WIFI游客邦上網吃到飽","point":"每日前5G高速","price":"","link":"https://activity.eztravel.com.tw/global/introduction/TKAI000005566"},
							{"name":"日本。上網卡7天吃到飽","point":"前1.6GB高速","price":"","link":"https://activity.eztravel.com.tw/global/noIndex/TKAI000006518"},
							{"name":"日本。上網卡7天吃到飽","point":"前3GB高速","price":"","link":"https://activity.eztravel.com.tw/global/introduction/TKAI000006640"},
							{"name":"韓國。WIFI游客邦上網吃到飽","point":"吃到飽不降速","price":"","link":"https://activity.eztravel.com.tw/global/introduction/TKAI000005562"},
							{"name":"韓國。上網卡7天吃到飽","point":"前3GB高速","price":"","link":"https://activity.eztravel.com.tw/global/introduction/TKAI000007036"}
							]
			   },
			   {
			    "title" : "東南亞",
			    "item" : [
							{"name":"泰國。上網卡8天吃到飽","point":"3GB高速+100泰銖通話費","price":"","link":"https://activity.eztravel.com.tw/global/introduction/TKAI000006237"},
							{"name":"新加坡。上網卡7天吃到飽","point":"100GB大流量","price":"","link":"https://activity.eztravel.com.tw/global/introduction/TKAI000007330"},
							{"name":"菲、柬。上網卡8天吃到飽","point":"前4GB高速","price":"","link":"https://activity.eztravel.com.tw/global/introduction/TKAI000005714"},
							{"name":"泰/馬/新/尼。WIFI上網吃到飽","point":"每日前500MB高速","price":"","link":"https://activity.eztravel.com.tw/global/introduction/TKAI000005362"},
							{"name":"菲、越、柬。WIFI上網吃到飽","point":"每日前500MB高速","price":"","link":"https://activity.eztravel.com.tw/global/introduction/TKAI000005730"}
							]
			   },
			   {
			    "title" : "其他",
			    "item" : [
							{"name":"印度、尼泊爾。上網卡8天吃到飽","point":"前4GB高速","price":"","link":"https://activity.eztravel.com.tw/global/introduction/TKAI000005750"},
							{"name":"澳洲。8天上網卡吃到飽","point":"前4GB高速","price":"","link":"https://activity.eztravel.com.tw/global/introduction/TKAI000005731"},
							{"name":"歐洲。EE 30天上網卡","point":"2GB流量","price":"","link":"https://activity.eztravel.com.tw/global/introduction/TKAI000007190"},
							{"name":"紐、澳。WIFI上網吃到飽","point":"每日前500MB高速","price":"","link":"https://activity.eztravel.com.tw/global/introduction/TKAI000005363"},
							{"name":"歐洲。WIFI單國9日租借券","point":"每日前500MB高速","price":"","link":"https://activity.eztravel.com.tw/global/introduction/TKAI000005459"}		
							]
			   }
			    
			]


/*以下是程式碼區*/

/*宣告 要把JSON置入哪裡*/
var eachwifi_01 = $(".each_wifi_01 ");
var eachwifi_02 = $(".each_wifi_02 ");
var eachwifi_03 = $(".each_wifi_03 ");

/*宣告 陣列內的數量*/
var json_0 = json[0].item.length;
var json_1 = json[1].item.length;
var json_2 = json[2].item.length;


/*東北亞*/

	for (var item = 0; item <1; item++) {
		for (var j = 0; j < json_0; j++){
				if(json[item].item[j].price == ""){
				eachwifi_01.append("<div class='col-xs-12'><div class='row'><a href='"+ json[item].item[j].link +"' target='_blank' class='wifithumbnail disabled btn' title='"+ json[item].item[j].name +"'><div class='wifiblock'><div class='text-center'><div class='text-left special-title'><h4><strong>"+ json[item].item[j].name +"</strong></h4><h5 class='text-warning'>"+ json[item].item[j].point +"</h5></div></div></div></a></div></div></div>");
			}
			else{
				eachwifi_01.append("<div class='col-xs-12'><div class='row'><a href='"+ json[item].item[j].link +"' target='_blank' class='wifithumbnail disabled btn' title='"+ json[item].item[j].name +" │ "+ json[item].item[j].price +"元起'><div class='wifiblock'><div class='text-center'><div class='text-left special-title'><h4><strong>"+ json[item].item[j].name +"</strong></h4><h5 class='text-warning'>"+ json[item].item[j].point +"</h5></div></div><h5 class='text-right'><span class='dollartxt'></span><span class='productPrice'> "+ json[item].item[j].price +" </span><span class='dollartxt'>元起</span></h5></div></a></div></div></div>");
			}
       } 
     }

/*東南亞*/

	for (var item = 1; item <2; item++) {
		for (var j = 0; j < json_1; j++){
				if(json[item].item[j].price == ""){
				eachwifi_02.append("<div class='col-xs-12'><div class='row'><a href='"+ json[item].item[j].link +"' target='_blank' class='wifithumbnail disabled btn' title='"+ json[item].item[j].name +"'><div class='wifiblock'><div class='text-center'><div class='text-left special-title'><h4><strong>"+ json[item].item[j].name +"</strong></h4><h5 class='text-warning'>"+ json[item].item[j].point +"</h5></div></div></div></a></div></div></div>");
			}
			else{
				eachwifi_02.append("<div class='col-xs-12'><div class='row'><a href='"+ json[item].item[j].link +"' target='_blank' class='wifithumbnail disabled btn' title='"+ json[item].item[j].name +" │ "+ json[item].item[j].price +"元起'><div class='wifiblock'><div class='text-center'><div class='text-left special-title'><h4><strong>"+ json[item].item[j].name +"</strong></h4><h5 class='text-warning'>"+ json[item].item[j].point +"</h5></div></div><h5 class='text-right'><span class='dollartxt'></span><span class='productPrice'> "+ json[item].item[j].price +" </span><span class='dollartxt'>元起</span></h5></div></a></div></div></div>");
			}
       } 
     }

/*紐澳、印度、希臘、德國*/

	for (var item = 2; item <3; item++) {
		for (var j = 0; j < json_2; j++){
				if(json[item].item[j].price == ""){
				eachwifi_03.append("<div class='col-xs-12'><div class='row'><a href='"+ json[item].item[j].link +"' target='_blank' class='wifithumbnail disabled btn' title='"+ json[item].item[j].name +"'><div class='wifiblock'><div class='text-center'><div class='text-left special-title'><h4><strong>"+ json[item].item[j].name +"</strong></h4><h5 class='text-warning'>"+ json[item].item[j].point +"</h5></div></div></div></a></div></div></div>");
			}
			else{
				eachwifi_03.append("<div class='col-xs-12'><div class='row'><a href='"+ json[item].item[j].link +"' target='_blank' class='wifithumbnail disabled btn' title='"+ json[item].item[j].name +" │ "+ json[item].item[j].price +"元起'><div class='wifiblock'><div class='text-center'><div class='text-left special-title'><h4><strong>"+ json[item].item[j].name +"</strong></h4><h5 class='text-warning'>"+ json[item].item[j].point +"</h5></div></div><h5 class='text-right'><span class='dollartxt'></span><span class='productPrice'> "+ json[item].item[j].price +" </span><span class='dollartxt'>元起</span></h5></div></a></div></div></div>");
			}
       } 
     }

