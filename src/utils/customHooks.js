import { useCallback, useState, useEffect } from "react";

export const useToggle = (defaultValue = false) => {
  const [state, setState] = useState(defaultValue);
  const toggle = useCallback(
    (value) => setState((on) => (typeof value === "boolean" ? value : !state)),
    []
  );
  return [state, toggle];
};

const getStorageValue = (key, defaultValue) => {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
};

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => getStorageValue(key, defaultValue));
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export const useDebounce = (func, delay) => {
  let myTimeOut;
  const debounce = useCallback(() => {
    clearTimeout(myTimeOut);
    myTimeOut = setTimeout(() => func(), delay);
  }, []);
  return debounce;
};
