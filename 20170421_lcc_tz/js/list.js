/*LIST*/
var json = [
			  {
          "title":"東北亞",
			  	"link":"index.html",
			    "pic01" : "image/list_01.png",
			    "pic02" : "image/list_01_2.png",
			    "id":"list_01"
			   },
			   {
          "title":"東南亞",
			   	"link":"pro_02.html",
			    "pic01" : "image/list_02.png",
			    "pic02" : "image/list_02_2.png",
			    "id":"list_02"
			   },
			   {
          "title":"港澳大陸",
			   	"link":"pro_03.html",
			    "pic01" : "image/list_03.png",
			    "pic02" : "image/list_03_2.png",
			    "id":"list_03"
			   },
			   {
          "title":"美加",
			   	"link":"pro_04.html",
			    "pic01" : "image/list_04.png",
			    "pic02" : "image/list_04_2.png",
			    "id":"list_04"
			   },
			   {
          "title":"紐澳",
			   	"link":"pro_05.html",
			    "pic01" : "image/list_05.png",
			    "pic02" : "image/list_05_2.png",
			    "id":"list_05"
			   },
			   {
          "title":"歐洲",
			   	"link":"pro_06.html",
			    "pic01" : "image/list_06.png",
			    "pic02" : "image/list_06_2.png",
			    "id":"list_06"
			   },
			   {
          "title":"太平洋島嶼/其他",
			   	"link":"pro_07.html",
			    "pic01" : "image/list_07.png",
			    "pic02" : "image/list_07_2.png",
			    "id":"list_07"
			   },

			]


/*以下是程式碼區*/

/*宣告 要把JSON置入哪裡*/
var eachTable_01 = $(".each_table_01");


/*宣告 陣列內的數量*/
var json_0 = json.length;



/*LIST*/

	for (var item = 0; item <json_0; item++) {
			eachTable_01.append("<a href="+json[item].link+" target='_parent'>"+
						"<img src='"+json[item].pic01+"' title='"+json[item].title+"' class='img-responsive' id='"+json[item].id+"' width='100%' style='padding:10px' >"+"</a>"			);

			}

$(function(){
    $("#list_01").hover(function() {
      /* Stuff to do when the mouse enters the element */
      $("#list_01").attr("src","image/list_01"+"_2"+".png");
    }, function() {
      /* Stuff to do when the mouse leaves the element */
      $("#list_01").attr("src","image/list_01"+".png");
    });

     $("#list_02").hover(function() {
      /* Stuff to do when the mouse enters the element */
      $("#list_02").attr("src","image/list_02"+"_2"+".png");
    }, function() {
      /* Stuff to do when the mouse leaves the element */
      $("#list_02").attr("src","image/list_02"+".png");
    });

     $("#list_03").hover(function() {
      /* Stuff to do when the mouse enters the element */
      $("#list_03").attr("src","image/list_03"+"_2"+".png");
    }, function() {
      /* Stuff to do when the mouse leaves the element */
      $("#list_03").attr("src","image/list_03"+".png");
    });

     $("#list_04").hover(function() {
      /* Stuff to do when the mouse enters the element */
      $("#list_04").attr("src","image/list_04"+"_2"+".png");
    }, function() {
      /* Stuff to do when the mouse leaves the element */
      $("#list_04").attr("src","image/list_04"+".png");
    });

     $("#list_05").hover(function() {
      /* Stuff to do when the mouse enters the element */
      $("#list_05").attr("src","image/list_05"+"_2"+".png");
    }, function() {
      /* Stuff to do when the mouse leaves the element */
      $("#list_05").attr("src","image/list_05"+".png");
    });

     $("#list_06").hover(function() {
      /* Stuff to do when the mouse enters the element */
      $("#list_06").attr("src","image/list_06"+"_2"+".png");
    }, function() {
      /* Stuff to do when the mouse leaves the element */
      $("#list_06").attr("src","image/list_06"+".png");
    });

     $("#list_07").hover(function() {
      /* Stuff to do when the mouse enters the element */
      $("#list_07").attr("src","image/list_07"+"_2"+".png");
    }, function() {
      /* Stuff to do when the mouse leaves the element */
      $("#list_07").attr("src","image/list_07"+".png");
    });
  })