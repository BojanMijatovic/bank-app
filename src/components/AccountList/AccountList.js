import React from 'react';
import AccountItems from './AccountItems';

const AccountList = ({ accounts }) => {
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
      {accounts.map((account) => {
        return <AccountItems account={account} key={account.id} />;
      })}
    </div>
  );
};

export default AccountList;
