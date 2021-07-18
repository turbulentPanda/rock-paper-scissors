let userWins = 0;
let computerWins = 0;

let playerScore = document.querySelector('.player-score > span');
let computerScore = document.querySelector('.computer-score > span');

playerScore.textContent = `${userWins}`;
computerScore.textContent = `${computerWins}`;

const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => playOneRound('rock'));

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => playOneRound('paper'));

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => playOneRound('scissors'));

function compareScores(userScore, computerScore) {
    if (userScore > computerScore) {
        console.log("Congratulations! You won the whole thing!");
    } else if (userScore < computerScore) {
        console.log("Sorry! You lost the whole thing!");
    } else {
        console.log("Not the worst! You and the computer tied!");
    }
}

function playOneRound(userMove) {
    let computerSelection = computerPlay();
    let userSelection = userMove;
    let roundResult;

    if (userSelection === 'rock') {
        if (computerSelection === 'scissors') {
            roundResult = 'win';
        } else if (computerSelection === 'paper') {
            roundResult = 'lose';
        } else {
            roundResult = 'draw';
        }
    } else if (userSelection === 'paper') {
        if (computerSelection === 'rock') {
            roundResult = 'win';
        } else if (computerSelection === 'scissors') {
            roundResult = 'lose';
        } else {
            roundResult = 'draw';
        }
    } else if (userSelection === 'scissors') {
        if (computerSelection === 'paper') {
            roundResult = 'win';
        } else if (computerSelection === 'rock') {
            roundResult = 'lose';
        } else {
            roundResult = 'draw';
        }
    }
    displayRoundResults(roundResult);
    updateMoveHistory(userSelection, computerSelection);
    updateScore(roundResult);
    return roundResult;
}

function updateScore(roundResult) {
    if (roundResult === 'win') {
        userWins++;
        playerScore.textContent = `${userWins}`;
    } else if (roundResult === 'lose') {
        computerWins++;
        computerScore.textContent = `${computerWins}`;
    }
}

function checkIfGameEnded(userScore, computerScore) {
    if (userScore === 5 || computerScore === 5) {
        return true;
    } else {
        return false;
    }
}

function updateMoveHistory(userSelection, computerSelection) {
    const playerMoveset = document.querySelector('.player-moveset');
    let playerMove = document.createElement('li');
    playerMove.textContent = `${userSelection[0].toUpperCase()}${userSelection.substring(1)}`;
    playerMoveset.appendChild(playerMove);

    const computerMoveset = document.querySelector('.computer-moveset');
    let computerMove = document.createElement('li');
    computerMove.textContent = `${computerSelection[0].toUpperCase()}${computerSelection.substring(1)}`;
    computerMoveset.appendChild(computerMove);
}

function computerPlay() {
    let randomNumber = getRandomInteger(3);
    switch (randomNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function displayRoundResults(roundResult) {
    let headerMessage = document.querySelector('.header > h2');
    if (roundResult === 'win') {
        headerMessage.textContent = `${displayWinningMessage()}`;
        return 'win';
    } else if (roundResult === 'lose') {
        headerMessage.textContent = `${displayLosingMessage()}`;
        return 'lose';
    } else {
        headerMessage.textContent = `${displayDrawMessage()}`;
        return 'draw';
    }
}


function displayWinningMessage() {
    return "Yay! You won this round!";
}

function displayLosingMessage() {
    return "Sorry! You lost this round!"
}
function displayDrawMessage() {
    return "This round was a draw!"
}

function getRandomInteger(maximum) {
    return Math.floor(Math.random() * maximum)
}