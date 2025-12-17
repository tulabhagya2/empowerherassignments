import { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

function StatusToggle() {
  const [status, setStatus] = useState(false);

  const toggleStatus = () => {
    setStatus(!status);
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={toggleStatus}>
        Toggle Status
      </button>

      <div style={{ marginTop: "15px" }}>
        {status ? <ComponentA /> : <ComponentB />}
      </div>
    </div>
  );
}

export default StatusToggle;
