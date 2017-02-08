
console.log('Script sourced!');

var animal = prompt("Of what animal am I thinking?");

  var animalGuess = function (animalName) {
    if (animalName === "turtle") {
    console.log("How did you know?");
  }
  else {
    console.log("Try again.");
}
};

animalGuess(animal);

console.log(animal);
