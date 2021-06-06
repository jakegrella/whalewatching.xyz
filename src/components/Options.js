import { EuiFlexGroup } from '@elastic/eui';
import CurrencySelect from './CurrencySelect';
import MinValSlider from './MinValSlider';
import SubmitBtn from './submitBtn';

const Options = () => {
  return (
    <EuiFlexGroup alignItems='center'>
      <CurrencySelect />
      <MinValSlider />
      <SubmitBtn />
    </EuiFlexGroup>
  );
};

export default Options;
