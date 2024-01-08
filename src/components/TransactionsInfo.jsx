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
      <div className='lg:h-[500px] h-full'>
        <table className='w-full h-[480px] border-collapse border-none'>
          <thead>
            <tr className='bg-[#F2F2F2] p-[10px] border-none'>
              <th className='text-left pl-[20px]'>Order ID</th>
              <th className='text-left pl-[20px]'>Order Date</th>
              <th>Order Amount</th>
              <th className='text-right pr-[20px]'>Fees</th>
            </tr>
          </thead>
          <tbody className='text-center border-none'>
            {transactionsConsts.map((trans, index) => (
              <tr key={index} className='border-b-[#E6E6E6] border-[0.6px]'>
                <td className='text-blue-600 text-left pl-[20px]' >{trans.orderId}</td>
                <td className='text-left pl-[20px]'>{trans.orderDate}</td>
                <td>{trans.orderAmount}</td>
                <td className='text-right pr-[20px]' >{trans.fees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex justify-center items-center w-full'>
        <Pagination totalPages={6} />
      </div>
    </div>
  );
}

export default TransactionsInfo;
