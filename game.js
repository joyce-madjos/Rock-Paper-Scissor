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