wellBeing.router = new (Backbone.Router.extend({
	start : function(){
		Backbone.history.start({root: "/"});
	},
	routes : {
		"/symptom:/symptom" : "showSearchPage",
	},
	showSearchPage:function(){
		var strSymptom=$(txtSymptom).val();
		wellBeing.symptom=new wellBeing.Symptom({id:strSymptom});
		wellBeing.symptom.fetch({
			success:function(){
				console.log(wellBeing.symptom);
				wellBeing.ailemnts=new wellBeing.Ailments(wellBeing.symptom.attributes[0]);
				wellBeing.ailmentsView=new wellBeing.AilmentsView({collection: wellBeing.ailemnts}); 
				wellBeing.ailmentsView.render();
				wellBeing.remedies=new wellBeing.Remedies(wellBeing.symptom.attributes[1]);
				wellBeing.cureTypes=new wellBeing.CureTypes(wellBeing.symptom.attributes[2]);
				wellBeing.cureTypesView=new wellBeing.CureTypesView({collection: wellBeing.cureTypes})
				wellBeing.cureTypesView.render();
			}
		});	
	}
}));
 //Backbone.history.start({root: "/"});