var sentence = "I dont give a flip about you Drinking till I feel like I been swimming in the sea of love Pretty women in the club creeping up I dont feel like Ive been going deep enough One more shot Love is hard to find One more shot Love is hard to find";
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var arrSent = sentence.split("");
var arrAlph =  alphabet.split("");
var userInput = "";
var count = 0;
var points = 0;
var x = 50;
var i = 0;
function setup(){
  createCanvas(1400,800);
}
function draw(){
  background(50);
  fill(255);
  text("Please type the sentence below", x, 50);
  text(sentence, x, 100);
  text("Current Points ", 50, 200);
  text(points, 135, 200);
}


function keyTyped(){
    switch(key){
        case arrSent[i]:
          points++;
          userInput+=arrSent[i];
          console.log("Hit");
          x--;
          i++;
    }
}

function keyalphTyped(){
    switch(key){
        case arrAlph[i]:
          points++;
          userInput+=arrAlph[i];
          console.log("Hit");
          x++;
          i++;
    }
}




