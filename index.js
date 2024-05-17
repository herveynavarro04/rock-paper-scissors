function getComputerChoice(){
     let computerChoice = Math.random() * (3 - 1) + 1;
     return computerChoice = Math.round(computerChoice);
}

function getHumanChoice(){
    let humChoice = prompt("WRITE DOWN ROCK, PAPER OR SCISSORS TO PLAY!")
    if (humChoice.toLowerCase() === "rock"){return 1;}
    else if (humChoice.toLowerCase() === "paper"){return 2;}
    else if (humChoice.toLowerCase() === "scissors"){return 3;}

    else{
        alert("Wrong answer, try again");
        getHumanChoice();
    }
}
let humanScore = 0;
let computerScore = 0;
function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        alert("A TIE!!")
        console.log("Current Score: " + "Human: " + humanScore + " / " + "Computer: " + computerScore);
    }
    
    else if (humanChoice === 1 && computerChoice === 2 || humanChoice === 2 && computerChoice === 3 ||
        humanChoice === 3 && computerChoice ===1) {
        alert("COMPUTER WINS !!")
        computerScore+=1;
        console.log("---------------------------------------------------")
        console.log("Current Score: " + "Human: " + humanScore + " / " + "Computer: " + computerScore);
        console.log("---------------------------------------------------")
    }
    
    else{
        alert("HUMAN WINS !!")
        humanScore+=1;
        console.log("---------------------------------------------------")
        console.log("Current Score: " + "Human: " + humanScore + " / " + "Computer: " + computerScore);
        console.log("---------------------------------------------------") 
    }

}


