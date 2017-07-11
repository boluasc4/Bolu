//set this to whatever choice you'd like
var playerChoices = 'r';

//computer's random choice
var choices = ['r','p','s'];
var compChoice = choices[Math.floor(Math.random()*3)];
if (playerChoices == 'r' && compChoice == 's'){
    console.log ("Player wins");
}
if (playerChoices == compChoice ){
    console.log ("It's a tie!");
}
if (playerChoices == 'r' && compChoice == 'p'){
    console.log ("Computer wins");
};