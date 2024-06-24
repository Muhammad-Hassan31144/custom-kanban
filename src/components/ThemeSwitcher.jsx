// src/components/ThemeSwitcher.jsx
import React, { useState, useEffect } from "react";

const themes = [
  "dark",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "luxury",
  "dracula",
  "night",
  "coffee",
  "winter",
  "dim",
];

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="dropdown dropdown-bottom">
      <label tabIndex="0" className="btn m-1">
        Change Theme
      </label>
      <ul
        tabIndex="0"
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {themes.map((t) => (
          <li key={t}>
            <button onClick={() => setTheme(t)}>{t}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSwitcher;
