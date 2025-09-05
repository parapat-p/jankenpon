// 0 = "Rock"
// 1 = "Paper"
// 2 = "Scissors"
const max_choices:number = 3;
const totalRound = 5;

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
            return `Draw!! Both select ${playerInput}`
        }
        else if(( (playerInput === "Rock" ) && (computerInput == "Scissor") ) ||       // Human : Rock    VS Computer : Scissor
                ( (playerInput === "Paper" ) && (computerInput == "Rock") ) ||        // Human : Paper   VS Computer : Rock
                ( (playerInput === "Scissor" ) && (computerInput == "Paper") ) )      // Human : Scissor VS Computer : Paper
        {       
                playerScore += 1;
                // console.log(`You win nice choice!  ${playerInput} beat ${computerInput}`)
                return `You win nice choice!  ${playerInput} beat ${computerInput}`
        }
        else{               // Other case computer wins.
            computerScore += 1
            // console.log(`Bad choices!  ${computerInput} beat ${playerInput}`)
            return `Bad choices!  ${computerInput} beat ${playerInput}`
        }
        // console.log(`Current Score $Your score ${playerScore} || Computer score :${computerScore}`)

}

const gameSection = document.querySelector(".RPS");
const scoreBoard = document.createElement("p");
const gameLog = document.createElement('div');
const logLinks = document.createElement('ul');
const delBtn = document.createElement('button');
delBtn.textContent = "Delete logs / Restart"
delBtn.addEventListener("click",() => {
    logLinks.replaceChildren();
    playerScore = 0;
    computerScore = 0;
    updateScore();
})

function updateScore(){
    scoreBoard.textContent = `Player : ${playerScore} ||  ${computerScore} : Computer`;
}

function createBtn(nameBtn:string){
    let button = document.createElement("button");
    button.textContent = nameBtn;
    button.addEventListener("click",() => {
        addLog(playRound(button.textContent,getComputerChoice()));
        updateScore();
    })
    return button;
}

function addLog(log:string){
    let log_item = document.createElement("li");
    log_item.textContent = log;
    logLinks.appendChild(log_item);
}



function instantiateGame(){
    if(gameSection){
        gameSection.appendChild(createBtn("Scissor"));
        gameSection.appendChild(createBtn("Rock"));
        gameSection.appendChild(createBtn("Paper"));
        updateScore();
        gameSection.appendChild(scoreBoard);
        gameSection.appendChild(delBtn);
        gameSection.appendChild(logLinks);
    }

}

function main(){
    instantiateGame();
}

main()


