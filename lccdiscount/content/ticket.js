/*票券*/
var json = [
			  {
			    "title" : "票券",
			    "item" : [
							{"name":"新加坡S.E.A海洋館","point1":"全球最大海洋館","point2":"電子票兌換入場便利省錢！","link":"https://activity.eztravel.com.tw/global/noIndex/TKAI000003037","price":"額外95折","img":"https://www.eztravel.com.tw/ss_static/images/activity/TKAI000002275_02.jpg"},
							{"name":"吉隆坡雙威水上樂園","point1":"多種豐富刺激的水上遊戲","point2":"親子旅遊清涼消暑推薦！","link":"https://activity.eztravel.com.tw/global/noIndex/TKAI000004070","price":"額外95折","img":"https://www.eztravel.com.tw/ss_static/images/activity/CTT8084_top.jpg"},
							{"name":"日本全九州SUNQ PASS","point1":"可搭巴士路線約達2,400條","point2":"輕鬆走遍九州知名景點","link":"https://activity.eztravel.com.tw/global/noIndex/TKAI000007785","price":"額外95折","img":"https://www.eztravel.com.tw/ss_static/images/activity/TKEI000003819--.jpg"},
							{"name":"阪急交通套票","point1":"超值優惠，遊大阪必備","point2":"利木津巴士+阪急電鐵乘車券","link":"https://activity.eztravel.com.tw/global/noIndex/TKEI000007782","price":"額外95折","img":"https://www.eztravel.com.tw/ss_static/images/tk/TKEI7565.jpg"},
							{"name":"首爾HERO塗鴉秀","point1":"榮獲韓國多項大獎","point2":"多元的表演方式非看不可！","link":"https://activity.eztravel.com.tw/global/noIndex/TKAI000007790","price":"額外95折","img":"https://www.eztravel.com.tw/ss_static/images/tk/TKAI000002673_01.jpg"},
							{"name":"桃機貴賓室3hr","point1":"全球首間獨立貴賓室網絡","point2":"全天候現點現做中西美食","link":"https://activity.eztravel.com.tw/global/noIndex/TKAI000007784","price":"額外95折","img":"https://www.eztravel.com.tw/event/2016-japan-frt/images/plaza01.jpg"}
							]
			   }
			    
			]


/*以下是程式碼區*/

/*宣告 要把JSON置入哪裡*/
var eachticket_01 = $(".each_ticket_01 ");

/*宣告 陣列內的數量*/
var json_0 = json[0].item.length;

/*票券*/

	for (var item = 0; item <1; item++) {
		for (var j = 0; j < json_0; j++){
				eachticket_01.append("<div class='col-xs-12 col-sm-6 col-md-4'><div class='row'><div class='col-xs-12'><a href='"+ json[item].item[j].link +"' target='_blank' class='thumbnail' title='"+ json[item].item[j].name +" │ "+ json[item].item[j].price +"'><div class='col-xs-12 productblocklimg' style='background-image: url("+ json[item].item[j].img +");'></div><div class='clearfix'></div><div class='productblock'><div class='text-center'><div class='text-left special-title'><h4><strong>"+ json[item].item[j].name +"</strong></h4><h5 class='text-warning'>"+ json[item].item[j].point1 +"</h5><h5 class='text-warning'>"+ json[item].item[j].point2 +"</h5></div></div><h5 class='text-right'><span class='productPrice'> "+ json[item].item[j].price +" </span></h5></div></a></div></div></div>");
       } 
     }

