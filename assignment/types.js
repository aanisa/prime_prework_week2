// We've created a website called "The Doubler"
// the website accepts a bunch of different inputs from our user
// we accept strings and numbers and booleans and objects and try to double them
// and expect output of the type


// typeof is a built in javascript tool that allows us to find the type of an object
	// for number, we have given an example of how that works

		// if type is number, log that number multiplied by 2
		// if type is string pass back that string twice
		// e.g. sending "someString" in, should log "someStringsomeString"
		// if the user inputs a boolean (true or false)
		// log "I won't double this" if it is false
		// log "Super-duper true" if it is true
		// if it's none of those, but it is an object, log "everything is an object"
    // if it is anything else, print out "I can't double this"

var theDoubler = prompt("Test The Doubler! Put something in here you would like to try, then check the console!");

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

console.log(theDoubler("hey"));
