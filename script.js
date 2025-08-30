function HelloWorld(){
    return "Hello world!"
}

// 0 = "Rock"
// 1 = "Paper"
// 2 = "Scissors"


// This function will returned random choices between 0-2  Note: changes the max_choices var to change the return value.
function getComputerChoice(){
    let max_choices = 3;
    return Math.floor(Math.random() * max_choices);
}

// get human choice from prompt input
function getHumanChoice(){
    let choice = prompt("Enter your choices");
    choice = choice.toLowerCase();
    if(choice==="rock"){
        return 0;
    }
    else if(choice==="paper"){
        return 1;
    }
    else{
        return 2;
    }
}

let ComputerScore = 0;
let HumanScore = 0;

function PlayRound(humanChoice,computerChoice){

    if (humanChoice === computerChoice)     // Check if draw.
    {
        return;
    }
    else if(( (humanChoice === 0 ) && (computerChoice == 2) ) ||        // Human : Rock    VS Computer : Scissor
            ( (humanChoice === 1 ) && (computerChoice == 0) ) ||        // Human : Paper   VS Computer : Rock
            ( (humanChoice === 2 ) && (computerChoice == 1) ) ) {       // Human : Scissor VS Computer : Paper
            HumanScore += 1;
    }
    else{               // Other case computer wins.
        ComputerScore += 1
    }
}

