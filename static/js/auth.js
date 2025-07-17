function register() {
  const username = document.getElementById("reg-username").value.trim();
  const address = document.getElementById("reg-address").value.trim();
  const password = document.getElementById("reg-password").value.trim();

  if (!username || !address || !password) {
    alert("Please fill all fields.");
    return;
  }

  // Store data (in localStorage for now)
  localStorage.setItem("username", username);
  localStorage.setItem("address", address);
  localStorage.setItem("password", password);

  window.location.href = "/role";
}

function login() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();

  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (!username || !password) {
    alert("Please enter username and password.");
    return;
  }

  if (username !== storedUsername || password !== storedPassword) {
    alert("Incorrect username or password.");
    return;
  }

  window.location.href = "/role";
}
