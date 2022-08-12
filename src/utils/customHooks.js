import { useCallback, useState, useEffect, useRef } from "react";

export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((state) => !state), []);
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

export const useDebounce = (func, delay = 200) => {
  let myTimeOut;
  const debounce = useCallback((para = null) => {
    clearTimeout(myTimeOut);
    myTimeOut = setTimeout(() => func(para), delay);
  }, []);
  return debounce;
};

export const useNoInitialEffect = (fu, dependancies) => {
  const firstRender = useRef(true);
  useEffect(() => {
    firstRender.current ? (firstRender.current = false) : fu();
  }, dependancies);
};

export const useOutsideClick = (ref, func) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      func();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};
