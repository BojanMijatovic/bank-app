import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='grid grid-cols-4 gap-10 p-2 text-center text-is-justify-content-center text-2xl text-white bg-gray-800'>
      <Link to='/'>
        <h2 className='px-2'>Home</h2>
      </Link>
      <Link to='/products'>
        <h2>Products</h2>
      </Link>
      <Link to='/transactions'>
        <h2>Transactions</h2>
      </Link>
      <Link to='/news'>
        <h2>News</h2>
      </Link>
    </div>
  );
};

export default Header;
