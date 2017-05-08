$(document).ready(function(){

	$('#menu-btn').click(function(){		
			$('.main-nav').slideToggle(400);	
			if ($(this).hasClass('not-active')) {
				$(this).addClass('is-active').removeClass('not-active');
			}else{
				setTimeout(function(){
					$('.is-active').addClass('not-active').removeClass('is-active')
				},600)			
			}		
		});


	$('.slider-1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.slider-1',
		dots: true,
		centerMode: false,
		focusOnSelect: true
	});


	$('.tabs').tabslet({
        mouseevent: 'click',
        attribute: 'href',
        animation: true
    });


});