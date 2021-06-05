import { useState } from 'react';
import { currencies } from './currencies';
import { EuiSuperSelect, EuiRange, EuiButton, EuiIcon } from '@elastic/eui';
import { htmlIdGenerator } from '@elastic/eui/lib/services';
import '@elastic/eui/dist/eui_theme_amsterdam_light.css';

function App() {
  const currencyOptions = currencies.map((currency) => ({
    value: currency.symbol,
    inputDisplay: (
      <div>
        <EuiIcon type={currency.iconUrl} />
        <span>{currency.name}</span>
      </div>
    )
  }));

  const [currencyVal, setCurrencyVal] = useState(currencyOptions[0].value);
  const [minTransactionVal, setMinTransactionVal] = useState('500000');

  const handleCurrencyChange = (currency) => {
    setCurrencyVal(currency);
  };

  const handleMinTransactionValChange = (e) => {
    setMinTransactionVal(e.target.value);
  };

  const handleWhaleWatching = () => {};

  return (
    <div className='App'>
      <h1>whalewatching.xyz</h1>
      <EuiSuperSelect
        options={currencyOptions}
        valueOfSelected={currencyVal}
        onChange={(val) => handleCurrencyChange(val)}
      />
      <EuiRange
        id={htmlIdGenerator()()}
        step={500000}
        min={500000}
        max={50000000}
        value={minTransactionVal}
        onChange={(val) => handleMinTransactionValChange(val)}
        showLabels
        showValue
        showRange
        // showTicks
        // tickInterval={5000000}
      />
      <EuiButton onClick={handleWhaleWatching}>go whale watching</EuiButton>
    </div>
  );
}

export default App;
