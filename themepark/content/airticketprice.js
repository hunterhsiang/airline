/*機票*/
var json = [
			  {
			    "title" : "東北亞",
			    "item" : [
							{"name":"東京","price":"10,272","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-TYO-20180811-20180818?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"大阪","price":"7,915","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-OSA-20180810-20180816?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"首爾","price":"5,928","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-SEL-20180811-20180816?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"沖繩","price":"5,743","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-OKA-20180808-20180816?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"福岡","price":"8,352","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-FUK-20180711-20180718?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"名古屋","price":"7,872","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-NGO-20180811-20180818?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"岡山","price":"6,238","link":"https://flight.eztravel.com.tw/mpplatform/round-trip/TPE-OKJ-20180807-20180831?nonStop=Y","vat":"廉航未稅"},
							{"name":"濟州島","price":"5,298","link":"https://flight.eztravel.com.tw/mpplatform/round-trip/TPE-CJU-20180829-20180901?nonStop=Y","vat":"廉航未稅"}
							]
			   },

			    {
			    "title" : "東南亞",
			    "item" : [
							{"name":"曼谷","price":"4,340","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-BKK-20180822-20180828-TAIPEI-BANGKOK?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"新加坡","price":"5,593","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-SIN-20180825-20180831-TAIPEI-SINGAPORE?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"胡志明市","price":"3,028","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-SGN-20180824-20180830-TAIPEI-SAIGON?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"馬尼拉","price":"2,399","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-MNL-20180820-20180829-TAIPEI-MANILA?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"吉隆坡","price":"3,945","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-KUL-20180822-20180829-TAIPEI-KUALA%20LUMPUR?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"峇里島","price":"5,984","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-DPS-20180823-20180901-TAIPEI-DENPASAR_BALI?nonStop=N&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"亞庇","price":"2,188","link":"https://lcc.eztravel.com.tw/lcc/search?tripType=ONE_WAY&departure=TPE&arrival=BKI&departureDate=20180801","vat":"廉航單程未稅"},
							{"name":"宿霧","price":"2,488","link":"https://lcc.eztravel.com.tw/lcc/search?tripType=ONE_WAY&departure=TPE&arrival=CEB&departureDate=20180807","vat":"廉航單程未稅"}
							]
			   },
			     {
			    "title" : "港澳大陸",
			    "item" : [
							{"name":"香港","price":"2,890","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-HKG-20180828-20180831-TAIPEI-HONG%20KONG?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"澳門","price":"3,629","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-MFM-20180828-20180831-TAIPEI-MACAU?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"上海","price":"4,810","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-SHA-20180828-20180831-TAIPEI-SHANGHAI?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"北京","price":"7,984","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-PEK-20180822-20180825-TAIPEI-BEIJING?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"廣州","price":"5,086","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-CAN-20180828-20180831-TAIPEI-GUANGZHOU?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"深圳","price":"4,493","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-SZX-20180613-20180620-TAIPEI-SHENZHEN?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"澳門","price":"2,198","link":"https://flight.eztravel.com.tw/mpplatform/round-trip/TPE-MFM-20180801-20180804?nonStop=Y","vat":"廉航未稅"},
							{"name":"台中-香港","price":"1,426","link":"https://lcc.eztravel.com.tw/lcc/search?tripType=ONE_WAY&departure=RMQ&arrival=HKG&departureDate=20180801","vat":"廉航單程未稅"}
							]
			   },
			    {
			    "title" : "美加",
			    "item" : [
							{"name":"舊金山","price":"15,214","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-SFO-20180903-20180911-TAIPEI-SAN%20FRANCISCO?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"溫哥華","price":"18,773","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-YVR-20180718-20180725?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"加州安大略","price":"15,699","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-ONT-20180902-20180911-TAIPEI-ONTARIO?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"夏威夷","price":"21,878","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-HNL-20180815-20180822?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"紐約","price":"38,615","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-JFK-20180710-20180715?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"洛杉磯","price":"9,234","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-LAX-20180905-20180911-TAIPEI-LOS%20ANGELES?nonStop=N&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"奧蘭多","price":"25,307","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-MCO-20180905-20180911-TAIPEI-ORLANDO?nonStop=N&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"芝加哥","price":"14,228","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-CHI-20180901-20180907-TAIPEI-CHICAGO?nonStop=N&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"}
							]
			   },
			    {
			    "title" : "歐洲",
			    "item" : [
							{"name":"倫敦","price":"21,377","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-LON-20180814-20180820?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"巴黎","price":"24,026","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-CDG-20180824-20180903?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"法蘭克福","price":"28,599","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-FRA-20180816-20180826?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"阿姆斯特丹","price":"28,599","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-AMS-20180825-20180903?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"維也納","price":"22,547","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-VIE-20180812-20180823?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"羅馬","price":"27,636","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-FCO-20180812-20180822?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"雅典","price":"10,868","link":"https://lcc.eztravel.com.tw/lcc/search?tripType=ONE_WAY&departure=TPE&arrival=ATH&departureDate=20180801","vat":"廉航單程未稅"},
							{"name":"柏林","price":"7,736","link":"https://lcc.eztravel.com.tw/lcc/search?tripType=ONE_WAY&departure=TPE&arrival=TXL&departureDate=20180909","vat":"廉航單程未稅"}
							]
			   },
			    {
			    "title" : "紐澳其他",
			    "item" : [
							{"name":"雪梨","price":"20,150","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-SYD-20180819-20180826?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"墨爾本","price":"18,231","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-MEL-20180819-20180827?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"布里斯本","price":"11,625","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-BNE-20180822-20180901?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"奧克蘭","price":"21,589","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-AKL-20180822-20180831?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"關島","price":"16,401","link":"https://flight.eztravel.com.tw/mpplatform/flexible/round-trip/TPE-GUM-20180824-20180901?nonStop=Y&passenger=100&cabin=A&airlineFilters=all","vat":"未稅"},
							{"name":"黃金海岸","price":"3,355","link":"https://lcc.eztravel.com.tw/lcc/search?tripType=ONE_WAY&departure=TPE&arrival=OOL&departureDate=20180805","vat":"廉航單程未稅"},
							{"name":"柏斯","price":"2,583","link":"https://lcc.eztravel.com.tw/lcc/search?tripType=ONE_WAY&departure=TPE&arrival=PER&departureDate=20180805","vat":"廉航單程未稅"},
							{"name":"馬爾地夫","price":"2,308","link":"https://lcc.eztravel.com.tw/lcc/search?tripType=ONE_WAY&departure=TPE&arrival=MLE&departureDate=20180805","vat":"廉航單程未稅"}
							]
			   }
			]


/*以下是程式碼區*/

/*宣告 要把JSON置入哪裡*/
var eachproduct_01 = $(".each_product_01 ");
var eachproduct_02 = $(".each_product_02 ");
var eachproduct_03 = $(".each_product_03 ");
var eachproduct_04 = $(".each_product_04 ");
var eachproduct_05 = $(".each_product_05 ");
var eachproduct_06 = $(".each_product_06 ");


/*宣告 陣列內的數量*/
var json_0 = json[0].item.length;
var json_1 = json[1].item.length;
var json_2 = json[2].item.length;
var json_3 = json[3].item.length;
var json_4 = json[4].item.length;
var json_5 = json[5].item.length;





/*東北亞*/

	for (var item = 0; item <1; item++) {
		for (var j = 0; j < json_0; j++){
				eachproduct_01.append("<div class='col-xs-12'><div class='row'><a href='"+json[item].item[j].link+"' class='otherthumbnail' type='button' title=' "+json[item].item[j].name+" │ "+json[item].item[j].price+" 元起' target='_blank'><div class='col-xs-12 col-sm-12 col-md-12 text-left'><h3 class='productname'>"+json[item].item[j].name+"</h3></div><div class='col-xs-12 col-sm-12 col-md-12 text-right' style='margin-top:-20px;'><div class='row'><span class='dollartxt'>"+json[item].item[j].vat+" </span><span class='productPrice text-right'>"+json[item].item[j].price+"</span><span class='dollartxt'> 元起</span></div></div><div class='clearfix'></div></a></div></div>");
       } 
     }

/*東南亞*/
	for (var item = 1; item <2; item++) {
		for (var j = 0; j < json_1; j++){
			   eachproduct_02.append("<div class='col-xs-12'><div class='row'><a href='"+json[item].item[j].link+"' class='otherthumbnail' type='button' title=' "+json[item].item[j].name+" │ "+json[item].item[j].price+" 元起' target='_blank'><div class='col-xs-12 col-sm-12 col-md-12 text-left'><h3 class='productname'>"+json[item].item[j].name+"</h3></div><div class='col-xs-12 col-sm-12 col-md-12 text-right' style='margin-top:-20px;'><div class='row'><span class='dollartxt'>"+json[item].item[j].vat+" </span><span class='productPrice text-right'>"+json[item].item[j].price+"</span><span class='dollartxt'> 元起</span></div></div><div class='clearfix'></div></a></div></div>");
       } 
     }

/*港澳大陸*/
	for (var item = 2; item <3; item++) {
		for (var j = 0; j < json_2; j++){
			   eachproduct_03.append("<div class='col-xs-12'><div class='row'><a href='"+json[item].item[j].link+"' class='otherthumbnail' type='button' title=' "+json[item].item[j].name+" │ "+json[item].item[j].price+" 元起' target='_blank'><div class='col-xs-12 col-sm-12 col-md-12 text-left'><h3 class='productname'>"+json[item].item[j].name+"</h3></div><div class='col-xs-12 col-sm-12 col-md-12 text-right' style='margin-top:-20px;'><div class='row'><span class='dollartxt'>"+json[item].item[j].vat+" </span><span class='productPrice text-right'>"+json[item].item[j].price+"</span><span class='dollartxt'> 元起</span></div></div><div class='clearfix'></div></a></div></div>");
       } 
     }


/*美加*/
	for (var item = 3; item <4; item++) {
		for (var j = 0; j < json_3; j++){
               eachproduct_04.append("<div class='col-xs-12'><div class='row'><a href='"+json[item].item[j].link+"' class='otherthumbnail' type='button' title=' "+json[item].item[j].name+" │ "+json[item].item[j].price+" 元起' target='_blank'><div class='col-xs-12 col-sm-12 col-md-12 text-left'><h3 class='productname'>"+json[item].item[j].name+"</h3></div><div class='col-xs-12 col-sm-12 col-md-12 text-right' style='margin-top:-20px;'><div class='row'><span class='dollartxt'>"+json[item].item[j].vat+" </span><span class='productPrice text-right'>"+json[item].item[j].price+"</span><span class='dollartxt'> 元起</span></div></div><div class='clearfix'></div></a></div></div>");
       } 
     }


/*歐洲*/
	for (var item = 4; item <5; item++) {
		for (var j = 0; j < json_4; j++){
               eachproduct_05.append("<div class='col-xs-12'><div class='row'><a href='"+json[item].item[j].link+"' class='otherthumbnail' type='button' title=' "+json[item].item[j].name+" │ "+json[item].item[j].price+" 元起' target='_blank'><div class='col-xs-12 col-sm-12 col-md-12 text-left'><h3 class='productname'>"+json[item].item[j].name+"</h3></div><div class='col-xs-12 col-sm-12 col-md-12 text-right' style='margin-top:-20px;'><div class='row'><span class='dollartxt'>"+json[item].item[j].vat+" </span><span class='productPrice text-right'>"+json[item].item[j].price+"</span><span class='dollartxt'> 元起</span></div></div><div class='clearfix'></div></a></div></div>");
       } 
     }



/*其他*/
	for (var item = 5; item <6; item++) {
		for (var j = 0; j < json_5; j++){
               eachproduct_06.append("<div class='col-xs-12'><div class='row'><a href='"+json[item].item[j].link+"' class='otherthumbnail' type='button' title=' "+json[item].item[j].name+" │ "+json[item].item[j].price+" 元起' target='_blank'><div class='col-xs-12 col-sm-12 col-md-12 text-left'><h3 class='productname'>"+json[item].item[j].name+"</h3></div><div class='col-xs-12 col-sm-12 col-md-12 text-right' style='margin-top:-20px;'><div class='row'><span class='dollartxt'>"+json[item].item[j].vat+" </span><span class='productPrice text-right'>"+json[item].item[j].price+"</span><span class='dollartxt'> 元起</span></div></div><div class='clearfix'></div></a></div></div>");
     }
    }
/*});*/



