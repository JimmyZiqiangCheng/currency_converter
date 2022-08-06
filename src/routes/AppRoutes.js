import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Weather from "../pages/Weather";
import Currency from "../pages/Currency";
import Crypto from "../pages/Crypto";
import ProtectedRoute from "../utils/ProtectedRoute";
import Hero from "../components/Hero";
import styles from "../styles/mainContainer.module.scss";
import WeatherProvider from "../providers/weatherProvider/WeatherProvider";
import CurrencyProvider from "../providers/currencyProvider/CurrencyProvider";
import CryptoProvider from "../providers/cryptoProvider/CryptoProvider";
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
                <WeatherProvider>
                  <Weather />
                </WeatherProvider>
              </ProtectedRoute>
            }
          />
          <Route
            path="/currency"
            element={
              <CurrencyProvider>
                <ProtectedRoute>
                  <Currency />
                </ProtectedRoute>
              </CurrencyProvider>
            }
          />
          <Route
            path="/crypto"
            element={
              <CryptoProvider>
                <ProtectedRoute>
                  <Crypto />
                </ProtectedRoute>
              </CryptoProvider>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
