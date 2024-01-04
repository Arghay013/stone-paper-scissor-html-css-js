let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScoreDisplay = document.getElementById("user-score");
const compScoreDisplay = document.getElementById("comp-score");
const msg = document.querySelector("#msg");

const getComputerChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const index = Math.floor(Math.random() * 3);
  return options[index];
};

const updateScore = () => {
    userScoreDisplay.innerText = userScore;
    compScoreDisplay.innerText = compScore;
};

const drawGame = () => {
  msg.innerText = "Game was drawn!!!";
//   console.log("Game was drawn");
};

const showWinner = (userWin) => {
  if (userWin) {
    msg.innerText = "you win!";
    userScore++;
  } else {
    msg.innerText = "Computer wins!";
    compScore++;
  }
  updateScore();
};

const playGame = (userChoice) => {
//   console.log(userChoice);
  const compChoice = getComputerChoice();
//   console.log(compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choiceId = choice.getAttribute("id");
    // console.log("Clicked", choiceId);
    playGame(choiceId);
  });
});
