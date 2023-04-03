// The Rock Paper Scissor Game

function getComputerChoice() {
  let moves = ["rock", "scissor", "paper"];
  let randomChoice = Math.floor(Math.random() * 3);
  return moves[randomChoice];
}


// Player Image
let rockImage = document.getElementById("rockP");
let paperImage = document.getElementById("paperP");
let scissorImage = document.getElementById("scissorP");

// Computer Image
let computerRockImage = document.getElementById("rockC");
let computerPaperImage = document.getElementById("paperC");
let computerScissorImage = document.getElementById("scissorC");

// Checkboxes
let rockCheckBox = document.getElementById("rockPlayer");
let paperCheckBox = document.getElementById("paperPlayer");
let scissorCheckBox = document.getElementById("scissorPlayer");

// Placeholder for Result
let textResultPlayer = document.getElementById("playerChoice");
let textResultComputer = document.getElementById("computerChoice");

// Computer's choice
let computerChoice = getComputerChoice();

if(computerChoice === "rock"){
  computerRockImage.style.backgroundColor = "blue";
  textResultComputer.innerHTML = "ROCK";
}
else if(computerChoice === "paper"){
  computerPaperImage.style.backgroundColor = "blue";
  textResultComputer.innerHTML = "PAPER";
}
else if(computerChoice === "scissor"){
  computerScissorImage.style.backgroundColor = "blue";
  textResultComputer.innerHTML = "SCISSOR";
}


rockCheckBox.addEventListener("click", function() {
   theClicks(rockCheckBox, rockImage);
   textResultPlayer.innerHTML = "ROCK";
  //  paperCheckBox.disabled = true;
  //  scissorCheckBox.disabled = true;
});

paperCheckBox.addEventListener("click", function() {
   theClicks(paperCheckBox, paperImage);
   textResultPlayer.innerHTML = "PAPER";
});

scissorCheckBox.addEventListener("click",  function() {
   theClicks(scissorCheckBox, scissorImage);
   textResultPlayer.innerHTML = "SCISSOR";
});

function theClicks(checkBoxChoice, imageChoice) {
   if (checkBoxChoice.checked == true) {
      imageChoice.style.backgroundColor = "red";
     var playerChoice = "scissor";
   } else {
      imageChoice.style.backgroundColor = "white";

   }
 }

let thePlay = (playerSelection, computerSelection) => {
 
  if (playerSelection === "rock" && computerSelection === "paper") {
      return "You Lose" ;

  } else if (playerSelection === "scissor" && computerSelection === "rock") {
      return "You Lose" ;

  } else if (playerSelection === "paper" && computerSelection === "scissor") {
      return "You Lose" ;

  } else if (playerSelection === computerSelection) {
      return "Draw" ;

  } else {
      return "You win" ;

  }
};


console.log(
  "The final score : " + "\nComputer :" + computer + "\nPlayer :" + player
);

if (player > computer) {
  console.log("Congratulations! You Won");
} else if (player == computer) {
  console.log("It's a draw");
} else {
  console.log("You lose!");
}
