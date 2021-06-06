import { EuiFlexItem, EuiFlexGroup } from '@elastic/eui';
import CurrencySelect from './CurrencySelect';
import MinValSlider from './MinValSlider';
import SubmitBtn from './submitBtn';

const Options = () => {
  return (
    <EuiFlexItem>
      <EuiFlexGroup alignItems='center'>
        <CurrencySelect />
        <MinValSlider />
        <SubmitBtn />
      </EuiFlexGroup>
    </EuiFlexItem>
  );
};

export default Options;
