

var nmbr = 12;
var strng = "here ";
var bln = true;
var obj = {};

var theDoubler = function (someInput) {
 if (typeof someInput == "number") {
			return (someInput * 2);
	}
 else if (typeof someInput =="string") {
			return (someInput + someInput);
}
else if (typeof someInput == "boolean") {
	if (someInput === false) {
			return ("I won't double this");
	} else {
			return ("super-duper true");
	}
}
else if (typeof someInput == "object") {
		return ("everything is an object");
}
else {
	  return ("I can't double this");
}
};

console.log(theDoubler(nmbr));
console.log(theDoubler(strng));
console.log(theDoubler(bln));
console.log(theDoubler(obj));
