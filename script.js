'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const reset = function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // WHEN THERS IS NO INPUT
  if (!guess) {
    document.querySelector('.message').textContent = '❌ No number!';
  }

  //   WHEN NUMBER IS TOO HIGH
  else if (guess > number) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over!!';
    }
  }

  //   WHEN NUMBER IS TOO LOW
  else if (guess < number) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over!!';
    }
  }

  //   WHEN CORRECT
  else {
    document.querySelector('.number').textContent = number;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent =
      '  You guessed correctly🥳🥳';
    document.querySelector('body').style.backgroundColor = 'green';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

// WHEN AGAIN IS CLICKED

document.querySelector('.again').addEventListener('click', reset);

document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    reset();
  }
});


