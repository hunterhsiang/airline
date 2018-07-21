/*飯店 廈門訂房*/
var json = [
			  {
			    "title" : "飯店 廈門訂房",
			    "item" : [
								{
									"name":"廈門金后酒店",
									"ENname":"Gem Hotel",
									"point":"位於繁華的中山路步行街",
									"price":"1,268",
									"link":"https://hotel.eztravel.com.tw/oversea/introduction/HTFZ000289954",
									"img":"image/HTFZ000289954.jpg"
								},
								{
									"name":"廈門美侖金悅酒店",
									"ENname":"Gallery Hotel Xiamen",
									"point":"客房格調高雅，融合西方現代氣息",
									"price":"1,138",
									"link":"https://hotel.eztravel.com.tw/oversea/introduction/HTFZ000290141",
									"img":"image/HTFZ000290141.jpg"
								},
								{
									"name":"廈門華美椰林酒店",
									"ENname":"Huamei Yelin Hotel",
									"point":"客房裝修簡約時尚、溫馨浪漫",
									"price":"1,368",
									"link":"https://hotel.eztravel.com.tw/oversea/introduction/HTFZ000290347",
									"img":"image/HTFZ000290347.jpg"
								},
								{
									"name":"廈門京閩中心酒店",
									"ENname":"Jingmin Central Hotel Xiamen",
									"point":"酒店提供全天接機和小三通碼頭接船服務",
									"price":"2,625",
									"link":"https://hotel.eztravel.com.tw/oversea/introduction/HTFZ000289826",
									"img":"image/HTFZ000289826.jpg"
								},
								{
									"name":"廈門泰谷酒店",
									"ENname":"Tegoo Hotel",
									"point":"無菸藝術精品酒店，入住獨一無二的客房",
									"price":"2,862",
									"link":"https://hotel.eztravel.com.tw/oversea/introduction/HTFZ000289781",
									"img":"image/HTFZ000289781.jpg"
								},
								{
									"name":"廈門希爾頓逸林酒店",
									"ENname":"DoubleTree by Hilton",
									"point":"臨近五通碼頭，飽覽蔚藍海域、遊艇會及城市景觀",
									"price":"2,912",
									"link":"https://hotel.eztravel.com.tw/oversea/introduction/HTFZ001786458",
									"img":"image/HTFZ001786458.jpg"
								},
								{
									"name":"廈門喜來登酒店",
									"ENname":" Sheraton Xiamen Hotel",
									"point":"江頭公園美景盡收眼底",
									"price":"3,316",
									"link":"https://hotel.eztravel.com.tw/oversea/introduction/HTFZ000289788",
									"img":"image/HTFZ000289788.jpg"
								},
								{
									"name":"廈門國際會展酒店",
									"ENname":"Xiamen International Seaside Hotel",
									"point":"贈免費接送服務一次！",
									"price":"2,670",
									"link":"https://hotel.eztravel.com.tw/oversea/introduction/HTFZ000289878",
									"img":"image/HTFZ000289878.jpg"
								},
								{
									"name":"廈門國際會議中心酒店",
									"ENname":"Xiamen International Conference Hotel",
									"point":"贈免費接送服務一次！",
									"price":"3,750",
									"link":"https://hotel.eztravel.com.tw/oversea/introduction/HTFZ000289877",
									"img":"image/HTFZ000289877.jpg"
								},
								{
									"name":"廈門火車站蓮花路口地鐵站和頤酒店",
									"ENname":"",
									"point":"贈免費接送服務一次！",
									"price":"1,345",
									"link":"https://hotel.eztravel.com.tw/oversea/introduction/HTFZ000930620",
									"img":"image/HTFZ000930620.jpg"
								},
								{
									"name":"廈門大億頤豪酒店",
									"ENname":"DaYiYiHoHotel",
									"point":"贈免費接送服務一次！",
									"price":"1,630",
									"link":"https://hotel.eztravel.com.tw/oversea/introduction/HTFZ000290005",
									"img":"image/HTFZ000290005.jpg"
								},
								{
									"name":"廈門翔鷺國際大酒店",
									"ENname":"Xianglu Grand Hotel",
									"point":"贈免費接送服務一次！",
									"price":"1,850",
									"link":"https://hotel.eztravel.com.tw/oversea/introduction/HTFZ000289829",
									"img":"image/HTFZ000289829.jpg"
								}
								]
			   }
			    
			]


/*以下是程式碼區*/

/*宣告 要把JSON置入哪裡*/
var eachhotel_01 = $(".each_hotel_01 ");

/*宣告 陣列內的數量*/
var json_0 = json[0].item.length;


/*飯店 廈門訂房*/

	for (var item = 0; item <1; item++) {
		for (var j = 0; j < json_0; j++){
				eachhotel_01.append("<div class='col-xs-12 col-sm-6 col-md-4'><div class='row'><div class='col-xs-12'><a href='"+ json[item].item[j].link +"' target='_blank' class='thumbnail' title='"+ json[item].item[j].name +" "+ json[item].item[j].ENname +" │ "+ json[item].item[j].price +"元起'><div class='col-xs-12 productblocklimg' style='background-image: url("+ json[item].item[j].img +");'></div><div class='clearfix'></div><div class='productblock'><div class='text-center'><div class='text-left special-title'><h3 class='text-primary'><strong>"+ json[item].item[j].name +"</strong><br/><small>"+ json[item].item[j].ENname +"</small></h3><h4 class='txt-spec'>"+ json[item].item[j].point +"</h4></div></div><h5 class='text-right'><span class='dollartxt'></span><span class='productPrice'> "+ json[item].item[j].price +" </span><span class='dollartxt'>元起</span></h5></div></a></div></div></div></div>");
       } 
     }

