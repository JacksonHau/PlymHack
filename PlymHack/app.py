from flask import Flask, request, jsonify, redirect, url_for
from flask_cors import CORS
import hashlib

app = Flask(__name__, static_folder='static', static_url_path='/static')
CORS(app)

# Simulating a database with a dictionary
users = {}

def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

def verify_password(stored_password, provided_password):
    return stored_password == hashlib.sha256(provided_password.encode()).hexdigest()

@app.route('/')
def root():
    # Redirect to the login page as the default route
    return redirect('/static/login.html')

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    username = data['username']
    email = data['email']
    password = data['password']
    if username in users:
        return jsonify({'message': 'Username already exists'}), 409
    users[username] = {'email': email, 'password': hash_password(password)}
    return jsonify({'message': 'User created successfully'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data['username']
    password = data['password']
    if username not in users or not verify_password(users[username]['password'], password):
        return jsonify({'message': 'Invalid credentials'}), 401
    return jsonify({'message': 'Logged in successfully'}), 200

@app.route('/profile', methods=['GET', 'POST'])
def profile():
    if request.method == 'POST':
        data = request.json
        username = data['username']
        if username in users:
            users[username]['email'] = data['email']
            users[username]['password'] = hash_password(data['password'])
            return jsonify({'message': 'Profile updated successfully'}), 200
        else:
            return jsonify({'message': 'User not found'}), 404
    else:
        username = request.args.get('username')
        if username in users:
            return jsonify(users[username])
        else:
            return jsonify({'message': 'User not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
