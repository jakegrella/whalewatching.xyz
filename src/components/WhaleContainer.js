import { useContext } from 'react';
import WhaleContext from '../context/WhaleContext';
import TransactionCard from './TransactionCard';

const WhaleContainer = () => {
  const [Whales] = useContext(WhaleContext);

  if (Whales.transactions !== undefined) {
    return Whales.transactions.map((t) => (
      <TransactionCard key={t.id} transaction={t} />
    ));
  }
  return <span>😬 no results</span>;
};

export default WhaleContainer;
