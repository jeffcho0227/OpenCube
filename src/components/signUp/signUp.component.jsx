import React from 'react';

import Button from '../UI/Button/Button.component.jsx';
import FormInput from '../form-input/form-Input.jsx';
import style from './signUp.module.scss';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils.js';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert(`passwords don't match`);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.error(error);
    }

  }


  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className={style.signUp}>
        <h2 className={style.title}>I do not have an account</h2>
        <span>Sign up with email</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleInputChange}
            label='Display Name'
            required/>

          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleInputChange}
            label='email'
            required />

          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleInputChange}
            label='password'
            required />

          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleInputChange}
            label='Confirm Password'
            required />
            <Button type='submit'> SIGN UP</Button>
        </form>
      </div>
    )
  }
};

export default SignUp;