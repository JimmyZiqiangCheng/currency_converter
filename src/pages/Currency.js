import React, { useContext, useEffect, useState } from "react";
import { getExchangeRates } from "../api/currencyAPI";
import Selector from "../components/Selector";
import { CurrencyContext } from "../providers/currencyProvider/CurrencyProvider";
import { useToggle } from "../utils/customHooks";
import Carousel from "../components/Carousel";

const Currency = () => {
  const { result } = useContext(CurrencyContext);
  const [showAlt, toggleShowAlt] = useToggle();
  const [rates, setRates] = useState(null);
  const [slidePerView, setSlidePerView] = useState(4);

  useEffect(() => {
    const getRates = async () => {
      const today = new Date();
      const exChangeRates = await getExchangeRates(
        today.toISOString().slice(0, 10)
      );
      const ratesObject = {};
      exChangeRates.forEach(({ currency, rate }) => {
        ratesObject[currency] = 1 / rate;
      });
      setRates(ratesObject);
    };
    getRates();
  }, []);
  return (
    <div className="currency-page">
      <h1 className="currency-header"> Convert Your Currency Here</h1>
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
      <div className="carousel">
        <Carousel content={rates} slidesPerView={slidePerView} />
      </div>
    </div>
  );
};

export default Currency;
