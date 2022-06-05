import axios from "axios";

const CRYPTO_URL = `http://api.coinlayer.com/api/live?access_key=${process.env.REACT_APP_CRYPTO_API_KEY}`;

export const getCryptos = async () => {
  const SYMBOLS = "BTC,ETH,XRP,ADA,USDT,DOGE,XMR,BCH,EOS,LTC";
  const url = `${CRYPTO_URL}&symbols=${SYMBOLS}`;
  try {
    const response = await axios.get(url);
    const data = await response.data;
    const rates = data.rates;
    return rates;
  } catch (err) {
    console.error(err.message);
  }
};
