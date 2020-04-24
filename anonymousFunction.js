function mainFunction(anotherFunction,value){
	anotherFunction(value);
}


mainFunction(function (value){
	console.log(value);
},"hello node js")
