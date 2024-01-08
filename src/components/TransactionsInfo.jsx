import React from 'react';
import { transactionsConsts } from '../constants/transactionConsts';
import Pagination from './Pagination';

const TransactionsInfo = () => {
  return (
    <div className='bg-white rounded-[10px] px-[10px] py-[8px] shadow-md'>

      <div className='flex justify-between pb-[10px]'>
        <div className='bg-[#FFFFFF] py-[9px] px-[16px] flex items-center w-[250px] border-[1px] border-cyan-500 rounded-[4px]'>
          <img src='./images/search.svg' className='h-[16px] w-[16px] mr-[9px]' />
          <input type="text" placeholder="Search order by ID..." className='bg-[#FFFFFF] w-full h-full outline-none  border-none' />
        </div>
        <div className='mr-[20px] flex'>
          <div className='flex mx-4 text-[#4D4D4D] cursor-pointer border-[1px] w-[90px] justify-center h-[38px] border-[#D9D9D9] p-[6px] rounded-[4px] '>
            <div>Sort</div>
            <img src='./images/sort.svg' className='w-[20px] h-[20px] mx-2' />
          </div>
          <img src='./images/download.svg' className='w-[40px] border-[1px] justify-center h-[38px] border-[#D9D9D9] p-[6px] rounded-[4px] cursor-pointer' />
        </div>
      </div>
      <div className='h-[500px]'>
        <table className='w-full h-[480px] border-collapse border-none'>
          <thead>
            <tr className='bg-[#F2F2F2] p-[10px] border-none'>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Order Amount</th>
              <th>Fees</th>
            </tr>
          </thead>
          <tbody className='text-center border-none'>
            {transactionsConsts.map((trans, index) => (
              <tr key={index} className='border-b-cyan-100 border-[0.6px]'>
                <td className='text-blue-600' >{trans.orderId}</td>
                <td>{trans.orderDate}</td>
                <td>{trans.orderAmount}</td>
                <td>{trans.fees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex justify-center items-center w-full'>
        <Pagination totalPages={8} />
      </div>
    </div>
  );
}

export default TransactionsInfo;
