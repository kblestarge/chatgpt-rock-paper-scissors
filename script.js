function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      return "Tie!";
    } else if (computerSelection === "paper") {
      return "You lose! Paper beats Rock";
    } else {
      return "You win! Rock beats Scissors";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "You win! Paper beats Rock";
    } else if (computerSelection === "paper") {
      return "Tie!";
    } else {
      return "You lose! Scissors beats Paper";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You lose! Rock beats Scissors";
    } else if (computerSelection === "paper") {
      return "You win! Scissors beats Paper";
    } else {
      return "Tie!";
    }
  }
}

function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

let playerScore = 0;
let computerScore = 0;

const rockNoise = document.getElementById("rock-noise");
document.getElementById("rock").addEventListener("click", function () {
  let result = playRound("rock", computerPlay());
  rockNoise.currentTime = 0; // reset audio to start
  rockNoise.play();
  if (result.startsWith("You win")) {
    playerScore++;
  } else if (result.startsWith("You lose")) {
    computerScore++;
  }
  document.getElementById("player-score").textContent =
    "Player: " + playerScore;
  document.getElementById("computer-score").textContent =
    "Computer: " + computerScore;
  document.getElementById("result").textContent = result;
});

const paperNoise = document.getElementById("paper-noise");
document.getElementById("paper").addEventListener("click", function () {
  let result = playRound("paper", computerPlay());
  paperNoise.currentTime = 0; // reset audio to start
  paperNoise.play();
  if (result.startsWith("You win")) {
    playerScore++;
  } else if (result.startsWith("You lose")) {
    computerScore++;
  }
  document.getElementById("player-score").textContent =
    "Player: " + playerScore;
  document.getElementById("computer-score").textContent =
    "Computer: " + computerScore;
  document.getElementById("result").textContent = result;
});

const scissorsNoise = document.getElementById("scissors-noise");
document.getElementById("scissors").addEventListener("click", function () {
  let result = playRound("scissors", computerPlay());
  scissorsNoise.currentTime = 0; // reset audio to start
  scissorsNoise.play();
  if (result.startsWith("You win")) {
    playerScore++;
  } else if (result.startsWith("You lose")) {
    computerScore++;
  }
  document.getElementById("player-score").textContent =
    "Player: " + playerScore;
  document.getElementById("computer-score").textContent =
    "Computer: " + computerScore;
  document.getElementById("result").textContent = result;
});
