import { Transaction } from './Transaction/Transaction.jsx';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(el => {
          return (
            <Transaction
              key={el.id}
              type={el.type}
              amount={el.amount}
              currency={el.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.array,
};
