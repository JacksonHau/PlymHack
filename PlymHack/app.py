from flask import Flask, request, jsonify, redirect, url_for
from flask_cors import CORS
import json
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

@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(list(users.keys()))

@app.route('/users/<username>', methods=['GET'])
def get_user(username):
    if username in users:
        return jsonify(users[username])
    else:
        return jsonify({'message': 'User not found'}), 404

@app.route('/users/<username>', methods=['PUT'])
def update_user(username):
    if username in users:
        data = request.json
        users[username]['email'] = data['email']
        users[username]['password'] = hash_password(data['password'])
        return jsonify({'message': 'User updated successfully'}), 200
    else:
        return jsonify({'message': 'User not found'}), 404

@app.route('/users/<username>', methods=['DELETE'])
def delete_user(username):
    if username in users:
        del users[username]
        return jsonify({'message': 'User deleted successfully'}), 200
    else:
        return jsonify({'message': 'User not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
