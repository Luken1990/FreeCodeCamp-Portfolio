//Google map 

$('.map-wrapper')
	.click(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')
});

//Smooth Scroll

$("a[href^='#']").on("click", function(e){
	e.preventDefault();
	
	var target = this.hash;
	var $target = $(target);
	
	$("html body").animate({
		'scrollTop': $target.offset().top
	},1000, 'swing');
	
});

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

//Navbar Hide and show

function scrollCheck(){
	var $nav = $(".navbar");
	var scroll = window.scrollY;
	var bottomOfPg = (window.screenTop + window.innerHeight) - $nav.height();
	if (scroll >= bottomOfPg){
		$nav.hide();
	}else{
		$nav.slideDown();
	}
}

$(window).on("scroll", debounce(scrollCheck));

//Device slide in animation


//find out position of scroll bar 
var windowTop = $(window).scrollTop();
//find height of window
var windowHeight = $(window).height();
//make bottom of window starting position by adding window top and window height.
var windowBottom = windowHeight + windowTop;


$.fn.revealOnScroll = function(){
	return this.each(function(){
		var deviceOffset = $(this).offset();
		var deviceOffsetTop = deviceOffset.top;
		
		if(!$(this).hasClass("Slide")){
			
			if(windowBottom > deviceOffsetTop){
				$(this).addClass("Slide");
			}
		}
	});
}

$(window).on("scroll", function(){

	windowTop = $(window).scrollTop();
	windowHeight = $(window).height();
	windowBottom = windowHeight + windowTop;
	
	$(".ipad").revealOnScroll();
	$(".iphone").revealOnScroll();
})

//pulsing button


$(".vistBtn").on("mouseenter", function(){
	$(this).addClass("animated pulse").finish();
})

$(".vistBtn").on("mouseout", function(){
	$(this).removeClass("animated pulse").finish();
})


