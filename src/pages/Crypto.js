import React, { useContext, useEffect, useState } from "react";
import { getCryptos } from "../api/cryptoAPI";
import MyGrid from "../components/MyGrid";
import { CryptoContext } from "../providers/cryptoProvider/CryptoProvider";
import Pagination from "../components/Pagination";

const Crypto = () => {
  const { cryptos, setCryptos } = useContext(CryptoContext);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [tilesPerPage] = useState(16);

  useEffect(() => {
    const callCryptoAPI = async () => {
      setLoading(true);
      const rates = await getCryptos();
      setCryptos(rates);
      setLoading(false);
    };
    callCryptoAPI();
  }, []);

  const indexLastCrypto = currentPage * tilesPerPage;
  const indexFirstCrypto = indexLastCrypto - tilesPerPage;
  const currentCryptos = cryptos.slice(indexFirstCrypto, indexLastCrypto);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="crypto-page">
      <div className="title"></div>
      <div className="grid-container">
        <MyGrid content={currentCryptos} loading={loading} />
      </div>
      <div className="pagination-container">
        <Pagination
          tilesPerPage={tilesPerPage}
          totalTiles={cryptos.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Crypto;
