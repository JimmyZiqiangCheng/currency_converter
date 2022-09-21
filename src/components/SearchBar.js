import React, { useState, useRef, useContext } from "react";
import styles from "../styles/searchBar.module.scss";
import {
  useDebounce,
  useNoInitialEffect,
  useOutsideClick,
} from "../utils/customHooks";
import { getLocations, getWeather } from "../api/weatherAPI";
import { WeatherContext } from "../providers/weatherProvider/WeatherProvider";

const SearchBar = ({ placeholder }) => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const { setWeather } = useContext(WeatherContext);

  const ref = useRef();

  const handleChange = (event) => {
    setInput(event.target.value);
    debouncedSetQuery(event.target.value);
    debouncedSetShowModal(event.target.value !== "");
  };

  const updateInputField = (d) => {
    setInput(`${d.name}, ${d.region}`);
    setShowModal(false);
  };

  const debouncedSetQuery = useDebounce(setQuery, 500);
  const debouncedSetShowModal = useDebounce(setShowModal, 500);
  const filterData = (data, reference) =>
    data.filter((d) =>
      Object.values(d).join("").toLowerCase().includes(reference.toLowerCase())
    );

  useNoInitialEffect(() => {
    const updateFilteredData = async () => {
      if (query === "") return;
      const data = await getLocations(query);
      setFilteredData(filterData(data, query));
    };
    updateFilteredData();
  }, [query]);

  useOutsideClick(ref, () => {
    setShowModal(false);
  });

  const handleSubmit = async () => {
    setInput("");
    setQuery("");
    setFilteredData([]);
    const weather = await getWeather(query);
    setWeather(weather);
  };

  return (
    <div className={styles.searchBar}>
      <div className="search-input">
        <input
          type="search"
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

      {showModal && filteredData && filteredData.length !== 0 && (
        <ul className="data-list">
          {filteredData.map((d) => (
            <li
              className="list-item"
              key={d.id}
              onClick={() => updateInputField(d)}
              ref={ref}
            >
              {`${d.name}, ${d.region}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
