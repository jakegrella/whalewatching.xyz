import { useContext } from 'react';
import { EuiButton } from '@elastic/eui';
import axios from 'axios';
import WhaleContext from '../context/WhaleContext';

const SubmitBtn = () => {
  const [Whales, setWhales] = useContext(WhaleContext);

  const handleWhaleWatching = () => {
    axios
      .get(
        `https://whalewatching-xyz.herokuapp.com/${Whales.currency}/${Whales.minTransactionVal}`
      )
      .then((res) => {
        setWhales((prevData) => {
          return {
            ...prevData,
            transactionCount: res.data.count,
            transactions: res.data.transactions
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <EuiButton onClick={handleWhaleWatching}>go whale watching</EuiButton>;
};

export default SubmitBtn;
