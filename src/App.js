import React, {useEffect, useState} from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'https://api.exchangeratesapi.io/latest';

function App() {
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

  function handleFromAmountChange(event) {
    setAmount(event.target.value);
    SetIsFromCurrencyChange(true);
  }

  function handleToAmountChange(event) {
    setAmount(event.target.value);
    SetIsFromCurrencyChange(false);
  }


  return (
    <div>
      <h1>JimmyCheng's Currency Converter</h1>
      <div class="devider">from: </div>
      <CurrencyRow 
        currencyOptions = {currencyOptions}
        selectedCurrency = {fromCurrency}
        onChangeAmount = {handleFromAmountChange}
        onChangeCurrency = {event => setFromCurrency(event.target.value)}
        amount = {fromAmount}
      />
      <br/>
      <div class="devider">to:</div>
      <CurrencyRow 
        currencyOptions = {currencyOptions}
        selectedCurrency = {toCurrency}
        onChangeAmount = {handleToAmountChange}
        onChangeCurrency = {event => setToCurrency(event.target.value)}
        amount = {toAmount}
      />
    </div>
  );
}

export default App
