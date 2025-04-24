from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/src/components/login.jsx')
def hello():
    return jsonify(message="Hello from Flask backend!")

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    # Simple dummy auth
    if email == 'test@example.com' and password == 'password123':
        return jsonify(message='Login successful', status='success')
    else:
        return jsonify(message='Invalid credentials', status='fail'), 401

@app.route('/')
def index():
    return '''
    <!DOCTYPE html>
    <html>
    <head>
        <title>Flask Frontend</title>
    </head>
    <body>
        <h1>Hello from the Frontend!</h1>
        <button onclick="sayHello()">Say Hello</button>
        <button onclick="login()">Login</button>
        <p id="response"></p>
        <script>
            function sayHello() {
                fetch('/api/hello')
                    .then(res => res.json())
                    .then(data => {
                        document.getElementById('response').innerText = data.message;
                    });
            }

            function login() {
                fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: 'test@example.com',
                        password: 'password123'
                    })
                })
                .then(res => res.json())
                .then(data => {
                    document.getElementById('response').innerText = data.message;
                });
            }
        </script>
    </body>
    </html>
    '''
if __name__ == '__main__':
    app.run(debug=True, port=5000)