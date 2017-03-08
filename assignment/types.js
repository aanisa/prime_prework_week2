<<<<<<< HEAD


var nmbr = 12;
var strng = "here ";
var bln = true;
var obj = {};
=======
// We've created a function called "The Doubler"
// the function accepts a bunch of different inputs from the caller.
// It accepts strings, numbers, booleans and objects and tries to double them.

var someNumber = 8;
// make sure to test all the possible inputs.
// var someString =

theDoubler(someNumber);

function theDoubler(someInput) {
	// typeof is a built in javascript tool that allows us to find the type of an object
  // for number, we have given an example of how that works
>>>>>>> 8cff070463775184604ce291af1ed3973b1c9d33

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
