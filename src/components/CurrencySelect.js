import { useContext } from 'react';
import { EuiSuperSelect, EuiIcon } from '@elastic/eui';
import { currencies } from '../currencies';
import WhaleContext from '../context/WhaleContext';

const CurrencySelect = () => {
  const [Whales, setWhales] = useContext(WhaleContext);

  const currencyOptions = currencies.map((currency) => ({
    value: currency.symbol,
    inputDisplay: (
      <>
        <EuiIcon type={currency.iconUrl} />
        <span>{currency.name}</span>
      </>
    )
  }));

  const handleCurrencyChange = (currency) => {
    setWhales((prevData) => {
      return {
        ...prevData,
        currency: currency
      };
    });
  };

  return (
    <EuiSuperSelect
      className=''
      options={currencyOptions}
      valueOfSelected={Whales.currency}
      onChange={(val) => handleCurrencyChange(val)}
    />
  );
};

export default CurrencySelect;
