import React, { useState } from "react";

const CalculatorApp = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("Add");
  const [results, setResults] = useState([]);

  const handleCalculate = () => {
    if (num1 === "" || num2 === "") {
      alert("Please enter both numbers");
      return;
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let result;

    switch (operation) {
      case "Add":
        result = n1 + n2;
        break;
      case "Subtract":
        result = n1 - n2;
        break;
      case "Multiply":
        result = n1 * n2;
        break;
      default:
        result = 0;
    }

    setResults((prevResults) => [
      ...prevResults,
      `${n1} ${operation === "Add" ? "+" : operation === "Subtract" ? "-" : "*"} ${n2} = ${result}`
    ]);

    setNum1("");
    setNum2("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Calculator App</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="Add">Add</option>
        <option value="Subtract">Subtract</option>
        <option value="Multiply">Multiply</option>
      </select>
      <button onClick={handleCalculate}>Perform Action</button>

      <h3>Results:</h3>
      <ul>
        {results.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>
    </div>
  );
};

export default CalculatorApp;
