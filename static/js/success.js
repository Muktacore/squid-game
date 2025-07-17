// static/js/success.js

const welcomeMessage = document.getElementById("welcome-message");
const roleMessage = document.getElementById("role-message");

const role = localStorage.getItem("role");
const playerID = localStorage.getItem("playerID");
const soldierID = localStorage.getItem("soldierID");

function getRandomLocation() {
  const locations = [
    "Warehouse 17B, Incheon Port",
    "Bus Stop 4, Mapo Bridge",
    "Dockside Shed No. 3",
    "Lot 51, Gyeonggi Industrial Zone",
    "Underground Lot, Namsan Tunnel 2"
  ];
  return locations[Math.floor(Math.random() * locations.length)];
}

if (role === "player" && playerID) {
  welcomeMessage.textContent = "Well done, you win a chance to change your life.";
  roleMessage.innerHTML = `
    Welcome to Squid Game <strong>Player ${playerID}</strong>.<br><br>
    A  pickup van will arrive at your registered address tomorrow at 3:00 am .<br>
    Be ready.`;
} else if (role === "soldier" && soldierID) {
  welcomeMessage.textContent = "Congratulations!";
  roleMessage.innerHTML = `
    You are now appointed as <strong>Soldier ${soldierID}</strong>.<br><br>
    Your uniform will arrive tomorrow at your registered address by 1:00 am.<br>
    Reach <strong>${getRandomLocation()}</strong> by <strong>3:00 AM</strong>.`;
} else {
  welcomeMessage.textContent = "Well played!";
  roleMessage.textContent = "Thank you for playing Squid Game.";
}
