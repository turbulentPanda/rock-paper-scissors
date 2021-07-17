

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



function getRandomInteger(maximum) {
    return Math.floor(Math.random() * maximum)
}

