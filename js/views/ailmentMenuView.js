wellBeing.AilmentMenuView=Backbone.View.extend({
	tagName:"span",
	className:"menu",
	render:function(){
		var source=$('#ailmentMenuTemplate').html();
		var template = Handlebars.compile(source);
		var html=template(this.model);
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