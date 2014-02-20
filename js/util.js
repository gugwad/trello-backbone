var attributeTypes = {};
var locModel = null;
var loginView = null;
var interval = 900*1000; //appointment interval of 15 mins

// Function to serialize the form data to JSON format
$.fn.serializeObject = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name] !== undefined) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
}; 


// AJAX request Error handling method
ajaxErrorHandler = function(response) {
	switch(response.status) {
		case 401: // Unauthorized
			alert('Unauthorized access. Please try to login. You will be redirected to Login page.');
			var router = require('router');
			router.navigate('', {trigger: true});
			break;
			
		default: break;			
	}	
};

showPageLoadingModal = function(show) {
	show ? $('#pageLoadModal').modal('show') : $('#pageLoadModal').modal('hide');
};

$(document).ready( function() {
	
	$('#pageLoadModal').modal({
		keyboard: false,
		show: false,
		backdrop: 'static'
	});	
}).ajaxStart( function() {
	$('html').addClass('busy');
}).ajaxStop( function() {
	$('html').removeClass('busy');
});