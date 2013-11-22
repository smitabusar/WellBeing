wellBeing.CureTypeView=Backbone.View.extend({
	tagName:"span",
	render:function(){
		var source=$('#cureTypeTemplate').html();
		var template = Handlebars.compile(source);
		var html=template(this.model.toJSON());
		this.$el.html(html);
	},
	events:{
		"click":"renderRemedyForCureType"
	},
	renderRemedyForCureType:function(){
		$("div .remedyCSS").remove();
		var remediesView=new wellBeing.RemediesView({collection: wellBeing.remedies})
		remediesView.renderCureType(this.model.toJSON().type);
	}
});