import Header from './components/Header';
import Options from './components/Options';
import WhaleContainer from './components/WhaleContainer';
import { EuiFlexGroup } from '@elastic/eui';
import './reset.scss';
import '@elastic/eui/dist/eui_theme_amsterdam_light.css';
import './styles.scss';

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
