

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





function getRandomInteger(maximum) {
    return Math.floor(Math.random() * maximum)
}

