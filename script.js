let humanScore = 0;
let computerScore = 0;
let btn = document.querySelector("#container");
btn.addEventListener("click", (e) => {
  let humanSelection = e.target.textContent;
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});

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
  console.log(winningMessage);
  let consoleMsg = `Player Score: ${humanScore} and Computer Score: ${computerScore}`;
  console.log(consoleMsg);
  return winningMessage;
}

function playGame() {
  if (humanScore > computerScore) {
    let winner = `You had ${humanScore} and computer had ${computerScore}. Congratulations! You won`;
    console.log(winner);
    return winner;
  } else if (computerScore > humanScore) {
    let winner = `You had ${humanScore} and computer had ${computerScore}. Sorry! You lost`;
    console.log(winner);
    return winner;
  } else {
    let winner = `You had ${humanScore} and computer had ${computerScore}. It's a tie! Let's go again`;
    console.log(winner);
    return winner;
  }
}
