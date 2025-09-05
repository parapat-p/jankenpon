// 0 = "Rock"
// 1 = "Paper"
// 2 = "Scissors"
const max_choices:number = 3;
const rounds:number = 5;

let playerScore:number = 0;
let computerScore:number = 0;

// This function will returned random choices between 0-2  Note: changes the max_choices var to change the return value.
function getComputerChoice(){
    let c_choice:number = Math.floor(Math.random() * max_choices);
    if (c_choice === 0){
        return "Rock";
    }
    else if (c_choice === 1){
        return "Paper";
    }
    else{
        return "Scissor";
    }
}

function playRound(playerInput:string,computerInput:string){
    if (playerInput === computerInput)     // Check if draw.
        {
            // console.log(`Draw!! Both select ${playerInput}`) ;
        }
        else if(( (playerInput === "rock" ) && (computerInput == "scissor") ) ||       // Human : Rock    VS Computer : Scissor
                ( (playerInput === "paper" ) && (computerInput == "rock") ) ||        // Human : Paper   VS Computer : Rock
                ( (playerInput === "scissor" ) && (computerInput == "paper") ) )      // Human : Scissor VS Computer : Paper
        {       
                playerScore += 1;
                // console.log(`You win nice choice!  ${playerInput} beat ${computerInput}`)
                
        }
        else{               // Other case computer wins.
            computerScore += 1
            // console.log(`Bad choices!  ${computerInput} beat ${playerInput}`)
        }
        // console.log(`Current Score $Your score ${playerScore} || Computer score :${computerScore}`)
        return;
}

const gameSection = document.querySelector(".RPS");
const scoreBoard = document.createElement("p");


function updateScore(){
    scoreBoard.textContent = `Player : ${playerScore} ||  ${computerScore} : Computer`;
}

function createBtn(nameBtn:string){
    let button = document.createElement("button");
    button.textContent = nameBtn;
    button.addEventListener("click",() => {
        playRound(button.textContent,getComputerChoice());
    })
    return button;
}


function instantiateGame(){
    if(gameSection){
        gameSection.appendChild(createBtn("Scissor"));
        gameSection.appendChild(createBtn("Rock"));
        gameSection.appendChild(createBtn("Paper"));
        updateScore();
        gameSection.appendChild(scoreBoard);
    }

}

function main(){
    instantiateGame();

}

main()


