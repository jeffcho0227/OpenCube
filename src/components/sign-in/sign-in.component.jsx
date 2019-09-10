import React from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';
import style from './sign-in.module.scss';
import FormInput from '../form-input/form-Input.jsx';
import Button from '../UI/Button/Button.component.jsx';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
          this.setState({
            email: '',
            password: ''
          })

    } catch (error) {
      console.error(error);
    }
  }

  handleInputChange = (e) => {
    let { name, value } = e.target;

    this.setState({
      [ name ]: value
    }, () => console.log(this.state))
  };

  render () {
    return (
      <div className={style.sign_in}>
        <h2 className={style.title}> I have an account </h2>
        <span>Sign in with your email</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            handleInputChange={this.handleInputChange} 
            name='email' 
            type='email'
            value={this.state.email} 
            label='Email'
            required/>

          <FormInput 
            handleInputChange={this.handleInputChange} 
            name='password' 
            type='password'
            value={this.state.password} 
            label='Password'
            required/>

          <div className={style.buttons}>
            <Button type="submit" value='submit form'>Sign in</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</Button>
          </div>
          
        </form>
      </div>
    )
  }
};

export default SignIn;