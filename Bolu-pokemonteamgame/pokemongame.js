var HP = 100;
var opponentHP = 100;
 var   inputA = 0;
  var  inputB = 0;
var opponentMoves = ["Ping Pong", "Yeezys", "Red Dress", "Flat Flop"];
var opponentEffect = ["The attack missed!", "The attack was very effective because unlike your pokemon, Infidel Castro has real sneakers.","It's not very effective!","It's super effective!"];
var yourName = prompt("Enter a pokemon name:");
var app = document.getElementById('app');


var typewriter = new Typewriter(app, {
    loop: false,
    typingSpeed: 50,
    deleteSpeed: 25
});

function opponentHealth() {
if (opponentHP <= 0) {
typewriter.pauseFor(800)
    .deleteAll()
    .typeString("Wild Infidel Castro fainted." + " " + yourName + " has gained 100 XP!")
    .pauseFor(800)
    .start();
}

else {}

}

function myHP() {
if (HP <= 0) {
    console.log(HP)
typewriter.pauseFor(800)
    .deleteAll()
    .typeString(yourName + " fainted. You lost, now go and join Ayinde on the bench.")
    .start();
}

else {}
}

myHP();
opponentHealth();

typewriter.typeString("Wild Infidel Castro appeared!")
    .pauseFor(800)
    .deleteAll()
    .typeString("Go!" + " " + yourName + "!")
    .start();


typewriter.pauseFor(800)
    .deleteAll()
    .typeString("What will" + " " + yourName + " do?")
    .start();


function movesOne(){
    inputA = 1;
    myHP();
opponentHealth();
    typewriter.deleteAll()
    .typeString(yourName + " used Fake Yeezys!")
    .pauseFor(800)
    .deleteAll()
    .typeString("It's not very effective!")
    .start();
    opponentHP = opponentHP - 5;

    function opponentAttack(){
        myHP();
opponentHealth();
        var randomItem = Math.floor(Math.random()*opponentMoves.length);
var opponentChoice = opponentMoves[randomItem];
var opponentMessage = opponentEffect[randomItem];
        typewriter.pauseFor(800)
        .deleteAll()
        .typeString("Wild Infidel Castro used " + opponentChoice + "!")
        .pauseFor(800)
        .deleteAll()
        .typeString(opponentMessage)
        .pauseFor(800)
        .deleteAll()
        .typeString("What will" + " " + yourName + " do?")
        .start();
    }
    opponentAttack();
}

function movesTwo(){
    myHP();
opponentHealth();
    typewriter.deleteAll()
    .typeString(yourName + " used Bars!")
    .pauseFor(800)
    .deleteAll()
    .typeString("The attack missed!")
    .start();
    

     function opponentAttack(){
         myHP();
opponentHealth();
         var randomItem = Math.floor(Math.random()*opponentMoves.length);
var opponentChoice = opponentMoves[randomItem];
var opponentMessage = opponentEffect[randomItem];
        typewriter.pauseFor(800)
        .deleteAll()
        .typeString("Wild Infidel Castro used " + opponentChoice + "!")
        .pauseFor(800)
        .deleteAll()
        .typeString(opponentMessage)
        .pauseFor(800)
        .deleteAll()
        .typeString("What will" + " " + yourName + " do?")
        .start();
    }
    opponentAttack();
}
function movesThree(){
    myHP();
opponentHealth();

    typewriter.deleteAll()
    .typeString(yourName + " used Splash!")
    .pauseFor(800)
    .deleteAll()
    .typeString("It's super effective!")
    .start();
    opponentHP = opponentHP - 100;
     function opponentAttack(){
         myHP();
opponentHealth();
         var randomItem = Math.floor(Math.random()*opponentMoves.length);
var opponentChoice = opponentMoves[randomItem];
var opponentMessage = opponentEffect[randomItem];
        typewriter.pauseFor(800)
        .deleteAll()
        .typeString("Wild Infidel Castro used " + opponentChoice + "!")
        .pauseFor(800)
        .deleteAll()
        .typeString(opponentMessage)
        .pauseFor(800)
        .deleteAll()
        .typeString("What will" + " " + yourName + " do?")
        .start();
    }
    opponentAttack();
}
function movesFour(){
    myHP();
opponentHealth();

    typewriter.deleteAll()
    .typeString(yourName + " used Protein Shake!")
    .pauseFor(800)
    .deleteAll()
    .typeString(yourName + "'s health was raised by 1 HP!")
    .start();
    if (HP == 100){
        HP = HP;
    }
    else {
        HP = 1 + HP;
    }
     function opponentAttack(){
         myHP();
opponentHealth();
         var randomItem = Math.floor(Math.random()*opponentMoves.length);
var opponentChoice = opponentMoves[randomItem];
var opponentMessage = opponentEffect[randomItem];
        typewriter.pauseFor(800)
        .deleteAll()
        .typeString("Wild Infidel Castro used " + opponentChoice + "!")
        .pauseFor(800)
        .deleteAll()
        .typeString(opponentMessage)
        .pauseFor(800)
        .deleteAll()
        .typeString("What will" + " " + yourName + " do?")
        .start();
    }
    opponentAttack();
}

setTimeout(function(){ 
    document.getElementById("1").style.visibility= "visible";
}, 7000);

setTimeout(function(){ 
    document.getElementById("2").style.visibility= "visible";

}, 7500);

setTimeout(function(){ 

    document.getElementById("3").style.visibility= "visible";

}, 8000);

setTimeout(function(){ 

    document.getElementById("4").style.visibility= "visible";
}, 8500);



function setup(){
    createCanvas(500,350);
    background(203, 242, 231);
    frameRate(40);
}
 
    
    
    var x = 161;
    var y = 277;
    var xSpeed = 20;
    var ySpeed = 20.8;
    var x2 =367;
    var y2= 73;
    var xSpeed2 = -20;
    var ySpeed2 = -20.8;
   

function draw(){
     
     function output2(){
         ellipse(x2,y2,20,20);
     }
   
   
    function action(){
    if( x >=85 && 520 >= x && y<=259 && y>=-50) {
    background(203, 242, 231);
    xSpeed=+xSpeed;
    ySpeed=+ySpeed;
    fill(215)
    quad(260,265,260,350,500,350,500,265);
    quad(0,90,240,90,240,1,0,0);
    quad(85,241,85,350,177,350,177,241);
    quad(300,0,300,110,392,110,392,0);}

  }
    function reverseAction(){
    if( x2 >=85 && 520 >= x2 && y2<=259 && y2>=-50) {
    background(203, 242, 231);
    xSpeed2=+xSpeed2 ;
    ySpeed2=+ySpeed2;
    fill(215)
    quad(260,265,260,350,500,350,500,265);
    quad(0,90,240,90,240,1,0,0);
    quad(85,241,85,350,177,350,177,241);
    quad(300,0,300,110,392,110,392,0);
    function output2(){
    }
}

} 
        

   
   
    
    x+=xSpeed;
    y-=ySpeed;
    x2+=xSpeed2;
    y2-=ySpeed2;
   
    function assignedState(){
        if(inputA==1 && inputB==1){
            action();
        }else{
            reverseAction();
        }
    }

    assignedState();
    
    fill(5);
    ellipse(x,y,20,20);
    ellipse(x2,y2,20,20);
    function test(){
        fill(0,255,255);
        ellipse (50,50,15,15);
    }
    test();
    
   
   

    
    if(mouseIsPressed === true){
        console.log(pmouseX)
        console.log(pmouseY);
             
            ellipse(pmouseX, pmouseY, 10, 10);

    }
    



}






