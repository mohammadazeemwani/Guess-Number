'use strict';

const hiddenNum = document.querySelector('.number');
let randomNum = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = randomNum;

// Storing the score state & higscore state
// use let not const because we have to change them later
let score = 20;
let highScore = 0;


const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  // resetting score and secretNumber/randomNum variables
  randomNum = Math.trunc(Math.random() * 20) + 1;
  score = 20; //setting score value = 20

  // setting back initial conditions of the message, number, score and guess input field
  displayMessage('Start guessing...');
  hiddenNum.textContent = '?';
  document.querySelector('.score').textContent = score; //displaying score value = 20
  document.querySelector('.guess').value = '';

  //setting width and background of body as normal
  hiddenNum.style.width = '43px';
  document.querySelector('body').style.backgroundColor = '#222';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number');
  } else if (guess === randomNum) {
    hiddenNum.textContent = randomNum;
    document.querySelector('body').style.backgroundColor = '#776617';
    hiddenNum.style.width = '43px';

    displayMessage('🎉 Correct guess');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== randomNum) {
    if (score >= 2) {
      displayMessage(guess > randomNum ? '📈 High' : '📉  Low');

      score--;
    } else {
      score = 0;

      displayMessage('😱 You Lost the game');
    }

    document.querySelector('.score').textContent = score;
  }

  //   else if (guess > randomNum) {

  //     if (score >= 2) {
  //         //condition specific
  //          document.querySelector(".message").textContent = '📈 Too high'

  //          //general wrong
  //          score--;
  //     } else {
  //         score = 0;

  //         displayMessage(); '😱 You Lost the game'
  //     }

  //     document.querySelector('.score').textContent = score;

  //   }

  //   else if (guess < randomNum) {

  //     if (score >= 2) {
  //         //condition specific
  //         document.querySelector(".message").textContent = '📉 Too low'

  //         //general wrong
  //         score--;
  //     } else {
  //         score = 0;

  //         displayMessage(); '😱 You Lost the game'
  //     }

  //     document.querySelector('.score').textContent = score;

  //   }
});



document.getElementById('submitButton').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Focus on another element to keep the keypad open
  document.getElementById('anotherElement').focus(); // Replace 'anotherElement' with the ID of another element
});
