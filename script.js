function HelloWorld(){
    return "Hello world!"
}

// 0 = "Rock"
// 1 = "Paper"
// 2 = "Scissors"

const max_choices = 3;
const rounds = 5;

// This function will returned random choices between 0-2  Note: changes the max_choices var to change the return value.
function getComputerChoice(){
    let c_choice = Math.floor(Math.random() * max_choices);
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

// get human choice from prompt input
function getHumanChoice(){
    let choice = prompt("Enter your choices");
    choice = choice.toLowerCase();
    return choice;
}



function PlayGame(){
    let humanChoice = "";
    let computerChoice = "";
    let ComputerScore = 0;
    let HumanScore = 0;

    function PlayRound(humanChoice,computerChoice){
        if (humanChoice === computerChoice)     // Check if draw.
        {
            console.log(`Draw!! Both select ${humanChoice}`) ;
        }
        else if(( (humanChoice === "rock" ) && (computerChoice == "scissor") ) ||       // Human : Rock    VS Computer : Scissor
                ( (humanChoice === "paper" ) && (computerChoice == "rock") ) ||        // Human : Paper   VS Computer : Rock
                ( (humanChoice === "scissor" ) && (computerChoice == "paper") ) )      // Human : Scissor VS Computer : Paper
        {       
                HumanScore += 1;
                console.log(`You win nice choice!  ${humanChoice} beat ${computerChoice}`)
                
        }
        else{               // Other case computer wins.
            ComputerScore += 1
            console.log(`Bad choices!  ${computerChoice} beat ${humanChoice}`)
        }
        console.log(`Current Score $Your score ${HumanScore} || Computer score :${ComputerScore}`)
        return;
    }


    for(let round = 0;round<=rounds;round++){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        PlayRound(humanChoice,computerChoice);
    }
    
    if(HumanScore>ComputerScore){
        console.log(`You win! with score ${HumanScore} : ${ComputerScore}`);
    }
    else if(HumanScore<ComputerScore){
        console.log(`You lose! with score Your score ${HumanScore} || Computer score :${ComputerScore}`);
    }
    else{
        console.log(`Draw!! nice match btw.`)
    }
    return;
}