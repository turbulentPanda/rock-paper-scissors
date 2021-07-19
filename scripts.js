let userWins = 0;
let computerWins = 0;
let numberOfRounds = 0;

let playerScore = document.querySelector('.player-score span');
let computerScore = document.querySelector('.computer-score  span');

playerScore.textContent = `${userWins}`;
computerScore.textContent = `${computerWins}`;

const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => playOneRound('rock'));

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => playOneRound('paper'));

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => playOneRound('scissors'));

const playerMoveset = document.querySelector('.player-moveset');
const computerMoveset = document.querySelector('.computer-moveset');


function compareScores(userScore, computerScore) {
    let headerMessage = document.querySelector('.outcome-message');
    if (userScore > computerScore) {
        headerMessage.textContent = "Congratulations! You won the whole thing! Let's play again!";
    } else if (userScore < computerScore) {
        headerMessage.textContent = "Sorry! You lost the whole thing! Let's try again!";
    } else {
        headerMessage.textContent = "Not the worst! You and the computer tied! Let's play again!";
    }
}

function playOneRound(userMove) {
    let computerSelection = computerPlay();
    let userSelection = userMove;
    let roundResult;
    displayMoveImage(userSelection, computerSelection);

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
    updateScore(roundResult);
    ++numberOfRounds;
    if (checkIfGameEnded(userWins, computerWins)) {
        compareScores(userWins, computerWins);
        reset();
    }
    return roundResult;
}

function displayMoveImage(userSelection, computerSelection) {
    let playerMoveImage = document.querySelector('.player-move-image');
    playerMoveImage.setAttribute('src', `images/${userSelection}.svg`);
    let playerScore = document.querySelector('.player-score');
    playerScore.appendChild(playerMoveImage);

    let computerMoveImage = document.querySelector('.computer-move-image');
    computerMoveImage.setAttribute('src', `images/${computerSelection}.svg`);
    let computerScore = document.querySelector('.computer-score');
    computerScore.appendChild(computerMoveImage);
}

function reset() {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    userWins = 0;
    computerWins = 0;
    numberOfRounds = 0;
    removeListItems();
    let playerMoveImage = document.querySelector('.player-move-image');
    playerMoveImage.setAttribute('src', 'images/panda-icon.png');
    let computerMoveImage = document.querySelector('.computer-move-image');
    computerMoveImage.setAttribute('src', 'images/ghost-icon.png');
}

function removeListItems() {
    let playerMoveset = document.querySelector(".player-moveset");
    let computerMoveset = document.querySelector(".computer-moveset");
    let computerMoves = document.querySelectorAll(".player-moveset > li");
    computerMoves = Array.from(computerMoves);
    let numberOfMoves = computerMoves.length;
    for (let i = 0; i < numberOfMoves; i++) {
        let playerMove = document.querySelector(".player-moveset > li");
        let computerMove = document.querySelector(".computer-moveset > li")
        playerMoveset.removeChild(playerMove);
        computerMoveset.removeChild(computerMove);
    }
}

function updateScore(roundResult) {
    if (roundResult === 'win') {
        userWins++;
        playerScore.textContent = `${userWins}`;
    } else if (roundResult === 'lose') {
        computerWins++;
        computerScore.textContent = `${computerWins}`;
    }
    return [userWins, computerWins];
}

function checkIfGameEnded(userWins, computerWins) {
    if (userWins === 5 || computerWins === 5) {
        return true;
    } else {
        return false;
    }
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
    let headerMessage = document.querySelector('.outcome-message');
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