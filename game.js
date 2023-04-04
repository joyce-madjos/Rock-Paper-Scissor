// The Rock Paper Scissor Game

// Player Image
let rockImage = document.getElementById("rockP");
let paperImage = document.getElementById("paperP");
let scissorImage = document.getElementById("scissorP");

// Computer Image
let computerRockImage = document.getElementById("rockC");
let computerPaperImage = document.getElementById("paperC");
let computerScissorImage = document.getElementById("scissorC");

// Checkboxes
var rockCheckBox = document.getElementById("rockPlayer");
var paperCheckBox = document.getElementById("paperPlayer");
var scissorCheckBox = document.getElementById("scissorPlayer");

// Placeholder for Result
let textResultPlayer = document.getElementById("playerChoice");
let textResultComputer = document.getElementById("computerChoice");

// Result Image
var image = document.createElement("img");
var imageResult = document.getElementById("resultImage");

function displayResult(result) {

  if (result == "win"){
    image.src = "images/winner.gif";
  }
  else if (result == "lose"){
    image.src = "images/lose.gif";
  }
  else{
    image.src = "images/draw.gif";
  }
  imageResult.style.display = "block";
  // image.style.width =  "150px";
  // image.style.margin =  "0";
  // image.style.height =  "150px";
  image.alt = "result of the game";
  imageResult.appendChild(image);
}

function undoDisplayResult(){
  imageResult.style.display = "none";
}

function getComputerChoice() {
  let moves = ["rock", "scissor", "paper"];
  let randomChoice = Math.floor(Math.random() * 3);
  let computerChoice = moves[randomChoice];

  if(computerChoice === "rock"){
    computerRockImage.style.backgroundColor = "wheat";
    textResultComputer.innerHTML = "ROCK";
  }
  else if(computerChoice === "paper"){
    computerPaperImage.style.backgroundColor = "wheat";
    textResultComputer.innerHTML = "PAPER";
  }
  else if(computerChoice === "scissor"){
    computerScissorImage.style.backgroundColor = "wheat";
    textResultComputer.innerHTML = "SCISSOR";
  }

  return computerChoice;
}

function undoComputerChoice(){
  let images = document.getElementsByClassName("computerImage");
  for (let i = 0; i < images.length; i++) {
    images[i].style.backgroundColor = "white";
  }
  textResultComputer.innerHTML = " ";
  textResultPlayer.innerHTML = " ";
}

function theGame (playerSelection, computerSelection) {
 
  if (playerSelection === "rock" && computerSelection === "paper") {
      displayResult("lose");

  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    displayResult("lose");

  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    displayResult("lose");

  } else if (playerSelection === computerSelection) {
      displayResult("draw");

  } else {
    displayResult("win");

  }

  
};

function removeZigzag(verdict){

  let zigzag = document.getElementById("player");

  if (verdict == "yes"){
    zigzag.classList.remove("zigzag");
  }
  else if (verdict == "no"){
    zigzag.classList.add("zigzag");
  }
    
}

rockCheckBox.addEventListener("click", () => {

  if (rockCheckBox.checked == true) {
    // change the background color to emphasize the player's choice
    rockImage.style.backgroundColor = "red";
    // disable other options
    paperCheckBox.disabled = true;
    scissorCheckBox.disabled = true;
    // display computer's choice
    let computerChoice = getComputerChoice();
    theGame("rock", computerChoice);
    textResultPlayer.innerHTML = "ROCK";
    removeZigzag("yes");
    
 } else {
    rockImage.style.backgroundColor = "white";
    scissorCheckBox.disabled = false;
    paperCheckBox.disabled = false;
    undoComputerChoice();
    undoDisplayResult();
    removeZigzag("no");
 }
  
});

paperCheckBox.addEventListener("click",  () =>  {
   
   if (paperCheckBox.checked == true) {
    // change the background color to emphasize the player's choice
    paperImage.style.backgroundColor = "red";
    // disable other options
    rockCheckBox.disabled = true;
    scissorCheckBox.disabled = true;
    // display computer's choice
    let computerChoice = getComputerChoice();
    theGame("paper", computerChoice);
    textResultPlayer.innerHTML = "PAPER";
    removeZigzag("yes");
 } else {
    paperImage.style.backgroundColor = "white";
    scissorCheckBox.disabled = false;
    rockCheckBox.disabled = false;
    undoComputerChoice();
    undoDisplayResult();
    removeZigzag("no");
 }

});

scissorCheckBox.addEventListener("click",  () => {
   
  if (scissorCheckBox.checked == true) {
    // change the background color to emphasize the player's choice
    scissorImage.style.backgroundColor = "red";
    // disable other options
    paperCheckBox.disabled = true;
    rockCheckBox.disabled = true;
    // display computer's choice
    let computerChoice = getComputerChoice();
    theGame("scissor", computerChoice);
    textResultPlayer.innerHTML = "SCISSOR";
    removeZigzag("yes");
 } else {
    scissorImage.style.backgroundColor = "white";
    paperCheckBox.disabled = false;
    rockCheckBox.disabled = false;
    undoComputerChoice();
    undoDisplayResult();
    removeZigzag("no");
 }
 
});


// console.log(
//   "The final score : " + "\nComputer :" + computer + "\nPlayer :" + player
// );

// if (player > computer) {
//   console.log("Congratulations! You Won");
// } else if (player == computer) {
//   console.log("It's a draw");
// } else {
//   console.log("You lose!");
// }
