import React, { useState } from "react";
import styles from "../styles/searchBar.module.scss";

const SearchBar = ({ placeholder, data }) => {
  const [valueEntered, setValueEntered] = useState("");
  const handleChange = (event) => {
    setValueEntered(event.target.value);
  };
  const handleSubmit = () => {
    console.log(valueEntered);
  };
  return (
    <div className={styles.searchBar}>
      <div className="search-input">
        <input
          type="text"
          className="input-field"
          placeholder={placeholder}
          value={valueEntered}
          onChange={handleChange}
        />
        <img
          className="search-icon"
          alt="search-icon"
          src="icons/search.svg"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default SearchBar;
