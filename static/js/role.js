document.addEventListener('DOMContentLoaded', () => {
  const playerBtn = document.getElementById('player-btn');
  const soldierBtn = document.getElementById('soldier-btn');

  if (playerBtn) {
    playerBtn.addEventListener('click', () => {
      window.location.href = "/player";
    });
  }

  if (soldierBtn) {
    soldierBtn.addEventListener('click', () => {
      window.location.href = "/soldier";
    });
  }
});
