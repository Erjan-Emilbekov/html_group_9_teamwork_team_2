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
			$('.tabs').tabslet({
        mouseevent: 'click',
        attribute: 'href',
        animation: true
    });
		
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

});

$(document).ready(function() {

	$("#send_form").validate({
		errorClass: "invalid",
		validClass: "success",

		rules: {
			name:{
				required:true,
			},
			lname:{
				required:true,
			},

			email:{
				required:true,
				email:true
			}
		},

			messages: {     
     email: {
       required: "Please specify your Email",
       email: "You entered an invalid Email"
     },
     name:{
     	required:"please write your name",
     },
      lname:{
     	required:"please write your last name",
     },
   },
   errorElement:"em"

	});

});
