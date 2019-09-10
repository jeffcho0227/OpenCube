import React from 'react';

import style from './sign-in-and-sign-up.module.scss';
import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SignUp from '../../components/signUp/signUp.component.jsx';

const SignInAndSignUp = () => {
  return (
    <div className={style.sign_in_and_sign_up}>
      <SignIn />
      <SignUp />
    </div>
  )
};

export default SignInAndSignUp;