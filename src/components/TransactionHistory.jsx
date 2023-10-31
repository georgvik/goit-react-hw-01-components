import transactions from './transactions.json';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
return (
<table className={css.transactionhistory}>
<thead>
    <tr className={css.tableHistoryTitle}> 
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  {transactions.map(item => {
    return (
<tbody >

    <tr key={item.id}>
      <td className={css.type}>{item.type}</td>
      <td className={css.amount}>{item.amount}</td>
      <td className={css.amount}>{item.currency}</td>
    </tr>   
    </tbody>
    )
  })}
  
</table>
);


};

export default TransactionHistory;