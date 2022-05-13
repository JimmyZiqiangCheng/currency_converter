import axios from "axios";
const WEATHER_URL = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=`;
const AUTOCOMPLETE_URL = `http://api.weatherapi.com/v1/search.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=`;

export const getLocations = async (location) => {
  try {
    const response = await axios.get(`${AUTOCOMPLETE_URL}${location}`);
    const locations = await response.data;
    console.log(locations);
    return locations;
  } catch (err) {
    console.error(err.message);
  }
};

export const getWeather = async (location_url) => {
  try {
    const response = await axios.get(
      `${WEATHER_URL}${location_url}&days=1&aqi=no&alerts=no`
    );
    const weather = await response.data;
    return weather;
  } catch (err) {
    console.error(err.message);
  }
};
