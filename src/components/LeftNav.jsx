import React from 'react';
import { leftNavTabs } from "../constants/leftNavConsts.js"
const LeftNav = () => {
  return (
    <div className='fixed top-0 left-0 h-full w-[208px] flex-col flex-shrink-0 bg-[#1E2640] text-white py-[16px] px-[10px]'>
      <div className='flex w-full items-center justify-around pb-[16px] '>
        <img src="./images/navTop.png" className='w-[39px] h-[39px] rounded-[4px] ' />

        <div>
          <div>Nishyan</div>
          <div>Visit Store</div>
        </div>
        <img src='./images/dropdown.svg' />

      </div>
      {
        leftNavTabs.map(tab => (
          <div className={`cursor-pointer rounded-[4px] py-[8px] px-[16px] w-full flex text-white  ${tab.tabName === "Payments" ? "rounded-[4px] bg-white bg-opacity-10" : ""}`} key={tab.tabName}>
            <img src='./images/leftNavImages/home.png' className='w-[20px] h-[20px] ml-[5px] mr-[12px]' />
            <div className={`text-[14px] text-[#fff]`}>
              {tab.tabName}
            </div>
          </div>

        ))
      }
    </div >
  );
}

export default LeftNav;
