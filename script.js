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

console.log(getComputerChoice());

function getHumanChoice() {
  let humanChoice = prompt("Choose among rock, paper or scissors");
  return humanChoice;
}
console.log(getHumanChoice());
