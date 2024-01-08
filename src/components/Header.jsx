
import React from 'react';

const Header = () => {
  return (
    <div className="w-[calc(100vw-60px)] lg:w-[calc(100vw-224px)] bg-white flex items-center lg:justify-between justify-around h-[50px] ml-[60px] lg:ml-[224px] px-[5px] lg:pl-[35px] lg:pr-[45px] py-[32px]">
      <div className='flex'>
        <div className='text-[20px] font-normal'>Payouts</div>
        <div className='text-[14px] hidden lg:flex font-thin ml-[20px] justify-center cursor-pointer items-center'>
          <img src='./images/help.svg' className='h-[14px] w-[14px] mr-[5px]' />
          How it Works
        </div>

      </div>
      <div className='bg-[#F2F2F2] py-[9px] px-[16px] flex items-center w-[400px] rounded-[6px]'>
        <img src='./images/search.svg' className='h-[16px] w-[16px] mr-[9px]' />
        <input type="text" placeholder="Search features, tutorials, etc." className='bg-[#F2F2F2] w-full h-full outline-none  border-none' />
      </div>
      <div className='hidden lg:flex'>
        <div className='w-[40px] h-[40px] flex justify-center items-center rounded-[100px] bg-[#E6E6E6] cursor-pointer mr-[15px]'>
          <img src='./images/group.svg' />
        </div>
        <div className='w-[40px] h-[40px] flex justify-center items-center rounded-[100px] bg-[#E6E6E6] cursor-pointer'>
          <img src='./images/menu.svg' />
        </div>

      </div>
    </div>
  );
}

export default Header;

