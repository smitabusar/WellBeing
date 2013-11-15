wellBeing.RemedyView=Backbone.View.extend({
	tagName:"<div>",
	className:"remedyCSS",
	render:function(){
		var s="<h3>" + this.model.get('type') + "</h3><hr/>";
		s += "<p>" + this.model.get('ingridents') + "</p>";
		s += "<p>" + this.model.get('prepration') + "</p>";
		s += "<p>" + this.model.get('dosage') + "</p><hr/>";
		s += "<strong>" + this.model.get('caution') + "</strong>";
		this.$el.html(s);
	}
});