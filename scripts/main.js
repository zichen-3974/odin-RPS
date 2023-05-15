function getComputerChoice() {
    let computerChoice = Math.ceil(Math.random() * 3);
    switch (computerChoice) {
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
    }
}

function playGame(playerChoice) {
    let computerChoice = getComputerChoice();
    let result = playerChoice == computerChoice;
    if (result == 1) {
        document.getElementById("result").innerHTML = "Boo. I picked the same. DRAW."
    } else {
        switch (playerChoice) {
            case "rock": //player picks rock
            result = computerChoice == "scissors";
            break;

            case "paper": //player picks paper
            result = computerChoice == "rock";
            break;

            case "scissors": //player picks scissors
            result = computerChoice == "paper";
            break;
        }
        if (result == 1) {
            document.getElementById("result").innerHTML = "Hmmph I picked " + computerChoice + ". You won this one.";
        } else {
            document.getElementById("result").innerHTML = "Muahaha I picked " + computerChoice + ". You lostttt~";
        }
    }
}