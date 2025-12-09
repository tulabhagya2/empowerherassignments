import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getActivities } from "./database.js";

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

let uid = null;
let myChart = null;


// Convert total minutes to "hours:minutes" format
function formatTime(minutes) {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hrs}:${mins.toString().padStart(2, '0')}`;
}


// ▶️ Get date from URL
const params = new URLSearchParams(window.location.search);
const urlDate = params.get("date");

// ▶️ Set date input
const selectedDateInput = document.getElementById("selectedDate");
selectedDateInput.value = urlDate;

/* CHECK LOGIN */
onAuthStateChanged(auth, (user) => {
    if (!user) {
        location.href = "index.html";
    } else {
        uid = user.uid;
        loadAnalytics(); // load data immediately
    }
});

/* DATE CHANGE */
selectedDateInput.addEventListener("change", loadAnalytics);

/* LOGOUT */
document.getElementById("logoutBtn").onclick = () => signOut(auth);

/* BACK */
document.getElementById("backBtn").onclick = () => location.href = "dashboard.html";

async function loadAnalytics() {
    const date = selectedDateInput.value;
    const activities = await getActivities(uid, date);

    const table = document.getElementById("activitiesTable");
    const totalHours = document.getElementById("totalHours");
    const totalActivities = document.getElementById("totalActivities");
    const topCategory = document.getElementById("topCategory");

    if (activities.length === 0) {
        table.innerHTML = "<p>No data for this date.</p>";
        totalHours.textContent = 0;
        totalActivities.textContent = 0;
        topCategory.textContent = "-";

        if (myChart) myChart.destroy();
        return;
    }

    // Summary
    const totalMinutes = activities.reduce((sum, a) => sum + a.duration, 0);
   totalHours.textContent = formatTime(totalMinutes);

    totalActivities.textContent = activities.length;

    // Most used category
    const categoryCounts = {};
    activities.forEach(a => {
        categoryCounts[a.category] = (categoryCounts[a.category] || 0) + a.duration;
    });

    const maxCategory = Object.keys(categoryCounts).sort((a, b) => categoryCounts[b] - categoryCounts[a])[0];
    topCategory.textContent = maxCategory;

    // Pie Chart
    const ctx = document.getElementById("categoryChart");
    if (myChart) myChart.destroy();

    myChart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: Object.keys(categoryCounts),
            datasets: [{
                data: Object.values(categoryCounts),
                backgroundColor: [
                    "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"
                ]
            }]
        },
        options: {
            responsive: true
        }
    });

    // Table of activities
    table.innerHTML = activities
        .map(a => `<div>${a.name} - ${a.category} - ${a.duration} min</div>`)
        .join("");
}
