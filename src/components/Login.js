import React from "react";
import Button from "./Button";

const Login = ({
  title,
  handleSignIn,
  handleSignUp,
  hasAccount,
  toggleHasAccount,
  email,
  setEmail,
  password,
  setPassword,
  emailError,
  passwordError,
  sendPasswordReset,
}) => {
  return (
    <section className="form-container">
      <h1 className="title">{title}</h1>
      <form>
        <div className="form-content">
          <div className="input-fields">
            <input
              placeholder="E-mail"
              name="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="error-message">{emailError}</p>
            <input
              placeholder="password"
              name="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="error-message">{passwordError}</p>
          </div>
          {hasAccount ? (
            <div className="button-group">
              <Button
                text="Log In"
                buttonType="btn modal-btn"
                handleClick={handleSignIn}
              />
              <div className="text-group">
                <p className="text">
                  Don't have an account?{" "}
                  <span
                    className="click-text"
                    onClick={() => toggleHasAccount()}
                  >
                    Sign up
                  </span>
                </p>
                <p className="text">
                  Forget Your Password?{" "}
                  <span
                    className="click-text"
                    onClick={() => sendPasswordReset(email)}
                  >
                    Click Here
                  </span>
                </p>
              </div>
            </div>
          ) : (
            <div className="button-group">
              <Button
                text="Sign Up"
                buttonType="btn modal-btn"
                handleClick={handleSignUp}
              />
              <div className="text-group">
                <p className="text">
                  have an account already?{" "}
                  <span
                    className="click-text"
                    onClick={() => toggleHasAccount()}
                  >
                    Sign In
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </form>
    </section>
  );
};

export default Login;
