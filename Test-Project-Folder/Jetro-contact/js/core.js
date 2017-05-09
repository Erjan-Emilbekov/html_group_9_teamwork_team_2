
$(document).ready(function() {

	$('.slider-1').slick({
		dots: true,
		infinite: true,

	});
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
