import { useState } from "react";
import ThemeStatus from "./ThemeStatus";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light"); // State

  const isDark = theme === "dark";

  // Page styling changes dynamically based on state
  const pageStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isDark ? "#111827" : "#f9fafb",
    color: isDark ? "#f9fafb" : "#111827",
    transition: "all 0.3s ease",
  };

  const cardStyle = {
    width: "min(520px, 95vw)",
    borderRadius: "16px",
    padding: "24px",
    backgroundColor: isDark ? "#1f2937" : "#ffffff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
    border: isDark ? "1px solid #374151" : "1px solid #e5e7eb",
    transition: "all 0.3s ease",
  };

  const buttonStyle = {
    padding: "10px 16px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    backgroundColor: isDark ? "#f9fafb" : "#111827",
    color: isDark ? "#111827" : "#f9fafb",
  };

  // State update function
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1>Theme Toggle App</h1>

        <p>
          Click the button to switch between Light and Dark mode.
        </p>

        {/* Bonus: Pass theme as props to child */}
        <ThemeStatus theme={theme} />

        <button onClick={toggleTheme} style={buttonStyle}>
          Switch to {isDark ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
}
