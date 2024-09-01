from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send_message', methods=['POST'])
def send_message():
    user_message = request.form['user_message']
    bot_response = ""

    # Simple logic to ask financial questions and provide advice
    if "income" in user_message.lower():
        bot_response = "What is your monthly income?"
    elif "savings" in user_message.lower():
        bot_response = "How much do you have in savings?"
    # Add more conditions based on the financial advice flow

    return jsonify({'bot_response': bot_response})

if __name__ == '__main__':
    app.run(debug=True)
