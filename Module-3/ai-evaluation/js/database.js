import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push, set, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDCMcIBuYsSX93l9ENoRb3lXTl9J4HSWZo",
    authDomain: "time-tracker-app-81a05.firebaseapp.com",
    databaseURL: "https://time-tracker-app-81a05-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "time-tracker-app-81a05",
    storageBucket: "time-tracker-app-81a05.appspot.com",
    messagingSenderId: "1028306372754",
    appId: "1:1028306372754:web:85874ecaf144eb0cc57e4b"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Add activity for a user on a specific date
export function addActivity(uid, date, activity) {
    const refPath = ref(db, `users/${uid}/days/${date}/activities`);
    const newRef = push(refPath);

    return set(newRef, {
        name: activity.name,
        category: activity.category,
        duration: activity.duration,
        timestamp: Date.now()
    });
}

// Get all activities for a user on a specific date
export async function getActivities(uid, date) {
    const refPath = ref(db, `users/${uid}/days/${date}/activities`);
    const snap = await get(refPath);

    let activities = [];
    if (snap.exists()) {
        snap.forEach(child => {
            activities.push({ id: child.key, ...child.val() });
        });
    }
    return activities; // return an array instead of snapshot
}
