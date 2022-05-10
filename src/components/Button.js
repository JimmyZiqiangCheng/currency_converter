import React from "react";
import styles from "../styles/button.module.scss";

const Button = ({ text, buttonType, handleClick }) => {
  return (
    <div className={styles.button}>
      <button className={buttonType} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
