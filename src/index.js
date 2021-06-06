import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WhaleProvider from './context/WhaleProvider';

ReactDOM.render(
  <React.StrictMode>
    <WhaleProvider>
      <App />
    </WhaleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
