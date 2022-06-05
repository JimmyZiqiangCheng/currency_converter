import React, { useContext, useEffect } from "react";
import { getExchangeRates } from "../api/currencyAPI";
import Selector from "../components/Selector";
import { CurrencyContext } from "../services/currencyProvider/CurrencyProvider";
import { useToggle } from "../utils/customHooks";
const Currency = () => {
  const { result } = useContext(CurrencyContext);
  const [showAlt, toggleShowAlt] = useToggle();
  useEffect(() => {
    const getRates = async () => {
      const today = new Date();
      await getExchangeRates(today.toISOString().slice(0, 10));
    };
    getRates();
  }, []);
  return (
    <div className="currency-page">
      <div className="selector-section">
        <Selector />
      </div>
      {result &&
        (showAlt ? (
          <p className="currency-display" onClick={toggleShowAlt}>
            {`${result.amount} ${result.to} = ${result.result2} ${result.from}`}
          </p>
        ) : (
          <p className="currency-display" onClick={toggleShowAlt}>
            {`${result.amount} ${result.from} = ${result.result1} ${result.to}`}
          </p>
        ))}
    </div>
  );
};

export default Currency;
