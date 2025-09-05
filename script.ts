// 0 = "Rock"
// 1 = "Paper"
// 2 = "Scissors"
const max_choices:number = 3;
const rounds:number = 5;

// This function will returned random choices between 0-2  Note: changes the max_choices var to change the return value.
function getComputerChoice(){
    let c_choice:number = Math.floor(Math.random() * max_choices);
    if (c_choice === 0){
        return "rock";
    }
    else if (c_choice === 1){
        return "paper";
    }
    else{
        return "scissor";
    }
}



const gameSection = document.querySelector(".RPS");

if(gameSection){
    
    let userInput:string = "";
    function createBtn(nameBtn:string){
    let button = document.createElement("button");
    button.textContent = nameBtn;
    button.addEventListener("click",() => {
        userInput = nameBtn;
    })

    return button; 
    }

    gameSection.appendChild(createBtn("Scissor"));
    gameSection.appendChild(createBtn("Rock"));
    gameSection.appendChild(createBtn("Paper"));
}



