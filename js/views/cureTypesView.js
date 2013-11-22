wellBeing.CureTypesView = Backbone.View.extend({
	render:function(){
		_.each(this.collection.models, function(model){
			var cureTypeView=new wellBeing.CureTypeView({model:model});
			cureTypeView.render();
			$("#cureTypes").append(cureTypeView.$el);

		});
		var cureTypeView=new wellBeing.CureTypeView({model:this.collection.models[0]});
		cureTypeView.renderRemedyForCureType();
	}
});