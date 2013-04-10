// Peter Hitchcock
// SDI 1304
// April 8, 2013
// Project 1

// Start

// Initial Variables
var resort_name = "Sierra";
var sierra = 'Sierra\'s runs are still epic!';
var snow_inches = 10;
var new_snow = true;

// Initial Output 
console.log("We are going to ski at " + resort_name + " if there is no snow.");
console.log("Regardless if it snows or not " + sierra);
console.log("It snowed " + snow_inches + " inches last night");
console.log("It is " + new_snow + " there is new snow");

// Conditionals
if (new_snow === true) {
        if (snow_inches >= 10) {
                snow_inches = snow_inches + 5;
                console.log("Awesome! We received " + snow_inches + " inches of new snow, Kirkwood it is.");
        } else {
                console.log("We only got " + snow_inches + " inches of  new snow, let's head to Sierra.");
        };
} else {
        if (resort_name === "s") {
                console.log("No new snow time to hit up " + resort_name + " for the day.");
        } else {
                console.log("It's all good " + sierra);
        };
};



