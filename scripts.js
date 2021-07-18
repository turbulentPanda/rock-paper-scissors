let userWins = 0;
let computerWins = 0;

function updateScore(userScore, computerScore) {
    if (userScore > computerScore) {
        userWins++;
    } else if (userScore < computerScore) {
        computerWins++;
    }
}

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
    displayRoundResults(roundResult, userSelection, computerSelection);
    return roundResult;
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

function displayRoundResults(roundResult, userSelection, computerSelection) {
    if (roundResult === 'win') {
        console.log(displayWinningMessage(userSelection, computerSelection));
        return 'win';
    } else if (roundResult === 'lose') {
        console.log(displayLosingMessage(userSelection, computerSelection));
        return 'lose';
    } else {
        console.log(displayDrawMessage());
        return 'draw';
    }
}

function displayWinningMessage(userSelection, computerSelection) {
    return `You win! ${userSelection[0].toUpperCase()}${userSelection.substring(1)} beats ${computerSelection}!`;
}

function displayLosingMessage(userSelection, computerSelection) {
    return `You lose! ${computerSelection[0].toUpperCase()}${computerSelection.substring(1)} beats ${userSelection}!`
}

function displayDrawMessage() {
    return "It's a draw!";
}

function getRandomInteger(maximum) {
    return Math.floor(Math.random() * maximum)
}

