import React, { useState } from "react";

export const CurrencyContext = React.createContext();
function CurrencyProvider({ children }) {
  const [result, setResult] = useState(null);
  const [rates, setRates] = useState(null);

  return (
    <CurrencyContext.Provider
      value={{
        result,
        setResult,
        rates,
        setRates,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export default CurrencyProvider;
