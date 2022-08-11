import React, { useContext } from "react";
import styles from "../styles/header.module.scss";
import { Link } from "react-router-dom";
import Button from "./Button";
import Modal from "./Modal";
import Form from "./Form";
import { ThemeContext } from "../providers/themeProvider/ThemeProvider";
import { AuthContext } from "../providers/authProvider/AuthProvider";
import { handleSignOut } from "../services/AuthService/AuthService";

const Header = () => {
  const { toggleShowModal } = useContext(ThemeContext);
  const { isAuthenticated, setIsAuthenticated, user, setUser } =
    useContext(AuthContext);

  return (
    <div className={styles.header}>
      <div className="header-container">
        <div className="icon-group">
          <img src="../../../icons/list.svg" alt="list" className="list-menu" />
          <Link to="/home">
            <img src="../../../logo_big.svg" alt="logo" className="logo-img" />
          </Link>
        </div>
        <nav className="navbar">
          <ul className="header-menu">
            <li className="menu-item">
              <Link to="/home" className="menu-link">
                Home
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/weather" className="menu-link">
                Weather
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/currency" className="menu-link">
                Currency
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/crypto" className="menu-link">
                Crypto
              </Link>
            </li>
          </ul>

          {isAuthenticated ? (
            <div className="sign-out-section">
              <p>{user.email}</p>
              <Button
                text={"Logout"}
                buttonType={"btn header-btn"}
                handleClick={() => handleSignOut(setIsAuthenticated, setUser)}
              />
            </div>
          ) : (
            <div className="sign-in-section">
              <Button
                text={"Log In"}
                buttonType={"btn header-btn"}
                handleClick={toggleShowModal}
              />
              <Modal title="Log In">
                <Form title={"Welcome"} />
              </Modal>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
