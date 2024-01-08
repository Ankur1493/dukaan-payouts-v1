import React from 'react'
import InfoBox from '../components/InfoBox'
import TransactionsInfo from '../components/TransactionsInfo'

const PaymentOverview = () => {
  return (
    <div className='ml-[208px] w-[calc(100vw-[208px])] h-[calc(100vh-[50px])]' >
      <div>Overview</div>
      <div className='flex'>
        <InfoBox heading="Online Orders" value="231" />
        <InfoBox heading="Amount Received" value="₹23,93,312.19" />
      </div>
      <div>Transactions | This Month</div>
      <TransactionsInfo />
    </div>

  )
}

export default PaymentOverview
