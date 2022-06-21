/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
function TransactionHistory(props) { 
  const transactions = props.transactions;
  const view = transactions.map(transaction => (
    <tr css={css`
      background-color: rgb(211, 230, 235);
      :nth-of-type(odd): background-color: white;
    `}
    key={transaction.id}>
        <td css={css`
        text-transform: capitalize;
        padding: 10px;
        padding-left: 130px;
        text-align: left`}>
      {transaction.type}</td> 
        <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </tr>
));
return (
    <table css={css`
        margin-left: auto;
        margin-right: auto;
        box-shadow: -1px, 3px, 20px, -11px, rgba(66, 68, 90, 1);
        border-radius: 10px;`}>
      <thead>
        <tr css={css`
          text-transform: uppercase;
          font-size: 15px;
          background-color: rgb(3, 206, 252);
          color: white;`}>
          <th css={css`
            width: 30px;
           padding-top: 20px;
            padding-bottom: 20px;`}>Type</th>
          <th css={css`
            width: 30px;
           padding-top: 20px;
            padding-bottom: 20px;`}>Amount</th>
          <th css={css`
            width: 30px;
           padding-top: 20px;
            padding-bottom: 20px;`}>Currency</th>
        </tr>
      </thead>
      <tbody>{view}</tbody>
    </table>
  );
}

export default TransactionHistory
