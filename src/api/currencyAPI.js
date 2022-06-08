import axios from "axios";

const EXCHANGE_URL = "https://api.apilayer.com/currency_data/convert?";
const CHANGE_URL = "https://api.apilayer.com/currency_data/change?";

const config = {
  headers: {
    apikey: process.env.REACT_APP_CURRENCY_API_KEY,
  },
};

const currencies = "EUR,CAD,AUD,JPY,CNY,GBP";

export const getExchangeRates = async (date) => {
  try {
    const response = await axios.get(
      `${CHANGE_URL}start_date=${date}&end_date=${date}&currencies=${currencies}`,
      config
    );
    const data = await response.data.quotes;
    const rates = await Object.entries(data).map((entry) => ({
      currency: entry[0].slice(3, 6),
      rate: entry[1].end_rate,
    }));
    return rates;
  } catch (err) {
    console.error(err.message);
  }
};
export const convert = async (to, from, amount) => {
  try {
    const response1 = await axios.get(
      `${EXCHANGE_URL}to=${to}&from=${from}&amount=${amount}`,
      config
    );
    const result1 = await response1.data.result;
    const response2 = await axios.get(
      `${EXCHANGE_URL}to=${from}&from=${to}&amount=${amount}`,
      config
    );
    const result2 = await response2.data.result;
    return { result1: result1, result2: result2 };
  } catch (err) {
    console.error(err.message);
  }
};
