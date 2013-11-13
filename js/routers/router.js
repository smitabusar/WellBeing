wellBeing.router = new (Backbone.Router.extend({
	routes : {
		"remedy" : "showRemedy"
	},
	showRemedy: function(){
		console.log ("Getting Remedy");
	}
}));
 Backbone.history.start({root: "/"});