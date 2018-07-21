/*當地遊 廈門票券*/
var json = [
			  {
			    "title" : "當地遊 廈門票券",
			    "item" : [
							{
								"name":"南靖雲水謠古鎮一日遊",
								"point":"資深導遊耳麥講解、土樓招牌菜",
								"price":"952",
								"link":"https://activity.eztravel.com.tw/global/introduction/CTA12071141",
								"img":"image/T_1.png"
							},
							{
								"name":"老廈門美食一日遊",
								"point":"達人帶路10家地道老店、6人小團",
								"price":"1,283",
								"link":"https://activity.eztravel.com.tw/global/introduction/CTA11324434",
								"img":"image/T_4.png"
							},
														{
								"name":"鼓浪嶼20處遺產一日遊",
								"point":"12人慢遊小團、深入私房景點",
								"price":"1,476",
								"link":"https://activity.eztravel.com.tw/global/introduction/CTA14710072",
								"img":"image/T_2.png"
							},
							{
								"name":"帆彙帆船出海體驗",
								"point":"專業船長帶你拉帆，秀麗海濱風光",
								"price":"607",
								"link":"https://activity.eztravel.com.tw/global/introduction/CTA5398351",
								"img":"image/T_3.png"
							},
							{
								"name":"廈門環島觀光巴士票券",
								"point":"​輕鬆逛遍各景點",
								"price":"198",
								"link":"https://activity.eztravel.com.tw/global/introduction/CTT1409303",
								"img":"image/T_6.png"
							},

							{
								"name":"旅拍寫真。好評攝影師",
								"point":"親子出遊、畢業旅行留下最美回憶",
								"price":"1,418",
								"link":"https://activity.eztravel.com.tw/global/introduction/CTA11629054",
								"img":"image/T_5.png"
							}
							]
			   }
			    
			]


/*以下是程式碼區*/

/*宣告 要把JSON置入哪裡*/
var eachticket_01 = $(".each_ticket_01 ");

/*宣告 陣列內的數量*/
var json_0 = json[0].item.length;

/*當地遊 廈門票券*/

	for (var item = 0; item <1; item++) {
		for (var j = 0; j < json_0; j++){
				eachticket_01.append("<div class='col-xs-12 col-sm-6 col-md-4'><div class='row'><div class='col-xs-12'><a href='"+ json[item].item[j].link +"' target='_blank' class='thumbnail' title='"+ json[item].item[j].name +" │ "+ json[item].item[j].price +"元起'><div class='col-xs-12 productblocklimg' style='background-image: url("+ json[item].item[j].img +");'></div><div class='clearfix'></div><div class='productblock'><div class='text-center'><div class='text-left special-title'><h3 class='text-primary'><strong>"+ json[item].item[j].name +"</strong></h3><h4 class='txt-spec'>"+ json[item].item[j].point +"</h4></div></div><h5 class='text-right'><span class='productPrice'> "+ json[item].item[j].price +" </span><span class='dollartxt'>元起</span></h5></div></a></div></div></div>");
       } 
     }

