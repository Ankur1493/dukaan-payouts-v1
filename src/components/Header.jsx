
import React from 'react';

const Header = () => {
  return (
    <div className="w-[calc(100vw-208px)] bg-white flex justify-between h-[50px]  ml-[208px] px-[12px] py-[32px]">
      <div className='flex'>
        <div>Payments</div>
        <div>How it Works</div>
      </div>
      <div>
        <input type="text" placeholder="Search features, tutorials, etc." />
      </div>
      <div className='flex'>
        <img src='./images/leftNavImages/home.png' className='w-8 h-8' />
        <img src='./images/leftNavImages/home.png' className='w-8 h-8' />
      </div>
    </div>
  );
}

export default Header;

