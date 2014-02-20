// validate signup form on keyup and submit
var JQUERY4U = {};
var validate;

JQUERY4U.UTIL = {
	setupFormValidation : function() {
		console.log('setupformvalidate called');
		validate = $("#registration-form").validate({
			rules : {
				firstname : "required",
				lastname : "required",
				mobile : {
					required : true,
					minlength : 10,
					digits : true
				},
				email : {
					email : true
					// we avoid remote verification as of now
					//remote : "emails.action"
				},
				gender : "required",
				age: {
					digits: true
				}
			},
			messages : {
				firstname : "Enter patient's first name",
				lastname : "Enter patient's last name",
				mobile : {
					required : "Enter a mobile number",
					minlength : jQuery.format("Enter at least {0} characters")
				},
				email : {
					email : "Please enter a valid email address",
					//remote : jQuery.format("{0} is already in use")
				},
				gender : "Please specify patient's gender"
			},
			success : function(label) {
				label.html('Ok!').addClass('control-label');
				label.parent().addClass('has-success');
				label.parent().removeClass('has-error');
			},
			highlight : function(element, errorClass) {
				$(element).parent().parent().next().removeClass('has-success');
				$(element).parent().parent().next().addClass('has-error');
			},
			errorPlacement: function(error, element) {
				error.addClass('control-label');
				element.parent().parent().next().html(error);
				element.parent().parent().next().removeClass('has-success');
				element.parent().parent().next().addClass('has-error');
			}
		});
	}
};
