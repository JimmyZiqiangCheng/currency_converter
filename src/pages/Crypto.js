import React, { useContext, useEffect } from "react";
import { getCryptos } from "../api/cryptoAPI";
import Carousel from "../components/Carousel";
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
      <div className="carousel">
        <Carousel content={cryptos} slidesPerView={4} />
      </div>
    </div>
  );
};

export default Crypto;
