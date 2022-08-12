import React, { useState } from "react";

export const ThemeContext = React.createContext();
function ThemeProvider({ children }) {
  const [showModal, toggleShowModal] = useState(false);
  const [showHeaderMenu, toggleShowHeaderMenu] = useState(true);
  const [showNavList, toggleShowNavList] = useState(false);
  return (
    <ThemeContext.Provider
      value={{
        showModal,
        toggleShowModal,
        showHeaderMenu,
        toggleShowHeaderMenu,
        showNavList,
        toggleShowNavList,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
