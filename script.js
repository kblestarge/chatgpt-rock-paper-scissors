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

document.getElementById("rock").addEventListener("click", function () {
  let result = playRound("rock", computerPlay());
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

document.getElementById("paper").addEventListener("click", function () {
  let result = playRound("paper", computerPlay());
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

document.getElementById("scissors").addEventListener("click", function () {
  let result = playRound("scissors", computerPlay());
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
