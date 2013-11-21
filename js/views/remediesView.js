wellBeing.RemediesView = Backbone.View.extend({
	renderCureType:function(cureType){
		_.each(this.collection.where({type:cureType}), function(model){
			wellBeing.remedyView=new wellBeing.RemedyView({model:model});
			wellBeing.remedyView.render();
			$("#cureDetails").append(wellBeing.remedyView.$el);
		});
	}
});