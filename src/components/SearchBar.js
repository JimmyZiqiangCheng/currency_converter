import React, { useState, useCallback } from "react";
import styles from "../styles/searchBar.module.scss";
import { useDebounce, useNoInitialEffect } from "../utils/customHooks";
import { getLocations, getWeather } from "../api/weatherAPI";

const SearchBar = ({ placeholder }) => {
  const [input, setInput] = useState("");
  const [queryInput, setQueryInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const updateQueryInput = () => {
    setQueryInput(input);
    console.log("updateQueryInput called");
  };
  const debouncedUpdateQueryInput = useDebounce(updateQueryInput, 500);

  useNoInitialEffect(useCallback(debouncedUpdateQueryInput, []), [input]);

  const filterData = (data) => {
    return data.filter((d) =>
      d.name.includes(queryInput.replace(/\b\w/g, (c) => c.toUpperCase()))
    );
  };

  const getFilteredData = async () => {
    const data = await getLocations(queryInput);
    setFilteredData(filterData(data));
    console.log("getFilteredData called");
  };
  useNoInitialEffect(getFilteredData, [queryInput]);

  const handleSubmit = async (event) => {};

  const displayData = () => {
    filteredData.map(({ id, name, region, country }) => {
      return (
        <li className="list-item" key={id}>
          <p className="item-detail">{`${name}, ${region}, ${country}`}</p>
        </li>
      );
    });
  };

  return (
    <div className={styles.searchBar}>
      <div className="search-input">
        <input
          type="text"
          className="input-field"
          placeholder={placeholder}
          value={input}
          onChange={handleChange}
        />
        <img
          className="search-icon"
          alt="search-icon"
          src="icons/search.svg"
          onClick={handleSubmit}
        />
      </div>
      {filteredData.length != 0 && (
        <ul className="data-list">{displayData()}</ul>
      )}
      <p>{input}</p>
      <p>{queryInput}</p>
    </div>
  );
};

export default SearchBar;
