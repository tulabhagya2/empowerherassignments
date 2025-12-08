import { createNavbar } from './navbar.js';
import { createFooter } from './footer.js';

document.getElementById('navbar').appendChild(createNavbar());
document.getElementById('footer').appendChild(createFooter());

document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if(user){
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'todos.html';
    } else {
        alert('Invalid username or password');
    }
});
