function App() {
  return (
    <div className='container  mx-auto text-center max-w-6xl bg-gradient-to-r from-yellow-500  to-yellow-600'>
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
      {/* start nav bar */}
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
      {/* end off  nav bar */}
      {/* start container icons */}
      <div className='flex flex-row pr-6 mt-5 ml-14'>
        <div className='text-2xl text-gray-900 bg-yellow-50 mx-6 m-4 text-center p-2 rounded-md flex flex-row'>
          <div className='flex content-start items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 mt-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
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
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 mt-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
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
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 mt-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
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
      {/* start container icons */}

      {/* start show accounts info */}

      <div className='grid grid-cols-4 gap-4 bg-yellow-50 text-gray-700 pt-10 pb-10 mt-5'>
        <div className=''>
          <h2 className='text-2xl font-semibold'>Account Type</h2>
        </div>
        <div className=''>
          <h2 className='text-2xl font-semibold'>Currency</h2>
        </div>
        <div className=''>
          <h2 className='text-2xl font-semibold'>Balance</h2>
        </div>
        <div className=''>
          <h2 className='text-2xl font-semibold'>Amount to spend</h2>
        </div>
        <div className='font-semibold'>
          <h3 className='text-xl'>5800100845754</h3>
          <p>160580010084575494</p>
        </div>
        <div className='font-semibold'>
          <h3 className='text-xl'>EUR</h3>
        </div>
        <div className='font-semibold'>
          <h3 className='text-xl'>4720</h3>
        </div>
        <div className='font-semibold'>
          <h3 className='text-xl'>4000</h3>
        </div>
        <div className='font-semibold'>
          <h3 className='text-xl'>Internet</h3>
          <p>160580010084575494</p>
        </div>
        <div className='font-semibold'>
          <h3 className='text-xl'>EUR</h3>
        </div>
        <div className='font-semibold'>
          <h3 className='text-xl'>320</h3>
        </div>
        <div className='font-semibold'>
          <h3 className='text-xl'>320</h3>
        </div>
      </div>
      {/* end show accounts info */}
      {/* start show cards info */}
      <div className='grid grid-cols-3 gap-4 bg-gray-200  text-gray-700 pt-10 pb-10'>
        <div className='text-gray-900 bg-yellow-50 m-1 h-auto rounded-md'>
          <div className='flex flex-col  mt-32 mb-5 items-center'>
            <h2 className='text-3xl font-semibold'>wave2pay</h2>
            <p className='text-lg px-12 py-6 my-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, iusto modi consequatur dolor illum iste?
            </p>
            <button className=' bg-yellow-600 text-yellow-50 w-40 text-xl font-bold rounded-md py-3  hover:bg-yellow-500  hover:text-gray-900'>
              find more
            </button>
          </div>
        </div>
        <div className='text-gray-900 bg-yellow-50 m-1 h-auto rounded-md'>
          <div className='flex flex-col  mt-32 mb-5 items-center'>
            <h2 className='text-3xl font-semibold'>wave2pay</h2>
            <p className='text-lg px-12 py-6 my-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, iusto modi consequatur dolor illum iste?
            </p>
            <button className=' bg-yellow-600 text-yellow-50 w-40 text-xl font-bold rounded-md py-3  hover:bg-yellow-500  hover:text-gray-900'>
              find more
            </button>
          </div>
        </div>

        <div className='text-gray-900 bg-yellow-50 m-1 h-auto rounded-md'>
          <div className='flex flex-col  mt-32 mb-5 items-center'>
            <h2 className='text-3xl font-semibold'>wave2pay</h2>
            <p className='text-lg px-12 py-6 my-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, iusto modi consequatur dolor illum iste?
            </p>
            <button className=' bg-yellow-600 text-yellow-50 w-40 text-xl font-bold rounded-md py-3  hover:bg-yellow-500  hover:text-gray-900'>
              find more
            </button>
          </div>
        </div>
      </div>
      {/* end show cards info */}
    </div>
  );
}

export default App;
