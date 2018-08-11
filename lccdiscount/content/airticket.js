/*酷航帶您飛遍世界*/
var json = [
			  {
			    "title" : "東北亞",
			    "item" : [
							{"name":"東京(成田)","price":"","link":"https://flight.eztravel.com.tw/lcc/round-trip/TPE-NRT-20190312-20190314"},
							{"name":"大阪","price":"","link":"https://flight.eztravel.com.tw/lcc/round-trip/TPE-KIX-20190326-20190328"},
							{"name":"沖繩","price":"","link":"https://flight.eztravel.com.tw/lcc/round-trip/TPE-OKA"},
							{"name":"札幌","price":"","link":"https://flight.eztravel.com.tw/lcc/round-trip/TPE-CTS-20181206-20181213"},
							{"name":"福岡","price":"","link":"https://flight.eztravel.com.tw/lcc/round-trip/TPE-FUK"},
							{"name":"岡山","price":"","link":"https://flight.eztravel.com.tw/lcc/round-trip/TPE-OKJ"},
							{"name":"仙台","price":"","link":"https://flight.eztravel.com.tw/lcc/round-trip/TPE-SDJ-20180823-20180830"},
							{"name":"名古屋","price":"","link":"https://flight.eztravel.com.tw/lcc/round-trip/TPE-NGO-20181013-20181020"},
							{"name":"首爾(仁川)","price":"","link":"https://flight.eztravel.com.tw/lcc/round-trip/TPE-ICN"},
							{"name":"首爾(金浦)","price":"","link":"https://flight.eztravel.com.tw/lcc/round-trip/TSA-GMP"},
							{"name":"釜山","price":"","link":"https://flight.eztravel.com.tw/lcc/round-trip/TPE-PUS"},
							{"name":"大邱","price":"","link":"https://flight.eztravel.com.tw/lcc/round-trip/TPE-TAE"}
							]
			    },

			    {
			    "title" : "東南亞及澳門",
			    "item" : [
							{"name":"新加坡","price":"","link":"https://flight.eztravel.com.tw/lcc/round-trip/TPE-SIN"},
							{"name":"曼谷","price":"","link":"https://flight.eztravel.com.tw/lcc/round-trip/TPE-DMK"},
							{"name":"吉隆坡","price":"","link":"https://flight.eztravel.com.tw/lcc/round-trip/TPE-KUL"},
							{"name":"亞庇","price":"","link":"https://flight.eztravel.com.tw/lcc/round-trip/TPE-BKI"},
							{"name":"馬尼拉","price":"","link":"https://flight.eztravel.com.tw/lcc/round-trip/TPE-MNL"},
							{"name":"宿霧","price":"","link":"https://flight.eztravel.com.tw/lcc/round-trip/TPE-CEB"},
							{"name":"胡志明市","price":"","link":"https://flight.eztravel.com.tw/lcc/round-trip/TPE-SGN"},
							{"name":"河內","price":"","link":"https://flight.eztravel.com.tw/lcc/round-trip/TPE-HAN"},
							{"name":"峴港","price":"","link":"https://flight.eztravel.com.tw/lcc/round-trip/TPE-DAD-20181107-20181114"},
							{"name":"普吉島","price":"","link":"https://flight.eztravel.com.tw/lcc/round-trip/TPE-HKT"},
							{"name":"台北-澳門","price":"","link":"https://flight.eztravel.com.tw/lcc/round-trip/TPE-MFM"},
							{"name":"高雄-澳門","price":"","link":"https://flight.eztravel.com.tw/lcc/round-trip/KHH-MFM"}
							]
			    },
			     {
			    "title" : "長程",
			    "item" : [
							{"name":"墨爾本(圖拉馬林)","price":"","link":"https://flight.eztravel.com.tw/lcc/one-way/TPE-MEL"},
							{"name":"雪梨","price":"","link":"https://flight.eztravel.com.tw/lcc/one-way/TPE-SYD"},
							{"name":"黃金海岸","price":"","link":"https://flight.eztravel.com.tw/lcc/one-way/TPE-OOL"},
							{"name":"柏斯","price":"","link":"https://flight.eztravel.com.tw/lcc/one-way/TPE-PER"},
							{"name":"奧克蘭","price":"","link":"https://flight.eztravel.com.tw/lcc/one-way/TPE-AKL"},
							{"name":"雅典","price":"","link":"https://flight.eztravel.com.tw/lcc/one-way/TPE-ATH-20181022"},
							{"name":"柏林","price":"","link":"https://flight.eztravel.com.tw/lcc/one-way/TPE-TXL-20181021"},
							{"name":"科欽","price":"","link":"https://flight.eztravel.com.tw/lcc/one-way/TPE-COK"},
							{"name":"阿姆利則","price":"","link":"https://flight.eztravel.com.tw/lcc/one-way/TPE-ATQ"},
							{"name":"班加羅爾","price":"","link":"https://flight.eztravel.com.tw/lcc/one-way/TPE-BLR"},
							{"name":"馬爾地夫","price":"","link":"https://flight.eztravel.com.tw/lcc/one-way/TPE-MLE"}
							]
			    }
			    
			]


