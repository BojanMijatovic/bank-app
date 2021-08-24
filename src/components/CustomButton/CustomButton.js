import React from 'react';

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className='m-2 px-2 bg-yellow-50 text-dark text-lg font-semibold' {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
