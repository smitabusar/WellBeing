wellBeing.Ailment=Backbone.Model.extend({
	defaults: {
		name:"No Match Found",
		symptoms:"",
		info:"",
		preventions:["Eat Well","Sleep well"],
		likes:0
	},
	urlRoot:"/ailments"
});