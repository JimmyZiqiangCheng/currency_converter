import React from "react";
import styles from "../styles/searchBox.module.scss";
const SearchBox = ({ onChange, placeholder }) => {
  return (
    <div className={styles.searchBox}>
      <div className="search-input">
        <input
          className="input-field"
          type="search"
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default SearchBox;
