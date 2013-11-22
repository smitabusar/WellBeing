var http=require('http');
var mongoose=require("mongoose");
var uristring=process.env.MONGOHQ_URL||"";

mongoose.connect(uristring,function(err,res){
	if(err){
		console.log("error :" + err);
	}
	var DB_Ailment=new mongoose.Sechema({
		name:{type:String},
		symptoms:{type:Array},
		info:{type:String},
		preventions:{type:Array},
		likes:{type:Number}
	});
	var dbailment=mongoose.model('Burn',DB_Ailment)
	var burn=new dbailment({name:"Burn",symptoms:[],info:"",prventions:["Be careful around fire"]});
	burn.save(function(err){
		if(err){
			console.log("error :" + err);
		}
	});
	dbailment.find({'symptom:cold'}).exec(function(err,result){
		if(err){
			console.log("error :" + err);
		}
		console.log(result);
	});
});