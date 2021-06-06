import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WhaleProvider from './context/WhaleProvider';
import '@elastic/eui/dist/eui_theme_amsterdam_light.css';

ReactDOM.render(
  <React.StrictMode>
    <WhaleProvider>
      <App />
    </WhaleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
