let playGame = confirm("Shall we play rock, paper, or scissors?");

if (playGame) {
  let playerChoice = prompt("Please enter rock, paper, or scissors");

  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    console.log("Player choice: " + playerOne);

    if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1 ? "rock" :
        computerChoice === 2 ? "paper" : "scissors";

      console.log("Computer choice: " + computer);

      // Determine result
      let result =
        computer === playerOne
          ? "Tie Game!"
          : playerOne === "rock" && computer === "paper"
          ? "Computer wins!"
          : playerOne === "paper" && computer === "scissors"
          ? "Computer wins!"
          : playerOne === "scissors" && computer === "rock"
          ? "Computer wins!"
          : "Player wins!";
      alert(result);
      console.log(result);
    } else {
      console.log("You didn't enter rock, paper, or scissors.");
    }
  } else {
    console.log("I guess you changed your mind. Maybe next time!");
  }
} else {
  console.log("Okay, maybe next time.");
}
