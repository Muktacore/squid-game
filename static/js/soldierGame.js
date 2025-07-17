let score = 0;

function spawnTarget() {
  const gameArea = document.getElementById("game-area");
  const scoreDisplay = document.getElementById("score");

  const target = document.createElement("div");
  target.classList.add("target");

  // Set initial position
  target.style.top = `${Math.random() * 240}px`;
  target.style.left = `${Math.random() * 240}px`;

  // When target is clicked
  target.onclick = () => {
    score++;
    scoreDisplay.textContent = score;
    target.remove();

    if (score >= 1) {
      const soldierID = String(Math.floor(Math.random() * 500 + 1)).padStart(3, "0");
      localStorage.setItem("role", "soldier");
      localStorage.setItem("soldierID", soldierID);
      setTimeout(() => window.location.href = "/success", 500);
    } else {
      spawnTarget();
    }
  };

  gameArea.innerHTML = ""; // Remove old target before adding new one
  gameArea.appendChild(target);
}

// Moves the target randomly every 600ms
function moveTarget() {
  const target = document.querySelector(".target");
  if (target) {
    target.style.top = `${Math.random() * 240}px`;
    target.style.left = `${Math.random() * 240}px`;
  }
  setTimeout(moveTarget, 600); // Adjust speed here
}

spawnTarget();
moveTarget();
