
import React from 'react';

const Pagination = ({ totalPages }) => {
  return (
    <div className='text-center flex'>
      <button className='border-[1px] w-[60px] h-[25px] rounded border-cyan-950  hover:bg-cyan-100 duration-500' >←</button>
      <div className='w-[350p]'>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button key={page} className={`h-[25px] w-[20px] mx-[6px] rounded-[3px] text-[16px] ${page === 2 ? "bg-blue-500 text-white" : ""}`}>
            {page}
          </button>
        ))}
      </div>
      <button className='border-[1px] w-[60px] h-[25px] rounded border-cyan-950 hover:bg-cyan-100 duration-500'>→</button>
    </div>
  );
};

export default Pagination;
