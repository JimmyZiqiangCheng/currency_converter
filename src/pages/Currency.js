import React, { useContext } from "react";
import Selector from "../components/Selector";
import { CurrencyContext } from "../services/currencyProvider/CurrencyProvider";
import { useToggle } from "../utils/customHooks";
const Currency = () => {
  const { result } = useContext(CurrencyContext);
  const [showAlt, toggleShowAlt] = useToggle();
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
