import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Initialize a state variable to track whether the app is in dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode and button text
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Determine the app class and button text based on the dark mode state
  const appClass = isDarkMode ? "App dark" : "App light";
  const buttonText = isDarkMode ? "Dark Mode" : "Light Mode";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>{buttonText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;


