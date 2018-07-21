/*樂園門票*/
var json = [
			  {
			    "title" : "東北亞",
			    "item" : [
							{"name":"日本東京迪士尼","price":"1,980","link":"https://activity.eztravel.com.tw/global/introduction/TKAI000001351","vat":""},
							{"name":"日本大阪環球影城","price":"2,167","link":"https://activity.eztravel.com.tw/global/introduction/TKAI000001521","vat":""}
							]
			   },

			    {
			    "title" : "東南亞",
			    "item" : [
							{"name":"新加坡環球影城","price":"1,500","link":"https://activity.eztravel.com.tw/global/introduction/TKAI000007579","vat":""},
							{"name":"曼谷賽福瑞野生動物園","price":"740","link":"https://activity.eztravel.com.tw/global/introduction/TKAI000007363","vat":""}
							]
			   },
			     {
			    "title" : "港澳大陸",
			    "item" : [
							{"name":"香港迪士尼","price":"1,925","link":"https://activity.eztravel.com.tw/global/introduction/TKAI000000461","vat":""},
							{"name":"香港海洋公園","price":"1,450","link":"https://activity.eztravel.com.tw/global/introduction/TKAI000001133","vat":""}
							]
			   },
			    {
			    "title" : "美加",
			    "item" : [
							{"name":"美國洛杉磯迪士尼","price":"2,670","link":"https://activity.eztravel.com.tw/global/introduction/TKAI000006615","vat":""},
							{"name":"美國佛羅里達迪士尼","price":"6,350","link":"https://activity.eztravel.com.tw/global/introduction/TKAI000006851","vat":""}
							]
			   },
			    {
			    "title" : "歐亞",
			    "item" : [
							{"name":"西班牙冒險港主題公園","price":"2,470","link":"https://activity.eztravel.com.tw/global/introduction/CTA4581664","vat":""},
							{"name":"杜拜水世界冒險樂園","price":"2,044","link":"https://activity.eztravel.com.tw/global/introduction/CTT1409628","vat":""}
							]
			   },
			    {
			    "title" : "紐澳其他",
			    "item" : [
							{"name":"雪梨水族館/野生動物園","price":"644","link":"https://activity.eztravel.com.tw/global/introduction/CTT13613","vat":""},
							{"name":"黃金海岸夢幻世界","price":"1,183","link":"https://activity.eztravel.com.tw/global/introduction/CTT67609","vat":""}
							]
			   }
			]


/*以下是程式碼區*/

/*宣告 要把JSON置入哪裡*/
var eachticket_01 = $(".each_ticket_01 ");
var eachticket_02 = $(".each_ticket_02 ");
var eachticket_03 = $(".each_ticket_03 ");
var eachticket_04 = $(".each_ticket_04 ");
var eachticket_05 = $(".each_ticket_05 ");
var eachticket_06 = $(".each_ticket_06 ");


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
				eachticket_01.append("<div class='col-xs-12'><div class='row'><a href='"+json[item].item[j].link+"' class='otherthumbnail' type='button' title=' "+json[item].item[j].name+" │ "+json[item].item[j].price+" 元起' target='_blank'><div class='col-xs-12 col-sm-12 col-md-12 text-left'><div class='ticket-title'><h3 class='productname'>"+json[item].item[j].name+"</h3></div></div><div class='col-xs-12 col-sm-12 col-md-12 text-right' style='margin-top:-20px;'><div class='row'><span class='dollartxt'>"+json[item].item[j].vat+" </span><span class='productPrice text-right'>"+json[item].item[j].price+"</span><span class='dollartxt'> 元起</span></div></div><div class='clearfix'></div></a></div></div>");
       } 
     }

