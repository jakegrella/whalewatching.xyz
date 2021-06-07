import Header from './components/Header';
import Options from './components/Options';
import WhaleContainer from './components/WhaleContainer';
import { EuiFlexGroup } from '@elastic/eui';
import './style.scss';

function App() {
  return (
    <EuiFlexGroup direction='column' className='app'>
      <Header />
      <Options />
      <WhaleContainer />
    </EuiFlexGroup>
  );
}

export default App;
