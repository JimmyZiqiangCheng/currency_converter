import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Weather from "../pages/Weather";
import Currency from "../pages/Currency";
import Crypto from "../pages/Crypto";
import ProtectedRoute from "../utils/ProtectedRoute";
import Hero from "../components/Hero";
import styles from "../styles/mainContainer.module.scss";
const AppRoutes = () => {
  return (
    <Router>
      <Hero />
      <div className={styles.mainContainer}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/weather"
            element={
              <ProtectedRoute>
                <Weather />
              </ProtectedRoute>
            }
          />
          <Route
            path="/currency"
            element={
              <ProtectedRoute>
                <Currency />
              </ProtectedRoute>
            }
          />
          <Route
            path="/crypto"
            element={
              <ProtectedRoute>
                <Crypto />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
