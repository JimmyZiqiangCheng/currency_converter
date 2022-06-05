import React, { useState } from "react";

export const CryptoContext = React.createContext();
function CryptoProvider({ children }) {
  const [cryptos, setCryptos] = useState(null);

  return (
    <CryptoContext.Provider
      value={{
        cryptos,
        setCryptos,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
}

export default CryptoProvider;
