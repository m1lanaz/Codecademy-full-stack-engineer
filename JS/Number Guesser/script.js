let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

 const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (human, computer, target) => {
    if ((Math.abs(human - target)) > (Math.abs(computer - target))) {
        return false
    } else if ((Math.abs(human - target)) < (Math.abs(computer -target))) {
        return true;
    };
};

const updateScore = winner => {
    if (winner === 'human') {
        humanScore ++ ;
    } else if (winner === 'computer') {
        computerScore ++;
    };
};

const advanceRound = () => {
    currentRoundNumber ++;
};


