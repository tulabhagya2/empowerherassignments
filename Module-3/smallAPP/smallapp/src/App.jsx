import React, { useState } from "react";
import TodosList from "./components/TodosList";

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo App</h1>

      <button onClick={() => setShowTodos(false)}>
        Unmount Todos
      </button>

      <br /><br />

      {showTodos && <TodosList />}
    </div>
  );
}

export default App;
