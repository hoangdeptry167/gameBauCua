//select the classes we require
export var cube_3 = document.querySelector('.cube_3');
export var rollBtn_3 = document.querySelector('.rollBtn_3');
export var currentClass3 = '';
export var dataXucXac_3 = 0;
//this function will generate a random number between 1 and 6 (or whatever value you send it)
export function getRandomInt3(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//our main roll dice function on click
export function rollDice_3() {
  //genberate a random number between 1 and 6 with out getRandomInt function
  var randNum3 = getRandomInt3(1, 7);
  // console.log(randNum3 )
  //generate a class with the random number between 1 - 6 called showClass
  var showClass3 = 'show-' + randNum3;
  // console.log(showClass3)
  // if there is a class already selected remove it
  if (currentClass3) {
    cube_3.classList.remove(currentClass3);
  }
  // add the new showclass with the generated number
  cube_3.classList.add(showClass3);
  //set the current class to the randomly generated number
  currentClass3 = showClass3;
  return randNum3;
}
// set initial side
rollDice_3();
// on click eventlistener for the button element
// rollBtn.addEventListener("click", setInterval(rollDice, 500));
export function xoxucxac_3(){
  var myVar_3 = setInterval(rollDice_3, 35);
  setTimeout(() => { clearInterval(myVar_3),dataXucXac_3 = rollDice_3()}, 26000);
  console.log('data 3  = ' + dataXucXac_3);
  }