wellBeing.router = new (Backbone.Router.extend({
	start : function(){
		Backbone.history.start({root: "/"});
	},
	routes : {
		"search" : "showSearchPage",
		"/symptom:/symptom" : "showSearchPage",
	},
	
	fetchData:function(symptom){
		console.log ("showing Ailments");
		wellBeing.ailments = new wellBeing.Ailments();
		wellBeing.ailments.fetch({
			success: function(collection){
				console.log(wellBeing.ailments);
				wellBeing.ailmentsView=new wellBeing.AilmentsView({collection: collection}); 
				wellBeing.ailmentsView.render();
			}
		});
		wellBeing.remedies=new wellBeing.Remedies();
		wellBeing.remedies.fetch({
			success: function (collection){
				console.log(wellBeing.remedies);
			}
		});
		wellBeing.cureTypes=new wellBeing.CureTypes();
		wellBeing.cureTypes.fetch({
			success: function (collection){
				console.log(wellBeing.remedies);
				wellBeing.cureTypesView=new wellBeing.CureTypesView({collection: collection})
				wellBeing.cureTypesView.render();
			}
		});

	},
	showRemedies: function(){
		console.log ("Getting Remedies");
		wellBeing.remedies=new wellBeing.Remedies();
		wellBeing.remedies.fetch({
			success: function (collection){
				console.log("in success of collection fetch")
				console.log(wellBeing.remedies);
				wellBeing.remediesView=new wellBeing.RemediesView({collection: collection})
				wellBeing.remediesView.renderCureType("HomeRemedy");
			}
		});

		//console.dir(wellBeing.remedies);

	},

	showAilment: function(){
		console.log ("showing Ailment");
		wellBeing.ailment=new wellBeing.Ailment({id:1});
		wellBeing.ailment.fetch();
		wellBeing.ailmentView=new wellBeing.AilmentView({model:wellBeing.ailment});
		wellBeing.ailmentView.render();
		$("aside").append(wellBeing.ailmentView.$el);
	},

	showAilmentsMenu: function(){
		console.log ("showing Ailments");
		wellBeing.ailments = new wellBeing.Ailments();
		wellBeing.ailments.fetch({
			success: function(collection){
				console.log(wellBeing.ailments);
				wellBeing.ailmentsView=new wellBeing.AilmentsView({collection: collection}); 
				wellBeing.ailmentsView.render();
			}
		});
	},

	showSearchPage:function(){
		//this.showRemedy();
		//this.showRemedies();
		//this.showAilment();
		//this.showAilmentsMenu();
		//this.fetchData();
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