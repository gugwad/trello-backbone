define([
  'typeahead',
  'combobox',
  'text!templates/ListReadyTemplate.html',
  'text!templates/ListTemplate.html',
  'text!templates/CardTemplate.html',
  'text!templates/CardReadyTemplate.html',
  'vm'
], function(TypeAhead, Combobox, ListReadyTemplate, ListTemplate, CardTemplate,
           CardReadyTemplate, VM) {

  var ListView = Backbone.View.extend({

    el: ".page",

    events:{
      'click .list.add-list.idle' : 'showActiveList',
      'click .primary.confirm.js-save-edit' : 'prepareList',
      'click .open-card-composer.js-open-card-composer' : 'addCardReady',
      'click .primary.confirm.js-add-card' : 'processCard'
    },
    processCard: function(){
      var cardName  = this.$el.find('.list-card-composer-textarea.js-card-title').val();
      this.$el.find('.list-card-composer-textarea.js-card-title').addClass('inactive');;
      var template = _.template(CardTemplate, {});
      this.$el.find('.card-composer').remove();
      this.$el.find('#card').append(template);
      this.$el.find('.list-card-title.clear.js-card-name').prepend(cardName);
      $('.open-card-composer.js-open-card-composer').removeClass('hide');
    },
    addCardReady: function(){
      var template = _.template(CardReadyTemplate, {});
      this.$el.find('.list').append(template);
      // hide the add card, we donot want it to appear while we are adding
      // a card.
      $('.open-card-composer.js-open-card-composer').addClass('hide');
    },
    prepareList: function(){
      var listName = this.$el.find('input').val();
      var template = _.template(ListReadyTemplate, {});
      this.$el.html(template);
      this.$el.find('h2').prepend(listName);
    },

    showActiveList: function(){
      $('.list.add-list.idle').removeClass('idle');
    },

    initialize: function(){
      _.bindAll(this, 'render', 'showActiveList'); 
      this.render();
    },

    render: function(){
      var template = _.template(ListTemplate, {});
      this.$el.html(template);
    }

  });
  return ListView;
});
