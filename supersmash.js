var prompt = require('prompt-sync')();
//
// get input from the user.
//
var n = prompt('How many more times? ');

var mashArray = ["Final Destination", "San Andreas","Xbox", "Johto"];
var firstQuestion = [5,10];
var secondQuestion = ["Goku","Mewtwo"];

for(var i = 0; i < 2, i++)(
    firstQuestion.push(prompt("How many times will you strike?"));
    secondQuestion.push(prompt("Who will you choose to fight?")); 
)

console.log("you fought!" + secondQuestion[2]
                                                     + "in the" 
                                                     + mashArray[Math.floor(Math.random()*3)])
                                                     + "and hit" 
                                                     + secondQuestion[Math.floor(Math.random()*1)]
                                                     + firstQuestion[2] + "times");