import React from "react";
import styles from "../styles/grid.module.scss";

const MyGrid = ({ content, loading }) => {
  if (loading) {
    return <div> loading ...</div>;
  }
  return (
    <div className={styles.grid}>
      {content &&
        content.map((c, i) => (
          <div className="content-box" key={i}>
            <h2 className="title">{c[0]}</h2>
            <p className="description">$ {Math.floor(c[1] * 1000) / 1000}</p>
          </div>
        ))}
    </div>
  );
};

export default MyGrid;
