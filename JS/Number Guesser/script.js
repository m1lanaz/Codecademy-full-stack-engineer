let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = Math.floor(Math.random() * 10);


const compareGuesses = (human, computer, target) => {
    if (human === computer) {
        return true;
    } else if (human === target) {
        return true;
    } else if (computer === target) {
        return false;
    } else if ((Math.abs(human - target)) > (Math.abs(computer - target))) {
        return false
    } else if ((Math.abs(human - target)) < (Math.abs(computer -target))) {
        return true;
    }
};


