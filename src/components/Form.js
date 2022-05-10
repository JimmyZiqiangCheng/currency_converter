import React, { useState, useContext } from "react";
import Button from "./Button";
import { useLocalStorage } from "../utils/customHooks";
import styles from "../styles/form.module.scss";
import { ThemeContext } from "../services/themeProvider/ThemeProvider";

function Form({ title }) {
  const [rememberPassword, setRememberPassword] = useState(false);
  const { toggleShowModal } = useContext(ThemeContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("signed up");
    toggleShowModal();
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("logged in");
    toggleShowModal();
  };
  const handleChangeRemember = (e) => {
    e.target.checked ? setRememberPassword(true) : setRememberPassword(false);
  };

  return (
    <div className={styles.form}>
      <div className="form-container">
        <h1 className="title">{title}</h1>
        <form>
          <div className="form-content">
            <div className="input-fields">
              <input
                placeholder="E-mail"
                name="email"
                className="input-field"
              />
              <input
                placeholder="password"
                name="password"
                className="input-field"
              />
              <div className="checkbox">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember" className="checkbox-label">
                  {" "}
                  remember my password
                </label>
              </div>
            </div>
            <div className="button-group">
              <Button
                text="Log In"
                buttonType="btn modal-btn"
                handleClick={handleLogin}
              />
              <Button
                text="Sign Up"
                buttonType="btn modal-btn"
                handleClick={handleSignUp}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
