const readlineSync = require("readline-sync");

function getInput(prompt) {
  return readlineSync.question(`${prompt}: `);
}

function playGame() {
  function referree() {
    let choices = ["Rock", "Paper", "Scissors"];
    let userChoice = getInput("Rock , Paper, Scissors");
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    switch (userChoice + computerChoice) {
      case "RockScissors":
      case "PaperRock":
      case "ScissorsPaper":
        console.log(
          `You chose ${userChoice}, Computer chose ${computerChoice}. You win`
        );
        break;
      case "ScissorsRock":
      case "RockPaper":
      case "PaperScissors":
        console.log(
          `You chose ${userChoice}, Computer chose ${computerChoice}. Computer wins`
        );
        break;
      case "RockRock":
      case "ScissorsScissors":
      case "PaperPaper":
        console.log(
          `You chose ${userChoice}, Computer chose ${computerChoice}. Tie Game`
        );
        break;
    }
  }

  referree();

  function resetChoices() {
    userChoice = "";
    computerChoice = "";
  }

  resetChoices();
}

playGame();
