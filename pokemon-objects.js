function pokemonteam (name,type,hp,def,atk,legend){
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.def = def;
    this.atk = atk;
    this.legend = legend;

}

var pikachu = new pokemonteam ("Pikachu","Electric",50,25,35,false);
var bulbasaur = new pokemonteam ("Bulbasaur","Grass",70,65,40,false);
var skeptile = new pokemonteam ("Skeptile","Grass",80,75,65,false);
var mewtwo = new pokemonteam ("Mewtwo","Psychic",120,666,88,true);
var gyrados = new pokemonteam ("Gryados","Water/Flying",100,98,67,false);
var dragonite = new pokemonteam ("Dragonite","Dragon/flying",200,200,200,false);

function printRoster(){
    for(var i=0;i<0;i++) console.log("good hit")
}

