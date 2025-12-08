import { createNavbar } from './navbar.js';
import { createFooter } from './footer.js';

document.getElementById('navbar').appendChild(createNavbar());
document.getElementById('footer').appendChild(createFooter());

document.getElementById('signupForm').addEventListener('submit', function(e){
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({username, password});
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful! Please login.');
    window.location.href = 'login.html';
});
