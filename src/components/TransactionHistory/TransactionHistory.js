import styles from '../TransactionHistory/TransactionHistory.module.css';

function TransactionHistory(props) { 
  const transactions = props.transactions;
  const view = transactions.map(transaction => (
    <tr
    key={transaction.id}>
        <td>{transaction.type}</td> 
        <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </tr>
));
return (
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr className={styles.names}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{view}</tbody>
    </table>
  );
}

export default TransactionHistory
