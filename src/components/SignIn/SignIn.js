import React from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onChangeInput = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  onSubmitForm = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className='flex flex-col mt-5 mb-3 items-center justify-center '>
        <h2>I already have account</h2>
        <span>Sign In with your email and password</span>
        <form onSubmit={this.onSubmitForm} className='flex flex-col items-center my-3'>
          <FormInput
            type='email'
            name='email'
            placeholder='Email'
            value={this.state.email}
            handleChange={this.onChangeInput}
            required
            label='email'
          />
          <FormInput
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            handleChange={this.onChangeInput}
            required
            label='password'
          />
          <div className='mt-3 flex items-center'>
            <CustomButton type='submit'>sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle}>sign with google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
