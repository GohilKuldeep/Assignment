import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ToggleDarkLight = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
      <br />
      <br />
      <ThemeContext.Provider value={{ theme }}>
        <ThemedBox />
      </ThemeContext.Provider>
    </>
  );
};

const ThemedBox = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: theme === "light" ? "#ff9" : "#444",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      This box is in {theme} mode.
    </div>
  );
};

export default ToggleDarkLight;
