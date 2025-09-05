// 0 = "Rock"
// 1 = "Paper"
// 2 = "Scissors"
var max_choices = 3;
var rounds = 5;
var playerScore = 0;
var computerScore = 0;
// This function will returned random choices between 0-2  Note: changes the max_choices var to change the return value.
function getComputerChoice() {
    var c_choice = Math.floor(Math.random() * max_choices);
    if (c_choice === 0) {
        return "Rock";
    }
    else if (c_choice === 1) {
        return "Paper";
    }
    else {
        return "Scissor";
    }
}
function playRound(playerInput, computerInput) {
    if (playerInput === computerInput) // Check if draw.
     {
        // console.log(`Draw!! Both select ${playerInput}`) ;
    }
    else if (((playerInput === "rock") && (computerInput == "scissor")) || // Human : Rock    VS Computer : Scissor
        ((playerInput === "paper") && (computerInput == "rock")) || // Human : Paper   VS Computer : Rock
        ((playerInput === "scissor") && (computerInput == "paper"))) // Human : Scissor VS Computer : Paper
     {
        playerScore += 1;
        // console.log(`You win nice choice!  ${playerInput} beat ${computerInput}`)
    }
    else { // Other case computer wins.
        computerScore += 1;
        // console.log(`Bad choices!  ${computerInput} beat ${playerInput}`)
    }
    // console.log(`Current Score $Your score ${playerScore} || Computer score :${computerScore}`)
    return;
}
var gameSection = document.querySelector(".RPS");
var scoreBoard = document.createElement("p");
function updateScore() {
    scoreBoard.textContent = "Player : ".concat(playerScore, " ||  ").concat(computerScore, " : Computer");
}
function createBtn(nameBtn) {
    var button = document.createElement("button");
    button.textContent = nameBtn;
    button.addEventListener("click", function () {
        playRound(button.textContent, getComputerChoice());
    });
    return button;
}
function instantiateGame() {
    if (gameSection) {
        gameSection.appendChild(createBtn("Scissor"));
        gameSection.appendChild(createBtn("Rock"));
        gameSection.appendChild(createBtn("Paper"));
        updateScore();
        gameSection.appendChild(scoreBoard);
    }
}
function main() {
    instantiateGame();
}
main();
