wellBeing.AilmentsView = Backbone.View.extend({
	render:function(){
		_.each(this.collection.models, function(model){
			wellBeing.ailmentMenuView=new wellBeing.AilmentMenuView({model:model});
			wellBeing.ailmentMenuView.render();
			$("#ailments").append(wellBeing.ailmentMenuView.$el);
		});
		wellBeing.ailmentMenuView=new wellBeing.AilmentMenuView({model:this.collection.models[0]});
		wellBeing.ailmentMenuView.renderAilment();
	}
});