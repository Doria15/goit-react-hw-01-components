import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.transactionHead}>
        <tr className={css.transactionRowHead}>
          <th className={css.transactionHeadLabel}>Type</th>
          <th className={css.transactionHeadLabel}>Amount</th>
          <th className={css.transactionHeadLabel}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.transactionBody}>
        {items.map(item => (
          <tr key={item.id} className={css.transactionRow}>
            <td className={css.transactionRowData}>{item.type}</td>
            <td className={css.transactionRowData}>{item.amount}</td>
            <td className={css.transactionRowData}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
