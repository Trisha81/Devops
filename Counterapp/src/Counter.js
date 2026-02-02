import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);

    if (newCount === 10) {
      setMessage("🎉 You reached 10!");
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage("");
    }
  };

  const reset = () => {
    setCount(0);
    setMessage("");
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: "#f0f8ff",
        padding: "40px",
        borderRadius: "10px"
      }}
    >
      <h2>Counter Application</h2>
      <h1>{count}</h1>

      {message && <p>{message}</p>}

      <button
        onClick={increment}
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Increment
      </button>

      <button
        onClick={decrement}
        style={{
          backgroundColor: "#f44336",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          margin: "0 10px",
          cursor: "pointer"
        }}
      >
        Decrement
      </button>

      <button
        onClick={reset}
        style={{
          backgroundColor: "#2196F3",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
