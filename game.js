// The Rock Paper Scissor Game

function getComputerChoice() {
  let moves = ["rock", "scissor", "paper"];
  let randomChoice = Math.floor(Math.random() * 3);
  return moves[randomChoice];
}


// Image
let rockImage = document.getElementById("rockP");
let paperImage = document.getElementById("paperP");
let scissorImage = document.getElementById("scissorP");

// Checkboxes
let rockCheckBox = document.getElementById("rockPlayer");
let paperCheckBox = document.getElementById("paperPlayer");
let scissorCheckBox = document.getElementById("scissorPlayer");


rockCheckBox.addEventListener("click", function() {
   theClicks(rockCheckBox, rockImage);
});

paperCheckBox.addEventListener("click", function() {
   theClicks(paperCheckBox, paperImage);
});

scissorCheckBox.addEventListener("click",  function() {
   theClicks(scissorCheckBox, scissorImage);
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
