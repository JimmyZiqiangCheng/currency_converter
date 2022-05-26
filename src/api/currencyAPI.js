import axios from "axios";

const EXCHANGE_URL = "https://api.apilayer.com/currency_data/convert?";

const config = {
  headers: {
    apikey: "8dCasBNXD3C0HdV3DuiEM3vTGh7LTDam",
  },
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
