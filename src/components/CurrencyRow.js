import React from 'react';

export default function CurrencyRow(props) {
  const {
    currencyOptions:options,
    selectedCurrency:selected,
    onChangeAmount,
    onChangeCurrency,
    amount
  } = props
  
  return (
    <div>
      <input className='input' type='number' placeholder='0.00' value={amount} onChange={onChangeAmount}/>
      <select className='select' value={selected} onChange={onChangeCurrency}>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}