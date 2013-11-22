wellBeing.RemedyView=Backbone.View.extend({
	tagName:"div",
	className:"remedyCSS",
	render:function(){
		var source=$('#remedyTemplate').html();
		var template = Handlebars.compile(source);
		var html=template(this.model.toJSON());
		this.$el.html(html);
	}
});