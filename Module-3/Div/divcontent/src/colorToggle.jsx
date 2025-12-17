import { useState } from "react";

function ColorToggle() {
  const [isRed, setIsRed] = useState(true);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          color: isRed ? "red" : "blue",
          fontSize: "20px",
          marginBottom: "10px"
        }}
      >
        This text changes color
      </div>

      <button onClick={toggleColor}>
        Toggle Color
      </button>
    </div>
  );
}

export default ColorToggle;
