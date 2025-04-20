// This file contains functions related to user authentication, including registration, login, and credential validation against the simulated CSV data stored in localStorage.

const users = JSON.parse(localStorage.getItem('users')) || [];

function registerUser(username, password, role) {
    const userExists = users.some(user => user.username === username);
    if (userExists) {
        alert('User already exists. Please choose a different username.');
        return false;
    }
    const newUser = { username, password, role };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful!');
    return true;
}

function loginUser(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert(`Welcome, ${user.role}!`);
        return user.role;
    } else {
        alert('Invalid username or password.');
        return null;
    }
}

function validateCredentials(username, password) {
    return users.some(user => user.username === username && user.password === password);
}