$('.map-wrapper')
	.click(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')
});

/*

$(window).scroll(function(){
	var wScroll = $(window).scrollTop();
	var position = $(".web-description").offset().top;
	
	if (wScroll <= 1400){
		$(".web-description").hide();
	}else{
		$(".web-description").addClass("animated fadeInLeft");
	}
});	

*/
