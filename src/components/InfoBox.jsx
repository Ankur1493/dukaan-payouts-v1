import React from 'react'

const InfoBox = ({ heading, value }) => {
  return (
    <div>
      <div className='text-gray-800 text-[16px]'>{heading}</div>
      <div className='text-[32px] font-semibold'>{value}</div>
    </div>
  )
}

export default InfoBox
