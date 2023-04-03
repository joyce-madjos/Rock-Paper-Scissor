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
let rockCheckBox = document.getElementById("rockPlayer");
let paperCheckBox = document.getElementById("paperPlayer");
let scissorCheckBox = document.getElementById("scissorPlayer");

// Placeholder for Result
let textResultPlayer = document.getElementById("playerChoice");
let textResultComputer = document.getElementById("computerChoice");

// Result Image

function displayResult() {
  let img = document.createElement("img");
  img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
  let imageResult = document.getElementsByClassName("resultImage");
  imageResult.style.display = "block";
  imageResult.appendChild(img);
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
}

// Computer's choice



rockCheckBox.addEventListener("click", function() {
   theClicks(rockCheckBox, rockImage);
   textResultPlayer.innerHTML = "ROCK";
   getComputerChoice();
   displayResult()
  //  paperCheckBox.disabled = true;
  //  scissorCheckBox.disabled = true;
});

paperCheckBox.addEventListener("click", function() {
   theClicks(paperCheckBox, paperImage);
   textResultPlayer.innerHTML = "PAPER";
   getComputerChoice();
});

scissorCheckBox.addEventListener("click",  function() {
   theClicks(scissorCheckBox, scissorImage);
   textResultPlayer.innerHTML = "SCISSOR";
   getComputerChoice();
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
