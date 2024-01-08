import React from 'react';
import { leftNavTabs } from "../constants/leftNavConsts.js"
const LeftNav = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-[224px] flex flex-col justify-between flex-shrink-0 bg-[#1E2640] text-white py-[16px] px-[10px]'>
      <div>
        <div className='flex w-full items-center justify-around pb-[24px] '>
          <img src="./images/navTop.png" className='w-[39px] h-[39px] rounded-[4px] ' />

          <div>
            <div>Nishyan</div>
            <div className='text-[13px] underline leading-[16px] text-[#FFF]' >Visit Store</div>
          </div>
          <img src='./images/dropdown.svg' />

        </div>
        {
          leftNavTabs.map(tab => (
            <div className={`cursor-pointer rounded-[4px] py-[12px] px-[16px] w-full flex text-white  ${tab.tabName === "Payments" ? "rounded-[4px] bg-white bg-opacity-10" : " opacity-[0.8]"} hover:rounded-[4px] hover:bg-white hover:bg-opacity-10`} key={tab.tabName}>
              <img src={`./images/leftNavImages/${tab.tabImage}.svg`} className='w-[20px] h-[20px] ml-[5px] mr-[12px]' />
              <div className={`text-[14px] text-[#fff] font-medium`}>
                {tab.tabName}
              </div>
            </div>

          ))
        }
      </div >
      <div className='flex items-center justify-around px-[12px] py-[6px] w-full rounded-[4px] bg-white bg-opacity-10'>
        <img src='./images/leftNavImages/wallet.svg' />
        <div className='text-[13px] leading-[16px]'>
          <div>Available Credits</div>
          <div>222.10</div>
        </div>
      </div>
    </div>
  );
}

export default LeftNav;
