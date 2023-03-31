// The Rock Paper Scissor Game
const prompt = require('prompt-sync')();

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

 function game(sum_Player, sum_Computer){

	for (let i = 0; i < 5; i++) {

		let {score_P, score_C, result} = thePlay(getPlayerChoice(), getComputerChoice());

		console.log(" Round " + i + "\n Computer " + score_C + "\n Player " + score_P + "\n Result " + result);
		
		sum_Player += score_P;
		sum_Computer += score_C;	
	}

	return {
			player: sum_Player,
			computer: sum_Computer,
		}
}

let sum_P = 0;
let sum_C = 0;
let {player, computer} = game(sum_P, sum_C);
console.log("The final score : " +  "\nComputer :" + computer + "\nPlayer :" + player);

if (player > computer){
   console.log("Congratulations! You Won");
}
else if (player == computer){
   console.log("It's a draw");
}
else{
   console.log("You lose!");
}

