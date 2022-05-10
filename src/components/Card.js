import React from "react";
import styles from "../styles/card.module.scss";
import Button from "./Button";

const Card = ({ cardType, description }) => {
  return (
    <div className={styles.card}>
      <div className="card-container">
        <div className="img-container">
          <img
            className="card-img"
            alt="card-img"
            src={`icons/${cardType}.png`}
          />
        </div>
        <h3 className="title">{cardType}</h3>
        <p className="description">{description}</p>
        <Button text={"Try Now"} buttonType={"btn card-btn"} />
      </div>
    </div>
  );
};

export default Card;
