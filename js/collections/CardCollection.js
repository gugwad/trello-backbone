define([], function() {
	var CardCollection = Backbone.Collection.extend({
		parse: function(response) {
			return response.results;
		}
	});
	
	return CardCollection;
});
