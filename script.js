let humanScore = 0;
let computerScore = 0;
let container = document.querySelector("#container");
let div = document.createElement("div");
let winningMessage;

container.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    let humanSelection = e.target.textContent;
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
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
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
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
  div.innerHTML = winningMessage + "<br>" + consoleMsg + "<br>";
  container.appendChild(div);
  announceWinner();
  return winningMessage;
}

function announceWinner() {
  if (humanScore === 5) {
    let winner = `You had ${humanScore} and computer had ${computerScore}. Congratulations! You won`;
    div.innerHTML = winningMessage + "<br>" + winner;
    console.log(winner);
    computerScore = humanScore = 0;
    return winner;
  } else if (computerScore === 5) {
    let winner = `You had ${humanScore} and computer had ${computerScore}. Sorry! You lost`;
    div.innerHTML = winningMessage + "<br>" + winner;
    computerScore = humanScore = 0;
    console.log(winner);
    return winner;
  }
}
