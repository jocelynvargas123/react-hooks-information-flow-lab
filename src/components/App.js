import React, { useState } from "react";
import Headers from "./Header";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Headers onDarkModeClick = {onDarkModeClick()} ></Headers>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
