/*小三通機票*/
var json = [
			  {
			    "title" : "小三通機票",
			    "item" : [
							{
								"name":"台北(松山機場)-廈門(五通碼頭)",
								"point":"機票+機場碼頭接送+船票",
								"price":"2,999",
								"link":"https://flight.eztravel.com.tw/taiwan/one-way/TSA-XMN-20180814-TAIPEI-XIAMEN?seat=1",
								"img":"image/XMN1.jpg"
							},
							{
								"name":"廈門(五通碼頭)-台北(松山機場)",
								"point":"船票+機場碼頭接送+機票",
								"price":"2,999",
								"link":"https://flight.eztravel.com.tw/taiwan/one-way/XMN-TSA-20180814-XIAMEN-TAIPEI?seat=1",
								"img":"image/XMN1.jpg"
							},
							{
								"name":"台中(清泉崗機場)-廈門(五通碼頭)",
								"point":"機票+機場碼頭接送+船票",
								"price":"2,999",
								"link":"https://flight.eztravel.com.tw/taiwan/one-way/RMQ-XMN-20180814-TAICHUNG-XIAMEN?seat=1",
								"img":"image/XMN2.jpg"
							},
							{
								"name":"廈門(五通碼頭)-台中(清泉崗機場)",
								"point":"​船票+機場碼頭接送+機票",
								"price":"2,999",
								"link":"https://flight.eztravel.com.tw/taiwan/one-way/XMN-RMQ-20180814-XIAMEN-TAICHUNG?seat=1",
								"img":"image/XMN2.jpg"
							},
							{
								"name":"台北-金門",
								"point":"來回機票",
								"price":"2,990",
								"link":"https://flight.eztravel.com.tw/taiwan/round-trip/TSA-KNH-20180814-20180814-TAIPEI-KINMEN?seat=1",
								"img":"image/GRP0000004394.gif"
							},
							{
								"name":"台中-金門",
								"point":"來回機票",
								"price":"2,660",
								"link":"https://flight.eztravel.com.tw/taiwan/round-trip/RMQ-KNH-20180814-20180814-TAICHUNG-KINMEN?seat=1",
								"img":"image/GRP0000004395.gif"
							}
							]
			   }		    
			]


/*以下是程式碼區*/

/*宣告 要把JSON置入哪裡*/
var eachairticket_01 = $(".each_airticket_01 ");


/*宣告 陣列內的數量*/
var json_0 = json[0].item.length;




/*小三通機票*/

	for (var item = 0; item <1; item++) {
		for (var j = 0; j < json_0; j++){
				eachairticket_01.append("<div class='col-xs-12 col-sm-6 col-md-4'><div class='row'><div class='col-xs-12'><a href='"+ json[item].item[j].link +"' target='_blank' class='thumbnail' title='"+ json[item].item[j].name +" │ 含稅 "+ json[item].item[j].price +"元起'><div class='col-xs-12 productblocklimg' style='background-image: url("+ json[item].item[j].img +");'></div><div class='clearfix'></div><div class='air_productblock'><div class='text-center'><div class='text-left special-title'><h3 class='text-primary'><strong>"+ json[item].item[j].name +"</strong></h3><h4 class='txt-spec'>"+ json[item].item[j].point +"</h4></div></div><h5 class='text-right'><span class='dollartxt'>含稅</span><span class='productPrice'> "+ json[item].item[j].price +" </span><span class='dollartxt'>元起</span></h5></div></a></div></div></div>");
       } 
     }






