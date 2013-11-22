wellBeing.AilmentMenuView=Backbone.View.extend({
	tagName:"span",
	render:function(){
		var source=$('#ailmentMenuTemplate').html();
		var template = Handlebars.compile(source);
		var html=template(this.model.toJSON());
		this.$el.html(html);
	},
	events:{
		"click":"renderAilment"
	},
	renderAilment:function(){
		var ailmentView=new wellBeing.AilmentView({model:this.model});
		ailmentView.render();
		$("div .ailmentCSS").remove();
		$("aside").append(ailmentView.$el);
	}
});