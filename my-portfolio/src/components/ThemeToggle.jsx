import React from "react";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-3 py-1.5 rounded-md bg-black text-white dark:bg-white dark:text-black transition-colors duration-300"
    >
      {darkMode ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle;