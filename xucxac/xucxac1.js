//select the classes we require
console.log('hello world');
export var cube = document.querySelector('.cube');
export var rollBtn = document.querySelector('.rollBtn');
export var currentClass = '';
export var dataXucXac_1 = 0;
//this function will generate a random number between 1 and 6 (or whatever value you send it)
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//our main roll dice function on click
export function rollDice() {
//genberate a random number between 1 and 6 with out getRandomInt function
 var randNum =getRandomInt(1,7); 
  // console.log(randNum )
  //generate a class with the random number between 1 - 6 called showClass
  var showClass = 'show-' + randNum;
  // console.log(showClass)
// if there is a class already selected remove it
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
// add the new showclass with the generated number
  cube.classList.add( showClass );
//set the current class to the randomly generated number
  currentClass = showClass;
  return randNum;
}
// set initial side
rollDice();
// on click eventlistener for the button element
// rollBtn.addEventListener("click", setInterval(rollDice, 500));
export function xoxucxac_1(){
var myVar = setInterval(rollDice, 35);
setTimeout(() => { clearInterval(myVar),dataXucXac_1 = rollDice(),document.getElementById('quanlynutTien').style.pointerEvents = 'none';}, 24000);

console.log('data 1  = ' + dataXucXac_1);
}

