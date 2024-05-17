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
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        alert("A TIE!!")
        currentScore();
    }
    
    else if (humanChoice === 1 && computerChoice === 2 || humanChoice === 2 && computerChoice === 3 ||
        humanChoice === 3 && computerChoice ===1) {
        alert("COMPUTER WINS !!")
        computerScore+=1;
        currentScore();
    }

    else{
        alert("HUMAN WINS !!")
        humanScore+=1;
        currentScore();
    }

}

function currentScore(){
    console.log("---------------------------------------------------");
    console.log("Current Score: " + "Human: " + humanScore + " / " + "Computer: " + computerScore);
    console.log("---------------------------------------------------") ;
}
function playGame(){
    for (let i = 0; i <= 5; i++) {
        playRound();  
    }
    winner();
}
function winner(){
    if (humanScore > computerScore) {
        alert("Human Wins!!")
        console.log("Human Wins!!")
    }
    else if (humanScore < computerScore){
        alert("Computer Wins")
        console.log("Computer Wins!!")
    }
    else{
        alert("IT'S A TIE!!")
        console.log("IT'S A TIE!!!!")
    }
}
