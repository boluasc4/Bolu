var Hp= 100;
var gold=0;
var numberDefeated=0;

function updateStats() {
    $('#stats').text("HP: " + Hp + "Gold: " +gold + "Dead: " + numberDefeated)
};

function spawnOgre() {
    $('#ogres').prepend("<img src='https://vignette2.wikia.nocookie.net/villains/images/c/c5/Ogre.png/revision/latest?cb=20100701182712'>")
}
function attack(){
    if(Hp > 0){//if player still alive
            if(Math.random()*100 > gold){
                //the attack hit
                gold = gold + 10;
                numberDefeated++;
                $("ogres").prepend("<p style='color:blue'>You won! + 10 gold.</p>");
            }
            else{
                //the attack missed 
                gold--;
                Hp--;
                 $("ogres").prepend("<p style='color:red'>You lost! - 1 gold.</p>");
            }
    }
    else{
        //game over
        $('#ogres').prepend("<h1>GAME OVER</h1>");
    }
    updateStats();
    spawnOgre();
}
function setup() {


//title
$("body").append( 
    "<h1> Welcome to Ogre Town!!!!</h1>"
);

//adds "stats" section whic will be updated later
$("body").append(
    "<div> <h3> STATS </h3> <p id ='stats'></p><div>"
);

//add an attack button
$("body").append(

    "<button onClick='attack()'> Attack the Ogre! </button>"
)

//container for ogre pics
$("body").append(
    "<div id = 'ogres'></div>"
)
updateStats();
};


$(document).ready(setup);

