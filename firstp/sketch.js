/*
function setup(){
    createCanvas(500, 500);
    background(225);
}


function mouseDragged(){
    //noStroke();
    //fill(Math.floor(random() * 256), Math.floor(random() * 256),
    //Math.floor(random() * 256));
    fill(125); 
    ellipse(mouseX, mouseY, 16, 16);
}

/*function mousePressed(){
    clear();
}

*/

function setup(){
    createCanvas(1300,900);
    background(100);
    ellipse(100,150,100)

}

var x = 0
function draw(){
       ellipse(x, 200, 16, 16);
       x++
}