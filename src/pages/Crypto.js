import React, { useContext, useEffect } from "react";
import { getCryptos } from "../api/cryptoAPI";
import MyGrid from "../components/MyGrid";
import { CryptoContext } from "../services/cryptoProvider/CryptoProvider";

const Crypto = () => {
  const { cryptos, setCryptos } = useContext(CryptoContext);
  useEffect(() => {
    const callCryptoAPI = async () => {
      const rates = await getCryptos();
      console.log(rates);
      setCryptos(rates);
    };
    callCryptoAPI();
  }, []);

  return (
    <div className="crypto-page">
      <div className="title"></div>
      <div className="grid-container">
        <MyGrid content={cryptos} />
      </div>
    </div>
  );
};

export default Crypto;
