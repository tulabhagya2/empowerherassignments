import { createNavbar } from './navbar.js';
import { createFooter } from './footer.js';
import { displayTodos } from './displayTodos.js';

document.getElementById('navbar').appendChild(createNavbar());
document.getElementById('footer').appendChild(createFooter());

// Check login
if(!localStorage.getItem('loggedInUser')){
    alert('Please login first');
    window.location.href = 'login.html';
}

// Fetch todos from API
fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => res.json())
    .then(data => displayTodos(data))
    .catch(err => console.log(err));
