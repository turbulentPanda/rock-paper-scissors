let userWins = 0;
let computerWins = 0;

function updateScore(userScore, computerScore) {
    if (userScore > computerScore) {
        userWins++;
    } else if (userScore < computerScore) {
        computerWins++;
    }
}

// function playGame() {
//     let roundResult;
//     for (let i = 0; i < 5; i++) {
//         roundResult = playOneRound();
//         if (roundResult === 'win') {
//             userWins++;
//         } else if (roundResult === 'lose') {
//             computerWins++;
//         }
//     }
//     compareScores(userWins, computerWins);
// }

// playGame();

function compareScores(userScore, computerScore) {
    if (userScore > computerScore) {
        console.log(`Congratulations! You win! You won ${userScore} round(s). The computer only won ${computerScore} round(s).`);
    } else if (userScore < computerScore) {
        console.log(`Sorry. You lost! The computer won ${computerScore} round(s) but you only won ${userScore} round(s).`);
    } else {
        console.log(`It's a draw! You and the computer both won ${userScore} round(s)!`);
    }
}

function playOneRound() {
    let computerSelection = computerPlay();
    let userSelection = userPlay();
    let gameResult;

    if (userSelection === 'rock') {
        if (computerSelection === 'scissors') {
            gameResult = 'win';
        } else if (computerSelection === 'paper') {
            gameResult = 'lose';
        } else {
            gameResult = 'draw';
        }
    } else if (userSelection === 'paper') {
        if (computerSelection === 'rock') {
            gameResult = 'win';
        } else if (computerSelection === 'scissors') {
            gameResult = 'lose';
        } else {
            gameResult = 'draw';
        }
    } else if (userSelection === 'scissors') {
        if (computerSelection === 'paper') {
            gameResult = 'win';
        } else if (computerSelection === 'rock') {
            gameResult = 'lose';
        } else {
            gameResult = 'draw';
        }
    }
    displayRoundResults(gameResult, userSelection, computerSelection);
    return gameResult;
}

function displayRoundResults(gameResult, userSelection, computerSelection) {
    if (gameResult === 'win') {
        console.log(displayWinningMessage(userSelection, computerSelection));
        return 'win';
    } else if (gameResult === 'lose') {
        console.log(displayLosingMessage(userSelection, computerSelection));
        return 'lose';
    } else {
        console.log(displayDrawMessage());
        return 'draw';
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

function userPlay() {
    let userSelection;
    while (true) {
        userSelection = prompt("Enter rock, paper, or scissors.").toLowerCase()
        if (userSelection === "rock" || userSelection === "paper" || userSelection === "scissors") {
            break;
        } else {
            continue;
        }
    }
    return userSelection;
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

