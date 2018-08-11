$(function(){
	var discounts = {
		init: function () {
			// $('#clickDiscounts') => 點擊取折扣碼的按鈕
			$('#clickDiscounts').on('click', discounts.loginCheckerCallback);
		},
		loginCheckerCallback: function() {
			// btn url & target 清空 , $(".btn-sure") 為 pop model 的"確定"按鈕
			$(".btn-sure").attr({'target':'','href':''});
			discounts.loginChecker(function (res) {
				// 判斷是否登入
				if (res.isLogin) {
					// 已登入時 => 領折扣碼
					discounts.discountCallback();
				} else {
					// 未登入 => 提醒 open modal
					var titleText = '貼心提醒~折扣碼僅限會員領取'; // modal 標題
					var bodyText = '請先【註冊/登入】易遊網站會員<br>再返回本活動頁中按下領取按鈕，折扣碼即可完成歸戶使用。';  // modal內文
					$('#activeModalLabel').html(titleText);
					$('.modal').find(".modal-body").html(bodyText);
					// open modal
					$('#activeModal').modal('show');
					//另開 member 登入頁，使用者進行登入動作 => 自行返回活動頁重新點擊領取
					var openUrl = discounts.apiEndpoint_MEMBER() + '/login';
					// btn 加上 url & target , $(".btn-sure") 為 pop model 的"確定"按鈕
					$(".btn-sure").attr({
						'target' : '_blank',
						'href'   : openUrl
					});
					// close modal
					$('.modal').on('click', '.btn-sure', function(e) {
						$('#activeModal').modal('hide');
					});
				}
			});
		},
		discountCallback: function(e) {
			// 發 api 給 m-api 進行領取動作 => data 顯示回傳訊息
			discounts.ajaxDiscount(function (data) {
				var titleText = data.alert.title; // modal 標題
				var bodyText = data.alert.message;  // modal 內文
				$('#activeModalLabel').html(titleText);
				$('.modal').find(".modal-body").html(bodyText);
				// open modal
				$('#activeModal').modal('show');
				//有 weburl 欄位即為成功並另開此url => 會員折扣碼頁
				if (data.alert.webUrl) {
					// btn 加上 url & target , $(".btn-sure") 為 pop model 的"確定"按鈕
					$(".btn-sure").attr({
						'target' : '_blank',
						'href'   : data.alert.webUrl
					});
				}
				// close modal
				$('.modal').on('click', '.btn-sure', function(e) {
					if (!data.alert.webUrl || data.alert.webUrl == "") {
						e.preventDefault();
					}
					$('#activeModal').modal('hide');
				});
			});
		},
		// common ajax method
		ajaxSet: function() {
			var uriMWEB = discounts.apiEndpoint_MWEB();
			return {url: uriMWEB, method: "GET", timeout: 60000, dataType: "jsonp", crossDomain: true};
		},
		// ajax login api callback
		loginChecker: function(callback) {
			var set = discounts.ajaxSet();
			set.url += "api/1/hp/isLogin";
			$.ajax(set).success(function(res){
				callback(res);
			});
		},
		// ajax discounts api callback
		ajaxDiscount: function(callback) {
			var set = discounts.ajaxSet();
			set.url += 'api/1/event/hp/discounts/ftk/claim';
			$.ajax(set).success(function(res){
				callback(res);
			});
		},
		// 環境判斷
		environment: function() {
			var hostname = window.location.hostname;
			if (hostname.indexOf('www.eztravel.com.tw') === 0) {
				return 'master'
			} else if (hostname.indexOf('new-ecfs.eztravel.com.tw') === 0) {
				return 'test'
			} else {
				return 'test'
			};
		},
		// protocol
		protocol: function() {
			var protocol = window.location.protocol;
			switch (protocol) {
				case 'https':
				case 'http':
					return protocol
					break
				default:
					return 'http:'
					break
			}
		},
		// MEMBER ApiEndpointConfig (same as ApiEndpointConfig.COMMON_MEMBER_ENDPOINT)
		apiEndpoint_MEMBER: function() {
			var hostTag = discounts.environment();
			var protocol = discounts.protocol();
			switch (hostTag) {
				case 'master':
					return 'https://member.eztravel.com.tw/member'
					break
				case 'test':
					return protocol + '//ezdevsrvt04.eztravel.com.tw/member'
					break
				default:
					return protocol + '//ezdevsrvt04.eztravel.com.tw/member'
					break
			}
		},
		// MWEB ApiEndpointConfig (same as ApiEndpointConfig.COMMON_MWEB_ENDPOINT)
		apiEndpoint_MWEB: function() {
			var hostTag = discounts.environment();
			var protocol = discounts.protocol();
			switch (hostTag) {
				case 'master':
					return 'https://m.eztravel.com.tw/'
					break
				case 'test':
					return protocol + '//mweb-t01.eztravel.com.tw/'
					break
				default:
					return protocol + '//mweb-t01.eztravel.com.tw/'
					break
			}
		}
	};

	// init
	discounts.init();
}); 
