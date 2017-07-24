//function welloHorld(){
  //   console.log("Wello Horld!");
  //  return "Wello Horld!";
//}
//welloHorld();

//Math.random(8008)

function rand(num){
 //this function returns a number between 0 and num
var randNum = Math.random()*num;
var result = Math.floor(randNum);
return result
}

rand(14); //any number can replace 14


function rand(num){
    return Math.floor(Math.random()*num);
}
rand(95);
//this is an easier way to do the above function



function rand(num){
    return Math.floor(Math.random()*num);
}
console.log(rand(95));


var students = ["Bolu","Ricky","Josh","Sami","Jonathan"]

console.log(students[rand(5)]);
