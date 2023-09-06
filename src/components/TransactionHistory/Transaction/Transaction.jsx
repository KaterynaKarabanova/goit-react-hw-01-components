import PropTypes from 'prop-types';
export const Transaction = ({ id, type, amount, currency }) => {
  return (
    <tr id={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
Transaction.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
