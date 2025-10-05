let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    computerChoice = "rock";
  } else if (computerChoice === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Choose among rock, paper or scissors");
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase().trim();
  computerChoice = computerChoice.toLowerCase().trim();
  let winningMessage;
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    winningMessage = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else if (humanChoice === computerChoice) {
    winningMessage = `Oops! ${humanChoice} draws ${computerChoice}`;
  } else {
    winningMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  }
  return winningMessage;
}
