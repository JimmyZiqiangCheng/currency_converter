import React, { useContext, useEffect, useState } from "react";
import { getCryptos } from "../api/cryptoAPI";
import MyGrid from "../components/MyGrid";
import { CryptoContext } from "../providers/cryptoProvider/CryptoProvider";
import Pagination from "../components/Pagination";
import SearchBox from "../components/SearchBox";

const Crypto = () => {
  const { cryptos, setCryptos } = useContext(CryptoContext);
  const [searchString, setSearchString] = useState("");
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
  }, [setCryptos]);

  const indexLastCrypto = currentPage * tilesPerPage;
  const indexFirstCrypto = indexLastCrypto - tilesPerPage;
  const filteredCrypto = cryptos.filter((c) =>
    c[0].toLowerCase().startsWith(searchString.toLowerCase())
  );

  const currentCryptos = filteredCrypto.slice(
    indexFirstCrypto,
    indexLastCrypto
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const onSearchChange = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <div className="crypto-page">
      <div className="page-title">Find Your Crypto</div>
      <div className="search-box-container">
        <SearchBox
          onChange={onSearchChange}
          placeholder="type in crypto abbreviation"
        />
      </div>
      <div className="grid-container">
        <MyGrid content={currentCryptos} loading={loading} />
      </div>
      <div className="pagination-container">
        <Pagination
          tilesPerPage={tilesPerPage}
          totalTiles={filteredCrypto.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Crypto;
