import React from 'react';

const AccountList = () => {
  return (
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
  );
};

export default AccountList;
