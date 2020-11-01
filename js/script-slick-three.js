	$(document).ready(function(){
		$('.benefits_wrapp').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,
			mobileFirst: true,
			responsive: [
		{
      breakpoint: 1920,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
		{
			breakpoint: 1300,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},

    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
			{
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
		});
	});
