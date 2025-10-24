import React from "react";

function Header({ onDarkModeClick }) {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  function handleClick() {
    setIsDarkMode(!isDarkMode);
    if (onDarkModeClick) {
      onDarkModeClick();
    }
  }

  const buttonText = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <header>
      <h1>Shopster</h1>
      <button onClick={handleClick}>{buttonText}</button>
    </header>
  );
}

export default Header;
