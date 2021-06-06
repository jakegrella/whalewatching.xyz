import { useState } from 'react';
import WhaleContext from './WhaleContext';

const WhaleProvider = (props) => {
  const initialState = {
    currency: 'all',
    minTransactionVal: '500000'
  };

  const [Whales, setWhales] = useState(initialState);

  return (
    <WhaleContext.Provider value={[Whales, setWhales]}>
      {props.children}
    </WhaleContext.Provider>
  );
};

export default WhaleProvider;
