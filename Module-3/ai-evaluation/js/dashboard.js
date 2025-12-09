import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getDatabase, ref, push, set, get, remove, update } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyDCMcIBuYsSX93l9ENoRb3lXTl9J4HSWZo",
    authDomain: "time-tracker-app-81a05.firebaseapp.com",
    databaseURL: "https://time-tracker-app-81a05-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "time-tracker-app-81a05",
    storageBucket: "time-tracker-app-81a05.appspot.com",
    messagingSenderId: "1028306372754",
    appId: "1:1028306372754:web:85874ecaf144eb0cc57e4b",
    measurementId: "G-P75GREPW9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

let currentUser = null;
let activities = [];
let totalMinutes = 0;

// DOM elements
const activityNameInput = document.getElementById('activityName');
const categoryInput = document.getElementById('category');
const durationInput = document.getElementById('duration');
const addBtn = document.getElementById('addActivityBtn');
const logoutBtn = document.getElementById('logoutBtn');
const viewAnalyticsBtn = document.getElementById('viewAnalyticsBtn');
const activitiesList = document.getElementById('activitiesList');
const selectedDateInput = document.getElementById('selectedDate');
const remainingMinutesSpan = document.getElementById('remainingMinutes');

// Format date YYYY-MM-DD
function formatDate(date) {
    const d = new Date(date);
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
}

// Auth state
onAuthStateChanged(auth, (user) => {
    if (user) {
        currentUser = user;
        const today = formatDate(new Date());
        selectedDateInput.value = today;
        loadActivities();
    } else {
        window.location.href = 'index.html';
    }
});

// Logout
logoutBtn.addEventListener('click', async () => {
    await signOut(auth);
    window.location.href = 'index.html';
});

// Change date
selectedDateInput.addEventListener('change', loadActivities);

// Add Activity
addBtn.addEventListener('click', async () => {
    const name = activityNameInput.value.trim();
    const category = categoryInput.value;
    const duration = parseInt(durationInput.value);

    if (!name || !category || !duration) {
        alert('Please fill all fields!');
        return;
    }

    if (totalMinutes + duration > 1440) {
        alert(`Cannot add this activity. Remaining minutes: ${1440 - totalMinutes}`);
        return;
    }

    const activity = { name, category, duration, timestamp: Date.now() };
    const date = selectedDateInput.value;
    const activitiesRef = ref(db, `users/${currentUser.uid}/days/${date}/activities`);
    const newActivityRef = push(activitiesRef);
    await set(newActivityRef, activity);

    activityNameInput.value = '';
    categoryInput.value = '';
    durationInput.value = '';
    loadActivities();
});

// Load activities for selected date
async function loadActivities() {
    const date = selectedDateInput.value;
    const activitiesRef = ref(db, `users/${currentUser.uid}/days/${date}/activities`);
    const snapshot = await get(activitiesRef);

    activities = [];
    totalMinutes = 0;

    if (snapshot.exists()) {
        snapshot.forEach(child => {
            const activity = { id: child.key, ...child.val() };
            activities.push(activity);
            totalMinutes += activity.duration;
        });
    }

    renderActivities();
    updateRemainingMinutes();
}

// Render activities
function renderActivities() {
    activitiesList.innerHTML = '';

    if (activities.length === 0) {
        activitiesList.innerHTML = `<p>No activities logged for this date.</p>`;
        return;
    }

    activities.forEach(a => {
        const div = document.createElement('div');
        div.classList.add('activity-item');

        div.innerHTML = `
            <div class="activity-info">
                <div class="activity-name">${a.name}</div>
                <div class="activity-details">
                    <span class="activity-category">${a.category}</span>
                    <span>${a.duration} min</span>
                </div>
            </div>
            <div class="activity-actions">
                <button class="btn btn-edit">Edit</button>
                <button class="btn btn-danger">Delete</button>
            </div>
        `;

        // Delete activity
        div.querySelector('.btn-danger').addEventListener('click', async () => {
            if (confirm('Are you sure you want to delete this activity?')) {
                await remove(ref(db, `users/${currentUser.uid}/days/${selectedDateInput.value}/activities/${a.id}`));
                loadActivities();
            }
        });

        // Edit activity
        div.querySelector('.btn-edit').addEventListener('click', () => editActivity(a));

        activitiesList.appendChild(div);
    });
}

// Edit activity
function editActivity(activity) {
    const newName = prompt('Edit Activity Name:', activity.name);
    if (newName === null) return;

    const newCategory = prompt('Edit Category (Work, Study, Sleep, Entertainment, Exercise, Other):', activity.category);
    if (newCategory === null) return;

    const newDurationStr = prompt('Edit Duration (minutes):', activity.duration);
    if (newDurationStr === null) return;

    const newDuration = parseInt(newDurationStr);

    if (totalMinutes - activity.duration + newDuration > 1440) {
        alert(`Cannot update. Total minutes will exceed 1440.`);
        return;
    }

    update(ref(db, `users/${currentUser.uid}/days/${selectedDateInput.value}/activities/${activity.id}`), {
        name: newName,
        category: newCategory,
        duration: newDuration
    }).then(() => loadActivities());
}

// Update remaining minutes
function updateRemainingMinutes() {
    remainingMinutesSpan.textContent = `Remaining Minutes: ${1440 - totalMinutes}`;
}

// Navigate to analytics
viewAnalyticsBtn.addEventListener('click', () => {
    if (totalMinutes === 0) {
        alert('Please log at least one activity to Analyse.');
        return;
    }
    window.location.href = `analytics.html?date=${selectedDateInput.value}`;
});
