//select the classes we require
export var cube_2 = document.querySelector('.cube_2');
export var rollBtn_2 = document.querySelector('.rollBtn_2');
export var currentClass2 = '';
export var dataXucXac_2 = 0;
//this function will generate a random number between 1 and 6 (or whatever value you send it)
export function getRandomInt2(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//our main roll dice function on click
export function rollDice2() {
//genberate a random number between 1 and 6 with out getRandomInt function
 var randNum2 =getRandomInt2(1,7); 
  // console.log(randNum2 );
  // console.log(dataXucXac_2);
  //generate a class with the random number between 1 - 6 called showClass
  var showClass2 = 'show-' + randNum2;
  // console.log(showClass2)
// if there is a class already selected remove it
  if ( currentClass2 ) {
    cube_2.classList.remove( currentClass2 );
  }
// add the new showclass with the generated number
  cube_2.classList.add( showClass2 );
//set the current class to the randomly generated number
  currentClass2 = showClass2;
  return randNum2;
}
// set initial side
rollDice2();
// on click eventlistener for the button element
// rollBtn.addEventListener("click", setInterval(rollDice, 500));
export function xoxucxac_2(){
  var myVar2 = setInterval(rollDice2, 35);
  setTimeout(() => { clearInterval(myVar2), dataXucXac_2 = rollDice2()}, 25000);
  console.log('data 2  = ' + dataXucXac_2);;
}

