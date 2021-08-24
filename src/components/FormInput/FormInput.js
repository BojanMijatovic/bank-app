import React from 'react';

const FormInput = ({ handleChange, label, ...OtherProps }) => {
  return (
    <div className='grid   grid-cols-2 gap-2'>
      <input className='m-2' onChange={handleChange} {...OtherProps} />
      {label ? <label className='m-2'>{label}</label> : null}
    </div>
  );
};

export default FormInput;
