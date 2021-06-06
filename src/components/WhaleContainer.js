import { useContext } from 'react';
import WhaleContext from '../context/WhaleContext';
import TransactionCard from './TransactionCard';
import { EuiFlexItem } from '@elastic/eui';

const WhaleContainer = () => {
  const [Whales] = useContext(WhaleContext);

  if (Whales.transactions !== undefined) {
    return Whales.transactions.map((t) => (
      <EuiFlexItem key={t.id}>
        <TransactionCard key={t.id} transaction={t} />
      </EuiFlexItem>
    ));
  }
  return <span>😬 no results</span>;
};

export default WhaleContainer;
