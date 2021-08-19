import React from 'react';

const Header = () => {
  return (
    <div className='grid grid-cols-4 gap-4 text-white text-xl'>
      <div className='flex flex-col m2  pb-2'>
        <p className=''>logo bank</p>
        <h3 className='pt-1 font-semibold'>Banka APP</h3>
      </div>
      <div className='m2 pb-2 col-span-2'>
        <h2 className='pt-8 pb font-semibold text-2xl'>Name Bojan Mijatovic</h2>
      </div>
      <div className='m2 pb-2 flex items-center '>
        <h3 className='pt-8 pb font-semibold'>Login</h3>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 mt-8 ml-3'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
