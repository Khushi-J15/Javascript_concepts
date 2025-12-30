let playGame = confirm("Shall we play Rock, Paper, Scissors ?");

if (playGame) {
  //Play
  let playerChoice = prompt("Please enter rock, paper, or scissors. ");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {

      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer = computerChoice === 1 ? "rock"
        : computerChoice === 2 ? "paper"
          : "scissors";

      let result = playerOne === computer ? "Tie"
        : playerOne === "rock" && computer === "paper" ?
          `playerOne: ${playerOne}\n Computer: ${computer}\n Computer Wins` :
          playerOne === "paper" && computer === "scissors" ?
            `playerOne: ${playerOne}\n Computer: ${computer}\n Computer Wins` :
            playerOne === "scissors" && computer === "rock" ?
              `playerOne: ${playerOne}\n Computer: ${computer}\n Computer Wins` : `playerOne: ${playerOne}\n Computer: ${computer}\n PlayerOne Wins`;
      alert(result);
    } else {
      alert("You didn't choose any");
    }
  } else {
    alert("You changed your mind");
  }
} else {
  alert("Next time");
}