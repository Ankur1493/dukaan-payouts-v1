import React from 'react'

const InfoBox = ({ heading, value }) => {
  return (
    <div className='lg:w-[770px] w-full h-[120px] bg-white lg:pt-[19px] lg:pl-[28px] lg:block  flex flex-col justify-center items-center rounded-[10px] shadow my-[10px] lg:my-0 '>
      <div className='text-gray-800 text-[18px]'>{heading}</div>
      <div className='text-[32px] font-medium'>{value}</div>
    </div>
  )
}

export default InfoBox
