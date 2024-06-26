let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;



function checkGuess() {
    const userGuess = document.getElementById('guess').value;
    const message = document.getElementById('message');
     //attempts++;

    if (userGuess == randomNumber) {
         message.textContent = `Congratulations! .`;
        message.style.color = 'green';
    } else if (userGuess > randomNumber) {
        message.textContent = 'Too high! Try again.';
         message.style.color = 'red';
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
         message.style.color = 'red';
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    document.getElementById('guess').value = '';
    document.getElementById('message').textContent = '';
}