// 0 = "Rock"
// 1 = "Paper"
// 2 = "Scissors"
var max_choices = 3;
var rounds = 5;
// This function will returned random choices between 0-2  Note: changes the max_choices var to change the return value.
function getComputerChoice() {
    var c_choice = Math.floor(Math.random() * max_choices);
    if (c_choice === 0) {
        return "rock";
    }
    else if (c_choice === 1) {
        return "paper";
    }
    else {
        return "scissor";
    }
}
var gameSection = document.querySelector(".RPS");
if (gameSection) {
    var userInput_1 = "";
    function createBtn(nameBtn) {
        var button = document.createElement("button");
        button.textContent = nameBtn;
        button.addEventListener("click", function () {
            userInput_1 = nameBtn;
        });
        return button;
    }
    gameSection.appendChild(createBtn("Scissor"));
    gameSection.appendChild(createBtn("Rock"));
    gameSection.appendChild(createBtn("Paper"));
}
