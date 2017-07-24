function setup(){
    createCanvas(1300,700);


}
var x = 60;
var y = 60;
var xSpeed = 2;
var ySpeed = 10;

function draw(){
background(255, 153, 204);
ellipse(x,y,60,60);

//X DIRECTION
if( x >= 1400-60) {
    xSpeed=-xSpeed;

 } else if (x<=0+900){
    xSpeed = xSpeed;
}
x+=xSpeed;//makes the ball move
}

