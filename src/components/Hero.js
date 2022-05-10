import React from "react";
import styles from "../styles/hero.module.scss";
import Header from "./Header";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Header />
    </div>
  );
};

export default Hero;
