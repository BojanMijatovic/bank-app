import React from 'react';

const TabItems = () => {
  return (
    <div className='flex flex-row pr-6 mt-5 ml-14'>
      <div className='text-2xl text-gray-900 bg-yellow-50 mx-6 m-4 text-center p-2 rounded-md flex flex-row'>
        <div className='flex content-start items-center'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 mt-2' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
            />
          </svg>
          <p className='px-1 font-semibold'>accounts</p>
        </div>
      </div>
      <div className='text-2xl text-gray-900 bg-yellow-50 mx-6 m-4 text-center p-2 rounded-md'>
        <div className='flex content-start items-center'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 mt-2' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
            />
          </svg>
          <p className='px-1 font-semibold'>cards</p>
        </div>
      </div>
      <div className='text-2xl text-gray-900 bg-yellow-50 mx-6 m-4 text-center p-2 rounded-md'>
        <div className='flex content-start items-center'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 mt-2' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <p className='px-1 font-semibold'>loans</p>
        </div>
      </div>
    </div>
  );
};

export default TabItems;
