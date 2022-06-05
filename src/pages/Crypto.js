import React, { useContext, useEffect } from "react";
import { getCryptos } from "../api/cryptoAPI";
import NewsTicker from "../components/NewsTicker";
import { CryptoContext } from "../services/cryptoProvider/CryptoProvider";
const Crypto = () => {
  const { setCrypto } = useContext(CryptoContext);
  useEffect(() => {
    const callCryptoAPI = async () => {
      const rates = await getCryptos();
      setCrypto(rates);
    };
    callCryptoAPI();
  }, []);
  return (
    <div className="crypto-page">
      <div className="title"></div>
      <div className="news-ticker">
        <NewsTicker />
      </div>
    </div>
  );
};

export default Crypto;
