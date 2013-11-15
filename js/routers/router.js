wellBeing.router = new (Backbone.Router.extend({
	start : function(){
		Backbone.history.start({root: "/"});
	},
	routes : {
		"remedy" : "showRemedy",
		"remedies" : "showRemedies"
	},
	showRemedy: function(){
		console.log ("Getting Remedy");
		wellBeing.remedy1 = new wellBeing.Remedy();
		wellBeing.remedy1.set({ingridents:"Honey,Ginger",prepration:"Boil water, grated ginger and honey.",caution:"Not for infants",dosage:"atleast 3 times a day"});
		wellBeing.remedy2 = new wellBeing.Remedy({ingridents:"Water & salt",prepration:"Boil water and salt.",usage:"gargle with warm saline solution",dosage:"atleast 4 times a day"});
		console.dir(wellBeing.remedy1);
		console.log(wellBeing.remedy2);
		wellBeing.remedyView1=new wellBeing.RemedyView({model:wellBeing.remedy1});
		wellBeing.remedyView1.render();
		$("body").append(wellBeing.remedyView1.$el);
		wellBeing.remedyView2=new wellBeing.RemedyView({model:wellBeing.remedy2});
		wellBeing.remedyView2.render();
		$("body").append(wellBeing.remedyView2.$el);
	}
}));
 //Backbone.history.start({root: "/"});