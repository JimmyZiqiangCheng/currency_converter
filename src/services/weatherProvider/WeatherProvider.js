import React, { useState } from "react";

export const WeatherContext = React.createContext();
function WeatherProvider({ children }) {
  const [weather, setWeather] = useState(null);

  return (
    <WeatherContext.Provider
      value={{
        weather,
        setWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherProvider;
