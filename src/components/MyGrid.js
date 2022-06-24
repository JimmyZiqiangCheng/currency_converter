import React from "react";
import styles from "../styles/grid.module.scss";

const MyGrid = ({ content, slidesPerView }) => {
  return (
    <div className={styles.grid}>
      {content &&
        Object.entries(content).map(([key, value]) => (
          <div className="content-box">
            <h2 className="title">{key}</h2>
            <p className="description">$ {Math.floor(value * 1000) / 1000}</p>
          </div>
        ))}
    </div>
  );
};

export default MyGrid;
