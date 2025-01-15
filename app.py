from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message")
    # Replace with your GPT logic or custom chatbot response
    bot_reply = f"You said: {user_message}. Let's work on your career goals!"
    return jsonify({"reply": bot_reply})

if __name__ == "__main__":
    app.run(debug=True)
