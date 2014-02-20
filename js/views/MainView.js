define([
  'text!templates/MainTemplate.html',
  'router'
], 
function(MainTemplate, Router) {

  var MainView = Backbone.View.extend({

    el: ".page",

    events: {
      'click .header-boards-button' : 'showList',
    },

    initialize: function() {
      _.bindAll(this, 'render');
      this.render();	
    },

    render: function() {
      var template = _.template(MainTemplate, {});
      this.$el.html(template);
    },

    showList : function(){
      var self =  this;

      require(['views/ListView', 'vm'], function( ListView, VM) {
        self.listView1 = VM.create({}, 'listView1', ListView, {el: '#childView1'});
      });
    }
  });
  return MainView;		
});
