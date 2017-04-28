$(document).ready(function() {


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
});
