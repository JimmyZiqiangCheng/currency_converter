import React from 'react';

const CurrencyRow = props => {
  const {
    currencyOptions:options,
    selectedCurrency:selected,
    onChangeAmount,
    onChangeCurrency,
    amount
  } = props
  
  return (
    <div>
      <input id='amountInput' type='number' placeholder='0.00' value={amount} onChange={onChangeAmount}/>
      <select id='currencySelect' value={selected} onChange={onChangeCurrency}>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyRow