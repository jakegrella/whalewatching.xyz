import { EuiCard, EuiButton } from '@elastic/eui';

const TransactionCard = (props) => {
  const { transaction } = props;
  return (
    <EuiCard title={`${transaction.hash.substr(0, 20)}...`}>
      <p>
        {transaction.amount} {transaction.symbol}
      </p>
      <p>${transaction.amount_usd} USD</p>
      <p>
        From:{' '}
        <a
          href={`https://www.blockchain.com/${transaction.symbol}/address/${transaction.from.address}`}
          target='_blank'
          rel='noreferrer'>
          {transaction.from.address.substr(0, 20)}...
        </a>{' '}
        ({transaction.from.owner_type} wallet)
      </p>
      <p>
        To:{' '}
        <a
          href={`https://www.blockchain.com/${transaction.symbol}/address/${transaction.to.address}`}
          target='_blank'
          rel='noreferrer'>
          {transaction.to.address.substr(0, 20)}...
        </a>{' '}
        ({transaction.to.owner_type} wallet)
      </p>
      <EuiButton
        href={`http://blockchain.com/${transaction.symbol}/tx/${transaction.hash}`}>
        more info
      </EuiButton>
    </EuiCard>
  );
};

export default TransactionCard;
