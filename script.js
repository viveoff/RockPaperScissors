const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const displayResult = document.getElementById('result')


rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));


function playRound(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random()*choices.length)];

    if (playerChoice === computerChoice) {
        displayResult.textContent = "It's a draw."
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        displayResult.textContent = 'You win!';
    } else {
        displayResult.textContent = 'Computer wins! You lost!';
    }
}
