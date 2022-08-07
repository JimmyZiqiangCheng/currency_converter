import React, { useState, useContext } from "react";
import Button from "./Button";
import { useLocalStorage, useToggle } from "../utils/customHooks";
import styles from "../styles/form.module.scss";
import { ThemeContext } from "../providers/themeProvider/ThemeProvider";
import Firebase from "../providers/authProvider/Firebase";
import Login from "./Login";
import {
  sendPasswordReset,
  signIn,
  signUp,
} from "../services/AuthService/AuthService";
import { AuthContext } from "../providers/authProvider/AuthProvider";

function Form({ title }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, toggleHasAccount] = useToggle(true);
  const { toggleShowModal } = useContext(ThemeContext);
  const { setIsAuthenticated, setUser } = useContext(AuthContext);
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    signUp(
      email,
      password,
      setEmailError,
      setPasswordError,
      clearErrors,
      clearInputs,
      toggleShowModal,
      setIsAuthenticated,
      setUser
    );
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    signIn(
      email,
      password,
      setEmailError,
      setPasswordError,
      clearErrors,
      clearInputs,
      toggleShowModal,
      setIsAuthenticated,
      setUser
    );
  };
  const handleReset = () => {
    sendPasswordReset(email, setEmailError);
  };

  return (
    <div className={styles.form}>
      <Login
        title={title}
        handleSignIn={handleSignIn}
        handleSignUp={handleSignUp}
        hasAccount={hasAccount}
        toggleHasAccount={toggleHasAccount}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        emailError={emailError}
        passwordError={passwordError}
        sendPasswordReset={handleReset}
      />
    </div>
  );
}

export default Form;
