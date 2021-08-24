import React from 'react';
import LogIn from '../../components/LogIn/LogIn';
import SignUp from '../../components/SignUp/SignUp';
const LogInAndOut = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <LogIn />
      <SignUp />
    </div>
  );
};

export default LogInAndOut;
