import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
const LogInAndOut = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default LogInAndOut;
