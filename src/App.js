import Header from './components/Header';
import Options from './components/Options';
import WhaleContainer from './components/WhaleContainer';
import { EuiFlexGroup } from '@elastic/eui';

function App() {
  return (
    <EuiFlexGroup alignItems='center' direction='column' className='app'>
      <Header />
      <Options />
      <WhaleContainer />
    </EuiFlexGroup>
  );
}

export default App;
