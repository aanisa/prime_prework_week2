// We've created a website called "The Doubler"
// the website accepts a bunch of different inputs from our user
// we accept strings and numbers and booleans and objects and try to double them
// and expect output of the type

theDoubler(prompt("Test theDoubler! Put something in here you would like to try, then check the console!"));

function theDoubler(someInput) {
	// typeof is a built in javascript tool that allows us to find the type of an object
    // for number, we have given an example of how that works

 if (typeof someInput == "number") {
			result ("number" * 2);
			// if type is number, log that number multiplied by 2
	}
 if (typeof someInput =="string") {
			result ("string" + "string");
}
	// if type is string pass back that string twice
	// e.g. sending "someString" in, should log "someStringsomeString"

if (typeof someInput == "boolean") {
	if (true) {
		console.log("I won't double this");
	} else {
		console.log("super-duper true");
	}
}
	// if the user inputs a boolean (true or false)
	// log "I won't double this" if it is false
	// log "Super-duper true" if it is true

if (typeof someInput == "object"){
	console.log("everything is an object");
}
	// if it's none of those, but it is an object, log "everything is an object"

else {
	console.log("I can't double this");
}
	// if it is anything else, print out "I can't double this"

}
