wellBeing.Remedy=Backbone.Model.extend({
	defaults: {
		type:"Home Remedy",
		ingridents:"",
		prepration:"",
		caution:"No side effects known",
		dosage:"",
	}
	//{urlRoot: '/remedies'} pass in id & then call fetch() -get or save()-put
	//no id .save() -post .get(id) -gets by id .destroy() -delete
});