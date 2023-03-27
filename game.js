// The Rock Paper Scissor Game

function getComputerChoice() {
    let moves = ["rock", "scissor", "paper"];
    let randomChoice = Math.floor(Math.random() * 3);
    return moves[randomChoice];
 }

 function getPlayerChoice() {
    let playerChoice = prompt("You choice?");
    let lowerCaseString = playerChoice.toLowerCase();
    return lowerCaseString;
 }

 let thePlay = (playerSelection, computerSelection) => {
	
    let playerScore = 0;
    let computerScore = 0;
 
    if (playerSelection === "rock" && computerSelection === "paper") {
       computerScore += 1;
       return {
         score_P: playerScore,
         score_C: computerScore,
         result: "You Lose",
     }
    } 
    else if (playerSelection === "scissor" && computerSelection === "rock") {
        computerScore += 1;
        return {
         score_P: playerScore,
         score_C: computerScore,
         result: "You Lose",
     }
    } 
    else if ( playerSelection === "paper" && computerSelection === "scissor") {
        computerScore += 1;
        return {
         score_P: playerScore,
         score_C: computerScore,
         result: "You Lose",
     }
    } 
    else if (playerSelection === computerSelection) {
     return {
         score_P: playerScore,
         score_C: computerScore,
         result: "Draw",
     }
    } 
    else {
       playerScore += 1;
       return {
         score_P: playerScore,
         score_C: computerScore,
         result: "You win",
     }
    }
 }