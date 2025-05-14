'use strict';

// console.log(document.querySelector('.message').textContent); //this is a method and you need to pass thru a selector
// console.log will make the css file (knows its css bcos of class selector)
// so .message means it gets the message class
// we get the html line that this class is associated to, to appear in the console

//selector is the same as the css  - for classes its a . for id you use #
// live servers to show you the demo

//.textContent will only collect the text of that element

// DOM - Document Object Model
//Structured Represneation of HTML Documents, allows JS to access & manipulate them

//DOM Tree - its a tree representation from the parent element and how to acccess them
//Starts with Document - then html element then 2 children body & head elements

// NOTE DOM is NOT PART OF JS
// DOM is part of Web API (Application Programming Interface) - they are libraries that are automatically avaiallable

// document.querySelector('.message').textContent = 'Correct Number';
// //this changes the textContent of a different DOM node

// document.querySelector('.number').textContent = 13; //it changes the textContent
// document.querySelector('.score').textContent = 23;

// document.querySelector('.guess').value = 23; //inputs you have to change the value
// console.log(document.querySelector('.guess').value);

//-----------------------------------------------------------------------------------------------------------------

//event listeners are something that happens on the page - eg mouse click, mouse move etc - then we react to it
//interested in the click

let secretNumber = Math.trunc(Math.random() * 20) + 1; //math is a library that gives you a value between 0 & 1
//math.random gives u a number between 0 & 1 (exclusive) so then we multiply by 20 so that we get a range of 0 to 20 (exclusive)
//.trunc removes decimals and rounds the value down so you need to + 1 so you have a range

let score = 20; // set to let so we can change & its easier to store a variable
let highscore = 0;

//if you repeated a line of lines of code alot you can make a function for that line and call it eg look below & at the other *
const displayMessage = function (message) {
  // **
  document.querySelector('.message').textContent = message;
};

//always better to make a variable to store our code rather than relying on the DOM
// else we would rely on the DOM to reduce the score
//score is known as a state variable bcos it effects the applications state

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  document.querySelector('.number').textContent = secretNumber; //DELETE LATER

  //now we can create some game logic

  //first lets check if there is a value

  //if NO Guess
  if (!guess) {
    displayMessage('No Input, Try Again!'); //      **
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Answer !';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //Manipulating the CSS STYLES with DOM Manipulation
    //going to change the body colour
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem'; //this is to change the div element with the class of .number
    // YOU MUST ASSIGN IT A STRING

    //so it selects the body element - you access the css style called backgroundColor (in css is background-color but camel case in CSS) then you equate it to the colour you want it to be

    //Guess too high
    // } else if (guess > secretNumber) {
    //   if (score > 0) {
    //     document.querySelector('.message').textContent = 'Too High';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // } else if (guess < secretNumber) {
    //   if (score > 0) {
    //     document.querySelector('.message').textContent = 'Too Low';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High' : 'Too Low'; //this says if the guess is bigger then secretNumber then (?) = to Too high else = to Too Low
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
// Correctly closing all if-else blocks

//sdssd
//

//this returns an element so you then will addEventListener to it
//must pass in the type of the eventListener & the function value

//if u get something from user interface(input field)  its becomes a STRING  hence we used Number function

//DOM Manipulation you can change styles too

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').textContent = '';
});

//REFACTORING TO GET RID OF THE CODE
// WE REPEATED CODE WHEN GUESS IS TOO HIGH & LOW
//DONT REPEAT YOURSELF - WHEN WE WANT TO CHANGE FUNCTIONALITY THEN WE HAVE TO DO IT BOTH SIDES
