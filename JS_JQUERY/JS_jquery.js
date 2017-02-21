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

particlesJS("particles-js", {"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

