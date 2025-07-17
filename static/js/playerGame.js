function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const botChoice = choices[Math.floor(Math.random() * 3)];
  const resultDiv = document.getElementById("result");

  let result;
  if (userChoice === botChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === "rock" && botChoice === "scissors") ||
    (userChoice === "paper" && botChoice === "rock") ||
    (userChoice === "scissors" && botChoice === "paper")
  ) {
    result = `You win! Bot chose ${botChoice}.`;

    const playerID = String(Math.floor(Math.random() * 456 + 1)).padStart(3, "0");
    localStorage.setItem("role", "player");
    localStorage.setItem("playerID", playerID);

    setTimeout(() => window.location.href = "/success", 2000);
  } else {
    result = `You lose! Bot chose ${botChoice}. Try again.`;
  }

  resultDiv.textContent = result;
}
