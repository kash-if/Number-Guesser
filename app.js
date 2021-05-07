/*
GAME FUNCTION :-
  - Player must guess a number between min and max
  - Player gets a certain amount of guesses
  - Notify player of number of guesses remaining
  - Notify the player of the correct answer if loose
  - Let the player to choose again
*/

//

// UI variables
let minNumber = 1,
    maxNumber = 10,
    correctNumber = 4,
    guessCount = 3;

// UI elements
const game = document.querySelector('#game');

const guessInput = document.querySelector('#guess-input');
const minNum = document.querySelector('#min-num');
const maxNum = document.querySelector('#max-num');
const guessBtn = document.querySelector('#guess-btn');
const message = document.querySelector('.message');

// Assigning values to HTML Element dynamically
minNum.textContent = minNumber;
maxNum.textContent = maxNumber;

// Event Listener
guessBtn.addEventListener('click', function() {
  // console.log(guessInput.value);
  // console.log(parseInt(guessInput.value));
  // Convert string into integer format
  let guessValue = parseInt(guessInput.value);

  // Check whether the number falls with in constraint
  if (isNaN(guessValue) || guessValue < minNumber || guessValue > maxNumber){
    setMessage(`Please enter number between ${minNumber} and ${maxNumber}`, 'red');
  }

  // Check if the guess number is correct
  if (guessValue === correctNumber) {
    // Game Over - Win

    // Disable the input
    guessInput.disabled = true;
    // HighLight the box border with green color
    guessInput.style.borderColor = 'green';
    // Show message that guess number is correct
    setMessage(`${guessValue} is correct answer, YOU WIN !!!`, 'green');
  }
  else {
    // HighLight the box border with red color
    guessInput.style.borderColor = 'red';
    guessCount -= 1;
    if (guessCount < 1) {
      // Game over - Lose
      // Disable the input
      guessInput.disabled = true;
      // Show message that guess number is incorrect and no more guesses left
      setMessage(`GAME OVER !!!, you lost. Correct answer was ${correctNumber}`, 'red');

    }
    else {
      // Game continues - guesses left

      // Clear the input
      guessInput.value = '';

      // Show message that guess number is incorrect
      setMessage(`${guessValue} is not correct answer, you have ${guessCount} guesses left`, 'red');
    }

  }
});

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}
