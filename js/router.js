define([
  'jquery',
  'underscore',
  'backbone',
  'views/MainView',
  'models/ListModel',
  'vm'
], function($, _, Backbone, MainView, ListModel, ViewManager) {

  var Router = Backbone.Router.extend({
    routes: {
      "" : "home"
    }
  });

  var initialize = function( options ) {
    window.router = new Router();

    window.router.on("route:home", function() {
      console.log("Home page");
      var model = new ListModel();
      mainView = ViewManager.create({}, 'mainView', MainView, {model : model});
    });

    Backbone.history.start();
  };

  return {initialize: initialize};
});
