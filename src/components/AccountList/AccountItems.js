import React from 'react';

const AccountItems = ({ account }) => {
  return (
    <React.Fragment>
      <div className='font-semibold'>
        <h3 className='text-xl'>{account.name}</h3>
        <p className='text-lg'>{account.id}</p>
      </div>
      <div className='font-semibold'>
        <h3 className='text-xl'>{account.currency}</h3>
      </div>
      <div className='font-semibold'>
        <h3 className='text-xl'>{account.balance}</h3>
      </div>
      <div className='font-semibold'>
        <h3 className='text-xl'>{account.available}</h3>
      </div>
    </React.Fragment>
  );
};

export default AccountItems;
