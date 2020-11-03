	$(document).ready(function(){
	  $('.propose__slide').slick({
		  infinite: true,
		  speed: 1000,
			cssEase: 'linear',
			autoplaySpeed: 100000,
		  fade: true,
		  cssEase: 'linear',
			autoplay: true,
			mobileFirst: true,
			prevArrow: '.propose__text-dots-left',
			nextArrow: '.propose__text-dots-right'
		});
	});
