# ⏱ Time Tracker Web Application

## 📌 Short Description
**Time Tracker** is a web application that allows users to track their daily activities, calculate time spent on each task, and view analytics.  
The app includes authentication, dashboards, charts, date-based activity filtering, and real-time updates using **Firebase Realtime Database** and **Chart.js**.

This project was initially built using **BoltNew AI tool** and later enhanced, debugged, and optimized using **ChatGPT**.

---

## 🚀 Live Demo
https://tulabhagya2.github.io/ai-evaluation-repo/

---

## 🎥 Video Walkthrough
[Watch 2–5 Minute Video](YOUR_VIDEO_LINK_HERE)

**In the video, I demonstrate:**
- User login and signup  
- Dashboard overview  
- Adding, editing, and deleting activities  
- Analytics charts  
- “No Data Available” screen  
- How AI tools were used in development  

---

## 🛠 Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Firebase Authentication  
- **Database:** Firebase Realtime Database  
- **Charts:** Chart.js  
- **Deployment:** GitHub Pages / Netlify / lovable.dev  

---

## ✨ Features

### 🔐 Authentication
- Signup, login, and logout  

### 📝 Activity Management
- Add, edit, and delete activities  
- View activities by date  

### 📊 Dashboard & Analytics
- Total hours calculation  
- Activity summary and pie chart  
- Highlights “Most Active Category”  
- Shows “No Data Available” state  

### 📱 UI & Other Features
- Clean and responsive design  
- Works on desktop and mobile  
- Real-time updates from Firebase  

---

## 🖥 How to Run the Project Locally

1. Clone the repository:

```bash
git clone https://github.com/tulabhagya2/empowerherassignments.git
Navigate to the project folder and open in VS Code:

cd empowerherassignments
code .


Set up Firebase:

Create a file firebaseConfig.js inside the js folder.

Paste your Firebase configuration:

export const firebaseConfig = {
    apiKey: "AIzaSyDCMcIBuYsSX93l9ENoRb3lXTl9J4HSWZo",
    authDomain: "time-tracker-app-81a05.firebaseapp.com",
    databaseURL: "https://time-tracker-app-81a05-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "time-tracker-app-81a05",
    storageBucket: "time-tracker-app-81a05.appspot.com",
    messagingSenderId: "1028306372754",
    appId: "1:1028306372754:web:85874ecaf144eb0cc57e4b",
};


Make sure Email/Password Authentication is enabled.

Ensure Realtime Database rules allow read/write access for authenticated users:

{
  "rules": {
    ".read": true,
    ".write": true
  }
}


Open index.html in a browser.
Or use Live Server in VS Code:

npx live-server


Start using the app:

Signup / login

Add, edit, delete activities

View dashboard and analytics

Troubleshooting Tips:

Login fails → check authorized domains in Firebase Authentication

Charts missing → verify Chart.js is linked

Data missing → confirm Firebase config and database rules

ai-evaluation/
│── index.html
│── dashboard.html
│── analytics.html
│── signup.html
│
├── js/
│   ├── dashboard.js
│   ├── auth.js
│   ├── analytics.js
│   └── database.js
│
├── css/
│   └── styles.css
│
├── screenshots/
│   ├── dashboardpage.jpg
│   ├── loginpage.jpg
│   ├── signuppage.jpg
│   ├── analytics page1.jpg
│   ├── analytics page-2.jpg
│   ├── analyticspage3.gif
│
└── README.md


📸 Screenshots
![Dashboard Page](./screenshots/dashboardpage.jpg)
![Login Page](./screenshots/loginpage.jpg)
![Signup Page](./screenshots/signuppage.jpg)
![Analytics Page 1](./screenshots/analytics page1.jpg)
![Analytics Page 2](./screenshots/analytics page-2.jpg)
![Analytics Page 3](./screenshots/analyticspage3.jpg)


AI Tools Used

BoltNew: Used to generate initial UI and project structure

ChatGPT: Used to debug, modify, and improve code, and create this README.md

✅ License

This project is open-source under the MIT License.