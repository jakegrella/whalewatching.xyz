import { useContext } from 'react';
import { EuiFlexItem, EuiRange } from '@elastic/eui';
import { htmlIdGenerator } from '@elastic/eui/lib/services';
import WhaleContext from '../context/WhaleContext';

const MinValSlider = () => {
  const [Whales, setWhales] = useContext(WhaleContext);

  const handleMinTransactionValChange = (e) => {
    setWhales((prevData) => {
      return {
        ...prevData,
        minTransactionVal: e.target.value
      };
    });
  };

  return (
    <EuiFlexItem grow={5}>
      <EuiRange
        id={htmlIdGenerator()()}
        step={500000}
        min={500000}
        max={50000000}
        value={Whales.minTransactionVal}
        onChange={(val) => handleMinTransactionValChange(val)}
        showLabels
        showValue
        showRange
      />
    </EuiFlexItem>
  );
};

export default MinValSlider;
