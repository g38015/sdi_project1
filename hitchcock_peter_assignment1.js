// Peter Hitchcock
// SDI 1304
// April 8, 2013
// Project 1

// Start

// Initial Variables
var resortName = "Sierra";
var sierra = 'Sierra\'s runs are still epic!';
var snowInches = 10;
var newSnow = true;

// Initial Output 
console.log("We are going to ski at " + resortName + " if there is no snow.");
console.log("Regardless if it snows or not " + sierra);
console.log("It snowed over " + snowInches + " inches last night.");
console.log("It is " + newSnow + " there is new snow.");

// Conditionals
if (newSnow === true) {
        if (snowInches >= 10) {
                snowInches = snowInches + 5;
                console.log("Awesome! We received " + snowInches + " inches of new snow we are going to Kirkwood.");
        } else {
                console.log("We only got " + snowInches + " inches of  new snow, let's head to Sierra.");
        };
} else {
        if (resortName === "s") {
                console.log("No new snow time to hit up " + resortName + " for the day.");
        } else {
                console.log("It's all good " + sierra);
        };
};



