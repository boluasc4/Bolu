var prompt = require('prompt-sync')();
//
// get input from the user.
//
var n = prompt('How many more times? ');

var wallet = 1200;
var store = ["sword","food"];
var prices = [500,100];
var inventory = [];

while(wallet>0){
    var purchaseChoice = prompt("What're you buyin");
    if (purchaseChoice == store[0] && wallet >= prices[0]){
        wallet = wallet - prices[0];
        inventory.push("sword");
    }
    else if(purchaseChoice == store[1] && wallet >= prices[1]){
        wallet = wallet - prices[1];
        inventory.push("food");
    }
    else if (purchaseChoice == "quit"){
        wallet = 0;
    }
    else{
        console.log("Game Over scrub");
    }
    console.log(inventory);
};

