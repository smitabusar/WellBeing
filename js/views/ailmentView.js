wellBeing.AilmentView=Backbone.View.extend({
	tagName:"div",
	className:"ailmentCSS",
	render:function(){
		var source=$('#ailmentInfo').html();
		var template = Handlebars.compile(source);
		var html=template(this.model);
		this.$el.html(html);
	}
});