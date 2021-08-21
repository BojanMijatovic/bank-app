import React from 'react';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onChangeInput = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    return (
      <div className=''>
        <h2>I already have account</h2>
        <span>Sign In with your email and password</span>

        <form onSubmit={this.onSubmitForm}>
          <input type='email' name='email' placeholder='Email' value={this.state.email} onChange={this.onChangeInput} required />
          <label>Email</label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.onChangeInput}
            required
          />
          <label>Password</label>
          <input type='submit' value='submit form' />
        </form>
      </div>
    );
  }
}

export default LogIn;
