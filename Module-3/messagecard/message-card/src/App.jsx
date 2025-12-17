import React from "react";
import MessageCard from "./MessageCard";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>My Messages</h1>

      <MessageCard 
        title="Welcome!" 
        message="Hello, this is your first message card." 
      />
      <MessageCard 
        title="Reminder" 
        message="Don't forget to check your tasks for today." 
      />
      <MessageCard 
        title="Success" 
        message="Your operation completed successfully!" 
      />
      <MessageCard 
        title="Alert" 
        message="Please update your profile information." 
      />
    </div>
  );
}

export default App;
