import React from "react";
import FirstComponent from "./FirstComponent"; // import your component
import './App.css'; // optional, keep styles

function App() {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <FirstComponent /> {/* renders your component */}
    </div>
  );
}

export default App;
