'use strict';

let Secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let higherscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').innerHTML = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('🤬 Enter number only');

    // When player wins
  } else if (guess === Secretnumber) {
    displayMessage('🎉 Correct Number!');
    const num = (document.querySelector('.number').textContent = Secretnumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > higherscore) {
      higherscore = score;
      document.querySelector('.highscore').innerHTML = higherscore;
    }
    // When guess is wrong
  } else if (guess !== Secretnumber) {
    if (score > 1) {
      displayMessage(guess > Secretnumber ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').innerHTML = score;
    } else {
      displayMessage('❌ You Lost the game my friend!');
      document.querySelector('.score').innerHTML = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  Secretnumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').innerHTML = score;
  document.querySelector('.number').innerHTML = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '25rem';

  displayMessage('Start guessing...');

  document.querySelector('.guess').value = '';
});
