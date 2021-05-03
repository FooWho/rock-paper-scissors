function computerPlay() {
    let results = ["Rock", "Paper", "Scissors"];

    return results[Math.round(Math.random() * 2)];
}

function humanPlay() {
    let selection = "";

    while (!(selection === "ROCK" || selection === "PAPER" || selection === "SCISSORS")) {
        selection = prompt("Rock, paper, or scissors? ");
        selection = selection.toUpperCase();
    }
    return selection;   
}

function playRound(humanSelection, computerSelection) {
    switch (humanSelection) {
        case "ROCK" : 
        if (computerSelection === "Scissors") {
            return 1;
        } else if (computerSelection === "Paper") {
            return -1;
        } else {
            return 0;
        }
        break;
        case "PAPER" : 
        if (computerSelection === "Rock") {
            return 1;
        } else if (computerSelection === "Scissors") {
            return -1;
        } else {
            return 0;
        }
        break;
        case "SCISSORS" : 
        if (computerSelection === "Paper") {
            return 1;
        } else if (computerSelection === "Rock") {
            return -1;
        } else {
            return 0;
        }
        break;
    }

}

function game() {
    let lastResult;
    let gameResult = 0;
    for (let i = 0; i < 5; i++) {
        humanSelection = humanPlay();
        computerSelection = computerPlay();
        lastResult = playRound(humanSelection, computerSelection);
        gameResult += lastResult;
        lastResult > 0 ? console.log("You win!") : lastResult < 0 ? console.log("You lost!") : console.log("It was a tie!");
    }
    console.log(`Final result is a score of: ${gameResult}`);
}

game();