wellBeing.router = new (Backbone.Router.extend({
	start : function(){
		Backbone.history.start({root: "/"});
	},
	routes : {
		"" : "showSearchPage",
		"remedy" : "showRemedy",
		"remedies" : "showRemedies"
		//"ailments/:id" : "ailments"
	},
	
	showRemedy: function(){
		console.log ("Getting Remedy");
		//added models
		wellBeing.remedy1 = new wellBeing.Remedy();
		wellBeing.remedy1.set({ingridents:"Honey,Ginger",prepration:"Boil water, grated ginger and honey.",caution:"Not for infants",dosage:"atleast 3 times a day"});
		wellBeing.remedy2 = new wellBeing.Remedy({ingridents:"Water & salt",prepration:"Boil water and salt.",usage:"gargle with warm saline solution",dosage:"atleast 4 times a day"});
		//linked model to views
		wellBeing.remedyView1=new wellBeing.RemedyView({model:wellBeing.remedy1});
		wellBeing.remedyView1.render();
		$("#cureDetails").append(wellBeing.remedyView1.$el);
		wellBeing.remedyView2=new wellBeing.RemedyView({model:wellBeing.remedy2});
		wellBeing.remedyView2.render();
		$("#cureDetails").append(wellBeing.remedyView2.$el);
		//added a collection
		wellBeing.remedies= new wellBeing.Remedies();
		wellBeing.remedies.create({ingridents:"Black Pepper,Ginger",prepration:"Mix 1tsp Black Pepper and 1 tsp honey.",caution:"Not for infants"});
		wellBeing.remedies.create({});//defines a default object or wellBeing.remedies.create();

	},

	showRemedies: function(){
		console.log ("Getting Remedies");
		wellBeing.remedies=new wellBeing.Remedies();
		wellBeing.remedies.fetch({
			success: function (collection){
				console.log("in success of collection fetch")
				console.log(wellBeing.remedies);
				/*_.each(wellBeing.remedies1.models,function(remedyObj){
					wellBeing.remedyView=new wellBeing.RemedyView({model:remedyObj});
					wellBeing.remedyView.render();
					$("#cureType").append(wellBeing.remedyView.$el);
				});*/
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
		this.showRemedies();
		//this.showAilment();
		this.showAilmentsMenu();
	}
}));
 //Backbone.history.start({root: "/"});