import { useContext } from 'react';
import { EuiButton } from '@elastic/eui';
import axios from 'axios';
import WhaleContext from '../context/WhaleContext';

const SubmitBtn = () => {
  const [Whales] = useContext(WhaleContext);

  const handleWhaleWatching = () => {
    axios
      .get(
        `http://127.0.0.1:5001/${Whales.currency}/${Whales.minTransactionVal}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <EuiButton onClick={handleWhaleWatching}>go whale watching</EuiButton>;
};

export default SubmitBtn;
