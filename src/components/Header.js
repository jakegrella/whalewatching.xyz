import { EuiFlexItem, EuiText } from '@elastic/eui';

const Header = () => {
  return (
    <EuiFlexItem>
      <header>
        <EuiText>
          <h1>🐋 whalewatching.xyz</h1>
          <h3>view the largest blockchain transactions from the past hour</h3>
          <p>
            In the crypto space, an account that holds a large amount of bitcoin
            or other cryptocurrency is known as a whale. This app allows a user
            to view blockchain whale account transactions that exceed $500,000.
            This is possible because the transaction details of the listed
            cryptocurrencies are publicly available.
          </p>
          <p>
            Data is being referenced through the{' '}
            <a href='http://whale-alert.io' target='_blank' rel='noreferrer'>
              whale-alert.io
            </a>{' '}
            API.
          </p>
          <p>I call it "whale watching".</p>
        </EuiText>
      </header>
    </EuiFlexItem>
  );
};

export default Header;