/*東南亞*/
	for (var item = 1; item <2; item++) {
		for (var j = 0; j < json_1; j++){
			   eachticket_02.append("<div class='col-xs-12'><div class='row'><a href='"+json[item].item[j].link+"' class='otherthumbnail' type='button' title=' "+json[item].item[j].name+" │ "+json[item].item[j].price+" 元起' target='_blank'><div class='col-xs-12 col-sm-12 col-md-12 text-left'><div class='ticket-title'><h3 class='productname'>"+json[item].item[j].name+"</h3></div></div><div class='col-xs-12 col-sm-12 col-md-12 text-right' style='margin-top:-20px;'><div class='row'><span class='dollartxt'>"+json[item].item[j].vat+" </span><span class='productPrice text-right'>"+json[item].item[j].price+"</span><span class='dollartxt'> 元起</span></div></div><div class='clearfix'></div></a></div></div>");
       } 
     }

/*港澳大陸*/
	for (var item = 2; item <3; item++) {
		for (var j = 0; j < json_2; j++){
			   eachticket_03.append("<div class='col-xs-12'><div class='row'><a href='"+json[item].item[j].link+"' class='otherthumbnail' type='button' title=' "+json[item].item[j].name+" │ "+json[item].item[j].price+" 元起' target='_blank'><div class='col-xs-12 col-sm-12 col-md-12 text-left'><div class='ticket-title'><h3 class='productname'>"+json[item].item[j].name+"</h3></div></div><div class='col-xs-12 col-sm-12 col-md-12 text-right' style='margin-top:-20px;'><div class='row'><span class='dollartxt'>"+json[item].item[j].vat+" </span><span class='productPrice text-right'>"+json[item].item[j].price+"</span><span class='dollartxt'> 元起</span></div></div><div class='clearfix'></div></a></div></div>");
       } 
     }


/*美加*/
	for (var item = 3; item <4; item++) {
		for (var j = 0; j < json_3; j++){
               eachticket_04.append("<div class='col-xs-12'><div class='row'><a href='"+json[item].item[j].link+"' class='otherthumbnail' type='button' title=' "+json[item].item[j].name+" │ "+json[item].item[j].price+" 元起' target='_blank'><div class='col-xs-12 col-sm-12 col-md-12 text-left'><div class='ticket-title'><h3 class='productname'>"+json[item].item[j].name+"</h3></div></div><div class='col-xs-12 col-sm-12 col-md-12 text-right' style='margin-top:-20px;'><div class='row'><span class='dollartxt'>"+json[item].item[j].vat+" </span><span class='productPrice text-right'>"+json[item].item[j].price+"</span><span class='dollartxt'> 元起</span></div></div><div class='clearfix'></div></a></div></div>");
       } 
     }


/*歐洲*/
	for (var item = 4; item <5; item++) {
		for (var j = 0; j < json_4; j++){
               eachticket_05.append("<div class='col-xs-12'><div class='row'><a href='"+json[item].item[j].link+"' class='otherthumbnail' type='button' title=' "+json[item].item[j].name+" │ "+json[item].item[j].price+" 元起' target='_blank'><div class='col-xs-12 col-sm-12 col-md-12 text-left'><div class='ticket-title'><h3 class='productname'>"+json[item].item[j].name+"</h3></div></div><div class='col-xs-12 col-sm-12 col-md-12 text-right' style='margin-top:-20px;'><div class='row'><span class='dollartxt'>"+json[item].item[j].vat+" </span><span class='productPrice text-right'>"+json[item].item[j].price+"</span><span class='dollartxt'> 元起</span></div></div><div class='clearfix'></div></a></div></div>");
       } 
     }



/*其他*/
	for (var item = 5; item <6; item++) {
		for (var j = 0; j < json_5; j++){
               eachticket_06.append("<div class='col-xs-12'><div class='row'><a href='"+json[item].item[j].link+"' class='otherthumbnail' type='button' title=' "+json[item].item[j].name+" │ "+json[item].item[j].price+" 元起' target='_blank'><div class='col-xs-12 col-sm-12 col-md-12 text-left'><div class='ticket-title'><h3 class='productname'>"+json[item].item[j].name+"</h3></div></div><div class='col-xs-12 col-sm-12 col-md-12 text-right' style='margin-top:-20px;'><div class='row'><span class='dollartxt'>"+json[item].item[j].vat+" </span><span class='productPrice text-right'>"+json[item].item[j].price+"</span><span class='dollartxt'> 元起</span></div></div><div class='clearfix'></div></a></div></div>");
     }
    }
/*});*/



