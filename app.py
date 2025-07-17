from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# === Home Page Route ===
@app.route("/")
def home():
    return render_template("index.html")  # Welcome page with Login/Register buttons

# === Login Page ===
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        # Your login logic here (e.g., check credentials)
        return redirect(url_for("role"))  # Redirect after login
    return render_template("login.html")

# === Register Page ===
@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        # Your register logic here (e.g., save user data)
        return redirect(url_for("login"))
    return render_template("register.html")

# === Role Selection Page ===
@app.route("/role")
def role():
    return render_template("role.html")

# === Player Game Page ===
@app.route("/player")
def player_game():
    return render_template("playerGame.html")

# === Soldier Game Page ===
@app.route("/soldier")
def soldier_game():
    return render_template("soldierGame.html")

# === Success Page ===
@app.route("/success")
def success():
    return render_template("success.html")

# === Terms & Conditions Page ===
@app.route("/terms")
def show_terms():
    return render_template("terms.html")  # Your Squid Game-style terms

# === Run the app ===
if __name__ == "__main__":
    app.run(debug=True)
