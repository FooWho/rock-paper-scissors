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
            return "You win! Rock beats Scissors.";
        } else if (computerSelection === "Paper") {
            return "You loose! Paper beats Rock.";
        } else {
            return "You tie! You both selected Rock."
        }
        break;
        case "PAPER" : 
        if (computerSelection === "Rock") {
            return "You win! Paper beats Rock.";
        } else if (computerSelection === "Scissors") {
            return "You loose! Scissors beats Paper.";
        } else {
            return "You tie! You both selected Paper."
        }
        break;
        case "SCISSORS" : 
        if (computerSelection === "Paper") {
            return "You win! Scissors beats Paper.";
        } else if (computerSelection === "Rock") {
            return "You loose! Rock beats Scissors";
        } else {
            return "You tie! You both selected Scissors."
        }
        break;
    }

}

for (let i = 0; i < 5; i++) {
    humanSelection = humanPlay();
    computerSelection = computerPlay();

    alert(playRound(humanSelection, computerSelection));
}