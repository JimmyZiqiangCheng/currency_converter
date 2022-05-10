import React, { useContext } from "react";
import styles from "../styles/header.module.scss";
import { Link } from "react-router-dom";
import Button from "./Button";
import Modal from "./Modal";
import Form from "./Form";
import { ThemeContext } from "../services/themeProvider/ThemeProvider";

const Header = () => {
  const { toggleShowModal } = useContext(ThemeContext);
  return (
    <div className={styles.header}>
      <div className="header-container">
        <div className="icon-group">
          <img src="../../../icons/list.svg" alt="list" className="list-icon" />
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
          <Button
            text={"Log In"}
            buttonType={"btn header-btn"}
            handleClick={toggleShowModal}
          />
          <Modal title="Log In">
            <Form title={"Welcome"} />
          </Modal>
        </nav>
      </div>
    </div>
  );
};

export default Header;
