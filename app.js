var path=require("path"),
	_=require("underscore"),
	express=require("express");

var app=express()
	.use(express.static(__dirname,
						path.join(__dirname, "bower_components"),
						path.join(__dirname,"js")))	
	.use(express.bodyParser());// parses the request from json, url encoded & multipart format. Eval is not secure to use

//variable to store the data from remedies DB.
var remediesDB=[];
var ailments=[{id:1,
	name:"Common cold",
	symptoms:["Congestion","Running nose","tired","sore throat"],
	info:"Common cold is caused by virus",
	preventions:["Wash Hands regularly","Wear proper weather clothing"],
},{id:2,
	name:"sinus",
	symptoms:["Congestion","fever","sore throat","headeache"],
	info:"Majority of sinus is caused by virus. Some can be caused by allergies or fungal or bacterial infection",
	preventions:["Wash Hands regularly"],
	likes:3
}];
var cure={id:1,
	symptom:"Cold",
	alias:"Running nose",
	cureTypes:["HomeRemedy","AromaTherapy","General"],
	remedies:[{type:"HomeRemedy",method:"Boil vicks vaporrub in water and inhale",caution:"Be careful of hot water"},
	{type:"HomeRemedy",method:"Apply warm ghee on chest before nap",ageRange:"0-5 years"},
	{type:"HomeRemedy",ingridents:"jaggery,ajwain,water",method:"boil 1/2 cup water, jaggery and ajwain to form 2-3 spoon syrup. Drink it.",ageRange:"0-5 years", dosage:"1 tsp 3-4 times a day"},
	{type:"Aromatherapy",method:"Take a shower with xx oil"},
	{type:"General",method:"sleep with the slanted head. Especially effective for kids"}
]};

app.get("/ailments",function(req,res){
	res.send(ailments);
	//res.json(remediesDB);
});

app.get("/ailments/:id",function(req,res){ //not working
	var id=parseInt(req.param("id")),
		ailment=_.findWhere(ailments,{id:id});
	console.log(filter, ailment);
	res.send(ailment);
	//res.json(remediesDB);
});

app.get("/cureTypes",function(req,res){
	var remedies=_.pick(cure,"remedies").remedies;
	var cureTypes=_.uniq(_.pluck(remedies,"type"));
	cureTypes=_.map(cureTypes,function(type){return {"type":type}});
	//console.log(cureTypes);
	res.send(cureTypes);
	//res.json(remediesDB);
});

app.get("/remedies",function(req,res){
	//console.log(_.pick(cure,"remedies"));
	res.send(_.pick(cure,"remedies").remedies);
	//res.json(remediesDB);
});

app.post("/remedies",function(req,res){
	remediesDB.push(req.body); //without express bodyparser/json req.body is undefined
});

var port=process.env.PORT || 3000;
app.listen(port);
console.log("Started server on port " + port);