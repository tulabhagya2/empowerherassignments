import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
    getDatabase,
    ref,
    set
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDCMcIBuYsSX93l9ENoRb3lXTl9J4HSWZo",
    authDomain: "time-tracker-app-81a05.firebaseapp.com",
    databaseURL: "https://time-tracker-app-81a05-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "time-tracker-app-81a05",
    storageBucket: "time-tracker-app-81a05.appspot.com",
    messagingSenderId: "1028306372754",
    appId: "1:1028306372754:web:85874ecaf144eb0cc57e4b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const page = location.pathname.split("/").pop();

/* LOGIN */
if (page === "index.html" || page === "") {
    const loginForm = document.getElementById("loginForm");
    const error = document.getElementById("error");

    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email.value, password.value);
            location.href = "dashboard.html";
        } catch (err) {
            error.textContent = err.message;
        }
    });
}

/* SIGNUP */
if (page === "signup.html") {
    const signupForm = document.getElementById("signupForm");
    const error = document.getElementById("error");

    signupForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        if (password.value !== confirmPassword.value) {
            error.textContent = "Passwords do not match.";
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
            const user = userCredential.user;

            await set(ref(db, "users/" + user.uid), {
                email: email.value,
                createdAt: new Date().toISOString()
            });

            location.href = "dashboard.html";
        } catch (err) {
            error.textContent = err.message;
        }
    });
}

/* REDIRECT IF LOGGED IN */
onAuthStateChanged(auth, (user) => {
    if (user && (page === "index.html" || page === "signup.html")) {
        location.href = "dashboard.html";
    }
});