/*以下是程式碼區*/

/*宣告 要把JSON置入哪裡*/
var eachproduct_01 = $(".each_product_01 ");
var eachproduct_02 = $(".each_product_02 ");
var eachproduct_03 = $(".each_product_03 ");


/*宣告 陣列內的數量*/
var json_0 = json[0].item.length;
var json_1 = json[1].item.length;
var json_2 = json[2].item.length;




/*東北亞*/
	
	for (var item = 0; item <1; item++) {
		for (var j = 0; j < json_0; j++){
			if(json[item].item[j].price == ""){
				eachproduct_01.append("<div class='col-xs-12 col-sm-6 col-md-2'><a href="+ json[item].item[j].link +" class='thumbnail text-center ' type='button' title='"+json[item].item[j].name+" ' target='_blank'><h4><strong>" + json[item].item[j].name + "</strong></h4></a></div>");

			}
			else{
				eachproduct_01.append("<div class='col-xs-12 col-sm-6 col-md-2'><a href="+ json[item].item[j].link +" class='thumbnail text-center ' type='button' title='"+json[item].item[j].name+" │ "+json[item].item[j].price+" 元起' target='_blank'><h4><strong>" + json[item].item[j].name + "</strong></h4><span class='productPrice'>" + json[item].item[j].price + "</span> <span class='dollartxt'>元起</span></a></div>");
			}


       } 
     }

/*東南亞及澳門*/
/*$.each(json, function(element) {*/

	for (var item = 1; item <2; item++) {
		for (var j = 0; j < json_1; j++){
			if(json[item].item[j].price == ""){
				eachproduct_02.append("<div class='col-xs-12 col-sm-6 col-md-2'><a href="+ json[item].item[j].link +" class='thumbnail text-center' type='button' title='"+json[item].item[j].name+" ' target='_blank'><h4><strong>" + json[item].item[j].name + "</strong></h4></a></div>");

			}
			else{
				eachproduct_02.append("<div class='col-xs-12 col-sm-6 col-md-2'><a href="+ json[item].item[j].link +" class='thumbnail text-center' type='button' title='"+json[item].item[j].name+" │ "+json[item].item[j].price+" 元起' target='_blank'><h4><strong>" + json[item].item[j].name + "</strong></h4><span class='productPrice'>" + json[item].item[j].price + "</span> <span class='dollartxt'>元起</span></a></div>");
			}
       } 
     }
/*});*/

/*長程*/
/*$.each(json, function(element) {*/

	for (var item = 2; item <3; item++) {
		for (var j = 0; j < json_2; j++){
			if(json[item].item[j].price == ""){
				eachproduct_03.append("<div class='col-xs-12 col-sm-6 col-md-3'><a href="+ json[item].item[j].link +" class='thumbnail text-center' type='button' title='"+json[item].item[j].name+" ' target='_blank'><h4><strong>" + json[item].item[j].name + "</strong></h4></a></div>");

			}
			else{
				eachproduct_03.append("<div class='col-xs-12 col-sm-6 col-md-3'><a href="+ json[item].item[j].link +" class='thumbnail text-center' type='button' title='"+json[item].item[j].name+" │ "+json[item].item[j].price+" 元起' target='_blank'><h4><strong>" + json[item].item[j].name + "</strong></h4><span class='productPrice'>" + json[item].item[j].price + "</span> <span class='dollartxt'>元起</span></a></div>");
			}
       } 
     }
/*});*/

