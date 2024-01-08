import React from 'react'

const InfoBox = ({ heading, value }) => {
  return (
    <div className='w-[770px] h-[120px] bg-white pt-[19px] pl-[28px] rounded-[10px] shadow'>
      <div className='text-gray-800 text-[18px]'>{heading}</div>
      <div className='text-[32px] font-medium'>{value}</div>
    </div>
  )
}

export default InfoBox
