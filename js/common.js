var showAddPage = function(){
	$("#showAdd").on("click",function(){
		$("#addPage").css("visibility","visible");
		$("#searchPage").css("visibility","hidden");
	});
}
var fbLogin = function(){
	$("#fbLogin").on("click",function(){
		alert("integrate Facebook login");
	});
}
var find=function(){
	$("#showFind").on("click",function(){
		//alert("find clicked")
		wellBeing.router.showSearchPage();
	});
}