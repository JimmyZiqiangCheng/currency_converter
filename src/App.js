import React from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import ThemeProvider from "./services/themeProvider/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
