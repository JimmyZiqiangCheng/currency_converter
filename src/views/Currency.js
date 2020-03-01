import React, {useEffect, useState} from 'react';
import CurrencyRow from '../components/CurrencyRow';
import { useAuth0 } from "../react-auth0-spa";
import Loading from "../components/Loading";

const BASE_URL = 'https://api.exchangeratesapi.io/latest';

const Currency = () => {

  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [IsFromCurrencyChange, SetIsFromCurrencyChange] = useState(true);

  let toAmount, fromAmount;
  if (IsFromCurrencyChange){
    fromAmount = amount
    toAmount = amount*exchangeRate
  }else{
    toAmount = amount
    fromAmount = amount/exchangeRate
  }

  // useEffect hook replaces lifecycle methods such as component will mount
  // empty array as second element to ensure it runs only once on launch
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency])
      })
  },[]);

  // second useEffect to update exchange rate
  useEffect(() => {
    if (fromCurrency !=null && toCurrency !=null){
      if (fromCurrency === toCurrency){
        setExchangeRate(1);
        return; 
      }
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  },[fromCurrency, toCurrency]);

  const handleFromAmountChange = event => {
    setAmount(event.target.value);
    SetIsFromCurrencyChange(true);
  }

  const handleToAmountChange = event => {
    setAmount(event.target.value);
    SetIsFromCurrencyChange(false);
  }

  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <Loading/>;
  }

  return (
    <>
      <h1 className="title">JimmyCheng's Currency Converter</h1>
      <div className="devider">from: </div>
      <CurrencyRow 
        currencyOptions = {currencyOptions}
        selectedCurrency = {fromCurrency}
        onChangeAmount = {handleFromAmountChange}
        onChangeCurrency = {event => setFromCurrency(event.target.value)}
        amount = {fromAmount}
      />
      <br/>
      <div className="devider">to:</div>
      <CurrencyRow 
        currencyOptions = {currencyOptions}
        selectedCurrency = {toCurrency}
        onChangeAmount = {handleToAmountChange}
        onChangeCurrency = {event => setToCurrency(event.target.value)}
        amount = {toAmount}
      />
    </>
  )
}

export default Currency