define([], function() {
	var ListCollection = Backbone.Collection.extend({
		parse: function(response) {
			return response.results;
		}
	});
	
	return ListCollection;
});
