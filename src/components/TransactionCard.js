import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiButton } from '@elastic/eui';

const TransactionCard = (props) => {
  const { transaction } = props;

  return (
    <EuiCard title={`${transaction.hash.substr(0, 20)}...`} textAlign='left'>
      <EuiFlexGroup alignItems='flexStart' justifyContent='flexStart'>
        <EuiFlexItem grow={2}>
          <p>
            Amount: {transaction.amount} {transaction.symbol.toUpperCase()}
          </p>
          <p>
            Amount (USD): $
            {new Intl.NumberFormat('en-US').format(transaction.amount_usd)}
          </p>
        </EuiFlexItem>
        <EuiFlexItem grow={4}>
          <p>
            From:{' '}
            <a
              href={`https://www.blockchain.com/${transaction.symbol}/address/${transaction.from.address}`}
              target='_blank'
              rel='noreferrer'>
              {transaction.from.address.substr(0, 20)}...
            </a>{' '}
            (
            {transaction.from.owner
              ? transaction.from.owner
              : transaction.from.owner_type}{' '}
            wallet)
          </p>
          <p>
            To:{' '}
            <a
              href={`https://www.blockchain.com/${transaction.symbol}/address/${transaction.to.address}`}
              target='_blank'
              rel='noreferrer'>
              {transaction.to.address.substr(0, 20)}...
            </a>{' '}
            (
            {transaction.to.owner
              ? transaction.to.owner
              : transaction.to.owner_type}{' '}
            wallet)
          </p>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiButton
            href={`http://blockchain.com/${transaction.symbol}/tx/${transaction.hash}`}>
            more info
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiCard>
  );
};

export default TransactionCard;
