import React from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import AuthProvider from "./providers/authProvider/AuthProvider";
import ThemeProvider from "./providers/themeProvider/ThemeProvider";

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
