wellBeing.AilmentsView = Backbone.View.extend({

	render:function(){
		_.each(this.collection.toJSON(), function(model){
			wellBeing.ailmentMenuView=new wellBeing.AilmentMenuView({model:model});
			wellBeing.ailmentMenuView.render();
			$("#ailments").append(wellBeing.ailmentMenuView.$el);

		});
	}
});