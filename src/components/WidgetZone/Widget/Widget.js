import React from 'react';

const Widget = ({ name, description, buttonName }) => {
  return (
    <div className='text-gray-900 bg-yellow-50 m-1 h-auto rounded-md'>
      <div className='flex flex-col  mt-32 mb-5 items-center'>
        <h2 className='text-3xl font-semibold'>{name}</h2>
        <p className='text-lg px-12 py-6 my-4'>{description}</p>
        <button className=' bg-yellow-600 text-yellow-50 w-40 text-xl font-bold rounded-md py-3  hover:bg-yellow-500  hover:text-gray-900'>
          {buttonName}
        </button>
      </div>
    </div>
  );
};
export default Widget;
