
import React from 'react';
import { transactionsConsts } from '../constants/transactionConsts';

const TransactionsInfo = () => {
  return (
    <div>
      <h2>Transaction Information</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Order Date</th>
            <th>Order Amount</th>
            <th>Fees</th>
          </tr>
        </thead>
        <tbody>
          {transactionsConsts.map((trans, index) => (
            <tr key={index}>
              <td>{trans.orderId}</td>
              <td>{trans.orderDate}</td>
              <td>{trans.orderAmount}</td>
              <td>{trans.fees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsInfo;

