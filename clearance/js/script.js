$(function(){
	var speed = 4000;

	$('.quick_link a , .quick_link_hot a ').click(function(){
		var $this = $(this),
			href = $this.attr('href');

		$('html, body').stop().animate({
				scrollTop: $(href).offset().top - 38
			});

		return false;
	});
	
	$('#gotop').click(function(){
		$('html,body').animate({scrollTop: '0px'}, 800);
		return false;
	}); 
	
});


/*--------春節日期---------*/

$(function(){
	
	$('.hot_a').click(function(){
		$('html,body').animate({scrollTop:$('#hot_a').offset().top -38});
		return false;
	});
	
	$('.hot_b').click(function(){
		$('html,body').animate({scrollTop:$('#hot_b').offset().top -38});
		return false;
	});

	$('.hot_c').click(function(){
		$('html,body').animate({scrollTop:$('#hot_c').offset().top -38});
		return false;
	});
	
	$('.hot_d').click(function(){
		$('html,body').animate({scrollTop:$('#hot_d').offset().top -38});
		return false;
	});
	
	$('.hot_e').click(function(){
		$('html,body').animate({scrollTop:$('#hot_e').offset().top -38});
		return false;
	});

	$('.hot_f').click(function(){
		$('html,body').animate({scrollTop:$('#hot_f').offset().top -38});
		return false;
	});
		
	$('.hot_g').click(function(){
		$('html,body').animate({scrollTop:$('#hot_g').offset().top -38});
		return false;
	});
	
	$('.hot_h').click(function(){
		$('html,body').animate({scrollTop:$('#hot_h').offset().top -38});
		return false;
	});

	$('.hot_i').click(function(){
		$('html,body').animate({scrollTop:$('#hot_i').offset().top -38});
		return false;
	});
	
});