import React from 'react';

const Navbar = () => {
  return (
    <div className='grid grid-cols-4 gap-10 p-2 text-center text-is-justify-content-center text-2xl text-white bg-gray-800'>
      <div className='flex flex-row justify-center items-center'>
        <h2 className='px-2'>Home</h2>
        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 mt-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
          />
        </svg>
      </div>
      <div>
        <h2>Products</h2>
      </div>
      <div>
        <h2>Transactions</h2>
      </div>
      <div>
        <h2>News</h2>
      </div>
    </div>
  );
};

export default Navbar;
