import React, { useState, useContext } from "react";
import styles from "../styles/selector.module.scss";
import Button from "./Button";
import { convert } from "../api/currencyAPI";
import { CurrencyContext } from "../providers/currencyProvider/CurrencyProvider";

const Selector = () => {
  const [amount, setAmount] = useState("");
  const [to, setTo] = useState("CAD");
  const [from, setFrom] = useState("CAD");
  const currencies = ["CAD", "USD", "GBP", "AUD", "JPY", "CNY"];
  const { setResult } = useContext(CurrencyContext);
  const handleChange = (event) => {
    setAmount(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { result1, result2 } = await convert(to, from, amount);
    await setResult({
      from: from,
      to: to,
      amount: amount,
      result1: result1,
      result2: result2,
    });
  };
  return (
    <form className={styles.selector}>
      <div className="from-selector">
        <label className="label from-label">FROM: </label>
        <select
          className="select-from"
          name="from"
          onChange={(e) => {
            setFrom(e.target.value);
          }}
        >
          {currencies.map((currency, id) => {
            return (
              <option value={currency} key={id}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>
      <div className="to-selector">
        <label className="label to-label">TO: </label>
        <select
          className="select-to"
          name="to"
          onChange={(e) => {
            setTo(e.target.value);
          }}
        >
          {currencies.map((currency, id) => {
            return (
              <option value={currency} key={id}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>
      <div className="amount-input">
        <label className="label amount-label">AMOUNT: </label>
        <input
          type="text"
          className="input-field"
          placeholder="1.00"
          value={amount}
          onChange={handleChange}
        />
      </div>
      <Button
        text="convert"
        buttonType="btn selector-btn"
        handleClick={handleSubmit}
      />
    </form>
  );
};

export default Selector;
