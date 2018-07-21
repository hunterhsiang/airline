/*心理測驗*/
var json = [
			  {
			    "title" : "太陽眼鏡",
			    "item" : [
							{"title":"美國加州六旗魔術山主題公園","point":"全美國最長、最高雲霄飛車","img":"image/glasses_01.jpg","airticketlink":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-LAX-20180905-20180911-TAIPEI-LOS%20ANGELES?nonStop=N&passenger=100&cabin=A&airlineFilters=all","doorlink":"https://activity.eztravel.com.tw/global/introduction/TKAI000006809"},
							{"title":"杜拜水世界冒險樂園","point":"9層樓滑水道帶你穿過鯊魚潟湖","img":"image/glasses_03.jpg","airticketlink":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-DXB-20180814-20180820?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","doorlink":"https://activity.eztravel.com.tw/global/introduction/CTT1409628"},
							{"title":"日本富士急樂園","point":"世界最大傾斜角度「高飛車」","img":"image/glasses_05.jpg","airticketlink":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-TYO-20180811-20180818?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","doorlink":"https://activity.eztravel.com.tw/global/introduction/CTT90074"}
							]
				   },

			    {
			    "title" : "一本書",
			    "item" : [
							{"title":"美國佛羅里達迪士尼","point":"全球人氣Top1","img":"image/book_01.jpg","airticketlink":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-MCO-20180827-20180904?nonStop=N&passenger=100&cabin=A&airlineFilters=all","doorlink":"https://activity.eztravel.com.tw/global/introduction/TKAI000006851"},
							{"title":"美國加州迪士尼","point":"全球人氣Top2","img":"image/book_02.jpg","airticketlink":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-LAX-20180828-20180905?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","doorlink":"https://activity.eztravel.com.tw/global/introduction/TKAI000006615"},
							{"title":"日本東京迪士尼","point":"全球人氣Top3","img":"image/book_03.jpg","airticketlink":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-TYO-20180811-20180818?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","doorlink":"https://activity.eztravel.com.tw/global/introduction/TKAI000001351"}
							]
			    },
			    {
			    "title" : "香水",
			    "item" : [
							{"title":"日本名古屋樂高樂園","point":"2017年4月全新開幕","img":"image/perfume_01.jpg","airticketlink":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-NGO-20180811-20180818?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","doorlink":"https://activity.eztravel.com.tw/global/introduction/CTT2474582"},
							{"title":"韓國 Running Man 體驗館","point":"2017年11月全新開幕","img":"image/perfume_03.jpg","airticketlink":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-SEL-20180811-20180816?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","doorlink":"https://activity.eztravel.com.tw/global/introduction/TKAI000007223"},
							{"title":"日本大阪環球影城","point":"2018哈利波特4D完整版登場","img":"image/perfume_05.jpg","airticketlink":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-OSA-20180810-20180816?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","doorlink":"https://activity.eztravel.com.tw/global/introduction/TKAI000001521"}
							]
			    },
			     {
			    "title" : "旅伴",
			    "item" : [
							{"title":"美國佛羅里達水陸樂高樂園","point":"水陸雙玩高CP值","img":"image/partner_01.jpg","airticketlink":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-MCO-20180827-20180904?nonStop=N&passenger=100&cabin=A&airlineFilters=all","doorlink":"https://activity.eztravel.com.tw/global/introduction/TKAI000006835"},
							{"title":"珠海長隆國際海洋王國","point":"動物+設施+遊行+馬戲團表演","img":"image/partner_03.jpg","airticketlink":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-ZUH-20180810-20180816?nonStop=N&passenger=100&cabin=A&airlineFilters=all","doorlink":"https://activity.eztravel.com.tw/global/introduction/CTT1408228"},
							{"title":"日本豪斯登堡","point":"17世紀荷蘭建築+海賊王主題區","img":"image/partner_04.jpg","airticketlink":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-FUK-20180711-20180718?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","doorlink":"https://activity.eztravel.com.tw/global/introduction/CTT13205"}
							]
			    }
			    
			]


/*  ===============================   以下是程式碼區  ===========================================================================================*/

/*宣告 要把JSON置入哪裡*/
var eachproduct_psychological01 = $(".each_product_psychological01 ");
var eachproduct_psychological02 = $(".each_product_psychological02 ");
var eachproduct_psychological03 = $(".each_product_psychological03 ");
var eachproduct_psychological04 = $(".each_product_psychological04 ");




/*宣告 陣列內的數量*/
var json_0 = json[0].item.length;
var json_1 = json[1].item.length;
var json_2 = json[2].item.length;
var json_3 = json[3].item.length;






/*太陽眼鏡*/

	for (var item = 0; item <1; item++) {
		for (var j = 0; j < json_0; j++){
				eachproduct_psychological01.append("<div class='col-xs-12 col-sm-6 col-md-4'><div class='row'><div class='col-xs-12'><div class='thumbnail'><img src='"+json[item].item[j].img+"' alt='"+json[item].item[j].title+"' class='img-responsive center-block'><div class='caption text-center psychological'><div class='text-left'><h3 class='producttitle'><strong>"+json[item].item[j].title+"</strong></h3><p class='pointtxt'>"+json[item].item[j].point+"</p></div></div><div class='caption text-center'><a href='"+json[item].item[j].airticketlink+"' alt='買機票' title='買機票' type='button' class='btn btn-primary ' target='_blank'>買機票</a>&nbsp;&nbsp;<a href='"+json[item].item[j].doorlink+"' alt='買門票' title='買門票' type='button' class='btn btn-warning ' target='_blank'>買門票</a></div></div></div></div></div>");
			}
       } 

/*一本書*/

	for (var item = 1; item <2; item++) {
		for (var j = 0; j < json_1; j++){
				eachproduct_psychological02.append("<div class='col-xs-12 col-sm-6 col-md-4'><div class='row'><div class='col-xs-12'><div class='thumbnail'><img src='"+json[item].item[j].img+"' alt='"+json[item].item[j].title+"' class='img-responsive center-block'><div class='caption text-center psychological'><div class='text-left'><h3 class='producttitle'><strong>"+json[item].item[j].title+"</strong></h3><p class='pointtxt'>"+json[item].item[j].point+"</p></div></div><div class='caption text-center'><a href='"+json[item].item[j].airticketlink+"' alt='買機票' title='買機票' type='button' class='btn btn-primary ' target='_blank'>買機票</a>&nbsp;&nbsp;<a href='"+json[item].item[j].doorlink+"' alt='買門票' title='買門票' type='button' class='btn btn-warning ' target='_blank'>買門票</a></div></div></div></div></div>");
			}
       } 

/*香水*/

	for (var item = 2; item <3; item++) {
		for (var j = 0; j < json_2; j++){
				eachproduct_psychological03.append("<div class='col-xs-12 col-sm-6 col-md-4'><div class='row'><div class='col-xs-12'><div class='thumbnail'><img src='"+json[item].item[j].img+"' alt='"+json[item].item[j].title+"' class='img-responsive center-block'><div class='caption text-center psychological'><div class='text-left'><h3 class='producttitle'><strong>"+json[item].item[j].title+"</strong></h3><p class='pointtxt'>"+json[item].item[j].point+"</p></div></div><div class='caption text-center'><a href='"+json[item].item[j].airticketlink+"' alt='買機票' title='買機票' type='button' class='btn btn-primary ' target='_blank'>買機票</a>&nbsp;&nbsp;<a href='"+json[item].item[j].doorlink+"' alt='買門票' title='買門票' type='button' class='btn btn-warning ' target='_blank'>買門票</a></div></div></div></div></div>");
       } 
     }


/*旅伴*/
	for (var item = 3; item <4; item++) {
		for (var j = 0; j < json_3; j++){
				eachproduct_psychological04.append("<div class='col-xs-12 col-sm-6 col-md-4'><div class='row'><div class='col-xs-12'><div class='thumbnail'><img src='"+json[item].item[j].img+"' alt='"+json[item].item[j].title+"' class='img-responsive center-block'><div class='caption text-center psychological'><div class='text-left'><h3 class='producttitle'><strong>"+json[item].item[j].title+"</strong></h3><p class='pointtxt'>"+json[item].item[j].point+"</p></div></div><div class='caption text-center'><a href='"+json[item].item[j].airticketlink+"' alt='買機票' title='買機票' type='button' class='btn btn-primary ' target='_blank'>買機票</a>&nbsp;&nbsp;<a href='"+json[item].item[j].doorlink+"' alt='買門票' title='買門票' type='button' class='btn btn-warning ' target='_blank'>買門票</a></div></div></div></div></div>");
       } 
     }







