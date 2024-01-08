import React from 'react'
import InfoBox from '../components/InfoBox'
import TransactionsInfo from '../components/TransactionsInfo'

const PaymentOverview = () => {
  return (
    <div className='ml-[224px] px-[30px] w-[calc(100vw-[238px])] h-[calc(100vh-[50px])]' >
      <div className='flex justify-between w-full my-[25px] cursor-pointer'>
        <div className='text-[24px]'>Overview</div>
        <div className='flex w-[137px] h-[36px] justify-around items-center border-[1px] border-cyan-300 rounded-[6px]'>
          <div>Last Month</div>
          <img src='./images/menu.svg' className='h-[20px] w-[20px]' />
        </div>
      </div>
      <div className='flex w-full justify-around'>
        <InfoBox heading="Online Orders" value="231" />
        <InfoBox heading="Amount Received" value="₹23,93,312.19" />
      </div>
      <div className='text-[28px] my-[20px]'>Transactions | This Month</div>
      <TransactionsInfo />

    </div>

  )
}

export default PaymentOverview
