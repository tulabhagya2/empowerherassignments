export function createNavbar() {
    const nav = document.createElement('nav');
    nav.innerHTML = `
        <ul style="display:flex; gap:10px; list-style:none;">
            <li><a href="index.html">Home</a></li>
            <li><a href="signup.html">Signup</a></li>
            <li><a href="login.html">Login</a></li>
        </ul>
    `;
    return nav;
}
