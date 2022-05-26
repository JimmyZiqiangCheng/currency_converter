import React, { useState } from "react";

export const CurrencyContext = React.createContext();
function CurrencyProvider({ children }) {
  const [result, setResult] = useState(null);

  return (
    <CurrencyContext.Provider
      value={{
        result,
        setResult,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export default CurrencyProvider;
