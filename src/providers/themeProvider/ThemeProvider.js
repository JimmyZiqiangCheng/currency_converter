import React, { useState } from "react";
import { useToggle } from "../../utils/customHooks";

export const ThemeContext = React.createContext();
function ThemeProvider({ children }) {
  const [showModal, toggleShowModal] = useToggle();
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
