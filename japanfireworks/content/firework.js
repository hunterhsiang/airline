/*花火景點*/
var json = [
			  {
			    "title" : "花火景點",
			    "item" : [
							{"location":"東京","name":"東京 足立花火大會","time":"2018/7/21 19:30","where":"荒川河岸","whygo":"全東京第一場花火大會","point":"足立區觀光交流協會","pointlink":"http://adachikanko.net/event/%E3%80%8C%E7%AC%AC40%E5%9B%9E%E8%B6%B3%E7%AB%8B%E3%81%AE%E8%8A%B1%E7%81%AB%E3%80%8D","airticket":"東京","price":"10,563","airticketlink":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-TYO-20180718-20180724-TAIPEI-TOKYO?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","img":"image/firework01.jpg","smallimg":"image/40x40-01.jpg"},
							{"location":"東京","name":"東京 隅田川花火大會","time":"2018/7/28 19:00","where":"台東區/墨田區 隅田川沿岸<br/>第一會場：櫻橋下游～言問橋上游<br/>第二會場：駒形橋下游～厩橋上游","whygo":"東京前三大花火大會","point":"隅田川花火大會實行委員會","pointlink":"http://sumidagawa-hanabi.com/","airticket":"東京","price":"10,563","airticketlink":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-TYO-20180725-20180731-TAIPEI-TOKYO?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","img":"image/firework02.jpg","smallimg":"image/40x40-02.jpg"},
							{"location":"東京","name":"東京 神宮外苑花火大會","time":"2018/8/20 19:30","where":"明治神宮外苑內","whygo":"盛大花火及藝人精彩演唱","point":"神宮外苑花火大會事務局","pointlink":"http://www.jinguhanabi.com/","airticket":"東京","price":"10,369","airticketlink":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-TYO-20180816-20180823-TAIPEI-TOKYO?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","img":"image/firework03.jpg","smallimg":"image/40x40-03.jpg"},
							{"location":"大阪","name":"大阪 天神祭奉納花火大會","time":"2018/7/25","where":"大阪市北區天滿一丁目周邊、川崎公園、櫻之宮公園","whygo":"日本三大祭之一的天神祭中的奉納花火","point":"大阪天滿宮官方網站","pointlink":"http://www.tenjinsan.com/","airticket":"大阪","price":"9,884","airticketlink":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-OSA-20180720-20180727-TAIPEI-OSAKA?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","img":"image/firework04.jpg","smallimg":"image/40x40-04.jpg"},
							{"location":"大阪","name":"大阪 淀川花火大會","time":"2018/8/5","where":"淀川河畔","whygo":"關西著名花火大會之一","point":"難波淀川花火大會營運委員會","pointlink":"http://www.yodohanabi.com/html/guide/guide.html","airticket":"大阪","price":"9,884","airticketlink":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-OSA-20180801-20180807-TAIPEI-OSAKA?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","img":"image/firework05.jpg","smallimg":"image/40x40-05.jpg"},
							{"location":"大阪","name":"大阪 PL教祖花火大會","time":"每年8/1 (預計)","where":"富田林市","whygo":"宗教團體Perfect Liberty主辦教祖祭大型花火","point":"教祖祭PL花火藝術官方網站","pointlink":"http://www.kohkyu.co.jp/hanabi/hanabi.html","airticket":"大阪","price":"9,884","airticketlink":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-OSA-20180726-20180804-TAIPEI-OSAKA?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","img":"image/firework06.jpg","smallimg":"image/40x40-06.jpg"},
							{"location":"沖繩","name":"沖繩 海洋博公園花火大會","time":"2018/7/14","where":"沖繩海洋博公園","whygo":"沖繩縣最大規模花火大會","point":"海洋博公園官方網站","pointlink":"http://oki-park.jp/kaiyohaku/","airticket":"沖繩","price":"7,074","airticketlink":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-OKA-20180718-20180725-TAIPEI-OKINAWA?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","img":"image/firework07.jpg","smallimg":"image/40x40-07.jpg"},
							{"location":"九州 ","name":"九州 筑後川花火大會","time":"每年8/5 (預計)","where":"福岡縣久留米市","whygo":"西日本最大型花火大會","point":"筑後川花火大會實行委員會","pointlink":"http://www.kurume-matsuri.info/index.html","airticket":"福岡","price":"8,431","airticketlink":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-FUK-20180731-20180807-TAIPEI-FUKUOKA?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","img":"image/firework08.jpg","smallimg":"image/40x40-08.jpg"},
							{"location":"茨城","name":"茨城 土浦全國花火競技會","time":"毎年10月第1周的星期六 (預計)","where":"櫻川畔","whygo":"日本三大花火大會之一，搶先看最新花火表演","point":"土浦全國花火競技大會實行委員會","pointlink":"http://www.tsuchiura-hanabi.jp/","airticket":"茨城","price":"5,838","airticketlink":"https://flight.eztravel.com.tw/mpplatform/round-trip/TPE-IBR-20181004-20181008-TAIPEI-IBARAKI?nonStop=Y","img":"image/firework09.jpg","smallimg":"image/40x40-09.jpg"}
							]
				   },

			    {
			    "title" : "機票",
			    "item" : [
							{"name":"名古屋","price":"8,721","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-NGO-20180711-20180718-TAIPEI-NAGOYA?nonStop=Y&passenger=100&cabin=A&airlineFilters=all"},
							{"name":"仙台","price":"10,712","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-SDJ-20180711-20180718-TAIPEI-SENDAI?nonStop=Y&passenger=100&cabin=A&airlineFilters=all"},
							{"name":"札幌","price":"16,280","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-SPK-20180711-20180719-TAIPEI-SAPPORO?nonStop=Y&passenger=100&cabin=A&airlineFilters=all"},
							{"name":"函館","price":"15,873","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-HKD-20180717-20180724-TAIPEI-HAKODATE?nonStop=Y&passenger=100&cabin=A&airlineFilters=all"},
							{"name":"高松","price":"10,226","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-TAK-20180711-20180719-TAIPEI-TAKAMATSU?nonStop=Y&passenger=100&cabin=A&airlineFilters=all"},
							{"name":"小松(金澤)","price":"10,030","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-KMQ-20180712-20180719-TAIPEI-KOMATSU?nonStop=Y&passenger=100&cabin=A&airlineFilters=all"},
							{"name":"廣島","price":"10,950","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-HIJ-20180724-20180802-TAIPEI-HIROSHIMA?nonStop=Y&passenger=100&cabin=A&airlineFilters=all"},
							{"name":"宮崎","price":"9,690","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-KMI-20180710-20180718-TAIPEI-MIYAZAKI?nonStop=Y&passenger=100&cabin=A&airlineFilters=all"}
							]
			    },
			    {
			    "title" : "LCC機票",
			    "item" : [
							{"name":"大阪","price":"1,948","link":"https://lcc.eztravel.com.tw/lcc/search?tripType=ONE_WAY&departure=TPE&arrival=KIX&departureDate=20180619"},
							{"name":"福岡","price":"2,060","link":"https://lcc.eztravel.com.tw/lcc/search?tripType=ONE_WAY&departure=TPE&arrival=FUK&departureDate=20180621"},
							{"name":"東京","price":"2,199","link":"https://lcc.eztravel.com.tw/lcc/search?tripType=ONE_WAY&departure=TPE&arrival=NRT&departureDate=20180619"},
							{"name":"沖繩","price":"2,588","link":"https://lcc.eztravel.com.tw/lcc/search?tripType=ONE_WAY&departure=TPE&arrival=OKA&departureDate=20180619"},
							{"name":"岡山","price":"2,799","link":"https://flight.eztravel.com.tw/mpplatform/one-way/TPE-OKJ-20180619-TAIPEI-OKAYAMA?nonStop=Y"},
							{"name":"仙台","price":"2,947","link":"https://lcc.eztravel.com.tw/lcc/search?tripType=ONE_WAY&departure=TPE&arrival=SDJ&departureDate=20180621"},
							{"name":"名古屋","price":"2,998","link":"https://lcc.eztravel.com.tw/lcc/search?tripType=ONE_WAY&departure=TPE&arrival=NGO&departureDate=20180605"},
							{"name":"札幌","price":"4,143","link":"https://lcc.eztravel.com.tw/lcc/search?tripType=ONE_WAY&departure=TPE&arrival=CTS&departureDate=20180620"}
							]
			    },
			     {
			    "title" : "浴衣",
			    "item" : [
							{"name":"東京浴衣體驗","price":"1,490","link":"https://activity.eztravel.com.tw/global/introduction/CTA12054932","img":"image/bathrobe01.jpg"},
							{"name":"大阪浴衣租借","price":"890","link":"https://activity.eztravel.com.tw/global/introduction/CTA15285564","img":"image/bathrobe02.jpg"},
							{"name":"沖繩浴衣一日遊","price":"1,820","link":"https://activity.eztravel.com.tw/global/introduction/CTA11404407","img":"image/bathrobe03.jpg"},
							{"name":"福岡浴衣租借","price":"830","link":"https://activity.eztravel.com.tw/global/introduction/CTA12725040","img":"image/bathrobe04.jpg"},
							{"name":"京都浴衣體驗。烏丸線五条","price":"830","link":"https://activity.eztravel.com.tw/global/introduction/TKAI000006245","img":"image/bathrobe05.jpg"},
							{"name":"京都浴衣體驗。近清水寺","price":"1,250","link":"https://activity.eztravel.com.tw/global/introduction/CTA15204889","img":"image/bathrobe06.jpg"}
							]
			    },
			    {
			    "title" : "大陸",
			    "item" : [
							{
								"name":"珠海長隆企鵝酒店",
								"ENname":"",
								"spec":"極地、溫帶、探險和企鵝家庭主題房",
								"price":"3,642",
								"img":"http://dimg04.c-ctrip.com/images/fd/hotel/g1/M05/C4/33/CghzfVT9DP2AJOaXAAtVQu20eKo636_C_550_412.jpg",
								"link":"https://hotel.eztravel.com.tw/oversea/introduction/HTFZ000780706"
							}
							]
			    }
			    
			]


/*  ===============================   以下是程式碼區  ===========================================================================================*/

/*宣告 要把JSON置入哪裡*/
var eachproduct_firework01 = $(".each_product_firework01 ");
var eachproduct_firework02 = $(".each_product_firework02 ");
var eachproduct_firework03 = $(".each_product_firework03 ");
var eachproduct_firework04 = $(".each_product_firework04 ");
var eachproduct_firework05 = $(".each_product_firework05 ");



/*宣告 陣列內的數量*/
var json_0 = json[0].item.length;
var json_1 = json[1].item.length;
var json_2 = json[2].item.length;
var json_3 = json[3].item.length;
var json_4 = json[4].item.length;





/*花火景點*/

	for (var item = 0; item <1; item++) {
		for (var j = 0; j < json_0; j++){

				eachproduct_firework01.append("<div class='col-xs-12 col-sm-6 col-md-4'><div class='thumbnail'><a href='"+json[item].item[j].airticketlink+"' target='_blank' title='"+json[item].item[j].airticket+" 機票 │ 未稅 "+json[item].item[j].price+"元起'><div class='media'><div class='media-left media-middle'><img class='media-object img-circle ' src='"+json[item].item[j].smallimg+"' alt='"+json[item].item[j].location+"' ></div><div class='media-body'><h4 class='media-heading'><strong>"+json[item].item[j].name+"</strong><br/><small>"+json[item].item[j].time+"</small></h4></div></div><img src='"+json[item].item[j].img+"' alt='"+json[item].item[j].name+"' class='img-responsive'></a><div class='caption text-center'><div class='text-left'><h4><span class='glyphicon glyphicon-map-marker' aria-hidden='true'></span> "+json[item].item[j].where+"</h4><h4 class='producttitle'><span class='glyphicon glyphicon-bullhorn' aria-hidden='true'></span> "+json[item].item[j].whygo+"</h4><h4><span class='glyphicon glyphicon-link' aria-hidden='true'></span><a href='"+json[item].item[j].pointlink+"' target='_blank'>"+json[item].item[j].point+"</a></h4></div></div><div class='col-sm-12'><a href='"+json[item].item[j].airticketlink+"' target='_blank' type='button' class='btn btn-danger btn-lg btn-block' title='"+json[item].item[j].airticket+"機票 未稅 "+json[item].item[j].price+" 元起' alt='"+json[item].item[j].airticket+"機票 未稅 "+json[item].item[j].price+"元起'><span class='glyphicon glyphicon-plane' aria-hidden='true'></span> "+json[item].item[j].airticket+"機票<br/>未稅 "+json[item].item[j].price+" 元起</a></div><div class='clearfix'></div></div></div>");
				
			}
       } 

/*機票*/

	for (var item = 1; item <2; item++) {
		for (var j = 0; j < json_1; j++){

				eachproduct_firework02.append("<div class='col-xs-12 col-sm-6 col-md-3'><div class='row'><div class='col-xs-12'><a href='"+json[item].item[j].link+"' target='_blank' class='otherthumbnail' title='"+json[item].item[j].name+" │ "+json[item].item[j].price+"元起'><div class='japanblock'><div class='text-center'><h2 class='producttitle'><strong>"+json[item].item[j].name+"</strong></h2></div><p><span class='dollartxt'>未稅 </span><span class='productPrice'>"+json[item].item[j].price+"</span><span class='dollartxt'> 元起</span></p></div></a></div></div></div>");
				                     
			}
       } 

/*浴衣*/

	for (var item = 2; item <3; item++) {
		for (var j = 0; j < json_2; j++){
				eachproduct_firework03.append("<div class='col-xs-12 col-sm-6 col-md-3'><div class='row'><div class='col-xs-12'><a href='"+json[item].item[j].link+"' target='_blank' class='otherthumbnail' title='"+json[item].item[j].name+" │ "+json[item].item[j].price+"元起'><div class='japanblock'><div class='text-center'><h2 class='producttitle'><strong>"+json[item].item[j].name+"</strong></h2></div><p><span class='dollartxt'>單程未稅 </span><span class='productPrice'>"+json[item].item[j].price+"</span><span class='dollartxt'> 元起</span></p></div></a></div></div></div>");
				
				                                  
       } 
     }


/*大陸*/

	for (var item = 3; item <4; item++) {
		for (var j = 0; j < json_3; j++){

				eachproduct_firework04.append("<div class='col-xs-12 col-sm-6 col-md-4'><div class='row'><div class='col-xs-12'><a href='"+json[item].item[j].link+"' target='_blank' class='otherthumbnail' title='"+json[item].item[j].name+" │ "+json[item].item[j].price+"元起'><img src='"+json[item].item[j].img+"' alt='"+json[item].item[j].name+"' class='img-responsive center-block'><div class='text-center'><div class='text-left'><h3 class='producttitle'><strong>"+json[item].item[j].name+"</strong></h3></div></div><p class='text-right'><span class='dollartxt'>特價 </span><span class='productPrice'>"+json[item].item[j].price+"</span><span class='dollartxt'> 元起</span></p></a></div></div></div>");
       } 
     }

/*歐美紐澳*/
	for (var item = 4; item <5; item++) {
		for (var j = 0; j < json_4; j++){

			    eachproduct_hotel05.append("<div class='col-xs-12 col-sm-6 col-md-4'><div class='row'><div class='col-xs-12'><a href='"+json[item].item[j].link+"' target='_blank' class='thumbnail' title='"+json[item].item[j].name+" │ "+json[item].item[j].price+"元起'><div class='col-xs-12 hotelimg' style='background-image: url("+json[item].item[j].img+");'></div><div class='clearfix'></div><div class='hotelblock'><div class='text-center'><div class='text-left hotel-title'><h3 class='text-primary'><strong>"+json[item].item[j].name+"</strong><br/><small>"+json[item].item[j].ENname+"</small></h3><h4 class='txt-spec'>"+json[item].item[j].spec+"</h4></div></div><p class='text-right'><span class='productPrice'>"+json[item].item[j].price+"</span><span class='dollartxt'>元起</span></p></div></a></div></div></div>");
       } 
     }






