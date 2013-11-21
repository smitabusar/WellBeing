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
/*var cures=[{id:1,
	symptom:"Cold",
	Alias:"Running nose"
	remedies:[{type:"Home Remedy",method:"Boil vicks vaporrub in water and inhale",caution:"Be careful of hot water"},
	{type:"Home Remedy",method:"Apply warm ghee on chest before nap",ageRange:"0-5 years"},
	{type:"Home Remedy",ingridents:"jaggery,ajwain,water",method:"boil 1/2 cup water, jaggery and ajwain to form 2-3 spoon syrup. Drink it.",ageRange:"0-5 years", dosage:"1 tsp 3-4 times a day"},
	{type:"Aromatherapy",method:"Take a shower with xx oil"},
	{type:"General",method:"sleep with the slanted head. Especially effective for kids"}
]},
{id:2,
	symptom:"cough",
	Alias:"sore throat"
	remedies:[{type:"General",method:"saliner gargles",caution:"Be careful of hot water",dosage:"atleast 4 times a day"},
	{type:"Home Remedy",ingridents:"ginger,honey",method:"grate ginger and mix with 1tsp honey. eat it",ageRange:"2 year plus", dosage:"4-5 times a day",caution : "Not applicable to infants"},
	{type:"General",steps:"warm seasme oil. rub on palms and feet"},
]},
{id:3,
	ailment:"allergy",
	symptom:"cold,hives",
	remedies:[{type:"first aid",method:"Benedryl",dosage:"as provided on the bottle"}
]}];*/


app.get("/remedies",function(req,res){
	res.send(remediesDB);
	//res.json(remediesDB);
});

app.get("/ailments",function(req,res){
	res.send(ailments);
	//res.json(remediesDB);
});

app.get("/ailments/:id",function(req,res){ //not working
	var id=req.param("id"),
		filter="{id:" + id + "}",
		ailment=_.findWhere(ailments,{id:1});
	console.log(filter, ailment);
	res.send(ailment);
	//res.json(remediesDB);
});

app.post("/remedies",function(req,res){
	remediesDB.push(req.body); //without express bodyparser/json req.body is undefined
});

var port=process.env.PORT || 3000;
app.listen(port);
console.log("Started server on port " + port);