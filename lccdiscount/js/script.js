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


// 控制gotoTop在最上面是隱藏

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("gotop").style.display = "block";
    } else {
        document.getElementById("gotop").style.display = "none";
    }
}
