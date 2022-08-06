import React, { useState } from "react";
import { useToggle } from "../../utils/customHooks";

export const ThemeContext = React.createContext();
function ThemeProvider({ children }) {
  const [showModal, toggleShowModal] = useState();
  const [showList, toggleShowList] = useToggle();
  const [showHeaderMenu, toggleShowHeaderMenu] = useToggle();
  const [showHamburger, toggleShowHamburger] = useToggle();
  return (
    <ThemeContext.Provider
      value={{
        showModal,
        toggleShowModal,
        showList,
        toggleShowList,
        showHeaderMenu,
        toggleShowHeaderMenu,
        showHamburger,
        toggleShowHamburger,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
