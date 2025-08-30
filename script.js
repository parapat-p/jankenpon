function HelloWorld(){
    return "Hello world!"
}

function getComputerChoice(){
    let max_choices = 3;
    return Math.floor(Math.random() * max_choices);
}

function getHumanChoice(){
    let choice = prompt("Enter your choices");
    return choice;
}