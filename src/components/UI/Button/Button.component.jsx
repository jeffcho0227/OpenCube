import React from 'react';
import style from './Button.module.scss';

const Button = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
  let attachedStyle = [style.custom_button];
  if (isGoogleSignIn) {
    attachedStyle = [style.custom_button, style.isGoogleSignIn].join(' ');
  }

  if (inverted) {
    attachedStyle = [style.custom_button, style.inverted].join(' ');
  }
  return (
    <button className={attachedStyle} {...otherProps}>
      {children}
    </button>
  )
};

export default Button;